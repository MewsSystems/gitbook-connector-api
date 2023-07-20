# Account notes

## Get all account notes

Returns all account notes of an account (in the given activity state), optionally filtered by account identifiers by specific account note identifiers or other filter parameters.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
    "Limitation":{
        "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
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
| `AccountNoteIds` | array of string | required, max 1000 items | Unique identifiers of [Account note](#account-note). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of the accounts ([Customer](../operations/customers.md#customer) or [Company](../operations/companies.md#company)). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of [Account note](#account-note) last update date and time. |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "AccountNotes": [
        {
            "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
            "AccountId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
            "Content": "Customer receives a free bottle of champagne during stay",
            "AccountType": "Customer",
            "Classifications": ["Gifts"],
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
            "Classifications": ["FoodAndBeverage"],
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
| `AccountNotes` | array of [Account note](#account-note) | required | The account note of the account within the chain. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Account note

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the account note. |
| `AccountId` | string | required | Unique identifier of the account. |
| `Content` | required | required | The content of the account note. |
| `AccountType` | string [Account type](#account-type)| required | Specifying types of accounts provided ([Customer](../operations/customers.md#customer), [Company](../operations/companies.md#company)). |
| `Classifications` | array of string | required | Specifying the classifactions of the note based on account type ([Customer note classification](#customer-note-classifications), [Company note classifications](#company-note-classifications)). |
| `IsActive` | boolean | required | Whether the account note is till active. |
| `CreatorProfile` | [Profile data](#profile-data) | required | The profile data of the user who created the account note. |
| `UpdaterProfile` | [Profile data](#profile-data) | required | The profile data of the user who updated the account note. |

#### Customer note classifications

* `General`
* `FoodAndBeverage`
* `FrontOffice`
* `Reservations`
* `Housekeeping`
* `Maintenance`
* `PreviousStay`
* `FamilyRelations`
* `Gifts`
* `Accounting`
* `Complaints`
* `Other`

#### Company note classifications

* `General`

## Add account notes

> This feature is being actively developed, features and behavior of this operation may change at short notice. Currently we support only one classification per account note.

Adds account notes to an account of the enterprise chain. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
            "Classifications": ["FamilyRelations"]
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `AccountNotes` | array of [Account note parameters](#account-note-parameters) | required, max 1000 items | Account notes to be added. |

#### Account note parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required | Unique identifier of the account ([Customer](../operations/customers.md#customer), [Company](../operations/companies.md#company)) the account note belongs to. |
| `Content` | string | required, max length 1000 characters | Content of the account note. |
| `Classifications` | array of string | required, max length 1 | Classification of the account note based on account type ([Customer note classification](#customer-note-classifications), [Company note classifications](#company-note-classifications)). |

### Response

```javascript
{
    "AccountNotes": [
        {
            "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
            "AccountId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
            "Content": "Brother of the CEO",
            "AccountType": "Customer",
            "Classifications": ["FamilyRelations"],
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
    ],
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountNotes` | array of [Account notes](#account-note) | required | Added account notes. |

## Update account notes

> This feature is being actively developed, features and behavior of this operation may change at short notice. Currently we support only one classification per account note. When changing the classification of a note, the current classification must be removed.

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
            },
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AccountNoteUpdates` | array of [Account note update parameters](#account-note-update-parameters) | required, max 1000 items | Account notes to be updated. |

#### Account note update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountNoteId` | string | required | Unique identifier of the account note. |
| `Content` | [String update value](_objects.md#string-update-value) | optional, max length 1000 characters | Content of the account note \(or `null` if the name should not be updated\). |
| `Classifications` | [Customer note classifications update parameters](#customer-note-classifications-update-parameters), [[Company note classifications update parameters](#company-note-classifications-update-parameters)] | required | Classification of the account note |

#### Customer note classifications update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `General` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the general classification for the account note. \(or `null` if the value should not be updated\). |
| `FoodAndBeverage` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the food and beverage classification for the account note. \(or `null` if the value should not be updated\). |
| `FrontOffice` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the front office classification for the account note. \(or `null` if the value should not be updated\). |
| `Reservations` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the reservations classification for the account note. \(or `null` if the value should not be updated\). |
| `Housekeeping` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the housekeeping classification for the account note. \(or `null` if the value should not be updated\). |
| `Maintenance` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the maintenance classification for the account note. \(or `null` if the value should not be updated\). |
| `PreviousStay` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the previous stay classification for the account note. \(or `null` if the value should not be updated\). |
| `FamilyRelations` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the family relations classification for the account note. \(or `null` if the value should not be updated\). |
| `Gifts` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the gifts classification for the account note. \(or `null` if the value should not be updated\). |
| `Accounting` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the accounting classification for the account note. \(or `null` if the value should not be updated\). |
| `Complaints` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the complaints classification for the account note. \(or `null` if the value should not be updated\). |
| `Other` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the other classification for the account note. \(or `null` if the value should not be updated\). |

#### Company note classifications update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `General` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the general classification for the account note. \(or `null` if the value should not be updated\). |

### Response

```javascript
{
    "AccountNotes": [
        {
            "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
            "AccountId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
            "Content": "The AC in the room doesn't work anymore",
            "AccountType": "Customer",
            "Classifications": ["Maintenance"],
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
    ],
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountNotes` | array of [Account note](#account-note) | required | Updated account notes. |

## Delete account notes

Deletes account notes. 

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AccountNoteIds` | array of string | required, max 1000 items | Unique identifier of the account notes to be deleted. |

### Response

```javascript
{}
```
