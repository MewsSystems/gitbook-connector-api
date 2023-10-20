# Exports

> ### Restricted!
> These operations are currently in beta-test and as such are subject to change.

## Get all exports

Get exports created by any integration for the enterprise associated with the provided access token. Only exports with status of `Pending`, `Processing`, and `Success` are returned, unless the exports are retrieved using the `ExportIds` property. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/exports/getAll`

```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ExportIds": [
        "3fa85f64-5717-4562-b3fd-2c963f66afa6",
        "09708665-0e31-4b23-b337-b0a000be0df0"
    ],
    "EntityType": "OrderItem",
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
| `ExportIds` | array of string | optional, max 1000 items | Unique identifiers of the exports. If not specified, the operation returns exports with Status of `Pending`, `Processing`, and `Success` for the enterprise associated with the Access Token. |
| `EntityType` | string [Entity type](#entity-type) | optional | Return only exports with the provided [Entity type](#entity-type). |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of message data returned (using cursor pagination). |

### Response

```json
{
    "Exports": [
        {
            "Id": "09708665-0e31-4b23-b337-b0a000be0df0",
            "Status": "Success",
            "EntityType": "OrderItem",
            "ExpiresUtc": "2023-10-26T11:42:28Z",
            "Files": [
                {
                    "Url": "https://example.com/exports/b876d46d-9290-43b3-bb80-af3400da102a-1.jsonl?example=signature",
                    "SizeInBytes": 1215279
                },
                {
                    "Url": "https://example.com/exports/b876d46d-9290-43b3-bb80-af3400da102a-2.jsonl?example=signature",
                    "SizeInBytes": 1398362
                },
            ]
        },
        {
            "Id": "f327f6d7-a0c8-43ff-b62a-b09700cd8de9",
            "Status": "Pending",
            "EntityType": "OrderItem",
            "Files": [],
            "ExpiresUtc": null
        },
        {
            "Id": "f327f6d8-a0c8-43ff-b62a-b09700cd8dee",
            "Status": "Processing",
            "EntityType": "OrderItem",
            "Files": [],
            "ExpiresUtc": null
        }
    ],
    "Cursor": "f327f6d8-a0c8-43ff-b62a-b09700cd8dee"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Exports` | array of [Exports](#export) | required | The filtered exports. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest export returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older messages. |

#### Export

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the export. |
| `Status` | string [Export status](#export-status) | required | Current status of the export. |
| `EntityType` | string [Entity type](#entity-type) | required | Type of exported entities. |
| `Files` | array of [Exported files](#exported-file) | required | Files with exported data, if available. |
| `ExpiresUtc` | string | optional | Expiration date and time of the export in UTC timezone in ISO 8601 format. After this time the [exported files](#exported-file) may no longer be available for download. |

#### Export status

* `Pending` - export was created and didn't start yet
* `Processing` - export process has started
* `Success` - export has been successfully finished and [exported files](#exported-file) are available for download
* `Expired` - export has expired and exported files are no longer available
* `Failed` - export has failed and exported files are not available; you can try creating a new export

#### Exported file

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Url` | string | required | URL of the exported file for download in [JSON Lines](https://jsonlines.org/) format. |
| `SizeInBytes` | number | required | Total size of the exported file in bytes. |

## Add export

Create a pending export. Export will include all entities of the specified `EntityType` from all enterprises accessible for the integration (if [Portfolio Access Tokens](../guidelines/multi-property.md) is used).

If there is already an export with status `Pending` or `Processing`, request for new export will be rejected.

### Request

`[PlatformAddress]/api/connector/v1/exports/add`

```json
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

### Response

```json
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
