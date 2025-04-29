# Changelog 2024

## 19th December 2024
* [Refund payments](../operations/payments.md#refund-payment):
  * Extended response object with `State` property.

## 12th December 2024
* [Update bills](../operations/bills.md#update-bills):
  * Added new operation.

## 11th December 2024
* [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents):
* [Add identity documents](../operations/identitydocuments.md#add-identity-documents):
* [Update identity documents](../operations/identitydocuments.md#update-identity-documents):
* [Delete identity documents](../operations/identitydocuments.md#delete-identity-documents):
* [Clear identity documents](../operations/identitydocuments.md#clear-identity-documents):
  * Added new operations.

## 9th December 2024
* [Add external payment](../operations/payments.md#add-external-payment):
  * Extended request object with support for all external payment types enabled by the enterprise.
* [Identity document](../operations/customers.md#identity-document):
  * Extended request and response objects with `IdentityDocumentSupportNumber` property for Spanish identity cards in Spanish legal environments.
* [Update rate price](../operations/rates.md#update-rate-price):
  * Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request parameter `RateId`.

## 6th December 2024
* [API Events](../events/README.md):
  * Added new section. Documentation-only, no change to API.
* [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended response object with `ReleaseStrategy` property.
* [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks):
  * Extended response object with `ReleaseStrategy` property.
* [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks):
  * Extended response object with `ReleaseStrategy` property.
* [Payments API operations](../operations/payments.md):
  * Aligned documentation with OpenAPI Specification by adding previously undocumented properties and fixing examples. Documentation-only.

## 5th December 2024
* [Add routing rules](../operations/routingrules.md#add-routing-rules):
  * Added `AssignmentTargetType` property to request parameter.
* [Update routing rules](../operations/routingrules.md#update-routing-rules):
  * Added `AssignmentTargetType` property to request parameter.

## 4th December 2024
* [Set rates](../operations/rates.md#set-rates):
  * Added new operation (restricted).

## 29th November 2024
* [Update product pricing](../operations/products.md#update-product-pricing):
* [Delete rates](../operations/rates.md#delete-rates):
  * Added new operations.

## 28th November 2024
* Changes to page architecture. Documentation-only, no changes to API.
* [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended response object with `AvailabilityBlockNumber` property.
* [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks):
  * Extended response object with `AvailabilityBlockNumber` property.
* [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks):
  * Extended response object with `AvailabilityBlockNumber` property.

## 26th November 2024
* [Add vouchers](../operations/vouchers.md#add-vouchers):
  * Increased `AssignedRateIds` maximum items to 10.
* [Update vouchers](../operations/vouchers.md#update-vouchers):
  * Increased `AssignedRateIds` maximum items to 10.

## 19th November 2024
* [Get all service overbooking limits](../operations/serviceoverbookinglimits.md#get-all-service-overbooking-limits):
* [Set service overbooking limits](../operations/serviceoverbookinglimits.md#set-service-overbooking-limits):
* [Clear service overbooking limits](../operations/serviceoverbookinglimits.md#clear-service-overbooking-limits):
  * Added new operations (all restricted).

## 18th November 2024
* [Get all enterprises](../operations/enterprises.md#get-all-enterprises):
  * Extended response object with `Subscription` property containing `TaxIdentifier`.
* [Get configuration](../operations/configuration.md#get-configuration):
  * Extended response object with `Subscription` property containing `TaxIdentifier`.

## 15th November 2024
* [Get customers open items](../operations/customers.md#get-customers-open-items):
  * **Deprecated** operation. Use [Get all payments](../operations/payments.md#get-all-payments) and [Get all order items](../operations/orderitems.md#get-all-order-items) instead.
* [Customer API operations](../operations/customers.md):
  * Aligned documentation with OpenAPI Specification by adding previously undocumented properties and fixing examples. Documentation-only.
* [Get all customers](../operations/customers.md#get-all-customers):
  * Extended [Customer](../operations/customers.md#customer) with `DietaryRequirements` property.
* [Add customer](../operations/customers.md#add-customer):
  * Extended [Customer](../operations/customers.md#customer) with `DietaryRequirements` property.
* [Update customer](../operations/customers.md#update-customer):
  * Extended [Customer](../operations/customers.md#customer) with `DietaryRequirements` property.

## 8th November 2024
* [Upload and link file to account](../operations/accounts.md#upload-and-link-file-to-account):
  * Added new operation.

## 6th November 2024
* [Get all counters](../operations/counters.md#get-all-counters):
  * Extended [Counter type discriminator](../operations/counters.md#counter-type-discriminator) with values `CorrectionBillCounter`, `CreditNoteBillCounter` and `PaymentConfirmationBillCounter`.

## 1st November 2024
* [Get all bills](../operations/bills.md#get-all-bills):
  * Extended response object with `Name` property.
* [Get all enterprises](../operations/enterprises.md#get-all-enterprises):
  * Extended response object with `GroupNames` property.
* [Get configuration](../operations/configuration.md#get-configuration):
  * Extended response object with `GroupNames` property.
* [Update accounts](../operations/accounts.md#update-accounts):
  * Extended [Company classifications](../operations/accounts.md#company-classification) and [Company update classifications](../operations/accounts.md#company-update-classifications) with `GovernmentEntity` property.

## 23rd October 2024
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `ScheduledEndUtc` parameter.

## 16th October 2024
* [Add restrictions](../operations/restrictions.md#add-restrictions):
* [Delete restrictions](../operations/restrictions.md#delete-restrictions):
* [Clear restrictions](../operations/restrictions.md#clear-restrictions):
  * Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request fields `ServiceId`, `ExactRateId`, `BaseRateId`, `RateGroupId`, and `ResourceCategoryId`.

## 11th October 2024
* [Get all age categories](../operations/agecategories.md#get-all-age-categories):
  * Extended response object with `IsActive` property.
* [Get all bills](../operations/bills.md#get-all-bills):
  * Extended response object with `LastReminderDateUtc` property.
* [Get all order items](../operations/orderitems.md#get-all-order-items):
  * Extended request filter parameter and response object with `MulticurrencyFee`.
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `Numbers` filtering parameter.
* [Price reservations](../operations/reservations.md#price-reservations):
  * Clarified capacity checking. Documentation-only, no change to API.

## 10th October 2024
* [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks):
  * Added `QuoteId` request parameter.
* [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks):
  * Added `QuoteId` request parameter.
* [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended response object with `QuoteId` property.

## 4th October 2024
* [Get configuration](../operations/configuration.md#get-configuration):
  * Extended [Accounting configuration](../operations/configuration.md#accounting-configuration) with `EnabledExternalPaymentTypes` property.

## 30th September 2024
* [Add customer](../operations/customers.md#add-customer):
  * Extended request object with `CompanyId` parameter.

## 27th September 2024
* [Get all age categories](../operations/agecategories.md#get-all-age-categories):
  * Marked `ServiceIds` filtering parameter as optional.
* [Get cancellation policies by reservations](../operations/cancellationpolicies.md#get-cancellation-policies-by-reservations):
  * Added new response object.
* [Get cancellation policies by rates](../operations/cancellationpolicies.md#get-cancellation-policies-by-rates):
  * Added new operation.

## 19th September 2024
* [Update accounts](../operations/accounts.md#update-accounts):
  * Extended [Customer account](../operations/accounts.md#customer) with `DietaryRequirements` property.

## 13th September 2024
* [Get cancellation policies by reservations](../operations/cancellationpolicies.md#get-cancellation-policies-by-reservations):
  * Added new operation.

## 9th September 2024
* [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * **Breaking:** `ReleasedUtc` property in [Availability block](../operations/availabilityblocks.md#availability-block) object is no longer `required`. This breaking change was introduced on 8th January 2024, see __Mews Operations__ release note [Introducing rolling release dates to unlock allotments for availability blocks](https://releases.mews.com/en/introducing-rolling-release-dates-to-unlock-allotments-for-availability-blocks).
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) with `RollingReleaseOffset` property. This change was introduced on 30th July 2024.
* [Add Availability blocks](../operations/availabilityblocks.md#add-availability-blocks):
  * **Breaking:** `ReleasedUtc` property in [Availability block](../operations/availabilityblocks.md#availability-block) object is no longer `required`. This breaking change was introduced on 8th January 2024, see __Mews Operations__ release note [Introducing rolling release dates to unlock allotments for availability blocks](https://releases.mews.com/en/introducing-rolling-release-dates-to-unlock-allotments-for-availability-blocks).
  * Extended [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters) with `RollingReleaseOffset`. This change was introduced on 30th July 2024.
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) with `RollingReleaseOffset` property. This change was introduced on 30th July 2024.
* [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks):
  * Extended [Availability block update parameters](../operations/availabilityblocks.md#availability-block-update-parameters) with `RollingReleaseOffset` and `ReleaseStrategy` properties. This change was introduced on 30th July 2024.
  * Documented missing fields in [Availability block update parameters](../operations/availabilityblocks.md#availability-block-update-parameters): `State`, `ReservationPurpose`, `BookerId`, `Notes`, `Budget`.
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) with `RollingReleaseOffset` property. This change was introduced on 30th July 2024.

## 4th September 2024
* [Get all voucher codes](../operations/vouchercodes.md#get-all-voucher-codes):
  * Marked `VoucherIds` filtering parameter as required. Documentation-only.
* [Request limits](../guidelines/environments.md):
  * Removed 'per Client Token' request limits. Documentation-only.

## 3rd September 2024
* [Request minimal response](../guidelines/requests.md#request-minimal-response):
  * Added new restricted functionality.
* [Response codes](../guidelines/responses.md#response-codes):
  * Extended with `204 No Content` response code.
* [Get all age categories](../operations/agecategories.md#get-all-age-categories):
  * Extended `AgeCategory` with `Classification` property.

## 30th August 2024
* [Get all companies](../operations/companies.md#get-all-companies):
* [Add company](../operations/companies.md#add-company):
* [Update company](../operations/companies.md#update-company):
  * **Deprecated** `ElectronicInvoiceIdentifier` property in [Company](../operations/companies.md#company) object. Use `AdditionalTaxIdentifier` instead.

## 22nd August 2024
* [Get all resource category assignments](../operations/resourcecategories.md#get-all-resource-category-assignments):
  * Extended request object with `ResourceIds` filtering parameter.

## 21st August 2024
* [Add export](../operations/exports.md#add-export):
  * Extended functionality with support for entity types `AvailabilityAdjustment`, `AvailabilityBlock`, and `ResourceBlock`.
* [Add reservation companion](../operations/reservations.md#add-reservation-companion):
* [Delete reservation companion](../operations/reservations.md#delete-reservation-companion):
* [Confirm reservation](../operations/reservations.md#confirm-reservation):
  * Added support for Portfolio Access Tokens.

## 16th August 2024
* [Get all customers](../operations/customers.md#get-all-customers):
  * Extended [Customer](../operations/customers.md#customer) object with `PreferredLanguageCode` property.
* Added new use case for [Customer loyalty](../use-cases/loyalty.md). Documentation-only.

## 8th August 2024
* [Get all bills](../operations/bills.md#get-all-bills):
  * Extended request object with `CorrectionState` filtering parameter.
  * Extended [Bill](../operations/bills.md#bill) response object with `CorrectionState`, `CorrectionType`, and `CorrectedBillId` properties.
* [Add bill](../operations/bills.md#add-bill):
* [Update bills](../operations/bills.md#update-bills):
* [Close bill](../operations/bills.md#close-bill):
  * Extended [Bill](../operations/bills.md#bill) response object with `CorrectionState`, `CorrectionType`, and `CorrectedBillId` properties.

## 1st August 2024
* [Get all voucher codes](../operations/vouchercodes.md#get-all-voucher-codes):
  * Extended [Voucher code](../operations/vouchercodes.md#voucher-code) response object with `IsActive` property.

## 8th July 2024
* [Get all payments](../operations/payments.md#get-all-payments):
  * Extended [Payment data](../operations/payments.md#payment-data) response object with `Type` for Invoice payment type.

## 3rd July 2024
* [Get all order items](../operations/orderitems.md#get-all-order-items):
  * Extended [Order item](../operations/orderitems.md#order-item) response object with `BillingName` property.

## 24th June 2024
* Added new page [Restrictions](../concepts/restrictions.md) under [Concepts](../concepts/README.md). Documentation-only.
* [Add restrictions](../operations/restrictions.md#add-restrictions):
  * **Deprecated** operation. Use [Set restrictions](../operations/restrictions.md#set-restrictions) instead.
* [Delete restrictions](../operations/restrictions.md#delete-restrictions):
  * **Deprecated** operation. Use [Clear restrictions](../operations/restrictions.md#clear-restrictions) instead.

## 18th June 2024
* [Set restrictions](../operations/restrictions.md#set-restrictions):
* [Clear restrictions](../operations/restrictions.md#clear-restrictions):
  * Removed **Restricted!** status.

## 17th June 2024
* [Get all payments](../operations/payments.md#get-all-payments):
  * Extended [Payment data](../operations/payments.md#payment-data) object with `Ghost` property.

## 10th June 2024
* Moved the [Taxation](../concepts/taxation.md) page to the new [Concepts](../concepts/README.md) section. Documentation-only.

## 5th June 2024
* Added new section [Concepts](../concepts/README.md) including an explanation of [Time units](../concepts/time-units.md). Documentation-only.

## 4th June 2024
* [Cancel reservation](../operations/reservations.md#cancel-reservation):
  * Extended request object with `SendEmail` parameter.

## 3rd June 2024
* [Get rate pricing](../operations/rates.md#get-rate-pricing):
* [Get service availability (ver 2024-01-22)](../operations/services.md#get-service-availability-ver-2024-01-22):
* [Get service availability](../operations/services.md#get-service-availability):
* [Update service availability](../operations/services.md#update-service-availability):
  * Updated the maximum size of time interval for [Rates](../operations/rates.md) and [Services](../operations/services.md) from 24 months to 60 months if the service `TimeUnitPeriod` is `Month`.

## 28th May 2024
* [Get all product service orders](../operations/productserviceorders.md#get-all-product-service-orders):
  * Extended with filtering parameter `LinkedReservationIds`.

## 24th May 2024
* [Get all outlet items](../operations/outletitems.md#get-all-outlet-items):
  * Extended [Outlet item](../operations/outletitems.md#outlet-item) response object with `PaymentCardPaymentId` property.

## 23rd May 2024
* [Get all customers](../operations/customers.md#get-all-customers):
* [Add customer](../operations/customers.md#add-customer):
* [Update customer](../operations/customers.md#update-customer):
* [Search customers](../operations/customers.md#customer):
* [Update accounts](../operations/accounts.md#update-accounts):
* [Get all companionships](../operations/companionships.md#get-all-companionships):
* [Get all reservations (ver 2017-04-12)](../operations/reservations.md#get-all-reservations-ver-2017-04-12):
  * Extended [Customer option](../operations/customers.md#customer-option) object with `SendMarketingPostalMail`, `SendPartnerMarketingEmails`, and `SendPartnerMarketingPostalMail` options.

## 21st May 2024
* [Response codes](../guidelines/responses.md#response-codes):
  * Added new response code `409 Conflict`.
* [Set restrictions](../operations/restrictions.md#set-restrictions):
* [Clear restrictions](../operations/restrictions.md#clear-restrictions):
  * Introduced `409 Conflict` error.

## 15th May 2024
* [Get product pricing](../operations/products.md#get-product-pricing):
  * Added new operation (restricted).

## 9th May 2024
* [Charge credit card](../operations/creditcards.md#charge-credit-card):
  * Extended request object with `ReservationId` parameter.

## 8th May 2024
* [Add alternative payment](../operations/payments.md#add-alternative-payment):
  * Extended request object with `Data` parameter.
  * **Deprecated** `Method` and `RedirectUrl` parameters. Use `Data` instead.

## 19th April 2024
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended [Reservation (ver 2023-06-06)](../operations/reservations.md#reservation-ver-2023-06-06) response object with `ActualEndUtc` and `ScheduledEndUtc` properties.
  * **Deprecated** `EndUtc` property in [Reservation (ver 2023-06-06)](../operations/reservations.md#reservation-ver-2023-06-06) response object.

## 12th April 2024
* [Add order](../operations/orders.md#add-order):
  * Extended request object with `LinkedReservationId` parameter.
* [Get all product service orders](../operations/productserviceorders.md#get-all-product-service-orders):
  * Extended [Product service order](../operations/productserviceorders.md#product-service-order) response object with `LinkedReservationId` property.
* [Add payment command](../operations/commands.md#add-payment-command):
  * Extended request object with `ReservationId` parameter.

## 12th March 2024
* Unused [reservation state](../operations/reservations.md#reservation-state) `Requested` removed from the documentation.

## 5th March 2024
* [Get all payment requests](../operations/paymentrequests.md#get-all-payment-requests):
  * Extended [Payment request](../operations/paymentrequests.md#payment-request) response object with `ReservationId` property.
  * Extended request object with filtering parameter `ReservationIds`.
* [Add payment requests](../operations/paymentrequests.md#add-payment-requests):
* [Cancel payment requests](../operations/paymentrequests.md#cancel-payment-requests):
  * Extended [Payment request](../operations/paymentrequests.md#payment-request) response object with `ReservationId` property.
* [Get all preauthorizations by customers](../operations/preauthorizations.md#get-all-preauthorizations-by-customers):
  * Extended [Preauthorization](../operations/preauthorizations.md#preauthorization) response object with `ReservationId` property.
* [Get all payments](../operations/payments.md#get-all-payments):
  * Extended [Payment](../operations/payments.md#payment) response object with `ReservationId` property.
  * Extended request object with filtering parameter `ReservationIds`.
* [Add credit card payment](../operations/payments.md#add-credit-card-payment):
* [Add external payment](../operations/payments.md#add-external-payment):
* [Add alternative payment](../operations/payments.md#add-alternative-payment):
  * Extended [Payment](../operations/payments.md#payment) response object with `ReservationId` property.

## 1st March 2024
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `ScheduledStartUtc` parameter.

## 26th February 2024
* [Get service availability (ver 2024-01-22)](../operations/services.md#get-service-availability-ver-2024-01-22):
  * Added new operation.

## 21st February 2024
* [Get all resource categories](../operations/resourcecategories.md#get-all-resource-categories):
  * Extended request object with `ActivityStates` parameter.

## 15th February 2024
* Added ['how to' use cases](../use-cases/how-to.md) page. Documentation-only.

## 12th February 2024
* [Get all order items](../operations/orderitems.md#get-all-order-items):
  * Extended [Order item](../operations/orderitems.md#order-item) response object with `Options` property.

## 2nd February 2024
* Updated the following use cases (documentation only):
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
* [Get all rates](../operations/rates.md#get-all-rates):
  * Extended request with `ActivityStates` parameter.
* [Get all rate groups](../operations/rategroups.md#get-all-rate-groups):
  * Added new operation.
* [Get all rates](../operations/rates.md#get-all-rates):
  * **Deprecated** operation extent `RateGroups`. Use [Get all rate groups](../operations/rategroups.md#get-all-rate-groups) instead.

## 1st February 2024
* Pushed back discontinued dates for [deprecated features](../deprecations/README.md).

## 26th January 2024
* [Get all rules](../operations/rules.md#get-all-rules):
  * Extended [Rule](../operations/rules.md#rule) response object with `ServiceId` property.

## 24th January 2024
* [Get all rates](../operations/rates.md#get-all-rates):
  * Extended with filtering parameter `ExternalIdentifiers`.
* [Get all vouchers](../operations/vouchers.md#get-all-vouchers):
  * Extended with filtering parameter `ExternalIdentifiers`.
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * **Breaking!** Renamed `CompanyId` to `PartnerCompanyId` in [Reservations (ver 2023-06-06)](../operations/reservations.md#reservations-ver-2023-06-06) response object.
  * **Breaking!** Removed `EnterpriseId` from the response.
  * Added `QrDataCode` and `CancellationReason` to the response.
  * Fixed description. Documentation-only.

## 23rd January 2024
* [Update accounts](../operations/accounts.md#update-accounts):
  * Added new operation.

## 22nd January 2024
* [Resource access token](../operations/resourceaccesstokens.md#resource-access-token):
  * Extended with `IsActive` property.

## 19th January 2024
* Updated the [Demo environment](../guidelines/environments.md#demo-environments) credentials.

## 16th January 2024
* [Delete companies](../operations/companies.md#delete-companies):
  * Added new operation.

## 15th January 2024
* Updated [Request limits](../guidelines/README.md#request-limits) for both Demo and Production environments.

| Next |
| :-- |
| [Changelog 2023](changelog2023.md) |
