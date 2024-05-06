# Payments

## Get all payments

Returns all payments in the system, filtered by various parameters. At least one filter parameter must be specified. Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/payments/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "PaymentIds": [
    "f6313945-94c1-4e27-b402-031c2a8c989f",
    "be922eb7-bc5f-4877-b847-1120c0c2acd2"
  ],
  "BillIds": [
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
  "SettlementUtc": {
    "StartUtc": "2023-03-01T00:00:00Z",
    "EndUtc": "2023-03-31T00:00:00Z"
  },
  "AccountingStates": [
    "Closed",
    "Open"
  ],
  "States": [
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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns the payments for all enterprises within scope of the Access Token. |
| `PaymentIds` | array of string | optional, max 1000 items | Unique identifiers of specific [Payments](https://mews-systems.gitbook.io/connector-api/operations/payments/#payment). Required if no other filter is provided. |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of specific [Bills](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) to which payments are assigned. Required if no other filter is provided. |
| `ReservationIds` | array of string | optional, max 1000 items |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ChargedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `SettlementUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `Currency` | string | optional | ISO-4217 code of the [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency) the item costs should be converted to. |
| `AccountingStates` | array of [AccountingState](#X-Ref-Name-AccountingState) | optional, max 1000 items | Accounting state of the item. |
| `States` | array of [PaymentState](#X-Ref-Name-PaymentState) | optional, max 1000 items |  |
| `Type` | [PaymentDiscriminator](#X-Ref-Name-PaymentDiscriminator) | required |  |

#### AccountingState

- `Open`
- `Closed`
- `Inactive`
- `Canceled`

#### AccountingState

- `Open`
- `Closed`
- `Inactive`
- `Canceled`

#### PaymentState

- `Charged`
- `Canceled`
- `Pending`
- `Failed`
- `Verifying`

#### PaymentDiscriminator

- `Payment`
- `CreditCardPayment`
- `AlternativePayment`
- `CashPayment`
- `InvoicePayment`
- `ExternalPayment`
- `TaxDeductedPayment`

### Response

```javascript
{
  "Payments": [
    {
      "Id": "f6313945-94c1-4e27-b402-031c2a8c989f",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "c173bb22-6ff8-4ffd-875f-afb900c92865",
      "AccountType": "Company",
      "BillId": "f5fb70b1-9e88-4b6b-9618-e50116aea96e",
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
      "ClosedUtc": null,
      "ConsumedUtc": "2023-03-02T12:12:35Z",
      "ChargedUtc": "2023-03-06T07:31:52Z",
      "CreatedUtc": "2023-03-06T07:31:51Z",
      "UpdatedUtc": "2023-03-06T07:31:53Z",
      "AccountingState": "Open",
      "State": "Charged",
      "Identifier": "ch_764309db-4bcd-4f2c-ad6a-1c178089deec",
      "PaymentType": "CreditCardPayment",
      "Kind": "Payment",
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
      "AccountType": "Customer",
      "BillId": "d23ac52f-9b86-4a03-a6fe-5822dfcfc5c4",
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
| `Payments` | array of [Payment](#Payment) | required, max 1000 items | The list of filtered payments. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest payment returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of payments. |

#### Payment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `EnterpriseId` | string | required |  |
| `AccountId` | string | optional |  |
| `AccountType` | [AccountType](#X-Ref-Name-AccountType) | required |  |
| `BillId` | string | optional |  |
| `ReservationId` | string | optional |  |
| `AccountingCategoryId` | string | optional |  |
| `Amount` | object | required | Value of the preauthorization. |
| `OriginalAmount` | object | required | Value of the preauthorization. |
| `Notes` | string | optional |  |
| `SettlementId` | string | optional |  |
| `ConsumedUtc` | string | optional |  |
| `ClosedUtc` | string | optional |  |
| `ChargedUtc` | string | optional |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |
| `SettlementUtc` | string | optional |  |
| `AccountingState` | [AccountingState](#X-Ref-Name-AccountingState) | required |  |
| `State` | [PaymentState](#X-Ref-Name-PaymentState) | required |  |
| `Identifier` | string | optional |  |
| `Kind` | [PaymentKind](#X-Ref-Name-PaymentKind) | required |  |
| `Type` | [PaymentDiscriminator](#X-Ref-Name-PaymentDiscriminator) | required |  |
| `Data` | object | required |  |

#### AccountType

- `Company`
- `Customer`

#### AccountType

- `Company`
- `Customer`

#### Amount
Value of the preauthorization.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |

#### TaxValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Value` | number | required |  |

#### TaxBreakdown

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Items` | array of [TaxBreakdownItem](#TaxBreakdownItem) | optional |  |

#### TaxBreakdownItem

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxRateCode` | string | optional |  |
| `NetValue` | number | required |  |
| `TaxValue` | number | required |  |

#### PaymentKind

- `Payment`
- `Chargeback`
- `ChargebackReversal`
- `Refund`

#### PaymentData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [PaymentDataDiscriminator](#X-Ref-Name-PaymentDataDiscriminator) | required |  |
| `CreditCard` | object | required |  |
| `Invoice` | object | required |  |
| `External` | object | required |  |

#### PaymentDataDiscriminator

- `CreditCard`
- `Invoice`
- `External`

#### PaymentCreditCardData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CreditCardId` | string | optional |  |
| `Transaction` | object | required |  |

#### Credit card transaction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentId` | string | required | Unique identifier of the [Payment item](https://mews-systems.gitbook.io/connector-api/operations/#payment-item). |
| `SettlementId` | string | optional | Identifier of the settlement. |
| `SettledUtc` | string | optional | Settlement date and time in UTC timezone in ISO 8601 format. |
| `Fee` | object | required | Price representing price of the product. |
| `AdjustedFee` | object | required | Price representing price of the product. |
| `ChargedAmount` | object | required | Price representing price of the product. |
| `SettledAmount` | object | required | Price representing price of the product. |

#### ExtendedAmount
Price representing price of the product.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |

#### PaymentInvoiceData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `InvoiceId` | string | optional |  |

#### PaymentExternalData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | [ExternalPaymentType](#X-Ref-Name-ExternalPaymentType) | required |  |
| `ExternalIdentifier` | string | optional |  |

#### ExternalPaymentType

- `Unspecified`
- `BadDebts`
- `Bacs`
- `WireTransfer`
- `Invoice`
- `ExchangeRateDifference`
- `Complimentary`
- `Reseller`
- `ExchangeRoundingDifference`
- `Barter`
- `Commission`
- `BankCharges`
- `CrossSettlement`
- `Cash`
- `CreditCard`
- `Prepayment`
- `Cheque`
- `Bancontact`
- `IDeal`
- `PayPal`
- `GiftCard`
- `LoyaltyPoints`
- `ChequeVacances`
- `OnlinePayment`
- `CardCheck`
- `PaymentHubRedirection`
- `Voucher`
- `MasterCard`
- `Visa`
- `Amex`
- `Discover`
- `DinersClub`
- `Jcb`
- `UnionPay`
- `Twint`
- `Reka`
- `LoyaltyCard`
- `PosDiningAndSpaReward`
- `DirectDebit`
- `DepositCheck`
- `DepositCash`
- `DepositCreditCard`
- `DepositWireTransfer`

## Refund payment

Refunds a specified payment. Note only credit card or alternative payments can be refunded. The refund is itself a payment, so to get more information about the refund, use [Get all payments](https://mews-systems.gitbook.io/connector-api/operations/#get-all-payments) with the identifier from &#x60;RefundId&#x60;. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `PaymentId` | string | required | Unique identifier of specific [Payment](https://mews-systems.gitbook.io/connector-api/operations/payments/#payment). |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer)) the payment belongs to. |
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
| `PaymentId` | string | required | Unique identifier of specific [Payment](https://mews-systems.gitbook.io/connector-api/operations/payments/#payment). |
| `RefundId` | string | required | Unique identifier of refund. |
| `Type` | [RefundType](#X-Ref-Name-RefundType) | required |  |
| `Amount` | object | required | Absolute value of the fee. |

#### RefundType

- `CreditCardPayment`
- `AlternativePayment`

#### CurrencyValue
Absolute value of the fee.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `Value` | number | required |  |

## Add credit card payment

Adds a new credit card payment to a bill of the specified customer. Note that the payment is added to open bill of the customer, either to the specified one or the default one. This operation only serves to record a credit card payment that has already been taken outside of Mews or Mews&#x27; payment terminal, and does not actually charge the customer&#x27;s credit card. 
The bill can then be closed manually by a Mews user, or automatically via API with the [Close bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#close-bill) operation.

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category) to be assigned to the credit card payment. |
| `ReservationId` | string | optional |  |
| `Amount` | object | required | Amount of the external card payment. |
| `Category` | object | required |  |
| `Notes` | string | optional | Additional payment notes. |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `CreditCard` | object | required | Credit card details. |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |

#### ExtendedAmountParameters
Amount of the external card payment.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `NetValue` | number | optional |  |
| `GrossValue` | number | optional |  |
| `TaxCodes` | array of string | optional |  |
| ~~`Value`~~ | number | optional |  |
| ~~`Net`~~ | number | optional |  |
| ~~`Tax`~~ | number | optional |  |
| ~~`TaxRate`~~ | number | optional |  |

#### AccountingCategoryParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Name` | string | optional |  |

#### CreditCardParameters
Credit card details.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string | required |  |
| `ObfuscatedNumber` | string | optional |  |
| `Number` | string | required |  |
| `Expiration` | string | optional |  |
| `Name` | string | required |  |

### Response

```javascript
{
  "CreditCardId": "ee2209ce-71c6-4e3a-978f-aac700c82c7b"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](https://mews-systems.gitbook.io/connector-api/operations/creditcards/#credit-card). |

## Add external payment

Adds a new external payment to a bill of the specified customer. An external payment represents a payment that is tracked outside of the system. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `AccountId` | string | optional | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company). Company billing may not be enabled for your integration. |
| ~~`CustomerId`~~ | string | optional | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). **Deprecated!** |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category) to be assigned to the external payment. |
| `ReservationId` | string | optional |  |
| `Amount` | object | required | Amount of the external card payment. |
| `Category` | object | required |  |
| `Type` | [ExternalPaymentTypeOld](#X-Ref-Name-ExternalPaymentTypeOld) | required | Type of the external payment. *Except for the enterprises based in the French Legal Environment. Unspecified is considered as fraud. |
| `ExternalIdentifier` | string | optional | Identifier of the payment from external system. |
| `Notes` | string | optional | Additional payment notes. |

#### ExternalPaymentTypeOld

- `Bacs`
- `WireTransfer`
- `Invoice`
- `Reseller`
- `CrossSettlement`
- `Cash`
- `CreditCard`
- `PayPal`
- `Twint`
- `DepositWireTransfer`

### Response

```javascript
{
  "ExternalPaymentId": "4ee05b77-ae21-46e8-8418-ac1c009dfb2b"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ExternalPaymentId` | string | required | Unique identifier of the [Payment item](https://mews-systems.gitbook.io/connector-api/operations/accountingitems/#payment-item). |

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `Amount` | object | required | Price of the product that overrides the price defined in Mews. |
| ~~`Method`~~ | [AlternativePaymentMethods](#X-Ref-Name-AlternativePaymentMethods) | required | Payment method to use for the alternative payment. |
| ~~`RedirectUrl`~~ | string | optional | URL where the customer will be redirected after completing their payment. |
| `ReservationId` | string | optional |  |
| `Data` | object | required |  |

#### AmountParameters
Price of the product that overrides the price defined in Mews.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `TaxCodes` | array of string | required |  |
| `NetValue` | number | optional |  |
| `GrossValue` | number | optional |  |

#### AlternativePaymentMethods

- `Ideal`
- `ApplePay`
- `GooglePay`
- `SepaDirectDebit`

#### AlternativePaymentsData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string | optional |  |
| `SepaDirectDebit` | object | required |  |
| `Ideal` | object | required |  |

#### SepaDirectDebitData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Iban` | string | optional |  |
| `Name` | string | optional |  |
| `Email` | string | optional |  |
| `UserAgent` | string | optional |  |
| `RemoteIpAddress` | string | optional |  |

#### IdealData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RedirectUrl` | string | optional |  |

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
| `NextAction` | object | required | Next action to take in order to complete the payment. |

#### NextAction
Next action to take in order to complete the payment.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [NextActionType](#X-Ref-Name-NextActionType) | required |  |
| `value` | object | required |  |

#### NextActionType

- `RedirectToUrl`
