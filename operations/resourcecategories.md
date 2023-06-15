# Resource categories

## Get all resource categories

Returns all categories of resources. This operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/resourceCategories/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": 
    [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "ResourceCategoryIds": [
        "5c0804f9-d03a-4b13-a57d-b00300781a41",
        "47d6b462-35ec-467e-a565-b00300781a41"
    ],
    "ServiceIds": [
        "9b3a6c54-63aa-4383-b50e-b0030078184b",
        "c0f71466-6c0b-4993-88ac-1794f6b7e958"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-05-05T00:00:00Z",
        "EndUtc": "2023-05-10T00:00:00Z"
    },
    "Limitation":{
        "Count": 10
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns the resource categories for all enterprises within scope of the Access Token. |
| `ResourceCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource categories](#resource-category). |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Services](services.md#service) to which the resource categories belong. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the resource categories were updated. |

### Response

```javascript
{
    "ResourceCategories":[
        {
            "Id": "5c0804f9-d03a-4b13-a57d-b00300781a41",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "ServiceId": "9b3a6c54-63aa-4383-b50e-b0030078184b",
            "IsActive": true,
            "Type": "Bed",
            "Names": {
                "en-US": "Bed 1"
            },
            "ShortNames": {
                "en-US": "Bed 1"
            },
            "Descriptions": {},
            "Ordering": 2,
            "Capacity": 1,
            "ExtraCapacity": 0,
            "ExternalIdentifier": null
        },
        {
            "Id": "47d6b462-35ec-467e-a565-b00300781a41",
            "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
            "ServiceId": "c0f71466-6c0b-4993-88ac-1794f6b7e958",
            "IsActive": true,
            "Type": "Dorm",
            "Names": {
                "en-US": "Dorm 1"
            },
            "ShortNames": {
                "en-US": "Dorm 1"
            },
            "Descriptions": {},
            "Ordering": 1,
            "Capacity": 4,
            "ExtraCapacity": 0,
            "ExternalIdentifier": null
        }
    ],
    "Cursor": "47d6b462-35ec-467e-a565-b00300781a41"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceCategories` | array of [Resource category](#resource-category) | optional | Resource categories of the resources. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest resource category returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older resource categories. |

#### Resource category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) of the resource category. |
| `IsActive` | bool | required | Whether the resource category is still active. |
| `Type` | string | required | [Resource category type](#resource-category-type). |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name. |
| `ShortNames` | [Localized text](_objects.md#localized-text) | required | All translations of the short name. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | required | All translations of the description. |
| `Ordering` | number | required | Ordering of the category, lower number corresponds to lower category \(note that neither uniqueness nor continuous sequence is guaranteed\). || `Capacity` | number | required | Capacity that can be served \(e.g. bed count\). |
| `ExtraCapacity` | number | required | Extra capacity that can be served \(e.g. extra bed count\). |
| `ExternalIdentifier` | string | optional, max 255 characters | Identifier of the resource category from external system. |

#### Resource category type

* `Room`
* `Bed`
* `Dorm`
* `Apartment`
* `Suite`
* `Villa`
* `Site`
* `Office`
* `MeetingRoom`
* `ParkingSpot`
* `Desk`
* `TeamArea`
* `Membership`
* `Tent`
* `CaravanOrRV`
* `UnequippedCampsite`
* ...