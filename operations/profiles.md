# Enterprise profiles

## Connecting to your connector client
In order to obtain an access token you must first connect the connector client for your portfolio by following the steps in this [guide](./portfolioconnector.md).

## Get all enterprise profiles

Returns all employee profiles for a specific enterprise or portfolio. 

### Request

`[PlatformAddress]/api/connector/v1/enterpriseProfiles/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
     "Extent": {
    "EnterpriseProfiles": true,
    "EnterpriseProfileRoleAssignment": true,
    "Users": true
  },
  "EnterpriseIdentifiers": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ExternalIdentifier": "string"
    }
  ],
  "ProfileIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
Ex  ],
  "Emails": [
    "string"
  ],
  "Limitation": {
    "Count": 0,
    "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of company contract data returned (using cursor pagination). |
| `Extent` | profile extent | required | Extent of data to be returned.|
| `EnterpriseIdentifiers` | [Enterprise Identifiers parameters](#Enterprise-Identifiers-parameters) | optional |Specify Id or External Identifier of an enterprise  |
| `ProfileIds` | array of string | optional | Id of the employee profile |
| `Emails` | string | optional | email of the employee profile |

#### Enterprise Identifiers parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | optional | Id of the enterprise | 
| `ExternalIdentifier` | string | optional | External Identifier of the enterprise (this will be removed in the near future)| 

### Response

```javascript
{
    {
  "EnterpriseProfiles": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Email": "user@example.com",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "UserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "DepartmentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "SuperiorEmployeeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IsAdmin": true,
      "Options": {
        "ReceiveCustomerMessages": true
      },
      "IndividualPrivileges": {
        "ConfigureEnterprise": true,
        "ManageServices": true,
        "ManageResourceCategories": true,
        "ManageProducts": true,
        "ManageBusinessSegments": true,
        "ManageRateGroups": true,
        "ManageProductRules": true,
        "ManageRates": true,
        "ManageRestrictions": true,
        "ManageServiceConfigurations": true,
        "ManageSpaces": true,
        "ManageAccounts": true,
        "ManageCompanyContracts": true,
        "ManageReservations": true,
        "PerformHousekeeping": true,
        "IssueInvoices": true,
        "RebateItems": true,
        "OverbookServices": true,
        "ManageProfiles": true,
        "ChargeCardsOnline": true,
        "ManageInvoiceability": true,
        "ViewSensitiveReports": true,
        "ViewCustomerData": true,
        "ManageAvailability": true,
        "ManageAccountingCategories": true,
        "ManageAccountingConfiguration": true,
        "ManageCounters": true,
        "ManageDepartments": true,
        "ManageOutlets": true,
        "ManageAvailabilityBlockRates": true,
        "ViewCompanyData": true,
        "ManageLoyaltyMemberships": true
      },
      "CreatedUtc": "2023-03-30T11:37:07.526Z"
    }
  ],
  "Users": [
    {
      "FirstName": "string",
      "LastName": "string",
      "ImageUrl": "string",
      "Email": "user@example.com",
      "LastSuccessfulSignInUtc": "2023-03-30T11:37:07.526Z"
    }
  ],
  "EnterpriseProfileRoleAssignments": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ProfileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "RoleId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  ],
  "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

## Add enterprise profiles

Adds one or more employee profiles for a specific enterprise or portfolio. 

### Request

