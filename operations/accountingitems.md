# Accounting items

## Get all accounting items

Returns all accounting items of the enterprise that were consumed \(posted\) or will be consumed within the specified interval. If the `Currency` is specified, costs of the items are converted to that currency. Accounting items are split into [Order items](#order-item) (consumed items such as nights or products) and [Payment items](#payment-item) (such as cash, credit card payments or invoices).

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
| `ConsumedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the accounting item was consumed. Required if no other filter is provided. |
| `ClosedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the accounting item was closed. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the accounting item was updated. Required if no other filter is provided. |
| `ItemIds` | array of string | optional, max 1000 items | Unique identifiers of the Accounting items. Required if no other filter is provided. |
| `RebatedItemIds` | array of string | optional, max 1000 items | Unique identifiers of the Accounting items we are finding rebates for. Required if no other filter is provided. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](currencies.md#currency) the item costs should be converted to. |
| `Extent` | [Accounting item extent](#accounting-item-extent) | required | Extent of data to be returned. E.g. it is possible to specify that together with the accounting items, credit card transactions should be also returned. |
| `States` | array of string [Accounting item state](#accounting-item-state) | optional | States the accounting items should be in. If not specified, accounting items in `Open` or `Closed` states are returned. |

#### Time interval

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

#### Accounting item extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderItems` | bool | required | Whether the response should contain [Order item](#order-item)s (consumed items such as nights or products). |
| `PaymentItems` | bool | required | Whether the response should contain [Payment items](#payment-item) (such as cash, credit card payments or invoices). |
| `CreditCardTransactions` | bool | required | Whether the response should contain [Credit card transactions](#credit-card-transaction) of the payment items. |

#### Accounting item state

* `Open` - Accounting items which carry a non-zero value, are open, and have not been closed on a bill or invoice.
* `Closed` - Accounting items which carry a non-zero value and have been closed on a bill or invoice.
* `Inactive` - Accounting items which are either of zero value and have not been canceled, if the state of the payment item is Pending or Failed, or items of optional reservations. Until the reservation is confirmed, all its accounting items are Inactive.
* `Canceled` - Accounting items which have been canceled, regardless of whether the item is of zero value

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
                "NetValue": 8.40,
                "GrossValue": 10.00,
                "TaxValues": [
                    {
                        "Code": "DE-2020-1-I",
                        "Value": 1.60
                    }
                ],
                "Breakdown": {
                    "Items": [
                        {
                            "TaxRateCode": "DE-2020-1-I",
                            "NetValue": 8.40,
                            "TaxValue": 1.60
                        }
                    ]
                }
            },
            "Amount": {
                "Currency": "EUR",
                "NetValue": 126.05,
                "GrossValue": 150.00,
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
                "Currency": "EUR",
                "NetValue": 126.05,
                "GrossValue": 150.00,
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
            "ConsumedUtc": "2021-06-19T04:00:08Z",
            "ClosedUtc": null,
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
                "Currency": "GBP",
                "NetValue": 850.00,
                "GrossValue": 850.00,
                "TaxValues": [],
                "Breakdown": {
                    "Items": [
                        {
                            "TaxRateCode": null,
                            "NetValue": 850.00,
                            "TaxValue": 0.0
                        }
                    ]
                }
            },
            "OriginalAmount": {
                "Currency": "GBP",
                "NetValue": 850.00,
                "GrossValue": 850.00,
                "TaxValues": [],
                "Breakdown": {
                    "Items": [
                        {
                            "TaxRateCode": null,
                            "NetValue": 850.00,
                            "TaxValue": 0.0
                        }
                    ]
                }
            },
            "Notes": "NORMAL0140",
            "SettlementId": "po_1Lun9w4JpyDC38oQJQz7hAcx",
            "ConsumedUtc": "2021-06-19T19:24:20Z",
            "ClosedUtc": null,
            "AccountingState": "Open",
            "State": "Charged",
            "Data": {
                "Discriminator": "Invoice",
                "Value": {
                    "InvoiceId": "3c818013-d9de-47e9-bb2c-ad4c013f9ad3"
                }
            }
        }
    ],
    "CreditCardTransactions": null
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderItems` | array of [Order item](#order-item) | optional | The order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](#payment-item) | optional | The payment items (such as cash, credit card payments or invoices). |
| `CreditCardTransactions` | array of [Credit card transaction](#credit-card-transaction) | optional | The credit card payment transactions. |

#### Order item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](customers.md#customer)) the item belongs to. |
| `OrderId` | string | required | Unique identifier of the order \(or [Reservation](reservations.md#reservation) which is a special type of order\) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](bills.md#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](accountingcategories.md#accounting-category) the item belongs to. |
| `UnitCount` | integer | required | Unit count of item, i.e. the number of sub-items or units, if applicable. |
| `UnitAmount` | [Amount value](#amount-value) | required | Unit amount of item, i.e. the amount of each individual sub-item or unit, if applicable. |
| `Amount` | [Amount value](#amount-value) | required | Amount of item; note a negative amount represents a rebate or payment. |
| `OriginalAmount` | [Amount value](#amount-value) | required | Amount of item; note a negative amount represents a rebate or payment. Contains the earliest known value in conversion chain. |
| `RevenueType` | string [Revenue type](#revenue-type) | required | Revenue type of the item. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `AccountingState` | string [Accounting state](#accounting-item-state) | required | Accounting state of the item. |
| `Data` | object [Order item data](#order-item-data) | required | Additional data specific to particular order item. |

#### Payment item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](customers.md#customer)) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](bills.md#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](accountingcategories.md#accounting-category) the item belongs to. |
| `Amount` | [Amount value](#amount-value) | required | Item's amount, negative amount represents either rebate or a payment. |
| `OriginalAmount` | [Amount value](#amount-value) | required | Amount of item; note a negative amount represents a rebate or payment. Contains the earliest known value in conversion chain. |
| ~~`AmountDefault`~~ | ~~[Amount value](#amount-value)~~ | ~~required~~ | ~~Item's amount in property's default currency, negative amount represents either rebate or a payment.~~ **Deprecated!** |
| `Notes` | string | optional | Additional notes. |
| `SettlementId` | string | optional | Identifier of the settled payment from the external system (ApplePay/GooglePay). | 
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `AccountingState` | string [Accounting item state](#accounting-item-state) | required | Accounting state of the item. |
| `State` | string [Payment item state](#payment-item-state) | required | Payment state of the item. |
| `Data` | object [Payment item data](#payment-item-data) | required | Additional data specific to particular payment item. |

#### Credit card transaction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentId` | string | required | Unique identifier of the [Payment item](#payment-item). |
| `SettlementId` | string | optional | Identifier of the settlement. |
| `SettledUtc` | string | optional | Settlement date and time in UTC timezone in ISO 8601 format. |
| `Fee` | [Amount](#amount-value) | optional | Transaction fee - this includes an estimate of bank charges. |
| `AdjustedFee` | [Amount](#amount-value) | optional | Transaction fee (adjusted) - this is the final confirmed transaction fee, including confirmed bank charges. |
| `ChargedAmount` | [Amount](#amount-value) | required | Charged amount of the transaction. |
| `SettledAmount` | [Amount](#amount-value) | optional | Settled amount of the transaction. |

#### Amount Value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required | ISO-4217 code of the [Currency](currencies.md#currency). |
| `NetValue` | number | optional | Net value in case the item is taxed. |
| `GrossValue` | number | optional | Gross value including all taxes. |
| `TaxValues` | array of [Tax value](#tax-value) | optional | The tax values applied. |

For most amounts, precision of values depends on `TaxPrecision` of [Enterprise](configuration.md#enterprise) or [Currency](currencies.md#currency) precision. But in some cases, precision can be higher.

#### Tax value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | number | required | Code corresponding to tax type. |
| `Value` | number | required | Amount of tax applied. |

#### Revenue type

* `Service`
* `Product`
* `Additional`

#### Order item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Order item data discriminator](#order-item-data-discriminator) | required | Type of the order item (e.g. `ProductOrder`). |
| `Value` | object | optional | Based on order item discriminator, e.g. [Product order item data](#product-order-item-data) or `null` for types without any additional data.  |

#### Order item data discriminator

  * `CancellationFee` - no additional data.
  * `Rebate` - [Rebate order item data](#rebate-order-item-data).
  * `Deposit` - no additional data.
  * `ExchangeRateDifference` - no additional data.
  * `CustomItem` - no additional data.
  * `Surcharge` - no additional data.
  * `SurchargeDiscount` - no additional data.
  * `ProductOrder` - [Product order item data](#product-order-item-data).
  * `Other` - no additional data.

#### Product order item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required | Unique identifier of the [Product](products.md#product). |
| `AgeCategoryId` | string | optional | Unique identifier of the [Age Category](agecategories.md#age-category). |

#### Rebate order item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RebatedItemId` | string | required | Unique identifier of [Order item](orders.md#order-item) which has been rebated by current item. |

#### Payment item state

  * `Charged`
  * `Canceled`
  * `Pending`
  * `Failed`
  * `Verifying`

#### Payment item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Payment item data discriminator](#payment-item-data-discriminator) | required | Type of the payment item (e.g. `CreditCard`). |
| `Value` | object | optional | Based on order item discriminator, e.g. [Credit card payment item data](#credit-card-payment-item-data) or `null` for types without any additional data.  |

#### Payment item data discriminator

  * `CreditCard` - [Credit card payment item data](#credit-card-payment-item-data).
  * `Invoice` - [Invoice payment item data](#invoice-payment-item-data).
  * `Cash` - no additional data.
  * `Unspecified` - no additional data.
  * `BadDebts` - no additional data.
  * `WireTransfer` - no additional data.
  * `ExchangeRateDifference` - no additional data.
  * `ExchangeRoundingDifference` - no additional data.
  * `BankCharges` - no additional data.
  * `Cheque` - no additional data.
  * `Other` - no additional data.

#### Credit card payment item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](creditcards.md#credit-card). |

#### Invoice payment item data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `InvoiceId` | string | required | Unique identifier of the invoice [Bill](bills.md#bill). |

#### Currency value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required | ISO-4217 code of the [Currency](currencies.md#currency). |
| `Value` | number | optional | Amount in the currency. |

## Update accounting items

Updates specified accounting items. Allows to change to which account or bill the item is assigned to.

### Request

`[PlatformAddress]/api/connector/v1/accountingItems/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
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
| `AccountingItemUpdates` | array of [Accounting item update](#accounting-item-update) | required | List of requested updates. |

#### Accounting item update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountingItemId` | string | required | Unique identifier of the [Accounting item](#accounting-item). |
| `AccountId` | [String update value](#string-update-value) | optional | Unique identifier of the account (for example [Customer](customers.md#customer)) the item is assigned to \(or `null` if the assigned account should not be updated\). If defined, valid account identifier must be provided. |
| `BillId` | [String update value](#string-update-value) | required | Unique identifier of the [Bill](bills.md#bill) the items is assigned to. It's possible to assign item to bill belonging to another account, in that case both `AccountId` and `BillId` must be provided.

#### String update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | string | optional | Value which is to be updated. |

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
                "GrossValue": 100.00,
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
    "PaymentItems": [],
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderItems` | array of [Order item](#order-item) | optional | Updated order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](#payment-item) | optional | Updated payment items (such as cash, credit card payments or invoices). |
