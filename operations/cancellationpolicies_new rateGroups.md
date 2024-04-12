# Cancellation policies

## Get cancellation policy configurations

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns cancellation policy configurations including exceptions for rate groups and their rates, filtered by services, and other filters.

Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v2/cancellationPolicies/getCurrentConfiguration`

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
    "RateGroupIds": [
        "fe795f96-0b64-445b-89ed-c032563f2bac"
    ],
    "RateIds": [
        "fe795f96-0b64-445b-89ed-c032563f2bac"
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
| `RateIds` | array of string | optional, max 1000 items | Unique identifiers of the [Rate](rates.md#rate). Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Cancellation Policy Configuration](#cancellation-policy-configuration) was updated. Required if no other filter is provided. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of cancellation policy configurations returned. |

### Response

```javascript
{
    "CancellationPolicyConfigurations": [
        {
            "RateGroupId": "769fc613-838f-41a7-ac2a-aff100c3189f",
            "DefaultCancellationPolicy": {
                "Id": "769fc613-838f-41a7-ac2a-aff100c3189f",
                "Version": 2
            },
            "CancellationPolicyExceptions": [
                {
                    "CancellationPolicyId": "769fc613-838f-41a7-ac2a-aff100c3189f",                    
                    "Version": 3,
                    "RateIds": [
                        "769fc613-838f-41a7-ac2a-aff100c3189f",
                        "769fc613-838f-41a7-ac2a-aff100c3189f"
                    ],
                    "ValidFrom": "2023-04-27T11:48:57Z",
                    "ValidTo": "2023-04-27T11:48:57Z"
                },
                {
                    "CancellationPolicyId": "769fc613-838f-41a7-ac2a-aff100c3189f",
                    "Version": 3,
                    "RateIds": [],
                    "ValidFrom": "2023-04-27T11:48:57Z",
                    "ValidTo": "2023-04-27T11:48:57Z"
                }
            ]            
        }
    ]
    "Cursor": "769fc613-838f-41a7-ac2a-aff100c3189f"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CancellationPolicyConfigurations` | array of [Cancellation Policy Configuration](#cancellation-policy-configuration) | required | The filtered cancellation policy configurations for given rate groups and rates. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest rate group returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older cancellation policies. |

#### Cancellation Policy Configuration

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RateGroupId` | string | required | Unique identifier of the rate group. |
| `DefaultCancellationPolicy` | [Cancellation Policy](#cancellation-policy) | required | The cancellation policy set as default for this rate group. |
| `CancellationPolicyExceptions` | array of [Cancellation Policy Exception](#cancellation-policy-exception) | required | Filtered array of cancellation policy exception for current rate group. |

#### Cancellation Policy Exception

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CancellationPolicyId` | string | required | Unique identifier of the cancellation policy. |
| `Version` | int | required | The version of the cancellation policy assigned to this exception. |
| `RateIds` | array of Unique identifiers | optional | Array of rate ids for which the exception applies to, when the array is empty the exception applies to whole rate group.  |
| `ValidFromUtc` | string | required | Date and time of the exception start in UTC timezone in ISO 8601 format. |
| `ValidToUtc` | string | required | Date and time of the exception end in UTC timezone in ISO 8601 format. |
| `CreatedUtc` | string | required | Date and time of the cancellation policy creation in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Date and time of the cancellation policy update in UTC timezone in ISO 8601 format. |
