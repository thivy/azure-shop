param name string
param location string
param dataLocation string
param resourceToken string
param tags object
param shopUIImageName string = ''
param shopCMSImageName string = ''
param shopEmailRenderImageName string = ''
param shopOrderTriggerImageName string = ''

module containerAppsResources 'resources/containerapps.bicep' = {
  name: 'containerapps-resources'
  params: {
    location: location
    tags: tags
    resourceToken: resourceToken
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
    location: location
    tags: tags
    resourceToken: resourceToken
    skuName: 'Standard'
  }
}

module appInsightsResources './resources/appinsights.bicep' = {
  name: 'appinsights-resources'
  params: {
    location: location
    tags: tags
    resourceToken: resourceToken
  }
}

module shopAppUIResources 'container-apps/shop-app-ui.bicep' = {
  name: 'shop-app-ui-resources'
  params: {
    name: name
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
    name: name
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
    name: name
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
    name: name
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
    location: location
    tags: tags
    resourceToken: resourceToken
  }
}


module shopAppEmailResources 'resources/com-service.bicep' = {
  name: 'shop-app-email-resources'
  params: {
    dataLocation: dataLocation
    resourceToken: resourceToken
    tags: tags
  }
}
