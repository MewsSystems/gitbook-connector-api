# Credit cards

## Get all credit cards

Returns all credit cards, possibly filtered by identifiers, [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or other filters.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
  "Limitation": {
    "Count": 10
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `CreditCardIds` | array of string | optional, max 1000 items | Unique identifiers of the [Credit cards](https://mews-systems.gitbook.io/connector-api/operations/#credit-card). Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |

### Response

```javascript
{
  "CreditCards": [
    {
      "Id": "f1d94a32-b4be-479b-9e47-a9fcb03d5196",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
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
| `CreditCards` | array of [Credit card](#CreditCard) | optional | The credit cards. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Credit card

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the credit card. |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `CustomerId` | string | required | Unique identifier of the credit card [owner](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `IsActive` | boolean | required | Whether the credit card is still active. |
| `State` | string | optional | State of the credit card. |
| `Kind` | string | optional | Kind of the credit card. |
| `Format` | string | optional | Format of the credit card. |
| `Type` | string | optional | Type of the credit card. |
| `ObfuscatedNumber` | string | optional | Obfuscated credit card number. At most first six digits and last four digits can be specified, otherwise the digits are replaced with *. |
| `Expiration` | string | optional | Expiration of the credit card in format MM/YYYY. |
| `CreatedUtc` | string | required | Creation date and time of the credit card in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the credit card in UTC timezone in ISO 8601 format. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/creditCards/getAllByIds`

```javascript
{
  "Client": "string",
  "LanguageCode": "string",
  "CultureCode": "string",
  "AccessToken": "string",
  "ClientToken": "string",
  "CreditCardIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required |  |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required |  |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required |  |
| `MaskedClientToken` | string | optional |  |
| `CreditCardIds` | array of string | optional |  |

### Response

```javascript
{
  "CreditCards": [
    {
      "Id": "f1d94a32-b4be-479b-9e47-a9fcb03d5196",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
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
| `CreditCards` | array of [Credit card](#CreditCard) | optional | The credit cards. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/creditCards/getAllByCustomers`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CustomerIds": [
    "e98995b0-140a-4208-bbeb-b77f2c43d6ee"
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
| `CustomerIds` | array of string | required, max 1000 items | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |

### Response

```javascript
{
  "CreditCards": [
    {
      "Id": "f1d94a32-b4be-479b-9e47-a9fcb03d5196",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z",
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
| `CreditCards` | array of [Credit card](#CreditCard) | optional | The credit cards. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `CreditCardData` | object | required | Credit card details provided by PCI provider. |

#### CreditCardData
Credit card details provided by PCI provider.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `MaskedStorageData` | string | optional |  |
| `StorageData` | string | required |  |
| ~~`ObfuscatedNumber`~~ | string | optional |  |
| `Expiration` | string | required |  |

### Response

```javascript
{
  "CreditCardId": "ee2209ce-71c6-4e3a-978f-aac700c82c7b"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](https://mews-systems.gitbook.io/connector-api/operations/creditcards/#credit-card). |

## Charge credit card

Creates payment for specified customer credit card and charges the credit card via a gateway. Note that the kind of the card has to be &#x60;Gateway&#x60;.

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `BillId` | string | optional |  |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category). |
| `ReservationId` | string | optional |  |
| `Amount` | object | required | Amount of the external card payment. |
| `Category` | object | required |  |
| `Notes` | string | optional | Additional payment notes. |
| `CreditCardId` | string | required | Unique identifier of the [Credit card](https://mews-systems.gitbook.io/connector-api/operations/#credit-card). |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |

#### ExtendedAmountParameters
Amount of the external card payment.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `NetValue` | number | optional |  |
| `GrossValue` | number | optional |  |
| `TaxCodes` | array of string | optional |  |
| ~~`Value`~~ | number | optional |  |
| ~~`Net`~~ | number | optional |  |
| ~~`Tax`~~ | number | optional |  |
| ~~`TaxRate`~~ | number | optional |  |

#### AccountingCategoryParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Name` | string | optional |  |

### Response

```javascript
{
  "PaymentId": "98753f51-5b8b-4e8f-a3af-5b8476865983"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentId` | string | required | Unique identifier of the [Payment item](https://mews-systems.gitbook.io/connector-api/operations/accountingitems/#payment-item). |
