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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "Services": [
        {
            "Id": "fc79a518-bc69-45b8-93bd-83326201bd14",
            "IsActive": true,
            "Name": "Restaurant",
            "Data": {
                "Discriminator": "Additional",
                "Value": {
                    "Promotions": {
                        "BeforeCheckIn": false,
                        "AfterCheckIn": false,
                        "DuringStay": false,
                        "BeforeCheckOut": false,
                        "AfterCheckOut": false,
                        "DuringCheckOut": false
                    }
                }
            }
        },
        {
            "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Accommodation",
            "Data": {
                "Discriminator": "Bookable",
                "Value": {
                    "StartOffset": "P0M0DT15H0M0S",
                    "EndOffset": "P0M0DT12H0M0S",
                    "OccupancyStartOffset": "P0M0DT15H0M0S",
                    "OccupancyEndOffset": "P0M0DT12H0M0S",
                    "TimeUnit": "Day"
                }
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Services` | array of [Service](#service) | required | Services offered by the enterprise. |

#### Service

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service. |
| `IsActive` | boolean | required | Whether the service is still active. |
| `Name` | string | required | Name of the service. |
| `Data` | [Service data](#service-data) | required | Additional information about the specific service. |

#### Service data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Service data discriminator](#service-data-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on [Service data discriminator](#service-data-discriminator). |

#### Service data discriminator

* `Bookable` - Data specific to a bookable service.
* `Additional` - Data specific to an additional service.

#### Bookable service data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartOffset` | string | required | Offset from the start of the time unit defining the default start of the service orders in ISO 8601 duration format. |
| `EndOffset` | string | required | Offset from the end of the time unit defining the default end of the service orders in ISO 8601 duration format. |
| `OccupancyStartOffset` | string | required | Offset from the start of the time unit defining the occupancy start of the service in ISO 8601 duration format that is considered regarding the availability and reporting. |
| `OccupancyEndOffset` | string | required | Offset from the end of the time unit defining the occupancy end of the service in ISO 8601 duration format that is considered regarding the availability and reporting. |
| `TimeUnit` | [Time unit](#time-unit) | required | Time unit of the service. |

Time units represent a fixed, finite time interval: a minute, a day, a month, etc. A Time unit defines the operable periods for a bookable service. We currently only support the Day unit.
We think of the daily time unit as the physical time unit that starts at midnight and ends at midnight the following day.

Start offsets are anchored to the start of the time unit and end offsets are anchored to the end of the time unit.
`StartOffset` and `EndOffset` define the default start and end of the service (so, the service orders).
`OccupancyStartOffset` and `OccupancyEndOffset` define the time where the space is considered occupied in Mews. 

Positive end offsets of the daily time unit define the nightly service as depicted in the diagram below.
![](../.gitbook/assets/timeunits-connector-night.png)

Negative or zero end offsets of the daily time unit define the daily service as depicted on the picture below.
![](../.gitbook/assets/timeunits-connector-day.png)

#### Time unit

* `Day`
* ...

#### Additional service data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Promotions` | [Promotions](#promotions) | required | Promotions of the service. |

##### Promotions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BeforeCheckIn` | boolean | required | Whether it can be promoted before check-in. |
| `AfterCheckIn` | boolean | required | Whether it can be promoted after check-in. |
| `DuringStay` | boolean | required | Whether it can be promoted during stay. |
| `BeforeCheckOut` | boolean | required | Whether it can be promoted before check-out. |
| `AfterCheckOut` | boolean | required | Whether it can be promoted after check-out. |
| `DuringCheckOut` | boolean | required | Whether it can be promoted during check-out. | 

## Get service availability

Returns availability of a bookable service in the specified interval including applied availability adjustments. The response contains availability for all dates that the specified interval intersects.

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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) whose availability should be returned. |
| `StartUtc` | string | required, max length 3 months | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required, max length 3 months | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "CategoryAvailabilities": [
        {
            "Availabilities": [ 6, 7, 5 ],
            "Adjustments ": [ 0, 1, -1 ],
            "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f"
        },
        {
            "Availabilities": [ 7, 7, 7 ],
            "Adjustments ": [ 1, 0, -1 ],
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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryAvailabilities` | array of [Resource category availability](resources.md#resource-category-availability) | required | Resource category availabilities. |
| `DatesUtc` | array of string | required | Covered dates in UTC timezone in ISO 8601 format. |

#### Resource category availability

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | required | Unique identifier of the [Resource category](resources.md#resource-category). |
| `Availabilities` | array of number | required | Absolute availabilities of the resource category in the covered dates. |
| `Adjustments` | array of number | required | Relative availability adjustments set for resource category in the covered dates. |

## Update service availability

Updates the number of available resources in [Resource category](resources.md#resource-category) by a certain amount (relative adjustment). Note that availabilities are defined daily, so when the server receives the UTC interval, it first converts it to enterprise timezone and updates the price on all dates that the interval intersects. It's not allowed to update past availabilities outside of `EditableHistoryInterval`, future updates are allowed for up to 5 years.

### Request

`[PlatformAddress]/api/connector/v1/services/updateAvailability`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "AvailabilityUpdates": [
        {
            "StartUtc": "2020-10-05T00:00:00Z",
            "EndUtc": "2020-10-05T00:00:00Z",
            "AvailabilityBlockId": "23e85a44-d95a-4dcf-9f36-acb000b10abe",
            "ResourceCategoryId": "46bc1498-38cf-4d03-b144-aa69012f5d50",
            "UnitCountAdjustment": { "Value": 6 }
        },
        {
            "StartUtc": "2020-10-07T00:00:00Z",
            "EndUtc": "2020-10-08T00:00:00Z",
            "ResourceCategoryId": "46bc1498-38cf-4d03-b144-aa69012f5d50",
            "UnitCountAdjustment": { }
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) to update. |
| `AvailabilityUpdates` | array of [Availability update](#availability-update) | required, max 1000 items | Availability updates. |

#### Availability update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `AvailabilityBlockId` | string | optional | Unique identifier of the [Availability block](availabilityblocks.md#availability-block) whose availability to update. |
| `ResourceCategoryId` | string | required | Unique identifier of the [Resource category](resources.md#resource-category) whose availability to update. |
| `UnitCountAdjustment` | [Number update value](#number-update-value) | required | Adjustment value to be applied on the interval, can be both positive and negative (relative adjustment, not an absolute number). If specified without `Value` parameter, removes all adjustments within the interval. |

#### Number update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | number | optional | Value which is to be updated. |

### Response

```javascript
{}
```
