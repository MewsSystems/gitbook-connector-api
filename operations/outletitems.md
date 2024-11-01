<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Outlet items

## Get all outlet items

Returns all outlet items of the enterprise that were consumed (posted) or will be consumed within the specified interval. If the `Currency` is specified, costs of the items are converted to that currency.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/outletItems/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ConsumedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "ClosedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "Currency": "EUR",
  "Limitation": {
    "Count": 100
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Ids` | array of string | optional, max 1000 items | Unique identifiers of the [Outlet items](#outlet-item). If not specified, the operation returns data for all [Outlet items](#outlet-item) within scope of the Access Token. |
| `ConsumedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Outlet item](#outlet-item) was consumed. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Outlet bill](#outlet-bill) was updated. |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Outlet bill](#outlet-bill) was closed. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](#currency) the item costs should be converted to. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "OutletItems": [
    {
      "Id": "f29821b7-1659-4c96-a8c7-3725d0f1509b",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "BillId": "5c82a9bd-729c-4f80-af48-a56ab3aebbf6",
      "AccountingCategoryId": "1131ddd1-fa2b-4150-bbf6-7fce94941f65",
      "Type": "Revenue",
      "Name": "sample revenue item",
      "UnitCount": 4,
      "UnitAmount": {
        "Currency": "EUR",
        "GrossValue": 11,
        "NetValue": 11,
        "TaxValues": []
      },
      "CreatedUtc": "2018-07-25T12:47:11Z",
      "ConsumedUtc": "2018-07-26T12:19:07Z",
      "UpdatedUtc": "2018-07-26T12:19:07Z",
      "ExternalIdentifier": null,
      "Notes": null
    },
    {
      "Id": "dfec07c6-e278-4ed0-932f-41bbd1f38039",
      "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
      "BillId": "7bdd3b53-7bb3-419d-8ff2-c9bde65d0c7e",
      "AccountingCategoryId": "7EDAB816-BF4E-40CC-8936-7BC0B222908D",
      "Type": "Payment",
      "Name": "sample payment item",
      "UnitCount": 77,
      "UnitAmount": {
        "Currency": "EUR",
        "GrossValue": 2,
        "NetValue": 2,
        "TaxValues": []
      },
      "CreatedUtc": "2018-07-25T16:25:28Z",
      "ConsumedUtc": "2018-07-26T10:11:08Z",
      "UpdatedUtc": "2018-07-26T10:11:08Z",
      "ExternalIdentifier": "PaymentReference123",
      "Notes": null
    }
  ],
  "OutletBills": [
    {
      "Id": "5c82a9bd-729c-4f80-af48-a56ab3aebbf6",
      "OutletId": "c9f09414-2fdf-41d6-bdb1-12158b01048e",
      "Number": "1305",
      "ClosedUtc": "2018-07-26T12:19:07Z",
      "UpdatedUtc": "2018-07-26T12:19:07Z",
      "Notes": null
    },
    {
      "Id": "7bdd3b53-7bb3-419d-8ff2-c9bde65d0c7e",
      "OutletId": "E0A29D6D-411E-4302-AA6D-9289935C5F14",
      "Number": "1306",
      "ClosedUtc": "2018-07-26T10:19:02Z",
      "UpdatedUtc": "2018-07-26T10:19:02Z",
      "Notes": null
    }
  ],
  "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OutletItems` | array of [Outlet item](outletitems.md#outlet-item) | required | The outlet items. |
| `OutletBills` | array of [Outlet bill](outletitems.md#outlet-bill) | required | The outlet bills of the items. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest outlet item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older outlet items. |

#### Outlet item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `BillId` | string | required | Unique identifier of the [Outlet bill](outletitems.md#outlet-bill) the item belongs to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](accountingcategories.md#accounting-category) the item belongs to. |
| `Type` | [Outlet item type](outletitems.md#outlet-item-type) | required | Type of the outlet item. |
| `Name` | string | optional | Name of the item. |
| `UnitCount` | integer | required | Unit count of the item. |
| `UnitAmount` | [Amount](_objects.md#amount) | required | Unit amount of the item. |
| `CreatedUtc` | string | required | Date and time of the item creation in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the item in UTC timezone in ISO 8601 format. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ExternalIdentifier` | string | optional | An identifier of this item from another system. |
| `Notes` | string | optional | Additional notes. |
| `PaymentCardPaymentId` | string | optional | Unique identifier of the payment card `Payment` this item is linked to. This is only applicable to items where `Type` is `Payment`. |
| ~~`UnitCost`~~ | ~~[Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07)~~ | ~~optional~~ | ~~Total price of the reservation.~~ **Deprecated!** Use `UnitAmount` instead.|

#### Outlet item type

* `Revenue`
* `NonRevenue`
* `Payment`

#### Outlet bill

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the bill. |
| `EnterpriseId` | string | required | Unique identifier of the Enterprise. |
| `OutletId` | string | required | Unique identifier of the [Outlet](outlets.md#outlet) where the bill was issued. |
| `Number` | string | optional | Number of the bill. |
| `ClosedUtc` | string | required | Date and time of the bill closure in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the bill in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes on the bill. |
