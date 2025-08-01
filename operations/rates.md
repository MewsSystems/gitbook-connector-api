<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Rates

## Get all rates

Returns all rates (pricing setups) of the default service provided by the enterprise. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Extent` | [Rate extent](rates.md#rate-extent) | optional | Extent of data to be returned. If not specified, both `Rates` and `RateGroups` will be included. |
| `RateIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Rates](rates.md#rate). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which `Rate` was updated. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service) from which the rates are requested. |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of [Rate](rates.md#rate) from external systems. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted, or both types of record. If not specified, both active and deleted will be returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

#### Rate extent
Extent of data to be returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Rates` | boolean | optional | Whether the response should contain rates. |
| `AvailabilityBlockAssignments` | boolean | required | Whether the response should contain availability block assignments. |
| ~~`RateGroups`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain rate groups.~~ **Deprecated!** Use `rateGroups/getAll`|

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
| `Rates` | array of [Rate](rates.md#rate) | required, max 1000 items | Rates of the default service. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |
| ~~`RateGroups`~~ | ~~array of [Rate group (ver 2017-04-12)](rates.md#rate-group-ver-2017-04-12)~~ | ~~required, max 1000 items~~ | ~~Rate groups of the default service.~~ **Deprecated!** Use [rateGroups/getAll](rategroups.md#request).|
| ~~`RateRestrictions`~~ | ~~[Rate restriction result](rates.md#rate-restriction-result)~~ | ~~required~~ | **Deprecated!** Use [restrictions/getAll](restrictions.md#request).|

#### Rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of `Rate Group` where the rate belongs. |
| `ServiceId` | string | required | Unique identifier of the `Service`. |
| `BaseRateId` | string | optional | Unique identifier of the base `Rate`. |
| `IsBaseRate` | boolean | required | Indicates if this is a base rate. |
| `BusinessSegmentId` | string | optional | Unique identifier of the `Business Segment`. |
| `IsActive` | boolean | required | Indicates if this rate is active. |
| `IsEnabled` | boolean | required | Indicates if this rate is currently available to customers. |
| `IsPublic` | boolean | required | Indicates if this rate is publicly available. |
| `IsDefault` | boolean | required | Indicates if this rate is the default rate for the service. Assigned automatically to the first rate of a service. |
| `Type` | [Rate type](rates.md#rate-type) | required | Type of the rate. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name. |
| `ShortName` | string | optional | Short name of the rate (in the default language). |
| `UpdatedUtc` | string | required | Interval in which the rates were updated. |
| `ExternalNames` | [Localized text](_objects.md#localized-text) | optional | All translations of the external name of the rate. |
| `Description` | [Localized text](_objects.md#localized-text) | optional | All translations of the description of the rate. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the rate from external system. |
| `TaxExemptionReason` | [Tax exemption reason type](orderitems.md#tax-exemption-reason-type) | optional | Specifies the reason a rate is exempt from tax. |
| `TaxExemptionLegalReference` | string | optional | Legal reference that states why this rate is exempt from tax. |
| ~~`Name`~~ | ~~string~~ | ~~optional~~ | ~~Name of the rate (in the default language).~~ **Deprecated!** Use `Names` instead|

#### Rate type

* `Public`
* `Private`
* `AvailabilityBlock`

#### Rate group (ver 2017-04-12)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate group. |
| `ServiceId` | string | required | Unique identifier of the Service that the rate group belongs to. |
| `IsActive` | boolean | required | Whether the rate group is still active. |
| `Name` | string | optional | Name of the rate group. |
| `ExternalIdentifier` | string | optional, max length 255 characters | External identifier of the rate group. |

#### Rate restriction result

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DateRestrictions` | array of [Date restriction](rates.md#date-restriction) | required | Date restrictions for the rate. |
| `EarlinessRestrictions` | array of [Earliness restriction](rates.md#earliness-restriction) | required | Earliness restrictions for the rates that are only available up to before arrival. |
| `LengthRestrictions` | array of [Length restriction](rates.md#length-restriction) | required | Length restrictions for the rate. |

#### Date restriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate restriction. |
| `RateId` | string | required | Unique identifier of the rate. |
| `IsInherited` | boolean | required | Whether the rate restriction is inherited from the parent rate. |
| `StartUtc` | string | optional | Start of the rate restriction in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the rate restriction in UTC timezone in ISO 8601 format. |
| `Days` | array of string | optional | The restricted days of week. |
| `ExternalIdentifier` | string | optional | Identifiers of from external systems. |

#### Earliness restriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate restriction. |
| `RateId` | string | required | Unique identifier of the rate. |
| `IsInherited` | boolean | required | Whether the rate restriction is inherited from the parent rate. |
| `StartUtc` | string | optional | Start of the rate restriction in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the rate restriction in UTC timezone in ISO 8601 format. |
| `Days` | array of string | optional | The restricted days of week. |
| `ExternalIdentifier` | string | optional | Identifiers of from external systems. |
| `MinAdvance` | string | optional | The minimum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MaxAdvance` | string | optional | The maximum time before the reservation starts, you can reserve in ISO 8601 duration format. |

#### Length restriction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate restriction. |
| `RateId` | string | required | Unique identifier of the rate. |
| `IsInherited` | boolean | required | Whether the rate restriction is inherited from the parent rate. |
| `StartUtc` | string | optional | Start of the rate restriction in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the rate restriction in UTC timezone in ISO 8601 format. |
| `Days` | array of string | optional | The restricted days of week. |
| `ExternalIdentifier` | string | optional | Identifiers of from external systems. |
| `MinLength` | string | optional | Minimal reservation length in ISO 8601 duration format. |
| `MaxLength` | string | optional | Maximal reservation length in ISO 8601 duration format. |

## Get rate pricing

Returns prices for a given rate for a specified time interval. Prices will be returned for all service time units that the specified time interval intersects. So, for example, an interval `1st Jan 23:00 UTC - 1st Jan 23:00 UTC` will result in one price for `2nd Jan`, while Interval `1st Jan 23:00 UTC - 2nd Jan 23:00 UTC` will result in two prices for `2nd Jan` and `3rd Jan` (assuming a time unit period of "Day"). UTC timestamps must correspond to the start boundary of a time unit, e.g. 00:00 converted to UTC for a time unit of "Day". Other timestamps are not permitted. The __maximum size of time interval__ depends on the service's time unit: 367 hours if hours, 367 days if days, or 60 months if months. For more information about time units, see [Time units](../concepts/time-units.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RateId` | string | required | Unique identifier of the `Rate`. |
| `ProductId` | string | optional | Unique identifier of the `Product`. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service's time unit: 367 hours if hours, 367 days if days, or 24 months if months. |

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
| `Currency` | string | required | ISO-4217 code of the [Currency](currencies.md#currency). |
| `TimeUnitStartsUtc` | array of string | required | Set of all time units covered by the time interval; expressed in UTC timezone ISO 8601 format. |
| `BaseAmountPrices` | array of [Amount](_objects.md#amount) | required | Base prices of the rates for each time unit covered by the time interval. |
| `CategoryPrices` | array of [Resource category pricing](rates.md#resource-category-pricing) | required | Resource category prices. |
| `CategoryAdjustments` | array of [Resource category adjustment](rates.md#resource-category-adjustment) | required | Resource category adjustments. |
| `AgeCategoryAdjustments` | array of [Age category adjustment](rates.md#age-category-adjustment) | required | Assigns different pricing or occupancy based on the guest's age. |
| `RelativeAdjustment` | number | required | Specific amount which shows the difference between this rate and the base rate. |
| `AbsoluteAdjustment` | number | required | Relative amount which shows the difference between this rate and the base rate. |
| `EmptyUnitAdjustment` | number | required | Price adjustment for when the resource booked with this rate is not full to capacity. |
| `ExtraUnitAdjustment` | number | required | Price adjustment for when the resource booked with this rate exceeds capacity. |
| ~~`DatesUtc`~~ | ~~array of string~~ | ~~optional~~ | **Deprecated!** Use `TimeUnitStartsUtc` instead.|
| ~~`BasePrices`~~ | ~~array of number~~ | ~~required~~ | **Deprecated!** Use `BaseAmountPrices` instead.|

#### Resource category pricing

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | required | Unique identifier of the category. |
| `AmountPrices` | array of [Amount](_objects.md#amount) | required | Prices of the rate for the resource category in the covered dates. |
| ~~`Prices`~~ | ~~array of number~~ | ~~required~~ | ~~Prices of the rate for the resource category in the covered dates.~~ **Deprecated!** Use `AmountPrices` instead.|

#### Resource category adjustment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | required | Unique identifier of the adjustment category. |
| `ParentCategoryId` | string | optional | Unique identifier of the parent category that serves as a base price for the current category. |
| `AbsoluteValue` | number | required | Absolute value of the adjustment (e.g. `50` represents 50 EUR in case the rate currency is `EUR`). |
| `RelativeValue` | number | required | Relative value of the adjustment (e.g. `0.5` represents 50% increase). |

#### Age category adjustment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required | Unique identifier of the age category. |
| `AbsoluteValue` | number | required | Absolute value of the adjustment (e.g. `50` represents 50 EUR in case the rate currency is `EUR`). |
| `Type` | [Age category adjustment type](rates.md#age-category-adjustment-type) | required | Age category adjustment type |

#### Age category adjustment type

* `ExtraOccupancyAdjustment`
* `NegativeOccupancyAdjustment`
* `StandardOccupancyAdjustment`

## Add rates

Adds rates to the enterprise. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md). Rate type of `AvailabilityBlock` cannot be created via this operation.

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `Rates` | array of [Rate parameters](rates.md#rate-parameters) | required, max 1000 items | Information about rates to be created. |

#### Rate parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string [Hybrid identifier](_objects.md#hybrid-identifier) | required | Unique identifier of the service. |
| `RateGroupId` | string [Hybrid identifier](_objects.md#hybrid-identifier) | required | Unique identifier of the rate group under which rate is assigned. |
| `IsEnabled` | boolean | optional | Whether the rate is available to customers. `false` will be used as a default when not provided. |
| `Type` | [Rate Add Type](rates.md#rate-add-type) | required | Type of the rate. |
| `AccountingCategoryId` | string | optional | Unique identifier of the accounting category the rate belongs to. |
| `BusinessSegmentId` | string | optional | Unique identifier of the business segment. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name of the rate. |
| `ShortNames` | [Localized text](_objects.md#localized-text) | optional | All translations of the short name of the rate. |
| `ExternalNames` | [Localized text](_objects.md#localized-text) | optional | All translations of the external name of the rate. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | optional | All translations of the description. |
| `PricingType` | [Rate pricing discriminator](rates.md#rate-pricing-discriminator) | required | Discriminator in which field inside `Pricing` contains additional data. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the rate from external system. |
| `Pricing` | [Rate add pricing data parameters](rates.md#rate-add-pricing-data-parameters) | optional | Contains additional data about pricing of the rate. |

#### Rate Add Type

* `Public`
* `Private`

#### Rate pricing discriminator

* `BaseRatePricing`
* `DependentRatePricing`

#### Rate add pricing data parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BaseRatePricing` | [Base rate pricing parameters (with occupancy adjustments)](rates.md#base-rate-pricing-parameters-with-occupancy-adjustments) | optional | Additional data for rates with base rate pricing. Used when `PricingType` is `BaseRatePricing`. Defaults are applied if not specified: amount is set to 10000 in default Enterprise's currency and with its default accommodation tax rate code. |
| `DependentRatePricing` | [Dependent rate pricing parameters](rates.md#dependent-rate-pricing-parameters) | optional | Additional data for rate with dependent rate pricing. Required when `PricingType` is `DependentRatePricing`. |

#### Base rate pricing parameters (with occupancy adjustments)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Amount` | [Amount parameters](_objects.md#amount-parameters) | required | Price of the product that overrides the price defined in Mews. |
| `NegativeOccupancyAdjustment` | number | required | This is the amount added to the price when occupancy of the space is less than the Space Category Capacity. To provide a discount price for under-occupancy, simply use a negative value. |
| `ExtraOccupancyAdjustment` | number | required | This is the amount added to the price when the Space Category Capacity is exceeded. |

#### Dependent rate pricing parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BaseRateId` | string [Hybrid identifier](_objects.md#hybrid-identifier) | required | Unique identifier of the base rate. |
| `RelativeAdjustment` | number | required | Relative amount which shows the difference between this rate and the base rate. |
| `AbsoluteAdjustment` | number | required | Specific amount which shows the difference between this rate and the base rate. |

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
| `Rates` | array of [Rate](rates.md#rate) | optional, max 1000 items | Rates that have been added. |

## Update rate price

Updates the prices for a given rate. You can make multiple price updates with one API call, and for each one specify the time interval for which the update applies, the price value and the applicable [resource category](resources.md#resource-category). The price will be updated for all service [time units](services.md#time-unit) that the specified time interval intersects. The price is per time unit, e.g. per day or per month. If the resource category `CategoryId` is not specified, the updated price will apply to the base price for all resource categories.
Note that prices are defined daily, so when the server receives the UTC interval, it first converts it to the enterprise timezone and updates the price on all dates that the interval intersects. Only root rates can be updated (the rates that have no base rate, that have `BaseRateId` set to `null`). It is not permitted to update historical prices older than specified by `EditableHistoryInterval`. Future prices may be updated up to 5 years in the future. The __maximum size of time interval__ is 100 time units or 2 years, whichever is the shorter amount of time.

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RateId` | string [Hybrid identifier](_objects.md#hybrid-identifier) | required | Unique identifier of the `Rate`. |
| `ProductId` | string | optional | Unique identifier of the `Product`. |
| `PriceUpdates` | array of [Rate price update](rates.md#rate-price-update) | required, max 1000 items | Price adjustments for specific time intervals. |

#### Rate price update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | optional | Unique identifier of the Resource category whose prices to update. If not specified, base price is updated. |
| `Value` | number | optional | New value of the rate on the interval. If not specified, removes all adjustments within the interval. |
| `FirstTimeUnitStartUtc` | string | optional | Start of the time interval, expressed as the timestamp for the start of the first [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | optional | End of the time interval, expressed as the timestamp for the start of the last [time unit](../concepts/time-units.md), in UTC timezone ISO 8601 format. The maximum size of time interval depends on the service's time unit: 367 hours if hours, 367 days if days, or 24 months if months. |

### Response

```javascript
{}
```

## Update rate capacity offset pricing

Updates capacity offset based pricing for specified rates. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/rates/updateCapacityOffset`

```javascript
{
  "CapacityOffsetUpdates": [
    {
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "NegativeOccupancyAdjustment": {
        "Value": 10
      },
      "ExtraOccupancyAdjustment": {
        "Value": 20
      }
    },
    {
      "RateId": "b7e6a1c2-4f3a-4e2b-9c1d-2a5e7b8c9d0f",
      "ExtraOccupancyAdjustment": {
        "Value": 15
      }
    }
  ]
}
```

Parameters for updating rate capacity offsets in an enterprise.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `CapacityOffsetUpdates` | array of [RateCapacityOffsetUpdateParameters](rates.md#ratecapacityoffsetupdateparameters) | required, max 50 items | A list of rate capacity offset updates to apply. |

#### RateCapacityOffsetUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RateId` | string | required | The unique identifier of the `Rate` to update. |
| `NegativeOccupancyAdjustment` | [Decimal update value](_objects.md#decimal-update-value) | optional | Amount added to the price when occupancy is less than the Space Category Capacity. Use a negative value to provide a discount for under-occupancy. Set to 'null' if not updated. |
| `ExtraOccupancyAdjustment` | [Decimal update value](_objects.md#decimal-update-value) | optional | Amount added to the price when the Space Category Capacity is exceeded. |

### Response

```javascript
{}
```

## Set rates

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Adds new Rates or updates existing ones if they are matched by `Id` or `ExternalIdentifier` property. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/rates/set`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "Rates": [
    {
      "Id": "e1b0bf46-32a3-4f7c-99c1-1ff78447d55d",
      "ServiceId": "956176af-e10b-4f3c-beb7-274801bce328",
      "RateGroupId": "d7adfddc-c2dc-4798-ace2-28de7b25408f",
      "IsEnabled": true,
      "Type": "Public",
      "Names": {
        "en-US": "Base rate"
      },
      "Descriptions": {
        "en-US": "Base rate with all fields specified using GUID identifiers."
      },
      "PricingType": "BaseRatePricing",
      "Pricing": {
        "BaseRatePricing": {
          "Amount": {
            "Currency": "EUR",
            "NetValue": 100
          }
        }
      }
    },
    {
      "ExternalIdentifier": "55698",
      "ServiceId": "eid:Stay",
      "RateGroupId": "eid:RG10",
      "IsEnabled": false,
      "Type": "Private",
      "Names": {
        "en-US": "Dependent rate"
      },
      "Descriptions": {
        "en-US": "Dependent rate with all field specified using eid identifiers."
      },
      "PricingType": "DependentRatePricing",
      "Pricing": {
        "DependentRatePricing": {
          "BaseRateId": "00392166-3869-4174-b491-cf0162524a38",
          "RelativeAdjustment": 0,
          "AbsoluteAdjustment": 0
        }
      }
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
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `Rates` | array of [Set rate parameters](rates.md#set-rate-parameters) | required, max 100 items | Rates to be added or updated. |

#### Set rate parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | optional | Unique identifier of the rate. If it matches an existing rate, that rate will be updated. If no match is found, an error will be returned. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Unique identifier of the rate in the external system. If `Id` is not provided and `ExternalIdentifier` matches an existing rate, the corresponding rate will be updated. If no match is found, a new rate will be created. |
| `ServiceId` | string [Hybrid identifier](_objects.md#hybrid-identifier) | required | Unique identifier of the service. Ignored in case of updating an existing rate. |
| `RateGroupId` | string [Hybrid identifier](_objects.md#hybrid-identifier) | optional | Unique identifier of the rate group under which rate is assigned. Empty value means that rate is added to a default group or the current group is kept for update, respectively. |
| `IsEnabled` | boolean | optional | Whether the rate is available to customers. `true` will be used as a default if not provided. |
| `Type` | [Rate Add Type](rates.md#rate-add-type) | required | Type of the rate. `Private` will be used as a default if not provided. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name of the rate. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | optional | All translations of the description. |
| `PricingType` | [Rate pricing discriminator](rates.md#rate-pricing-discriminator) | required | Rate pricing type. Must match existing pricing type in case of update. |
| `Pricing` | [Rate set pricing data parameters](rates.md#rate-set-pricing-data-parameters) | optional | Contains additional data about pricing of the rate. |

#### Rate set pricing data parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BaseRatePricing` | [Base rate pricing parameters (without occupancy adjustments)](rates.md#base-rate-pricing-parameters-without-occupancy-adjustments) | optional | Additional data for rates with base rate pricing. Used when `PricingType` is `BaseRatePricing`. Defaults are applied if not specified: amount is set to 10000 in default Enterprise's currency and with its default accommodation tax rate code. |
| `DependentRatePricing` | [Dependent rate pricing parameters](rates.md#dependent-rate-pricing-parameters) | optional | Additional data for rate with dependent rate pricing. Required when `PricingType` is `DependentRatePricing`. |

#### Base rate pricing parameters (without occupancy adjustments)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Amount` | [Amount parameters](_objects.md#amount-parameters) | required | Price of the product that overrides the price defined in Mews. |

### Response

```javascript
{
  "Rates": [
    {
      "Id": "e1b0bf46-32a3-4f7c-99c1-1ff78447d55d",
      "GroupId": "d7adfddc-c2dc-4798-ace2-28de7b25408f",
      "ServiceId": "956176af-e10b-4f3c-beb7-274801bce328",
      "BaseRateId": null,
      "IsBaseRate": true,
      "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
      "IsActive": true,
      "IsEnabled": true,
      "IsPublic": true,
      "IsDefault": false,
      "Type": "Public",
      "Name": null,
      "Names": {
        "en-US": "Base rate"
      },
      "ShortName": "BR",
      "UpdatedUtc": "2024-11-20T00:00:00Z",
      "ExternalNames": {
        "en-US": "External base rate"
      },
      "Description": {
        "en-US": "Base rate description."
      },
      "ExternalIdentifier": null,
      "TaxExemptionReason": null,
      "TaxExemptionLegalReference": null
    },
    {
      "Id": "8eb1f163-bce7-49ca-a62c-c9261951c85f",
      "GroupId": "d7adfddc-c2dc-4798-ace2-28de7b25408f",
      "ServiceId": "956176af-e10b-4f3c-beb7-274801bce328",
      "BaseRateId": "00392166-3869-4174-b491-cf0162524a38",
      "IsBaseRate": false,
      "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
      "IsActive": true,
      "IsEnabled": false,
      "IsPublic": false,
      "IsDefault": false,
      "Type": "Private",
      "Name": null,
      "Names": {
        "en-US": "Dependent rate"
      },
      "ShortName": "DR",
      "UpdatedUtc": "2024-11-20T00:00:00Z",
      "ExternalNames": {
        "en-US": "External dependent rate"
      },
      "Description": {
        "en-US": "Dependent rate description."
      },
      "ExternalIdentifier": "55698",
      "TaxExemptionReason": null,
      "TaxExemptionLegalReference": null
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Rates` | array of [Rate](rates.md#rate) | optional, max 1000 items | Rates that were added or updated. |

## Delete rates

Deletes specified rates. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/rates/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "RateIds": [
    "7e89ee8e-11a0-4d9d-8880-f8d8494824b5",
    "eid:BasicRate"
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `RateIds` | array [Hybrid identifier](_objects.md#hybrid-identifier) | required, max 10 items | Unique identifiers of the rates to be deleted. |

### Response

```javascript
{}
```
