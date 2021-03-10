## Event management

An event management integration can pull live information about rates and availability, create availability blocks, affect property inventory, push contracted revenue to the relevant guest’s profile in Mews, and allow users to manage the group reservations (already pushed into Mews) from the event management software. The sections below contain guidelines regarding the relevant endpoints used.

### Enterprise information

To automate the onboarding of a new property as much as possible, use any combination of the [Configuration](../operations/configuration.md) operation or [Enterprise](../operations/enterprises.md) to pull information about a property, including but not limited to resources configuration, applicable tax rates, services and products, company profiles.

### Rates and availability

Use [Get all rates](../operations/services.md#get-all-rates) and  [Get rate pricing](../operations/services.md#get-all-rates) to pull data about rates offered in the enterprise. Use [Get service availability](../operations/services.md#get-service-availability) to pull category availability and related adjustments from Mews into the event management integration.

### Managing group reservations with availability blocks

Availability blocks (also known as group blocks) are used for reserving a certain portion of category availability in Mews for a specific group of reservations, as well as the subsequent management of reservations that are created in Mews for such groups. 

#### Creating availability blocks

First call [Add availability blocks](../operations/services.md#add-availability-blocks) to add a new block object with the relevant parameters. Note the `AvailabilityBlockId`, which is used as the unique identifier throughout Mews. 

Then call [Update service availability](../operations/services.md#update-service-availability) to push availability adjustments into Mews. Send a negative value for the `UnitCountAdjustment` parameter and include the aforementioned `AvailabilityBlockId` in the [availability update](../operations/services.md#availability-update) parameter to reserve units of availability for the availability block you have just created. 

*Example: If you wish to reserve 10 units of availability, send -10 in the `UnitCountAdjustment` parameter.*

#### Managing availability blocks

Call [Get availability blocks](../operations/services.md#add-availability-blocks) to retrieve information about existing availability blocks, as well as all associated reservations and availability adjustments. To avoid the need of regular polling, you can make use of Reservation Webhook events to receive real-time notification of all reservation events ??????????????????

It is possible to [Delete availability blocks](../operations/services.md#delete-availability-blocks) to remove the availability block. ?????????? any criteria/business checks? should be beneath the endpoint probably?????????????

#### Adding reservations to an availability block

When a new reservation is created within the event management software, it needs to be synced with Mews. This can be pushed into Mews using the [Add reservations](../operations/reservations.md#add-reservations) operation. To ensure that the reservations consume availability reserved for the availability block, instead of from the property's overall availability, include `AvailabilityBlockId` in the [reservations parameters](../operations/reservations..#reservation-parameters) when you [add reservations](../operations/reservations.md#add-reservations) into an existing group block.

It is also possible to place an existing reservation into an availability block with the [Update reservations](../operations/reservations.md#update-reservations) by including `AvailabilityBlockId` in the [reservations parameters](../operations/reservations..#reservation-parameters).


????????? any caveats about overbooking?
- can't go over the availability carved out via update service availability

????????????? currently can't disassociate reservations from an availability block? sending blank in reservations/update didn't do the trick

#### Managing reservations

In order to ensure that the property can further manage individual companions to the group reservation via the integration, use the [Add reservation companion](../operations/reservations.md#add-reservation-companion) or [Delete reservation companion](../operations/reservations.md#delete-reservation-companion). 




### Managing customers

In Mews, billing is managed at the customer’s profile level instead of being charged to a specific room. In order to be able to send the charges to the correct customer, they must have a profile in Mews. A new customer can be added using the [Add customer](../operations/customers.md#add-customer) operation and any information can be updated using the [Update customer](../operations/customers.md#update-customer) one. In order to retrieve a list of all customer profiles created within a certain interval, use the [Get all customers](../operations/customers.md#get-all-customers) operation.



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
- Managing [companions](https://help.mews.com/en/articles/4397097-add-a-companion-to-the-reservation) in a reservation
