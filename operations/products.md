# Products

## Get all products

Returns all products offered together with the specified services.

### Request

`[PlatformAddress]/api/connector/v1/products/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "Limitation": { "Count" : 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service). |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of products returned. |

### Response

```javascript
{
    "Products": [
        {
            "Id": "198bc308-c1f2-4a1c-a827-c41d99d52f3d",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "CategoryId": null,
            "AccountingCategoryId": "6535e19e-1077-49d9-a338-67bf4ffecb14",
            "IsActive": true,
            "Name": "Breakfast",
            "ExternalName": "Breakfast",
            "ShortName": "BFST",
            "Description": "Nice continental breakfast.",
            "ChargingMode": "PerPersonPerTimeUnit",
            "PostingMode": "Once",
            "Options": {
                "BillAsPackage": false
            },
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false,
                "DuringCheckOut": false
            },
            "Classifications": {
                "Food": false,
                "Beverage": false,
                "Wellness": false,
                "CityTax": false
            },
            "UnitAmount": {
                "GrossValue": 25,
                "Currency": "EUR",
                "TaxValues": [
                    {
                        "Code": "FR-T"
                    }
                ]
            },
            "ExternalIdentifier": "PROD-BFST-009"
        }
    ],
    "CustomerProducts" : [
        {
            "Id": "198bc308-c1f2-4a1c-a827-c41d99d52f3d",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "CategoryId": null,
            "AccountingCategoryId": "6535e19e-1077-49d9-a338-67bf4ffecb14",
            "IsActive": true,
            "Name": "Breakfast",
            "ExternalName": "Breakfast",
            "ShortName": "BFST",
            "Description": "Nice continental breakfast.",
            "ChargingMode": "PerPersonPerTimeUnit",
            "PostingMode": "Once",
            "Options": {
                "BillAsPackage": false
            },
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false,
                "DuringCheckOut": false
            },
            "Classifications": {
                "Food": false,
                "Beverage": false,
                "Wellness": false,
                "CityTax": false
            },
            "UnitAmount": {
                "GrossValue": 25,
                "Currency": "EUR",
                "TaxValues": [
                    {
                        "Code": "FR-T"
                    }
                ]
            },
            "ExternalIdentifier": "PROD-BFST-009"
        }
    ],
    "Cursor" : "198bc308-c1f2-4a1c-a827-c41d99d52f3d"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Products` | array of [Product](#product) | required | Products offered with the service. |
| `CustomerProducts` | array of [Product](#product) | required | Products offered specifically to customers. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest product returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older products.

#### Product

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `CategoryId` | string | optional | Unique identifier of the Product category. |
| `AccountingCategoryId` | string | optional | Unique identifier of [Accounting Category](accountingcategories.md#accounting-category). |
| `IsActive` | boolean | required | Whether the product is still active. |
| `Name` | string | required | Name of the product.  |
| `ExternalName` | string | required | Name of the product meant to be displayed to customer. |
| `ShortName` | string | required | Short name of the product. |
| `Description` | string | optional | Description of the product. |
| `ChargingMode` | string [Product charging mode](#product-charging-mode) | required | Charging mode of the product. |
| `PostingMode` | string [Product posting mode](#product-posting-mode) | required | Posting mode of the product. |
| `Options` | [Product options](#product-options) | required | Options of the product. |
| `Promotions` | [Promotions](services.md#promotions) | required | Promotions of the service. |
| `Classifications` | [Product classifications](#product-classifications) | required | Classifications of the service. |
| `UnitAmount` | [Amount value](accountingitems.md#amount-value) | required | Unit amount representing price of the product. |
| `ExternalIdentifier` | string | optional, max 255 characters | External identifier of the product from external system. |

#### Product charging mode

* `Once`
* `PerTimeUnit`
* `PerPersonPerTimeUnit`
* `PerPerson`

#### Product posting mode

* `Once`
* `PerTimeUnit`

#### Product options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillAsPackage` | boolean | required | Product should be displayed as part of a package. |

#### Product classifications

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Food` | boolean | required | Product is classified as food. |
| `Beverage` | boolean | required | Product is classified as beverage. |
| `Wellness` | boolean | required | Product is classified as wellness. |
| `CityTax` | boolean | required | Product is classified as city tax. |
