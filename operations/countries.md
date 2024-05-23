<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
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
| `AccessToken` | string | required | Access token of the client application. |
| `ClientToken` | string | required | Token identifying the client application. |

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
| `Countries` | array of [Country](#country) | required | The supported countries. |
| `CountrySubdivisions` | array of [Country subdivision](#country-subdivision) | required | The supported country subdivisions. |
| `CountryRules` | array of [Country rules](#country-rules) | required | Country-specific rules |
| `CountryGroups` | array of [Country group](#country-group) | required | The supported country groups. |

#### Country

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | ISO 3166-1 alpha-2 code, e.g. `CZ` or `SK`. |
| `SovereignCountryCode` | string | required | ISO 3166-1 alpha-2 code of the sovereign country. May differ from `Code` for dependent territories. |
| `EnglishName` | string | required | English name of the country. |

#### Country subdivision

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | ISO 3166-2 code of the administrative division, e.g AU-QLD. |
| `CountryCode` | string | required | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries#country). |
| `EnglishName` | string | required | English name of the country subdivision. |

#### Country rules
Country-specific rules

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CountryCode` | string | required | ISO 3166-1 alpha-2 code, e.g. US or GB. |
| `IdentityCardExpirationDateNotRequired` | boolean | required | Whether the country requires expiration date for identity card. |
| `DriverLicenceExpirationDateNotRequired` | boolean | required | Whether the country requires expiration date for driver's license. |

#### Country group

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | Group code, e.g. `EU`, `SCHENGEN`, `NORDIC`... |
| `EnglishName` | string | required | English name of the country group. |
| `CountryCodes` | array of string | required | Codes of countries included in the group, in ISO 3166-1 alpha-2 format. |
