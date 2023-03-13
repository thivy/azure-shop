param location string = resourceGroup().location


var appname = 'demo-shop-app'

var environmentName = '${appname}-env'

var appInsightsResName = '${appname}-ai'
var logAnalyticsWorkspaceResName = '${appname}-logs'
var serviceBusResName = appname 

module primaryResources 'primaryResources.bicep' = {
  dependsOn: []
  name: '${deployment().name}--primaryResources'
  params: {
    location: location
    logAnalyticsWorkspaceResName: logAnalyticsWorkspaceResName
    appInsightsResName: appInsightsResName
    serviceBusResName: serviceBusResName
  }
}

//Reference to AppInsights resource
resource appInsightsResource 'Microsoft.Insights/components@2020-02-02' existing = {
  name: appInsightsResName
}

//Reference to LogAnalytics resource
resource logAnalyticsWorkspaceResource 'Microsoft.OperationalInsights/workspaces@2021-06-01' existing = {
  name: logAnalyticsWorkspaceResName
}

//Reference to ServiceBus resource
resource serviceBusResource 'Microsoft.ServiceBus/namespaces@2021-11-01' existing = {
  name: serviceBusResName
}


//Build Svc Bus Connection String
var listKeysEndpoint = '${serviceBusResource.id}/AuthorizationRules/RootManageSharedAccessKey'
var sharedAccessKey = '${listKeys(listKeysEndpoint, serviceBusResource.apiVersion).primaryKey}'
var serviceBusConStringValue = 'Endpoint=sb://${serviceBusResName}.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=${sharedAccessKey}'

// Container Apps Environment 
module environment 'acaEnvironment.bicep' = {
  dependsOn: [
    primaryResources
  ]
  name: '${deployment().name}--acaenvironment'
  params: {
    acaEnvironmentName: environmentName
    location: location
    instrumentationKey: appInsightsResource.properties.InstrumentationKey
    logAnalyticsWorkspaceCustomerId: primaryResources.outputs.logAnalyticsWorkspaceCustomerId
    logAnalyticsWorkspacePrimarySharedKey: listKeys(logAnalyticsWorkspaceResource.id, logAnalyticsWorkspaceResource.apiVersion).primarySharedKey
  }
}
