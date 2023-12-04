# Enterprises

## Get all enterprises

Returns all enterprises within scope of the `Access Token`, optionally filtered by enterprise identifiers and external identifiers. This operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| :--- | :--- | :--- | :--- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](#enterprise). If not specified, all enterprises within scope of the Access Token are returned. |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of the [Enterprise](#enterprise) from external system. |
| `LinkedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Enterprise](#enterprise) was added to the portfolio. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Enterprise](#enterprise) was updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of enterprises returned. |

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
| :--- | :--- | :--- | :--- |
| `Enterprises` | array of [Enterprise](#enterprise) | required | The filtered enterprises. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest enterprise returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older enterprises. |

#### Enterprise

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `ExternalIdentifier` | string | optional, max 255 characters | Identifier of the enterprise from external system. |
| `ChainId` | string | required | Unique identifier of the chain to which the enterprise belongs. |
| `CreatedUtc` | string | required | Creation date and time of the enterprise in UTC timezone in ISO 8601 format. |
| `LinkedUtc` | string | required | Date and time when enterprise was added to the portfolio in UTC timezone in ISO 8601 format. |
| `Name` | string | required | Name of the enterprise. |
| `TimeZoneIdentifier` | string | required | IANA timezone identifier of the enterprise. |
| `LegalEnvironmentCode` | string | required | Unique identifier of the legal environment where the enterprise resides. |
| `AccommodationEnvironmentCode` | string | optional | Unique identifier of the enterprise's accommodation environment. |
| `AccountingEnvironmentCode` | string | optional | Unique identifier of the enterprise's accounting environment. |
| `TaxEnvironmentCode` | string | optional | Unique identifier of the enterprise's tax environment. |
| `DefaultLanguageCode` | string | required | Language-culture codes of the enterprise default [Language](languages.md#language). |
| ~~`EditableHistoryInterval`~~ | ~~string~~ | ~~required~~ | ~~Editable history interval in ISO 8601 duration format.~~ **Deprecated!** |
| `AccountingEditableHistoryInterval` | string | required | Editable history interval for accounting data in ISO 8601 duration format. |
| `OperationalEditableHistoryInterval` | string | required | Editable history interval for oprational data in ISO 8601 duration format. |
| `WebsiteUrl` | string | optional | URL of the enterprise website. |
| `Email` | string | optional | Email address of the enterprise. |
| `Phone` | string | optional | Phone number of the enterprise. |
| `LogoImageId` | string | optional | Unique identifier of the enterprise logo image. |
| `CoverImageId` | string | optional | Unique identifier of the enterprise cover image. |
| `Pricing` | string | required | [Pricing](#pricing) of the enterprise. |
| `TaxPrecision` | string | optional | Tax precision used for financial calculations in the enterprise. If `null`, [Currency](currencies.md#currency) precision is used. |
| `AddressId` | string | required | Id of the [Address](addresses.md#account-address) of the enterprise. |

#### Pricing

* `Gross` - the enterprise shows amount with gross prices.
* `Net` - the enterprise shows amount with net prices.
