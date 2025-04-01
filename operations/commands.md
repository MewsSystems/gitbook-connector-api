<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Commands

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
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CommandIds` | array of string | required, max 1000 items | Unique identifiers of [Commands](commands.md#command) to be returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | optional | Limitation on the quantity of data returned. |

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
| :-- | :-- | :-- | :-- |
| `Commands` | array of [Command](commands.md#command) | required | The active commands. |
| `Cursor` | string | optional | Unique identifier of the last returned command. This can be used in Limitation in a subsequent request to fetch the next batch of commands. |

#### Command

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the command. |
| `State` | [Command state](commands.md#command-state) | required |  |
| `CreatedUtc` | string | required | Creation date and time of the command. |
| `Creator` | [User](commands.md#user) | optional | Creator of the command. |
| `Device` | [Device](devices.md#device) | required | Device that the command should be executed on. |
| `Data` | object | required | Structure of the object depends on `DeviceType`. |

#### Command state

* `Pending` - Created in Mews, but not yet received by the client application.
* `Received` - Received by the client application.
* `Processing` - Being processed by the client application.
* `Processed` - Successfully processed command.
* `Cancelled` - A command whose execution has been canceled before (or during) processing.
* `Error` - A command whose execution or processing was terminated by an error.

#### User

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FirstName` | string | optional | First name of the user. |
| `LastName` | string | required | Last name of the user. |
| `ImageUrl` | string | optional | URL of the profile image. |

