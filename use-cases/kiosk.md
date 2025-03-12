# Kiosk

Some properties employ kiosk solutions that allow guests to self-manage aspects of their stay.
Typically, this includes check-in and check-out, but it can extend to walk-in bookings, stay management and all aspects of the guest journey.
Functionality can include updating the guest profile, viewing the guest bill and making payments, thus the kiosk category of integration covers a number of use cases.
Here we consider the most common use cases, although kiosks need not be limited to these.

> ### Kiosk devices
> Kiosks can be apps running on off-the-shelf devices such as tablets, or they can consist of custom hardware, incorporating devices such as key encoders, printers and passport scanners.
> If such devices are integrated into the kiosk, then only one integration is made between the kiosk and Mews, the connections with the devices are handled internally by the kiosk.

## Initial configuration

To help configure your kiosk for a specific property, perform an initial pull of configuration data, including supported currencies and the default language code.
To offer multiple languages, you can retrieve the list of languages supported by the API.
You will want to fetch the list of supported guest services and associated products, as properties can configure additional services as well as the default Stay accommodation service.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get property configuration | [Get configuration](../operations/configuration.md#get-configuration) |
| How to get the list of supported languages | [Get all languages](../operations/languages.md#get-all-languages) |
| How to get the list of services and products | [Get all services](../operations/services.md#get-all-services), [Get all products](../operations/products.md#get-all-products) |

## Guest check-in

To look up a guest reservation, use the general-purpose operation [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) and specify the required search filters.
To check in a reservation, use [Start reservation](../operations/reservations.md#start-reservation). Note Mews uses the phrase "start reservation" rather than "check-in", and "process reservation" rather than "check-out".

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to look up a guest reservation | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) |
| How to check in a guest reservation | [Start reservation](../operations/reservations.md#start-reservation) |

## Working with guest profiles

If the guest doesn't have a Mews customer profile, you can add one with [Add customer](../operations/customers.md#add-customer).
If the guest already has a profile, but the information in it needs updating (e.g. address, passport or driver's licence), then use [Update customer](../operations/customers.md#update-customer).
To relate a guest profile to a specific reservation, use [Add reservation companion](../operations/reservations.md#add-reservation-companion).
Note that "guests" are always referred to as "customers" in the Mews API.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to create a guest profile | [Add customer](../operations/customers.md#add-customer) |
| How to update a guest profile | [Update customer](../operations/customers.md#update-customer) |
| How to add a guest to a reservation | [Add reservation companion](../operations/reservations.md#add-reservation-companion) |

## Guest bill

You can fetch a list of revenue and payment items linked to a guest profile, or if there is a bill prepared you can request the guest bill.
To split a bill, use the operations to add a new bill and move accounting items between bills.
Once a bill is balanced to zero, it can be closed against further change.
A PDF version of the bill can be fetched for printing or display purposes.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the guest bill | [Get all bills](../operations/bills.md#get-all-bills) |
| How to get a printable bill | [Get bill PDF](../operations/bills.md#get-bill-pdf) |
| How to get the list of open revenue items for a guest | [Get customer open items](../operations/customers.md#get-customers-open-items) |
| How to create a new bill | [Add bill](../operations/bills.md#add-bill) |
| How to move bill items to a new bill | [Update accounting items](../operations/accountingitems.md#update-accounting-items) |
| How to close a bill against change | [Close bill](../operations/bills.md#close-bill) |

> ### Payment automation
> At the end of the reservation, Mews payment automation may have been enacted, so before taking payment from a guest to settle a bill, confirm the outstanding balance as described above.

## Taking payments

Once you have confirmed the outstanding balance, you have three options for handling customer payments to settle the bill:

* [Gateway payments](#gateway-payments)
* [Non-Mews terminal payments](#non-mews-terminal-payments)
* [Mews terminal payments](#mews-terminal-payments)

### Gateway payments

You can make payments using **Mews Payments**, which uses an online payment gateway.
If the guest has a credit card on file, you can charge the card — just specify the card and the amount.
The payment will be taken by Mews and recorded on the guest bill.
If the guest doesn't have a credit card on file, you can add one to their profile.
You can also see what cards are registered against a guest profile.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to charge a guest credit card using Mews Payments | [Charge credit card](../operations/creditcards.md#charge-credit-card) |
| How to add a credit card to the guest profile | [Add tokenized credit card](../operations/creditcards.md#add-tokenized-credit-card) |
| How to get details of stored credit cards | [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) |

### Non-Mews terminal payments

You can take an external payment from a guest using a payment terminal, i.e. outside of Mews.
In this case, the payment just needs to be recorded against the guest bill.
To record the payment, use the appropriate external payment operation.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to record an external card payment | [Add credit card payment](../operations/payments.md#add-credit-card-payment) |
| How to record a general external payment | [Add external payment](../operations/payments.md#add-external-payment) |
| How to record an alternative external payment | [Add alternative payment](../operations/payments.md#add-alternative-payment) |

> ### Adding external payments
> * Use [Add credit card payment](../operations/payments.md#add-credit-card-payment) for a card payment specifically — specify the amount, the credit card details (including obfuscated number) and the customer identifier.
> * Use [Add external payment](../operations/payments.md#add-external-payment) for a general payment of any type — specify the amount, the type of payment (e.g. cash) and the customer identifier.
> * Use [Add alternative payment](../operations/payments.md#add-alternative-payment) for supported alternative payment types, such as "Ideal" — specify the amount, the method of payment, the customer identifier, and any special requirements for that payment type.

### Mews terminal payments

We also support the option to connect to Mews payment terminals, for which see our detailed use case [Mews Payment Terminals](mews-terminals.md).

## Guest check-out

Once the bill is settled, the guest can be checked-out. Note Mews uses the phrase "process reservation" rather than "check-out", and "customer" rather than "guest".

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to check out a guest reservation | [Process reservation](../operations/reservations.md#process-reservation) |

## Modifying reservations

A number of API operations are available to support modifications to reservations.
[Update reservations](../operations/reservations.md#update-reservations) offers the widest range of fields to update simultaneously for a specified reservation, e.g. adult count, assigned resource, company, rate.
You can remove a companion (i.e. an additional guest) from a reservation using [Delete reservation companion](../operations/reservations.md#delete-reservation-companion), or change the primary guest or owner of the reservation with [Update reservation customer](../operations/reservations.md#update-reservation-customer).
To add additional products to a reservation, use [Add reservation product](../operations/reservations.md#add-reservation-product).
To modify only the start and/or end of the reservation, use [Update reservation interval](../operations/reservations.md#update-reservation-interval).

Products from additional services that may not be configured in Mews can be posted to the guest profile using [Add order](../operations/orders.md#add-order).
If using [Item parameters](../operations/orders.md#item-parameters), it is highly recommended to specify the accounting category that the posting belongs to, for the sake of financial reporting.
The list of accounting categories configured at a property is obtained using [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories).

> ### Linking orders to reservations
> When using [Add order](../operations/orders.md#add-order), specify parameter `linkedReservationId` in order to link the order to a guest reservation.
> This will greatly assist the property when using billing automation.

| <div style="width:350px">'How to' use case</div> | <div style="width:350px">API Operations</div> |
| :-- | :-- |
| How to update the details of a reservation | [Update reservations](../operations/reservations.md#update-reservations) |
| How to remove an additional guest from a reservation | [Delete reservation companion](../operations/reservations.md#delete-reservation-companion) |
| How to change the reservation owner | [Update reservation customer](../operations/reservations.md#update-reservation-customer) |
| How to add a product to a reservation | [Add reservation product](../operations/reservations.md#add-reservation-product) |
| How to modify the date or time of a reservation | [Update reservation interval](../operations/reservations.md#update-reservation-interval) |
| How to post an order for a guest | [Add order](../operations/orders.md#add-order) |
| How to link an order to a reservation | [Add order](../operations/orders.md#add-order) (use `linkedReservationId`) |
| How to get the list of accounting categories | [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) |

## Walk-in bookings

This section is relevant if your kiosk allows guests to create new reservations, rather than simply fetching existing reservations.
The API supports operations to facilitate the process, but consider also looking at the [Mews Booking Engine API](https://mews-systems.gitbook.io/booking-engine-guide/booking-engine-api) which is optimized for this task.

Use [Get all resources](../operations/resources.md#get-all-resources) to map out the physical configuration of the property. This will give you the names and descriptions of different resource categories, including room types.

Use [Get service availability](../operations/services.md#get-service-availability) to fetch availability.
This availability does not consider resource blocks temporarily taken out of service, so you will also want to use [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) to get this information.

Use [Get all rates](../operations/rates.md#get-all-rates) to retrieve all the rates configured at the property, and [Get rate pricing](../operations/rates.md#get-rate-pricing) to request the related prices for specified dates and times.
Rate packages apply rules to automatically post specified products when certain rates are selected.
Use [Get all rules](../operations/rules.md#get-all-rules) to get the full list of rate rules.

To calculate the price of a reservation with specific parameters, i.e. obtain a specific quotation, use [Price reservations](../operations/reservations.md#price-reservations).
This can be used, for example, during check-in or check-out to get the new price of a reservation if you select a different resource category or room type, or to check if a selected or pre-booked product should have its price included or not.

Finally, to make a new booking for the guest, use [Add reservations](../operations/reservations.md#add-reservations).
Note you will need to specify the unique customer identifier for the guest profile \(see [Working with guest profiles](#working-with-guest-profiles) above\).

| <div style="width:350px">'How to' use case</div> | <div style="width:350px">API Operations</div> |
| :-- | :-- |
| How to get resource categories (room types) | [Get all resources](../operations/resources.md#get-all-resources) |
| How to get availability | [Get service availability](../operations/services.md#get-service-availability) |
| How to get resource blocks (out of order, etc.) | [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) |
| How to get configured rates | [Get all rates](../operations/rates.md#get-all-rates) |
| How to get rate pricing | [Get rate pricing](../operations/rates.md#get-rate-pricing) |
| How to price a specific reservation | [Price reservations](../operations/reservations.md#price-reservations) |
| How to get rate package rules | [Get all rules](../operations/rules.md#get-all-rules) |
| How to make a new booking | [Add reservations](../operations/reservations.md#add-reservations) |

## Testing your integration

Ensure you follow our general [Usage guidelines](../guidelines/README.md) for testing integrations.
For additional help when working with the demo environment, there is a range of helpful articles in the [Mews Help Center](https://help.mews.com/s/?language=en_US),
including [Understanding services](https://help.mews.com/s/article/understanding-services?language=en_US). These are available in a number of languages.
