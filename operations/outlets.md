# Outlets

## Get all outlets

Returns all outlets of an enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/outlets/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "OutletIds": [
        "7700469f-7667-4ebd-a1c0-10380afc9bd0",
        "2accff7b-feea-436a-9670-afa9bdb8c8d2"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-10-01T00:00:00Z",
        "EndUtc": "2023-10-31T00:00:00Z"
    },
     "Limitation": { "Count": 100 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `OutletIds` | string | optional, max 1000 items | Unique identifiers of the requested [Outlets](#outlet). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Outlet](#outlet) was updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "Outlets": [
        {
            "Id": "7700469f-7667-4ebd-a1c0-10380afc9bd0",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "IsActive": true,
            "Name": "Spa",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z"
        },
        {
            "Id": "2accff7b-feea-436a-9670-afa9bdb8c8d2",
            "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
            "IsActive": true,
            "Name": "Restaurant",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z"
        }
    ],
    "Cursor": "2accff7b-feea-436a-9670-afa9bdb8c8d2"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Outlets` | array of [Outlet](#outlet) | required | The outlets of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Outlet

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the outlet. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `IsActive` | boolean | required | Whether the outlet is still active. |
| `Name` | string | required | Name of the outlet. |
| `CreatedUtc` | string | required | Creation date and time of the outlet in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the outlet in UTC timezone in ISO 8601 format. |
