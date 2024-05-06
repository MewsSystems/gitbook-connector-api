# Exchange rates

## Get all exchange rates

Returns all available exchange rates among currencies of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/configuration/#enterprise).

### Request

`[PlatformAddress]/api/connector/v1/exchangeRates/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0"
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
| `Ids` | array of string | optional |  |
| `EnterpriseIds` | array of string | optional |  |

### Response

```javascript
{
  "ExchangeRates": [
    {
      "SourceCurrency": "EUR",
      "TargetCurrency": "GBP",
      "Value": 0.8505342
    },
    {
      "SourceCurrency": "GBP",
      "TargetCurrency": "EUR",
      "Value": 1.1757317
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ExchangeRates` | array of [Exchange rate](#ExchangeRate) | required | The available exchange rates. |
| `Cursor` | string | optional |  |

#### Exchange rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `EnterpriseId` | string | required |  |
| `SourceCurrency` | string | required | ISO-4217 code of the source [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency). |
| `TargetCurrency` | string | required | ISO-4217 code of the target [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency). |
| `Value` | number | required | The exchange rate from the source currency to the target currency. |
