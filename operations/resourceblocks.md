# Resource blocks

## Get all resource blocks

Returns all resource blocks (out of order blocks or internal use blocks). 
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/resourceBlocks/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ResourceBlockIds": [
    "c478f1b3-7edb-4ccc-8f07-dd32fae1ca70"
  ],
  "AssignedResourceIds": [
    "b64f088d-49b5-4d5f-9766-2e27c4b75e27"
  ],
  "CollidingUtc": {
    "StartUtc": "2020-01-25T00:00:00Z",
    "EndUtc": "2020-01-30T00:00:00Z"
  },
  "CreatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-01-15T00:00:00Z",
    "EndUtc": "2020-01-20T00:00:00Z"
  },
  "Extent": {
    "Inactive": true
  },
  "Limitation": {
    "Count": 10
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
| `Extent` | object | required | Extent of data to be returned. |
| `ResourceBlockIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Resource blocks](https://mews-systems.gitbook.io/connector-api/operations/#resource-block). |
| `AssignedResourceIds` | array of string | optional, max 1000 items | Unique identifiers of the requested Assigned [Resources](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource). |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |

#### ResourceBlockExtent
Extent of data to be returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Inactive` | boolean | required |  |

### Response

```javascript
{
  "ResourceBlocks": [
    {
      "Id": "0913bd1d-69fc-4bcb-82d3-5a40520c8fb0",
      "AssignedResourceId": "0d71d44e-3d85-4506-9b6f-aab500b69c52",
      "Name": "Resource block 1",
      "StartUtc": "2019-10-15T10:00:00Z",
      "EndUtc": "2019-10-20T10:00:00Z",
      "Type": "OutOfOrder",
      "CreatedUtc": "2016-06-01T15:14:06Z",
      "UpdatedUtc": "2016-06-01T15:14:06Z"
    },
    {
      "Id": "4d98ad40-a726-409e-8bf3-2c12ff3c0331",
      "AssignedResourceId": "f7c4b4f5-ac83-4977-a41a-63d27cc6e3e9",
      "Name": "Resource block 2",
      "StartUtc": "2019-10-15T10:00:00Z",
      "EndUtc": "2019-10-20T10:00:00Z",
      "Type": "InternalUse",
      "CreatedUtc": "2016-06-01T15:14:06Z",
      "UpdatedUtc": "2016-06-01T15:14:06Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceBlocks` | array of [Resource block](#ResourceBlock) | required, max 1000 items | Resource blocks added. |
| `Cursor` | string | optional |  |

#### Resource block

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the block. |
| `EnterpriseId` | string | required |  |
| `AssignedResourceId` | string | required | Unique identifier of the assigned [Resource](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource). |
| `IsActive` | boolean | required | Whether the block is still active. |
| `Type` | [ResourceBlockType](#X-Ref-Name-ResourceBlockType) | required |  |
| `StartUtc` | string | required | Start of the block in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the block in UTC timezone in ISO 8601 format. |
| `CreatedUtc` | string | required | Creation date and time of the block in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the block in UTC timezone in ISO 8601 format. |
| `Name` | string | required | Name of the resource block. |
| `Notes` | string | optional | Note describing the resource block. |

#### ResourceBlockType

- `OutOfOrder`
- `InternalUse`

## Add resource block

Adds a new resource block to the specified resource for a defined period of time.

### Request

`[PlatformAddress]/api/connector/v1/resourceBlocks/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ResourceBlocks": [
    {
      "ResourceId": "0d71d44e-3d85-4506-9b6f-aab500b69c52",
      "Name": "Resource block 1",
      "StartUtc": "2019-10-15T10:00:00Z",
      "EndUtc": "2019-10-20T10:00:00Z",
      "Type": "OutOfOrder",
      "Notes": "Note"
    },
    {
      "ResourceId": "f7c4b4f5-ac83-4977-a41a-63d27cc6e3e9",
      "Name": "Resource block 2",
      "StartUtc": "2019-10-15T10:00:00Z",
      "EndUtc": "2019-10-20T10:00:00Z",
      "Type": "InternalUse",
      "Notes": "Note"
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
| `ResourceBlocks` | array of [ResourceBlockAddParameters](#ResourceBlockAddParameters) | required, max 1000 items | Resource block parameters. |

#### ResourceBlockAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceId` | string | required |  |
| `Name` | string | required |  |
| `Type` | [ResourceBlockType](#X-Ref-Name-ResourceBlockType) | required |  |
| `StartUtc` | string | required |  |
| `EndUtc` | string | required |  |
| `Notes` | string | optional |  |

### Response

```javascript
{
  "ResourceBlocks": [
    {
      "Id": "0913bd1d-69fc-4bcb-82d3-5a40520c8fb0",
      "AssignedResourceId": "0d71d44e-3d85-4506-9b6f-aab500b69c52",
      "Name": "Resource block 1",
      "StartUtc": "2019-10-15T10:00:00Z",
      "EndUtc": "2019-10-20T10:00:00Z",
      "Type": "OutOfOrder",
      "CreatedUtc": "2016-06-01T15:14:06Z",
      "UpdatedUtc": "2016-06-01T15:14:06Z"
    },
    {
      "Id": "4d98ad40-a726-409e-8bf3-2c12ff3c0331",
      "AssignedResourceId": "f7c4b4f5-ac83-4977-a41a-63d27cc6e3e9",
      "Name": "Resource block 2",
      "StartUtc": "2019-10-15T10:00:00Z",
      "EndUtc": "2019-10-20T10:00:00Z",
      "Type": "InternalUse",
      "CreatedUtc": "2016-06-01T15:14:06Z",
      "UpdatedUtc": "2016-06-01T15:14:06Z"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceBlocks` | array of [Resource block](#ResourceBlock) | required, max 1000 items | Resource blocks added. |
| `Cursor` | string | optional |  |

## Delete resource blocks

Removes specified resource blocks from the resources.

### Request

`[PlatformAddress]/api/connector/v1/resourceBlocks/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ResourceBlockIds": [
    "bf1e10b7-8a03-4675-9e27-05fc84312a58",
    "e8fb6bfb-d64a-4e7c-acfe-ab0400d01183"
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
| `ResourceBlockIds` | array of string | required, max 1000 items | Unique identifier of [Resource blocks](https://mews-systems.gitbook.io/connector-api/operations/#resource-block) to be removed. |

### Response

```javascript
{}
```
