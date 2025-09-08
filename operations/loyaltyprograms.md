<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Loyalty programs

## Get all loyalty programs

Returns all loyalty programs of the enterprise, optionally filtered by specific loyalty program identifiers, activity states, or other filter parameters. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/getAll`

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
    "StartUtc": "2022-10-05T00:00:00Z",
    "EndUtc": "2022-10-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2022-10-10T00:00:00Z",
    "EndUtc": "2022-10-17T00:00:00Z"
  },
  "LoyaltyProgramIds": [
    "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
    "da34b396-41f7-47f6-8847-aecf00a3f19e"
  ],
  "ActivityStates": [
    "Active"
  ],
  "Codes": [
    "PC01",
    "GEC07"
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
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of `LoyaltyProgram` creation date and time. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of `LoyaltyProgram` last update date and time. |
| `LoyaltyProgramIds` | array of string | optional, max 1000 items | Unique identifiers of `LoyaltyProgram`. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Codes` | array of string | optional, max 1000 items | Codes of `LoyaltyProgram`. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
  "LoyaltyPrograms": [
    {
      "Id": "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Name": "Platinum Club",
      "Code": "PC01",
      "Type": "Hotel",
      "Subscription": "Free"
    },
    {
      "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Name": "Gold Exclusive Club",
      "Code": "GEC07",
      "Type": "ExternalPartner",
      "Subscription": "Paid"
    }
  ],
  "Cursor": "da34b396-41f7-47f6-8847-aecf00a3f19e"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyPrograms` | array of [Loyalty program](loyaltyprograms.md#loyalty-program) | required, max 1000 items | The loyalty programs of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty program

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty program. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Name` | string | required | Name of the loyalty program. |
| `Code` | string | required | Code of the loyalty program. |
| `Type` | [Loyalty program type](loyaltyprograms.md#loyalty-program-type) | required | Type of the loyalty program. |
| `Subscription` | [Loyalty program subscription](loyaltyprograms.md#loyalty-program-subscription) | required | Subscription of the loyalty program. |

#### Loyalty program type

* `Hotel`
* `ExternalPartner`
* `SoftBrand`
* `Unknown`

#### Loyalty program subscription

* `Free`
* `Paid`

## Add loyalty programs

Adds loyalty programs to the enterprise. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyPrograms": [
    {
      "Name": "Platinum Club",
      "Code": "PC01",
      "Type": "Hotel",
      "Subscription": "Free"
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
| `LoyaltyPrograms` | array of [Loyalty program parameters](loyaltyprograms.md#loyalty-program-parameters) | required, max 1000 items | Loyalty programs to be added. |

#### Loyalty program parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required, max length 100 characters | Name of the loyalty program. |
| `Code` | string | required, max length 50 characters | Code of the loyalty program. |
| `Type` | [Loyalty program type](loyaltyprograms.md#loyalty-program-type) | required | Type of the loyalty program. |
| `Subscription` | [Loyalty program subscription](loyaltyprograms.md#loyalty-program-subscription) | required | Subscription of the loyalty program. |

### Response

```javascript
{
  "LoyaltyPrograms": [
    {
      "Id": "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
| `LoyaltyPrograms` | array of [Loyalty program](loyaltyprograms.md#loyalty-program) | required, max 1000 items | Added loyalty programs. |

## Update loyalty programs

Updates information about the specified loyalty programs. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LoyaltyProgramUpdates": [
    {
      "LoyaltyProgramId": "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
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
| `LoyaltyProgramUpdates` | array of [Loyalty program update parameters](loyaltyprograms.md#loyalty-program-update-parameters) | required, max 1000 items | Loyalty programs to be updated. |

#### Loyalty program update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `Name` | [String update value](_objects.md#string-update-value) | optional | Name of the loyalty program (or `null` if the name should not be updated). |
| `Type` | [Loyalty program type update value](loyaltyprograms.md#loyalty-program-type-update-value) | optional | Type of the loyalty program, (or `null` if the type should not be updated). |
| `Subscription` | [Loyalty program subscription update value](loyaltyprograms.md#loyalty-program-subscription-update-value) | optional | Subscription of the loyalty program, (or `null` if the subscription should not be updated). |

#### Loyalty program type update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Loyalty program type](loyaltyprograms.md#loyalty-program-type) | required | Value which is to be updated. |

#### Loyalty program type

* `Hotel`
* `ExternalPartner`
* `SoftBrand`
* `Unknown`

#### Loyalty program subscription update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Loyalty program subscription](loyaltyprograms.md#loyalty-program-subscription) | required | Value which is to be updated. |

#### Loyalty program subscription

* `Free`
* `Paid`

### Response

```javascript
{
  "LoyaltyPrograms": [
    {
      "Id": "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
| `LoyaltyPrograms` | array of [Loyalty program](loyaltyprograms.md#loyalty-program) | required, max 1000 items | Updated loyalty programs. |

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
    "f701dafb-5765-4cf4-b1dd-1f602a740ae5",
    "da34b396-41f7-47f6-8847-aecf00a3f19e"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyProgramIds` | array of string | required, max 1000 items | Unique identifier of the loyalty programs to be deleted. |

### Response

```javascript
{}
```
