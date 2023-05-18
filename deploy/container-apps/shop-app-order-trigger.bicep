@minLength(1)
@maxLength(64)
@description('Name of the the environment which is used to generate a short unqiue hash used in all resources.')
param name string

@minLength(1)
@description('Primary location for all resources')
param location string

param imageName string
param daprEmailRenderId string

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

resource servicebus 'Microsoft.ServiceBus/namespaces@2021-11-01' existing = {
  name: 'sb-${resourceToken}'
}

resource comService 'Microsoft.Communication/communicationServices@2023-03-31' existing = {
  name: 'comm-service-${resourceToken}'
}

resource checkout 'Microsoft.App/containerApps@2022-03-01' = {
  name: 'shop-app-order-trigger'
  location: location
  tags: union(tags, {
      'azd-service-name': 'order-trigger'
    })
  properties: {
    managedEnvironmentId: containerAppsEnvironment.id
    configuration: {
      activeRevisionsMode: 'single'
      dapr: {
        enabled: true
        appId: 'shop-app-order-trigger'
        appProtocol: 'http'
      }
      secrets: [
        {
          name: 'registry-password'
          value: containerRegistry.listCredentials().passwords[0].value
        }
        {
          name: 'sb-root-connectionstring'
          value: '${listKeys('${servicebus.id}/AuthorizationRules/RootManageSharedAccessKey', servicebus.apiVersion).primaryConnectionString}'
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
          name: 'shop-app-order-trigger'
          env: [
            {
              name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
              value: appInsights.properties.InstrumentationKey
            }
            {
              name:'FUNCTIONS_WORKER_RUNTIME'
              value:'dotnet-isolated'
            }
            {
              name:'connectionstring'
              value:'${listKeys('${servicebus.id}/AuthorizationRules/RootManageSharedAccessKey', servicebus.apiVersion).primaryConnectionString}'
            }
            {
              name:'AZURE_COMMUNICATION_CONNECTION'
              value:'${listKeys('${comService.id}/AuthorizationRules/RootManageSharedAccessKey', comService.apiVersion).primaryConnectionString}'
            }
            {
              name:'AZURE_COMMUNICATION_SENDER_EMAIL'
              value:'donotreply@210c89ee-6bc0-499e-b797-a975a60fe0cc.azurecomm.net'
            }
            {
              name:'ORDER_EMAIL_TEMPLATE_API'
              value:'http://localhost:3500/v1.0/invoke/${daprEmailRenderId}/method/email/order'
            }
          ]
        }
      ]
      scale: {
        minReplicas: 0
        maxReplicas: 10
        rules:[
          {
            name:'sb-queue-based-scaling'
            custom:{
              type: 'azure-servicebus'
              metadata:{
                queueName: 'order'
                messageCount: '5'
                connectionFromEnv:'sb-root-connectionstring'
              }
              auth: [
                {
                  secretRef: 'sb-root-connectionstring'
                  triggerParameter: 'connection'
                }
              ]
            }
          }
        ]
      }
    }
  }
}
