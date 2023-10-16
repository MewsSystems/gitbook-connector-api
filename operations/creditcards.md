# Credit cards

## Get all credit cards 

Returns all credit cards, possibly filtered by identifiers, [Customers](customers.md#customer) or other filters.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/creditCards/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "CreditCardIds": [
        "f1d94a32-b4be-479b-9e47-a9fcb03d5196"
    ],
    "CustomerIds": [
        "5cbbd97d-5f19-4010-9abf-ab0400a3366a"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-10-01T00:00:00Z",
        "EndUtc": "2023-10-31T00:00:00Z"
    },
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `CreditCardIds` | array of string | optional, max 1000 items | Unique identifiers of the [Credit cards](#credit-card). Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customers](customers.md#customer). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Credit card](#credit-card) was updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "CreditCards": [
        {
            "Id": "f1d94a32-b4be-479b-9e47-a9fcb03d5196",
            "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z"
            "CustomerId": "a3c90426-43f2-4b53-8482-446dfc724bd2",
            "Expiration": "2020-11",
            "Format": "Physical",            
            "IsActive": true,
            "Kind": "Gateway",
            "ObfuscatedNumber": "************1111",
            "State": "Enabled",
            "Type": "Visa"
        }
    ],
    "Cursor": "f1d94a32-b4be-479b-9e47-a9fcb03d5196"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| CreditCards | array of [Credit cards](#credit-card) | required | The credit cards. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Credit card

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the credit card. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `CustomerId` | string | required | Unique identifier of the credit card [owner](customers.md#customer). |
| `CreatedUtc` | string | required | Creation date and time of the credit card in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the credit card in UTC timezone in ISO 8601 format. |
| `Expiration` | string | optional | Expiration of the credit card in format `MM/YYYY`. |
| `IsActive` | boolean | required | Whether the credit card is still active. |
| `ObfuscatedNumber` | string | optinal | Obfuscated credit card number. At most first six digits and last four digits can be specified, otherwise the digits are replaced with `*`. |
| `Format` | string [Credit card format](#credit-card-format) | required | Format of the credit card. |
| `Kind` | string [Credit card kind](#credit-card-kind) | required | Kind of the credit card. |
| `State` | string [Credit card state](#credit-card-state) | required | State of the credit card. |
| `Type` | string [Credit card type](#credit-card-type) | required | Type of the credit card. |

#### Credit card format

* `Physical`
* `Virtual`

#### Credit card kind

* `Terminal`
* `Gateway`

#### Credit card state

* `Enabled`
* `Disabled`

#### Credit card type

* `MasterCard`, `Visa`, `Amex`, `Maestro`, `Discover`, `VPay`, ...

## Charge credit card

Creates payment for specified customer credit card and charges the credit card via a gateway. Note that the kind of the card has to be `Gateway`.

### Request

`[PlatformAddress]/api/connector/v1/creditCards/charge`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CreditCardId": "866d3f51-5b8b-4e8f-a3af-5b84768c522d",
    "Amount": {
        "GrossValue": 5,
        "Currency": "EUR"
    },
    "AccountingCategoryId": null,
    "Notes": null,
    "ReceiptIdentifier": null
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](#credit-card). |
| `Amount` | [Amount value](accountingitems.md#amount-value) | required | Amount of the credit card payment. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](accountingcategories.md#accounting-category). |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |
| `Notes` | string | optional | Additional payment notes. |

### Response

```javascript
{
    "PaymentId": "98753f51-5b8b-4e8f-a3af-5b8476865983"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| PaymentId | string | required | Unique identifier of the [Payment item](accountingitems.md#payment-item). |

## Add tokenized credit card

Adds a new tokenized credit card to the specified customer. To be able to use this operation special permission has to be granted during certification.

### Request

`[PlatformAddress]/api/connector/v1/creditCards/addTokenized`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "e98995b0-140a-4208-bbeb-b77f2c43d6ee",
    "CreditCardData": {
        "StorageData": "190510170631533875",
        "Expiration": "2025-10"
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `CreditCardData` | [Credit card data](#credit-card-data) | required | Credit card details provided by PCI provider. |

#### Credit card data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StorageData` | string | required | Identifier of credit card data in PCI storage (`transactionId`). |
| `Expiration` | string | required | Expiration of the credit card in format `yyyy-MM`. |

### Response

```javascript
{
    "CreditCardId": "ee2209ce-71c6-4e3a-978f-aac700c82c7b"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](#credit-card). |
