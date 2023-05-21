param name string
param commServiceEmailName string
param dataLocation string

resource commService 'Microsoft.Communication/communicationServices@2023-03-31' = {
  name: name
  location: 'global'
  properties: {
    dataLocation: dataLocation
    linkedDomains: [
      emailDomain.id
    ]
  }
}

resource commEmailService 'Microsoft.Communication/emailServices@2023-03-31' = {
  name: commServiceEmailName
  location: 'global'
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
