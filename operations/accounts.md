<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Accounts

## Update accounts

Updates one or more existing accounts in the system. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `AccountUpdates` | array of [AccountUpdateParameters](accounts.md#accountupdateparameters) | required, max 1000 items | Accounts to be updated. |

#### AccountUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `Discriminator` | string | optional |  |
| `Customer` | [AccountCustomerUpdateParameters](accounts.md#accountcustomerupdateparameters) | optional |  |
| `Company` | [AccountCompanyUpdateParameters](accounts.md#accountcompanyupdateparameters) | optional |  |

#### AccountCustomerUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Email` | [String update value](_objects.md#string-update-value) | optional |  |
| `TaxIdentifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `BillingCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `AccountingCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `Notes` | [String update value](_objects.md#string-update-value) | optional |  |
| `LastName` | [String update value](_objects.md#string-update-value) | optional |  |
| `FirstName` | [String update value](_objects.md#string-update-value) | optional |  |
| `SecondLastName` | [String update value](_objects.md#string-update-value) | optional |  |
| `BirthPlace` | [String update value](_objects.md#string-update-value) | optional |  |
| `Telephone` | [String update value](_objects.md#string-update-value) | optional |  |
| `Occupation` | [String update value](_objects.md#string-update-value) | optional |  |
| `CarRegistrationNumber` | [String update value](_objects.md#string-update-value) | optional |  |
| `DietaryRequirements` | [String update value](_objects.md#string-update-value) | optional |  |
| `LoyaltyCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `NationalityCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `CompanyId` | [String update value](_objects.md#string-update-value) | optional |  |
| `BirthDate` | [String update value](_objects.md#string-update-value) | optional |  |
| `Sex` | [String update value](_objects.md#string-update-value) | optional |  |
| `Title` | [String update value](_objects.md#string-update-value) | optional |  |
| `PreferredLanguageCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `Options` | [CustomerOptionUpdateParameters](accounts.md#customeroptionupdateparameters) | optional |  |
| `Classifications` | [CustomerClassificationUpdateParameters](accounts.md#customerclassificationupdateparameters) | optional |  |
| `LegalEntityIdentifiers` | [LegalEntityIdentifierUpdateParameters](accounts.md#legalentityidentifierupdateparameters) | optional |  |

#### CustomerOptionUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SendMarketingEmails` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Invoiceable` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `BillAddressObjection` | [Bool update value](_objects.md#bool-update-value) | optional |  |

#### CustomerClassificationUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymasterAccount` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Blacklist` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Media` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `LoyaltyProgram` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `PreviousComplaint` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Returning` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Staff` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `FriendOrFamily` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `TopManagement` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Important` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `VeryImportant` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Problematic` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Cashlist` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `DisabledPerson` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Military` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Airline` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `HealthCompliant` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `InRoom` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `WaitingForRoom` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Student` | [Bool update value](_objects.md#bool-update-value) | optional |  |

#### LegalEntityIdentifierUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ItDestinationCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `ItFiscalCode` | [String update value](_objects.md#string-update-value) | optional |  |

#### AccountCompanyUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Email` | [String update value](_objects.md#string-update-value) | optional |  |
| `TaxIdentifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `BillingCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `AccountingCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `Notes` | [String update value](_objects.md#string-update-value) | optional |  |
| `Name` | [String update value](_objects.md#string-update-value) | optional |  |
| `MotherCompanyId` | [String update value](_objects.md#string-update-value) | optional |  |
| `WebsiteUrl` | [String update value](_objects.md#string-update-value) | optional |  |
| `InvoiceDueInterval` | [String update value](_objects.md#string-update-value) | optional |  |
| `Classifications` | [CompanyClassificationUpdateParameters](accounts.md#companyclassificationupdateparameters) | optional |  |
| `Options` | [Company Option Update Parameters](companies.md#company-option-update-parameters) | optional | Options of the company. |
| `CreditRatingBasic` | [String update value](_objects.md#string-update-value) | optional |  |
| `Department` | [String update value](_objects.md#string-update-value) | optional |  |
| `DunsNumber` | [String update value](_objects.md#string-update-value) | optional |  |
| `ReferenceId` | [String update value](_objects.md#string-update-value) | optional |  |
| `ExternalIdentifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `AdditionalTaxIdentifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `Contact` | [String update value](_objects.md#string-update-value) | optional |  |
| `ContactPerson` | [String update value](_objects.md#string-update-value) | optional |  |
| `FiscalIdentifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `Iata` | [String update value](_objects.md#string-update-value) | optional |  |
| `Telephone` | [String update value](_objects.md#string-update-value) | optional |  |
| `SourceId` | [String update value](_objects.md#string-update-value) | optional |  |

#### CompanyClassificationUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Corporate` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Internal` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Private` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `OnlineTravelAgency` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `GlobalDistributionSystem` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Marketing` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Inactive` | [Bool update value](_objects.md#bool-update-value) | optional |  |

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
| `Accounts` | array of [Account](accounts.md#account) | optional | Updated accounts. |

#### Account

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the account. |
| `Discriminator` | string | optional | Type of the account. |
| `Customer` | [CustomerAccount](accounts.md#customeraccount) | optional | Updated customer data. |
| `Company` | [CompanyAccount](accounts.md#companyaccount) | optional | Updated company data. |

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
| `DietaryRequirements` | string | optional |  |
| `LoyaltyCode` | string | optional |  |
| `NationalityCode` | string | optional |  |
| `CompanyId` | string | optional |  |
| `BirthDate` | string | optional |  |
| `Sex` | string | optional |  |
| `Title` | string | optional |  |
| `PreferredLanguageCode` | string | optional |  |
| `Options` | [CustomerAccountOptions](accounts.md#customeraccountoptions) | optional |  |
| `Classifications` | [CustomerAccountClassifications](accounts.md#customeraccountclassifications) | optional |  |
| `LegalEntityIdentifiers` | [LegalEntityIdentifiers](accounts.md#legalentityidentifiers) | optional |  |

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
| `Classifications` | [CompanyAccountClassifications](accounts.md#companyaccountclassifications) | optional |  |
| `Options` | [CompanyAccountOptions](accounts.md#companyaccountoptions) | optional |  |

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AccountMergeParameters` | array of [AccountMergeParameter](accounts.md#accountmergeparameter) | required, max 10 items | Accounts to be merged. |

#### AccountMergeParameter

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SourceAccountIds` | array of string | required, max 1000 items |  |
| `TargetAccountId` | string | required |  |
| `AccountType` | [MergeAccountType](accounts.md#mergeaccounttype) | required |  |

#### MergeAccountType

* `Customer`
* `Company`

### Response

```javascript
{}
```
