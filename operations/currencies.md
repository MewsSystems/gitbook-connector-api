<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Currencies

## Get all currencies

Returns all currencies supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/currencies/getAll`

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
| `AccessToken` | string | required | Access token of the client application. |
| `ClientToken` | string | required | Token identifying the client application. |

### Response

```javascript
{
  "Currencies": [
    {
      "Code": "USD",
      "Precision": 2
    },
    {
      "Code": "GBP",
      "Precision": 2
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currencies` | array of [Currency](#currency) | optional | The supported currencies. |

#### Currency

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional | ISO-4217 three-letter code, e.g. USD or GBP. |
| `Precision` | integer | required | Precision of the currency (count of decimal places). |
