# Loyalty memberships

## Get all loyalty memberships

Returns all loyalty memberships of the enterprise (in the given activity states), optionally filtered by specific loyalty membership identifiers or other filter parameters.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainIds": [
    "1df21f06-0cfc-4960-9c58-a3bf1261663e",
    "5fcd1933-22f2-40b9-84da-7db04cbecec2"
  ],
  "LoyaltyMembershipIds": [
    "3f4d9db2-9910-4a63-b9f0-e94a13fab9ac",
    "ea7da00f-fdc9-4014-b0f7-71003b87e3d0"
  ],
  "LoyaltyProgramIds": [
    "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
    "8a98965a-7c03-48a1-a28c-ab1b009b53c8"
  ],
  "AccountIds": [
    "87d4c7c4-4832-4341-8b54-e45c1a73df34",
    "0ed43ab7-4592-4c99-906a-426588de1c00"
  ],
  "MembershipStates": [
    "New",
    "Enrolled"
  ],
  "CreatedUtc": {
    "StartUtc": "2022-10-15T00:00:00Z",
    "EndUtc": "2022-10-20T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2022-10-15T00:00:00Z",
    "EndUtc": "2022-10-20T00:00:00Z"
  },
  "ActivityStates": [
    "Active"
  ],
  "Limitation": {
    "Count": 100
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
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ChainIds` | array of string | optional, max 100 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `LoyaltyMembershipIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty memberships](https://mews-systems.gitbook.io/connector-api/operations/#loyalty-membership). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of accounts (for example [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Companies](https://mews-systems.gitbook.io/connector-api/operations/companies/#company)) the membership is associated with. |
| `LoyaltyProgramIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty programs](https://mews-systems.gitbook.io/connector-api/operations/loyaltyprograms/#loyalty-program). |
| `MembershipStates` | array of [LoyaltyMembershipState](#X-Ref-Name-LoyaltyMembershipState) | optional | States of the loyalty memberships. |
| `ActivityStates` | array of [ActivityStates](#X-Ref-Name-ActivityStates) | optional | Whether to return only active, only deleted or both records. |
| `Codes` | array of string | optional, max 1000 items |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### LoyaltyMembershipState

- `New`
- `Pending`
- `Enrolled`
- `Canceled`
- `Declined`

#### ActivityStates

- `Deleted`
- `Active`

#### ActivityStates

- `Deleted`
- `Active`

### Response

```javascript
{
  "LoyaltyMemberships": [
    {
      "Id": "f9e434a3-720c-4820-b82e-202cb2efa2fd",
      "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
      "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
      "Code": "Code-003",
      "ExpirationDate": "2030-12-31",
      "Url": "https://www.mews.com/",
      "LoyaltyTierId": "34c29a01-c075-49e4-906a-3b1d4012463e"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty membership](#LoyaltyMembership) | required | Added loyalty memberships. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty membership

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty membership. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `AccountId` | string | required | Unique identifier of the account. |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `State` | [LoyaltyMembershipState](#X-Ref-Name-LoyaltyMembershipState) | required |  |
| `IsPrimary` | boolean | required | Defines the primary loyalty membership. |
| `Code` | string | optional | Code of the loyalty membership. |
| `Points` | integer | optional | The loyalty points for the account in that membership. |
| `ExpirationDate` | string | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format. |
| `Url` | string | optional | Url of the loyalty membership. |
| `LoyaltyTierId` | string | optional | Unique identifier of the loyalty tier. |
| `CreatorProfile` | object | required | The profile data of the user who updated the loyalty membership. |
| `UpdaterProfile` | object | required | The profile data of the user who updated the loyalty membership. |

#### ProfileData
The profile data of the user who updated the loyalty membership.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [ProfileDataDiscriminator](#X-Ref-Name-ProfileDataDiscriminator) | required |  |
| `EnterpriseProfile` | object | required |  |

#### ProfileDataDiscriminator

- `Personal`
- `Enterprise`
- `Platform`
- `Static`
- `Integration`

#### ProfileDataDiscriminator

- `Personal`
- `Enterprise`
- `Platform`
- `Static`
- `Integration`

#### EnterpriseProfileData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProfileId` | string | required |  |

## Add loyalty memberships

Adds loyalty memberships to the enterprise. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "LoyaltyMemberships": [
    {
      "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
      "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
      "Code": "Code-003",
      "IsPrimary": true,
      "Points": 5,
      "ExpirationDate": "2022-12-31",
      "Url": "",
      "LoyaltyTierId": "34c29a01-c075-49e4-906a-3b1d4012463e",
      "State": "New"
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
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `LoyaltyMemberships` | array of [LoyaltyMembershipAddParameters](#LoyaltyMembershipAddParameters) | required, max 1000 items | Loyalty memberships to be added. |

#### LoyaltyMembershipAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required |  |
| `LoyaltyProgramId` | string | required |  |
| `IsPrimary` | boolean | required |  |
| `State` | [LoyaltyMembershipState](#X-Ref-Name-LoyaltyMembershipState) | required |  |
| `Code` | string | optional |  |
| `Points` | integer | optional |  |
| `ExpirationDate` | string | optional |  |
| `Url` | string | optional |  |
| `LoyaltyTierId` | string | optional |  |

### Response

```javascript
{
  "LoyaltyMemberships": [
    {
      "Id": "f9e434a3-720c-4820-b82e-202cb2efa2fd",
      "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
      "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
      "Code": "Code-003",
      "ExpirationDate": "2030-12-31",
      "Url": "https://www.mews.com/",
      "LoyaltyTierId": "34c29a01-c075-49e4-906a-3b1d4012463e"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty membership](#LoyaltyMembership) | required | Added loyalty memberships. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Update loyalty memberships

Updates information about the specified loyalty memberships. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "Client": "Sample Client 1.0.0",
  "LoyaltyMembershipUpdates": [
    {
      "LoyaltyMembershipId": "f9e434a3-720c-4820-b82e-202cb2efa2fd",
      "LoyaltyProgramId": {
        "Value": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425"
      },
      "ExpirationDate": {
        "Value": "2030-12-31"
      },
      "Url": {
        "Value": "https://www.mews.com/"
      },
      "LoyaltyTierId": {
        "Value": "34c29a01-c075-49e4-906a-3b1d4012463e"
      },
      "State": {
        "Value": "Canceled"
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
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `LoyaltyMembershipUpdates` | array of [LoyaltyMembershipUpdateParameters](#LoyaltyMembershipUpdateParameters) | required, max 1000 items | Loyalty memberships to be updated. |

#### LoyaltyMembershipUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMembershipId` | string | required |  |
| `LoyaltyProgramId` | object | required |  |
| `State` | [LoyaltyMembershipState](#X-Ref-Name-LoyaltyMembershipState) | required |  |
| `IsPrimary` | object | required |  |
| `Code` | object | required |  |
| `Points` | object | required |  |
| `ExpirationDate` | object | required |  |
| `Url` | object | required |  |
| `LoyaltyTierId` | object | required |  |

#### Int32NullableUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | integer | optional |  |

### Response

```javascript
{
  "LoyaltyMemberships": [
    {
      "Id": "f9e434a3-720c-4820-b82e-202cb2efa2fd",
      "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
      "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
      "Code": "Code-003",
      "ExpirationDate": "2030-12-31",
      "Url": "https://www.mews.com/",
      "LoyaltyTierId": "34c29a01-c075-49e4-906a-3b1d4012463e"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty membership](#LoyaltyMembership) | required | Added loyalty memberships. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Delete loyalty memberships

Deletes loyalty memberships.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyMembershipIds": [
    "f9e434a3-720c-4820-b82e-202cb2efa2fd"
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
| `LoyaltyMembershipIds` | array of string | required, max 1000 items | Unique identifier of the loyalty memberships to be deleted. |

### Response

```javascript
{}
```
