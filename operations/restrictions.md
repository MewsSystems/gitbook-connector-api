# Restrictions

## Get all restrictions

Returns all restrictions of the default service provided by the enterprise.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| ~~`TimeFilter`~~ | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `RestrictionIds` | array of string | optional, max 1000 items |  |
| `ResourceCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource categories](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource-category). |
| `RateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate). Returns all restrictions that affect the given rates, i.e. ones without any [Restriction Conditions](https://mews-systems.gitbook.io/connector-api/operations/#restriction-conditions), ones assigned directly to specified rates, ones assigned to [Rate groups](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate-group) of specified rates, or ones inherited from base rates. |
| `ExactRateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate). Returns only those restrictions which have matching ExactRateId set in [Restriction Conditions](https://mews-systems.gitbook.io/connector-api/operations/#restriction-conditions). |
| `BaseRateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate). Returns only those restrictions which have matching BaseRateId set in [Restriction Conditions](https://mews-systems.gitbook.io/connector-api/operations/#restriction-conditions). |
| `Origin` | [RestrictionOrigin](#X-Ref-Name-RestrictionOrigin) | required | [Restriction origin](https://mews-systems.gitbook.io/connector-api/operations/#restriction-origin). Returns only those restrictions which have matching Origin or all if not specified. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service) from which the restrictions are requested. |

#### RestrictionOrigin

- `User`
- `Integration`

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
| `Restrictions` | array of [Restriction](#Restriction) | optional | Restrictions of the default service. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Add restrictions

Adds new restrictions with the specified conditions. Note care is needed to specify &#x60;StartUtc&#x60; and &#x60;EndUtc&#x60; in the correct format - see [Datetimes](https://mews-systems.gitbook.io/connector-api/guidelines/serialization/#datetimes).
&gt; **Important:** If consecutive restrictions are sent with the exact same conditions and exceptions, no attempt at merging them into a single restriction is made. This means that there can be a large number of restrictions per service, leading to sub-optimal performance. A quota limit of 150000 has been introduced for this reason. To mitigate the issue, the preferred way to add restrictions is new operation [Set restrictions](https://mews-systems.gitbook.io/connector-api/operations/#set-restrictions). The new operation is currently marked as &#x27;Restricted&#x27; and subject to change as part of beta testing, but in time we expect that to replace [Add restrictions](https://mews-systems.gitbook.io/connector-api/operations/#add-restrictions).

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
        "MaxLength": "P0M7DT0H0M0S"
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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) restrictions will be added in. |
| `Restrictions` | array of [RestrictionData](#RestrictionData) | required | Parameters of restrictions. |

#### RestrictionData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional |  |
| `ExternalIdentifier` | string | optional |  |
| `Conditions` | object | required |  |
| `Exceptions` | object | required |  |

#### RestrictionConditionsData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string | required |  |
| `ExactRateId` | string | optional |  |
| `BaseRateId` | string | optional |  |
| `RateGroupId` | string | optional |  |
| `ResourceCategoryId` | string | optional |  |
| `ResourceCategoryType` | [ResourceCategoryType](#X-Ref-Name-ResourceCategoryType) | required |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `Days` | array of string | optional |  |
| `Hours` | object | required |  |

#### ResourceCategoryType

- `Room`
- `Bed`
- `Dorm`
- `Apartment`
- `Suite`
- `Villa`
- `Site`
- `Office`
- `MeetingRoom`
- `ParkingSpot`
- `Desk`
- `TeamArea`
- `Membership`
- `Tent`
- `CaravanOrRV`
- `UnequippedCampsite`
- `Bike`

#### ResourceCategoryType

- `Room`
- `Bed`
- `Dorm`
- `Apartment`
- `Suite`
- `Villa`
- `Site`
- `Office`
- `MeetingRoom`
- `ParkingSpot`
- `Desk`
- `TeamArea`
- `Membership`
- `Tent`
- `CaravanOrRV`
- `UnequippedCampsite`
- `Bike`

#### HoursParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Zero` | boolean | required |  |
| `One` | boolean | required |  |
| `Two` | boolean | required |  |
| `Three` | boolean | required |  |
| `Four` | boolean | required |  |
| `Five` | boolean | required |  |
| `Six` | boolean | required |  |
| `Seven` | boolean | required |  |
| `Eight` | boolean | required |  |
| `Nine` | boolean | required |  |
| `Ten` | boolean | required |  |
| `Eleven` | boolean | required |  |
| `Twelve` | boolean | required |  |
| `Thirteen` | boolean | required |  |
| `Fourteen` | boolean | required |  |
| `Fifteen` | boolean | required |  |
| `Sixteen` | boolean | required |  |
| `Seventeen` | boolean | required |  |
| `Eighteen` | boolean | required |  |
| `Nineteen` | boolean | required |  |
| `Twenty` | boolean | required |  |
| `TwentyOne` | boolean | required |  |
| `TwentyTwo` | boolean | required |  |
| `TwentyThree` | boolean | required |  |

#### RestrictionExceptionsData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `MinAdvance` | string | optional |  |
| `MaxAdvance` | string | optional |  |
| `MinLength` | string | optional |  |
| `MaxLength` | string | optional |  |
| `MinPrice` | object | required | Total price of the reservation. |
| `MaxPrice` | object | required | Total price of the reservation. |
| `MaxReservationCount` | integer | optional |  |

#### CurrencyValueOld
Total price of the reservation.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |

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
| `Restrictions` | array of [Added restriction](#AddedRestriction) | optional | The added restrictions. |

#### Added restriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional | Identifier of the restriction within the transaction. |
| `Restriction` | object | required | The added restriction. |

#### Restriction
The added restriction.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the restriction. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `ExternalIdentifier` | string | optional | External identifier of the restriction. |
| `Origin` | string | optional | [Restriction origin](https://mews-systems.gitbook.io/connector-api/operations/#restriction-origin) |
| `Conditions` | object | required | The conditions or rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | object | required | The rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

#### RestrictionConditions
The conditions or rules that must be met by a reservation for the restriction to apply.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string | optional |  |
| `ExactRateId` | string | optional |  |
| `BaseRateId` | string | optional |  |
| `RateGroupId` | string | optional |  |
| `ResourceCategoryId` | string | optional |  |
| `ResourceCategoryType` | string | optional |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `Days` | array of string | optional |  |
| `Hours` | object | required |  |

#### Hours

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Zero` | boolean | required |  |
| `One` | boolean | required |  |
| `Two` | boolean | required |  |
| `Three` | boolean | required |  |
| `Four` | boolean | required |  |
| `Five` | boolean | required |  |
| `Six` | boolean | required |  |
| `Seven` | boolean | required |  |
| `Eight` | boolean | required |  |
| `Nine` | boolean | required |  |
| `Ten` | boolean | required |  |
| `Eleven` | boolean | required |  |
| `Twelve` | boolean | required |  |
| `Thirteen` | boolean | required |  |
| `Fourteen` | boolean | required |  |
| `Fifteen` | boolean | required |  |
| `Sixteen` | boolean | required |  |
| `Seventeen` | boolean | required |  |
| `Eighteen` | boolean | required |  |
| `Nineteen` | boolean | required |  |
| `Twenty` | boolean | required |  |
| `TwentyOne` | boolean | required |  |
| `TwentyTwo` | boolean | required |  |
| `TwentyThree` | boolean | required |  |

#### RestrictionExceptions
The rules that prevent the restriction from applying to a reservation, even when all conditions have been met.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `MinAdvance` | string | optional |  |
| `MaxAdvance` | string | optional |  |
| `MinLength` | string | optional |  |
| `MaxLength` | string | optional |  |
| `MinPrice` | object | required | Total price of the reservation. |
| `MaxPrice` | object | required | Total price of the reservation. |
| `MinReservationCount` | integer | optional |  |
| `MaxReservationCount` | integer | optional |  |

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `RestrictionIds` | array of string | required | Unique identifiers of the [Restrictions](https://mews-systems.gitbook.io/connector-api/operations/#restriction). |

### Response

```javascript
{}
```

## Set restrictions

&gt; ### Restricted!
&gt; This operation is currently in beta-test and as such it is subject to change. Use of this operation must be enabled per enterprise. Please contact the Technical Partner Support team in order to enable it.
Adds new restrictions with the specified conditions. For improved efficiency, multiple similar restrictions will be merged into a single restriction - see [Merging algorithm](https://mews-systems.gitbook.io/connector-api/operations/#merging-algorithm). A quota of 150000 restrictions per service applies, although it is unlikely to be exceeded because of the [Merging algorithm](https://mews-systems.gitbook.io/connector-api/operations/#merging-algorithm).
Note care is needed to specify &#x60;StartUtc&#x60; and &#x60;EndUtc&#x60; in the correct format - see [Datetimes](https://mews-systems.gitbook.io/connector-api/guidelines/serialization/#datetimes). The validation of these properties is stronger in this operation than for [Add restrictions](https://mews-systems.gitbook.io/connector-api/operations/#add-restrictions).
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
      "MaxLength": "P0M7DT0H0M0S"
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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) restrictions will be set in. |
| `Data` | array of [RestrictionSetData](#RestrictionSetData) | required, max 1000 items | Parameters of restrictions. |

#### RestrictionSetData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | [RestrictionType](#X-Ref-Name-RestrictionType) | required |  |
| `ExactRateId` | string | optional |  |
| `BaseRateId` | string | optional |  |
| `RateGroupId` | string | optional |  |
| `ResourceCategoryId` | string | optional |  |
| `ResourceCategoryType` | [ResourceCategoryType](#X-Ref-Name-ResourceCategoryType) | required |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `Days` | object | required |  |
| `MinAdvance` | string | optional |  |
| `MaxAdvance` | string | optional |  |
| `MinLength` | string | optional |  |
| `MaxLength` | string | optional |  |
| `MinPrice` | object | required | Absolute value of the fee. |
| `MaxPrice` | object | required | Absolute value of the fee. |
| `MaxReservationCount` | integer | optional |  |

#### RestrictionType

- `Stay`
- `Start`
- `End`

#### DaysParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Monday` | boolean | required |  |
| `Tuesday` | boolean | required |  |
| `Wednesday` | boolean | required |  |
| `Thursday` | boolean | required |  |
| `Friday` | boolean | required |  |
| `Saturday` | boolean | required |  |
| `Sunday` | boolean | required |  |

#### CurrencyValue
Absolute value of the fee.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `Value` | number | required |  |

### Response

```javascript
{}
```

## Clear restrictions

&gt; ### Restricted!
&gt; This operation is currently in beta-test and as such it is subject to change. Use of this operation must be enabled per enterprise. Please contact the Technical Partner Support team in order to enable it.
Deletes restrictions that [match the conditions](https://mews-systems.gitbook.io/connector-api/operations/#matching-conditions) using the [splicing algorithm](https://mews-systems.gitbook.io/connector-api/operations/#splicing-algorithm). This operation is intended to be used alongside [Set restrictions](https://mews-systems.gitbook.io/connector-api/operations/#set-restrictions).
The specified conditions must be met exactly - see [Matching conditions](https://mews-systems.gitbook.io/connector-api/operations/#matching-conditions) below. The time interval, however, does not need to correspond with an existing restriction in the system, instead the API uses a splicing algorithm to work out how to divide up any existing restrictions to meet the specified time interval - see [Time interval splicing](https://mews-systems.gitbook.io/connector-api/operations/#time-interval-splicing).
### Matching conditions
The specified conditions must be met exactly. For example:
A bookable service has two restrictions A and B. Restriction A applies to resource category C1 and rate R1. Restriction B applies to resource category C1 and to all rates.
If the [Clear restrictions](https://mews-systems.gitbook.io/connector-api/operations/#clear-restrictions) operation is called, specifying a restriction condition of resource category C1 but with no rate specified (this defaults to all rates), then only Restriction B is cleared, not Restriction A.
### Time interval splicing
The time interval does not need to correspond to an existing restriction in the system, instead the API uses a splicing algorithm to work out how to divide up any existing restrictions to meet the specified time interval. For example:
An existing restriction in the system applies from 5th January to 25th January. As usual, time intervals are inclusive, meaning that the time interval includes both the 5th January and the 25th January.
If the [Clear restrictions](https://mews-systems.gitbook.io/connector-api/operations/#clear-restrictions) operation is called, specifying a restriction time interval of 10th January to 20th January, i.e. within the original restriction A, then the time interval of restriction A is split into three separate intervals.
The original restriction A is deleted, and in its place new restriction B is created for the period of time from 5th January to 9th January inclusive, and new restriction C is created for the period of time from 21st January to 25th January. Thus the period 10th January to 20th January has been cleared, but without affecting other time periods.
### Affected restrictions
To avoid deleting user defined restrictions, the [Clear restrictions](https://mews-systems.gitbook.io/connector-api/operations/#clear-restrictions) operation only affects restrictions created through the [Set restrictions](https://mews-systems.gitbook.io/connector-api/operations/#clear-restrictions) operation or the [Clear restrictions](https://mews-systems.gitbook.io/connector-api/operations/#clear-restrictions) operation.

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) to which the restrictions apply. |
| `Data` | array of [RestrictionClearData](#RestrictionClearData) | required, max 1000 items | Details of the matching conditions and time intervals for clearing restrictions. |

#### RestrictionClearData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | [RestrictionType](#X-Ref-Name-RestrictionType) | required |  |
| `ExactRateId` | string | optional |  |
| `BaseRateId` | string | optional |  |
| `RateGroupId` | string | optional |  |
| `ResourceCategoryId` | string | optional |  |
| `ResourceCategoryType` | [ResourceCategoryType](#X-Ref-Name-ResourceCategoryType) | required |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `Days` | object | required |  |

### Response

```javascript
{}
```
