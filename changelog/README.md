# Changelog

## 2nd February 2024
* Extended [Get all rates](../operations/rates.md#get-all-rates) request with `ActivityStates` parameter.

* Added operation [Get all rate groups](../operations/rategroups.md#get-all-rate-groups).
* Deprecated operation extent `RateGroups` in [Get all rates](../operations/rates.md#get-all-rates). Use [Get all rate groups](../operations/rategroups.md#get-all-rate-groups) instead.
* Updated the [Accounting](../use-cases/accounting.md) use case.

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
