# Counters

## Get all counters

Returns all counters of an enterprise associated with the connector integration.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/counters/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-10-01T00:00:00Z",
        "EndUtc": "2023-10-31T00:00:00Z"
    },
    "Type": "Counter",
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Counter](#counter) was updated. |
| `Type` | string [Counter type](#counter-type-discriminator) | optional | Type of the counter. If not specified, the operation returns all types. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
     "Counters": [
        {
            "Id": "b7e4b68a-026e-41f3-ad2f-35325aa5dcbf",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "Name": "Normal",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "IsDefault": false,
            "Value": 67,
            "Format": "NORMAL{0:0000}",
            "Type": "BillCounter"
        },
        {
            "Id": "403842df-635f-4b6e-8de5-42129201235e",
            "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
            "Name": "Events",
            "IsDefault": true,
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "Value": 1575,
            "Format": "E2018{0:0000}",
            "Type": "BillCounter"
        },
        {
            "Id": "3362d7d5-a52f-4077-b2b4-4ec2476e6e19",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "Name": "Default",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "IsDefault": true,
            "Value": 171,
            "Format": "",
            "Type": "ProformaCounter"
        },
        {
            "Id": "1162d7d5-a52f-4077-b2b4-4ec2476e6e19",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "Name": "Default",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "IsDefault": true,
            "Value": 911,
            "Format": "",
            "Type": "BillPreviewCounter"
        },
        {
            "Id": "a9fd7868-1ed0-4e96-8dd9-580708c200ea",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "Name": "Default",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "IsDefault": true,
            "Value": 25797,
            "Format": null,
            "Type": "ServiceOrderCounter"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Counters` | array of [Counter](#counter) | required | All types of counters. |
| ~~`BillCounters`~~ | ~~array of [Counter](#counter)~~ | ~~required~~ | ~~The counters used to count closed [Bills](bills.md#bill).~~ **Deprecated!** |
| ~~`ProformaCounters`~~ | ~~array of [Counter](#counter)~~ | ~~required~~ | ~~The counters used to count Pro Forma invoices for [Bills](bills.md#bill).~~ **Deprecated!** |
| ~~`BillPreviewCounters`~~ | ~~array of [Counter](#counter)~~ | ~~required~~ | ~~The counters used to count bill previews for [Bills](bills.md#bill).~~ **Deprecated!** |
| ~~`ServiceOrderCounters`~~ | ~~array of [Counter](#counter)~~ | ~~required~~ | ~~The counters used to count service orders (for example reservations).~~ **Deprecated!** |
| ~~`RegistrationCardCounters`~~ | ~~array of [Counter](#counter)~~ | ~~required~~ | ~~The counters used to count registration cards.~~ **Deprecated!** |

#### Counter

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the counter. |
| `Name` | string | required | Name of the counter. |
| `CreatedUtc` | string | required | Creation date and time of the counter in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the counter in UTC timezone in ISO 8601 format. |
| `IsDefault` | boolean | required | Whether the counter is used by default. |
| `Value` | number | required | Current value the counter. |
| `Format` | string | required | Format the counter is displayed in. |
| `Type` | string [Counter type](#counter-type-discriminator) | optional | Type of the counter. |

#### Counter type discriminator

* `Counter` - Any type of counter
* `AvailabilityBlockCounter`
* `BillCounter`
* `BillPreviewCounter`
* `FiscalCounter`
* `ProformaCounter`
* `RegistrationCardCounter`
* `ServiceOrderCounter`
* ...
