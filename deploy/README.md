## Introduction
Deploy the resources to azure using main.bicep

Setup the following secrets on GitHub 

`use the following to create the SHOPAPP_AZURE_CREDENTIALS secret value 
az ad sp create-for-rbac --name <NAME OF THE CREDENTIAL> --role contributor --scopes /subscriptions/<SUBSCRIPTION ID>/resourceGroups/<NAME OF THE RESOURCE GROUP> --sdk-auth --output json`

SHOPAPP_AZURE_CREDENTIALS 
  
SHOPAPP_NAME 
  
SHOPAPP_REGISTRY_PASSWORD 
  
SHOPAPP_REGISTRY_URL
  
SHOPAPP_REGISTRY_USERNAME
  
SHOPAPP_RESOURCE_GROUP
