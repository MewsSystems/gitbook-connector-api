# Exports

## Get all exports

Get exports for the given &#x60;ExportIds&#x60;. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/exports/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ExportIds": [
    "3fa85f64-5717-4562-b3fd-2c963f66afa6",
    "09708665-0e31-4b23-b337-b0a000be0df0",
    "706dc6d5-9511-4751-825e-538ce99da2ce",
    "f776f20a-6f1a-4ddf-93f4-9dae95261415"
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
| `ExportIds` | array of string | required, max 1000 items | Unique identifiers of the [Exports](https://mews-systems.gitbook.io/connector-api/operations/#export). |

### Response

```javascript
{
  "Exports": [
    {
      "Id": "3fa85f64-5717-4562-b3fd-2c963f66afa6",
      "Status": "Success",
      "EntityType": "OrderItem",
      "ExpiresUtc": "2023-10-26T11:42:28Z",
      "Files": [
        {
          "Url": "https://example.com/exports/3fa85f64-5717-4562-b3fd-2c963f66afa6-1.jsonl?example=signature",
          "SizeInBytes": 1215279
        },
        {
          "Url": "https://example.com/exports/3fa85f64-5717-4562-b3fd-2c963f66afa6-2.jsonl?example=signature",
          "SizeInBytes": 1398362
        }
      ]
    },
    {
      "Id": "09708665-0e31-4b23-b337-b0a000be0df0",
      "Status": "Pending",
      "EntityType": "OrderItem",
      "Files": [],
      "ExpiresUtc": null
    },
    {
      "Id": "706dc6d5-9511-4751-825e-538ce99da2ce",
      "Status": "Processing",
      "EntityType": "OrderItem",
      "Files": [],
      "ExpiresUtc": null
    },
    {
      "Id": "f776f20a-6f1a-4ddf-93f4-9dae95261415",
      "Status": "Expired",
      "EntityType": "OrderItem",
      "Files": [],
      "ExpiresUtc": "2023-10-24T14:12:30Z"
    }
  ]
}
```

## Add export

Create a pending export. Export all entities of the specified &#x60;EntityType&#x60; within the enterprise. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/) but doesn&#x27;t have filtering by &#x60;EnterpriseIds&#x60; or &#x60;ChainIds&#x60;, so will return entities from all enterprises within the scope of the portfolio.
If there is already an export with status &#x60;Pending&#x60; or &#x60;Processing&#x60; for the specified entity type, the request for a new export will be rejected. Successful exports remain available for download until the expiration date specified in &#x60;ExpiresUtc&#x60;.

### Request

`[PlatformAddress]/api/connector/v1/exports/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EntityType": "OrderItem"
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
| `EntityType` | [ExportEntityType](#X-Ref-Name-ExportEntityType) | required |  |

#### ExportEntityType

- `OrderItem`
- `Payment`
- `Reservation`
- `Customer`
- `Company`

### Response

```javascript
{
  "Export": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Status": "Pending",
    "EntityType": "OrderItem",
    "Files": [
      {
        "Url": "string",
        "SizeInBytes": 0
      }
    ],
    "ExpiresUtc": "2024-04-11T08:54:47.193Z"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Export` | object | required |  |

#### Export

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `Status` | [ExportStatus](#X-Ref-Name-ExportStatus) | required |  |
| `EntityType` | [ExportEntityType](#X-Ref-Name-ExportEntityType) | required |  |
| `Files` | array of [ExportFileEntry](#ExportFileEntry) | required |  |
| `ExpiresUtc` | string | optional |  |

#### ExportStatus

- `Pending`
- `Processing`
- `Success`
- `Failed`
- `Expired`

#### ExportFileEntry

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Url` | string | required |  |
| `SizeInBytes` | integer | required |  |
