# Finance

## Get all exchange rates

Returns all available exchange rates among currencies of the [Enterprise](configuration.md#enterprise).

### Request

`[PlatformAddress]/api/connector/v1/exchangeRates/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ExchangeRates` | array of [Exchange rate](finance.md#exchange-rate) | required | The available exchange rates. |

#### Exchange rate

| Property | Type |  | Description |
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
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Cashiers` | array of [Cashier](finance.md#cashier) | required | Cashiers in the enterprise. |

#### Cashier

| Property | Type |  | Description |
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
    "StartUtc": "2017-01-01T00:00:00Z",
    "EndUtc": "2017-02-01T00:00:00Z"    
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `StartUtc` | string | required | Start of the creation interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the creation interval in UTC timezone in ISO 8601 format. |

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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CashierTransactions` | array of [Cashier transaction](finance.md#cashier-transaction) | required | Cashier transactions created in the interval. |

#### Cashier transaction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the transaction. |
| `CashierId` | string | required | Unique identifier of the [Cashier](finance.md#cashier). |
| `PaymentId` | string | optional | Unique identifier of the corresponding payment [Accounting item](finance.md#accounting-item). |
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
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `AccountingCategories` | array of [Accounting category](finance.md#accounting-category) | required | Accounting categories of the enterprise. |

#### Accounting category

| Property | Type |  | Description |
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
* ...

## Get all accounting items

Returns all accounting items of the enterprise that were consumed \(posted\) or will be consumed within the specified interval. If the `Currency` is specified, costs of the items are converted to that currency.

### Request

`[PlatformAddress]/api/connector/v1/accountingItems/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2017-01-01T00:00:00Z",
    "EndUtc": "2017-02-01T00:00:00Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `TimeFilter` | string [Accounting item time filter](finance.md#accounting-item-time-filter) | optional | Time filter of the interval. If not specified, items `Consumed` in the interval are returned. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](configuration.md#currency) the item costs should be converted to. |
| `Extent` | [Accounting item extent](#accounting-item-extent) | optional | Extent of data to be returned. E.g. it is possible to specify that together with the accounting items, credit card transactions should be also returned. If not specified, `AccountingItems` is used as the default extent. |
| `States` | array of string [Accounting state](reservations.md#Accounting-item-state) | optional | States the accounting items should be in. If not specified, accounting items in `Open` or `Closed` states are returned. |

#### Accounting item time filter

* `Consumed` - items consumed in the interval.
* `Closed` - items whose bills have been closed in the interval.

#### Accounting item extent

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `AccountingItems` | bool | optional | Whether the response should contain [Accounting item](#accounting-item)s. |
| `CreditCardTransactions` | bool | optional | Whether the response should contain [Credit card transaction](#credit-card-transaction)s of the accounting items. |

#### Accounting item state

* `Open` - Accounting items which are open and have not been closed.
* `Closed` - Accounting items which have been closed on a bill.
* `Inactive` - Accounting items which are inactive.
* `Canceled` - Accounting items which have been canceled.

### Response

```javascript
{
    "AccountingItems": [
        {
            "AccountingCategoryId": "4ac8ce68-5732-4f1d-bf0d-e557072c926f",
            "Amount": {
                "Currency": "GBP",
                "NetValue": 2.08,
                "GrossValue": 2.5,
                "TaxValues": [
                    {
                        "Code": "UK-S",
                        "Value": 0.42
                    }
                ],
            },
            "BillId": null,
            "CreditCardId" : null,
            "ClosedUtc": "2017-02-41T10:41:54Z",
            "ConsumptionUtc": "2016-07-27T12:48:39Z",
            "CustomerId": "2a1a4315-7e6f-4131-af21-402cec59b8b9",
            "Id": "89b93f7c-5c63-4de2-bd17-ec5fee5e3120",
            "InvoiceId": null,
            "Name": "Caramel, Pepper & Chilli Popcorn",
            "Notes": null,
            "OrderId": "810b8c3a-d358-4378-84a9-534c830016fc",
            "ProductId": null,
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "Type": "ServiceRevenue",
            "SubType": "CustomItem"
        }
    ],
    "CreditCardTransactions": null
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `AccountingItems` | array of [Accounting item](finance.md#accounting-item) | optional | The accounting items. |
| `CreditCardTransactions` | array of [Credit card transaction](finance.md#credit-card-transaction) | optional | The credit card payment transactions. |

#### Accounting item

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the item. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer) whose account the item belongs to. |
| `ProductId` | string | optional | Unique identifier of the [Product](services.md#product). |
| `ServiceId` | string | optional | Unique identifier of the [Service](services.md#service) the item belongs to. |
| `OrderId` | string | optional | Unique identifier of the order \(or [Reservation](reservations.md#reservation) which is a special type of order\) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the bill the item is assigned to. |
| `CreditCardId` | string | optional | Unique identifier of the [Credit card](finance.md#credit-card) the item is associated to. |
| `InvoiceId` | string | optional | Unique identifier of the invoiced [Bill](finance.md#bill) the item is receivable for. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](finance.md#accounting-category) the item belongs to. |
| `Amount` | [Amount value](finance.md#amount-value) | required | Item's amout, negative amount represents either rebate or a payment. |
| `Type` | string [Accounting item type](finance.md#accounting-item-type) | required | Type of the item. |
| `SubType` | string [Accounting item subtype](finance.md#accounting-item-subtype) | required | subtype of the item. Note that the subtype depends on the `Type` of the item.  |
| `Name` | string | required | Name of the item. |
| `Notes` | string | optional | Additional notes. |
| `ConsumptionUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |

#### Accounting item type

* `ServiceRevenue`
* `ProductRevenue`
* `AdditionalRevenue`
* `Payment`

#### Accounting item subtype

##### Revenue subtypes

* `CancellationFee`
* `Rebate`
* `Deposit`
* `ExchangeRateDifference`
* `CustomItem`
* `Surcharge`
* `SurchargeDiscount`
* `SpaceOrder`
* `ProductOrder`
* `Other`

##### Payment subtypes

* `CreditCard`
* `Invoice`
* `Cash`
* `Unspecified`
* `BadDebts`
* `WireTransfer`
* `ExchangeRateDifference`
* `ExchangeRoundingDifference`
* `BankCharges`
* `Cheque`
* `Other`

#### Currency value

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `Value` | number | optional | Amount in the currency. |

#### Amount Value

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `NetValue` | number | optional | Net value in case the item is taxed. |
| `GrossValue` | number | optional | Gross value including all taxes. |
| `TaxValues` | array of [Tax Values](finance.md#tax-value) | optional | The tax values applied. |

#### Tax value

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | number | required | Code corresponding to tax type. |
| `Value` | number | required | Amount of tax applied. |

#### Credit card transaction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the credit card transaction. |
| `PaymentId` | string | required | Unique identifier of the [Accounting item](#accounting-item). |
| `ChargedAmount` | [Amount](finance.md#amount-value) | required | Charged amount of the transaction. |
| `SettledAmount` | [Amount](finance.md#amount-value) | optional | Settled amount of the transaction. |
| `Fee` | [Amount](finance.md#amount-value) | optional | Fee of the transaction. |
| `SettlementId` | string | optional | Identifier of the settlement. |
| `SettledUtc` | string | optional | Settlement date and time in UTC timezone in ISO 8601 format. |

## Get all bills

Returns all bills, possible filtered by customers, identifiers and other filters.

### Request

`[PlatformAddress]/api/connector/v1/bills/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "BillIds": [
        "e654f217-d1b5-46be-a820-e93ba568dfac"
    ],
    "CustomerIds": [
        "fe795f96-0b64-445b-89ed-c032563f2bac"
    ],
    "State": "Open",
    "TimeFilter": "Created",
    "StartUtc": null,
    "EndUtc": null,
    "Extent": {
        "Items": false
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `BillIds` | array of string | optional | Unique identifiers of the [Bill](finance.md#bill)s. |
| `CustomerIds` | array of string | optional | Unique identifiers of the [Customer](customers.md#customer)s. |
| `State` | string | optional | [Bill state](finance.md#bill-state) the bills should be in. If not specified `Open` and `Closed` bills are returned. |
| `TimeFilter` | string | optional | [Time filter](finance.md#bill-time-filter) of the interval. |
| `StartUtc` | string | optional | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the interval in UTC timezone in ISO 8601 format. |
| `Extent` | [Bill extent](finance.md#bill-extent) | optional | Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. If not specified, no extent is used. |

#### Bill state

* `Open`
* `Closed`

#### Bill time filter

* `Created` - bills created in the interval.
* `Closed` - bills closed in the interval.
* `Paid` - bills paid in the interval.
* `DueDate` - bills having a due date in the interval.

#### Bill extent

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Items` | bool | required | Whether the response should contain payments and revenue items. |

### Response

```javascript
{
    "Bills": [
        {
            "CompanyId": null,
            "CustomerId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "CounterId": null,
            "DueUtc": null,
            "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
            "IssuedUtc": "2017-01-31T10:58:06Z",
            "TaxedUtc": null,
            "Notes": "",
            "Number": "29",
            "VariableSymbol": null,
            "Payments": [],
            "Revenue": [],
            "State": "Closed",
            "Type": "Invoice"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Bills` | array of [Bill](finance.md#bill) | required | The closed bills. |

#### Bill

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the bill. |
| `CustomerId` | string | optional | Unique identifier of the [Customer](customers.md#customer) the bill is issued to. |
| `CompanyId` | string | optional | Unique identifier of the [Company](enterprises.md#company) the bill is issued to. |
| `CounterId` | string | optional | Unique identifier of the bill Counter. |
| `State` | string [Bill state](finance.md#bill-state) | required | State of the bill. |
| `Type` | string [Bill type](finance.md#bill-type) | required | Type of the bill. |
| `Number` | string | required | Number of the bill. |
| `VariableSymbol` | string | optional | Variable symbol of the bill. |
| `IssuedUtc` | string | required | Date and time of the bill issuance in UTC timezone in ISO 8601 format. |
| `TaxedUtc` | string | optional | Taxation date of the bill in ISO 8601 format. |
| `DueUtc` | string | optional | Bill due date and time in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes. |
| `Revenue` | array of [Accounting item](finance.md#accounting-item) | required | The revenue items on the bill. |
| `Payments` | array of [Accounting item](finance.md#accounting-item) | required | The payments on the bill. |

#### Bill type

A bill is either a `Receipt` which means that it has been fully paid, or `Invoice` that is supposed to be paid in the future.

* `Receipt` - the bill has already been fully paid.
* `Invoice` - the bill is supposed to be paid in the future. Before closing it is balanced with an invoice payment.

## Get all outlet items

Returns all outlet items of the enterprise that were consumed \(posted\) or will be consumed within the specified interval. If the `Currency` is specified, costs of the items are converted to that currency.

### Request

`[PlatformAddress]/api/connector/v1/outletItems/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2017-01-01T00:00:00Z",
    "EndUtc": "2017-02-01T00:00:00Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `TimeFilter` | string [Outlet item time filter](finance.md#outlet-item-time-filter) | optional | Time filter of the interval. If not specified, items `Consumed` in the interval are returned. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](configuration.md#currency) the item costs should be converted to. |

#### Outlet item time filter

* `Consumed` - items consumed in the interval.
* `Closed` - items whose bills have been closed in the interval.

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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `OutletItems` | array of [Outlet item](finance.md#outlet-item) | required | The outlet items. |
| `OutletBills` | array of [Outlet bill](finance.md#outlet-bill) | required | The outlet bills of the items. |

#### Outlet item

| Property | Type |  | Description |
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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the bill. |
| `OutletId` | string | required | Unique identifier of the [Outlet](enterprises.md#outlet) where the bill was issued. |
| `Number` | string | required | Number of the bill. |
| `ClosedUtc` | string | required | Date and time of the bill closure in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes on the bill. |

## Get all credit cards by ids

Returns all credit cards with the specified ids.

### Request

`[PlatformAddress]/api/connector/v1/creditCards/getAllByIds`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CreditCardIds": [
        "f1d94a32-b4be-479b-9e47-a9fcb03d5196"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CreditCardIds` | array of string | required | Unique identifier of the [Credit card](finance.md#credit-card). |

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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| CreditCards | array of [Credit card](finance.md#credit-card)s | required | The credit cards. |

#### Credit card

| Property | Type |  | Description |
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

## Get all credit cards by customers

Returns all credit cards of specified customers.

### Request

`[PlatformAddress]/api/connector/v1/creditCards/getAllByCustomers`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "a3c90426-43f2-4b53-8482-446dfc724bd2"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Unique identifier of the [Customer](customers.md#customer)s. |

### Response

Same structure as in [Get all credit cards by ids](finance.md#get-all-credit-cards-by-ids) operation.

| Property | Type |  | Description |
| --- | --- | --- | --- |
| CreditCards | array of [Credit card](finance.md#credit-card)s | required | Credit cards of the specified [Customer](customers.md#customer)s. |

## Charge credit card

Creates payment for specified customer credit card and charges the credit card via a gateway. Note that the kind of the card has to be `Gateway`.

### Request

`[PlatformAddress]/api/connector/v1/creditCards/charge`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| PaymentId | string | required | Unique identifier of the payment [Accounting item](finance.md#accounting-item). |

## Get all preauthorizations by customers

Returns all preauthorizations of specified customers.

### Request

`[PlatformAddress]/api/connector/v1/preauthorizations/getAllByCustomers`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "e98995b0-140a-4208-bbeb-b77f2c43d6ee"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Unique identifier of the [Customer](customers.md#customer). |

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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| Preauthorizations | array of [Preauthorization](finance.md#preauthorization) | required | Preauthorizations of the specified [Customers](customers.md#customer). |

#### Preauthorization

| Property | Type |  | Description |
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

Adds a new credit card payment to a bill of the specified customer. Note that the payment is added to open bill of the customer, either to the specified one or the default one. So the bill has to be later settled in Mews. So e.g. payment terminal integration should use this operation to post payments taken through the terminal.

### Request

`[PlatformAddress]/api/connector/v1/payments/addCreditCard`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Amount value](finance.md#amount-value) | required | Amount of the credit card payment. |
| `CreditCard` | [Credit card](finance.md#credit-card-parameters) | required | Credit card details. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the credit card payment. |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |
| `Notes` | string | optional | Additional payment notes. |

#### Credit card parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string | required | Type of the credit card, one of: `Visa`, `MasterCard`, `Amex`, `Discover`, `DinersClub`, `Jcb`, `EnRoute`, `Maestro`, `UnionPay`. |
| `Number` | string | required | Obfuscated credit card number. At most first six digits and last four digits can be specified, the digits in between should be replaced with `*`. It is possible to provide even more obfuscated number or just last four digits. **Never provide full credit card number**. For example `411111******1111`. |
| `Expiration` | string | optional | Expiration of the credit card in format `MM/YYYY`, e.g. `12/2016` or `04/2017`. |
| `Name` | string | required | Name of the card holder. |

### Response

```javascript
{}
```

## Add external payment

Adds a new external payment to a bill of the specified customer. An external payment represents a payment that is tracked outside of the system.

### Request

`[PlatformAddress]/api/connector/v1/payments/addExternal`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
    "Amount": { 
        "Currency": "GBP",
        "GrossValue": 100
    },
    "Type": "Cash",
    "AccountingCategoryId": null,
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Amount value](finance.md#amount-value) | required | Amount of the external card payment. |
| `Type` | string [External payment type](finance.md#external-payment-type) | optional | Type of the external payment. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the external payment. |
| `Notes` | string | optional | Additional payment notes. |

#### External payment type

* `Cash`
* `CreditCard`
* `Invoice`
* `WireTransfer`
* `Bacs`

### Response

```javascript
{}
```

## Add outlet bills

Adds new outlet bills with their items.

### Request

`[PlatformAddress]/api/connector/v1/outletBills/add`

```javascript
{  
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Bills` | array of [Outlet bill parameters](finance.md#outlet-bill-parameters) | required | The new outlet bills. |

#### Outlet bill parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `OutletId` | string | required | Unique identifier of the [Outlet](enterprises.md#outlet) where the bill was issued. |
| `Number` | string | required | Number of the bill. |
| `Notes` | string | optional | Additional notes on the bill. |
| `ClosedUtc` | string | required | Date and time of the bill closure in UTC timezone in ISO 8601 format. |
| `Items` | array of [Outlet item parameters](finance.md#outlet-item-parameters) | required | The items on the bill. |

#### Outlet item parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string [Outlet item type](finance.md#outlet-item-type) | optional | Type of the item. |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Unit count of the item. |
| `UnitAmount` | [Amount](finance.md#amount-value) | required | Unit amount of the item. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes of the item. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the item. |

### Response

```javascript
{}
```

