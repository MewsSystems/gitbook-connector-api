# Accounts

## Merge accounts

Merges two or more accounts of the same account type together. The given source accounts will be merged into the given target account and the merged account will keep the target account ID.

### Request

`[PlatformAddress]/api/connector/v1/accounts/merge`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "AccountMergeParameters" : [
        {
            "AccountType" : "Company",
            "SourceAccountIds" : 
            [ 
                "b0c10ced-34eb-44b4-92e8-af5b008f3fb4",
                "5176d000-bf17-40be-b140-9041d2b70eee"
            ],
            "TargetAccountId" : "51262225-8130-4320-8210-af5b008f64e5"
        },
        {
            "AccountType" : "Customer",
            "SourceAccountIds" :
                [
                    "7799f19a-c9c9-42bf-968f-a759e3ea1ea6",
                    "bb926ffe-5310-48bc-8202-6165fa3bdcad"
                ],
            "TargetAccountId" : "49b2abd4-df58-4f1d-bead-0fa6342f8a78"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AccountMergeParameters` | array of [Account merge parameters](#account-merge-parameters) | required, max 1000 items | Accounts to be merged. |

#### Account merge parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountType` | string [Account type](#account-type)| required | Specifying types of accounts provided ([Customer](../operations/customers.md#customer), [Company](../operations/companies.md#company)). |
| `SourceAccountIds` | array of string | required, max 1000 items | Unique identifiers of the source accounts ([Customer](../operations/customers.md#customer) or [Company](../operations/companies.md#company)). |
| `TargetAccountId` | string | required | Unique identifier of the target account ([Customer](../operations/customers.md#customer) or [Company](../operations/companies.md#company)). |

#### Account type

* `Company`
* `Customer`
* ...

### Response

```javascript
{}
```

## Update accounts

Updates one or more existing accounts in the system. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/accounts/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "AccountUpdates" : [
        {
            "Id": "3ff104e6-3ba8-4dfc-8d35-b0ec00c5fd4c",
            "Discriminator": "Company",
            "Customer": null,
            "Company": 
            {
                "Email": { "Value": "example@example.com" },
                "TaxIdentifier": { "Value": "CZ8810310963" },
                "BillingCode": { "Value": null },
                "AccountingCode": { "Value": null },
                "Notes": { "Value": "Example notes" },
                "Name": { "Value": "Example company" },
                "MotherCompanyId":  { "Value": "839e9d92-aa8b-48bf-8384-b0ec0081bb34" },        
                "WebsiteUrl": { "Value": "https://www.example.com" },
                "InvoiceDueInterval": { "Value": null },
                "CreditRatingBasic": { "Value": "CreditOk" },
                "Department": { "Value": "Accounting" },
                "DunsNumber": { "Value": "987654321" },
                "ReferenceId": { "Value": null },
                "ExternalIdentifier": { "Value": "COM-123" },
                "AdditionalTaxIdentifier": { "Value": "XY00112233445" },
                "Contact": { "Value": "Sample contact" },
                "ContactPerson": { "Value": "Sample person" },
                "FiscalIdentifier": { "Value": "FiscalIdentifier" },
                "Iata": { "Value": "PAO" },
                "Telephone": { "Value": "111-222-333" },
                "SourceId": { "Value": "F42098A0-8507-4963-ACC9-B0EC00821949" },
                "Classifications": 
                {
                    "Corporate": { "Value": true },
                    "Internal": { "Value": true },
                    "Private": { "Value": true },
                    "OnlineTravelAgency": { "Value": true },
                    "GlobalDistributionSystem": { "Value": true },
                    "Marketing": { "Value": true },
                    "Inactive": { "Value": true }
                },
                "Options": {
                    "Invoiceable": { "Value": "true" },
                    "AddFeesToInvoices": { "Value": "true" }
                }
            }
        },
        {
            "Id": "71db411f-c1d6-4e1c-9cd7-44e8bf45f936",
            "Discriminator": "Customer",
            "Company": null,
            "Customer": 
            {
                "Email": { "Value": "example@example.com" },
                "TaxIdentifier": { "Value": "CZ8810310963" },
                "BillingCode": { "Value": null },
                "AccountingCode": { "Value": null },
                "Notes": { "Value": "Example notes" },
                "LastName": { "Value": "Sample" },
                "FirstName": { "Value": "Sample" },
                "SecondLastName": { "Value": null },
                "BirthPlace": { "Value": "Sample place" },
                "Telephone": { "Value": "111-222-333" },
                "Occupation": { "Value": null },
                "CarRegistrationNumber": { "Value": null },
                "LoyaltyCode": { "Value": null },
                "NationalityCode": { "Value": "US" },
                "CompanyId":  { "Value": "839e9d92-aa8b-48bf-8384-b0ec0081bb34" }, 
                "BirthDate": { "Value": "2000-01-01" },
                "Sex": { "Value": "Male" },
                "Title": { "Value": "Mister" },
                "PreferredLanguageCode": { "Value": null },
                "Options": 
                {
                    "SendMarketingEmails": { "Value": true },
                    "Invoiceable": { "Value": true },
                    "BillAddressObjection": { "Value": true },
                },
                "Classifications":
                {
                    "PaymasterAccount": { "Value": true },
                    "Blacklist": { "Value": true },
                    "Media": { "Value": true },
                    "LoyaltyProgram": { "Value": true },
                    "PreviousComplaint": { "Value": true },
                    "Returning": { "Value": true },
                    "Staff": { "Value": true },
                    "FriendOrFamily": { "Value": true },
                    "TopManagement": { "Value": true },
                    "Important": { "Value": true },
                    "VeryImportant": { "Value": true },
                    "Problematic": { "Value": true },
                    "Cashlist": { "Value": true },
                    "DisabledPerson": { "Value": true },
                    "Military": { "Value": true },
                    "Airline": { "Value": true },
                    "HealthCompliant": { "Value": true },
                    "InRoom": { "Value": true },
                    "WaitingForRoom": { "Value": true },
                    "Student": { "Value": true }
                },
                "LegalEntityIdentifiers":
                {
                    "ItDestinationCode": { "Value": null },
                    "ItFiscalCode": { "Value": null }
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
| `AccountUpdates` | array of [Account update parameters](#account-update-parameters) | required, max 1000 items | Accounts to be updated. |

#### Account update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the account. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `Discriminator` | string [Account type discriminator](#account-type) | required | Type of the account. |
| `Customer` | [Customer update parameters](#customer-update-parameters) | optional | Customer data to be updated. Required when `Discriminator` is `Customer`. |
| `Company` | [Company update parameters](#company-update-parameters) | optional | Company data to be updated. Required when `Discriminator` is `Company`. |

#### Customer update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Email` | [String update value](_objects.md#string-update-value) | optional | Email address \(or `null` if the email should not be updated\). |
| `TaxIdentifier` | [String update value](_objects.md#string-update-value) | optional | Tax identification number \(or `null` if the tax identification number should not be updated\). |
| `BillingCode` | [String update value](_objects.md#string-update-value) | optional | Billing code \(or `null` if the billing code should not be updated\). |
| `AccountingCode` | [String update value](_objects.md#string-update-value) | optional | Accounting code \(or `null` if the accounting code should not be updated\). |
| `Notes` | [String update value](_objects.md#string-update-value) | optional | Notes \(or `null` if the notes should not be updated\). |
| `LastName` | [String update value](_objects.md#string-update-value) | optional | Last name \(or `null` if the last name should not be updated\). |
| `FirstName` | [String update value](_objects.md#string-update-value) | optional | First name \(or `null` if the first name should not be updated\). |
| `SecondLastName` | [String update value](_objects.md#string-update-value) | optional | Second name \(or `null` if the second last name should not be updated\). |
| `BirthPlace` | [String update value](_objects.md#string-update-value) | optional | Birth place \(or `null` if the birth place should not be updated\). |
| `Telephone` | [String update value](_objects.md#string-update-value) | optional | Telephone number \(or `null` if the telephone should not be updated\). |
| `Occupation` | [String update value](_objects.md#string-update-value) | optional | Occupation \(or `null` if the occupation should not be updated\). |
| `CarRegistrationNumber` | [String update value](_objects.md#string-update-value) | optional | Car registration number \(or `null` if the car registration number should not be updated\). |
| `LoyaltyCode` | [String update value](_objects.md#string-update-value) | optional | Loyalty code \(or `null` if the loyalty code should not be updated\). |
| `NationalityCode` | [String update value](_objects.md#string-update-value) | optional | Nationality code \(or `null` if the nationality code should not be updated\). |
| `CompanyId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the company \(or `null` if the company should not be updated\). |
| `BirthDate` | [String update value](_objects.md#string-update-value) | optional | Birth date \(or `null` if the birth date should not be updated\). |
| `Sex` | [String update value](_objects.md#string-update-value) | optional | Sex \(or `null` if the sex should not be updated\). |
| `Title` | [String update value](_objects.md#string-update-value) | optional | Title \(or `null` if the title should not be updated\). |
| `PreferredLanguageCode` | [String update value](_objects.md#string-update-value) | optional | Preferred language code \(or `null` if the preferred language code should not be updated\). |
| `Options` | [Customer update options](#customer-update-options) | optional | Options of the customer. |
| `Classifications` | [Customer update classifications](#customer-update-classifications) | optional | Classifications of the customer. |
| `LegalEntityIdentifiers` | [Customer update legal entity identifiers](#customer-update-legal-entity-identifiers) | optional | Legal entity identifiers of the customer. |

#### Customer update options
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SendMarketingEmails` | [Bool update value](_objects.md#bool-update-value) | optional | Send marketing email \(or `null` if the value should not be updated\). |
| `Invoiceable` | [Bool update value](_objects.md#bool-update-value) | optional | Invoiceable \(or `null` if the value should not be updated\). |
| `BillAddressObjection` | [Bool update value](_objects.md#bool-update-value) | optional | Bill address objection \(or `null` if the value should not be updated\). |

#### Customer update classifications
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymasterAccount` | [Bool update value](_objects.md#bool-update-value) | optional | Paymaster account \(or `null` if the value should not be updated\). |
| `Blacklist` | [Bool update value](_objects.md#bool-update-value) | optional | Blacklist \(or `null` if the value should not be updated\). |
| `Media` | [Bool update value](_objects.md#bool-update-value) | optional | Media \(or `null` if the value should not be updated\). |
| `LoyaltyProgram` | [Bool update value](_objects.md#bool-update-value) | optional | Loyalty program \(or `null` if the value should not be updated\). |
| `PreviousComplaint` | [Bool update value](_objects.md#bool-update-value) | optional | Previous complaint \(or `null` if the value should not be updated\). |
| `Returning` | [Bool update value](_objects.md#bool-update-value) | optional | Returning \(or `null` if the value should not be updated\). |
| `Staff` | [Bool update value](_objects.md#bool-update-value) | optional | Staff \(or `null` if the value should not be updated\). |
| `FriendOrFamily` | [Bool update value](_objects.md#bool-update-value) | optional | Friend or family \(or `null` if the value should not be updated\). |
| `TopManagement` | [Bool update value](_objects.md#bool-update-value) | optional | Top management \(or `null` if the value should not be updated\). |
| `Important` | [Bool update value](_objects.md#bool-update-value) | optional | Important \(or `null` if the value should not be updated\). |
| `VeryImportant` | [Bool update value](_objects.md#bool-update-value) | optional | Very important \(or `null` if the value should not be updated\). |
| `Problematic` | [Bool update value](_objects.md#bool-update-value) | optional | Problematic \(or `null` if the value should not be updated\). |
| `Cashlist` | [Bool update value](_objects.md#bool-update-value) | optional | Cashlist \(or `null` if the value should not be updated\). |
| `DisabledPerson` | [Bool update value](_objects.md#bool-update-value) | optional | Disabled person \(or `null` if the value should not be updated\). |
| `Military` | [Bool update value](_objects.md#bool-update-value) | optional | Military \(or `null` if the value should not be updated\). |
| `Airline` | [Bool update value](_objects.md#bool-update-value) | optional | Airline \(or `null` if the value should not be updated\). |
| `HealthCompliant` | [Bool update value](_objects.md#bool-update-value) | optional | Health compliant \(or `null` if the value should not be updated\). |
| `InRoom` | [Bool update value](_objects.md#bool-update-value) | optional | In room \(or `null` if the value should not be updated\). |
| `WaitingForRoom` | [Bool update value](_objects.md#bool-update-value) | optional | Waiting for room \(or `null` if the value should not be updated\). |
| `Student` | [Bool update value](_objects.md#bool-update-value) | optional | Student \(or `null` if the value should not be updated\). |

#### Customer update legal entity identifiers
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ItDestinationCode` | [String update value](_objects.md#string-update-value) | optional | Italian destination code \(or `null` if the Italian destination code should not be updated\). |
| `ItFiscalCode` | [String update value](_objects.md#string-update-value) | optional | Italian fiscal code \(or `null` if the Italian fiscal code should not be updated\). |

#### Company update parameters
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Email` | [String update value](_objects.md#string-update-value) | optional | Email address \(or `null` if the email should not be updated\). |
| `TaxIdentifier` | [String update value](_objects.md#string-update-value) | optional | Tax identification number \(or `null` if the tax identification number should not be updated\). |
| `BillingCode` | [String update value](_objects.md#string-update-value) | optional | Billing code \(or `null` if the billing code should not be updated\). |
| `AccountingCode` | [String update value](_objects.md#string-update-value) | optional | Accounting code \(or `null` if the accounting code should not be updated\). |
| `Notes` | [String update value](_objects.md#string-update-value) | optional | Notes \(or `null` if the notes should not be updated\). |
| `Name` | [String update value](_objects.md#string-update-value) | optional | Name \(or `null` if the name should not be updated\). |
| `MotherCompanyId` | [String update value](_objects.md#string-update-value) | optional | Mother company \(or `null` if the mother company should not be updated\). |
| `WebsiteUrl` | [String update value](_objects.md#string-update-value) | optional | Website url \(or `null` if the website url should not be updated\). |
| `InvoiceDueInterval` | [String update value](_objects.md#string-update-value) | optional | Invoice due interval \(or `null` if the invoice due interval should not be updated\). |
| `CreditRatingBasic` | [String update value](_objects.md#string-update-value) | optional | [Basic credit rating](countries.md#country) \(or `null` if the basic credit rating should not be updated\). |
| `Department` | [String update value](_objects.md#string-update-value) | optional | Department \(or `null` if the department should not be updated\). |
| `DunsNumber` | [String update value](_objects.md#string-update-value) | optional | Duns number \(or `null` if the duns number should not be updated\). |
| `ReferenceId` | [String update value](_objects.md#string-update-value) | optional | Reference identifier \(or `null` if the reference identifier should not be updated\). |
| `ExternalIdentifier` | [String update value](_objects.md#string-update-value) | optional | External identifier \(or `null` if the external identifier should not be updated\). |
| `AdditionalTaxIdentifier` | [String update value](_objects.md#string-update-value) | optional | Additional tax identifier \(or `null` if the additional tax identifier should not be updated\). |
| `Contact` | [String update value](_objects.md#string-update-value) | optional | Contact \(or `null` if the contact should not be updated\). |
| `ContactPerson` | [String update value](_objects.md#string-update-value) | optional | Contact person \(or `null` if the contact person should not be updated\). |
| `FiscalIdentifier` | [String update value](_objects.md#string-update-value) | optional | Fiscal identifier \(or `null` if the firscal identifier should not be updated\). |
| `Iata` | [String update value](_objects.md#string-update-value) | optional | Iata \(or `null` if the iata should not be updated\). |
| `Telephone` | [String update value](_objects.md#string-update-value) | optional | Telephone \(or `null` if the telephone should not be updated\). |
| `SourceId` | [String update value](_objects.md#string-update-value) | optional | [Source](sources.md#source) \(or `null` if the source should not be updated\). |
| `Options` | [Company update options](#company-update-options) | optional | Options of the company. |
| `Classifications` | [Company update classifications](#company-update-classifications) | optional | Classifications of the company. |

#### Company update options
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | [Bool update value](_objects.md#bool-update-value) | optional | Invoiceable \(or `null` if the value should not be updated\). |
| `AddFeesToInvoices` | [Bool update value](_objects.md#bool-update-value) | optional | Add fees to invoices \(or `null` if the value should not be updated\). |

#### Company update classifications
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Corporate` | [Bool update value](_objects.md#bool-update-value) | optional | Corporate \(or `null` if the value should not be updated\). |
| `Internal` | [Bool update value](_objects.md#bool-update-value) | optional | Internal \(or `null` if the value should not be updated\). |
| `Private` | [Bool update value](_objects.md#bool-update-value) | optional | Private \(or `null` if the value should not be updated\). |
| `OnlineTravelAgency` | [Bool update value](_objects.md#bool-update-value) | optional | Online travel agency \(or `null` if the value should not be updated\). |
| `GlobalDistributionSystem` | [Bool update value](_objects.md#bool-update-value) | optional | Global distribution system \(or `null` if the value should not be updated\). |
| `Marketing` | [Bool update value](_objects.md#bool-update-value) | optional | Marketing \(or `null` if the value should not be updated\). |
| `Inactive` | [Bool update value](_objects.md#bool-update-value) | optional | Inactive \(or `null` if the value should not be updated\). |

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
            "Customer":
            {
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
                    "BillAddressObjection": true,
                    "SendMarketingPostalMail": true,
                    "SendPartnerMarketingEmails": true,
                    "SendPartnerMarketingPostalMail": true                
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
| `Accounts` | array of [Account](#account) | optional | Updated accounts. |

#### Account

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the account. |
| `Discriminator` | string [Account type discriminator](#account-type) | required | Type of the account. |
| `Customer` | [Customer](#customer) | required | Updated customer data. |
| `Company` | [Company](#company) | required | Updated company data. |

#### Customer

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ChainId` | string | required | Unique identifier of the chain. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who updated the customer. |
| `Email` | string | optional | Email address of the customer. |
| `TaxIdentifier` | string | optional | Tax identification number of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `LastName` | string | required | Last name of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `BirthPlace` | string | optional | Place of birth. |
| `Telephone` | string | optional | Telephone number of the customer \(possibly mobile\). |
| `Occupation` | string | optional | Occupation of the customer. |
| `CarRegistrationNumber` | string | optional | Registration number of the customer's car. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company) the customer is associated with. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `Sex` | string [Sex](customers.md#sex) | optional | Sex of the customer. |
| `Title` | string [Title](customers.md#title) | optional | Title prefix of the customer. |
| `PreferredLanguageCode` | string | optional | Language and culture code of the customers preferred language. E.g. `en-US` or `fr-FR`. |
| `Options` | [Customer options](#customer-options) | required | Options of the customer. |
| `Classifications` | [Customer classifications](#customer-classifications) | required | Classifications of the customer. |
| `LegalEntityIdentifiers` | [Legal entity identifiers](#customer-legal-identifiers) | required | Legal entity identifiers of the customer. |

#### Company
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ChainId` | string | required | Unique identifier of the chain. |
| `CreatedUtc` | string | optional | Date of [Company](#company) creation date and time. |
| `UpdatedUtc` | string | optional | Date of [Company](#company) last update date and time. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who updated the company. |
| `Email` | string | optional | Email address of the company. |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `BillingCode` | string | optional | Billing code of the company. |
| `AccountingCode` | string | optional | Accounting code of the company. |
| `Notes` | string | optional | Additional notes. |
| `Name` | string | required | Name of the company. |
| `MotherCompanyId` | guid | optional | Unique identifier of mother company. |
| `WebsiteUrl` | string | optional | The website url of the company. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `CreditRatingBasic` | [Credit rating](#credit-rating) | optional | Credit rating to define credit worthiness of the company. |
| `Department` | string | optional | The internal segmentation of a company, e.g. sales department. |
| `DunsNumber` | string | optional | The Dun & Bradstreet unique 9-digit DUNS number. |
| `ReferenceId` | string | optional | External system identifier - custom identifier used by an external system such as an external database. |
| `ExternalIdentifier` | string | optional, max 255 characters | Identifier of company from external system. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifier of the company. |
| `Contact` | string | optional | Other contact details, such as telephone, email or similar. |
| `ContactPerson` | string | optional | Contact person of the company. |
| `FiscalIdentifier` | string | optional | Fiscal identifier of the company. |
| `Iata` | string | optional | Iata of the company. |
| `Telephone` | string | optional | Contact telephone number. |
| `SourceId` | string | optional | Unique identifier of the [Source](sources.md#source). |
| `Classifications` | [Company classifications](#company-classifications) | required | Classifications of the company. |
| `Options` | [Company options](companies.md#company-options) | required | Options of the company. |

#### Customer options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SendMarketingEmails` | bool | required | Send marketing emails. |
| `Invoiceable` | bool | required | Invoiceable. |
| `BillAddressObjection` | bool | required | Bill address objection. |
| `SendMarketingPostalMail` | bool | required | Send marketing postal mail. |
| `SendPartnerMarketingEmails` | bool | required | Send partner marketing emails. |
| `SendPartnerMarketingPostalMail` | bool | required | Send partner marketing postal mail. |

#### Customer classifications

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymasterAccount` | bool | required | Paymaster account. |
| `Blacklist` | bool | required | Blacklist. |
| `Media` | bool | required | Media. |
| `LoyaltyProgram` | bool | required | Loyalty program. |
| `PreviousComplaint` | bool | required | Previous complaint. |
| `Returning` | bool | required | Returning. |
| `Staff` | bool | required | Staff. |
| `FriendOrFamily` | bool | required | Friend or family. |
| `TopManagement` | bool | required | Top management. |
| `Important` | bool | required | Important. |
| `VeryImportant` | bool | required | Very important. |
| `Problematic` | bool | required | Problematic. |
| `Cashlist` | bool | required | Cash list. |
| `DisabledPerson` | bool | required | Disabled person. |
| `Military` | bool | required | Military. |
| `Airline` | bool | required | Airline. |
| `HealthCompliant` | bool | required | Health compliant. |
| `InRoom` | bool | required | In room. |
| `WaitingForRoom` | bool | required | Waiting for room. |
| `Student` | bool | required | Student. |

#### Customer legal identifiers

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ItDestinationCode` | bool | required | Italian destination code. |
| `ItFiscalCode` | bool | required | Italian fiscal code. |

#### Company classifications

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Corporate` | bool | required | Corporate. |
| `Internal` | bool | required | Internal. |
| `Private` | bool | required | Private. |
| `OnlineTravelAgency` | bool | required | Online travel agency. |
| `GlobalDistributionSystem` | bool | required | Global distribution system. |
| `Marketing` | bool | required | Marketing. |
| `Inactive` | bool | required | Inactive. |
