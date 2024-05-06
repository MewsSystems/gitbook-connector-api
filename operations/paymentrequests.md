# Payment requests

## Get all payment requests

Get all payment requests belonging to the specified customer accounts. 
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/paymentRequests/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "PaymentRequestIds": [
    "bcc76295-4e47-4cf1-a7cb-afae00bd1c35"
  ],
  "AccountIds": [
    "8466DFDD-0964-4002-8719-AFA900D0F1BA"
  ],
  "UpdatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "States": [
    "Pending",
    "Expired"
  ],
  "Limitation": {
    "Count": 10
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `PaymentRequestIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Payment requests](https://mews-systems.gitbook.io/connector-api/operations/#payment-request). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) accounts to which payment requests were issued. |
| `ReservationIds` | array of string | optional, max 1000 items |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `States` | array of [PaymentRequestState](#X-Ref-Name-PaymentRequestState) | optional | A list of payment request states to filter by. |

#### PaymentRequestState

- `Pending`
- `Completed`
- `Canceled`
- `Expired`

### Response

```javascript
{
  "PaymentRequests": [
    {
      "Id": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "8466dfdd-0964-4002-8719-afa900d0f1ba",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "ReservationGroupId": null,
      "State": "Pending",
      "Amount": {
        "Currency": "EUR",
        "NetValue": 10,
        "GrossValue": 10,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": 10,
              "TaxValue": 0
            }
          ]
        }
      },
      "Type": "Payment",
      "Reason": "PaymentCardDeclined",
      "ExpirationUtc": "2023-02-23T23:00:00Z",
      "Description": "Payment required.",
      "Notes": null
    }
  ],
  "Cursor": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment request](#PaymentRequest) | required | The filtered payment requests. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest payment request returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older payment requests. |

#### Payment request

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the payment request. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `AccountId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) to which the payment request was issued. |
| ~~`CustomerId`~~ | string | optional |  |
| `ReservationGroupId` | string | optional | Unique identifier of the [Reservation group](https://mews-systems.gitbook.io/connector-api/operations/reservations#reservation-group). |
| `ReservationId` | string | optional |  |
| `State` | [PaymentRequestState](#X-Ref-Name-PaymentRequestState) | required |  |
| `Amount` | object | required | Value of the preauthorization. |
| `Type` | [PaymentRequestType](#X-Ref-Name-PaymentRequestType) | required |  |
| `Reason` | [PaymentRequestReason](#X-Ref-Name-PaymentRequestReason) | required |  |
| `ExpirationUtc` | string | required | Date and time of the payment request&#x27;s expiration in ISO 8601 format. |
| `Description` | string | required | Description of the payment request. |
| `Notes` | string | optional | Payment request&#x27;s notes. |
| `CreatedUtc` | string | required | Creation date and time of the payment request in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the payment request in UTC timezone in ISO 8601 format. |

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

#### PaymentRequestType

- `Payment`
- `Preauthorization`

#### PaymentRequestReason

- `Other`
- `PaymentCardMissing`
- `PaymentCardDeclined`
- `Deposit`
- `Prepayment`
- `Fee`

## Add payment requests

Creates a payment request to the specified [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/paymentRequests/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "PaymentRequests": [
    {
      "AccountId": "8466dfdd-0964-4002-8719-afa900d0f1ba",
      "Amount": {
        "Currency": "EUR",
        "Value": 10
      },
      "Type": "Payment",
      "Reason": "PaymentCardMissing",
      "ExpirationUtc": "2023-02-20T12:00:00.000Z",
      "Description": "Payment required",
      "Notes": "Internal notes."
    }
  ]
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
| `PaymentRequests` | array of [PaymentRequestAddParameters](#PaymentRequestAddParameters) | required, max 1000 items | Payment requests to be added. |

#### PaymentRequestAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required |  |
| `Amount` | object | required | Absolute value of the fee. |
| `Type` | [PaymentRequestType](#X-Ref-Name-PaymentRequestType) | required |  |
| `Reason` | [PaymentRequestReason](#X-Ref-Name-PaymentRequestReason) | required |  |
| `ExpirationUtc` | string | required |  |
| `Description` | string | required |  |
| `Notes` | string | optional |  |
| `ReservationId` | string | optional |  |

#### CurrencyValue
Absolute value of the fee.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `Value` | number | required |  |

### Response

```javascript
{
  "PaymentRequests": [
    {
      "Id": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "8466dfdd-0964-4002-8719-afa900d0f1ba",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "ReservationGroupId": null,
      "State": "Pending",
      "Amount": {
        "Currency": "EUR",
        "NetValue": 10,
        "GrossValue": 10,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": 10,
              "TaxValue": 0
            }
          ]
        }
      },
      "Type": "Payment",
      "Reason": "PaymentCardDeclined",
      "ExpirationUtc": "2023-02-23T23:00:00Z",
      "Description": "Payment required.",
      "Notes": null
    }
  ],
  "Cursor": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment request](#PaymentRequest) | required | The filtered payment requests. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest payment request returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older payment requests. |

## Cancel payment requests

Cancels specified payment requests. Only payment requests which are in &#x60;Pending&#x60; state can be canceled.

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `PaymentRequestIds` | array of string | required, max 1000 items | Identifiers of payment requests to be canceled. |

### Response

```javascript
{
  "PaymentRequests": [
    {
      "Id": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "8466dfdd-0964-4002-8719-afa900d0f1ba",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "ReservationGroupId": null,
      "State": "Pending",
      "Amount": {
        "Currency": "EUR",
        "NetValue": 10,
        "GrossValue": 10,
        "TaxValues": [],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": null,
              "NetValue": 10,
              "TaxValue": 0
            }
          ]
        }
      },
      "Type": "Payment",
      "Reason": "PaymentCardDeclined",
      "ExpirationUtc": "2023-02-23T23:00:00Z",
      "Description": "Payment required.",
      "Notes": null
    }
  ],
  "Cursor": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment request](#PaymentRequest) | required | The filtered payment requests. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest payment request returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older payment requests. |
