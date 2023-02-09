# Changelog

## 9th February 2023

* Added new use case [Mews Payment Terminals](../use-cases/mews-terminals.md)

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

* Added `ExternalIdentifier` to each of the following entities. `ExternalIdentifier` is used for portfolio management to link the entities at an above-enterprise level.
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
* Added new page [Service orders](../operations/serviceorders.md).
* Added operation [Get all service order notes](../operations/serviceorders.md#get-all-service-order-notes).
* Deprecated `BasePrices` and replaced it with `BaseAmountPrices` in the response to [Get rate pricing](../operations/rates.md#get-rate-pricing); `BaseAmountPrices` includes information about the tax breakdown.
* Deprecated `Prices` and replaced it with `AmountPrices` in the response to [Get rate pricing](../operations/rates.md#get-rate-pricing); `AmountPrices` includes information about the tax breakdown.
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) response with `AmountPrices` and `AmountPrices` in [Resource category pricing](../operations/rates.md#resource-category-pricing).

## 17th January 2023

* Extended [Payment Items](../operations/accountingitems.md#payment-item) with `AmountDefault`.

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
