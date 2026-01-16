<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Payment requests

## Get all payment requests

Get all payment requests belonging to the specified customer accounts. 
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/paymentRequests/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "PaymentRequestIds": [
    "bcc76295-4e47-4cf1-a7cb-afae00bd1c35",
    "6282d17b-a068-4a9f-83d3-afae00c39bfb"
  ],
  "AccountIds": [
    "fadd5bb6-b428-45d5-94f8-fd0d89fece6d"
  ],
  "ReservationIds": [
    "0f515589-99b4-423d-b83a-b237009f0509"
  ],
  "UpdatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "States": [
    "Pending",
    "Expired"
  ],
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "Limitation": {
    "Count": 100
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `PaymentRequestIds` | array of string | optional, max 1000 items | Unique identifiers of the requested payment requests. |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of `Customer` accounts to which the payment requests were issued. |
| `ReservationIds` | array of string | optional, max 1000 items | Unique identifiers of `Reservation` to which the payment requests belong. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the payment requests were updated. |
| `States` | array of [Payment request state](paymentrequests.md#payment-request-state) | optional | A list of payment request states to filter by. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "PaymentRequests": [
    {
      "Id": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "CustomerId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "ReservationGroupId": null,
      "ReservationId": "0f515589-99b4-423d-b83a-b237009f0509",
      "State": "Pending",
      "Amount": {
        "Currency": "EUR",
        "NetValue": 10.04,
        "GrossValue": 10.4,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": 10.05,
              "TaxValue": 0
            }
          ]
        }
      },
      "Type": "Payment",
      "Reason": "PaymentCardDeclined",
      "ExpirationUtc": "2023-02-23T23:00:00Z",
      "Description": "Payment required.",
      "Notes": null,
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    }
  ],
  "Cursor": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment request](paymentrequests.md#payment-request) | required, max 1000 items | The filtered payment requests. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest payment request returned. This can be used in `Limitation` in a subsequent request to fetch the next batch of older payment requests. |

#### Payment request

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the payment request. |
| `EnterpriseId` | string | required | Unique identifier of the `Enterprise`. |
| `AccountId` | string | required | Unique identifier of the `Customer` to which the payment request was issued. |
| `ReservationGroupId` | string | optional | Unique identifier of the `ReservationGroup`. |
| `ReservationId` | string | optional | Unique identifier of the `Reservation` the payment request belongs to. |
| `State` | [Payment request state](paymentrequests.md#payment-request-state) | required | A payment request state. |
| `Amount` | [Amount](_objects.md#amount) | required | Amount of the payment request. |
| `Type` | [Payment request type](paymentrequests.md#payment-request-type) | required | A payment request type. |
| `Reason` | [Payment request reason](paymentrequests.md#payment-request-reason) | required | A payment request reason. |
| `ExpirationUtc` | string | required | Date and time of the payment request's expiration in ISO 8601 format. |
| `Description` | string | required, max length 1000 characters | Description of the payment request. |
| `Notes` | string | optional, max length 1000 characters | Payment request's notes. |
| `CreatedUtc` | string | required | Creation date and time of the payment request in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the payment request in UTC timezone in ISO 8601 format. |
| ~~`CustomerId`~~ | ~~string~~ | ~~optional~~ | ~~Unique identifier of the `Customer` to which the payment request was issued.~~ **Deprecated!** Use `AccountId`|

#### Payment request state

* `Pending` - Payment request is active and waiting for completion.
* `Completed` - Payment request was fulfilled.
* `Canceled` - Payment request was canceled.
* `Expired` - Payment request is past its expiration date and no longer active.

#### Payment request type

* `Payment` - Indicates that a payment is requested.
* `Preauthorization` - Indicates that a `Preauthorization` is requested.

#### Payment request reason

* `Other`
* `PaymentCardMissing`
* `PaymentCardDeclined`
* `Deposit`
* `Prepayment`
* `Fee`
* `RecurringPayment`

## Add payment requests

Creates a payment request to the specified [Customer](customers.md#customer). Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/paymentRequests/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "PaymentRequests": [
    {
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "Amount": {
        "Currency": "EUR",
        "Value": 10.4
      },
      "Type": "Payment",
      "Reason": "PaymentCardMissing",
      "ExpirationUtc": "2023-02-20T12:00:00Z",
      "Description": "Payment required",
      "Notes": "Internal notes.",
      "ReservationId": "0f515589-99b4-423d-b83a-b237009f0509"
    }
  ],
  "SendPaymentRequestEmails": true,
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `PaymentRequests` | array of [Payment request parameters](paymentrequests.md#payment-request-parameters) | required, max 1000 items | Payment requests to be added. |
| `SendPaymentRequestEmails` | boolean | optional | Specifies whether a payment request email is sent to the customer. Defaults to `true`. |

#### Payment request parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required | Unique identifier of the `Customer` account to which the payment request is issued. |
| `Amount` | [Currency value (ver 2023-02-02)](_objects.md#currency-value-ver-2023-02-02) | required | Amount of the payment request. |
| `Type` | [Payment request type](paymentrequests.md#payment-request-type) | required | A payment request type. |
| `Reason` | [Payment request reason](paymentrequests.md#payment-request-reason) | required | A payment request reason. |
| `ExpirationUtc` | string | required | Date and time of the payment request's expiration in ISO 8601 format. |
| `Description` | string | required, max length 1000 characters | Description of the payment request. |
| `Notes` | string | optional, max length 1000 characters | Payment request's notes. |
| `ReservationId` | string | optional | Unique identifier of the `Reservation` the payment request belongs to. |

### Response

```javascript
{
  "PaymentRequests": [
    {
      "Id": "6282d17b-a068-4a9f-83d3-afae00c39bfb",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "CustomerId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "ReservationGroupId": null,
      "ReservationId": "0f515589-99b4-423d-b83a-b237009f0509",
      "State": "Pending",
      "Amount": {
        "Currency": "EUR",
        "NetValue": 10.04,
        "GrossValue": 10.4,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": 10.05,
              "TaxValue": 0
            }
          ]
        }
      },
      "Type": "Payment",
      "Reason": "PaymentCardMissing",
      "ExpirationUtc": "2023-02-20T12:00:00Z",
      "Description": "Payment required",
      "Notes": "Internal notes.",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment request](paymentrequests.md#payment-request) | required, max 1000 items | The added payment requests. |

## Cancel payment requests

Cancels specified payment requests. Only payment requests which are in `Pending` state can be canceled.

### Request

`[PlatformAddress]/api/connector/v1/paymentRequests/cancel`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "PaymentRequestIds": [
    "6282d17b-a068-4a9f-83d3-afae00c39bfb"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `PaymentRequestIds` | array of string | required, max 1000 items | Identifiers of payment requests to be canceled. |

### Response

```javascript
{
  "PaymentRequests": [
    {
      "Id": "6282d17b-a068-4a9f-83d3-afae00c39bfb",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "CustomerId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "ReservationGroupId": null,
      "ReservationId": "0f515589-99b4-423d-b83a-b237009f0509",
      "State": "Canceled",
      "Amount": {
        "Currency": "EUR",
        "NetValue": 10.04,
        "GrossValue": 10.4,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": 10.05,
              "TaxValue": 0
            }
          ]
        }
      },
      "Type": "Payment",
      "Reason": "PaymentCardMissing",
      "ExpirationUtc": "2023-02-20T12:00:00Z",
      "Description": "Payment required",
      "Notes": "Internal notes.",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment request](paymentrequests.md#payment-request) | required, max 1000 items | The cancelled payment requests. |
