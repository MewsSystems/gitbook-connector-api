# Cashiers

## Get all cashiers

Returns all cashiers in the enterprise.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/cashiers/getAll`

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
        "9a36e3fa-2299-474b-a8a2-5ea4da317abc"
    ],
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
| `Ids` | string | optional, max 1000 items | Unique identifiers of the requested [Cashier](#cashier). |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "Cashiers": [
        {
            "Id": "9a36e3fa-2299-474b-a8a2-5ea4da317abc",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "IsActive": true,
            "Name": "Main Cashier"
        }
    ],
    "Cursor": "9a36e3fa-2299-474b-a8a2-5ea4da317abc"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Cashiers` | array of [Cashier](#cashier) | required | Cashiers in the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Cashier

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the cashier. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `IsActive` | boolean | required | Whether the cashier is still active. |
| `Name` | string | required | Name of the cashier. |
