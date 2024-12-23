# Companionships

## Get all companionships

Returns all companionships based on customers, reservations or reservation groups. One of them must be specified in the request.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/companionships/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "CompanionshipIds": [
        "72d4b117-1f84-44a3-1f84-8b2c0635ac60"
    ],
    "CustomerIds": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ],
    "ReservationIds": [
        "bfee2c44-1f84-4326-a862-5289598f6e2d"
    ],
    "ReservationGroupIds": [
        "c704dff3-7811-4af7-a3a0-7b2b0635ac59"
    ],
    "UpdatedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-10T00:00:00Z"
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
| `CompanionshipIds` | array of string | optional, max 1000 items | Unique identifiers of [Companionship](#companionship). |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of [Customers](customers.md#customer). |
| `ReservationIds` | array of string | optional, max 1000 items | Unique identifiers of reservations. |
| `ReservationGroupIds` | array of string | optional, max 1000 items | Unique identifiers of [Reservation groups](reservations.md#reservation-group). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Companionship](#companionship) was updated. |
| `Extent` | [Companionship extent](#companionship-extent) | required | Extent of data to be returned. E.g. it is possible to specify that together with the companionships, customers, reservations, and reservation groups should be also returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### Companionship extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | bool | optional | Whether the response should contain customers. |
| `Reservations` | bool | optional | Whether the response should contain reservations. |
| `ReservationGroups` | bool | optional | Whether the response should contain reservation groups. |

### Response

```javascript
{
    "Companionships": [
        {
            "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
            "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "ReservationGroupId": "c704dff3-7811-4af7-a3a0-7b2b0635ac59",
            "ReservationId": "bfee2c44-1f84-4326-a862-5289598f6e2d"
        }
    ],
    "Customers": null,
    "Reservations": null,
    "ReservationGroups": null,
    "Cursor": "72d4b117-1f84-44a3-1f84-8b2c0635ac60"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Companionships` | array of [Companionship](#companionship) | required | Companionships. |
| `Customers` | array of [Customer](customers.md#customer) | optional | Customers that belong to the companionships. |
| `Reservations` | array of [Reservation](reservations.md#reservation-ver-2017-04-12) | optional | The accompanied reservations. |
| `ReservationGroups` | array of [Reservation group](reservations.md#reservation-group) | optional | The accompanied reservation groups. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Companionship

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of [Companionship](#companionship). |
| `CustomerId` | string | required | Unique identifier of [Customer](customers.md#customer). |
| `ReservationId` | string | optional | Unique identifier of reservation. |
| `ReservationGroupId` | string | required | Unique identifier of [Reservation group](reservations.md#reservation-group). |
