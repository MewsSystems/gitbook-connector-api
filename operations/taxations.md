<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Taxations

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

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
    },
    {
      "Code": "AW",
      "Name": "TAX",
      "LocalName": "TAX"
    },
    {
      "Code": "CA-QC-2023",
      "Name": "TVQ/QST",
      "LocalName": "TVQ/QST"
    },
    {
      "Code": "PH-MA-CUSTOM",
      "Name": "Makati local tax",
      "LocalName": "Makati local tax"
    }
  ],
  "TaxRates": [
    {
      "Code": "AT-2020-21%",
      "TaxationCode": "AT",
      "Value": 0.21,
      "ValidityInvervalsUtc": null,
      "Strategy": {
        "Discriminator": "Relative",
        "Value": {
          "Value": 0.21
        }
      }
    },
    {
      "Code": "AT-2020-Extra-10%",
      "TaxationCode": "AT-2020-Extra",
      "Value": 0.1,
      "ValidityInvervalsUtc": null,
      "Strategy": {
        "Discriminator": "Dependent",
        "Value": {
          "Value": 0.1,
          "BaseTaxationCodes": [
            "AT-2020"
          ]
        }
      }
    },
    {
      "Code": "AT-5-EUR",
      "TaxationCode": "AT",
      "Value": 5,
      "ValidityInvervalsUtc": null,
      "Strategy": {
        "Discriminator": "Flat",
        "Value": {
          "CurrencyCode": "EUR",
          "Value": 5
        }
      }
    },
    {
      "Code": "AW-S",
      "TaxationCode": "AW",
      "Value": 0.2062,
      "ValidityInvervalsUtc": [
        {
          "StartUtc": null,
          "EndUtc": "2021-01-14T00:00:00Z"
        }
      ],
      "Strategy": {
        "Discriminator": "Relative",
        "Value": {
          "Value": 0.2062
        }
      }
    },
    {
      "Code": "CA-QC-2023-9.975%",
      "TaxationCode": "CA-QC-2023",
      "Value": 0,
      "ValidityInvervalsUtc": [
        {
          "StartUtc": "2023-10-19T19:00:00Z",
          "EndUtc": null
        }
      ],
      "Strategy": {
        "Discriminator": "Dependent",
        "Value": {
          "Value": 0.09975,
          "BaseTaxationCodes": [
            "CA-QC-MT-LO",
            "CA-QC-LODGING-2023",
            "CA-QC-LO-FLAT"
          ]
        }
      }
    },
    {
      "Code": "PH-MA-CUSTOM-0.75%",
      "TaxationCode": "PH-MA-CUSTOM",
      "Value": 0.0075,
      "ValidityInvervalsUtc": null,
      "Strategy": {
        "Discriminator": "Relative",
        "Value": {
          "Value": 0.0075
        }
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Taxations` | array of [Taxation](taxations.md#taxation) | required | The supported taxations. |
| `TaxRates` | array of [Tax rate](taxations.md#tax-rate) | required | The supported tax rates. |

#### Taxation
Taxation represents set of `TaxRate` within `TaxEnvironment`.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | Code of the taxation. |
| `Name` | string | required | Name of the taxation. |
| `LocalName` | string | required | Local name of the taxation. |

#### Tax rate
Definition of single tax rate.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | Code of the tax rate. To be used when posting revenue items which should be accompanied by the tax rate(s) applicable to the nature of the item and the tax environment. |
| `TaxationCode` | string | required | Code of the `Taxation` the rate is part of. |
| `Value` | number | required | Tax rate, e.g. `0.21` in case of 21% tax rate. |
| `ValidityInvervalsUtc` | array of [Time interval](_objects.md#time-interval) | optional | Validity intervals in UTC. |
| `Strategy` | [Tax rate strategy](taxations.md#tax-rate-strategy) | required | Tax strategy type, e.g. relative, flat or dependent. |

#### Tax rate strategy

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Tax rate strategy discriminator](taxations.md#tax-rate-strategy-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on `Discriminator`. |

#### Tax rate strategy discriminator

* `Relative` - Used with Relative tax rate strategy (e.g. 21%). Relative tax is calculated only from net base value.
* `Flat` - Used with Flat tax rate strategy (e.g. 5.00 EUR).
* `Dependent` - Used with Dependent tax rate strategy (e.g. 10%). Dependent tax is calculated from net base value and all taxes it depends on.

#### Relative tax rate strategy data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | number | required | Tax rate, e.g. `0.21` in case of 21% tax rate. |

#### Flat tax rate strategy data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CurrencyCode` | string | required | Code of `Currency`. |
| `Value` | number | required | Absolute value of tax. |

#### Dependent tax rate strategy data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | number | required | Tax rate, e.g. `0.1` in case of 10% tax rate. |
| `BaseTaxationCodes` | array of string | required | Codes of the taxations that are included in the base of calculation. |
