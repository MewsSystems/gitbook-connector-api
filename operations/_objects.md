# Common objects

These are JSON and other common object definitions shared by operations across the API.

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

### Dictionary

Dictionary is a collection of key-value pairs.

```javascript
{
    "TaxIdentifier": "CZ8810310963",
    "CityOfRegistration": "Prague"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ?Key? | string | optional | Some value corresponding to the ?Key? unique identifier. Cannot be null. |

### Activity state

* `Active` - indicates active record.
* `Deleted`- indicates deleted record.

### Localized text

An object where keys are the [Language](languages.md#language) codes and values texts in respective languages.
