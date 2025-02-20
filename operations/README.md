# API Operations

This section describes all operations supported by the API, organised here by theme.

## Accounts

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Merge accounts](accounts.md#merge-accounts) | Merges two or more accounts of the same account type together |
| [Update accounts](accounts.md#update-accounts) | Updates one or more existing accounts, i.e. customer, company |
| [Upload and link file to account](accounts.md#upload-and-link-file-to-account) | Uploads a file and links it to the specified account |
| [Get all addresses](addresses.md#get-all-addresses) | Returns all addresses associated with the specified accounts within the enterprise |
| [Add addresses](addresses.md#add-addresses) | Adds a new address to the system and assigns it to a specified account |
| [Update addresses](addresses.md#update-addresses) | Updates an existing address in the system assigned to a specified account |
| [Delete addresses](addresses.md#delete-addresses) | Deletes selected addresses |
| [Get all account notes](accountnotes.md#get-all-account-notes) | Returns all the account notes associated with the specified accounts within the chain |
| [Add account notes](accountnotes.md#add-account-notes) | Adds new account notes to the system and assigns it to specified accounts |
| [Update account notes](accountnotes.md#update-account-notes) | Updates existing account notes |
| [Delete account notes](accountnotes.md#delete-account-notes) | Deletes selected account notes |

## Configuration

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get configuration](configuration.md#get-configuration) | Returns configuration of the enterprise and the client |
| [Get all countries](countries.md#get-all-countries) | Returns all countries supported by the API |
| [Get all currencies](currencies.md#get-all-currencies) | Returns all currencies supported by the API |
| [Get all tax environments](taxenvironments.md#get-all-tax-environments) | Returns all tax environments supported by the API |
| [Get all taxations](taxations.md#get-all-taxations) | Returns all taxations supported in tax environments |
| [Get all languages](languages.md#get-all-languages) | Returns all languages supported by the API |
| [Get language texts](languages.md#get-language-texts) | Returns translations of texts in the specified languages |
| [Get image URLs](images.md#get-image-URLs) | Returns URLs of the specified images |

## Customers

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all customers](customers.md#get-all-customers) | Returns all customers filtered by identifiers, emails, names and other filters |
| [Search customers](customers.md#search-customers) | Searches for customers that are active at the moment in the enterprise, e.g. companions of checked-in reservations or paymasters |
| [~~Get customers open items~~](customers.md#get-customers-open-items) | **Deprecated!** Use [Get all payments](payments.md#get-all-payments) and [Get all order items](orderitems.md#get-all-order-items) instead. |
| [Add customer](customers.md#add-customer) | Adds a new customer to the system and returns details of the added customer |
| [Update customer](customers.md#update-customer) | Updates personal information of a customer |
| [~~Merge customers~~](customers.md#merge-customers) | **Deprecated!** Please use [Merge accounts](accounts.md#merge-accounts) instead. |
| [Add customer file](customers.md#add-customer-file) | Attaches the specified file to the customer profile |
| [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) | Returns all identity documents for the specified customers |
| [Adds identity documents](../operations/identitydocuments.md#add-identity-documents) | Adds new identity documents |
| [Update identity documents](../operations/identitydocuments.md#update-identity-documents) | Updates specified identity documents |
| [Delete identity documents](../operations/identitydocuments.md#delete-identity-documents) | Deletes specified identity documents |
| [Clear identity documents](../operations/identitydocuments.md#clear-identity-documents) | Deletes all identity documents for the specified customers |

## Device integration

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all devices](devices.md#get-all-devices) | Returns all devices in the enterprise |
| [Get all commands](commands.md#get-all-commands) | Returns all commands the are still active from the client application point of view |
| [Get all commands by ids](commands.md#get-all-commands-by-ids) | Returns all commands by their identifiers |
| [Add printer command](commands.md#add-printer-command) | Adds a new printer command representing printing of the specified document on a printer |
| [Add key cutter command](commands.md#add-key-cutter-command) | Adds a new key cutter command representing cutting of a key for the specified reservation |
| [Add payment command](commands.md#add-payment-command) | **Restricted!** Adds a new Mews Payment Terminal command |
| [Update command](commands.md#update-command) | Updates state of a command |

## Enterprises

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all enterprises](enterprises.md#get-all-enterprises) | Returns all enterprises accessible to a supplied access token |
| [Get all companies](companies.md#get-all-companies) | Returns all company profiles of the enterprise, possibly filtered by identifiers, names or other filters |
| [Add company](companies.md#add-company) | Adds a new company to the enterprise |
| [Update company](companies.md#update-company) | Updates information of the company |
| [Delete companies](companies.md#delete-companies) | Deletes selected companies |
| [Get all company contracts](companycontracts.md#get-all-company-contracts) | Returns all contracts between the enterprise and other companies |
| [Add company contracts](companycontracts.md#add-company-contracts) | Adds new company contracts to the enterprise |
| [Update company contracts](companycontracts.md#update-company-contracts) | Updates selected company contracts |
| [Delete company contracts](companycontracts.md#delete-company-contracts) | Deletes selected company contracts |
| [Get all departments](departments.md#get-all-departments) | Returns all departments of an enterprise associated with the connector integration |
| [Get all counters](counters.md#get-all-counters) | Returns all counters of an enterprise associated with the connector integration |
| [Get all outlets](outlets.md#get-all-outlets) | Returns all outlets of an enterprise associated with the connector integration |
| [Get all resources](resources.md#get-all-resources) | Returns all resources of an enterprise associated with the connector integration |
| [Update resources](resources.md#update-resources) | Updates details of the resources |
| [Get all resource blocks](resourceblocks.md#get-all-resource-blocks) | Returns all resource blocks \(out of order blocks or internal use blocks\) |
| [Add resource block](resourceblocks.md#add-resource-block) | Adds a new resource block to the specified resource for a defined period of time |
| [Delete resource blocks](resourceblocks.md#delete-resource-blocks) | Removes specified resource blocks from the resources |
| [Add task](tasks.md#add-task) | Adds a new task to the enterprise, optionally to a specified department |
| [Get all tasks](tasks.md#get-all-tasks) | Returns all tasks of the enterprise, filtered by identifiers or other filters |
| [Get all resource categories](resourcecategories.md#get-all-resource-categories) | Returns all resource categories of an enterprise associated with the connector integration |
| [Get all resource category assignments](resourcecategories.md#get-all-resource-category-assignments) | Returns all resource category assignments of an enterprise associated with the connector integration |
| [Get all resource category image assignments](resourcecategories.md#get-all-resource-category-image-assignments) | Returns all resource category image assignments of an enterprise associated with the connector integration |
| [Get all resource features](resourcefeatures.md#get-all-resource-features) | Returns all resource features of an enterprise associated with the connector integration |
| [Get all resource feature assignments](resourcefeatures.md#get-all-resource-feature-assignments) | Returns all resource feature assignments of an enterprise associated with the connector integration |

## Exports

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all exports](exports.md#get-all-exports) | **Restricted!** Returns all exports filtered by their unique identifiers |
| [Add export](./exports.md#add-export) | **Restricted!** Create a pending export |

## Finance

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all exchange rates](exchangerates.md#get-all-exchange-rates) | Returns all available exchange rates among currencies of the enterprise |
| [Get all cashiers](cashiers.md#get-all-cashiers) | Returns all cashiers in the enterprise |
| [Get all cashier transactions](cashiertransactions.md#get-all-cashier-transactions) | Returns all cashier transactions created within the specified interval |
| [Get all accounting categories](accountingcategories.md#get-all-accounting-categories) | Returns all accounting categories of the enterprise associated with the connector integration |
| [~~Get all accounting items~~](accountingitems.md#get-all-accounting-items) | **Deprecated!** Please use [Get all payments](payments.md#get-all-payments) and [Get all order items](orderitems.md#get-all-order-items) instead.  |
| [Update accounting items](accountingitems.md#update-accounting-items) | Updates specified accounting item |
| [Get all bills](bills.md#get-all-bills) | Returns all bills, possibly filtered by customers, identifiers and other filters |
| [Add bill](bills.md#add-bill) | Creates new empty bill assigned to specified account |
| [Update bills](bills.md#update-bills) | **Restricted!** Updates account assignments of one or more open bills |
| [Delete bill](bills.md#delete-bill) | Removes selected bills |
| [Close bill](bills.md#close-bill) | Closes a bill so no further modification to it is possibles |
| [Get bill PDF](bills.md#get-bill-PDF) | Creates a PDF version of the specified bill |
| [Get all outlet items](outletitems.md#get-all-outlet-items) | Returns all outlet items of the enterprise that were consumed \(posted\) or will be consumed within the specified interval |
| [Get all credit cards](creditcards.md#get-all-credit-cards) | Returns all credit cards, possibly filtered by identifiers, customers or other filters |
| [Charge credit card](creditcards.md#charge-credit-card) | Creates payment for specified customer credit card and charges the credit card via a gateway |
| [Add tokenized credit card](creditcards.md#add-tokenized-credit-card) | Adds a new tokenized credit card to the specified customer |
| [Get all preauthorizations<br/>by customers](preauthorizations.md#get-all-preauthorizations-by-customers) | Returns all preauthorizations of specified customers |
| [Add credit card payment](payments.md#add-credit-card-payment) | Adds a new credit card payment to a bill of the specified customer |
| [Add external payment](payments.md#add-external-payment) | Adds a new external payment to a bill of the specified customer |
| [Add alternative payment](payments.md#add-alternative-payment) | Adds a new alternative payment to a specified customer |
| [Get all payments](payments.md#get-all-payments) | Returns all payments, filtered by various parameters |
| [Get all payment requests](paymentrequests.md#get-all-payment-requests) | Returns all payment requests |
| [Add payment requests](paymentrequests.md#add-payment-requests) | Adds new payment requests for specified customers |
| [Cancel payment requests](paymentrequests.md#cancel-payment-requests) | Cancels specified pending payment requests |
| [Add outlet bills](outletbills.md#add-outlet-bills) | Adds new outlet bills with their items |
| [Get all order items](orderitems.md#get-all-order-items) | Returns all order items |
| [Refund payment](payments.md#refund-payment) | Refunds a specified payment |
| [Disable credit card](creditcards.md#disable-credit-card) | **Restricted!** Disable credit card |

## Loyalty

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all loyalty programs](loyaltyprograms.md#get-all-loyalty-programs) | Returns all loyalty programs of the enterprise |
| [Add loyalty programs](loyaltyprograms.md#add-loyalty-programs) | Adds new loyalty programs |
| [Update loyalty programs](loyaltyprograms.md#update-loyalty-programs) | Updates selected loyalty programs |
| [Delete loyalty programs](loyaltyprograms.md#delete-loyalty-programs) | Deletes selected loyalty programs |
| [Get all loyalty memberships](loyaltymemberships.md#get-all-loyalty-memberships) | Returns all loyalty memberships of the enterprise |
| [Add loyalty memberships](loyaltymemberships.md#add-loyalty-memberships) | Adds new loyalty memberships |
| [Update loyalty memberships](loyaltymemberships.md#update-loyalty-memberships) | Updates selected loyalty memberships |
| [Delete loyalty memberships](loyaltymemberships.md#delete-loyalty-memberships) | Deletes selected loyalty memberships |
| [Get all loyalty tiers](loyaltytiers.md#get-all-loyalty-tiers) | Returns all loyalty tiers of the enterprise |
| [Add loyalty tiers](loyaltytiers.md#add-loyalty-tiers) | Adds new loyalty tiers |
| [Update loyalty tiers](loyaltytiers.md#update-loyalty-tiers) | Updates selected loyalty tiers |
| [Delete loyalty tiers](loyaltytiers.md#delete-loyalty-tiers) | Deletes selected loyalty tiers |

## Customer messaging

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all message threads](messagethreads.md#get-all-message-threads) | Get all message threads that you have created |
| [Add message thread](messagethreads.md#add-message-thread) | Creates a new message thread on behalf of the specified customer |
| [Get all messages](messages.md#get-all-messages) | Get all messages belonging to the specified message threads |
| [Add messages](messages.md#add-messages) | Add the specified messages to the specified message threads |

## Reservations

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all reservations \(ver 2023-06-06\)](reservations.md#get-all-reservations-ver-2023-06-06) | Returns all reservations specified by filters |
| [~~Get all reservations \(ver 2017-04-12\)~~](reservations.md#get-all-reservations-ver-2017-04-12) | **Deprecated!** Please use [Get all reservations \(ver 2023-06-06\)](reservations.md#get-all-reservations-ver-2023-06-06) instead. |
| [~~Get all reservation items~~](reservations.md#get-all-reservation-items) | **Deprecated!** Please use [Get all order items](orderitems.md#get-all-order-items) instead. |
| [Price reservations](reservations.md#price-reservations) | Returns prices of reservations with the specified parameters |
| [Add reservations](reservations.md#add-reservations) | Adds the specified reservations as a single group |
| [Update reservations](reservations.md#update-reservations) | Updates information about the specified reservations |
| [Confirm reservations](reservations.md#confirm-reservations) | Marks all specified reservations as `Confirmed` |
| [Start reservation](reservations.md#start-reservation) | Marks a reservation as `Started` \(checked in\) |
| [Process reservation](reservations.md#process-reservation) | Marks a reservation as `Processed` \(checked out\) |
| [Cancel reservation](reservations.md#cancel-reservation) | Cancels all reservation with specified identifiers |
| [Update reservation customer](reservations.md#update-reservation-customer) | Updates customer of a reservation |
| [Update reservation interval](reservations.md#update-reservation-interval) | Updates reservation interval \(start, end or both\) |
| [Add reservation companion](reservations.md#add-reservation-companion) | Adds a customer as a companion to the reservation |
| [Delete reservation companion](reservations.md#delete-reservation-companion) | Removes customer companionship from the reservation |
| [Add reservation product](reservations.md#add-reservation-product) | Adds a new product order of the specified product to the reservation |
| [Get all source assignments (ver 2024-09-20)](sourceassignments.md#get-all-source-assignments-ver-2024-09-20) | **Restricted!** Returns all sources associated with a reservation |
| [Get all source assignments](sourceassignments.md#get-all-source-assignments) | Returns all sources associated with a reservation group |
| [Get all sources](sources.md#get-all-sources) | Returns all possible reservation sources |
| [Get all reservation groups](reservationgroups.md#get-all-reservation-groups) | Returns all reservation groups, filtered by unique identifiers and other filters |
| [Get reservations channel manager details](reservations.md#get-reservations-channel-manager-details) | **Restricted!** Gets requested rate codes for the reservation |

## Routing rules

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all routing rules](routingrules.md#get-all-routing-rules) | Returns all routing rules of the enterprise |
| [Add routing rules](routingrules.md#add-routing-rules) | Adds new routing rules |
| [Update routing rules](routingrules.md#update-routing-rules) | Updates selected routing rules |
| [Delete routing rules](routingrules.md#delete-routing-rules) | Deletes selected routing rules |

## Service orders

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all product service orders](productserviceorders.md#get-all-product-service-orders) | Returns all product service orders |
| [Get all service order notes](serviceordernotes.md#get-all-service-order-notes) | Returns all notes associated with the given service orders |
| [Add service order notes](serviceordernotes.md#add-service-order-notes) | Adds service order notes to a given service order |
| [Update service order notes](serviceordernotes.md#update-service-order-notes) | Updates content of given service order notes |
| [Delete service order notes](serviceordernotes.md#delete-service-order-notes) | Deletes given service order notes |

## Services

| <div style="width:200px">Operation</div> | Description |
| :-- | :-- |
| [Get all services](services.md#get-all-services) | Returns all services offered by the enterprise |
| [Get service availability (ver 2024-01-22)](../operations/services.md#get-service-availability-ver-2024-01-22) | **Restricted!** Returns selected availability and occupancy metrics of a bookable service in the specified time interval |
| [Get service availability](services.md#get-service-availability) | Returns availability of a bookable service in the specified interval |
| [Update service availability](services.md#update-service-availability) | Updates the number of available resources in the specified resource category by a certain amount |
| [Get all availability blocks](availabilityblocks.md#get-all-availability-blocks) | Returns all availability blocks filtered by services, unique identifiers and other filter |
| [Add availability blocks](availabilityblocks.md#add-availability-blocks) | Adds availability blocks which are used to group related availability updates |
| [Update availability blocks](availabilityblocks.md#update-availability-blocks) | Updates information about the specified availability block |
| [Delete availability blocks](availabilityblocks.md#delete-availability-blocks) | Delete availability blocks |
| [Get all availability adjustments](operations/availabilityadjustments.md#get-all-availability-adjustments) | Get all availability adjustments |
| [Get all rules](rules.md#get-all-rules) | Returns all rules applied with the reservations |
| [Get all business segments](businesssegments.md#get-all-business-segments) | Returns all business segments of the default service provided by the enterprise |
| [Get all rates](rates.md#get-all-rates) | Returns all rates \(pricing setups\) of the default service provided by the enterprise |
| [Add rates](rates.md#add-rates) | Adds new rates to the enterprise |
| [Set rates](rates.md#set-rates) | **Restricted!** Adds new or updates existing rates |
| [Delete rates](rates.md#delete-rates) | Deletes specified rates |
| [Get rate pricing](rates.md#get-rate-pricing) | Returns prices of a rate in the specified interval |
| [Update rate price](rates.md#update-rate-price) | Updates price of a rate in the specified intervals |
| [Get all rate groups](rategroups.md#get-all-rate-groups) | Returns all rate groups filtered by rate groups or other filters |
| [Get all restrictions](restrictions.md#get-all-restrictions) | Returns all restrictions of the default service provided by the enterprise |
| [~~Add restrictions~~](restrictions.md#add-restrictions) | **Deprecated!** Adds new restrictions with the specified conditions. Use [Set restrictions](../operations/restrictions.md#set-restrictions) instead. |
| [~~Delete restrictions~~](restrictions.md#delete-restrictions) | **Deprecated!** Removes restrictions from the service. Use [Clear restrictions](../operations/restrictions.md#clear-restrictions) instead. |
| [Set restrictions](restrictions.md#set-restrictions) | Adds new restrictions with the specified conditions |
| [Clear restrictions](restrictions.md#clear-restrictions) | Clears restrictions which meet specified conditions over a specified time interval |
| [Add order](orders.md#add-order) | Creates a new order with the specified products and items |
| [Get all companionships](companionships.md#get-all-companionships) | Returns all companionships based on customers, reservations or reservation groups |
| [Get all resource access tokens](resourceaccesstokens.md#get-all-resource-access-tokens) | Returns all resource access tokens based on resource access tokens, reservations or interval |
| [Add resource access tokens](resourceaccesstokens.md#add-resource-access-tokens) | Adds new resource access tokens with the specified data |
| [Update resource access tokens](resourceaccesstokens.md#update-resource-access-tokens) | Updates resource access token validity intervals and permissions |
| [Delete resource access tokens](resourceaccesstokens.md#delete-resource-access-tokens) | Delete specified resource access tokens |
| [Get all vouchers](vouchers.md#get-all-vouchers) | Returns all rate vouchers filtered by service, voucher code or voucher identifier |
| [Add vouchers](vouchers.md#add-vouchers) | Adds new vouchers with the specified data |
| [Update vouchers](vouchers.md#update-vouchers) | Updates information about the specified vouchers |
| [Delete vouchers](vouchers.md#delete-vouchers) | Delete vouchers |
| [Get all voucher codes](vouchercodes.md#get-all-voucher-codes) | Returns all voucher codes filtered by voucher or other filters |
| [Add voucher codes](vouchercodes.md#add-voucher-codes) | Adds new voucher codes to the voucher |
| [Delete voucher codes](vouchercodes.md#delete-voucher-codes) | Delete voucher codes |
| [Get all age categories](agecategories.md#get-all-age-categories) | Returns all age categories filtered by service |
| [Get all cancellation policies](cancellationpolicies.md#get-all-cancellation-policies) | **Restricted!** Returns all cancellation policies filtered by services, rate groups and other filters |
| [Get cancellation policies by reservations](cancellationpolicies.md#get-cancellation-policies-by-reservations) | **Restricted!** Returns cancellation policies for enterprise grouped by reservation |
| [Get cancellation policies by rates](cancellationpolicies.md#get-cancellation-policies-by-rates) | **Restricted!** Returns cancellation policies for enterprise grouped by rate |
| [Get all products](products.md#get-all-products) | Returns all products filtered by services or product identifier |
| [Delete products](products.md#delete-products) | Deletes specified products |
| [Get product pricing](products.md#get-product-pricing) | **Restricted!** Returns prices for a product for a specified time interval |
| [Update product pricing](products.md#update-product-pricing) | Updates product price for a given interval |
| [Get all product categories](productcategories.md#get-all-product-categories) | Returns all products filtered by services or product category identifier |
| [Get all service overbooking limits](serviceoverbookinglimits.md#get-all-service-overbooking-limits) | **Restricted!**  Returns all service overbooking limits |
| [Set service overbooking limits](serviceoverbookinglimits.md#set-service-overbooking-limits) | **Restricted!**  Adds new service overbooking limits with the specified conditions |
| [Clear service overbooking limits](serviceoverbookinglimits.md#clear-service-overbooking-limits) | **Restricted!**  Clears service overbooking limits which meet specified conditions over a specified time interval |