#### Payment terminal command data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentTerminalId` | string | required | Identifier of the payment terminal. |
| `AccountId` | string | required | Unique identifier of the account. |
| `BillId` | string | optional | Identifier of the bill. |
| `PaymentId` | string | optional | Identifier of the `Payment`. |
| `PreauthorizationId` | string | optional | Identifier of the `Preauthorization`. |
| `Amount` | [Extended amount](_objects.md#amount) | required | Amount to be processed. |
| `Fee` | [Extended amount](_objects.md#amount) | optional | Payment fee to be processed. |
| `PaymentTerminalData` | string | optional | Custom JSON data. |
| `AccountData` | [Account data for payment terminal command](commands.md#account-data-for-payment-terminal-command) | required | Account data for the payment terminal command. |
| ~~`CustomerId`~~ | ~~string~~ | ~~required~~ | **Deprecated!** Use `AccountId` instead.|
| ~~`FullName`~~ | ~~string~~ | ~~optional~~ | **Deprecated!** Use `AccountData.Customer.FullName`, if `AccountData.Discriminator` is `Customer`.|

#### Account data for payment terminal command

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Account type](accounts.md#account-type) | required | Type of the account. |
| `Customer` | [Customer data for payment terminal command.](commands.md#customer-data-for-payment-terminal-command) | optional | Customer data if the `Discriminator` is `Customer`. |
| `Company` | [Company data for payment terminal command.](commands.md#company-data-for-payment-terminal-command) | optional | Company data if the `Discriminator` is `Company`. |

#### Customer data for payment terminal command.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FullName` | string | required | Full name of the customer. |

#### Company data for payment terminal command.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required | Name of the company. |

#### Printer command data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CopyCount` | integer | required | Number of copies to be printed. |
| `FileType` | string | required | MIME type of the file to be printed (e.g. `application/pdf`). |
| `FileData` | string | required | Base64-encoded data of the file to be printed. |
| `PrinterName` | string | required | Name of the printer. |
| `PrinterDriverName` | string | required | Name of the printer driver. |
| `PrinterPortName` | string | required | Name of the printer port. |

#### Key cutter command data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `KeyCutterId` | string | optional | Identifier of the key cutter. |
| `ApiUrl` | string | optional | URL of the key cutter server API. |
| `KeyCutterData` | string | optional | Custom JSON data. |
| `KeyCount` | integer | required | Count of keys to cut. |
| `LockIds` | array of string | required | Identifiers of locks/rooms the key should open. |
| `StartUtc` | string | required | Reservation start. |
| `EndUtc` | string | required | Reservation end. |
| `FirstName` | string | optional | First name of the reservation owner. |
| `LastName` | string | required | Last name of the reservation owner. |
| `NormalizedFirstName` | string | optional | Normalized first name of the customer without special characters. |
| `NormalizedLastName` | string | optional | Normalized last name of the customer without special characters. |
| `Telephone` | string | optional | Telephone of the reservation owner. |
| `Email` | string | optional | Email of the reservation owner. |
| `ReservationId` | string | optional | Unique identifier of the reservation. |
| `ReservationNumber` | string | optional | Confirmation number of the reservation in Mews. |

#### Fiscal machine command data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FiscalMachineId` | string | optional | Identifier of the fiscal machine. |
| `ApiUrl` | string | optional | URL of the fiscal machine API. |
| `FiscalMachineData` | string | optional | Custom JSON data. |
| `Bill` | [Bill](bills.md#bill) | required | The issued bill that should be fiscalized. |
| `TaxIdentifier` | string | optional | Tax identifier to be used for fiscalization. |
| `BillFiscalMachineData` | [Coproduct](commands.md#coproduct) | optional |  |
| `PayloadData` | [Coproduct](commands.md#coproduct) | optional |  |

#### Coproduct

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on `Discriminator`. |

#### Passport scanner command data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PassportScannerId` | string | optional | Identifier of the passport scanner. |
| `CustomerId` | string | optional | Unique identifier of the `Customer` who should be processed. |
| `ReservationId` | string | optional | Unique identifier of the reservation whose companions should be processed. |

## Get all commands

Returns all commands the are still active from the client application point of view. That means commands that are in either `Pending` or `Received` state.

### Request

`[PlatformAddress]/api/connector/v1/commands/getAllActive`

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
| :-- | :-- | :-- | :-- |
| `Commands` | array of [Command](commands.md#command) | required | The active commands. |
| `Cursor` | string | optional | Unique identifier of the last returned command. This can be used in Limitation in a subsequent request to fetch the next batch of commands. |

## Add printer command

Adds a new printer command representing printing of the specified document on a printer. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/commands/addPrinter`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "PrinterId": "d117866d-78de-4459-9077-42d7ea0120e3",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "CopyCount": 1,
  "Data": "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `PrinterId` | string | required | Uniqque identifier of the Printer [Device](devices.md#device) where to print the document. |
| `Data` | string | required | Base64 encoded data of PDF document to print. |
| `CopyCount` | integer | required | Count of copies to be printed. |

### Response

```javascript
{
  "CommandId": "2391a3df-1c61-4131-b6f8-c85b4234adcb"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CommandId` | string | required | Unique identifier of the created `Command`. |

## Add payment command

> ### Restricted!
> This operation is part of a custom workflow for Mews partners such as POS systems to access Mews Payment Terminals.
> See [Mews Payment Terminals](../use-cases/mews-terminals.md).

Adds a new Mews Payment Terminal command for taking a customer payment.
The operation instructs a specified terminal device to take a payment from a specified customer for a specified amount.;

### Request

`[PlatformAddress]/api/connector/v1/commands/addPaymentTerminal`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
  "Client": "MyPOS 1.0",
  "Type": "Payment",
  "TerminalId": "be35b39e-ad7e-460a-8de9-4c7581e016a2",
  "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
  "BillId": null,
  "Amount": {
    "Currency": "EUR",
    "Value": 230
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `TerminalId` | string | required | Unique identifier of the payment terminal. |
| `CustomerId` | string | required | Unique identifier of the `Customer`. |
| `Type` | [Payment type](commands.md#payment-type) | required |  |
| `Amount` | [Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07) | required | Amount of the payment. |
| `BillId` | string | optional | Unique identifier of the `Bill`. |
| `PaymentRequestId` | string | optional | Unique identifier of the `PaymentRequest`. |
| `ReservationId` | string | optional | Unique identifier of the `Reservation`. |

#### Payment type

* `Payment`
* `Preauthorization`

### Response

```javascript
{
  "CommandId": "2391a3df-1c61-4131-b6f8-c85b4234adcb"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CommandId` | string | required | Unique identifier of the created `Command`. |

## Add key cutter command

Adds a new key cutter command representing cutting of a key for the specified reservation. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/commands/addKeyCutter`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "KeyCutterId": "7dafffff-a727-4917-a203-bd53995f21bf",
  "ReservationId": "be35b39e-ad7e-460a-8de9-4c7581e016a2",
  "KeyCount": 1
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `KeyCutterId` | string | required | Unique identifier of the KeyCutter [Device](devices.md#device) where to encode the key. |
| `ReservationId` | string | required | Unique identifier of the reservation to encode the key for. |
| `KeyCount` | integer | required | Count of keys to encode. |

### Response

```javascript
{
  "CommandId": "2391a3df-1c61-4131-b6f8-c85b4234adcb"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CommandId` | string | required | Unique identifier of the created `Command`. |

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
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CommandId` | string | required | Identifier of the `Command` to be updated. |
| `State` | [Command state](commands.md#command-state) | required |  |
| `Progress` | number | optional | Progress of the command processing. Only used if the `State` is `Processing`, otherwise ignored. |
| `Notes` | string | optional | Notes about command execution. Only used if the `State` is `Processed`, `Cancelled` or `Error`, otherwise ignored. |

### Response

```javascript
{}
```
