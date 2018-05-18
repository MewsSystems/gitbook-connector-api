# Operations

This section describes all operations supported by the API:

* [Configuration](configuration.md) - operations related to configuration of the client, enterprise or API.
  * [Get configuration](configuration.md#get-configuration) - returns configuration of the client and enterprise.
  * [Get all countries](configuration.md#get-all-countries) - returns all countries supported by the API.
  * [Get all currencies](configuration.md#get-all-currencies) - returns all currencies supported by the API.
  * [Get all languages](configuration.md#get-all-languages) - returns all languages supported by the API.
  * [Get language texts](configuration.md#get-language-texts) - returns translations of texts to a specified language.
  * [Get image URLs](configuration.md#get-image-urls) - returns URLs of specified images.
* [Enterprises](enterprises.md) - operations related to the enterprise and its settings.
  * [Get all companies](enterprises.md#get-all-companies) - returns company profiles of the enterprise.
  * [Get all company contracts](enterprises.md#get-all-company-contracts) - returns contracts of the enterprise with companies.
  * [Get all departments](enterprises.md#get-all-departments) - returns all departments of the enterprise.
  * [Get all spaces](enterprises.md#get-all-spaces) - returns spaces in the enterprise together with their configuration.
  * [Get all space blocks](enterprises.md#get-all-space-blocks) - returns space blocks in an interval.
  * [Update space state](enterprises.md#update-space-state) - updates state of a space.
  * [Add task](enterprises.md#add-task) - adds a task to the enterprise.
* [Services](services.md) - operations related to offered services, availability and prices.
  * [Get all services](services.md#get-all-services) - returns all services offered by the enterprise.
  * [Get service availability](services.md#get-service-availability) - returns availability of a service in an interval.
  * [Get all products](services.md#get-all-products) - returns all products offered together with services.
  * [Get all business segments](services.md#get-all-business-segments) - returns all business segments of a service.
  * [Get all rates](services.md#get-all-rates) - returns all rates of a service.
  * [Get rate pricing](services.md#get-rate-pricing) - returns prices of a rate in an interval.
  * [Update rate price](services.md#update-rate-price) - updates prices of a rate.
  * [Add order](services.md#add-order) - adds a new service order.
* [Reservations](reservations.md) - operations for retrieval and modifications of reservations.
  * [Get all reservations](reservations.md#get-all-reservations) - returns all reservations in an interval.
  * [Get all reservations by ids](reservations.md#get-all-reservations-by-ids) - returns all reservations by their identifiers.
  * [Get all reservations by customers](reservations.md#get-all-reservations-by-customers) - returns all reservations by the customers that own them.
  * [Get all reservation items](reservations.md#get-all-reservation-items) - returns all accounting items of reservations. 
  * [Price reservations](reservations.md#price-reservations) - returns prices of specified reservations.
  * [Add reservations](reservations.md#add-reservations) - adds a new group of reservations.
  * [Start reservation](reservations.md#start-reservation) - starts \(checks in\) a reservation.
  * [Process reservation](reservations.md#process-reservation) - processes \(checks out\) a reservation.
  * [Cancel reservation](reservations.md#cancel-reservation) - cancels a reservation.
  * [Update reservation interval](reservations.md#update-reservation-interval) - updates start \(arrival\) and end \(departure\) of a reservation.
  * [Update reservation space](reservations.md#update-reservation-space) - updates assignment of a reservation to another space.
  * [Update reservation requested category](reservations.md#update-reservation-requested-category) - updates requested space category of a reservation.
  * [Add reservation companion](reservations.md#add-reservation-companion) - adds a new companion to a reservation.
  * [Delete reservation companion](reservations.md#delete-reservation-companion) - deletes a companion from a reservation.
  * [Add reservation product](reservations.md#add-reservation-product) - adds a new product to the reservation.
* [Customers](customers.md) - operations for retrieval and modifications of customers.
  * [Get all customers](customers.md#get-all-customers) - returns all customers in an interval.
  * [Get all customers by ids](customers.md#get-all-customers-by-ids) - returns all customers by their identifiers.
  * [Get all customers by emails](customers.md#get-all-customers-by-emails) - returns all customers by their emails.
  * [Search customers](customers.md#search-customers) - searches among active customers.
  * [Get customers open items](customers.md#get-customers-open-items) - returns open items of customers.
  * [Add customer](customers.md#add-customer) - adds a new customer.
  * [Update customer](customers.md#update-customer) - updates personal/internal information of a customer.
  * [Merge customers](customers.md#merge-customers) - merges two customers into one.
  * [Add customer file](customers.md#add-customer-file) - adds a new file to a customer.
* [Finance](finance.md) - operations related to financial settings, bills and payments.
  * [Get all exchange rates](finance.md#get-all-exchange-rates) - returns all exchange rates of the enterprise.
  * [Get all cashiers](finance.md#get-all-cashiers) - returns all cashiers of the enterprise.
  * [Get all cashier transactions](finance.md#get-all-cashier-transactions) - returns all cashier transactions in an interval.
  * [Get all accounting categories](finance.md#get-all-accounting-categories) - returns all accounting categories of the enterprise.
  * [Get all accounting items](finance.md#get-all-accounting-items) - returns all accounting items in an interval.
  * [Get all bills by ids](finance.md#get-all-bills-by-ids) - returns all bills by their identifiers.
  * [Get all bills by customers](finance.md#get-all-bills-by-customers) - returns all bills of the specified customers.
  * [Get all closed bills](finance.md#get-all-closed-bills) - returns all closed bills in an interval.
  * [Get all preauthorizations by customers](finance.md#get-all-preauthorizations-by-customers) - returns all preauthorizations of the specified customers.
  * [Add credit card payment](finance.md#add-credit-card-payment) - adds a new credit card payment.
  * [Add external payment](finance.md#add-external-payment) - adds a new external payment.
* [Integrations](integrations.md) - operations related to integrations, devices and commands to them.
  * [Get all devices](integrations.md#get-all-devices) - returns all physical devices defined in the enterprise.
  * [Get all commands](integrations.md#get-all-commands) - returns all active commands issued for the client.
  * [Get all commands by ids](integrations.md#get-all-commands-by-ids) - returns all commands by their identifiers.
  * [Add printer command](integrations.md#add-printer-command) - adds a new command for a printer to print a document.
  * [Add key cutter command](integrations.md#add-key-cutter-command) - adds a new command for key cutter to cut keys.
  * [Update command](integrations.md#update-command) - updates a command for a device.

