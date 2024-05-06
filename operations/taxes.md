# Taxes

## Get all tax environments

Returns all tax environments supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/taxEnvironments/getAll`

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
  "TaxEnvironments": [
    {
      "Code": "AT-2020",
      "CountryCode": "AUT",
      "TaxationCodes": [
        "AT-2020",
        "AT-2020-Extra"
      ],
      "ValidityStartUtc": "2020-06-30T22:00:00Z",
      "ValidityEndUtc": null
    },
    {
      "Code": "AT-2016",
      "CountryCode": "AUT",
      "TaxationCodes": [
        "AT-2016"
      ],
      "ValidityStartUtc": "2016-05-01T00:00:00Z",
      "ValidityEndUtc": "2020-06-30T22:00:00Z"
    },
    {
      "Code": "AT",
      "CountryCode": "AUT",
      "TaxationCodes": [
        "AT"
      ],
      "ValidityStartUtc": null,
      "ValidityEndUtc": "2016-05-01T00:00:00Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxEnvironments` | array of [Tax environment](#TaxEnvironment) | optional | The supported tax environments. |
| ~~`Taxations`~~ | array of [OldTaxation](#OldTaxation) | optional |  |
| ~~`TaxRates`~~ | array of [Tax rate](#TaxRate) | optional |  |

#### Tax environment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional | Code of the tax environment. |
| `CountryCode` | string | optional | ISO 3166-1 alpha-3 code of associated country, e.g. USA or GBR. |
| `ValidityStartUtc` | string | optional | If specified, marks the start of the validity interval in UTC timezone in ISO 8601 format. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of the validity interval in UTC timezone in ISO 8601 format. |
| `TaxationCodes` | array of string | optional | Codes of the [Taxations](https://mews-systems.gitbook.io/connector-api/operations/#taxation) that are used by this environment. |

#### OldTaxation

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| ~~`TaxEnvironmentCode`~~ | string | optional |  |
| `Name` | string | optional |  |
| `LocalName` | string | optional |  |

#### Tax rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional | Code of the tax rate. To be used when posting revenue items which should be accompanied by the tax rate(s) applicable to the nature of the item and the tax environment. |
| `TaxationCode` | string | optional | Code of the [Taxation](https://mews-systems.gitbook.io/connector-api/operations/#taxation) the rate is part of. |
| `Value` | number | required |  |
| `ValidityInvervalsUtc` | array of [DateTimeIntervalUtc](#DateTimeIntervalUtc) | optional |  |
| `Strategy` | object | required | Tax strategy type, e.g. relative, flat or dependent. |

#### DateTimeIntervalUtc

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |

#### Strategy
Tax strategy type, e.g. relative, flat or dependent.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [TaxRateStrategyDiscriminator](#X-Ref-Name-TaxRateStrategyDiscriminator) | required |  |
| `value` | undefined | required |  |

#### TaxRateStrategyDiscriminator

- `Relative`
- `Flat`
- `Dependent`

## Get all taxations

Returns all taxations supported in tax environments.

### Request

`[PlatformAddress]/api/connector/v1/taxations/getAll`

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
  "Taxations": [
    {
      "Code": "AT-2020",
      "Name": "VAT",
      "LocalName": "MWST"
    },
    {
      "Code": "AT-2020-Extra",
      "Name": "Extra tax on top of VAT",
      "LocalName": "Extra tax on top of MWST"
    },
    {
      "Code": "AT-2016",
      "Name": "VAT",
      "LocalName": "MWST"
    },
    {
      "Code": "AT",
      "Name": "VAT",
      "LocalName": "MWST"
    }
  ],
  "TaxRates": [
    {
      "Code": "AT-2020-21%",
      "TaxationCode": "AT",
      "Strategy": {
        "Discriminator": "Relative",
        "Value": {
          "Value": 0.21
        }
      }
    },
    {
      "Code": "AT-2020-Extra-10%",
      "TaxationCode": "AT-2020-Extra-10%",
      "Strategy": {
        "Discriminator": "Dependent",
        "Value": {
          "BaseTaxationCodes": [
            "AT-2020"
          ],
          "Value": 0.1
        }
      }
    },
    {
      "Code": "AT-5-EUR",
      "TaxationCode": "AT",
      "Strategy": {
        "Discriminator": "Flat",
        "Value": {
          "Value": 5,
          "CurrencyCode": "EUR"
        }
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Taxations` | array of [Taxation](#Taxation) | optional | The supported taxations. |
| `TaxRates` | array of [Tax rate](#TaxRate) | optional | The supported tax rates. |

#### Taxation

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional | Code of the taxation. |
| `Name` | string | optional | Name of the taxation. |
| `LocalName` | string | optional | Local name of the taxation. |
