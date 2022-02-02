# Finance

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
| --- | --- | --- | --- |
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
| --- | --- | --- | --- |
| `ExchangeRates` | array of [Exchange rate](finance.md#exchange-rate) | required | The available exchange rates. |

#### Exchange rate

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `SourceCurrency` | string | required | ISO-4217 code of the source [Currency](configuration.md#currency). |
| `TargetCurrency` | string | required | ISO-4217 code of the target [Currency](configuration.md#currency). |
| `Value` | number | required | The exchange rate from the source currency to the target currency. |

## Get all cashiers

Returns all cashiers in the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/cashiers/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "Cashiers": [
        {
            "Id": "9a36e3fa-2299-474b-a8a2-5ea4da317abc",
            "IsActive": true,
            "Name": "Main Cashier"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Cashiers` | array of [Cashier](finance.md#cashier) | required | Cashiers in the enterprise. |

#### Cashier

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the cashier. |
| `IsActive` | boolean | required | Whether the cashier is still active. |
| `Name` | string | required | Name of the cashier. |

## Get all cashier transactions

Returns all cashier transactions created within the specified interval.

### Request

`[PlatformAddress]/api/connector/v1/cashierTransactions/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CreatedUtc": {
        "StartUtc": "2020-01-05T00:00:00Z",
        "EndUtc": "2020-01-10T00:00:00Z"
    }    
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CreatedUtc` | [Time interval](enterprises.md#time-interval) | required, max length 3 months | Interval in which the [Transaction](#cashier-transaction) was created. |

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
            "Notes": "Cash payment EUR",
            "Number": "47",
            "PaymentId": "a68ef257-2fbc-4a4f-85de-59d808cef657"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CashierTransactions` | array of [Cashier transaction](finance.md#cashier-transaction) | required | Cashier transactions created in the interval. |

#### Cashier transaction

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the transaction. |
| `CashierId` | string | required | Unique identifier of the [Cashier](finance.md#cashier). |
| `PaymentId` | string | optional | Unique identifier of the corresponding payment [Payment item](finance.md#payment-item). |
| `CreatedUtc` | string | required | Creation date and time of the transaction. |
| `Number` | string | required | Number of the transaction. |
| `Notes` | string | optional | Additional notes of the transaction. |
| `Amount` | [Currency value](finance.md#currency-value) | required | Value of the transaction. |

## Get all accounting categories

Returns all accounting categories of the enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/accountingCategories/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "AccountingCategories": [
        {
            "Classification": "Accommodation",
            "Code": "345",
            "CostCenterCode": "2589",
            "ExternalCode": "3010",
            "Id": "0cf7aa90-736f-43e9-a7dc-787704548d86",
            "IsActive": true,
            "LedgerAccountCode": "311100",
            "Name": "Accommodation",
            "PostingAccountCode": "602020"
        },
        {
            "Classification": null,
            "Code": "100",
            "CostCenterCode": "2589",
            "ExternalCode": "ABVG",
            "Id": "0b9560fb-055d-47d3-a6d4-e579c44ca558",
            "IsActive": true,
            "LedgerAccountCode": "311100",
            "Name": "Alcoholic Beverage",
            "PostingAccountCode": "602020"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `AccountingCategories` | array of [Accounting category](finance.md#accounting-category) | required | Accounting categories of the enterprise. |

#### Accounting category

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the category. |
| `IsActive` | boolean | required | Whether the accounting category is still active. |
| `Name` | string | required | Name of the category. |
| `Code` | string | optional | Code of the category within Mews. |
| `Classification` | string [Accounting category classification](finance.md#accounting-category-classification) | optional | Classification of the accounting category allowing cross-enterprise reporting. |
| `ExternalCode` | string | optional | Code of the category in external systems. |
| `LedgerAccountCode` | string | optional | Code of the ledger account \(double entry accounting\). |
| `PostingAccountCode` | string | optional | Code of the posting account \(double entry accounting\). |
| `CostCenterCode` | string | optional | Code of cost center. |

#### Accounting category classification

* `Accommodation`
* `FoodAndBeverage`
* `Taxes`
* `Payments`
* `ExternalRevenue`
* `SundryIncome`
* `Wellness`
* `Sport`
* `Technology`
* `Facilities`
* `Events`
* `Tourism`
* ...

## Get all accounting items

Returns all accounting items of the enterprise that were consumed \(posted\) or will be consumed within the specified interval. If the `Currency` is specified, costs of the items are converted to that currency. Accounting items are split into [Order item](#order-item)s (consumed items such as nights or products) and [Payment item](#payment-item)s (such as cash, credit card payments or invoices).

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
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ConsumedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the accounting item was consumed. Required if no other filter is provided. |
| `ClosedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the accounting item was closed. Required if no other filter is provided. |
| `ItemIds` | array of string | optional, max 1000 items | Unique identifiers of the Accounting items. Required if no other filter is provided. |
| `RebatedItemIds` | array of string | optional, max 1000 items | Unique identifiers of the Accounting items we are finding rebates for. Required if no other filter is provided. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](configuration.md#currency) the item costs should be converted to. |
| `Extent` | [Accounting item extent](#accounting-item-extent) | required | Extent of data to be returned. E.g. it is possible to specify that together with the accounting items, credit card transactions should be also returned. |
| `States` | array of string [Accounting state](reservations.md#Accounting-item-state) | optional | States the accounting items should be in. If not specified, accounting items in `Open` or `Closed` states are returned. |

#### Accounting item extent

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `OrderItems` | bool | required | Whether the response should contain [Order item](#order-item)s (consumed items such as nights or products). |
| `PaymentItems` | bool | required | Whether the response should contain [Payment item](#payment-item)s (such as cash, credit card payments or invoices). |
| `CreditCardTransactions` | bool | required | Whether the response should contain [Credit card transaction](#credit-card-transaction)s of the payment items. |

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
            "Amount": {
                "Currency": "GBP",
                "NetValue": 1523.81,
                "GrossValue": 1600.00,
                "TaxValues": [
                    {
                        "Code": "UK-2020-R",
                        "Value": 76.19
                    }
                ],
                "Breakdown": {
                    "Items": [
                        {
                            "TaxRateCode": "UK-2020-R",
                            "NetValue": 1523.81,
                            "TaxValue": 76.19
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
            "Notes": "NORMAL0140",
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
| --- | --- | --- | --- |
| `OrderItems` | array of [Order item](#order-item) | optional | The order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](#payment-item) | optional | The payment items (such as cash, credit card payments or invoices). |
| `CreditCardTransactions` | array of [Credit card transaction](#credit-card-transaction) | optional | The credit card payment transactions. |

#### Order item

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](customers.md#customer)) the item belongs to. |
| `OrderId` | string | required | Unique identifier of the order \(or [Reservation](reservations.md#reservation) which is a special type of order\) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](#accounting-category) the item belongs to. |
| `Amount` | [Amount value](#amount-value) | required | Item's amount, negative amount represents either rebate or a payment. |
| `RevenueType` | string [Revenue type](#revenue-type) | required | Revenue type of the item. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `AccountingState` | string [Accounting state](#accounting-item-state) | required | Accounting state of the item. |
| `Data` | object [Order item data](#order-item-data) | required | Additional data specific to particular order item. |

#### Payment item

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](customers.md#customer)) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](#accounting-category) the item belongs to. |
| `Amount` | [Amount value](#amount-value) | required | Item's amount, negative amount represents either rebate or a payment. |
| `Notes` | string | optional | Additional notes. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `AccountingState` | string [Accounting state](#accounting-item-state) | required | Accounting state of the item. |
| `State` | string [Payment item state](#payment-item-state) | required | Payment state of the item. |
| `Data` | object [Payment item data](#payment-item-data) | required | Additional data specific to particular payment item. |

#### Credit card transaction

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `PaymentId` | string | required | Unique identifier of the [Payment item](#payment-item). |
| `SettlementId` | string | optional | Identifier of the settlement. |
| `SettledUtc` | string | optional | Settlement date and time in UTC timezone in ISO 8601 format. |
| `Fee` | [Amount](#amount-value) | optional | Fee of the transaction. |
| `ChargedAmount` | [Amount](#amount-value) | required | Charged amount of the transaction. |
| `SettledAmount` | [Amount](#amount-value) | optional | Settled amount of the transaction. |

#### Amount Value

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `NetValue` | number | optional | Net value in case the item is taxed. |
| `GrossValue` | number | optional | Gross value including all taxes. |
| `TaxValues` | array of [Tax Value](finance.md#tax-value) | optional | The tax values applied. |

For most amounts, precision of values depends on `TaxPrecision` of [Enterprise](configuration.md#entreprise) or [Currency](configuration.md#currency) precision. But in some cases, precision can be higher.

#### Tax value

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Code` | number | required | Code corresponding to tax type. |
| `Value` | number | required | Amount of tax applied. |

#### Revenue type

* `Service`
* `Product`
* `Additional`

#### Order item data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
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
| --- | --- | --- | --- |
| `ProductId` | string | required | Unique identifier of the [Product](services.md#product). |

#### Rebate order item data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `RebatedItemId` | string | required | Unique identifier of [Order item](#order-item) which has been rebated by current item. |

#### Payment item state

  * `Charged`
  * `Canceled`
  * `Pending`
  * `Failed`
  * `Verifying`

#### Payment item data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
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
| --- | --- | --- | --- |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](#credit-card). |

#### Invoice payment item data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `InvoiceId` | string | required | Unique identifier of the invoice [Bill](#bill). |

#### Currency value

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
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
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AccountingItemUpdates` | array of [Accounting item update](#accounting-item-update) | required | List of requested updates. |

#### Accounting item update

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `AccountingItemId` | string | required | Unique identifier of the [Accounting item](#accounting-item). |
| `AccountId` | [String update value](reservations.md#string-update-value) | optional | Unique identifier of the account (for example [Customer](customers.md#customer)) the item is assigned to \(or `null` if the assigned account should not be updated\). If defined, valid account identifier must be provided. |
| `BillId` | [String update value](reservations.md#string-update-value) | required | Unique identifier of the [Bill](#bill) the items is assigned to. It's possible to assign item to bill belonging to another account, in that case both `AccountId` and `BillId` must be provided.

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
| --- | --- | --- | --- |
| `OrderItems` | array of [Order item](#order-item) | optional | Updated order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](#payment-item) | optional | Updated payment items (such as cash, credit card payments or invoices). |

## Get all bills

Returns all bills, possibly filtered by customers, identifiers and other filters.

### Request

`[PlatformAddress]/api/connector/v1/bills/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "BillIds": [
        "e654f217-d1b5-46be-a820-e93ba568dfac"
    ],
    "CustomerIds": [
        "fe795f96-0b64-445b-89ed-c032563f2bac"
    ],
    "State": "Closed",
    "ClosedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-10T00:00:00Z"
    },
    "CreatedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-10T00:00:00Z"
    },
    "DueUtc": null,
    "PaidUtc": null,
    "Extent": {
        "Items": false
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the [Bill](finance.md#bill)s. Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customer](customers.md#customer)s. |
| `State` | string | optional | [Bill state](finance.md#bill-state) the bills should be in. If not specified `Open` and `Closed` bills are returned. |
| `ClosedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Bill](#bill) was closed. |
| `CreatedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Bill](#bill) was created. |
| `DueUtc` | [Time interval](enterprises.md#time-interval) | optional , max length 3 months| Interval in which the [Bill](#bill) is due to be paid. |
| `PaidUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Bill](#bill) was paid. |
| `Extent` | [Bill extent](finance.md#bill-extent) | required | Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. |

#### Bill state

* `Open`
* `Closed`

#### Bill extent

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Items` | bool | required | Whether the response should contain payments and revenue items. |

### Response

```javascript
{
    "Bills": [
        {
            "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
            "AccountId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "CustomerId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "CompanyId": null,
            "CounterId": null,
            "State": "Closed",
            "Type": "Invoice",
            "Number": "29",
            "VariableSymbol": null,
            "CreatedUtc": "2017-01-31T10:48:06Z",
            "IssuedUtc": "2017-01-31T10:58:06Z",
            "TaxedUtc": null,
            "PaidUtc": null,
            "DueUtc": null,
            "Notes": "",
            "Options": {
                "DisplayCustomer": true,
                "DisplayTaxation": true,
                "TrackReceivable": true,
                "DisplayCid": false
            },
            "OrderItems": [],
            "PaymentItems": [],
            "AssigneeData": {
                "Discriminator": "BillCustomerData",
                "Value": {
                    "ItalianFiscalCode": null
                }
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Bills` | array of [Bill](finance.md#bill) | required | The filtered bills. |

#### Bill

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the bill. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](customers.md#customer)) the bill is issued to. |
| `CustomerId` | string | optional | Unique identifier of the [Customer](customers.md#customer) the bill is issued to. |
| `CompanyId` | string | optional | Unique identifier of the [Company](enterprises.md#company) the bill is issued to. |
| `CounterId` | string | optional | Unique identifier of the bill Counter. |
| `State` | string [Bill state](finance.md#bill-state) | required | State of the bill. |
| `Type` | string [Bill type](finance.md#bill-type) | required | Type of the bill. |
| `Number` | string | required | Number of the bill. |
| `VariableSymbol` | string | optional | Variable symbol of the bill. |
| `CreatedUtc` | string | required | Date and time of the bill creation in UTC timezone in ISO 8601 format. |
| `IssuedUtc` | string | required | Date and time of the bill issuance in UTC timezone in ISO 8601 format. |
| `TaxedUtc` | string | optional | Taxation date of the bill in UTC timezone in ISO 8601 format. |
| `PaidUtc` | string | optional | Date when the bill was paid in UTC timezone in ISO 8601 format. |
| `DueUtc` | string | optional | Bill due date and time in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes. |
| `Options` | [Bill options](#bill-options) | required | Options of the bill. |
| `OrderItems` | array of [Order item](#order-item) | required | The order items (consumed items such as nights or products) on the bill. |
| `PaymentItems` | array of [Payment item](#payment-item) | required | The payment items (such as cash, credit card payments or invoices) on the bill. |
| `AssigneeData` | [Bill assignee data](#bill-assignee-data) | optional | Additional information about assignee of the bill. Persisted at the time of closing of the bill. |

#### Bill type

A bill is either a `Receipt` which means that it has been fully paid, or `Invoice` that is supposed to be paid in the future.

* `Receipt` - the bill has already been fully paid.
* `Invoice` - the bill is supposed to be paid in the future. Before closing it is balanced with an invoice payment.

#### Bill options

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `DisplayCustomer` | boolean | required | Display customer information on a bill. |
| `DisplayTaxation` | boolean | required | Display taxation detail on a bill. |
| `TrackReceivable` | boolean | required | Tracking of payments is enabled for bill, only applicable for `Invoice`. |
| `DisplayCid` | boolean | required | Display CID number on bill, only applicable for `Invoice`. |

#### Bill assignee data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Discriminator` | string [Bill assignee data discriminator](#bill-assignee-data-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on [Bill assignee data discriminator](#bill-assignee-data-discriminator). |

#### Bill assignee data discriminator

* `BillCustomerData` - Assignee data specific to a customer.
* `BillCompanyData` - Assignee data specific to a company.

#### Bill customer data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ItalianFiscalCode` | string  | optional | Italian fiscal code. |

#### Bill company data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |

## Add bill

Creates new empty bill assigned to specified account.

### Request

`[PlatformAddress]/api/connector/v1/bills/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Bills": [
        {
            "AccountId": "a5786a7b-a388-43cc-a838-abd7007b5ff7"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Bills` | array of [Bill parameters](#bill-parameters) | required, max 1000 items | Information about bills to be created. |

#### Bill parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](customers.md#customer)) the bill is issued to. |

### Response

```javascript
{
    "Bills": [
        {
            "Id": "177966b7-f3d9-42b7-ba49-abd80057329b",
            "AccountId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "CustomerId": "a5786a7b-a388-43cc-a838-abd7007b5ff7",
            "CompanyId": null,
            "CounterId": null,
            "State": "Open",
            "Type": "Receipt",
            "Number": null,
            "VariableSymbol": null,
            "CreatedUtc": "2020-06-12T05:17:28Z",
            "IssuedUtc": null,
            "TaxedUtc": null,
            "PaidUtc": null,
            "DueUtc": null,
            "Notes": null,
            "OrderItems": [],
            "PaymentItems": []
        }
    ]
}
``` 

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Bills` | array of [Bill](#bill) | required | The created bills. |

## Delete bill

Removes selected bills. Bill must be empty, otherwise it's not possible to delete it.

### Request

`[PlatformAddress]/api/connector/v1/bills/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "BillIds": [
        "177966b7-f3d9-42b7-ba49-abd80057329b"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillIds` | array of string | required | Unique identifiers of the [Bill](finance.md#bill)s to be deleted. |

### Response

```javascript
{}
```

## Close bill

Closes a bill so no further modification to it is possible.

### Request

`[PlatformAddress]/api/connector/v1/bills/close`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
    "Type": "Receipt",
    "BillCounterId": "84b25778-c1dd-48dc-8c00-ab3a00b6df14",
    "FiscalMachineId": null,
    "Options": {
        "DisplayCustomer": {
            "Value": false
        },
        "DisplayTaxation": null
    },
    "TaxedDate": {
        "Value": "2020-07-07"
    },
    "DueDate": {
        "Value": "2020-07-14"
    },
    "VariableSymbol": {
        "Value": "5343"
    },
    "TaxIdentifier": {
        "Value": "446768"
    },
    "Notes": {
        "Value": "Bill closing note"
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillId` | string | required | Unique identifier of the [Bill](finance.md#bill) to be closed. |
| `Type` | string [Bill type](#bill-type) | required | Specifies the mode bill should be closed in. |
| `BillCounterId` | string | optional | Unique identifier of the [Counter](enterprises.md#counter) to be used for closing. Default one is used when no value is provided. |
| `FiscalMachineId` | string | optional | Unique identifier of the [Fiscal Machine](integrations.md#device) to be used for closing. Default one is used when no value is provided. |
| `Options` | [Bill options parameters](#bill-options-parameters) | optional  | Options of the bill. If not provided both `DisplayCustomer` and `DisplayTaxation` are set by default. |
| `TaxedDate` | [String update value](reservations.md#string-update-value) | optional | Date of consumption for tax purposes. Can be used only with [Bill type](#bill-type) `Invoice`. |
| `DueDate` | [String update value](reservations.md#string-update-value) | optional | Deadline when [Bill](#bill) is due to be paid. Can be used only with [Bill type](#bill-type) `Invoice`. |
| `VariableSymbol` | [String update value](reservations.md#string-update-value) | optional | Optional unique identifier of requested payment. Can be used only with [Bill type](#bill-type) `Invoice`. |
| `TaxIdentifier` | [String update value](reservations.md#string-update-value) | optional | Tax identifier of account to be put on a bill. |
| `Notes` | [String update value](reservations.md#string-update-value) | optional | Notes to be attached to bill. |
| `Address` | [Address parameters](customers.md#address-parameters) | optional | Address of the account to be displayed on bill. Overrides the default one taken from account profile. |

#### Bill options parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `DisplayCustomer` | [Bool update value](reservations.md#bool-update-value) | required | Display customer information on a bill. |
| `DisplayTaxation` | [Bool update value](reservations.md#bool-update-value) | required | Display taxation detail on a bill. |

### Response

```javascript
{
    "Bills": [
        {
            "Id": "44eba542-193e-47c7-8077-abd7008eb206",
            "CustomerId": "7eaf9da6-7229-454a-8cb0-abd700804bd2",
            "CompanyId": null,
            "CounterId": "84b25778-c1dd-48dc-8c00-ab3a00b6df14",
            "State": "Closed",
            "Type": "Receipt",
            "Number": "84",
            "VariableSymbol": null,
            "CreatedUtc": "2020-06-11T08:39:32Z",
            "IssuedUtc": "2020-06-25T08:49:38Z",
            "TaxedUtc": "2020-06-25",
            "PaidUtc": null,
            "DueUtc": null,
            "Notes": null,
            "Options": {
                "DisplayCustomer": false,
                "DisplayTaxation": true,
                "TrackReceivable": false,
                "DisplayCid": false
            },
            "OrderItems": [],
            "PaymentItems": []
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Bills` | array of [Bill](#bill) | required | The closed bill. |

## Get bill PDF

Creates a PDF version of the specified bill. In case it's not possible to return PDF immediately, you must retry the call later while providing the unique event identifier that is returned from the first invocation.

### Request

`[PlatformAddress]/api/connector/v1/bills/getPdf`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
    "BillPrintEventId": null
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillId` | string | required | Unique identifier of the [Bill](finance.md#bill) to be printed. |
| `BillPrintEventId` | string | optional | Unique identifier of the [Bill print event](#bill-print-event) returned by previous invocation. |

### Response

```javascript
{
    "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
    "Result": {
        "Discriminator": "BillPdfFile",
        "Value": {
            "Base64Data": "JVBER....."
        }
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `BillId` | string | required | The unique identifier of printed [Bill](finance.md#bill). |
| `Result` | object [Bill PDF result](#bill-pdf-result) | required | The result of operation. |

#### Bill PDF result

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Discriminator` | string [Bill PDF result discriminator](#bill-pdf-result-discriminator) | required | Determines type of result. |
| `Value` | object | required | Structure of object depends on [Bill PDF result discriminator](#bill-pdf-result-discriminator). |

#### Bill PDF result discriminator

* `BillPdfFile` - PDF version of a [Bill](finance.md#bill) was successfully created, `Value` is [Bill PDF file](#bill-pdf-file).
* `BillPrintEvent` - PDF version of a [Bill](finance.md#bill) couldn't be created at this moment (for example bill haven't been reported to authorities yet), `Value` is [Bill print event](#bill-print-event).

#### Bill PDF file

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Base64Data` | string  | required | BASE64 encoded PDF file. |

#### Bill print event

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `BillPrintEventId` | string  | required | Unique identifier of print event. Must be used in retry calls to retrieve the PDF. |

## Get all outlet items

Returns all outlet items of the enterprise that were consumed \(posted\) or will be consumed within the specified interval. If the `Currency` is specified, costs of the items are converted to that currency.

### Request

`[PlatformAddress]/api/connector/v1/outletItems/getAll`

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
    "Currency": "EUR"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ConsumedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Outlet item](#outlet-item) was consumed. Required if no other filter is provided. |
| `ClosedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Outlet bill](#outlet-bill) was closed. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](configuration.md#currency) the item costs should be converted to. |

### Response

```javascript
{  
    "OutletItems": [  
        {  
            "Id": "f29821b7-1659-4c96-a8c7-3725d0f1509b",
            "BillId": "5c82a9bd-729c-4f80-af48-a56ab3aebbf6",
            "AccountingCategoryId": "1131ddd1-fa2b-4150-bbf6-7fce94941f65",
            "Type": "Revenue",
            "Name": "sample revenue item",
            "UnitCount": 4,
            "UnitAmount": {  
                "Currency": "EUR",
                "GrossValue": 11,
                "NetValue": 11,
                "TaxValues": []
            },
            "CreatedUtc": "2018-07-25T12:47:11Z",
            "ConsumedUtc": "2018-07-26T12:19:07Z",
            "Notes": null
        },
        {  
            "Id": "dfec07c6-e278-4ed0-932f-41bbd1f38039",
            "BillId": "7bdd3b53-7bb3-419d-8ff2-c9bde65d0c7e",
            "AccountingCategoryId": "7EDAB816-BF4E-40CC-8936-7BC0B222908D",
            "Type": "Payment",
            "Name": "sample payment item",
            "UnitCount": 77,
            "UnitAmount": {  
                "Currency": "EUR",
                "GrossValue": 2,
                "NetValue": 2
                "TaxValues": []
            },
            "CreatedUtc": "2018-07-25T16:25:28Z",
            "ConsumedUtc": "2018-07-26T10:11:08Z",
            "Notes": null
        }
    ],
    "OutletBills": [  
        {  
            "Id": "5c82a9bd-729c-4f80-af48-a56ab3aebbf6",
            "OutletId": "c9f09414-2fdf-41d6-bdb1-12158b01048e",
            "Number": "1305",
            "ClosedUtc": "2018-07-26T12:19:07Z",
            "Notes": null
        },
        {  
            "Id": "7bdd3b53-7bb3-419d-8ff2-c9bde65d0c7e",
            "OutletId": "E0A29D6D-411E-4302-AA6D-9289935C5F14",
            "Number": "1306",
            "ClosedUtc": "2018-07-26T10:19:02Z",
            "Notes": null
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `OutletItems` | array of [Outlet item](finance.md#outlet-item) | required | The outlet items. |
| `OutletBills` | array of [Outlet bill](finance.md#outlet-bill) | required | The outlet bills of the items. |

#### Outlet item

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the item. |
| `BillId` | string | required | Unique identifier of the [Outlet bill](finance.md#outlet-bill) the item belongs to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](finance.md#accounting-category) the item belongs to. |
| `Type` | string [Outlet item type](finance.md#outlet-item-type) | required | Type of the item. |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Unit count of the item. |
| `UnitAmount` | [Amount](finance.md#amount-value) | required | Unit amount of the item. |
| `CreatedUtc` | string | optional | Date and time of the item creation in UTC timezone in ISO 8601 format. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes. |

#### Outlet item type

* `Revenue`
* `NonRevenue`
* `Payment`

#### Outlet bill

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the bill. |
| `OutletId` | string | required | Unique identifier of the [Outlet](enterprises.md#outlet) where the bill was issued. |
| `Number` | string | required | Number of the bill. |
| `ClosedUtc` | string | required | Date and time of the bill closure in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes on the bill. |

## Get all credit cards 

Returns all credit cards, possibly filtered by identifiers, [Customer](customers.md#customer)s or other filters.

### Request

`[PlatformAddress]/api/connector/v1/creditCards/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CreditCardIds": [
        "f1d94a32-b4be-479b-9e47-a9fcb03d5196"
    ],
    "CustomerIds": [
        "5cbbd97d-5f19-4010-9abf-ab0400a3366a"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CreditCardIds` | array of string | optional, max 1000 items | Unique identifiers of the [Credit card](finance.md#credit-card)s. Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customer](customers.md#customer)s. |

### Response

```javascript
{
    "CreditCards": [
        {
            "CreatedUtc": "2018-05-24T13:45:29Z",
            "CustomerId": "a3c90426-43f2-4b53-8482-446dfc724bd2",
            "Expiration": "2020-11",
            "Format": "Physical",
            "Id": "f1d94a32-b4be-479b-9e47-a9fcb03d5196",
            "IsActive": true,
            "Kind": "Gateway",
            "ObfuscatedNumber": "************1111",
            "State": "Enabled",
            "Type": "Visa"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| CreditCards | array of [Credit card](finance.md#credit-card)s | required | The credit cards. |

#### Credit card

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the credit card. |
| `CustomerId` | string | required | Unique identifier of the credit card [owner](customers.md#customer). |
| `CreatedUtc` | string | required | Creation date and time of the credit card in UTC timezone in ISO 8601 format. |
| `Expiration` | string | optional | Expiration of the credit card in format `MM/YYYY`. |
| `IsActive` | boolean | required | Whether the credit card is still active. |
| `ObfuscatedNumber` | string | optinal | Obfuscated credit card number. At most first six digits and last four digits can be specified, otherwise the digits are replaced with `*`. |
| `Format` | string [Credit card format](finance.md#credit-card-format) | required | Format of the credit card. |
| `Kind` | string [Credit card kind](finance.md#credit-card-kind) | required | Kind of the credit card. |
| `State` | string [Credit card state](finance.md#credit-card-state) | required | State of the credit card. |
| `Type` | string [Credit card type](finance.md#credit-card-type) | required | Type of the credit card. |

#### Credit card format

* `Physical`
* `Virtual`

#### Credit card kind

* `Terminal`
* `Gateway`

#### Credit card state

* `Enabled`
* `Disabled`

#### Credit card type

* `MasterCard`, `Visa`, `Amex`, `Maestro`, `Discover`, `VPay`, ...

## Charge credit card

Creates payment for specified customer credit card and charges the credit card via a gateway. Note that the kind of the card has to be `Gateway`.

### Request

`[PlatformAddress]/api/connector/v1/creditCards/charge`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CreditCardId": "866d3f51-5b8b-4e8f-a3af-5b84768c522d",
    "Amount": {
        "GrossValue": 5,
        "Currency": "EUR"
    },
    "AccountingCategoryId": null,
    "Notes": null,
    "ReceiptIdentifier": null
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](finance.md#credit-card). |
| `Amount` | [Amount value](finance.md#amount-value) | required | Amount of the credit card payment. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](#finance.md#accounting-category). |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |
| `Notes` | string | optional | Additional payment notes. |

### Response

```javascript
{
    "PaymentId": "98753f51-5b8b-4e8f-a3af-5b8476865983"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| PaymentId | string | required | Unique identifier of the [Payment item](finance.md#payment-item). |

## Add tokenized credit card

Adds a new tokenized credit card to the specified customer. To be able to use this operation special permission has to be granted during certification.

### Request

`[PlatformAddress]/api/connector/v1/creditCards/addTokenized`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "e98995b0-140a-4208-bbeb-b77f2c43d6ee",
    "CreditCardData": {
        "StorageData": "190510170631533875",
        "ObfuscatedNumber": "41111********1111",
        "Expiration": "2025-10"
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `CreditCardData` | [Credit card data](finance.md#credit-card-data) | required | Credit card details provided by PCI provider. |

#### Credit card data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `StorageData` | string | required | Identifier of credit card data in PCI storage (`transactionId`). |
| `ObfuscatedNumber` | string | required | Obfuscated credit card number. At most first six digits and last four digits can be specified, otherwise the digits are replaced with `*`. |
| `Expiration` | string | required | Expiration of the credit card in format `yyyy-MM`. |

### Response

```javascript
{
    "CreditCardId": "ee2209ce-71c6-4e3a-978f-aac700c82c7b"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](finance.md#credit-card). |

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
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerIds` | array of string | required, max 1000 items | Unique identifier of the [Customer](customers.md#customer). |

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
| --- | --- | --- | --- |
| Preauthorizations | array of [Preauthorization](finance.md#preauthorization) | required | Preauthorizations of the specified [Customers](customers.md#customer). |

#### Preauthorization

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the preauthorization. |
| `CreditCardId` | string | required | Unique identifier of the credit card. |
| `Amount` | [Amount value](finance.md#amount-value) | required | Value of the preauthorization. |
| `State` | string [Preauthorization State](finance.md#preauthorization-state) | required | State of the preauthorization. |
| `Code` | string | optional | Code of the preauthorization. |

#### Preauthorization state

* `Chargeable` - Created and prepared for the charging.
* `Expired` - A preauthorization that is not charged and expired.
* `Cancelled` - A preauthorization that was canceled before charging.
* `Charged` - Charged preauthorization.

## Add credit card payment

Adds a new credit card payment to a bill of the specified customer. Note that the payment is added to open bill of the customer, either to the specified one or the default one. This operation only serves to record a credit card payment that has already been taken outside of Mews or Mews' payment terminal, and does not actually charge the customer's credit card. 

The bill can then be closed manually by a Mews user, or automatically via API with the [Close bill](finance.md#close-bill) operation. 

### Request

`[PlatformAddress]/api/connector/v1/payments/addCreditCard`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
    "Amount": { 
        "Currency": "GBP",
        "GrossValue": 100
    },
    "CreditCard": {
        "Type": "Visa",
        "Number": "411111******1111",
        "Expiration": "12/2016",
        "Name": "John Smith"
    },
    "AccountingCategoryId": null,
    "ReceiptIdentifier": "123456",
    "Notes": "Terminal A"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Amount value](finance.md#amount-value) | required | Amount of the credit card payment. |
| `CreditCard` | [Credit card](finance.md#credit-card-parameters) | required | Credit card details. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the credit card payment. |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |
| `Notes` | string | optional | Additional payment notes. |

#### Credit card parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Type` | string | required | Type of the credit card, one of: `Visa`, `MasterCard`, `Amex`, `Discover`, `DinersClub`, `Jcb`, `EnRoute`, `Maestro`, `UnionPay`. |
| `Number` | string | required | Obfuscated credit card number. At most first six digits and last four digits can be specified, the digits in between should be replaced with `*`. It is possible to provide even more obfuscated number or just last four digits. **Never provide full credit card number**. For example `411111******1111`. |
| `Expiration` | string | optional | Expiration of the credit card in format `MM/YYYY`, e.g. `12/2016` or `04/2017`. |
| `Name` | string | required | Name of the card holder. |

### Response

```javascript
{
    "CreditCardId": "ee2209ce-71c6-4e3a-978f-aac700c82c7b"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](finance.md#credit-card). |

## Add external payment

Adds a new external payment to a bill of the specified customer. An external payment represents a payment that is tracked outside of the system.

### Request

`[PlatformAddress]/api/connector/v1/payments/addExternal`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
    "Amount": { 
        "Currency": "GBP",
        "GrossValue": 100
    },
    "ExternalIdentifier": "b06de5e4-7137-47ec-8a49-3303131b02c0",
    "Type": "Cash",
    "AccountingCategoryId": null,
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Amount value](finance.md#amount-value) | required | Amount of the external card payment. |
| `ExternalIdentifier` | string | optional | Identifier of the payment from external system. |
| `Type` | string [External payment type](finance.md#external-payment-type) | optional | Type of the external payment. *Except for the enterprises based in the French Legal Environment. Unspecified is considered as fraud. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the external payment. |
| `Notes` | string | optional | Additional payment notes. |

#### External payment type

* `Cash`
* `CreditCard`
* `Invoice`
* `WireTransfer`
* `Bacs`
* `CrossSettlement`

### Response

```javascript
{
    "ExternalPaymentId": "4ee05b77-ae21-46e8-8418-ac1c009dfb2b"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ExternalPaymentId` | string | required | Unique identifier of the [Payment item](#payment-item). |

## Add alternative payment

Adds a new alternative payment to a specified customer.

**Pre-requisites:** The property must have the relevant type of alternative payment method enabled in their Mews subscriptions in order to accept such payments in their Mews environment. Please ask the property to confirm. 

### Request

`[PlatformAddress]/api/connector/v1/payments/addAlternative`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
    "Method": "Ideal",
    "RedirectUrl": "https://mews.com",
    "Amount": { 
        "Currency": "GBP",
        "GrossValue": 100
    },
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `Method` | string [Alternative payment method](finance.md#alternative-payment-methods) | required | Payment method to use for the alternative payment. |
| `RedirectUrl` | string | required | URL where the customer will be redirected after completing their payment. |
| `Amount` | [Amount value](finance.md#amount-value) | required | Amount of the alternative payment. |

#### Alternative payment methods

* `Ideal`

### Response

```javascript
{
    "PaymentId": "3ae3976f-8f22-4936-a4e8-abf800bd7278",
    "NextAction": {
        "Discriminator": "RedirectToUrl",
        "Value": "https://sample-payment-gateway.com/redirect/authenticate/unFR1tjshd9OGDaSSyCeVEbO"
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `PaymentId` | string | required | Unique identifier of the created payment. |
| `NextAction` | object [Alternative payment next action](#alternative-payment-next-action) | required | Next action to take in order to complete the payment. |
#### Alternative payment next action

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Discriminator` | string [Payment next action discriminator](#payment-next-action-discriminator) | required | Determines type of value. |
| `Value` | string | required | String value depending on [Payment next action discriminator](#payment-next-action-discriminator). |

#### Payment next action discriminator

* `RedirectToUrl` - Redirect customer to a URL where they can complete their payment.

## Add outlet bills

Adds new outlet bills with their items.

### Request

`[PlatformAddress]/api/connector/v1/outletBills/add`

```javascript
{  
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Bills": [  
        {  
            "OutletId": "7700469f-7667-4ebd-a1c0-10380afc9bd0",
            "Number": "1257",
            "ClosedUtc": "2017-01-01T00:00:00Z",
            "Items": [  
                {  
                    "Type": "Payment",
                    "Name": "Cash payment",
                    "UnitCount": 1,
                    "UnitAmount": {
      		            "Currency": "GBP",
       		            "GrossValue": -25,
        	            "TaxCodes": [
                            "UK-S"
                        ]
                    },
                    "ConsumedUtc": "2017-01-01T00:00:00Z"
                },
                {  
                    "Type": "Revenue",
                    "Name": "Beer",
                    "UnitCount": 10,
                    "UnitAmount": {
      		            "Currency": "GBP",
       		            "GrossValue": 2.50,
        	            "TaxCodes": [
                            "UK-S"
                        ]
                    },
                    "ConsumedUtc": "2017-01-01T00:00:00Z",
                    "AccountingCategoryId": null
                }
            ]
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Bills` | array of [Outlet bill parameters](finance.md#outlet-bill-parameters) | required | The new outlet bills. |

#### Outlet bill parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `OutletId` | string | required | Unique identifier of the [Outlet](enterprises.md#outlet) where the bill was issued. |
| `Number` | string | required | Number of the bill. |
| `Notes` | string | optional | Additional notes on the bill. |
| `ClosedUtc` | string | required | Date and time of the bill closure in UTC timezone in ISO 8601 format. |
| `Items` | array of [Outlet item parameters](finance.md#outlet-item-parameters) | required | The items on the bill. |

#### Outlet item parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Type` | string [Outlet item type](finance.md#outlet-item-type) | optional | Type of the item. |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Unit count of the item. |
| `UnitAmount` | [Amount](services.md#amount-parameters) | required | Unit amount of the item. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes of the item. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the item. |

### Response

```javascript
{
    "OutletBillIds": [
        "f2ee1bd2-dd55-4cd3-bab1-ab6800bf0301"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `OutletBillIds` | array of string | required | Array of unique identifiers of the added [Outlet bills](#outlet-bill). |
