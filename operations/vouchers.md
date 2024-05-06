# Vouchers

## Get all vouchers

Returns all rate vouchers filtered by [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service), voucher code or voucher identifier. Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/vouchers/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ServiceIds": [
    "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
  ],
  "VoucherIds": [
    "fe568bbd-1ecb-4bb2-bf77-96c3698de20d"
  ],
  "VoucherCodeValues": [
    "TEST-VOUCHER-CODE"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-10-10T00:00:00Z",
    "EndUtc": "2023-10-17T00:00:00Z"
  },
  "ExternalIdentifiers": [
    "Voucher-001",
    "Voucher-002"
  ],
  "Extent": {
    "Vouchers": true,
    "VoucherCodes": true,
    "VoucherAssignments": true,
    "Companies": false,
    "Rates": false
  },
  "ActivityStates": [
    "Active"
  ],
  "Limitation": {
    "Count": 10
  }
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
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Extent` | object | required | Extent of data to be returned. Whether only specific voucher info should be returned or related items as well. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service) where the vouchers belong to. |
| `VoucherIds` | array of string | optional, max 1000 items | Unique identifiers of vouchers. |
| `VoucherCodeValues` | array of string | optional, max 1000 items | Value of voucher codes used by customers. |
| `ActivityStates` | array of string | optional, max 1000 items | Whether to return only active, only deleted or both records. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of [Voucher](https://mews-systems.gitbook.io/connector-api/operations/#voucher) from external systems. |

#### VoucherExtent
Extent of data to be returned. Whether only specific voucher info should be returned or related items as well.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Vouchers` | boolean | required |  |
| ~~`VoucherCodes`~~ | boolean | required |  |
| `VoucherAssignments` | boolean | required |  |
| ~~`Companies`~~ | boolean | required |  |
| `Rates` | boolean | required |  |

### Response

