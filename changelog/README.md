# Changelog

## 6th November 2024
* Added new type of counter to [Counter type discriminator](../operations/counters.md#counter-type-discriminator): `CorrectionBillCounter`.
* Added new type of counter to [Counter type discriminator](../operations/counters.md#counter-type-discriminator): `CreditNoteBillCounter`.
* Added new type of counter to [Counter type discriminator](../operations/counters.md#counter-type-discriminator): `PaymentConfirmationBillCounter`.

## 1st November 2024
* Extended [Get all bills](../operations/bills.md#get-all-bills) response object with `Name` property.
* Extended [Get all enterprises](../operations/enterprises.md#get-all-enterprises) and [Get configuration](../operations/configuration.md#get-configuration) responses with `GroupNames` property.
* Extended [Company classifications](../operations/accounts.md#company-classification) and [Company update classifications](../operations/accounts.md#company-update-classifications) with `GovernmentEntity` property.
  * [Update accounts](../operations/accounts.md#update-accounts)

## 23rd October 2024
* Extended [Get all reservations \(ver 2023-06-06\)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) request with `ScheduledEndUtc` parameter.

## 16th October 2024
* Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request fields `ServiceId`, `ExactRateId`, `BaseRateId`, `RateGroupId`, `ResourceCategoryId` in the following operations:
  * [Add restrictions](../operations/restrictions.md#add-restrictions)
  * [Delete restrictions](../operations/restrictions.md#delete-restrictions)
  * [Clear restrictions](../operations/restrictions.md#clear-restrictions)
   
## 11th October 2024
* Extended [Age category](../operations/agecategories.md#age-category) response object with `IsActive` property.
 * [Get all age categories](../operations/agecategories.md#get-all-age-categories)
* Extended [Bill](../operations/bills.md#bill) response object with `LastReminderDateUtc` property.
 * [Get all bills](../operations/bills.md#get-all-bills)
* Extended [Order item type](../operations/orderitems.md#order-item-type) with `MulticurrencyFee`.
 * [Get all order items](../operations/orderitems.md#get-all-order-items) request filter parameter and response object
* Extended [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) with `Numbers` request filtering parameter.
* Clarified capacity checking in [Price reservations](../operations/reservations.md#price-reservations) operation. Documentation only.

## 10th October 2024
* Added `QuoteId` property to [Availability blocks](../operations/availabilityblocks.md)
  * [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks) request parameter
  * [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks) request parameter
  * [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) response object

## 4th October 2024
* Extended [Accounting configuration](../operations/configuration.md#accounting-configuration) in [Get configuration](../operations/configuration.md#get-configuration) response with `EnabledExternalPaymentTypes` property.

## 27th September 2024
* Mark filtering parameter `ServiceIds` as optional in [Get all age categories](../operations/agecategories.md#get-all-age-categories).

## 27th September 2024
* New response object for [Get cancellation policies by reservations](../operations/cancellationpolicies.md#get-cancellation-policies-by-reservations).
* Added operation [Get cancellation policies by rates](../operations/cancellationpolicies.md#get-cancellation-policies-by-rates).

## 30th September 2024
* Extended [Add customers](../operations/customers.md#add-customer) request with `CompanyId` parameter.

## 19th September 2024
* Extended [Customer account](../operations/accounts.md#customer) with property `DietaryRequirements`.
  * [Update accounts](../operations/accounts.md#update-accounts)

## 13th September 2024
* Added operation [Get cancellation policies by reservations](../operations/cancellationpolicies.md#get-cancellation-policies-by-reservations).

## 9th September 2024
* **Breaking:** In [Availability block response object](../operations/availabilityblocks.md#availability-block) `ReleasedUtc` property is no longer required. The breaking change was introduced on 8th of January 2024 with [rolling release offsets](https://releases.mews.com/en/introducing-rolling-release-dates-to-unlock-allotments-for-availability-blocks). The following operations are affected:
  * [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks)
  * [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks)
* Added rolling release support in [Availability blocks](../operations/availabilityblocks.md) (initially released on July 30th 2024).
  * Extended [Add Availability blocks](../operations/availabilityblocks.md#add-availability-blocks) with `RollingReleaseOffset`
  * Extended [Update Availability blocks](../operations/availabilityblocks.md#update-availability-blocks) with `RollingReleaseOffset` and `ReleaseStrategy` properties
  * Added `RollingReleaseOffset` to [AvailabilityBlock responses](../operations/availabilityblocks.md#availability-block).
* Documented missing fields in [Availability block update parameters](../operations/availabilityblocks.md#availability-block-update-parameters):
  * `State`
  * `ReservationPurpose`
  * `BookerId`
  * `Notes`
  * `Budget`

## 4th September 2024
* Mark filtering parameter `VoucherIds` as required to reflect reality in [Get all voucher codes](../operations/vouchercodes.md#get-all-voucher-codes). Documentation-only.
* Removed 'per Client Token' [request limits](../guidelines/environments.md). This is no longer checked in the API. 


## 3rd September 2024
* Added new restricted functionality to [request minimal response](../guidelines/requests.md#request-minimal-response) and extended [response codes](../guidelines/responses.md#response-codes) with `204 No Content`.
* Extended [AgeCategory](../operations/agecategories.md#age-category) with `Classification`.

## 30th August 2024
* Deprecated property `ElectronicInvoiceIdentifier` in [Company](../operations/companies.md#company). Use `AdditionalTaxIdentifier` instead.

## 22nd August 2024
* Extended [Get all resource category assignments](../operations/resourcecategories.md#get-all-resource-category-assignments) with filtering parameter `ResourceIds`.

## 21st August 2024
* Extended [Exports](../operations/exports.md#add-export) with support for the following [entity types](../operations/exports.md#exported-entity-type):
  * `AvailabilityAdjustment`
  * `AvailabilityBlock`
  * `ResourceBlock`
* Enabled [Portfolio Access Tokens](../guidelines/multi-property.md) for the following operations:
  * [Add reservation companion](../operations/reservations.md#add-reservation-companion)
  * [Delete reservation companion](../operations/reservations.md#delete-reservation-companion)
  * [Confirm reservation](../operations/reservations.md#confirm-reservation)

## 16th August 2024
* Extended [Customer](../operations/customers.md#customer) response object with `PreferredLanguageCode`.
  * [Get all customers](../operations/customers.md#get-all-customers)
* Added new use case for [Customer loyalty](../use-cases/loyalty.md). Documentation-only.

## 8th August 2024
* Added support for corrective bills:
  * Extended [Get all bills](../operations/bills.md#get-all-bills) with filtering parameter `CorrectionState`.
  * Extended [Bill](../operations/bills.md#bill) response object with `CorrectionState`, `CorrectionType`, and `CorrectedBillId`.

## 1st August 2024
* Extended [Voucher code](../operations/vouchercodes.md#voucher-code) response object with `IsActive` property.
  * [Get all voucher codes](../operations/vouchercodes.md#get-all-voucher-codes)

## 8th July 2024
* Extended [Payment data](../operations/payments.md#payment-data) response object with `Type` for Invoice payment type.
  * [Get all payments](../operations/payments.md#get-all-payments)

## 3rd July 2024
* Extended [Order item](../operations/orderitems.md#order-item) response object with `BillingName`, this affects the following operations:
  * [Get all order items](../operations/orderitems.md#get-all-order-items)

## 24th June 2024
* Added new page [Restrictions](../concepts/restrictions.md) under [Concepts](../concepts/README.md). Documentation-only.
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
