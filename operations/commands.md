<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Commands

## Get all fiscal machine commands

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns fiscal machine commands. The commands can be filtered either by unique command identifiers or by `Device` unique identifiers and command states. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/fiscalMachineCommands/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "DeviceIds": [
    "d117866d-78de-4459-9077-42d7ea0120e3",
    "7dafffff-a727-4917-a203-bd53995f21bf"
  ],
  "States": [
    "Processed",
    "Processing"
  ],
  "UpdatedUtc": {
    "StartUtc": "2025-01-10T00:00:00Z",
    "EndUtc": "2025-01-17T00:00:00Z"
  },
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "Limitation": {
    "Count": 100
  }
}
```

This operation accepts one of the following mutually exclusive parameter sets.

#### Get all commands by unique identifiers
Filter commands by their unique identifiers.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CommandIds` | array of string | required, max 1000 items | Unique identifiers of the commands to filter by. |
| `EnterpriseIds` | array,null | required, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### Get all commands by device identifiers and states
Filter commands by the unique identifiers of `Device` and states, with optional filtering by update interval.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `DeviceIds` | array of string | required, max 100 items | Unique identifiers of `Device` to filter by. |
| `States` | array of [Command state](commands.md#command-state) | required | States of the commands to filter by. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required, max length 3 months | Interval in which the commands were updated. |
| `EnterpriseIds` | array,null | required, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "Commands": [
    {
      "Id": "aa20961f-6d9e-4b35-ad25-071213530aec",
      "State": "Processing",
      "CreatedUtc": "2025-01-15T14:30:00Z",
      "Creator": {
        "Discriminator": "Enterprise",
        "EnterpriseProfile": {
          "ProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf"
        }
      },
      "FiscalMachineId": "FM-001",
      "ApiUrl": "https://fiscal-machine.example.com/api",
      "FiscalMachineData": "{\"printerPort\": \"COM1\", \"baudRate\": 9600}",
      "TaxIdentifier": "12345678901",
      "Device": {
        "Id": "d117866d-78de-4459-9077-42d7ea0120e3",
        "Type": "FiscalMachine",
        "Name": "Fiscal Printer FP-001",
        "Identifier": null
      },
      "Bill": {
        "Id": "ea087d64-3901-4eee-b0b7-9fce4c58a005",
        "Name": "Hotel Invoice #1001",
        "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
        "AccountType": "Customer",
        "AssociatedAccountIds": null,
        "CounterId": null,
        "State": "Closed",
        "Type": "Invoice",
        "Number": "1001",
        "VariableSymbol": "VS001",
        "CreatedUtc": "2025-01-15T10:00:00Z",
        "UpdatedUtc": "2025-01-15T14:25:00Z",
        "IssuedUtc": "2025-01-15T14:25:00Z",
        "TaxedUtc": "2025-01-15T14:25:00Z",
        "PaidUtc": null,
        "DueUtc": "2025-01-29T23:59:59Z",
        "LastReminderDateUtc": null,
        "PurchaseOrderNumber": "PO-2025-001",
        "Notes": "Hotel accommodation services",
        "Options": null,
        "Owner": null,
        "AssociatedAccountsData": null,
        "EnterpriseData": null,
        "CorrectionState": "Bill",
        "CorrectionType": null,
        "CorrectedBillId": null
      },
      "CommandData": {
        "Discriminator": "ItalianFiscalMachineData",
        "ItalianFiscalMachineData": {
          "IsRefund": false,
          "RebatedReceiptNumber": null,
          "RebatedReceiptSequence": null,
          "RebatedReceiptDateTimeUtc": null,
          "PrinterSerialNumber": "FP001-123456"
        },
        "ItalianFiscalMachinePayload": null
      }
    },
    {
      "Id": "f2e8c456-1234-4567-89ab-cdef01234567",
      "State": "Processed",
      "CreatedUtc": "2025-01-15T13:15:00Z",
      "Creator": {
        "Discriminator": "Enterprise",
        "EnterpriseProfile": {
          "ProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf"
        }
      },
      "FiscalMachineId": "FM-002",
      "ApiUrl": "https://fiscal-machine-2.example.com/api",
      "FiscalMachineData": "{\"printerPort\": \"USB001\", \"certificatePath\": \"/etc/fiscal/cert.p12\"}",
      "TaxIdentifier": "98765432109",
      "Device": {
        "Id": "7dafffff-a727-4917-a203-bd53995f21bf",
        "Type": "FiscalMachine",
        "Name": "Fiscal Printer FP-002",
        "Identifier": null
      },
      "Bill": {
        "Id": "12345678-1234-1234-1234-123456789012",
        "Name": "Restaurant Bill #2001",
        "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
        "AccountType": "Customer",
        "AssociatedAccountIds": null,
        "CounterId": null,
        "State": "Closed",
        "Type": "Receipt",
        "Number": "2001",
        "VariableSymbol": "VS002",
        "CreatedUtc": "2025-01-15T12:30:00Z",
        "UpdatedUtc": "2025-01-15T13:10:00Z",
        "IssuedUtc": "2025-01-15T13:10:00Z",
        "TaxedUtc": "2025-01-15T13:10:00Z",
        "PaidUtc": "2025-01-15T13:10:00Z",
        "DueUtc": null,
        "LastReminderDateUtc": null,
        "PurchaseOrderNumber": null,
        "Notes": "Restaurant services - Table 15",
        "Options": null,
        "Owner": null,
        "AssociatedAccountsData": null,
        "EnterpriseData": null,
        "CorrectionState": "Bill",
        "CorrectionType": null,
        "CorrectedBillId": null
      },
      "CommandData": {
        "Discriminator": "ItalianFiscalMachinePayload",
        "ItalianFiscalMachineData": null,
        "ItalianFiscalMachinePayload": {
          "Payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGZ2cF9kb2M+CiAgPGhlYWRlcj4KICAgIDx0aW1lc3RhbXA+MjAyNS0wMS0xNVQxMzoxMDowMFo8L3RpbWVzdGFtcD4KICA8L2hlYWRlcj4KICA8Ym9keT4KICAgIDxyZWNlaXB0X2RhdGE+U2FtcGxlIGZpc2NhbCByZWNlaXB0IGRhdGE8L3JlY2VpcHRfZGF0YT4KICA8L2JvZHk+CjwvZnZwX2RvYz4="
        }
      }
    }
  ],
  "Cursor": "f2e8c456-1234-4567-89ab-cdef01234567"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Commands` | array of [Fiscal machine command data (ver. 2025-06-23)](commands.md#fiscal-machine-command-data-ver-2025-06-23) | required | The filtered fiscal machine commands. |
| `Cursor` | string | optional | Unique identifier of the last returned command. This can be used in Limitation in a subsequent request to fetch the next batch of commands. |

#### Fiscal machine command data (ver. 2025-06-23)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the command. |
| `State` | [Command state](commands.md#command-state) | required | State of the command. |
| `CreatedUtc` | string | required | Creation date and time of the command. |
| `Creator` | [Profile data](_objects.md#profile-data) | optional | Creator of the command. |
| `FiscalMachineId` | string | required | Identifier of the fiscal machine. |
| `ApiUrl` | string | required | URL of the fiscal machine API. |
| `FiscalMachineData` | string | required | Custom JSON data. |
| `TaxIdentifier` | string | optional | Tax identifier to be used for fiscalization. |
| `Device` | [Device](devices.md#device) | required | Device that the command should be executed on. |
| `Bill` | [Bill (ver 2025-06-23)](commands.md#bill-ver-2025-06-23) | required | The issued bill that should be fiscalized. |
| `CommandData` | [FiscalMachineAdditionalData](commands.md#fiscalmachineadditionaldata) | optional | Additional data of the fiscal machine. |

#### Bill (ver 2025-06-23)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the bill. |
| `Name` | string | optional | Name of the bill. |
| `EnterpriseId` | string | required | Unique identifier of the `Enterprise`. |
| `AccountId` | string | required | Unique identifier of the account (`Customer` or `Company`) the bill is issued to. |
| `AccountType` | [Account type](accounts.md#account-type) | required | A discriminator specifying the account type, i.e. `Customer` or `Company`. |
| `AssociatedAccountIds` | array of string | optional | Unique identifiers of the `Customers` or `Companies` that are associated to the bill. |
| `CounterId` | string | optional | Unique identifier of the bill `Counter`. |
| `State` | [Bill state](bills.md#bill-state) | required | Whether the bill is `Open` or `Closed`. |
| `Type` | [Bill type](bills.md#bill-type) | required | After a bill is closed, the Bill Type is set to `Receipt` or `Invoice`. `Receipt` indicates that the bill has been fully paid and the balance is zero. `Invoice` indicates that the bill has not yet been fully paid but an invoice has been issued. Prior to closing, Bill Type should not be used. |
| `Number` | string | optional | Number of the bill. |
| `VariableSymbol` | string | optional | Variable symbol of the bill. |
| `CreatedUtc` | string | required | Date and time of the bill creation in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Date and time when the bill was last updated, in UTC timezone in ISO 8601 format. |
| `IssuedUtc` | string | optional | Date and time of the bill issuance in UTC timezone in ISO 8601 format. |
| `TaxedUtc` | string | optional | Taxation date of the bill in UTC timezone in ISO 8601 format. |
| `PaidUtc` | string | optional | Date when the bill was paid in UTC timezone in ISO 8601 format. |
| `DueUtc` | string | optional | Bill due date and time in UTC timezone in ISO 8601 format. |
| `LastReminderDateUtc` | string | optional | Date and time when an email reminder to pay an invoice was last sent, in UTC timezone in ISO 8601 format. |
| `PurchaseOrderNumber` | string | optional | Unique number of the purchase order from the buyer. |
| `Notes` | string | optional | Additional notes. |
| `Options` | [Bill options](bills.md#bill-options) | optional | Options of the bill. |
| `Owner` | [Associated account bill data](bills.md#associated-account-bill-data) | optional | Additional information about owner of the bill. Can be a `Customer` or `Company`. Persisted at the time of closing of the bill. |
| `AssociatedAccountsData` | array of [Associated account bill data](bills.md#associated-account-bill-data) | optional | Additional information about the associated account of the bill. Can be a `Customer` or `Company`. Persisted at the time of closing of the bill. Currently only one account can be associated with a bill, but this may be extended in future. |
| `EnterpriseData` | [Bill enterprise data](bills.md#bill-enterprise-data) | optional | Additional information about the enterprise issuing the bill, including bank account details. Persisted at the time of closing of the bill. |
| `CorrectionState` | [Bill correction state](bills.md#bill-correction-state) | required | Whether the bill is a regular bill or a corrective bill. |
| `CorrectionType` | [Bill correction type](bills.md#bill-correction-type) | optional | Type of correction. |
| `CorrectedBillId` | string | optional | The ID of the bill that the corrective bill corrects. If the corrected bill was deleted, this field is `null`. |

#### FiscalMachineAdditionalData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Fiscal machine data discriminator](commands.md#fiscal-machine-data-discriminator) | optional | Type of additional data for Italian fiscal machine. |
| `ItalianFiscalMachineData` | [Italian fiscal machine data](commands.md#italian-fiscal-machine-data) | optional | Fiscal machine data for Italian fiscal machine. |
| `ItalianFiscalMachinePayload` | [Italian fiscal machine payload.](commands.md#italian-fiscal-machine-payload) | optional | Fiscal machine payload for Italian fiscal machine. |

#### Fiscal machine data discriminator

* `ItalianFiscalMachineData`
* `ItalianFiscalMachinePayload`

#### Italian fiscal machine data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `IsRefund` | boolean | required | Indicates if the transaction is a refund. |
| `RebatedReceiptNumber` | string | optional | Number of the rebated receipt. |
| `RebatedReceiptSequence` | string | optional | Sequence of the rebated receipt. |
| `RebatedReceiptDateTimeUtc` | string | optional | Date and time of the rebated receipt in UTC. |
| `PrinterSerialNumber` | string | optional | Serial number of the printer. |

#### Italian fiscal machine payload.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Payload` | string | required | Base64-encoded data of the file to be printed. |

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
| `State` | [Command state](commands.md#command-state) | required | State of the command. |
| `CreatedUtc` | string | required | Creation date and time of the command. |
| `Creator` | [User](commands.md#user) | optional | Creator of the command. |
| `Device` | [Device](devices.md#device) | required | Device that the command should be executed on. |
| `Data` | object | required | Structure of the object depends on [Device type](devices.md#device-type). |

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
| `BillFiscalMachineData` | [Fiscal machine data](commands.md#fiscal-machine-data) | optional | Fiscal machine data; currently only `ItalianFiscalMachineData` is supported. |
| `PayloadData` | [Fiscal machine payload](commands.md#fiscal-machine-payload) | optional | Fiscal machine payload data; currently only `ItalianFiscalMachinePayloadData` is supported. |

#### Fiscal machine data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Fiscal machine data discriminator](commands.md#fiscal-machine-data-discriminator) | required | Discriminator of the object. |
| `Value` | [Fiscal machine data for Italian fiscal machine](commands.md#fiscal-machine-data-for-italian-fiscal-machine) | required | Structure of the object depends on `Discriminator` (currently only `ItalianFiscalMachineData` is supported). |

#### Fiscal machine data discriminator

* `ItalianFiscalMachineData`

#### Fiscal machine data for Italian fiscal machine

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `IsRefund` | boolean | required | Indicates if the transaction is a refund. |
| `RebatedReceiptNumber` | string | optional | Number of the rebated receipt. |
| `RebatedReceiptSequence` | string | optional | Sequence of the rebated receipt. |
| `RebatedReceiptDateTimeUtc` | string | optional | Date and time of the rebated receipt in UTC. |
| `PrinterSerialNumber` | string | optional | Serial number of the printer. |

#### Fiscal machine payload

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Fiscal machine payload discriminator](commands.md#fiscal-machine-payload-discriminator) | required | Discriminator of the object. |
| `Value` | string | required | Base64-encoded data of the file to be printed. |

#### Fiscal machine payload discriminator

* `ItalianFiscalMachine`

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
| `PrinterId` | string | required | Unique identifier of the `Printer` `Device` where to print the document. |
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
The operation instructs a specified terminal device to take a payment from a specified customer for a specified amount.

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
| `Type` | [Payment type](commands.md#payment-type) | required | The type of payment, e.g. `Preauthorization`. |
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
| `State` | [Command state](commands.md#command-state) | required | New state of the command. |
| `Progress` | number | optional | Progress of the command processing. Only used if the `State` is `Processing`, otherwise ignored. |
| `Notes` | string | optional | Notes about command execution. Only used if the `State` is `Processed`, `Cancelled` or `Error`, otherwise ignored. |

### Response

```javascript
{}
```
