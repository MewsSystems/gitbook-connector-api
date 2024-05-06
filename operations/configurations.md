# Configurations

## Get configuration

Returns the enterprise configuration. For single-enterprise Access Tokens, this is the enterprise associated with the token. For [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), use the &#x60;EnterpriseId&#x60; parameter to specify which enterprise you want the configuration for. In the case of service scoped integrations, the operation returns the configuration associated with both the enterprise and the bookable service linked to the token.

### Request

`[PlatformAddress]/api/connector/v1/configuration/get`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "851df8c8-90f2-4c4a-8e01-a4fc46b25178"
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
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/#enterprise), defaults to the enterprise associated with the given access token. |

### Response

```javascript
{
  "NowUtc": "2018-01-01T14:58:02Z",
  "Enterprise": {
    "Id": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
    "ChainId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
    "CreatedUtc": "2015-07-07T13:33:17Z",
    "UpdatedUtc": "2015-07-07T13:33:17Z",
    "Name": "Connector API Hotel",
    "TimeZoneIdentifier": "Europe/Budapest",
    "LegalEnvironmentCode": "UK",
    "DefaultLanguageCode": "en-US",
    "AccountingEditableHistoryInterval": "P0M7DT0H0M0S",
    "OperationalEditableHistoryInterval": "P0M5DT0H0M0S",
    "WebsiteUrl": "https://en.wikipedia.org/wiki/St._Vitus_Cathedral",
    "Email": "charging-api@mews.li",
    "Phone": "00000 123 456 789",
    "LogoImageId": null,
    "CoverImageId": null,
    "Address": {
      "Id": "8c2c4371-5d42-40a9-b551-ab0b00d75076",
      "Line1": "Anenské nám. 1",
      "Line2": "Ahoj",
      "City": "Prague",
      "PostalCode": "110 00",
      "CountryCode": "CZ",
      "CountrySubdivisionCode": null,
      "Latitude": 50.08518,
      "Longitude": 14.414926
    },
    "Currencies": [
      {
        "Currency": "GBP",
        "IsDefault": true,
        "IsEnabled": true
      },
      {
        "Currency": "USD",
        "IsDefault": false,
        "IsEnabled": true
      }
    ],
    "Pricing": "Gross",
    "TaxPrecision": null,
    "ExternalIdentifier": null,
    "AccountingConfiguration": {
      "AdditionalTaxIdentifier": null,
      "CompanyName": "Connector API Hotel",
      "BankAccountNumber": "1234",
      "BankName": "Random bank",
      "Iban": "CZ7250517882393618329719",
      "Bic": "GIBACZPY"
    }
  },
  "Service": {
    "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CreatedUtc": "2023-10-01T11:48:57Z",
    "UpdatedUtc": "2023-10-28T11:48:57Z",
    "IsActive": true,
    "Name": "Accommodation",
    "StartTime": "PT14H",
    "EndTime": "PT12H",
    "Promotions": {
      "BeforeCheckIn": false,
      "AfterCheckIn": false,
      "DuringStay": false,
      "BeforeCheckOut": false,
      "AfterCheckOut": false
    },
    "Type": "Reservable"
  },
  "PaymentCardStorage": null
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `NowUtc` | string | optional | Current server date and time in UTC timezone in ISO 8601 format. |
| `Enterprise` | object | required | The enterprise (e.g. hotel, hostel) associated with the access token. |
| `Service` | object | required | The reservable service (e.g. accommodation, parking) associated with the access token of the service scoped integration. |
| `PaymentCardStorage` | object | required | Contains information about payment card storage. |

#### Enterprise
The enterprise (e.g. hotel, hostel) associated with the access token.

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
| `Address` | object | required | Address of the customer. |
| `Currencies` | array of [CurrencyAcceptance](#CurrencyAcceptance) | required |  |
| `AccountingConfiguration` | object | required |  |
| `IsPortfolio` | boolean | required |  |

#### PricingMode

- `Gross`
- `Net`

#### OldAddress
Address of the customer.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `CountryCode` | string | optional |  |
| `CountrySubdivisionCode` | string | optional |  |
| `Latitude` | number | optional |  |
| `Longitude` | number | optional |  |

#### CurrencyAcceptance

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `IsDefault` | boolean | required |  |
| `IsEnabled` | boolean | required |  |

#### AccountingConfiguration

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AdditionalTaxIdentifier` | string | optional |  |
| `CompanyName` | string | optional |  |
| `BankAccountNumber` | string | optional |  |
| `BankName` | string | optional |  |
| `Iban` | string | optional |  |
| `Bic` | string | optional |  |
| `SurchargeConfiguration` | object | required |  |

#### SurchargeConfiguration

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SurchargeFees` | object | required |  |
| `SurchargeServiceId` | string | optional |  |
| `SurchargeTaxCode` | string | optional |  |

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

#### PaymentCardStorage
Contains information about payment card storage.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PublicKey` | string | optional |  |
