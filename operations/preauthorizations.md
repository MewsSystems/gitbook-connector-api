# Preauthorizations

## Get all preauthorizations by customers

Returns all preauthorizations of specified customers.

### Request

`[PlatformAddress]/api/connector/v1/preauthorizations/getAllByCustomers`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CustomerIds": [
    "e98995b0-140a-4208-bbeb-b77f2c43d6ee"
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
| `CustomerIds` | array of string | required, max 1000 items | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |

### Response

```javascript
{
  "Preauthorizations": [
    {
      "Amount": {
        "Currency": "EUR",
        "NetValue": null,
        "GrossValue": 10,
        "TaxValues": []
      },
      "Code": null,
      "CreditCardId": "e417dfe8-c813-4938-837b-36081199ce88",
      "CustomerId": "20725048-b6ec-40f0-9d0a-7e5273d8b861",
      "Id": "2d93962f-067f-45a6-b7c4-bc4b9d899456",
      "IsActive": false,
      "State": "Cancelled"
    },
    {
      "Amount": {
        "Currency": "EUR",
        "NetValue": null,
        "GrossValue": 22,
        "TaxValues": []
      },
      "Code": null,
      "CreditCardId": "41fa39ab-4b12-4816-95a3-d06cdbbdcb69",
      "CustomerId": "20725048-b6ec-40f0-9d0a-7e5273d8b861",
      "Id": "ad44411a-1efc-46b6-b903-ec5fa7842000",
      "IsActive": true,
      "ReceiptIdentifier": null,
      "SequenceCode": null,
      "State": "Charged"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Preauthorizations` | array of [Preauthorization](#Preauthorization) | optional | Preauthorizations of the specified [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |

#### Preauthorization

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the preauthorization. |
| `CustomerId` | string | required |  |
| `CreditCardId` | string | optional | Unique identifier of the credit card. |
| `Amount` | object | required | Value of the preauthorization. |
| `State` | string | optional | State of the preauthorization. |
| `Code` | string | optional | Code of the preauthorization. |
| `IsActive` | boolean | required |  |

#### Amount
Value of the preauthorization.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |

#### TaxValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Value` | number | required |  |

#### TaxBreakdown

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Items` | array of [TaxBreakdownItem](#TaxBreakdownItem) | optional |  |

#### TaxBreakdownItem

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxRateCode` | string | optional |  |
| `NetValue` | number | required |  |
| `TaxValue` | number | required |  |
