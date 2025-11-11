<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Routing rules

## ~~Get all routing rules~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md). Use [Get all billing automations](billingautomations.md#get-all-billing-automations).

### Request

`[PlatformAddress]/api/connector/v1/routingRules/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CompanyIds": [
    "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
    "956aa0f0-a090-42c8-bee2-991972d32f80"
  ],
  "RoutingRuleIds": [
    "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
    "d98c9611-0006-4691-a835-af2e00b170c4"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-10-01T00:00:00Z",
    "EndUtc": "2023-10-31T00:00:00Z"
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
| `CompanyIds` | array of string | optional, max 1000 items | Unique identifier of the `Company`. |
| `RoutingRuleIds` | array of string | optional, max 1000 items | Unique identifier of the routing rules. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the routing rules were updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "RoutingRules": [
    {
      "Id": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
      "CompanyRelation": "PartnerCompany",
      "Applicability": "PrepaidOnly",
      "RouteType": "AllStayItems",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "SelectedStayItems": null,
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    },
    {
      "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CompanyId": "c021013e-4930-4592-8e32-91b0b1fc9663",
      "CompanyRelation": "TravelAgency",
      "Applicability": "Always",
      "RouteType": "SelectedStayItems",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "SelectedStayItems": {
        "Nights": true,
        "CityTax": true,
        "ProductCategoryIds": [
          "004fa262-7b08-4853-b544-af2a00d5cf1f",
          "8f0dc6ef-1fd4-44e4-b353-af2c00b24caf",
          "d4c1b435-0ed1-4d98-9833-af2c00b28518"
        ]
      },
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    }
  ],
  "Cursor": "d98c9611-0006-4691-a835-af2e00b170c4"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rule](routingrules.md#routing-rule) | required, max 1000 items | Collection of routing rules. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Routing rule

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the routing rule. |
| `EnterpriseId` | string | required | Unique identifier of the Enterprise. |
| `CompanyId` | string | required | Unique identifier of the Company routing rule is assigned to. |
| `CompanyRelation` | [Company relation](routingrules.md#company-relation) | required | Relation of the company to the routing rule. |
| `Applicability` | [Applicability](routingrules.md#applicability) | required | Determines if routing rule applies to all future reservations with this company or travel agency, or only future reservations that are prepaid. |
| `RouteType` | [Route type](routingrules.md#route-type) | required | Determines to which stay items the routing rule applies. |
| `ServiceId` | string | required | Unique identifier of the Service routing rule is assigned to. |
| `SelectedStayItems` | [Selected stay items](routingrules.md#selected-stay-items) | optional | Specific items to which the routing rule applies. Returns only if `RouteType` value is `SelectedStayItems`. |
| `CreatedUtc` | string | required | Creation date and time of the routing rule in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the routing rule in UTC timezone in ISO 8601 format. |

#### Company relation

* `PartnerCompany`
* `TravelAgency`

#### Applicability

* `Always`
* `PrepaidOnly`

#### Route type

* `AllStayItems`
* `SelectedStayItems`

#### Selected stay items

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Nights` | boolean | required | Whether the routing rule applies to nights. |
| `CityTax` | boolean | required | Whether the routing rule applies to city tax. |
| `ProductCategoryIds` | array of string | optional | Product categories to which the routing rule applies to. |

## ~~Add routing rules~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md). Use [Add billing automations](billingautomations.md#add-billing-automations).

### Request

