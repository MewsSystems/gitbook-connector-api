# Changelog

## 7th March 2022 11:20 UTC

* Re-structured documentation pages for API operations so split by domain entities (e.g. countries, outletbills, products) rather than 'themes'
* Re-structured documentation pages for Changelog to split into year entries; deprecations split off into its own page
* Some minor additional changes to documentation pages, e.g. webhooks and websockets now in separate directories
* Added reference to Swagger/OpenAPI definition to home page

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

| Changelog by year |
| :-- |
| [Changelog 2021](changelog2021.md) |
| [Changelog 2020](changelog2020.md) |
| [Changelog 2019](changelog2019.md) |
| [Changelog 2018](changelog2018.md) |
| [Changelog 2017](changelog2017.md) |
| [Changelog 2016](changelog2016.md) |
