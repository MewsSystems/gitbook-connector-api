<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Voucher codes

## Get all voucher codes

Returns all voucher codes filtered by [Voucher](vouchers.md#voucher) or other filter parameters. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/voucherCodes/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "VoucherCodeIds": [
    "8c364829-c7ae-4972-b67f-93ea704d7228",
    "dc9d3488-7fc4-4fc9-a524-14e6504d8734"
  ],
  "VoucherIds": [
    "fe568bbd-1ecb-4bb2-bf77-96c3698de20d"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-10-10T00:00:00Z",
    "EndUtc": "2023-10-17T00:00:00Z"
  },
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
| `VoucherCodeIds` | array of string | optional, max 1000 items | Unique identifiers of the voucher codes. |
| `VoucherIds` | array of string | optional, max 1000 items | Unique identifiers of vouchers. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of voucher code's last update date and time. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "VoucherCodes": [
    {
      "Id": "8c364829-c7ae-4972-b67f-93ea704d7228",
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "Value": "0E5856B0A73E62B7E446",
      "ValidityStartUtc": null,
      "ValidityEndUtc": null,
      "CreatedUtc": "2023-10-30T13:37:16Z",
      "UpdatedUtc": "2023-10-30T13:37:16Z",
      "ActivityState": "Active"
    },
    {
      "Id": "dc9d3488-7fc4-4fc9-a524-14e6504d8734",
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "Value": "021D047E42A5FD522CBA",
      "ValidityStartUtc": "2023-10-09T22:00:00Z",
      "ValidityEndUtc": "2023-10-09T22:00:00Z",
      "CreatedUtc": "2023-10-09T15:08:14Z",
      "UpdatedUtc": "2023-10-09T15:08:14Z",
      "ActivityState": "Active"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherCodes` | array of [Voucher code](vouchercodes.md#voucher-code) | required, max 1000 items | Information about voucher codes used by customers. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Add voucher codes

Adds voucher codes to the specified [Vouchers](vouchers.md#voucher). Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/voucherCodes/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "VoucherCodeParameters": [
    {
      "VoucherId": "8c364829-c7ae-4972-b67f-93ea704d7228",
      "Value": "0E5856B0A73E62B7E446",
      "ValidityStartUtc": "2023-10-09T22:00:00Z",
      "ValidityEndUtc": "2023-10-09T22:00:00Z"
    },
    {
      "VoucherId": "dc9d3488-7fc4-4fc9-a524-14e6504d8734",
      "Value": "021D047E42A5FD522CBA",
      "ValidityStartUtc": "2023-10-09T22:00:00Z",
      "ValidityEndUtc": "2023-10-09T22:00:00Z"
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
| `VoucherCodeParameters` | array of [Voucher code parameters](vouchercodes.md#voucher-code-parameters) | required, max 1000 items | Voucher codes to be added. |

#### Voucher code parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherId` | string | required | Unique identifier of [Voucher](#voucher) the code belongs to. |
| `Value` | string | required, max length 128 characters | Value of voucher code used by customers. |
| `ValidityStartUtc` | string | optional | If specified, marks the beginning of interval in which the code can be used. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of interval in which the code can be used. |

### Response

```javascript
{
  "VoucherCodes": [
    {
      "Id": "8c364829-c7ae-4972-b67f-93ea704d7228",
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "Value": "0E5856B0A73E62B7E446",
      "ValidityStartUtc": null,
      "ValidityEndUtc": null,
      "CreatedUtc": "2023-10-30T13:37:16Z",
      "UpdatedUtc": "2023-10-30T13:37:16Z",
      "ActivityState": "Active"
    },
    {
      "Id": "dc9d3488-7fc4-4fc9-a524-14e6504d8734",
      "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
      "Value": "021D047E42A5FD522CBA",
      "ValidityStartUtc": "2023-10-09T22:00:00Z",
      "ValidityEndUtc": "2023-10-09T22:00:00Z",
      "CreatedUtc": "2023-10-09T15:08:14Z",
      "UpdatedUtc": "2023-10-09T15:08:14Z",
      "ActivityState": "Active"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `VoucherCodes` | array of [Voucher code](vouchercodes.md#voucher-code) | required, max 1000 items | Information about voucher codes used by customers. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Voucher code

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the voucher code. |
| `VoucherId` | string | required | Unique identifier of [Voucher](vouchercodes.md#voucher) the code belongs to. |
| `Value` | string | optional | Value of voucher code used by customers. |
| `ValidityStartUtc` | string | optional | If specified, marks the beginning of interval in which the code can be used. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of interval in which the code can be used. |
| `CreatedUtc` | string | optional | Creation date and time of the voucher in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | optional | Last update date and time of the voucher in UTC timezone in ISO 8601 format. |
| `IsActive` | boolean | required | Whether the voucher code is still active. |
| ~~`ActivityState`~~ | ~~string~~ | ~~optional~~ | ~~Whether voucher code is active or deleted.~~ **Deprecated!** Use `IsActive` instead.|

## Delete voucher codes

Delete specified voucher codes. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/voucherCodes/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "VoucherCodeIds": [
    "8c364829-c7ae-4972-b67f-93ea704d7228",
    "dc9d3488-7fc4-4fc9-a524-14e6504d8734"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `VoucherCodeIds` | array of string | required, max 1000 items | Unique identifiers of the voucher codes to be deleted. |

### Response

```javascript
{}
```
