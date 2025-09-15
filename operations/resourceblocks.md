<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Resource blocks

## Get all resource blocks

Returns all resource blocks (out of order blocks or internal use blocks). 
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/resourceBlocks/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ResourceBlockIds": [
    "7f8e9d0c-1b2a-3c4d-5e6f-7a8b9c0d1e2f",
    "8e9f0a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b",
    "63f4ebee-7e36-4ca9-b7d8-6331a8b009e5"
  ],
  "AssignedResourceIds": [
    "20e00c32-d561-4008-8609-82d8aa525714",
    "1ec29188-01ca-4294-9983-fac59f85a448",
    "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
  ],
  "ActivityStates": [
    "Active",
    "Deleted"
  ],
  "CollidingUtc": {
    "StartUtc": "2023-06-01T00:00:00Z",
    "EndUtc": "2023-07-31T23:59:59Z"
  },
  "CreatedUtc": {
    "StartUtc": "2023-06-01T00:00:00Z",
    "EndUtc": "2023-08-31T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2023-06-01T00:00:00Z",
    "EndUtc": "2023-07-31T23:59:59Z"
  },
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
| `ResourceBlockIds` | array of string | optional, max 1000 items | Unique identifiers of the requested resource block. |
| `AssignedResourceIds` | array of string | optional, max 1000 items | Unique identifiers of the requested Assigned `Resource`. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. Defaults to `Active` if not specified. |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the resource block is active. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the resource block was created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the resource block was updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |
| ~~`Extent`~~ | ~~[Resource block extent](resourceblocks.md#resource-block-extent)~~ | ~~optional~~ | ~~Extent of data to be returned.~~ **Deprecated!** Use ActivityStates with `["Active", "Deleted"]` instead.|

#### Resource block extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Inactive` | boolean | required | Whether the response should contain inactive entities. |

### Response

```javascript
{
  "ResourceBlocks": [
    {
      "Id": "7f8e9d0c-1b2a-3c4d-5e6f-7a8b9c0d1e2f",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "IsActive": true,
      "Type": "OutOfOrder",
      "StartUtc": "2023-07-15T14:00:00Z",
      "EndUtc": "2023-07-15T18:00:00Z",
      "CreatedUtc": "2023-07-10T09:30:00Z",
      "UpdatedUtc": "2023-07-10T09:30:00Z",
      "DeletedUtc": null,
      "Name": "Maintenance Block - Room 101",
      "Notes": "Scheduled maintenance for air conditioning unit"
    },
    {
      "Id": "8e9f0a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AssignedResourceId": "1ec29188-01ca-4294-9983-fac59f85a448",
      "IsActive": true,
      "Type": "InternalUse",
      "StartUtc": "2023-07-20T10:00:00Z",
      "EndUtc": "2023-07-22T12:00:00Z",
      "CreatedUtc": "2023-07-18T14:20:00Z",
      "UpdatedUtc": "2023-07-18T14:20:00Z",
      "DeletedUtc": null,
      "Name": "Staff Training Session",
      "Notes": null
    },
    {
      "Id": "63f4ebee-7e36-4ca9-b7d8-6331a8b009e5",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AssignedResourceId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "IsActive": false,
      "Type": "OutOfOrder",
      "StartUtc": "2023-06-01T20:00:00Z",
      "EndUtc": "2023-06-03T23:59:59Z",
      "CreatedUtc": "2023-06-01T16:45:00Z",
      "UpdatedUtc": "2023-06-04T08:15:00Z",
      "DeletedUtc": "2023-06-04T08:15:00Z",
      "Name": "Renovation Block - Suite 1",
      "Notes": "Room renovation completed, block removed"
    }
  ],
  "Cursor": "9f0a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceBlocks` | array of [Resource block](resourceblocks.md#resource-block) | required, max 1000 items | The resource blocks colliding with the interval or matching the filter parameters. |
| `Cursor` | string | optional | Unique identifier of the last returned resource block. This can be used in `Limitation` in a subsequent request to fetch the next batch of resource blocks. |

#### Resource block

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the resource block. |
| `EnterpriseId` | string | required | Unique identifier of the `Enterprise` the resource block belongs to. |
| `AssignedResourceId` | string | required | Unique identifier of the assigned `Resource`. |
| `IsActive` | boolean | required | Whether the resource block is still active. |
| `Type` | [Resource block type](resourceblocks.md#resource-block-type) | required | Type of the resource block. |
| `StartUtc` | string | required | Start of the resource block in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the resource block in UTC timezone in ISO 8601 format. |
| `CreatedUtc` | string | required | Creation date and time of the resource block in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the resource block in UTC timezone in ISO 8601 format. |
| `DeletedUtc` | string | optional | Date and time when the resource block was deleted (for inactive ones) in UTC timezone in ISO 8601 format. |
| `Name` | string | required | Name of the resource block. |
| `Notes` | string | optional | Note describing the resource block. |

#### Resource block type

* `OutOfOrder`
* `InternalUse`

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
      "ResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "Name": "Maintenance Block - Room 101",
      "Type": "OutOfOrder",
      "StartUtc": "2023-08-01T14:00:00Z",
      "EndUtc": "2023-08-01T18:00:00Z",
      "Notes": "Scheduled maintenance for air conditioning unit"
    },
    {
      "ResourceId": "1ec29188-01ca-4294-9983-fac59f85a448",
      "Name": "Staff Training Session",
      "Type": "InternalUse",
      "StartUtc": "2023-08-05T10:00:00Z",
      "EndUtc": "2023-08-05T16:00:00Z",
      "Notes": "Internal training session for new staff members"
    },
    {
      "ResourceId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "Name": "Deep Cleaning Block",
      "Type": "OutOfOrder",
      "StartUtc": "2023-08-10T09:00:00Z",
      "EndUtc": "2023-08-10T17:00:00Z",
      "Notes": "Deep cleaning and sanitization process"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ResourceBlocks` | array of [Resource block parameters](resourceblocks.md#resource-block-parameters) | required, max 1000 items | Resource block parameters. |

#### Resource block parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceId` | string | required | Unique identifier of `Resource`. |
| `Name` | string | required | Name of the resource block. |
| `Type` | [Resource block type](resourceblocks.md#resource-block-type) | required | Type of the resource block. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Note describing the resource block. |

### Response

```javascript
{
  "ResourceBlocks": [
    {
      "Id": "7f8e9d0c-1b2a-3c4d-5e6f-7a8b9c0d1e2f",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "IsActive": true,
      "Type": "OutOfOrder",
      "StartUtc": "2023-08-01T14:00:00Z",
      "EndUtc": "2023-08-01T18:00:00Z",
      "CreatedUtc": "2023-07-25T10:30:00Z",
      "UpdatedUtc": "2023-07-25T10:30:00Z",
      "DeletedUtc": null,
      "Name": "Maintenance Block - Room 101",
      "Notes": "Scheduled maintenance for air conditioning unit"
    },
    {
      "Id": "8e9f0a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AssignedResourceId": "1ec29188-01ca-4294-9983-fac59f85a448",
      "IsActive": true,
      "Type": "InternalUse",
      "StartUtc": "2023-08-05T10:00:00Z",
      "EndUtc": "2023-08-05T16:00:00Z",
      "CreatedUtc": "2023-07-25T10:30:00Z",
      "UpdatedUtc": "2023-07-25T10:30:00Z",
      "DeletedUtc": null,
      "Name": "Staff Training Session",
      "Notes": "Internal training session for new staff members"
    },
    {
      "Id": "9f0a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AssignedResourceId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "IsActive": true,
      "Type": "OutOfOrder",
      "StartUtc": "2023-08-10T09:00:00Z",
      "EndUtc": "2023-08-10T17:00:00Z",
      "CreatedUtc": "2023-07-25T10:30:00Z",
      "UpdatedUtc": "2023-07-25T10:30:00Z",
      "DeletedUtc": null,
      "Name": "Deep Cleaning Block",
      "Notes": "Deep cleaning and sanitization process"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceBlocks` | array of [Resource block](resourceblocks.md#resource-block) | required, max 1000 items | The resource blocks that were added. |

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
    "63f4ebee-7e36-4ca9-b7d8-6331a8b009e5"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ResourceBlockIds` | array of string | required, max 1000 items | Unique identifier of the resource blocks to be removed. |

### Response

```javascript
{}
```
