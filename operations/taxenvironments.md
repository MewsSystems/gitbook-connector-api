<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Tax environments

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
      "ValidityStartUtc": "2020-06-30T22:00:00Z",
      "ValidityEndUtc": null,
      "TaxationCodes": [
        "AT-2020"
      ]
    },
    {
      "Code": "AW-2023",
      "CountryCode": "ABW",
      "ValidityStartUtc": "2023-01-01T04:00:00Z",
      "ValidityEndUtc": null,
      "TaxationCodes": [
        "AW-2023",
        "AW-TOURIST-2023",
        "AW-RESIDENCE"
      ]
    },
    {
      "Code": "CA-QC-TR-2023",
      "CountryCode": "CAN",
      "ValidityStartUtc": "2023-10-19T19:00:00Z",
      "ValidityEndUtc": null,
      "TaxationCodes": [
        "CA-TR-2023",
        "CA-QC-2023",
        "CA-QC-LODGING-2023",
        "CA-QC-LO-FLAT"
      ]
    },
    {
      "Code": "PH-MA-CUSTOM",
      "CountryCode": "PHL",
      "ValidityStartUtc": null,
      "ValidityEndUtc": null,
      "TaxationCodes": [
        "PH",
        "PH-MA-CUSTOM",
        "PH-MA-SERVICE"
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxEnvironments` | array of [Tax environment](taxenvironments.md#tax-environment) | required | The supported tax environments. |

#### Tax environment
Tax environment represents set of `Taxation` together with optional validity interval.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | Code of the tax environment. |
| `CountryCode` | string | required | ISO 3166-1 alpha-3 code of associated country, e.g. `USA` or `GBR`. |
| `ValidityStartUtc` | string | optional | If specified, marks the start of the validity interval in UTC timezone in ISO 8601 format. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of the validity interval in UTC timezone in ISO 8601 format. |
| `TaxationCodes` | array of string | required | Codes of the `Taxation` that are used by this environment. |
