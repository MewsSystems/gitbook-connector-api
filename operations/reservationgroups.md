# Reservation groups

## Get all reservation groups

Returns all reservation groups, filtered by unique identifiers and other filters. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/reservationGroups/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "ReservationGroupIds": [
        "fe795f96-0b64-445b-89ed-c032563f2bac"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-04-27T11:48:57Z",
        "EndUtc": "2023-04-27T11:48:57Z"
    },
    "Limitation":{
        "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
        "Count": 100
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ReservationGroupIds` | array of string | optional, max 1000 items | Unique identifiers of the [Reservation Group](#reservation-group). Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Reservation Group](#reservation-group) was updated. Required if no other filter is provided. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of reservation groups returned. |

### Response

```javascript
{
    "ReservationGroups": [
        {
            "Id": "769fc613-838f-41a7-ac2a-aff100c3189f",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "Name": "Mr and Mrs smith wedding",
            "ChannelManager": "2023-04-27T11:48:57Z",
            "ChannelManagerGroupNumber": "152fg645-834f-63a7-he6a-vsy845c4753a"
        }
    ],
    "Cursor": "723jd664-235f-36a4-tg6d-gfy850c645f"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationGroups` | array of [Reservation Groups](#reservation-group) | required | The filtered reservation groups. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest reservation group returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older reservation groups. |

#### Reservation Group

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the reservation group. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise) the reservation group belongs to. |
| `Name` | string | optional | Name of the reservation group, might be empty or same for multiple groups. |
| `ChannelManager` | string | optional | Name of the corresponding channel manager. |
| `ChannelManagerGroupNumber` | string | optional | Identifier of the channel manager. |
