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
                "Net": null,
                "Tax": null,
                "TaxRate": null,
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
| `StartUtc` | string | required | Start of the consumption interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the consumption interval in UTC timezone in ISO 8601 format. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](configuration.md#currency) the item costs should be converted to. |

#### Accounting item time filter

* `Consumed` - items consumed in the interval.
* `Closed` - items whose bills have been closed in the interval.

### Response

```javascript
{
    "AccountingItems": [
        {
            "AccountingCategoryId": "4ac8ce68-5732-4f1d-bf0d-e557072c926f",
            "Amount": {
                "Currency": "GBP",
                "Net": 2.08,
                "Tax": 0.42,
                "TaxRate": 0.2,
                "Value": 2.5
            },
            "BillId": null,
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
            "Type": "ServiceRevenue"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `AccountingItems` | array of [Accounting item](finance.md#accounting-item) | required | The consumed accounting items. |

#### Accounting item

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the item. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer) whose account the item belongs to. |
| `ProductId` | string | optional | Unique identifier of the [Product](services.md#product). |
| `ServiceId` | string | optional | Unique identifier of the [Service](services.md#service) the item belongs to. |
| `OrderId` | string | optional | Unique identifier of the order \(or [Reservation](reservations.md#reservation) which is a special type of order\) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the bill the item is assigned to. |
| `InvoiceId` | string | optional | Unique identifier of the invoiced [Bill](finance.md#bill) the item is receivable for. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](finance.md#accounting-category) the item belongs to. |
| `Amount` | [Currency value](finance.md#currency-value) | required | Amount the item costs, negative amount represents either rebate or a payment. |
| `Type` | string [Accounting item type](finance.md#accounting-item-type) | required | Type of the item. |
| `Name` | string | required | Name of the item. |
| `Notes` | string | optional | Additional notes. |
| `ConsumptionUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |

#### Accounting item type

* `ServiceRevenue`
* `ProductRevenue`
* `AdditionalRevenue`
* `Payment`

#### Currency value

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `Net` | number | optional | Net value in case the item is taxed. |
| `Tax` | number | optional | Tax value in case the item is taxed. |
| `TaxRate` | number | optional | Tax rate in case the item is taxed \(e.g. `0.21`\). |
| `Value` | number | required | Amount in the currency \(including tax if taxed\). |

## Get all bills by ids

Returns all bills with the specified ids.

### Request

`[PlatformAddress]/api/connector/v1/bills/getAllByIds`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "BillIds": [
        "e654f217-d1b5-46be-a820-e93ba568dfac"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `BillIds` | array of string | required | Unique identifiers of the [Bill](finance.md#bill)s. |

### Response

```javascript
{
    "Bills": [
        {
            "CompanyId": null,
            "CustomerId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "DueUtc": null,
            "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
            "IssuedUtc": "2017-01-31T10:58:06Z",
            "Notes": "",
            "Number": "29",
            "Payments": [
                {
                    "AccountingCategoryId": null,
                    "Amount": {
                        "Currency": "GBP",
                        "Net": null,
                        "Tax": null,
                        "TaxRate": null,
                        "Value": -340.22
                    },
                    "BillId": "26afba60-06c3-455b-92db-0e3983be0b1d",
                    "ClosedUtc": "2017-02-41T10:41:54Z",
                    "ConsumptionUtc": "2017-01-31T10:58:06Z",
                    "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
                    "Id": "9701f58d-3959-4d9d-9ba8-8e1d7c0adceb",
                    "InvoiceId": null,
                    "Name": "Invoice payment",
                    "Notes": null,
                    "OrderId": null,
                    "ProductId": null,
                    "ServiceId": null,
                    "Type": "Payment"
                }
            ],
            "Revenue": [
                {
                    "AccountingCategoryId": "7cd113f6-c5de-4bc9-8d78-3f73721c4c37",
                    "Amount": {
                        "Currency": "GBP",
                        "Net": 340.22,
                        "Tax": 0,
                        "TaxRate": 0,
                        "Value": 340.22
                    },
                    "BillId": "26afba60-06c3-455b-92db-0e3983be0b1d",
                    "ClosedUtc": "2017-01-41T10:41:54Z",
                    "ConsumptionUtc": "2017-01-31T08:41:54Z",
                    "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
                    "Id": "bc5885fe-38ce-4d3e-b5c4-f30cb3b8622f",
                    "InvoiceId": null,
                    "Name": "Miscellaneous",
                    "Notes": null,
                    "OrderId": "1dac7592-afe7-4dd3-acc0-fefdddadbe6e",
                    "ProductId": null,
                    "ServiceId": "0f7f56db-b8b3-42b0-8b53-2df4c8a87997",
                    "Type": "ProductRevenue"
                }
            ],
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
| `State` | string [Bill state](finance.md#bill-state) | required | State of the bill. |
| `Type` | string [Bill type](finance.md#bill-type) | required | Type of the bill. |
| `Number` | string | required | Number of the bill. |
| `IssuedUtc` | string | required | Date and time of the bill issuance in UTC timezone in ISO 8601 format. |
| `DueUtc` | string | optional | Bill due date and time in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes. |
| `Revenue` | array of [Accounting item](finance.md#accounting-item) | required | The revenue items on the bill. |
| `Payments` | array of [Accounting item](finance.md#accounting-item) | required | The payments on the bill. |

#### Bill state

* `Open`
* `Closed`

#### Bill type

A bill is either a `Receipt` which means , or `Invoice` that is supposed to be paid in the future.

* `Receipt` - the bill has already been fully paid.
* `Invoice` - the bill is supposed to be paid in the future. Before closing it is balanced with an invoice payment.

## Get all bills by customers

Returns all bills of the specified customers.

### Request

`[PlatformAddress]/api/connector/v1/bills/getAllByCustomers`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Unique identifiers of the [Customer](customers.md#customer)s. |

### Response

Same structure as in [Get all bills by ids](finance.md#get-all-bills-by-ids) operation.

## Get all closed bills

Returns all bills \(both receipts and invoices\) that have been closed in the specified time interval.

### Request

`[PlatformAddress]/api/connector/v1/bills/getAllClosed`

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
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

### Response

Same structure as in [Get all bills by ids](finance.md#get-all-bills-by-ids) operation.

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
                "Net": null,
                "Tax": null,
                "TaxRate": null,
                "Value": 10
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
                "Net": null,
                "Tax": null,
                "TaxRate": null,
                "Value": 22
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
| Preauthorizations | array of [Preauthorization](#preauthorization) | required | Preauthorizations of the specified [Customers](customers.md#customer). |

#### Preauthorization

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the preauthorization. |
| `CreditCardId` | string | required | Unique identifier of the credit card. |
| `Amount` | [Currency value](/operations/finance.md#currency-value) | required | Value of the preauthorization. |
| `State` | string [Preauthorization State](#preauthorization-state) | required | State of the preauthorization. |
| `Code` | string | optional | Code of the preauthorization. |

#### Preauthorization state

* `Chargeable` - Created and prepared for the charging.
* `Expired` - A preauthorization that is not charged and expired.
* `Cancelled` - A preauthorization that was cancelled before charging.
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
        "Value": 100
    },
    "CreditCard": {
        "Type": "Visa",
        "Number": "411111******1111",
        "Expiration": "12/2016",
        "Name": "John Smith"
    },
    "Category": {
        "Code": "CCP"
    },
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
| `Amount` | [Currency value](finance.md#currency-value) | required | Amount of the credit card payment. |
| `CreditCard` | [Credit card](finance.md#credit-card) | required | Credit card details. |
| `Category` | [Accounting category parameters](services.md#accounting-category-parameters) | optional | Accounting category to be assigned to the payment. |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |
| `Notes` | string | optional | Additional payment notes. |

#### Credit card

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string | required | Type of the credit card, one of: `Visa`, `MasterCard`, `Amex`, `Discover`, `DinersClub`, `Jcb`, `EnRoute`, `Maestro`, `UnionPay`. |
| `Number` | string | required | Obfuscated credit card number. At most first six digits and last four digits can be specified, the digits in between should be replaced with `*`. It is possible to provide even more obfuscated number or just last four digits. **Never provide full credit card number**. For example `411111******1111`. |
| `Expiration` | string | required | Expiration of the credit card in format `MM/YYYY`, e.g. `12/2016` or `04/2017`. |
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
        "Value": 100
    },
    "Type": "Cash"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Currency value](finance.md#currency-value) | required | Amount of the external card payment. |
| `Type` | string [External payment type](finance.md#external-payment-type) | optional | Type of the external payment. |
| `Category` | [Accounting category parameters](services.md#accounting-category-parameters) | optional | Accounting category to be assigned to the payment. |
| `Notes` | string | optional | Additional payment notes. |

#### External payment type

* `Cash`
* `CreditCard`

### Response

```javascript
{}
```
