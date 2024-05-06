# Routing rules

## Get all routing rules

Returns all routing rules.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/routingRules/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "RoutingRuleIds": [
    "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
    "d98c9611-0006-4691-a835-af2e00b170c4"
  ],
  "CompanyIds": [
    "cd441e1a-6f19-4960-887a-af2a00d5d5f8",
    "ddc23f8d-131d-44d6-b150-af2a00d5d5f8"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-10-01T00:00:00Z",
    "EndUtc": "2023-10-31T00:00:00Z"
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
| `CompanyIds` | array of string | optional, max 1000 items | Unique identifier of the [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company). |
| `RoutingRuleIds` | array of string | optional, max 1000 items | Unique identifier of the [Routing rule](https://mews-systems.gitbook.io/connector-api/operations/routingrules/#routing-rule). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |

### Response

```javascript
{
  "RoutingRules": [
    {
      "Id": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
      "CompanyId": "35f493d1-6cf7-4132-982a-a5540549c322",
      "CompanyRelation": "PartnerCompany",
      "ServiceId": "708b3509-69ad-4a92-841b-d81f103edcee",
      "Applicability": "Always",
      "RouteType": "AllStayItems",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    },
    {
      "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
      "CompanyId": "73a1fc8e-11c5-4019-b296-9234b651fc68",
      "CompanyRelation": "TravelAgency",
      "ServiceId": "708b3509-69ad-4a92-841b-d81f103edcee",
      "Applicability": "Always",
      "RouteType": "SelectedStayItems",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "SelectedStayItems": {
        "Nights": false,
        "CityTax": true,
        "ProductCategoryIds": [
          "004fa262-7b08-4853-b544-af2a00d5cf1f"
        ]
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rule](#RoutingRule) | required, max 1000 items | Collection of Routing rules. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Routing rule

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the routing rule. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `CompanyId` | string | required | Unique identifier of the [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) routing rule is assigned to. |
| `CompanyRelation` | [RoutingRuleCompanyRelation](#X-Ref-Name-RoutingRuleCompanyRelation) | required |  |
| `Applicability` | [RoutingRuleApplicability](#X-Ref-Name-RoutingRuleApplicability) | required |  |
| `RouteType` | [RoutingRuleRouteType](#X-Ref-Name-RoutingRuleRouteType) | required |  |
| `ServiceId` | string | optional | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) routing rule is assigned to. |
| `SelectedStayItems` | object | required | Specific items to which the routing rule applies. Returns only if RouteType value is SelectedStayItems. |
| `CreatedUtc` | string | required | Creation date and time of the routing rule in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the routing rule in UTC timezone in ISO 8601 format. |

#### RoutingRuleCompanyRelation

- `PartnerCompany`
- `TravelAgency`

#### RoutingRuleApplicability

- `Always`
- `PrepaidOnly`

#### RoutingRuleRouteType

- `AllStayItems`
- `SelectedStayItems`

#### RoutingRuleStayItems
Specific items to which the routing rule applies. Returns only if RouteType value is SelectedStayItems.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Nights` | boolean | required |  |
| `CityTax` | boolean | required |  |
| `ProductCategoryIds` | array of string | optional |  |

## Add routing rules

Adds a new routing rules.

### Request

`[PlatformAddress]/api/connector/v1/routingRules/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "RoutingRules": [
    {
      "CompanyId": "cd441e1a-6f19-4960-887a-af2a00d5d5f8",
      "CompanyRelation": "PartnerCompany",
      "ServiceId": "0907a1b4-ef7a-4aa8-b8a1-af2a00d5ca22",
      "Applicability": "PrepaidOnly",
      "RouteType": "AllStayItems"
    },
    {
      "CompanyId": "ddc23f8d-131d-44d6-b150-af2a00d5d5f8",
      "CompanyRelation": "TravelAgency",
      "ServiceId": "0907a1b4-ef7a-4aa8-b8a1-af2a00d5ca22",
      "Applicability": "Always",
      "RouteType": "SelectedStayItems",
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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `RoutingRules` | array of [RoutingRuleAddParameter](#RoutingRuleAddParameter) | required, max 1000 items | Collection of Routing rules to be added. |

#### RoutingRuleAddParameter

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CompanyId` | string | required |  |
| `ServiceId` | string | required |  |
| `CompanyRelation` | [RoutingRuleCompanyRelation](#X-Ref-Name-RoutingRuleCompanyRelation) | required |  |
| `Applicability` | [RoutingRuleApplicability](#X-Ref-Name-RoutingRuleApplicability) | required |  |
| `RouteType` | [RoutingRuleRouteType](#X-Ref-Name-RoutingRuleRouteType) | required |  |
| `SelectedStayItems` | object | required |  |

#### RoutingRuleStayItemsAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Nights` | boolean | required |  |
| `CityTax` | boolean | required |  |
| `ProductCategoryIds` | array of string | optional |  |

### Response

```javascript
{
  "RoutingRules": [
    {
      "Id": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
      "CompanyId": "35f493d1-6cf7-4132-982a-a5540549c322",
      "CompanyRelation": "PartnerCompany",
      "ServiceId": "708b3509-69ad-4a92-841b-d81f103edcee",
      "Applicability": "Always",
      "RouteType": "AllStayItems",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    },
    {
      "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
      "CompanyId": "73a1fc8e-11c5-4019-b296-9234b651fc68",
      "CompanyRelation": "TravelAgency",
      "ServiceId": "708b3509-69ad-4a92-841b-d81f103edcee",
      "Applicability": "Always",
      "RouteType": "SelectedStayItems",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "SelectedStayItems": {
        "Nights": false,
        "CityTax": true,
        "ProductCategoryIds": [
          "004fa262-7b08-4853-b544-af2a00d5cf1f"
        ]
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rule](#RoutingRule) | required, max 1000 items | Collection of Routing rules. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Update routing rules

Updates routing rules.

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
        "Value": "35f493d1-6cf7-4132-982a-a5540549c322"
      },
      "CompanyRelation": {
        "Value": "PartnerCompany"
      },
      "ServiceId": {
        "Value": "708b3509-69ad-4a92-841b-d81f103edcee"
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
        "Value": "73a1fc8e-11c5-4019-b296-9234b651fc68"
      },
      "CompanyRelation": {
        "Value": "TravelAgency"
      },
      "ServiceId": {
        "Value": "708b3509-69ad-4a92-841b-d81f103edcee"
      },
      "Applicability": {
        "Value": "Always"
      },
      "RouteType": {
        "Value": "SelectedStayItems"
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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `RoutingRuleUpdates` | array of [RoutingRuleUpdateParameters](#RoutingRuleUpdateParameters) | required, max 1000 items | Collection of Routing rules to be updated. |

#### RoutingRuleUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRuleId` | string | required |  |
| `CompanyId` | object | required |  |
| `ServiceId` | object | required |  |
| `CompanyRelation` | [RoutingRuleCompanyRelation](#X-Ref-Name-RoutingRuleCompanyRelation) | required |  |
| `Applicability` | [RoutingRuleApplicability](#X-Ref-Name-RoutingRuleApplicability) | required |  |
| `RouteType` | [RoutingRuleRouteType](#X-Ref-Name-RoutingRuleRouteType) | required |  |
| `SelectedStayItems` | object | required |  |

#### RoutingRuleStayItemsUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Nights` | object | required |  |
| `CityTax` | object | required |  |
| `ProductCategoryIds` | object | required |  |

#### GuidIEnumerableUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of string | optional |  |

### Response

```javascript
{
  "RoutingRules": [
    {
      "Id": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
      "CompanyId": "35f493d1-6cf7-4132-982a-a5540549c322",
      "CompanyRelation": "PartnerCompany",
      "ServiceId": "708b3509-69ad-4a92-841b-d81f103edcee",
      "Applicability": "Always",
      "RouteType": "AllStayItems",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    },
    {
      "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
      "CompanyId": "73a1fc8e-11c5-4019-b296-9234b651fc68",
      "CompanyRelation": "TravelAgency",
      "ServiceId": "708b3509-69ad-4a92-841b-d81f103edcee",
      "Applicability": "Always",
      "RouteType": "SelectedStayItems",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "SelectedStayItems": {
        "Nights": false,
        "CityTax": true,
        "ProductCategoryIds": [
          "004fa262-7b08-4853-b544-af2a00d5cf1f"
        ]
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rule](#RoutingRule) | required, max 1000 items | Collection of Routing rules. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Delete routing rules

Deletes routing rules.

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `RoutingRuleIds` | array of string | required, max 1000 items | Unique identifiers of the routing rules to be deleted. |

### Response

```javascript
{}
```
