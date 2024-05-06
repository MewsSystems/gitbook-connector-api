# Rules

## Get all rules

Returns all rules applied with the reservations.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/rules/getAll`

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
  "UpdatedUtc": {
    "StartUtc": "2023-10-01T00:00:00Z",
    "EndUtc": "2023-10-31T00:00:00Z"
  },
  "Extent": {
    "RuleActions": true,
    "Rates": true,
    "RateGroups": true,
    "ResourceCategories": true,
    "BusinessSegments": true
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
| `EnterpriseIds` | array of string | optional, max 1000 items |  |
| `Ids` | array of string | optional, max 1000 items |  |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `Extent` | object | required | Extent of data to be returned. |

#### RuleExtent
Extent of data to be returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RuleActions` | boolean | required |  |
| `Rates` | boolean | required |  |
| `RateGroups` | boolean | required |  |
| `ResourceCategories` | boolean | required |  |
| `BusinessSegments` | boolean | required |  |

### Response

```javascript
{
  "Rules": [
    {
      "Id": "13638b12-53f1-4b35-baab-ac1e006ed8cb",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "Conditions": {
        "RateId": {
          "Value": "8a13f4e8-0274-4bcc-b2d4-ac1c00d1cd3f",
          "ConditionType": "Equals"
        },
        "RateGroupId": null,
        "BusinessSegmentId": null,
        "ResourceCategoryId": null,
        "ResourceCategoryType": null,
        "Origin": {
          "Value": "Connector",
          "ConditionType": "NotEquals"
        },
        "TravelAgencyId": null,
        "MinimumTimeUnitCount": null,
        "MaximumTimeUnitCount": null
      },
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    }
  ],
  "RuleActions": [
    {
      "Id": "307e75a6-2cc8-4226-a600-ac1e006fbdb9",
      "RuleId": "13638b12-53f1-4b35-baab-ac1e006ed8cb",
      "Data": {
        "Discriminator": "Product",
        "Value": {
          "ProductId": "122fd92d-c561-4995-8ebc-ac1c00d1eaa8",
          "ActionType": "Add"
        }
      }
    }
  ],
  "Rates": [
    {
      "Id": "8a13f4e8-0274-4bcc-b2d4-ac1c00d1cd3f",
      "GroupId": "e4a9d8d1-5793-4d35-954e-ac1c00d1eaa8",
      "ServiceId": "ea80bbca-372f-4550-8e48-ac1c00d1cd20",
      "BaseRateId": null,
      "IsActive": true,
      "IsEnabled": true,
      "IsPublic": true,
      "Name": "Fully Flexible",
      "ShortName": "FF",
      "ExternalNames": {}
    }
  ],
  "RateGroups": [],
  "ResourceCategories": [],
  "BusinessSegments": [],
  "Cursor": "13638b12-53f1-4b35-baab-ac1e006ed8cb"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Rules` | array of [Rule](#Rule) | optional | Rules used with reservation creations and modifications. |
| `RuleActions` | array of [Rule action](#RuleAction) | optional | Rule actions applied in rules. |
| `Rates` | array of [Rate](#Rate) | optional | Rates used in conditions. |
| `RateGroups` | array of [RateGroupOld](#RateGroupOld) | optional | Rate groups used in conditions. |
| `ResourceCategories` | array of [Resource category](#ResourceCategory) | optional | Resource categories used in conditions. |
| `BusinessSegments` | array of [Business segment](#BusinessSegment) | optional | Business segments used in conditions. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Rule

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rule. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) the rule is assigned to. |
| `Conditions` | object | required | Conditions of the rule. |
| `CreatedUtc` | string | required | Creation date and time of the rule in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the rule in UTC timezone in ISO 8601 format. |

#### RuleConditions
Conditions of the rule.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RateId` | object | required |  |
| `RateGroupId` | object | required |  |
| `BusinessSegmentId` | object | required |  |
| `ResourceCategoryId` | object | required |  |
| `ResourceCategoryType` | object | required |  |
| `Origin` | object | required |  |
| `TravelAgencyId` | object | required |  |
| `MinimumTimeUnitCount` | integer | optional |  |
| `MaximumTimeUnitCount` | integer | optional |  |

#### RuleCondition

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | string | optional |  |
| `ConditionType` | [RuleConditionType](#X-Ref-Name-RuleConditionType) | required |  |

#### RuleConditionType

- `Equals`
- `NotEquals`

#### Rule action

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rule action. |
| `RuleId` | string | required | Unique identifier of the rule. |
| `Data` | object | required | Additional information about action. |

#### Data
Additional information about action.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [RuleActionDiscriminator](#X-Ref-Name-RuleActionDiscriminator) | required |  |
| `value` | object | required |  |

#### RuleActionDiscriminator

- `Product`

#### Rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](https://mews-systems.gitbook.io/connector-api/operations/#rate-group) where the rate belongs. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `BaseRateId` | string | optional | Unique identifier of the base [Rate](https://mews-systems.gitbook.io/connector-api/operations/#rate). |
| `BusinessSegmentId` | string | optional | Unique identifier of the [Business segment](https://mews-systems.gitbook.io/connector-api/operations/businesssegments/#business-segment). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsEnabled` | boolean | required | Whether the rate is currently available to customers. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Type` | [RateType](#X-Ref-Name-RateType) | required | Type of the rate |
| `Name` | string | optional | Name of the rate (in the default language). |
| `ShortName` | string | optional | Short name of the rate (in the default language). |
| `UpdatedUtc` | string | required |  |
| `ExternalNames` | object | optional | All translations of the external name of the rate. |
| `Description` | object | optional | All translations of the description of the rate. |
| `ExternalIdentifier` | string | optional | Identifier of the rate from external system. |

#### RateType

- `Public`
- `Private`
- `AvailabilityBlock`

#### RateType

- `Public`
- `Private`
- `AvailabilityBlock`

#### RateGroupOld

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `ServiceId` | string | required |  |
| `IsActive` | boolean | required |  |
| `Name` | string | optional |  |
| `ExternalIdentifier` | string | optional |  |

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

#### Business segment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the segment. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `IsActive` | boolean | required | Whether the business segment is still active. |
| `Name` | string | required | Name of the segment. |
| `CreatedUtc` | string | required | Creation date and time of the business segment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the business segment in UTC timezone in ISO 8601 format. |
