<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Payments

## Get all payments

Returns all payments in the system, filtered by various parameters. At least one filter parameter must be specified. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/payments/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "PaymentIds": [
    "f6313945-94c1-4e27-b402-031c2a8c989f",
    "be922eb7-bc5f-4877-b847-1120c0c2acd2"
  ],
  "BillIds": [
    "ea087d64-3901-4eee-b0b7-9fce4c58a005",
    "d23ac52f-9b86-4a03-a6fe-5822dfcfc5c4"
  ],
  "ReservationIds": [
    "0f515589-99b4-423d-b83a-b237009f0509",
    "b7a3f5cb-1e69-4a5f-a069-10f461996d7f"
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
  "SettlementUtc": {
    "StartUtc": "2023-03-01T00:00:00Z",
    "EndUtc": "2023-03-31T00:00:00Z"
  },
  "Currency": "EUR",
  "AccountingStates": [
    "Closed",
    "Open"
  ],
  "States": [
    "Charged",
    "Pending"
  ],
  "Type": "Payment",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
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
| `PaymentIds` | array of string | optional, max 1000 items | Unique identifiers of specific `Payment` items. Required if no other filter is provided. |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of specific `Bill` items to which payments are assigned. Required if no other filter is provided. |
| `ReservationIds` | array of string | optional, max 1000 items | Unique identifiers of specific `Reservations` to which payments belong. Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Time interval during which the `Payment` was created. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Time interval during which the `Payment` was updated. Required if no other filter is provided. |
| `ChargedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Time interval during which the `Payment` was charged. Required if no other filter is provided. |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Time interval during which the `Payment` was closed. Required if no other filter is provided. |
| `SettlementUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Payments` were settled. |
| `Currency` | string | optional | ISO-4217 code of the `Currency` the item costs should be converted to. |
| `AccountingStates` | array of [Order item accounting state](accountingitems.md#order-item-accounting-state) | optional | Accounting state of the item. |
| `States` | array of [Payment state](payments.md#payment-state) | optional | Payment state of the item. |
| `Type` | [Payment type](payments.md#payment-type) | optional | Payment state of the item. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

#### Payment state

* `Charged`
* `Canceled`
* `Pending`
* `Failed`
* `Verifying`

### Response

```javascript
{
  "Payments": [
    {
      "Id": "f6313945-94c1-4e27-b402-031c2a8c989f",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
      "AccountType": "Company",
      "BillId": "ea087d64-3901-4eee-b0b7-9fce4c58a005",
      "ReservationId": "0f515589-99b4-423d-b83a-b237009f0509",
      "AccountingCategoryId": null,
      "Amount": {
        "Currency": "EUR",
        "NetValue": -3700,
        "GrossValue": -3700,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": -3700,
              "TaxValue": 0
            }
          ]
        }
      },
      "OriginalAmount": {
        "Currency": "GBP",
        "NetValue": -3700,
        "GrossValue": -3700,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": -3700,
              "TaxValue": 0
            }
          ]
        }
      },
      "Notes": null,
      "SettlementId": null,
      "ConsumedUtc": "2023-03-02T12:12:35Z",
      "ClosedUtc": null,
      "ChargedUtc": "2023-03-06T07:31:52Z",
      "CreatedUtc": "2023-03-06T07:31:51Z",
      "UpdatedUtc": "2023-03-06T07:31:53Z",
      "SettlementUtc": null,
      "AccountingState": "Open",
      "State": "Charged",
      "Identifier": "ch_764309db-4bcd-4f2c-ad6a-1c178089deec",
      "Type": "CreditCardPayment",
      "Kind": "Payment",
      "Data": {
        "Discriminator": "CreditCard",
        "CreditCard": {
          "CreditCardId": "c922266b-291d-4e25-9df7-afbd007c1991",
          "Transaction": null
        },
        "Invoice": null,
        "External": null,
        "Ghost": null
      }
    },
    {
      "Id": "be922eb7-bc5f-4877-b847-1120c0c2acd2",
      "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "AccountType": "Customer",
      "BillId": "d23ac52f-9b86-4a03-a6fe-5822dfcfc5c4",
      "ReservationId": "b7a3f5cb-1e69-4a5f-a069-10f461996d7f",
      "AccountingCategoryId": null,
      "Amount": {
        "Currency": "EUR",
        "NetValue": -300,
        "GrossValue": -300,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": -300,
              "TaxValue": 0
            }
          ]
        }
      },
      "OriginalAmount": {
        "Currency": "EUR",
        "NetValue": -300,
        "GrossValue": -300,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": -300,
              "TaxValue": 0
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
      "SettlementUtc": null,
      "AccountingState": "Closed",
      "State": "Charged",
      "Identifier": "",
      "Type": "CashPayment",
      "Kind": "Payment",
      "Data": null
    }
  ],
  "Cursor": "be922eb7-bc5f-4877-b847-1120c0c2acd2"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Payments` | array of [Payment](payments.md#payment) | required, max 1000 items | The list of filtered payments. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest payment returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of payments. |

#### Payment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the payment. |
| `EnterpriseId` | string | required | Unique identifier of the `Enterprise`. |
| `AccountId` | string | required | Unique identifier of the account (for example `Customer`) the payment belongs to. |
| `AccountType` | [Account type](accounts.md#account-type) | required | A discriminator specifying the account type, e.g. `Customer` or `Company`. |
| `BillId` | string | optional | Unique identifier of the `Bill` the payment is assigned to. |
| `ReservationId` | string | optional | Unique identifier of the `Reservation` the payment belongs to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the `AccountingCategory` the payment belongs to. |
| `Amount` | [Amount](_objects.md#amount) | required | Payment's amount, negative amount represents either rebate or a payment. |
| `OriginalAmount` | [Amount](_objects.md#amount) | required | Payment's original amount, negative amount represents either rebate or a payment. Contains the earliest known value in conversion chain. |
| `Notes` | string | optional | Additional notes. |
| `SettlementId` | string | optional | Identifier of the settled payment from the external system (ApplePay/GooglePay). |
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the payment bill closure in UTC timezone in ISO 8601 format. |
| `ChargedUtc` | string | optional | Charged date and time of the payment in UTC timezone in ISO 8601 format. |
| `CreatedUtc` | string | required | Creation date and time of the payment created in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the payment in UTC timezone in ISO 8601 format. |
| `SettlementUtc` | string | required | Date and time of the payment settlement in UTC timezone in ISO 8601 format. |
| `AccountingState` | [Order item accounting state](orderitems.md#order-item-accounting-state) | required | Accounting state of the payment. |
| `State` | [Payment state](payments.md#payment-state) | required | Payment state of the payment. |
| `Identifier` | string | optional | Additional unique identifier of the payment. |
| `Type` | [Payment type](payments.md#payment-type) | required | Payment type, e.g. whether credit card or cash. |
| `Kind` | [Payment kind](payments.md#payment-kind) | optional | Payment kind, e.g. whether payment or refund. Value provided only for payments processed by Mews Payments. |
| `Data` | [Payment data](payments.md#payment-data) | optional | Additional payment data. |

#### Payment state

* `Charged`
* `Canceled`
* `Pending`
* `Failed`
* `Verifying`

#### Payment type

* `Payment`
* `CreditCardPayment`
* `AlternativePayment`
* `CashPayment`
* `InvoicePayment`
* `ExternalPayment`
* `GhostPayment`
* `TaxDeductedPayment`

#### Payment kind

* `Payment`
* `Chargeback`
* `ChargebackReversal`
* `Refund`

#### Payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Payment data discriminator](payments.md#payment-data-discriminator) | required | Discriminator pointing to the fields within this object that contains additional data. |
| `CreditCard` | [Credit card payment data](payments.md#credit-card-payment-data) | optional | Contains additional data in the case of a card payment. |
| `Invoice` | [Invoice payment data](payments.md#invoice-payment-data) | optional | Contains additional data in the case of an invoice payment. |
| `External` | [External payment data](payments.md#external-payment-data) | optional | Contains additional data in the case of an external payment. |
| `Ghost` | [Ghost payment data](payments.md#ghost-payment-data) | optional | Contains additional data in the case of a ghost payment. |

#### Payment data discriminator

* `CreditCard`
* `Invoice`
* `External`
* `Ghost`

#### Credit card payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CreditCardId` | string | optional | Unique identifier of the payment card. |
| `Transaction` | [Credit card transaction](payments.md#credit-card-transaction) | optional | The credit card payment transaction. |

#### Credit card transaction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentId` | string | required | Unique identifier of the `PaymentItem`. |
| `SettlementId` | string | optional | Identifier of the settlement. |
| `SettledUtc` | string | optional | Settlement date and time in UTC timezone in ISO 8601 format. |
| `Fee` | [Extended amount](_objects.md#amount) | optional | Transaction fee - this includes an estimate of bank charges. |
| `AdjustedFee` | [Extended amount](_objects.md#amount) | optional | Transaction fee (adjusted) - this is the final confirmed transaction fee, including confirmed bank charges. |
| `ChargedAmount` | [Extended amount](_objects.md#amount) | required | Charged amount of the transaction. |
| `SettledAmount` | [Extended amount](_objects.md#amount) | optional | Settled amount of the transaction. |

#### Invoice payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `InvoiceId` | string | optional | Unique identifier of the invoice `Bill`. |
| `Type` | [Invoice payment type](payments.md#invoice-payment-type) | required | Type of the invoice payment. |

#### Invoice payment type

* `Receivable`
* `Balancing`
* `UnderpaymentBalancingReceivable`
* `OverpaymentBalancingReceivable`
* `Overpayment`

#### External payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | [External payment type](payments.md#external-payment-type) | required | Type of the external payment. *Except for enterprises based in the French Legal Environment. `Unspecified` is considered as fraud. |
| `ExternalIdentifier` | string | optional | Identifier of the payment from external system. |

#### External payment type

* `Unspecified` - Unspecified (unavailable in French Legal Environment)
* `BadDebts` - Bad debts
* `Bacs` - Bacs payment
* `WireTransfer` - Wire transfer
* `Invoice` - Invoice
* `ExchangeRateDifference` - Exchange rate difference
* `Complimentary` - Complimentary
* `Reseller` - Reseller
* `ExchangeRoundingDifference` - Exchange rounding difference
* `Barter` - Barter
* `Commission` - Commission
* `BankCharges` - Bank charges
* `CrossSettlement` - Cross settlement
* `Cash` - Cash
* `CreditCard` - Credit card
* `Prepayment` - Prepayment
* `Cheque` - Cheque
* `Bancontact` - Bancontact
* `IDeal` - iDeal
* `PayPal` - PayPal
* `GiftCard` - Gift card
* `LoyaltyPoints` - Loyalty points
* `ChequeVacances` - Chèque-Vacances
* `OnlinePayment` - Online payment
* `CardCheck` - Card check
* `PaymentHubRedirection` - Payment hub redirection
* `Voucher` - Voucher
* `MasterCard` - MasterCard
* `Visa` - Visa
* `Amex` - American Express
* `Discover` - Discover
* `DinersClub` - Diners Club
* `Jcb` - JCB
* `UnionPay` - UnionPay
* `Twint` - TWINT
* `Reka` - Reka
* `LoyaltyCard` - Loyalty card
* `PosDiningAndSpaReward` - POS Dining & Spa Reward
* `DirectDebit` - Direct debit
* `DepositCheck` - Deposit - check
* `DepositCash` - Deposit - cash
* `DepositCreditCard` - Deposit - credit card
* `DepositWireTransfer` - Deposit - wire transfer

#### Ghost payment data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OriginalPaymentId` | string | required | Unique identifier of the original payment. |

## Add external payment

Adds a new external payment to a bill of the specified customer. An external payment represents a payment that is tracked outside of the system. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

**Prerequisites:** The external payment type must be enabled by the property in order to accept such payments in their Mews environment. Use [Get configuration](configuration.md#get-configuration) to check which external payment types are supported.

### Request

`[PlatformAddress]/api/connector/v1/payments/addExternal`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "AccountId": "35d4b117-4e60-44a3-9580-c582117eff98",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Amount": {
    "Currency": "GBP",
    "GrossValue": 100
  },
  "ExternalIdentifier": "b06de5e4-7137-47ec-8a49-3303131b02c0",
  "Type": "Cash",
  "AccountingCategoryId": null
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `AccountId` | string | required | Unique identifier of the [Customer](customers.md#customer) or [Company](companies.md#company). Company billing may not be enabled for your integration. |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](accountingcategories.md#accounting-category) to be assigned to the external payment. |
| `ReservationId` | string | optional | Unique identifier of the reservation the payment belongs to. |
| `Amount` | [Amount parameters](_objects.md#amount-parameters) | required | Amount of the external card payment. |
| `Type` | [External payment type](payments.md#external-payment-type) | optional | Type of the external payment. (Required for the enterprises based in the French Legal Environment where `Unspecified` is considered as fraud.) |
| `ExternalIdentifier` | string | optional | Identifier of the payment from external system. |
| `Notes` | string | optional | Additional payment notes. |
| ~~`CustomerId`~~ | ~~string~~ | ~~optional~~ | ~~Unique identifier of the [Customer](customers.md#customer). **Deprecated!**~~ **Deprecated!** Use `AccountId`.|

### Response

```javascript
{
  "ExternalPaymentId": "4ee05b77-ae21-46e8-8418-ac1c009dfb2b"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ExternalPaymentId` | string | required | Unique identifier of the [Payment item](accountingitems.md#payment-item). |

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
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](accountingcategories.md#accounting-category) to be assigned to the credit card payment. |
| `ReservationId` | string | optional | Unique identifier of the reservation the payment belongs to. |
| `Amount` | [Amount parameters](_objects.md#amount-parameters) | required | Amount of the credit card payment. |
| `Notes` | string | optional | Additional payment notes. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `CreditCard` | [Credit card parameters](payments.md#credit-card-parameters) | required |  |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |

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
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `Amount` | [Amount parameters](_objects.md#amount-parameters) | required | Price of the product that overrides the price defined in Mews. |
| `ReservationId` | string | optional | Unique identifier of the reservation the payment belongs to. |
| `Data` | [Alternative payment method data](payments.md#alternative-payment-method-data) | required | Data specific to particular alternative payment method. |
| ~~`Method`~~ | ~~[Alternative payment methods](payments.md#alternative-payment-methods)~~ | ~~required~~ | ~~Payment method to use for the alternative payment.~~ **Deprecated!** Use `Data` instead.|
| ~~`RedirectUrl`~~ | ~~string~~ | ~~optional~~ | ~~URL where the customer will be redirected after completing their payment.~~ **Deprecated!** Pass redirect URL to relevant method in `Data` instead.|

#### Alternative payment methods

* `Ideal`
* `ApplePay`
* `GooglePay`

#### Alternative payment method data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Alternative payment method data discriminator](payments.md#alternative-payment-method-data-discriminator) | required | Type of alternative payment method (e.g. `Ideal`). |
| `SepaDirectDebit` | [SEPA Direct Debit data](payments.md#sepa-direct-debit-data) | optional | SEPA Direct Debit payment method data. Required when `Discriminator` is `SepaDirectDebit`. |
| `Ideal` | [iDEAL data](payments.md#ideal-data) | optional | iDEAL payment method data. Required when `Discriminator` is `Ideal`. |

#### Alternative payment method data discriminator

* `Ideal` - iDEAL data.
* `ApplePay` - No additional data.
* `GooglePay` - No additional data.
* `SepaDirectDebit` - SEPA Direct Debit data.

#### SEPA Direct Debit data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Iban` | string | required | The customer's bank account number in IBAN format. |
| `Name` | string | required | Full name of the customer. |
| `Email` | string | required | Email address of the customer. |
| `UserAgent` | string | required | The user agent of the browser from which the Mandate was accepted by the customer. |
| `RemoteIpAddress` | string | required | The IP address from which the Mandate was accepted by the customer. |

#### iDEAL data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RedirectUrl` | string | required | URL where the customer will be redirected after completing their iDEAL payment. |

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
| `NextAction` | [Alternative payment next action](payments.md#alternative-payment-next-action) | optional | Next action to take in order to complete the payment. |

#### Alternative payment next action

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Payment next action discriminator](payments.md#payment-next-action-discriminator) | required | Determines type of value. |
| `Value` | string | required | String value depending on `Type`. |

#### Payment next action discriminator

* `RedirectToUrl` - Redirect customer to a URL where they can complete their payment.

## Refund payment

Refunds a specified payment. Note only credit card or alternative payments can be refunded. The refund is itself a payment, so to get more information about the refund, use [Get all payments](payments.md#get-all-payments) with the identifier from `RefundId`. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/payments/refund`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "PaymentId": "f6313945-94c1-4e27-b402-031c2a8c989f",
  "AccountId": "35d4b117-4e60-44a3-9580-c582117eff98",
  "Reason": "Sample reason",
  "ValueToRefund": 110.5
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `PaymentId` | string | required | Unique identifier of specific [Payment](payments.md#payment). |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](customers.md#customer)) the payment belongs to. |
| `Reason` | string | required | Refund reason. |
| `ValueToRefund` | number | optional | Refund amount. If not provided, the whole payment will be refunded. |

### Response

```javascript
{
  "PaymentId": "f6313945-94c1-4e27-b402-031c2a8c989f",
  "RefundId": "1d65c488-111a-4719-b3ea-e1a9969c6069",
  "Type": "CreditCardPayment",
  "Amount": {
    "Currency": "GBP",
    "Value": 100
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentId` | string | required | Unique identifier of specific [Payment](payments.md#payment). |
| `RefundId` | string | required | Unique identifier of refund. |
| `Type` | [Refund type](payments.md#refund-type) | required | Type of refund. |
| `Amount` | [Currency value (ver 2023-02-02)](_objects.md#currency-value-ver-2023-02-02) | required | Absolute value of the fee. |

#### Refund type

* `CreditCardPayment`
* `AlternativePayment`
