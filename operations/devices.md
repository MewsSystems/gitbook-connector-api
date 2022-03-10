# Devices

## Get all devices

Returns all devices in the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/devices/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
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
    "Devices": [
        {
            "Id": "d14efcfd-75b9-4bd3-9f10-5657a01f860a",
            "Name": "Key cutter 1",
            "Type": "KeyCutter"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Devices` | array of [Device](#device) | required | The devices. |

#### Device

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the device. |
| `Name` | string | required | Name of the device. |
| `Type` | string | required | [Type](#device-type) of the device. |

### Device type

* `Printer` - [Printer command data](commands.md#printer-command-data)
* `PaymentTerminal` - [Payment terminal command data](commands.md#payment-terminal-command-data)
* `PassportScanner` - [Passport scanner command data](commands.md#passport-scanner-command-data)
* `FiscalMachine` - [Fiscal machine command data](commands.md#fiscal-machine-command-data)
* `KeyCutter` - [Key cutter command data](commands.md#key-cutter-command-data)
