# Loyalty memberships

## Get all loyalty memberships

Returns all loyalty memberships of the enterprise (in the given activity states), optionally filtered by specific loyalty membership identifiers or other filter parameters.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
    "Limitation":{ "Count": 100 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `LoyaltyMembershipIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty memberships](#loyalty-membership). |
| `LoyaltyProgramIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty programs](loyaltyprograms.md#loyalty-program). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of accounts (for example [Customers](customers.md#customer) or [Companies](companies.md#company)) the membership is associated with. |
| `MembershipStates` | array of string [Loyalty membership state](#loyalty-membership-state) | optional | States of the loyalty memberships. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of [Loyalty membership](#loyalty-membership) creation date and time. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of [Loyalty membership](#loyalty-membership) last update date and time. |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### Activity state

* `Active` - active records (the validity might be restricted by another parameter i.e. interval).
* `Deleted`- deleted records.

#### Loyalty membership state

* `New`
* `Pending`
* `Enrolled`
* `Canceled`
* `Declined`
* ...

### Response

```javascript
{
    "LoyaltyMemberships": [
        {
            "Id": "3f4d9db2-9910-4a63-b9f0-e94a13fab9ac",
            "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
            "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
            "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
            "Code": "Code-001",
            "IsPrimary": true,
            "Points": 10,
            "ExpirationDate": "2024-12-31",
            "Url": "https://www.mews.com/",
            "LoyaltyTierId": "34c29a01-c075-49e4-906a-3b1d4012463e",
            "State": "New",
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
            "Id": "ea7da00f-fdc9-4014-b0f7-71003b87e3d0",
            "ChainId": "5fcd1933-22f2-40b9-84da-7db04cbecec2",
            "LoyaltyProgramId": "8a98965a-7c03-48a1-a28c-ab1b009b53c8",
            "AccountId": "0ed43ab7-4592-4c99-906a-426588de1c00",
            "Code": "Code-002",
            "IsPrimary": false,
            "Points": 25,
            "ExpirationDate": null,
            "Url": null,
            "LoyaltyTierId": null,
            "State": "Enrolled",
            "CreatorProfile": {
                "Discriminator": "Enterprise",
                "EnterpriseProfile": {
                    "ProfileId": "52d19c34-b0aa-4635-905d-1326fa8b8e13"
                }
            },
            "UpdaterProfile": {
                "Discriminator": "Enterprise",
                "EnterpriseProfile": {
                    "ProfileId": "2234693c-8745-42f7-9175-5e585cf7a820"
                }
            }
        }
    ],
    "Cursor": "ea7da00f-fdc9-4014-b0f7-71003b87e3d0"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty memberships](#loyalty-membership) | required | The loyalty memberships of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty membership

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty membership. |
| `ChainId` | string | optional | Unique identifier of the chain. |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `AccountId` | string | required | Unique identifier of the account. |
| `Code` | string | optional | Code of the loyalty membership. |
| `IsPrimary` | boolean | required | Defines the primary loyalty membership. |
| `Points` | integer | optional | The loyalty points for the account in that membership. |
| `ExpirationDate` | string | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format. |
| `Url` | string | optional | Url of the loyalty membership. |
| `LoyaltyTierId` | string | optional | Unique identifier of the loyalty tier. | 
| `State` | [Loyalty membership state](#loyalty-membership-state) | required | State of the loyalty membership. |
| `CreatorProfile` | [Profile data](#profile-data) | required | The profile data of the user who created the loyalty membership. |
| `UpdaterProfile` | [Profile data](#profile-data) | required | The profile data of the user who updated the loyalty membership. |

#### Profile data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Profile data discriminator](#profile-data-discriminator) | required | Type of the profile data (e.g. `Enterprise`). |
| `EnterpriseProfile` | [Enterprise profile data](#enterprise-profile-data) | optional | Enterprise profile data. |

#### Profile data discriminator

* `Personal`
* `Enterprise`
* `Platform`
* `Static`
* `Integration`
* ...

#### Enterprise profile data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProfileId` | string | required | Unique identifier of the profile. |

## Add loyalty memberships

Adds loyalty memberships to the enterprise.
Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `LoyaltyMemberships` | array of [Loyalty membership parameters](#loyalty-membership-parameters) | required, max 1000 items | Loyalty memberships to be added. |

#### Loyalty membership parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `AccountId` | string | required | Unique identifier of the account. |
| `Code` | string | optional | Code of the loyalty membership. |
| `IsPrimary` | boolean | required | Defines the primary loyalty membership for the account. |
| `Points` | integer | optional | The loyalty points for the account in that membership. |
| `ExpirationDate` | string | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format. |
| `Url` | string | optional | Url of the loyalty membership. |
| `LoyaltyTierId` | string | optional | Unique identifier of the loyalty tier. |
| `State` | [Loyalty membership state](#loyalty-membership-state) | optional | State of the loyalty membership. |

### Response

```javascript
{
    "LoyaltyMemberships": [
		{
            "Id": "f9e434a3-720c-4820-b82e-202cb2efa2fd",
            "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
            "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
            "Code": "Code-003",
            "IsPrimary": true,
            "Points": 5,
            "ExpirationDate": "2022-12-31",
            "Url": "",
            "LoyaltyTierId": "34c29a01-c075-49e4-906a-3b1d4012463e",
            "State": "Enrolled"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty membership](#loyalty-membership) | required | Added loyalty memberships. |

## Update loyalty memberships

Updates information about the specified loyalty memberships.
Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `LoyaltyMembershipUpdates` | array of [Loyalty membership update parameters](#loyalty-membership-update-parameters) | required, max 1000 items | Loyalty memberships to be updated. |

#### Loyalty membership update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMembershipId` | string | required | Unique identifier of the loyalty membership. |
| `LoyaltyProgramId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the loyalty program \(or `null` if the program should not be updated\). |
| `IsPrimary` | [Bool update value](_objects.md#bool-update-value) | optional | Boolean value defining the primary loyalty membership for the account. \(or `null` if the value should not be updated\).  |
| `Points` | [Integer update value](_objects.md#integer-update-value) | optional | The loyalty points the account has in the loyalty membership \(or `null` if the points should not be updated\). |
| `Code` | [String update value](_objects.md#string-update-value) | optional | Code of the loyalty membership. \(or `null` if the code should not be updated\). |
| `ExpirationDate` | [String update value](_objects.md#string-update-value) | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format \(or `null` if the date should not be updated\). |
| `Url` | [String update value](_objects.md#string-update-value) | optional | Url of the loyalty membership \(or `null` if the url should not be updated\). |
| `LoyaltyTierId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the loyalty tier \(or `null` if the tier should not be updated\). |
| `State` | [Loyalty membership state update](#loyalty-membership-state-update) | optional | State of the loyalty membership, \(or `null` if the state should not be updated\). |

#### Loyalty membership state update

| Property | Type | Contract | Description |
| `Value` | [Loyalty membership state](#loyalty-membership-state) | required | State of the loyalty membership. |

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
| `LoyaltyMemberships` | array of [Loyalty membership](#loyalty-membership) | required | Added loyalty memberships. |

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyMembershipIds` | array of string | required, max 1000 items | Unique identifier of the loyalty memberships to be deleted. |

### Response

```javascript
{}
```
