<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Cancellation policies

## Get all cancellation policies

> ### DEPRECATED!
> This operation is deprecated. When the property is using granular cancellation policies feature e.g. shares cancellation policies for multiple rate groups or even rates, API will return not supported response code. Use [get](#get-cancellation-policies) instead or [getForReservations](#get-cancellation-policies-by-reservation) for existing Reservations.

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
    "EndUtc": "2023-04-27T11:48:57Z"
  },
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ServiceIds` | array of string | required, max 100 items | Unique identifiers of the [Service](services.md#service). |
| `CancellationPolicyIds` | array of string | optional, max 1000 items | Unique identifiers of the [Cancellation Policy](cancellationpolicies.md#cancellationpolicy). Required if no other filter is provided. |
| `RateGroupIds` | array of string | optional, max 1000 items | Unique identifiers of the [Rate group](rates.md#rategroup). Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the Cancellation Policy was updated. Required if no other filter is provided. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted, or both types of record. If not specified, only active records will be returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

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
        "Value": 15
      },
      "RelativeFee": 0
    }
  ],
  "Cursor": "769fc613-838f-41a7-ac2a-aff100c3189f"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CancellationPolicies` | array of [Cancellation Policy](cancellationpolicies.md#cancellation-policy) | required, max 1000 items | The filtered cancellation policies. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest cancellation policy returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older cancellation policies. |

#### Cancellation Policy

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the cancellation policy. |
| `RateGroupId` | string | required | Unique identifier of the rate group the cancellation policy belongs to. |
| `CreatedUtc` | string | required | Date and time of the cancellation policy creation in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Date and time of the cancellation policy update in UTC timezone in ISO 8601 format. |
| `Applicability` | [Cancellation Policy Applicability](cancellationpolicies.md#cancellation-policy-applicability) | required | Applicability mode of the cancellation policy. |
| `FeeExtent` | array of [Cancellation Fee Extent](cancellationpolicies.md#cancellation-fee-extent) | required | Extent for the cancellation fee, i.e. what should be in scope for the automatic payment. |
| `ApplicabilityOffset` | string | required | Offset for order start (assuming Applicability is set to Start) from which the fee is applied. |
| `FeeMaximumTimeUnits` | integer | optional | Maximum number of time units the cancellation fee is applicable to. |
| `AbsoluteFee` | [Currency value (ver 2023-02-02)](_objects.md#currency-value-ver-2023-02-02) | required | Absolute value of the fee. |
| `RelativeFee` | number | required | Relative value of the fee, as a percentage of the reservation price. |
| `IsActive` | boolean | required | Whether the cancellation policy is still active. |

## Get cancellation policies

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Given Reservation draft parameters or Reservation Ids, resolves cancellation policies.

If the response do not contain any cancellation policy for given Reservation draft parameters or Reservation Ids, no cancellation policies apply.

### Request

`[PlatformAddress]/api/connector/v1/cancellationPolicies/get/2024-09-02`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationDraftParameters": [
    {
      "ReservationFirstTimeUnitStartUtc": "2024-06-01T00:00", 
      "ReservationLastTimeUnitStartUtc": "2024-06-05T00:00",    
      "RateIds": [
        "c5bb9d3e-849d-4119-a6bc-ac87a2b20810",
        "8db45d0a-9bec-4550-ad67-ed0265bcacce"
      ]
    },
    {
      "ReservationFirstTimeUnitStartUtc": "2024-06-21T00:00", 
      "ReservationLastTimeUnitStartUtc": "2024-06-28T00:00",    
      "RateIds": [
        "c5bb9d3e-849d-4119-a6bc-ac87a2b20810",
        "8db45d0a-9bec-4550-ad67-ed0265bcacce"
      ]
    }
  ],
  "ReservationIds": [
    "bcfce146-ea7b-4601-baed-5f0e09e0ba2d",
    "38f76277-9c66-4e9f-850c-db708f489a1d"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ReservationDraftParameters` | array of [Reservation Draft Parameteres](#reservation-draft-parameters) | optional, max 100 items | Start of the time reservation interval, expressed as the timestamp for the start of the first [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. |
| `ReservationIds` | array of string | optional, max 100 items | Unique identifiers of Reservations. |


#### Reservation Draft Parameters
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationFirstTimeUnitStartUtc` | string | required | Start of the time reservation interval, expressed as the timestamp for the start of the last [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. |
| `ReservationLastTimeUnitStartUtc` | string | required | End of the time reservation interval, expressed as the timestamp for the start of the last [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. |
| `RateIds` | array of string | required, max 100 items | Unique identifiers of requested Rates. |

### Response

```javascript
{
  "CancellationPoliciesByReservationDraft": [
    {
      "ReservationFirstTimeUnitStartUtc": "2024-06-01T00:00", 
      "ReservationLastTimeUnitStartUtc": "2024-06-05T00:00",
      "RateId": "c5bb9d3e-849d-4119-a6bc-ac87a2b20810",
      "Applicability": "Creation",
      "FeeExtent": [
        "TimeUnits",
        "Products"
      ],
      "ApplicabilityOffset": "0M0D0:0:0.0",
      "FeeMaximumTimeUnits": 0,
      "AbsoluteFee": {
        "Currency": "EUR",
        "Value": 15
      },
      "RelativeFee": 0
    },
    {
      "ReservationFirstTimeUnitStartUtc": "2024-06-01T00:00", 
      "ReservationLastTimeUnitStartUtc": "2024-06-05T00:00",
      "RateId": "8db45d0a-9bec-4550-ad67-ed0265bcacce",
      "Applicability": "Creation",
      "FeeExtent": [
        "TimeUnits",
        "Products"
      ],
      "ApplicabilityOffset": "0M7D0:0:0.0",
      "FeeMaximumTimeUnits": 0,
      "AbsoluteFee": {
        "Currency": "EUR",
        "Value": 30
      },
      "RelativeFee": 0
    },
    {
      "ReservationFirstTimeUnitStartUtc": "2024-06-21T00:00",
      "ReservationLastTimeUnitStartUtc": "2024-06-28T00:00",
      "RateId": "8db45d0a-9bec-4550-ad67-ed0265bcacce",
      "Applicability": "Creation",
      "FeeExtent": [
        "Products"
      ],
      "ApplicabilityOffset": "0M7D0:0:0.0",
      "FeeMaximumTimeUnits": 0,
      "AbsoluteFee": {
        "Currency": "EUR",
        "Value": 0
      },
      "RelativeFee": 90
    }
  ],
  "CancellationPoliciesByReservation": [
    {
      "ReservationId": "bcfce146-ea7b-4601-baed-5f0e09e0ba2d",
      "Applicability": "Confirmation",
      "FeeExtent": [
        "TimeUnits"
      ],
      "ApplicabilityOffset": "0M7D0:0:0.0",
      "FeeMaximumTimeUnits": 0,
      "AbsoluteFee": {
        "Currency": "EUR",
        "Value": 100
      },
      "RelativeFee": 0
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CancellationPoliciesByReservationDraft` | array of [Cancellation Policy by Reservation Draft](cancellationpolicies.md#cancellation-policy-by-reservation-draft) | required, max 200 items | Cancellation policies by requested Reservation Drafts. |
| `CancellationPoliciesByReservation` | array of [Cancellation Policy by Reservation](cancellationpolicies.md#cancellation-policy-by-reservation) | required, max 200 items | Cancellation policies by requested Reservation ids. |

#### Cancellation Policy by Reservation Draft

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationFirstTimeUnitStartUtc` | string | required | Start of the time reservation draft interval, expressed as the timestamp for the start of the last [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. |
| `ReservationLastTimeUnitStartUtc` | string | required | End of the time reservation draft interval, expressed as the timestamp for the start of the last [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. |
| `RateId` | string | required| Unique identifier of requested Rate. |
| `Applicability` | [Cancellation Policy Applicability](cancellationpolicies.md#cancellation-policy-applicability) | required | Applicability mode of the cancellation policy. |
| `FeeExtent` | array of [Cancellation Fee Extent](cancellationpolicies.md#cancellation-fee-extent) | required | Extent for the cancellation fee, i.e. what should be in scope for the automatic payment. |
| `ApplicabilityOffset` | string | required | Offset for order start (assuming Applicability is set to Start) from which the fee is applied. |
| `FeeMaximumTimeUnits` | integer | optional | Maximum number of time units the cancellation fee is applicable to. |
| `AbsoluteFee` | [Currency value (ver 2023-02-02)](_objects.md#currency-value-ver-2023-02-02) | required | Absolute value of the fee. |
| `RelativeFee` | number | required | Relative value of the fee, as a percentage of the reservation price. |
| `IsActive` | boolean | required | Whether the cancellation policy is still active. |

#### Cancellation Policy by Reservation Id

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationId` | string |  required| Unique identifier of the Reservation. |
| `Applicability` | [Cancellation Policy Applicability](cancellationpolicies.md#cancellation-policy-applicability) | required | Applicability mode of the cancellation policy. |
| `FeeExtent` | array of [Cancellation Fee Extent](cancellationpolicies.md#cancellation-fee-extent) | required | Extent for the cancellation fee, i.e. what should be in scope for the automatic payment. |
| `ApplicabilityOffset` | string | required | Offset for order start (assuming Applicability is set to Start) from which the fee is applied. |
| `FeeMaximumTimeUnits` | integer | optional | Maximum number of time units the cancellation fee is applicable to. |
| `AbsoluteFee` | [Currency value (ver 2023-02-02)](_objects.md#currency-value-ver-2023-02-02) | required | Absolute value of the fee. |
| `RelativeFee` | number | required | Relative value of the fee, as a percentage of the reservation price. |
| `IsActive` | boolean | required | Whether the cancellation policy is still active. |


#### Cancellation Policy Applicability

* `Creation`
* `Start`
* `StartDate`

#### Cancellation Fee Extent

* `TimeUnits`
* `Products`
