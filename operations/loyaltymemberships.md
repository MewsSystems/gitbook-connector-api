# Loyalty memberships

## Get all loyalty memberships

Returns all loyalty memberships of the enterprise (in the given activity states), optionally filtered by specific loyalty membership identifiers or other filter parameters.
Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
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
    "Limitation":{
        "Cursor": "ea7da00f-fdc9-4014-b0f7-71003b87e3d0",
        "Count": 100
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyMembershipIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty memberships](#loyalty-membership). |
| `LoyaltyProgramIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty programs](loyaltyprograms.md#loyalty-program). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of accounts (for example [Customers](customers.md#customer) or [Companies](companies.md#company)) the membership is associated with. |
| `CreatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval of [Loyalty membership](#loyalty-membership) creation date and time. |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval of [Loyalty membership](#loyalty-membership) last update date and time. |
| `ActivityStates` | array of string [Activity state](#activity-state) | required | Whether return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### Time interval

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

#### Activity state

* `Active` - active records (the validity might be restricted by another parameter i.e. interval).
* `Deleted`- deleted records.

### Response

```javascript
{
    "LoyaltyMemberships": [
        {
            "Id": "3f4d9db2-9910-4a63-b9f0-e94a13fab9ac",
            "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
            "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
            "Code": "Code-001",
            "ExpirationDate": "2024-12-31",
            "Url": "https://www.mews.com/"
        },
        {
            "Id": "ea7da00f-fdc9-4014-b0f7-71003b87e3d0",
            "LoyaltyProgramId": "8a98965a-7c03-48a1-a28c-ab1b009b53c8",
            "AccountId": "0ed43ab7-4592-4c99-906a-426588de1c00",
            "Code": "Code-002",
            "ExpirationDate": "",
            "Url": ""
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
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `AccountId` | string | required | Unique identifier of the account. |
| `Code` | string | required | Code of the loyalty membership. |
| `ExpirationDate` | string | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format. |
| `Url` | string | optional | Url of the loyalty membership. |

## Add loyalty memberships

Adds loyalty memberships to the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "LoyaltyMemberships": [
        {
            "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
            "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
            "Code": "Code-003",
            "ExpirationDate": "2022-12-31",
            "Url": ""
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyMemberships` | array of [Loyalty membership parameters](#loyalty-membership-parameters) | required, max 1000 items | Loyalty memberships to be added. |

#### Loyalty membership parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `AccountId` | string | required | Unique identifier of the account. |
| `Code` | string | required | Code of the loyalty membership. |
| `ExpirationDate` | string | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format. |
| `Url` | string | optional | Url of the loyalty membership. |

### Response

```javascript
{
    "LoyaltyMemberships": [
		{
            "Id": "f9e434a3-720c-4820-b82e-202cb2efa2fd",
            "LoyaltyProgramId": "3ed9e2f3-4bba-4df6-8d41-ab1b009b6425",
            "AccountId": "87d4c7c4-4832-4341-8b54-e45c1a73df34",
            "Code": "Code-003",
            "ExpirationDate": "2022-12-31",
            "Url": ""
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMemberships` | array of [Loyalty membership](#loyalty-membership) | required | Added loyalty memberships. |

## Update loyalty memberships

Updates information about the specified loyalty memberships.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyMemberships/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
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
| `LoyaltyMembershipUpdates` | array of [Loyalty membership update parameters](#loyalty-membership-update-parameters) | required, max 1000 items | Loyalty memberships to be updated. |

#### Loyalty membership update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyMembershipId` | string | required | Unique identifier of the loyalty membership. |
| `LoyaltyProgramId` | [String update value](#string-update-value) | optional | Unique identifier of the loyalty program \(or `null` if the name should not be updated\). |
| `ExpirationDate` | [String update value](#string-update-value) | optional | Expiration date of the loyalty membership in UTC timezone in ISO 8601 format \(or `null` if the name should not be updated\). |
| `Url` | [String update value](#string-update-value) | optional | Url of the loyalty membership \(or `null` if the name should not be updated\). |

#### String update value

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Value` | string | optional | Value which is to be updated. |

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
            "Url": "https://www.mews.com/"
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