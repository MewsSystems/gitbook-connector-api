# Deprecations

Deprecations are features of the API which you are discouraged from using, even though they may still be supported for a period of time for the sake of backwards compatibility.
Such features are normally deprecated because they are superseded by a better alternative. They can include object properties, entire objects or entire API operations.
The list of deprecations is as follows. Individual items are also highlighted in the [Changelog](../changelog/README.md) when they occur.
Historic deprecations that have already been discontinued may not be listed. For more information, see our [Deprecations Policy](https://mews-systems.gitbook.io/open-api/staying-up-to-date/deprecations-policy).

> **Important:** We strongly advise you to review this list and if you are using any of the deprecated items in your integration, to update your implementation accordingly.

The table columns have the following meanings:

* __Feature__ - What entity or feature is being deprecated
* __Comments__ - Additional information, such as the reason for the deprecation and what the replacement is
* __Deprecated__ - The date at which the deprecation notice was given (see the [Changelog](../changelog/README.md))
* __Discontinued__ \- The date at which it is planned to discontinue support completely; a value of '-' indicates no date has been set

## Deprecated operations

| Feature | Comments | Deprecated | Discontinued |
| :-- | :-- | :-- | :-- |
| `accountingItems/getAll` | Replaced by [Get all payments](../operations/payments.md#get-all-payments) and [Get all order items](../operations/orderitems.md#get-all-order-items) | 19 April 2023 | 19 April 2024 |
| `companies/getAllByName` | Replaced by [Get all companies](../operations/companies.md#get-all-companies) | 01 Jan 2020 | - |
| `customers/merge` | Replaced by [Merge accounts](../operations/accounts.md#merge-accounts) | 01 Dec 2022 | 01 Dec 2023 |
| `bills/getAllByIds` | Replaced by [Get all bills](../operations/bills.md#get-all-bills) | 01 Jan 2020 | - |
| `bills/getAllByCustomers` | Replaced by [Get all bills](../operations/bills.md#get-all-bills) | 01 Jan 2020 | - |
| `bills/getAllClosed` | Replaced by [Get all bills](../operations/bills.md#get-all-bills) | 01 Jan 2020 | - |
| `creditCards/getAllByIds` | Replaced by [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) | 01 Jan 2020 | - |
| `creditCards/getAllByCustomers` | Replaced by [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) | 01 Jan 2020 | - |
| `reservations/getAllByIds` | Replaced by [Get all reservations](../operations/reservations.md#get-all-reservations) | 01 Jan 2020 | - |
| `reservations/getAllByCustomers` | Replaced by [Get all reservations](../operations/reservations.md#get-all-reservations) | 01 Jan 2020 | - |
| `reservations/getAllByNumbers` | Replaced by [Get all reservations](../operations/reservations.md#get-all-reservations) | 01 Jan 2020 | - |
| `customers/getAllByIds` | Replaced by [Get all customers](../operations/customers.md#get-all-customers) | 01 Jan 2020 | - |
| `customers/getAllByEmails` | Replaced by [Get all customers](../operations/customers.md#get-all-customers) | 01 Jan 2020 | - |
| `customers/getAllByName` | Replaced by [Get all customers](../operations/customers.md#get-all-customers) | 01 Jan 2020 | - |

## Deprecated properties

| Feature | Comments | Deprecated | Discontinued |
| :-- | :-- | :-- | :-- |
| Extent `ResourceCategories`<br>in [Get all resource categories](../operations/resourcecategories.md#get-all-resource-categories) | - | 16 May 2023 | 16 May 2024 |
| `Address` in [Enterprise](../operations/configuration.md#enterprise) | Replaced by `AddressId` | 17 Apr 2023 | 17 Oct 2023 |
| `AmountDefault` in [Payment item](../operations/accountingitems.md#payment-item) | Replaced by `Original amount` | 11 April 2023 | 11 Oct 2023 |
| `AssigneeData` in [Get all bills ](../operations/bills.md#get-all-bills) | Replaced by [Owner data](../operations/bills.md#bill-owner-data) | 20 Feb 2023 | 20 Feb 2024 |
| `ItalianFiscalCode`, `ItalianLotteryCode` <br>in [Get all bills](../operations/bills.md#response) | Retrievable in LegalIdentifiers [Bill customer data](../operations/bills.md#bill-customer-data) | 20 Feb 2023 | 20 Feb 2024 |
| `Address`<br>in [Company](../operations/companies.md#company) | Replaced by `AddressId` | 18 Jan 2023 | 18 July 2023 |
| `BasePrices`<br>in [Get rate pricing](../operations/rates.md#get-rate-pricing) | Replaced by `BaseAmountPrices` | 18 Jan 2023 | 18 Jul 2023 |
| `Prices`<br>in [Resource category pricing](../operations/rates.md#resource-category-pricing) | Replaced by `AmountPrices` | 18 Jan 2023 | 18 Jul 2023 |
| `Entities`<br>in [General webhook request body](../webhooks/wh-general.md#request-body) | Fetch data per corresponding [Event discriminator](../webhooks/wh-general.md#event-discriminator) | 23 Aug 2022 | - |
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
* [Get all reservations](../operations/reservations.md#get-all-reservations)

## Deprecated functionality

| Feature | Comments | Deprecated | Discontinued |
| :-- | :-- | :-- | :-- |
| [Websocket authentication](../websockets/README.md#authentication) using URL query parameters | Changed to use cookies instead, which is more secure | 06 Jan 2021 | - |
| WebSocket `Space event` | Replaced by [Resource event](../websockets/README.md#resource-event) | 21 Sep 2020 | - |
