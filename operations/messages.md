<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Messages

## Get all messages

Get all messages belonging to the specified [Message threads](messagethreads.md#message-thread). Messages can only be returned for message threads you have created. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/messages/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "MessageThreadIds": [
    "c1478ff9-80b7-4ea2-94fc-ae4e009e1463"
  ],
  "CreatedUtc": {
    "StartUtc": "2022-03-03T00:00:00Z",
    "EndUtc": "2022-03-14T00:00:00Z"
  },
  "Limitation": {
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `MessageThreadIds` | array of string | required, max 1000 items | Unique identifiers of `MessageThread`s from where to return messages. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 1 month | Interval in which the `Message` was created. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "Messages": [
    {
      "Id": "4bfe4675-98a9-4428-9ea9-ae5300dbaa93",
      "MessageThreadId": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
      "Text": "Text of the message",
      "Sender": {
        "Discriminator": "Application"
      },
      "CreatedUtc": "2022-03-09T13:19:46Z"
    }
  ],
  "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Messages` | array of [Message](messages.md#message) | required | The filtered messages. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest message returned. This can be used in `Limitation` in a subsequent request to fetch the next batch of older messages. |

#### Message

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the message. |
| `MessageThreadId` | string | required | Unique identifier of the `MessageThread` to which the message belongs to. |
| `Text` | string | required | Text of the message. |
| `Sender` | [Sender](messages.md#sender) | required | The sender of the message. |
| `CreatedUtc` | string | required | Creation date and time of the message in UTC timezone in ISO 8601 format. |

#### Sender

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Sender discriminator](messages.md#sender-discriminator) | required | The sender of the message. |
| `Value` | any | optional | Additional information about the sender. Currently not used and always `null`. |

#### Sender discriminator

* `Enterprise` - The message was created by an employee of the enterprise.
* `Application` - The message was created by the third party application.

## Add messages

Add the specified messages to the specified [Message threads](messagethreads.md#message-thread). You can only add messages to message threads that you have created.

### Request

`[PlatformAddress]/api/connector/v1/messages/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "Messages": [
    {
      "Text": "Text of the message",
      "MessageThreadId": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
      "Identifier": "Message 1"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Messages` | array of [Message parameters](messages.md#message-parameters) | required, max 1000 items | Messages to be added. |

#### Message parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `MessageThreadId` | string | required | Unique identifier of the Message thread to which the message should be added. |
| `Text` | string | required | Text of the message. |
| `Identifier` | string | optional | Identifier of the message to be created. |

### Response

```javascript
{
  "Messages": [
    {
      "Identifier": "string",
      "Message": {
        "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "MessageThreadId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "Text": "string",
        "Sender": "Application",
        "CreatedUtc": "2024-04-11T08:54:47.193Z"
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Messages` | array of [Added message](messages.md#added-message) | required | Collection of created messages. |

#### Added message

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional | Identifier of the created message. |
| `Message` | [Message](messages.md#message) | required | Message that was added to the Message thread. |
