# Services

## Get all services

Returns all services offered by the enterprise.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/services/getAll`

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
    "fc79a518-bc69-45b8-93bd-83326201bd14",
    "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
  ],
  "UpdatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns the resource categories for all enterprises within scope of the Access Token. |
| `ServiceIds` | array of string | optional, max 1000 items | Unique identifiers of [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |

### Response

```javascript
{
  "Services": [
    {
      "Id": "fc79a518-bc69-45b8-93bd-83326201bd14",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "IsActive": true,
      "Name": "Restaurant",
      "Options": {
        "BillAsPackage": false
      },
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
      },
      "ExternalIdentifier": "SVCE-Restaurant"
    },
    {
      "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "IsActive": true,
      "Name": "Accommodation",
      "Options": {
        "BillAsPackage": true
      },
      "Data": {
        "Discriminator": "Bookable",
        "Value": {
          "StartOffset": "P0M0DT15H0M0S",
          "EndOffset": "P0M0DT12H0M0S",
          "OccupancyStartOffset": "P0M0DT15H0M0S",
          "OccupancyEndOffset": "P0M0DT12H0M0S",
          "TimeUnitPeriod": "Day"
        }
      },
      "ExternalIdentifier": "SVCE-Accomm"
    }
  ],
  "Cursor": "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Services` | array of [Service](#Service) | optional | Services offered by the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Service
The reservable service (e.g. accommodation, parking) associated with the access token of the service scoped integration.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `IsActive` | boolean | required | Whether the service is still active. |
| `Name` | string | optional | Name of the service. |
| ~~`StartTime`~~ | string | optional |  |
| ~~`EndTime`~~ | string | optional |  |
| `Options` | object | required | Options of the service. |
| `Promotions` | object | required | Promotions of the service. |
| ~~`Type`~~ | string | optional |  |
| `Ordering` | integer | required |  |
| `Data` | object | required | Additional information about the specific service. |
| `ExternalIdentifier` | string | optional | Identifier of the service from external system. |
| `CreatedUtc` | string | required | Creation date and time of the service in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the service in UTC timezone in ISO 8601 format. |

#### ServiceOptions
Options of the service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillAsPackage` | boolean | required |  |

#### Promotions
Promotions of the service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BeforeCheckIn` | boolean | required |  |
| `AfterCheckIn` | boolean | required |  |
| `DuringStay` | boolean | required |  |
| `BeforeCheckOut` | boolean | required |  |
| `AfterCheckOut` | boolean | required |  |
| `DuringCheckOut` | boolean | required |  |

