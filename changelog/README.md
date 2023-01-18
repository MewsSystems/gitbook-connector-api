# Changelog

## 18th January 2023

* Added new page [Service orders](../operations/serviceorders.md).
* Added operation [Get all service order notes](../operations/serviceorders.md#get-all-service-order-notes).
* Deprecated `BasePrices` and replaced it with `BaseAmountPrices` in the response to [Get rate pricing](../operations/rates.md#get-rate-pricing); `BaseAmountPrices` includes information about the tax breakdown.
* Deprecated `Prices` and replaced it with `AmountPrices` in the response to [Get rate pricing](../operations/rates.md#get-rate-pricing); `AmountPrices` includes information about the tax breakdown.
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) response with `AmountPrices` and `AmountPrices` in [Resource category pricing](../operations/rates.md#resource-category-pricing).

## 17th January 2023

* Extended [Payment Items](../operations/accountingitems.md#payment-item) with `AmountDefault`.

## 13th January 2023

* Extended [Get all addresses](../operations/addresses#get-all-addresses) with filter parameter `UpdatedUtc`.

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