`[PlatformAddress]/api/connector/v1/routingRules/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "RoutingRules": [
    {
      "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "CompanyRelation": "PartnerCompany",
      "Applicability": "PrepaidOnly",
      "RouteType": "AllStayItems"
    },
    {
      "CompanyId": "c021013e-4930-4592-8e32-91b0b1fc9663",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "CompanyRelation": "TravelAgency",
      "Applicability": "Always",
      "RouteType": "SelectedStayItems",
      "AssignmentTargetType": "CompanyAsDetails",
      "SelectedStayItems": {
        "Nights": true,
        "CityTax": true,
        "ProductCategoryIds": [
          "004fa262-7b08-4853-b544-af2a00d5cf1f",
          "8f0dc6ef-1fd4-44e4-b353-af2c00b24caf",
          "d4c1b435-0ed1-4d98-9833-af2c00b28518"
        ]
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
| `RoutingRules` | array of [Routing rule parameters](routingrules.md#routing-rule-parameters) | required, max 1000 items | Collection of Routing rules to be added. |

#### Routing rule parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CompanyId` | string | required | Unique identifier of the Company routing rule is assigned to. |
| `ServiceId` | string | required | Unique identifier of the Service routing rule is assigned to. |
| `CompanyRelation` | [Company relation](routingrules.md#company-relation) | required | Relation of the company to the routing rule. |
| `Applicability` | [Applicability](routingrules.md#applicability) | required | Determines if routing rule applies to all future reservations with this company or travel agency, or only future reservations that are prepaid. |
| `RouteType` | [Route type](routingrules.md#route-type) | required | Determines to which stay items the routing rule applies. |
| `AssignmentTargetType` | [Assignment target type](routingrules.md#assignment-target-type) | optional | Relation of company to the bill. Defaults to `CompanyAsDetails`. |
| `SelectedStayItems` | [Selected stay items parameters](routingrules.md#selected-stay-items-parameters) | optional | To which stay items routing rule applies to. Required only if `RouteType` value is `SelectedStayItems`. |

#### Assignment target type

* `CompanyAsDetails`
* `CompanyAsOwner`

#### Selected stay items parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Nights` | boolean | required | Whether the routing rule applies to nights. |
| `CityTax` | boolean | required | Whether the routing rule applies to city tax. |
| `ProductCategoryIds` | array of string | optional | Product categories to which the routing rule applies to. |

### Response

```javascript
{
  "RoutingRules": [
    {
      "Id": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
      "CompanyRelation": "PartnerCompany",
      "Applicability": "PrepaidOnly",
      "RouteType": "AllStayItems",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "SelectedStayItems": null,
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    },
    {
      "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CompanyId": "c021013e-4930-4592-8e32-91b0b1fc9663",
      "CompanyRelation": "TravelAgency",
      "Applicability": "Always",
      "RouteType": "SelectedStayItems",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "SelectedStayItems": {
        "Nights": true,
        "CityTax": true,
        "ProductCategoryIds": [
          "004fa262-7b08-4853-b544-af2a00d5cf1f",
          "8f0dc6ef-1fd4-44e4-b353-af2c00b24caf",
          "d4c1b435-0ed1-4d98-9833-af2c00b28518"
        ]
      },
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rule](routingrules.md#routing-rule) | required, max 1000 items | Added routing rules. |

## ~~Update routing rules~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md). Use [Update billing automations](billingautomations.md#update-billing-automations) and [Update billing automations assignments](billingautomations.md#update-billing-automations-assignments).

### Request

`[PlatformAddress]/api/connector/v1/routingRules/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "RoutingRuleUpdates": [
    {
      "RoutingRuleId": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
      "CompanyId": {
        "Value": "c021013e-4930-4592-8e32-91b0b1fc9663"
      },
      "ServiceId": {
        "Value": "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
      },
      "CompanyRelation": {
        "Value": "PartnerCompany"
      },
      "Applicability": {
        "Value": "Always"
      },
      "RouteType": {
        "Value": "AllStayItems"
      }
    },
    {
      "RoutingRuleId": "d98c9611-0006-4691-a835-af2e00b170c4",
      "CompanyId": {
        "Value": "a793d381-65a2-4fa6-9514-00c4c5bfe607"
      },
      "ServiceId": {
        "Value": "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
      },
      "CompanyRelation": {
        "Value": "TravelAgency"
      },
      "Applicability": {
        "Value": "Always"
      },
      "RouteType": {
        "Value": "SelectedStayItems"
      },
      "AssignmentTargetType": {
        "Value": "CompanyAsDetails"
      },
      "SelectedStayItems": {
        "Nights": {
          "Value": false
        },
        "CityTax": {
          "Value": true
        },
        "ProductCategoryIds": {
          "Value": [
            "004fa262-7b08-4853-b544-af2a00d5cf1f"
          ]
        }
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
| `RoutingRuleUpdates` | array of [Routing rule update parameters](routingrules.md#routing-rule-update-parameters) | required, max 1000 items | Collection of Routing rules to be updated. |

#### Routing rule update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRuleId` | string | required | Unique identifier of the routing rule. |
| `CompanyId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the Company (or null should it not be updated). |
| `ServiceId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the Service routing rule is assigned to (or null should it not be updated). |
| `CompanyRelation` | [Company relation](routingrules.md#company-relation) | optional | Company relation to the routing rule (or null should it not be updated). |
| `Applicability` | [Applicability](routingrules.md#applicability) | optional | Applicability that determines if routing rule apply to all future reservations with this company or travel agency attached or only future reservations that are prepaid in online travel agency (OTA) (or null should it not be updated). |
| `RouteType` | [Route type](routingrules.md#route-type) | optional | What should be routed Route type (or null should it not be updated). |
| `AssignmentTargetType` | [Assignment target type](routingrules.md#assignment-target-type) | optional | Relation of company to the bill Assignment target type (or null should it not be updated). |
| `SelectedStayItems` | [Selected stay items update parameters](routingrules.md#selected-stay-items-update-parameters) | optional | To which stay items routing rule applies to. Required only if `RouteType` value is `SelectedStayItems`. |

#### Selected stay items update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Nights` | [Bool update value](_objects.md#bool-update-value) | optional | Whether the routing rule applies to nights (or null should it not be updated). |
| `CityTax` | [Bool update value](_objects.md#bool-update-value) | optional | Whether the routing rule applies to city tax (or null should it not be updated). |
| `ProductCategoryIds` | [Guid array update value](_object.md#array-of-strings-update-value) | optional | Product categories to which the routing rule applies to (or null should it not be updated). |

### Response

```javascript
{
  "RoutingRules": [
    {
      "Id": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
      "CompanyRelation": "PartnerCompany",
      "Applicability": "PrepaidOnly",
      "RouteType": "AllStayItems",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "SelectedStayItems": null,
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    },
    {
      "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CompanyId": "c021013e-4930-4592-8e32-91b0b1fc9663",
      "CompanyRelation": "TravelAgency",
      "Applicability": "Always",
      "RouteType": "SelectedStayItems",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "SelectedStayItems": {
        "Nights": true,
        "CityTax": true,
        "ProductCategoryIds": [
          "004fa262-7b08-4853-b544-af2a00d5cf1f",
          "8f0dc6ef-1fd4-44e4-b353-af2c00b24caf",
          "d4c1b435-0ed1-4d98-9833-af2c00b28518"
        ]
      },
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rule](routingrules.md#routing-rule) | required, max 1000 items | Updated routing rules. |

## ~~Delete routing rules~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md). Use [Delete billing automations](billingautomations.md#delete-billing-automations).

### Request

`[PlatformAddress]/api/connector/v1/routingRules/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "RoutingRuleIds": [
    "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
    "d98c9611-0006-4691-a835-af2e00b170c4"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RoutingRuleIds` | array of string | required, max 1000 items | Unique identifiers of the routing rules to be deleted. |

### Response

```javascript
{}
```
