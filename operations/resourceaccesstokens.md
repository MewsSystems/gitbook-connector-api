# Resource access tokens

## Get all resource access tokens

Returns all resource access tokens based on resource access token identifiers, reservations or interval. One of them must be specified in the request. 
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/resourceAccessTokens/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ResourceAccessTokenIds": [
    "90eff5aa-36b4-4689-80c0-ab3a00bb412e"
  ],
  "ServiceOrderIds": [
    "65eff5aa-36b4-4689-80c0-ab3a00bb412e"
  ],
  "CollidingUtc": {
    "StartUtc": "2020-02-15T00:00:00Z",
    "EndUtc": "2020-02-20T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "ActivityStates": [
    "Active"
  ],
  "Limitation": {
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
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
| `ResourceAccessTokenIds` | array of string | optional | Unique identifiers of [Resource access tokens](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token). Required if no other filter is provided. |
| `ServiceOrderIds` | array of string | optional | Unique identifiers of reservations. Required if no other filter is provided. |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ActivityStates` | array of string | optional | Whether to return only active, only deleted or both records. |

### Response

```javascript
{
  "ResourceAccessTokens": [
    {
      "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceOrderId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "CompanionshipId": "25d4b117-4e60-44a3-9580-c582117eff98",
      "ResourceId": "65d4b117-4e60-44a3-9580-c582117eff98",
      "Type": "PinCode",
      "Value": "1234#",
      "SerialNumber": null,
      "ValidityStartUtc": "2020-10-09T22:00:00Z",
      "ValidityEndUtc": "2020-10-10T22:00:00Z",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "IsActive": true,
      "Permissions": {
        "Bed": true,
        "Room": false,
        "Floor": false,
        "Building": false
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceAccessTokens` | array of [Resource access token](#ResourceAccessToken) | optional | Resource access tokens. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older tokens. If [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) is specified in the request message, then Cursor will always be included in the response message. |

#### Resource access token

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token). |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `ServiceOrderId` | string | required | Unique identifier of a reservation. |
| `CompanionshipId` | string | optional | Unique identifier of [Companionship](https://mews-systems.gitbook.io/connector-api/operations/companionships/#companionship). |
| `ResourceId` | string | optional | Unique identifier of [Resource](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource). |
| `Type` | [ResourceAccessTokenType](#X-Ref-Name-ResourceAccessTokenType) | required |  |
| `Value` | string | optional | Value of resource access token |
| `SerialNumber` | string | optional | Serial number of [Resource access token type](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token-type). |
| `ValidityStartUtc` | string | required | Marks the start of interval in which the resource access token can be used. |
| `ValidityEndUtc` | string | required | Marks the end of interval in which the resource access token can be used. |
| `Permissions` | object | required | Specify permissions of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token). |
| `CreatedUtc` | string | required | Creation date and time of the resource access token in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the resource access token in UTC timezone in ISO 8601 format. |
| `IsActive` | boolean | required | Whether the resource access token is still active. |

#### ResourceAccessTokenType

- `PinCode`
- `RfidTag`

#### ResourceAccessTokenType

- `PinCode`
- `RfidTag`

#### ResourceAccessTokenPermissions
Specify permissions of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token).

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bed` | boolean | required |  |
| `Room` | boolean | required |  |
| `Floor` | boolean | required |  |
| `Building` | boolean | required |  |

## Add resource access tokens

Adds new resource access tokens with the specified data.

### Request

`[PlatformAddress]/api/connector/v1/resourceAccessTokens/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ResourceAccessTokenParameters": [
    {
      "ServiceOrderId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "CompanionshipId": "25d4b117-4e60-44a3-9580-c582117eff98",
      "ResourceId": "65d4b117-4e60-44a3-9580-c582117eff98",
      "Type": "PinCode",
      "Value": "1234#",
      "SerialNumber": null,
      "ValidityStartUtc": "2020-10-09T22:00:00Z",
      "ValidityEndUtc": "2020-10-10T22:00:00Z",
      "Permissions": {
        "Bed": {
          "Value": true
        },
        "Room": {
          "Value": false
        },
        "Floor": {
          "Value": false
        },
        "Building": {
          "Value": false
        }
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
| `ResourceAccessTokenParameters` | array of [ResourceAccessTokenParameters](#ResourceAccessTokenParameters) | optional | Parameters of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token). |

#### ResourceAccessTokenParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderId` | string | required |  |
| `CompanionshipId` | string | optional |  |
| `ResourceId` | string | optional |  |
| `Value` | string | optional |  |
| `Type` | string | optional |  |
| `SerialNumber` | string | optional |  |
| `ValidityStartUtc` | string | optional |  |
| `ValidityEndUtc` | string | optional |  |
| `Permissions` | object | required |  |

#### ResourceAccessTokenPermissionsParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bed` | object | required |  |
| `Room` | object | required |  |
| `Floor` | object | required |  |
| `Building` | object | required |  |

### Response

```javascript
{
  "ResourceAccessTokens": [
    {
      "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceOrderId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "CompanionshipId": "25d4b117-4e60-44a3-9580-c582117eff98",
      "ResourceId": "65d4b117-4e60-44a3-9580-c582117eff98",
      "Type": "PinCode",
      "Value": "1234#",
      "SerialNumber": null,
      "ValidityStartUtc": "2020-10-09T22:00:00Z",
      "ValidityEndUtc": "2020-10-10T22:00:00Z",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "IsActive": true,
      "Permissions": {
        "Bed": true,
        "Room": false,
        "Floor": false,
        "Building": false
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceAccessTokens` | array of [Resource access token](#ResourceAccessToken) | optional | Resource access tokens. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older tokens. If [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) is specified in the request message, then Cursor will always be included in the response message. |

## Update resource access tokens

Updates the [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token) validity interval and [permissions](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token-permission-parameter) that it grants.

### Request

`[PlatformAddress]/api/connector/v1/resourceAccessTokens/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ResourceAccessTokenUpdates": [
    {
      "ResourceAccessTokenId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "ValidityStartUtc": {
        "Value": "2020-10-09T22:00:00Z"
      },
      "ValidityEndUtc": {
        "Value": "2020-10-10T22:00:00Z"
      },
      "Permissions": {
        "Bed": {
          "Value": true
        },
        "Room": {
          "Value": false
        },
        "Floor": {
          "Value": false
        },
        "Building": {
          "Value": false
        }
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
| `ResourceAccessTokenUpdates` | array of [ResourceAccessTokenUpdateParameters](#ResourceAccessTokenUpdateParameters) | optional | Parameters of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token). |

#### ResourceAccessTokenUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceAccessTokenId` | string | required |  |
| `ValidityStartUtc` | object | required |  |
| `ValidityEndUtc` | object | required |  |
| `Permissions` | object | required |  |

### Response

```javascript
{
  "ResourceAccessTokens": [
    {
      "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceOrderId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "CompanionshipId": "25d4b117-4e60-44a3-9580-c582117eff98",
      "ResourceId": "65d4b117-4e60-44a3-9580-c582117eff98",
      "Type": "PinCode",
      "Value": "1234#",
      "SerialNumber": null,
      "ValidityStartUtc": "2020-10-09T22:00:00Z",
      "ValidityEndUtc": "2020-10-10T22:00:00Z",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
      "IsActive": true,
      "Permissions": {
        "Bed": true,
        "Room": false,
        "Floor": false,
        "Building": false
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceAccessTokens` | array of [Resource access token](#ResourceAccessToken) | optional | Resource access tokens. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older tokens. If [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) is specified in the request message, then Cursor will always be included in the response message. |

## Delete resource access tokens

Delete specified resource access tokens.

### Request

`[PlatformAddress]/api/connector/v1/resourceAccessTokens/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "Ids": [
    "35d4b117-4e60-44a3-9580-c582117eff98"
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
| `Ids` | array of string | optional | Unique identifiers of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token). |

### Response

```javascript
{}
```
