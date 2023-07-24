## Kiosk

To provide a contactless experience, some properties utilize kiosk integrations to allow guests to self-manage all aspects of their stay. Below is an outline of the API operations required to enable all functions related to a self-managed check-in, stay and check-out.

### Initial configuration

To help configure the kiosk for a specific property, an initial pull of information using [Get configuration](../operations/configuration.md#get-configuration) will provide local information about the property, e.g. supported currencies and default language code. To be able to offer multiple languages, you can retrieve all languages supported by the API using [Get all languages](../operations/languages.md#get-all-languages). Aside from the default Stay/Accommodation service, Mews properties can configure additional services. These can be retrieved via [Get all services](../operations/services.md#get-all-services). Each service can be considered a grouping of related products that can then be offered to the guest, the full list of which can be requested using [Get all products](../operations/products.md#get-all-products).

### Creating reservations

This section is relevant if your kiosk allows guests to create new reservations, rather than simply fetching existing reservations.

In order to confirm that a new reservation can be made, integrations must be able to accurately calculate availability. First, use [Get all resources](../operations/resources.md#get-all-resources) to map out the physical configuration of the property. This information is then used to understand and display the names of the resource categories when retrieving availability using [Get service availability](../operations/services.md#get-service-availability). Additional information about resource blocks (e.g. out of order, or internal use) can be retrieved using [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks). 

Use [Get all rates](../operations/rates.md#get-all-rates) to retrieve all the rates configured at the property, and [Get rate pricing](../operations/rates.md#get-rate-pricing) to request the related prices. To calculate the price of a reservation with specific parameters, use [Price reservations](../operations/reservations.md#price-reservations). This can be used during check-in or check-out to get the new price of a reservation for a space category udpate, or to check if a selected or pre-booked product of a reservation should have its price included or not. Rate packages are created in Mews by applying rules that will automatically post specified products when certain rates are selected. The full list of those rules is retrieved using [Get all rules](../operations/rules.md#get-all-rules).

If your kiosk allows guests to create reservations, use [Add reservations](../operations/reservations.md#add-reservations). You will need to specify the unique customer identifier, i.e. their customer profile identifier.

### Creating and updating guest profiles

If the guest does not have a Mews customer profile already, one can be created using [Add customer](../operations/customers.md#add-customer). If the guest already has an existing profile but needs to update their information (e.g. address, passport, driver's license), this is supported using [Update customer](../operations/customers.md#update-customer). In the same manner, you can retrieve and filter out specific company profiles via [Get all companies](../operations/companies.md#get-all-companies). To relate a guest profile to a specific reservation, use [Add reservation companion](../operations/reservations.md#add-reservation-companion).

### Retrieving reservations

If the guest has already made a reservation in advance, you can allow them to search for their reservation by specifying any one of the identifiers supported by the [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) operation. Please note that searching by multiple identifiers is not supported, because it's too resource-heavy. A search by `ChannelNumber`, for example, should therefore be done in the following manner:

1. Retrieve all arrivals for the chosen day
2. Filter reservation by name of guest
3. Filter by any ID returned in the reservation
4. Retrieve Mews 'reservationId'
5. Request that specific reservation using the unique identifier

### Modifying reservations

The kiosk integration should support the modification of various details of the reservation. [Update reservations](../operations/reservations.md#update-reservations) offers the widest range of fields or properties to be updated simultaneously for a specified reservation, e.g. adult count, assigned resource, company, rate. Removing a companion (i.e. an additional guest) from a reservation can be done using [Delete reservation companion](../operations/reservations.md#delete-reservation-companion). The owner of the reservation can be changed with [Update reservation customer](../operations/reservations.md#update-reservation-customer). To add additional products to a reservation, [Add reservation product](../operations/reservations.md#add-reservation-product) is used. To modify only the start and/or end of the reservation, use [Update reservation interval](../operations/reservations.md#update-reservation-interval).

Products from additional services that may not be configured in Mews can be posted to the guest profile using [Add order](../operations/orders.md#add-order). If using [Item parameters](../operations/orders.md#item-parameters), it is highly recommended to specify the accounting category that the posting should be related to, for the sake of the financial reporting of the property. The list of accounting categories configured at a property is obtained using [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories).

### Processing and payments

To check in a reservation, use [Start reservation](../operations/reservations.md#start-reservation). To check out a reservation, use [Process reservation](../operations/reservations.md#process-reservation).

> Note Mews uses the phrase "start reservation" rather than "check-in", and "process reservation" rather than "check-out".

Before a reservation is processed or checked out, the customer bill must be settled. You have three options for handling customer payments to settle the bill:

1. [Gateway payments](#gateway-payments)
2. [Non-Mews terminal payments](#non-mews-terminal-payments)
3. [Mews terminal payments](#mews-terminal-payments)

### Gateway payments

You can make payments using **Mews Payments**, which uses an online payment gateway. If the customer has a credit card on file, just use [Charge credit card](../operations/creditcards.md#charge-credit-card) to charge the card, specifying the card and the amount. The payment will be taken by Mews and recorded on the customer bill. If the customer doesn't have a credit card on file, you can add one using [Add tokenized credit card](../operations/creditcards.md#add-tokenized-credit-card). Want to see what cards are registered against a customer? Use [Get all credit cards](../operations/creditcards.md#get-all-credit-cards).

### Non-Mews terminal payments

This represents a payment taken outside of Mews, using a payment terminal. In this case, the payment just needs to be recorded against the customer bill.
To add the payment, use either [Add credit card payment](../operations/payments.md#add-credit-card-payment), [Add external payment](../operations/payments.md#add-external-payment) or [Add alternative payment](../operations/payments.md#add-alternative-payment).

* Use [Add credit card payment](../operations/payments.md#add-credit-card-payment) for a card payment specifically - specify the amount, the credit card details (including obfuscated number) and the customer
* Use [Add external payment](../operations/payments.md#add-external-payment) for a general payment - specify the amount, the type of payment (e.g. cash) and the customer
* Use [Add alternative payment](../operations/payments.md#add-alternative-payment) for supported alternative payment types, such as "Ideal" - specify the amount, the method of payment, the customer, and any special requirements for that payment type

### Mews terminal payments

Finally, we also support the option to connect to Mews payment terminals, for which see our detailed use case [Mews Payment Terminals](mews-terminals.md).

### Guest bill

For an overview of all open revenue and payment items on a guest profile, use [Get customer open items](../operations/customers.md#get-customers-open-items). Another way to retrieve information about the guest folio is by specifying their unique identifier when using [Get all bills](../operations/bills.md#get-all-bills). Splitting bills, or moving items between bills, can be done using the [Add bill](../operations/bills.md#add-bill) and [Update accounting items](../operations/accountingitems.md#update-accounting-items) operations. Once the bill is balanced, it can be closed using [Close bill](../operations/bills.md#close-bill) and a PDF version of it can be retrieved using [Get bill PDF](../operations/bills.md#close-bill).

### Testing your integration

Ensure you follow our general [guidelines](../guidelines) for testing integrations.

### Additional Help for working with the demo environment

- [How to use services](https://help.mews.com/s/article/understanding-services?language=en_US)
