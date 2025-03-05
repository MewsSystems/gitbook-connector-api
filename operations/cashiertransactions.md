<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Cashier transactions

## Get all cashier transactions

Returns all cashier transactions. At least one of the filter parameters `CashierTransactionIds` or `CreatedUtc` must be specified in the request. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `CashierTransactionIds` | array of string | optional, max 1000 items | Unique identifiers of the Cashier transactions. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which Cashier transaction was created. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

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
| `CashierTransactions` | array of [Cashier transaction](cashiertransactions.md#cashier-transaction) | required | The collection of cashier transactions. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Cashier transaction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the transaction. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `CashierId` | string | required | Unique identifier of the [Cashier](cashiers.md#cashier). |
| `PaymentId` | string | optional | Unique identifier of the corresponding payment [Payment item](accountingitems.md#payment-item). |
| `CreatedUtc` | string | required | Creation date and time of the transaction. |
| `Number` | string | required | Number of the transaction. |
| `Notes` | string | optional | Additional notes of the transaction. |
| `Amount` | [Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07) | required | Total price of the transaction |
