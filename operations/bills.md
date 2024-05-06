# Bills

## Get all bills

Returns all bills, optionally filtered by customers, identifiers and other filters. Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/).

### Request

`[PlatformAddress]/api/connector/v1/bills/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "BillIds": [
    "e654f217-d1b5-46be-a820-e93ba568dfac"
  ],
  "CustomerIds": [
    "fe795f96-0b64-445b-89ed-c032563f2bac"
  ],
  "State": "Closed",
  "ClosedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "CreatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "DueUtc": null,
  "PaidUtc": null,
  "Extent": {
    "Items": false
  },
  "Limitation": {
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
    "Count": 100
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
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. **Deprecated!** |
| ~~`TimeFilter`~~ | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `PaidUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `DueUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the [Bills](https://mews-systems.gitbook.io/connector-api/operations/#bill). Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `State` | [BillState](#X-Ref-Name-BillState) | required | [Bill state](https://mews-systems.gitbook.io/connector-api/operations/#bill-state) the bills should be in. If not specified Open and Closed bills are returned. |
| `CorrectionState` | array of [BillCorrectionStateEnum](#X-Ref-Name-BillCorrectionStateEnum) | optional |  |

#### BillExtent
Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. **Deprecated!**

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Items` | boolean | required |  |

#### BillState

- `Open`
- `Closed`

#### BillCorrectionStateEnum
Bill

CorrectiveBill

- `Bill`
- `CorrectiveBill`

### Response

```javascript
{
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "Result": {
    "Discriminator": "BillPdfFile",
    "Value": {
      "Base64Data": "JVBER....."
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#Bill) | optional | The closed bill. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest bill returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older bills. |

#### Bill

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the bill. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `AccountId` | string | required | Unique identifier of the account ([Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company)) the bill is issued to. |
| ~~`CustomerId`~~ | string | optional | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) the bill is issued to. **Deprecated!** |
| ~~`CompanyId`~~ | string | optional | Unique identifier of the [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) specified in CompanyDetails or the [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) the bill is issued to. **Deprecated!** |
| `AssociatedAccountIds` | array of string | optional | Unique identifiers of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Companies](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) that are associated to the bill. |
| `CounterId` | string | optional | Unique identifier of the bill Counter. |
| `State` | string | optional | State of the bill. |
| `Type` | string | optional | Type of the bill. |
| `Number` | string | optional | Number of the bill. |
| `VariableSymbol` | string | optional | Variable symbol of the bill. |
| `CreatedUtc` | string | optional | Date and time of the bill creation in UTC timezone in ISO 8601 format. |
| `IssuedUtc` | string | optional | Date and time of the bill issuance in UTC timezone in ISO 8601 format. |
| `TaxedUtc` | string | optional | Taxation date of the bill in UTC timezone in ISO 8601 format. |
| `PaidUtc` | string | optional | Date when the bill was paid in UTC timezone in ISO 8601 format. |
| `DueUtc` | string | optional | Bill due date and time in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | optional | Date and time when the bill was last updated, in UTC timezone in ISO 8601 format. |
| `PurchaseOrderNumber` | string | optional | Unique number of the purchase order from the buyer. |
| `Notes` | string | optional | Additional notes. |
| `Options` | object | required | Options of the bill. |
| ~~`Revenue`~~ | array of [AccountingItem](#AccountingItem) | optional |  |
| ~~`Payments`~~ | array of [AccountingItem](#AccountingItem) | optional |  |
| ~~`OrderItems`~~ | array of [Order item](#OrderItemOld) | optional | The order items (consumed items such as nights or products) on the bill. |
| ~~`PaymentItems`~~ | array of [Payment item](#PaymentItemOld) | optional | The payment items (such as cash, credit card payments or invoices) on the bill. |
| ~~`AssigneeData`~~ | object | required |  |
| `OwnerData` | object | required | Additional information about owner of the bill. Can be a [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company). Persisted at the time of closing of the bill. |
| `CompanyDetails` | object | required | Additional information about the company assigned to the bill. Not the same as the owner. Persisted at the time of closing of the bill. **Deprecated!** |
| `AssociatedAccountData` | array of [BillAccountData](#BillAccountData) | optional | Additional information about the associated account of the bill. Can be a [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company). Persisted at the time of closing of the bill. Currently only one account can be associated with a bill, but this may be extended in future. |
| `EnterpriseData` | object | required | Additional information about the enterprise issuing the bill, including bank account details. Persisted at the time of closing of the bill. |
| `CorrectionState` | [BillCorrectionStateEnum](#X-Ref-Name-BillCorrectionStateEnum) | required | 

Bill

CorrectiveBill |
| `CorrectionType` | [CorrectionType](#X-Ref-Name-CorrectionType) | required |  |
| `CorrectedBillId` | string | optional |  |

#### BillOptions
Options of the bill.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DisplayCustomer` | boolean | required |  |
| `DisplayTaxation` | boolean | required |  |
| `TrackReceivable` | boolean | required |  |
| `DisplayCid` | boolean | required |  |
| ~~`Rebated`~~ | boolean | required |  |

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

