# Accounting categories

## Get all accounting categories

Returns all accounting categories of the enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/accountingCategories/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "AccountingCategories": [
        {
            "Classification": "Accommodation",
            "Code": "345",
            "CostCenterCode": "2589",
            "ExternalCode": "3010",
            "Id": "0cf7aa90-736f-43e9-a7dc-787704548d86",
            "IsActive": true,
            "LedgerAccountCode": "311100",
            "Name": "Accommodation",
            "PostingAccountCode": "602020"
        },
        {
            "Classification": null,
            "Code": "100",
            "CostCenterCode": "2589",
            "ExternalCode": "ABVG",
            "Id": "0b9560fb-055d-47d3-a6d4-e579c44ca558",
            "IsActive": true,
            "LedgerAccountCode": "311100",
            "Name": "Alcoholic Beverage",
            "PostingAccountCode": "602020"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountingCategories` | array of [Accounting category](#accounting-category) | required | Accounting categories of the enterprise. |

#### Accounting category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `IsActive` | boolean | required | Whether the accounting category is still active. |
| `Name` | string | required | Name of the category. |
| `Code` | string | optional | Code of the category within Mews. |
| `Classification` | string [Accounting category classification](#accounting-category-classification) | optional | Classification of the accounting category allowing cross-enterprise reporting. |
| `ExternalCode` | string | optional | Code of the category in external systems. |
| `LedgerAccountCode` | string | optional | Code of the ledger account \(double entry accounting\). |
| `PostingAccountCode` | string | optional | Code of the posting account \(double entry accounting\). |
| `CostCenterCode` | string | optional | Code of cost center. |

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
* ...
