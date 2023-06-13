# Loyalty programs

## Get all loyalty programs

Returns all loyalty programs of the enterprise (in the given activity state), optionally filtered by specific loyalty program identifiers or other filter parameters.
Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
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
| `LoyaltyProgramIds` | array of string | optional, max 1000 items | Unique identifiers of [Loyalty programs](#loyalty-program). |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of [Loyalty program](#loyalty-program) creation date and time. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of [Loyalty program](#loyalty-program) last update date and time. |
| `ActivityStates` | array of string [Activity state](vouchers.md#activity-state) | required | Whether return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "LoyaltyPrograms": [
        {
            "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
            "Name": "Platinum Club",
            "Code": "PC01",
            "Type": "Hotel",
            "Subscription": "Free"
        },
        {
            "Id": "da34b396-41f7-47f6-8847-aecf00a3f19e",
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
| `LoyaltyPrograms` | array of [Loyalty program](#loyalty-program) | required | The loyalty programs of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Loyalty program

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the loyalty program. |
| `Name` | string | required | Name of the loyalty program. |
| `Code` | string | required | Code of the loyalty program. |
| `Type` | [Loyalty program type](#loyalty-program-type) | string | required | Type of the loyalty program. |
| `Subscription` | [Loyalty program subscription](#loyalty-program-subscription) | string | required | Subscription of the loyalty program. |

#### Loyalty program type

* `Hotel`
* `ExternalPartner`
* `SoftBrand`

#### Loyalty program subscription

* `Free`
* `Paid`

## Add loyalty programs

Adds loyalty programs to the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyPrograms` | array of [Loyalty program parameters](#loyalty-program-parameters) | required, max 1000 items | Loyalty programs to be added. |

#### Loyalty program parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DataClusterId` | string | required | Unique identifier of the chain whose member the enterprise is. |
| `Name` | string | required | Name of the loyalty program. |
| `Code` | string | required | Code of the loyalty program. |
| `Type` | string [Loyalty program type](#loyalty-program-type) | required | Type of the loyalty program. |
| `Subscription` | string [Loyalty program subscription](#loyalty-program-subscription) | required | Subscription of the loyalty program. |

### Response

```javascript
{
    "LoyaltyPrograms": [
		{
            "Id": "a58ff7cb-77e3-495a-bd61-aecf00a3f19d",
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
| `LoyaltyPrograms` | array of [Loyalty program](#loyalty-program) | required | Added loyalty programs. |

## Update loyalty programs

Updates information about the specified loyalty programs.

### Request

`[PlatformAddress]/api/connector/v1/loyaltyPrograms/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyProgramUpdates` | array of [Loyalty program update parameters](#loyalty-program-update-parameters) | required, max 1000 items | Loyalty programs to be updated. |

#### Loyalty program update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LoyaltyProgramId` | string | required | Unique identifier of the loyalty program. |
| `Name` | [String update value](_objects.md#string-update-value) | optional | Name of the loyalty program \(or `null` if the name should not be updated\). |
| `Type` | [Loyalty program type update](#loyalty-program-type-update) | optional | Type of the loyalty program, \(or `null` if the type should not be updated\). |
| `Subscription` | [Loyalty program subscription update](#loyalty-program-subscription-update) | optional | Subscription of the loyalty program, \(or `null` if the subscription should not be updated\). |

#### Loyalty program type update

| Property | Type | Contract | Description |
| `Value` | string [Loyalty program type](#loyalty-program-type) | required | Type of the loyalty program. |

#### Loyalty program subscription update

| Property | Type | Contract | Description |
| `Value` | string [Loyalty program subscription](#loyalty-program-subscription) | required | Subscription of the loyalty program. |

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
| `LoyaltyPrograms` | array of [Loyalty program](#loyalty-program) | required | Updated loyalty programs. |

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LoyaltyProgramIds` | array of string | required, max 1000 items | Unique identifier of the loyalty programs to be deleted. |

### Response

```javascript
{}
```