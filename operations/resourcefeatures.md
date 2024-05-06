# Resource features

## Get all resource features

Returns all resource features. This operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/).

### Request

`[PlatformAddress]/api/connector/v1/resourceFeatures/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ServiceIds": [
    "24e2ead5-65a8-4ed9-8286-abdb00f08a1f"
  ],
  "ResourceFeatureIds": [
    "3d5201ad-4a7b-4cbe-9c22-03dd79c28443"
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns the resource features for all enterprises within scope of the Access Token. |
| `ResourceFeatureIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource features](https://mews-systems.gitbook.io/connector-api/operations/#resource-feature). |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service) to which the resource features belong. |
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
  "ResourceFeatures": [
    {
      "Id": "3d5201ad-4a7b-4cbe-9c22-03dd79c28443",
      "ServiceId": "24e2ead5-65a8-4ed9-8286-abdb00f08a1f",
      "IsActive": true,
      "Classification": "AccessibleBathroom",
      "Names": {
        "en-US": "Accessible Bathroom"
      },
      "ShortNames": {
        "en-US": "AccessBath"
      },
      "Descriptions": {}
    }
  ],
  "Cursor": "3d5201ad-4a7b-4cbe-9c22-03dd79c28443"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceFeatures` | array of [Resource feature](#ResourceFeature) | required, max 1000 items | Resource features. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest resource features returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older resource feature. |

#### Resource feature

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the feature. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `IsActive` | boolean | required | Whether the resource feature is still active. |
| `Classification` | [ResourceFeatureClassification](#X-Ref-Name-ResourceFeatureClassification) | required |  |
| `Names` | object | required | All translations of the name. |
| `ShortNames` | object | required | All translations of the short name. |
| `Descriptions` | object | required | All translations of the description. |
| `CreatedUtc` | string | required |  |
| `UpdatedUtc` | string | required |  |

#### ResourceFeatureClassification

- `SeaView`
- `RiverView`
- `OceanView`
- `TwinBeds`
- `DoubleBed`
- `RollawayBed`
- `UpperBed`
- `LowerBed`
- `Balcony`
- `AccessibleBathroom`
- `AccessibleRoom`
- `ElevatorAccess`
- `HighFloor`
- `Kitchenette`
- `AirConditioning`
- `PrivateJacuzzi`
- `PrivateSauna`
- `EnsuiteRoom`
- `PrivateBathroom`
- `SharedBathroom`
