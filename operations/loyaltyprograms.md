# Loyalty programs

## Get all loyalty programs

Returns all loyalty programs of the enterprise (in the given activity state), optionally filtered by specific loyalty program identifiers or other filter parameters.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/getAll`

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
  "CreatedUtc": {
    "StartUtc": "2022-10-05T00:00:00Z",
    "EndUtc": "2022-10-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2022-10-10T00:00:00Z",
    "EndUtc": "2022-10-17T00:00:00Z"
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
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `LoyaltyProgramIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty programs](https://mews-systems.gitbook.io/connector-api/operations/#loyalty-program). |
| `ActivityStates` | array of [ActivityStates](#X-Ref-Name-ActivityStates) | optional | Whether to return only active, only deleted or both records. |
| `Codes` | array of string | optional, max 1000 items |  |
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
  "LoyaltyPrograms": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "Name": "Platinum Club Extra",
      "Code": "PC01",
      "Type": "Hotel",
      "Subscription": "Free"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyPrograms` | array of [Loyalty program](#LoyaltyProgram) | required | Updated loyalty programs. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty program

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty program. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Name` | string | required | Name of the loyalty program. |
| `Code` | string | required | Code of the loyalty program. |
| `Type` | [LoyaltyProgramType](#X-Ref-Name-LoyaltyProgramType) | required |  |
| `Subscription` | [LoyaltyProgramSubscription](#X-Ref-Name-LoyaltyProgramSubscription) | required |  |

#### LoyaltyProgramType

- `Hotel`
- `ExternalPartner`
- `SoftBrand`
- `Unknown`

#### LoyaltyProgramSubscription

- `Free`
- `Paid`

## Add loyalty programs

Adds loyalty programs to the enterprise. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "LoyaltyPrograms": [
    {
      "DataClusterId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
      "Name": "Platinum Club",
      "Code": "PC01",
      "Type": "Hotel",
      "Subscription": "Free"
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
| `LoyaltyPrograms` | array of [LoyaltyProgramAddParameters](#LoyaltyProgramAddParameters) | required, max 1000 items | Loyalty programs to be added. |

#### LoyaltyProgramAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ~~`DataClusterId`~~ | string | required |  |
| `Name` | string | required |  |
| `Code` | string | required |  |
| `Type` | [LoyaltyProgramType](#X-Ref-Name-LoyaltyProgramType) | required |  |
| `Subscription` | [LoyaltyProgramSubscription](#X-Ref-Name-LoyaltyProgramSubscription) | required |  |

### Response

```javascript
{
  "LoyaltyPrograms": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "Name": "Platinum Club Extra",
      "Code": "PC01",
      "Type": "Hotel",
      "Subscription": "Free"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyPrograms` | array of [Loyalty program](#LoyaltyProgram) | required | Updated loyalty programs. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Update loyalty programs

Updates information about the specified loyalty programs. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "LoyaltyProgramUpdates": [
    {
      "LoyaltyProgramId": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "Name": {
        "Value": "Platinum Club Extra"
      },
      "Type": {
        "Value": "Hotel"
      },
      "Subscription": {
        "Value": "Free"
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
| `LoyaltyProgramUpdates` | array of [LoyaltyProgramUpdateParameters](#LoyaltyProgramUpdateParameters) | required, max 1000 items | Loyalty programs to be updated. |

#### LoyaltyProgramUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyProgramId` | string | required |  |
| `Name` | object | required |  |
| `Type` | [LoyaltyProgramType](#X-Ref-Name-LoyaltyProgramType) | required |  |
| `Subscription` | [LoyaltyProgramSubscription](#X-Ref-Name-LoyaltyProgramSubscription) | required |  |

### Response

```javascript
{
  "LoyaltyPrograms": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "Name": "Platinum Club Extra",
      "Code": "PC01",
      "Type": "Hotel",
      "Subscription": "Free"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyPrograms` | array of [Loyalty program](#LoyaltyProgram) | required | Updated loyalty programs. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## Delete loyalty programs

Deletes loyalty programs. Note that a loyalty program containing active memberships cannot be deleted.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyProgramIds": [
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
| `LoyaltyProgramIds` | array of string | required, max 1000 items | Unique identifier of the loyalty programs to be deleted. |

### Response

```javascript
{}
```
