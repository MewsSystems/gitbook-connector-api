<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Ledger balances

## Get all ledger balances

Returns opening and closing balances of specified ledgers for each day in the specified date interval. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/ledgerBalances/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "Date": {
    "Start": "2024-01-01",
    "End": "2024-01-02"
  },
  "LedgerTypes": [
    "Revenue",
    "Payment",
    "Guest"
  ],
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "Limitation": {
    "Count": 100
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Date` | [Date interval](_objects.md#date-interval) | required, max length 1 month | Date interval over which the ledger balances are created. |
| `LedgerTypes` | array of [Accounting ledger type](ledgerbalances.md#accounting-ledger-type) | required | Accounting ledger types to which ledger balances belong. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "LedgerBalances": [
    {
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Date": "2024-01-15",
      "LedgerType": "Revenue",
      "OpeningBalance": {
        "Currency": "EUR",
        "NetValue": 15000,
        "GrossValue": 18000,
        "TaxValues": [
          {
            "Code": "VAT",
            "Value": 3000
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "VAT",
              "NetValue": 15000,
              "TaxValue": 3000
            }
          ]
        }
      },
      "ClosingBalance": {
        "Currency": "EUR",
        "NetValue": 25000,
        "GrossValue": 30000,
        "TaxValues": [
          {
            "Code": "VAT",
            "Value": 5000
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "VAT",
              "NetValue": 25000,
              "TaxValue": 5000
            }
          ]
        }
      }
    },
    {
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Date": "2024-01-15",
      "LedgerType": "Payment",
      "OpeningBalance": {
        "Currency": "EUR",
        "NetValue": 5000,
        "GrossValue": 5000,
        "TaxValues": [
          {
            "Code": "VAT",
            "Value": 0
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "VAT",
              "NetValue": 5000,
              "TaxValue": 0
            }
          ]
        }
      },
      "ClosingBalance": {
        "Currency": "EUR",
        "NetValue": 12000,
        "GrossValue": 12000,
        "TaxValues": [
          {
            "Code": "VAT",
            "Value": 0
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "VAT",
              "NetValue": 12000,
              "TaxValue": 0
            }
          ]
        }
      }
    },
    {
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Date": "2024-01-15",
      "LedgerType": "Guest",
      "OpeningBalance": {
        "Currency": "EUR",
        "NetValue": -2000,
        "GrossValue": -2400,
        "TaxValues": [
          {
            "Code": "VAT",
            "Value": -400
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "VAT",
              "NetValue": -2000,
              "TaxValue": -400
            }
          ]
        }
      },
      "ClosingBalance": {
        "Currency": "EUR",
        "NetValue": -5000,
        "GrossValue": -6000,
        "TaxValues": [
          {
            "Code": "VAT",
            "Value": -1000
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "VAT",
              "NetValue": -5000,
              "TaxValue": -1000
            }
          ]
        }
      }
    }
  ],
  "Cursor": "145a6ece-e15e-4b22-922d-eeac973478c8"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LedgerBalances` | array of [Ledger balance](ledgerbalances.md#ledger-balance) | optional | The list of filtered ledger balances. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest ledger balance returned. This can be used in Limitation in a subsequent request to fetch the next batch of ledger balances. |

#### Ledger balance
Ledger balance

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `EnterpriseId` | string | required | Unique identifier of the Enterprise. |
| `Date` | string | required | Day for which the ledger balance applies in ISO 8601 format. |
| `LedgerType` | [Accounting ledger type](ledgerbalances.md#accounting-ledger-type) | required | Type of accounting ledger. |
| `OpeningBalance` | [Amount](_objects.md#amount) | required | Ledger opening balance at the start of the day. |
| `ClosingBalance` | [Amount](_objects.md#amount) | required | Ledger closing balance at the end of the day. |

#### Accounting ledger type

* `Revenue`
* `Tax`
* `Payment`
* `Deposit`
* `Guest`
* `City`
* `NonRevenue`
