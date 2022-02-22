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

### Response

```javascript
{
    "ExchangeRates": [
        {
            "SourceCurrency": "EUR",
            "TargetCurrency": "GBP",
            "Value": 0.85053421
        },
        {
            "SourceCurrency": "GBP",
            "TargetCurrency": "EUR",
            "Value": 1.17573165
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ExchangeRates` | array of [Exchange rate](#exchange-rate) | required | The available exchange rates. |

#### Exchange rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SourceCurrency` | string | required | ISO-4217 code of the source [Currency](currencies.md#currency). |
| `TargetCurrency` | string | required | ISO-4217 code of the target [Currency](currencies.md#currency). |
| `Value` | number | required | The exchange rate from the source currency to the target currency. |
