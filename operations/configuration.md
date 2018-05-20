# Configuration

## Get configuration

Returns configuration of the enterprise and the client.

### Request

`[PlatformAddress]/api/connector/v1/configuration/get`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

### Response

```javascript
{
    "Enterprise": {
        "Address": {
            "City": "Prague",
            "CountryCode": "CZ",
            "Line1": "Anenské nám. 1",
            "Line2": "Ahoj",
            "PostalCode": "110 00"
        },
        "ChainId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
        "CoverImageId": null,
        "CreatedUtc": "2015-07-07T13:33:17Z",
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
        "DefaultLanguageCode": "en-US",
        "EditableHistoryInterval": "P0M3DT0H0M0S",
        "Email": "charging-api@mews.li",
        "Id": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
        "LegalEnvironmentCode": "UK",
        "LogoImageId": null,
        "Name": "Connector API Hotel",
        "Phone": "+",
        "TimeZoneIdentifier": "Europe/Budapest",
        "WebsiteUrl": "https://en.wikipedia.org/wiki/St._Vitus_Cathedral"
    },
    "NowUtc": "2018-01-01T14:58:02Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `NowUtc` | string | required | Current server date and time in UTC timezone in ISO 8601 format. |
| `Enterprise` | [Enterprise](configuration.md#enterprise) | required | The enterprise \(e.g. hotel, hostel\) associated with the access token. |

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

#### Address

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](configuration.md#country). |

#### Accepted currency

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `IsDefault` | bool | required | Whether the currency is a default accounting currency. |
| `IsEnabled` | bool | required | Whether the currency is enabled for usage. |

## Get all countries

Returns all countries supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/countries/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

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
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Countries` | array of [Country](configuration.md#country) | required | The supported countries. |

#### Country

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Code` | string | required | ISO 3166-1 alpha-2 code, e.g. `US` or `GB`. |
| `EnglishName` | string | required | English name of the country. |

## Get all currencies

Returns all currencies supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/currencies/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

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

## Get all languages

Returns all languages supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/languages/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

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

