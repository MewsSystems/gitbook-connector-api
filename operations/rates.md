# Rates

## Get all rates

Returns all rates (pricing setups) and rate groups (condition settings) of the default service provided by the enterprise.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/rates/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ServiceIds": [
    "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
  ],
  "RateIds": [
    "ed4b660b-19d0-434b-9360-a4de2ea42eda"
  ],
  "UpdatedUtc": {
    "StartUtc": "2022-10-15T00:00:00Z",
    "EndUtc": "2022-10-20T00:00:00Z"
  },
  "ExternalIdentifiers": [
    "Rate-001",
    "Rate-002"
  ],
  "ActivityStates": [
    "Active"
  ],
  "Extent": {
    "Rates": true,
    "RateGroups": true,
    "AvailabilityBlockAssignments": true
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
| `Extent` | object | required | Extent of data to be returned. |
| `RateIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Rates](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service) from which the rates are requested. |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of [Rate](https://mews-systems.gitbook.io/connector-api/operations/#rate) from external systems. |
| `ActivityStates` | array of [ActivityStates](#X-Ref-Name-ActivityStates) | optional | Whether to return only active, only deleted, or both types of record. If not specified, both active and deleted will be returned. |

#### RateExtent
Extent of data to be returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Rates` | boolean | required |  |
| ~~`RateGroups`~~ | boolean | required |  |
| ~~`RateRestrictions`~~ | boolean | required |  |

#### ActivityStates

- `Deleted`
- `Active`

#### ActivityStates

- `Deleted`
- `Active`

### Response

```javascript
{
  "Rates": [
    {
      "BaseRateId": null,
      "BusinessSegmentId": null,
      "GroupId": "c8b866b3-be2e-4a47-9486-034318e9f393",
      "Id": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "IsActive": true,
      "IsEnabled": true,
      "IsPublic": true,
      "Name": "Fully Flexible",
      "ShortName": "FF",
      "ExternalNames": {
        "en-US": "Long Stay Flexible Rate"
      },
      "ExternalIdentifier": "D001"
    }
  ],
  "RateGroups": [
    {
      "Id": "c8b866b3-be2e-4a47-9486-034318e9f393",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "IsActive": true,
      "Name": "Default",
      "ExternalIdentifier": "RG001"
    }
  ],
  "AvailabilityBlockAssignments": [
    {
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "AvailabilityBlockId": "12806ae8-9c15-44c7-9a44-afae01289928"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Rates` | array of [Rate](#Rate) | optional | Rates of the default service. |
| `RateGroups` | array of [RateGroupOld](#RateGroupOld) | optional | Rate groups of the default service. **Deprecated!** |
| `RateRestrictions` | object | required |  |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](https://mews-systems.gitbook.io/connector-api/operations/#rate-group) where the rate belongs. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `BaseRateId` | string | optional | Unique identifier of the base [Rate](https://mews-systems.gitbook.io/connector-api/operations/#rate). |
| `BusinessSegmentId` | string | optional | Unique identifier of the [Business segment](https://mews-systems.gitbook.io/connector-api/operations/businesssegments/#business-segment). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsEnabled` | boolean | required | Whether the rate is currently available to customers. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Type` | [RateType](#X-Ref-Name-RateType) | required | Type of the rate |
| `Name` | string | optional | Name of the rate (in the default language). |
| `ShortName` | string | optional | Short name of the rate (in the default language). |
| `UpdatedUtc` | string | required |  |
| `ExternalNames` | object | optional | All translations of the external name of the rate. |
| `Description` | object | optional | All translations of the description of the rate. |
| `ExternalIdentifier` | string | optional | Identifier of the rate from external system. |

#### RateType

- `Public`
- `Private`
- `AvailabilityBlock`

#### RateType

- `Public`
- `Private`
- `AvailabilityBlock`

#### RateGroupOld

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `ServiceId` | string | required |  |
| `IsActive` | boolean | required |  |
| `Name` | string | optional |  |
| `ExternalIdentifier` | string | optional |  |

#### RateRestrictionResult

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DateRestrictions` | array of [DateRestriction](#DateRestriction) | optional |  |
| `EarlinessRestrictions` | array of [EarlinessRestriction](#EarlinessRestriction) | optional |  |
| `LengthRestrictions` | array of [LengthRestriction](#LengthRestriction) | optional |  |

#### DateRestriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `RateId` | string | required |  |
| `IsInherited` | boolean | required |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `Days` | array of string | optional |  |
| `ExternalIdentifier` | string | optional |  |

#### EarlinessRestriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `RateId` | string | required |  |
| `IsInherited` | boolean | required |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `Days` | array of string | optional |  |
| `ExternalIdentifier` | string | optional |  |
| `MinAdvance` | string | optional |  |
| `MaxAdvance` | string | optional |  |

#### LengthRestriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `RateId` | string | required |  |
| `IsInherited` | boolean | required |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `Days` | array of string | optional |  |
| `ExternalIdentifier` | string | optional |  |
| `MinLength` | string | optional |  |
| `MaxLength` | string | optional |  |

## Get rate pricing

Returns prices for a given rate for a specified time interval. Prices will be returned for all service [time units](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit) that the specified time interval intersects. So, for example, an interval &#x60;1st Jan 23:00 UTC - 1st Jan 23:00 UTC&#x60; will result in one price for &#x60;2nd Jan&#x60;, while Interval &#x60;1st Jan 23:00 UTC - 2nd Jan 23:00 UTC&#x60; will result in two prices for &#x60;2nd Jan&#x60; and &#x60;3rd Jan&#x60; (assuming a time unit period of &quot;Day&quot;). UTC timestamps must correspond to the start boundary of a [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), e.g. 00:00 converted to UTC for a time unit of &quot;Day&quot;. Other timestamps are not permitted. The __maximum size of time interval__ depends on the service&#x27;s [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit): 367 hours if hours, 367 days if days, or 24 months if months.
The price in the response is dependent on the enterprise&#x27;s [pricing](https://mews-systems.gitbook.io/connector-api/operations/configuration/#pricing) setting. If the enterprise is set to a Gross pricing environment, then the price returned is the gross price (inclusive of tax). If the enterprise is set to a Net pricing environment, the price returned is the net price (excluding tax). Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/rates/getPricing`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
  "FirstTimeUnitStartUtc": "2022-01-01T23:00:00.000Z",
  "LastTimeUnitStartUtc": "2022-01-03T23:00:00.000Z"
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
| `FirstTimeUnitStartUtc` | string | optional | Start of the time interval, expressed as the timestamp for the start of the first [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | optional | End of the time interval, expressed as the timestamp for the start of the last [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service&#x27;s [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit): 367 hours if hours, 367 days if days, or 24 months if months. |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `RateId` | string | required | Unique identifier of the [Rate](https://mews-systems.gitbook.io/connector-api/operations/#rate) whose prices should be returned. |
| `ProductId` | string | optional |  |

### Response

```javascript
{
  "Currency": "EUR",
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
  "CategoryAdjustments": [
    {
      "AbsoluteValue": 0,
      "CategoryId": "34c29e73-c8db-4e93-b51b-981e42655e03",
      "ParentCategoryId": null,
      "RelativeValue": 0.2
    },
    {
      "AbsoluteValue": 50,
      "CategoryId": "a0a7a5c5-c4ef-494a-8b34-6cca97629076",
      "ParentCategoryId": "34c29e73-c8db-4e93-b51b-981e42655e03",
      "RelativeValue": 0
    }
  ],
  "CategoryPrices": [
    {
      "CategoryId": "e3aa3117-dff0-46b7-b49a-2c0391e70ff9",
      "AmountPrices": [
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
  ],
  "TimeUnitStartsUtc": [
    "2022-01-01T23:00:00Z",
    "2022-01-02T23:00:00Z",
    "2022-01-03T23:00:00Z"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional | ISO-4217 code of the [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency). |
| ~~`DatesUtc`~~ | array of string | optional |  |
| `TimeUnitStartsUtc` | array of string | optional | Set of all time units covered by the time interval; expressed in UTC timezone ISO 8601 format. |
| ~~`BasePrices`~~ | array of number | optional |  |
| `BaseAmountPrices` | array of [Amount](#Amount) | optional | Base prices of the rates for each time unit covered by the time interval. |
| `CategoryPrices` | array of [CategoryPricing](#CategoryPricing) | optional | Resource category prices. |
| `CategoryAdjustments` | array of [CategoryAdjustment](#CategoryAdjustment) | optional | Resource category adjustments. |
| `AgeCategoryAdjustments` | array of [AgeCategoryAdjustment](#AgeCategoryAdjustment) | optional |  |
| `RelativeAdjustment` | number | required | Specific amount which shows the difference between this rate and the base rate. |
| `AbsoluteAdjustment` | number | required | Relative amount which shows the difference between this rate and the base rate. |
| `EmptyUnitAdjustment` | number | required | Price adjustment for when the resource booked with this rate is not full to capacity. |
| `ExtraUnitAdjustment` | number | required | Price adjustment for when the resource booked with this rate exceeds capacity. |

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

#### CategoryPricing

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | required |  |
| ~~`Prices`~~ | array of number | optional |  |
| `AmountPrices` | array of [Amount](#Amount) | optional |  |

#### CategoryAdjustment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | required |  |
| `ParentCategoryId` | string | optional |  |
| `AbsoluteValue` | number | required |  |
| `RelativeValue` | number | required |  |

#### AgeCategoryAdjustment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required |  |
| `AbsoluteValue` | number | required |  |
| `Type` | [AgeCategoryAdjustmentType](#X-Ref-Name-AgeCategoryAdjustmentType) | required |  |

#### AgeCategoryAdjustmentType

- `ExtraOccupancyAdjustment`
- `NegativeOccupancyAdjustment`
- `StandardOccupancyAdjustment`

## Add rates

Adds rates to the enterprise. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/). Rate type of &#x60;AvailabilityBlock&#x60; cannot be created via this operation.

### Request

`[PlatformAddress]/api/connector/v1/rates/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Rates": [
    {
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateGroupId": "b9f25a45-9b9a-4b33-99bd-b06f008eb6f5",
      "IsEnabled": true,
      "Type": "Public",
      "AccountingCategoryId": "3620c660-a4ec-4e0f-a0bc-b06f008eb8bf",
      "Names": {
        "EN": "My rate"
      },
      "ExternalIdentifier": "D001",
      "PricingType": "DependentRatePricing",
      "Pricing": {
        "DependentRatePricing": {
          "BaseRateId": "1a1ddd3b-e106-4a70-aef1-54a75b483943",
          "RelativeAdjustment": 0.15,
          "AbsoluteAdjustment": 10
        }
      }
    }
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
| `Rates` | array of [RateAddData](#RateAddData) | required, max 1000 items | Information about rates to be created. |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |

#### RateAddData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required |  |
| `RateGroupId` | string | required |  |
| `IsEnabled` | boolean | required |  |
| `Type` | [RateType](#X-Ref-Name-RateType) | required |  |
| `AccountingCategoryId` | string | optional |  |
| `BusinessSegmentId` | string | optional |  |
| `Names` | object | optional |  |
| `ShortNames` | object | optional |  |
| `ExternalNames` | object | optional |  |
| `Descriptions` | object | optional |  |
| `PricingType` | [RatePricingDiscriminator](#X-Ref-Name-RatePricingDiscriminator) | required |  |
| `ExternalIdentifier` | string | optional |  |
| `Pricing` | object | required |  |

#### RatePricingDiscriminator

- `BaseRatePricing`
- `DependentRatePricing`

#### RatePricingDataParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BaseRatePricing` | object | required |  |
| `DependentRatePricing` | object | required |  |

#### BaseRatePricingParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Amount` | object | required | Price of the product that overrides the price defined in Mews. |
| `NegativeOccupancyAdjustment` | number | required |  |
| `ExtraOccupancyAdjustment` | number | required |  |

#### AmountParameters
Price of the product that overrides the price defined in Mews.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `TaxCodes` | array of string | required |  |
| `NetValue` | number | optional |  |
| `GrossValue` | number | optional |  |

#### DependentRatePricingParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BaseRateId` | string | required |  |
| `RelativeAdjustment` | number | required |  |
| `AbsoluteAdjustment` | number | required |  |

### Response

```javascript
{
  "Rates": [
    {
      "Id": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "GroupId": "b9f25a45-9b9a-4b33-99bd-b06f008eb6f5",
      "BaseRateId": "1a1ddd3b-e106-4a70-aef1-54a75b483943",
      "BusinessSegmentId": null,
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "IsActive": true,
      "IsEnabled": true,
      "IsPublic": true,
      "Type": "Public",
      "Name": "My rate",
      "ShortName": "FF",
      "ExternalNames": {
        "en-US": "Long Stay Flexible Rate"
      },
      "ExternalIdentifier": "D001"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Rates` | array of [Rate](#Rate) | optional | Rates that have been added. |

## Update rate price

Updates the prices for a given rate. You can make multiple price updates with one API call, and for each one specify the time interval for which the update applies, the price value and the applicable [resource category](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource-category). The price will be updated for all service [time units](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit) that the specified time interval intersects. The price is per time unit, e.g. per day or per month. If the resource category &#x60;CategoryId&#x60; is not specified, the updated price will apply to the base price for all resource categories.
Note that prices are defined daily, so when the server receives the UTC interval, it first converts it to the enterprise timezone and updates the price on all dates that the interval intersects. Only root rates can be updated (the rates that have no base rate, that have &#x60;BaseRateId&#x60; set to &#x60;null&#x60;). It is not permitted to update historical prices older than specified by &#x60;EditableHistoryInterval&#x60;. Future prices may be updated up to 5 years in the future. The __maximum size of time interval__ is 100 time units or 2 years, whichever is the shorter amount of time.

### Request

`[PlatformAddress]/api/connector/v1/rates/updatePrice`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
  "PriceUpdates": [
    {
      "FirstTimeUnitStartUtc": "2022-01-01T23:00:00.000Z",
      "LastTimeUnitStartUtc": "2022-01-03T23:00:00.000Z",
      "Value": 111
    },
    {
      "CategoryId": "e3aa3117-dff0-46b7-b49a-2c0391e70ff9",
      "FirstTimeUnitStartUtc": "2022-01-04T23:00:00.000Z",
      "LastTimeUnitStartUtc": "2022-01-05T23:00:00.000Z",
      "Value": 222
    }
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
| `FirstTimeUnitStartUtc` | string | optional |  |
| `LastTimeUnitStartUtc` | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `RateId` | string | required | Unique identifier of the base [Rate](https://mews-systems.gitbook.io/connector-api/operations/#rate) to update. |
| `ProductId` | string | optional |  |
| `PriceUpdates` | array of [RatePriceUpdate](#RatePriceUpdate) | required, max 1000 items | Price updates. |

#### RatePriceUpdate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required |  |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required |  |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required |  |
| `MaskedClientToken` | string | optional |  |
| `FirstTimeUnitStartUtc` | string | optional |  |
| `LastTimeUnitStartUtc` | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `CategoryId` | string | optional |  |
| `Value` | number | optional |  |

### Response

```javascript
{}
```
