# Changelog

## 3rd November 2025
* [Get all source assignments (ver 2024-09-20)](../operations/sourceassignments.md#get-all-source-assignments-ver-2024-09-20) (restricted operation):
  * **Breaking:** `EnterpriseIds` property changed from **optional** to **required** and max 1 item when using Portfolio Access Token.
  * Extended request object with `UpdatedUtc` filtering parameter.
  * Extended [Source assignments (ver 2024-09-20)](../operations/sourceassignments.md#source-assignments-ver-2024-09-20) response object with `UpdatedUtc` property.

## 30th October 2025
* [Get all bills](../operations/bills.md#get-all-bills):
  * **Deprecated:** `ClosedUtc` parameter in request object. Use `IssuedUtc` instead.
* [Get all fiscal machine commands](../operations/commands.md#get-all-fiscal-machine-commands)
  * Extended [Bill parameters](../operations/commands.md#bill-ver-2025-06-23) in response object with `AccountType` property.
* [Get all order items](../operations/orderitems.md#get-all-order-items):
  * Extended [Tax exemption reason type](../operations/orderitems.md#tax-exemption-reason-type) with `Unknown` for unknown tax exemption reasons.

## 13th October 2025
* [Get all resource category assignments](../operations/resourcecategories.md#get-all-resource-category-assignments):
  * Clarified behavior of `ActivityStates` filtering property. Documentation-only, no change to API.

## 1st October 2025
* [Get configuration](../operations/configuration.md#get-configuration):
  * Extended response object with accounting configuration options.

## 25th September 2025
* [Get all ledger balances](../operations/ledgerbalances.md#get-all-ledger-balances):
  * Added new operation.

## 24th September 2025
* [Add payment plan](../operations/paymentplans.md#add-payment-plan):
  * Added new operation (restricted).
* [Get all services](../operations/services.md#get-all-services):
  * Extended request object with `ServiceType` filtering parameter.
* [Get all bills](../operations/bills.md#get-all-bills):
  * Extended [Bill parameters](../operations/bills.md#bill-parameters) request object with `Type` and `IssuedUtc` parameter.

## 23rd September 2025
* [Get all rules](../operations/rules.md#get-all-rules):
  * Fixed description per OpenAPI Specification. Documentation-only, no change to API.

## 22nd September 2025
* [Delete loyalty memberships](../operations/loyaltymemberships.md#delete-loyalty-memberships):
* [Add tokenized credit card](../operations/creditcards.md#add-tokenized-credit-card):
  * Included support for [Portfolio Access Tokens](../guidelines/authentication.md#portfolio-access-tokens).

## 19th September 2025
* [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items):
* [Update accounting items](../operations/accountingitems.md#update-accounting-items):
  * Fixed description and examples per OpenAPI Specification. Documentation-only, no change to API.

## 17th September 2025
* [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks):
  * Extended [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters) request object with `PickupDistribution` parameter.

## 15th September 2025
* [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks):
  * **Deprecated:** `Extent` parameter in request object.
  * Extended request object with `ActivityStates` filtering parameter which replaces `Extent` parameter.
* [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks):
* [Add resource blocks](../operations/resourceblocks.md#add-resource-blocks):
* [Update resource blocks](../operations/resourceblocks.md#update-resource-blocks):
  * Extended [Resource block](../operations/resourceblocks.md#resource-block) response object with `EnterpriseId` property.
* [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
* [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks):
* [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks):
  * Extended [Availability Block](../operations/availabilityblocks.md#availability-block) response object with `BusinessSegmentId` parameter.

## 12th September 2025
* [Get all order items](../operations/orderitems.md#get-all-order-items):
  * Extended [Tax exemption reason type](../operations/orderitems.md#tax-exemption-reason-type) with `DE_NATO` for German tax exemptions.
* [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks):
  * Extended [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters) request object with `BusinessSegmentId` parameter.
* [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks):
  * Extended [Availability block update parameters](../operations/availabilityblocks.md#availability-block-update-parameters) request object with `BusinessSegmentId` parameter.
* Fixed contract requirements for coproducts per OpenAPI Specification, notably `OwnerData` and `AssigneeData` in [Bill](../operations/bills.md#bill). Documentation-only, no change to API.

## 11th September 2025
* [Get resources' occupancy state](../operations/resources.md#get-resources-occupancy-state):
  * Added new operation (restricted).
* [Get all resources](../operations/resources.md#get-all-resources):
* [Update resources](../operations/resources.md#update-resources):
  * Fixed description and examples per OpenAPI Specification. Documentation-only, no change to API.
* [Get all resources](../operations/resources.md#get-all-resources):
  * Extended request object with `Names` filtering parameter.
  * Extended [Resource](../operations/resources.md#resource) response object with `Descriptions`, `ExternalNames`, and `Directions` properties.
* [Get all resource categories](../operations/resourcecategories.md#get-all-resource-categories):
  * Extended [Resource category](../operations/resources.md#resource-category) response object with `EnterpriseId`, `ServiceId`, `Classification`, and `AccountingCategoryId` properties.

## 9th September 2025
* [Get all loyalty programs](../operations/loyaltyprograms.md#get-all-loyalty-programs):
  * Extended request object with `Codes` filtering parameter.
* [Get all loyalty programs](../operations/loyaltyprograms.md#get-all-loyalty-programs):
* [Add loyalty programs](../operations/loyaltyprograms.md#add-loyalty-programs):
* [Update loyalty programs](../operations/loyaltyprograms.md#update-loyalty-programs):
  * Fixed description and examples per OpenAPI Specification. Documentation-only, no change to API.
  * Extended [Loyalty program type](../operations/loyaltyprograms.md#loyalty-program-type) with `Unknown` type.

## 4th September 2025
* [Add order](../operations/orders.md#add-order)
  * Extended request object with `BusinessSegmentId` and `Options` properties.
  * Extended [Product order parameters](../operations/orders.md#product-order-parameters) and [Item parameters](../operations/orders.md#item-parameters) with `ExternalIdentifier` property.
* [Get all resource category image assignments](../operations/resourcecategories.md#get-all-resource-category-image-assignments):
  * Extended [Resource category image assignment](../operations/resourcecategories.md#resource-category-image-assignment) response object with `Ordering` property.

## 1st September 2025
* [Get all messages](../operations/messages.md#get-all-messages):
* [Add messages](../operations/messages.md#add-messages):
  * Fixed description and examples per OpenAPI Specification. Documentation-only, no change to API.

## 29th August 2025
* [Get all message threads](../operations/messagethreads.md#get-all-message-threads)
  * Extended [Message thread](../operations/messagethreads.md#message-thread) response object with `IsResolved` property.

## 27th August 2025
* [Get configuration](../operations/configuration.md#get-configuration):
* [Get all enterprises](../operations/enterprises.md#get-all-enterprises):
  * Extended [Enterprise](../operations/enterprises.md#enterprise) response object with `BusinessDayClosingOffset` property.

## 26th August 2025
* [Get all companionships](../operations/companionships.md#get-all-companionships)
  * Clarified the filter requirements for request parameters. Documentation-only. No change to API.

## 22nd August 2025
* [Add export](../operations/exports.md#add-export):
  * Extended request object with `Filters` and `Scope` parameters.
* [Add export](../operations/exports.md#add-export):
* [Get all exports](../operations/exports.md#get-all-exports):
  * Extended [Export](../operations/exports.md#export) response object with `Filters` and `Scope` properties.

## 18th August 2025
* Fixed contract requirements for various enums per OpenAPI Specification. Documentation-only, no change to API.

## 13th August 2025
* Added new Webhook event `IntegrationApiKeyCreated` in [Integration Webhooks](../events/wh-integration.md).

## 12th August 2025
* [Get all payments](../operations/payments.md#get-all-payments)
  * Extended [Payment](../operations/payments.md#payment) response object with `PaymentOrigin` property.

## 5th August 2025
* [Get all exports](../operations/exports.md#get-all-exports):
  * Export file URLs now expire after 10 minutes and are regenerated with each request.
* [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships):
  * **Deprecated:** `Codes` in request object.
  * Extended request object with `MembershipNumbers` that is replacing the `Codes` property. 
  * **Deprecated:** `Code` in response object [Loyalty Membership](../operations/loyaltymemberships.md#loyalty-membership).
  * Extended repsponse object [Loyalty Membership](../operations/loyaltymemberships.md#loyalty-membership) with `MembershipNumber` property that is replacing the `Codes` property. 
* [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships)
  * **Deprecated:** `Code` in [Loyalty membership parameters](../operations/loyaltymemberships.md#loyalty-membership-parameters) request object.
  * Extended [Loyalty membership parameters](../operations/loyaltymemberships.md#loyalty-membership-parameters) request object with `MembershipNumber` that is replacing the `Codes` property. 
  * **Deprecated:** `Code` in response object [Loyalty Membership](../operations/loyaltymemberships.md#loyalty-membership).
  * Extended repsponse object [Loyalty Membership](../operations/loyaltymemberships.md#loyalty-membership) with `MembershipNumber` property that is replacing the `Codes` property. 
* [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships)
  * **Deprecated:** `Code` in [Loyalty membership update parameters](../operations/loyaltymemberships.md#loyalty-membership-update-parameters) request object.
  * Extended [Loyalty membership update parameters](../operations/loyaltymemberships.md#loyalty-membership-update-parameters) request object with `MembershipNumber` that is replacing the `Codes` property. 
  * **Deprecated:** `Code` in response object [Loyalty Membership](../operations/loyaltymemberships.md#loyalty-membership).
  * Extended repsponse object [Loyalty Membership](../operations/loyaltymemberships.md#loyalty-membership) with `MembershipNumber` property that is replacing the `Codes` property. 

## 4th August 2025
* [Get all preauthorizations by customers](../operations/preauthorizations.md#get-all-preauthorizations-by-customers):
  * Aligned with OpenAPI Specification, adding previously undocumented properties and fixing examples.
  * Extended [Prauthorization](preauthorizations.md#preauthorization) response object with `CustomerId` and `IsActive` properties.
  * Extended [Preauthorization state](preauthorizations.md#preauthorization-state) with `Pending` and `Failed`.

## 1st August 2025
* [Add outlet bills](../operations/outletbills.md#add-outlet-bills):
  * Aligned with OpenAPI Specification, adding previously undocumented properties.
  * Extended [Outlet bill parameters](../operations/outletbills.md#outlet-bill-parameters) request object with `AccountId` and `Notes` parameters.

## 30th July 2025
* [Get all counters](../operations/counters.md#get-all-counters):
  * Extended [Counter](../operations/counters.md#counter) response object with `EnterpriseId` property.
  * Extended [Counter type discriminator](../operations/counters.md#counter-type-discriminator) with `AccountingCounter`.
* [Get all product categories](../operations/productcategories.md#get-all-product-categories):
  * Aligned with OpenAPI Specification. Documentation-only. No change to API.
* [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships):
  * Extended request object with `ProviderMembershipId` parameter.

## 28th July 2025
* Improved documentation around async processing and retries of Webhooks in [Webhooks FAQ](../events/wh-faq.md#do-you-attempt-to-resend-failed-webhook-messages) and [Important considerations for General Webhooks](../events/wh-general.md#important-considerations). Documentation-only. No change to API.

## 24th July 2025
* [Add reservations](../operations/reservations.md#add-reservations):
* [Price reservations](../operations/reservations.md#price-reservations):
  * Fixed the description of `State` parameter in [Reservation parameters](../operations/reservations.md#reservation-parameters) request object. Documentation-only, no change to API functionality.

## 23rd July 2025
* [Get all bills](../operations/bills.md#get-all-bills):
* [Add bill](../operations/bills.md#add-bill):
* [Update bills](../operations/bills.md#update-bills):
  * Extended [Bill](../operations/bills.md#bill) response object with `AccountType` property.
* [Get all order items](../operations/orderitems.md#get-all-order-items):
  * Extended [Tax exemption reason type](../operations/orderitems.md#tax-exemption-reason-type) with `PL_ZW` and `PL_NP` for Polish tax exemptions.
* [Update reservations](../operations/reservations.md#update-reservations)
  * Fixed the description of `AssignedResourceLocked` parameter in [Reservation updates](../operations/reservations.md#reservation-updates) request object. Documentation-only, no change to API functionality.
* [Get all customers](../operations/customers.md#get-all-customers)
* [Update customer](../operations/customers.md#update-customer):
* [Add customer](../operations/customers.md#add-customer):
  * Extended [Customer option](../operations/customers.md#customer-option) with `IdPhotosConsent` and `GuestPhotoConsent`.
* [Set rates](../operations/rates.md#set-rates) (restricted operation):
  * Removed `NegativeOccupancyAdjustment` and `ExtraOccupancyAdjustment` from `BaseRatePricing` of the request object [Rate set pricing data parameters](../operations/rates.md#rate-set-pricing-data-parameters).

## 14th July 2025
* [Get all fiscal machine commands](../operations/commands.md#get-all-fiscal-machine-commands):
  * Added new operation (restricted).
* [Get all payments](../operations/payments.md#get-all-payments):
* [Add external payment](../operations/payments.md#add-external-payment):
  * **Deprecated** the following external payment types for new integration partners: `CreditCard`, `IDeal`, `PayPal`, `OnlinePayment`, `MasterCard`, `Visa`, `Amex`, `Discover`, `DinersClub`, `Jcb`, and `UnionPay`.

## 10th July 2025
* Updated [Response codes](../guidelines/responses.md#response-codes) with `Request-Id` header, which is now present with each request.
* Extended [Error response details](../guidelines/responses.md#error-response-details) with `RequestId`.

## 1st July 2025
* [Get all order items](../operations/orderitems.md#get-all-order-items):
    * Extended [Order item data](../operations/orderitems#order-item-data) response object with `AllowanceDiscount` and `AllowanceProfits` fields.

## 20th June 2025
* [Get all resource blocks](../operations/resourceblocks.md#resource-block):
  * Extended response object to include `DeletedUtc` field.
* [Get reservation channel manager details](../operations/reservations.md#get-reservation-channel-manager-details):
  * Extended response object [Reservation channel manager details](../operations/reservations.md#reservation-channel-manager-details) with `ChannelManagerGroupNumber`.

## 19th June 2025
* [Update rate capacity offset pricing](rates.md#update-rate-capacity-offset-pricing):
  * Added new operation for updating rate capacity offset pricing.

## 16th June 2025
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `PartnerCompanyIds` and `TravelAgencyIds` filtering parameters.

## 13th June 2025
* [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents):
  * **Change in behavior**: The identity document `Number` property is an empty string when the number is not collected in certain regions, such as The Netherlands.
* [Add identity documents](../operations/identitydocuments.md#add-identity-documents):
  * **Change in behavior**: If identity document number is not collected in certain regions, such as The Netherlands, use an empty string for the `Number` property.
* [Update identity documents](../operations/identitydocuments.md#update-identity-documents):
* [Add customer](../operations/customers.md#add-customer):
* [Update customer](../operations/customers.md#update-customer):
  * **Change in behavior**: If identity document number is not collected in certain regions, such as The Netherlands, do not use the optional `Number` property.
* [Get configuration](../operations/configuration.md#get-configuration):
  * Extended response object with `IsIdentityDocumentNumberRequired` property.

## 6th June 2025
* [Get configuration](../operations/configuration.md#get-configuration):
  * Extended response object [Enterprise](configuration.md#enterprise) with `HoldingKey`and `ChainName`properties.
* [Get all enterprises](../operations/enterprises.md#get-all-enterprises):
  * Extended response object [Enterprise](enterprises.md#enterprise) with `HoldingKey`and `ChainName`properties.
  
## 5th June 2025
* [Get all products](../operations/products.md#get-all-products):
  * Extended [product classifications](../operations/products.md#product-classifications) with `Fee`.

## 2nd June 2025
* [Get all bills](../operations/bills.md#get-all-bills):
  * Extended response object [Bill customer data](../operations/bills.md#bill-customer-data) with `TaxIdentifier` property.

## 28th May 2025
* [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships):
  * Extended request with `ProviderMembershipId` property.
  * Extended response object [Loyalty membership](../operations/loyaltymemberships.md#loyalty-membership) with `ProviderMembershipId` property.
* [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships):
  * Extended response object [Loyalty membership](../operations/loyaltymemberships.md#loyalty-membership) with `ProviderMembershipId` property.
  * Fixed documentation for the `State` property in the [request parameters](../operations/loyaltymemberships.md#loyalty-membership-parameters): changed contract from **required** to **optional** and clarified the default value. Documentation-only, no change to API.
* [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships):
  * Extended response object [Loyalty membership](../operations/loyaltymemberships.md#loyalty-membership) with `ProviderMembershipId` property.

## 27th May 2025
* [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks):
  * Added `PurchaseOrderNumber` request parameter.
* [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks):
  * Added `PurchaseOrderNumber` request parameter.
* [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended response object with `PurchaseOrderNumber` property.

## 22nd May 2025
* [Get all customers](../operations/customers.md#get-all-customers):  
* [Search customers](../operations/customers.md#search-customers):
* [Add customer](../operations/customers.md#add-customer):
* [Update customer](../operations/customers.md#update-customer):
  * Extended [Customer](../operations/customers.md#customer) response object with `CreatorProfileId` and `UpdaterProfileId` properties.

## 20th May 2025
* [Get all billing automations](../operations/billingautomations.md#get-all-billing-automations):
* [Add billing automations](../operations/billingautomations.md#add-billing-automations):
* [Update billing automations](../operations/billingautomations.md#update-billing-automations):
* [Update billing automation assignments](../operations/billingautomations.md#update-billing-automation-assignments):
* [Delete billing automations](../operations/billingautomations.md#delete-billing-automations):
  * Added new operations (restricted).

## 19th May 2025
* [Get all rates](../operations/rates.md#get-all-rates):
  * Extended [Rate](../operations/rates.md#rate) response object with `IsDefault` property.

## 12th May 2025
* Re-formatted 2025 and 2024 changelog entries to follow current format, for easier search. Documentation-only, no change to API. 
* Clarified [Scope of restrictions](../concepts/restrictions.md#scope-of-restrictions). Documentation-only, no change to API.  

## 24th April 2025
* Refreshed the [Getting started](../getting-started/README.md) page. Documentation-only, no change to API.  

## 8th April 2025
* Aligned [Commands API operations](../operations/commands.md) with OpenAPI Specification, adding previously undocumented properties and fixing examples. Documentation-only.

## 4th April 2025
* [Get all company contracts](../operations/companycontracts.md#get-all-company-contracts):
  * Extended request object with `ActivityStates` filtering parameter.

## 2nd April 2025
* Newly introduced operations from this date onward require the address to match the format specified in the documentation (e.g. correct casing, no trailing slash at the end). If the address does not match, the server will respond with a `404 Not Found` error.
* [Get all service order notes](../operations/serviceordernotes.md#get-all-service-order-notes):
  * Extended request object with `Types` filtering parameter and support for `SpecialRequest` service order note type.
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `ChannelNumbers` filtering parameter.
* [Get all rates](../operations/rates.md#get-all-rates):
  * Extended [Rate](../operations/rates.md#rate) response object with `TaxExemptionReason` and `TaxExemptionLegalReference` properties.
* [Set rates](../operations/rates.md#set-rates) (restricted operation):
  * Removed `AccountingCategoryId`, `BusinessSegmentId`, `ShortNames`, and `ExternalNames` from [Set rate parameters](../operations/rates.md#set-rate-parameters) request object.
* [Get all products](../operations/products.md#get-all-products):
  * Extended [Product](../operations/products.md#product) response object with `TaxExemptionReason` and `TaxExemptionLegalReference` properties.
* [Get all order items](../operations/orderitems.md#get-all-order-items):
  * Extended [Order item](../operations/orderitems.md#order-item) response object with `TaxExemptionReason` and `TaxExemptionLegalReference` properties.
  * Extended [Order item type](../operations/orderitems.md#order-item-type) with `AllowanceDiscount`, `AllowanceBreakage`, and `AllowanceContraBreakage`.
* [Cancel order items](../operations/orderitems.md#cancel-order-items):
  * Added new operation (restricted).
* [Get all bills](../operations/bills.md#get-all-bills):
  * Extended [Bill company data](../operations/bills.md#bill-company-data) response object with the following properties: `DUNS`, `Telephone`, `TaxIdentifier`, `InvoicingEmail`, and `Department`.

## 1st April 2025
* Updated [Guidelines: Response codes](../guidelines/responses.md#response-codes):
  * Documented 404 and 5xx response codes. Documentation-only, no change to API.  

## 21st March 2025
* Updated [Migration guide: Get all reservations](../deprecations/migration-guide-get-reservations.md). Specified  replacement for `ChannelManager`. Documentation-only. No change to API.

## 20th March 2025
* [Get reservations channel manager details](../operations/reservations.md#get-reservation-channel-manager-details):
  * Extended response object with `ChannelManagerName`, `ChannelNumber`, `ChannelManagerNumber` and `CreatedUtc`.

## 13th March 2025
* Added guidance on linking customer orders to reservations. Documentation-only, no change to API. This affects the following pages:
  * [Orders](../operations/orders.md)
  * [Events](../use-cases/events.md)
  * [Kiosk](../use-cases/kiosk.md)
  * [Guest technology](../use-cases/guest-technology.md)
  * [Upsell](../use-cases/upsell.md)
  * [Point of sale](../use-cases/point-of-sale.md)
  * ['How to' use cases](../use-cases/how-to.md)

## 11th March 2025
* Added [Migration guide: Get all reservations](../deprecations/migration-guide-get-reservations.md). Documentation-only. No change to API.

## 4th March 2025
* [Get all order items](../operations/orderitems.md#get-all-order-items):
  * Extended request object with `AccountIds` filtering parameter.
* [Get all cashier transactions)](../operations/cashiertransactions.md#get-all-cashier-transactions):
  * Incorrectly named filtering parameter `UpdatedUtc` changed to `CreatedUtc`. Documentation only, no changes to API functionality.

## 27th February 2025
* [Update customer](../operations/customers.md#update-customer):
  * Corrected `Title` and `Sex` in request parameters to be optional. Documentation only, no changes to API functionality.

## 26th February 2025
* [Get all availability adjustments](../operations/availabilityadjustments.md#get-all-availability-adjustments)
  * Extended response object with `FirstTimeUnitReleaseUtc`

## 21st February 2025
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `ActualEndUtc` filtering parameter.

## 20th February 2025
* [Get reservation channel manager details](../operations/reservations.md#get-reservation-channel-manager-details):
  * Added new operation (restricted).

## 19th February 2025
* [Delete company contracts](../operations/companycontracts.md#delete-company-contracts):
  * Included support for [Portfolio Access Tokens](../guidelines/authentication.md#portfolio-access-tokens).

## 11th February 2025
* [Disable gateway credit card](../operations/creditcards.md#disable-gateway-credit-card):
  * Added new operation (restricted).

## 3rd February 2025
* [Add rates](../operations/rates.md#add-rates):
  * Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request parameters `ServiceId`, `RateGroupId` and `BaseRateId`.
* [Set rates](../operations/rates.md#set-rates):
  * Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request parameters `ServiceId`, `RateGroupId` and `BaseRateId`.
* [Delete rates](../operations/rates.md#delete-rates):
  * Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request parameter `RateIds`.
* [Get all age categories](../operations/agecategories.md#get-all-age-categories):
  * Extended [Age category](../operations/agecategories.md#age-category) with `ExternalIdentifier`.

## 31st January 2025
* [Get bill PDF](../operations/bills.md#get-bill-pdf):
  * Extended request object with `PdfTemplate` and `PrintReason` parameters.
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `ActualStartUtc` filtering parameter.

## 23rd January 2025
* [Get all commands](../operations/commands.md#get-all-commands):
  * **Breaking:** `CustomerId` and `FullName` is no longer required in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object.
  * **Deprecated:** `CustomerId` and `FullName` in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object.
  * Extended [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) with `AccountId` and [`AccountData`](../operations/commands.md#account-data-for-payment-terminal-command).
* [Get all commands by ids](../operations/commands.md#get-all-commands-by-ids):
  * **Breaking:** `CustomerId` and `FullName` is no longer required in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object.
  * **Deprecated:** `CustomerId` and `FullName` in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object.
  * Extended [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object with `AccountId` property and [`AccountData`](../operations/commands.md#account-data-for-payment-terminal-command) object

## 21st January 2025
* [Get all customers](../operations/customers.md#get-all-customers):
  * **Deprecated** operation extent `Documents`. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense` in [Customer](../operations/customers.md#customer) response object. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
* [Search customers](../operations/customers.md#search-customers):
  * **Deprecated** operation extent `Documents`. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense` in [Customer](../operations/customers.md#customer) response object. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
* [Get all companionships](../operations/companionships.md#get-all-companionships):
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense` in [Customer](../operations/customers.md#customer) response object under extent `Customers`. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
* [Add customer](../operations/customers.md#add-customer): 
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense`. Use [Add identity documents](../operations/identitydocuments.md#add-identity-documents) instead
* [Update customer](../operations/customers.md#update-customer): 
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense`. Use [Update identity documents](../operations/identitydocuments.md#update-identity-documents) and [Delete identity documents](../operations/identitydocuments.md#delete-identity-documents) instead.
* [Get all enterprises](../operations/enterprises.md#get-all-enterprises)
  * Extended [Enterprise](../operations/enterprises.md#enterprise) response object with `Address`.
* [Get configuration](../operations/configuration.md#get-configuration): 
  * `Address` is no longer deprecated in [Enterprise](../operations/configuration.md#enterprise).
* [Get all payments](../operations/payments.md#get-all-payments):
  * Extended request object with `AccountIds` filtering parameter.
* [Update resource access tokens](../operations/resourceaccesstokens.md#update-resource-access-tokens): 
  * Extended request object with `Value` parameter.

## 16th January 2025
* [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) response object with `PickupDistribution` property.
  * **Deprecated** operation extent `ServiceOrders`. Use [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) instead.
  * **Deprecated** operation extent `Rates`. Use [Get all rates](../operations/rates.md#get-all-rates) instead.
* [Add availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) response object with `PickupDistribution` property.
* [Update availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) response object with `PickupDistribution` property.
* [Cancel order items](../operations/orderitems.md#cancel-order-items):
  * Added new operation (restricted).

## 9th January 2025
* Postponed the discontinuation of the following operations to 10th May 2025:
  * [Get all reservations (ver 2017-04-12)](../operations/reservations.md#get-all-reservations-ver-2017-04-12)
  * [Get all reservation items](../operations/reservations.md#get-all-reservation-items)
  * [Merge customers](../operations/customers.md#merge-customers)
* Added missing documentation for webhook event `PaymentUpdated` in [General Webhooks](../events/wh-general.md). Documentation-only.

## 7th January 2025
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md):
  * Extended request with `AvailabilityBlockIds` request filtering parameter.

## 6th January 2025
* [Get all source assignments (ver 2024-09-20)](../operations/sourceassignments.md#get-all-source-assignments-ver-2024-09-20):
  * Added new operation (restricted).

## 3rd January 2025
* Added new page [Authentication](../guidelines/authentication.md). Documentation-only. No change to API.
* Moved Multi-property page to [Concepts](../concepts/README.md). Documentation-only. No change to API.
* Clarified `discontinued` on the [Deprecations](../deprecations/README.md) page. Documentation-only, no changes to API.

| Changelog by year |
| :-- |
| [Changelog 2024](changelog2024.md) |
| [Changelog 2023](changelog2023.md) |
| [Changelog 2022](changelog2022.md) |
| [Changelog 2021](changelog2021.md) |
| [Changelog 2020](changelog2020.md) |
| [Changelog 2019](changelog2019.md) |
| [Changelog 2018](changelog2018.md) |
| [Changelog 2017](changelog2017.md) |
| [Changelog 2016](changelog2016.md) |
