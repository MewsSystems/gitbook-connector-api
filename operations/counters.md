# Counters

## Get all counters

Returns all counters of an enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/counters/getAll`

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
    "BillCounters": [
        {
            "Id": "b7e4b68a-026e-41f3-ad2f-35325aa5dcbf",
            "Name": "Normal",
            "IsDefault": false,
            "Value": 67,
            "Format": "NORMAL{0:0000}"
        },
        {
            "Id": "403842df-635f-4b6e-8de5-42129201235e",
            "Name": "Events",
            "IsDefault": true,
            "Value": 1575,
            "Format": "E2018{0:0000}"
        }
    ],
    "ProformaCounters": [
        {
            "Id": "3362d7d5-a52f-4077-b2b4-4ec2476e6e19",
            "Name": "Default",
            "IsDefault": true,
            "Value": 171,
            "Format": ""
        }
    ],
    "BillPreviewCounters": [
        {
            "Id": "1162d7d5-a52f-4077-b2b4-4ec2476e6e19",
            "Name": "Default",
            "IsDefault": true,
            "Value": 911,
            "Format": ""
        }
    ],
    "ServiceOrderCounters": [
        {
            "Id": "a9fd7868-1ed0-4e96-8dd9-580708c200ea",
            "Name": "Default",
            "IsDefault": true,
            "Value": 25797,
            "Format": null
        }
    ],
    "RegistrationCardCounters": []
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillCounters` | array of [Counter](#counter) | required | The counters used to count closed [Bills](bills.md#bill). |
| `ProformaCounters` | array of [Counter](#counter) | required | The counters used to count Pro Forma invoices for [Bills](bills.md#bill). |
| `BillPreviewCounters` | array of [Counter](#counter) | required | The counters used to count bill previews for [Bills](bills.md#bill). |
| `ServiceOrderCounters` | array of [Counter](#counter) | required | The counters used to count service orders (for example a [Reservation](reservations.md#reservation)). |
| `RegistrationCardCounters` | array of [Counter](#counter) | required | The counters used to count registration cards. |

#### Counter

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the counter. |
| `Name` | string | required | Name of the counter. |
| `IsDefault` | boolean | required | Whether the counter is used by default. |
| `Value` | number | required | Current value the counter. |
| `Format` | string | required | Format the counter is displayed in. |
