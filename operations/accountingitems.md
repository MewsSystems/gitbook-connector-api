<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Accounting items

## ~~Get all accounting items~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md). Use [Get all payments](payments.md#get-all-payments) and [Get all order items](orderitems.md#get-all-order-items) instead.

### Request

`[PlatformAddress]/api/connector/v1/accountingItems/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ConsumedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "ClosedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "ItemIds": [
    "cb643cb7-8b6e-48a6-b67e-ad4c0041f550",
    "44ca12b8-f009-455e-be91-ad4c013fcbc5"
  ],
  "Extent": {
    "OrderItems": true,
    "PaymentItems": true,
    "CreditCardTransactions": false
  },
  "States": [
    "Open"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Extent` | [Accounting item extent](accountingitems.md#accounting-item-extent) | required | Extent of data to be returned. E.g. it is possible to specify that together with the accounting items, credit card transactions should be also returned. |
| `ItemIds` | array of string | optional, max 1000 items | Unique identifiers of the Accounting items. Required if no other filter is provided. |
| `RebatedItemIds` | array of string | optional, max 1000 items | Unique identifiers of the Accounting items we are finding rebates for. Required if no other filter is provided. |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the accounting item was closed. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the accounting item was updated. Required if no other filter is provided. |
| `ConsumedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the accounting item was consumed. Required if no other filter is provided. |
| `Currency` | string | optional | ISO-4217 code of the `Currency` the item costs should be converted to. |
| `States` | array of [Order item accounting state](accountingitems.md#order-item-accounting-state) | optional | States the accounting items should be in. If not specified, accounting items in `Open` or `Closed` states are returned. |

#### Accounting item extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderItems` | boolean | required | Whether the response should contain order items (consumed items such as nights or products). |
| `PaymentItems` | boolean | required | Whether the response should contain payment items (such as cash, credit card payments or invoices). |
| `CreditCardTransactions` | boolean | required | Whether the response should contain credit card transactions of the payment items. |

#### Order item accounting state

* `Open` - Order items which carry a non-zero value, are open, and have not been closed on a bill or invoice.
* `Closed` - Order items which carry a non-zero value and have been closed on a bill or invoice.
* `Inactive` - Order items which are either of zero value and have not been canceled, if the state of the payment item is Pending or Failed, or items of optional reservations. Until the reservation is confirmed, all its accounting items are Inactive.
* `Canceled` - Order items which have been canceled, regardless of whether the item is of zero value.

### Response

```javascript
{
  "OrderItems": [
    {
      "Id": "6c2897de-620a-4f48-af1e-ada8004202bd",
      "AccountId": "182a56ee-037d-4da5-b6f8-ada8006e7d5c",
      "OrderId": "f9090129-fb49-46d2-9dc5-ad9d015d43b9",
      "BillId": "9e3791dc-95c7-439a-aa8a-ada8007de0ca",
      "AccountingCategoryId": "d250149e-a29d-4c70-b607-a1759faf7320",
      "Amount": {
        "Currency": "GBP",
        "NetValue": 95.24,
        "GrossValue": 100,
        "TaxValues": [
          {
            "Code": "UK-2020-R",
            "Value": 4.76
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "UK-2020-R",
              "NetValue": 95.24,
              "TaxValue": 4.76
            }
          ]
        }
      },
      "RevenueType": "Additional",
      "ConsumedUtc": "2021-09-19T04:00:20Z",
      "ClosedUtc": null,
      "AccountingState": "Open",
      "Data": {
        "Discriminator": "CancellationFee",
        "Value": null
      }
    }
  ],
  "PaymentItems": []
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderItems` | array of [Order item](accountingitems.md#order-item) | optional | The order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](accountingitems.md#payment-item) | optional | The payment items (such as cash, credit card payments or invoices). |
| `CreditCardTransactions` | array of [Credit card transaction](payments.md#credit-card-transaction) | optional | The credit card payment transactions. |

## Update accounting items

Updates specified accounting items. You can use this operation to assign an accounting item to a different account or bill. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/accountingItems/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "AccountingItemUpdates": [
    {
      "AccountingItemId": "6c2897de-620a-4f48-af1e-ada8004202bd",
      "AccountId": {
        "Value": "182a56ee-037d-4da5-b6f8-ada8006e7d5c"
      },
      "BillId": {
        "Value": "9e3791dc-95c7-439a-aa8a-ada8007de0ca"
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `AccountingItemUpdates` | array of [Accounting item update](accountingitems.md#accounting-item-update) | required | List of requested updates. |

#### Accounting item update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountingItemId` | string | required | Unique identifier of the `AccountingItem`. |
| `AccountId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the account (for example `Customer`) the item is assigned to (or `null` if the assigned account should not be updated). If defined, valid account identifier must be provided. |
| `BillId` | [String update value](_objects.md#string-update-value) | required | Unique identifier of the `Bill` the items is assigned to. It's possible to assign item to bill belonging to another account, in that case both `AccountId` and `BillId` must be provided. |

### Response

```javascript
{
  "OrderItems": [
    {
      "Id": "cb643cb7-8b6e-48a6-b67e-ad4c0041f550",
      "AccountId": "77673c9d-0e31-4e90-9228-ad4b00a9fcdc",
      "OrderId": "1103b431-998a-4b78-84de-ad4b00a9fd99",
      "BillId": null,
      "AccountingCategoryId": "d250149e-a29d-4c70-b607-a1759faf7320",
      "UnitCount": 15,
      "UnitAmount": {
        "Currency": "EUR",
        "NetValue": 8.4,
        "GrossValue": 10,
        "TaxValues": [
          {
            "Code": "DE-2020-1-I",
            "Value": 1.6
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "DE-2020-1-I",
              "NetValue": 8.4,
              "TaxValue": 1.6
            }
          ]
        }
      },
      "Amount": {
        "Value": null,
        "Net": null,
        "Tax": null,
        "TaxRate": null,
        "Currency": "EUR",
        "NetValue": 126.05,
        "GrossValue": 150,
        "TaxValues": [
          {
            "Code": "DE-2020-1-I",
            "Value": 23.95
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "DE-2020-1-I",
              "NetValue": 126.05,
              "TaxValue": 23.95
            }
          ]
        }
      },
      "OriginalAmount": {
        "Value": null,
        "Net": null,
        "Tax": null,
        "TaxRate": null,
        "Currency": "EUR",
        "NetValue": 126.05,
        "GrossValue": 150,
        "TaxValues": [
          {
            "Code": "DE-2020-1-I",
            "Value": 23.95
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "DE-2020-1-I",
              "NetValue": 126.05,
              "TaxValue": 23.95
            }
          ]
        }
      },
      "RevenueType": "Additional",
      "CreatorProfileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "UpdaterProfileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CreatedUtc": "2021-06-19T04:00:08Z",
      "UpdatedUtc": "2021-06-19T04:00:08Z",
      "ConsumedUtc": "2021-06-19T04:00:08Z",
      "CanceledUtc": null,
      "ClosedUtc": null,
      "StartUtc": null,
      "AccountingState": "Open",
      "Data": {
        "Discriminator": "CancellationFee",
        "Value": null
      }
    }
  ],
  "PaymentItems": [
    {
      "Id": "44ca12b8-f009-455e-be91-ad4c013fcbc5",
      "AccountId": "5da55e5c-18e5-48d8-9a0e-ac0600704c5c",
      "BillId": null,
      "AccountingCategoryId": "b89345c1-2814-4750-808d-aa7900ee464a",
      "Amount": {
        "Value": null,
        "Net": null,
        "Tax": null,
        "TaxRate": null,
        "Currency": "GBP",
        "NetValue": 850,
        "GrossValue": 850,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": 850,
              "TaxValue": 0
            }
          ]
        }
      },
      "OriginalAmount": {
        "Value": null,
        "Net": null,
        "Tax": null,
        "TaxRate": null,
        "Currency": "GBP",
        "NetValue": 850,
        "GrossValue": 850,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": 850,
              "TaxValue": 0
            }
          ]
        }
      },
      "AmountDefault": null,
      "Notes": "NORMAL0140",
      "SettlementId": "po_1Lun9w4JpyDC38oQJQz7hAcx",
      "ConsumedUtc": "2021-06-19T19:24:20Z",
      "ClosedUtc": null,
      "AccountingState": "Open",
      "State": "Charged",
      "Identifier": null,
      "Data": {
        "Discriminator": "Invoice",
        "Value": {
          "InvoiceId": "3c818013-d9de-47e9-bb2c-ad4c013f9ad3",
          "Type": "Receivable"
        }
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderItems` | array of [Order item](accountingitems.md#order-item) | optional | Updated order items. |
| `PaymentItems` | array of [Payment item](accountingitems.md#payment-item) | optional | Updated payment items. |

#### Order item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example `Customer`) the item belongs to. |
| `OrderId` | string | required | Unique identifier of the order (or `Reservation` which is a special type of order) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the `Bill` the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the `AccountingCategory` the item belongs to. |
| `UnitCount` | integer | required | Unit count of item, i.e. the number of sub-items or units, if applicable. |
| `UnitAmount` | [Amount](_objects.md#amount) | required | Unit amount of item, i.e. the amount of each individual sub-item or unit, if applicable. |
| `Amount` | [Extended amount](_objects.md#amount) | required | Amount of item; note a negative amount represents a rebate or payment. |
| `OriginalAmount` | [Extended amount](_objects.md#amount) | required | Amount of item; note a negative amount represents a rebate or payment. Contains the earliest known value in conversion chain. |
| `RevenueType` | string | required | Revenue type of the item. |
| `CreatorProfileId` | string | required | Unique identifier of the user who created the item. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who updated the item. |
| `CreatedUtc` | string | required | Creation date and time of the item in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the item in UTC timezone in ISO 8601 format. |
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `CanceledUtc` | string | optional | Cancellation date and time of the item in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `StartUtc` | string | optional | Start date and time of the item in UTC timezone in ISO 8601 format. |
| `AccountingState` | string | required | Accounting state of the item. |
| `Data` | [Order item data](accountingitems.md#order-item-data) | required | Additional data specific to particular order item. |

#### Order item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Order item data discriminator](accountingitems.md#order-item-data-discriminator) | required | Determines type of value. |
| `Value` | object | optional | Based on order item discriminator or `null` for types without any additional data. |

#### Order item data discriminator

* `CancellationFee` - No additional data.
* `Rebate` - [Rebate order item data](accountingitems.md#rebate-order-item-data)
* `Deposit` - No additional data.
* `ExchangeRateDifference` - No additional data.
* `CustomItem` - No additional data.
* `Surcharge` - No additional data.
* `SurchargeDiscount` - No additional data.
* `SpaceOrder`
* `ProductOrder` - [Product order item data](accountingitems.md#product-order-item-data)
* `Other` - No additional data.
* `TaxCorrection` - No additional data.
* `ResourceUpgradeFee` - No additional data.
* `InvoiceFee` - No additional data.

#### Rebate order item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RebatedItemId` | string | required | Unique identifier of `OrderItem` which has been rebated by current item. |

#### Payment item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example `Customer`) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the `Bill` the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the `AccountingCategory` the item belongs to. |
| `Amount` | [Extended amount](_objects.md#amount) | required | Item's amount, negative amount represents either rebate or a payment. |
| `OriginalAmount` | [Extended amount](_objects.md#amount) | required | Amount of item; note a negative amount represents a rebate or payment. Contains the earliest known value in conversion chain. |
| `Notes` | string | optional | Additional notes. |
| `SettlementId` | string | optional | Identifier of the settled payment from the external system (ApplePay/GooglePay). |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `AccountingState` | string | required | Accounting state of the item. |
| `State` | string | required | Payment state of the item. |
| `Identifier` | string | optional | External payment identifier. |
| `Data` | [Payment item data](accountingitems.md#payment-item-data) | required | Additional data specific to particular payment item. |
| ~~`AmountDefault`~~ | ~~[Extended amount](_objects.md#amount)~~ | ~~optional~~ | ~~Item's amount in property's default currency, negative amount represents either rebate or a payment.~~ **Deprecated!** |

#### Payment item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Payment item data discriminator](accountingitems.md#payment-item-data-discriminator) | required | Determines type of value. |
| `Value` | object | optional | Based on payment item data discriminator or `null` for types without any additional data. |

#### Payment item data discriminator

* `CreditCard` - [Credit card payment item data](accountingitems.md#credit-card-payment-item-data)
* `Invoice` - [Invoice payment item data](accountingitems.md#invoice-payment-item-data)
* `Cash` - No additional data.
* `Unspecified` - No additional data.
* `BadDebts` - No additional data.
* `WireTransfer` - No additional data.
* `ExchangeRateDifference` - No additional data.
* `ExchangeRoundingDifference` - No additional data.
* `BankCharges` - No additional data.
* `Cheque` - No additional data.
* `Other` - No additional data.

#### Credit card payment item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentCardId` | string | optional | Unique identifier of the `CreditCard`. |
