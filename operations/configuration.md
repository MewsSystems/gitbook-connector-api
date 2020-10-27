# Configuration

## Get configuration

Returns configuration of the enterprise and the client.

### Request

`[PlatformAddress]/api/connector/v1/configuration/get`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "NowUtc": "2018-01-01T14:58:02Z",
    "Enterprise": {
        "Id": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
        "ChainId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
        "CreatedUtc": "2015-07-07T13:33:17Z",
        "Name": "Connector API Hotel",
        "TimeZoneIdentifier": "Europe/Budapest",
        "LegalEnvironmentCode": "UK",
        "DefaultLanguageCode": "en-US",
        "EditableHistoryInterval": "P0M3DT0H0M0S",
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
            "Latitude": 50.085180,
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
        "Pricing": "Gross"
    },
    "Service":
    {
        "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `NowUtc` | string | required | Current server date and time in UTC timezone in ISO 8601 format. |
| `Enterprise` | [Enterprise](configuration.md#enterprise) | required | The enterprise \(e.g. hotel, hostel\) associated with the access token. |
| `Service` | [Service](services.md#service) | optional | The reservable service \(e.g. accommodation, parking\) associated with the access token of the service scoped integration. |
| `PaymentCardStorage` | [PaymentCardStorage](configuration.md#payment-card-storage) | optional | Contains information about payment card storage. |

#### Enterprise

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `ChainId` | string | required | Unique identifier of the chain whose member the enterprise is. |
| `CreatedUtc` | string | required | Creation date and time of the enterprise in UTC timezone in ISO 8601 format. |
| `Name` | string | required | Name of the enterprise. |
| `TimeZoneIdentifier` | string | required | IANA timezone identifier of the enterprise. |
| `LegalEnvironmentCode` | string | required | Unique identifier of the legal environment where the enterprise resides. |
| `DefaultLanguageCode` | string | required | Language-culture codes of the enterprise default [Language](configuration.md#language). |
| `EditableHistoryInterval` | string | required | Editable history interval in ISO 8601 duration format. |
| `WebsiteUrl` | string | optional | URL of the enterprise website. |
| `Email` | string | optional | Email address of the enterprise. |
| `Phone` | string | optional | Phone number of the enterprise. |
| `LogoImageId` | string | required | Unique identifier of the enterprise logo image. |
| `CoverImageId` | string | required | Unique identifier of the enterprise cover image. |
| `Address` | [Address](configuration.md#address) | required | Address of the enterprise. |
| `Currencies` | array of [Accepted currency](configuration.md#accepted-currency) | required | Currencies accepted by the enterprise. |
| `Pricing` | string | required | [Pricing](configuration.md#pricing) of the enterprise. |

#### Address

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the address. |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](configuration.md#country). |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |
| `Latitude` | number | optional | The latitude. |
| `Longitude` | number | optional | The longitude. |

#### Accepted currency

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `IsDefault` | bool | required | Whether the currency is a default accounting currency. |
| `IsEnabled` | bool | required | Whether the currency is enabled for usage. |

#### Pricing

* `Gross` - the enterprise shows amount with gross prices.
* `Net` - the enterprise shows amount with net prices.

#### Payment card storage

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `PublicKey` | string | required | Key for accessing PCI proxy storage. |

## Get all countries

Returns all countries supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/countries/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "Countries": [
        {
            "Code": "GB",
            "EnglishName": "United Kingdom of Great Britain and Northern Ireland"
        },
        {
            "Code": "US",
            "EnglishName": "United States of America"
        }
    ],
    "CountrySubdivisions": [
        {
            "Code": "AU-NSW",
            "CountryCode": "AU",
            "EnglishName": "New South Wales"
        },
        {
            "Code": "AU-QLD",
            "CountryCode": "AU",
            "EnglishName": "Queensland"
        }
    ],
    "CountryAlliances": [
        {
            "Code": "SCHENGEN",
            "EnglishName": "Schengen Area",
            "CountryCodes":[
                "AT",
                "BE",
                "CZ",
                ...
            ]
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Countries` | array of [Country](configuration.md#country) | required | The supported countries. |
| `CountrySubdivisions` | array of [Country subdivision](configuration.md#country-subdivision) | required | The supported country subdivisions. |
| `CountryAlliances` | array of [Country alliance](configuration.md#country-alliance) | required | The supported country alliances. |

#### Country

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | ISO 3166-1 alpha-2 code, e.g. `US` or `GB`. |
| `EnglishName` | string | required | English name of the country. |

#### Country subdivision

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | ISO 3166-2 code of the administrative division, e.g `AU-QLD`. |
| `CountryCode` | string | required | ISO 3166-1 code of the [Country](#country). |
| `EnglishName` | string | required | English name of the country subdivision. |

#### Country alliance

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | Code of the alliance, e.g `EU`, `SCHENGEN`, `SCHENGEN-VISA`. |
| `EnglishName` | string | required | English name of the alliance. |
| `CountryCodes` | array of string | required | ISO 3166-1 codes of the member countries. |

## Get all currencies

Returns all currencies supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/currencies/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "Currencies": [
        {
            "Code": "USD",
            "Precision": 2
        },
        {
            "Code": "GBP",
            "Precision": 2
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Currencies` | array of [Currency](configuration.md#currency) | required | The supported currencies. |

#### Currency

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | ISO-4217 three-letter code, e.g. `USD` or `GBP`. |
| `Precision` | number | required | Precision of the currency \(count of decimal places\). |

## Get all tax environments

Returns all tax environments supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/taxenvironments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "TaxEnvironments": [
        {
            "Code": "AU",
            "CountryCode": "AUS",
            "ValidityStartUtc": null,
            "ValidityEndUtc": null
        },
        {
            "Code": "AT-2020",
            "CountryCode": "AUT",
            "ValidityStartUtc": "2020-06-30T22:00:00Z",
            "ValidityEndUtc": null
        },
        {
            "Code": "AT-2016",
            "CountryCode": "AUT",
            "ValidityStartUtc": "2016-05-01T00:00:00Z",
            "ValidityEndUtc": "2020-06-30T22:00:00Z"
        },
        {
            "Code": "AT",
            "CountryCode": "AUT",
            "ValidityStartUtc": null,
            "ValidityEndUtc": "2016-05-01T00:00:00Z"
        }
    ],
    "Taxations": [
        {
            "Code": "AU",
            "TaxEnvironmentCode": "AU",
            "Name": "GST",
            "LocalName": "GST",
            "ValidityStartUtc": null,
            "ValidityEndUtc": null
        },
        {
            "Code": "AT-2020",
            "TaxEnvironmentCode": "AT-2020",
            "Name": "VAT",
            "LocalName": "MWST",
            "ValidityStartUtc": "2020-06-30T22:00:00Z",
            "ValidityEndUtc": null
        },
        {
            "Code": "AT-2016",
            "TaxEnvironmentCode": "AT-2016",
            "Name": "VAT",
            "LocalName": "MWST",
            "ValidityStartUtc": "2016-05-01T00:00:00Z",
            "ValidityEndUtc": "2020-06-30T22:00:00Z"
        },
        {
            "Code": "AT",
            "TaxEnvironmentCode": "AT",
            "Name": "VAT",
            "LocalName": "MWST",
            "ValidityStartUtc": null,
            "ValidityEndUtc": "2016-05-01T00:00:00Z"
        }
    ],
    "TaxRates": [
        {
            "Code": "AT-S",
            "TaxationCode": "AT",
            "Strategy": {
                "Discriminator": "Relative",
                "Value": {
                    "Value": 0.21
                }
            }
        },
        {
            "Code": "AT-F",
            "TaxationCode": "AT",
            "Strategy": {
                "Discriminator": "Flat",
                "Value": {
                    "Value": 5.0,
                    "CurrencyCode": "EUR"
                }
            }
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `TaxEnvironments` | array of [Tax environment](configuration.md#tax-environment) | required | The supported tax environments. |
| `Taxations` | array of [Taxation](configuration.md#taxation) | required | The supported taxations. |
| `TaxRates` | array of [Tax rate](configuration.md#tax-rate) | required | The supported tax rates. |

#### Tax environment

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | Code of the tax environment. |
| `CountryCode` | string | required | ISO 3166-1 alpha-3 code, e.g. `USA` or `GBR`. |
| `ValidityStartUtc` | string | optional | If specified, marks the start of the validity interval in UTC timezone in ISO 8601 format. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of the validity interval in UTC timezone in ISO 8601 format. |

#### Taxation

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | Code of the taxation. |
| `TaxEnvironmentCode` | string | required | Code of the tax environment. |
| `Name` | string | required | Name of the taxation. |
| `LocalName` | string | required | Local name of the taxation. |
| `ValidityStartUtc` | string | optional | If specified, marks the start of the validity interval in UTC timezone in ISO 8601 format. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of the validity interval in UTC timezone in ISO 8601 format. |

#### Tax rate

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | Code of the tax rate. |
| `TaxationCode` | string | required | Code of the taxation. |
| `Strategy` | object [Tax rate strategy](#tax-rate-strategy) | required | Tax strategy type, e.g. relative or flat. |

#### Tax rate strategy

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Discriminator` | string [Tax rate strategy discriminator](#tax-rate-strategy-discriminator) | required | If tax rate is flat or relative. |
| `Value` | object | required | Structure of the object depends on [Tax rate strategy discriminator](#tax-rate-strategy-discriminator). |

#### Tax rate strategy discriminator

* `Flat` - Used with [Flat tax rate strategy data](#flat-tax-rate-strategy-data) (e.g. 5.00 EUR). 
* `Relative` - Used with [Relative tax rate strategy data](#relative-tax-rate-strategy-data) (e.g. 21%).

### Tax rate strategy data

#### Flat tax rate strategy data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Value` | number | required | Absolute value of tax. |
| `CurrencyCode` | string | required | Code of [Currency](#currency). |

#### Relative tax rate strategy data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Value` | decimal | required | Tax rate, e.g. `0.21` in case of 21% tax rate. |

## Get all languages

Returns all languages supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/languages/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "Languages": [
        {
            "Code": "zh-CN",
            "EnglishName": "Chinese (Simplified)",
            "FallbackLanguageCode": "en-US",
            "LocalName": "中文"
        },
        {
            "Code": "cs-CZ",
            "EnglishName": "Czech",
            "FallbackLanguageCode": "en-US",
            "LocalName": "Čeština"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Languages` | array of [Language](configuration.md#language) | required | The supported languages. |

#### Language

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | Language-culture code of the language. |
| `FallbackLanguageCode` | string | optional | Language-culture code of the fallback language. |
| `EnglishName` | string | required | English name of the language. |
| `LocalName` | string | required | Local name of the language. |

## Get language texts

Returns translations of texts in the specified languages.

### Request

`[PlatformAddress]/api/connector/v1/languages/getTexts`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "LanguageCodes": [
        "en-US",
        "cs-CZ"
    ],
    "Scope": ""
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LangaugeCodes` | array of string | required | Language-culture codes of the [Language](configuration.md#language)s whose texts to return. |
| `Scope` | string | required | Scope of texts to return. |

### Response

```javascript
{
    "LanguageTexts": [
        {
            "LanguageCode": "en-US",
            "Texts": {
                "Address": "Address",
                "AddressLine1": "Address line 1",
                "AddressLine2": "Address line 2",
                "AdultPlural": "Adults",
                "Apartment": "Apartment",
                "ApartmentPlural": "Apartments"
            }
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `LanguageTexts` | array of [Language texts](configuration.md#language-texts) | required | Texts in the specified languages. |

#### Language texts

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `LanguageCode` | string | required | Language-culture code of the [Language](configuration.md#language). |
| `Texts` | number | required | Texts in the specified language by their keys. |

## Get image URLs

Returns URLs of the specified images.

### Request

`[PlatformAddress]/api/connector/v1/images/getUrls`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Images":[
        {
            "ImageId": "57a971a5-a335-48f4-8cd1-595245d1a876",
            "Width": 200,
            "Height": 150,
            "ResizeMode": "Fit"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Images` | array of [Image parameters](configuration.md#image-parameters) | required | Parameters of images whose URLs should be returned. |

#### Image parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ImageId` | string | required | Unique identifier of the image. |
| `Width` | number | required | Desired width of the image. |
| `Height` | number | required | Desired height of the image. |
| `ResizeMode` | string [Image resize mode](configuration.md#image-resize-mode) | required | Mode how the image should be resized to the desired width and height. |

#### Image resize mode

* `Fit` - resize to fit within the specified size, so the result might be smaller than requested.
* `FitExact` - resize and pad to exactly fit within the specified size.
* `Cover` - resize to cover the specified dimensions, so the result might be larger than requested.
* `CoverExact` - resize and clip to cover the specified size.

### Response

```javascript
{
    "ImageUrls": [
        {
            "ImageId": "57a971a5-a335-48f4-8cd1-595245d1a876",
            "Url": "https://cdn.demo.mews.li/Media/Image/57a971a5-a335-48f4-8cd1-595245d1a876?Mode=Fit&Width=200&Height=150"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ImageUrls` | array of [Image URL](configuration.md#image-url) | required | URLs of the images. |

#### Image URL

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ImageId` | string | required | Unique identifier of the image. |
| `Url` | string | required | URL of the image. |