#### AssigneeData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [BillAssigneeDataDiscriminator](#X-Ref-Name-BillAssigneeDataDiscriminator) | required |  |
| `value` | undefined | required |  |

#### BillAssigneeDataDiscriminator

- `BillCustomerData`
- `BillCompanyData`

#### OwnerData
Additional information about owner of the bill. Can be a [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company). Persisted at the time of closing of the bill.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [BillAssigneeDataDiscriminator](#X-Ref-Name-BillAssigneeDataDiscriminator) | required |  |
| `value` | undefined | required |  |

#### BillCompanyData
Additional information about the company assigned to the bill. Not the same as the owner. Persisted at the time of closing of the bill. **Deprecated!**

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | optional |  |
| `Address` | object | required |  |
| `LegalIdentifiers` | object | optional |  |
| `BillingCode` | string | optional |  |
| `Name` | string | optional |  |
| `FiscalIdentifier` | string | optional |  |
| `AdditionalTaxIdentifier` | string | optional |  |

#### Address

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `SubdivisionCode` | string | optional |  |
| `CountryCode` | string | optional |  |

#### BillAccountData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [BillAssigneeDataDiscriminator](#X-Ref-Name-BillAssigneeDataDiscriminator) | required |  |
| `BillCustomerData` | object | required |  |
| `BillCompanyData` | object | required | Additional information about the company assigned to the bill. Not the same as the owner. Persisted at the time of closing of the bill. **Deprecated!** |

#### BillCustomerData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | optional |  |
| `Address` | object | required |  |
| `LegalIdentifiers` | object | optional |  |
| `BillingCode` | string | optional |  |
| `LastName` | string | optional |  |
| `FirstName` | string | optional |  |
| `SecondLastName` | string | optional |  |
| `TitlePrefix` | string | optional |  |

#### BillEnterpriseData
Additional information about the enterprise issuing the bill, including bank account details. Persisted at the time of closing of the bill.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AdditionalTaxIdentifier` | string | optional |  |
| `CompanyName` | string | optional |  |
| `BankAccount` | string | optional |  |
| `BankName` | string | optional |  |
| `Iban` | string | optional |  |
| `Bic` | string | optional |  |

#### CorrectionType

- `Cancellation`
- `Edit`
- `CreditNote`
- `Reinstatement`
- `ReceivablePaymentsBalance`

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/bills/getAllByIds`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "BillIds": [
    "e654f217-d1b5-46be-a820-e93ba568dfac"
  ],
  "CustomerIds": [
    "fe795f96-0b64-445b-89ed-c032563f2bac"
  ],
  "State": "Closed",
  "ClosedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "CreatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "DueUtc": null,
  "PaidUtc": null,
  "Extent": {
    "Items": false
  },
  "Limitation": {
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
    "Count": 100
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
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. **Deprecated!** |
| ~~`TimeFilter`~~ | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `PaidUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `DueUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the [Bills](https://mews-systems.gitbook.io/connector-api/operations/#bill). Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `State` | [BillState](#X-Ref-Name-BillState) | required | [Bill state](https://mews-systems.gitbook.io/connector-api/operations/#bill-state) the bills should be in. If not specified Open and Closed bills are returned. |
| `CorrectionState` | array of [BillCorrectionStateEnum](#X-Ref-Name-BillCorrectionStateEnum) | optional |  |

### Response

```javascript
{
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "Result": {
    "Discriminator": "BillPdfFile",
    "Value": {
      "Base64Data": "JVBER....."
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#Bill) | optional | The closed bill. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest bill returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older bills. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/bills/getAllByCustomers`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "BillIds": [
    "e654f217-d1b5-46be-a820-e93ba568dfac"
  ],
  "CustomerIds": [
    "fe795f96-0b64-445b-89ed-c032563f2bac"
  ],
  "State": "Closed",
  "ClosedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "CreatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "DueUtc": null,
  "PaidUtc": null,
  "Extent": {
    "Items": false
  },
  "Limitation": {
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
    "Count": 100
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
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. **Deprecated!** |
| ~~`TimeFilter`~~ | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `PaidUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `DueUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the [Bills](https://mews-systems.gitbook.io/connector-api/operations/#bill). Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `State` | [BillState](#X-Ref-Name-BillState) | required | [Bill state](https://mews-systems.gitbook.io/connector-api/operations/#bill-state) the bills should be in. If not specified Open and Closed bills are returned. |
| `CorrectionState` | array of [BillCorrectionStateEnum](#X-Ref-Name-BillCorrectionStateEnum) | optional |  |

### Response

```javascript
{
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "Result": {
    "Discriminator": "BillPdfFile",
    "Value": {
      "Base64Data": "JVBER....."
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#Bill) | optional | The closed bill. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest bill returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older bills. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/bills/getAllClosed`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "BillIds": [
    "e654f217-d1b5-46be-a820-e93ba568dfac"
  ],
  "CustomerIds": [
    "fe795f96-0b64-445b-89ed-c032563f2bac"
  ],
  "State": "Closed",
  "ClosedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "CreatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
  },
  "DueUtc": null,
  "PaidUtc": null,
  "Extent": {
    "Items": false
  },
  "Limitation": {
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
    "Count": 100
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
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. **Deprecated!** |
| ~~`TimeFilter`~~ | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `PaidUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `DueUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the [Bills](https://mews-systems.gitbook.io/connector-api/operations/#bill). Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `State` | [BillState](#X-Ref-Name-BillState) | required | [Bill state](https://mews-systems.gitbook.io/connector-api/operations/#bill-state) the bills should be in. If not specified Open and Closed bills are returned. |
| `CorrectionState` | array of [BillCorrectionStateEnum](#X-Ref-Name-BillCorrectionStateEnum) | optional |  |

### Response

```javascript
{
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "Result": {
    "Discriminator": "BillPdfFile",
    "Value": {
      "Base64Data": "JVBER....."
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#Bill) | optional | The closed bill. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest bill returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older bills. |

## Get bill PDF

Creates a PDF version of the specified bill. In case it&#x27;s not possible to return PDF immediately, you must retry the call later while providing the unique event identifier that is returned from the first invocation.

### Request

`[PlatformAddress]/api/connector/v1/bills/getPdf`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "BillPrintEventId": null
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
| `BillId` | string | required | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/#bill) to be printed. |
| `BillPrintEventId` | string | optional | Unique identifier of the [Bill print event](https://mews-systems.gitbook.io/connector-api/operations/#bill-print-event) returned by previous invocation. |

### Response

```javascript
{
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "Result": {
    "Discriminator": "BillPdfFile",
    "Value": {
      "Base64Data": "JVBER....."
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#Bill) | optional | The closed bill. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest bill returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older bills. |

## Add bill

Creates new empty bill assigned to specified account. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/bills/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Bills": [
    {
      "AccountId": "a5786a7b-a388-43cc-a838-abd7007b5ff7",
      "Name": "Bill of Joe Doe"
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
| `Bills` | array of [BillAddParameters](#BillAddParameters) | required, max 1000 items | Information about bills to be created. |

#### BillAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required |  |
| `Name` | string | optional |  |

### Response

```javascript
{
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "Result": {
    "Discriminator": "BillPdfFile",
    "Value": {
      "Base64Data": "JVBER....."
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#Bill) | optional | The closed bill. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest bill returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older bills. |

## Delete bill

Removes selected bills. Bill must be empty, otherwise it&#x27;s not possible to delete it. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/bills/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillIds": [
    "177966b7-f3d9-42b7-ba49-abd80057329b"
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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
| `BillIds` | array of string | required | Unique identifiers of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/#bill)s to be deleted. |

### Response

```javascript
{}
```

## Close bill

Closes a bill so no further modification to it is possible. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/bills/close`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "Receipt",
  "BillCounterId": "84b25778-c1dd-48dc-8c00-ab3a00b6df14",
  "FiscalMachineId": null,
  "Options": {
    "DisplayCustomer": {
      "Value": false
    },
    "DisplayTaxation": null
  },
  "TaxedDate": {
    "Value": "2020-07-07"
  },
  "DueDate": {
    "Value": "2020-07-14"
  },
  "VariableSymbol": {
    "Value": "5343"
  },
  "AccountTaxIdentifier": {
    "Value": "446768"
  },
  "AccountAddress": {
    "Line1": "Astronautů 2",
    "Line2": "",
    "City": "Havířov",
    "PostalCode": "736 01",
    "CountryCode": "CZ",
    "CountrySubdivisionCode": null
  },
  "PurchaseOrderNumber": {
    "Value": "XX-123"
  },
  "Notes": {
    "Value": "Bill closing note"
  },
  "AssociatedAccountData": [
    {
      "Id": "84b25778-c1dd-48dc-8c00-ab3a00b6df14",
      "TaxIdentifier": {
        "Value": "123459"
      },
      "Address": {
        "Line1": "Astronautů 2",
        "Line2": "",
        "City": "Havířov",
        "PostalCode": "736 01",
        "CountryCode": "CZ",
        "CountrySubdivisionCode": null
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
| `BillId` | string | required | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/#bill) to be closed. |
| `Type` | string | required | Specifies the mode bill should be closed in. |
| `BillCounterId` | string | optional | Unique identifier of the [Counter](https://mews-systems.gitbook.io/connector-api/operations/counters/#counter) to be used for closing. Default one is used when no value is provided. |
| `FiscalMachineId` | string | optional | Unique identifier of the [Fiscal Machine](https://mews-systems.gitbook.io/connector-api/operations/devices/#device) to be used for closing. Default one is used when no value is provided. |
| `Options` | object | required | Options of the bill. If not provided both DisplayCustomer and DisplayTaxation are set by default. |
| `SendEmail` | boolean | required |  |
| `EmailAddress` | string | optional |  |
| `TaxedDate` | object | required |  |
| `DueDate` | object | required |  |
| `VariableSymbol` | object | required |  |
| `TaxIdentifier` | object | required |  |
| `AccountTaxIdentifier` | object | required |  |
| `CompanyTaxIdentifier` | object | required |  |
| `PurchaseOrderNumber` | object | required |  |
| `Notes` | object | required |  |
| `Address` | object | required | New address details. |
| `AccountAddress` | object | required | New address details. |
| `CompanyAddress` | object | required | New address details. |
| `AssociatedAccountData` | array of [BillCloseAccountParameters](#BillCloseAccountParameters) | optional, max 1 items | Account data of the associated account on a bill. Currently one object is supported and only populated when the bill is closed. |

#### BillOptionsParameters
Options of the bill. If not provided both DisplayCustomer and DisplayTaxation are set by default.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DisplayCustomer` | object | required |  |
| `DisplayTaxation` | object | required |  |
| `TrackReceivable` | object | required |  |
| `DisplayCid` | object | required |  |

#### AddressParameters
New address details.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `CountryCode` | string | optional |  |
| `CountrySubdivisionCode` | string | optional |  |

#### BillCloseAccountParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `TaxIdentifier` | object | required |  |
| `Address` | object | required | New address details. |

### Response

```javascript
{
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "Result": {
    "Discriminator": "BillPdfFile",
    "Value": {
      "Base64Data": "JVBER....."
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#Bill) | optional | The closed bill. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest bill returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older bills. |
