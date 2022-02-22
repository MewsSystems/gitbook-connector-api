## Kiosk

To provide a contactless experience, some properties utilize kiosk integrations to allow guests to self-manage all aspects of their stay. Below is an outline of the endpoints required to enable all operations related to a self-managed check-in, stay and check-out.

### Initial configuration

To help configure the kiosk for a specific property, the initial pull of information will provide the local information about the property (e.g. supported currencies, default language code) using [Get configuration](../operations/configuration.md#get-configuration). To be able to offer multiple languages, partners can retrieve all languages supported by the API using [Get all languages](../operations/languages.md#get-all-languages). Aside from the Stay/Accommodation service, Mews properties can configure additional services which can be retrieved via [Get all services](../operations/services.md#get-all-services). Each service can be considered a grouping of related products that can then be offered to the guest, the full list of which can be requested using [Get all products](../operations/products.md#get-all-products).

### Creating reservations

This section is relevant if your kiosk allows guests to create new reservations

In order to confirm that a new reservation can be made, integrations must be able to accurately calculate availability. First, use [Get all resources](../operations/resources.md#get-all-resources) to map out the physical configuration of the property. This information is then used to understand and display the names of the resource categories when retrieving availability using [Get service availability](../operations/services.md#get-service-availability). Additional information about resource blocks (e.g. Out of order, internal use) can be retrieved using [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks). 

Use [Get all rates](../operations/rates.md#get-all-rates) to retrieve all the rates configured and at the property and [Get rate pricing](../operations/rates.md#get-rate-pricing) to request the related prices. To calculate the price of a reservation with specific requested parameters, use [Price reservations](../operations/reservations.md#price-reservations). This can be used during checkin/out to get the new price of a reservation for a space category udpate or check if a selected/pre-booked product of a reservation should have its price included or not. Rate packages are created in Mews by applying rules that will automatically post specified products when certain rates are selected. The full list of those rules is retrieved using [Get all rules](../operations/rules.md#get-all-rules)

If your kiosk allows guests to create reservations use [Add reservations](../operations/reservations.md#add-reservations). As the unique identifier of the customer is required for reservation creation.

### Creating and updating guest profiles

If the guests do not have a Mews guest profile already, one must be created using [Add customer](../operations/customers.md#add-customer). 

If they already have an existing profile but need to update their information (e.g. address, passport, driver license), this is supported using [Update customer](../operations/customers.md#update-customer). In the same manner, integrations can retrieve and filter out specific company profiles via [Get all companies](../operations/companies.md#get-all-companies). [Add reservation companion](../operations/reservations.md#add-reservation-companion) is used to relate a guest profile to a specific reservation.

### Retrieving reservations

If they already made a reservation in advance, the integration should allow them to search for their reservation by specifying any one of the identifiers possible via the [Get all reservations](../operations/reservations.md#get-all-reservations) endpoint. Please note that searching by multiple identifiers is not supported as it's too resource-heavy. Therefore a search by `ChannelNumber` for example should be done in the following manner:

1. Retrieve all arrivals for the chosen day.
2. Filter reservation by name of guest.
3. Filter by any ID returned in the reservation.
4. Retrieve Mews 'reservationId'.
5. Request that specific reservation using the unique identifier.

### Modifying reservations

The integration should support the modification of various details of the reservation. [Update reservations](../operations/reservations.md#update-reservations) offers the widest range of properties to be updated simultaneously for a specified reservations (e.g. adult count, assigned resource, company, rate). Removing a companion from a reservation can be done using [Delete reservation companion](../operations/reservations.md#delete-reservation-companion). The owner of the reservation can be changed with [Update reservation customer](../operations/reservations.md#update-reservation-customer). To add additional products to a reservation, [Add reservation product](../operations/reservations.md#add-reservation-product) is used. To modify only the start and/or end of the reservation, use [Update reservation interval](../operations/reservations.md#update-reservation-interval).

Products from additional services that may not be configured in Mews can be posted to the guest profile using [Add order](../operations/orders.md#add-order). If using the [Item parameters](../operations/orders.md#item-parameters) it's highly recommended to specify the accounting category that the posting should be related to for the sake of the financial reporting of the property. The list of accounting categories configured at a property is requested using [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories).

### Processing and payments

To check-in a reservation, use [Start reservation](../operations/reservations.md#start-reservation). while check-out is done using [Process reservation](../operations/reservations.md#process-reservation). Before a reservation is checked-out, the relevant billing must be handled. If the guest does not have a card on file, one can be added via [Add tokenized credit card](../operations/creditcards.md#add-tokenized-credit-card) and charged with [Charge credit card](../operations/creditcards.md#charge-credit-card). If the customer is paying via a terminal, use [Add credit card payment](../operations/payments.md#add-credit-card-payment). Additional settlement methods include [Add external payment](../operations/payments.md#add-external-payment) and [Add alternative payment](../operations/payments.md#add-alternative-payment).

For an overview of all open revenue and payment items on a guest profile, use [Get customer open items](../operations/customers.md#get-customers-open-items). Another way to retrieve information about the guest folio by specifying their unique identifier in the [Get all bills](../operations/bills.md#get-all-bills) request. Splitting bills or moving items between them is can be done using the [Add bill](../operations/bills.md#add-bill) and [Update accounting items](../operations/accountingitems.md#update-accounting-items) requests. Once the bill is balanced, it can be closed using [Close bill](../operations/bills.md#close-bill) and a PDF version of it can be retrieved using [Get bill PDF](../operations/bills.md#close-bill).

### Testing your integration

Ensure you follow our general [guidelines](../guidelines) for testing integrations.

### Additional Help for working with the demo environment

- [How to use services](https://help.mews.com/s/article/understanding-services?language=en_US)
