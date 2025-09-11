<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Resources

## Get all resources

Returns all resources of an enterprise associated with the connector integration. Note that when any of the extents is set to `true`, the response contains the entities that are associated to a resource. If the extent is not associated to a resource (e.g. resource category not assigned to any resource), this information is not returned.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/resources/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ResourceIds": [
    "20e00c32-d561-4008-8609-82d8aa525714",
    "1ec29188-01ca-4294-9983-fac59f85a448",
    "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
  ],
  "Names": [
    "101",
    "102",
    "Suite 1"
  ],
  "Extent": {
    "Resources": true,
    "ResourceCategories": false,
    "ResourceCategoryAssignments": false,
    "ResourceCategoryImageAssignments": false,
    "ResourceFeatures": false,
    "ResourceFeatureAssignments": false,
    "Inactive": false
  },
  "CreatedUtc": {
    "StartUtc": "2023-01-01T00:00:00Z",
    "EndUtc": "2023-12-31T23:59:59Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2023-06-01T00:00:00Z",
    "EndUtc": "2023-06-30T23:59:59Z"
  },
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "Limitation": {
    "Count": 100
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ResourceIds` | array of string | optional, max 1000 items | Unique identifiers of the requested `Resource`. |
| `Names` | array of string | optional, max 1000 items | Names of the requested `Resource`. |
| `Extent` | [Resource extent](resources.md#resource-extent) | required | Extent of data to be returned. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Resource` were created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Resource` were updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

#### Resource extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Resources` | boolean | optional | Whether the response should contain resources. |
| `Inactive` | boolean | optional | Whether the response should contain inactive entities. |
| ~~`ResourceCategories`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain categories.~~ **Deprecated!** Use `resourceCategories/getAll`|
| ~~`ResourceCategoryAssignments`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain assignments of the resources to categories.~~ **Deprecated!** Use `resourceCategoryAssignments/getAll`|
| ~~`ResourceCategoryImageAssignments`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain assignments of the images to categories.~~ **Deprecated!** Use `resourceCategoryImageAssignments/getAll`|
| ~~`ResourceFeatures`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain resource features.~~ **Deprecated!** Use `resourceFeatures/getAll`|
| ~~`ResourceFeatureAssignments`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain assignments of the resources to features.~~ **Deprecated!** Use `resourceFeatureAssignments/getAll`|

### Response

```javascript
{
  "Resources": [
    {
      "Id": "20e00c32-d561-4008-8609-82d8aa525714",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IsActive": true,
      "ParentResourceId": null,
      "Name": "101",
      "State": "Clean",
      "Descriptions": {
        "en-US": "Standard room with city view"
      },
      "CreatedUtc": "2023-01-15T10:30:00Z",
      "UpdatedUtc": "2023-06-15T14:20:00Z",
      "Data": {
        "Discriminator": "Space",
        "Value": {
          "FloorNumber": "1",
          "LocationNotes": "Building A, near elevator"
        }
      },
      "ExternalNames": {
        "en-US": "Room 101"
      },
      "Directions": {
        "en-US": "Take elevator to first floor, turn right"
      }
    },
    {
      "Id": "1ec29188-01ca-4294-9983-fac59f85a448",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IsActive": true,
      "ParentResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "Name": "101A",
      "State": "Inspected",
      "Descriptions": {
        "en-US": "Bed in room 101"
      },
      "CreatedUtc": "2023-01-15T10:35:00Z",
      "UpdatedUtc": "2023-06-15T14:25:00Z",
      "Data": {
        "Discriminator": "Object",
        "Value": {}
      },
      "ExternalNames": {
        "en-US": "Bed A"
      },
      "Directions": {
        "en-US": "Located in room 101"
      }
    },
    {
      "Id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IsActive": true,
      "ParentResourceId": null,
      "Name": "Suite 1",
      "State": "Dirty",
      "Descriptions": {
        "en-US": "Luxury suite with ocean view"
      },
      "CreatedUtc": "2023-02-01T09:00:00Z",
      "UpdatedUtc": "2023-06-20T16:45:00Z",
      "Data": {
        "Discriminator": "Space",
        "Value": {
          "FloorNumber": "5",
          "LocationNotes": "Penthouse level, private elevator access"
        }
      },
      "ExternalNames": {
        "en-US": "Presidential Suite"
      },
      "Directions": {
        "en-US": "Private elevator to penthouse level"
      }
    }
  ],
  "ResourceCategories": null,
  "ResourceCategoryAssignments": null,
  "ResourceCategoryImageAssignments": null,
  "ResourceFeatures": null,
  "ResourceFeatureAssignments": null,
  "Cursor": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Resources` | array of [Resource](resources.md#resource) | optional | The resources of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. `null`, then the latest or most recent items will be returned. |
| ~~`ResourceCategories`~~ | ~~array of [Resource category](resources.md#resource-category)~~ | ~~optional~~ | ~~Categories of resources in the enterprise.~~ **Deprecated!** |
| ~~`ResourceCategoryAssignments`~~ | ~~array of [Resource category assignment](resourcecategories.md#resource-category-assignment)~~ | ~~optional~~ | ~~Assignments of resources to categories.~~ **Deprecated!** |
| ~~`ResourceCategoryImageAssignments`~~ | ~~array of [Resource category image assignment](resourcecategories.md#resource-category-image-assignment)~~ | ~~optional~~ | ~~Assignments of images to categories.~~ **Deprecated!** |
| ~~`ResourceFeatures`~~ | ~~array of [Resource feature](resourcefeatures.md#resource-feature)~~ | ~~optional~~ | ~~Features of resources in the enterprise.~~ **Deprecated!** |
| ~~`ResourceFeatureAssignments`~~ | ~~array of [Resource feature assignment](resourcefeatures.md#resource-feature-assignment)~~ | ~~optional~~ | ~~Assignments of resource features to resources.~~ **Deprecated!** |

#### Resource

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the resource. |
| `EnterpriseId` | string | required | Unique identifier of the `Enterprise`. |
| `IsActive` | boolean | required | Whether the resource is still active. |
| `ParentResourceId` | string | optional | Identifier of the parent `Resource` (e.g. room of a bed). |
| `Name` | string | required | Name of the resource (e.g. room number). |
| `State` | [Resource state](resources.md#resource-state) | required | State of the resource. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | required | All translations of the description. |
| `CreatedUtc` | string | required | Creation date and time of the resource in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the resource in UTC timezone in ISO 8601 format. |
| `Data` | [Resource data](resources.md#resource-data) | required | Additional data of the resource. |
| `ExternalNames` | [Localized text](_objects.md#localized-text) | required | All translations of external name. |
| `Directions` | [Localized text](_objects.md#localized-text) | required | All translations of direction. |

#### Resource state

* `Dirty`
* `Clean`
* `Inspected`
* `OutOfService`
* `OutOfOrder`

#### Resource data
Additional data of the resource.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Resource data discriminator](resources.md#resource-data-discriminator) | required | Whether the resource is space, object, or person. |
| `Value` | object | required | Based on `Discriminator`. Currently present only for `Space` resources with [Space resource data](resources.md#space-resource-data). |

#### Resource data discriminator

* `Space`
* `Object`
* `Person`

#### Space resource data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FloorNumber` | string | required | Number of the floor the space is on. |
| `LocationNotes` | string | optional | Location notes for the space. It can be, for example, Building number the space is located in or the Parking area the particular parking space is at. |

#### Resource category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `EnterpriseId` | string | required | Unique identifier of the `Enterprise`. |
| `ServiceId` | string | required | Unique identifier of the `Service` of the resource category. |
| `IsActive` | boolean | required | Whether the category is still active. |
| `Type` | [Resource category type](resources.md#resource-category-type) | required | Type of the category. |
| `Classification` | [Resource classification](resourcefeatures.md#resource-feature-classification) | required | Classification of the resource category. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name. |
| `ShortNames` | [Localized text](_objects.md#localized-text) | required | All translations of the short name. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | required | All translations of the description. |
| `Ordering` | integer | required | Ordering of the category, lower number corresponds to lower category (note that neither uniqueness nor continuous sequence is guaranteed). |
| `Capacity` | integer | required | Capacity that can be served (e.g. bed count). |
| `ExtraCapacity` | integer | required | Extra capacity that can be served (e.g. extra bed count). |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the resource category from external system. |
| `AccountingCategoryId` | string | optional | Unique identifier of the accounting category. |

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
* `Bike`
* `ExtraBed`
* `Cot`
* `Crib`
* `ConferenceRoom`
* `Rooftop`
* `Garden`
* `Restaurant`
* `Amphitheater`
* `PrivateSpaces`

## Get resources&#x27; occupancy state

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns the occupancy state of the specified resources. This operation returns the occupancy state for the current day. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/resources/getOccupancyState`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ResourceCategoryIds": [
    "773d5e42-de1e-43a0-9ce6-f940faf2303f"
  ],
  "ResourceStates": [
    "Clean",
    "Inspected"
  ],
  "OccupancyStates": [
    "Vacant",
    "Reserved"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ResourceCategoryIds` | array of string | required, max 5 items | Unique identifiers of the `ResourceCategory`. |
| `ResourceStates` | array of [Resource state](resources.md#resource-state) | optional | States of the `Resource` |
| `OccupancyStates` | array of [Occupancy state](resources.md#occupancy-state) | optional | Occupancy states of the `Resource`. |

### Response

```javascript
{
  "ResourceCategoryOccupancyStates": [
    {
      "ResourceCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "ResourceOccupancyStates": [
        {
          "ResourceId": "f3b3b3b3-3b3b-3b3b-3b3b-3b3b3b3b3b3b",
          "ResourceState": "Inspected",
          "OccupancyState": "Reserved"
        },
        {
          "ResourceId": "c32386aa-1cd2-414a-a823-489325842fbe",
          "ResourceState": "Inspected",
          "OccupancyState": "Vacant"
        }
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceCategoryOccupancyStates` | array of [Resource category occupancy state](resources.md#resource-category-occupancy-state) | required | The resource categories. |

#### Resource category occupancy state
The list of `ResourceOccupancyState`s grouped by resource category.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceCategoryId` | string | required | Unique identifier of the 'Resource category'. |
| `ResourceOccupancyStates` | array of [Resource occupancy state](resources.md#resource-occupancy-state) | required | The resource occupancy states. |

#### Resource occupancy state
The occupancy state of a `Resource`.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceId` | string | required | Unique identifier of the resource. |
| `ResourceState` | [Resource state](resources.md#resource-state) | required | Resource state of the resource. |
| `OccupancyState` | [Occupancy state](resources.md#occupancy-state) | required | State of the resource. |

#### Occupancy state

* `Vacant`
* `ReservedLocked`
* `Reserved`
* `InternalUse`
* `OutOfOrder`

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
      "ResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "Name": {
        "Value": "101 Updated"
      },
      "Data": {
        "Discriminator": "Space",
        "Value": {
          "FloorNumber": {
            "Value": "2"
          },
          "LocationNotes": {
            "Value": "Updated location notes"
          }
        }
      },
      "State": {
        "Value": "Inspected"
      },
      "StateReason": {
        "Value": "Room inspection completed"
      }
    },
    {
      "ResourceId": "1ec29188-01ca-4294-9983-fac59f85a448",
      "Name": {
        "Value": "102"
      },
      "ParentResourceId": {
        "Value": "20e00c32-d561-4008-8609-82d8aa525714"
      },
      "State": {
        "Value": "Clean"
      }
    },
    {
      "ResourceId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "State": {
        "Value": "OutOfService"
      },
      "StateReason": {
        "Value": "Maintenance required"
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
| `ResourceUpdates` | array of [Resource update](resources.md#resource-update) | required, max 1000 items | Resource updates. |

#### Resource update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceId` | string | required | Unique identifier of the `Resource` which is updated. |
| `Name` | [String update value](_objects.md#string-update-value) | optional | New name of the resource (e.g. room number). |
| `ParentResourceId` | [String update value](_objects.md#string-update-value) | optional | Identifier of the new parent `Resource`. |
| `Data` | [Resource data update](resources.md#resource-data-update) | required |  |
| `State` | [String update value](_objects.md#string-update-value) | optional | New `ResourceState` except `OutOfOrder`. |
| `StateReason` | [String update value](_objects.md#string-update-value) | optional | New reason for the state of the resource. |

#### Resource data update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Resource data discriminator](resources.md#resource-data-discriminator) | required | Whether the resource is space, object, or person. |
| `Value` | object | required | Based on `Discriminator`. Currently supported only for `Space` resources with [Space resource data update](resources.md#space-resource-data-update). |

#### Space resource data update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FloorNumber` | [String update value](_objects.md#string-update-value) | optional | New number of the floor the space is on. |
| `LocationNotes` | [String update value](_objects.md#string-update-value) | optional | New location notes for the space. |

### Response

```javascript
{}
```
