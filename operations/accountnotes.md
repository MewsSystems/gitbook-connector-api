# Account notes

## Get all account notes

Returns all account notes of an account, optionally filtered by activity state, account identifiers, specific account note identifiers or other filter parameters.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/accountNotes/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainIds": [
    "1df21f06-0cfc-4960-9c58-a3bf1261663e",
    "5fcd1933-22f2-40b9-84da-7db04cbecec2"
  ],
  "AccountNoteIds": [
    "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
    "8a98965a-7c03-48a1-a28c-ab1b009b53c8"
  ],
  "AccountIds": [
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
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `AccountNoteIds` | array of string | optional, max 1000 items | Unique identifiers of [Account note](https://mews-systems.gitbook.io/connector-api/operations/#account-note). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of the accounts ([Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company)). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ActivityStates` | array of [ActivityStates](#X-Ref-Name-ActivityStates) | optional | Whether to return only active, only deleted or both records. |

#### ActivityStates

- `Deleted`
- `Active`

### Response

```javascript
{
  "AccountNotes": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "AccountId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
      "Content": "Customer receives a free bottle of champagne during stay",
      "AccountType": "Customer",
      "Classifications": [
        "Gifts"
      ],
      "IsActive": true,
      "CreatorProfile": {
        "Discriminator": "Enterprise",
        "EnterpriseProfile": {
          "ProfileId": "52d19c34-b0aa-4635-905d-1326fa8b8e13"
        }
      },
      "UpdaterProfile": {
        "Discriminator": "Integration",
        "EnterpriseProfile": null
      }
    },
    {
      "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
      "AccountId": "5fcd1933-22f2-40b9-84da-7db04cbecec2",
      "Content": "Lactose intolerant",
      "AccountType": "Customer",
      "Classifications": [
        "FoodAndBeverage"
      ],
      "IsActive": true,
      "CreatorProfile": {
        "Discriminator": "Enterprise",
        "EnterpriseProfile": {
          "ProfileId": "52d19c34-b0aa-4635-905d-1326fa8b8e13"
        }
      },
      "UpdaterProfile": {
        "Discriminator": "Integration",
        "EnterpriseProfile": null
      }
    }
  ],
  "Cursor": "da34b396-41f7-47f6-8847-aecf00a3f19e"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountNotes` | array of [Account note](#AccountNote) | optional | The set of requested account notes. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Account note

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the account note. |
| `AccountId` | string | required | Unique identifier of the account. |
| `Content` | string | required | The content of the account note. |
| `AccountType` | [AccountType](#X-Ref-Name-AccountType) | required |  |
| `Classifications` | array of [AccountNoteClassification](#X-Ref-Name-AccountNoteClassification) | required | Specifying the classifactions of the note based on account type ([Customer note classification](https://mews-systems.gitbook.io/connector-api/operations/#customer-note-classifications), [Company note classifications](https://mews-systems.gitbook.io/connector-api/operations/#company-note-classifications)). |
| `IsActive` | boolean | required | Whether the account note is still active. |
| `CreatorProfile` | object | required | The profile data of the user who updated the loyalty membership. |
| `UpdaterProfile` | object | required | The profile data of the user who updated the loyalty membership. |

#### AccountType

- `Company`
- `Customer`

#### AccountNoteClassification

- `General`
- `FoodAndBeverage`
- `FrontOffice`
- `Reservations`
- `Housekeeping`
- `Maintenance`
- `PreviousStay`
- `FamilyRelations`
- `Gifts`
- `Accounting`
- `Complaints`
- `Other`

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

#### EnterpriseProfileData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProfileId` | string | required |  |

## Add account notes

Adds account notes to an account of the enterprise chain. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/accountNotes/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "AccountNotes": [
    {
      "AccountId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
      "Content": "Brother of the CEO",
      "Classifications": [
        "FamilyRelations"
      ]
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
| `AccountNotes` | array of [AccountNoteAddParameters](#AccountNoteAddParameters) | required, max 1000 items | Account notes to be added. |

#### AccountNoteAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required |  |
| `Content` | string | required |  |
| `Classifications` | array of [AccountNoteClassification](#X-Ref-Name-AccountNoteClassification) | required, max 1 items |  |

### Response

```javascript
{
  "AccountNotes": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "AccountId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
      "Content": "Brother of the CEO",
      "AccountType": "Customer",
      "Classifications": [
        "FamilyRelations"
      ],
      "IsActive": true,
      "CreatorProfile": {
        "Discriminator": "Enterprise",
        "EnterpriseProfile": {
          "ProfileId": "52d19c34-b0aa-4635-905d-1326fa8b8e13"
        }
      },
      "UpdaterProfile": {
        "Discriminator": "Integration",
        "EnterpriseProfile": null
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountNotes` | array of [Account note](#AccountNote) | optional | Added account notes. |

## Update account notes

Updates information about the specified account notes.

### Request

`[PlatformAddress]/api/connector/v1/accountNotes/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "AccountNoteUpdates": [
    {
      "AccountNoteId": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "Content": {
        "Value": "The AC in the room doesn't work anymore"
      },
      "Classifications": {
        "Maintenance": {
          "Value": true
        },
        "Housekeeping": {
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
| `ChainId` | string | optional |  |
| `AccountNoteUpdates` | array of [AccountNoteUpdateParameters](#AccountNoteUpdateParameters) | required, max 1000 items | Account notes to be updated. |

#### AccountNoteUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountNoteId` | string | required |  |
| `Content` | object | required |  |
| `Classifications` | object | required |  |

#### AccountNoteUpdateClassifications

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `General` | object | required |  |
| `FoodAndBeverage` | object | required |  |
| `FrontOffice` | object | required |  |
| `Reservations` | object | required |  |
| `Housekeeping` | object | required |  |
| `Maintenance` | object | required |  |
| `PreviousStay` | object | required |  |
| `FamilyRelations` | object | required |  |
| `Gifts` | object | required |  |
| `Accounting` | object | required |  |
| `Complaints` | object | required |  |
| `Other` | object | required |  |

### Response

```javascript
{
  "AccountNotes": [
    {
      "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
      "AccountId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
      "Content": "The AC in the room doesn't work anymore",
      "AccountType": "Customer",
      "Classifications": [
        "Maintenance"
      ],
      "IsActive": true,
      "CreatorProfile": {
        "Discriminator": "Enterprise",
        "EnterpriseProfile": {
          "ProfileId": "52d19c34-b0aa-4635-905d-1326fa8b8e13"
        }
      },
      "UpdaterProfile": {
        "Discriminator": "Integration",
        "EnterpriseProfile": null
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountNotes` | array of [Account note](#AccountNote) | optional | Updated account notes. |

## Delete account notes

Deletes specified account notes.

### Request

`[PlatformAddress]/api/connector/v1/accountNotes/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "AccountNoteIds": [
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
| `ChainId` | string | optional |  |
| `AccountNoteIds` | array of string | required, max 1000 items | Unique identifiers of the account notes to be deleted. |

### Response

```javascript
{}
```
