# Loyalty tiers

## Get all loyalty tiers

Returns all loyalty tiers of the chain (in the given activity state), filtered by loyalty program identifiers and optionally filtered by specific loyalty tier identifiers or other filter parameters.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyTiers/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainIds": [
    "1df21f06-0cfc-4960-9c58-a3bf1261663e",
    "5fcd1933-22f2-40b9-84da-7db04cbecec2"
  ],
  "LoyaltyProgramIds": [
    "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
    "8a98965a-7c03-48a1-a28c-ab1b009b53c8"
  ],
  "LoyaltyTierIds": [
    "a6738390-c241-45b7-8e46-14f47207abe5",
    "435d4d5f-d14f-48dc-a47e-0481fc28ead0"
  ],
  "UpdatedUtc": {
    "StartUtc": "2022-10-10T00:00:00Z",
    "EndUtc": "2022-10-17T00:00:00Z"
  },
  "ActivityStates": [
    "Active"
  ],
  "Limitation": {
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
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
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `LoyaltyProgramIds` | array of string | required, max 1000 items | Unique identifiers of [Loyalty programs](https://mews-systems.gitbook.io/connector-api/operations/#loyalty-program). |
| `LoyaltyTierIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty tiers](https://mews-systems.gitbook.io/connector-api/operations/#loyalty-tier). |
| `ActivityStates` | array of [ActivityStates](#X-Ref-Name-ActivityStates) | optional | Whether to return only active, only deleted or both records. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### ActivityStates

- `Deleted`
- `Active`

#### ActivityStates

- `Deleted`
- `Active`

### Response

```javascript
{
  "LoyaltyTiers": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "LoyaltyProgramId": "8a98965a-7c03-48a1-a28c-ab1b009b53c8",
      "Name": "Platinum",
      "Code": "P1",
      "Ordering": 1
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyTiers` | array of [Loyalty tier](#LoyaltyTier) | required | Updated loyalty tiers. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty tier

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty tier. |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program of that loyalty tier. |
| `Name` | string | required | Name of the loyalty tier. |
| `Code` | string | required | Code of the loyalty tier. |
| `Ordering` | integer | required | Ordering of the loyalty tier. |

## Add loyalty tiers

Adds loyalty tiers to a loyalty program of the enterprise chain. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyTiers/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "LoyaltyTiers": [
    {
      "LoyaltyProgramId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
      "Name": "Platinum",
      "Code": "P1",
      "Ordering": 1
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
| `LoyaltyTiers` | array of [LoyaltyTierAddParameters](#LoyaltyTierAddParameters) | required, max 1000 items | Loyalty tiers to be added. |

#### LoyaltyTierAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyProgramId` | string | required |  |
| `Name` | string | required |  |
| `Code` | string | required |  |
| `Ordering` | integer | required |  |

### Response

```javascript
{
  "LoyaltyTiers": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "LoyaltyProgramId": "8a98965a-7c03-48a1-a28c-ab1b009b53c8",
      "Name": "Platinum",
      "Code": "P1",
      "Ordering": 1
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyTiers` | array of [Loyalty tier](#LoyaltyTier) | required | Updated loyalty tiers. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Update loyalty tiers

Updates information about the specified loyalty tiers.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyTiers/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyTierUpdates": [
    {
      "LoyaltyTierId": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "Name": {
        "Value": "Platinum"
      },
      "Code": {
        "Value": "P1"
      },
      "Ordering": {
        "Value": 2
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
| `LoyaltyTierUpdates` | array of [LoyaltyTierUpdateParameters](#LoyaltyTierUpdateParameters) | required, max 1000 items | Loyalty tiers to be updated. |

#### LoyaltyTierUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyTierId` | string | required |  |
| `Name` | object | required |  |
| `Code` | object | required |  |
| `Ordering` | object | required |  |

#### Int32UpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | integer | required |  |

### Response

```javascript
{
  "LoyaltyTiers": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "LoyaltyProgramId": "8a98965a-7c03-48a1-a28c-ab1b009b53c8",
      "Name": "Platinum",
      "Code": "P1",
      "Ordering": 1
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyTiers` | array of [Loyalty tier](#LoyaltyTier) | required | Updated loyalty tiers. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Delete loyalty tiers

Deletes loyalty tiers.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyTiers/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyTierIds": [
    "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
    "da34b396-41f7-47f6-8847-aecf00a3f19e"
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
| `LoyaltyTierIds` | array of string | required, max 1000 items | Unique identifier of the loyalty tiers to be deleted. |

### Response

```javascript
{}
```