#### Data
Additional information about the specific service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [ServiceType](#X-Ref-Name-ServiceType) | required |  |
| `value` | undefined | required |  |

#### ServiceType

- `Reservable`
- `Orderable`
- `Bookable`
- `Additional`

#### ServiceType

- `Reservable`
- `Orderable`
- `Bookable`
- `Additional`

## Get service availability

Returns availability of a bookable service for a specified time interval including applied availability adjustments. Availability will be returned for all service [time units](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit) that the specified time interval intersects. So, for example, an interval &#x60;1st Jan 23:00 UTC - 1st Jan 23:00 UTC&#x60; will result in one price for &#x60;2nd Jan&#x60;, while Interval &#x60;1st Jan 23:00 UTC - 2nd Jan 23:00 UTC&#x60; will result in two prices for &#x60;2nd Jan&#x60; and &#x60;3rd Jan&#x60; (assuming a time unit period of &quot;Day&quot;). UTC timestamps must correspond to the start boundary of a [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), e.g. 00:00 converted to UTC for a time unit of &quot;Day&quot;. Other timestamps are not permitted. The __maximum size of time interval__ depends on the service&#x27;s [time unit](https://mews-systems.gitbook.io/connector-api/operations/#time-unit): 367 hours if hours, 367 days if days, or 24 months if months.

### Request

`[PlatformAddress]/api/connector/v1/services/getAvailability`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
  "FirstTimeUnitStartUtc": "2017-01-01T23:00:00.000Z",
  "LastTimeUnitStartUtc": "2017-01-03T23:00:00.000Z"
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
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/#service) whose availability should be returned. |
| `FirstTimeUnitStartUtc` | string | optional | Start of the time interval, expressed as the timestamp for the start of the first [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | optional | End of the time interval, expressed as the timestamp for the start of the last [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service&#x27;s [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit): 367 hours if hours, 367 days if days, or 24 months if months. |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |

### Response

```javascript
{
  "CategoryAvailabilities": [
    {
      "Availabilities": [
        6,
        7,
        5
      ],
      "Adjustments ": [
        0,
        1,
        -1
      ],
      "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f"
    },
    {
      "Availabilities": [
        7,
        7,
        7
      ],
      "Adjustments ": [
        1,
        0,
        -1
      ],
      "CategoryId": "a0a7a5c5-c4ef-494a-8b34-6cca97629076"
    }
  ],
  "TimeUnitStartsUtc": [
    "2017-01-01T23:00:00Z",
    "2017-01-02T23:00:00Z",
    "2017-01-03T23:00:00Z"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ~~`DatesUtc`~~ | array of string | optional |  |
| `TimeUnitStartsUtc` | array of string | optional | Set of all time units covered by the time interval; expressed in UTC timezone ISO 8601 format. |
| `CategoryAvailabilities` | array of [CategoryAvailability](#CategoryAvailability) | optional | Resource category availabilities. |

#### CategoryAvailability

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | required |  |
| `Availabilities` | array of integer | optional |  |
| `Adjustments` | array of integer | optional |  |

## Get service availability (ver 2024-01-22)

&gt; ### Restricted!
&gt; This operation is currently in beta-test and as such it is subject to change.
Returns selected availability and occupancy metrics of a bookable service for a specified time interval, similar to [the availability &amp; occupancy report](https://help.mews.com/s/article/Availability-Occupancy-report). Availability will be returned for all service [time units](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit) that the specified time interval intersects. So, for example, an interval &#x60;1st Jan 23:00 UTC - 1st Jan 23:00 UTC&#x60; will result in one time unit for &#x60;2nd Jan&#x60;, while Interval &#x60;1st Jan 23:00 UTC - 2nd Jan 23:00 UTC&#x60; will result in two time units for &#x60;2nd Jan&#x60; and &#x60;3rd Jan&#x60; (assuming a time unit period of &quot;Day&quot;). UTC timestamps must correspond to the start boundary of a [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), e.g. 00:00 converted to UTC for a time unit of &quot;Day&quot;. Other timestamps are not permitted. The __maximum size of time interval__ depends on the service&#x27;s [time unit](https://mews-systems.gitbook.io/connector-api/operations/#time-unit): 367 hours if hours, 367 days if days, or 24 months if months.

### Request

`[PlatformAddress]/api/connector/v1/services/getAvailability/2024-01-22`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
  "FirstTimeUnitStartUtc": "2024-02-01T23:00:00.000Z",
  "LastTimeUnitStartUtc": "2024-02-05T23:00:00.000Z",
  "Metrics": [
    "OutOfOrderBlocks",
    "PublicAvailabilityAdjustment",
    "OtherServiceReservationCount",
    "Occupied",
    "ConfirmedReservations",
    "OptionalReservations",
    "BlockAvailability",
    "AllocatedBlockAvailability",
    "UsableResources",
    "ActiveResources"
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
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/#service) whose availability should be returned. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service&#x27;s [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit): 367 hours if hours, 367 days if days, or 24 months if months. |
| `Metrics` | array of [ResourceAvailabilityMetricTypeEnum](#X-Ref-Name-ResourceAvailabilityMetricTypeEnum) | required | Set of [Service availability metrics](https://mews-systems.gitbook.io/connector-api/operations/#service-availability-metrics) to be returned. |

#### ResourceAvailabilityMetricTypeEnum
OutOfOrderBlocks

PublicAvailabilityAdjustment

OtherServiceReservationCount

Occupied

ConfirmedReservations

OptionalReservations

BlockAvailability

AllocatedBlockAvailability

UsableResources

ActiveResources

- `OutOfOrderBlocks`
- `PublicAvailabilityAdjustment`
- `OtherServiceReservationCount`
- `Occupied`
- `ConfirmedReservations`
- `OptionalReservations`
- `BlockAvailability`
- `AllocatedBlockAvailability`
- `UsableResources`
- `ActiveResources`

### Response

```javascript
{
  "TimeUnitStartsUtc": [
    "2024-01-31T23:00:00Z",
    "2024-02-01T23:00:00Z",
    "2024-02-02T23:00:00Z",
    "2024-02-03T23:00:00Z",
    "2024-02-04T23:00:00Z"
  ],
  "ResourceCategoryAvailabilities": [
    {
      "ResourceCategoryId": "d1801d11-fe8d-404b-a26f-af170189605a",
      "Metrics": {
        "OutOfOrderBlocks": [
          0,
          1,
          0,
          0,
          1
        ],
        "PublicAvailabilityAdjustment": [
          7,
          5,
          4,
          3,
          4
        ],
        "OtherServiceReservationCount": [
          0,
          0,
          1,
          0,
          0
        ],
        "Occupied": [
          7,
          5,
          4,
          3,
          4
        ],
        "ConfirmedReservations": [
          7,
          5,
          4,
          3,
          4
        ],
        "OptionalReservations": [
          0,
          2,
          0,
          0,
          1
        ],
        "BlockAvailability": [
          0,
          0,
          1,
          0,
          0
        ],
        "AllocatedBlockAvailability": [
          0,
          0,
          0,
          1,
          0
        ],
        "UsableResources": [
          8,
          8,
          8,
          8,
          8
        ],
        "ActiveResources": [
          8,
          8,
          8,
          8,
          8
        ]
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TimeUnitStartsUtc` | array of string | required | Set of all time units covered by the time interval; expressed in UTC timezone ISO 8601 format. |
| `ResourceCategoryAvailabilities` | array of [Resource category availability (ver 2024-01-22)](#ResourceCategoryAvailabilityV20240122) | required | Resource category availabilities. |

#### Resource category availability (ver 2024-01-22)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceCategoryId` | string | required |  |
| `Metrics` | object | required | Dictionary keys are names of [Service availability metrics](https://mews-systems.gitbook.io/connector-api/operations/#service-availability-metrics), values are arrays of integers with metric values for corresponding time unit in TimeUnitStartsUtc. |

## Update service availability

Updates the number of available resources in [Resource category](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource-category) by a certain amount (relative adjustment). Note that availabilities are defined per time unit, so when the server receives the UTC interval, it first converts it to enterprise timezone and updates the availability on all time units that the interval intersects. It&#x27;s not allowed to update past availabilities outside of &#x60;EditableHistoryInterval&#x60;, future updates are allowed for up to 5 years.

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
      "FirstTimeUnitStartUtc": "2020-10-05T23:00:00Z",
      "LastTimeUnitStartUtc": "2020-10-05T23:00:00Z",
      "AvailabilityBlockId": "23e85a44-d95a-4dcf-9f36-acb000b10abe",
      "ResourceCategoryId": "46bc1498-38cf-4d03-b144-aa69012f5d50",
      "UnitCountAdjustment": {
        "Value": 6
      }
    },
    {
      "FirstTimeUnitStartUtc": "2020-10-07T23:00:00Z",
      "LastTimeUnitStartUtc": "2020-10-08T23:00:00Z",
      "ResourceCategoryId": "46bc1498-38cf-4d03-b144-aa69012f5d50",
      "UnitCountAdjustment": {}
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
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/#service) to update. |
| `AvailabilityUpdates` | array of [ServiceAvailabilityUpdateData](#ServiceAvailabilityUpdateData) | required, max 1000 items | Availability updates. |

#### ServiceAvailabilityUpdateData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FirstTimeUnitStartUtc` | string | optional |  |
| `LastTimeUnitStartUtc` | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `ResourceCategoryId` | string | required |  |
| `UnitCountAdjustment` | object | required |  |
| `AvailabilityBlockId` | string | optional |  |

#### Int32NullableUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | integer | optional |  |

### Response

```javascript
{}
```
