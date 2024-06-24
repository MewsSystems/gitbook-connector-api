# Changelog

## 24th June 2024
* Deprecated [Add restrictions](../operations/restrictions.md#add-restrictions) and [Delete restrictions](../operations/restrictions.md#delete-restrictions), use [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions) instead.

## 18th June 2024
* Removed **Restricted!** status from [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions).

## 17th June 2024
* Extended [Payment data](../operations/payments.md#payment-data) type with Ghost payment data.

## 10th June 2024
* Moved the [Taxation](../concepts/taxation.md) page to the new [Concepts](../concepts/README.md) section. Documentation-only.

## 5th June 2024
* Added new section [Concepts](../concepts/README.md) including an explanation of [Time units](../concepts/time-units.md). Documentation-only.

## 4th June 2024
* Extended [Cancel reservation](../operations/reservations.md#cancel-reservation) request with `SendEmail` parameter.

## 3rd June 2024
* Updated the maximum size of time interval for [Rates](../operations/rates.md) and [Services](../operations/services.md) from 24 months to 60 months if service's `TimeUnitPeriod` is `Month`.

## 28th May 2024
* Extended [Get all product service orders](../operations/productserviceorders.md#get-all-product-service-orders) with filtering parameter `LinkedReservationIds`.

## 24th May 2024
* Extended [Outlet item](../operations/outletitems.md#outlet-item) response object with `PaymentCardPaymentId`, this affects the following operations:
  * [Get outlet items](../operations/outletitems.md#get-all-outlet-items)

## 23rd May 2024
* Added `SendMarketingPostalMail`, `SendPartnerMarketingEmails` and `SendPartnerMarketingPostalMail` options to [Customer option](../operations/customers.md#customer-option), this affects the following operations: 
  * [Get all customers](../operations/customers.md#get-all-customers) response
  * [Update account](../operations/accounts.md#update-accounts) response
  * [Search customers](../operations/customers.md#customer) response
  * [Add customer](../operations/customers.md#add-customer) response
  * [Update customer](../operations/customers.md#update-customer) request and response
  * [Get all companionships](../operations/companionships.md#get-all-companionships) response
  * [Get all reservations \(ver 2017-04-12\)](../operations/reservations.md#get-all-reservations-ver-2017-04-12) response

## 21st May 2024
* Added new response code `409 Conflict` to the list of [Response codes](../guidelines/responses.md#response-codes).
* Introduced `409 Conflict` error for the following restricted operations:
  * [Set restrictions](../operations/restrictions.md#set-restrictions)
  * [Clear restrictions](../operations/restrictions.md#clear-restrictions)

## 15th May 2024
* Added new restricted operation [Get product pricing](../operations/products.md#get-product-pricing).

## 9th May 2024
* Extended [Charge credit card](../operations/creditcards.md#charge-credit-card) request with `ReservationId` parameter.

## 8th May 2024
* Extended [Add alternative payment](../operations/payments.md#add-alternative-payment) request with `Data` parameter.
* Deprecated `Method`, `RedirectUrl` in [Add alternative payment](../operations/payments.md#add-alternative-payment). Use `Data` instead.

## 19th April 2024
* Extended [Reservation (ver 2023-06-06)](../operations/reservations.md#reservation-ver-2023-06-06) response object with `ActualEndUtc` and  `ScheduledEndUtc`, this affects the following operations:
  * [Get all reservations (ver 2023-06-06)](../operations/reservations.md#reservation-ver-2023-06-06)
* Deprecated `EndUtc` in [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) response object.

## 12th April 2024
* Extended [Add order](../operations/orders.md#add-order) request with `LinkedReservationId` parameter.
* Extended [Product service order](../operations/productserviceorders.md#product-service-order) response object with `LinkedReservationId`, this affects the following operations:
  * [Get all product service orders](../operations/productserviceorders.md#get-all-product-service-orders)
* Extended [Add payment command](../operations/commands.md#add-payment-command) request with `ReservationId` parameter.

## 12th March 2024
* Unused [reservation state](../operations/reservations.md#reservation-state) `Requested` removed from the documentation.

## 5th March 2024
* Extended [Payment request](../operations/paymentrequests.md#payment-request) response object with `ReservationId`, this affects the following operations:
  * [Get all payment requests](../operations/paymentrequests.md#get-all-payment-requests)
  * [Add payment requests](../operations/paymentrequests.md#add-payment-requests)
  * [Cancel payment requests](../operations/paymentrequests.md#cancel-payment-requests)
* Extended [Preauthorization](../operations/preauthorizations.md#preauthorization) response object with `ReservationId`, this affects the following operations:
  * [Get all preauthorizations by customers](../operations/preauthorizations.md#get-all-preauthorizations-by-customers)
* Extended [Payment](../operations/payments.md#payment) response object with `ReservationId`, this affects the following operations:
  * [Get all payments](../operations/payments.md#get-all-payments)
  * [Add credit card payment](../operations/payments.md#add-credit-card-payment)
  * [Add external payment](../operations/payments.md#add-external-payment)
  * [Add alternative payment](../operations/payments.md#add-alternative-payment)
* Extended [Get all payment requests](../operations/paymentrequests.md#get-all-payment-requests) with filtering parameter `ReservationIds`.
* Extended [Get all payments](../operations/payments.md#payment) with filtering parameter `ReservationIds`.

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
