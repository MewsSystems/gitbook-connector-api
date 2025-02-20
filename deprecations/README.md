# Deprecations

Deprecations are features of the API which you are discouraged from using, even though they may still be supported for a period of time for the sake of backwards compatibility. Such features are normally deprecated because they are superseded by a better alternative. They can include object properties, entire objects or entire API operations. The list of deprecations is as follows. Individual items are also highlighted in the [Changelog](../changelog/README.md) when they occur. Historic deprecations that have already been discontinued may not be listed. 

**For more information, see our [Deprecations Policy](https://mews-systems.gitbook.io/open-api/staying-up-to-date/deprecations-policy).**

> **Important:** We strongly advise you to review this list and if you are using any of the deprecated items in your integration, to update your implementation accordingly.

The table columns have the following meanings:

* __Feature__ - What entity or feature is being deprecated
* __Comments__ - Additional information, such as the reason for the deprecation and what the replacement is
* __Deprecated__ - The date at which the deprecation notice was given (see the [Changelog](../changelog/README.md))
* __Discontinued__ - The date at which it is planned to discontinue the feature completely; a value of '-' indicates no date has been set

## Migration guides

* [Migration guide: Get all reservations](migration-guide-get-reservations.md)

## Deprecated operations

| Feature | Comments | Deprecated | Discontinued |
| :-- | :-- | :-- | :-- |
| [Get customers open items](../operations/customers.md#get-customers-open-items) | Replaced by [Get all payments](payments.md#get-all-payments) and [Get all order items](orderitems.md#get-all-order-items) | 15 Nov 2024 | - |
| [Add restrictions](../operations/restrictions.md#add-restrictions) | Replaced by [Set restrictions](../operations/restrictions.md#set-restrictions) | 21 Jun 2024 | 10 Jan 2026 |
| [Delete restrictions](../operations/restrictions.md#delete-restrictions) | Replaced by  [Clear restrictions](../operations/restrictions.md#clear-restrictions) | 21 Jun 2024 | 10 Jan 2026 |
| [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12)<br>(ver 2017-04-12) | Replaced by [Get all reservations \(ver 2023-06-06\)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | 23 Jun 2023 | 10 May 2025 |
| [Get all reservation items](../operations/reservations.md#get-all-reservation-items) | Replaced by [Get all order items](../operations/orderitems.md#get-all-order-items); see [Migration guide: Get all reservations](migration-guide-get-reservations.md) | 23 Jun 2023 | 10 May 2025 |
| [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) | Replaced by [Get all payments](../operations/payments.md#get-all-payments) and [Get all order items](../operations/orderitems.md#get-all-order-items) | 19 Apr 2023 | 10 Jan 2026 |
| [Merge customers](../operations/customers.md#merge-customers) | Replaced by [Merge accounts](../operations/accounts.md#merge-accounts) | 01 Dec 2022 | 10 May 2025 |
| `Get all companies by name` | Replaced by [Get all companies](../operations/companies.md#get-all-companies) | 01 Jan 2020 | - |
| `Get all bills by Id` | Replaced by [Get all bills](../operations/bills.md#get-all-bills) | 01 Jan 2020 | - |
| `Get all bills by customer` | Replaced by [Get all bills](../operations/bills.md#get-all-bills) | 01 Jan 2020 | - |
| `Get all closed bills` | Replaced by [Get all bills](../operations/bills.md#get-all-bills) | 01 Jan 2020 | - |
| `Get all credit cards by Id` | Replaced by [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) | 01 Jan 2020 | - |
| `Get all credit cards by customer` | Replaced by [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) | 01 Jan 2020 | - |
| `Get all reservations by Id` | Replaced by [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) | 01 Jan 2020 | - |
| `Get all reservations by customer` | Replaced by [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) | 01 Jan 2020 | - |
| `Get all reservations by numbers` | Replaced by [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) | 01 Jan 2020 | - |
| `Get all customers by Ids` | Replaced by [Get all customers](../operations/customers.md#get-all-customers) | 01 Jan 2020 | - |
| `Get all customers by emails` | Replaced by [Get all customers](../operations/customers.md#get-all-customers) | 01 Jan 2020 | - |
| `Get all customers by name` | Replaced by [Get all customers](../operations/customers.md#get-all-customers) | 01 Jan 2020 | - |

## Deprecated properties

| Feature | Comments | Deprecated | Discontinued |
| :-- | :-- | :-- | :-- |
| `CustomerId`, `FullName` <br> in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) | Replaced by `AccountId` and [AccountData](../operations/commands.md#account-data-for-payment-terminal-command) | 23 Jan 2025 | 10 Jan 2027 |
| `Documents` <br>in [Get all customers](../operations/customers.md#get-all-customers) and [Search customers](../operations/customers.md#search-customers) response | Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead | 9th Jan 2025 | 10 Jan 2026 |
| Extent `Documents`<br>in [Get all customers](../operations/customers.md#get-all-customers) | Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead | 9th Jan 2025 | 10 Jan 2026 |
| `Passport`, `IdentityCard`, `Visa`, `DriversLicense` <br>in [Search customers](../operations/customers.md#customer), [Get all customers](../operations/customers.md#get-all-customers) and [Get all companionships](../operations/companionships.md#get-all-companionships) under extent `Customers` | Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead | 9th Jan 2025 | 10 Jan 2026 |
| `Passport`, `IdentityCard`, `Visa`, `DriversLicense` <br>in [Add customer](../operations/customers.md#add-customer) | Use [Add identity documents](../operations/identitydocuments.md#add-identity-documents) instead | 9th Jan 2025 | 10 Jan 2026 |
| `Passport`, `IdentityCard`, `Visa`, `DriversLicense` <br>in [Update customer](../operations/customers.md#update-customer) | Use [Update identity documents](../operations/identitydocuments.md#update-identity-documents) and [Delete identity documents](../operations/identitydocuments.md#delete-identity-documents) instead | 9th Jan 20255 | 10 Jan 2026 |
| Extent `ServiceOrders`<br>in [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) | Use [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) instead | 10 Jan 2025 | 10 Jan 2026 |
| Extent `Rates`<br>in [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) | Use [Get all rates](../operations/rates.md#get-all-rates) instead | 10 Jan Feb 2025 | 10 Jan 2026 |
| `ElectronicInvoiceIdentifier` in [Company](../operations/companies.md#company) | Replaced by `AdditionalTaxIdentifier` | 30 Aug 2024 | - |
| `Method`, `RedirectUrl`<br>in [Add alternative payment](../operations/payments.md#add-alternative-payment) | Use [Alternative payment method data](../operations/payments.md#alternative-payment-method-data) instead | 08 May 2024 | - |
| `EndUtc`<br>in [Reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | Replaced by `ScheduledEndUtc` and `ActualEndUtc` | 19 Apr 2024 | - |
| Extent `RateGroups`<br>in [Get all rates](../operations/rates.md#get-all-rates) | Use [Get all rate groups](../operations/rategroups.md#get-all-rate-groups) instead | 02 Feb 2024 | 10 Jan 2026 |
| `Name` in [Product](../operations/products.md#product) | Replaced by `Names` | 12 Dec 2023 | |
| `ExternalName` in [Product](../operations/products.md#product) | Replaced by `ExternalNames` | 12 Dec 2023 | |
| `ShortName` in [Product](../operations/products.md#product) | Replaced by `ShortNames` | 12 Dec 2023 | |
| `Description` in [Product](../operations/products.md#product) | Replaced by `Descriptions` | 12 Dec 2023 | |
| `EditableHistoryInterval` in [Get configuration](../operations/configuration.md#get-configuration) and [Get all enterprises](../operations/enterprises.md#get-all-enterprises) | Replaced by `AccountingEditableHistoryInterval` and `OperationalEditableHistoryInterval` | 05 Dec 2023 | |
| `TaxIdentifier` in [Close bill](../operations/bills.md#close-bill) | Replaced by `AccountTaxIdentifier` | 21 Nov 2023 | |
| `CompanyTaxIdentifier` in [Close bill](../operations/bills.md#close-bill) | Replaced by [AssociatedAccountData](../operations/bills.md#bill-associated-account-data) | 21 Nov 2023 | |
| `Address` in [Close bill](../operations/bills.md#close-bill) | Replaced by `AccountAddress` | 21 Nov 2023 | |
| `CompanyAddress` in [Close bill](../operations/bills.md#close-bill) | Replaced by [AssociatedAccountData](../operations/bills.md#bill-associated-account-data) | 21 Nov 2023 | |
| `CompanyId` in [Get all bills](../operations/bills.md#get-all-bills) | Replaced by `AssociatedAccountIds` | 21 Nov 2023 | |
| `CompanyDetails` in [Get all bills](../operations/bills.md#get-all-bills) | Replaced by [AssociatedAccountData](../operations/bills.md#bill-associated-account-data) | 21 Nov 2023 | |
| Extent `ResourceCategoryAssignments`<br>in [Get all resources](../operations/resources.md#get-all-resources) | Use [Get all resource category assignments](../operations/resourcecategories.md#get-all-resource-category-assignments) instead | 01 Nov 2023 | 10 Jan 2025 |
| Extent `ResourceCategoryImageAssignments`<br>in [Get all resources](../operations/resources.md#get-all-resources) | Use [Get all resource category image assignments](../operations/resourcecategories.md#get-all-resource-category-image-assignments) instead | 01 Nov 2023 | 10 Jan 2025 |
| Extent `ResourceFeatures`<br>in [Get all resources](../operations/resources.md#get-all-resources) | Use [Get all resource features](../operations/resourcefeatures.md#get-all-resource-features) instead | 01 Nov 2023 | 10 Jan 2025 |
| Extent `ResourceFeatureAssignments`<br>in [Get all resources](../operations/resources.md#get-all-resources) | Use [Get all resource feature assignments](../operations/resourcefeatures.md#get-all-resource-feature-assignments) instead | 01 Nov 2023 | 10 Jan 2025 |
| Extent `VoucherCodes` and `Companies` <br>in [Get all vouchers](../operations/vouchers.md#get-all-vouchers) | Use [Get all voucher codes](../operations/vouchercodes.md#get-all-voucher-codes) and [Get all companies](../operations/companies.md#get-all-companies) instead | 23 Oct 2023 | 10 Jan 2025 |
| `Extent`<br>in [Get all bills](../operations/bills.md#get-all-bills) | Use [Get all payments](../operations/payments.md#get-all-payments) and [Get all order items](../operations/orderitems.md#get-all-order-items) instead | 20 Oct 2023 | 10 Jan 2025 |
| `StartUtc`<br>in [Reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | Replaced by `ScheduledStartUtc` and `ActualStartUtc` | 06 Sep 2023 | - |
| `BillCounters`, `ProformaCounters`, `BillPreviewCounters`, `ServiceOrderCounters`, `RegistrationCardCounters`<br>in [Get all counters](../operations/counters.md#get-all-counters) | Replaced by `Counters` | 21 Jun 2023 | |
| `CustomerId`<br>in [Add external payment](../operations/payments.md#add-external-payment) | Replaced by `AccountId` | 24 May 2023 | |
| `CustomerId`<br>in [Add order](../operations/orders.md#add-order) | Replaced by `AccountId` | 24 May 2023 | |
| `CustomerId` in [Bill](../operations/bills.md#bill) | Replaced by `AccountId` | 24 May 2023 | |
| Extent `ResourceCategories`<br>in [Get all resources](../operations/resources.md#get-all-resources) | Use [Get all resource categories](../operations/resourcecategories.md#get-all-resource-categories) instead | 23 May 2023 | 10 Jan 2025 |
| `AmountDefault` in [Payment item](../operations/accountingitems.md#payment-item) | Replaced by `Original amount` | 11 Apr 2023 | | 
| `AssigneeData` in [Get all bills ](../operations/bills.md#get-all-bills) | Replaced by [Owner data](../operations/bills.md#bill-owner-data) | 20 Feb 2023 | |
| `ItalianFiscalCode`, `ItalianLotteryCode` <br>in [Get all bills](../operations/bills.md#response) | Retrievable in LegalIdentifiers [Bill customer data](../operations/bills.md#bill-customer-data) | 20 Feb 2023 | 10 Jan 2025 |
| `Address`<br>in [Company](../operations/companies.md#company) | Replaced by `AddressId` | 18 Jan 2023 | 10 Jan 2025 |
| `BasePrices`<br>in [Get rate pricing](../operations/rates.md#get-rate-pricing) | Replaced by `BaseAmountPrices` | 18 Jan 2023 | |
| `Prices`<br>in [Resource category pricing](../operations/rates.md#resource-category-pricing) | Replaced by `AmountPrices` | 18 Jan 2023 | |
| `Entities`<br>in [General webhook request body](../events/wh-general.md#request-body) | Fetch data per corresponding [Event discriminator](../events/wh-general.md#event-discriminator) | 23 Aug 2022 | - |
| `StartUtc`, `EndUtc`<br>in [Availability block](../operations/availabilityblocks.md#availability-block), [Availability block adjustment](../operations/availabilityblocks.md#availability-block-adjustment) | Replaced by `FirstTimeUnitStartUtc` and `LastTimeUnitStartUtc` | 29 Jun 2022 | - |
| `StartUtc`, `EndUtc`<br>in [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters), [Availability block update parameters](../operations/availabilityblocks.md#availability-block-update-parameters) | Replaced by `FirstTimeUnitStartUtc` and `LastTimeUnitStartUtc` | 24 Jun 2022 | - |
| `AdultCount`, `ChildCount`<br>in [Reservation](../operations/reservations.md#reservation), [Reservation parameters](../operations/reservations.md#reservation-parameters), [Reservation updates](../operations/reservations.md#reservation-updates) | Replaced by `PersonCounts` and [`Age category`](../operations/agecategories.md#age-category) | 11 Feb 2022 | - |
| `TimeUnit`<br>in [Bookable service data](../operations/services.md#bookable-service-data) | Replaced by `TimeUnitPeriod` | 08 Feb 2022 | - |
| `DatesUtc`<br>in [Get rate pricing](../operations/rates.md#get-rate-pricing) | Replaced by `TimeUnitStartsUtc` | 08 Feb 2022 | - |
| `Rebated`<br> in [Bill options](../operations/bills.md#bill-options) | See [Working with rebates](../use-cases/accounting.md#working-with-rebates) | 02 Feb 2022 | - |
| `CompanionIds`<br>in [Reservation](../operations/reservations.md#reservation) | Replaced by operation [Get all companionships](../operations/companionships.md#get-all-companionships) | 03 Mar 2021 | - |
| `Gender`<br>in [Customer](../operations/customers.md#customer) object in [Operations using deprecated gender](#operations-using-deprecated-gender) | Replaced by `Sex` | 29 Sep 2020 | - |
| `TimeFilter`, `StartUtc`, `EndUtc`<br>in [Operations using deprecated time filters](#operations-using-deprecated-time-filters) | Replaced by `CreatedUtc`, `UpdatedUtc`, etc. as per operation description | 19 Aug 2020 | - |
| `TraveAgencyId`<br>in [Reservation](../operations/reservations.md#reservation) | Replaced by `TravelAgencyId` | 05 Aug 2020 | - |
| `CategoryId`<br>in [Customer](../operations/customers.md#customer) | - | 02 Jul 2020 | - |
| `TimeUnitCost`<br>in [Reservation](../operations/reservations.md#reservation) | Replaced by `TimeUnitPrices` | 17 Jul 2019 | - |
| `TaxIdentificationNumber`<br>in [Company](../operations/companies.md#company) | Replaced by `TaxIdentifier` | 25 May 2018 | - |
| `ChannelManagerId`<br>in [Reservation](../operations/reservations.md#reservation) | Replaced by `ChannelManagerNumber` | 14 Dec 2016 | - |
| `ApplyCancelationFee`<br>in [Reservation](../operations/reservations.md#reservation) | Replaced by `ApplyCancellationFee` | Prior to 2021 | - |
| `Total`<br>in [Reservation price](../operations/reservations.md#reservation-price) | Replaced by `TotalAmount` | Prior to 2021 | - |
| `BirthDateUtc`<br>in [Customer](../operations/customers.md#customer) | Replaced by `BirthDate` | 07 Jun 2017 | - |
| `Passport`<br>in [Customer](../operations/customers.md#customer) | Replaced by [Document](../operations/customers.md#document) object in `Documents` part of response | Prior to 2021 | - |
| `IdentityCard`<br>in [Customer](../operations/customers.md#customer) | Replaced by [Document](../operations/customers.md#document) object in `Documents` part of response | Prior to 2021 | - |
| `Visa`<br>in [Customer](../operations/customers.md#customer) | Replaced by [Document](../operations/customers.md#document) object in `Documents` part of response | Prior to 2021 | - |
| `DriversLicense`<br>in [Customer](../operations/customers.md#customer) | Replaced by [Document](../operations/customers.md#document) object in `Documents` part of response | Prior to 2021 | - |
| `ExpirationUtc`<br>in [Document](../operations/customers.md#document) | Replaced by `Expiration` | 07 Jun 2017 | - |
| `IssuanceUtc`<br>in [Document](../operations/customers.md#document) | Replaced by `Issuance` | 07 Jun 2017 | - |
| `Net`<br>in [Currency value](../operations/accountingitems.md#currency-value) | - | Prior to 2021 | - |
| `Tax`<br>in [Currency value](../operations/accountingitems.md#currency-value) | - | Prior to 2021 | - |
| `TaxRate`<br>in [Currency value](../operations/accountingitems.md#currency-value) | - | Prior to 2021 | - |
| Object `UnitCost`<br> in [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) | Replaced by `Amount` | Prior to 2021 | - |

### Operations using deprecated time filters 

* [Get all customers](../operations/customers.md#get-all-customers)
* [Get all bills](../operations/bills.md#get-all-bills)
* [Get all companies](../operations/companies.md#get-all-companies)
* [Get all restrictions](../operations/restrictions.md#get-all-restrictions)
* [Get all outlet items](../operations/outletitems.md#get-all-outlet-items)
* [Get all cashier transactions](../operations/cashiertransactions.md#get-all-cashier-transactions)

### Operations using deprecated gender 

* [Add customer](../operations/customers.md#add-customer)
* [Update customer](../operations/customers.md#update-customer)
* [Get all customers](../operations/customers.md#get-all-customer)
* [Search customers](../operations/customers.md#search-customers)
* [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12)

## Deprecated functionality

| Feature | Comments | Deprecated | Discontinued |
| :-- | :-- | :-- | :-- |
| [WebSocket authentication](../events/websockets.md#authentication) using URL query parameters | Changed to use cookies instead, which is more secure | 06 Jan 2021 | - |
| WebSocket `Space event` | Replaced by [Resource event](../events/websockets.md#resource-event) | 21 Sep 2020 | - |
