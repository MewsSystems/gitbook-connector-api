# Resources

## Get all resources

Returns all resources of an enterprise associated with the connector integration. Note that when any of the extents is set to `true`, the response contains the entities that are associated to a resource. If the extent is not associated to a resource (e.g. resource category not assigned to any resource), this information is not returned.

### Request

`[PlatformAddress]/api/connector/v1/resources/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Extent": {
        "Resources": true,
        "ResourceCategories": false,
        "ResourceCategoryAssignments": false,
        "ResourceCategoryImageAssignments": false,
        "ResourceFeatures": false,
        "ResourceFeatureAssignments": false,
        "Inactive": false
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Extent` | [Resource extent](#resource-extent) | required | Extent of data to be returned. |

#### Resource extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Resources` | bool | optional | Whether the response should contain resources. |
| ~~`ResourceCategories`~~ | ~~bool~~ | ~~optional~~ | ~~Whether the response should contain categories.~~ **Deprecated!** Please use [Get all resource categories](resourcecategories.md#get-all-resource-categories) |
| `ResourceCategoryAssignments` | bool | optional | Whether the response should contain assignments of the resources to categories. |
| `ResourceCategoryImageAssignments` | bool | optional | Whether the response should contain assignments of the images to categories. |
| `ResourceFeatures` | bool | optional | Whether the response should contain resource features. |
| `ResourceFeatureAssignments` | bool | optional | Whether the response should contain assignments of the resources to features. |
| `Inactive` | bool | optional | Whether the response should contain inactive entities. |

### Response

```javascript
{
    "Resources": [
        {
            "Id": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
            "IsActive": true,
            "Name": "101",
            "ParentResourceId": null,
            "State": "Dirty",
            "Descriptions": {},
            "Data": {
                "Discriminator": "Space",
                "Value": {
                    "FloorNumber": "3",
                    "LocationNotes": "A1"
                }
            },
            "CreatedUtc": "2016-03-29T15:14:06Z",
            "UpdatedUtc": "2016-03-29T15:14:06Z"
        },
        {
            "Id": "c32386aa-1cd2-414a-a823-489325842fbe",
            "IsActive": true,
            "Name": "102",
            "ParentResourceId": null,
            "State": "Inspected",
            "Descriptions": {
                "en-US": "Resource description"
            },
            "Data": {
                "Discriminator": "Space",
                "Value": {
                    "FloorNumber": "3",
                    "LocationNotes": "B2"
                }
            },
            "CreatedUtc": "2016-03-29T15:14:06Z",
            "UpdatedUtc": "2016-03-29T15:14:06Z"
        }
    ],
    "ResourceCategories": [
        {
            "Id": "aaed6e21-1c1f-4644-9872-e53f96a21bf9",
            "ServiceId": "24e2ead5-65a8-4ed9-8286-abdb00f08a1f",
            "IsActive": true,
            "Names": {
                "en-US": "Best Room"
            "ShortNames":{
                "en-US": "BR"
            },
            "Descriptions": {},
            "Ordering": 0,
            "Capacity": 2,
            "ExtraCapacity": 0,
            "ExternalIdentifier": "RT001-BestRoom"
        }
    ],
    "ResourceCategoryAssignments": [
        {
            "Id": "032298ad-b1b8-4936-9420-415a2152304a",
            "IsActive": true,
            "ResourceId": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
            "CategoryId": "aaed6e21-1c1f-4644-9872-e53f96a21bf9",
            "CreatedUtc": "2016-03-29T15:14:06Z",
            "UpdatedUtc": "2016-03-29T15:14:06Z"
        }
    ],
    "ResourceCategoryImageAssignments": [
        {
            "Id": "f3475243-5962-4fb5-bdfd-958f9c65520e",
            "IsActive": true,
            "CategoryId": "aaed6e21-1c1f-4644-9872-e53f96a21bf9",
            "ImageId": "8cd435e0-f024-44a0-84fd-abe300b8ae1c",
            "CreatedUtc": "2016-03-29T15:14:06Z",
            "UpdatedUtc": "2016-03-29T15:14:06Z"
        }
    ],
    "ResourceFeatures": [
        {
            "Id": "a693dd8c-21fe-4dae-b450-ea3bd9ab3bb0",
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
    "ResourceFeatureAssignments": [
        {
            "Id": "ca2b5bf9-24f5-4faa-95ef-b65d38598b08",
            "IsActive": true,
            "ResourceId": "18019693-c66f-4be8-a893-c3d89fd291cc",
            "FeatureId": "a693dd8c-21fe-4dae-b450-ea3bd9ab3bb0",
            "CreatedUtc": "2016-03-29T15:14:06Z",
            "UpdatedUtc": "2016-03-29T15:14:06Z"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Resources` | array of [Resource](#resource) | optional | The resources of the enterprise. |
| ~~`ResourceCategories`~~ | ~~array of [Resource category](#resource-category)~~ | ~~optional~~ | ~~Categories of resources in the enterprise.~~ **Deprecated!** |
| `ResourceCategoryAssignments` | array of [Resource category assignment](#resource-category-assignment) | optional | Assignments of resources to categories. |
| `ResourceCategoryImageAssignments` | array of [Resource category assignment](#resource-category-image-assignment) | optional | Assignments of images to categories. |
| `ResourceFeatures` | array of [Resource feature](#resource-feature) | optional | Features of resources in the enterprise. |
| `ResourceFeatureAssignments` | array of [Resource feature assignment](#resource-feature-assignment) | optional | Assignments of resource features to resources. |

#### Resource

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the resource. |
| `IsActive` | bool | required | Whether the resource is still active. |
| `Name` | string | required | Name of the resource \(e.g. room number\). |
| `ParentResourceId` | string | optional | Identifier of the parent [Resource](#resource) \(e.g. room of a bed\). |
| `State` | string [Resource state](#resource-state) | required | State of the resource. |
| `Data` | [Resource data](#resource-data) | required | Additional data of the resource. |
| `CreatedUtc` | string | required | Creation date and time of the resource in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the resource in UTC timezone in ISO 8601 format. |

#### Resource state

* `Dirty`
* `Clean`
* `Inspected`
* `OutOfService`
* `OutOfOrder`

#### Resource data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Resource data discriminator](#resource-data-discriminator) | required | If resource is space, object or person. |
| `Value` | object | required | Based on Resource data discriminator, e.g. [Space resource data](#space-resource-data)  |

#### Resource data discriminator

* `Space`
* `Object`
* `Person`

#### Space resource data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FloorNumber` | string | required | Number of the floor the space is on. |
| `LocationNotes` | string | optional | Location notes for the space. It can be eg. Building number the space is located in or the Parking area the particular parking space is at. |

#### Object resource data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |

#### Person resource data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |

#### Resource category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `IsActive` | bool | required | Whether the category is still active. |
| `Type` | string [Resource category type](#resource-category-type) | required | Type of the category. |
| `Names` | [Localized text](#localized-text) | required | All translations of the name. |
| `ShortNames` | [Localized text](#localized-text) | required | All translations of the short name. |
| `Descriptions` | [Localized text](#localized-text) | required | All translations of the description. |
| `Ordering` | number | required | Ordering of the category, lower number corresponds to lower category \(note that uniqueness nor continuous sequence is guaranteed\). |
| `Capacity` | number | required | Capacity that can be served \(e.g. bed count\). |
| `ExtraCapacity` | number | required | Extra capacity that can be served \(e.g. extra bed count\). |
| `ExternalIdentifier` | string | optional, max 255 characters | Identifier of the resource category from external system. |

#### Resource category type

* `Room`
* `Dorm`
* `Bed`
* ...

#### Resource category assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | bool | required | Whether the assignment is still active. |
| `CategoryId` | string | required | Unique identifier of the [Resource category](#resource-category). |
| `ResourceId` | string | required | Unique identifier of the [Resource](#resource) assigned to the Resource category. |
| `CreatedUtc` | string | required | Creation date and time of the assignment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the assignment in UTC timezone in ISO 8601 format. |

#### Resource category image assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | bool | required | Whether the assignment is still active. |
| `CategoryId` | string | required | Unique identifier of the [Resource category](#resource-category). |
| `ImageId` | string | required | Unique identifier of the image assigned to the Resource category. |
| `CreatedUtc` | string | required | Creation date and time of the assignment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the assignment in UTC timezone in ISO 8601 format. |

#### Localized text

An object where keys are the [Language](languages.md#language) codes and values texts in respective languages.

#### Resource feature

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the feature. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `IsActive` | bool | required | Whether the resource feature is still active. |
| `Classification` | string [Resource feature classification](#resource-feature-classification) | required | Classification of the feature. |
| `Names` | [Localized text](#localized-text) | required | All translations of the name. |
| `ShortNames` | [Localized text](#localized-text) | required | All translations of the short name. |
| `Descriptions` | [Localized text](#localized-text) | required | All translations of the description. |

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

#### Resource feature assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | bool | required | Whether the assignment is still active. |
| `ResourceId` | string | required | Unique identifier of the [Resource](#resource). |
| `FeatureId` | string | required | Unique identifier of the [Resource feature](#resource-feature) assigned to the Resource. |
| `CreatedUtc` | string | required | Creation date and time of the assignment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the assignment in UTC timezone in ISO 8601 format. |

## Update resources

Updates details of the resources.

### Request

`[PlatformAddress]/api/connector/v1/resources/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ResourceUpdates": [
        {
            "ResourceId": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
            "Name": {
                "Value": "0101"
            },
            "ParentResourceId": null,
            "Data": 
            {
                "Discriminator": "Space",
                "Value": {
                    "FloorNumber": {
                        "Value": "1"
                    },
                    "LocationNotes": {
                        "Value": "A1"
                    }
                }
            },
            "State": {
                "Value": "Clean"
            },
            "StateReason": {
                "Value": "Sample reason"
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ResourceUpdates` | array of [Resource update](#resource-update) | required | Resource updates. |

#### Resource update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceId` | string | required | Unique identifier of the [Resource](#resource) which is updated. |
| `Name` | [String update value](_objects.md#string-update-value) | optional | New name of the resource \(e.g. room number\). |
| `ParentResourceId` | [String update value](_objects.md#string-update-value) | optional | Identifier of the new parent [Resource](#resource). |
| `Data` | [Resource data update](#resource-data-update) | optional | New additional data of the resource. |
| `State` | [String update value](_objects.md#string-update-value) | optional | New [Resource state](#resource-state) except `OutOfOrder`. |
| `StateReason` | [String update value](_objects.md#string-update-value) | optional | New reason for the state of the resource. |

#### Resource data update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Resource data discriminator](#resource-data-discriminator) | required | Defines the type of the resource. |
| `Value` | object | required | Based on Resource data discriminator, e.g. [Space resource data update](#space-resource-data-update) |

#### Space resource data update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FloorNumber` | [String update value](_objects.md#string-update-value) | required | New number of the floor the space is on. |
| `LocationNotes` | [String update value](_objects.md#string-update-value) | optional | New location notes for the space. |

### Response

```javascript
{}
```
