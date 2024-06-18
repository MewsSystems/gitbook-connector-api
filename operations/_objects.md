# Common objects

These are JSON object definitions and other JSON entities shared by operations across the API.

### Time interval

```javascript
{
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format \(see [Datetimes](../guidelines/serialization.md#datetimes)\). |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format \(see [Datetimes](../guidelines/serialization.md#datetimes)\). |

### String update value

```javascript
{
    "Value": "182a56ee-037d-4da5-b6f8-ada8006e7d5c"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | string | optional | Value which is to be updated. |

### Bool update value

```javascript
{
    "Value": false
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | boolean | optional | Value which is to be updated. |

### Number update value

```javascript
{
    "Value": 6
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | number | optional | Value which is to be updated. |

### Integer update value

```javascript
{
    "Value": 5
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | integer | optional | Value which is to be updated. |

### Array of strings update value

```javascript
{
    "Value": 
    [
        "182a56ee-037d-4da5-b6f8-ada8006e7d5c",
        "4a1a7f12-4024-41ba-9289-f90448682d3a"
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of strings | optional | Value which is to be updated. |

### Dictionary

Dictionary is a collection of key-value pairs, where both keys and values are strings.

```javascript
{
    "TaxIdentifier": "CZ8810310963",
    "CityOfRegistration": "Prague"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ?Key? | string | optional | Some value corresponding to the ?Key? unique identifier. Cannot be null. |

### Dictionary of integers

Dictionary of integers is a collection of key-value pairs, where keys are strings and the values are arrays of integer.

```javascript
{
    "OutOfOrderBlocks": [0, 1, 0, 0, 1],
    "PublicAvailabilityAdjustment": [7, 5, 4, 3, 4]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ?Key? | array of integer | optional | A set of integer values corresponding to the ?Key? unique identifier. Cannot be null. |

### Activity state

* `Active` - indicates active record.
* `Deleted`- indicates deleted record.

### Localized text

A [Dictionary](#dictionary) object where the keys are [Language](languages.md#language) codes and the corresponding values are versions of the text in the respective language. For example:

```javascript
{
    "cs-CZ": "Děti",
    "da-DK": "Børn",
    "de-CH": "Kinder",
    "de-DE": "Kinder",
    "el-GR": "Παιδιά",
    "en-GB": "Children"
}
```

### Profile data

The profile data of the user who created or last updated the record.

| Property            | Type                                                    | Contract | Description               |
| :------------------ | :------------------------------------------------------ | :------- | :------------------------ |
| `Discriminator`     | [ProfileDataDiscriminator](#profile-data-discriminator) | required | Type of the profile data. |
| `EnterpriseProfile` | [Enterprise profile data](#enterprise-profile-data)     | optional | Enterprise profile data.  |

#### ProfileDataDiscriminator

- `Personal`
- `Enterprise`
- `Platform`
- `Static`
- `Integration`

#### Enterprise profile data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProfileId` | string | required | Unique identifier of the profile. |

### Amount

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required | ISO-4217 code of the [Currency](currencies.md#currency). |
| `NetValue` | number | required | Net value without taxes. |
| `GrossValue` | number | required | Gross value including all taxes. |
| `TaxValues` | array of [Tax value](#tax-value) | required | The tax values applied. |
| `Breakdown` | [Tax breakdown](#tax-breakdown) | required | Information about individual tax amounts. |

#### Tax value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional | Code corresponding to tax type. |
| `Value` | number | required | Amount of tax applied. |

#### Tax breakdown

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Items` | array of [Tax breakdown item](#tax-breakdown-item) | required | Tax breakdown items per each tax rate applied. |

#### Tax breakdown item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxRateCode` | string | optional | Tax rate code for the item. `null` for untaxed amounts. |
| `NetValue` | number | required | The net value that the tax is calculated from. |
| `TaxValue` | number | required | The value of the tax. |

#### Currency value (ver 2018-06-07)

Usage of this value is **deprecated**. Where possible, use the properties exposing the [Amount](#amount) instead.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required | ISO-4217 code of the `Currency`.  |
| `Value` | number | optional | Amount in the currency. |
| ~~`Net`~~ | ~~number~~ | ~~optional~~ | **Deprecated!** |
| ~~`Tax`~~ | ~~number~~ | ~~optional~~ | **Deprecated!** |
| ~~`TaxRate`~~ | ~~number~~ | ~~optional~~ | **Deprecated!** |
