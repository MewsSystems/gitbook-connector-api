# Routing rules

## Get all routing rules

Returns all routing rules. Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/routingRules/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "RoutingRuleIds": 
    [
        "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
        "d98c9611-0006-4691-a835-af2e00b170c4"
    ],
    "CompanyIds": 
    [
        "cd441e1a-6f19-4960-887a-af2a00d5d5f8",
        "ddc23f8d-131d-44d6-b150-af2a00d5d5f8"
    ],
    "Limitation": {
        "Count": 10, 
        "Cursor": null
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RoutingRuleIds` | array of string | required, max 1000 items | Unique identifier of the [Routing rule](routingrules.md#routing-rule). |
| `CompanyIds` | array of string | required, max 1000 items | Unique identifier of the [Company](companies.md#company). |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "RoutingRules": [
        {
            "Id": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
            "CompanyId": "cd441e1a-6f19-4960-887a-af2a00d5d5f8",
            "CompanyRelation": "PartnerCompany",
            "ServiceId": "0907a1b4-ef7a-4aa8-b8a1-af2a00d5ca22",
            "Applicability": "PrepaidOnly",
            "RouteType": "AllStayItems"
        },
        {
            "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
            "CompanyId": "ddc23f8d-131d-44d6-b150-af2a00d5d5f8",
            "CompanyRelation": "TravelAgency",
            "ServiceId": "0907a1b4-ef7a-4aa8-b8a1-af2a00d5ca22",
            "Applicability": "Always",
            "RouteType": "SelectedStayItems",
            "SelectedStayItems":
            {
                "Nights" : true,
                "CityTax" : true,
                "ProductCategoryIds":[
                    "004fa262-7b08-4853-b544-af2a00d5cf1f",
                    "8f0dc6ef-1fd4-44e4-b353-af2c00b24caf",
                    "d4c1b435-0ed1-4d98-9833-af2c00b28518"
                ]
            }
        }
    ],
    "Cursor": "d98c9611-0006-4691-a835-af2e00b170c4"
}
```
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rules](#routing-rule) | required | Collection of Routing rules. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Routing rule

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service. |
| `CompanyId` | string | required | Unique identifier of the [Company](companies.md#company) routing rule is assigned to. |
| `CompanyRelation` | string [Company relation](routingrules.md#company-relation) | required | Relation of the company to the routing rule. |
| `Applicability` | string [Applicability](routingrules.md#applicability) | required | Determines if routing rule applies to all future reservations with this company or travel agency, or only future reservations that are prepaid. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) routing rule is assigned to. |
| `RouteType` | string [Route type](routingrules.md#route-type) | required | Determines to which stay items the routing rule applies. |
| `SelectedStayItems` | [Selected stay items](routingrules.md#selected-stay-items) | optional | Specific items to which the routing rule applies. Returns only if RouteType value is SelectedStayItems. |

### Company relation

* PartnerCompany
* TravelAgency

### Applicability

* Always
* PrepaidOnly

### Route type

* AllStayItems
* SelectedStayItems

#### Selected stay items

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Nights` | boolean | required | Whether routing rule applies to nights. |
| `CityTax` | boolean | required | Whether routing rule applies to city tax. |
| `ProductCategoryIds` | array of string | optional | Product categories to which routing rule applies. |

## Add routing rules

Adds a new routing rules.

### Request

`[PlatformAddress]/api/connector/v1/routingRules/add`

```javascript
{
    "AccessToken": "3BCD0D22F20A4A8BB2A8AF2A00D5D3FC-30FA935326D2715A03E9E57B6A11B42",
    "ClientToken": "9B6763125AF04F44818BAF2A00D5D3A4-513EDF6A056FFF29D91271C55E8E998",
    "Client": "Sample Client 1.0.0",
    "RoutingRules":
    [
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
            "SelectedStayItems": 
            {
                "Nights" : true,
                "CityTax" : true,
                "ProductCategoryIds":[
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
| `CompanyId` | string | required | Unique identifier of the [Company](companies.md#company) routing rule is assigned to. |
| `CompanyRelation` | string [Company relation](routingrules.md#company-relation) | required | Relation of the company to the routing rule. |
| `Applicability` | string [Applicability](routingrules.md#applicability) | required | Determines if routing rule applies to all future reservations with this company or travel agency attached or only future reservations that are prepaid in online travel agency (OTA). |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) routing rule is assigned to. |
| `RouteType` | string [Route type](routingrules.md#route-type) | required | What should be routed. |
| `SelectedStayItems` | [Selected stay items](routingrules.md#selected-stay-items) | optional | To which stay items routing rule applies to. Returns only if RouteType value is SelectedStayItems. |

### Response

```javascript
{
    "RoutingRules": [
        {
            "Id": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
            "CompanyId": "cd441e1a-6f19-4960-887a-af2a00d5d5f8",
            "CompanyRelation": "PartnerCompany",
            "ServiceId": "0907a1b4-ef7a-4aa8-b8a1-af2a00d5ca22",
            "Applicability": "PrepaidOnly",
            "RouteType": "AllStayItems"
        },
        {
            "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
            "CompanyId": "ddc23f8d-131d-44d6-b150-af2a00d5d5f8",
            "CompanyRelation": "TravelAgency",
            "ServiceId": "0907a1b4-ef7a-4aa8-b8a1-af2a00d5ca22",
            "Applicability": "Always",
            "RouteType": "SelectedStayItems",
            "SelectedStayItems":
            {
                "Nights" : true,
                "CityTax" : true,
                "ProductCategoryIds":[
                    "004fa262-7b08-4853-b544-af2a00d5cf1f",
                    "8f0dc6ef-1fd4-44e4-b353-af2c00b24caf",
                    "d4c1b435-0ed1-4d98-9833-af2c00b28518"
                ]
            }
        }
    ],
    "Cursor": "d98c9611-0006-4691-a835-af2e00b170c4"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rules](#routing-rule) | required | Routing rules. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Update routing rules

Updates routing rules.

### Request

`[PlatformAddress]/api/connector/v1/routingRules/update`

```javascript
{
    "AccessToken": "3BCD0D22F20A4A8BB2A8AF2A00D5D3FC-30FA935326D2715A03E9E57B6A11B42",
    "ClientToken": "9B6763125AF04F44818BAF2A00D5D3A4-513EDF6A056FFF29D91271C55E8E998",
    "Client": "Sample Client 1.0.0",
    "RoutingRules":
    [
        {
            "RoutingRuleId": "ff785b22-5422-4d1d-87f4-af2e00b3dfda",
            "CompanyId": { "Value": "35f493d1-6cf7-4132-982a-a5540549c322" },
            "CompanyRelation": { "Value": "PartnerCompany" },
            "ServiceId": { "Value": "708b3509-69ad-4a92-841b-d81f103edcee" },
            "Applicability": { "Value": "Always" },
            "RouteType": { "Value": "AllStayItems" }
        },
        {
            "RoutingRuleId": "d98c9611-0006-4691-a835-af2e00b170c4",
            "CompanyId": { "Value": "73a1fc8e-11c5-4019-b296-9234b651fc68" },
            "CompanyRelation": { "Value": "TravelAgency" },
            "ServiceId": { "Value": "708b3509-69ad-4a92-841b-d81f103edcee" },
            "Applicability": { "Value": "Always" },
            "RouteType": { "Value": "SelectedStayItems" },
            "SelectedStayItems": 
            {
                "Nights" : { "Value":  false },
                "CityTax" : { "Value": true },
                "ProductCategoryIds": { "Value": [
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
| `RoutingRules` | array of [Routing rule update parameters](routingrules.md#routing-rule-update-parameters) | required, max 1000 items | Collection Routing rules to be updated. |

#### Routing rule update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRuleId` | string | required | Unique identifier of the routing rule. |
| `CompanyId` | [String update value](#string-update-value) | optional | Unique identifier of the [Company](companies.md#company) \(or `null` should it not be updated\). |
| `CompanyRelation` | [String update value](#string-update-value)| optional | [Company relation](routingrules.md#company-relation) to the routing rule \(or `null` should it not be updated\). |
| `Applicability` | [String update value](#string-update-value) | required | [Applicability](routingrules.md#applicability) that determines if routing rule apply to all future reservations with this company or travel agency attached or only future reservations that are prepaid in online travel agency (OTA) \(or `null` should it not be updated\). |
| `ServiceId` | [String update value](#string-update-value) | required | Unique identifier of the [Service](services.md#service) routing rule is assigned to \(or `null` should it not be updated\). |
| `RouteType` | [String update value](#string-update-value) | required | What should be routed [Route type](routingrules.md#route-type) \(or `null` should it not be updated\). |
| `SelectedStayItems` | [Selected stay items update parameters](routingrules.md#selected-stay-items-update-parameters) | optional | To which stay items routing rule applies to. Returns only if RouteType value is SelectedStayItems. |

#### String update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | string | optional | Value which is to be updated. |

#### String array update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of string | optional | Value which is to be updated. |

#### Bool update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | bool | optional | Value which is to be updated. |

#### Selected stay items update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Nights` | [Bool update value](#bool-update-value) | optional | Whether routing rule applies to nights \(or `null` should it not be updated\). |
| `CityTax` | [Bool update value](#bool-update-value) | optional | Whether routing rule applies to city tax \(or `null` should it not be updated\). |
| `ProductCategoryIds` | [String array update value](#string-array-update-value) | optional | Product categories to which the routing rule applies \(or `null` should it not be updated\). |

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
            "RouteType": "AllStayItems"
        },
        {
            "Id": "d98c9611-0006-4691-a835-af2e00b170c4",
            "CompanyId": "73a1fc8e-11c5-4019-b296-9234b651fc68",
            "CompanyRelation": "TravelAgency",
            "ServiceId": "708b3509-69ad-4a92-841b-d81f103edcee",
            "Applicability": "Always",
            "RouteType": "SelectedStayItems",
            "SelectedStayItems":
            {
                "Nights" : false,
                "CityTax" : true,
                "ProductCategoryIds":[
                    "004fa262-7b08-4853-b544-af2a00d5cf1f"
                ]
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RoutingRules` | array of [Routing rules](#routing-rule) | required | Collection of Routing rules. |

## Delete routing rules

Deletes routing rules.

### Request

`[PlatformAddress]/api/connector/v1/routingRules/delete`

```javascript
{
    "AccessToken": "3BCD0D22F20A4A8BB2A8AF2A00D5D3FC-30FA935326D2715A03E9E57B6A11B42",
    "ClientToken": "9B6763125AF04F44818BAF2A00D5D3A4-513EDF6A056FFF29D91271C55E8E998",
    "Client": "Sample Client 1.0.0",
    "RoutingRuleIds": 
    [
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
| `RoutingRuleIds` | array of string | required, max 1000 items | Unique identifiers of the routing rules to be delete. |

### Response

```javascript
{}
```
