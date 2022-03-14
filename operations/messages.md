# Messages

## Get all messages

Returns all messages from the [Message thread](messagethreads.md#message-thread) that was created by the application.

### Request

`[PlatformAddress]/api/connector/v1/messages/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "MessageThreadIds": [
        "c1478ff9-80b7-4ea2-94fc-ae4e009e1463"
    ],
    "CreatedUtc": {
        "StartUtc": "2022-03-03T00:00:00Z",
        "EndUtc": "2022-03-14T00:00:00Z"
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `MessageThreadIds` | array of string | required, max 1000 items | Unique identifiers of [Message threads](#message-thread) from where to return messages. |
| `CreatedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 1 months | Interval in which the [Message thread](#message-thread) was created. |

### Response

```javascript
{
    "Messages": [
        {
            "Id": "4bfe4675-98a9-4428-9ea9-ae5300dbaa93",
            "ThreadId": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
            "Text": "Text of the message",
            "Sender": {
                "Discriminator": "Application"
            },
            "CreatedUtc": "2022-03-09T13:19:46Z"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Messages` | array of [Messages](#message) | required | The filtered messages. |

#### Message

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the message. |
| `ThreadId` | string | required | Unique identifier of the [Message thread](messagethreads.md#message-thread) of which is the message part. |
| `Text` | string | required | Text of the message. |
| `Sender` | [Sender](#sender) | required | Specifies the sender of the message. |
| `CreatedUtc` | string | required | Creation date and time of the message in UTC timezone in ISO 8601 format. |

#### Sender

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Sender discriminator](#sender-discriminator) | required | If the message was created by enterprise or application. |

#### Sender discriminator

* `Enterprise`
* `Application`

## Add message

Adds messages to the [Message threads](messagethreads.md#message-thread) that were created by the application.

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
| `Messages` | array of [Message parameters](#message-parameters) | required | Messages to be added. |

#### Message parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Text` | string | required | Text of the message. |
| `ThreadId` | string | required | Unique identifier of the [Message thread](messagethreads.md#message-thread) to which the message should be added. |
| `Identifier` | string | optional | Identifier of the message to be created. |

### Response

```javascript
{
    "Messages": [
        {
            "Identifier": "Message 1",
            "Message": {
                "Id": "4bfe4675-98a9-4428-9ea9-ae5300dbaa93",
                "ThreadId": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
                "Text": "Text of the message",
                "Sender": {
                    "Discriminator": "Application"
                },
                "CreatedUtc": "2022-03-09T13:19:46Z"
            }
        }
    ]
}
``` 

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Messages` | array of [Added messages](#added-messages) | required | Collection of created messages. |

#### Added Message

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional | Identifier of the created message. |
| `Message` | string | [Message](#message) | Message that was added to the [Message thread](messagethreads.md#message-thread). |
