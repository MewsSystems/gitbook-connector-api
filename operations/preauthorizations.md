<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
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
    "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
    "bccdafd1-3e44-439d-861f-341526b597a9"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerIds` | array of string | required, max 1000 items | Unique identifier of the `Customer`. |

### Response

```javascript
{
  "Preauthorizations": [
    {
      "Id": "2d93962f-067f-45a6-b7c4-bc4b9d899456",
      "CreditCardId": "e417dfe8-c813-4938-837b-36081199ce88",
      "Amount": {
        "Currency": "EUR",
        "NetValue": 8.4,
        "GrossValue": 10,
        "TaxValues": [
          {
            "Code": "VAT",
            "Value": 1.6
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "VAT",
              "NetValue": 8.4,
              "TaxValue": 1.6
            }
          ]
        }
      },
      "State": "Cancelled",
      "ReservationId": null,
      "Code": null,
      "CustomerId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "IsActive": false
    },
    {
      "Id": "ad44411a-1efc-46b6-b903-ec5fa7842000",
      "CreditCardId": "41fa39ab-4b12-4816-95a3-d06cdbbdcb69",
      "Amount": {
        "Currency": "EUR",
        "NetValue": 18.49,
        "GrossValue": 22,
        "TaxValues": [
          {
            "Code": "VAT",
            "Value": 3.51
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "VAT",
              "NetValue": 18.49,
              "TaxValue": 3.51
            }
          ]
        }
      },
      "State": "Charged",
      "ReservationId": "0f515589-99b4-423d-b83a-b237009f0509",
      "Code": "PAY-2024-001",
      "CustomerId": "bccdafd1-3e44-439d-861f-341526b597a9",
      "IsActive": true
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Preauthorizations` | array of [Preauthorization](preauthorizations.md#preauthorization) | required | Preauthorizations of the specified `Customer`. |

#### Preauthorization

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the preauthorization. |
| `CreditCardId` | string | required | Unique identifier of the credit card. |
| `Amount` | [Amount](_objects.md#amount) | required | Value of the preauthorization. |
| `State` | [Preauthorization state](preauthorizations.md#preauthorization-state) | required | State of the preauthorization. |
| `ReservationId` | string | optional | Unique identifier of the `Reservation` the preauthorization belongs to. |
| `Code` | string | optional | Code of the preauthorization. |
| `CustomerId` | string | required | Unique identifier of the customer. |
| `IsActive` | boolean | required | Whether the preauthorization is active. |

#### Preauthorization state

* `Chargeable` - Created and prepared for the charging.
* `Expired` - A preauthorization that is not charged and expired.
* `Cancelled` - A preauthorization that was canceled before charging.
* `Charged` - Charged preauthorization.
* `Pending` - A preauthorization that is waiting for the charge to be processed.
* `Failed` - A preauthorization that failed to be charged.
