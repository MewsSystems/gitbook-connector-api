# Ledger balances

## Get all ledger balances

Returns opening & closing balances of all specified ledgers for each day in the specified interval.

### Request

`[PlatformAddress]/api/connector/v1/ledgerBalances/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
    "Date": {
        "Start": "2024-01-01",
        "End": "2024-02-01"
    },
    "LedgerTypes": {
        "Revenue",
        "Tax",
        "Payment",
        "Deposit",
        "Guest",
        "City"
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Date` | [Date interval](_objects.md#date-interval) | required, max length 1 month | Interval to fetch daily ledger balances for. |
| `LedgerTypes` | array of string [Accounting ledger type](#accounting-ledger-type) | required, min 1 item | Types of accounting ledgers to fetch balances for. |

#### Accounting ledger type

* `Revenue`
* `Tax`
* `Payment`
* `Deposit`
* `Guest`
* `Cit`