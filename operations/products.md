# Products

## Get all products

Returns all products offered together with the specified services. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
    "UpdatedUtc": {
        "StartUtc": "2023-10-01T00:00:00Z",
        "EndUtc": "2023-10-31T00:00:00Z"
    },
    "Limitation": { "Count" : 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Product](#product) was updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of products returned. |

### Response

```javascript
{
    "Products": [
        {
            "Id": "198bc308-c1f2-4a1c-a827-c41d99d52f3d",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "CategoryId": null,
            "AccountingCategoryId": "6535e19e-1077-49d9-a338-67bf4ffecb14",
            "IsActive": true,
            "Names": {
                "en-US": "Breakfast"
            },
            "ExternalNames": {
                "en-US": "Breakfast"
            },
            "ShortNames": {
                "en-US": "BFST"
            },
            "Descriptions": {
                "en-US": "Nice continental breakfast."
            },
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
            "Price": {
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
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "CategoryId": null,
            "AccountingCategoryId": "6535e19e-1077-49d9-a338-67bf4ffecb14",
            "IsActive": true,
            "Names": {
                "en-US": "Breakfast"
            },
            "ExternalNames": {
                "en-US": "Breakfast"
            },
            "ShortNames": {
                "en-US": "BFST"
            },
            "Descriptions": {
                "en-US": "Nice continental breakfast."
            },
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
            "Price": {
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

## Get product pricing

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns prices for a given product for a specified time interval. UTC timestamps must correspond to the start boundary of a time unit, e.g. 00:00 converted to UTC for a time unit of "Day". Other timestamps are not permitted. The __maximum size of time interval__ depends on the service's time unit: 100 hours if hours, 100 days if days, or 24 months if months. For more information about time units, see [Time units](../concepts/time-units.md). Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/products/getPricing`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "ProductId": "6b97a38b-0043-41e0-afbd-3f083bdbc0d2",
    "FirstTimeUnitStartUtc": "2024-03-01T23:00:00.000Z",
    "LastTimeUnitStartUtc": "2024-03-03T23:00:00.000Z"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Client` | string | required | Name and version of the client application. |
| `ProductId` | string | required | Unique identifier of the [Product](#product) whose prices should be returned. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first time unit, in UTC timezone ISO 8601 format. See [Time units](../concepts/time-units.md). |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last time unit, in UTC timezone ISO 8601 format. See [Time units](../concepts/time-units.md). The maximum size of time interval depends on the service's time unit: 100 hours if hours, 100 days if days, or 24 months if months. |

### Response

```javascript
{
    "ProductId": "6b97a38b-0043-41e0-afbd-3f083bdbc0d2",
    "TimeUnitStartsUtc": [
        "2024-03-01T23:00:00Z",
        "2024-03-02T23:00:00Z",
        "2024-03-03T23:00:00Z"
    ],
    "BaseAmountPrices": [
        {
            "Currency": "EUR",
            "NetValue": 93.46,
            "GrossValue": 100.00,
            "TaxValues": [
                {
                    "Code": "DE-2020-1-L",
                    "Value": 6.54
                }
            ],
            "Breakdown": {
                "Items": [
                    {
                        "TaxRateCode": "DE-2020-1-L",
                        "NetValue": 93.46,
                        "TaxValue": 6.54
                    }
                ]
            }
        },
        {
            "Currency": "EUR",
            "NetValue": 93.46,
            "GrossValue": 100.00,
            "TaxValues": [
                {
                    "Code": "DE-2020-1-L",
                    "Value": 6.54
                }
            ],
            "Breakdown": {
                "Items": [
                    {
                        "TaxRateCode": "DE-2020-1-L",
                        "NetValue": 93.46,
                        "TaxValue": 6.54
                    }
                ]
            }
        }
    ],
    "AgeCategoryPrices": [
        {
            "AgeCategoryId": "7d9d9b11-2c96-4862-9ead-501c6a8ed114",
            "Prices": [
                {
                    "Currency": "EUR",
                    "NetValue": 93.46,
                    "GrossValue": 100.00,
                    "TaxValues": [
                        {
                            "Code": "DE-2020-1-L",
                            "Value": 6.54
                        }
                    ],
                    "Breakdown": {
                        "Items": [
                            {
                                "TaxRateCode": "DE-2020-1-L",
                                "NetValue": 93.46,
                                "TaxValue": 6.54
                            }
                        ]
                    }
                },
                {
                    "Currency": "EUR",
                    "NetValue": 93.46,
                    "GrossValue": 100.00,
                    "TaxValues": [
                        {
                            "Code": "DE-2020-1-L",
                            "Value": 6.54
                        }
                    ],
                    "Breakdown": {
                        "Items": [
                            {
                                "TaxRateCode": "DE-2020-1-L",
                                "NetValue": 93.46,
                                "TaxValue": 6.54
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required | Unique identifier of the [Product](#product). |
| `TimeUnitStartsUtc` | array of string | required | Set of all time units covered by the time interval; expressed in UTC timezone ISO 8601 format. |
| `BaseAmountPrices` | array of [Amount value](accountingitems.md#amount-value) | required | Base prices of the product for each time unit covered by the time interval. |
| `AgeCategoryPrices` | array of [Age category price](#age-category-price) | required | Age category prices. |

#### Age category price

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required | Unique identifier of the [Age category](agecategories.md#age-category). |
| `AmountPrices` | array of [Amount value](accountingitems.md#amount-value) | required | Prices of the product for the resource category in the covered dates. |

#### Product

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `CreatedUtc` | string | required | Creation date and time of the product in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the product in UTC timezone in ISO 8601 format. |
| `CategoryId` | string | optional | Unique identifier of the Product category. |
| `AccountingCategoryId` | string | optional | Unique identifier of [Accounting Category](accountingcategories.md#accounting-category). |
| `IsActive` | boolean | required | Whether the product is still active. |
| ~~`Name`~~ | ~~string~~ | ~~required~~ | ~~Name of the product.~~ **Deprecated!** Please use `Names`  |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the product name. |
| ~~`ExternalName`~~ | ~~string~~ | ~~required~~ | ~~Name of the product meant to be displayed to customer.~~ **Deprecated!** Please use `ExternalNames` |
| `ExternalNames` | [Localized text](_objects.md#localized-text) | required | All translations of the product name meant to be displayed to customer. |
| ~~`ShortName`~~ | ~~string~~ | ~~required~~ | ~~Short name of the product.~~ **Deprecated!** Please use `ShortNames` |
| `ShortNames` | [Localized text](_objects.md#localized-text) | required | All translations of the product short name. |
| ~~`Description`~~ | ~~string~~ | ~~optional~~ | ~~Description of the product.~~ **Deprecated!** Please use `Descriptions` |
| `Descriptions` | [Localized text](_objects.md#localized-text) | optional | All translations of the product description. |
| `ChargingMode` | string [Product charging mode](#product-charging-mode) | required | Charging mode of the product. |
| `PostingMode` | string [Product posting mode](#product-posting-mode) | required | Posting mode of the product. |
| `Options` | [Product options](#product-options) | required | Options of the product. |
| `Promotions` | [Promotions](services.md#promotions) | required | Promotions of the service. |
| `Classifications` | [Product classifications](#product-classifications) | required | Classifications of the service. |
| `Price` | [Amount value](accountingitems.md#amount-value) | required | Price representing price of the product. |
| `ExternalIdentifier` | string | optional, max 255 characters | Identifier of the product from external system. |

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

## Delete products

Deletes specified products. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/products/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseId": "aff75fbb-5cce-4fae-8039-b07000d16650",
    "ProductIds": [
        "1f60b9de-c042-4841-bcab-b07000d2201f"
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](enterprises.md#enterprise). Required when using a [Portfolio Access Token](../guidelines/multi-property.md), ignored otherwise. |
| `ProductIds` | array of string | required, max 1000 items | Unique identifiers of the [Products](#product) to delete. |

### Response

```javascript
{}
```