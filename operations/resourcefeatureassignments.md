# Resource feature assignments

## Get all resource feature assignments

Returns all resource feature assignments. This operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/).

### Request

`[PlatformAddress]/api/connector/v1/resourceFeatureAssignments/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ResourceFeatureIds": [
    "a693dd8c-21fe-4dae-b450-ea3bd9ab3bb0"
  ],
  "ResourceFeatureAssignmentIds": [
    "ca2b5bf9-24f5-4faa-95ef-b65d38598b08"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-11-01T00:00:00Z",
    "EndUtc": "2023-11-30T00:00:00Z"
  },
  "ActivityStates": [
    "Active"
  ],
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns the resource feature assignments for all enterprises within scope of the Access Token. |
| `ResourceFeatureAssignmentIds` | array of string | optional, max 1000 items |  |
| `ResourceFeatureIds` | array of string | required, max 1000 items | Unique identifiers of [Resource features](https://mews-systems.gitbook.io/connector-api/operations/#resource-feature) to which the resource feature assignments belong. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ActivityStates` | array of [ActivityStates](#X-Ref-Name-ActivityStates) | optional | Whether to return only active, only deleted or both records. |

#### ActivityStates

- `Deleted`
- `Active`

#### ActivityStates

- `Deleted`
- `Active`

### Response

```javascript
{
  "ResourceFeatureAssignments": [
    {
      "Id": "ca2b5bf9-24f5-4faa-95ef-b65d38598b08",
      "IsActive": true,
      "ResourceId": "18019693-c66f-4be8-a893-c3d89fd291cc",
      "FeatureId": "a693dd8c-21fe-4dae-b450-ea3bd9ab3bb0",
      "CreatedUtc": "2023-11-03T00:00:00Z",
      "UpdatedUtc": "2023-11-21T00:00:00Z"
    }
  ],
  "Cursor": "3d5201ad-4a7b-4cbe-9c22-03dd79c28443"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceFeatureAssignments` | array of [Resource feature assignment](#ResourceFeatureAssignment) | required, max 1000 items | Resource feature assignments. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest resource feature assignments returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older resource feature assignments. |

#### Resource feature assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | boolean | required | Whether the assignment is still active. |
| `ResourceId` | string | required | Unique identifier of the [Resource](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource). |
| `FeatureId` | string | required | Unique identifier of the [Resource feature](https://mews-systems.gitbook.io/connector-api/operations/#resource-feature) assigned to the Resource. |
| `CreatedUtc` | string | required | Creation date and time of the assignment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the assignment in UTC timezone in ISO 8601 format. |
