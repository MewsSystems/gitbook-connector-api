# Sources

## Get all sources

Returns all sources from which reservations can originate. Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/).

### Request

`[PlatformAddress]/api/connector/v1/sources/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "UpdatedUtc": {
    "StartUtc": "2023-01-05T00:00:00Z",
    "EndUtc": "2023-01-10T00:00:00Z"
  },
  "SourceIds": [
    "bbe29c21-401a-4746-b97d-af1f00e1bb8b",
    "22e42a59-b321-43f8-a5d1-af1f00e1bb8b",
    "b5a55d41-bbc5-48d0-a01b-af1f00e1bb8b"
  ],
  "Limitation": {
    "Count": 10,
    "Cursor": null
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
| `SourceIds` | array of string | optional, max 1000 items | Unique identifiers of [Sources](https://mews-systems.gitbook.io/connector-api/operations/sources/#source). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "Sources": [
    {
      "Id": "bbe29c21-401a-4746-b97d-af1f00e1bb8b",
      "Name": "Booking.com",
      "Type": "OnlineTravelAgency",
      "UpdatedUtc": "2023-01-05T12:00:00Z"
    },
    {
      "Id": "22e42a59-b321-43f8-a5d1-af1f00e1bb8b",
      "Name": "Hostelworld",
      "Type": "OnlineTravelAgency",
      "UpdatedUtc": "2023-01-06T12:00:00Z"
    },
    {
      "Id": "b5a55d41-bbc5-48d0-a01b-af1f00e1bb8b",
      "Name": "SynXis",
      "Type": "OnlineTravelAgency",
      "UpdatedUtc": "2023-01-06T12:00:00Z"
    }
  ],
  "Cursor": "b5a55d41-bbc5-48d0-a01b-af1f00e1bb8b"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Sources` | array of [Source](#Source) | required | The reservation sources. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest source returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older sources. |

#### Source

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the source. |
| `Name` | string | required | Name of the source. |
| `Type` | [SourceType](#X-Ref-Name-SourceType) | required |  |
| `UpdatedUtc` | string | required | Date and time when the source was last updated, expressed in UTC timezone in ISO 8601 format. |
| `Code` | integer | required |  |

#### SourceType

- `OnlineTravelAgency`
- `CentralReservationSystem`
- `GlobalDistributionSystem`
- `AlternativeDistributionSystem`
- `SalesAndCateringSystem`
- `PropertyManagementSystem`
- `TourOperatorSystem`
- `OnlineBookingEngine`
- `Kiosk`
- `Agent`
