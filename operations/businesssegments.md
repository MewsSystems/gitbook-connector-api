# Business segments

## Get all business segments

Returns all business segments of the default service provided by the enterprise.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/businessSegments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "Ids": [
        "7760b5cb-a666-41bb-9758-76bf5d1df399",
        "54ec08b6-e6fc-48e9-b8ae-02943e0ac693"
    ],
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-10-01T00:00:00Z",
        "EndUtc": "2023-10-31T00:00:00Z"
    },
    "ActivityStates": [ "Active" ],
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Ids` | string | optional, max 1000 items | Unique identifiers of the requested [Bussiness segment](#business-segment). |
| `ServiceIds` | array of string | optional | Unique identifiers of the [Services](services.md#service) from which the business segments are requested. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Business segment](#business-segment) was updated. |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "BusinessSegments": [
        {
            "Id": "7760b5cb-a666-41bb-9758-76bf5d1df399",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Business",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z"
        },
        {
            "Id": "54ec08b6-e6fc-48e9-b8ae-02943e0ac693",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Leisure",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z"
        }
    ],
    "Cursor": "54ec08b6-e6fc-48e9-b8ae-02943e0ac693"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BusinessSegments` | array of [Business segment](#business-segment) | required | Business segments of the default service. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Business segment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the segment. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `IsActive` | boolean | required | Whether the business segment is still active. |
| `Name` | string | required | Name of the segment. |
| `CreatedUtc` | string | required | Creation date and time of the business segment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the business segment in UTC timezone in ISO 8601 format. |
