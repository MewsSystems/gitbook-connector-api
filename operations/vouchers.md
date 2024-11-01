<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Vouchers

## Get all vouchers

Returns all rate vouchers filtered by [Service](services.md#service), voucher code or voucher identifier. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Extent` | [Voucher Extent](vouchers.md#voucher-extent) | required | Extent of data to be returned. Whether only specific voucher info should be returned or related items as well. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Services](services.md#service) where the vouchers belong to. |
| `VoucherIds` | array of string | optional, max 1000 items | Unique identifiers of vouchers. |
| `CompanyIds` | array of string | optional, max 1000 items | Unique identifiers of the companies. |
| `VoucherCodeValues` | array of string | optional, max 1000 items | Value of voucher codes used by customers. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted, or both types of record. If not specified, both active and deleted records will be returned. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months |  |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of [Voucher](vouchers.md#voucher) from external systems. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

#### Voucher Extent
Extent of data to be returned. Whether only specific voucher info should be returned or related items as well.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Vouchers` | boolean | optional | Whether the response should contain main information about vouchers. |
| `VoucherAssignments` | boolean | optional | Whether the response should contain assignments between vouchers and Rates. |
| `Rates` | boolean | optional | Whether the response should contain detail of assigned rates. |
| ~~`VoucherCodes`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain voucher codes used by customers.~~ **Deprecated!** Use `voucherCodes/getAll`|
| ~~`Companies`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain detail of related companies.~~ **Deprecated!** Use `companies/getAll`|

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
| `Vouchers` | array of [Voucher](vouchers.md#voucher) | optional | Details about vouchers added to the system. |
| `VoucherCodes` | array of [Voucher code](vouchercodes.md#voucher-code) | optional | Information about voucher codes used by customers. |
| `VoucherAssignments` | array of [Voucher assignment](vouchers.md#voucher-assignment) | optional | The assignments between vouchers and [Rates](rates.md#rate). |
| `Rates` | array of [Rate for extent](rates.md#rate-for-extent) | optional | The assigned rates. |
| `Companies` | array of [Company](companies.md#company) | optional | The related companies and travel agencies. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Voucher

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of voucher. |
| `ServiceId` | string | required | Unique identifier of [Service](services.md#service) the voucher belongs to. |
| `Name` | string | required, max length 128 characters | Internal name of the voucher. |
| `CreatedUtc` | string | required | Creation date and time of the voucher in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the voucher in UTC timezone in ISO 8601 format. |
| `Type` | [Voucher Type](vouchers.md#voucher-type) | required | Type of the voucher. |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company) the voucher is related to. |
| `TravelAgencyId` | string | optional | Unique identifier of [Company](companies.md#company) with [Travel agency contract](companycontracts.md#travel-agency-contract) the voucher is related to. |
| `OccupiableIntervalStartUtc` | string | optional | Start of the time interval, expressed as the timestamp for the start of the first time unit, in UTC timezone ISO 8601 format (or null if the start time should not be updated). |
| `OccupiableIntervalEndUtc` | string | optional | End of the time interval, expressed as the timestamp for the start of the last time unit, in UTC timezone ISO 8601 format (or null if the end time should not be updated). |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the voucher from external system. |
| `IsActive` | boolean | required | Whether the voucher is still active. |
| ~~`ActivityState`~~ | ~~[Activity State](_objects.md#activity-state)~~ | ~~required~~ | ~~Whether voucher is active or deleted.~~ **Deprecated!** Use `IsActive` instead.|

#### Voucher Type

* `Public`
* `PartnerCompany`
* `TravelAgency`

#### Voucher assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherId` | string | required | Unique identifier of [Voucher](vouchers.md#voucher). |
| `RateId` | string | required | Unique identifier of [Rate](rates.md#rate) the voucher is assigned with. |

## Add vouchers

Adds the specified vouchers to the specified [Services](services.md#service). Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `VoucherParameters` | array of [Voucher Parameters](vouchers.md#voucher-parameters) | required, max 1000 items | Vouchers to be added. |

#### Voucher Parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required | Unique identifier of Service. |
| `Name` | string | required, max length 128 characters | Internal name of the voucher. |
| `Type` | [Voucher Type](vouchers.md#voucher-type) | required | Type of the voucher. |
| `CompanyId` | string | optional | Unique identifier of Company. |
| `AssignedRateIds` | array of string | optional, max 5 items | Unique identifiers of Rates. |
| `OccupiableIntervalStartUtc` | string | optional | Start of the interval in which the voucher can be applied. |
| `OccupiableIntervalEndUtc` | string | optional | End of the interval in which the voucher can be applied. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the voucher from external system. |

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
| `Vouchers` | array of [Voucher](vouchers.md#voucher) | optional | Details about vouchers added to the system. |

## Update vouchers

Updates information about the specified vouchers. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `VoucherUpdates` | array of [Vouchers update parameters](vouchers.md#vouchers-update-parameters) | required, max 1000 items | Details of voucher updates. |

#### Vouchers update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherId` | string | required | Unique identifier of the Voucher. |
| `Name` | [String update value](_objects.md#string-update-value) | optional, max length 128 characters | Internal name of the voucher (or `null` if the name should not be updated). |
| `Type` | [VoucherTypeUpdateValue](_objects.md#string-update-value) | optional | Type of the voucher e.g. 'Public', 'PartnerCompany' or 'TravelAgency' (or `null` if the type should not be updated). |
| `CompanyId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of Company (Company or Travel Agency) the voucher is related to. This is required for Type of `PartnerCompany` or `TravelAgency`. Use `null` if Company should not be updated. |
| `AssignedRateIds` | [GuidIEnumerableUpdateValue](_object.md#array-of-strings-update-value) | optional, max length 5 characters | Unique identifiers of Rates (or `null` should it not be updated). |
| `OccupiableIntervalStartUtc` | [String update value](_objects.md#string-update-value) | optional | Start of the interval in which the voucher can be applied (or `null` if the start time should not be updated). |
| `OccupiableIntervalEndUtc` | [String update value](_objects.md#string-update-value) | optional | End of the interval in which the voucher can be applied (or `null` if the end time should not be updated). |
| `ExternalIdentifier` | [String update value](_objects.md#string-update-value) | optional, max length 255 characters | Identifier of the voucher from external system (or `null` if the identifier should not be updated). |

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
| `Vouchers` | array of [Voucher](vouchers.md#voucher) | optional | Details about vouchers added to the system. |

## Delete vouchers

Delete specified vouchers. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `VoucherIds` | array of string | required, max 1000 items | Unique identifiers of the vouchers to be deleted. |

### Response

```javascript
{}
```
