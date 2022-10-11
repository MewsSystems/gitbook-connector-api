# Loyalty programs

## Get all loyalty programs

Returns all loyalty programs of the enterprise, possibly filtered by identifiers.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
    "LoyaltyProgramIds": [
        "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
        "8a98965a-7c03-48a1-a28c-ab1b009b53c8"
    ],
    "CreatedUtc": {
        "StartUtc": "2019-12-05T00:00:00Z",
        "EndUtc": "2019-12-10T00:00:00Z"
    },
    "UpdatedUtc": {
        "StartUtc": "2019-12-10T00:00:00Z",
        "EndUtc": "2019-12-17T00:00:00Z"
    },
    "ActivityStates": [
        "Active"
    ],
    "Limitation":{
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
| `LoyaltyProgramIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty programs](#loyalty-program). |
| `CreatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval of [Loyalty program](#loyalty-program) creation date and time. |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval of [Loyalty program](#loyalty-program) last update date and time. |
| `ActivityStates` | array of string [Activity state](vouchers.md#activity-state) | required | Whether return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |


#### Time interval

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "LoyaltyPrograms": [
        {
            "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
            "Name": "Platinum Club",
            "Code": "PC01"
        },
        {
            "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
            "Name": "Gold Exclusive Club",
            "Code": "GEC07",
        }
    ],
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyPrograms` | array of [Loyalty program](#loyalty-program) | required | The loyalty programs of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty Program

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty program. |
| `Name` | string | required | Name of the loyalty program. |
| `Code` | string | required | Code of the loyalty program. |