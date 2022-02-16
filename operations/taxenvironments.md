# Tax environments

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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

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
            ]
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
| `TaxEnvironments` | array of [Tax environment](#tax-environment) | required | The supported tax environments. |

#### Tax environment

Tax environment represents set of [Taxations](taxations.md#taxation) together with optional validity interval.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | Code of the tax environment. |
| `CountryCode` | string | required | ISO 3166-1 alpha-3 code of associated country, e.g. `USA` or `GBR`. |
| `TaxationCodes` | array of string | required | Codes of the [Taxations](#taxation) that are used by this environment. |
| `ValidityStartUtc` | string | optional | If specified, marks the start of the validity interval in UTC timezone in ISO 8601 format. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of the validity interval in UTC timezone in ISO 8601 format. |
