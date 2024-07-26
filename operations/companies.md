<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Companies

## Get all companies

Returns all company profiles of the enterprise, possibly filtered by identifiers, names or other filters.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/companies/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainIds": [
    "1df21f06-0cfc-4960-9c58-a3bf1261663e",
    "5fcd1933-22f2-40b9-84da-7db04cbecec2"
  ],
  "Ids": [
    "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
    "8a98965a-7c03-48a1-a28c-ab1b009b53c8"
  ],
  "Names": [
    "AC Company"
  ],
  "CreatedUtc": {
    "StartUtc": "2019-12-05T00:00:00Z",
    "EndUtc": "2019-12-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2019-12-10T00:00:00Z",
    "EndUtc": "2019-12-17T00:00:00Z"
  },
  "ExternalIdentifiers": [
    "12345",
    "4312343"
  ],
  "Limitation": {
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `MotherCompanyIds` | array of string | optional, max 1000 items | Unique identifiers of mother `Company`. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months |  |
| `Ids` | array of string | optional, max 1000 items | Unique identifiers of [Companies](companies.md#company). |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of [Company](companies.md#company) from external system. |
| `Name` | string | optional |  |
| `Names` | array of string | optional, max 1000 items | Names of [Companies](companies.md#company). |
| `Extent` | [CompanyExtent](companies.md#companyextent) | optional |  |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | optional | Limitation on the quantity of data returned. |
| ~~`TimeFilter`~~ | ~~[CompanyTimeFilter](companies.md#companytimefilter)~~ | ~~required~~ | **Deprecated!** |
| ~~`StartUtc`~~ | ~~string~~ | ~~optional~~ | **Deprecated!** |
| ~~`EndUtc`~~ | ~~string~~ | ~~optional~~ | **Deprecated!** |

#### CompanyTimeFilter

* `Created`
* `Updated`

#### CompanyExtent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Inactive` | boolean | required |  |

### Response

```javascript
{
  "Companies": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
      "Name": "Sample Company 1",
      "IsActive": true,
      "Number": 11,
      "Identifier": null,
      "TaxIdentifier": null,
      "AdditionalTaxIdentifier": null,
      "ElectronicInvoiceIdentifier": null,
      "InvoiceDueInterval": "P2DT23H",
      "AccountingCode": null,
      "MotherCompanyId": null,
      "CreatedUtc": "2022-07-11T09:56:54Z",
      "UpdatedUtc": "2022-07-11T09:56:54Z",
      "AddressId": "bab7441c-4b82-43bc-8001-ab0400a346ec",
      "BillingCode": null,
      "Iata": "PAO",
      "Telephone": "111-222-333",
      "InvoicingEmail": "sample1@mews.com",
      "ContacPerson": "Sample Person 1",
      "Contact": "Contact Info 1",
      "Notes": "Note 1",
      "Options": {
        "Invoiceable": true,
        "AddFeesToInvoices": true
      },
      "Department": "Sales",
      "DunsNumber": "123456789",
      "CreditRating": {
        "Basic": "PaymentRequiredUpfront"
      },
      "ReferenceIdentifier": "da34b396-77e3-495a-bd61-aecf00a3f19d",
      "WebsiteUrl": "https://www.mewssystems.com",
      "ExternalIdentifier": "company0001"
    },
    {
      "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
      "ChainId": "5fcd1933-22f2-40b9-84da-7db04cbecec2",
      "Name": "Sample Company 2",
      "IsActive": true,
      "Number": 12,
      "Identifier": null,
      "TaxIdentifier": null,
      "AdditionalTaxIdentifier": null,
      "ElectronicInvoiceIdentifier": null,
      "InvoiceDueInterval": "P2DT23H",
      "AccountingCode": null,
      "MotherCompanyId": null,
      "CreatedUtc": "2022-07-11T09:56:54Z",
      "UpdatedUtc": "2022-07-11T09:56:54Z",
      "AddressId": null,
      "BillingCode": null,
      "Iata": "PAO",
      "Telephone": "111-222-333",
      "InvoicingEmail": "sample2@mews.com",
      "ContacPerson": "Sample Person 2",
      "Contact": "Contact Info 2",
      "Notes": "Note 2",
      "Options": {
        "Invoiceable": true,
        "AddFeesToInvoices": false
      },
      "Department": "Accounting",
      "DunsNumber": "987654321",
      "CreditRating": {
        "Basic": "CreditOk"
      },
      "ReferenceIdentifier": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "WebsiteUrl": "https://www.mews.com",
      "ExternalIdentifier": "company0002"
    }
  ],
  "Cursor": "da34b396-41f7-47f6-8847-aecf00a3f19e"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Companies` | array of [Company](companies.md#company) | required | The company profiles of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest company item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older companies. If [Limitation](../guidelines/pagination.md#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md). 

### Request

`[PlatformAddress]/api/connector/v1/companies/getAllByName`

```javascript
{
  "Client": "string",
  "LanguageCode": "string",
  "CultureCode": "string",
  "AccessToken": "string",
  "ClientToken": "string",
  "Name": "string"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required |  |
| `AccessToken` | string | required |  |
| `Client` | string | required |  |
| `Name` | string | required |  |

### Response

```javascript
{
  "Companies": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
      "Name": "Sample Company 1",
      "IsActive": true,
      "Number": 11,
      "Identifier": null,
      "TaxIdentifier": null,
      "AdditionalTaxIdentifier": null,
      "ElectronicInvoiceIdentifier": null,
      "InvoiceDueInterval": "P2DT23H",
      "AccountingCode": null,
      "MotherCompanyId": null,
      "CreatedUtc": "2022-07-11T09:56:54Z",
      "UpdatedUtc": "2022-07-11T09:56:54Z",
      "AddressId": "bab7441c-4b82-43bc-8001-ab0400a346ec",
      "BillingCode": null,
      "Iata": "PAO",
      "Telephone": "111-222-333",
      "InvoicingEmail": "sample1@mews.com",
      "ContacPerson": "Sample Person 1",
      "Contact": "Contact Info 1",
      "Notes": "Note 1",
      "Options": {
        "Invoiceable": true,
        "AddFeesToInvoices": true
      },
      "Department": "Sales",
      "DunsNumber": "123456789",
      "CreditRating": {
        "Basic": "PaymentRequiredUpfront"
      },
      "ReferenceIdentifier": "da34b396-77e3-495a-bd61-aecf00a3f19d",
      "WebsiteUrl": "https://www.mewssystems.com",
      "ExternalIdentifier": "company0001"
    },
    {
      "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
      "ChainId": "5fcd1933-22f2-40b9-84da-7db04cbecec2",
      "Name": "Sample Company 2",
      "IsActive": true,
      "Number": 12,
      "Identifier": null,
      "TaxIdentifier": null,
      "AdditionalTaxIdentifier": null,
      "ElectronicInvoiceIdentifier": null,
      "InvoiceDueInterval": "P2DT23H",
      "AccountingCode": null,
      "MotherCompanyId": null,
      "CreatedUtc": "2022-07-11T09:56:54Z",
      "UpdatedUtc": "2022-07-11T09:56:54Z",
      "AddressId": null,
      "BillingCode": null,
      "Iata": "PAO",
      "Telephone": "111-222-333",
      "InvoicingEmail": "sample2@mews.com",
      "ContacPerson": "Sample Person 2",
      "Contact": "Contact Info 2",
      "Notes": "Note 2",
      "Options": {
        "Invoiceable": true,
        "AddFeesToInvoices": false
      },
      "Department": "Accounting",
      "DunsNumber": "987654321",
      "CreditRating": {
        "Basic": "CreditOk"
      },
      "ReferenceIdentifier": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "WebsiteUrl": "https://www.mews.com",
      "ExternalIdentifier": "company0002"
    }
  ],
  "Cursor": "da34b396-41f7-47f6-8847-aecf00a3f19e"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Companies` | array of [Company](companies.md#company) | required | The company profiles of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest company item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older companies. If [Limitation](../guidelines/pagination.md#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

## Add company

Adds a new company. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/companies/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "Name": "Mews",
  "Options": {
    "Invoiceable": true,
    "AddFeesToInvoices": true
  },
  "MotherCompanyId": null,
  "Identifier": null,
  "TaxIdentifier": null,
  "AdditionalTaxIdentifier": null,
  "BillingCode": null,
  "AccountingCode": null,
  "Address": null,
  "InvoiceDueInterval": "P2DT23H",
  "Telephone": "111-222-333",
  "ContacPerson": "SamplePerson",
  "Contact": "ContactInfo",
  "Notes": "Note1",
  "Iata": "PAO",
  "Department": "Sales",
  "DunsNumber": "987654321",
  "CreditRating": {
    "Basic": "CreditOk"
  },
  "ExternalIdentifier": "1234",
  "ReferenceIdentifier": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
  "WebsiteUrl": "https://www.mews.com"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `Name` | string | required | Name of the company. |
| `MotherCompanyId` | string | optional | Unique identifier of the mother company. |
| `InvoicingEmail` | string | optional |  |
| `WebsiteUrl` | string | optional | The website url of the company. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `Options` | [CompanyOptionsParameters](companies.md#companyoptionsparameters) | required | Options of the company. |
| `CreditRating` | [CreditRatingParameters](companies.md#creditratingparameters) | optional | Credit rating to define creditworthiness of the company. |
| `Department` | string | optional | The internal segmentation of a company, e.g. sales department. |
| `DunsNumber` | string | optional | The Dun & Bradstreet unique 9-digit DUNS number. |
| `ReferenceIdentifier` | string | optional | External system identifier - custom identifier used by an external system such as an external database. |
| `AccountingCode` | string | optional | Accounting code of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifer of the company. |
| `BillingCode` | string | optional | Billing code of the company. |
| `Contact` | string | optional | Other contact details, such as telephone, email or similar. |
| `ContactPerson` | string | optional | Contact person of the company. |
| `Identifier` | string | optional | Identifier of the company (e.g. legal identifier). |
| `Iata` | string | optional | Iata of the company. |
| `Notes` | string | optional | Notes of the company. |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `Telephone` | string | optional |  |
| `Address` | [AddressParameters](companies.md#addressparameters) | optional | New address details. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the company from external system. |

#### CompanyOptionsParameters
Options of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | boolean | required |  |
| `AddFeesToInvoices` | boolean | required |  |
| `AddTaxDeductedPaymentToInvoices` | boolean | required |  |

#### CreditRatingParameters
Credit rating to define creditworthiness of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Basic` | string | optional |  |

#### AddressParameters
New address details.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `CountryCode` | string | optional |  |
| `CountrySubdivisionCode` | string | optional |  |

### Response

```javascript
{
  "Companies": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
      "Name": "Sample Company 1",
      "IsActive": true,
      "Number": 11,
      "Identifier": null,
      "TaxIdentifier": null,
      "AdditionalTaxIdentifier": null,
      "ElectronicInvoiceIdentifier": null,
      "InvoiceDueInterval": "P2DT23H",
      "AccountingCode": null,
      "MotherCompanyId": null,
      "CreatedUtc": "2022-07-11T09:56:54Z",
      "UpdatedUtc": "2022-07-11T09:56:54Z",
      "AddressId": "bab7441c-4b82-43bc-8001-ab0400a346ec",
      "BillingCode": null,
      "Iata": "PAO",
      "Telephone": "111-222-333",
      "InvoicingEmail": "sample1@mews.com",
      "ContacPerson": "Sample Person 1",
      "Contact": "Contact Info 1",
      "Notes": "Note 1",
      "Options": {
        "Invoiceable": true,
        "AddFeesToInvoices": true
      },
      "Department": "Sales",
      "DunsNumber": "123456789",
      "CreditRating": {
        "Basic": "PaymentRequiredUpfront"
      },
      "ReferenceIdentifier": "da34b396-77e3-495a-bd61-aecf00a3f19d",
      "WebsiteUrl": "https://www.mewssystems.com",
      "ExternalIdentifier": "company0001"
    },
    {
      "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
      "ChainId": "5fcd1933-22f2-40b9-84da-7db04cbecec2",
      "Name": "Sample Company 2",
      "IsActive": true,
      "Number": 12,
      "Identifier": null,
      "TaxIdentifier": null,
      "AdditionalTaxIdentifier": null,
      "ElectronicInvoiceIdentifier": null,
      "InvoiceDueInterval": "P2DT23H",
      "AccountingCode": null,
      "MotherCompanyId": null,
      "CreatedUtc": "2022-07-11T09:56:54Z",
      "UpdatedUtc": "2022-07-11T09:56:54Z",
      "AddressId": null,
      "BillingCode": null,
      "Iata": "PAO",
      "Telephone": "111-222-333",
      "InvoicingEmail": "sample2@mews.com",
      "ContacPerson": "Sample Person 2",
      "Contact": "Contact Info 2",
      "Notes": "Note 2",
      "Options": {
        "Invoiceable": true,
        "AddFeesToInvoices": false
      },
      "Department": "Accounting",
      "DunsNumber": "987654321",
      "CreditRating": {
        "Basic": "CreditOk"
      },
      "ReferenceIdentifier": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "WebsiteUrl": "https://www.mews.com",
      "ExternalIdentifier": "company0002"
    }
  ],
  "Cursor": "da34b396-41f7-47f6-8847-aecf00a3f19e"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Companies` | array of [Company](companies.md#company) | required | The company profiles of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest company item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older companies. If [Limitation](../guidelines/pagination.md#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

#### Company

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the company. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Name` | string | required | Name of the company. |
| `MotherCompanyId` | string | optional | Unique identifier of mother company. |
| `InvoicingEmail` | string | optional | Email for issuing invoices to the company. |
| `WebsiteUrl` | string | optional | The website url of the company. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `Options` | [CompanyOptions](companies.md#companyoptions) | optional | Options of the company. |
| `CreditRating` | [CreditRating](companies.md#creditrating) | optional | Credit rating to define creditworthiness of the company. |
| `Department` | string | optional | The internal segmentation of a company, e.g. sales department. |
| `DunsNumber` | string | optional | The Dun & Bradstreet unique 9-digit DUNS number. |
| `ReferenceIdentifier` | string | optional | External system identifier - custom identifier used by an external system such as an external database. |
| `AccountingCode` | string | optional | Accounting code of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifier of the company. |
| `BillingCode` | string | optional | Billing code of the company. |
| `Contact` | string | optional | Other contact details, such as telephone, email or similar. |
| `ContactPerson` | string | optional | Contact person of the company. |
| `ElectronicInvoiceIdentifier` | string | optional | Electronic invoice identifier of the company. |
| `Identifier` | string | optional | Other identifier of the company, e.g. legal identifier. |
| `Iata` | string | optional | Iata of the company. |
| `IsActive` | boolean | required | Whether the company is still active. |
| `Notes` | string | optional | Additional notes. |
| `Number` | integer | required | Unique number of the company. |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `Telephone` | string | optional | Contact telephone number. |
| `CreatedUtc` | string | optional | Date of [Company](companies.md#company) creation date and time. |
| `UpdatedUtc` | string | optional | Date of [Company](companies.md#company) last update date and time. |
| `AddressId` | string | optional | Unique identifier of the company [Address](addresses.md#account-address). |
| `MergeTargetId` | string | optional |  |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of company from external system. |
| `IsUpdatedByMe` | boolean | optional |  |
| ~~`Address`~~ | ~~[OldAddress](configuration.md#address)~~ | ~~optional~~ | ~~Address of the customer.~~ **Deprecated!** |
| ~~`TaxIdentificationNumber`~~ | ~~string~~ | ~~optional~~ | **Deprecated!** |

#### CompanyOptions
Options of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | boolean | required |  |
| `AddFeesToInvoices` | boolean | required |  |
| `AddTaxDeductedPaymentToInvoices` | boolean | required |  |

#### CreditRating
Credit rating to define creditworthiness of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Basic` | string | optional |  |

## Update company

Updates information of the company. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/companies/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "CompanyId": "7a1e4d67-d6a2-4a4c-a464-ab1100bea786",
  "Name": {
    "Value": "Sample company name"
  },
  "Options": {
    "Invoiceable": {
      "Value": true
    },
    "AddFeesToInvoices": {
      "Value": false
    }
  },
  "MotherCompanyId": {
    "Value": "ff649bce-0c4b-4395-9cdd-02039acb7cb3"
  },
  "Identifier": null,
  "TaxIdentifier": null,
  "AdditionalTaxIdentifier": null,
  "BillingCode": null,
  "AccountingCode": null,
  "InvoiceDueInterval": {
    "Value": "P2DT23H"
  },
  "ContactPerson": {
    "Value": "John Snow"
  },
  "Contact": {
    "Value": "John Snow"
  },
  "Notes": {
    "Value": "Notes"
  },
  "Iata": {
    "Value": "PAO"
  },
  "Department": {
    "Value": "Marketing"
  },
  "DunsNumber": {
    "Value": "123456789"
  },
  "CreditRating": {
    "Basic": {
      "Value": "PaymentRequiredUpfront"
    }
  },
  "ExternalIdentifier": {
    "Value": "4321"
  },
  "ReferenceIdentifier": {
    "Value": "ff64395-9cdd-4395-9cdd-02039acb7cb3"
  },
  "WebsiteUrl": {
    "Value": "https://www.mews.com"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `CompanyId` | string | required | Unique identifier of the [Company](companies.md#company). |
| `Name` | [String update value](_objects.md#string-update-value) | optional |  |
| `MotherCompanyId` | [String update value](_objects.md#string-update-value) | optional |  |
| `InvoicingEmail` | [String update value](_objects.md#string-update-value) | optional |  |
| `WebsiteUrl` | [String update value](_objects.md#string-update-value) | optional |  |
| `InvoiceDueInterval` | [String update value](_objects.md#string-update-value) | optional |  |
| `Options` | [CompanyOptionUpdateParameters](companies.md#companyoptionupdateparameters) | optional | Options of the company. |
| `CreditRating` | [CreditRatingUpdateParameters](companies.md#creditratingupdateparameters) | optional | Credit rating to define creditworthiness of the company. |
| `Department` | [String update value](_objects.md#string-update-value) | optional |  |
| `DunsNumber` | [String update value](_objects.md#string-update-value) | optional |  |
| `ReferenceIdentifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `AccountingCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `AdditionalTaxIdentifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `BillingCode` | [String update value](_objects.md#string-update-value) | optional |  |
| `Contact` | [String update value](_objects.md#string-update-value) | optional |  |
| `ContactPerson` | [String update value](_objects.md#string-update-value) | optional |  |
| `Identifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `Iata` | [String update value](_objects.md#string-update-value) | optional |  |
| `Notes` | [String update value](_objects.md#string-update-value) | optional |  |
| `TaxIdentifier` | [String update value](_objects.md#string-update-value) | optional |  |
| `Telephone` | [String update value](_objects.md#string-update-value) | optional |  |
| `ExternalIdentifier` | [String update value](_objects.md#string-update-value) | optional, max length 255 characters |  |

#### CompanyOptionUpdateParameters
Options of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `AddFeesToInvoices` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `AddTaxDeductedPaymentToInvoices` | [Bool update value](_objects.md#bool-update-value) | optional |  |

#### CreditRatingUpdateParameters
Credit rating to define creditworthiness of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Basic` | [String update value](_objects.md#string-update-value) | optional |  |

### Response

```javascript
{
  "Companies": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
      "Name": "Sample Company 1",
      "IsActive": true,
      "Number": 11,
      "Identifier": null,
      "TaxIdentifier": null,
      "AdditionalTaxIdentifier": null,
      "ElectronicInvoiceIdentifier": null,
      "InvoiceDueInterval": "P2DT23H",
      "AccountingCode": null,
      "MotherCompanyId": null,
      "CreatedUtc": "2022-07-11T09:56:54Z",
      "UpdatedUtc": "2022-07-11T09:56:54Z",
      "AddressId": "bab7441c-4b82-43bc-8001-ab0400a346ec",
      "BillingCode": null,
      "Iata": "PAO",
      "Telephone": "111-222-333",
      "InvoicingEmail": "sample1@mews.com",
      "ContacPerson": "Sample Person 1",
      "Contact": "Contact Info 1",
      "Notes": "Note 1",
      "Options": {
        "Invoiceable": true,
        "AddFeesToInvoices": true
      },
      "Department": "Sales",
      "DunsNumber": "123456789",
      "CreditRating": {
        "Basic": "PaymentRequiredUpfront"
      },
      "ReferenceIdentifier": "da34b396-77e3-495a-bd61-aecf00a3f19d",
      "WebsiteUrl": "https://www.mewssystems.com",
      "ExternalIdentifier": "company0001"
    },
    {
      "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
      "ChainId": "5fcd1933-22f2-40b9-84da-7db04cbecec2",
      "Name": "Sample Company 2",
      "IsActive": true,
      "Number": 12,
      "Identifier": null,
      "TaxIdentifier": null,
      "AdditionalTaxIdentifier": null,
      "ElectronicInvoiceIdentifier": null,
      "InvoiceDueInterval": "P2DT23H",
      "AccountingCode": null,
      "MotherCompanyId": null,
      "CreatedUtc": "2022-07-11T09:56:54Z",
      "UpdatedUtc": "2022-07-11T09:56:54Z",
      "AddressId": null,
      "BillingCode": null,
      "Iata": "PAO",
      "Telephone": "111-222-333",
      "InvoicingEmail": "sample2@mews.com",
      "ContacPerson": "Sample Person 2",
      "Contact": "Contact Info 2",
      "Notes": "Note 2",
      "Options": {
        "Invoiceable": true,
        "AddFeesToInvoices": false
      },
      "Department": "Accounting",
      "DunsNumber": "987654321",
      "CreditRating": {
        "Basic": "CreditOk"
      },
      "ReferenceIdentifier": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "WebsiteUrl": "https://www.mews.com",
      "ExternalIdentifier": "company0002"
    }
  ],
  "Cursor": "da34b396-41f7-47f6-8847-aecf00a3f19e"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Companies` | array of [Company](companies.md#company) | required | The company profiles of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest company item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older companies. If [Limitation](../guidelines/pagination.md#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

## Delete companies

Deletes specified companies.

### Request

`[PlatformAddress]/api/connector/v1/companies/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CompanyIds": [
    "eb02cbff-353d-48ec-97da-7def2305a5c5",
    "63551515-1740-49b3-914e-309a8b1429f0"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `CompanyIds` | array of string | required, max 1000 items | Unique identifiers of the companies to be deleted. |

### Response

```javascript
{}
```
