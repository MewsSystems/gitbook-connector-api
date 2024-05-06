# Service order notes

## Get all service order notes

Returns all notes associated with the given service orders. Service orders can be reservations or product orders. Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/serviceOrderNotes/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ServiceOrderIds": [
    "1dc0c6bf-2ce6-4a9f-af97-af5c01676720"
  ],
  "ServiceOrderNoteIds": [
    "a06a225b-00f7-48c8-a463-af5c016768e9"
  ],
  "Limitation": {
    "Count": 1
  }
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
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ServiceOrderIds` | array of string | required, max 1000 items | Unique identifiers of [Service order](https://mews-systems.gitbook.io/connector-api/operations/#service-order). Reservation IDs or Order IDs can be used as service order identifiers. |
| `ServiceOrderNoteIds` | array of string | optional, max 1000 items | Unique identifiers of [Service order notes](https://mews-systems.gitbook.io/connector-api/operations/#service-order-note). Use this property if you want to fetch specific service order notes. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |

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
| `ServiceOrderNotes` | array of [OrderNote](#OrderNote) | required | The collection of service order notes. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest service order note returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older service order notes. |

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
      "ServiceOrderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Text": "Sample text"
    }
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
| `ServiceOrderNotes` | array of [ServiceOrderNoteAddParameters](#ServiceOrderNoteAddParameters) | required, max 1000 items | Notes to be added. |

#### ServiceOrderNoteAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderId` | string | required |  |
| `Text` | string | required |  |

### Response

```javascript
{
  "ServiceOrderNotes": [
    {
      "Id": "a06a225b-00f7-48c8-a463-af5c016768e9",
      "ServiceOrderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Text": "Sample text",
      "Type": "General",
      "CreatedUtc": "2022-11-29T21:48:32Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderNotes` | array of [OrderNote](#OrderNote) | required | Added service order notes. |

#### OrderNote

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `OrderId` | string | required |  |
| `Text` | string | optional |  |
| `Type` | [OrderNoteType](#X-Ref-Name-OrderNoteType) | required |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |

#### OrderNoteType

- `General`
- `ChannelManager`

#### OrderNoteType

- `General`
- `ChannelManager`

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
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Text": {
        "Value": "Sample text"
      }
    }
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
| `ServiceOrderNoteUpdates` | array of [ServiceOrderNoteUpdateParameters](#ServiceOrderNoteUpdateParameters) | required, max 1000 items | Notes to be updated. |

#### ServiceOrderNoteUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderNoteId` | string | required |  |
| `Text` | object | required |  |

### Response

```javascript
{
  "ServiceOrderNotes": [
    {
      "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceOrderId": "1dc0c6bf-2ce6-4a9f-af97-af5c01676720",
      "Text": "Sample text",
      "Type": "General",
      "CreatedUtc": "2022-11-29T21:48:32Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderNotes` | array of [OrderNote](#OrderNote) | required | Updated service order notes. |

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
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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
| `ServiceOrderNoteIds` | array of string | required, max 1000 items | Unique identifiers of the service order notes to be deleted. |

### Response

```javascript
{}
```
