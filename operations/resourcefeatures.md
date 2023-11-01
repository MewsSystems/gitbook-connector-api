# Resource features

## Get all resource features

Returns all resource features. This operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/resourceFeatures/getAll`

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
    "ServiceIds": [
        "24e2ead5-65a8-4ed9-8286-abdb00f08a1f"
    ],
    "ResourceFeatureIds": [
        "3d5201ad-4a7b-4cbe-9c22-03dd79c28443"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-11-01T00:00:00Z",
        "EndUtc": "2023-11-30T00:00:00Z"
    },
    "ActivityStates": [ "Active" ],
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns the resource features for all enterprises within scope of the Access Token. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Services](services.md#service) to which the resource features belong. |
| `ResourceFeatureIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource features](#resource-feature). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the resource features were updated. |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of resource features returned. |

### Response

```javascript
{
    "ResourceFeatures": [
        {
            "Id": "3d5201ad-4a7b-4cbe-9c22-03dd79c28443",
            "ServiceId": "24e2ead5-65a8-4ed9-8286-abdb00f08a1f",
            "IsActive": true,
            "Classification": "AccessibleBathroom",
            "Names": {
                "en-US": "Accessible Bathroom"
            },
            "ShortNames": {
                "en-US": "AccessBath"
            },
            "Descriptions": {}
        }
    ],
    "Cursor": "3d5201ad-4a7b-4cbe-9c22-03dd79c28443"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceFeatures` | array of [Resource feature](#resource-feature) | optional | Resource features. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest resource features returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older resource feature. |

#### Resource feature

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the feature. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `IsActive` | bool | required | Whether the resource feature is still active. |
| `Classification` | string [Resource feature classification](#resource-feature-classification) | required | Classification of the feature. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name. |
| `ShortNames` | [Localized text](_objects.md#localized-text) | required | All translations of the short name. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | required | All translations of the description. |

#### Resource feature classification

* `AccessibleBathroom`
* `AccessibleRoom`
* `AirConditioning`
* `Balcony`
* `DoubleBed`
* `ElevatorAccess`
* `EnsuiteRoom`
* `HighFloor`
* `Kitchenette`
* `LowerBed`
* `OceanView`
* `PrivateBathroom`
* `PrivateJacuzzi`
* `PrivateSauna`
* `RiverView`
* `RollawayBed`
* `SharedBathroom`
* `TwinBeds`
* `UpperBed`
* `SeaView`
* `...`

## Get all resource feature assignments

Returns all resource feature assignments. This operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/resourceFeatureAssignments/getAll`

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
    "ResourceFeatureIds": [
        "a693dd8c-21fe-4dae-b450-ea3bd9ab3bb0"
    ],
    "ResourceFeatureAssignmentIds": [
        "ca2b5bf9-24f5-4faa-95ef-b65d38598b08"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-11-01T00:00:00Z",
        "EndUtc": "2023-11-30T00:00:00Z"
    },
    "ActivityStates": [ "Active" ],
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns the resource feature assignments for all enterprises within scope of the Access Token. |
| `ResourceFeatureIds` | array of string | required, max 1000 items | Unique identifiers of [Resource features](#resource-feature) to which the resource feature assignments belong. |
| `ResourceFeatureAssignmentsIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource feature assignments](resourcecategories.md#resource-category-assignment). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the resource feature assignments were updated. |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of resource feature assignments returned. |

### Response

```javascript
{
    "ResourceFeatureAssignments": [
        {
            "Id": "ca2b5bf9-24f5-4faa-95ef-b65d38598b08",
            "IsActive": true,
            "ResourceId": "18019693-c66f-4be8-a893-c3d89fd291cc",
            "FeatureId": "a693dd8c-21fe-4dae-b450-ea3bd9ab3bb0",
            "CreatedUtc": "2023-11-03T00:00:00Z",
            "UpdatedUtc": "2023-11-21T00:00:00Z"
        }
    ],
    "Cursor": "3d5201ad-4a7b-4cbe-9c22-03dd79c28443"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceFeatureAssignments` | array of [Resource feature assignment](#resource-feature-assignment) | optional | Resource feature assignments. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest resource feature assignments returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older resource feature assignments. |

#### Resource feature assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | bool | required | Whether the assignment is still active. |
| `ResourceId` | string | required | Unique identifier of the [Resource](resources.md#resource). |
| `FeatureId` | string | required | Unique identifier of the [Resource feature](#resource-feature) assigned to the Resource. |
| `CreatedUtc` | string | required | Creation date and time of the assignment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the assignment in UTC timezone in ISO 8601 format. |