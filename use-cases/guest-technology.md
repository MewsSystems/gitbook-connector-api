## Guest technology

Guest technology integrations such as a telephone system are used for staff to identify guests on telephones or TV's and to generate revenue by charging guests for outside phone calls.

### Setup

The integration should use the [Get all services](../operations/services.md#get-all-services) operation to retrieve all services the property has configured in Mews. Once all services are retrieved, the service which you would like all charges to be sent under would be selected. Alternatively, a field where the `ServiceId` can be entered can be used. To understand how our hoteliers manage these in Mews, please read these helpful articles about [services](https://intercom.help/mews-systems/en/articles/4244364-understanding-services) and [products](https://intercom.help/mews-systems/en/articles/4244370-create-or-delete-a-product).

The [Get all accounting categories](../operations/finance.md#get-all-accounting-categories) operation should be used to retrieve all accounting categories the property has configured in Mews. This is important as a hotel may prefer to have charges for international phone calls reported with a different accounting category than domestic phone calls. You can learn more about how accounting categories are created in [this article](https://intercom.help/mews-systems/en/articles/4244319-create-an-accounting-category).

### Room Status

Guest technology integrations are required to receive an update to a [reservation state](../operations/reservations.md#reservation-state) in real time, this is why integration partners should configure a [Reservation Websocket](../websockets.md#reservation-event) instead of constantly polling for new states.

If the websocket event fits your criteria, after receiving the event, use the ReservationId it contains in the [Get all reservations](../operations/reservations.md#get-all-reservations) request to retrieve all information about the reservation and customer.

Note: The customer classification, `Cashlist` is what customers are classified as if charges should not be sent to their bill. This is also commonly known as ‘No Post’.

### Charging checked in customers

Once the unique identifier of the customer to be charged is obtained, the items can be posted onto their billing tab using the [Add order](../operations/services.md#add-order) operation. If the product being posted already exists in Mews, then use [Product order parameters](../operations/services.md#product-order-parameters). If the product does not exist in Mews then use the [Item parameters](../operations/services.md#item-parameters). 

### Testing your integration

Once your integration is completed, all endpoints should be tested prior to initiating the [certification process](https://intercom.help/mews-systems/en/articles/4497819-connector-api-certification-what-to-expect) with the Mews Marketplace team. Testing your solution is done directly in the Connector API demo. You should use the credentials found in the [Authentication](../guidelines.md#authentication) section to sign in as an end-user. This allows you to fully understand how both systems will be used by the property and gives you additional information to ensure you provide a seamless and efficient onboarding experience for our hoteliers.

To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the Mews [Accounting Report](https://intercom.help/mews-systems/en/articles/4245918-accounting-report). If done correctly, the product you've posted will appear under the relevant accounting category in the Revenue section of the report.
