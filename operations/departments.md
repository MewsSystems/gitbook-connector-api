# Departments

## Get all departments

Returns all departments of an enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/departments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "DepartmentIds": [
        "98776d06-60e4-495f-82f1-95ab2f644d63",
        "915fbb82-de35-48a0-9e9b-f4a7eac711bb"
    ],
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `DepartmentIds` | array of string | optional, max 1000 items | Unique identifiers of [Department](#department). |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "Departments": [
        {
            "Id": "98776d06-60e4-495f-82f1-95ab2f644d63",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "IsActive": true,
            "Name": "Sales"
        },
        {
            "Id": "915fbb82-de35-48a0-9e9b-f4a7eac711bb",
            "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
            "IsActive": true,
            "Name": "Housekeeping"
        }
    ],
    "Cursor": "915fbb82-de35-48a0-9e9b-f4a7eac711bb"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Departments` | array of [Department](#department) | required | The departments of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Department

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the department. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `IsActive` | boolean | required | Whether the department is still active. |
| `Name` | string | required | Name of the department. |
