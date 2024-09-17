<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Rate groups

## Get all rate groups

Returns all rate groups, filtered by unique identifiers and other filters. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/rateGroups/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "RateGroupIds": [
    "6b3f718a-b537-45b0-a8ee-d30897723834"
  ],
  "ServiceIds": [
    "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
  ],
  "ExternalIdentifiers": [
    "RG-001"
  ],
  "UpdatedUtc": {
    "StartUtc": "2024-01-27T11:48:57Z",
    "EndUtc": "2024-02-27T11:48:57Z"
  },
  "ActivityStates": [
    "Active"
  ],
  "Limitation": {
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `RateGroupIds` | array of string | optional, max 1000 items | Unique identifiers of the [Rate group](rategroups.md#rate-group). Required if ServiceIds filter is not provided. |
| `ServiceIds` | array of string | optional, max 1000 items | Unique identifiers of the [Service](services.md#service). Required if RateGroupIds filter is not provided. |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of [Rate group](rategroups.md#rate-group) from external systems. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months |  |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "RateGroups": [
    {
      "Id": "6b3f718a-b537-45b0-a8ee-d30897723834",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "IsActive": true,
      "CreatedUtc": "2023-01-11T13:32:32Z",
      "UpdatedUtc": "2023-01-13T15:27:28Z",
      "Ordering": 0,
      "Names": {
        "en-US": "Default group"
      },
      "ShortNames": {
        "en-US": "Default group"
      },
      "Descriptions": {},
      "ExternalIdetnfier": "RG-001"
    }
  ],
  "Cursor": "6b3f718a-b537-45b0-a8ee-d30897723834"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RateGroups` | array of [Rate Group](rategroups.md#rate-group) | required, max 1000 items | The filtered rate groups. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest rate group returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older rate groups. |

#### Rate Group

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate group. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) the rate group belongs to. |
| `IsActive` | boolean | required | Whether the rate group is still active. |
| `CreatedUtc` | string | required | Creation date and time of the rate group in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the rate group in UTC timezone in ISO 8601 format. |
| `Ordering` | integer | required | Ordering of the rate group. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name. |
| `ShortNames` | [Localized text](_objects.md#localized-text) | optional | All translations of the short name. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | optional | All translations of the description. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the rate group from external system. |
