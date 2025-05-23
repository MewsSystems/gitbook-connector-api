<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Enterprises

## Get all enterprises

Returns all enterprises within scope of the `Access Token`, optionally filtered by enterprise identifiers and external identifiers. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/enterprises/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
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
    "Count": 100,
    "Cursor": "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, all enterprises within scope of the Access Token are returned. |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of the [Enterprise](enterprises.md#enterprise) from external system. |
| `LinkedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "Enterprises": [
    {
      "LinkedUtc": "2023-06-01T00:00:00Z",
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ExternalIdentifier": "Enterprise2023",
      "HoldingKey": "CA123",
      "ChainId": "2f6be44e-9881-4b12-aefe-afce011a9d67",
      "CreatedUtc": "2022-03-23T17:12:06Z",
      "UpdatedUtc": "2022-03-23T17:12:06Z",
      "Name": "Sample Portfolio Hotel",
      "TimeZoneIdentifier": "Europe/Budapest",
      "LegalEnvironmentCode": "DE-2020-1",
      "AccommodationEnvironmentCode": "DE",
      "AccountingEnvironmentCode": "DE",
      "TaxEnvironmentCode": "DE-2020-1",
      "DefaultLanguageCode": "en-US",
      "EditableHistoryInterval": null,
      "AccountingEditableHistoryInterval": "P0M7DT0H0M0S",
      "OperationalEditableHistoryInterval": "P0M5DT0H0M0S",
      "WebsiteUrl": "https://www.sample-portfolio-hotel-10004.com/",
      "Email": "email@sample-portfolio-hotel.com",
      "Phone": "(555) 555-1234",
      "LogoImageId": null,
      "CoverImageId": null,
      "Pricing": "Gross",
      "TaxPrecision": 2,
      "AddressId": "31c505e9-9858-4d2f-9eab-afce011c4f47",
      "Address": {
        "Id": "8c2c4371-5d42-40a9-b551-ab0b00d75076",
        "Line1": "I.P. Pavlova 5",
        "Line2": null,
        "City": "Prague",
        "PostalCode": "1200",
        "CountryCode": "CZ",
        "CountrySubdivisionCode": null,
        "Latitude": 14.429645,
        "Longitude": 50.075181
      },
      "GroupNames": [
        "Sample Group Name"
      ],
      "Subscription": {
        "TaxIdentifier": "123456789 RC 0001"
      }
    }
  ],
  "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Enterprises` | array of [Enterprise](enterprises.md#enterprise) | required | The filtered enterprises. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest enterprise returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older enterprises. |

#### Enterprise

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the enterprise from external system. |
| `HoldingKey` | string | optional, max length 255 characters | Identifies an enterprise in the external system of a holding company. The holding company may administer multiple portfolios. |
| `ChainId` | string | required | Unique identifier of the chain to which the enterprise belongs. |
| `CreatedUtc` | string | required | Creation date and time of the enterprise in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Creation date and time of the enterprise in UTC timezone in ISO 8601 format. |
| `Name` | string | required | Name of the enterprise. |
| `TimeZoneIdentifier` | string | required | IANA timezone identifier of the enterprise. |
| `LegalEnvironmentCode` | string | required | Unique identifier of the legal environment where the enterprise resides. |
| `AccommodationEnvironmentCode` | string | required | Unique code of the accommodation environment where the enterprise resides. |
| `AccountingEnvironmentCode` | string | required | Unique code of the accounting environment where the enterprise resides. |
| `TaxEnvironmentCode` | string | required | Unique code of the tax environment where the enterprise resides. |
| `DefaultLanguageCode` | string | required | Language-culture codes of the enterprise default `Language`. |
| `AccountingEditableHistoryInterval` | string | required | Editable history interval for accounting data in ISO 8601 duration format. |
| `OperationalEditableHistoryInterval` | string | required | Editable history interval for operational data in ISO 8601 duration format. |
| `WebsiteUrl` | string | optional | URL of the enterprise website. |
| `Email` | string | optional | Email address of the enterprise. |
| `Phone` | string | optional | Phone number of the enterprise. |
| `LogoImageId` | string | optional | Unique identifier of the `Image` of the enterprise logo. |
| `CoverImageId` | string | optional | Unique identifier of the `Image` of the enterprise cover. |
| `Pricing` | [Pricing](configuration.md#pricing) | required | Pricing of the enterprise. |
| `TaxPrecision` | integer | optional | Tax precision used for financial calculations in the enterprise. If `null`, `Currency` precision is used. |
| `AddressId` | string | required | Unique identifier of the `Address` of the enterprise. |
| `Address` | [Address](configuration.md#address) | required | Address of the enterprise. |
| `GroupNames` | array of string | required | A list of the group names of the enterprise. |
| `Subscription` | [Enterprise subscription](enterprises.md#enterprise-subscription) | required | Subscription information of the enterprise. |
| `LinkedUtc` | string | required | Date and time when enterprise was added to the portfolio in UTC timezone in ISO 8601 format. |
| ~~`EditableHistoryInterval`~~ | ~~string~~ | ~~required~~ | **Deprecated!** Use `AccountingEditableHistoryInterval` and `OperationalEditableHistoryInterval` instead.|

#### Enterprise subscription

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxIdentifier` | string | optional | Tax identifier of the `Enterprise`. |
