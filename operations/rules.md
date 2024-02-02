# Rules

## Get all rules

Returns all rules applied with the reservations.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
    "Extent": 
    {
        "RuleActions": true,
        "Rates": true,
        "RateGroups": true,
        "ResourceCategories": true,
        "BusinessSegments": true
    },
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Rule](#rule) was updated. |
| `Extent` | [Rule extent](#rule-extent) | required | Extent of data to be returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### Rule extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RuleActions` | bool | optional | Whether the response should contain rule actions. |
| `Rates` | bool | optional | Whether the response should contain rates. |
| `RateGroups` | bool | optional | Whether the response should contain rate groups. |
| `ResourceCategories` | bool | optional | Whether the response should contain rate resource categories. |
| `BusinessSegments` | bool | optional | Whether the response should contain business segments. |

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
| `Rules` | array of [Rule](#rule) | required | Rules used with reservation creations and modifications. |
| `RuleActions` | array of [Rule action](#rule-action) | required | Rule actions applied in rules. |
| `Rates` | array of [Rate](rates.md#rate) | required | Rates used in conditions. |
| `RateGroups` | array of [Rate group](rates.md#rate-group) | required | Rate groups used in conditions. |
| `ResourceCategories` | array of [Resource category](resources.md#resource-category) | required | Resource categories used in conditions. |
| `BusinessSegments` | array of [Business segment](businesssegments.md#business-segment) | required | Business segments used in conditions. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Rule

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rule. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) the rule is assigned to. |
| `Conditions` | [Rule conditions](#rule-conditions) | required | Conditions of the rule. |
| `CreatedUtc` | string | required | Creation date and time of the rule in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the rule in UTC timezone in ISO 8601 format. |

#### Rule conditions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RateId` | [Rule condition](#rule-condition) | required | Condition based on [Rate](rates.md#rate). |
| `RateGroupId` | [Rule condition](#rule-condition) | required | Condition based on [Rate group](rates.md#rate-group). |
| `BusinessSegmentId` | [Rule condition](#rule-condition) | required | Condition based on [Business segment](businesssegments.md#business-segment). |
| `ResourceCategoryId` | [Rule condition](#rule-condition) | required | Condition based on [Resource category](resources.md#resource-category). |
| `ResourceCategoryType` | [Rule condition](#rule-condition) | required | Condition based on [Resource category type](resources.md#resource-category-type). |
| `Origin` | [Rule condition](#rule-condition) | required | Condition based on [Reservation origin](reservations.md#reservation-origin). |
| `TravelAgencyId` | [Rule condition](#rule-condition) | required | Condition based on [Company](companies.md#company). |
| `MinimumTimeUnitCount` | string | required | Condition based on minimum amount of time units. |
| `MaximumTimeUnitCount` | string | required | Condition based on maximum amount of time units. |

#### Rule condition

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ConditionType` | string [Condition type](#condition-type) | required | Type of condition. |
| `Value` | string | required | Value of the condition depending on the property. E.g. [Reservation origin](reservations.md#reservation-origin) in case of origin condition or unique identifier of a rate in case of rate condition. |

#### Condition type

* `Equals`
* `NotEquals`

#### Rule action

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rule action. |
| `RuleId` | string | required | Unique identifier of the rule. |
| `Data` | [RuleActionData](#rule-aciton-data) | optional | Additional information about action. |

#### Rule action data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Rule action discriminator](#rule-action-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on [Rule action discriminator](#rule-action-discriminator). |

#### Rule action discriminator

* `Product` - Data specific to a product.

#### Rule action product data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required | Unique identifier of product. |
| `ActionType` | string [Product action type](#product-action-type) | required | Action of rule. |

#### Product action type

* `Add` - Adds specified item.
* `Delete` - Deletes specified item.
