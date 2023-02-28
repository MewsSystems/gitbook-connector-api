# Rates

## Get all rates

Returns all rates \(pricing setups\) and rate groups \(condition settings\) of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/rates/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
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
    "Extent": {
        "Rates": true,
        "RateGroups": true,
        "AvailabilityBlockAssignments": true
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service) from which the rates are requested. |
| `RateIds` | array of [Rates](#rate) | optional, max 1000 items | Unique identifiers of the requested [Rates](rates.md#rate). |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Rates](rates.md#rates) were updated. |
| `Extent` | [Rate extent](#rate-extent) | required | Extent of data to be returned. |

#### Rate extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Rates` | bool | optional | Whether the response should contain rates. |
| `RateGroups` | bool | optional | Whether the response should contain rate groups. |
| `AvailabilityBlockAssignments` | bool | optional | Whether the response should contain availability block assignments. |

#### Time interval

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

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
| `Rates` | array of [Rate](#rate) | required | Rates of the default service. |
| `RateGroups` | array of [Rate group](#rate-group) | required | Rate groups of the default service. |
| `AvailabilityBlockAssignments` | array of [Availability block assignment](#availability-block-assignment) | optional | Shows which rates relate to which availability blocks. |

#### Rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](#rate-group) where the rate belongs. |
| `BaseRateId` | string | required | Unique identifier of the base [Rate](#rate). |
| `BusinessSegmentId` | string | optional | Unique identifier of the [Business segment](businesssegments.md#business-segment). |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsEnabled` | boolean | required | Whether the rate is currently available to customers. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Name` | string | required | Name of the rate. |
| `ShortName` | string | required | Short name of the rate. |
| `ExternalNames` | [Localized text](resources.md#localized-text) | required | All translations of the external name of the rate. |
| `ExternalIdentifier` | string | optional, max 255 characters | Portfolio-level rate identifier, chosen by the user for the purposes of portfolio management; called Rate Key in Mews Operations. |

#### Rate group

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the group. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `IsActive` | boolean | required | Whether the rate group is still active. |
| `Name` | string | required | Name of the rate group. |
| `ExternalIdentifier` | string | optional, max 255 characters | Portfolio-level rate group identifier, chosen by the user for the purposes of portfolio management; called Rate Group Key in Mews Operations. |

#### Availability block assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RateId` | string | required | Unique identifier of the [Rate](#rate). |
| `AvailabilityBlockId` | string | required | Unique identifier of the [Availability Block](availabilityblocks.md#availability-block). |

## Get rate pricing

Returns prices for a given rate for a specified time interval. Prices will be returned for all service [time units](services.md#time-unit) that the specified time interval intersects. So, for example, an interval `1st Jan 23:00 UTC - 1st Jan 23:00 UTC` will result in one price for `2nd Jan`, while Interval `1st Jan 23:00 UTC - 2nd Jan 23:00 UTC` will result in two prices for `2nd Jan` and `3rd Jan` (assuming a time unit period of "Day"). UTC timestamps must correspond to the start boundary of a [time unit](services.md#time-unit), e.g. 00:00 converted to UTC for a time unit of "Day". Other timestamps are not permitted. The __maximum size of time interval__ is 100 time units or 2 years, whichever is the shorter amount of time.

The price in the response is dependent on the enterprise's [pricing](configuration.md#pricing) setting. If the enterprise is set to a Gross pricing environment, then the price returned is the gross price (inclusive of tax). If the enterprise is set to a Net pricing environment, the price returned is the net price (excluding tax).

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
| `RateId` | string | required | Unique identifier of the [Rate](#rate) whose prices should be returned. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. The maximum size of time interval is 100 time units or 2 years, whichever is the shorter amount of time. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. The maximum size of time interval is 100 time units or 2 years, whichever is the shorter amount of time. |

### Response

```javascript
{
    "Currency": "EUR",
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
| `BaseAmountPrices` | array of [Amount value](accountingitems.md#amount-value) | required | Base prices of the rates for each time unit covered by the time interval. |
| `CategoryPrices` | array of [Resource category pricing](#resource-category-pricing) | required | Resource category prices. |
| `CategoryAdjustments` | array of [Resource category adjustment](#resource-category-adjustment) | required | Resource category adjustments. |
| `RelativeAdjustment` | decimal | required | Specific amount which shows the difference between this rate and the base rate. |
| `AbsoluteAdjustment` | decimal | required | Relative amount which shows the difference between this rate and the base rate. |
| `EmptyUnitAdjustment` | decimal | required | Price adjustment for when the resource booked with this rate is not full to capacity. |
| `ExtraUnitAdjustment` | decimal | required | Price adjustment for when the resource booked with this rate exceeds capacity. |

#### Resource category pricing

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | required | Unique identifier of the [Resource category](resources.md#resource-category). |
| `AmountPrices` | array of [Amount value](accountingitems.md#amount-value) | required | Prices of the rate for the resource category in the covered dates. |

#### Resource category adjustment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | required | Unique identifier of the adjustment [Resource category](resources.md#resource-category). |
| `ParentCategoryId` | string | optional | Unique identifier of the parent [Resource category](resources.md#resource-category) that serves as a base price for the current category. |
| `RelativeValue` | number | required | Relative value of the adjustment \(e.g. `0.5` represents 50% increase\). |
| `AbsoluteValue` | number | required | Absolute value of the adjustment \(e.g. `50` represents 50 EUR in case the rate currency is `EUR`\). |

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
| `RateId` | string | required | Unique identifier of the base [Rate](#rate) to update. |
| `PriceUpdates` | array of [Price update](#price-update) | required, max 1000 items | Price updates. |

#### Price update

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CategoryId` | string | optional | Unique identifier of the [Resource category](resources.md#resource-category) whose prices to update. If not specified, base price is updated. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. The maximum size of time interval is 100 time units or 2 years, whichever is the shorter amount of time. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. The maximum size of time interval is 100 time units or 2 years, whichever is the shorter amount of time. |
| `Value` | number | optional | New value of the rate on the interval. If not specified, removes all adjustments within the interval. |

### Response

```javascript
{}
```
