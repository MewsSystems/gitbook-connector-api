# Payment Requests

## Get all payment requests

Get all payment requests belonging to the specified customer accounts. 
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
    "States": [ "Pending", "Expired" ],
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `PaymentRequestIds` | string | optional, max 1000 items | Unique identifiers of the requested [Payment requests](#payment-request). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of [Customer](customers.md#customer) accounts to which payment requests were issued. |
| `States` | [Payment request state](#payment-request-state) | optional | A list of payment request states to filter by. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of payment requests returned (using cursor pagination). |

### Response

```javascript
{
    "PaymentRequests": [
        {
            "Id": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "AccountId": "8466dfdd-0964-4002-8719-afa900d0f1ba",
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
| `PaymentRequests` | array of [Payment requests](#payment-request) | required | The filtered payment requests. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest payment request returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older payment requests. |

#### Payment request

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the payment request. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `AccountId` | string | required | Unique identifier of the [Customer](customers.md#customer) to which the payment request was issued. |
| `ReservationGroupId` | string | optional | Unique identifier of the [Reservation group](reservations#reservation-group). |
| `State` | [Payment request state](#payment-request-state) | required | A payment request state. |
| `Amount` | [Amount value](accountingitems.md#amount-value) | required | Amount of the payment request. |
| `Type` | [Payment request type](#payment-request-type) | required | A payment request type. |
| `Reason` | [Payment request reason](#payment-request-reason) | required | A payment request reason. |
| `ExpirationUtc` | string | required | Date and time of the payment request's expiration in ISO 8601 format. |
| `Description` | string | required | Description of the payment request. |
| `Notes` | string | optional | Payment request's notes. |

#### Payment request state

* `Pending` - payment request is active and waiting for completion.
* `Completed` - payment request was fulfilled.
* `Canceled` - payment request was canceled.
* `Expired` - payment request is past its expiration date and no longer active.

#### Payment request type

* `Payment` - indicates that a payment is requested.
* `Preauthorization` - indicates that a [Preauthorization](preauthorizations.md#preauthorization) is requested.

#### Payment request reason

* `PaymentCardMissing`
* `PaymentCardDeclined`
* `Prepayment`
* `Fee`
* `Other`
* ...

## Add payment requests

Creates a payment request to the specified [Customer](customers.md#customer).

Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](enterprises.md#enterprise). Required when using a [Portfolio Access Token](../guidelines/multi-property.md), ignored otherwise. |
| `PaymentRequests` | array of [Payment request parameters](#payment-request-parameters) | required, max 1000 items | Payment requests to be added. |

#### Payment request parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required | Unique identifier of the [Customer](customers.md#customer) account to which the payment request is issued. |
| `Amount` | [Currency value](#currency-value) | required | Amount of the payment request. |
| `Type` | [Payment request type](#payment-request-type) | required | A payment request type. |
| `Reason` | [Payment request reason](#payment-request-reason) | required | A payment request reason. |
| `ExpirationUtc` | string | required | Date and time of the payment request's expiration in ISO 8601 format. |
| `Description` | string | required, max 1000 characters | Description of the payment request. |
| `Notes` | string | optional, max 1000 characters | Payment request's notes. |

#### Currency value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required | ISO-4217 code of the [Currency](currencies.md#currency). |
| `Value` | number | required | Amount in the currency. |

### Response

```javascript
{
    "PaymentRequests": [
        {
            "Id": "6282d17b-a068-4a9f-83d3-afae00c39bfb",
            "AccountId": "8466dfdd-0964-4002-8719-afa900d0f1ba",
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
            "Reason": "PaymentCardMissing",
            "ExpirationUtc": "2023-02-20T12:00:00Z",
            "Description": "Payment required",
            "Notes": "Internal notes."
        }
    ]
}
``` 

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment requests](#payment-request) | required | Added payment requests. |

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
            "AccountId": "8466dfdd-0964-4002-8719-afa900d0f1ba",
            "ReservationGroupId": null,
            "State": "Canceled",
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
            "Reason": "PaymentCardMissing",
            "ExpirationUtc": "2023-02-20T12:00:00Z",
            "Description": "Payment required",
            "Notes": "Internal notes."
        }
    ]
}
``` 

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment requests](#payment-request) | required | Canceled payment requests. |
