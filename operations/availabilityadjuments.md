# Availability adjuments

## Get all availability adjustments

Returns all availability adjustments.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/availabilityAdjustments/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "AvailabilityAdjustmentIds": [
    "e19297af-373e-4701-b4ea-afae0129bded",
    "7413724a-6c48-46d4-ab3a-afae01280999"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-02-18T18:00:10.155Z",
    "EndUtc": "2023-02-20T18:00:10.155Z"
  },
  "ActivityStates": [
    "Active",
    "Deleted"
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
| `AvailabilityAdjustmentIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Availability adjustments](https://mews-systems.gitbook.io/connector-api/operations/#availability-adjustment). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ActivityStates` | array of [ActivityState](#X-Ref-Name-ActivityState) | optional | Whether to return only active, only deleted or both records. |

#### ActivityState

- `Deleted`
- `Active`

### Response

```javascript
{
  "AvailabilityAdjustments": [
    {
      "Id": "e19297af-373e-4701-b4ea-afae0129bded",
      "AvailabilityBlockId": "12806ae8-9c15-44c7-9a44-afae01289928",
      "ResourceCategoryId": "e6a2457d-f82c-4597-90f9-afa900d0d17d",
      "FirstTimeUnitStartUtc": "2023-02-21T23:00:00Z",
      "LastTimeUnitStartUtc": "2023-02-21T23:00:00Z",
      "UnitCount": -3,
      "ActivityState": "Active",
      "UpdatedUtc": "2023-02-28T23:00:00Z"
    },
    {
      "Id": "7413724a-6c48-46d4-ab3a-afae01280999",
      "AvailabilityBlockId": null,
      "ResourceCategoryId": "e6a2457d-f82c-4597-90f9-afa900d0d17d",
      "FirstTimeUnitStartUtc": "2023-02-19T23:00:00Z",
      "LastTimeUnitStartUtc": "2023-02-23T23:00:00Z",
      "UnitCount": 5,
      "ActivityState": "Deleted",
      "UpdatedUtc": "2023-02-28T23:00:00Z"
    }
  ],
  "Cursor": "7413724a-6c48-46d4-ab3a-afae01280999"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityAdjustments` | array of [Availability adjustment](#AvailabilityAdjustment) | required | Availability adjustments. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Availability adjustment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the [Availability adjustment](https://mews-systems.gitbook.io/connector-api/operations/#availability-adjustment). |
| `AvailabilityBlockId` | string | optional | Unique identifier of the [Availability block](https://mews-systems.gitbook.io/connector-api/operations/availabilityblocks/#availability-block) which the availability adjustment belongs to. |
| `ResourceCategoryId` | string | required | Unique identifier of the [Resource category](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource-category) whose availability is updated. |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `UnitCount` | integer | required | Adjustment value applied on the interval. |
| `ActivityState` | [ActivityState](#X-Ref-Name-ActivityState) | required |  |
| `ReleaseOverrideUtc` | string | optional |  |
| `UpdatedUtc` | string | required | Last update date and time of the adjustment in UTC timezone in ISO 8601 format. |
