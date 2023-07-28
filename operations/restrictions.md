# Restrictions

## Get all restrictions

Returns all restrictions of the default service provided by the enterprise.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/restrictions/getAll`

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
    "ResourceCategoryIds": [
        "34c29e73-c8db-4e93-b51b-981e42655e03"
    ],
    "RateIds": [
        "ed4b660b-19d0-434b-9360-a4de2ea42eda"
    ],
    "Origin": "Integration",
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
    },
   "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service) from which the restrictions are requested. |
| `ResourceCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource categories](resources.md#resource-category). |
| `RateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](rates.md#rate). Returns all restrictions that affect the given rates, i.e. ones without any [Restriction Conditions](#restriction-conditions), ones assigned directly to specified rates, ones assigned to [Rate groups](rates.md#rate-group) of specified rates, or ones inherited from base rates. |
| `BaseRateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](rates.md#rate). Returns only those restrictions which have matching `BaseRateId` set in [Restriction Conditions](#restriction-conditions). |
| `ExactRateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](rates.md#rate). Returns only those restrictions which have matching `ExactRateId` set in [Restriction Conditions](#restriction-conditions). |
| `Origin` | string | optional | [Restriction origin](#restriction-origin). Returns only those restrictions which have matching `Origin` or all if not specified. |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) is active. Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) was created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) was updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{  
   "Restrictions": [  
      {  
         "Id": "40c24757-c16e-4094-91d3-4ca952e488a1",
         "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
         "ExternalIdentifier": "5678",
         "Origin": "Integration",
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
         "Origin": "Integration",
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
   ],
   "Cursor": "b40ac4a8-f5da-457d-88fe-7a895e1580ab"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Restrictions` | array of [Restriction](#restriction) | required | Restrictions of the default service. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Restriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the restriction. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `ExternalIdentifier` | string | optional | External identifier of the restriction. |
| `Origin` | string | required | [Restriction origin](#restriction-origin) |
| `Conditions` | [Restriction Conditions](#restriction-conditions) | required | The conditions or rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | [Restriction Exceptions](#restriction-exceptions) | optional | The rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

#### Restriction Conditions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string | required | [Restriction type](#restriction-type). |
| `ExactRateId` | string | optional | Unique identifier of the restricted exact [Rate](rates.md#rate). |
| `BaseRateId` | string | optional | Unique identifier of the restricted base [Rate](rates.md#rate). |
| `RateGroupId` | string | optional | Unique identifier of the restricted [Rate group](rates.md#rate-group). |
| `ResourceCategoryId` | string | optional | Unique identifier of the restricted [Resource category](resources.md#resource-category). |
| `ResourceCategoryType` | string | optional | Name of the restricted [Resource category type](resources.md#resource-category-type). |
| `StartUtc` | string | optional | Start date of the restriction time interval, specified in ISO 8601 format and adjusted to UTC - see [Datetimes](../guidelines/serialization.md#datetimes) for important information on format and implementation. |
| `EndUtc` | string | optional | End date of the restriction time interval, specified in ISO 8601 format and adjusted to UTC - see [Datetimes](../guidelines/serialization.md#datetimes) for important information on format and implementation. |
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

#### Restriction origin

* `User` - Restriction was created by a user in Mews.
* `Integration`- Restriction was created by a 3rd-party integration.

## Add restrictions

Adds new restrictions with the specified conditions. Note care is needed to specify `StartUtc` and `EndUtc` in the correct format - see [Datetimes](../guidelines/serialization.md#datetimes).

> **Important:** If consecutive restrictions are sent with the exact same conditions and exceptions, no attempt at merging them into a single restriction is made. This means that there can be a large number of restrictions per service, leading to sub-optimal performance. A quota limit of 150000 has been introduced for this reason. To mitigate the issue, the preferred way to add restrictions is new operation [Set restrictions](#set-restrictions). The new operation is currently marked as 'Restricted' and subject to change as part of beta testing, but in time we expect that to replace [Add restrictions](#add-restrictions).

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
| `Conditions` | [Restriction Conditions](#restriction-conditions) | required | The conditions or rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | [Restriction Exceptions](#restriction-exceptions) | optional | The rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

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
> This operation is currently in beta-test and as such it is subject to change. Use of this operation must be enabled per enterprise. Please contact the Technical Partner Support team in order to enable it.

Adds new restrictions with the specified conditions. For improved efficiency, multiple similar restrictions will be merged into a single restriction - see [Merging algorithm](#merging-algorithm). A quota of 150000 restrictions per service applies, although it is unlikely to be exceeded because of the [Merging algorithm](#merging-algorithm).
Note care is needed to specify `StartUtc` and `EndUtc` in the correct format - see [Datetimes](../guidelines/serialization.md#datetimes). The validation of these properties is stronger in this operation than for [Add restrictions](#add-restrictions).

### Merging algorithm

If a restriction already exists with the same conditions, or if multiple supplied restrictions match in all properties but differ in time interval and follow each other chronologically, a merging algorithm is applied to combine them.
This reduces the overall number of restrictions and improves system performance. The merging algorithm is as follows:

- A. If the exceptions of the new restriction match the old restriction:
   1) If the new interval is longer than the old one, a new restriction is created joining the two intervals.
   2) If the new interval is shorter, no changes are made.
- B. If the exceptions of the new restriction do _not_ match the old restriction:
   1) If the new interval overlaps the old interval, the old restriction will be spliced before and after the new interval. Restrictions matching the old restriction are then added at the appropriate interval along with the new restriction.
   2) If the new interval does _not_ overlap the old interval, the new restriction is added as usual.

### Affected restrictions

Only restrictions created through the API are affected by this operation, _not_ restrictions created by the user within **Mews Operations**. Similarly, if a user creates a restriction in **Mews Operations**, this will _not_ affect restrictions created through the API.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/set`

```javascript
{  
   "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
   "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
   "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
   "Data": [  
      {  
         "Type": "Start",
         "StartUtc": "2023-02-15T00:00:00Z",
         "EndUtc": "2023-02-22T00:00:00Z",
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
         "Type": "Start",
         "StartUtc": "2023-02-23T00:00:00Z",
         "EndUtc": "2023-03-03T00:00:00Z",
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
| `Data` | array of [Restriction set data](#restriction-set-data) | required | Parameters of restrictions. |

#### Restriction set data
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string | required | [Restriction type](#restriction-type). |
| `ExactRateId` | string | optional | Unique identifier of the restricted exact [Rate](rates.md#rate). |
| `BaseRateId` | string | optional | Unique identifier of the restricted base [Rate](rates.md#rate). |
| `RateGroupId` | string | optional | Unique identifier of the restricted [Rate group](rates.md#rate-group). |
| `ResourceCategoryId` | string | optional | Unique identifier of the restricted [Resource category](resources.md#resource-category). |
| `ResourceCategoryType` | string | optional | Name of the restricted [Resource category type](resources.md#resource-category-type). |
| `StartUtc` | string | optional | Start date of the restriction time interval, specified in ISO 8601 format and adjusted to UTC - see [Datetimes](../guidelines/serialization.md#datetimes) for important information on format and implementation. |
| `EndUtc` | string | optional | End date of the restriction time interval, specified in ISO 8601 format and adjusted to UTC - see [Datetimes](../guidelines/serialization.md#datetimes) for important information on format and implementation. |
| `Days` | [DaysParameters](#days-parameters) | required | The restricted days of week. |
| `MinAdvance` | string | optional | The minimum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MaxAdvance` | string | optional | The maximum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MinLength` | string | optional | Minimal reservation length in ISO 8601 duration format. |
| `MaxLength` | string | optional | Maximal reservation length in ISO 8601 duration format. |
| `MinPrice` | [Currency value](accountingitems.md#currency-value)| optional | Value of the minimum price per time unit. |
| `MaxPrice` | [Currency value](accountingitems.md#currency-value)| optional | Value of the maximum price per time unit. |

## Clear restrictions

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change. Use of this operation must be enabled per enterprise. Please contact the Technical Partner Support team in order to enable it.

Deletes restrictions that [match the conditions](#matching-conditions) using the [splicing algorithm](#splicing-algorithm). This operation is intended to be used alongside [Set restrictions](#set-restrictions).

The specified conditions must be met exactly - see [Matching conditions](#matching-conditions) below. The time interval, however, does not need to correspond with an existing restriction in the system, instead the API uses a splicing algorithm to work out how to divide up any existing restrictions to meet the specified time interval - see [Time interval splicing](#time-interval-splicing).

### Matching conditions

The specified conditions must be met exactly. For example:

A bookable service has two restrictions A and B. Restriction A applies to resource category C1 and rate R1. Restriction B applies to resource category C1 and to all rates.

If the [Clear restrictions](#clear-restrictions) operation is called, specifying a restriction condition of resource category C1 but with no rate specified (this defaults to all rates), then only Restriction B is cleared, not Restriction A.

### Time interval splicing

The time interval does not need to correspond to an existing restriction in the system, instead the API uses a splicing algorithm to work out how to divide up any existing restrictions to meet the specified time interval. For example:

An existing restriction in the system applies from 5th January to 25th January. As usual, time intervals are inclusive, meaning that the time interval includes both the 5th January and the 25th January.

If the [Clear restrictions](#clear-restrictions) operation is called, specifying a restriction time interval of 10th January to 20th January, i.e. within the original restriction A, then the time interval of restriction A is split into three separate intervals.

The original restriction A is deleted, and in its place new restriction B is created for the period of time from 5th January to 9th January inclusive, and new restriction C is created for the period of time from 21st January to 25th January. Thus the period 10th January to 20th January has been cleared, but without affecting other time periods.

### Affected restrictions

To avoid deleting user defined restrictions, the [Clear restrictions](#clear-restrictions) operation only affects restrictions created through the [Set restrictions](#clear-restrictions) operation or the [Clear restrictions](#clear-restrictions) operation. 


### Request

`[PlatformAddress]/api/connector/v1/restrictions/clear`

```javascript
{  
   "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
   "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
   "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
   "Data": [  
      {  
         "Type": "Start",
         "StartUtc": "2023-02-15T00:00:00Z",
         "EndUtc": "2023-02-22T00:00:00Z",
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
         }
      },
      {
         "Type": "Start",
         "StartUtc": "2023-02-23T00:00:00Z",
         "EndUtc": "2023-03-03T00:00:00Z",
         "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
         "Days": {
            "Monday": false,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
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
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) to which the restrictions apply. |
| `Data` | Array of [Restriction clear data](#restriction-clear-data) | required | Details of the matching conditions and time intervals for clearing restrictions. |

#### Restriction clear data
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string | required | [Restriction type](#restriction-type). |
| `ExactRateId` | string | optional | Unique identifier of the exact [Rate](rates.md#rate) to which the restriction applies. |
| `BaseRateId` | string | optional | Unique identifier of the base [Rate](rates.md#rate) to which the restriction applies. |
| `RateGroupId` | string | optional | Unique identifier of the [Rate group](rates.md#rate-group) to which the restriction applies. |
| `ResourceCategoryId` | string | optional | Unique identifier of the [Resource category](resources.md#resource-category) to which the restriction applies. |
| `ResourceCategoryType` | string | optional | Name of the [Resource category type](resources.md#resource-category-type) to which the restriction applies. |
| `StartUtc` | string | optional | Start date of the time interval for which the restriction conditions should be applied. This must be in UTC timezone in ISO 8601 format - see [Datetime](../guidelines/serialization.md#datetimes). |
| `EndUtc` | string | optional | Inclusive end date of the time interval for which the restriction conditions should be applied. This must be in UTC timezone in ISO 8601 format - see [Datetime](../guidelines/serialization.md#datetimes). |
| `Days` | [Days parameters](#days-parameters) | required | The days of week to which the restriction applies. |

### Response

```javascript
{}
```

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
