<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Loyalty memberships

## Get all loyalty memberships

Returns all loyalty memberships of the enterprise, optionally filtered by specific loyalty membership identifiers, activity states, or other filter parameters. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "5fcd1933-22f2-40b9-84da-7db04cbecec2"
  ],
  "CreatedUtc": {
    "StartUtc": "2022-10-15T00:00:00Z",
    "EndUtc": "2022-10-20T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2022-10-15T00:00:00Z",
    "EndUtc": "2022-10-20T00:00:00Z"
  },
  "LoyaltyMembershipIds": [
    "905a4489-0960-4ac9-96ec-793f47365c92",
    "ac48674e-58a2-43d6-a02b-9ead0b213b17"
  ],
  "AccountIds": [
    "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
    "bccdafd1-3e44-439d-861f-341526b597a9"
  ],
  "LoyaltyProgramIds": [
    "f701dafb-5765-4cf4-b1dd-1f602a740ae5"
  ],
  "MembershipStates": [
    "Pending",
    "Enrolled"
  ],
  "ActivityStates": [
    "Active"
  ],
  "Codes": [
    "MBR-2025-AX49ZT73"
  ],
  "ProviderMembershipIds": [
    "PRV-MBR-9842XKLT"
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
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | The time interval during which the membership was created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | The time interval during which the membership was last updated. |
| `LoyaltyMembershipIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty memberships](loyaltymemberships.md#loyalty-membership). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of accounts (for example [Customers](customers.md#customer) or [Companies](companies.md#company)) the membership is associated with. |
| `LoyaltyProgramIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty programs](loyaltyprograms.md#loyalty-program). |
| `MembershipStates` | array of [Loyalty membership state](loyaltymemberships.md#loyalty-membership-state) | optional | States of the loyalty memberships. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Codes` | array of string | optional, max 1000 items | List of loyalty membership codes, such as identification numbers printed on loyalty cards visible to the customer. |
| `ProviderMembershipIds` | array of string | optional, max 1000 items | List of unique loyalty membership identifiers assigned and managed by the external loyalty provider's system. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "LoyaltyMemberships": [
    {
      "Id": "905a4489-0960-4ac9-96ec-793f47365c92",
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "LoyaltyProgramId": "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
      "State": "New",
      "IsPrimary": true,
      "ProviderMembershipId": "PRV-MBR-9842XKLT",
      "Code": "MBR-2025-AX49ZT73",
      "Points": 22,
      "ExpirationDate": "2029-11-04T13:00:00Z",
      "Url": "https://rewards.example.com/member/PRV-MBR-9842XKLT",
      "LoyaltyTierId": "69eedfd2-6f25-42fc-b3c8-39df70f85e37",
      "CreatorProfile": null,
      "UpdaterProfile": null
    }
  ],
  "Cursor": "905a4489-0960-4ac9-96ec-793f47365c92"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty membership](loyaltymemberships.md#loyalty-membership) | required | The loyalty memberships of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty membership

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty membership. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `AccountId` | string | required | Unique identifier of the account. |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `State` | [Loyalty membership state](loyaltymemberships.md#loyalty-membership-state) | required | State of the loyalty membership. |
| `IsPrimary` | boolean | required | Defines the primary loyalty membership. |
| `ProviderMembershipId` | string | optional | Unique identifier for the loyalty membership in the loyalty provider's system. |
| `Code` | string | optional | Code of the loyalty membership. |
| `Points` | integer | optional | The loyalty points for the account in that membership. |
| `ExpirationDate` | string | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format. |
| `Url` | string | optional | Url of the loyalty membership. |
| `LoyaltyTierId` | string | optional | Unique identifier of the loyalty tier. |
| `CreatorProfile` | [Profile data](_objects.md#profile-data) | required | The profile data of the user who created or last updated the record. |
| `UpdaterProfile` | [Profile data](_objects.md#profile-data) | required | The profile data of the user who created or last updated the record. |

#### Loyalty membership state

* `New`
* `Pending`
* `Enrolled`
* `Canceled`
* `Declined`

## Add loyalty memberships

Adds loyalty memberships to the enterprise. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyMemberships": [
    {
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "LoyaltyProgramId": "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
      "IsPrimary": true,
      "State": "Enrolled",
      "Code": "MBR-2025-AX49ZT73",
      "Points": 22,
      "ExpirationDate": "2029-12-24T00:00:00Z",
      "Url": "https://rewards.example.com/member/PRV-MBR-9842XKLT",
      "LoyaltyTierId": "69eedfd2-6f25-42fc-b3c8-39df70f85e37"
    }
  ],
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `LoyaltyMemberships` | array of [Loyalty membership parameters](loyaltymemberships.md#loyalty-membership-parameters) | required, max 1000 items | Loyalty memberships to be added. |

#### Loyalty membership parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required | Unique identifier of the customer account. |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `IsPrimary` | boolean | required | Defines the primary loyalty membership for the account. |
| `State` | [Loyalty membership state](loyaltymemberships.md#loyalty-membership-state) | optional | State of the loyalty membership. The default is `Enrolled`. |
| `Code` | string | optional, max length 255 characters | Loyalty membership code, such as an identification number printed on a loyalty card visible to the customer. |
| `Points` | integer | optional | The loyalty points for the account in that membership. |
| `ExpirationDate` | string | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format. |
| `Url` | string | optional | URL of the loyalty membership in external loyalty system. |
| `LoyaltyTierId` | string | optional | Unique identifier of the loyalty tier. |

### Response

```javascript
{
  "LoyaltyMemberships": [
    {
      "Id": "905a4489-0960-4ac9-96ec-793f47365c92",
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "LoyaltyProgramId": "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
      "State": "New",
      "IsPrimary": true,
      "ProviderMembershipId": "PRV-MBR-9842XKLT",
      "Code": "MBR-2025-AX49ZT73",
      "Points": 22,
      "ExpirationDate": "2029-11-04T13:00:00Z",
      "Url": "https://rewards.example.com/member/PRV-MBR-9842XKLT",
      "LoyaltyTierId": "69eedfd2-6f25-42fc-b3c8-39df70f85e37",
      "CreatorProfile": null,
      "UpdaterProfile": null
    }
  ],
  "Cursor": "905a4489-0960-4ac9-96ec-793f47365c92"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty membership](loyaltymemberships.md#loyalty-membership) | required | The loyalty memberships of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Update loyalty memberships

Updates information about the specified loyalty memberships. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyMembershipUpdates": [
    {
      "LoyaltyMembershipId": "905a4489-0960-4ac9-96ec-793f47365c92",
      "LoyaltyProgramId": {
        "Value": "f701dafb-5765-4cf4-b1dd-1f602a740ae5"
      },
      "State": {
        "Value": "Canceled"
      },
      "IsPrimary": {
        "Value": true
      },
      "Code": {
        "Value": "MBR-2025-AX49ZT73"
      },
      "Points": {
        "Value": 42
      },
      "ExpirationDate": {
        "Value": "2038-01-19T03:14:07Z"
      },
      "Url": {
        "Value": "https://final-rewards.example.com/member/PRV-MBR-9842XKLT"
      },
      "LoyaltyTierId": {
        "Value": "69eedfd2-6f25-42fc-b3c8-39df70f85e37"
      }
    }
  ],
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `LoyaltyMembershipUpdates` | array of [Loyalty membership update parameters](loyaltymemberships.md#loyalty-membership-update-parameters) | required, max 1000 items | Loyalty memberships to be updated. |

#### Loyalty membership update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMembershipId` | string | required | Unique identifier of the loyalty membership. |
| `LoyaltyProgramId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the loyalty program (or `null` if the program should not be updated). |
| `State` | [Loyalty membership state update value](loyaltymemberships.md#loyalty-membership-state-update-value) | optional | State of the loyalty membership, (or `null` if the state should not be updated). |
| `IsPrimary` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the primary loyalty membership for the account (or `null` if the value should not be updated). |
| `Code` | [String update value](_objects.md#string-update-value) | optional | Code of the loyalty membership. (or `null` if the code should not be updated). |
| `ProviderMembershipId` | [String update value](_objects.md#string-update-value) | optional | Provider-assigned identifier for the loyalty membership. (or `null` if the value should not be updated). |
| `Points` | [Number update value](_objects.md#number-update-value) | optional | The loyalty points the account has in the loyalty membership (or `null` if the points should not be updated). |
| `ExpirationDate` | [String update value](_objects.md#string-update-value) | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format (or `null` if the date should not be updated). |
| `Url` | [String update value](_objects.md#string-update-value) | optional | URL of the loyalty membership (or `null` if the URL should not be updated). |
| `LoyaltyTierId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the loyalty tier (or `null` if the tier should not be updated). |

#### Loyalty membership state update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Loyalty membership state](loyaltymemberships.md#loyalty-membership-state) | required | Value which is to be updated. |

### Response

```javascript
{
  "LoyaltyMemberships": [
    {
      "Id": "905a4489-0960-4ac9-96ec-793f47365c92",
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "LoyaltyProgramId": "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
      "State": "New",
      "IsPrimary": true,
      "ProviderMembershipId": "PRV-MBR-9842XKLT",
      "Code": "MBR-2025-AX49ZT73",
      "Points": 22,
      "ExpirationDate": "2029-11-04T13:00:00Z",
      "Url": "https://rewards.example.com/member/PRV-MBR-9842XKLT",
      "LoyaltyTierId": "69eedfd2-6f25-42fc-b3c8-39df70f85e37",
      "CreatorProfile": null,
      "UpdaterProfile": null
    }
  ],
  "Cursor": "905a4489-0960-4ac9-96ec-793f47365c92"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty membership](loyaltymemberships.md#loyalty-membership) | required | The loyalty memberships of the enterprise. |
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
    "905a4489-0960-4ac9-96ec-793f47365c92",
    "ac48674e-58a2-43d6-a02b-9ead0b213b17"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyMembershipIds` | array of string | required, max 1000 items | Unique identifier of the loyalty memberships to be deleted. |

### Response

```javascript
{}
```
