# Integrations

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
| --- | --- | --- | --- |
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
| --- | --- | --- | --- |
| `Devices` | array of [Device](integrations.md#device) | required | The devices. |

#### Device

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the device. |
| `Name` | string | required | Name of the device. |
| `Type` | string | required | [Type](#device-type) of the device. |

### Device type

* `Printer` - [Printer command data](integrations.md#printer-command-data)
* `PaymentTerminal` - [Payment terminal command data](integrations.md#payment-terminal-command-data)
* `PassportScanner` - [Passport scanner command data](integrations.md#passport-scanner-command-data)
* `FiscalMachine` - [Fiscal machine command data](integrations.md#fiscal-machine-command-data)
* `KeyCutter` - [Key cutter command data](integrations.md#key-cutter-command-data)

## Get all commands

Returns all commands the are still active from the client application point of view. That means commands that are in either `Pending` or `Received` state.

### Request

`[PlatformAddress]/api/connector/v1/commands/getAllActive`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "Commands": [
        {
            "Id": "aa20961f-6d9e-4b35-ad25-071213530aec",
            "State": "Pending",
            "CreatedUtc": "2015-09-02T19:25:44Z",
            "Creator": {
                "FirstName": "Sample",
                "LastName": "User",
                "ImageUrl": "..."
            },
            "Device": {
                "Id": "63efb573-fc58-4065-b687-9bdd51568529",
                "Name": "Test Printer",
                "Type": "Printer"
            },
            "Data": {
                "CopyCount": 1,
                "FileType": "application/pdf",
                "FileData": "...",
                "PrinterName": "Printer",
                "PrinterDriverName": "",
                "PrinterPortName": ""
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Commands` | array of [Command](integrations.md#command) | required | The active commands. |

#### Command

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the command. |
| `State` | string [Command state](integrations.md#command-state) | required | State of the command. |
| `CreatedUtc` | string | required | Creation date and time of the command. |
| `Creator` | [User](integrations.md#user) | optional | Creator of the command. |
| `Device` | [Device](#device) | required | Device that the command should be executed on. |
| `Data` | object | required | Structure of the object depends on [Device type](#device-type). |

#### Command state

* `Pending` - Created in Mews, but not yet received by the client application.
* `Received` - Received by the client application.
* `Processing` - Being processed by the client application.
* `Processed` - Successfully processed command.
* `Cancelled` - A command whose execution has been canceled before \(or during\) processing.
* `Error` - A command whose execution or processing was terminated by an error.

#### User

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `FirstName` | string | optional | First name of the user. |
| `LastName` | string | required | Last name of the user. |
| `ImageUrl` | string | optional | URL of the profile image. |

### Command data

#### Printer command data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CopyCount` | number | required | Number of copies to be printed. |
| `FileType` | string | required | MIME type of the file to be printed \(e.g. `application/pdf`\). |
| `FileData` | string | required | Base64-encoded data of the file to be printed. |
| `PrinterName` | string | required | Name of the printer. |
| `PrinterDriverName` | string | required | Name of the printer driver. |
| `PrinterPortName` | string | required | Name of the printer port. |

#### Payment terminal command data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `PaymentTerminalId` | string | required | Identifier of the payment terminal. |
| `CustomerId` | string | required | Identifier of the [Customer](customers.md#customer). |
| `BillId` | string | optional | Identifier of the [Bill](finance.md#bill). |
| `Amount` | [Currency value](finance.md#currency-value) | required | Amount to be processed. | 
| `PaymentTerminalData` | string | optional | Custom JSON data. |

#### Passport scanner command data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `PassportScannerId` | string | optional | Identifier of the passport scanner. |
| `CustomerId` | string | optional | Unique identifier of the [Customer](customers.md#customer) who should be processed. |
| `ReservationId` | string | optional | Unique identifier of the [Reservation](reservations.md#reservation) whose companions should be processed. |

#### Fiscal machine command data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `FiscalMachineId` | string | optional | Identifier of the fiscal machine. |
| `FiscalMachineData` | string | optional | Custom JSON data. |
| `ApiUrl` | string | optional | URL of the fiscal machine API. |
| `Bill` | [Bill](finance.md#bill) | required | The issued bill that should be fiscalized. |
| `TaxIdentifier` | string | optional | Tax identifier to be used for fiscalization. |

#### Key cutter command data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `KeyCutterId` | string | optional | Identifier of the key cutter. |
| `KeyCutterData` | string | optional | Custom JSON data. |
| `ApiUrl` | string | optional | URL of the key cutter server API. |
| `ReservationId` | string | optional | Unique identifier of the [Reservation](reservations.md#reservation). |
| `ReservationNumber` | string | optional | Confirmation number of the reservation in Mews. |
| `StartUtc` | string | required | Reservation start. |
| `EndUtc` | string | required | Reservation end. |
| `FirstName` | string | optional | First name of the reservation owner. |
| `LastName` | string | required | Last name of the reservation owner. |
| `Telephone` | string | optional | Telephone of the reservation owner. |
| `Email` | string | optional | Email of the reservation owner. |
| `KeyCount` | number | required | Count of keys to cut. |
| `LockIds` | array of string | required | Identifiers of locks/rooms the key should open. |

## Get all commands by ids

Returns all commands by their identifiers.

### Request

`[PlatformAddress]/api/connector/v1/commands/getAllByIds`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CommandIds": [
        "aa20961f-6d9e-4b35-ad25-071213530aec"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CommandIds` | array of string | required, max 1000 items | Unique identifiers of [Command](integrations.md#command)s to be returned. |

### Response

Same structure as in [Get all commands](integrations.md#get-all-commands) operation.

## Add printer command

Adds a new printer command representing printing of the specified document on a printer.

### Request

`[PlatformAddress]/api/connector/v1/commands/addPrinter`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "PrinterId": "d117866d-78de-4459-9077-42d7ea0120e3",
    "CopyCount": 1,
    "Data": "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `PrinterId` | string | required | Uniqque identifier of the `Printer` [Device](integrations.md#device) where to print the document. |
| `CopyCount` | int | required | Count of copies to be printed. |
| `Data` | string | required | Base64 encoded data of PDF document to print. |

### Response

```javascript
{
    "CommandId": "588fc010-1971-4589-b39f-9550d1e1b3a7"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CommandId` | string | required | Unique identifier of the created [Command](integrations.md#command). |

## Add key cutter command

Adds a new key cutter command representing cutting of a key for the specified reservation.

### Request

`[PlatformAddress]/api/connector/v1/commands/addKeyCutter`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "KeyCutterId": "7dafffff-a727-4917-a203-bd53995f21bf",
    "ReservationId": "be35b39e-ad7e-460a-8de9-4c7581e016a2",
    "KeyCount": 1
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `KeyCutterId` | string | required | Unique identifier of the `KeyCutter` [Device](integrations.md#device) where to encode the key. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation) to encode the key for. |
| `KeyCount` | int | required | Count of keys to encode. |

### Response

```javascript
{
    "CommandId": "4a787fce-a881-4f40-8c97-bc97a6ef4ee8"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CommandId` | string | required | Unique identifier of the created [Command](integrations.md#command). |

## Update command

Updates state of a command.

### Request

`[PlatformAddress]/api/connector/v1/commands/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CommandId": "aa20961f-6d9e-4b35-ad25-071213530aec",
    "State": "Processed"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CommandId` | string | required | Identifier of the [Command](integrations.md#command) to be updated. |
| `State` | string [Command state](integrations.md#command-state) | required | New state of the command. |
| `Progress` | number | optional | Progress of the command processing. Only used if the `State` is `Processing`, otherwise ignored. |
| `Notes` | string | optional | Notes about command execution. Only used if the `State` is `Processed`, `Cancelled` or `Error`, otherwise ignored. |

### Response

```javascript
{}
```

