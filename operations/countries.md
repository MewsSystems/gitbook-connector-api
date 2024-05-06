# Countries

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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |

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
      "CountryCodes": [
        "AT",
        "BE",
        "CZ",
        "..."
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Countries` | array of [Country](#Country) | optional | The supported countries. |
| `CountrySubdivisions` | array of [Country subdivision](#CountrySubdivision) | optional | The supported country subdivisions. |
| `CountryRules` | array of [CountryRule](#CountryRule) | optional |  |
| `CountryGroups` | array of [CountryGroup](#CountryGroup) | optional |  |

#### Country

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional | ISO 3166-1 alpha-2 code, e.g. US or GB. |
| `SovereignCountryCode` | string | optional |  |
| `EnglishName` | string | optional | English name of the country. |

#### Country subdivision

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional | ISO 3166-2 code of the administrative division, e.g AU-QLD. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/#country). |
| `EnglishName` | string | optional | English name of the country subdivision. |

#### CountryRule

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CountryCode` | string | optional |  |
| `IdentityCardExpirationDateNotRequired` | boolean | required |  |
| `DriverLicenceExpirationDateNotRequired` | boolean | required |  |

#### CountryGroup

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `EnglishName` | string | optional |  |
| `CountryCodes` | array of string | optional |  |
