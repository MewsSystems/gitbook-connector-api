# Order items

## Get all order items

Returns all order items. At least one of the &#x60;OrderItemIds&#x60;, &#x60;ServiceOrderIds&#x60;, &#x60;ServiceIds&#x60; &#x60;BillIds&#x60;, &#x60;CreatedUtc&#x60;, &#x60;UpdatedUtc&#x60;, &#x60;ChargedUtc&#x60;, &#x60;ClosedUtc&#x60; filters must be specified in the request. Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/orderItems/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "OrderItemIds": [
    "3e982ab5-6245-4c39-80af-1118d40e7494",
    "bd11dc4a-8f9e-442b-bb1e-f5361b31dfa2"
  ],
  "ServiceOrderIds": [
    "ac5ef5eb-c5b2-4083-879f-83f04a5ebda5",
    "5d603823-b40a-43a4-8244-d5d2b515deb5"
  ],
  "ServiceIds": [
    "294c7859-63ba-46ad-a8bf-34fad2019383",
    "05089c0c-5d55-4756-827b-c4bcee1edf00"
  ],
  "BillIds": [
    "d27ffe99-ff92-4afb-ac03-9268f24f0556",
    "297de6f8-bd67-4ebd-98b6-ecc1cd8f920c"
  ],
  "CreatedUtc": {
    "StartUtc": "2023-03-01T00:00:00Z",
    "EndUtc": "2023-03-31T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2023-03-01T00:00:00Z",
    "EndUtc": "2023-03-31T00:00:00Z"
  },
  "ConsumedUtc": {
    "StartUtc": "2023-03-01T00:00:00Z",
    "EndUtc": "2023-03-31T00:00:00Z"
  },
  "CanceledUtc": {
    "StartUtc": "2023-03-01T00:00:00Z",
    "EndUtc": "2023-03-31T00:00:00Z"
  },
  "ClosedUtc": {
    "StartUtc": "2023-03-01T00:00:00Z",
    "EndUtc": "2023-03-31T00:00:00Z"
  },
  "AccountingStates": [
    "Open",
    "Closed"
  ],
  "Types": [
    "CityTax",
    "SpaceOrder"
  ],
  "Currency": "EUR",
  "Limitation": {
    "Count": 10,
    "Cursor": null
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns the order items for all enterprises within scope of the Access Token. |
| `OrderItemIds` | array of string | optional, max 1000 items | Unique identifiers of the [Order items](https://mews-systems.gitbook.io/connector-api/operations/orderitems/#order-item). Required if no other filter is provided. |
| `ServiceOrderIds` | array of string | optional, max 1000 items | Unique identifiers of the service orders ([product service orders](https://mews-systems.gitbook.io/connector-api/operations/productserviceorders/#product-service-order) or [reservations](https://mews-systems.gitbook.io/connector-api/operations/reservations/#reservation-ver-2023-06-06)). Required if no other filter is provided. |
| `ServiceIds` | array of string | optional, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service). Required if no other filter is provided. |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the [Bills](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) to which order item is assigned. Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ConsumedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CanceledUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `Currency` | string | optional | ISO-4217 code of the [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency) the item costs should be converted to. |
| `AccountingStates` | array of [AccountingState](#X-Ref-Name-AccountingState) | optional, max 1000 items | Accounting state of the item. |
| `Types` | array of [OrderItemType](#X-Ref-Name-OrderItemType) | optional, max 1000 items | Order item type, e.g. whether product order or space order. |

#### AccountingState

- `Open`
- `Closed`
- `Inactive`
- `Canceled`

#### OrderItemType

- `CancellationFee`
- `NightRebate`
- `ProductOrderRebate`
- `AdditionalExpenseRebate`
- `Deposit`
- `ExchangeRateDifference`
- `CustomItem`
- `ServiceCharge`
- `CityTax`
- `CityTaxDiscount`
- `SpaceOrder`
- `ProductOrder`
- `Surcharge`
- `TaxCorrection`
- `ResourceUpgradeFee`
- `InvoiceFee`

### Response

```javascript
{
  "OrderItems": [
    {
      "Id": "53896156-f25b-4949-b55b-afd3007b1146",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "c173bb22-6ff8-4ffd-875f-afb900c92865",
      "AccountType": "Customer",
      "Notes": "Additional note",
      "ServiceId": "294c7859-63ba-46ad-a8bf-34fad2019383",
      "ServiceOrderId": "ac5ef5eb-c5b2-4083-879f-83f04a5ebda5",
      "BillId": "d27ffe99-ff92-4afb-ac03-9268f24f0556",
      "AccountingCategoryId": "c0610937-0165-4091-a79c-44eb34173daf",
      "UnitCount": 1,
      "UnitAmount": {
        "Currency": "EUR",
        "NetValue": 5,
        "GrossValue": 5,
        "TaxValues": [
          {
            "Code": "DE-2020-1-Z",
            "Value": 0
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "DE-2020-1-Z",
              "NetValue": 5,
              "TaxValue": 0
            }
          ]
        }
      },
      "Amount": {
        "Currency": "EUR",
        "NetValue": 5,
        "GrossValue": 5,
        "TaxValues": [
          {
            "Code": "DE-2020-1-Z",
            "Value": 0
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "DE-2020-1-Z",
              "NetValue": 5,
              "TaxValue": 0
            }
          ]
        }
      },
      "OriginalAmount": {
        "Currency": "EUR",
        "NetValue": 5,
        "GrossValue": 5,
        "TaxValues": [
          {
            "Code": "DE-2020-1-Z",
            "Value": 0
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "DE-2020-1-Z",
              "NetValue": 5,
              "TaxValue": 0
            }
          ]
        }
      },
      "RevenueType": "Additional",
      "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "UpdaterProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "CreatedUtc": "2023-03-28T07:28:04Z",
      "UpdatedUtc": "2023-03-28T07:28:04Z",
      "ConsumedUtc": "2023-03-31T00:00:00Z",
      "CanceledUtc": null,
      "ClosedUtc": null,
      "StartUtc": "2023-03-30T22:00:00Z",
      "AccountingState": "Open",
      "Type": "CityTax",
      "Options": {
        "CanceledWithReservation": false
      },
      "Data": null
    },
    {
      "Id": "bd11dc4a-8f9e-442b-bb1e-f5361b31dfa2",
      "EnterpriseId": "4d0201db-36f5-428b-8d11-4f0a65e960cc",
      "AccountId": "c173bb22-6ff8-4ffd-875f-afb900c92865",
      "AccountType": "Company",
      "Notes": "Additional note",
      "ServiceId": "05089c0c-5d55-4756-827b-c4bcee1edf00",
      "ServiceOrderId": "dd01a673-ee6e-4f10-9c93-afcd00759ddd",
      "BillId": "297de6f8-bd67-4ebd-98b6-ecc1cd8f920c",
      "AccountingCategoryId": "c5819fe7-d67c-4c24-b02e-6ce84a1d3b1d",
      "UnitCount": 1,
      "UnitAmount": {
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
      "Amount": {
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
      "OriginalAmount": {
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
      "RevenueType": "Service",
      "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "UpdaterProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "CreatedUtc": "2023-03-28T07:28:01Z",
      "UpdatedUtc": "2023-03-28T07:28:04Z",
      "ConsumedUtc": "2023-03-31T00:00:00Z",
      "CanceledUtc": null,
      "ClosedUtc": null,
      "StartUtc": "2023-03-30T22:00:00Z",
      "AccountingState": "Open",
      "Type": "SpaceOrder",
      "Options": {
        "CanceledWithReservation": false
      },
      "Data": {
        "Discriminator": "Product",
        "Rebate": null,
        "Product": {
          "ProductId": "8c8dbd02-f2e2-4845-b964-afb900c8f919",
          "AgeCategoryId": null
        }
      }
    }
  ],
  "Cursor": "d98c9611-0006-4691-a835-af2e00b170c4"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderItems` | array of [Order item](#OrderItem) | required, max 1000 items | Set of requested order items. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest order item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older order items. |

#### Order item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the order item. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `AccountId` | string | optional | Unique identifier of the account (for example [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer)) the order item belongs to. |
| `AccountType` | string | optional | A discriminator specifying the [type of account](https://mews-systems.gitbook.io/connector-api/operations/accounts/#account-type), e.g. customer or company. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) the order item is assigned to. |
| `ServiceOrderId` | string | required | Unique identifier of the [Service order](https://mews-systems.gitbook.io/connector-api/operations/serviceorders/#service-order) the order item is assigned to. |
| `Notes` | string | optional | Additional notes. |
| `BillId` | string | optional | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) the order item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category) the order item belongs to. |
| `UnitCount` | integer | required | Unit count of item, i.e. the number of sub-items or units, if applicable. |
| `UnitAmount` | object | required | Value of the preauthorization. |
| `Amount` | object | required | Value of the preauthorization. |
| `OriginalAmount` | object | required | Value of the preauthorization. |
| `RevenueType` | string | optional | Revenue type of the item. |
| `CreatorProfileId` | string | required | Unique identifier of the user who created the order item. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who updated the order item. |
| `CreatedUtc` | string | optional | Creation date and time of the order item created in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | optional | Last update date and time of the order item in UTC timezone in ISO 8601 format. |
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `CanceledUtc` | string | optional |  |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `StartUtc` | string | optional | Start of the order item in UTC timezone in ISO 8601 format. |
| `ClaimedUtc` | string | optional |  |
| `AccountingState` | string | optional | Accounting state of the order item. |
| `Type` | string | optional | Order item type, e.g. whether product order or space order. |
| `Options` | object | required | Options of the order item. |
| `Data` | object | required | Additional order item data. |

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

#### OrderItemOptions
Options of the order item.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CanceledWithReservation` | boolean | required |  |

#### OrderItemData
Additional order item data.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [OrderItemDataDiscriminator](#X-Ref-Name-OrderItemDataDiscriminator) | required |  |
| `Rebate` | object | required |  |
| `Product` | object | required |  |

#### OrderItemDataDiscriminator

- `Rebate`
- `Product`

#### OrderItemRebateData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RebatedItemId` | string | optional |  |

#### OrderItemProductData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | optional |  |
| `AgeCategoryId` | string | optional |  |
