# Changelog

## 23rd October 2023

* Added `UpdatedUtc` filter for following operations:
  * [Get all routing rules](../operations/routingrules.md#get-all-routing-rules)
  * [Get all payment requests](../operations/paymentrequests.md#get-all-payment-requests)
  * [Get all resource access tokens](../operations/resourceaccesstokens.md#get-all-resource-access-tokens)
  * [Get all services](../operations/resourceaccesstokens.md#get-all-resource-access-tokens)
  * [Get all rules](../operations/rules.md#get-all-rules)
  * [Get all counters](../operations/counters.md#get-all-counters)
  * [Get all company contracts](../operations/companycontracts.md#get-all-company-contracts)
  * [Get all products](../operations/products.md#get-all-products)
  * [Get all credit cards](../operations/creditcards.md#get-all-credit-cards)
  * [Get all departments](../operations/departments.md#get-all-departments)
  * [Get all business segments](../operations/businesssegments.md#get-all-business-segments)
  * [Get all age categories](../operations/agecategories.md#get-all-age-categories)
  * [Get all cashiers](../operations/cashiers.md#get-all-cashiers)
  * [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories)
  * [Get all enterprises](../operations/enterprises.md#get-all-enterprises)

* Extended following responses with new properties `CreatedUtc` and `UpdatedUtc`:
  * [Routing rule](../operations/routingrules.md#routing-rule)
  * [Payment request](../operations/paymentrequests.md#payment-request)
  * [Resource access token](../operations/resourceaccesstokens.md#resource-access-token)
  * [Service](../operations/services.md#service)
  * [Rule](../operations/rules.md#rule)
  * [Counter](../operations/counters.md#counter)
  * [Travel agency contract](../operations/companycontracts.md#travel-agency-contract)
  * [Product](../operations/products.md#product)
  * [Department](../operations/departments.md#department)
  * [Business segment](../operations/businesssegments.md#business-segment)
  * [Age category](../operations/agecategories.md#age-category)
  * [Cashier](../operations/cashiers.md#cashier)
  * [Accouting category](../operations/accountingcategories.md#accounting-category)

* Extended following responses with new property `UpdatedUtc`:
  * [Credit card](../operations/creditcards.md#credit-card)
  * [Enterprise](../operations/enterprises.md#enterprise)
  * [Configuration enterprise](../operations/configuration.md#enterprise)

## 20th October 2023
* Deprecated operation `Extent` in [Get all bills](../operations/bills.md#get-all-bills). [Get all payments](../operations/payments.md#get-all-payments) and [Get all order items](../operations/orderitems.md#get-all-order-items) should be used instead.

## 6th October 2023
  * Updated [Pagination](../guidelines/pagination.md) documentation

## 14th September 2023
  * Added operation [Add rates](../operations/rates.md#add-rates)
  * Extended [Rate](../operations/rates.md#rate) with new properties `Type` and `Descriptions`

## 12th September 2023

* Removed `AccountingCounter` from [Counter Type Discriminator](../operations/counters.md#counter-type-discriminator) since it is never used.

## 6th September 2023

* Added operation [Delete products](../operations/products.md#delete-products).
* Updated [Get all product service orders](../operations/productserviceorders.md#get-all-product-service-orders) documentation:
  * Removed `StartUtc` and `EndUtc` properties which were never exposed.
  * Added documentation for `CommanderOrigin` property.
* In [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) response:
  * Clarified behavior of `StartUtc` property, which is either the reservation's scheduled time, or the actual customer check-in time, whichever is earlier.
  * Added new properties `ScheduledStartUtc` and `ActualStartUtc`, intended ultimately to replace `StartUtc`.
  * Deprecated `StartUtc`, but no discontinuation date has been set for now.

## 31st August 2023

* Enabled [Portfolio Access Tokens](../guidelines/multi-property.md) for the following operations:
  * [Get all message threads](../operations/messagethreads.md#get-all-message-threads)
  * [Get all messages](../operations/messages.md#get-all-messages)

## 29th August 2023

* Enabled [Portfolio Access Tokens](../guidelines/multi-property.md) for the following operations:
  * [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks)
  * [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks)
  * [Delete availability blocks](../operations/availabilityblocks.md#delete-availability-blocks)

* Extended the following operations by adding `EnterpriseId` to the request parameters:
  * [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks)
  * [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks)
  * [Delete availability blocks](../operations/availabilityblocks.md#delete-availability-blocks)

## 25th August 2023

* Enabled [Portfolio Access Tokens](../guidelines/multi-property.md) for the following operations:
  * [Update reservation customer](../operations/reservations.md#update-reservation-customer)
  * [Update reservation interval](../operations/reservations.md#update-reservation-interval)
  * [Price reservations](../operations/reservations.md#price-reservations)

* Extended the following operations by adding `EnterpriseId` to the request parameters:
  * [Update reservation customer](../operations/reservations.md#update-reservation-customer)
  * [Update reservation interval](../operations/reservations.md#update-reservation-interval)
  * [Price reservations](../operations/reservations.md#price-reservations)

## 24th August 2023

* Extended [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) response with `CommanderOrigin`.

## 17th August 2023

* Extended [Customer Classification](../operations/customers.md/#customer-classification) with `InRoom` and `WaitingForRoom` classifications.

## 7th August 2023

* Re-write of [Kiosk use case](../use-cases/kiosk.md), including clarification of payment options

## 3rd August 2023

* Enabled [Portfolio Access Tokens](../guidelines/multi-property.md) for the following operations:
  * [Add customer file](../operations/customers.md#add-customer-file)

* Extended the following operations by adding `ChainId` to the request parameters:
  * [Add customer file](../operations/customers.md#add-customer-file)

* Extended the following operation by adding `ReservationGroupIds` to the request parameters:
  * [Get all reservations](../operations/reservations.md#Get-all-reservations-ver-2023-06-06)

## 2nd August 2023

* Added operation [Refund payment](../operations/payments.md#refund-payment).
* Extended [Get all payments](../operations/payments.md#get-all-payments) response with `Kind` parameter.

## 28th July 2023

* Enabled [Portfolio Access Tokens](../guidelines/multi-property.md) for the following operations:
  * [Close bill](../operations/bills.md#close-bill)
  * [Delete bill](../operations/bills.md#delete-bill)
  * [Add keycutter command](../operations/commands.md#add-key-cutter-command)
  * [Add printer command](../operations/commands.md#add-printer-command)

* Extended the following operations by adding `EnterpriseId` to the request parameters:
  * [Close bill](../operations/bills.md#close-bill)
  * [Delete bill](../operations/bills.md#delete-bill)
  * [Add keycutter command](../operations/commands.md#add-key-cutter-command)
  * [Add printer command](../operations/commands.md#add-printer-command)

## 27th July 2023

* Extended operation [Get all restrictions](../operations/restrictions.md#get-all-restrictions):
  * Added filtering by restriction origin
  * Added restriction origin property to the response

## 25th July 2023

* Added operation [Get all account notes](../operations/accountnotes.md#get-all-account-notes) to retrieve account notes.
* Added operation [Add account notes](../operations/accountnotes.md#add-account-notes) to add account notes.
* Added operation [Update account notes](../operations/accountnotes.md#update-account-notes) to update account notes.
* Added operation [Delete account notes](../operations/accountnotes.md#delete-account-notes) to delete account notes.
* Extended behavior of operations [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions). These operations now only affect restrictions created by 3rd-party integrations.  

## 11th July 2023

* Enabled [Portfolio Access Tokens](../guidelines/multi-property.md) for the following operations:
  * [Add loyalty programs](../operations/loyaltyprograms.md#add-loyalty-programs)
  * [Update loyalty programs](../operations/loyaltyprograms.md#update-loyalty-programs)
  * [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships)
  * [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships)
  * [Add loyalty tiers](../operations/loyaltytiers.md#add-loyalty-tiers)
  * [Add addresses](../operations/addresses.md#add-addresses)
  * [Update addresses](../operations/addresses.md#update-addresses)
  * [Add external payment](../operations/payments.md#add-external-payment)
  * [Update reservations](../operations/reservations.md#update-reservations)
  * [Start reservation](../operations/reservations.md#start-reservation)
  * [Process reservation](../operations/reservations.md#process-reservation)
  * [Cancel reservation](../operations/reservations.md#cancel-reservation)
  * [Update accounting items](../operations/accountingitems.md#update-accounting-items)
  * [Add bill](../operations/bills.md#add-bill)
  * [Add payment requests](../operations/paymentrequests.md#add-payment-requests)
  * [Add customer](../operations/customers.md#add-customer)
  * [Update customer](../operations/customers.md#update-customer)
  * [Add company](../operations/companies.md#add-company)
  * [Update company](../operations/companies.md#update-company)

* Extended the following operations by adding `ChainId` to the request parameters:
  * [Add loyalty programs](../operations/loyaltyprograms.md#add-loyalty-programs)
  * [Update loyalty programs](../operations/loyaltyprograms.md#update-loyalty-programs)
  * [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships)
  * [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships)
  * [Add loyalty tiers](../operations/loyaltytiers.md#add-loyalty-tiers)
  * [Add addresses](../operations/addresses.md#add-addresses)
  * [Update addresses](../operations/addresses.md#update-addresses)
  * [Add customer](../operations/customers.md#add-customer)
  * [Update customer](../operations/customers.md#update-customer)
  * [Add company](../operations/companies.md#add-company)
  * [Update company](../operations/companies.md#update-company)
 
* Extended the following operations by adding `EnterpriseId` to the request parameters:
  * [Add external payment](../operations/payments.md#add-external-payment)
  * [Update reservations](../operations/reservations.md#update-reservations)
  * [Start reservation](../operations/reservations.md#start-reservation)
  * [Process reservation](../operations/reservations.md#process-reservation)
  * [Cancel reservation](../operations/reservations.md#cancel-reservation)
  * [Update accounting items](../operations/accountingitems.md#update-accounting-items)
  * [Add bill](../operations/bills.md#add-bill)
  * [Add payment requests](../operations/paymentrequests.md#add-payment-requests)

## 4th July 2023

* Extended [Get all reservations 2023-06-06](../operations/reservations.md#get-all-reservations-ver-2023-06-06) and [Get all product service orders](../operations/productserviceorders.md#get-all-product-service-orders) response with `StartUtc`, `EndUtc` and `AccountType`.
* Extended [Get all payments](../operations/payments.md#get-all-payments) with `SettlementUtc` filter.
* Extended [Get all payments](../operations/payments.md#get-all-payments) response with `SettlementUtc` and `AccountType` parameter.
* Extended [Get all enterprises](../operations/enterprises.md#get-all-enterprises) with `LinkedUtc` filter and response with `LinkedUtc` field.

## 29th June 2023

* Documentation-only changes to add clarity around endpoint versioning. The deprecated version of `Get all reservations` is now called [Get all reservations \(ver 2017-04-12\)](../operations/reservations.md#get-all-reservations-ver-2017-04-12) and the new version is called [Get all reservations \(ver 2023-06-06\)](../operations/reservations.md#get-all-reservations-ver-2023-06-06). All relevant links have been updated.
* Extended [Add bill](../operations/payments.md#get-all-payments#add-bill) with `Name` request parameter to name the newly created bill.

## 26th June 2023

* Enabled Portfolio Access Tokens for the following operations:
  * [Get all reservations 2023-06-06](../operations/reservations.md#get-all-reservations-2023-06-06).
  * [Get all product service orders](../operations/productserviceorders.md#get-all-product-service-orders).
* Enabled Portfolio Access Tokens for [Get rate pricing](../operations/rates.md#get-rate-pricing).

## 23rd June 2023

* Added operation [Get all reservations 2023-06-06](../operations/reservations.md#get-all-reservations-ver-2023-06-06).
* Added operation [Get all product service orders](../operations/productserviceorders.md#get-all-product-service-orders).
* Deprecated operation [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12). Operation [Get all reservations 2023-06-06](../operations/reservations.md#get-all-reservations-ver-2023-06-06) should be used instead.
* Deprecated operation [Get all reservation items](../operations/reservations.md#get-all-reservation-items). Operation [Get all order items](../operations/orderitems.md#get-all-order-items) should be used instead.

## 21st June 2023

* Added operation [Get all product categories](../operations/productcategories.md#get-all-product-categories) to retrieve product categories.

* Enabled Portfolio Access Tokens for the following operations:
  * [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories).
  * [Get all addresses](../operations/addresses.md#get-all-addresses).
  * [Get all age categories](../operations/agecategories.md#get-all-age-categories).
  * [Get all availability adjustments](../operations/availabilityadjustments.md#get-all-availability-adjustments).
  * [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks).
  * [Get all business segments](../operations/businesssegments.md#get-all-business-segments).
  * [Get all cancellation policies](../operations/cancellationpolicies.md#get-all-cancellation-policies).
  * [Get all cashiers](../operations/cashiers.md#get-all-cashiers).
  * [Get all cashier transactions](../operations/cashiertransactions.md#get-all-cashier-transactions).
  * [Get all companies](../operations/companies.md#get-all-companies).
  * [Get all companionships](../operations/companionships.md#get-all-companionships).
  * [Get all company contracts](../operations/companycontracts.md#get-all-company-contracts).
  * [Get all counters](../operations/counters.md#get-all-counters).
  * [Get all credit cards](../operations/creditcards.md#get-all-credit-cards).
  * [Get all customers](../operations/customers.md#get-all-customers).
  * [Get all departments](../operations/departments.md#get-all-departments).
  * [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships).
  * [Get all loyalty programs](../operations/loyaltyprograms.md#get-all-loyalty-programs).
  * [Get all loyalty tiers](../operations/loyaltytiers.md#get-all-loyalty-tiers).
  * [Get all outlet items](../operations/outletitems.md#get-all-outlet-items).
  * [Get all payment requests](../operations/paymentrequests.md#get-all-payment-requests).
  * [Get all product categories](../operations/productcategories.md#get-all-product-categories).
  * [Get all rates](../operations/rates.md#get-all-rates).
  * [Get all reservation groups](../operations/reservationgroups.md#get-all-reservation-groups).
  * [Get all resource access tokens](../operations/resourceaccesstokens.md#get-all-resource-access-tokens).
  * [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks).
  * [Get all restrictions](../operations/restrictions.md#get-all-restrictions).
  * [Get all resources](../operations/resources.md#get-all-resources).
  * [Get all routing rules](../operations/routingrules.md#get-all-routing-rules).
  * [Get all rules](../operations/rules.md#get-all-rules).
  * [Get all services](../operations/services.md#get-all-services).

* Added pagination to the following operations:
  * [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories).
  * [Get all addresses](../operations/addresses.md#get-all-addresses).
  * [Get all age categories](../operations/agecategories.md#get-all-age-categories).
  * [Get all availability adjustments](../operations/availabilityadjustments.md#get-all-availability-adjustments).
  * [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks)
  * [Get all business segments](../operations/businesssegments.md#get-all-business-segments).
  * [Get all cashiers](../operations/cashiers.md#get-all-cashiers).
  * [Get all cashier transactions](../operations/cashiertransactions.md#get-all-cashier-transactions).
  * [Get all companionships](../operations/companionships.md#get-all-companionships).
  * [Get all counters](../operations/counters.md#get-all-counters).
  * [Get all credit cards](../operations/creditcards.md#get-all-credit-cards).
  * [Get all departments](../operations/departments.md#get-all-departments).
  * [Get all rates](../operations/rates.md#get-all-rates).
  * [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks).
  * [Get all restrictions](../operations/restrictions.md#get-all-restrictions).
  * [Get all resources](../operations/resources.md#get-all-resources).
  * [Get all rules](../operations/rules.md#get-all-rules).
  * [Get all services](../operations/services.md#get-all-services).
  
* Extended response objects with `EnterpriseId` for following:
  * [Accounting category](../operations/accountingcategories.md#accounting-category).
  * [Age category](../operations/agecategories.md#age-category).
  * [Cashier](../operations/cashiers.md#cashier).
  * [Cashier transaction](../operations/cashiertransactions.md#cashier-transaction).
  * [Counter](../operations/counters.md#counter).
  * [Credit card](../operations/creditcards.md#credit-card).
  * [Department](../operations/departments.md#department).
  * [Outlet item](../operations/outletitems.md#outlet-item).
  * [Payment request](../operations/paymentrequests.md#payment-request).
  * [Reservation group](../operations/reservationgroups.md#reservation-group).
  * [Resource access token](../operations/resourceaccesstokens.md#resource-access-token).
  * [Resource block](../operations/resourceblocks.md#resource-block).
  * [Resource](../operations/resources.md#resource).
  * [Routing rule](../operations/routingrules.md#routing-rule).
  * [Service](../operations/services.md#service).

* Extended response objects with `ChainId` for following:
  * [Address](../operations/addresses.md#addresses).
  * [Company](../operations/companies.md#company).
  * [Customer](../operations/customers.md#customer).
  * [Loyalty membership](../operations/loyaltymemberships.md#loyalty-membership).
  * [Loyalty program](../operations/loyaltyprograms.md#loyalty-program).
  * [Loyalty tier](../operations/loyaltytiers.md#loyalty-tier).

* Extended requests for following endpoints:
  * [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) request with `EnterpriseIds`, `AccountingCategoryIds`, `ActivityStates` parameters.
  * [Get all addresses](../operations/addresses.md#get-all-addresses) request with `ChainIds`, `ActivityStates` parameters.
  * [Get all age categories](../operations/agecategories.md#get-all-age-categories) request with `EnterpriseIds`, `ActivityStates` parameters.
  * [Get all availability adjustments](../operations/availabilityadjustments.md#get-all-availability-adjustments) request with `EnterpriseIds`, `ActivityStates` parameters.
  * [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) request with `EnterpriseIds` parameter.
  * [Get all business segments](../operations/businesssegments.md#get-all-business-segments) request with `EnterpriseIds`, `Ids`, `ActivityStates` parameters.
  * [Get all cancellation policies](../operations/cancellationpolicies.md#get-all-cancellation-policies) request with `EnterpriseIds` parameter.
  * [Get all cashiers](../operations/cashiers.md#get-all-cashiers) request with `EnterpriseIds`, `Ids`, `ActivityStates` parameters.
  * [Get all cashier transactions](../operations/cashiertransactions.md#get-all-cashier-transactions) request with `EnterpriseIds`, `CashierTransactionIds`, `ActivityStates` parameters.
  * [Get all companies](../operations/companies.md#get-all-companies) request with `ChainIds` parameter.
  * [Get all companionships](../operations/companionships.md#get-all-companionships) request with `EnterpriseIds`, `CompanionshipIds` parameters.
  * [Get all counters](../operations/counters.md#get-all-counters) request with `EnterpriseIds`, `Type` parameters.
  * [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) request with `EnterpriseIds` parameter.
  * [Get all customers](../operations/customers.md#get-all-customers) request with `EnterpriseIds` parameter.
  * [Get all departments](../operations/departments.md#get-all-departments) request with `EnterpriseIds`, `DepartmentIds` parameters.
  * [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships) request with `ChainIds` parameter.
  * [Get all loyalty programs](../operations/loyaltyprograms.md#get-all-loyalty-programs) request with `ChainIds` parameter.
  * [Get all loyalty tiers](../operations/loyaltytiers.md#get-all-loyalty-tiers) request with `ChainIds` parameter.
  * [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) request with `EnterpriseIds` parameter.
  * [Get all payment requests](../operations/paymentrequests.md#get-all-payment-requests) request with `EnterpriseIds`, `PaymentRequestIds` parameters.
  * [Get all rates](../operations/rates.md#get-all-rates) request with `EnterpriseIds` parameter.
  * [Get all reservation groups](../operations/reservationgroups.md#get-all-reservation-groups) request with `EnterpriseIds` parameter.
  * [Get all resource access tokens](../operations/resourceaccesstokens.md#resource-access-token) request with `EnterpriseIds` parameter.
  * [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) request with `EnterpriseIds` parameter.
  * [Get all resources](../operations/resources.md#get-all-resources) request with `EnterpriseIds`, `ResourceIds` parameters.
  * [Get all routing rules](../operations/routingrules.md#get-all-routing-rules) request with `EnterpriseIds` parameters.
  * [Get all services](../operations/services.md#get-all-services) request with `EnterpriseIds`, `ServiceIds` parameters.
  * [Get all restrictions](../operations/restrictions.md#get-all-restrictions) request with `EnterpriseIds` parameter.

* Deprecated `BillCounters`, `ProformaCounters`, `BillPreviewCounters`, `ServiceOrderCounters`, `RegistrationCardCounters` in [Get all counters](../operations/counters.md#get-all-counters). Use `Counters` instead.

## 20th June 2023

* Added new page [Multi-property](../guidelines/multi-property.md) for multi-property operation with Portfolio Access Tokens.
* Updated [Requests](../guidelines/requests.md) page to add explanation of authentication with Portfolio Access Tokens.

## 19th June 2023

* Extended [Order item](../operations/orderitems.md#order-item) with `AccountType` parameter.

## 9th June 2023

* Extended [Add order](../operations/orders.md#add-order) with `BillId` parameter.

## 7th June 2023

* Extended [Loyalty memberships](../operations/loyaltymemberships.md#loyalty-membership) with [State](../operations/loyaltymemberships.md#loyalty-membership-state).
* Extended [Loyalty memberships](../operations/loyaltymemberships.md#loyalty-membership) with `CreatorProfile` and `UpdaterProfile`.

## 24th May 2023

* Extended [Add external payment](../operations/payments.md#add-external-payment) with `AccountId` property to support [Company](../operations/companies.md#company) accounts. `CustomerId` property was deprecated.
* Extended [Add order](../operations/orders.md#add-order) with `AccountId` property to support [Company](../operations/companies.md#company) accounts. `CustomerId` property was deprecated.
* `AccountId` in [Bill parameters](../operations/bills.md#bill-parameters) is allowed to be an Id of a [Company](../operations/companies.md#company).
* Deprecated `CustomerId` in [Bill](../operations/bills.md#bill). Use `AccountId` instead.

## 23rd May 2023

* Added operation [Get all loyalty tiers](../operations/loyaltytiers.md#get-all-loyalty-tiers) to retrieve loyalty tiers.
* Added operation [Add loyalty tiers](../operations/loyaltytiers.md#add-loyalty-tiers) to add loyalty tiers.
* Added operation [Update loyalty tiers](../operations/loyaltytiers.md#update-loyalty-tiers) to update loyalty tiers.
* Added operation [Delete loyalty tiers](../operations/loyaltytiers.md#delete-loyalty-tiers) to delete loyalty tiers.
* Added operation [Get all resource categories](../operations/resourcecategories.md#get-all-resource-categories).
* Deprecated operation extent `ResourceCategories` in [Get all resources](../operations/resources.md#get-all-resources). [Get all resource categories](../operations/resourcecategories.md#get-all-resource-categories) should be used instead.

## 22nd May 2023

* Extended [Loyalty memberships](../operations/loyaltymemberships.md#loyalty-membership) with `LoyaltyTierId`.

## 16th May 2023

* Added operation [Get all cancellation policies](../operations/cancellationpolicies.md#get-all-cancellation-policies).

## 11th May 2023

* Added operation [Get all reservation groups](../operations/reservationgroups.md#get-all-reservation-groups).

## 28th April 2023

* Added missing property descriptions to [Get all order items](../operations/orderitems.md#get-all-order-items)

## 25th April 2023

* Added clarification to values for [Reservation origin](../operations/reservations.md#reservation-origin).

## 21st April 2023
* Extended [loyalty programs](../operations/loyaltyprograms.md#loyalty-program) with [Type](../operations/loyaltyprograms.md#loyalty-program-type) and [Subscription](../operations/loyaltyprograms.md#loyalty-program-subscription) parameters.
* Added operation [Add service order notes](../operations/serviceordernotes.md#add-service-order-notes).
* Added operation [Update service order notes](../operations/serviceordernotes.md#update-service-order-notes).
* Added operation [Delete service order notes](../operations/serviceordernotes.md#delete-service-order-notes).

## 20th April 2023

* Extended [Get all order items](../operations/orderitems.md#get-all-order-items) with `EnterpriseIds` filter and [Order item](../operations/orderitems.md#order-item) with `EnterpriseId`.
* Extended [Get all payments](../operations/payments.md#get-all-payments) with `EnterpriseIds` filter and [Payment](../operations/payments.md#payment) with `EnterpriseId`.

## 19th April 2023

* Deprecated operation [Get all accounting items ](../operations/accountingitems.md#get-all-accounting-items). Operation [Get all payments](../operations/payments.md#get-all-payments) and [Get all order items](../operations/orderitems.md#get-all-order-items) should be used instead.

## 17th April 2023

* Extended [Get configuration](../operations/configuration.md#get-configuration) request with `EnterpriseId` parameter.
* Deprecated `Address` in [Enterprise](../operations/configuration.md#enterprise) and replaced with `AddressId`.
* Added new page [Enterprises](../operations/enterprises.md) with operation [Get all enterprises](../operations/enterprises.md#get-all-enterprises).

## 12th April 2023

* Added operation [Get all order items](../operations/orderitems.md#get-all-order-items).

## 11th April 2023

* Extended [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) response with `OriginalAmount` in [Order item](../operations/accountingitems.md#order-item) and [Payment item](../operations/accountingitems.md#payment-item).
* Deprecated `AmountDefault` in [Payment item](../operations/accountingitems.md#payment-item).

## 9th April 2023

* Extended [Get all rules](../operations/rules.md#get-all-rules) response with `TravelAgencyId` in [Rule conditions](../operations/rules.md#rule-conditions).

## 6th April 2023

* Updated definitions for external identifiers throughout the API
* Added new page for [common object definitions](../operations/_objects.md) used throughout the API

## 4th April 2023

* Fixed name of parameter `PostCancellationFee` in [Reservation cancel](../operations/reservations.md#cancel-reservation).
* Added operation [Get all payments](../operations/payments.md#get-all-payments).

## 3rd April 2023

* Added operation [Clear restrictions](../operations/restrictions.md#clear-restrictions).

## 27th March 2023

* Updated [loyalty programs](../operations/loyaltyprograms.md) and [loyalty memberships](../operations/loyaltymemberships.md) operations as restricted.
* Re-wrote the [Datetimes](../guidelines/serialization.md#datetimes) section to better explain how date-times are used in the API.
* Updated descriptions for `startUtc` and `endUtc` in [Restriction Conditions](../operations/restrictions.md#restriction-conditions) and [Restriction set data](../operations/restrictions.md#restriction-set-data).
* Other minor improvements to documentation in the [Restrictions](../operations/restrictions.md) page.
* Corrected small errors in [Set restrictions](../operations/restrictions.md#set-restrictions) - removed `Identifier` and `ExternalIdentifier`, and updated sample JSON

## 22nd March 2023

* Added new page [Best practices](../guidelines/best-practices.md)

## 17th March 2023

* Added operation [Set restrictions](../operations/restrictions.md#set-restrictions).

## 16th March 2023

* Extended [Enterprise](../operations/configuration.md#enterprise) with `AccountingConfiguration` in [Get configuration](../operations/configuration.md#get-configuration).

## 15th March 2023

* Extended [Get all sources](../operations/sources.md#get-all-sources) with `UpdatedUtc` and `SourceIds` filter.
* Extended [Get all sources](../operations/sources.md#get-all-sources) response with `UpdatedUtc` in [Source](../operations/sources.md#source).
* Extended [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) with `UpdatedUtc` filter.
* Extended [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) response with `UpdatedUtc` in [Outlet bill](../operations/outletitems.md#outlet-bill) and [Outlet item](../operations/outletitems.md#outlet-item).

## 3rd March 2023

* Added new parameter field `UpdatedUtc` in [Get all companionships](../operations/companionships.md#get-all-companionships)
* Added new parameter field `UpdatedUtc` in [Get all accountingItems](../operations/accountingitems.md#get-all-accounting-items)
* Extended [Get all source assignments](../operations/sourceassignments.md#get-all-source-assignments) with `UpdatedUtc` filter.
 
## 28th February 2023

* Added new parameter field `UpdatedUtc` in [Get all bills](../operations/bills.md#get-all-bills)
* Added new response field `UpdatedUtc` in [Get all bills](../operations/bills.md#get-all-bills)

## 23rd February 2023

* Extended [Get all rates](../operations/rates.md#get-all-rates) with `AvailabilityBlockAssignments` extent.
* Extended [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) with `ReleasedUtc` filter.
* Added new page [Payment requests](../operations/paymentrequests.md) with operations:
  * [Get all payment requests](../operations/paymentrequests.md#get-all-payment-requests).
  * [Add payment requests](../operations/paymentrequests.md#add-payment-requests).
  * [Cancel payment requests](../operations/paymentrequests.md#cancel-payment-requests).
* Added new page [Availability adjustments](../operations/availabilityadjustments.md) with operation [Get all availability adjustments](../operations/availabilityadjustments.md#get-all-availability-adjustments).

## 20th February 2023

* Added new use case [Mews Payment Terminals](../use-cases/mews-terminals.md)
* Added new restricted operation [Add payment command](../operations/commands.md#add-payment-command).
* Deprecated `AssigneeData` in [Get all bills](../operations/bills.md#get-all-bills) response and replaced with  `OwnerData`.
* Extended [Bill customer data](../operations/bills.md#bill-customer-data) with `CustomerID`, `LegalIdentifiers`, `BillingCode`, `LastName`, `FirstName`, `SecondLastName`, `TitlePrefix` and with [Bill address](../operations/bills.md#bill-address) fields.
* Extended [Bill company data](../operations/bills.md#bill-company-data) with Owner Data `LegalIdentifiers`, `BillingCode`, `Name`, `FiscalIdentifier`, `AdditionalTaxIdentifier` and with [Bill address](../operations/bills.md#bill-address) fields.
* Extended [Payment Items](../operations/accountingitems.md#payment-item) with `AmountDefault`.
* Deprecated  `ItalianFiscalCode` and `ItalianLotteryCode` in [Bill customer data](../operations/bills.md#bill-customer-data).

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

* Added `ExternalIdentifier` to each of the following entities.
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
* Added new page [Service orders](../operations/serviceorders.md) \[corrected to [Service order notes](../operations/serviceordernotes.md) 21st April 2023\].
* Added operation [Get all service order notes](../operations/serviceordernotes.md#get-all-service-order-notes).
* Deprecated `BasePrices` and replaced it with `BaseAmountPrices` in the response to [Get rate pricing](../operations/rates.md#get-rate-pricing); `BaseAmountPrices` includes information about the tax breakdown.
* Deprecated `Prices` and replaced it with `AmountPrices` in the response to [Get rate pricing](../operations/rates.md#get-rate-pricing); `AmountPrices` includes information about the tax breakdown.
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) response with `AmountPrices` and `AmountPrices` in [Resource category pricing](../operations/rates.md#resource-category-pricing).

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
