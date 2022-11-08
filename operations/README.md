# Operations

This section describes all operations supported by the API, organised here by theme.

## Addresses

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get all addresses](addresses.md#get-all-addresses) | Returns all addresses associated with the specified accounts within the enterprise |
| [Add addresses](addresses.md#add-addresses) | Adds a new address to the system and assigns it to a specified account |
| [Update addresses](addresses.md#update-addresses) | Updates an existing address in the system assigned to a specified account |

## Configuration

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get configuration](configuration.md#get-configuration) | Returns configuration of the enterprise and the client |
| [Get all countries](countries.md#get-all-countries) | Returns all countries supported by the API |
| [Get all currencies](currencies.md#get-all-currencies) | Returns all currencies supported by the API |
| [Get all tax environments](taxenvironments.md#get-all-tax-environments) | Returns all tax environments supported by the API |
| [Get all taxations](taxations.md#get-all-taxations) | Returns all taxations supported in tax environments |
| [Get all languages](languages.md#get-all-languages) | Returns all languages supported by the API |
| [Get language texts](languages.md#get-language-texts) | Returns translations of texts in the specified languages |
| [Get image URLs](images.md#get-image-URLs) | Returns URLs of the specified images |

## Customers (guests)

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get all customers](customers.md#get-all-customers) | Returns all customers filtered by identifiers, emails, names and other filters |
| [Search customers](customers.md#search-customers) | Searches for customers that are active at the moment in the enterprise, e.g. companions of checked-in reservations or paymasters |
| [Get customers open items](customers.md#get-customers-open-items) | Returns all open items for the specified customers, i.e. all unpaid items and all deposited payments |
| [Add customer](customers.md#add-customer) | Adds a new customer to the system and returns details of the added customer |
| [Update customer](customers.md#update-customer) | Updates personal information of a customer |
| [Merge customers](customers.md#merge-customers) | Merges one customer to another |
| [Add customer file](customers.md#add-customer-file) | Attaches the specified file to the customer profile |

## Device integrations

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get all devices](devices.md#get-all-devices) | Returns all devices in the enterprise |
| [Get all commands](commands.md#get-all-commands) | Returns all commands the are still active from the client application point of view |
| [Get all commands by ids](commands.md#get-all-commands-by-ids) | Returns all commands by their identifiers |
| [Add printer command](commands.md#add-printer-command) | Adds a new printer command representing printing of the specified document on a printer |
| [Add key cutter command](commands.md#add-key-cutter-command) | Adds a new key cutter command representing cutting of a key for the specified reservation |
| [Update command](commands.md#update-command) | Updates state of a command |

## Enterprises

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get all companies](companies.md#get-all-companies) | Returns all company profiles of the enterprise, possibly filtered by identifiers, names or other filters |
| [Add company](companies.md#add-company) | Adds a new company to the enterprise |
| [Update company](companies.md#update-company) | Updates information of the company |
| [Get all company contracts](companycontracts.md#get-all-company-contracts) | Returns all contracts between the enterprise and other companies |
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

## Finance

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get all exchange rates](exchangerates.md#get-all-exchange-rates) | Returns all available exchange rates among currencies of the enterprise |
| [Get all cashiers](cashiers.md#get-all-cashiers) | Returns all cashiers in the enterprise |
| [Get all cashier transactions](cashiertransactions.md#get-all-cashier-transactions) | Returns all cashier transactions created within the specified interval |
| [Get all accounting categories](accountingcategories.md#get-all-accounting-categories) | Returns all accounting categories of the enterprise associated with the connector integration |
| [Get all accounting items](accountingitems.md#get-all-accounting-items) | Returns all accounting items of the enterprise that were consumed \(posted\) or will be consumed within the specified interval |
| [Update accounting items](accountingitems.md#update-accounting-items) | Updates specified accounting item |
| [Get all bills](bills.md#get-all-bills) | Returns all bills, possibly filtered by customers, identifiers and other filters |
| [Add bill](bills.md#add-bill) | Creates new empty bill assigned to specified account |
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
| [Add outlet bills](outletbills.md#add-outlet-bills) | Adds new outlet bills with their items |

## Messages

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get all message threads](messagethreads.md#get-all-message-threads) | Get all message threads that you have created |
| [Add message thread](messagethreads.md#add-message-thread) | Creates a new message thread on behalf of the specified customer |
| [Get all messages](messages.md#get-all-messages) | Get all messages belonging to the specified message threads |
| [Add messages](messages.md#add-messages) | Add the specified messages to the specified message threads |

## Reservations

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get all reservations](reservations.md#get-all-reservations) | Returns all reservations specified by any identifier, customer or other filter |
| [Get all reservation items](reservations.md#get-all-reservation-items) | Returns all revenue items associated with the specified reservations |
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

## Services

| <div style="width:200px">Operation or Endpoint</div> | Description |
| :-- | :-- |
| [Get all services](services.md#get-all-services) | Returns all services offered by the enterprise |
| [Get service availability](services.md#get-service-availability) | Returns availability of a bookable service in the specified interval |
| [Update service availability](services.md#update-service-availability) | Updates the number of available resources in the specified resource category by a certain amount |
| [Get all availability blocks](availabilityblocks.md#get-all-availability-blocks) | Returns all availability blocks filtered by services, unique identifiers and other filter |
| [Add availability blocks](availabilityblocks.md#add-availability-blocks) | Adds availability blocks which are used to group related availability updates |
| [Update availability blocks](availabilityblocks.md#update-availability-blocks) | Updates information about the specified availability block |
| [Delete availability blocks](availabilityblocks.md#delete-availability-blocks) | Delete availability blocks |
| [Get all rules](rules.md#get-all-rules) | Returns all rules applied with the reservations |
| [Get all business segments](businesssegments.md#get-all-business-segments) | Returns all business segments of the default service provided by the enterprise |
| [Get all rates](rates.md#get-all-rates) | Returns all rates \(pricing setups\) and rate groups \(condition settings\) of the default service provided by the enterprise |
| [Get rate pricing](rates.md#get-rate-pricing) | Returns prices of a rate in the specified interval |
| [Update rate price](rates.md#update-rate-price) | Updates price of a rate in the specified intervals |
| [Get all restrictions](restrictions.md#get-all-restrictions) | Returns all restrictions of the default service provided by the enterprise |
| [Add restrictions](restrictions.md#add-restrictions) | Adds new restrictions with the specified conditions |
| [Delete restrictions](restrictions.md#delete-restrictions) | Removes restrictions from the service |
| [Add order](orders.md#add-order) | Creates a new order with the specified products and items |
| [Get all companionships](companionships.md#get-all-companionships) | Returns all companionships based on customers, reservations or reservation groups |
| [Get all resource access tokens](resourceaccesstokens.md#get-all-resource-access-tokens) | Returns all resource access tokens based on resource access tokens, reservations or interval |
| [Add resource access tokens](resourceaccesstokens.md#add-resource-access-tokens) | Adds new resource access tokens with the specified data |
| [Update resource access tokens](resourceaccesstokens.md#update-resource-access-tokens) | Updates resource access token validity intervals and permissions |
| [Delete resource access tokens](resourceaccesstokens.md#delete-resource-access-tokens) | Delete specified resource access tokens |
| [Get all vouchers](vouchers.md#get-all-vouchers) | Returns all rate vouchers filtered by service, voucher code or voucher identifier |
| [Get all age categories](agecategories.md#get-all-age-categories) | Returns all age categories filtered by service |
