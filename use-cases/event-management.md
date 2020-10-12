## Event management

An event management integration pushes contracted revenue to the relevant guest’s profile in Mews, pulls live information about rates and availability and allows for the group reservations already pushed into Mews to be managed from the event management software. The sections below contain guidelines regarding the relevant endpoints used.

### Managing customers

In Mews, billing is managed at the customer’s profile level instead of being charged to a specific room. In order to be able to send the charges to the correct customer, they must have a profile in Mews. A new customer can be added using the [Add customer](operations/customers.md#add-customer) operation and any information can be updated using the [Update customer](operations/customers.md#update-customer) one. In order to retrieve a list of all customer profiles created within a certain interval, use the [Get all customers](operations/customers.md#get-all-customers) operation.

### New group reservation 

When a new reservation is created within the event management software, it needs to be synced with Mews. This can be pushed into Mews using the [Add reservations](operations/reservations.md#add-reservations) operation. 
In order to ensure that the property can further manage individual companions to the group reservation via the integration, use the [Add reservation companion](operations/reservations.md#add-reservation-companion) or [Delete reservation companion](operations/reservations.md#delete-reservation-companion). 

### Adding items

One of the expected functionalities of an event management integration is to push items into Mews to the correct customer’s profile. This can be done using the operation [Add order](operations/services.md#add-order). 

### Rates and availability

In order to pull data about rates from Mews into the event management integration you can use the [Get all rates](operations/services.md#get-all-rates) and  [Get rate pricing](operations/services.md#get-all-rates) as well as [Get service availability](operations/services.md#get-service-availability).
