<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Order items

## Get all order items

Returns all order items. At least one of the `OrderItemIds`, `ServiceOrderIds`, `ServiceIds`, `BillIds`, `CreatedUtc`, `UpdatedUtc`, `ClosedUtc` filters must be specified in the request. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `OrderItemIds` | array of string | optional, max 1000 items | Unique identifiers of the [Order items](orderitems.md#order-item). Required if no other filter is provided. |
| `AccountIds` | array of string | optional, max 100 items | Unique identifiers of specific `Accounts` to which the order items belong to. Required if no other filter is provided. |
| `ServiceOrderIds` | array of string | optional, max 1000 items | Unique identifiers of the service orders ([product service orders](productserviceorders.md#product-service-order) or [reservations](reservations.md#reservation-ver-2023-06-06)). Required if no other filter is provided. |
| `ServiceIds` | array of string | optional, max 1000 items | Unique identifiers of the [Services](services.md#service). Required if no other filter is provided. |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the [Bills](bills.md#bill) to which order item is assigned. Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderitems.md#order-item) was created. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderitems.md#order-item) was updated. Required if no other filter is provided. |
| `ConsumedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderitems.md#order-item) was consumed. Required if no other filter is provided. |
| `CanceledUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderitems.md#order-item) was canceled. Required if no other filter is provided. |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderitems.md#order-item) was closed. Required if no other filter is provided. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](currencies.md#currency) the item costs should be converted to. |
| `AccountingStates` | array of [Order item accounting state](orderitems.md#order-item-accounting-state) | optional, max 1000 items | Accounting state of the item. |
| `Types` | array of [Order item type](orderitems.md#order-item-type) | optional, max 1000 items | Order item type, e.g. whether product order or space order. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

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
| `OrderItems` | array of [Order item](orderitems.md#order-item) | required, max 1000 items | Set of requested order items. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest order item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older order items. |

#### Order item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the order item. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `AccountId` | string | optional | Unique identifier of the account (for example [Customer](customers.md#customer)) the order item belongs to. |
| `AccountType` | [Account type](accounts.md#account-type) | optional | A discriminator specifying the [type of account](accounts.md#account-type), e.g. customer or company. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) the order item is assigned to. |
| `ServiceOrderId` | string | required | Unique identifier of the [Service order](serviceorders.md#service-order) the order item is assigned to. |
| `Notes` | string | optional | Additional notes. |
| `BillId` | string | optional | Unique identifier of the [Bill](bills.md#bill) the order item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](accountingcategories.md#accounting-category) the order item belongs to. |
| `BillingName` | string | optional | Name of the order item for billing purposes. |
| `ExternalIdentifier` | string | optional | Identifier of the entity from external system. |
| `UnitCount` | integer | required | Unit count of item, i.e. the number of sub-items or units, if applicable. |
| `UnitAmount` | [Amount](_objects.md#amount) | required | Unit amount of item, i.e. the amount of each individual sub-item or unit, if applicable. |
| `Amount` | [Amount](_objects.md#amount) | required | Amount of item; note a negative amount represents a rebate or payment. |
| `OriginalAmount` | [Amount](_objects.md#amount) | required | Order item's original amount. Negative amount represents either rebate or a payment. Contains the earliest known value in conversion chain. |
| `RevenueType` | [Revenue type](orderitems.md#revenue-type) | required | Revenue type of the item. |
| `CreatorProfileId` | string | required | Unique identifier of the user who created the order item. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who updated the order item. |
| `CreatedUtc` | string | required | Creation date and time of the order item created in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the order item in UTC timezone in ISO 8601 format. |
| `ConsumedUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `CanceledUtc` | string | optional | Cancellation date and time of the order item in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `StartUtc` | string | optional | Start of the order item in UTC timezone in ISO 8601 format. |
| `ClaimedUtc` | string | optional | Date and time when the order item was claimed in UTC timezone in ISO 8601 format. |
| `AccountingState` | [Order item accounting state](orderitems.md#order-item-accounting-state) | required | Accounting state of the order item. |
| `Type` | [Order item type](orderitems.md#order-item-type) | required | Order item type, e.g. whether product order or space order. |
| `Options` | [Order item options](orderitems.md#order-item-options) | required | Options of the order item. |
| `Data` | [Order item data](orderitems.md#order-item-data) | optional | Additional order item data. |
| `TaxExemptionReason` | [Tax exemption reason type](orderitems.md#tax-exemption-reason-type) | optional | Specifies the reason an order item is exempt from tax. |
| `TaxExemptionLegalReference` | string | optional | Legal reference that states why this order item is exempt from tax. |

#### Revenue type

* `Service`
* `Product`
* `Additional`

#### Order item accounting state

* `Open` - Order items which carry a non-zero value, are open, and have not been closed on a bill or invoice.
* `Closed` - Order items which carry a non-zero value and have been closed on a bill or invoice.
* `Inactive` - Order items which are either of zero value and have not been canceled, if the state of the payment item is Pending or Failed, or items of optional reservations. Until the reservation is confirmed, all its accounting items are Inactive.
* `Canceled` - Order items which have been canceled, regardless of whether the item is of zero value.

#### Order item type

* `CancellationFee`
* `NightRebate`
* `ProductOrderRebate`
* `AdditionalExpenseRebate`
* `Deposit`
* `ExchangeRateDifference`
* `CustomItem`
* `ServiceCharge`
* `CityTax`
* `CityTaxDiscount`
* `SpaceOrder`
* `ProductOrder`
* `Surcharge`
* `TaxCorrection`
* `ResourceUpgradeFee`
* `InvoiceFee`
* `MulticurrencyFee`
* `AllowanceDiscount`
* `AllowanceBreakage`
* `AllowanceContraBreakage`

#### Order item options
Options of the order item.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CanceledWithReservation` | boolean | required | Order item was canceled with reservation cancellation. |

#### Order item data
Additional order item data.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Order item data discriminator](orderitems.md#order-item-data-discriminator) | required | Discriminator pointing to the fields within this object that contains additional data. |
| `Rebate` | [Rebate data](orderitems.md#rebate-data) | optional | Contains additional data in the case of rebate item. |
| `Product` | [Product data](orderitems.md#product-data) | optional | Contains additional data in the case of product item. |
| `AllowanceDiscount` | [Allowance discount data](orderitems.md#allowance-discount-data) | optional | Contains additional data in the case of allowance discount item. |
| `AllowanceProfits` | [Allowance profits data](orderitems.md#allowance-profits-data) | optional | Contains additional data in the case of allowance profits item. |

#### Order item data discriminator

* `Rebate` - Rebate.
* `Product` - Product.
* `AllowanceDiscount` - Allowance discount.
* `AllowanceProfits` - Allowance profits.

#### Rebate data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required | Unique identifier of the [Product](products.md#product) of the original rebated [Order item](orderitems.md#order-item). |
| `RebatedItemId` | string | required | Unique identifier of [Order item](orderitems.md#order-item) which has been rebated by current item. |

#### Product data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required | Unique identifier of the [Product](products.md#product). |
| `AgeCategoryId` | string | optional | Unique identifier of the [Age Category](agecategories.md#age-category). |
| `ProductType` | [Product type](orderitems.md#product-type) | optional | Type of Product, e.g. whether allowance or product. |

#### Product type

* `Product`
* `Allowance`

#### Allowance discount data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DiscountedOrderItemId` | string | required | Unique identifier of [Order item](orderitems.md#order-item) which has been discounted by current item. |
| `AllowanceProductOrderItemId` | string | required | Unique identifier of the allowance product [Order item](orderitems.md#order-item) which credit has been consumed by current item. |

#### Allowance profits data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AllowanceProductOrderItemId` | string | required | Unique identifier of the allowance product [Order item](orderitems.md#order-item) which credit has been consumed by current item. |
| `AllowanceProfitType` | [Allowance profit type](orderitems.md#allowance-profit-type) | required | Type of allowance profit. |

#### Allowance profit type

* `AllowanceBreakage` - Profit of the allowance product.
* `AllowanceContraBreakage` - Accounting balance for profit of the allowance product.
* `AllowanceLoss` - Loss of the allowance product.
* `AllowanceContraLoss` - Accounting balance for loss of the allowance product.

#### Tax exemption reason type

* `Unknown` - Unknown tax exemption reason
* `IT_N1` - N1 - Escluse ex art.15
* `IT_N2_2` - N2.2 - Non soggette – altri casi
* `IT_N3_5` - N3.5 - Non imponibili – a seguito di dichiarazioni d’intento
* `IT_N4` - N4 - Esenti
* `IT_N5` - N5 - Regime del margine / IVA non esposta in fattura
* `PL_ZW` - ZW - Zwolniony
* `PL_NP` - NP - Nie podlega
* `DE_NATO` - NATO-ZAbk - Umsatzsteuerbefreiung gemäß Artikel 67(3) NATO-Zusatzabkommen

## Cancel order items

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Cancels all order items with specified identifiers. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/orderItems/cancel`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "OrderItemIds": [
    "f5c6b7a8-9d4f-4e2a-8a3b-2f3b8b9e6a1f",
    "a6b7c8d9-0e1f-4d2a-9b3c-5d6e7f8a9b0c"
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
| `OrderItemIds` | array of string | required, max 10 items | Unique identifiers of the `OrderItems` to cancel. |

### Response

```javascript
{}
```
