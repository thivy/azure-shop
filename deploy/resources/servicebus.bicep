param name string
param location string
param skuName string = 'Basic'
param topicName string = 'order'
param tags object


resource serviceBusNamespace 'Microsoft.ServiceBus/namespaces@2021-11-01' = {
  name: name
  location: location
  tags: tags
  sku: {
    name: skuName
    tier: skuName
  }

  resource queue 'queues' = {
    name: topicName
    properties: {
      deadLetteringOnMessageExpiration: true
      maxDeliveryCount: 3
    }
  }

}

output SERVICEBUS_ENDPOINT string = serviceBusNamespace.properties.serviceBusEndpoint
