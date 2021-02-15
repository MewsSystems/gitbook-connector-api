## Event management

An event management integration can pull live information about rates and availability, create availability blocks, affect property inventory, push contracted revenue to the relevant guest’s profile in Mews, and allow users to manage the group reservations (already pushed into Mews) from the event management software. The sections below contain guidelines regarding the relevant endpoints used.

### Enterprise information

To automate the onboarding of a new property as much as possible, use any combination of the [Configuration](../operations/configuration.md) operation or [Enterprise](../operations/enterprises.md) to pull information about a property, including but not limited to resources configuration, applicable tax rates, services and products, company profiles.

### Rates and availability

To pull data about rates and availability from Mews into the event management integration, use [Get all rates](../operations/services.md#get-all-rates) and  [Get rate pricing](../operations/services.md#get-all-rates) as well as [Get service availability](../operations/services.md#get-service-availability).

### Availability blocks



#### Creating availability blocks

first get service availability and existing service availability adjustments

add availability block
Use [Add availability blocks](../operations/services.md#add-availability-blocks) to add a new block object. you can use ExternalIdentifier to identify it. 

then call [Update service availability](../operations/services.md#update-service-availability) to push availability adjustments into the system. If you wish to reserve 10 units of availability, send -10 in the adjustment.

#### Adding reservations to an availability block

Include `AvailabilityBlockId` in the [reservations parameters](../operations/reservations..#reservation-parameters) when you [add reservations](../operations/reservations.md#add-reservations) into an existing group block.

Or, add place an existing reservation into an availability block with [Update reservations](../operations/reservations.md#update-reservations)

#### Managing availability blocks


Use [Delete availability blocks](../operations/services.md#delete-availability-blocks) to remove the block object.

Use [Get availability blocks](../operations/services.md#add-availability-blocks)



### Managing customers

In Mews, billing is managed at the customer’s profile level instead of being charged to a specific room. In order to be able to send the charges to the correct customer, they must have a profile in Mews. A new customer can be added using the [Add customer](../operations/customers.md#add-customer) operation and any information can be updated using the [Update customer](../operations/customers.md#update-customer) one. In order to retrieve a list of all customer profiles created within a certain interval, use the [Get all customers](../operations/customers.md#get-all-customers) operation.

### New group reservation 

When a new reservation is created within the event management software, it needs to be synced with Mews. This can be pushed into Mews using the [Add reservations](../operations/reservations.md#add-reservations) operation. In order to ensure that the property can further manage individual companions to the group reservation via the integration, use the [Add reservation companion](../operations/reservations.md#add-reservation-companion) or [Delete reservation companion](../operations/reservations.md#delete-reservation-companion). 

### Adding items

One of the expected functionalities of an event management integration is to push items into Mews to the correct customer’s profile. This can be done using the operation [Add order](../operations/services.md#add-order). If the product being posted already exists in Mews, then use [Product order parameters](../operations/services.md#product-order-parameters). If the product does not exist in Mews then use the [Item parameters](../operations/services.md#item-parameters).

To ensure correct reporting, all revenue items posted into Mews using Item parameters must be associated with their correct accounting category by sending the unique identifier of the accounting category in the request. Information about all the categories configured at each property are requested using [Get all accounting categories](../operations/finance.md#get-all-accounting-categories). 


### Testing your integration

Ensure you follow our general [guidelines](../guidelines.md) for testing integrations. In addition to this, and specific to Event Management integrations:

If you'd like to double-check that you are correctly creating all the reservations you want to retrieve, you can do so by [searching for the reservation, or related customer profile](https://intercom.help/mews-systems/en/articles/4258665-search-in-commander) or using the [Mews Reservation Report](https://help.mews.com/en/articles/4245884-reservation-report). 
To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the Mews [Accounting Report](https://intercom.help/mews-systems/en/articles/4245918-accounting-report). If done correctly, the product you've posted will appear under the relevant accounting category.  

### Additional Help for working with the demo environment

- How to create [accounting categories](https://intercom.help/mews-systems/en/articles/4244319-create-an-accounting-category)
- How to [create rates](https://help.mews.com/en/articles/4244388-create-a-rate)
- How to [update rates](https://help.mews.com/en/articles/4244389-update-or-remove-a-rate) 
- How to [manage rate prices](https://intercom.help/mews-systems/en/articles/4245964-rate-management)
