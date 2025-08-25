<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Service overbooking limits

## Get all service overbooking limits

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns all service overbooking limits. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/serviceOverbookingLimits/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceIds": [
    "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "8c1bd738-a505-4b29-aa71-9ecc2982b843"
  ],
  "ServiceOverbookingLimitIds": [
    "e654f217-d1b5-46be-a820-e93ba568dfac"
  ],
  "CollidingUtc": {
    "StartUtc": "2024-11-01T00:00:00Z",
    "EndUtc": "2024-11-30T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2024-11-01T00:00:00Z",
    "EndUtc": "2024-11-30T00:00:00Z"
  },
  "ActivityStates": [
    "Active"
  ],
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "Limitation": {
    "Count": 100,
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of `Service` associated with the service overbooking limits. |
| `ServiceOverbookingLimitIds` | array of string | optional, max 1000 items | Unique identifiers of the service overbooking limits. |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | optional | Interval in which the service overbooking limit is active. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the service overbooking limits were updated. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted, or both types of record. If not specified, only active records will be returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "ServiceOverbookingLimits": [
    {
      "Id": "e654f217-d1b5-46be-a820-e93ba568dfac",
      "ServiceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "FirstTimeUnitStartUtc": "2024-11-01T00:00:00Z",
      "LastTimeUnitStartUtc": "2024-11-30T00:00:00Z",
      "Limit": 10,
      "CreatedUtc": "2024-01-31T10:48:06Z",
      "UpdatedUtc": "2024-01-31T10:58:06Z",
      "IsActive": true
    }
  ],
  "Cursor": "e654f217-d1b5-46be-a820-e93ba568dfac"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOverbookingLimits` | array of [Service overbooking limit](serviceoverbookinglimits.md#service-overbooking-limit) | required | Service overbooking limits of the default service. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Service overbooking limit

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service overbooking limit. |
| `ServiceId` | string | required | Unique identifier of the `Service`. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. |
| `Limit` | integer | required | Number of overbookings allowed for the `Service`. |
| `CreatedUtc` | string | required | Timestamp in UTC timezone ISO 8601 format when the service overbooking was created. |
| `UpdatedUtc` | string | required | Timestamp in UTC timezone ISO 8601 format when the service overbooking was updated. |
| `IsActive` | boolean | required | Whether the service overbooking limit is still active. |

## Set service overbooking limits

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Adds new service overbooking limits with the specified conditions. Past overbooking limits cannot be updated outside of `OperationalEditableHistoryInterval`. Care is needed to specify `FirstTimeUnitStartUtc` and `LastTimeUnitStartUtc` in the correct format - see [Datetimes](../guidelines/serialization.md#datetimes). This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/serviceOverbookingLimits/set`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
  "SetServiceOverbookingLimits": [
    {
      "FirstTimeUnitStartUtc": "2024-11-01T00:00:00Z",
      "LastTimeUnitStartUtc": "2024-11-30T00:00:00Z",
      "Limit": 10
    }
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) overbooking limits will be set in. |
| `SetServiceOverbookingLimits` | array of [Service overbooking limits set parameters](serviceoverbookinglimits.md#service-overbooking-limits-set-parameters) | required, max 1000 items | Collection of service overbooking limits to be set. |

#### Service overbooking limits set parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service's [time unit](../concepts/time-units.md): 367 days. |
| `Limit` | integer | required | Number of overbookings allowed for the `Service`. Must be non-negative. |

### Response

```javascript
{}
```

## Clear service overbooking limits

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Deletes service overbooking limits that exactly match the specified conditions. This operation is intended to be used alongside `serviceOverbookingLimits/set`. The specified conditions must be met exactly. The time interval, however, does not need to correspond to an existing service overbooking limit in the system, instead the API uses a splicing algorithm to work out how to divide up any existing service overbooking limit to meet the specified time interval. Past overbooking limits cannot be cleared outside of `OperationalEditableHistoryInterval`. Care is needed to specify `FirstTimeUnitStartUtc` and `LastTimeUnitStartUtc` in the correct format - see [Datetimes](../guidelines/serialization.md#datetimes). This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/serviceOverbookingLimits/clear`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
  "ClearServiceOverbookingLimits": [
    {
      "FirstTimeUnitStartUtc": "2024-11-01T00:00:00Z",
      "LastTimeUnitStartUtc": "2024-11-30T00:00:00Z"
    }
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) overbooking limits will be set in. |
| `ClearServiceOverbookingLimits` | array of [Service overbooking limits clear parameters](serviceoverbookinglimits.md#service-overbooking-limits-clear-parameters) | required, max 1000 items | Collection of service overbooking limits to be cleared. |

#### Service overbooking limits clear parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service's time unit: 367 hours if hours, 367 days if days, or 60 months if months. |

### Response

```javascript
{}
```
