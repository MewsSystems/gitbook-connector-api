# Source assignments

## Get all source assignments

Returns all [Sources](sources.md#source) assigned to a [Reservation group](reservations.md#reservation-group). Each reservation group can have multiple sources. Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/sourceassignments/getAll`

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
    "Limitation": {
        "Count": 10,
        "Cursor": null
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ReservationGroupIds` | array of string | required, max 1000 items | Unique identifiers of the [Reservation group](reservations.md#reservation-group). |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval of [Reservation group](reservations.md#reservation-group) last update date and time. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of source assignment data returned. |

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
| `SourceAssignments` | array of [SourceAssignment](#source-assignment) | required | Assignments between reservation group and sources. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest source assignment returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older source assignments. |

#### Source assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the source assignement. |
| `ReservationGroupId` | string | required | Unique identifier of the [Reservation group](reservations.md#reservation-group). |
| `SourceId` | string | required | Unique identifier of the [Source](sources.md#source). |
| `IsPrimary` | bool | required | Specifies the primary source for the [Reservation group](reservations.md#reservation-group). |
