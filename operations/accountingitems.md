# Accounting items

## ~~Get all accounting items~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

Use payments/getall or orderItems/getall.

### Request

`[PlatformAddress]/api/connector/v1/accountingItems/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ConsumedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "ClosedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-01-05T00:00:00Z",
    "EndUtc": "2020-01-10T00:00:00Z"
  },
  "ItemIds": [
    "cb643cb7-8b6e-48a6-b67e-ad4c0041f550",
    "44ca12b8-f009-455e-be91-ad4c013fcbc5"
  ],
  "Extent": {
    "OrderItems": true,
    "PaymentItems": true,
    "CreditCardTransactions": false
  },
  "States": [
    "Open"
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
| `StartUtc` | string | required |  |
| `EndUtc` | string | required |  |
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the accounting items, credit card transactions should be also returned. |
| `ItemIds` | array of string | optional, max 1000 items | Unique identifiers of the Accounting items. Required if no other filter is provided. |
| `RebatedItemIds` | array of string | optional, max 1000 items | Unique identifiers of the Accounting items we are finding rebates for. Required if no other filter is provided. |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ConsumedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| ~~`TimeFilter`~~ | string | optional |  |
| `Currency` | string | optional | ISO-4217 code of the [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency) the item costs should be converted to. |
| `States` | array of string | optional | States the accounting items should be in. If not specified, accounting items in Open or Closed states are returned. |

#### AccountingItemExtent
Extent of data to be returned. E.g. it is possible to specify that together with the accounting items, credit card transactions should be also returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountingItems` | boolean | required |  |
| `OrderItems` | boolean | required |  |
| `PaymentItems` | boolean | required |  |
| `CreditCardTransactions` | boolean | required |  |

### Response

```javascript
{
  "OrderItems": [
    {
      "Id": "6c2897de-620a-4f48-af1e-ada8004202bd",
      "AccountId": "182a56ee-037d-4da5-b6f8-ada8006e7d5c",
      "OrderId": "f9090129-fb49-46d2-9dc5-ad9d015d43b9",
      "BillId": "9e3791dc-95c7-439a-aa8a-ada8007de0ca",
      "AccountingCategoryId": "d250149e-a29d-4c70-b607-a1759faf7320",
      "Amount": {
        "Currency": "GBP",
        "NetValue": 95.24,
        "GrossValue": 100,
        "TaxValues": [
          {
            "Code": "UK-2020-R",
            "Value": 4.76
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "UK-2020-R",
              "NetValue": 95.24,
              "TaxValue": 4.76
            }
          ]
        }
      },
      "RevenueType": "Additional",
      "ConsumedUtc": "2021-09-19T04:00:20Z",
      "ClosedUtc": null,
      "AccountingState": "Open",
      "Data": {
        "Discriminator": "CancellationFee",
        "Value": null
      }
    }
  ],
  "PaymentItems": []
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ~~`AccountingItems`~~ | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | Updated order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](#PaymentItemOld) | optional | Updated payment items (such as cash, credit card payments or invoices). |
| `CreditCardTransactions` | array of [Credit card transaction](#CreditCardTransaction) | optional | The credit card payment transactions. |

## Update accounting items

Updates specified accounting items. You can use this operation to assign an accounting item to a different account or bill. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/accountingItems/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "AccountingItemUpdates": [
    {
      "AccountingItemId": "6c2897de-620a-4f48-af1e-ada8004202bd",
      "AccountId": {
        "Value": "182a56ee-037d-4da5-b6f8-ada8006e7d5c"
      },
      "BillId": {
        "Value": "9e3791dc-95c7-439a-aa8a-ada8007de0ca"
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
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `AccountingItemUpdates` | array of [AccountingItemUpdateParameters](#AccountingItemUpdateParameters) | required | List of requested updates. |

#### AccountingItemUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountingItemId` | string | required |  |
| `AccountId` | object | required |  |
| `BillId` | object | required |  |

### Response

