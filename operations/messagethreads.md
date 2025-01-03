# Message threads

## Get all message threads

Get all message threads that you have created, filtered by time interval and/or specific message thread IDs. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/messageThreads/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "CreatedUtc":{
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `MessageThreadIds` | array of string | optional, max 1000 items | Unique identifiers of [Message threads](#message-thread). Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Message thread](#message-thread) was created. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Message thread](#message-thread) was updated. Required if no other filter is provided. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of message thread data returned (using cursor pagination). |

### Response

```javascript
{
    "MessageThreads": [
        {
            "Id": "7f9325f6-ef44-4911-89a8-ae51010a5aa4",
            "OriginalSender": "John Doe",
            "Subject": "Example subject",
            "CreatedUtc": "2022-03-07T16:09:45Z",
            "UpdatedUtc": "2022-03-07T16:09:45Z"
        }
    ],
    "Cursor": "7f9325f6-ef44-4911-89a8-ae51010a5aa4"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `MessageThreads` | array of [Message threads](#message-thread) | required | The filtered message threads. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest message thread returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older message threads. |

#### Message thread

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the message thread. |
| `OriginalSender` | string | required | The sender of the original message in the thread. |
| `Subject` | string | required | Subject of the message thread. |
| `CreatedUtc` | string | required | Creation date and time of the message thread in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the message thread in UTC timezone in ISO 8601 format. |

## Add message thread

Creates a new [Message thread](#message-thread) on behalf of the specified customer, i.e. the sender of the original message in the message thread.

### Request

`[PlatformAddress]/api/connector/v1/messageThreads/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "OriginalSender": "John Doe",
    "Subject": "Example subject"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `OriginalSender` | string | required | The sender of the original message in the thread. |
| `Subject` | string | required | Subject of the message thread. |

### Response

```javascript
{
    "MessageThreads": [
        {
            "Id": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
            "OriginalSender": "John Doe",
            "Subject": "Example subject",
            "CreatedUtc": "2022-03-08T12:06:50Z",
            "UpdatedUtc": "2022-03-08T12:06:50Z",
            "IsResolved": false
        }
    ]
}
``` 

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `MessageThreads` | array of [Message threads](#message-thread) | required | The created message threads. |
