# Cashier transactions

## Get all cashier transactions

Returns all cashier transactions created within the specified interval.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/cashierTransactions/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "CashierTransactionIds": [
    "177740c3-fec9-4338-a224-a3b03a35b3e1"
  ],
  "CreatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "Limitation": {
    "Count": 10
  }
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
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `CashierTransactionIds` | array of string | optional, max 1000 items |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |

### Response

```javascript
{
  "CashierTransactions": [
    {
      "Amount": {
        "Currency": "EUR",
        "Value": 100
      },
      "CashierId": "9a36e3fa-2299-474b-a8a2-5ea4da317abc",
      "CreatedUtc": "2017-01-10T00:00:00Z",
      "Id": "177740c3-fec9-4338-a224-a3b03a35b3e1",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Notes": "Cash payment EUR",
      "Number": "47",
      "PaymentId": "a68ef257-2fbc-4a4f-85de-59d808cef657"
    }
  ],
  "Cursor": "177740c3-fec9-4338-a224-a3b03a35b3e1"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CashierTransactions` | array of [Cashier transaction](#CashierTransaction) | optional | Cashier transactions created in the interval. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Cashier transaction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the transaction. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `CashierId` | string | required | Unique identifier of the [Cashier](https://mews-systems.gitbook.io/connector-api/operations/cashiers/#cashier). |
| `PaymentId` | string | optional | Unique identifier of the corresponding payment [Payment item](https://mews-systems.gitbook.io/connector-api/operations/accountingitems/#payment-item). |
| `CreatedUtc` | string | optional | Creation date and time of the transaction. |
| `Number` | string | optional | Number of the transaction. |
| `Notes` | string | optional | Additional notes of the transaction. |
| `Amount` | object | required | Total price of the reservation. |

#### CurrencyValueOld
Total price of the reservation.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |
