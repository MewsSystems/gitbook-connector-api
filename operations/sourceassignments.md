<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Source assignments

## Get all source assignments (ver 2024-09-20)

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns all Sources assigned to Reservations. Each reservation can have multiple sources. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/sourceAssignments/getAll/2024-09-20`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationIds": [
    "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
  ],
  "Limitation": {
    "Count": 100
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ReservationIds` | array of string | optional, max 100 items | Unique identifiers of `Reservation`. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "SourceAssignments": [
    {
      "Id": "c5e11f73-7e85-4a3c-9fe1-872014a10b43",
      "ReservationId": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7",
      "SourceId": "22e42a59-b321-43f8-a5d1-af1f00e1bb8b",
      "IsPrimary": true,
      "UpdatedUtc": "2025-11-05T11:00:00Z"
    },
    {
      "Id": "5411ffd5-72c6-4ab3-b179-708bcac73d08",
      "ReservationId": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7",
      "SourceId": "bbe29c21-401a-4746-b97d-af1f00e1bb8b",
      "IsPrimary": false,
      "UpdatedUtc": "2025-11-11T05:00:00Z"
    }
  ],
  "Cursor": "5411ffd5-72c6-4ab3-b179-708bcac73d08"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SourceAssignments` | array of [Source assignments (ver 2024-09-20)](sourceassignments.md#source-assignments-ver-2024-09-20) | required | Assignments between `Reservation` and `Source`. |
| `Cursor` | string | optional | Opaque pagination cursor which can be used in `Limitation` to fetch newer source assignments. |

#### Source assignments (ver 2024-09-20)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the source assignment. |
| `ReservationId` | string | required | Unique identifier of the `Reservation`. |
| `SourceId` | string | required | Unique identifier of the `Source`. |
| `IsPrimary` | boolean | required | Specifies whether the source is primary for the `Reservation`. |
| `UpdatedUtc` | string | required | Date and time of the source assignment last update in UTC timezone in ISO 8601 format. |

## Get all source assignments

Returns all Sources assigned to a Reservation group. Each reservation group can have multiple sources. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/sourceAssignments/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationGroupIds": [
    "730d050c-8098-415a-95af-af2500a2de47"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-02-1T00:00:00Z",
    "EndUtc": "2023-02-28T00:00:00Z"
  },
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "Limitation": {
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ReservationGroupIds` | array of string | optional, max 1000 items | Unique identifiers of the `Reservation group`. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of `Reservation group` last update date and time. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "SourceAssignments": [
    {
      "Id": "670ef167-0380-4dd5-8dbb-af1500d3eb16",
      "ReservationGroupId": "730d050c-8098-415a-95af-af2500a2de47",
      "SourceId": "de6c3fcc-feb9-4385-92e0-af25008b864e",
      "IsPrimary": true
    },
    {
      "Id": "da272c89-3afc-4e6f-ad12-af2500a2de79",
      "ReservationGroupId": "730d050c-8098-415a-95af-af2500a2de47",
      "SourceId": "04db79fa-3a31-47c3-ae25-af25008b864e",
      "IsPrimary": false
    }
  ],
  "Cursor": "da272c89-3afc-4e6f-ad12-af2500a2de79"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SourceAssignments` | array of [Source assignment](sourceassignments.md#source-assignment) | required | Assignments between reservation group and sources. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest source assignment returned. This can be used in `Limitation` in a subsequent request to fetch the next batch of older source assignments. |

#### Source assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the source assignement. |
| `ReservationGroupId` | string | required | Unique identifier of the [Reservation group](reservations.md#reservation-group). |
| `SourceId` | string | required | Unique identifier of the [Source](sources.md#source). |
| `IsPrimary` | boolean | required | Specifies the primary source for the [Reservation group](reservations.md#reservation-group). |
