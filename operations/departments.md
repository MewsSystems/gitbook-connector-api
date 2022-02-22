# Departments

## Get all departments

Returns all departments of an enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/departments/getAll`

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
    "Departments": [
        {
            "Id": "98776d06-60e4-495f-82f1-95ab2f644d63",
            "IsActive": true,
            "Name": "Sales"
        },
        {
            "Id": "915fbb82-de35-48a0-9e9b-f4a7eac711bb",
            "IsActive": true,
            "Name": "Housekeeping"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Departments` | array of [Department](#department) | required | The departments of the enterprise. |

#### Department

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the department. |
| `IsActive` | boolean | required | Whether the department is still active. |
| `Name` | string | required | Name of the department. |
