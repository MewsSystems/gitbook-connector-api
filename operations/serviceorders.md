# Service orders

## Get all service order notes

Returns all notes associated with the service order. This operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/serviceOrderNotes/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceOrderIds": [
        "1dc0c6bf-2ce6-4a9f-af97-af5c01676720"
    ],
    "ServiceOrderNoteIds": [
        "a06a225b-00f7-48c8-a463-af5c016768e9"
    ],
    "Limitation": { "Count": 1 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceOrderIds` | array of string | required, max 1000 items | Unique identifiers of [Service order](#service-order). |
| `ServiceOrderNoteIds` | array of string | optional, max 1000 items | Unique identifiers of [Service order notes](#service-order-note). Use this property if you want to fetch specific service order note. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of Service order notes returned. |

### Response

```javascript
{
    "ServiceOrderNotes": [
        {
            "Id": "a06a225b-00f7-48c8-a463-af5c016768e9",
            "ServiceOrderId": "1dc0c6bf-2ce6-4a9f-af97-af5c01676720",
            "Text": "Shaken, not stirred.",
            "Type": "General",
            "CreatedUtc": "2022-11-29T21:48:32Z"
        }
    ],
    "Cursor": "a06a225b-00f7-48c8-a463-af5c016768e9"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderNotes` | array of [Service order note](#service-order-note) | required | The collection of Service order notes. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest service order note returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older service order notes. |

#### Service order
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service order. |

#### Service order note

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service order note. |
| `ServiceOrderId` | string | required | Unique identifier of a [Service order](#service-order). |
| `Text` | string | required | Content of the service order note. |
| `Type` | string | optional | A discriminator specifying the [type of service order note](#type), e.g. general or channel manager. |
| `CreatedUtc` | string | required | Creation date and time of the block in UTC timezone in ISO 8601 format. |

#### Type

* General
* ChannelManager