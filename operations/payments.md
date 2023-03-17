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
| `Type` | string [External payment type](#external-payment-type) | optional | Type of the external payment. *Except for the enterprises based in the French Legal Environment. Unspecified is considered as fraud. |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](accountingcategories.md#accounting-category) to be assigned to the external payment. |
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

Returns all payments. Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/payments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
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
        "Closed"
    ],
    "States":[
        "Open"
    ],
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
| `PaymentIds` | array of string | required, max 1000 items | Unique identifier of the [Payment](payments.md#payment). |
| `BillIds` | array of string | required, max 1000 items | Unique identifier of the [Bill](bills.md#bill) to which payment is assigned to. |
| `CreatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Payment](#payment) was created. |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Payment](#payment) was updated. |
| `ChargedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Payment](#payment) was charged. |
| `ClosedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Payment](#payment) was closed. |
| `AccountingState` | string [Accounting state](#accounting-item-state) | required | Accounting state of the item. |
| `States` | array of string [Accounting item state](#accounting-item-state) | optional | States the accounting items should be in. If not specified, accounting items in `Open` or `Closed` states are returned. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](currencies.md#currency) the item costs should be converted to. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "Payments": [
    ],
    "Cursor": "d98c9611-0006-4691-a835-af2e00b170c4"
}
```

#### Payment