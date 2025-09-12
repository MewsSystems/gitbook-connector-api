<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Resource access tokens

## Get all resource access tokens

Returns all resource access tokens based on resource access token identifiers, reservations or interval. One of them must be specified in the request. 
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ResourceAccessTokenIds` | array of string | optional, max 1000 items | Unique identifiers of resource access token. Required if no other filter is provided. |
| `ServiceOrderIds` | array of string | optional, max 1000 items | Unique identifiers of reservations. Required if no other filter is provided. |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the resource access token is valid. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which resource access token was updated. Required if no other filter is provided. |
| `ActivityStates` | array of string | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

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
| `ResourceAccessTokens` | array of [Resource access token](resourceaccesstokens.md#resource-access-token) | required | Resource access tokens. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest item returned. This can be used in `Limitation` in a subsequent request to fetch the next batch of older tokens. If `Limitation` is specified in the request message, then `Cursor` will always be included in the response message. |

#### Resource access token

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the resource access token. |
| `EnterpriseId` | string | required | Unique identifier of the `Enterprise`. |
| `ServiceOrderId` | string | required | Unique identifier of `Reservation`. |
| `CompanionshipId` | string | optional | Unique identifier of `Companionship`. |
| `ResourceId` | string | optional | Unique identifier of `Resource`. |
| `Type` | [Resource access token type](resourceaccesstokens.md#resource-access-token-type) | required | Type of stored value. |
| `Value` | string | required | Value of the resource access token |
| `SerialNumber` | string | optional | Serial number of the resource access token. |
| `ValidityStartUtc` | string | required | Marks the start of interval in which the resource access token can be used. |
| `ValidityEndUtc` | string | required | Marks the end of interval in which the resource access token can be used. |
| `Permissions` | [Resource access token permissions](resourceaccesstokens.md#resource-access-token-permissions) | required | Permissions of the resource access token. |
| `CreatedUtc` | string | required | Creation date and time of the resource access token in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the resource access token in UTC timezone in ISO 8601 format. |
| `IsActive` | boolean | required | Whether the resource access token is still active. |

#### Resource access token type

* `PinCode`
* `RfidTag`

#### Resource access token permissions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bed` | boolean | required | Specify whether the resource access token grants permission to access bed. |
| `Room` | boolean | required | Specify whether the resource access token grants permission to access room. |
| `Floor` | boolean | required | Specify whether the resource access token grants permission to access floor. |
| `Building` | boolean | required | Specify whether the resource access token grants permission to access building. |

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ResourceAccessTokenParameters` | array of [Resource access token parameter](reservations.md#resourceaccesstokenparameters) | required, max 1000 items | Parameters of resource access token. |

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
| `ResourceAccessTokens` | array of [Resource access token](resourceaccesstokens.md#resource-access-token) | required | Added resource access tokens. |

## Update resource access tokens

Updates the [Resource access token](resourceaccesstokens.md#resource-access-token) validity interval and [permissions](resourceaccesstokens.md#resource-access-token-permission-parameter) that it grants.

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `ResourceAccessTokenUpdates` | array of [Resource access token update](resourceaccesstokens.md#resource-access-token-update) | optional | Parameters of resource access token to update. |

#### Resource access token update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ResourceAccessTokenId` | string | required | Unique identifier of the resource access token to update. |
| `ValidityStartUtc` | [String update value](_objects.md#string-update-value) | optional | Marks the start of interval in which the resource access token can be used (or null if not being updated). |
| `ValidityEndUtc` | [String update value](_objects.md#string-update-value) | optional | Marks the end of interval in which the resource access token can be used (or null if not being updated). |
| `Value` | [String update value](_objects.md#string-update-value) | optional, max length 255 characters | Value of the resource access token (or null if not being updated). |
| `Permissions` | [Resource access token permission parameter](reservations.md#resourceaccesstokenpermissionsparameters) | optional | Specify permissions of the resource access token (or null if not being updated). |

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
| `ResourceAccessTokens` | array of [Resource access token](resourceaccesstokens.md#resource-access-token) | required | Updated resource access tokens. |

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Ids` | array of string | required | Unique identifiers of the resource access token to delete. |

### Response

```javascript
{}
```
