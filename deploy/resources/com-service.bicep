param resourceToken string
param dataLocation string
param tags object

resource commService 'Microsoft.Communication/communicationServices@2023-03-31' = {
  name: 'comm-service-${resourceToken}'
  location: 'global'
  tags: tags
  properties: {
    dataLocation: dataLocation
    linkedDomains: [
      emailDomain.id
    ]
  }
}

resource commEmailService 'Microsoft.Communication/emailServices@2023-03-31' = {

  name: 'comm-email-${resourceToken}'
  location: 'global'
  tags: tags
  properties: {
    dataLocation: dataLocation

  }
}

resource emailDomain 'Microsoft.Communication/emailServices/domains@2023-03-31' = {
  parent: commEmailService
  name: 'AzureManagedDomain'
  location: 'global'
  properties: {
    domainManagement: 'AzureManaged'
  }
}

output FromSenderDomain string = emailDomain.properties.fromSenderDomain
