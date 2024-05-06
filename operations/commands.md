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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `CommandIds` | array of string | required, max 1000 items | Unique identifiers of [Commands](https://mews-systems.gitbook.io/connector-api/operations/#command) to be returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

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

## Get all commands

Returns all commands the are still active from the client application point of view. That means commands that are in either &#x60;Pending&#x60; or &#x60;Received&#x60; state.

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |

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

## Add printer command

Adds a new printer command representing printing of the specified document on a printer. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `PrinterId` | string | required | Uniqque identifier of the Printer [Device](https://mews-systems.gitbook.io/connector-api/operations/devices/#device) where to print the document. |
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
| `CommandId` | string | required | Unique identifier of the created [Command](https://mews-systems.gitbook.io/connector-api/operations/#command). |

## Add key cutter command

Adds a new key cutter command representing cutting of a key for the specified reservation. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `KeyCutterId` | string | required | Unique identifier of the KeyCutter [Device](https://mews-systems.gitbook.io/connector-api/operations/devices/#device) where to encode the key. |
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
| `CommandId` | string | required | Unique identifier of the created [Command](https://mews-systems.gitbook.io/connector-api/operations/#command). |

## Add payment command

&gt; ### Restricted!
&gt; This operation is part of a custom workflow for Mews partners such as POS systems to access Mews Payment Terminals.
&gt; See [Mews Payment Terminals](https://mews-systems.gitbook.io/connector-api/use-cases/mews-terminals/).
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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Token authenticating access to the enterprise integration. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token authenticating the client application. |
| `MaskedClientToken` | string | optional |  |
| `TerminalId` | string | required | Unique identifier of the payment terminal. |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `Type` | [PaymentTerminalCommandType](#X-Ref-Name-PaymentTerminalCommandType) | required |  |
| `Amount` | object | required | Total price of the reservation. |
| `BillId` | string | optional | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill). |
| `PaymentRequestId` | string | optional |  |
| `ReservationId` | string | optional |  |

#### PaymentTerminalCommandType

- `Payment`
- `Preauthorization`

#### CurrencyValueOld
Total price of the reservation.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |

### Response

```javascript
{
  "CommandId": "2391a3df-1c61-4131-b6f8-c85b4234adcb"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CommandId` | string | required | Unique identifier of the created [Command](https://mews-systems.gitbook.io/connector-api/operations/#command). |

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `CommandId` | string | required | Identifier of the [Command](https://mews-systems.gitbook.io/connector-api/operations/#command) to be updated. |
| `State` | [DeviceCommandState](#X-Ref-Name-DeviceCommandState) | required |  |
| `Progress` | number | optional | Progress of the command processing. Only used if the State is Processing, otherwise ignored. |
| `Notes` | string | optional | Notes about command execution. Only used if the State is Processed, Cancelled or Error, otherwise ignored. |
| `ExternalRequestIdentifier` | object | required |  |

#### DeviceCommandState

- `Pending`
- `Received`
- `Processing`
- `Processed`
- `Cancelled`
- `Error`

### Response

```javascript
{}
```
