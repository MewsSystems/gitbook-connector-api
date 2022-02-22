# Business segments

## Get all business segments

Returns all business segments of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/businessSegments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required | Unique identifiers of the [Services](services.md#service) from which the business segments are requested. |

### Response

```javascript
{
    "BusinessSegments": [
        {
            "Id": "7760b5cb-a666-41bb-9758-76bf5d1df399",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Business"
        },
        {
            "Id": "54ec08b6-e6fc-48e9-b8ae-02943e0ac693",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Leisure"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BusinessSegments` | array of [Business segment](#business-segment) | required | Business segments of the default service. |

#### Business segment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the segment. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `IsActive` | boolean | required | Whether the business segment is still active. |
| `Name` | string | required | Name of the segment. |
