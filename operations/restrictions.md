# Restrictions

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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service) from which the restrictions are requested. |
| `ResourceCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource categories](resources.md#resource-category). |
| `RateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](rates.md#rate). Returns all restrictions that affect given rates (i.e. ones without any [Conditions](#restriction-conditions), ones assigned directly to specified rates, ones assigned to [Rate group](rates.md#rate-group) of specified rates, or ones inherited from base rates).  |
| `BaseRateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](rates.md#rate). Returns only those restrictions which have matching `BaseRateId` set in [Conditions](#restriction-conditions). |
| `ExactRateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](rates.md#rate). Returns only those restrictions which have matching `ExactRateId` set in [Conditions](#restriction-conditions). |
| `CollidingUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) is active. Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) was created. |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) was updated. |

#### Time interval

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Restrictions` | array of [Restriction](#restriction) | required | Restrictions of the default service. |

#### Restriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the restriction. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `ExternalIdentifier` | string | optional | External identifier of the restriction. |
| `Conditions` | string | required | [Conditions](#restriction-conditions) are rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | string | optional | [Exceptions](#restriction-exceptions) are rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

#### Restriction Conditions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string | required | [Restriction type](#restriction-type). |
| `ExactRateId` | string | optional | Unique identifier of the restricted exact [Rate](rates.md#rate). |
| `BaseRateId` | string | optional | Unique identifier of the restricted base [Rate](rates.md#rate). |
| `RateGroupId` | string | optional | Unique identifier of the restricted [Rate group](rates.md#rate-group). |
| `ResourceCategoryId` | string | optional | Unique identifier of the restricted [Resource category](resources.md#resource-category). |
| `ResourceCategoryType` | string | optional | Name of the restricted [Resource category type](resources.md#resource-category-type). |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](#day) | optional | The restricted days of week. Will automatically be set to all values when not provided or when the service uses a time unit longer than a day.

#### Restriction Exceptions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `MinAdvance` | string | optional | The minimum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MaxAdvance` | string | optional | The maximum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MinLength` | string | optional | Minimal reservation length in ISO 8601 duration format. |
| `MaxLength` | string | optional | Maximal reservation length in ISO 8601 duration format. |
| `MinPrice` | [Currency value](accountingitems.md#currency-value)| optional | Value of the minimum price per time unit. |
| `MaxPrice` | [Currency value](accountingitems.md#currency-value)| optional | Value of the maximum price per time unit. |

#### Day

* `Monday`
* `Tuesday`
* `Wednesday`
* `Thursday`
* `Friday`
* `Saturday`
* `Sunday`

#### Restriction type

* `Stay` - guests can't stay within specified dates.
* `Start`- guests can't check in within specified dates.
* `End` - guests can't check out within specified dates.

## Add restrictions

Adds new restrictions with the specified conditions.

> **Important:** If consecutive restrictions are sent with the exact same conditions and exceptions, no attempt at merging them into a single restriction is made. This means that there can be a large number of restrictions per service, leading to sub-optimal performance. A quota limit of 150000 has been introduced for this reason. To mitigate the issue, the preferred way to add restrictions is new operation [Set restrictions](#set-restrictions). The new operation is currently marked as 'Restricted' and subject to change as part of beta testing, but in time we expect that to replace [Add restrictions](#add-restrictions).

This endpoint cannot be used in conjunction with [restrictions set endpoint](#set-restrictions).

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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) restrictions will be added in. |
| `Restrictions` | array of [Restriction parameters](#restriction-parameters) | required | Parameters of restrictions. |

#### Restriction parameters
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Restrictions` | array of [Added restriction](#added-restriction) | required | The added restrictions. |

#### Added restriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RestrictionIds` | array of string | required | Unique identifiers of the [Restrictions](#restriction). |

### Response

```javascript
{}
```

## Set restrictions

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change. Use of this operation must be enabled per enterprise. Please, contact the Technical Partner Support team in order to enable it.

Adds new restrictions with the specified conditions.

The `StartUtc` and `EndUtc` properties must be set to the midnight of the given date when converted to enterprise's local datetime. This is different from the `restrictions add` endpoint since it allowed setting different times. Restrictions are applied for all the dates within the interval including the `EndUtc` date.

If the supplied restrictions match in all properties but differ in interval and follow each other chronologically, the supplied restrictions will be joined into a single restriction. See [merging algorithm](#merging-algorithm).

A quota of 150000 restrictions per service applies, although it is unlikely to be exceeded because of the [merging algorithm](#merging-algorithm).

This endpoint cannot be used in conjunction with [restrictions add endpoint](#add-restrictions). Reason being that the [add endpoint](#add-restrictions) does not support the [merging algorithm](#merging-algorithm). This means that the [add endpoint](#add-restrictions) can be used to add a significant number of restriction, hitting the quota early and contributing to sub-optimal performance.

## Merging algorithm

If a restriction already exists with the same conditions, merging algorithm is applied to improve efficiency, as described below.

- A. If the exceptions of the new restriction match the old restriction:
   1) If the new interval is longer than the old one, new restriction is created joining the two intervals.
   2) If the new interval is shorter, no changes are made.
- B. If the exceptions of the new restriction do not match the old restriction:
   1) If the new interval overlaps the old interval, the old restriction will be spliced before and after the new interval. Restrictions matching the old restriction are then added at the appropriate interval along with the new restriction.
   2) If the new interval do not overlap the old interval, the new restriction is added as usual.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/set`

```javascript
{  
   "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
   "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
   "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
   "Restrictions": [  
      {  
         "Identifier": "1234",
         "ExternalIdentifier": "5678",
         "Type": "Start",
         "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
         "ResourceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
         "Days": {
            "Monday": false,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
         },
         "MinLength": "P0M2DT0H0M0S",
         "MaxLength": "P0M7DT0H0M0S",
      },
      {  
         "Identifier": "1235",
         "ExternalIdentifier": "5678",
         "Type": "Start",
         "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
         "Days": {
            "Monday": false,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
         },
         "MinAdvance": "P0Y0M1DT0H0M0S",
         "MaxAdvance": "P0Y0M3DT0H0M0S"
      }
   ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) restrictions will be set in. |
| `Data` | array of [RestrictionSetData](#restriction-set-data) | required | Parameters of restrictions. |

#### Restriction set data
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional | Identifier of the restriction within the transaction. |
| `ExternalIdentifier` | string | optional | External identifier of the restriction. |
| `Type` | string | required | [Restriction type](#restriction-type). |
| `ExactRateId` | string | optional | Unique identifier of the restricted exact [Rate](rates.md#rate). |
| `BaseRateId` | string | optional | Unique identifier of the restricted base [Rate](rates.md#rate). |
| `RateGroupId` | string | optional | Unique identifier of the restricted [Rate group](rates.md#rate-group). |
| `ResourceCategoryId` | string | optional | Unique identifier of the restricted [Resource category](resources.md#resource-category). |
| `ResourceCategoryType` | string | optional | Name of the restricted [Resource category type](resources.md#resource-category-type). |
| `StartUtc` | string | optional | Start date of the restricted interval in UTC timezone in ISO 8601 format. The time must be the midnight of the day when converted to enterprise's local time. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. The time must be the midnight of the day when converted to enterprise's local time. Restriction's `EndUtc` is inclusive meaning the restriction will apply on the date of `EndUtc`. |
| `Days` | [DaysParameters](#days-parameters) | required | The restricted days of week. |
| `MinAdvance` | string | optional | The minimum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MaxAdvance` | string | optional | The maximum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MinLength` | string | optional | Minimal reservation length in ISO 8601 duration format. |
| `MaxLength` | string | optional | Maximal reservation length in ISO 8601 duration format. |
| `MinPrice` | [Currency value](accountingitems.md#currency-value)| optional | Value of the minimum price per time unit. |
| `MaxPrice` | [Currency value](accountingitems.md#currency-value)| optional | Value of the maximum price per time unit. |

#### Days parameters
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Monday` | boolean | required | Monday enabled. |
| `Tuesday` | boolean | required | Tuesday enabled. |
| `Wednesday` | boolean | required | Wednesday enabled. |
| `Thursday` | boolean | required | Thursday enabled. |
| `Friday` | boolean | required | Friday enabled. |
| `Saturday` | boolean | required | Saturday enabled. |
| `Sunday` | boolean | required | Sunday enabled. |

### Response

```javascript
{}
```