```javascript
{
  "Vouchers": [
    {
      "Id": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "Type": "Public",
      "Name": "Weekend Voucher",
      "CreatedUtc": "2018-11-29T08:17:05Z",
      "UpdatedUtc": "2020-10-30T13:38:49Z",
      "ActivityState": "Active",
      "CompanyId": "3506994b-3c0b-49ba-9f57-ac4700641440",
      "TravelAgencyId": null,
      "ExternalIdentifier": "VCHR-278"
    }
  ],
  "VoucherCodes": [
    {
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "Value": "TEST-VOUCHER-CODE",
      "ValidityStartUtc": null,
      "ValidityEndUtc": null,
      "CreatedUtc": "2020-10-30T13:37:16Z",
      "UpdatedUtc": "2020-10-30T13:37:16Z",
      "ActivityState": "Active"
    },
    {
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "Value": "05400269B23A59C649E4",
      "ValidityStartUtc": "2020-10-09T22:00:00Z",
      "ValidityEndUtc": "2020-10-09T22:00:00Z",
      "CreatedUtc": "2020-10-09T15:08:14Z",
      "UpdatedUtc": "2020-10-09T15:08:14Z",
      "ActivityState": "Active"
    }
  ],
  "VoucherAssignments": [
    {
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "RateId": "6639eaa9-bbe0-46c0-94a2-aa5d00a2353c"
    },
    {
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "RateId": "61133a42-41d2-4e46-b5b0-ab1701268b75"
    }
  ],
  "Rates": null,
  "Companies": null,
  "Cursor": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Vouchers` | array of [Voucher](#Voucher) | optional | Details about vouchers added to the system. |
| `VoucherCodes` | array of [Voucher code](#VoucherCode) | optional | Information about voucher codes used by customers. |
| `VoucherAssignments` | array of [Voucher assignment](#VoucherAssignment) | optional | The assignments between vouchers and [Rates](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate). |
| `Rates` | array of [Rate](#Rate) | optional | The assigned rates. |
| `Companies` | array of [Company](#Company) | optional | The related companies and travel agencies. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Voucher

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of voucher. |
| `ServiceId` | string | required | Unique identifier of [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) the voucher belongs to. |
| `Name` | string | required | Internal name of the voucher. |
| `CreatedUtc` | string | required | Creation date and time of the voucher in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the voucher in UTC timezone in ISO 8601 format. |
| `Type` | [VoucherType](#X-Ref-Name-VoucherType) | required |  |
| `ActivityState` | [ActivityState](#X-Ref-Name-ActivityState) | required |  |
| `CompanyId` | string | optional | Unique identifier of [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) the voucher is related to. |
| `TravelAgencyId` | string | optional | Unique identifier of [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) with [Travel agency contract](https://mews-systems.gitbook.io/connector-api/operations/companycontracts/#travel-agency-contract) the voucher is related to. |
| `OccupiableIntervalStartUtc` | string | optional |  |
| `OccupiableIntervalEndUtc` | string | optional |  |
| `ExternalIdentifier` | string | optional | Identifier of the voucher from external system. |

#### VoucherType

- `Public`
- `PartnerCompany`
- `TravelAgency`

#### ActivityState

- `Deleted`
- `Active`

#### ActivityState

- `Deleted`
- `Active`

#### Voucher code

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the voucher code. |
| `VoucherId` | string | required | Unique identifier of [Voucher](https://mews-systems.gitbook.io/connector-api/operations/#voucher) the code belongs to. |
| `Value` | string | optional | Value of voucher code used by customers. |
| `ValidityStartUtc` | string | optional | If specified, marks the beginning of interval in which the code can be used. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of interval in which the code can be used. |
| `CreatedUtc` | string | optional | Creation date and time of the voucher in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | optional | Last update date and time of the voucher in UTC timezone in ISO 8601 format. |
| `ActivityState` | string | optional | Whether voucher code is active or deleted. |

#### Voucher assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherId` | string | required | Unique identifier of [Voucher](https://mews-systems.gitbook.io/connector-api/operations/#voucher). |
| `RateId` | string | required | Unique identifier of [Rate](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate) the voucher is assigned with. |

#### Rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](https://mews-systems.gitbook.io/connector-api/operations/#rate-group) where the rate belongs. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `BaseRateId` | string | optional | Unique identifier of the base [Rate](https://mews-systems.gitbook.io/connector-api/operations/#rate). |
| `BusinessSegmentId` | string | optional | Unique identifier of the [Business segment](https://mews-systems.gitbook.io/connector-api/operations/businesssegments/#business-segment). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsEnabled` | boolean | required | Whether the rate is currently available to customers. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Type` | [RateType](#X-Ref-Name-RateType) | required | Type of the rate |
| `Name` | string | optional | Name of the rate (in the default language). |
| `ShortName` | string | optional | Short name of the rate (in the default language). |
| `UpdatedUtc` | string | required |  |
| `ExternalNames` | object | optional | All translations of the external name of the rate. |
| `Description` | object | optional | All translations of the description of the rate. |
| `ExternalIdentifier` | string | optional | Identifier of the rate from external system. |

#### RateType

- `Public`
- `Private`
- `AvailabilityBlock`

#### RateType

- `Public`
- `Private`
- `AvailabilityBlock`

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
| `Options` | object | required | Options of the company. |
| `CreditRating` | object | required | Credit rating to define creditworthiness of the company. |
| `Department` | string | optional | The internal segmentation of a company, e.g. sales department. |
| `DunsNumber` | string | optional | The Dun &amp; Bradstreet unique 9-digit DUNS number. |
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
| `CreatedUtc` | string | optional | Date of [Company](https://mews-systems.gitbook.io/connector-api/operations/#company) creation date and time. |
| `UpdatedUtc` | string | optional | Date of [Company](https://mews-systems.gitbook.io/connector-api/operations/#company) last update date and time. |
| `Address` | object | required | Address of the customer. |
| `AddressId` | string | optional | Unique identifier of the company [Address](https://mews-systems.gitbook.io/connector-api/operations/addresses/#account-address). |
| `MergeTargetId` | string | optional |  |
| ~~`TaxIdentificationNumber`~~ | string | optional |  |
| `ExternalIdentifier` | string | optional | Identifier of company from external system. |
| `IsUpdatedByMe` | boolean | optional |  |

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

#### OldAddress
Address of the customer.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `CountryCode` | string | optional |  |
| `CountrySubdivisionCode` | string | optional |  |
| `Latitude` | number | optional |  |
| `Longitude` | number | optional |  |

## Add vouchers

Adds the specified vouchers to the specified [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service). Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/vouchers/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "VoucherParameters": [
    {
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "Name": "Weekend Voucher",
      "Type": "Public",
      "CompanyId": null,
      "AssignedRateIds": [
        "181f8cdd-04ee-4bf5-ba3e-44c108eca3cb",
        "8bebeddc-9137-432d-810c-1b998a90ac9a"
      ],
      "OccupiableIntervalStartUtc": null,
      "OccupiableIntervalEndUtc": null,
      "ExternalIdentifier": null
    },
    {
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "Name": "Sample company voucher",
      "Type": "PartnerCompany",
      "CompanyId": "3506994b-3c0b-49ba-9f57-ac4700641440",
      "AssignedRateIds": [
        "181f8cdd-04ee-4bf5-ba3e-44c108eca3cb",
        "8bebeddc-9137-432d-810c-1b998a90ac9a"
      ],
      "OccupiableIntervalStartUtc": "2023-12-31T22:00:00Z",
      "OccupiableIntervalEndUtc": "2024-01-01T22:00:00Z",
      "ExternalIdentifier": "VCHR-278"
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
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `VoucherParameters` | array of [VoucherAddParameters](#VoucherAddParameters) | required, max 1000 items | Vouchers to be added. |

#### VoucherAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required |  |
| `Name` | string | required |  |
| `Type` | [VoucherType](#X-Ref-Name-VoucherType) | required |  |
| `CompanyId` | string | optional |  |
| `AssignedRateIds` | array of string | optional, max 5 items |  |
| `OccupiableIntervalStartUtc` | string | optional |  |
| `OccupiableIntervalEndUtc` | string | optional |  |
| `ExternalIdentifier` | string | optional |  |

### Response

```javascript
{
  "Vouchers": [
    {
      "Id": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "Name": "Weekend Voucher",
      "CreatedUtc": "2023-12-01T08:17:05Z",
      "UpdatedUtc": "2023-12-02T13:38:49Z",
      "Type": "Public",
      "ActivityState": "Active",
      "CompanyId": null,
      "TravelAgencyId": null,
      "OccupiableIntervalStartUtc": null,
      "OccupiableIntervalEndUtc": null,
      "ExternalIdentifier": null
    },
    {
      "Id": "f4a9942c-2616-4074-b1f4-4b959515e933",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "Name": "Sample company voucher",
      "CreatedUtc": "2023-12-01T08:17:05Z",
      "UpdatedUtc": "2023-12-02T13:38:49Z",
      "Type": "PartnerCompany",
      "ActivityState": "Active",
      "CompanyId": "3506994b-3c0b-49ba-9f57-ac4700641440",
      "TravelAgencyId": null,
      "OccupiableIntervalStartUtc": "2023-12-31T22:00:00Z",
      "OccupiableIntervalEndUtc": "2024-01-01T22:00:00Z",
      "ExternalIdentifier": "VCHR-278"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Vouchers` | array of [Voucher](#Voucher) | optional | Details about vouchers added to the system. |

## Update vouchers

Updates information about the specified vouchers. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/vouchers/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "VoucherUpdates": [
    {
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "Name": {
        "Value": "Weekend Voucher"
      },
      "Type": {
        "Value": "Public"
      },
      "CompanyId": null,
      "AssignedRateIds": {
        "Value": [
          "181f8cdd-04ee-4bf5-ba3e-44c108eca3cb",
          "8bebeddc-9137-432d-810c-1b998a90ac9a"
        ]
      },
      "OccupiableIntervalStartUtc": null,
      "OccupiableIntervalEndUtc": null,
      "ExternalIdentifier": null
    },
    {
      "VoucherId": "f4a9942c-2616-4074-b1f4-4b959515e933",
      "Name": {
        "Value": "Weekend Voucher"
      },
      "Type": {
        "Value": "PartnerCompany"
      },
      "CompanyId": {
        "Value": "3506994b-3c0b-49ba-9f57-ac4700641440"
      },
      "AssignedRateIds": {
        "Value": [
          "181f8cdd-04ee-4bf5-ba3e-44c108eca3cb",
          "8bebeddc-9137-432d-810c-1b998a90ac9a"
        ]
      },
      "OccupiableIntervalStartUtc": {
        "Value": "2023-12-31T22:00:00Z"
      },
      "OccupiableIntervalEndUtc": {
        "Value": "2024-01-01T22:00:00Z"
      },
      "ExternalIdentifier": {
        "Value": "VCHR-278"
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
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `VoucherUpdates` | array of [VoucherUpdateParameters](#VoucherUpdateParameters) | required, max 1000 items | Details of voucher updates. |

#### VoucherUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherId` | string | required |  |
| `Name` | object | required |  |
| `Type` | [VoucherType](#X-Ref-Name-VoucherType) | required |  |
| `CompanyId` | object | required |  |
| `AssignedRateIds` | object | required |  |
| `OccupiableIntervalStartUtc` | object | required |  |
| `OccupiableIntervalEndUtc` | object | required |  |
| `ExternalIdentifier` | object | required |  |

#### GuidIEnumerableUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of string | optional |  |

### Response

```javascript
{
  "Vouchers": [
    {
      "Id": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "Name": "Weekend Voucher",
      "CreatedUtc": "2023-12-01T08:17:05Z",
      "UpdatedUtc": "2023-12-02T13:38:49Z",
      "Type": "Public",
      "ActivityState": "Active",
      "CompanyId": null,
      "TravelAgencyId": null,
      "OccupiableIntervalStartUtc": null,
      "OccupiableIntervalEndUtc": null,
      "ExternalIdentifier": null
    },
    {
      "Id": "f4a9942c-2616-4074-b1f4-4b959515e933",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "Name": "Sample company voucher",
      "CreatedUtc": "2023-12-01T08:17:05Z",
      "UpdatedUtc": "2023-12-02T13:38:49Z",
      "Type": "PartnerCompany",
      "ActivityState": "Active",
      "CompanyId": "3506994b-3c0b-49ba-9f57-ac4700641440",
      "TravelAgencyId": null,
      "OccupiableIntervalStartUtc": "2023-12-31T22:00:00Z",
      "OccupiableIntervalEndUtc": "2024-01-01T22:00:00Z",
      "ExternalIdentifier": "VCHR-278"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Vouchers` | array of [Voucher](#Voucher) | optional | Details about vouchers added to the system. |

## Delete vouchers

Delete specified vouchers. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/vouchers/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "VoucherIds": [
    "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
    "f4a9942c-2616-4074-b1f4-4b959515e933"
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
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `VoucherIds` | array of string | required, max 1000 items | Unique identifiers of the vouchers to be deleted. |

### Response

```javascript
{}
```
