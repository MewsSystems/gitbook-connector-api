# Outlets

## Get all outlets

Returns all outlets of an enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/outlets/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "Outlets": [
        {
            "Id": "7700469f-7667-4ebd-a1c0-10380afc9bd0",
            "IsActive": true,
            "Name": "Spa"
        },
        {
            "Id": "2accff7b-feea-436a-9670-afa9bdb8c8d2",
            "IsActive": true,
            "Name": "Restaurant"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Outlets` | array of [Outlet](#outlet) | required | The outlets of the enterprise. |

#### Outlet

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the outlet. |
| `IsActive` | boolean | required | Whether the outlet is still active. |
| `Name` | string | required | Name of the outlet. |