```javascript
{
  "OrderItems": [
    {
      "Id": "6c2897de-620a-4f48-af1e-ada8004202bd",
      "AccountId": "182a56ee-037d-4da5-b6f8-ada8006e7d5c",
      "OrderId": "f9090129-fb49-46d2-9dc5-ad9d015d43b9",
      "BillId": "9e3791dc-95c7-439a-aa8a-ada8007de0ca",
      "AccountingCategoryId": "d250149e-a29d-4c70-b607-a1759faf7320",
      "Amount": {
        "Currency": "GBP",
        "NetValue": 95.24,
        "GrossValue": 100,
        "TaxValues": [
          {
            "Code": "UK-2020-R",
            "Value": 4.76
          }
        ],
        "Breakdown": {
          "Items": [
            {
              "TaxRateCode": "UK-2020-R",
              "NetValue": 95.24,
              "TaxValue": 4.76
            }
          ]
        }
      },
      "RevenueType": "Additional",
      "ConsumedUtc": "2021-09-19T04:00:20Z",
      "ClosedUtc": null,
      "AccountingState": "Open",
      "Data": {
        "Discriminator": "CancellationFee",
        "Value": null
      }
    }
  ],
  "PaymentItems": []
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ~~`AccountingItems`~~ | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | Updated order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](#PaymentItemOld) | optional | Updated payment items (such as cash, credit card payments or invoices). |
| `CreditCardTransactions` | array of [Credit card transaction](#CreditCardTransaction) | optional | The credit card payment transactions. |

#### AccountingItem

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `AccountId` | string | required |  |
| ~~`CustomerId`~~ | string | optional |  |
| `OrderId` | string | optional |  |
| `ServiceId` | string | optional |  |
| `ProductId` | string | optional |  |
| `BillId` | string | optional |  |
| `InvoiceId` | string | optional |  |
| `AccountingCategoryId` | string | optional |  |
| `CreditCardId` | string | optional |  |
| `Type` | string | optional |  |
| `SubType` | string | optional |  |
| `Name` | string | optional |  |
| `Notes` | string | optional |  |
| `ConsumptionUtc` | string | optional |  |
| `ClosedUtc` | string | optional |  |
| `State` | string | optional |  |
| `SubState` | string | optional |  |
| `Amount` | object | required | Price representing price of the product. |

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

#### Order item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer)) the item belongs to. |
| `OrderId` | string | required | Unique identifier of the order (or [Reservation](https://mews-systems.gitbook.io/connector-api/operations/reservations/#reservation-ver-2023-06-06) which is a special type of order) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category) the item belongs to. |
| `UnitCount` | integer | required | Unit count of item, i.e. the number of sub-items or units, if applicable. |
| `UnitAmount` | object | required | Value of the preauthorization. |
| `Amount` | object | required | Price representing price of the product. |
| `OriginalAmount` | object | required | Price representing price of the product. |
| `RevenueType` | string | optional | Revenue type of the item. |
| `CreatorProfileId` | string | required |  |
| `UpdaterProfileId` | string | required |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `CanceledUtc` | string | optional |  |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `StartUtc` | string | optional |  |
| `AccountingState` | string | optional | Accounting state of the item. |
| `Data` | object | required | Additional data specific to particular order item. |

#### Amount
Value of the preauthorization.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |

#### Data
Additional data specific to particular order item.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [OrderItemTypeOld](#X-Ref-Name-OrderItemTypeOld) | required |  |
| `value` | undefined | required |  |

#### OrderItemTypeOld

- `CancellationFee`
- `Rebate`
- `Deposit`
- `ExchangeRateDifference`
- `CustomItem`
- `Surcharge`
- `SurchargeDiscount`
- `SpaceOrder`
- `ProductOrder`
- `Other`
- `TaxCorrection`
- `ResourceUpgradeFee`
- `InvoiceFee`

#### Payment item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer)) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category) the item belongs to. |
| `Amount` | object | required | Price representing price of the product. |
| `OriginalAmount` | object | required | Price representing price of the product. |
| `AmountDefault` | object | required | Price representing price of the product. |
| `Notes` | string | optional | Additional notes. |
| `SettlementId` | string | optional | Identifier of the settled payment from the external system (ApplePay/GooglePay). |
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `AccountingState` | string | optional | Accounting state of the item. |
| `State` | string | optional | Payment state of the item. |
| `Identifier` | string | optional |  |
| `Data` | object | required | Additional data specific to particular payment item. |

#### Data
Additional data specific to particular payment item.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [PaymentType](#X-Ref-Name-PaymentType) | required |  |
| `value` | undefined | required |  |

#### PaymentType

- `CreditCard`
- `Invoice`
- `Cash`
- `Unspecified`
- `BadDebts`
- `WireTransfer`
- `ExchangeRateDifference`
- `ExchangeRoundingDifference`
- `BankCharges`
- `Cheque`
- `Other`

#### Credit card transaction

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PaymentId` | string | required | Unique identifier of the [Payment item](https://mews-systems.gitbook.io/connector-api/operations/#payment-item). |
| `SettlementId` | string | optional | Identifier of the settlement. |
| `SettledUtc` | string | optional | Settlement date and time in UTC timezone in ISO 8601 format. |
| `Fee` | object | required | Price representing price of the product. |
| `AdjustedFee` | object | required | Price representing price of the product. |
| `ChargedAmount` | object | required | Price representing price of the product. |
| `SettledAmount` | object | required | Price representing price of the product. |
