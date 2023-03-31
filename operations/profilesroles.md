# Enterprise profiles roles


## Connecting to your connector client
In order to obtain an access token you must first connect the connector client for your portfolio by following the steps in this [guide](./portfolioconnector.md).

## Get all enterprise profile roles

Returns all roles for a specific enterprise or portfolio. 

### Request

`[PlatformAddress]/api/connector/v1/enterpriseProfileRoles/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
     "RoleIdentifiers": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ExternalIdentifier": "string"
    }
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
| `RoleIdentifiers` | [Role Identifier parameters](#Role-Identifier-parameters) | optional | Specify either Id or ExternalIdentifier of the role.  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of company contract data returned (using cursor pagination). |

### Response

```javascript
{
  "Roles": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Name": "string",
      "Privileges": {
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
      "ExternalIdentifier": "string",
      "CreatedUtc": "string",
      "UpdatedUtc": "string"
    }
  ],
  "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

## Add enterprise profile roles

Adds one or more profile roles for a specific enterprise. 

### Request

`[PlatformAddress]/api/connector/v1/enterpriseProfileRoles/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Roles": [
    {
      "EnterpriseIdentifier": {
        "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "ExternalIdentifier": "string"
      },
      "Privileges": {
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
      "Name": "string",
      "ExternalIdentifier": "string"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Roles` | array of [Roles parameters](#Roles-parameters) | required | Information about the employee profile you want to create |


#### Roles parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `EnterpriseIdentifier` | [Enterprise Identifier parameters](#Enterprise-Identifier-parameters) | required | You must only specify either Id or ExternalIdentifier of your enterprise. |
| `Privileges` | [Privileges parameters](#Privileges-parameters) | required | provide boolean value for specific privileges  |
| `Name` | string | required | the name of the role |
| `ExternalIdentifier` | string | optional | External Identifier of the role (this will be removed in the near future) |

#### Enterprise Identifier parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Id of the enterprise | 
| `ExternalIdentifier` | string | optional | External Identifier of the enterprise (this will be removed in the near future)| 

#### Privileges parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ConfigureEnterprise` | bool | optional | provide true or false value for specific privilege | 
| `ManageServices` | bool | optional | provide true or false value for specific privilege | 
| `ManageResourceCategories` | bool | optional | provide true or false value for specific privilege |
| `ManageProducts` | bool | optional | provide true or false value for specific privilege |
| `ManageBusinessSegments` | bool | optional | provide true or false value for specific privilege |
| `ManageRateGroups` | bool | optional | provide true or false value for specific privilege |
| `ManageProductRules` | bool | optional | provide true or false value for specific privilege |
| `ManageRates` | bool | optional | provide true or false value for specific privilege |
| `ManageRestrictions` | bool | optional | provide true or false value for specific privilege |
| `ManageServiceConfigurations` | bool | optional | provide true or false value for specific privilege |
| `ManageSpaces` | bool | optional | provide true or false value for specific privilege |
| `ManageAccounts` | bool | optional | provide true or false value for specific privilege |
| `ManageCompanyContracts` | bool | optional | provide true or false value for specific privilege |
| `ManageReservations` | bool | optional | provide true or false value for specific privilege |
| `PerformHousekeeping` | bool | optional | provide true or false value for specific privilege |
| `IssueInvoices` | bool | optional | provide true or false value for specific privilege |
| `RebateItems` | bool | optional | provide true or false value for specific privilege |
| `OverbookServices` | bool | optional | provide true or false value for specific privilege |
| `ManageProfiles` | bool | optional | provide true or false value for specific privilege |
| `ChargeCardsOnline` | bool | optional | provide true or false value for specific privilege |
| `ManageInvoiceability` | bool | optional | provide true or false value for specific privilege |
| `ViewSensitiveReports` | bool | optional | provide true or false value for specific privilege |
| `ViewCustomerData` | bool | optional | provide true or false value for specific privilege |
| `ManageAvailability` | bool | optional | provide true or false value for specific privilege |
| `ManageAccountingCategories` | bool | optional | provide true or false value for specific privilege |
| `ManageAccountingConfiguration` | bool | optional | provide true or false value for specific privilege |
| `ManageCounters` | bool | optional | provide true or false value for specific privilege |
| `ManageDepartments` | bool | optional | provide true or false value for specific privilege |
| `ManageOutlets` | bool | optional | provide true or false value for specific privilege |
| `ManageAvailabilityBlockRates` | bool | optional | provide true or false value for specific privilege |
| `ViewCompanyData` | bool | optional | provide true or false value for specific privilege |
| `ManageLoyaltyMemberships` | bool | optional | provide true or false value for specific privilege |



### Response

```javascript
{
  "Roles": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Name": "string",
      "Privileges": {
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
      "ExternalIdentifier": "string",
      "CreatedUtc": "string",
      "UpdatedUtc": "string"
    }
  ],
  "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

## Update enterprise profile roles

Updates one or more profile roles for a specific enterprise.

### Request

`[PlatformAddress]/api/connector/v1/enterpriseProfileRoles/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Roles": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Privileges": {
        "ConfigureEnterprise": {
          "Value": true
        },
        "ManageServices": {
          "Value": true
        },
        "ManageResourceCategories": {
          "Value": true
        },
        "ManageProducts": {
          "Value": true
        },
        "ManageBusinessSegments": {
          "Value": true
        },
        "ManageRateGroups": {
          "Value": true
        },
        "ManageProductRules": {
          "Value": true
        },
        "ManageRates": {
          "Value": true
        },
        "ManageRestrictions": {
          "Value": true
        },
        "ManageServiceConfigurations": {
          "Value": true
        },
        "ManageSpaces": {
          "Value": true
        },
        "ManageCustomers": {
          "Value": true
        },
        "ManageCompanies": {
          "Value": true
        },
        "ManageAccounts": {
          "Value": true
        },
        "ManageCompanyContracts": {
          "Value": true
        },
        "ManageReservations": {
          "Value": true
        },
        "PerformHousekeeping": {
          "Value": true
        },
        "IssueInvoices": {
          "Value": true
        },
        "RebateItems": {
          "Value": true
        },
        "OverbookServices": {
          "Value": true
        },
        "ManageProfiles": {
          "Value": true
        },
        "ChargeCardsOnline": {
          "Value": true
        },
        "ManageInvoiceability": {
          "Value": true
        },
        "ViewSensitiveReports": {
          "Value": true
        },
        "ViewCustomerData": {
          "Value": true
        },
        "ManageAvailability": {
          "Value": true
        },
        "ManageAccountingCategories": {
          "Value": true
        },
        "ManageAccountingConfiguration": {
          "Value": true
        },
        "ManageCounters": {
          "Value": true
        },
        "ManageDepartments": {
          "Value": true
        },
        "ManageOutlets": {
          "Value": true
        },
        "ManageAvailabilityBlockRates": {
          "Value": true
        },
        "ViewCompanyData": {
          "Value": true
        },
        "ManageLoyaltyMemberships": {
          "Value": true
        }
      },
      "Name": {
        "Value": "string"
      },
      "ExternalIdentifier": {
        "Value": "string"
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
| `Roles` | array of [Roles parameters](#Roles-parameters) | required | Information about the employee profile you want to create |


#### Roles parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Id of the role |
| `Privileges` | [Privileges parameters](#Privileges-parameters) | required | provide boolean value for specific privileges  |
| `Name` | string | required | the name of the role |
| `ExternalIdentifier` | string | optional | External Identifier of the role (this will be removed in the near future) |

#### Privileges parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ConfigureEnterprise` | bool | optional | provide true or false value for specific privilege | 
| `ManageServices` | bool | optional | provide true or false value for specific privilege | 
| `ManageResourceCategories` | bool | optional | provide true or false value for specific privilege |
| `ManageProducts` | bool | optional | provide true or false value for specific privilege |
| `ManageBusinessSegments` | bool | optional | provide true or false value for specific privilege |
| `ManageRateGroups` | bool | optional | provide true or false value for specific privilege |
| `ManageProductRules` | bool | optional | provide true or false value for specific privilege |
| `ManageRates` | bool | optional | provide true or false value for specific privilege |
| `ManageRestrictions` | bool | optional | provide true or false value for specific privilege |
| `ManageServiceConfigurations` | bool | optional | provide true or false value for specific privilege |
| `ManageSpaces` | bool | optional | provide true or false value for specific privilege |
| `ManageAccounts` | bool | optional | provide true or false value for specific privilege |
| `ManageCompanyContracts` | bool | optional | provide true or false value for specific privilege |
| `ManageReservations` | bool | optional | provide true or false value for specific privilege |
| `PerformHousekeeping` | bool | optional | provide true or false value for specific privilege |
| `IssueInvoices` | bool | optional | provide true or false value for specific privilege |
| `RebateItems` | bool | optional | provide true or false value for specific privilege |
| `OverbookServices` | bool | optional | provide true or false value for specific privilege |
| `ManageProfiles` | bool | optional | provide true or false value for specific privilege |
| `ChargeCardsOnline` | bool | optional | provide true or false value for specific privilege |
| `ManageInvoiceability` | bool | optional | provide true or false value for specific privilege |
| `ViewSensitiveReports` | bool | optional | provide true or false value for specific privilege |
| `ViewCustomerData` | bool | optional | provide true or false value for specific privilege |
| `ManageAvailability` | bool | optional | provide true or false value for specific privilege |
| `ManageAccountingCategories` | bool | optional | provide true or false value for specific privilege |
| `ManageAccountingConfiguration` | bool | optional | provide true or false value for specific privilege |
| `ManageCounters` | bool | optional | provide true or false value for specific privilege |
| `ManageDepartments` | bool | optional | provide true or false value for specific privilege |
| `ManageOutlets` | bool | optional | provide true or false value for specific privilege |
| `ManageAvailabilityBlockRates` | bool | optional | provide true or false value for specific privilege |
| `ViewCompanyData` | bool | optional | provide true or false value for specific privilege |
| `ManageLoyaltyMemberships` | bool | optional | provide true or false value for specific privilege |


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

## Delete enterprise profile roles

Deletes one or more profile roles for a specific enterprise.

### Request

`[PlatformAddress]/api/connector/v1/enterpriseProfileRoles/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
     "RoleIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RoleIds` | array | required | Ids of the roles you want to delete | 

### Response

```javascript
{}
```
