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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `Bills` | array of [OutletBillParameters](#OutletBillParameters) | required | The new outlet bills. |

#### OutletBillParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OutletId` | string | required |  |
| `Number` | string | required |  |
| `ClosedUtc` | string | required |  |
| `Items` | array of [OutletItemParameters](#OutletItemParameters) | required |  |
| `AccountId` | string | optional |  |
| `Notes` | string | optional |  |

#### OutletItemParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required |  |
| `UnitCount` | integer | required |  |
| `UnitAmount` | object | required | Price of the product that overrides the price defined in Mews. |
| `ConsumedUtc` | string | required |  |
| `Type` | string | optional |  |
| `ExternalIdentifier` | string | optional |  |
| `Notes` | string | optional |  |
| `AccountingCategoryId` | string | optional |  |
| `AccountingCategory` | object | required |  |
| `UnitCost` | object | required |  |

#### AmountParameters
Price of the product that overrides the price defined in Mews.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `TaxCodes` | array of string | required |  |
| `NetValue` | number | optional |  |
| `GrossValue` | number | optional |  |

#### AccountingCategoryParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Name` | string | optional |  |

#### CostParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Amount` | number | required |  |
| `Currency` | string | required |  |
| `Tax` | number | required |  |

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
| `OutletBillIds` | array of string | optional | Array of unique identifiers of the added Outlet bills. |
