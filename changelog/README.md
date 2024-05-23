# Changelog

## 24th May 2024
* Extended [Outlet item](../operations/outletitems.md#outlet-item) response object with `PaymentCardPaymentId`, this affects the following operations:
  * [Get outlet items](../operations/outletitems.md#get-all-outlet-items)

## 1st March 2024
* Extended [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) request with `ScheduledStartUtc` parameter.

## 26th February 2024
* Added operation [Get service availability (ver 2024-01-22)](../operations/services.md#get-service-availability-ver-2024-01-22).

## 21st February 2024
* Extended [Get all resource categories](../operations/resourcecategories.md#get-all-resource-categories) request with `ActivityStates` parameter.

## 15th February 2024
* Added ['how to' use cases](../use-cases/how-to.md) page (documentation only)

## 12th February 2024
* Extended [Order item](../operations/orderitems.md#order-item) response object with `Options`, this affects the following operations:
  * [Get all order items](../operations/orderitems.md#get-all-order-items)

## 2nd February 2024
* Updated these use cases (documentation only):
  * [Revenue management](../use-cases/revenue-management.md)
  * [Customer management](../use-cases/customer-management.md)
  * [Upsell](../use-cases/upsell.md)
  * [Guest technology](../use-cases/guest-technology.md)
  * [Housekeeping](../use-cases/housekeeping.md)
  * [Reputation management](../use-cases/reputation-management.md)
  * [Events](../use-cases/events.md)
  * [Device integration](../use-cases/device-integration.md)
  * [Customer messaging](../use-cases/messaging.md)
  * [Point of sale](../use-cases/point-of-sale.md)
  * [Accounting](../use-cases/accounting.md)
* Extended [Get all rates](../operations/rates.md#get-all-rates) request with `ActivityStates` parameter.
* Added operation [Get all rate groups](../operations/rategroups.md#get-all-rate-groups).
* Deprecated operation extent `RateGroups` in [Get all rates](../operations/rates.md#get-all-rates). Use [Get all rate groups](../operations/rategroups.md#get-all-rate-groups) instead.

## 1st February 2024
* Pushed back discontinued dates for [deprecated features](../deprecations/README.md)

## 26th January 2024
* Extended [Rule](../operations/rules.md#rule) response object with `ServiceId`, this affects the following operations:
  * [Get all rules](../operations/rules.md#get-all-rules)

## 24th January 2024
* Extended [Get all rates](../operations/rates.md#get-all-rates) with filtering parameter `ExternalIdentifiers`.
* Extended [Get all vouchers](../operations/vouchers.md#get-all-vouchers) with filtering parameter `ExternalIdentifiers`.
* Fixed description (documentation only, no changes in API functionality) of [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Renamed `PartnerCompanyId` from `CompanyId` in the property list.
  * Added `QrDataCode` and `CancellationReason` to the response.
  * Removed `EnterpriseId` from the response (it was never part of the response).

## 23rd January 2024
* Added operation [Update accounts](../operations/accounts.md#update-accounts).

## 22nd January 2024
* Extended [Resource access token](../operations/resourceaccesstokens.md#resource-access-token) with `IsActive`.

## 19th January 2024
* Updated the [Demo environment](../guidelines/environments.md#demo-environments) credentials.

## 16th January 2024
* Added operation [Delete companies](../operations/companies.md#delete-companies).

## 15th January 2024
* Updated [Request limits](../guidelines/README.md#request-limits) for both Demo and Production environments.

| Changelog by year |
| :-- |
| [Changelog 2023](changelog2023.md) |
| [Changelog 2022](changelog2022.md) |
| [Changelog 2021](changelog2021.md) |
| [Changelog 2020](changelog2020.md) |
| [Changelog 2019](changelog2019.md) |
| [Changelog 2018](changelog2018.md) |
| [Changelog 2017](changelog2017.md) |
| [Changelog 2016](changelog2016.md) |
