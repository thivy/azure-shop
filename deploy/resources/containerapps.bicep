param location string
param resourceToken string
param tags object


resource servicebus 'Microsoft.ServiceBus/namespaces@2021-11-01' existing = {
  name: 'sb-${resourceToken}'
}

resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2021-06-01' existing = {
  name: 'log-${resourceToken}'
}

resource containerAppsEnvironment 'Microsoft.App/managedEnvironments@2022-03-01' = {
  name: 'cae-${resourceToken}'
  location: location
  tags: tags
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalyticsWorkspace.properties.customerId
        sharedKey: logAnalyticsWorkspace.listKeys().primarySharedKey
      }
    }
  }

  resource daprComponent 'daprComponents' = {
    name: 'servicebus-queue'
    properties: {
      componentType: 'pubsub.azure.servicebus'
      version: 'v1'
      secrets: [
        {
          name: 'sb-root-connectionstring'
          value: '${listKeys('${servicebus.id}/AuthorizationRules/RootManageSharedAccessKey', servicebus.apiVersion).primaryConnectionString};EntityPath=orders'
        }
      ]
      metadata: [
        {
          name: 'connectionString'
          secretRef: 'sb-root-connectionstring'
        }
      ]
      scopes: [
        'shop-app-ui'
      ]
    }
  }
}

resource containerRegistry 'Microsoft.ContainerRegistry/registries@2022-02-01-preview' = {
  name: 'contreg${resourceToken}'
  location: location
  tags: tags
  sku: {
    name: 'Basic'
  }
  properties: {
    adminUserEnabled: true
    anonymousPullEnabled: false
    dataEndpointEnabled: false
    encryption: {
      status: 'disabled'
    }
    networkRuleBypassOptions: 'AzureServices'
    publicNetworkAccess: 'Enabled'
    zoneRedundancy: 'Disabled'
  }
}


output AZURE_CONTAINER_REGISTRY_ENDPOINT string = containerRegistry.properties.loginServer
output AZURE_CONTAINER_REGISTRY_NAME string = containerRegistry.name