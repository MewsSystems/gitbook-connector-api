# Accounts

## Update accounts

Updates one or more existing accounts in the system. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/accounts/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "AccountUpdates": [
    {
      "Id": "3ff104e6-3ba8-4dfc-8d35-b0ec00c5fd4c",
      "Discriminator": "Company",
      "Customer": null,
      "Company": {
        "Email": {
          "Value": "example@example.com"
        },
        "TaxIdentifier": {
          "Value": "CZ8810310963"
        },
        "BillingCode": {
          "Value": null
        },
        "AccountingCode": {
          "Value": null
        },
        "Notes": {
          "Value": "Example notes"
        },
        "Name": {
          "Value": "Example company"
        },
        "MotherCompanyId": {
          "Value": "839e9d92-aa8b-48bf-8384-b0ec0081bb34"
        },
        "WebsiteUrl": {
          "Value": "https://www.example.com"
        },
        "InvoiceDueInterval": {
          "Value": null
        },
        "CreditRatingBasic": {
          "Value": "CreditOk"
        },
        "Department": {
          "Value": "Accounting"
        },
        "DunsNumber": {
          "Value": "987654321"
        },
        "ReferenceId": {
          "Value": null
        },
        "ExternalIdentifier": {
          "Value": "COM-123"
        },
        "AdditionalTaxIdentifier": {
          "Value": "XY00112233445"
        },
        "Contact": {
          "Value": "Sample contact"
        },
        "ContactPerson": {
          "Value": "Sample person"
        },
        "FiscalIdentifier": {
          "Value": "FiscalIdentifier"
        },
        "Iata": {
          "Value": "PAO"
        },
        "Telephone": {
          "Value": "111-222-333"
        },
        "SourceId": {
          "Value": "F42098A0-8507-4963-ACC9-B0EC00821949"
        },
        "Classifications": {
          "Corporate": {
            "Value": true
          },
          "Internal": {
            "Value": true
          },
          "Private": {
            "Value": true
          },
          "OnlineTravelAgency": {
            "Value": true
          },
          "GlobalDistributionSystem": {
            "Value": true
          },
          "Marketing": {
            "Value": true
          },
          "Inactive": {
            "Value": true
          }
        },
        "Options": {
          "Invoiceable": {
            "Value": "true"
          },
          "AddFeesToInvoices": {
            "Value": "true"
          }
        }
      }
    },
    {
      "Id": "71db411f-c1d6-4e1c-9cd7-44e8bf45f936",
      "Discriminator": "Customer",
      "Company": null,
      "Customer": {
        "Email": {
          "Value": "example@example.com"
        },
        "TaxIdentifier": {
          "Value": "CZ8810310963"
        },
        "BillingCode": {
          "Value": null
        },
        "AccountingCode": {
          "Value": null
        },
        "Notes": {
          "Value": "Example notes"
        },
        "LastName": {
          "Value": "Sample"
        },
        "FirstName": {
          "Value": "Sample"
        },
        "SecondLastName": {
          "Value": null
        },
        "BirthPlace": {
          "Value": "Sample place"
        },
        "Telephone": {
          "Value": "111-222-333"
        },
        "Occupation": {
          "Value": null
        },
        "CarRegistrationNumber": {
          "Value": null
        },
        "LoyaltyCode": {
          "Value": null
        },
        "NationalityCode": {
          "Value": "US"
        },
        "CompanyId": {
          "Value": "839e9d92-aa8b-48bf-8384-b0ec0081bb34"
        },
        "BirthDate": {
          "Value": "2000-01-01"
        },
        "Sex": {
          "Value": "Male"
        },
        "Title": {
          "Value": "Mister"
        },
        "PreferredLanguageCode": {
          "Value": null
        },
        "Options": {
          "SendMarketingEmails": {
            "Value": true
          },
          "Invoiceable": {
            "Value": true
          },
          "BillAddressObjection": {
            "Value": true
          }
        },
        "Classifications": {
          "PaymasterAccount": {
            "Value": true
          },
          "Blacklist": {
            "Value": true
          },
          "Media": {
            "Value": true
          },
          "LoyaltyProgram": {
            "Value": true
          },
          "PreviousComplaint": {
            "Value": true
          },
          "Returning": {
            "Value": true
          },
          "Staff": {
            "Value": true
          },
          "FriendOrFamily": {
            "Value": true
          },
          "TopManagement": {
            "Value": true
          },
          "Important": {
            "Value": true
          },
          "VeryImportant": {
            "Value": true
          },
          "Problematic": {
            "Value": true
          },
          "Cashlist": {
            "Value": true
          },
          "DisabledPerson": {
            "Value": true
          },
          "Military": {
            "Value": true
          },
          "Airline": {
            "Value": true
          },
          "HealthCompliant": {
            "Value": true
          },
          "InRoom": {
            "Value": true
          },
          "WaitingForRoom": {
            "Value": true
          },
          "Student": {
            "Value": true
          }
        },
        "LegalEntityIdentifiers": {
          "ItDestinationCode": {
            "Value": null
          },
          "ItFiscalCode": {
            "Value": null
          }
        }
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `ChainId` | string | optional |  |
| `AccountUpdates` | array of [AccountUpdateParameters](#AccountUpdateParameters) | required, max 1000 items | Accounts to be updated. |

#### AccountUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `Discriminator` | string | optional |  |
| `Customer` | object | required |  |
| `Company` | object | required |  |

#### AccountCustomerUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Email` | object | required |  |
| `TaxIdentifier` | object | required |  |
| `BillingCode` | object | required |  |
| `AccountingCode` | object | required |  |
| `Notes` | object | required |  |
| `LastName` | object | required |  |
| `FirstName` | object | required |  |
| `SecondLastName` | object | required |  |
| `BirthPlace` | object | required |  |
| `Telephone` | object | required |  |
| `Occupation` | object | required |  |
| `CarRegistrationNumber` | object | required |  |
| `LoyaltyCode` | object | required |  |
| `NationalityCode` | object | required |  |
| `CompanyId` | object | required |  |
| `BirthDate` | object | required |  |
| `Sex` | object | required |  |
| `Title` | object | required |  |
| `PreferredLanguageCode` | object | required |  |
| `Options` | object | required |  |
| `Classifications` | object | required |  |
| `LegalEntityIdentifiers` | object | required |  |

#### CustomerOptionUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SendMarketingEmails` | object | required |  |
| `Invoiceable` | object | required |  |
| `BillAddressObjection` | object | required |  |

#### CustomerClassificationUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymasterAccount` | object | required |  |
| `Blacklist` | object | required |  |
| `Media` | object | required |  |
| `LoyaltyProgram` | object | required |  |
| `PreviousComplaint` | object | required |  |
| `Returning` | object | required |  |
| `Staff` | object | required |  |
| `FriendOrFamily` | object | required |  |
| `TopManagement` | object | required |  |
| `Important` | object | required |  |
| `VeryImportant` | object | required |  |
| `Problematic` | object | required |  |
| `Cashlist` | object | required |  |
| `DisabledPerson` | object | required |  |
| `Military` | object | required |  |
| `Airline` | object | required |  |
| `HealthCompliant` | object | required |  |
| `InRoom` | object | required |  |
| `WaitingForRoom` | object | required |  |
| `Student` | object | required |  |

#### LegalEntityIdentifierUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ItDestinationCode` | object | required |  |
| `ItFiscalCode` | object | required |  |

#### AccountCompanyUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Email` | object | required |  |
| `TaxIdentifier` | object | required |  |
| `BillingCode` | object | required |  |
| `AccountingCode` | object | required |  |
| `Notes` | object | required |  |
| `Name` | object | required |  |
| `MotherCompanyId` | object | required |  |
| `WebsiteUrl` | object | required |  |
| `InvoiceDueInterval` | object | required |  |
| `Classifications` | object | required |  |
| `Options` | object | required | Options of the company. |
| `CreditRatingBasic` | object | required |  |
| `Department` | object | required |  |
| `DunsNumber` | object | required |  |
| `ReferenceId` | object | required |  |
| `ExternalIdentifier` | object | required |  |
| `AdditionalTaxIdentifier` | object | required |  |
| `Contact` | object | required |  |
| `ContactPerson` | object | required |  |
| `FiscalIdentifier` | object | required |  |
| `Iata` | object | required |  |
| `Telephone` | object | required |  |
| `SourceId` | object | required |  |

#### CompanyClassificationUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Corporate` | object | required |  |
| `Internal` | object | required |  |
| `Private` | object | required |  |
| `OnlineTravelAgency` | object | required |  |
| `GlobalDistributionSystem` | object | required |  |
| `Marketing` | object | required |  |
| `Inactive` | object | required |  |

#### CompanyOptionUpdateParameters
Options of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | object | required |  |
| `AddFeesToInvoices` | object | required |  |
| `AddTaxDeductedPaymentToInvoices` | object | required |  |

### Response

```javascript
{
  "Accounts": [
    {
      "Id": "3ff104e6-3ba8-4dfc-8d35-b0ec00c5fd4c",
      "Discriminator": "Company",
      "Customer": null,
      "Company": {
        "ChainId": "79fa3c17-bec6-454f-b3be-b0ec00818acd",
        "CreatedUtc": "2024-01-03T07:52:20Z",
        "UpdatedUtc": "2024-01-18T10:20:31Z",
        "UpdaterProfileId": "93f03906-ed13-4a26-b8dc-b0ec0082194f",
        "Email": "example@example.com",
        "TaxIdentifier": "CZ8810310963",
        "BillingCode": null,
        "AccountingCode": null,
        "Notes": "Example notes",
        "Name": "Example company",
        "MotherCompanyId": "839e9d92-aa8b-48bf-8384-b0ec0081bb34",
        "WebsiteUrl": "https://www.example.com",
        "InvoiceDueInterval": null,
        "CreditRatingBasic": "CreditOk",
        "Department": "Accounting",
        "DunsNumber": "987654321",
        "ReferenceId": null,
        "ExternalIdentifier": "COM-123",
        "AdditionalTaxIdentifier": "XY00112233445",
        "Contact": "Sample contact",
        "ContactPerson": "Sample person",
        "FiscalIdentifier": "FiscalIdentifier",
        "Iata": "PAO",
        "Telephone": "111-222-333",
        "SourceId": "F42098A0-8507-4963-ACC9-B0EC00821949",
        "Classifications": {
          "Corporate": true,
          "Internal": true,
          "Private": true,
          "OnlineTravelAgency": true,
          "GlobalDistributionSystem": true,
          "Marketing": true,
          "Inactive": true
        },
        "Options": {
          "Invoiceable": true,
          "AddFeesToInvoices": true
        }
      }
    },
    {
      "Id": "71db411f-c1d6-4e1c-9cd7-44e8bf45f936",
      "Discriminator": "Customer",
      "Customer": {
        "ChainId": "79fa3c17-bec6-454f-b3be-b0ec00818acd",
        "CreatedUtc": "2024-01-03T07:52:19Z",
        "UpdatedUtc": "2024-01-18T10:25:41Z",
        "UpdaterProfileId": "93f03906-ed13-4a26-b8dc-b0ec0082194f",
        "Email": "example@example.com",
        "TaxIdentifier": "CZ8810310963",
        "BillingCode": null,
        "AccountingCode": null,
        "Notes": "Example notes",
        "LastName": "Sample",
        "FirstName": "Sample",
        "SecondLastName": null,
        "BirthPlace": "Sample place",
        "Telephone": "111-222-333",
        "Occupation": null,
        "CarRegistrationNumber": null,
        "LoyaltyCode": null,
        "NationalityCode": "US",
        "CompanyId": "839e9d92-aa8b-48bf-8384-b0ec0081bb34",
        "BirthDate": "2000-01-01T00:00:00Z",
        "Sex": "Male",
        "Title": "Mister",
        "PreferredLanguageCode": null,
        "Options": {
          "SendMarketingEmails": true,
          "Invoiceable": true,
          "BillAddressObjection": true
        },
        "Classifications": {
          "PaymasterAccount": true,
          "Blacklist": true,
          "Media": true,
          "LoyaltyProgram": true,
          "PreviousComplaint": true,
          "Returning": true,
          "Staff": true,
          "FriendOrFamily": true,
          "TopManagement": true,
          "Important": true,
          "VeryImportant": true,
          "Problematic": true,
          "Cashlist": true,
          "DisabledPerson": true,
          "Military": true,
          "Airline": true,
          "HealthCompliant": true,
          "InRoom": true,
          "WaitingForRoom": true,
          "Student": true
        },
        "LegalEntityIdentifiers": {
          "ItDestinationCode": null,
          "ItFiscalCode": null
        }
      },
      "Company": null
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Accounts` | array of [Account](#Account) | optional | Updated accounts. |

#### Account

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the account. |
| `Discriminator` | string | optional | Type of the account. |
| `Customer` | object | required | Updated customer data. |
| `Company` | object | required | Updated company data. |

#### CustomerAccount
Updated customer data.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ChainId` | string | required |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |
| `UpdaterProfileId` | string | required |  |
| `Email` | string | optional |  |
| `TaxIdentifier` | string | optional |  |
| `BillingCode` | string | optional |  |
| `AccountingCode` | string | optional |  |
| `Notes` | string | optional |  |
| `LastName` | string | optional |  |
| `FirstName` | string | optional |  |
| `SecondLastName` | string | optional |  |
| `BirthPlace` | string | optional |  |
| `Telephone` | string | optional |  |
| `Occupation` | string | optional |  |
| `CarRegistrationNumber` | string | optional |  |
| `LoyaltyCode` | string | optional |  |
| `NationalityCode` | string | optional |  |
| `CompanyId` | string | optional |  |
| `BirthDate` | string | optional |  |
| `Sex` | string | optional |  |
| `Title` | string | optional |  |
| `PreferredLanguageCode` | string | optional |  |
| `Options` | object | required |  |
| `Classifications` | object | required |  |
| `LegalEntityIdentifiers` | object | required |  |

#### CustomerAccountOptions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SendMarketingEmails` | boolean | required |  |
| `Invoiceable` | boolean | required |  |
| `BillAddressObjection` | boolean | required |  |

#### CustomerAccountClassifications

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymasterAccount` | boolean | required |  |
| `Blacklist` | boolean | required |  |
| `Media` | boolean | required |  |
| `LoyaltyProgram` | boolean | required |  |
| `PreviousComplaint` | boolean | required |  |
| `Returning` | boolean | required |  |
| `Staff` | boolean | required |  |
| `FriendOrFamily` | boolean | required |  |
| `TopManagement` | boolean | required |  |
| `Important` | boolean | required |  |
| `VeryImportant` | boolean | required |  |
| `Problematic` | boolean | required |  |
| `Cashlist` | boolean | required |  |
| `DisabledPerson` | boolean | required |  |
| `Military` | boolean | required |  |
| `Airline` | boolean | required |  |
| `HealthCompliant` | boolean | required |  |
| `InRoom` | boolean | required |  |
| `WaitingForRoom` | boolean | required |  |
| `Student` | boolean | required |  |

#### LegalEntityIdentifiers

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ItDestinationCode` | string | optional |  |
| `ItFiscalCode` | string | optional |  |

#### CompanyAccount
Updated company data.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ChainId` | string | required |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |
| `UpdaterProfileId` | string | required |  |
| `Email` | string | optional |  |
| `TaxIdentifier` | string | optional |  |
| `BillingCode` | string | optional |  |
| `AccountingCode` | string | optional |  |
| `Notes` | string | optional |  |
| `Name` | string | optional |  |
| `MotherCompanyId` | string | optional |  |
| `WebsiteUrl` | string | optional |  |
| `InvoiceDueInterval` | string | optional |  |
| `CreditRatingBasic` | string | optional |  |
| `Department` | string | optional |  |
| `DunsNumber` | string | optional |  |
| `ReferenceId` | string | optional |  |
| `ExternalIdentifier` | string | optional |  |
| `AdditionalTaxIdentifier` | string | optional |  |
| `Contact` | string | optional |  |
| `ContactPerson` | string | optional |  |
| `FiscalIdentifier` | string | optional |  |
| `Iata` | string | optional |  |
| `Telephone` | string | optional |  |
| `SourceId` | string | optional |  |
| `Classifications` | object | required |  |
| `Options` | object | required |  |

#### CompanyAccountClassifications

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Corporate` | boolean | required |  |
| `Internal` | boolean | required |  |
| `Private` | boolean | required |  |
| `OnlineTravelAgency` | boolean | required |  |
| `GlobalDistributionSystem` | boolean | required |  |
| `Marketing` | boolean | required |  |
| `Inactive` | boolean | required |  |

#### CompanyAccountOptions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | boolean | required |  |
| `AddFeesToInvoices` | boolean | required |  |
| `AddTaxDeductedPaymentToInvoices` | boolean | required |  |

## Merge accounts

Merges two or more accounts of the same account type together. The given source accounts will be merged into the given target account and the merged account will keep the target account ID.

### Request

`[PlatformAddress]/api/connector/v1/accounts/merge`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "AccountMergeParameters": [
    {
      "AccountType": "Company",
      "SourceAccountIds": [
        "b0c10ced-34eb-44b4-92e8-af5b008f3fb4",
        "5176d000-bf17-40be-b140-9041d2b70eee"
      ],
      "TargetAccountId": "51262225-8130-4320-8210-af5b008f64e5"
    },
    {
      "AccountType": "Customer",
      "SourceAccountIds": [
        "7799f19a-c9c9-42bf-968f-a759e3ea1ea6",
        "bb926ffe-5310-48bc-8202-6165fa3bdcad"
      ],
      "TargetAccountId": "49b2abd4-df58-4f1d-bead-0fa6342f8a78"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `AccountMergeParameters` | array of [AccountMergeParameter](#AccountMergeParameter) | required, max 10 items | Accounts to be merged. |

#### AccountMergeParameter

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SourceAccountIds` | array of string | required, max 1000 items |  |
| `TargetAccountId` | string | required |  |
| `AccountType` | [MergeAccountType](#X-Ref-Name-MergeAccountType) | required |  |

#### MergeAccountType

- `Customer`
- `Company`

### Response

```javascript
{}
```
