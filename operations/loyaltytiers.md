<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Loyalty tiers

## Get all loyalty tiers

Returns all loyalty tiers of the chain or chains, filtered by loyalty program identifiers and optionally filtered by specific loyalty tier identifiers, activity states, or other filter parameters. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
  "ActivityStates": [
    "Active"
  ],
  "UpdatedUtc": {
    "StartUtc": "2022-10-10T00:00:00Z",
    "EndUtc": "2022-10-17T00:00:00Z"
  },
  "Limitation": {
    "Count": 100,
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `LoyaltyProgramIds` | array of string | required, max 1000 items | Unique identifiers of [Loyalty programs](loyaltytiers.md#loyalty-program). |
| `LoyaltyTierIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty tiers](loyaltytiers.md#loyalty-tier). |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of `Loyalty tier` last update date and time. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "LoyaltyTiers": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "LoyaltyProgramId": "8a98965a-7c03-48a1-a28c-ab1b009b53c8",
      "Name": "Platinum",
      "Code": "P1",
      "Ordering": 1,
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e"
    },
    {
      "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
      "LoyaltyProgramId": "80180337-7d71-4901-992e-2e45e3dfdf15",
      "Name": "Silver",
      "Code": "S1",
      "Ordering": 3,
      "ChainId": "5fcd1933-22f2-40b9-84da-7db04cbecec2"
    }
  ],
  "Cursor": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyTiers` | array of [Loyalty tier](loyaltytiers.md#loyalty-tier) | required, max 1000 items | The loyalty tiers of the loyalty program within the chain. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty tier

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty tier. |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program of that loyalty tier. |
| `Name` | string | required, max length 50 characters | Name of the loyalty tier. |
| `Code` | string | required, max length 50 characters | Code of the loyalty tier. |
| `Ordering` | integer | required | Ordering of the loyalty tier. |
| `ChainId` | string | required | Unique identifier of the Chain of that LoyaltyTier. |

## Add loyalty tiers

Adds loyalty tiers to a loyalty program of the enterprise chain. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyTiers/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyTiers": [
    {
      "LoyaltyProgramId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
      "Name": "Platinum",
      "Code": "P1",
      "Ordering": 1
    }
  ],
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `LoyaltyTiers` | array of [Loyalty tier parameters](loyaltytiers.md#loyalty-tier-parameters) | required, max 1000 items | Loyalty tiers to be added. |

#### Loyalty tier parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program the tier belongs to. |
| `Name` | string | required, max length 50 characters | Name of the loyalty tier. |
| `Code` | string | required, max length 50 characters | Code of the loyalty tier. |
| `Ordering` | integer | required | Ordering of the loyalty program. |

### Response

```javascript
{
  "LoyaltyTiers": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "LoyaltyProgramId": "8a98965a-7c03-48a1-a28c-ab1b009b53c8",
      "Name": "Platinum",
      "Code": "P1",
      "Ordering": 1,
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e"
    },
    {
      "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
      "LoyaltyProgramId": "80180337-7d71-4901-992e-2e45e3dfdf15",
      "Name": "Silver",
      "Code": "S1",
      "Ordering": 3,
      "ChainId": "5fcd1933-22f2-40b9-84da-7db04cbecec2"
    }
  ],
  "Cursor": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyTiers` | array of [Loyalty tier](loyaltytiers.md#loyalty-tier) | required, max 1000 items | The loyalty tiers of the loyalty program within the chain. |
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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyTierUpdates` | array of [Loyalty tier update parameters](loyaltytiers.md#loyalty-tier-update-parameters) | required, max 1000 items | Loyalty tiers to be updated. |

#### Loyalty tier update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyTierId` | string | required | Unique identifier of the loyalty tier. |
| `Name` | [String update value](_objects.md#string-update-value) | optional, max length 50 characters | Name of the loyalty tier \(or `null` if the name should not be updated\). |
| `Code` | [String update value](_objects.md#string-update-value) | optional, max length 50 characters | Code of the loyalty tier, \(or `null` if the code should not be updated\). |
| `Ordering` | [Integer update value](_objects.md#integer-update-value) | optional | Ordering of the loyalty tier, \(or `null` if the ordering should not be updated\). |

### Response

```javascript
{
  "LoyaltyTiers": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "LoyaltyProgramId": "8a98965a-7c03-48a1-a28c-ab1b009b53c8",
      "Name": "Platinum",
      "Code": "P1",
      "Ordering": 2,
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  ],
  "Cursor": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyTiers` | array of [Loyalty tier](loyaltytiers.md#loyalty-tier) | required, max 1000 items | The loyalty tiers of the loyalty program within the chain. |
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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyTierIds` | array of string | required, max 1000 items | Unique identifier of the loyalty tiers to be deleted. |

### Response

```javascript
{}
```
