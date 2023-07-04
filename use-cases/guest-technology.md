## Guest technology

Guest technology integrations, such as telephone systems or entertainment systems, are used to identify guests on telephones or TVs and to generate revenue by charging guests for outside phone calls.

### Setup

The integration should use the [Get all services](../operations/services.md#get-all-services) operation to retrieve all services the property has configured in Mews.
Once all services are retrieved, the service which you would like all charges to be sent to can be selected. Alternatively, a field where the `ServiceId` can be entered can be used.

The [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) operation should be used to retrieve all accounting categories the property has configured in Mews. This is important as a hotel may prefer to have charges for international phone calls reported with a different accounting category than domestic phone calls.

### Room Status

Guest technology integrations require information on changes to [reservation state](../operations/reservations.md#reservation-state).
Rather than polling the Mews API for state changes, it is better to subscribe to notification events using [Webhooks](../webhooks/README.md) or [WebSockets](../websockets/README.md).
Both methods support changes to reservations. Don't know which one to use? See [Ways to communicate](../guidelines/communicate.md).
Once a reservation update event is received, use the reservation ID in a [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) request to retrieve all information about the reservation and customer.

> Note: The customer classification `Cashlist` is used when charges cannot be sent to the customer bill. This is commonly known as ‘No Post’.

### Charging checked-in customers

Once the unique identifier of the customer to be charged is obtained, the items can be posted onto their billing tab using the [Add order](../operations/orders.md#add-order) operation.
If the product being posted already exists in Mews, then use [Product order parameters](../operations/orders.md#product-order-parameters). If the product does *not* exist in Mews then use the [Item parameters](../operations/orders.md#item-parameters). 

### Testing your integration

Please ensure you follow our general [Guidelines](../guidelines/README.md) for testing integrations.

To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the Mews [Accounting Report](https://help.mews.com/s/article/accounting-report?language=en_US). If done correctly, the product you've posted will appear under the relevant accounting category in the Revenue section of the report.

### Additional Help for working with the demo environment

- [How to use services](https://help.mews.com/s/article/understanding-services?language=en_US)
- [How to use products](https://help.mews.com/s/article/create-or-delete-a-product?language=en_US)
- [How to create an accounting category](https://help.mews.com/s/article/create-an-accounting-category?language=en_US)
