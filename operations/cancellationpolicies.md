# Cancellation policies

## Get all cancellation policies

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.</strong>

Returns all cancellation policies filtered by services, rate groups and other filters. Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/cancellationPolicies/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "e654f217-d1b5-46be-a820-e93ba568dfac"
    ],
    "CancellationPolicyIds": [
        "fe795f96-0b64-445b-89ed-c032563f2bac"
    ],
    "RateGroupIds": [
        "deb9444e-6897-4f2a-86b4-aff100c2896e"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-04-27T11:48:57Z",
        "EndUtc": "2023-04-27T11:48:57Z",
    },
    "Limitation":{
        "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
        "Count": 100
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Service](#service). |
| `CancellationPolicyIds` | array of string | optional, max 1000 items | Unique identifiers of the [Cancellation Policy](#cancellationpolicy). Required if no other filter is provided. |
| `RateGroupIds` | array of string | optional, max 1000 items | Unique identifiers of the [Rate group](rates.md#rategroup). Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Cancellation Policy](#cancellationpolicy) was updated. Required if no other filter is provided. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of cancellation policies returned. |

### Response

```javascript
{
    "CancellationPolicies": [
        {
            "Id": "769fc613-838f-41a7-ac2a-aff100c3189f",
            "RateGroupId": "deb9444e-6897-4f2a-86b4-aff100c2896e",
            "CreatedUtc": "2023-04-27T11:48:57Z",
            "UpdatedUtc": "2023-04-27T11:48:57Z",
            "Applicability": "Creation",
            "FeeExtent": [
                "TimeUnits",
                "Products"
            ],
            "ApplicabilityOffset": "0M0D0:0:0.0",
            "FeeMaximumTimeUnits": 0,
            "AbsoluteFee": {
                "Currency": "EUR",
                "Value": 15.00
            },
            "RelativeFee": 0.00000000
        }
    ],
    "Cursor": "769fc613-838f-41a7-ac2a-aff100c3189f"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CancellationPolicies` | array of [Cancellation Policy](#cancellation-policy) | required | The filtered cancellation policies. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest cancellation policy returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older cancellation policies. |

#### Cancellation Policy

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the cancellation policy. |
| `RateGroupId` | string | required | Unique identifier of the rate group the cancellation policy belongs to. |
| `CreatedUtc` | string | required | Date and time of the cancellation policy creation in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Date and time of the cancellation policy update in UTC timezone in ISO 8601 format. |
| `Applicability` | string | required | Applicability mode of the cancellation policy. |
| `FeeExtent` | [Fee Extent](#fee-extent) | required | Extent for the cancellation fee. |
| `ApplicabilityOffset` | string | required | Offset for order start (assuming applicability is set to Start) from which the fee is applied. |
| `FeeMaximumTimeUnits` | int | required | Maximum number of time units the cancellation fee is applicable to. |
| `AbsoluteFee` | [Currency value](../operations/accountingitems.md#currency-value) | optional | Absolute value of the fee. |
| `RelativeFee` | decimal | required | Relative value of the fee. |

#### Cancellation Policy Applicability

* `Creation` - Cancellation fee is applicable from the time of creating the reservation.
* `Start` - Cancellation fee is applicable as soon as the reservation starts, i.e. at arrival time.
* `StartDate` - Cancellation fee is applicable on the date the reservation starts, i.e., at midnight.
* ...

#### Fee Extent

* `TimeUnits`
* `Products`
* ...
