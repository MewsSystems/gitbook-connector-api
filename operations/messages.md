# Messages

## Get all messages

Get all messages belonging to the specified [Message threads](messagethreads.md#message-thread). Messages can only be returned for message threads you have created. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
    },
    "Limitation":{
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
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](enterprises.md#enterprise). Required when using a [Portfolio Access Token](../guidelines/multi-property.md), ignored otherwise. |
| `MessageThreadIds` | array of string | required, max 1000 items | Unique identifiers of [Message threads](messagethreads.md#message-thread) from where to return messages. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 1 months | Interval in which the [Message](#message) was created. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of message data returned (using cursor pagination). |

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
| `Messages` | array of [Messages](#message) | required | The filtered messages. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest message returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older messages. |

#### Message

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the message. |
| `MessageThreadId` | string | required | Unique identifier of the [Message thread](messagethreads.md#message-thread) which the message belongs to. |
| `Text` | string | required | Text of the message. |
| `Sender` | [Sender](#sender) | required | The sender of the message. |
| `CreatedUtc` | string | required | Creation date and time of the message in UTC timezone in ISO 8601 format. |

#### Sender

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Sender discriminator](#sender-discriminator) | required | The source of the message, either the enterprise or the client application. |

#### Sender discriminator

* `Enterprise` - the message was created by an employee of the enterprise
* `Application` - the message was created by the third party application

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
| `Messages` | array of [Added messages](#added-message) | required | Collection of created messages. |

#### Added Message

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional | Identifier of the created message. |
| `Message` | string | [Message](#message) | Message that was added to the [Message thread](messagethreads.md#message-thread). |
