# Companies

## Get all companies

Returns all company profiles of the enterprise, possibly filtered by identifiers, names or other filters.

### Request

`[PlatformAddress]/api/connector/v1/companies/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
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
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Ids` | array of string | optional, max 1000 items | Unique identifiers of [Companies](#company). |
| `Names` | array of string | optional, max 1000 items | Names of [Companies](#company). |
| `CreatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval of [Company](#company) creation date and time. |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval of [Company](#company) last update date and time. |

#### Time interval

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "Companies": [
        {
            "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
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
            "BillingCode": null,
            "Iata": "PAO",
            "Telephone": "111-222-333",
            "InvoicingEmail": "sample1@mews.com",
            "ContacPerson": "Sample Person 1",
            "Contact": "Contact Info 1",
            "Notes": "Note 1",
            "Options": {
                "Invoiceable": true
            }
        },
        {
            "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
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
            "BillingCode": null,
            "Iata": "PAO",
            "Telephone": "111-222-333",
            "InvoicingEmail": "sample2@mews.com",
            "ContacPerson": "Sample Person 2",
            "Contact": "Contact Info 2",
            "Notes": "Note 2",
            "Options": {
                "Invoiceable": true
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Companies` | array of [Company](#company) | required | The company profiles of the enterprise. |

#### Company

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the company. |
| `Name` | string | required | Name of the company. |
| `IsActive` | boolean | required | Whether the company is still active. |
| `Number`| number | required | Unique number of the company. |
| `Identifier` | string | optional | Identifier of the company \(e.g. legal identifier\). |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifier of the company. |
| `ElectronicInvoiceIdentifier` | string | optional | Electronic invoice identifier of the company. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `AccountingCode` | string | optional | Accounting code of the company. |
| `MotherCompanyId` | guid | optional | Unique identifier of mother company. |
| `CreatedUtc` | string | optional | Date of [Company](#company) creation date and time. |
| `UpdatedUtc` | string | optional | Date of [Company](#company) last update date and time. |
| `BillingCode` | string | optional | Billing code of the company. |
| `Iata` | string | optional | Iata of the company. |
| `Telephone` | string | optional | Contact telephone number. |
| `InvoicingEmail` | string | optional | Email for issuing invoices to the company. |
| `ContactPerson` | string | optional | Contact person of the company. |
| `Contact` | string | optional | Contact of the company. |
| `Notes` | string | optional | Additional notes. |
| `Options` | [Company options](#company-options) | required | Options of the company. |

#### Company options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | boolean | required | Whether the company is invoiceable or not. |

## Add company

Adds a new company to the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/companies/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Name": "Mews",
    "Options": {
        "Invoiceable": true
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
    "Iata": "PAO"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Name` | string | required | Name of the company. |
| `Options` | [Company option parameters](#company-options-parameters) | required | Options of the company. |
| `MotherCompanyId` | string | optional | Unique identifier of the mother company. |
| `Identifier` | string | optional | Identifier of the company (e.g. legal identifier). |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifer of the company. |
| `BillingCode` | string | optional | Billing code of the company. |
| `AccountingCode` | string | optional | Accounting code of the company. |
| `Address` | [Address parameters](customers.md#address-parameters) | optional | Address of the company. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `ContactPerson` | string | optional | Contact person of the company. |
| `Contact` | string | optional | Contact of the company. |
| `Notes` | string | optional | Notes of the company. |
| `Iata` | string | optional | Iata of the company. |

#### Company options parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | bool | required | Whether the company is invoiceable or not. |

### Response

Same structure as in [Get all companies](#get-all-companies) operation.

## Update company

Updates information of the company.

### Request

`[PlatformAddress]/api/connector/v1/companies/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CompanyId": "7a1e4d67-d6a2-4a4c-a464-ab1100bea786",
    "Name": {
        "Value": "Sample company name"
    },
    "Options": {
        "Invoiceable": {
            "Value": true
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
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CompanyId` | string | required | Unique identifier of the [Company](#company). |
| `Name` | [String update value](#string-update-value) | optional | Name of the company \(or `null` if the name should not be updated\). |
| `Options` | [Options update value](#company-options-update-value) | optional | Options of the company. |
| `MotherCompanyId` | [String update value](#string-update-value) | optional | Unique identifier of the mother company \(or `null` if the mother company should not be updated\). |
| `Identifier` | [String update value](#string-update-value) | optional | Identifier of the company, e.g. legal identifier \(or `null` if the identifier should not be updated\). |
| `TaxIdentifier` | [String update value](#string-update-value) | optional | Tax identification number of the company \(or `null` if the tax identifier should not be updated\). |
| `AdditionalTaxIdentifier` | [String update value](#string-update-value) | optional | Additional tax identifer of the company \(or `null` if the additional tax identifier should not be updated\). |
| `BillingCode` | [String update value](#string-update-value) | optional | Billing code of the company \(or `null` if the billing code should not be updated\). |
| `AccountingCode` | [String update value](#string-update-value) | optional | Accounting code of the company \(or `null` if the acounting code should not be updated\). |
| `InvoiceDueInterval` | [String update value](#string-update-value) | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `ContactPerson` | [String update value](#string-update-value) | optional | Contact person of the company. |
| `Contact` | [String update value](#string-update-value) | optional | Contact of the company. |
| `Notes` | [String update value](#string-update-value) | optional | Notes of the company. |
| `Iata` | [String update value](#string-update-value) | optional | Iata of the company. |

#### String update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | string | optional | Value which is to be updated. |

#### Company options update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | [Bool update value](#bool-update-value) | optional | Whether the company is invoiceable or not. |

#### Bool update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | bool | optional | Value which is to be updated. |

### Response

Same structure as in [Get all companies](#get-all-companies) operation.
