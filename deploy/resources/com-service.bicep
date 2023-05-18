param resourceToken string
param location string
param tags object

resource commService 'Microsoft.Communication/communicationServices@2023-03-31' = {
  name: 'comm-service-${resourceToken}'
  location: 'global'
  tags: tags
  properties: {
    dataLocation:'australia'
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
    dataLocation:'australia'
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


