@minLength(1)
@maxLength(64)
@description('Name of the the environment which is used to generate a short unqiue hash used in all resources.')
param name string

@minLength(1)
@description('Primary location for all resources')
param location string

param imageName string

param cmsUrl string
param cmsDaprId string

var resourceToken = toLower(uniqueString(subscription().id, name, location))
var tags = {
  'azd-env-name': name
}

resource containerAppsEnvironment 'Microsoft.App/managedEnvironments@2022-03-01' existing = {
  name: 'cae-${resourceToken}'
}

resource containerRegistry 'Microsoft.ContainerRegistry/registries@2022-02-01-preview' existing = {
  name: 'contreg${resourceToken}'
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' existing = {
  name: 'appi-${resourceToken}'
}

resource checkout 'Microsoft.App/containerApps@2022-03-01' = {
  name: 'shop-app-ui'
  location: location
  tags: union(tags, {
      'azd-service-name': 'shop-app-ui'
    })
  properties: {
    managedEnvironmentId: containerAppsEnvironment.id
    configuration: {
      activeRevisionsMode: 'single'
      dapr: {
        enabled: true
        appId: 'shop-app-ui'
        appProtocol: 'http'
      }
      ingress: {
        external:true
        targetPort:3000
        transport: 'auto'
      }
      secrets: [
        {
          name: 'registry-password'
          value: containerRegistry.listCredentials().passwords[0].value
        }
      ]
      registries: [
        {
          server: '${containerRegistry.name}.azurecr.io'
          username: containerRegistry.name
          passwordSecretRef: 'registry-password'
        }
      ]
    }
    template: {
      containers: [
        {
          image: imageName
          name: 'shop-app-ui'
          env: [
            {
              name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
              value: appInsights.properties.InstrumentationKey
            }
            {
              name: 'CMS_API'
              value: 'http://localhost:3500/v1.0/invoke/${cmsDaprId}/method' 
            }
            {
              name: 'IMAGE_API'
              value: '${cmsUrl}/api/files' 
            }
            {
              name: 'PUB_SUB_NAME'
              value: 'servicebus-queue' 
            }
            {
              name: 'PUB_SUB_TOPIC'
              value: 'order' 
            }
          ]
        }
      ]
      scale: {
        minReplicas: 1
        maxReplicas: 10
      }
    }
  }
}
