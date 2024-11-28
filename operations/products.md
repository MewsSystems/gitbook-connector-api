<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
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
| `ProductIds` | array of string | optional, max 1000 items | Unique identifiers of the product. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the products were updated. |
| `IncludeDefault` | boolean | optional | Whether or not to include default products for the service, i.e. products which are standard includes and not true extras. For example, the night's stay would be the default product for a room reservation. These may be useful for accounting purposes but should not be displayed to customers for selection. If `ProductIds` are provided, `IncludeDefault` defaults to true, otherwise it defaults to false. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

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
| `Products` | array of [Product](products.md#product) | required | Products offered with the service. |
| `CustomerProducts` | array of [Product](products.md#product) | required | Products offered specifically to customers. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest product returned. This can be used in `Limitation` in a subsequent request to fetch the next batch of older products. |

#### Product

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `CategoryId` | string | optional | Unique identifier of the Product category. |
| `AccountingCategoryId` | string | optional | Unique identifier of [Accounting Category](accountingcategories.md#accounting-category). |
| `IsActive` | boolean | required | Whether the product is still active. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name. |
| `ExternalNames` | [Localized text](_objects.md#localized-text) | required | All translations of external name. |
| `ShortNames` | [Localized text](_objects.md#localized-text) | required | All translations of short name. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | optional | All translations of descriptions. |
| `ChargingMode` | [Product charging mode](products.md#product-charging-mode) | required | Charging mode of the product. |
| `PostingMode` | [Product posting mode](products.md#product-posting-mode) | required | Charging mode of the product. |
| `Options` | [Product options](products.md#product-options) | required | Options of the product. |
| `Promotions` | [Promotions](services.md#promotions) | required | Promotions of the product. |
| `Classifications` | [Product classifications](products.md#product-classifications) | required | Classifications of the product. |
| `Price` | [Extended amount](_objects.md#amount) | required | Price representing price of the product. |
| `ImageIds` | array of string | optional | Unique identifier of the product image. |
| `Ordering` | integer | required | Order value for presentation purposes. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the product from external system. |
| `CreatedUtc` | string | required | Creation date and time of the product in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the product in UTC timezone in ISO 8601 format. |
| `ConsumptionMoment` | [Product consumption moment](products.md#product-consumption-moment) | required | Consumption moment of the product. |
| ~~`IsDefault`~~ | ~~boolean~~ | ~~required~~ | **Deprecated!** |
| ~~`Name`~~ | ~~string~~ | ~~optional~~ | ~~Name of the product. **Deprecated!** Please use Names~~ **Deprecated!** Use `Names` instead.|
| ~~`ExternalName`~~ | ~~string~~ | ~~optional~~ | ~~Name of the product meant to be displayed to customer. **Deprecated!** Please use ExternalNames~~ **Deprecated!** Use `ExternalNames` instead.|
| ~~`ShortName`~~ | ~~string~~ | ~~optional~~ | ~~Short name of the product. **Deprecated!** Please use ShortNames~~ **Deprecated!** Use `ShortNames` instead.|
| ~~`Description`~~ | ~~string~~ | ~~optional~~ | ~~Description of the product. **Deprecated!** Please use Descriptions~~ **Deprecated!** Use `Descriptions` instead.|
| ~~`Charging`~~ | ~~[Product charging mode](products.md#product-charging-mode)~~ | ~~required~~ | **Deprecated!** |
| ~~`Posting`~~ | ~~[Product posting](products.md#product-posting)~~ | ~~required~~ | **Deprecated!** |
| ~~`Pricing`~~ | ~~[Product pricing](products.md#product-pricing)~~ | ~~required~~ | **Deprecated!** Use `Price` instead.|

#### Product charging mode

* `Once`
* `PerTimeUnit`
* `PerPersonPerTimeUnit`
* `PerPerson`

#### Product posting

* `Once`
* `Daily`

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

#### Product pricing

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Product pricing data discriminator](products.md#product-pricing-data-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on `Discriminator`. |

#### Product pricing data discriminator

* `Absolute`
* `Relative`

#### Relative product price

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ~~`Multiplier`~~ | ~~number~~ | ~~required~~ | **Deprecated!** |
| ~~`Target`~~ | ~~string~~ | ~~optional~~ | **Deprecated!** |
| ~~`TaxRateCodes`~~ | ~~array of string~~ | ~~optional~~ | **Deprecated!** |
| ~~`ProductIds`~~ | ~~array of string~~ | ~~optional~~ | **Deprecated!** |

#### Product consumption moment

* `ServiceOrderEnd`
* `ServiceOrderStart`
* `PostingTimeUnit`
* `NextTimeUnit`

## Get product pricing

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Returns prices for a given product for a specified time interval. UTC timestamps must correspond to the start boundary of a time unit, e.g. 00:00 converted to UTC for a time unit of "Day". Other timestamps are not permitted. The __maximum size of time interval__ depends on the service's time unit: 100 hours if hours, 100 days if days, or 24 months if months. For more information about time units, see [Time unit](../concepts/time-units.md). This operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/products/getPricing`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ProductId": "6b97a38b-0043-41e0-afbd-3f083bdbc0d2",
  "FirstTimeUnitStartUtc": "2024-03-01T23:00:00.000Z",
  "LastTimeUnitStartUtc": "2024-03-03T23:00:00.000Z",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ProductId` | string | required | Unique identifier of the product. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service's [time unit](../concepts/time-units.md): 100 hours if hours, 100 days if days, or 24 months if months. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |

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
      "GrossValue": 100,
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
      "GrossValue": 100,
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
          "GrossValue": 100,
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
          "GrossValue": 100,
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
| `ProductId` | string | required | Unique identifier of the product. |
| `TimeUnitStartsUtc` | array of string | required | Set of all time units covered by the time interval; expressed in UTC timezone ISO 8601 format. |
| `BaseAmountPrices` | array of [Amount](_objects.md#amount) | required | Base prices of the product for each time unit covered by the time interval. |
| `AgeCategoryPrices` | array of [Age category price](products.md#age-category-price) | required | Age category prices. |

#### Age category price

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required | Unique identifier of the age category. |
| `Prices` | array of [Amount](_objects.md#amount) | required | Prices of the product for the resource category in the covered dates. |

## Update product pricing

Updates the prices for a given product. You can make multiple price updates with one API call, and for each one specify the price amount per [Time unit](../concepts/time-units.md) and the time interval for which it applies. The price will be updated for all service time units that the specified time interval intersects. It is not permitted to update historical prices older than specified by `EditableHistoryInterval`.

### Request

`[PlatformAddress]/api/connector/v1/products/updatePrice`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ProductId": "6b97a38b-0043-41e0-afbd-3f083bdbc0d2",
  "PriceUpdates": [
    {
      "Value": 100,
      "FirstTimeUnitStartUtc": "2024-03-01T23:00:00.000Z",
      "LastTimeUnitStartUtc": "2024-03-03T23:00:00.000Z"
    },
    {
      "Value": 200,
      "FirstTimeUnitStartUtc": "2024-03-06T23:00:00.000Z",
      "LastTimeUnitStartUtc": "2024-03-08T23:00:00.000Z"
    }
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `ProductId` | string [Hybrid identifier](_objects.md#hybrid-identifier) | required | Unique identifier of the `Product`. |
| `PriceUpdates` | array of [Product price update](products.md#product-price-update) | required, max 100 items | Price adjustments for specific time intervals. |

#### Product price update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | number | optional | New value of the product on the interval. If not specified, removes all price adjustments within the interval. |
| `FirstTimeUnitStartUtc` | string | optional | Start of the time interval, expressed as the timestamp for the start of the first [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | optional | End of the time interval, expressed as the timestamp for the start of the last [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service's time unit: 367 hours if hours, 367 days if days, or 24 months if months. |

### Response

```javascript
{}
```

## Delete products

Deletes specified products. This operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `ProductIds` | array of string | required, max 1000 items | Unique identifiers of the products to delete. |

### Response

```javascript
{}
```
