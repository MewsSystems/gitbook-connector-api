<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Payment plans

## Create a payment plan

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Adds a payment plan with `Name` connected to a `Reservation` and returns the payment request URL associated with the created payment plan. The fulfillment of the payment request will initiate the payment plan.

### Request

`[PlatformAddress]/api/connector/v1/paymentPlans/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationId": "0f515589-99b4-423d-b83a-b237009f0509",
  "Name": "Payment Plan Name",
  "PaymentRequest": {
    "PaymentMethods": [
      "PaymentCard",
      "SepaDirectDebit"
    ],
    "Message": "Payment request message",
    "Note": "Internal Note",
    "PaymentRequestType": "Payment",
    "PaymentRequestExpirationOffsetDays": 30,
    "SendEmail": false
  },
  "StartMonth": "2023-10"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `ReservationId` | string | required | Reservation Id associated with the payment plan. |
| `Name` | string | required | Name of the payment plan. |
| `PaymentRequest` | [Payment plan payment request](paymentplans.md#payment-plan-payment-request) | required | Data related to the payment request associated with the payment plan created. |
| `StartMonth` | string | optional | Specifies the month when the payment plan begins collecting payments, in the 'YYYY-MM' format. The month must be in the future and fall within the reservation period. |

#### Payment plan payment request

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentMethods` | array of [Available payment plan payment methods](paymentplans.md#available-payment-plan-payment-methods) | required | Allowed payment methods to pay for the payment plan. |
| `Message` | string | required | Message in the payment request. |
| `Note` | string | optional | Internal note for the payment request. |
| `PaymentRequestType` | [Payment plan payment request type](paymentplans.md#payment-plan-payment-request-type) | optional | Type of payment request to create. If not specified, defaults to `Payment`. |
| `PaymentRequestExpirationOffsetDays` | integer | optional | Custom expiration date offset in days for the payment request. If not set, it'll expire in one week, unless the first scheduled payment should be executed before. In that case, The expiration date will be set one second before the scheduled payment execution (the last possible moment when we can get the payment method). |
| `SendEmail` | boolean | optional | Specifies whether a payment request email is sent to the customer. Defaults to true. |

#### Available payment plan payment methods

* `Ideal` - iDEAL
* `PaymentCard` - Payment card
* `ApplePay` - Apple Pay
* `GooglePay` - Google Pay
* `SepaDirectDebit` - SEPA Direct Debit
* `All`

#### Payment plan payment request type

* `Payment`
* `PaymentMethod`

### Response

```javascript
{
  "PaymentRequestUrl": "https://example.com/payment-request-url"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequestUrl` | string | required | Payment request URL associated with the created payment plan. |
