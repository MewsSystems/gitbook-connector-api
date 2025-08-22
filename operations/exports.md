<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Exports

## Get all exports

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns exports for the given `ExportIds`. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
      "Scope": {
        "EnterpriseIds": [
          "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "4d0201db-36f5-428b-8d11-4f0a65e960cc"
        ],
        "ChainIds": null
      },
      "Files": [
        {
          "Url": "https://example.com/exports/3fa85f64-5717-4562-b3fd-2c963f66afa6-1.jsonl?example=signature",
          "SizeInBytes": 1215279
        },
        {
          "Url": "https://example.com/exports/3fa85f64-5717-4562-b3fd-2c963f66afa6-2.jsonl?example=signature",
          "SizeInBytes": 1398362
        }
      ],
      "ExpiresUtc": "2023-10-26T11:42:28Z",
      "Filters": {
        "UpdatedUtc": {
          "StartUtc": "2020-11-04T00:00:00Z",
          "EndUtc": "2020-11-05T00:00:00Z"
        }
      }
    },
    {
      "Id": "09708665-0e31-4b23-b337-b0a000be0df0",
      "Status": "Pending",
      "EntityType": "Reservation",
      "Scope": {
        "EnterpriseIds": [
          "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ],
        "ChainIds": null
      },
      "Files": [],
      "ExpiresUtc": null,
      "Filters": {
        "UpdatedUtc": {
          "StartUtc": "2020-11-04T00:00:00Z",
          "EndUtc": "2020-11-05T00:00:00Z"
        }
      }
    },
    {
      "Id": "706dc6d5-9511-4751-825e-538ce99da2ce",
      "Status": "Processing",
      "EntityType": "Company",
      "Scope": {
        "EnterpriseIds": null,
        "ChainIds": [
          "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ]
      },
      "Files": [],
      "ExpiresUtc": null,
      "Filters": null
    },
    {
      "Id": "f776f20a-6f1a-4ddf-93f4-9dae95261415",
      "Status": "Expired",
      "EntityType": "OrderItem",
      "Scope": {
        "EnterpriseIds": [
          "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ],
        "ChainIds": null
      },
      "Files": [],
      "ExpiresUtc": "2023-10-24T14:12:30Z",
      "Filters": null
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

Creates a new pending export for all entities of the specified `EntityType`. If an export with status Pending or Processing already exists for the same entity type, the request will be rejected. Successfully created exports remain available for download until the expiration date specified in ExpiresUtc. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/exports/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EntityType": "Reservation",
  "Scope": {
    "EnterpriseIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ]
  },
  "Filters": {
    "UpdatedUtc": {
      "StartUtc": "2020-11-04T00:00:00Z",
      "EndUtc": "2020-11-05T00:00:00Z"
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EntityType` | [Exported entity type](exports.md#exported-entity-type) | required | Specifies the type of entity which should be exported. |
| `Scope` | [Export scope parameters](exports.md#export-scope-parameters) | optional | Selects enterprises or chains for which the data should be exported. Which one is used depends on `EntityType`. If not specified, the export will include all enterprises or chains the client has access to. |
| `Filters` | [Export data filters](exports.md#export-data-filters) | optional | Specifies filters to apply on the exported data set. If omitted, the export will include all available data. |

#### Export scope parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the enterprises to export data for. If not specified, data for all enterprises within the access token's scope will be returned. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chains to export data for. If not specified, data for all chains within the access token's scope will be returned. |

### Response

```javascript
{
  "Export": {
    "Id": "09708665-0e31-4b23-b337-b0a000be0df0",
    "Status": "Pending",
    "EntityType": "Reservation",
    "Scope": {
      "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "ChainIds": null
    },
    "Files": [],
    "ExpiresUtc": null,
    "Filters": {
      "UpdatedUtc": {
        "StartUtc": "2020-11-04T00:00:00Z",
        "EndUtc": "2020-11-05T00:00:00Z"
      }
    }
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
| `Status` | [Export status](exports.md#export-status) | required | Export status. |
| `EntityType` | [Exported entity type](exports.md#exported-entity-type) | required | Exported entity type. |
| `Scope` | [Export scope](exports.md#export-scope) | required | The scope of the export, i.e. which enterprises or chains the data is exported for. |
| `Files` | array of [Export file entry](exports.md#export-file-entry) | required | Files with exported data. Empty if no files are available or the export is expired. |
| `ExpiresUtc` | string | optional | Expiration date and time of the export in UTC timezone in ISO 8601 format. After this time the Exported files may no longer be available for download. |
| `Filters` | [Export data filters](exports.md#export-data-filters) | optional | Filters applied to the exported data set. If omitted, all available data is included in the export. |

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
* `LedgerEntry` - Beta testing - subject to change

#### Export scope

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of enterprises for which the data is exported. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of chains for which the data is exported. |

#### Export file entry

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Url` | string | required | Download URL for the exported file in JSON Lines format. The link remains valid for 10 minutes after it is returned. |
| `SizeInBytes` | integer | required | Total size of the exported file in bytes. |

#### Export data filters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional | Filters entities by the specified UTC update interval. The end of the interval must be no later than 5 minutes in the past. The maximum interval is 180 days. |
