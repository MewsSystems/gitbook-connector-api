# Services

## Get all services

Returns all services offered by the enterprise.

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
| `Type` | string | [Service type](#services.md#service-type) | required | Type of the service. |

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

Returns availability of a reservation service in the specified interval. Note that response contains availability for all dates that the specified interval intersects.

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

Returns all products offered together with the specified services.

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
                "NetValue": 7.5,
                "GrossValue": 9
                "TaxValues": [
                    {
                        "Code": "UK-S",
                        "Value": 1.50
                    }
                ],
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
* `PerPerson`

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
        "RateGroups": true
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
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Rates` | array of [Rate](services.md#rate) | required | Rates of the default service. |
| `RateGroups` | array of [Rate group](services.md#rate-group) | required | Rate groups of the default service. |

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
| `RelativeAdjustment` | decimal | required | Specific amount which shows the difference between this rate and the base rate. |
| `AbsoluteAdjustment` | decimal | required | Relative amount which shows the difference between this rate and the base rate. |
| `EmptyUnitAdjustment` | decimal | required | Price adjustment for when the space booked with this rate is not full to capacity. |
| `ExtraUnitAdjustment` | decimal | required | Price adjustment for when the space booked with this rate exceeds capacity. |

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

Updates price of a rate in the specified intervals. If the `CategoryId` is specified, updates price of the corresponding [Space category](enterprises.md#space-category), otherwise updates the base price for all space categories. Note that prices are defined daily, so when the server receives the UTC interval, it first converts it to enterprise timezone and updates the price on all dates that the interval intersects. Only root rates can be updated (the rates that have no base rate, that have `BaseRateId` set to `null`).

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
| `RateId` | string | required | Unique identifier of the base [Rate](services.md#rate) to update. |
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

## Get all restrictions

Returns all restrictions of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/getAll`

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
   "Restrictions": [  
      {  
         "Id": "40c24757-c16e-4094-91d3-4ca952e488a1",
         "Conditions": {  
            "Type": "Stay",
            "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
            "BaseRateId": null,
            "RateGroupId": null,
            "SpaceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
            "SpaceType": null,
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
         "Conditions": {  
            "Type": "Start",
            "ExactRateId": null,
            "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
            "RateGroupId": null,
            "SpaceCategoryId": null,
            "SpaceType": "Room",
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
| `Restrictions` | array of [Restriction](services.md#restriction) | required | Restrictions of the default service. |

#### Restriction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `Conditions` | string | required | [Conditions](services.md#restriction-conditions) are rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | string | optional | [Exceptions](services.md#restriction-exceptions) are rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

#### Restriction Conditions

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string | required | [Restriction type](services.md#restriction-type). |
| `ExactRateId` | string | optional | Unique identifier of the restricted [ExactRate](services.md#rate). |
| `BaseRateId` | string | optional | Unique identifier of the restricted [BaseRate](services.md#rate). |
| `RateGroupId` | string | optional | Unique identifier of the restricted [RateGroup](services.md#rate-group). |
| `SpaceCategoryId` | string | optional | Unique identifier of the restricted [SpaceCategory](enterprises.md#space-category). |
| `SpaceType` | string | optional | Name of the restricted [Space type](services.md#space-type). |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](services.md#day) | required | The restricted days of week. |

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
   "Restrictions": [  
      {  
         "Identifier": "1234",
         "Conditions": {  
            "Type": "Start",
            "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
            "SpaceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
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
| `Restrictions` | array of [Restriction parameters](services.md#restriction-parameters) | required | Parameters of restrictions. |

#### Restriction parameters
| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the restriction within the transaction. |
| `Conditions` | string | required | [Conditions](services.md#restriction-conditions) are rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | string | optional | [Exceptions](services.md#restriction-exceptions) are rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

### Response

```javascript
{
   "Restrictions": [
      {
         "Identifier": "1234",
         "Restriction": {
            "Id": "40c24757-c16e-4094-91d3-4ca952e488a1",
            "Conditions": {
               "Type": "Stay",
               "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
               "BaseRateId": null,
               "RateGroupId": null,
               "SpaceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
               "SpaceType": null,
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
            "Conditions": {
               "Type": "Start",
               "ExactRateId": null,
               "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
               "RateGroupId": null,
               "SpaceCategoryId": null,
               "SpaceType": "Room",
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
| `Restrictions` | array of [Added restriction](services.md#added-restriction) | required | The added restrictions. |

#### Added restriction

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the restriction within the transaction. |
| `Restriction` | [Restriction](services.md#restriction) | required | The added restriction. |

## Delete restrictions

Removes restrictions from the service.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
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
| `RestrictionIds` | array of string | required | Unique identifiers of the [Restriction](services.md#restriction)s. |

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
            "UnitAmount": {
      		    "Currency": "GBP",
       		    "GrossValue": 2,
        	    "TaxCodes": [
                    "UK-S"
                    ]
            }
            "AccountingCategoryId": null
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
| `UnitAmount` | [Amount](services.md#amount) | optional | Unit amount of the product that overrides the cost defined in Mews. |

#### Item parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Count of units to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount](services.md#amount) | required | Unit amount, e.g. amount for one beer \(note that total amount of the item is therefore `UnitAmount` times `UnitAmount`\). |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the item. |

#### Amount

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `GrossValue` | decimal | required | Amount including tax. |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `TaxCodes` | array of string [Tax Codes](configuration.md#tax-rates) | required | Tax codes to be applied to the item. |

### Response

```javascript
{
    "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `OrderId` | string | required | Unique identifier of the created order. |

