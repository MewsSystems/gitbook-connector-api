# Vouchers

## Get all vouchers

Returns all rate vouchers filtered by [Service](services.md#service), voucher code or voucher identifier.

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
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Services](services.md#service) where the vouchers belong to. |
| `VoucherIds` | array of string | optional, max 1000 items | Unique identifiers of vouchers. |
| `VoucherCodeValues` | array of string | optional, max 1000 items | Value of voucher codes used by customers. |
| `Extent` | [Voucher extent](#voucher-extent) | required | Extent of data to be returned. Whether only specific voucher info should be returned or related items as well. |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### Voucher extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Vouchers` | bool | optional | Whether the response should contain main information about vouchers. |
| `VoucherCodes` | bool | optional | Whether the response should contain voucher codes used by customers. |
| `VoucherAssignments` | bool | optional | Whether the response should contain assignments between vouchers and [Rates](rates.md#rate). |
| `Companies` | bool | optional | Whether the response should contain detail of related companies. |
| `Rates` | bool | optional | Whether the response should contain detail of assigned rates. |

#### Activity state

* `Active` - active records (the validity might be restricted by another parameter i.e. interval).
* `Deleted`- deleted records.

### Response

```javascript
{
    "Vouchers": [
        {
            "Id": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
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
| `Vouchers` | array of [Voucher](#voucher) | optional | Main information about voucher. |
| `VoucherCodes` | array of [Voucher code](#voucher-code) | optional | Information about voucher codes used by customers. |
| `VoucherAssignments` | array of [Voucher assignment](#voucher-assignment) | optional | The assignments between vouchers and [Rates](rates.md#rate). |
| `Rates` | array of [Rate](rates.md#rate) | optional | The assigned rates. |
| `Companies` | array of [Company](companies.md#company) | optional | The related companies and travel agencies. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Voucher

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of voucher. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `ServiceId` | string | required | Unique identifier of [Service](services.md#service) the voucher belongs to. |
| `Name` | string | required | Internal name of the voucher. |
| `CreatedUtc` | string | required | Creation date and time of the voucher in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the voucher in UTC timezone in ISO 8601 format. |
| `ActivityState` | string [Activity state](#activity-state) | required | Whether voucher is active or deleted. |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company) the voucher is related to. |
| `TravelAgencyId` | string | optional | Unique identifier of [Company](companies.md#company) with [Travel agency contract](companycontracts.md#travel-agency-contract) the voucher is related to. |
| `ExternalIdentifier` | string | optional, max 255 characters | Identifier of the voucher from external system. |

#### Voucher code

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherId` | string | required | Unique identifier of [Voucher](#voucher) the code belongs to. |
| `Value` | string | required | Value of voucher code used by customers. |
| `ValidityStartUtc` | string | optional | If specified, marks the beginning of interval in which the code can be used. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of interval in which the code can be used. |
| `CreatedUtc` | string | required | Creation date and time of the voucher in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the voucher in UTC timezone in ISO 8601 format. |
| `ActivityState` | string [Activity state](#activity-state) | required | Whether voucher code is active or deleted. |

#### Voucher assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherId` | string | required | Unique identifier of [Voucher](#voucher). |
| `RateId` | string | required | Unique identifier of [Rate](rates.md#rate) the voucher is assigned with. |
