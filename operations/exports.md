# Exports

> ### Restricted!
> These operations are currently in beta-test and as such are subject to change.

## Get all exports

Get exports by provided `ExportIds`. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ExportIds` | array of string | optional, max 1000 items | Unique identifiers of the [Exports](#export). |
| `EntityType` | string [Entity type](#entity-type) | optional | Return only exports with the provided [Entity type](#entity-type). |

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
| `Exports` | array of [Export](#export) | required | Requested exports. |

#### Export

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the export. |
| `Status` | string [Export status](#export-status) | required | Current status of the export. |
| `EntityType` | string [Entity type](#entity-type) | required | Type of exported entities. |
| `Files` | array of [Exported files](#exported-file) | required | Files with exported data. Empty if no files are available. |
| `ExpiresUtc` | string | optional | Expiration date and time of the export in UTC timezone in ISO 8601 format. After this time the [exported files](#exported-file) may no longer be available for download. |

#### Export status

* `Pending` - export was created and didn't start yet.
* `Processing` - export process has started.
* `Success` - export has been successfully finished and [Exported files](#exported-file) are available for download.
* `Expired` - export has expired and exported files are no longer available.
* `Failed` - export has failed and exported files are not available; you can try creating a new export.

#### Exported file

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Url` | string | required | URL of the exported file for download in [JSON Lines](https://jsonlines.org/) format. |
| `SizeInBytes` | number | required | Total size of the exported file in bytes. |

## Add export

Create a pending export. Export all entities of the specified `EntityType` within the enterprise. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md) but don't have filtering by `EnterpriseIds` or `ChainIds` and will include entities from all enterprises within the scope of the portfolio.

If there is already an export with status `Pending` or `Processing` for the specified entity type, request for new export will be rejected. Successful exports remain available for download until the expiration date specified in `ExpiresUtc`.

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
| `EntityType` | string [Entity type](#entity-type) | required | Type of exported entities. |

#### Entity type

* `OrderItem` - [Order items](./orderitems.md)
* ...

### Response

```javascript
{
    "Export": {
        "Id": "f327f6d7-a0c8-43ff-b62a-b09700cd8de9",
        "Status": "Pending",
        "EntityType": "OrderItem",
        "Files": [],
        "ExpiresUtc": null
    }
}
``` 

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Export` | [Export](#export) | required | Added export. |
