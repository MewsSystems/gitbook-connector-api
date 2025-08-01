<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Outlet bills

## Add outlet bills

Adds new outlet bills with their items.

### Request

`[PlatformAddress]/api/connector/v1/outletBills/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "Bills": [
    {
      "OutletId": "7700469f-7667-4ebd-a1c0-10380afc9bd0",
      "Number": "1257",
      "ClosedUtc": "2017-01-01T00:00:00Z",
      "Items": [
        {
          "Type": "Payment",
          "Name": "Cash payment",
          "UnitCount": 1,
          "UnitAmount": {
            "Currency": "GBP",
            "GrossValue": -25,
            "TaxCodes": [
              "UK-S"
            ]
          },
          "ConsumedUtc": "2017-01-01T00:00:00Z",
          "ExternalIdentifier": "PaymentReference123"
        },
        {
          "Type": "Revenue",
          "Name": "Beer",
          "UnitCount": 10,
          "UnitAmount": {
            "Currency": "GBP",
            "GrossValue": 2.5,
            "TaxCodes": [
              "UK-S"
            ]
          },
          "ConsumedUtc": "2017-01-01T00:00:00Z",
          "AccountingCategoryId": null
        }
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Bills` | array of [Outlet bill parameters](outletbills.md#outlet-bill-parameters) | required, max 1000 items | The new outlet bills. |

#### Outlet bill parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OutletId` | string | required | Unique identifier of the `Outlet` where the bill was issued. |
| `Number` | string | required | Number of the bill. |
| `ClosedUtc` | string | required | Date and time of the bill closure in UTC timezone in ISO 8601 format. |
| `Items` | array of [Outlet item parameters](outletbills.md#outlet-item-parameters) | required | The items on the bill. |
| `AccountId` | string | optional | Unique identifier of the `Account` to be assigned to the bill. |
| `Notes` | string | optional | Additional notes on the bill. |

#### Outlet item parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required | Name of the item. |
| `UnitCount` | integer | required | Unit count of the item. |
| `UnitAmount` | [Amount parameters](_objects.md#amount-parameters) | required | Unit amount of the item. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `Type` | [Outlet item type](outletitems.md#outlet-item-type) | required | Type of the outlet item. |
| `ExternalIdentifier` | string | optional, max length 255 characters | An identifier of this item from another system. |
| `Notes` | string | optional | Additional notes of the item. |
| `AccountingCategoryId` | string | optional | Unique identifier of an `AccountingCategory` to be assigned to the item. |

### Response

```javascript
{
  "OutletBillIds": [
    "f2ee1bd2-dd55-4cd3-bab1-ab6800bf0301"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OutletBillIds` | array of string | required | Array of unique identifiers of the added Outlet bills. |
