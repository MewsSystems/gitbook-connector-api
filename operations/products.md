# Products

## Get all products

Returns all products offered together with the specified services. Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `EnterpriseIds` | array of string | optional, max 1000 items |  |
| `ProductIds` | array of string | optional, max 1000 items |  |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| ~~`ServiceId`~~ | string | optional |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |

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
  "CustomerProducts": [
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
  "Cursor": "198bc308-c1f2-4a1c-a827-c41d99d52f3d"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Products` | array of [Product](#Product) | optional | Products offered with the service. |
| `CustomerProducts` | array of [Product](#Product) | optional | Products offered specifically to customers. |
| `Cursor` | string | optional |  |

#### Product

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `CategoryId` | string | optional | Unique identifier of the Product category. |
| `AccountingCategoryId` | string | optional | Unique identifier of [Accounting Category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category). |
| `IsActive` | boolean | required | Whether the product is still active. |
| `IsDefault` | boolean | required |  |
| ~~`Name`~~ | string | optional | Name of the product. **Deprecated!** Please use Names |
| `Names` | object | optional | All translations of the product name. |
| ~~`ExternalName`~~ | string | optional | Name of the product meant to be displayed to customer. **Deprecated!** Please use ExternalNames |
| `ExternalNames` | object | optional | All translations of the product name meant to be displayed to customer. |
| ~~`ShortName`~~ | string | optional | Short name of the product. **Deprecated!** Please use ShortNames |
| `ShortNames` | object | optional | All translations of the product short name. |
| ~~`Description`~~ | string | optional | Description of the product. **Deprecated!** Please use Descriptions |
| `Descriptions` | object | optional | All translations of the product description. |
| ~~`Charging`~~ | string | optional |  |
| `ChargingMode` | string | optional | Charging mode of the product. |
| ~~`Posting`~~ | string | optional |  |
| `PostingMode` | string | optional | Posting mode of the product. |
| `Options` | object | required | Options of the product. |
| `Promotions` | object | required | Promotions of the service. |
| `Classifications` | object | required | Classifications of the service. |
| `Price` | object | required | Price representing price of the product. |
| `Pricing` | object | required |  |
| `ImageIds` | array of string | optional |  |
| `Ordering` | integer | required |  |
| `ExternalIdentifier` | string | optional | Identifier of the product from external system. |
| `CreatedUtc` | string | required | Creation date and time of the product in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the product in UTC timezone in ISO 8601 format. |

#### ProductOptions
Options of the product.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillAsPackage` | boolean | required |  |

#### Promotions
Promotions of the service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BeforeCheckIn` | boolean | required |  |
| `AfterCheckIn` | boolean | required |  |
| `DuringStay` | boolean | required |  |
| `BeforeCheckOut` | boolean | required |  |
| `AfterCheckOut` | boolean | required |  |
| `DuringCheckOut` | boolean | required |  |

#### ProductClassifications
Classifications of the service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Food` | boolean | required |  |
| `Beverage` | boolean | required |  |
| `Wellness` | boolean | required |  |
| `CityTax` | boolean | required |  |

#### ExtendedAmount
Price representing price of the product.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |

#### Pricing

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [ProductPricing](#X-Ref-Name-ProductPricing) | required |  |
| `value` | undefined | required |  |

#### ProductPricing

- `Absolute`
- `Relative`

## undefined

### Request

`[PlatformAddress]/api/connector/v1/products/getPricing`

```javascript
{
  "Client": "string",
  "LanguageCode": "string",
  "CultureCode": "string",
  "AccessToken": "string",
  "ClientToken": "string",
  "Limitation": {
    "Count": 0,
    "Cursor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "ProductId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "FirstTimeUnitStartUtc": "2024-04-11T08:54:47.193Z",
  "LastTimeUnitStartUtc": "2024-04-11T08:54:47.193Z"
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
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `EnterpriseIds` | array of string | optional, max 1000 items |  |
| `ProductId` | string | required |  |
| `FirstTimeUnitStartUtc` | string | optional |  |
| `LastTimeUnitStartUtc` | string | optional |  |

### Response

```javascript
{
  "ProductId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "TimeUnitStartsUtc": [
    "string"
  ],
  "BaseAmountPrices": [
    {
      "Currency": "string",
      "NetValue": 0,
      "GrossValue": 0,
      "TaxValues": [
        {
          "Code": "string",
          "Value": 0
        }
      ],
      "Breakdown": {
        "Items": [
          {
            "TaxRateCode": "string",
            "NetValue": 0,
            "TaxValue": 0
          }
        ]
      }
    }
  ],
  "AgeCategoryPrices": [
    {
      "AgeCategoryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Prices": [
        {
          "Currency": "string",
          "NetValue": 0,
          "GrossValue": 0,
          "TaxValues": [
            {
              "Code": "string",
              "Value": 0
            }
          ],
          "Breakdown": {
            "Items": [
              {
                "TaxRateCode": "string",
                "NetValue": 0,
                "TaxValue": 0
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
| `ProductId` | string | required |  |
| `TimeUnitStartsUtc` | array of string | optional |  |
| `BaseAmountPrices` | array of [Amount](#Amount) | optional |  |
| `AgeCategoryPrices` | array of [ProductAgeCategoryPrice](#ProductAgeCategoryPrice) | optional |  |

#### Amount
Value of the preauthorization.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |

#### TaxValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Value` | number | required |  |

#### TaxBreakdown

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Items` | array of [TaxBreakdownItem](#TaxBreakdownItem) | optional |  |

#### TaxBreakdownItem

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxRateCode` | string | optional |  |
| `NetValue` | number | required |  |
| `TaxValue` | number | required |  |

#### ProductAgeCategoryPrice

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required |  |
| `Prices` | array of [Amount](#Amount) | optional |  |

## Delete products

Deletes specified products. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `ProductIds` | array of string | required, max 1000 items | Unique identifiers of the [Products](https://mews-systems.gitbook.io/connector-api/operations/#product) to delete. |

### Response

```javascript
{}
```