`[PlatformAddress]/api/connector/v1/enterpriseProfiles/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseProfiles": [
    {
      "Email": "user@example.com",
      "EnterpriseIdentifier": {
        "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "ExternalIdentifier": "string"
      },
      "SuperiorProfileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "DepartmentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "RoleIdentifiers": [
        {
          "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "ExternalIdentifier": "string"
        }
      ],
      "AssignedLearningPath": "FrontOfficeAgent",
      "IsAdmin": true
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseProfiles` | array of [Enterprise Profiles parameters](#Enterprise-Profiles-parameters) | required | Information about the employee profile you want to create |


#### Enterprise Profiles parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Email` | string | required | email for the employee profile | 
| `EnterpriseIdentifier` | [Enterprise Identifier parameters](#Enterprise-Identifier-parameters) | required | You must only specify either Id or ExternalIdentifier of your enterprise. |
| `SuperiorProfileId` | string | optional | Existing profile Id that you want the newly created profile to come under|
| `DepartmentId` | string | optional | Id of the department |
| `RoleIdentifiers` | [Role Identifier parameters](#Role-Identifier-parameters) | optional | Specify either Id or ExternalIdentifier of the role.  |
| `AssignedLearningPath` | string | required | Specify a learning path for the new employee profile |
| `IsAdmin` | bool | optional | specify true or false value |

#### Enterprise Identifier parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Id of the enterprise | 
| `ExternalIdentifier` | string | optional | External Identifier of the enterprise (this will be removed in the near future)| 

#### Role Identifier parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | optional | Id of the role | 
| `ExternalIdentifier` | optional | required | External Identifier of the role (this will be removed in the near future)| 

### Response

```javascript
{
  "EnterpriseProfiles": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Email": "user@example.com",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "UserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "DepartmentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "SuperiorEmployeeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IsAdmin": true,
      "Options": {
        "ReceiveCustomerMessages": true
      },
      "IndividualPrivileges": {
        "ConfigureEnterprise": true,
        "ManageServices": true,
        "ManageResourceCategories": true,
        "ManageProducts": true,
        "ManageBusinessSegments": true,
        "ManageRateGroups": true,
        "ManageProductRules": true,
        "ManageRates": true,
        "ManageRestrictions": true,
        "ManageServiceConfigurations": true,
        "ManageSpaces": true,
        "ManageAccounts": true,
        "ManageCompanyContracts": true,
        "ManageReservations": true,
        "PerformHousekeeping": true,
        "IssueInvoices": true,
        "RebateItems": true,
        "OverbookServices": true,
        "ManageProfiles": true,
        "ChargeCardsOnline": true,
        "ManageInvoiceability": true,
        "ViewSensitiveReports": true,
        "ViewCustomerData": true,
        "ManageAvailability": true,
        "ManageAccountingCategories": true,
        "ManageAccountingConfiguration": true,
        "ManageCounters": true,
        "ManageDepartments": true,
        "ManageOutlets": true,
        "ManageAvailabilityBlockRates": true,
        "ViewCompanyData": true,
        "ManageLoyaltyMemberships": true
      },
      "CreatedUtc": "2023-03-30T16:22:19.578Z"
    }
  ],
  "Users": [
    {
      "FirstName": "string",
      "LastName": "string",
      "ImageUrl": "string",
      "Email": "user@example.com",
      "LastSuccessfulSignInUtc": "2023-03-30T16:22:19.578Z"
    }
  ],
  "EnterpriseProfileRoleAssignments": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ProfileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "RoleId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  ],
  "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

## Update enterprise profiles

Updates one or more employee profiles. 

### Request

`[PlatformAddress]/api/connector/v1/companyContracts/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseProfileUpdates": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "SuperiorProfileId": {
        "Value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      },
      "DepartmentId": {
        "Value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      },
      "RoleIdentifiers": {
        "Value": [
          {
            "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "ExternalIdentifier": "string"
          }
        ]
      },
      "AssignedLearningPath": "FrontOfficeAgent",
      "IsAdmin": {
        "Value": true
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseProfileUpdates` | array of [Enterprise Profiles Update parameters](#Enterprise-Profiles-parameters) | required | Properties of existing employee profile you want to update |


#### Enterprise Profile Update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Id of the employee profile | 
| `SuperiorProfileId` | string | optional | Existing profile Id that you want the existing employee profile to come under|
| `DepartmentId` | string | optional | Id of the department |
| `RoleIdentifiers` | [Role Identifier parameters](#Role-Identifier-parameters) | optional | Specify either Id or ExternalIdentifier of the role.  |
| `AssignedLearningPath` | string | required | Specify a learning path for the new employee profile |
| `IsAdmin` | bool | optional | specify true or false value |

#### Role Identifier parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | optional | Id of the role | 
| `ExternalIdentifier` | string | optional | External Identifier of the role (this will be removed in the near future)| 


### Response

```javascript
{
  "EnterpriseProfiles": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Email": "user@example.com",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "UserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "DepartmentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "SuperiorEmployeeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IsAdmin": true,
      "Options": {
        "ReceiveCustomerMessages": true
      },
      "IndividualPrivileges": {
        "ConfigureEnterprise": true,
        "ManageServices": true,
        "ManageResourceCategories": true,
        "ManageProducts": true,
        "ManageBusinessSegments": true,
        "ManageRateGroups": true,
        "ManageProductRules": true,
        "ManageRates": true,
        "ManageRestrictions": true,
        "ManageServiceConfigurations": true,
        "ManageSpaces": true,
        "ManageAccounts": true,
        "ManageCompanyContracts": true,
        "ManageReservations": true,
        "PerformHousekeeping": true,
        "IssueInvoices": true,
        "RebateItems": true,
        "OverbookServices": true,
        "ManageProfiles": true,
        "ChargeCardsOnline": true,
        "ManageInvoiceability": true,
        "ViewSensitiveReports": true,
        "ViewCustomerData": true,
        "ManageAvailability": true,
        "ManageAccountingCategories": true,
        "ManageAccountingConfiguration": true,
        "ManageCounters": true,
        "ManageDepartments": true,
        "ManageOutlets": true,
        "ManageAvailabilityBlockRates": true,
        "ViewCompanyData": true,
        "ManageLoyaltyMemberships": true
      },
      "CreatedUtc": "2023-03-30T17:41:33.885Z"
    }
  ],
  "Users": [
    {
      "FirstName": "string",
      "LastName": "string",
      "ImageUrl": "string",
      "Email": "user@example.com",
      "LastSuccessfulSignInUtc": "2023-03-30T17:41:33.885Z"
    }
  ],
  "EnterpriseProfileRoleAssignments": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ProfileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "RoleId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  ],
  "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

## Delete enterprise profiles

Deletes one or more employee profiles. 

### Request

`[PlatformAddress]/api/connector/v1/enterpriseProfiles/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Ids": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Id` | string | required | Id of the employee profile | 

### Response

```javascript
{}
```
