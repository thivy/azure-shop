param name string
param location string
param dataLocation string
param resourceToken string
param tags object
param shopUIImageName string = ''
param shopCMSImageName string = ''
param shopEmailRenderImageName string = ''
param shopOrderTriggerImageName string = ''

var containerAppEnvName = '${name}-app-env-${resourceToken}'
var containerRegistryName = '${replace(name, '-', '')}registry${resourceToken}'
var logAnalyticName = '${name}-log-${resourceToken}'
var appInsightsName = '${name}-app-insights-${resourceToken}'

var serviceBusName = '${name}-service-bus-${resourceToken}'

// Communication Services
var communicationServicesName = '${name}-comm-service-${resourceToken}'
var communicationServicesEmailName = '${name}-comm-service-email-${resourceToken}'

var containerAppShopAppUIName = '${name}-ui'
var containerAppShopAppCMSName = '${name}-cms'
var containerAppShopAppEmailRenderName = '${name}-email-render'
var containerAppShopAppOrderTriggerName = '${name}-order-trigger'

module containerAppsResources 'resources/containerapps.bicep' = {
  name: 'containerapps-resources'
  params: {
    name: containerAppEnvName
    containerRegistryName: containerRegistryName
    containerAppShopAppUIName: containerAppShopAppUIName
    servicebusName: serviceBusName
    logAnalyticName: logAnalyticName
    appInsightsName: appInsightsName
    location: location
    tags: tags
  }

  dependsOn: [
    serviceBusResources
    logAnalyticsResources
    shopAppEmailResources
    appInsightsResources
  ]
}

module serviceBusResources 'resources/servicebus.bicep' = {
  name: 'sb-resources'
  params: {
    name: serviceBusName
    location: location
    tags: tags
    skuName: 'Standard'
  }
}

module appInsightsResources './resources/appinsights.bicep' = {
  name: 'appinsights-resources'
  params: {
    name: appInsightsName
    location: location
    tags: tags
  }
}

module shopAppUIResources 'container-apps/shop-app-ui.bicep' = {
  name: 'shop-app-ui-resources'
  params: {
    name: containerAppShopAppUIName
    appInsightsName: appInsightsName
    containerAppEnvName: containerAppEnvName
    containerRegistryName: containerRegistryName
    location: location
    imageName: shopUIImageName != '' ? shopUIImageName : 'nginx:latest'
    cmsUrl:shopAppCMSResources.outputs.CMS_URL
    cmsDaprId:shopAppCMSResources.outputs.CMS_DAPR_ID
  }
  dependsOn: [
    containerAppsResources
    appInsightsResources
    serviceBusResources
  ]
}


module shopAppCMSResources 'container-apps/shop-app-cms.bicep' = {
  name: 'shop-app-cms-resources'
  params: {
    name: containerAppShopAppCMSName
    appInsightsName: appInsightsName
    containerAppEnvName: containerAppEnvName
    containerRegistryName: containerRegistryName
    location: location
    imageName: shopCMSImageName != '' ? shopCMSImageName : 'nginx:latest'
  }
  dependsOn: [
    containerAppsResources
    appInsightsResources
    serviceBusResources
  ]
}

module shopAppEmailRenderResources 'container-apps/shop-app-email-render.bicep' = {
  name: 'shop-app-email-render-resources'
  params: {
    name: containerAppShopAppEmailRenderName
    appInsightsName: appInsightsName
    containerAppEnvName: containerAppEnvName
    containerRegistryName: containerRegistryName
    location: location
    imageName: shopEmailRenderImageName != '' ? shopEmailRenderImageName : 'nginx:latest'
    cmsDaprId: shopAppCMSResources.outputs.CMS_DAPR_ID
  }
  dependsOn: [
    containerAppsResources
    appInsightsResources
    serviceBusResources
  ]
}

module shopAppOrderTriggerResources 'container-apps/shop-app-order-trigger.bicep' = {
  name: 'shop-app-order-trigger-resources'
  params: {
    name: containerAppShopAppOrderTriggerName
    appInsightsName: appInsightsName
    communicationServicesName: communicationServicesName
    containerAppEnvName: containerAppEnvName
    containerRegistryName: containerRegistryName
    serviceBusName: serviceBusName
    location: location
    imageName: shopOrderTriggerImageName != '' ? shopOrderTriggerImageName : 'nginx:latest'
    daprEmailRenderId:shopAppEmailRenderResources.outputs.EMAIL_DAPR_ID
    fromSenderEmailDomain: shopAppEmailResources.outputs.FromSenderDomain
  }
  dependsOn: [
    containerAppsResources
    appInsightsResources
    serviceBusResources
  ]
}


module logAnalyticsResources 'resources/loganalytics.bicep' = {
  name: 'loganalytics-resources'
  params: {
    name: logAnalyticName
    location: location
  }
}


module shopAppEmailResources 'resources/com-service.bicep' = {
  name: 'shop-app-email-resources'
  params: {
    name: communicationServicesName
    dataLocation: dataLocation
    commServiceEmailName: communicationServicesEmailName
  }
}
