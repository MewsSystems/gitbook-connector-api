<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Companies

## Get all companies

Returns all company profiles of the enterprise, possibly filtered by identifiers, names or other filters.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
| `Names` | array of string | optional, max 1000 items | Names of [Companies](companies.md#company). |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted, or both types of record. If not specified, both active and deleted records will be returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | optional | Limitation on the quantity of data returned. |
| ~~`TimeFilter`~~ | ~~[Company Time Filter](companies.md#company-time-filter)~~ | ~~optional~~ | **Deprecated!** Use CreatedUtc or UpdatedUtc instead.|
| ~~`StartUtc`~~ | ~~string~~ | ~~optional~~ | **Deprecated!** Use CreatedUtc or UpdatedUtc instead.|
| ~~`EndUtc`~~ | ~~string~~ | ~~optional~~ | **Deprecated!** Use CreatedUtc or UpdatedUtc instead.|

#### Company Time Filter

* `Created`
* `Updated`

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

Adds a new company. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `Name` | string | required | Name of the company. |
| `MotherCompanyId` | string | optional | Unique identifier of the mother company. |
| `InvoicingEmail` | string | optional | Email for issuing invoices to the company. |
| `WebsiteUrl` | string | optional | The website url of the company. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `Options` | [Company Options Parameters](companies.md#company-options-parameters) | required | Options of the company. |
| `CreditRating` | [Credit rating parameters](companies.md#credit-rating-parameters) | optional | Credit rating to define creditworthiness of the company. |
| `Department` | string | optional | The internal segmentation of a company, e.g. sales department. |
| `DunsNumber` | string | optional | The Dun & Bradstreet unique 9-digit DUNS number. |
| `ReferenceIdentifier` | string | optional | External system identifier - custom identifier used by an external system such as an external database. |
| `AccountingCode` | string | optional | Accounting code of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifer of the company. |
| `BillingCode` | string | optional | Billing code of the company. |
| `Contact` | string | optional | Other contact details, such as telephone, email or similar. |
| `ContactPerson` | string | optional | Contact person of the company. |
| `Identifier` | string | optional | Fiscal or legal identifier of the company. |
| `Iata` | string | optional | Iata of the company. |
| `Notes` | string | optional | Notes of the company. |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `Telephone` | string | optional | Contact telephone number. |
| `Address` | [Address parameters](companies.md#address-parameters) | optional | New address details. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the company from external system. |

#### Company Options Parameters
Options of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | boolean | required | Whether the company is invoiceable or not. |
| `AddFeesToInvoices` | boolean | required | Whether the company has an additional fee applied for invoicing or not. |
| `AddTaxDeductedPaymentToInvoices` | boolean | required | Whether tax-deducted payments should be automatically added to invoices. |

#### Credit rating parameters
Credit rating to define creditworthiness of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Basic` | [Credit rating basic](companies.md#credit-rating-basic) | optional | Indicates the credit status of a company. |

#### Address parameters
New address details.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the Country. |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. DE-BW |

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
| `Options` | [Company Options](companies.md#company-options) | required | Options of the company. |
| `CreditRating` | [Credit Rating](companies.md#credit-rating) | required | Credit rating to define creditworthiness of the company. |
| `Department` | string | optional | The internal segmentation of a company, e.g. sales department. |
| `DunsNumber` | string | optional | The Dun & Bradstreet unique 9-digit DUNS number. |
| `ReferenceIdentifier` | string | optional | External system identifier - custom identifier used by an external system such as an external database. |
| `AccountingCode` | string | optional | Accounting code of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifier of the company. |
| `BillingCode` | string | optional | Billing code of the company. |
| `Contact` | string | optional | Other contact details, such as telephone, email or similar. |
| `ContactPerson` | string | optional | Contact person of the company. |
| `Identifier` | string | optional | Fiscal or legal identifier of the company. |
| `Iata` | string | optional | Iata of the company. |
| `IsActive` | boolean | required | Whether the company is still active. |
| `Notes` | string | optional | Additional notes. |
| `Number` | integer | required | Unique number of the company. |
| `DebtorNumber` | integer | required | Auto-generated unique identifier of the company (from 1 to 2,147,483,647). |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `Telephone` | string | optional | Contact telephone number. |
| `CreatedUtc` | string | optional | Date of [Company](companies.md#company) creation date and time. |
| `UpdatedUtc` | string | optional | Date of [Company](companies.md#company) last update date and time. |
| `AddressId` | string | optional | Unique identifier of the company [Address](addresses.md#account-address). |
| `MergeTargetId` | string | optional | Unique identifier of the account (Customer) to which this company is linked. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of company from external system. |
| ~~`ElectronicInvoiceIdentifier`~~ | ~~string~~ | ~~optional~~ | ~~Electronic invoice identifier of the company.~~ **Deprecated!** Use `AdditionalTaxIdentifier` instead.|
| ~~`Address`~~ | ~~[Address](configuration.md#address)~~ | ~~optional~~ | **Deprecated!** Use AddressId instead.|
| ~~`TaxIdentificationNumber`~~ | ~~string~~ | ~~optional~~ | **Deprecated!** Use TaxIdentifier instead.|

#### Company Options
Options of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | boolean | required | Whether the company is invoiceable or not. |
| `AddFeesToInvoices` | boolean | required | Whether the company has an additional fee applied for invoicing or not. |
| `AddTaxDeductedPaymentToInvoices` | boolean | required | Whether tax-deducted payments should be automatically added to invoices. |

#### Credit Rating
Credit rating to define creditworthiness of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Basic` | [Credit rating basic](companies.md#credit-rating-basic) | optional | Indicates the credit status of a company. |

#### Credit rating basic

* `CreditOk` - Company can book services.
* `PaymentRequiredUpfront` - Company must pay upfront.
* `LocalDecisionRequired` - Requires local approval.

## Update company

Updates information of the company. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `CompanyId` | string | required | Unique identifier of the [Company](companies.md#company). |
| `Name` | [String update value](_objects.md#string-update-value) | optional | Name of the company (or `null` if the name should not be updated). |
| `MotherCompanyId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the mother company (or `null` if the mother company should not be updated). |
| `InvoicingEmail` | [String update value](_objects.md#string-update-value) | optional | Email for issuing invoices to the company  (or `null` if the email for issuing invoices should not be updated). |
| `WebsiteUrl` | [String update value](_objects.md#string-update-value) | optional | The website url of the company (or `null` if the website url should not be updated). |
| `InvoiceDueInterval` | [String update value](_objects.md#string-update-value) | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format (or `null` if the interval should not be updated). |
| `Options` | [Company update options](companies.md#company-update-options) | optional | Options of the company (or `null` if the company options should not be updated). |
| `CreditRating` | [Credit rating update parameters](companies.md#credit-rating-update-parameters) | optional | Credit rating to define creditworthiness of the company (or `null` if the credit rating should not be updated). |
| `Department` | [String update value](_objects.md#string-update-value) | optional | The internal segmentation of a company, e.g. sales department (or `null` if the department should not be updated). |
| `DunsNumber` | [String update value](_objects.md#string-update-value) | optional | The Dun & Bradstreet unique 9-digit DUNS number (or `null` if the Duns number should not be updated). |
| `ReferenceIdentifier` | [String update value](_objects.md#string-update-value) | optional | External system identifier - custom identifier used by an external system such as an external database (or `null` if the identifier should not be updated). |
| `AccountingCode` | [String update value](_objects.md#string-update-value) | optional | Accounting code of the company (or `null` if the accounting code should not be updated). |
| `AdditionalTaxIdentifier` | [String update value](_objects.md#string-update-value) | optional | Additional tax identifier of the company (or `null` if the additional tax identifier should not be updated). |
| `BillingCode` | [String update value](_objects.md#string-update-value) | optional | Billing code of the company (or `null` if the billing code should not be updated). |
| `Contact` | [String update value](_objects.md#string-update-value) | optional | Other contact details, such as telephone, email or similar (or `null` if the contact should not be updated). |
| `ContactPerson` | [String update value](_objects.md#string-update-value) | optional | Contact person of the company (or `null` if the contact person should not be updated). |
| `Identifier` | [String update value](_objects.md#string-update-value) | optional | Fiscal or legal identifier of the company (or `null` if the identifier should not be updated). |
| `Iata` | [String update value](_objects.md#string-update-value) | optional | Iata of the company (or `null` if the Iata should not be updated). |
| `Notes` | [String update value](_objects.md#string-update-value) | optional | Notes of the company (or `null` if the notes should not be updated). |
| `TaxIdentifier` | [String update value](_objects.md#string-update-value) | optional | Tax identification number of the company (or `null` if the tax identifier should not be updated). |
| `Telephone` | [String update value](_objects.md#string-update-value) | optional | Contact telephone number (or `null` if the telephone number should not be updated). |
| `ExternalIdentifier` | [String update value](_objects.md#string-update-value) | optional, max length 255 characters | Identifier of the company from external system (or `null` if the External Identifier should not be updated). |

#### Company update options
Options of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | [Bool update value](_objects.md#bool-update-value) | optional | Whether the company is invoiceable or not (or `null` if the `Invoiceable` field should not be updated). |
| `AddFeesToInvoices` | [Bool update value](_objects.md#bool-update-value) | optional | Whether the company has an additional fee applied for invoicing or not (or `null` if the `AddFeesToInvoices` field should not be updated). |
| `AddTaxDeductedPaymentToInvoices` | [Bool update value](_objects.md#bool-update-value) | optional | Whether tax-deducted payments should be automatically added to invoices (or `null` if the `AddTaxDeductedPaymentToInvoices` field should not be updated). |

#### Credit rating update parameters
Credit rating to define creditworthiness of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Basic` | [Credit rating basic update value](_objects.md#string-update-value) | optional | Credit status of a company (or `null` if the credit status should not be updated). |

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
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `CompanyIds` | array of string | required, max 1000 items | Unique identifiers of the companies to be deleted. |

### Response

```javascript
{}
```
