# 'How to' use cases

This page summarises all of our 'how to' use cases, together with the main use cases in which they are referenced. Search here for the task you want to perform with the API, it will take you to the appropriate API Operation or API Operations, and also link to higher level use cases for context and further information.

> **Can't find what you're looking for?** 'How to' use cases are expressed in common terminology, but often different terms are used to mean the same thing. Try searching using alternative terms. We created the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US) to explain the particular terminology used in Mews. If you still can't find what you're looking for, [let us know](mailto:partnersuccess@mews.com).

## Configuration

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to get enterprise or property configuration | [Get configuration](../operations/configuration.md#get-configuration) | [Events](events.md), [Kiosk](kiosk.md) |
| How to get the list of supported countries | [Get all countries](../operations/countries.md#get-all-countries) | [Events](events.md) |
| How to get the list of supported currencies | [Get all currencies](../operations/currencies.md#get-all-currencies) | [Events](events.md) |
| How to get the list of supported languages | [Get all languages](../operations/languages.md#get-all-languages) | [Events](events.md), [Kiosk](kiosk.md) |
| How to get applicable tax rates | [Get all tax environments](../operations/taxenvironments.md#get-all-tax-environments), [Get all taxations](../operations/taxations.md#get-all-taxations) | [Events](events.md) |
| How to get editable history window | [Get configuration](../operations/configuration.md#get-configuration) | [Accounting](accounting.md) |

## Finance

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to get configured accounting categories | [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) | [Accounting](accounting.md), [Events](events.md), [Point of sale](point-of-sale.md) |
| How to get the list of accounting categories | [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) | [Upsell](upsell.md), [Guest technology](guest-technology.md), [Kiosk](kiosk.md) |
| How to add accounting items to a bill | [Update accounting items](../operations/finance.md#update-accounting-items) | [Events](events.md) |
| How to move bill items to a new bill | [Update accounting items](../operations/accountingitems.md#update-accounting-items) | [Kiosk](kiosk.md) |
| How to get accounting items consumed over a period | [Get all payments](../operations/payments.md#get-all-payments), [Get all order items](../operations/orderitems.md#get-all-order-items) | [Accounting](accounting.md) |
| How to get payment items paid over a period | [Get all payments](../operations/payments.md#get-all-payments) | [Accounting](accounting.md) |
| How to get order items consumed over a period | [Get all order items](../operations/orderitems.md#get-all-order-items) | [Accounting](accounting.md) |
| How to get a list of revenue items for a reservation | [Get all order items](../operations/orderitems.md#get-all-order-items) | [Accounting](accounting.md) |
| How to get order items linked to a reservation | [Get all order items](../operations/orderitems.md#get-all-order-items) | [Revenue management](revenue-management.md) |
| How to find the original order item for a rebate item | [Get all order items](../operations/orderitems.md#get-all-order-items) | [Accounting](accounting.md) |
| How to get outlet items consumed over a period | [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) | [Accounting](accounting.md) |
| How to get bills and invoices | [Get all bills](../operations/bills.md#get-all-bills) | [Accounting](accounting.md) |
| How to get the customer or guest bill | [Get all bills](../operations/bills.md#get-all-bills) | [Kiosk](kiosk.md) |
| How to create a new bill | [Add bill](../operations/finance.md#add-bill) | [Events](events.md), [Kiosk](kiosk.md) |
| How to close a bill against change | [Close bill](../operations/finance.md#close-bill) | [Events](events.md), [Kiosk](kiosk.md) |
| How to get a printable bill | [Get bill PDF](../operations/bills.md#close-bill) | [Kiosk](kiosk.md) |
| How to charge a guest credit card using Mews Payments | [Charge credit card](../operations/creditcards.md#charge-credit-card) | [Kiosk](kiosk.md), [Payment automation](payment-automation.md) |
| How to add a credit card to the guest profile | [Add tokenized credit card](../operations/creditcards.md#add-tokenized-credit-card) | [Kiosk](kiosk.md), [Payment automation](payment-automation.md) |
| How to get details of stored credit cards | [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) | [Kiosk](kiosk.md), [Payment automation](payment-automation.md) |
| How to check if a credit card is stored against a guest profile | [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) | [Kiosk](kiosk.md), [Payment automation](payment-automation.md) |
| How to get the merchant ID for the Mews Payment Gateway | [Get configuration](../operations/configuration.md#get-configuration) | [Payment automation](payment-automation.md) |
| How to record an external card payment | [Add credit card payment](../operations/payments.md#add-credit-card-payment) | [Kiosk](kiosk.md) |
| How to record a general external payment | [Add external payment](../operations/payments.md#add-external-payment) | [Kiosk](kiosk.md) |
| How to record an alternative external payment | [Add alternative payment](../operations/payments.md#add-alternative-payment) | [Kiosk](kiosk.md) |
| How to post end-of-day accounting items | [Add outlet bill](../operations/outletbills.md#add-outlet-bills) | [Point of sale](point-of-sale.md) |

## Enterprises & Resources

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to get configured rooms and spaces | [Get all resources](../operations/resources.md#get-all-resources) | [Point of sale](point-of-sale.md), [Housekeeping](housekeeping.md), [Events](events.md) |
| How to get resource categories or room types | [Get all resources](../operations/resources.md#get-all-resources) | [Kiosk](kiosk.md) |
| How to update the state of a resource or room | [Update resources](../operations/resources.md#update-resources) | [Housekeeping](housekeeping.md) |
| How to get resource blocks (out of order, etc.) | [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) | [Kiosk](kiosk.md), [Housekeeping](housekeeping.md) |
| How to get information about out-of-order blocks | [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) | [Revenue management](revenue-management.md) |
| How to add a resource block | [Add resource block](../operations/resourceblocks.md#add-resource-block) | [Housekeeping](housekeeping.md) |
| How to delete resource blocks | [Delete resource blocks](../operations/resourceblocks.md#delete-resource-blocks) | [Housekeeping](housekeeping.md) |
| How to get the configured outlets | [Get all outlets](../operations/outlets.md#get-all-outlets) | [Point of sale](point-of-sale.md) |
| How to get company profiles | [Get all companies](../operations/companies.md#get-all-companies) | [Events](events.md) |
| How to find an existing company | [Get all companies](../operations/companies.md#get-all-companies) | [Events](events.md) |
| How to add a new company | [Add company](../operations/companies.md#add-company) | [Events](events.md) |
| How to get information about departments | [Get all departments](../operations/departments.md#get-all-departments) | [Housekeeping](housekeeping.md) |
| How to get the list of staff tasks | [Get all tasks](../operations/tasks.md#get-all-tasks) | [Housekeeping](housekeeping.md) |
| How to add a staff task | [Add task](../operations/tasks.md#add-task) | [Housekeeping](housekeeping.md) |
| How to create staff reminders | [Add task](../operations/tasks.md#add-task) | [Upsell](upsell.md) |

## Customer Profiles

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to create a customer or guest profile | [Add customer](../operations/customers.md#add-customer) | [Kiosk](kiosk.md) |
| How to update a customer or guest profile | [Update customer](../operations/customers.md#update-customer) | [Kiosk](kiosk.md), [Reputation management](reputation-management.md) |
| How to create a Paymaster profile | [Add customer](../operations/customers.md#add-customer) | [Events](events.md) |
| How to update a profile to be a Paymaster | [Update customer](../operations/customers.md#update-customer) | [Events](events.md) |
| How to remove the Paymaster classification | [Update customer](../operations/customers.md#update-customer) | [Events](events.md) |
| How to get a list of profiles created over a period of time | [Get all customers](../operations/customers.md#get-all-customers) | [Events](events.md) |
| How to get checked in and checked out guests | [Get all customers](../operations/customers.md#get-all-customers) | [Upsell](upsell.md) |
| How to search for a customer or guest | [Search customers](../operations/customers.md#search-customers) | [Point of sale](point-of-sale.md) |
| How to get only checked in guests | [Search customers](../operations/customers.md#search-customers) | [Upsell](upsell.md) |
| How to review already posted items | [Get customer open items](../operations/customers.md#get-customers-open-items) | [Events](events.md) |
| How to get the list of open revenue items for a guest | [Get customer open items](../operations/customers.md#get-customers-open-items) | [Kiosk](kiosk.md) |

## Reservations

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to listen for changes to reservations | [General Webhooks](../events/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../events/websockets.md) \(`Reservation` event\) | [Guest technology](guest-technology.md), [Customer management](customer-management.md), [Housekeeping](housekeeping.md), [Reputation management](reputation-management.md), [Revenue management](revenue-management.md), [Events](events.md) |
| How to get reservation and customer details | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | [Guest technology](guest-technology.md), [Customer management](customer-management.md), [Housekeeping](housekeeping.md) |
| How to get reservation details | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | [Revenue management](revenue-management.md) |
| How to get reservations updated over a time period | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | [Customer management](customer-management.md) |
| How to look up a guest reservation | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | [Kiosk](kiosk.md) |
| How to get checked-out reservations | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | [Reputation management](reputation-management.md) |
| How to get historical reservations data | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | [Revenue management](revenue-management.md) |
| How to get a specific reservation | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) | [Upsell](upsell.md) |
| How to update the details of a reservation | [Update reservations](../operations/reservations.md#update-reservations) | [Kiosk](kiosk.md) |
| How to add a guest to a reservation | [Add reservation companion](../operations/reservations.md#add-reservation-companion) | [Kiosk](kiosk.md), [Events](events.md) |
| How to remove a guest from a reservation | [Delete reservation companion](../operations/reservations.md#delete-reservation-companion) | [Kiosk](kiosk.md), [Events](events.md) |
| How to change the reservation owner | [Update reservation customer](../operations/reservations.md#update-reservation-customer) | [Kiosk](kiosk.md) |
| How to modify the date or time of a reservation | [Update reservation interval](../operations/reservations.md#update-reservation-interval) | [Kiosk](kiosk.md) |
| How to check in a guest reservation | [Start reservation](../operations/reservations.md#start-reservation) | [Kiosk](kiosk.md) |
| How to check out a guest reservation | [Process reservation](../operations/reservations.md#process-reservation) | [Kiosk](kiosk.md) |
| How to add a product to a reservation | [Add reservation product](../operations/reservations.md#add-reservation-product) | [Kiosk](kiosk.md) |
| How to add a product order to a reservation | [Add reservation product](../operations/reservations.md#add-reservation-product) | [Upsell](upsell.md) |
| How to push a reservation to Mews | [Add reservations](../operations/reservations.md#add-reservations) | [Events](events.md) |
| How to make a new booking | [Add reservations](../operations/reservations.md#add-reservations) | [Kiosk](kiosk.md) |
| How to place an existing reservation into an availability block | [Update reservations](../operations/reservations.md#update-reservations) | [Events](events.md) |
| How to remove a reservation from an availability block | [Update reservation](../operations/reservations.md#update-reservations) | [Events](events.md) |
| How to price a specific reservation | [Price reservations](../operations/reservations.md#price-reservations) | [Kiosk](kiosk.md) |

## Data Export

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to create a bulk data export | [Add export](../operations/exports.md#add-export) | [Data export](data-export.md), [Revenue management](revenue-management.md) |
| How to check on data export progress | [Get all exports](../operations/exports.md#get-all-exports) | [Data export](data-export.md), [Revenue management](revenue-management.md) |

## Services & Products

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to get the list of property services | [Get all services](../operations/services.md#get-all-services) | [Guest technology](guest-technology.md) |
| How to get the list of services offered | [Get all services](../operations/services.md#get-all-services) | [Events](events.md), [Upsell](upsell.md), [Point of sale](point-of-sale.md) |
| How to get the list of products linked to services | [Get all products](../operations/products.md#get-all-products) | [Events](events.md), [Upsell](upsell.md) |
| How to get the list of available products | [Get all products](../operations/products.md#get-all-products) | [Events](events.md) |
| How to get configured rates | [Get all rates](../operations/rates.md#get-all-rates) | [Revenue management](revenue-management.md), [Kiosk](kiosk.md), [Events](events.md) |
| How to get configured rate groups | [Get all rate groups](../operations/rates.md#get-all-rate-groups) | [Revenue management](revenue-management.md) |
| How to get rate pricing | [Get rate pricing](../operations/rates.md#get-rate-pricing) | [Kiosk](kiosk.md) |
| How to get the price for a given rate | [Get rate pricing](../operations/rates.md#get-rate-pricing) | [Events](events.md) |
| How to get the price for a specific rate and time period | [Get rate pricing](../operations/rates.md#get-rate-pricing) | [Revenue management](revenue-management.md) |
| How to listen for changes to rate prices | [WebSockets](../events/websockets.md) \(`PriceUpdate` event\) | [Revenue management](revenue-management.md) |
| How to get rate package rules | [Get all rules](../operations/rules.md#get-all-rules) | [Kiosk](kiosk.md) |
| How to get all configured business segments | [Get all business segments](../operations/businesssegments.md#get-all-business-segments) | [Revenue management](revenue-management.md) |
| How to get service restrictions | [Get all restrictions](../operations/restrictions.md#get-all-restrictions) | [Revenue management](revenue-management.md) |
| How to add or remove restrictions (old) | [Add restrictions](../operations/restrictions.md#add-restrictions), [Delete restrictions](../operations/restrictions.md#delete-restrictions) | [Revenue management](revenue-management.md) |
| How to add or remove restrictions (new) | [Set restrictions](../operations/restrictions.md#set-restrictions), [Clear restrictions](../operations/restrictions.md#clear-restrictions) | [Revenue management](revenue-management.md) |
| How to get availability | [Get service availability](../operations/services.md#get-service-availability)  | [Events](events.md), [Kiosk](kiosk.md) |
| How to get room or resource availability | [Get service availability](../operations/services.md#get-service-availability) | [Upsell](upsell.md) |
| How to update or amend service availability | [Update service availability](../operations/services.md#update-service-availability) | [Events](events.md) |
| How to post an order for a guest | [Add order](../operations/orders.md#add-order) | [Kiosk](kiosk.md) |
| How to post an order item to a guest profile | [Add order](../operations/orders.md#add-order) | [Guest technology](guest-technology.md) |
| How to add a product order item to a customer profile | [Add order](../operations/orders.md#add-order) | [Events](events.md) |
| How to add a product order to a guest profile | [Add order](../operations/orders.md#add-order) | [Upsell](upsell.md) |
| How to post a charge to a customer profile | [Add order](../operations/orders.md#add-order) | [Point of sale](point-of-sale.md) |
| How to link an order to a reservation | [Add order](../operations/orders.md#add-order) (use `LinkedReservationId`) | [Events](events.md), [Kiosk](kiosk.md), [Guest technology](guest-technology.md), [Upsell](upsell.md), [Point of sale](point-of-sale.md) |

## Availability Blocks

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to create an availability block | [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks) | [Events](events.md) |
| How to get existing availability blocks | [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) | [Events](events.md) |
| How to delete an availability block | [Delete availability blocks](../operations/availabilityblocks.md#delete-availability-blocks) | [Events](events.md) |
| How to place an existing reservation into an availability block | [Update reservations](../operations/reservations.md#update-reservations) | [Events](events.md) |
| How to remove a reservation from an availability block | [Update reservation](../operations/reservations.md#update-reservations) | [Events](events.md) |

> **What is an Availability Block?** Availability Blocks are fixed sets of inventory (rooms, spaces or resources) that are provisionally removed from public availability for use by private groups such as wedding parties, or for companies or travel agencies. For more information, see our Help Guide [Creating availability blocks](https://help.mews.com/s/article/Creating-availability-blocks-in-Mews?language=en_US).

## Customer Loyalty

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to add a Loyalty Program | [Add loyalty programs](../operations/loyaltyprograms.md#add-loyalty-programs) | [Customer loyalty](loyalty.md) |
| How to get a list of Loyalty Programs | [Get all loyalty programs](../operations/loyaltyprograms.md#get-all-loyalty-programs) | [Customer loyalty](loyalty.md) |
| How to get the Chain identifier for a property | [Get configuration](../operations/configuration.md#get-configuration) | [Customer loyalty](loyalty.md) |
| How to update a Loyalty Program | [Update loyalty programs](../operations/loyaltyprograms.md#update-loyalty-programs) | [Customer loyalty](loyalty.md) |
| How to delete a Loyalty Program | [Delete loyalty programs](../operations/loyaltyprograms.md#delete-loyalty-programs) | [Customer loyalty](loyalty.md) |
| How to add a Loyalty Tier | [Add loyalty tiers](../operations/loyaltytiers.md#add-loyalty-tiers) | [Customer loyalty](loyalty.md) |
| How to get a list of Loyalty Tiers | [Get all loyalty tiers](../operations/loyaltytiers.md#get-all-loyalty-tiers) | [Customer loyalty](loyalty.md) |
| How to update a Loyalty Tier | [Update loyalty tiers](../operations/loyaltytiers.md#update-loyalty-tiers) | [Customer loyalty](loyalty.md) |
| How to delete a Loyalty Tier | [Delete loyalty tiers](../operations/loyaltytiers.md#delete-loyalty-tiers) | [Customer loyalty](loyalty.md) |
| How to add a Loyalty Membership | [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships) | [Customer loyalty](loyalty.md) |
| How to get a list of Loyalty Memberships | [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships) | [Customer loyalty](loyalty.md) |
| How to update a Loyalty Membership | [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships) | [Customer loyalty](loyalty.md) |
| How to delete a Loyalty Membership | [Delete loyalty memberships](../operations/loyaltymemberships.md#delete-loyalty-memberships) | [Customer loyalty](loyalty.md) |

## Customer Messaging

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to get your message threads | [Get all message threads](../operations/messagethreads.md#get-all-message-threads) | [Customer messaging](messaging.md) |
| How to get messages for your message threads | [Get all messages](../operations/messages.md#get-all-messages) | [Customer messaging](messaging.md) |
| How to create a new message thread | [Add message thread](../operations/messagethreads.md#add-message-thread) | [Customer messaging](messaging.md) |
| How to create a new message within a thread | [Add messages](../operations/messages.md#add-messages) | [Customer messaging](messaging.md) |
| How to listen for new customer messages | [General Webhooks](../events/wh-general.md) \(`MessageAdded` event\) | [Customer messaging](messaging.md) |

## Device Commands

| <div style="width:350px">'How to' use case</div> | <div style="width:200px">API Operations</div> | <div style="width:150px">Use cases</div> |
| :-- | :-- | :-- |
| How to listen for new device commands | [WebSockets](../events/websockets.md) | [Device integration](device-integration.md) |
| How to get details of a device command | [Get all commands by ids](../operations/commands.md#get-all-commands-by-ids) |[Device integration](device-integration.md) |
| How to get all unprocessed device commands | [Get all commands](../operations/commands.md#get-all-commands) |[Device integration](device-integration.md) |
| How to update the state of a device command | [Update command](../operations/commands.md#update-command) |[Device integration](device-integration.md) |

> **What is a Device Command?** Device Commands are messages sent by Mews to on-premise devices such as printers and key encoders. For more information, see the [Device integration](device-integration.md) use case.
