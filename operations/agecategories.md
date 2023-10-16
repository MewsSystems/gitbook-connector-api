# Age categories

## Get all age categories

Returns all age categories filtered by [Service](services.md#service). 
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/ageCategories/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "AgeCategoryIds": [
        "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
        "ab58c939-be30-4a60-8f75-ae1600c60c9f"
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
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Services](services.md#service) where the age category belong to. |
| `AgeCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of [Age categories](#age-category). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Rule](#rule) was updated. |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "AgeCategories": [
        {
            "Id": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "MinimalAge": null,
            "MaximalAge": null,
            "Names": {
                "cs-CZ": "Dospělí",
                "da-DK": "Voksne",
                "de-CH": "Erwachsene",
                "de-DE": "Erwachsene",
                "el-GR": "Ενήλικοι",
                "en-GB": "Adults"
            }
        },
        {
            "Id": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
            "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "MinimalAge": 0,
            "MaximalAge": 18,
            "Names": {
                "cs-CZ": "Děti",
                "da-DK": "Børn",
                "de-CH": "Kinder",
                "de-DE": "Kinder",
                "el-GR": "Παιδιά",
                "en-GB": "Children"
            }
        }
    ],
    "Cursor": "0b9560fb-055d-47d3-a6d4-e579c44ca558"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategories` | array of [Age category](#age-category) | required | Age category of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Age category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of age category. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `ServiceId` | string | required | Unique identifier of [Service](services.md#service) the age category belongs to. |
| `CreatedUtc` | string | required | Creation date and time of the age category in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the age category in UTC timezone in ISO 8601 format. |
| `MinimalAge` | number | optional | Minimal age for the age category. |
| `MaximalAge` | number | optional | Maximal age for the age category. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name of the age category. |
