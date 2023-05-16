# Changelog

## 16th May 2023

* Added operation [Get all loyalty tiers](../operations/loyaltytiers.md#get-all-loyalty-tiers) to retrieve loyalty tiers.
* Added operation [Add loyalty tiers](../operations/loyaltytiers.md#add-loyalty-tiers) to add loyalty tiers.
* Added operation [Update loyalty tiers](../operations/loyaltytiers.md#update-loyalty-tiers) to update loyalty tiers.
* Added operation [Delete loyalty tiers](../operations/loyaltytiers.md#delete-loyalty-tiers) to delete loyalty tiers.

## 28th April 2023

* Added missing property descriptions to [Get all order items](../operations/orderitems.md#get-all-order-items)

## 25th April 2023

* Added clarification to values for [Reservation origin](../operations/reservations.md#reservation-origin).

## 21st April 2023
* Extended [loyalty programs](../operations/loyaltyprograms.md#loyalty-program) with [Type](../operations/loyaltyprograms.md#loyalty-program-type) and [Subscription](../operations/loyaltyprograms.md#loyalty-program-subscription) parameters.
* Added operation [Add service order notes](../operations/serviceordernotes.md#add-service-order-notes).
* Added operation [Update service order notes](../operations/serviceordernotes.md#update-service-order-notes).
* Added operation [Delete service order notes](../operations/serviceordernotes.md#delete-service-order-notes).

## 20th April 2023

* Extended [Get all order items](../operations/orderitems.md#get-all-order-items) with `EnterpriseIds` filter and [Order item](../operations/orderitems.md#order-item) with `EnterpriseId`.
* Extended [Get all payments](../operations/payments.md#get-all-payments) with `EnterpriseIds` filter and [Payment](../operations/payments.md#payment) with `EnterpriseId`.

## 19th April 2023

* Deprecated operation [Get all accounting items ](../operations/accountingitems.md#get-all-accounting-items). Operation [Get all payments](../operations/payments.md#get-all-payments) and [Get all order items](../operations/orderitems.md#get-all-order-items) should be used instead.

## 17th April 2023

* Extended [Get configuration](../operations/configuration.md#get-configuration) request with `EnterpriseId` parameter.
* Deprecated `Address` in [Enterprise](../operations/configuration.md#enterprise) and replaced with `AddressId`.
* Added new page [Enterprises](../operations/enterprises.md) with operation [Get all enterprises](../operations/enterprises.md#get-all-enterprises).

## 12th April 2023

* Added operation [Get all order items](../operations/orderitems.md#get-all-order-items).

## 11th April 2023

* Extended [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) response with `OriginalAmount` in [Order item](../operations/accountingitems.md#order-item) and [Payment item](../operations/accountingitems.md#payment-item).
* Deprecated `AmountDefault` in [Payment item](../operations/accountingitems.md#payment-item).

## 9th April 2023

* Extended [Get all rules](../operations/rules.md#get-all-rules) response with `TravelAgencyId` in [Rule conditions](../operations/rules.md#rule-conditions).

## 6th April 2023

* Updated definitions for external identifiers throughout the API
* Added new page for [common object definitions](../operations/_objects.md) used throughout the API

## 4th April 2023

* Fixed name of parameter `PostCancellationFee` in [Reservation cancel](../operations/reservations.md#cancel-reservation).
* Added operation [Get all payments](../operations/payments.md#get-all-payments).

## 3rd April 2023

* Added operation [Clear restrictions](../operations/restrictions.md#clear-restrictions).

## 27th March 2023

* Updated [loyalty programs](../operations/loyaltyprograms.md) and [loyalty memberships](../operations/loyaltymemberships.md) operations as restricted.
* Re-wrote the [Datetimes](../guidelines/serialization.md#datetimes) section to better explain how date-times are used in the API.
* Updated descriptions for `startUtc` and `endUtc` in [Restriction Conditions](../operations/restrictions.md#restriction-conditions) and [Restriction set data](../operations/restrictions.md#restriction-set-data).
* Other minor improvements to documentation in the [Restrictions](../operations/restrictions.md) page.
* Corrected small errors in [Set restrictions](../operations/restrictions.md#set-restrictions) - removed `Identifier` and `ExternalIdentifier`, and updated sample JSON

## 22nd March 2023

* Added new page [Best practices](../guidelines/best-practices.md)

## 17th March 2023

* Added operation [Set restrictions](../operations/restrictions.md#set-restrictions).

## 16th March 2023

* Extended [Enterprise](../operations/configuration.md#enterprise) with `AccountingConfiguration` in [Get configuration](../operations/configuration.md#get-configuration).

## 15th March 2023

* Extended [Get all sources](../operations/sources.md#get-all-sources) with `UpdatedUtc` and `SourceIds` filter.
* Extended [Get all sources](../operations/sources.md#get-all-sources) response with `UpdatedUtc` in [Source](../operations/sources.md#source).
* Extended [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) with `UpdatedUtc` filter.
* Extended [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) response with `UpdatedUtc` in [Outlet bill](../operations/outletitems.md#outlet-bill) and [Outlet item](../operations/outletitems.md#outlet-item).

## 3rd March 2023

* Added new parameter field `UpdatedUtc` in [Get all companionships](../operations/companionships.md#get-all-companionships)
* Added new parameter field `UpdatedUtc` in [Get all accountingItems](../operations/accountingitems.md#get-all-accounting-items)
* Extended [Get all source assignments](../operations/sourceassignments.md#get-all-source-assignments) with `UpdatedUtc` filter.
 
## 28th February 2023

* Added new parameter field `UpdatedUtc` in [Get all bills](../operations/bills.md#get-all-bills)
* Added new response field `UpdatedUtc` in [Get all bills](../operations/bills.md#get-all-bills)

## 23rd February 2023

* Extended [Get all rates](../operations/rates.md#get-all-rates) with `AvailabilityBlockAssignments` extent.
* Extended [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) with `ReleasedUtc` filter.
* Added new page [Payment requests](../operations/paymentrequests.md) with operations:
  * [Get all payment requests](../operations/paymentrequests.md#get-all-payment-requests).
  * [Add payment requests](../operations/paymentrequests.md#add-payment-requests).
  * [Cancel payment requests](../operations/paymentrequests.md#cancel-payment-requests).
* Added new page [Availability adjustments](../operations/availabilityadjustments.md) with operation [Get all availability adjustments](../operations/availabilityadjustments.md#get-all-availability-adjustments).

## 20th February 2023

* Added new use case [Mews Payment Terminals](../use-cases/mews-terminals.md)
* Added new restricted operation [Add payment command](../operations/commands.md#add-payment-command).
* Deprecated `AssigneeData` in [Get all bills](../operations/bills.md#get-all-bills) response and replaced with  `OwnerData`.
* Extended [Bill customer data](../operations/bills.md#bill-customer-data) with `CustomerID`, `LegalIdentifiers`, `BillingCode`, `LastName`, `FirstName`, `SecondLastName`, `TitlePrefix` and with [Bill address](../operations/bills.md#bill-address) fields.
* Extended [Bill company data](../operations/bills.md#bill-company-data) with Owner Data `LegalIdentifiers`, `BillingCode`, `Name`, `FiscalIdentifier`, `AdditionalTaxIdentifier` and with [Bill address](../operations/bills.md#bill-address) fields.
* Extended [Payment Items](../operations/accountingitems.md#payment-item) with `AmountDefault`.
* Deprecated  `ItalianFiscalCode` and `ItalianLotteryCode` in [Bill customer data](../operations/bills.md#bill-customer-data).

## 1st February 2023

* Some changes to documentation structure to improve readability and navigability; documentation only, no functional changes to the API

## 27th January 2023

* Extended [Add companies](../operations/companies.md#add-companies) and [Update companies](../operations/companies.md#update-companies) with `ExternalIdentifier`.

## 26th January 2023

* Extended [Add company](../operations/companies.md#add-company) with `ReferenceIdentifier`and `WebsiteUrl` fields.
* Extended [Update company](../operations/companies.md#update-company) with `ReferenceIdentifier`and `WebsiteUrl` fields.
* Added `ReferenceIdentifier`and `WebsiteUrl` fields in [Company](../operations/companies.md#company).
* Extended [Close bill](../operations/bills.md#close-bill) with `PurchaseOrderNumber` field.
* Extended [Bill](../operations/bills.md#bill) with `PurchaseOrderNumber` field.

## 20th January 2023

* Added `ExternalIdentifier` to each of the following entities.
  * [Product](../operations/products.md#product)
  * [Company](../operations/companies.md#company)
  * [Service](../operations/services.md#service)
  * [Rate](../operations/rates.md#rate)
  * [Rate group](../operations/rates.md#rate-group)
  * [Resource category](../operations/resources.md#resource-category)
  * [Voucher](../operations/vouchers.md#voucher)
  * [Enterprise](../operations/configuration.md#enterprise)

## 18th January 2023

* Added pagination to [Get all companies](../operations/companies.md#get-all-companies)
* Added new filter `ExternalIdentifiers` to  [Get all companies](../operations/companies.md#get-all-companies)
* Deprecated `Address` in [Company](../operations/companies.md#company) and replaced with `AddressId`
* Added new page [Service orders](../operations/serviceorders.md) \[corrected to [Service order notes](../operations/serviceordernotes.md) 21st April 2023\].
* Added operation [Get all service order notes](../operations/serviceordernotes.md#get-all-service-order-notes).
* Deprecated `BasePrices` and replaced it with `BaseAmountPrices` in the response to [Get rate pricing](../operations/rates.md#get-rate-pricing); `BaseAmountPrices` includes information about the tax breakdown.
* Deprecated `Prices` and replaced it with `AmountPrices` in the response to [Get rate pricing](../operations/rates.md#get-rate-pricing); `AmountPrices` includes information about the tax breakdown.
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) response with `AmountPrices` and `AmountPrices` in [Resource category pricing](../operations/rates.md#resource-category-pricing).

## 13th January 2023

* Extended [Get all addresses](../operations/addresses.md#get-all-addresses) with filter parameter `UpdatedUtc`.

## 6th January 2023

* Extended [Get all rates](../operations/rates.md#get-all-rates) with filtering parameters `RateIds` and `UpdatedUtc`.

| Changelog by year |
| :-- |
| [Changelog 2022](changelog2022.md) |
| [Changelog 2021](changelog2021.md) |
| [Changelog 2020](changelog2020.md) |
| [Changelog 2019](changelog2019.md) |
| [Changelog 2018](changelog2018.md) |
| [Changelog 2017](changelog2017.md) |
| [Changelog 2016](changelog2016.md) |
