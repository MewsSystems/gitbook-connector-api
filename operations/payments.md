# Payments

## Add credit card payment

Adds a new credit card payment to a bill of the specified customer. Note that the payment is added to open bill of the customer, either to the specified one or the default one. This operation only serves to record a credit card payment that has already been taken outside of Mews or Mews' payment terminal, and does not actually charge the customer's credit card. 

The bill can then be closed manually by a Mews user, or automatically via API with the [Close bill](bills.md#close-bill) operation. 

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
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Amount value](accountingitems.md#amount-value) | required | Amount of the credit card payment. |
| `CreditCard` | [Credit card parameters](#credit-card-parameters) | required | Credit card details. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](accountingcategories.md#accounting-category) to be assigned to the credit card payment. |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |
| `Notes` | string | optional | Additional payment notes. |

#### Credit card parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
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
| :-- | :-- | :-- | :-- |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](creditcards.md#credit-card). |

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
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Amount value](accountingitems.md#amount-value) | required | Amount of the external card payment. |
| `ExternalIdentifier` | string | optional | Identifier of the payment from external system. |
| `Type` | string [Add external payment type](#add-external-payment-type) | optional | Type of the external payment. *Except for the enterprises based in the French Legal Environment. Unspecified is considered as fraud. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](accountingcategories.md#accounting-category) to be assigned to the external payment. |
| `Notes` | string | optional | Additional payment notes. |

#### Add external payment type

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
| :-- | :-- | :-- | :-- |
| `ExternalPaymentId` | string | required | Unique identifier of the [Payment item](accountingitems.md#payment-item). |

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
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `Method` | string [Alternative payment method](#alternative-payment-methods) | required | Payment method to use for the alternative payment. |
| `RedirectUrl` | string | required | URL where the customer will be redirected after completing their payment. |
| `Amount` | [Amount value](accountingitems.md#amount-value) | required | Amount of the alternative payment. |

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
| :-- | :-- | :-- | :-- |
| `PaymentId` | string | required | Unique identifier of the created payment. |
| `NextAction` | object [Alternative payment next action](#alternative-payment-next-action) | required | Next action to take in order to complete the payment. |

#### Alternative payment next action

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Payment next action discriminator](#payment-next-action-discriminator) | required | Determines type of value. |
| `Value` | string | required | String value depending on [Payment next action discriminator](#payment-next-action-discriminator). |

#### Payment next action discriminator

* `RedirectToUrl` - Redirect customer to a URL where they can complete their payment.

## Get all payments

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns all payments in the system, filtered by various parameters. At least one filter parameter must be specified. Note this operation uses [Pagination](../guidelines/pagination.md).


### Request

`[PlatformAddress]/api/connector/v1/payments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": 
    [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "PaymentIds": 
    [
        "f6313945-94c1-4e27-b402-031c2a8c989f",
        "be922eb7-bc5f-4877-b847-1120c0c2acd2"
    ],
    "BillIds": 
    [
        "f5fb70b1-9e88-4b6b-9618-e50116aea96e",
        "d23ac52f-9b86-4a03-a6fe-5822dfcfc5c4"
    ],
    "CreatedUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },
    "UpdatedUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },
    "ChargedUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },
    "ClosedUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },    
    "AccountingStates": [
        "Closed",
        "Open"
    ],
    "States":[
        "Charged",
        "Pending"
    ],
    "Type": "Payment",
    "Currency": "EUR",
    "Limitation": {
        "Count": 10, 
        "Cursor": null
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns the payments for all enterprises within scope of the Access Token. |
| `PaymentIds` | array of string | optional, max 1000 items | Unique identifiers of specific [Payments](payments.md#payment). Required if no other filter is provided. |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of specific [Bills](bills.md#bill) to which payments are assigned. Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Time interval during which the [Payment](#payment) was created. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Time interval during which the [Payment](#payment) was updated. Required if no other filter is provided. |
| `ChargedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Time interval during which the [Payment](#payment) was charged. Required if no other filter is provided. |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Time interval during which the [Payment](#payment) was closed. Required if no other filter is provided. |
| `AccountingStates` | array of string [Accounting state](#accounting-item-state) | optional | Accounting state of the item. |
| `States` | array of string [Payment state](#payment-state) | optional | Payment state of the item. | |
| `Currency` | string | optional | ISO-4217 code of the [Currency](currencies.md#currency) the item costs should be converted to. |
| `Type` | string [Payment type](#payment-type) | optional | Payment state of the item. | |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "Payments": [
        {
            "Id": "f6313945-94c1-4e27-b402-031c2a8c989f",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "AccountId": "c173bb22-6ff8-4ffd-875f-afb900c92865",
            "BillId": "f5fb70b1-9e88-4b6b-9618-e50116aea96e",
            "AccountingCategoryId": null,
            "Amount": {
                "Currency": "EUR",
                "NetValue": -3700.00,
                "GrossValue": -3700.00,
                "TaxValues": [],
                "Breakdown": {
                    "Items": [
                        {
                            "TaxRateCode": null,
                            "NetValue": -3700.00,
                            "TaxValue": 0.0
                        }
                    ]
                }
            },
            "OriginalAmount": {
                "Currency": "GBP",
                "NetValue": -3700.0,
                "GrossValue": -3700.0,
                "TaxValues": [],
                "Breakdown": {
                    "Items": [
                        {
                            "TaxRateCode": null,
                            "NetValue": -3700.0,
                            "TaxValue": 0.0
                        }
                    ]
                }
            },
            "Notes": null,
            "SettlementId": null,
            "ClosedUtc": null,
            "ConsumedUtc": "2023-03-02T12:12:35Z",
            "ChargedUtc": "2023-03-06T07:31:52Z",
            "CreatedUtc": "2023-03-06T07:31:51Z",
            "UpdatedUtc": "2023-03-06T07:31:53Z",
            "AccountingState": "Open",
            "State": "Charged",
            "Identifier": "ch_764309db-4bcd-4f2c-ad6a-1c178089deec",
            "PaymentType": "CreditCardPayment",
            "Data": {
                "Discriminator": "CreditCard",
                "CreditCard": {
                    "CreditCardId": "c922266b-291d-4e25-9df7-afbd007c1991",
                    "Transaction": null
                },
                "Invoice": null,
                "External": null
            }
        },
        {
            "Id": "be922eb7-bc5f-4877-b847-1120c0c2acd2",
            "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
            "AccountId": "4ce18db7-3444-460a-b8af-afb900c92864",
            "BillId": "d23ac52f-9b86-4a03-a6fe-5822dfcfc5c4",
            "AccountingCategoryId": null,
            "Amount": {
                "Currency": "EUR",
                "NetValue": -300.00,
                "GrossValue": -300.00,
                "TaxValues": [],
                "Breakdown": {
                    "Items": [
                        {
                            "TaxRateCode": null,
                            "NetValue": -300.00,
                            "TaxValue": 0.0
                        }
                    ]
                }
            },
            "OriginalAmount": {
                "Currency": "EUR",
                "NetValue": -300.00,
                "GrossValue": -300.00,
                "TaxValues": [],
                "Breakdown": {
                    "Items": [
                        {
                            "TaxRateCode": null,
                            "NetValue": -300.00,
                            "TaxValue": 0.0
                        }
                    ]
                }
            },
            "Notes": null,
            "SettlementId": null,
            "ConsumedUtc": "2023-03-02T12:12:35Z",
            "ClosedUtc": "2023-03-02T12:12:35Z",
            "ChargedUtc": "2023-03-02T12:12:32Z",
            "CreatedUtc": "2023-03-02T12:12:32Z",
            "UpdatedUtc": "2023-03-02T12:12:37Z",
            "AccountingState": "Closed",
            "State": "Charged",
            "Identifier": "",
            "Type": "CashPayment",
            "Data": null
        }
    ],
    "Cursor": "be922eb7-bc5f-4877-b847-1120c0c2acd2"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Payments` | array of [Payment](#payment) | required | The list of filtered payments. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest payment returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of payments. |

#### Payment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the payment. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](customers.md#customer)) the payment belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](bills.md#bill) the payment is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](accountingcategories.md#accounting-category) the payment belongs to. |
| `Amount` | [Amount value](#amount-value) | required | Payment's amount, negative amount represents either rebate or a payment. |
| `OriginalAmount` | [Amount value](#amount-value) | required | Payment's original amount, negative amount represents either rebate or a payment. Contains the earliest known value in conversion chain. |
| `Notes` | string | optional | Additional notes. |
| `SettlementId` | string | optional | Identifier of the settled payment from the external system (ApplePay/GooglePay). | 
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the payment bill closure in UTC timezone in ISO 8601 format. |
| `ChargedUtc` | string | optional | Charged date and time of the payment in UTC timezone in ISO 8601 format. |
| `CreatedUtc` | string | required | Creation date and time of the payment created in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the payment in UTC timezone in ISO 8601 format. |
| `AccountingState` | string [Accounting item state](#accounting-item-state) | required | Accounting state of the payment. |
| `State` | string [Payment state](#payment-state) | required | Payment state of the payment. |
| `Identifier` | string | optional | Additional unique identifier of the payment. |
| `Type` | string [Payment type](#payment-type) | required | Payment type, e.g. whether credit card or cash. |
| `Data` | object [Payment data](#payment-data) | optional | Additional payment data. |

#### Payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Payment data discriminator](#payment-data-discriminator) | required | Discriminator pointing to the fields within this object that contains additional data. |
| `CreditCard` | object [Credit card data](#card-data)| optional | Contains additional data in the case of a card payment. |
| `Invoice` | object [Invoice data](#invoice-data) | optional | Contains additional data in the case of an invoice payment. |
| `External` | object [External data](#external-data) | optional | Contains additional data in the case of an external payment. |

#### Payment data discriminator

* `CreditCard`
* `Invoice`
* `External`
* ...

#### CreditCard payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CreditCardId` | string | optional | Unique identifier of the payment card. |
| `Transaction` | object [Credit card transaction](#credit-card-transaction) | optional | The credit card payment transaction. |

#### Invoice payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `InvoiceId` | string | optional | Unique identifier of the invoice [Bill](bills.md#bill). |

#### External payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string [External payment type](#external-payment-type) | required | Type of the external payment. *Except for enterprises based in the French Legal Environment. `Unspecified` is considered as fraud. |
| `ExternalIdentifier` | string | optional | Identifier of the payment from external system. |

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

#### Accounting item state

* `Open` - Accounting items which carry a non-zero value, are open, and have not been closed on a bill or invoice.
* `Closed` - Accounting items which carry a non-zero value and have been closed on a bill or invoice.
* `Inactive` - Accounting items which are either of zero value and have not been canceled, if the state of the payment item is Pending or Failed, or items of optional reservations. Until the reservation is confirmed, all its accounting items are Inactive.
* `Canceled` - Accounting items which have been canceled, regardless of whether the item is of zero value.
* ...

#### Payment state

* `Charged`
* `Canceled`
* `Pending`
* `Failed`
* `Verifying`

#### Payment type

* `Payment` - Any type of payment, used only for filtering
* `CreditCardPayment`
* `AlternativePayment`
* `CashPayment`
* `InvoicePayment`
* `ExternalPayment`
* ...

#### External payment type

* `Unspecified`
* `BadDebts`
* `Bacs`
* `WireTransfer`
* `Invoice`
* `ExchangeRateDifference`
* `Complimentary`
* `Reseller`
* `ExchangeRoundingDifference`
* `Barter`
* `Commission`
* `BankCharges`
* `CrossSettlement`
* `Cash`
* `CreditCard`
* `Prepayment`
* `Cheque`
* `Bancontact`
* `IDeal`
* `PayPal`
* `GiftCard`
* `LoyaltyPoints`
* `ChequeVacances`
* `OnlinePayment`
* `CardCheck`
* `PaymentHubRedirection`
* `Voucher`
* `MasterCard`
* `Visa`
* `Amex`
* `Discover`
* `DinersClub`
* `Jcb`
* `UnionPay`
* `Twint`
* `Reka`
* `LoyaltyCard`
* `PosDiningAndSpaReward`
* `DirectDebit`
* `DepositCheck`
* `DepositCash`
* `DepositCreditCard`
* `DepositWireTransfer`
* ...
