## Event management

An event management integration pushes contracted revenue to the relevant guest’s profile in Mews, pulls live information about rates and availability and allows for the group reservations already pushed into Mews to be managed from the event management software. The sections below contain guidelines regarding the relevant endpoints used.

### Managing customers

In Mews, billing is managed at the customer’s profile level instead of being charged to a specific room. In order to be able to send the charges to the correct customer, they must have a profile in Mews. A new customer can be added using the [Add customer](../operations/customers.md#add-customer) operation and any information can be updated using the [Update customer](../operations/customers.md#update-customer) one. In order to retrieve a list of all customer profiles created within a certain interval, use the [Get all customers](../operations/customers.md#get-all-customers) operation.

### New group reservation 

When a new reservation is created within the event management software, it needs to be synced with Mews. This can be pushed into Mews using the [Add reservations](../operations/reservations.md#add-reservations) operation. In order to ensure that the property can further manage individual companions to the group reservation via the integration, use the [Add reservation companion](../operations/reservations.md#add-reservation-companion) or [Delete reservation companion](../operations/reservations.md#delete-reservation-companion). 

### Adding items

One of the expected functionalities of an event management integration is to push items into Mews to the correct customer’s profile. This can be done using the operation [Add order](../operations/services.md#add-order). If the product being posted already exists in Mews, then use [Product order parameters](../operations/services.md#product-order-parameters). If the product does not exist in Mews then use the [Item parameters](../operations/services.md#item-parameters).

To ensure correct reporting, all revenue items posted into Mews using Item parameters must be associated with their correct accounting category by sending the unique identifier of the accounting category in the request. Information about all the categories configured at each property are requested using [Get all accounting categories](../operations/finance.md#get-all-accounting-categories). You can learn more about how accounting categories are created in [this article](https://intercom.help/mews-systems/en/articles/4244319-create-an-accounting-category).

### Rates and availability

To pull data about rates from Mews into the event management integration use [Get all rates](../operations/services.md#get-all-rates) and  [Get rate pricing](../operations/services.md#get-all-rates) as well as [Get service availability](../operations/services.md#get-service-availability). It is also important that integration partners understand how rates are [created](https://help.mews.com/en/articles/4244388-create-a-rate), [updated](https://help.mews.com/en/articles/4244389-update-or-remove-a-rate) and how [rate prices are managed in Mews](https://intercom.help/mews-systems/en/articles/4245964-rate-management).

### Testing your integration

Once your integration is completed, all endpoints should be tested prior to initiating the [certification process](https://intercom.help/mews-systems/en/articles/4497819-connector-api-certification-what-to-expect) with the Mews Marketplace team. Testing your solution is done directly in the Connector API demo. You should use the credentials found in the [Authentication](../guidelines.md#authentication) section to sign in as an end-user. This allows you to fully understand how both systems will be used by the property and gives you additional information to ensure you provide a seamless and efficient onboarding experience for our hoteliers.

If you'd like to double-check that you are correctly creating all the reservations you want to retrieve, you can do so by [searching for the reservation, or related customer profile](https://intercom.help/mews-systems/en/articles/4258665-search-in-commander) or using the [Mews Reservation Report](https://help.mews.com/en/articles/4245884-reservation-report). 
To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the Mews [Accounting Report](https://intercom.help/mews-systems/en/articles/4245918-accounting-report). If done correctly, the product you've posted will appear under the relevant accounting category.  
