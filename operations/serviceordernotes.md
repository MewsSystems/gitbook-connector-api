<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Service order notes

## Get all service order notes

Returns all notes associated with the given service orders. Service orders can be reservations or product orders. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

> **Service order:** This is the general name for an order made against a service, which includes both 'stay' service orders, called [Reservations](reservations.md#reservation), and 'product' service orders, which we simply call [Orders](orders.md). Operations such as [Get all service order notes](#get-all-service-order-notes) will accept Reservation IDs or Order IDs as service order identifiers.

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
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "Limitation": {
    "Count": 100
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ServiceOrderIds` | array of string | required, max 1000 items | Unique identifiers of `Service order`. Reservation IDs or Order IDs can be used as service order identifiers. |
| `ServiceOrderNoteIds` | array of string | optional, max 1000 items | Unique identifiers of `Service order note`. Use this property if you want to fetch specific service order notes. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Timestamp in UTC timezone ISO 8601 format when the service order note was updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "ServiceOrderNotes": [
    {
      "Id": "a06a225b-00f7-48c8-a463-af5c016768e9",
      "OrderId": "1dc0c6bf-2ce6-4a9f-af97-af5c01676720",
      "Text": "Shaken, not stirred.",
      "Type": "General",
      "CreatedUtc": "2022-11-29T21:48:32Z",
      "UpdatedUtc": "2022-11-30T12:36:37Z"
    }
  ],
  "Cursor": "a06a225b-00f7-48c8-a463-af5c016768e9"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderNotes` | array of [Service order note](serviceordernotes.md#service-order-note) | required | The collection of service order notes. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest service order note returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older service order notes. |

## Add service order notes

Adds one or more notes with a provided text to a specific service order. Service orders can be reservations or product orders.

### Request

`[PlatformAddress]/api/connector/v1/serviceOrderNotes/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceOrderNotes": [
    {
      "ServiceOrderId": "1dc0c6bf-2ce6-4a9f-af97-af5c01676720",
      "Text": "Shaken, not stirred."
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceOrderNotes` | array of [Service order note parameters](serviceordernotes.md#service-order-note-parameters) | required, max 1000 items | Notes to be added. |

#### Service order note parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderId` | string | required | Unique identifier of the `Service order` to which note will be added. |
| `Text` | string | required | Content of the service order note. |

### Response

```javascript
{
  "ServiceOrderNotes": [
    {
      "Id": "a06a225b-00f7-48c8-a463-af5c016768e9",
      "OrderId": "1dc0c6bf-2ce6-4a9f-af97-af5c01676720",
      "Text": "Shaken, not stirred.",
      "Type": "General",
      "CreatedUtc": "2022-11-29T21:48:32Z",
      "UpdatedUtc": "2022-11-30T12:36:37Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderNotes` | array of [Service order note](serviceordernotes.md#service-order-note) | required | Added service order notes. |

#### Service order note

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service order note. |
| `OrderId` | string | required | Unique identifier of the `Service order` to which the Service Order Note belongs. |
| `Text` | string | optional | Content of the service order note. |
| `Type` | [Service order note type](serviceordernotes.md#service-order-note-type) | required | A discriminator specifying the type of service order note, e.g. general or channel manager. |
| `CreatedUtc` | string | optional | Creation date and time of the service order note in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | optional | Last update date and time of the service order note in UTC timezone in ISO 8601 format. |

#### Service order note type

* `General`
* `ChannelManager`

## Update service order notes

Updates one or more given service order notes with new text.

### Request

`[PlatformAddress]/api/connector/v1/serviceOrderNotes/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceOrderNoteUpdates": [
    {
      "ServiceOrderNoteId": "a06a225b-00f7-48c8-a463-af5c016768e9",
      "Text": {
        "Value": "Shaken, not stirred."
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceOrderNoteUpdates` | array of [Service order note update parameters](serviceordernotes.md#service-order-note-update-parameters) | required, max 1000 items | Notes to be updated. |

#### Service order note update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderNoteId` | string | required | Unique identifier of the `Service order note`. |
| `Text` | [String update value](_objects.md#string-update-value) | optional | Content of the service order note (or `null` if the content should not be updated). |

### Response

```javascript
{
  "ServiceOrderNotes": [
    {
      "Id": "a06a225b-00f7-48c8-a463-af5c016768e9",
      "OrderId": "1dc0c6bf-2ce6-4a9f-af97-af5c01676720",
      "Text": "Shaken, not stirred.",
      "Type": "General",
      "CreatedUtc": "2022-11-29T21:48:32Z",
      "UpdatedUtc": "2022-11-30T12:36:37Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderNotes` | array of [Service order note](serviceordernotes.md#service-order-note) | required | Updated service order notes. |

## Delete service order notes

Deletes service order notes.

### Request

`[PlatformAddress]/api/connector/v1/serviceOrderNotes/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceOrderNoteIds": [
    "a06a225b-00f7-48c8-a463-af5c016768e9"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceOrderNoteIds` | array of string | required, max 1000 items | Unique identifiers of the service order notes to be deleted. |

### Response

```javascript
{}
```
