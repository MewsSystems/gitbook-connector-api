<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Accounting categories

## Get all accounting categories

Returns all accounting categories of the enterprise associated with the connector integration. 
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/accountingCategories/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "AccountingCategoryIds": [
    "0cf7aa90-736f-43e9-a7dc-787704548d86",
    "0b9560fb-055d-47d3-a6d4-e579c44ca558"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-10-01T00:00:00Z",
    "EndUtc": "2023-10-31T00:00:00Z"
  },
  "ActivityStates": [
    "Active"
  ],
  "Limitation": {
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `AccountingCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Accounting categories](accountingcategories.md#accounting-category). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Last update date and time of the accounting category in UTC timezone in ISO 8601 format. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "AccountingCategories": [
    {
      "Classification": "Accommodation",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Code": "345",
      "CostCenterCode": "2589",
      "ExternalCode": "3010",
      "Id": "0cf7aa90-736f-43e9-a7dc-787704548d86",
      "IsActive": true,
      "LedgerAccountCode": "311100",
      "Name": "Accommodation",
      "PostingAccountCode": "602020",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    },
    {
      "Classification": null,
      "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
      "Code": "100",
      "CostCenterCode": "2589",
      "ExternalCode": "ABVG",
      "Id": "0b9560fb-055d-47d3-a6d4-e579c44ca558",
      "IsActive": true,
      "LedgerAccountCode": "311100",
      "Name": "Alcoholic Beverage",
      "PostingAccountCode": "602020",
      "CreatedUtc": "2023-10-01T11:48:57Z",
      "UpdatedUtc": "2023-10-28T11:48:57Z"
    }
  ],
  "Cursor": "0b9560fb-055d-47d3-a6d4-e579c44ca558"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountingCategories` | array of [Accounting category](accountingcategories.md#accounting-category) | required | Accounting categories of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Accounting category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `IsActive` | boolean | required | Whether the accounting category is still active. |
| `Name` | string | required | Name of the category. |
| `Code` | string | optional | Code of the category within Mews. |
| `ExternalCode` | string | optional | Code of the category in external systems. |
| `LedgerAccountCode` | string | optional | Code of the ledger account (double entry accounting). |
| `PostingAccountCode` | string | optional | Code of the posting account (double entry accounting). |
| `CostCenterCode` | string | optional | Code of cost center. |
| `Classification` | [Accounting category classification](accountingcategories.md#accounting-category-classification) | optional | Classification of the accounting category allowing cross-enterprise reporting. |
| `CreatedUtc` | string | required | Creation date and time of the accounting category in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the accounting category in UTC timezone in ISO 8601 format. |

#### Accounting category classification

* `Accommodation`
* `FoodAndBeverage`
* `Taxes`
* `Payments`
* `ExternalRevenue`
* `SundryIncome`
* `Wellness`
* `Sport`
* `Technology`
* `Facilities`
* `Events`
* `Tourism`
