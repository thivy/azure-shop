targetScope = 'subscription'

@minLength(1)
@maxLength(64)
@description('Name of the the environment which is used to generate a short unqiue hash used in all resources.')
param name string

@minLength(1)
@description('Primary location for all resources')
param location string

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: '${name}-rg'
  location: location
}

var resourceToken = toLower(uniqueString(subscription().id, name, location))
var tags = {
  'azd-env-name': name
}

module resources 'resources.bicep' = {
  name: 'resources-${resourceToken}'
  scope: resourceGroup
  params: {
    name: name
    location: location
    resourceToken: resourceToken
    shopUIImageName: ''
    shopCMSImageName: ''
    shopEmailRenderImageName: ''
    shopOrderTriggerImageName: ''
    tags: tags
  }
}
