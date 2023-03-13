
param location string = resourceGroup().location
param serviceBusResName string 
param logAnalyticsWorkspaceResName string 
param appInsightsResName string 


// Servicebus
module serviceBus 'serviceBus.bicep' = {
  name: '${deployment().name}--serviceBus'
  params: {
    serviceBusName: serviceBusResName
    location: location
  }
}


//logAnalyticsWorkspace
module logAnalyticsWorkspace 'logAnalyticsWorkspace.bicep' = {
  name: '${deployment().name}--logAnalyticsWorkspace'
  params: {
    logAnalyticsWorkspaceName: logAnalyticsWorkspaceResName
    location: location
  }
}

//AppInsights
module appInsights 'appInsights.bicep' = {
  name: '${deployment().name}--appInsights'
  params: {
    appInsightsName: appInsightsResName
    location: location
    workspaceResourceId: logAnalyticsWorkspace.outputs.workspaceResourceId
  }
}

output logAnalyticsWorkspaceCustomerId string = logAnalyticsWorkspace.outputs.logAnalyticsWorkspaceCustomerId
