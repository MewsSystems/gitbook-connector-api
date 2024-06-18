<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Exchange rates

## Get all exchange rates

Returns all available exchange rates among currencies of the [Enterprise](configuration.md#enterprise).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Ids` | array of string | optional | Unique identifiers of the Exchange Rates. If not specified, the operation returns all exchange rates. |
| `EnterpriseIds` | array of string | optional | Unique identifiers of the [Enterprises](configuration.md#enterprise). If not specified, the operation returns the exchange rates for all enterprises within scope of the Access Token. |

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
| `ExchangeRates` | array of [Exchange rate](exchangerates.md#exchange-rate) | required | The available exchange rates. |

#### Exchange rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the Exchange Rate. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](configuration.md#enterprise) to which the Exchange Rate belongs. |
| `SourceCurrency` | string | required | ISO-4217 code of the source [Currency](currencies.md#currency). |
| `TargetCurrency` | string | required | ISO-4217 code of the target [Currency](currencies.md#currency). |
| `Value` | number | required | The exchange rate from the source currency to the target currency. |
