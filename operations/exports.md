<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Exports

## Get all exports

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Get exports for the given `ExportIds`. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ExportIds` | array of string | required, max 1000 items | Unique identifiers of the [Exports](exports.md#export). |

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

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Exports` | array of [Export](exports.md#export) | required | Requested exports. |

## Add export

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Create a pending export. Export all entities of the specified `EntityType` within the enterprise. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md) but doesn't have filtering by `EnterpriseIds` or `ChainIds`, so will return entities from all enterprises within the scope of the portfolio.
If there is already an export with status `Pending` or `Processing` for the specified entity type, the request for a new export will be rejected. Successful exports remain available for download until the expiration date specified in `ExpiresUtc`.

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EntityType` | [Exported entity type](exports.md#exported-entity-type) | required | Type of exported entities |

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
| `Export` | [Export](exports.md#export) | required | Added export. |

#### Export

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the export. |
| `Status` | [Export status](exports.md#export-status) | required | Current status of the export. |
| `EntityType` | [Exported entity type](exports.md#exported-entity-type) | required | Type of exported entities |
| `Files` | array of [Export file entry](exports.md#export-file-entry) | required | Files with exported data. Empty if no files are available. |
| `ExpiresUtc` | string | optional | Expiration date and time of the export in UTC timezone in ISO 8601 format. After this time the Exported files may no longer be available for download. |

#### Export status

* `Pending`
* `Processing`
* `Success`
* `Failed`
* `Expired`

#### Exported entity type

* `OrderItem`
* `Payment`
* `Reservation`
* `Customer`
* `Company`
* `Bill`
* `AvailabilityAdjustment`
* `AvailabilityBlock`
* `ResourceBlock`

#### Export file entry

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Url` | string | required | URL of the exported file for download in JSON Lines format. |
| `SizeInBytes` | integer | required | Total size of the exported file in bytes. |
