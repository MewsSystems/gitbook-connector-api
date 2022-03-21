# Age categories

## Get all age categories

Returns all age categories filtered by [Service](services.md#service).

### Request

`[PlatformAddress]/api/connector/v1/ageCategories/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "AgeCategoryIds": [
        "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
        "ab58c939-be30-4a60-8f75-ae1600c60c9f"
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Services](services.md#service) where the age category belong to. |
| `AgeCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of [Age categories](#age-category). |

### Response

```javascript
{
    "AgeCategories": [
        {
            "Id": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "MinimalAge": null,
            "MaximalAge": null,
            "Names": {
                "cs-CZ": "Dospělí",
                "da-DK": "Voksne",
                "de-CH": "Erwachsene",
                "de-DE": "Erwachsene",
                "el-GR": "Ενήλικοι",
                "en-GB": "Adults"
            },
            "Classification": "Adult",
            "IsDefault": true
        },
        {
            "Id": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "MinimalAge": 0,
            "MaximalAge": 18,
            "Names": {
                "cs-CZ": "Děti",
                "da-DK": "Børn",
                "de-CH": "Kinder",
                "de-DE": "Kinder",
                "el-GR": "Παιδιά",
                "en-GB": "Children"
            },
            "Classification": "Children",
            "IsDefault": false
        }
    ]
}
```

#### Age category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of age category. |
| `ServiceId` | string | required | Unique identifier of [Service](services.md#service) the age category belongs to. |
| `MinimalAge` | number | optional | Minimal age for the age category. |
| `MaximalAge` | number | optional | Maximal age for the age category. |
| `Names` | [Localized text](resources.md#localized-text) | required | All translations of the name of the age category. |
| `Classification` | string  [Age category classification](#age-category-classification)| required | Classification of the age category. |
| `IsDefault` | bool | requied | Whether the age category is default. |

#### Age category classification

* `Adult`
* `Children`
