# Cancellation policies

## Get all cancellation policies

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns all cancellation policies, filtered by services, rate groups and other filters. Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/cancellationPolicies/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
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
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Service](services.md#service). |
| `CancellationPolicyIds` | array of string | optional, max 1000 items | Unique identifiers of the [Cancellation Policy](#cancellationpolicy). Required if no other filter is provided. |
| `RateGroupIds` | array of string | optional, max 1000 items | Unique identifiers of the [Rate group](rates.md#rategroup). Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Cancellation Policy](#cancellation-policy) was updated. Required if no other filter is provided. |
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
| `Applicability` | string [Applicability](#cancellation-policy-applicability) | required | Applicability mode of the cancellation policy. |
| `FeeExtent` | array of string [Fee Extent](#fee-extent) | required | Extent for the cancellation fee, i.e. what should be in scope for the automatic payment. |
| `ApplicabilityOffset` | string | required | Offset for order start (assuming Applicability is set to `Start`) from which the fee is applied. |
| `FeeMaximumTimeUnits` | int | required | Maximum number of time units the cancellation fee is applicable to. |
| `AbsoluteFee` | [Currency value](../operations/accountingitems.md#currency-value) | optional | Absolute value of the fee. |
| `RelativeFee` | decimal | required | Relative value of the fee, as a percentage of the reservation price. |

#### Cancellation Policy Applicability

* `Creation` - Cancellation fee is applicable from the time of creating the reservation.
* `Start` - Cancellation fee is applicable as soon as the reservation starts, i.e. at arrival time.
* `StartDate` - Cancellation fee is applicable on the date the reservation starts, i.e., at midnight.
* ...

#### Fee Extent

* `TimeUnits`
* `Products`
* ...
