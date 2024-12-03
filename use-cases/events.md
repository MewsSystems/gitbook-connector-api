# Events

Event management systems streamline the planning, organization and execution of events such as weddings or conferences. An Events integration can pull live information about rates and availability, create availability blocks (also known as room blocks or group blocks), affect property inventory, push contracted revenue to the relevant guest’s profile in Mews, and allow users to manage the group reservations already pushed into Mews.

## Enterprise information

To automate the onboarding of a new property as much as possible, use a combination of [Configuration](../operations/README.md#configuration) operations, [Enterprises](../operations/README.md#enterprises) operations and [Services](../operations/README.md#services) operations to pull information about a property or enterprise, including, but not limited to, resources configuration (including rooms and other spaces), applicable tax rates, services and products, and company profiles.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get property configuration | [Get configuration](../operations/configuration.md#get-configuration) |
| How to get rooms and resources configuration | [Get all resources](../operations/resources.md#get-all-resources) |
| How to get applicable tax rates | [Get all tax environments](../operations/taxenvironments.md#get-all-tax-environments), [Get all taxations](../operations/taxations.md#get-all-taxations) |
| How to get the list of services offered | [Get all services](../operations/services.md#get-all-services) |
| How to get the list of products linked to services | [Get all products](../operations/products.md#get-all-products) |
| How to get company profiles | [Get all companies](../operations/companies.md#get-all-companies) |
| How to get the list of supported countries | [Get all countries](../operations/countries.md#get-all-countries) |
| How to get the list of supported currencies | [Get all currencies](../operations/currencies.md#get-all-currencies) |
| How to get the list of supported languages | [Get all languages](../operations/languages.md#get-all-languages) |

## Rates and availability

Use [Get all rates](../operations/rates.md#get-all-rates) and  [Get rate pricing](../operations/rates.md#get-rate-pricing) to pull data about rates offered in the property or enterprise. Use [Get service availability](../operations/services.md#get-service-availability) to pull resource category availability and related adjustments from Mews.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get rates | [Get all rates](../operations/rates.md#get-all-rates) |
| How to get the price for a given rate | [Get rate pricing](../operations/rates.md#get-rate-pricing) |
| How to get availability | [Get service availability](../operations/services.md#get-service-availability)  |

> **Availability blocks:** The `Availabilities` array returned by [Get service availability](../operations/services.md#get-service-availability) refers to inventory that is available to the general public and therefore does not include inventory that has been reserved for Availability Blocks. Likewise, the array of adjustments are those *not* associated with Availability Blocks.

## Managing billing

In Mews, billing is managed at the customer/guest profile level, instead of being charged to a specific room or reservation. If applicable, create a new company via [Add company](../operations/companies.md#add-company) or find an existing company via [Get all companies](../operations/companies.md#get-all-companies) and attach the company to both the reservation(s) and the customer bill(s) for more accurate billing and reporting. 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to add a new company | [Add company](../operations/companies.md#add-company) |
| How to find an existing company | [Get all companies](../operations/companies.md#get-all-companies) |

### Paymaster accounts

Use a [Paymaster](../operations/customers.md#customer-classification) customer profile to centrally manage charges and billing related to the company/event. This also allows any additional orders (e.g. F&B spending) to be added via the POS system, if needed. If the relevant customer profile does not already exist in Mews, first use [Add customer](../operations/customers.md#add-customer) to create a profile. 

> **Mews tip:** Make sure that only active [Paymaster](../operations/customers.md#customer-classification) profiles exist in Mews.

In order to keep data clean in the Mews system, only mark a profile with the [Paymaster](../operations/customers.md#customer-classification) classification when the event management system starts posting charges to the customer profile. Use [Update customer](../operations/customers.md#update-customer) to mark the profile as a [Paymaster](../operations/customers.md#customer-classification) account. 
Similar to the concept of *fake rooms* in traditional Property Management Systems that are deleted at the end of an event, remove the [Paymaster](../operations/customers.md#customer-classification) classification from the customer profile once the relevant event has concluded, e.g. event ended, all billing settled, and/or the event is canceled. Use the [Update customer](../operations/customers.md#update-customer) operation to remove the [Paymaster](../operations/customers.md#customer-classification) classification. Refer to the [Update values](../guidelines/serialization.md#update-values) section on how to change or remove a value.  You can also use [Update customer](../operations/customers.md#update-customer) to amend other customer profile details.

Should you need to retrieve a list of all customer profiles created within a certain interval, use the [Get all customers](../operations/customers.md#get-all-customers) operation with the relevant time filters.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to create a Paymaster profile | [Add customer](../operations/customers.md#add-customer) |
| How to update a profile to be a Paymaster | [Update customer](../operations/customers.md#update-customer) |
| How to remove the Paymaster classification | [Update customer](../operations/customers.md#update-customer) |
| How to get a list of profiles created over a period of time | [Get all customers](../operations/customers.md#get-all-customers) |

## Adding revenue and payment items

One of the expected functions of an Events integration is to push product order items to the correct customer profile in Mews. This can be done using the operation [Add order](../operations/orders.md#add-order). If the product item that is being posted already exists in Mews, use [Product order parameters](../operations/orders.md#product-order-parameters). If the product is a custom item that does not exist in Mews then use [Item parameters](../operations/orders.md#item-parameters). 
Note that in order to use [Product order parameters](../operations/orders.md#product-order-parameters), the property must first set up products under an Additional Service. Then, you will need to retrieve the products by calling [Get all products](../operations/products.md#get-all-products).
To ensure correct reporting, all revenue items posted into Mews using [Item parameters](../operations/orders.md#item-parameters) must be associated with their correct accounting category by sending the unique identifier of the accounting category in the request. Information about all the categories configured at each property can be retrieved using [Get all accounting categories](../operations/finance.md#get-all-accounting-categories). 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to add a product order item to a customer profile | [Add order](../operations/orders.md#add-order) |
| How to get the list of available products | [Get all products](../operations/products.md#get-all-products) |
| How to get accounting categories | [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) |

### Recording external payments

In case payment was taken outside of Mews, or directly in the event management system, use [Finance operations](../operations/README.md#finance) to record the payment items in Mews, so that all accounting items are centralised in Mews for further reporting and/or exporting to the property's accounting system. 

### Further automation possibilities

Call [Get customer open items](../operations/customers.md#get-customers-open-items) to review the revenue and payment items that have already been posted to a customer profile. You can then further automate the management of billing/invoicing by creating a specific bill using [Add bill](../operations/finance.md#add-bill) for a certain group of revenue and payment items. Use [Update accounting items](../operations/finance.md#update-accounting-items) to redirect these items to the relevant bill and then use [Close bill](../operations/finance.md#close-bill) to finalise the financial document. 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to review already posted items | [Get customer open items](../operations/customers.md#get-customers-open-items) |
| How to create a new bill | [Add bill](../operations/finance.md#add-bill) |
| How to add accounting items to a bill | [Update accounting items](../operations/finance.md#update-accounting-items) |
| How to close a bill against change | [Close bill](../operations/finance.md#close-bill) |

> **Attaching a company to a bill:** Currently, attaching a company to a bill must be done manually in __Mews Operations__. If being able to do this via the API is important to your solution, please consider adding your vote to [this feature request](https://feedback.mews.com/forums/932131-mews-open-api/suggestions/43041963-attach-company-id-to-bills).

## Managing group reservations with availability blocks

Availability blocks are used for reserving a certain portion of resource category availability in Mews for a specific group of reservations, as well as the subsequent management of reservations that are created in Mews for such groups. 

### Creating availability blocks

First call [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks) to add a new block with the relevant parameters. Note the returned availability block `Id`, which is used as the unique identifier in all interactions with Mews. There is no expectation to create availability blocks and allocate inventory in Mews straight away for events in the early, tentative, stages of a sales cycle. It is up to the integration partner to decide at which stage of an event order to create an availability block and start allocating inventory in Mews.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to create an availability block | [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks) |

### Allocating inventory to an availability block

Now that you have created an availability block, you can allocate capacity for different dates and resource categories, i.e. create room night blocks. Use [Update service availability](../operations/services.md#update-service-availability) to push availability adjustments into Mews. Send a *negative* value for the `UnitCountAdjustment` parameter and include the aforementioned `AvailabilityBlockId` in the [availability update](../operations/services.md#availability-update) parameter to reserve units of availability for the availability block you have just created. The availability adjustments must fall within the `StartUtc` and `EndUtc` of the availability block.

* _Example: If you wish to reserve 10 units of availability for certain dates, send -10 in the `UnitCountAdjustment` parameter._

* _Example: Original adjustment was -5 to reserve 5 units of availability for 1st of May. User now wishes to increase inventory for the availability block for that date by 2 (to 7 total). In this case, send adjustment -7 to override the original adjustment._

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to update or amend service availability | [Update service availability](../operations/services.md#update-service-availability) |

> **Overbooking:** Note it is possible to allow overbooking by allocating more inventory than there are resources physically available at the property, e.g. an adjustment of -10 when there are 9 units.

### Adding reservations to an availability block

When a new reservation is created within the event management system, it needs to be synced with Mews, and vice versa. Reservations can be pushed into Mews using the [Add reservations](../operations/reservations.md#add-reservations) operation. To ensure that the reservations consume availability reserved for the availability block, instead of from the property's overall availability, include `AvailabilityBlockId` in the [reservations parameters](../operations/reservations.md#reservation-parameters) when you add reservations into an existing group block.
It is also possible to place an existing reservation in Mews into an availability block with the [Update reservations](../operations/reservations.md#update-reservations) operation, by including `AvailabilityBlockId` in the [reservations parameters](../operations/reservations.md#reservation-parameters).
If applicable, you can attach a company to a reservation when calling [Add reservations](../operations/reservations.md#add-reservations) or [Update reservations](../operations/reservations.md#update-reservations).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to push a reservation to Mews | [Add reservations](../operations/reservations.md#add-reservations) |
| How to place an existing reservation into an availability block | [Update reservations](../operations/reservations.md#update-reservations) |

> **Availability block capacity:** Note that it is currently not possible to exceed the availability block capacity, i.e. the inventory allocated to an availability block through the [Update service availability](../operations/services.md#update-service-availability) operation. However, it is possible to add reservations with arrival or departure times that extend beyond the interval in a given availability block \(see [availability block parameters](../operations/availabilityblocks.md#availability-block-parameters)\). Should there be a need to accommodate more reservations in an availability block, you must first update the adjustments to increase the allocated inventory in that block.

### Managing reservations and guests

To ensure that the property can further manage individual guests linked to the group reservation, via the integration, use [Add reservation companion](../operations/reservations.md#add-reservation-companion) or [Delete reservation companion](../operations/reservations.md#delete-reservation-companion) to assign or unassign guests to rooms.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to add a guest to a reservation | [Add reservation companion](../operations/reservations.md#add-reservation-companion) |
| How to remove a guest from a reservation | [Delete reservation companion](../operations/reservations.md#delete-reservation-companion) |

> **Terminology:** Note that the API uses the term _customer_ rather than _guest_. The term _companion_ is used to indicate a guest profile linked to a reservation. For an explanation of all terms, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

### Managing availability block inventory and pickup

Call [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) to retrieve information about existing availability blocks, as well as all associated reservations and availability adjustments. To avoid the need of regular polling, you can make use of [Webhooks](../webhooks/README.md#general-message) for Service Order events to automatically receive information about reservation creation and reservation updates. Make a note of the `AvailabilityBlockId` in the reservation object to record pickup of the relevant availability block in your system and in Mews.

When a reservation no longer belongs to the availability block, follow the format described in [Update reservation](../operations/reservations.md#update-reservations) to remove the `AvailabilityBlockId`. When an availability block is no longer needed, remove it from Mews by calling [Delete availability blocks](../operations/availabilityblocks.md#delete-availability-blocks). The availability adjustments associated with the availability block will automatically be removed. Note that is it not possible to delete an availability block containing active reservations.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get existing availability blocks | [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) |
| How to listen for changes to reservations | [General Webhooks](../webhooks/wh-general.md) \(`ServiceOrderUpdated` event\) |
| How to delete an availability block | [Delete availability blocks](../operations/availabilityblocks.md#delete-availability-blocks) |
| How to remove a reservation from an availability block | [Update reservation](../operations/reservations.md#update-reservations) |

## Testing your integration

Ensure you follow our general [Usage guidelines](../guidelines/README.md) for testing integrations. If you'd like to double-check that you are correctly creating all the reservations you want to retrieve, you can do so by [searching for the reservation or related customer profile](https://help.mews.com/s/article/search-in-mews-operations?language=en_US), or using the [Reservation Report](https://help.mews.com/s/article/reservation-report?language=en_US). To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the [Accounting Report](https://help.mews.com/s/article/accounting-report?language=en_US). If done correctly, the product you've posted will appear under the relevant accounting category.  

## Additional help for working with the demo environment

> **Help Guides**:
> * [Availability blocks and reporting in Mews](https://help.mews.com/s/article/Availability-block-report?language=en_US)
> * [How to create an accounting category](https://help.mews.com/s/article/create-an-accounting-category?language=en_US)
> * [How to create rates](https://help.mews.com/s/article/create-a-rate?language=en_US)
> * [How to update rates](https://help.mews.com/s/article/update-or-remove-a-rate?language=en_US)
> * [How to manage rate prices](https://help.mews.com/s/article/rate-management?language=en_US) 
> * [Managing companions in a reservation](https://help.mews.com/s/article/how-to-add-a-companion-to-a-reservation?language=en_US)
> * [How to manage group billing](https://help.mews.com/s/article/group-billing-how-to-move-bill-items?language=en_US)
> * [Manually add, move, or remove items from open bills](https://help.mews.com/s/article/new-billing-procedure-add-move-or-remove-items-from-open-bills?language=en_US) 
> * [Finding bills and invoices assigned to a company](https://help.mews.com/s/article/how-to-find-bills-and-invoices-assigned-to-a-company?language=en_US)
> * [Create a Paymaster account](https://help.mews.com/s/article/create-a-paymaster?language=en_US)
> * [Create a company profile](https://help.mews.com/s/article/create-a-company-profile?language=en_US)
