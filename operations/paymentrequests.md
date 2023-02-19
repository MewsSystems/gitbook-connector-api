# Payment Requests

## Get all payment requests

Get all payment requests belonging to the specified [Customers](customers.md#customer). Note that this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/paymentRequests/getAll`

```javascript
{
    "Client": "Sample Client 1.0.0",
    "AccessToken": "DEF9B0AA35F74220ADC3AFA900D0EB24-251F227C3344EEEF232B01038D6B780",
    "ClientToken": "3640AA564052470681BFAFA900D0EA09-C6BE8CB1B41BE4A8F90E7BA1ADBEB54",
    "AccountIds": [
        "8466DFDD-0964-4002-8719-AFA900D0F1BA"
    ],
    "States": ["Pending", "Expired"],
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
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of [Customers](customers.md#customer) to which payment requests were issued. |
| `States` | [PaymentRequestState](#payment-request-state) | required | A list of payment request states to filter by. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of payment requests returned (using cursor pagination). |

### Response

```javascript
{
    "PaymentRequests": [
        {
            "Id": "bcc76295-4e47-4cf1-a7cb-afae00bd1c35",
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
| `AccountId` | string | required | Unique identifier of the [Customer](customers.md#customer) to which the payment request was issued. |
| `ReservationGroupId` | string | optional | Unique identifier of the [Reservation group](reservations#reservation-group). |
| `State` | [PaymentRequestState](#payment-request-state) | required | A payment request state. |
| `Amount` | int | required | Amount of the payment request. |
| `Type` | [PaymentRequestType](#payment-request-type) | required | A payment request type. |
| `Reason` | [PaymentRequestReason](#payment-request-reason) | required | A payment request reason. |
| `ExpirationUtc` | string | required | Date and time of the payment request's expiration in ISO 8601 format. |
| `Description` | string | required | Description of the payment request. |
| `Notes` | string | optional | Payment request's notes. |

#### Payment request state

* `Pending` - payment request is active and waiting for completion.
* `Completed` - payment request was fulfilled.
* `Canceled` - payment request was canceled.
* `Expired` - payment request is past its expiration date and no longer active.

#### Payment request type

* `Payment` - indicates that a [Payment](payments.md) is requested.
* `Preauthorization` - indicates that a [Preauthorization](preauthorizations.md) is requested.

#### Payment request reason

* `PaymentCardMissing` - payment card is missing.
* `PaymentCardDeclined` - payment card was declined.
* `Prepayment` - prepayment is requested.
* `Fee` - fee is requested.
* `Other` - other payment request reason.

## Add payment requests

Creates a payment request to the specified [Customer](customers.md#customer).

### Request

`[PlatformAddress]/api/connector/v1/paymentRequests/add`

```javascript
{
    "Client": "Sample Client 1.0.0",
    "AccessToken": "DEF9B0AA35F74220ADC3AFA900D0EB24-251F227C3344EEEF232B01038D6B780",
    "ClientToken": "3640AA564052470681BFAFA900D0EA09-C6BE8CB1B41BE4A8F90E7BA1ADBEB54",
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
| `PaymentRequests` | array of [Payment request parameters](#payment-request-parameters) | required | Payment requests to be added. |

#### Payment request parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required | Unique identifier of the [Customer](customers.md#customer) to which the payment request is issued. |
| `Amount` | int | required | Amount of the payment request. |
| `Type` | [PaymentRequestType](#payment-request-type) | required | A payment request type. |
| `Reason` | [PaymentRequestReason](#payment-request-reason) | required | A payment request reason. |
| `ExpirationUtc` | string | required | Date and time of the payment request's expiration in ISO 8601 format. |
| `Description` | string | required | Description of the payment request. |
| `Notes` | string | optional | Payment request's notes. |

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
    ],
    "Cursor": null
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
    "Client": "Sample Client 1.0.0",
    "AccessToken": "DEF9B0AA35F74220ADC3AFA900D0EB24-251F227C3344EEEF232B01038D6B780",
    "ClientToken": "3640AA564052470681BFAFA900D0EA09-C6BE8CB1B41BE4A8F90E7BA1ADBEB54",
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
| `PaymentRequestIds` | array of string | required | Identifiers of payment requests to be canceled. |

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
    ],
    "Cursor": null
}
``` 

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentRequests` | array of [Payment requests](#payment-request) | required | Added payment requests. |
