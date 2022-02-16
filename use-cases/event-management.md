## Event management

An event management integration can pull live information about rates and availability, create availability blocks (also known as room blocks or group blocks), affect property inventory, push contracted revenue to the relevant guest’s profile in Mews, and allow users to manage the group reservations (already pushed into Mews) from the event management software. The sections below contain guidelines regarding the relevant endpoints used.

### Enterprise information

To automate the onboarding of a new property as much as possible, use any combination of [Configuration](../themes/README.md#configuration) operations and [Enterprise](../themes/README.md#enterprises) operations to pull information about a property, including but not limited to resources configuration, applicable tax rates, services and products, company profiles.

### Rates and availability

Use [Get all rates](../operations/rates.md#get-all-rates) and  [Get rate pricing](../operations/rates.md#get-all-rates) to pull data about rates offered in the enterprise. Use [Get service availability](../operations/services.md#get-service-availability) to pull category availability and related adjustments from Mews into the event management integration.

*Note that the `Availabilities` array refers to the inventory that is available to the general public, and therefore does not include inventory that has been reserved for the availability block. The array of adjustments displayed are those not associated with an availability block.*

### Managing billing

In Mews, billing is managed at the customer profile level, instead of being charged to a specific room or reservation. If applicable, create a new company via [Add company](../operations/companies.md#add-company) or find an existing company via [Get all companies](../operations/companies.md#get-all-companies) and attach the company to both the reservation(s) and the customer bill(s) for more accurate billing and reporting. 

Use a [Paymaster](../operations/customers.md#customer-classification) customer profile to centrally manage charges and billing related to the company/event. This also allows any additional orders (e.g. F&B spending) to be added via the POS system, if needed. If the relevant customer profile does not already exist in Mews, first call [Add customer](../operations/customers.md#add-customer) to create a profile. 

***Mews tip:*** Make sure that only active [Paymaster](../operations/customers.md#customer-classification) profiles exist in Mews.

In order to keep data clean in the Mews PMS, only mark a profile with the [Paymaster](../operations/customers.md#customer-classification) classification when the event management system starts posting charges to the customer profile. Use the [Update customer](../operations/customers.md#update-customer) operation to mark the profile as a [Paymaster](../operations/customers.md#customer-classification) account. 

Similar to the concept of *fake rooms* (in traditional property management systems) that are deleted at the end of an event, remove the [Paymaster](../operations/customers.md#customer-classification) classification from the customer profile once the relevant event has concluded (e.g. event ended, all billing settled, and/or event cancelled). Use the [Update customer](../operations/customers.md#update-customer) operation to remove the [Paymaster](../operations/customers.md#customer-classification) classification. Refer to the [Update values](../guidelines/serialization.md#update-values) section on how to change or remove a value. 

You can also use the [Update customer](../operations/customers.md#update-customer) to amend other customer profile details. Should you need to retrieve a list of all customer profiles created within a certain interval, use the [Get all customers](../operations/customers.md#get-all-customers) operation with the relevant time filters.

#### Adding revenue and payment items

One of the expected functionalities of an event management integration is being able to push items to the correct customer profile in Mews. This can be done using the operation [Add order](../operations/orders.md#add-order). If the product item that is being posted already exists in Mews, use [Product order parameters](../operations/orders.md#product-order-parameters). If the product does not exist in Mews then use the [Item parameters](../operations/orders.md#item-parameters) to post custom items. 

Note that in order to use [Product order parameters](../operations/services.md#product-order-parameters), the property must first set up products under a [Bookable](../operations/services.md#service-data) service. Then, you will need to retrieve the products by calling [Get all products](../operations/services.md#get-all-products).

To ensure correct reporting, all revenue items posted into Mews using [Item parameters](../operations/orders.md#item-parameters) must be associated with their correct accounting category by sending the unique identifier of the accounting category in the request. Information about all the categories configured at each property can be retrieved using [Get all accounting categories](../operations/finance.md#get-all-accounting-categories). 

In case payment was taken outside of Mews or directly on the event management platform, use any of the methods described in the [Finance](../operations/finance.md) section to record the payment items in Mews, so that all accounting items are centralised in Mews for further reporting and/or exporting to the property's accounting system. 

#### Further automation possibilities

Call [Get customer open items](../operations/customers.md#get-customers-open-items) to review the revenue and payment items that have already been posted to a customer profile. You can then further automate the management of billing/invoicing by creating a specific bill via [Add bill](../operations/finance.md#add-bill) for a certain group of revenue and payment items. Use [Update accounting items](../operations/finance.md#update-accounting-items) to redirect said items to the relevant bill and then use [Close bill](../operations/finance.md#close-bill) to finalise the financial document. 

*Note that currently, attaching a company to a bill must be done manually in Mews PMS. If being able to do the same via API is important to your solution, please consider adding your vote to [this feature request](https://feedback.mews.com/forums/932131-mews-open-api/suggestions/43041963-attach-company-id-to-bills)*

### Managing group reservations with availability blocks

Availability blocks are used for reserving a certain portion of category availability in Mews for a specific group of reservations, as well as the subsequent management of reservations that are created in Mews for such groups. 

#### Creating availability blocks

First call [Add availability blocks](../operations/services.md#add-availability-blocks) to add a new block object with the relevant parameters. Note the `AvailabilityBlockId`, which is used as the unique identifier throughout Mews. There is no expectation to create availability blocks and allocate inventory in Mews straight away for events in the early stages (e.g. tentative) of a sales cycle. It is up to the integration partner to decide at which stage of an event order to create an availability block and start allocating inventory in Mews.

#### Allocating inventory to the availability block

Now that you have created an availability block object, you can allocate capacity for different dates and resource categories (i.e. create room night blocks). Call [Update service availability](../operations/services.md#update-service-availability) to push availability adjustments into Mews. Send a *negative* value for the `UnitCountAdjustment` parameter and include the aforementioned `AvailabilityBlockId` in the [availability update](../operations/services.md#availability-update) parameter to reserve units of availability for the availability block you have just created. The availability adjustments must fall within the `StartUtc` and `EndUtc` of the availability block.

- *Example: If you wish to reserve 10 units of availability for certain date(s), send -10 in the `UnitCountAdjustment` parameter.*

Should you need to increase or decrease the inventory for your availability block, send the new total to override existing adjustments. 

- *Example: Original adjustment was -5 to reserve 5 units of availability for 1st of May. User now wishes to increase inventory for the availability block for that date by 2 (to 7 total). In this case, send adjustment -7 to override the original adjustment.*

It is possible to allow overbooking by allocating more inventory (e.g. adjustment of -10) than there are number of resources physically available (e.g. 9 units) at the property.


#### Adding reservations to an availability block

When a new reservation is created within the event management software, it needs to be synced with Mews, and vice versa. Reservations can be pushed into Mews using the [Add reservations](../operations/reservations.md#add-reservations) operation. To ensure that the reservations consume availability reserved for the availability block, instead of from the property's overall availability, include `AvailabilityBlockId` in the [reservations parameters](../operations/reservations.md#reservation-parameters) when you [add reservations](../operations/reservations.md#add-reservations) into an existing group block.

It is also possible to place an existing reservation in Mews into an availability block with the [Update reservations](../operations/reservations.md#update-reservations) operation by including `AvailabilityBlockId` in the [reservations parameters](../operations/reservations.md#reservation-parameters).

If applicable, you can attach a company to a reservation when calling [Add reservations](../operations/reservations.md#add-reservations) or [Update reservations](../operations/reservations.md#update-reservations).

***Note:*** 

It is currently not possible to exceed the availability block capacity (the inventory allocated to an availability block through the [Update service availability](../operations/services.md#update-service-availability) operation. However, it is possible to add reservations with arrival or departure date times that extend beyond the [interval in a given availability block](../operations/availabilityblocks.md#availability-block-parameters). Should there be a need to accommodate more reservations in an availability block, you must first update the adjustments to increase the allocated inventory in that block.

#### Managing reservations and customers

To ensure that the property can further manage individual companions to the group reservation via the integration, use the [Add reservation companion](../operations/reservations.md#add-reservation-companion) or [Delete reservation companion](../operations/reservations.md#delete-reservation-companion) to assign guests to rooms.


#### Managing availability block inventory and pickup

Call [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) to retrieve information about existing availability blocks, as well as all associated reservations and availability adjustments. To avoid the need of regular polling, you can make use of [Webhooks for Reservation events](../webhooks/README.md#general-message) to automatically receive information of reservation creation and/or changes. Note the `AvailabilityBlockId` in the [`ServiceOrders`](../webhooks/README.md#entities) object to record pickup for the relevant availability block in your system and in Mews. When a reservation no longer belongs to the `AvailabilityBlock`, follow the format described in [Update reservation](../operations/reservations.md#update-reservations) to remove the `AvailabilityBlockId`.

When an availability block is no longer needed in Mews, remove it from Mews by calling [Delete availability blocks](../operations/availabilityblocks.md#delete-availability-blocks). The availability adjustments associated with the availability block will automatically be removed. Note that is it not possible to delete an availability block containing active reservations.

### Testing your integration

Ensure you follow our general [guidelines](../guidelines) for testing integrations. In addition to this, and specific to Event Management integrations:

If you'd like to double-check that you are correctly creating all the reservations you want to retrieve, you can do so by [searching for the reservation, or related customer profile](https://help.mews.com/s/article/search-in-mews-operations?language=en_US) or using the [Mews Reservation Report](https://help.mews.com/s/article/reservation-report?language=en_US).
To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the Mews [Accounting Report](https://help.mews.com/s/article/accounting-report?language=en_US). If done correctly, the product you've posted will appear under the relevant accounting category.  

### Additional Help for working with the demo environment

- [Availability blocks and reporting in Mews](https://help.mews.com/s/article/Availability-block-report?language=en_US)
- [How to create an accounting category](https://help.mews.com/s/article/create-an-accounting-category?language=en_US)
- [How to create rates](https://help.mews.com/s/article/create-a-rate?language=en_US)
- [How to update rates](https://help.mews.com/s/article/update-or-remove-a-rate?language=en_US)
- [How to manage rate prices](https://help.mews.com/s/article/rate-management?language=en_US) 
- [Managing companions in a reservation](https://help.mews.com/s/article/how-to-add-a-companion-to-a-reservation?language=en_US)
- [How to manage group billing](https://help.mews.com/s/article/group-billing-how-to-move-bill-items?language=en_US)
- [Manually add, move, or remove items from open bills](https://help.mews.com/s/article/new-billing-procedure-add-move-or-remove-items-from-open-bills?language=en_US) 
- [Finding bills and invoices assigned to a company](https://help.mews.com/s/article/how-to-find-bills-and-invoices-assigned-to-a-company?language=en_US)
- [Create a Paymaster account](https://help.mews.com/s/article/create-a-paymaster?language=en_US)
- [Create a company profile](https://help.mews.com/s/article/create-a-company-profile?language=en_US)
