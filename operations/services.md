# Services

## Get all services

Returns all services offered by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/services/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

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
            },
            "Type": "Orderable"
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
            },
            "Type": "Reservable"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Services` | array of [Service](#service) | required | Services offered by the enterprise. |

#### Service

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the service. |
| `IsActive` | boolean | required | Whether the service is still active. |
| `Name` | string | required | Name of the service. |
| `StartTime` | string | optional | Default start time of the service orders in ISO 8601 duration format. |
| `EndTime` | string | optional | Default end time of the service orders in ISO 8601 duration format. |
| `Promotions` | [Promotions](#promotions) | required | Promotions of the service. |
| `Type` | string | [Service type](#service-type) | required | Type of the service. |

#### Promotions

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `BeforeCheckIn` | boolean | required | Whether it can be promoted before check-in. |
| `AfterCheckIn` | boolean | required | Whether it can be promoted after check-in. |
| `DuringStay` | boolean | required | Whether it can be promoted during stay. |
| `BeforeCheckOut` | boolean | required | Whether it can be promoted before check-out. |
| `AfterCheckOut` | boolean | required | Whether it can be promoted after check-out. |

#### Service type

* `Reservable`
* `Orderable`

## Get service availability

Returns availability of a reservable service in the specified interval. Note that response contains availability for all dates that the specified interval intersects.

### Request

`[PlatformAddress]/api/connector/v1/services/getAvailability`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "StartUtc":"2017-01-01T00:00:00.000Z",
    "EndUtc":"2017-01-03T00:00:00.000Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) whose availability should be returned. |
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
| `CategoryAvailabilities` | array of [Resource category availability](#resource-category-availability) | required | Resource category availabilities. |
| `DatesUtc` | array of string | required | Covered dates in UTC timezone in ISO 8601 format. |

#### Resource category availability

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the [Resource category](enterprises.md#resource-category). |
| `Availabilities` | array of number | required | Availabilities of the resource category in the covered dates. |

## Get all products

Returns all products offered together with the specified services.

### Request

`[PlatformAddress]/api/connector/v1/products/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required | Unique identifiers of the [Service](#service)s. |

### Response

```javascript
{
    "Products": [
        {
            "Id": "198bc308-c1f2-4a1c-a827-c41d99d52f3d",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "CategoryId": null,
            "IsActive": true,
            "Name": "Breakfast",
            "ShortName": "BFST",
            "Description": "Nice continental breakfast.",
            "Charging": "PerPersonPerTimeUnit",
            "Posting": "Once",
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false
            },
            "Classifications": {
                "Food": false,
                "Beverage": false,
                "Wellness": false,
                "CityTax": false
            },
            "Price": {
                "Currency": "GBP",
                "NetValue": 7.5,
                "GrossValue": 9
                "TaxValues": [
                    {
                        "Code": "UK-S",
                        "Value": 1.50
                    }
                ],
            }
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Products` | array of [Product](#product) | required | Products offered with the service. |

#### Product

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `CategoryId` | string | optional | Unique identifier of the Product category. |
| `IsActive` | boolean | required | Whether the product is still active. |
| `Name` | string | required | Name of the product. |
| `ShortName` | string | required | Short name of the product. |
| `Description` | string | optional | Description of the product. |
| `Charging` | string [Product charging](#product-charging) | required | Charging of the product. |
| `Posting` | string [Product posting](#product-posting) | required | Posting of the product. |
| `Promotions` | [Promotions](#promotions) | required | Promotions of the service. |
| `Classifications` | [Product classifications](#product-classifications) | required | Classifications of the service. |
| `Price` | [Currency value](finance.md#currency-value) | required | Price of the product. |

#### Product charging

* `Once`
* `PerTimeUnit`
* `PerPersonPerTimeUnit`
* `PerPerson`

#### Product posting

* `Once`
* `Daily`

#### Product classifications

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Food` | boolean | required | Product is classified as food. |
| `Beverage` | boolean | required | Product is classified as beverage. |
| `Wellness` | boolean | required | Product is classified as wellness. |
| `CityTax` | boolean | required | Product is classified as city tax. |

## Get all business segments

Returns all business segments of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/businessSegments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required | Unique identifiers of the [Service](#service)s from which the business segments are requested. |

### Response

```javascript
{
    "BusinessSegments": [
        {
            "Id": "7760b5cb-a666-41bb-9758-76bf5d1df399",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Business"
        },
        {
            "Id": "54ec08b6-e6fc-48e9-b8ae-02943e0ac693",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Leisure"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `BusinessSegments` | array of [Business segment](#business-segment) | required | Business segments of the default service. |

#### Business segment

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the segment. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
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
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "Extent": {
        "Rates": true,
        "RateGroups": true
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required | Unique identifiers of the [Service](#service)s from which the rates are requested. |
| `Extent` | [Rate extent](#rate-extent) | required | Extent of data to be returned. |

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
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "IsPublic": true,
            "Name": "Fully Flexible",
            "ShortName": "FF",
            "ExternalNames": {
                "en-US": "Long Stay Flexible Rate"
            } 
        }
    ],
    "RateGroups": [
        {
            "Id": "c8b866b3-be2e-4a47-9486-034318e9f393",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Default"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Rates` | array of [Rate](#rate) | required | Rates of the default service. |
| `RateGroups` | array of [Rate group](#rate-group) | required | Rate groups of the default service. |

#### Rate

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](#rate-group) where the rate belongs. |
| `BaseRateId` | string | required | Unique identifier of the base [Rate](#rate). |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Name` | string | required | Name of the rate. |
| `ShortName` | string | required | Short name of the rate. |
| `ExternalNames` | [Localized text](enterprises.md#localized-text) | required | All translations of the external name of the rate. |

#### Rate group

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the group. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `IsActive` | boolean | required | Whether the rate group is still active. |
| `Name` | string | required | Name of the rate group. |

## Get rate pricing

Returns prices of a rate in the specified interval. Note that response contains prices for all dates that the specified interval intersects. So e.g. interval `1st Jan 13:00 - 1st Jan 14:00` will result in one price for `1st Jan`. Interval `1st Jan 23:00 - 2nd Jan 01:00` will result in two prices for `1st Jan` and `2nd Jan`.

### Request

`[PlatformAddress]/api/connector/v1/rates/getPricing`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
    "StartUtc":"2017-01-01T00:00:00.000Z",
    "EndUtc":"2017-01-03T00:00:00.000Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RateId` | string | required | Unique identifier of the [Rate](#rate) whose prices should be returned. |
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
| `CategoryPrices` | array of [Resource category pricing](#resource-category-pricing) | required | Resource category prices. |
| `CategoryAdjustments` | array of [Resource category adjustment](#resource-category-adjustment) | required | Resource category adjustments. |
| `RelativeAdjustment` | decimal | required | Specific amount which shows the difference between this rate and the base rate. |
| `AbsoluteAdjustment` | decimal | required | Relative amount which shows the difference between this rate and the base rate. |
| `EmptyUnitAdjustment` | decimal | required | Price adjustment for when the resource booked with this rate is not full to capacity. |
| `ExtraUnitAdjustment` | decimal | required | Price adjustment for when the resource booked with this rate exceeds capacity. |

#### Resource category pricing

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the [Resource category](enterprises.md#resource-category). |
| `Prices` | array of number | required | Prices of the rate for the resource category in the covered dates. |

#### Resource category adjustment

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the adjustment [Resource category](enterprises.md#resource-category). |
| `ParentCategoryId` | string | optional | Unique identifier of the parent [Resource category](enterprises.md#resource-category) that serves as a base price for the current category. |
| `RelativeValue` | number | required | Relative value of the adjustment \(e.g. `0.5` represents 50% increase\). |
| `AbsoluteValue` | number | required | Absolute value of the adjustment \(e.g. `50` represents 50 EUR in case the rate currency is `EUR`\). |

## Update rate price

Updates price of a rate in the specified intervals. If the `CategoryId` is specified, updates price of the corresponding [Resource category](enterprises.md#resource-category), otherwise updates the base price for all resource categories. Note that prices are defined daily, so when the server receives the UTC interval, it first converts it to enterprise timezone and updates the price on all dates that the interval intersects. Only root rates can be updated (the rates that have no base rate, that have `BaseRateId` set to `null`). It's not allowed to update past prices outside of `EditableHistoryInterval`, future updates are allowed for up to 5 years.

### Request

`[PlatformAddress]/api/connector/v1/rates/updatePrice`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
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
| `Client` | string | required | Name and version of the client application. |
| `RateId` | string | required | Unique identifier of the base [Rate](#rate) to update. |
| `PriceUpdates` | array of [Price update](#price-update) | required | Price updates. |

#### Price update

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | optional | Unique identifier of the [Resource category](enterprises.md#resource-category) whose prices to update. If not specified, base price is updated. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `Value` | number | optional | New value of the rate on the interval. If not specified, removes all adjustments within the interval. |

### Response

```javascript
{}
```

## Get all restrictions

Returns all restrictions of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "ResourceCategoryIds": [
        "34c29e73-c8db-4e93-b51b-981e42655e03"
    ],
    "RateIds": [
        "ed4b660b-19d0-434b-9360-a4de2ea42eda"
    ],
    "CollidingUtc": {
        "StartUtc": "2020-02-15T00:00:00Z",
        "EndUtc": "2020-02-20T00:00:00Z"
    },
    "CreatedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-15T00:00:00Z"
    },
    "UpdatedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-15T00:00:00Z"
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required | Unique identifiers of the [Service](#service)s from which the restrictions are requested. |
| `ResourceCategoryIds` | array of string | optional | Unique identifiers of [Resource categories](enterprises.md#resource-category). |
| `RateIds` | array of string | optional | Unique identifiers of [Rate](#rate)s. |
| `CollidingUtc` | [Time interval](enterprises.md#time-interval) | optional | Interval in which the [Restriction](#restriction) is active. Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](enterprises.md#time-interval) | optional | Interval in which the [Restriction](#restriction) was created. |
| `UpdatedUtc` | [Time interval](enterprises.md#time-interval) | optional | Interval in which the [Restriction](#restriction) was updated. |

### Response

```javascript
{  
   "Restrictions": [  
      {  
         "Id": "40c24757-c16e-4094-91d3-4ca952e488a1",
         "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
         "ExternalIdentifier": "5678",
         "Conditions": {  
            "Type": "Stay",
            "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
            "BaseRateId": null,
            "RateGroupId": null,
            "ResourceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
            "ResourceCategoryType": null,
            "StartUtc": "2018-10-09T00:00:00Z",
            "EndUtc": "2018-10-31T00:00:00Z",
            "Days": [  
               "Saturday",
               "Sunday"
            ]
         },
         "Exceptions": {  
            "MinAdvance": null,
            "MaxAdvance": null,
            "MinLength": "P0M2DT0H0M0S",
            "MaxLength": "P0M7DT0H0M0S",
            "MinPrice": {  
               "Value": 50,
               "Currency": "EUR"
            },
            "MaxPrice": {  
               "Value": 150,
               "Currency": "EUR"
            }
         }
      },
      {  
         "Id": "b40ac4a8-f5da-457d-88fe-7a895e1580ab",
         "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
         "ExternalIdentifier": "5678",
         "Conditions": {  
            "Type": "Start",
            "ExactRateId": null,
            "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
            "RateGroupId": null,
            "ResourceCategoryId": null,
            "ResourceCategoryType": "Room",
            "StartUtc": "2018-10-01T00:00:00Z",
            "EndUtc": "2018-10-31T00:00:00Z",
            "Days": [  
               "Monday",
               "Tuesday",
               "Wednesday",
               "Thursday",
               "Friday"
            ]
         },
         "Exceptions": {  
            "MinAdvance": "P0M1DT0H0M0S",
            "MaxAdvance": "P0M3DT0H0M0S",
            "MinLength": null,
            "MaxLength": null,
            "MinPrice": null,
            "MaxPrice": null
         }
      }
   ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Restrictions` | array of [Restriction](#restriction) | required | Restrictions of the default service. |

#### Restriction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `ExternalIdentifier` | string | optional | External identifier of the restriction. |
| `Conditions` | string | required | [Conditions](#restriction-conditions) are rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | string | optional | [Exceptions](#restriction-exceptions) are rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

#### Restriction Conditions

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string | required | [Restriction type](#restriction-type). |
| `ExactRateId` | string | optional | Unique identifier of the restricted [Exact rate](#rate). |
| `BaseRateId` | string | optional | Unique identifier of the restricted [Base rate](#rate). |
| `RateGroupId` | string | optional | Unique identifier of the restricted [Rate group](#rate-group). |
| `ResourceCategoryId` | string | optional | Unique identifier of the restricted [Resource category](enterprises.md#resource-category). |
| `ResourceType` | string | optional | Name of the restricted [Resource type](#resource-type). |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](#day) | required | The restricted days of week. |

#### Restriction Exceptions

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `MinAdvance` | string | optional | The minimum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MaxAdvance` | string | optional | The maximum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MinLength` | string | optional | Minimal reservation length in ISO 8601 duration format. |
| `MaxLength` | string | optional | Maximal reservation length in ISO 8601 duration format. |
| `MinPrice` | [Currency value](finance.md#currency-value)| optional | Value of the minimum night price. |
| `MaxPrice` | [Currency value](finance.md#currency-value)| optional | Value of the maximum night price. |

#### Day

* `Monday`
* `Tuesday`
* `Wednesday`
* `Thursday`
* `Friday`
* `Saturday`
* `Sunday`

#### Restriction type

* `Stay` - guests can't stay overnight within specified dates.
* `Start`- guests can't check in within specified dates.
* `End` - guests can't check out within specified dates.

## Add restrictions

Adds new restrictions with the specified conditions.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/add`

```javascript
{  
   "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
   "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
   "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
   "Restrictions": [  
      {  
         "Identifier": "1234",
         "ExternalIdentifier": "5678",
         "Conditions": {  
            "Type": "Start",
            "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
            "ResourceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
            "Days": [  
               "Friday",
               "Saturday",
               "Sunday"
            ]
         },
         "Exceptions": {  
            "MinLength": "P0M2DT0H0M0S",
            "MaxLength": "P0M7DT0H0M0S",
         }
      },
      {  
         "Identifier": "1235",
         "ExternalIdentifier": "5678",
         "Conditions": {  
            "Type": "Start",
            "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
            "Days": [  
               "Friday",
               "Saturday",
               "Sunday"
            ]
         },
         "Exceptions": {  
            "MinAdvance": "P0Y0M1DT0H0M0S",
            "MaxAdvance": "P0Y0M3DT0H0M0S"
         }
      }
   ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) restrictions will be added in. |
| `Restrictions` | array of [Restriction parameters](#restriction-parameters) | required | Parameters of restrictions. |

#### Restriction parameters
| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the restriction within the transaction. |
| `ExternalIdentifier` | string | optional | External identifier of the restriction. |
| `Conditions` | string | required | [Conditions](#restriction-conditions) are rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | string | optional | [Exceptions](#restriction-exceptions) are rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

### Response

```javascript
{
   "Restrictions": [
      {
         "Identifier": "1234",
         "Restriction": {
            "Id": "40c24757-c16e-4094-91d3-4ca952e488a1",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "ExternalIdentifier": "5678",
            "Conditions": {
               "Type": "Stay",
               "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
               "BaseRateId": null,
               "RateGroupId": null,
               "ResourceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
               "ResourceCategoryType": null,
               "StartUtc": "2018-10-09T00:00:00Z",
               "EndUtc": "2018-10-31T00:00:00Z",
               "Days": [
                  "Saturday",
                  "Sunday"
               ]
            },
            "Exceptions": {
               "MinAdvance": null,
               "MaxAdvance": null,
               "MinLength": "P0M2DT0H0M0S",
               "MaxLength": "P0M7DT0H0M0S",
               "MinPrice": null,
               "MaxPrice": null
            }
         }
      },
      {
         "Identifier": "1235",
         "Restriction": {
            "Id": "b40ac4a8-f5da-457d-88fe-7a895e1580ab",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "ExternalIdentifier": "5678",
            "Conditions": {
               "Type": "Start",
               "ExactRateId": null,
               "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
               "RateGroupId": null,
               "ResourceCategoryId": null,
               "ResourceCategoryType": "Room",
               "StartUtc": "2018-10-01T00:00:00Z",
               "EndUtc": "2018-10-31T00:00:00Z",
               "Days": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
               ]
            },
            "Exceptions": {
               "MinAdvance": "P0M1DT0H0M0S",
               "MaxAdvance": "P0M3DT0H0M0S",
               "MinLength": null,
               "MaxLength": null,
               "MinPrice": null,
               "MaxPrice": null
            }
         }
      }
   ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Restrictions` | array of [Added restriction](#added-restriction) | required | The added restrictions. |

#### Added restriction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the restriction within the transaction. |
| `Restriction` | [Restriction](#restriction) | required | The added restriction. |

## Delete restrictions

Removes restrictions from the service.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "RestrictionIds": [
        "af4949ce-c061-4f27-89f9-5a6a9ef725a7", 
        "e2f8aa29-0c09-4097-801c-7888c9fb57ae"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RestrictionIds` | array of string | required | Unique identifiers of the [Restriction](#restriction)s. |

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
    "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "407a26f8-dcfc-4e29-b978-ab440117a153",
    "ServiceId": "d2129910-1da9-4d39-be14-ab3a00c9e70c",
    "ConsumptionUtc": "2020-02-04T00:00:00Z",
    "ProductOrders": [
        {
            "ProductId": "2eb7ad8b-8dfb-4381-aba5-ab58009f2993",
            "Count": 2
        }
    ],
    "Items": [
        {
            "Name": "Beer",
            "UnitCount": 3,
            "UnitAmount": {
                "Currency": "USD",
                "NetValue": 7,
                "TaxCodes": [
                    "US-DC-G"
                ]
            },
            "AccountingCategoryId": "90eff5aa-36b4-4689-80c0-ab3a00bb412e"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Identifier of the [Customer](customers.md#customer) to be charged. |
| `ServiceId` | string | required | Identifier of the [Service](#service) to be ordered. |
| `ConsumptionUtc` | string | optional | Date and time of the order consumption in UTC timezone in ISO 8601 format. If not specified, current date and time is used. |
| `Notes` | string | optional | Additional notes of the order. |
| `ProductOrders` | array of [Product order parameters](#product-order-parameters) | optional | Parameters of the ordered products. |
| `Items` | array of [Item parameters](#item-parameters) | optional | Parameters of the ordered custom items. |

#### Product order parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ProductId` | string | required | Unique identifier of the [Product](#product) to be ordered. |
| `Count` | number | optional | Count of products to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount](#amount-parameters) | optional | Unit amount of the product that overrides the amount defined in Mews. |

#### Item parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Count of units to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount](#amount-parameters) | required | Unit amount, e.g. amount for one beer \(note that total amount of the item is therefore `UnitAmount` times `UnitCount`\). |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the item. |

#### Amount parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `GrossValue` | decimal | optional | Amount including tax. Required for [Gross enviroments](configuration.md#pricing). |
| `NetValue` | decimal | optional | Amount excluding tax. Required for [Net enviroments](configuration.md#pricing). |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `TaxCodes` | array of string [Tax Codes](configuration.md#tax-rates) | required | Tax codes to be applied to the item. (Note, you can only define one tax when sending `GrossValue`. For multiple taxes, use `NetValue`)|

### Response

```javascript
{
    "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `OrderId` | string | required | Unique identifier of the created order. |

## Get all companionships

Returns all companionships based on customers, reservations or reservation groups. One of them must be specified in the request.

### Request

`[PlatformAddress]/api/connector/v1/companionships/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerIds": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ],
    "ReservationIds": [
        "bfee2c44-1f84-4326-a862-5289598f6e2d"
    ],
    "ReservationGroupIds": [
        "c704dff3-7811-4af7-a3a0-7b2b0635ac59"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerIds` | array of string | optional | Unique identifiers of [Customer](customers.md#customer)s. |
| `ReservationIds` | array of string | optional | Unique identifiers of [Reservation](reservations.md#reservation)s. |
| `ReservationGroupIds` | array of string | optional | Unique identifiers of [Reservation group](reservations.md#reservation-group)s. |
| `Extent` | [Companionship extent](#companionship-extent) | required | Extent of data to be returned. E.g. it is possible to specify that together with the companionships, customers, reservations, and reservation groups should be also returned. |

#### Companionship extent

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Customers` | bool | optional | Whether the response should contain customers. |
| `Reservations` | bool | optional | Whether the response should contain reservations. |
| `ReservationGroups` | bool | optional | Whether the response should contain reservation groups. |

### Response

```javascript
{
    "Companionships": [
        {
            "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
            "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "ReservationGroupId": "c704dff3-7811-4af7-a3a0-7b2b0635ac59",
            "ReservationId": "bfee2c44-1f84-4326-a862-5289598f6e2d"
        }
    ],
    "Customers": null,
    "Reservations": null,
    "ReservationGroups": null
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Companionships` | array of [Companionship](#companionship) | required | Companionships. |
| `Customers` | array of [Customer](customers.md#customer) | optional | Customers that belong to the companionships. |
| `Reservations` | array of [Reservation](reservations.md#reservation) | optional | The accompanied reservations. |
| `ReservationGroups` | array of [Reservation group](reservations.md#reservation-group) | optional | The accompanied reservation groups. |

#### Companionship

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of [Companionship](#Companionship). |
| `CustomerId` | string | required | Unique identifier of [Customer](customers.md#customer). |
| `ReservationId` | string | optional | Unique identifier of [Reservation](reservations.md#reservation). |
| `ReservationGroupId` | string | required | Unique identifier of [Reservation group](reservations.md#reservation-group). |
