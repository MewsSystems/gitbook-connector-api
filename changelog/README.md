# Changelog

## 7th March 2022 11:20 UTC

* Re-structured documentation pages for API operations so pages are organised by domain entity (e.g. [countries](../operations/countries.md), [outletbills](../operations/outletbills.md), [products](../operations/products.md)) rather than theme (e.g. configuration, reservations, finance)
* Re-structured documentation pages for Changelog so organised by year; [deprecations](../deprecations/README.md) split off into its own page
* Some minor additional changes to documentation pages, e.g. [webhooks](../webhooks/README.md) and [websockets](../websockets/README.md) now in separate directories
* Added reference to Swagger/OpenAPI definition on [home page](../README.md)

## 11th February 2022 10:22 UTC

* Deprecated `AdultCount` and `ChildCount` from [Reservation](../operations/reservations.md#reservation) and [Reservation parameters](../operations/reservations.md#reservation-parameters) and [Reservation updates](../operations/reservations.md#reservation-updates).
* Added [Age category parameters](../operations/reservations.md#age-category-parameters) replacing `AdultCount` and `ChildCount` for [Reservation](../operations/reservations.md#reservation) and [Reservation parameters](../operations/reservations.md#reservation-parameters) and [Reservation updates](../operations/reservations.md#reservation-updates). 

## 8th February 2022 10:22 UTC

* Extended [Time unit period](../operations/services.md#time-unit-period) with Month.
* Added [Time unit](../operations/services.md#time-unit).
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) with FirstTimeUnitStartUtc, LastTimeUnitStartUtc and info about max interval length.
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) return value with TimeUnitStartsUtc
* Removed DatesUtc from [Get rate pricing](../operations/rates.md#get-rate-pricing) return value
* Extended [Update rate price](../operations/rates.md#update-rate-price) with FirstTimeUnitStartUtc, LastTimeUnitStartUtc and info about max interval length.
* Removed TimeUnit from [Bookable service data](../operations/services.md#bookable-service-data)
* Added TimeUnitPeriod to [Bookable service data](../operations/services.md#bookable-service-data)

## 7th February 2022 10:22 UTC

* Added [Get all age categories](../operations/agecategories.md#get-all-age-categories) operation.

## 2nd February 2022 10:22 UTC

* Extended the request parameters for [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) to add new filter parameter `Rebated item IDs`
* Extended the [Accounting use case](../use-cases/accounting.md) to include new section [Working with rebates](../use-cases/accounting.md#working-with-rebates)
* Deprecated `Rebated` property from [Bill options](../operations/bills.md#bill-options) object

| Changelog by year |
| :-- |
| [Changelog 2021](changelog2021.md) |
| [Changelog 2020](changelog2020.md) |
| [Changelog 2019](changelog2019.md) |
| [Changelog 2018](changelog2018.md) |
| [Changelog 2017](changelog2017.md) |
| [Changelog 2016](changelog2016.md) |
