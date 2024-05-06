# Enterprises

## Get all enterprises

Returns all enterprises within scope of the &#x60;Access Token&#x60;, optionally filtered by enterprise identifiers and external identifiers. This operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/enterprises/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "ExternalIdentifiers": [
    "Enterprise2023"
  ],
  "LinkedUtc": {
    "StartUtc": "2023-06-01T00:00:00Z",
    "EndUtc": "2023-06-06T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2023-10-01T00:00:00Z",
    "EndUtc": "2023-10-31T00:00:00Z"
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/#enterprise). If not specified, all enterprises within scope of the Access Token are returned. |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/#enterprise) from external system. |
| `LinkedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "Enterprises": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ExternalIdentifier": "Enterprise2023",
      "ChainId": "2f6be44e-9881-4b12-aefe-afce011a9d67",
      "CreatedUtc": "2022-03-23T17:12:06Z",
      "UpdatedUtc": "2022-03-23T17:12:06Z",
      "LinkedUtc": "2023-06-01T00:00:00Z",
      "Name": "Sample Portfolio Hotel",
      "TimeZoneIdentifier": "Europe/Budapest",
      "LegalEnvironmentCode": "DE-2020-1",
      "AccommodationEnvironmentCode": "DE",
      "AccountingEnvironmentCode": "DE",
      "TaxEnvironmentCode": "DE-2020-1",
      "DefaultLanguageCode": "en-US",
      "AccountingEditableHistoryInterval": "P0M7DT0H0M0S",
      "OperationalEditableHistoryInterval": "P0M5DT0H0M0S",
      "WebsiteUrl": "https://www.sample-portfolio-hotel-10004.com/",
      "Email": "email@sample-portfolio-hotel.com",
      "Phone": "(555) 555-1234",
      "LogoImageId": null,
      "CoverImageId": null,
      "Pricing": "Gross",
      "TaxPrecision": 2,
      "AddressId": "31c505e9-9858-4d2f-9eab-afce011c4f47"
    }
  ],
  "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Enterprises` | array of [EnterpriseBase](#EnterpriseBase) | required | The filtered enterprises. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest enterprise returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older enterprises. |

#### EnterpriseBase

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `ExternalIdentifier` | string | optional |  |
| `ChainId` | string | required |  |
| `CreatedUtc` | string | required |  |
| `UpdatedUtc` | string | required |  |
| `Name` | string | required |  |
| `TimeZoneIdentifier` | string | required |  |
| `LegalEnvironmentCode` | string | required |  |
| `AccommodationEnvironmentCode` | string | optional |  |
| `AccountingEnvironmentCode` | string | optional |  |
| `TaxEnvironmentCode` | string | optional |  |
| `DefaultLanguageCode` | string | required |  |
| ~~`EditableHistoryInterval`~~ | string | required |  |
| `AccountingEditableHistoryInterval` | string | required |  |
| `OperationalEditableHistoryInterval` | string | required |  |
| `WebsiteUrl` | string | optional |  |
| `Email` | string | optional |  |
| `Phone` | string | optional |  |
| `LogoImageId` | string | optional |  |
| `CoverImageId` | string | optional |  |
| `Pricing` | [PricingMode](#X-Ref-Name-PricingMode) | required |  |
| `TaxPrecision` | integer | optional |  |
| `AddressId` | string | required |  |

#### PricingMode

- `Gross`
- `Net`

#### PricingMode

- `Gross`
- `Net`
