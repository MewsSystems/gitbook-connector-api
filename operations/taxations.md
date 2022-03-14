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
                    "Value": 5.0,
                    "CurrencyCode": "EUR"
                }
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Taxations` | array of [Taxation](#taxation) | required | The supported taxations. |
| `TaxRates` | array of [Tax rate](#tax-rate) | required | The supported tax rates. |

#### Taxation

Taxation represents set of [Tax rates](#tax-rate) within [Tax environment](taxenvironments.md#tax-environment).

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | Code of the taxation. |
| `Name` | string | required | Name of the taxation. |
| `LocalName` | string | required | Local name of the taxation. |

#### Tax rate

Definition of single tax rate.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | Code of the tax rate. To be used when posting revenue items which should be accompanied by the tax rate\(s\) applicable to the nature of the item and the tax environment. |
| `TaxationCode` | string | required | Code of the [Taxation](#taxation) the rate is part of. |
| `Strategy` | object [Tax rate strategy](#tax-rate-strategy) | required | Tax strategy type, e.g. relative, flat or dependent. |

#### Tax rate strategy

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Tax rate strategy discriminator](#tax-rate-strategy-discriminator) | required | If tax rate is flat, relative or dependent. |
| `Value` | object | required | Structure of the object depends on [Tax rate strategy discriminator](#tax-rate-strategy-discriminator). |

#### Tax rate strategy discriminator

* `Flat` - Used with [Flat tax rate strategy data](#flat-tax-rate-strategy-data) \(e.g. 5.00 EUR\). 
* `Relative` - Used with [Relative tax rate strategy data](#relative-tax-rate-strategy-data) \(e.g. 21%\). Relative tax is calculated only from net base value.
* `Dependent` - Used with [Dependent tax rate strategy data](#dependent-tax-rate-strategy-data) \(e.g. 10%\). Dependent tax is calculated from net base value and all taxes it depends on.

### Tax rate strategy data

#### Flat tax rate strategy data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | number | required | Absolute value of tax. |
| `CurrencyCode` | string | required | Code of [Currency](currencies.md#currency). |

#### Relative tax rate strategy data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | decimal | required | Tax rate, e.g. `0.21` in case of 21% tax rate. |

#### Dependent tax rate strategy data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BaseTaxationCodes` | array of string | required | Codes of the [taxations](#taxation) that are included in the base of calculation. |
| `Value` | decimal | required | Tax rate, e.g. `0.1` in case of 10% tax rate. |
