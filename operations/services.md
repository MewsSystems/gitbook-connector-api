# Services

## Get all services

Raturns all services offered by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/services/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

### Response

```javascript
{
    "Services": [
        {
            "EndTime": null,
            "Id": "fc79a518-bc69-45b8-93bd-83326201bd14",
            "IsActive": true,
            "Name": "Restaurant",
            "StartTime": null,
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false
            }
        },
        {
            "EndTime": "PT12H",
            "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Accommodation",
            "StartTime": "PT14H",
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false
            }
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Services` | array of [Service](services.md#service) | required | Services offered by the enterprise. |

#### Service

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the service. |
| `IsActive` | boolean | required | Whether the service is still active. |
| `Name` | string | required | Name of the service. |
| `StartTime` | string | optional | Default start time of the service orders in ISO 8601 duration format. |
| `EndTime` | string | optional | Default end time of the service orders in ISO 8601 duration format. |
| `Promotions` | [Promotions](services.md#promotions) | required | Promotions of the service. |

#### Promotions

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `BeforeCheckIn` | boolean | required | Whether it can be promoted before check-in. |
| `AfterCheckIn` | boolean | required | Whether it can be promoted after check-in. |
| `DuringStay` | boolean | required | Whether it can be promoted during stay. |
| `BeforeCheckOut` | boolean | required | Whether it can be promoted before check-out. |
| `AfterCheckOut` | boolean | required | Whether it can be promoted after check-out. |

## Get service availability

Returns availability of a service in the specified interval. Note that response contains availability for all dates that the specified interval intersects.

### Request

`[PlatformAddress]/api/connector/v1/services/getAvailability`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "StartUtc":"2017-01-01T00:00:00.000Z",
    "EndUtc":"2017-01-03T00:00:00.000Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) whose availability should be returned. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "CategoryAvailabilities": [
        {
            "Availabilities": [ 6, 6, 6 ],
            "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f"
        },
        {
            "Availabilities": [ 8, 8, 8 ],
            "CategoryId": "a0a7a5c5-c4ef-494a-8b34-6cca97629076"
        }
    ],
    "DatesUtc": [
        "2016-12-31T23:00:00Z",
        "2017-01-01T23:00:00Z",
        "2017-01-02T23:00:00Z"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryAvailabilities` | array of [Space category availability](services.md#space-category-availability) | required | Space category availabilities. |
| `DatesUtc` | array of string | required | Covered dates in UTC timezone in ISO 8601 format. |

#### Space category availability

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the [Space category](enterprises.md#space-category). |
| `Availabilities` | array of number | required | Availabilities of the space category in the covered dates. |

## Get all products

Raturns all products offered together with the specified services.

### Request

`[PlatformAddress]/api/connector/v1/products/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ServiceIds` | array of string | required | Unique identifiers of the [Service](services.md#service)s. |

### Response

```javascript
{
    "Products": [
        {
            "CategoryId": null,
            "Charging": "PerPersonPerTimeUnit",
            "Description": "Nice continental breakfast.",
            "Id": "198bc308-c1f2-4a1c-a827-c41d99d52f3d",
            "IsActive": true,
            "Name": "Breakfast",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "ShortName": "BFST",
            "Price": {
                "Currency": "GBP",
                "Net": 7.5,
                "Tax": 1.5,
                "TaxRate": 0.2,
                "Value": 9
            },
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false
            }
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Products` | array of [Product](services.md#product) | required | Products offered with the service. |

#### Product

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `CategoryId` | string | optional | Unique identifier of the Product category. |
| `IsActive` | boolean | required | Whether the product is still active. |
| `Name` | string | required | Name of the product. |
| `ShortName` | string | required | Short name of the product. |
| `Description` | string | optional | Description of the product. |
| `Charging` | string [Product charging](services.md#product-charging) | required | Charging of the product. |
| `Promotions` | [Promotions](services.md#promotions) | required | Promotions of the service. |
| `Price` | [Currency value](finance.md#currency-value) | required | Price of the product. |

#### Product charging

* `Once`
* `PerTimeUnit`
* `PerPersonPerTimeUnit`

## Get all business segments

Returns all business segments of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/businessSegments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

### Response

```javascript
{
    "BusinessSegments": [
        {
            "Id": "7760b5cb-a666-41bb-9758-76bf5d1df399",
            "IsActive": true,
            "Name": "Business"
        },
        {
            "Id": "54ec08b6-e6fc-48e9-b8ae-02943e0ac693",
            "IsActive": true,
            "Name": "Leisure"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `BusinessSegments` | array of [Business segment](services.md#business-segment) | required | Business segments of the default service. |

#### Business segment

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the segment. |
| `IsActive` | boolean | required | Whether the business segment is still active. |
| `Name` | string | required | Name of the segment. |

## Get all rates

Returns all rates \(pricing setups\) and rate groups \(condition settings\) of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/rates/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Extent": {
        "Rates": true,
        "RateGroups": true,
        "RateRestrictions": false
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Extent` | [Rate extent](services.md#rate-extent) | optional | Extent of data to be returned. If not specified, `Rates` and `RateGroups` is used as the default extent. |

#### Rate extent

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Rates` | bool | optional | Whether the response should contain rates. |
| `RateGroups` | bool | optional | Whether the response should contain rate groups. |
| `RateRestrictions` | bool | optional | Whether the response should contain rate restrictions. |

### Response

```javascript
{
    "Rates": [
        {
            "BaseRateId": null,
            "GroupId": "c8b866b3-be2e-4a47-9486-034318e9f393",
            "Id": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "IsActive": true,
            "IsPublic": true,
            "Name": "Fully Flexible",
            "ShortName": "FF"
        }
    ],
    "RateGroups": [
        {
            "Id": "c8b866b3-be2e-4a47-9486-034318e9f393",
            "IsActive": true,
            "Name": "Default"
        }
    ],
    "RateRestrictions": {
        "DateRestrictions": [
            {
                "Days": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                "Id": "cd12a0db-1eeb-4eda-965c-229efff4bd5d",
                "IsInherited": true,
                "RateId": "b7e30382-ccd2-4982-8a29-0eb8d9386e1a",
                "EndUtc": "2019-12-31T23:00:00Z",
                "IsInverted": false,
                "StartUtc": "2016-12-31T23:00:00Z"
            }
        ],
        "EarlinessRestrictions": [
            {
                "Days": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                "Id": "0b9f74e7-3b7b-4472-a476-8ac1f01696ea",
                "IsInherited": true,
                "RateId": "b7e30382-ccd2-4982-8a29-0eb8d9386e1a",
                "EndUtc": null,
                "MaxAdvance": null,
                "MinAdvance": "P7D",
                "StartUtc": null
            }
        ],
        "LengthRestrictions": [
            {
                "Days": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                "Id": "c91dcd27-fd53-4bc6-bb2a-a783e39c61f1",
                "IsInherited": true,
                "RateId": "b7e30382-ccd2-4982-8a29-0eb8d9386e1a",
                "EndUtc": null,
                "MaxLength": null,
                "MinLength": "P4D",
                "StartUtc": null
            }
        ]
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Rates` | array of [Rate](services.md#rate) | required | Rates of the default service. |
| `RateGroups` | array of [Rate group](services.md#rate-group) | required | Rate groups of the default service. |
| `RateRestrictions` | [Rate restrictions](services.md#rate-restrictions) | required | Rate restrictions of the rates. |

#### Rate

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](services.md#rate-group) where the rate belongs. |
| `BaseRateId` | string | required | Unique identifier of the base [Rate](services.md#rate). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Name` | string | required | Name of the rate. |
| `ShortName` | string | required | Short name of the rate. |

#### Rate group

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the group. |
| `IsActive` | boolean | required | Whether the rate group is still active. |
| `Name` | string | required | Name of the rate group. |

#### Rate restrictions

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `DateRestrictions` | array of [Date restriction](services.md#date-restriction) | optional | The date restrictions. |
| `EarlinessRestrictions` | array of [Earliness restriction](services.md#earliness-restriction) | optional | The earliness restrictions. |
| `LengthRestrictions` | array of [Length restriction](services.md#length-restriction) | optional | The length restrictions. |

#### Date restriction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `RateId` | string | required | Unique identifier of the restricted [Rate](services.md#rate). |
| `IsInherited` | boolean | required | Whether child rates inherit the restriction. |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](services.md#day) | required | The restricted days of week. |

#### Earliness restriction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `RateId` | string | required | Unique identifier of the restricted [Rate](services.md#rate). |
| `IsInherited` | boolean | required | Whether child rates inherit the restriction. |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](services.md#day) | required | The restricted days of week. |
| `MinAdvance` | string | optional | Minimal advance for reservation creation in ISO 8601 duration format. |
| `MaxAdvance` | string | optional | Maximal advance for reservation creation in ISO 8601 duration format. |

#### Length restriction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `RateId` | string | required | Unique identifier of the restricted [Rate](services.md#rate). |
| `IsInherited` | boolean | required | Whether child rates inherit the restriction. |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](services.md#day) | required | The restricted days of week. |
| `MinLength` | string | optional | Minimal reservation length in ISO 8601 duration format. |
| `MaxLength` | string | optional | Maximal reservation length in ISO 8601 duration format. |

#### Day

* `Monday`
* `Tuesday`
* `Wednesday`
* `Thursday`
* `Friday`
* `Saturday`
* `Sunday`

## Get rate pricing

Returns prices of a rate in the specified interval. Note that response contains prices for all dates that the specified interval intersects. So e.g. interval `1st Jan 13:00 - 1st Jan 14:00` will result in one price for `1st Jan`. Interval `1st Jan 23:00 - 2nd Jan 01:00` will result in two prices for `1st Jan` and `2nd Jan`.

### Request

`[PlatformAddress]/api/connector/v1/rates/getPricing`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
    "StartUtc":"2017-01-01T00:00:00.000Z",
    "EndUtc":"2017-01-03T00:00:00.000Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `RateId` | string | required | Unique identifier of the [Rate](services.md#rate) whose prices should be returned. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "Currency": "EUR",
    "BasePrices": [ 20, 20, 20 ],
    "CategoryAdjustments": [
        {
            "AbsoluteValue": 0,
            "CategoryId": "34c29e73-c8db-4e93-b51b-981e42655e03",
            "ParentCategoryId": null,
            "RelativeValue": 0.2
        },
        {
            "AbsoluteValue": 50,
            "CategoryId": "a0a7a5c5-c4ef-494a-8b34-6cca97629076",
            "ParentCategoryId": "34c29e73-c8db-4e93-b51b-981e42655e03",
            "RelativeValue": 0
        }
    ]
    "CategoryPrices": [
        {
            "CategoryId": "e3aa3117-dff0-46b7-b49a-2c0391e70ff9",
            "Prices": [ 20, 20, 20 ]
        }
    ],
    "DatesUtc": [
        "2016-12-31T23:00:00Z",
        "2017-01-01T23:00:00Z",
        "2017-01-02T23:00:00Z"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `DatesUtc` | array of string | required | Covered dates in UTC timezone in ISO 8601 format. |
| `BasePrices` | array of number | required | Base prices of the rate in the covered dates. |
| `CategoryPrices` | array of [Space category pricing](services.md#space-category-pricing) | required | Space category prices. |
| `CategoryAdjustments` | array of [Space category adjustment](services.md#space-category-adjustment) | required | Space category adjustments. |

#### Space category pricing

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the [Space category](enterprises.md#space-category). |
| `Prices` | array of number | required | Prices of the rate for the space category in the covered dates. |

#### Space category adjustment

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the adjustment [Space category](enterprises.md#space-category). |
| `ParentCategoryId` | string | optional | Unique identifier of the parent [Space category](enterprises.md#space-category) that serves as a base price for the current category. |
| `RelativeValue` | number | required | Relative value of the adjustment \(e.g. `0.5` represents 50% increase\). |
| `AbsoluteValue` | number | required | Absolute value of the adjustment \(e.g. `50` represents 50 EUR in case the rate currency is `EUR`\). |

## Update rate price

Updates price of a rate in the specified intervals. If the `CategoryId` is specified, updates price of the corresponding [Space category](enterprises.md#space-category), otherwise updates the base price. Note that prices are defined daily, so when the server receives the UTC interval, it first converts it to enterprise timezone and updates the price on all dates that the interval intersects.

### Request

`[PlatformAddress]/api/connector/v1/rates/updatePrice`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
    "PriceUpdates": [
        {
            "StartUtc": "2016-09-01T00:00:00Z",
            "EndUtc": "2016-09-02T00:00:00Z",
            "Value": 111
        },
        {
            "CategoryId": "e3aa3117-dff0-46b7-b49a-2c0391e70ff9",
            "StartUtc": "2016-09-04T00:00:00Z",
            "EndUtc": "2016-09-05T00:00:00Z",
            "Value": 222
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `RateId` | string | required | Unique identifier of the [Rate](services.md#rate) to update. |
| `PriceUpdates` | array of [Price update](services.md#price-update) | required | Price updates. |

#### Price update

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | optional | Unique identifier of the [Space category](enterprises.md#space-category) whose prices to update. If not specified, base price is updated. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `Value` | number | optional | New value of the rate on the interval. If not specified, removes all adjustments within the interval. |

### Response

```javascript
{}
```

## Add order

Creates a new order with the specified products and items. Only positive charges are allowed by default, in order to post negative charges \(rebates\), the connector integration has to be configured in Mews to allow it. If the consumption is specified, it has to be in the future or within editable history interval of the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/orders/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerId": "794dbb77-0a9a-4170-9fa9-62ea4bf2a56e",
    "ServiceId": "0f7f56db-b8b3-42b0-8b53-2df4c8a87997",
    "ConsumptionUtc": "2018-01-01T00:00:00Z",
    "ProductOrders": [
        {
            "ProductId": "80191f0c-89f7-49ac-a150-1f342b29c4cf",
            "Count": 2
        }
    ],
    "Items": [
        {
            "Name": "Beer",
            "UnitCount": 10,
            "UnitCost": {
                "Amount": 2.50,
                "Currency": "GBP",
                "Tax": 0.20
            },
            "Category": {
                "Code": "ABVG"
            }
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Identifier of the [Customer](customers.md#customer) to be charged. |
| `ServiceId` | string | required | Identifier of the [Service](services.md#service) to be ordered. |
| `ConsumptionUtc` | string | optional | Date and time of the order consumption in UTC timezone in ISO 8601 format. If not specified, current date and time is used. |
| `Notes` | string | optional | Additional notes of the order. |
| `ProductOrders` | array of [Product order parameters](services.md#product-order-parameters) | optional | Parameters of the ordered products. |
| `Items` | array of [Item parameters](services.md#item-parameters) | optional | Parameters of the ordered custom items. |

#### Product order parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ProductId` | string | required | Unique identifier of the [Product](services.md#product) to be ordered. |
| `Count` | number | optional | Count of products to be ordered, e.g. 10 in case of 10 beers. |
| `UnitCost` | [Cost](services.md#cost) | optional | Unit cost of the product that overrides the cost defined in Mews. |

#### Item parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Count of units to be ordered, e.g. 10 in case of 10 beers. |
| `UnitCost` | [Cost](services.md#cost) | required | Unit cost, e.g. cost for one beer \(note that total cost of the item is therefore `UnitCount` times `UnitCost`\). |
| `Category` | [Accounting category parameters](services.md#accounting-category-parameters) | optional | Category of the item. |

#### Cost

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Amount` | decimal | required | Amount including tax. |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `Tax` | decimal | required | Tax rate, e.g. `0.21` in case of 21% tax rate. |

#### Accounting category parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | Code of the accounting category in Mews. |
| `Name` | string | optional | Name of the category, used if no category is matched using the code. |

### Response

```javascript
{
    "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `OrderId` | string | required | Unique identifier of the created order. |

