# Resources

## Get all resources

Returns all resources of an enterprise associated with the connector integration. Note that when any of the extents is set to &#x60;true&#x60;, the response contains the entities that are associated to a resource. If the extent is not associated to a resource (e.g. resource category not assigned to any resource), this information is not returned.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/resources/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ResourceIds": [
    "5ee074b1-6c86-48e8-915f-c7aa4702086f",
    "c32386aa-1cd2-414a-a823-489325842fbe"
  ],
  "CreatedUtc": {
    "StartUtc": "2022-10-15T00:00:00Z",
    "EndUtc": "2022-10-20T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2022-10-15T00:00:00Z",
    "EndUtc": "2022-10-20T00:00:00Z"
  },
  "Extent": {
    "Resources": true,
    "ResourceCategories": false,
    "ResourceCategoryAssignments": false,
    "ResourceCategoryImageAssignments": false,
    "ResourceFeatures": false,
    "ResourceFeatureAssignments": false,
    "Inactive": false
  },
  "Limitation": {
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ResourceIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Resources](https://mews-systems.gitbook.io/connector-api/operations/#resource). |
| `Names` | array of string | optional |  |
| `Extent` | object | required | Extent of data to be returned. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |

#### ResourceExtent
Extent of data to be returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Resources` | boolean | required |  |
| ~~`ResourceCategories`~~ | boolean | required |  |
| ~~`ResourceCategoryAssignments`~~ | boolean | required |  |
| ~~`ResourceCategoryImageAssignments`~~ | boolean | required |  |
| ~~`ResourceFeatures`~~ | boolean | required |  |
| ~~`ResourceFeatureAssignments`~~ | boolean | required |  |
| `Inactive` | boolean | required |  |

### Response

```javascript
{
  "Resources": [
    {
      "Id": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
      "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
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
      "Id": "aaed6e21-1c1f-4644-9872-e53f96a21bf9"
    },
    {
      "ServiceId": "24e2ead5-65a8-4ed9-8286-abdb00f08a1f"
    },
    {
      "IsActive": true
    },
    {
      "Names": {
        "en-US": "Best Room"
      }
    },
    {
      "ShortNames": {
        "en-US": "BR"
      }
    },
    {
      "Descriptions": {}
    },
    {
      "Ordering": 0
    },
    {
      "Capacity": 2
    },
    {
      "ExtraCapacity": 0
    },
    {
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
  ],
  "Cursor": "c32386aa-1cd2-414a-a823-489325842fbe"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Resources` | array of [Resource](#Resource) | optional | The resources of the enterprise. |
| ~~`ResourceCategories`~~ | array of [Resource category](#ResourceCategory) | optional | Categories of resources in the enterprise. **Deprecated!** |
| ~~`ResourceCategoryAssignments`~~ | array of [Resource category assignment](#ResourceCategoryAssignment) | optional | Assignments of resources to categories. **Deprecated!** |
| ~~`ResourceCategoryImageAssignments`~~ | array of [Resource category image assignment](#ResourceCategoryImageAssignment) | optional | Assignments of images to categories. **Deprecated!** |
| ~~`ResourceFeatures`~~ | array of [Resource feature](#ResourceFeature) | optional | Features of resources in the enterprise. **Deprecated!** |
| ~~`ResourceFeatureAssignments`~~ | array of [Resource feature assignment](#ResourceFeatureAssignment) | optional | Assignments of resource features to resources. **Deprecated!** |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Resource

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the resource. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `IsActive` | boolean | required | Whether the resource is still active. |
| `ParentResourceId` | string | optional | Identifier of the parent [Resource](https://mews-systems.gitbook.io/connector-api/operations/#resource) (e.g. room of a bed). |
| `Name` | string | optional | Name of the resource (e.g. room number). |
| `State` | string | optional | State of the resource. |
| `Descriptions` | object | optional |  |
| `CreatedUtc` | string | optional | Creation date and time of the resource in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | optional | Last update date and time of the resource in UTC timezone in ISO 8601 format. |
| `Data` | object | required | Additional data of the resource. |

#### Data
Additional data of the resource.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | string | required |  |
| `value` | undefined | required |  |

#### Resource category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) of the resource category. |
| `IsActive` | boolean | required | Whether the category is still active. |
| `Type` | [ResourceCategoryType](#X-Ref-Name-ResourceCategoryType) | required |  |
| `Classification` | [ResourceClassification](#X-Ref-Name-ResourceClassification) | required |  |
| `Names` | object | required | All translations of the name. |
| `ShortNames` | object | required | All translations of the short name. |
| `Descriptions` | object | required | All translations of the description. |
| `Ordering` | integer | required |  |
| `Capacity` | integer | required |  |
| `ExtraCapacity` | integer | required | Extra capacity that can be served (e.g. extra bed count). |
| `ExternalIdentifier` | string | optional | Identifier of the resource category from external system. |

#### ResourceCategoryType

- `Room`
- `Bed`
- `Dorm`
- `Apartment`
- `Suite`
- `Villa`
- `Site`
- `Office`
- `MeetingRoom`
- `ParkingSpot`
- `Desk`
- `TeamArea`
- `Membership`
- `Tent`
- `CaravanOrRV`
- `UnequippedCampsite`
- `Bike`

#### ResourceCategoryType

- `Room`
- `Bed`
- `Dorm`
- `Apartment`
- `Suite`
- `Villa`
- `Site`
- `Office`
- `MeetingRoom`
- `ParkingSpot`
- `Desk`
- `TeamArea`
- `Membership`
- `Tent`
- `CaravanOrRV`
- `UnequippedCampsite`
- `Bike`

#### ResourceClassification

- `StandardSingle`
- `StandardDouble`
- `SuperiorTwin`
- `SuperiorDouble`
- `JuniorSuite`
- `SharedOrDorm`
- `Other`
- `SuperiorSingle`
- `Triple`
- `Family`
- `StandardTwin`
- `Studio`
- `SuperiorTripleRoom`
- `OneBedroomApartment`
- `ThreeBedroomsApartment`
- `TwoBedroomsApartment`

#### ResourceClassification

- `StandardSingle`
- `StandardDouble`
- `SuperiorTwin`
- `SuperiorDouble`
- `JuniorSuite`
- `SharedOrDorm`
- `Other`
- `SuperiorSingle`
- `Triple`
- `Family`
- `StandardTwin`
- `Studio`
- `SuperiorTripleRoom`
- `OneBedroomApartment`
- `ThreeBedroomsApartment`
- `TwoBedroomsApartment`

#### Resource category assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | boolean | required | Whether the assignment is still active. |
| `ResourceId` | string | required | Unique identifier of the [Resource](https://mews-systems.gitbook.io/connector-api/operations/#resource) assigned to the Resource category. |
| `CategoryId` | string | required | Unique identifier of the [Resource category](https://mews-systems.gitbook.io/connector-api/operations/#resource-category). |
| `CreatedUtc` | string | required | Creation date and time of the assignment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the assignment in UTC timezone in ISO 8601 format. |

#### Resource category image assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | boolean | required | Whether the assignment is still active. |
| `CategoryId` | string | required | Unique identifier of the [Resource category](https://mews-systems.gitbook.io/connector-api/operations/#resource-category). |
| `ImageId` | string | required | Unique identifier of the image assigned to the Resource category. |
| `CreatedUtc` | string | required | Creation date and time of the assignment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the assignment in UTC timezone in ISO 8601 format. |

#### Resource feature

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the feature. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `IsActive` | boolean | required | Whether the resource feature is still active. |
| `Classification` | [ResourceFeatureClassification](#X-Ref-Name-ResourceFeatureClassification) | required |  |
| `Names` | object | required | All translations of the name. |
| `ShortNames` | object | required | All translations of the short name. |
| `Descriptions` | object | required | All translations of the description. |
| `CreatedUtc` | string | required |  |
| `UpdatedUtc` | string | required |  |

#### ResourceFeatureClassification

- `SeaView`
- `RiverView`
- `OceanView`
- `TwinBeds`
- `DoubleBed`
- `RollawayBed`
- `UpperBed`
- `LowerBed`
- `Balcony`
- `AccessibleBathroom`
- `AccessibleRoom`
- `ElevatorAccess`
- `HighFloor`
- `Kitchenette`
- `AirConditioning`
- `PrivateJacuzzi`
- `PrivateSauna`
- `EnsuiteRoom`
- `PrivateBathroom`
- `SharedBathroom`

#### ResourceFeatureClassification

- `SeaView`
- `RiverView`
- `OceanView`
- `TwinBeds`
- `DoubleBed`
- `RollawayBed`
- `UpperBed`
- `LowerBed`
- `Balcony`
- `AccessibleBathroom`
- `AccessibleRoom`
- `ElevatorAccess`
- `HighFloor`
- `Kitchenette`
- `AirConditioning`
- `PrivateJacuzzi`
- `PrivateSauna`
- `EnsuiteRoom`
- `PrivateBathroom`
- `SharedBathroom`

#### Resource feature assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | boolean | required | Whether the assignment is still active. |
| `ResourceId` | string | required | Unique identifier of the [Resource](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource). |
| `FeatureId` | string | required | Unique identifier of the [Resource feature](https://mews-systems.gitbook.io/connector-api/operations/#resource-feature) assigned to the Resource. |
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
      "Data": {
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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `ResourceUpdates` | array of [ResourceUpdateParameters](#ResourceUpdateParameters) | required, max 1000 items | Resource updates. |

#### ResourceUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceId` | string | required |  |
| `Name` | object | required |  |
| `ParentResourceId` | object | required |  |
| `Data` | object | required |  |
| `State` | object | required |  |
| `StateReason` | object | required |  |

#### Data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [ResourceDataDiscriminator](#X-Ref-Name-ResourceDataDiscriminator) | required |  |
| `value` | undefined | required |  |

#### ResourceDataDiscriminator

- `Space`
- `Object`
- `Person`

### Response

```javascript
{}
```
