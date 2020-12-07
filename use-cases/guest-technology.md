## Guest technology

Guest technology integrations such as a telephone system are used for staff to identify guests on telephones or TV's and to generate revenue by charging guests for outside phone calls.

### Setup

The integration should use the [Get all services](../operations/services.md#get-all-services) operation to retrieve all services the property has configured in Mews. Once all services are retrieved, the service which you would like all charges to be sent under would be selected. Alternatively, a field where the `ServiceId` can be entered can be used.

The [Get all accounting categories](../operations/finance.md#get-all-accounting-categories) operation should be used to retrieve all accounting categories the property has configured in Mews. This is important as a hotel may prefer to have charges for international phone calls reported with a different accounting category than domestic phone calls.

### Room Status

Guest technology integrations are required to receive an update to a [reservation state](../operations/reservations.md#reservation-state) in real time, this is why integration partners should configure a [Reservation Websocket](../websockets.md#reservation-event) instead of constantly polling for new states.

If the websocket event fits your criteria, after receiving the event, use the ReservationId it contains in the [Get all reservations](../operations/reservations.md#get-all-reservations) request to retrieve all information about the reservation and customer.

*Note: The customer classification, `Cashlist` is what customers are classified as if charges should not be sent to their bill. This is also commonly known as ‘No Post’.*

### Charging checked in customers

Once the unique identifier of the customer to be charged is obtained, the items can be posted onto their billing tab using the [Add order](../operations/services.md#add-order) operation. If the product being posted already exists in Mews, then use [Product order parameters](../operations/services.md#product-order-parameters). If the product does not exist in Mews then use the [Item parameters](../operations/services.md#item-parameters). 

### Testing your integration

Ensure you follow our general [guidelines](../guidelines.md) for testing integrations.

To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the Mews [Accounting Report](https://intercom.help/mews-systems/en/articles/4245918-accounting-report). If done correctly, the product you've posted will appear under the relevant accounting category in the Revenue section of the report.

### Additional Help for working with the demo environment

- How to use [services](https://intercom.help/mews-systems/en/articles/4244364-understanding-services) 
- How to use [products](https://intercom.help/mews-systems/en/articles/4244370-create-or-delete-a-product)
- How [accounting categories are created](https://intercom.help/mews-systems/en/articles/4244319-create-an-accounting-category)

//////////////////////

Receiving/listening to events about new check-in/outs:

You can use the WebSockets functionality. Linking a Mobile key use case document (not yet published) - which also utilises websockets to detect reservation events in real time.
https://mewssystems-my.sharepoint.com/:w:/g/personal/sylvia_tang_mews_com/EYjI-0sLUnRTBG0kI-DCcDkBSndpDBm9v0XVUmrw_mO49w?e=aWAIsu  

Websockets in API documentation: https://mews-systems.gitbook.io/connector-api/websockets

As you may have seen in our Guidelines section, the Client Token will be unique to the integration, and the Access Token is unique to the property. Therefore, the recommended set up is to have a separate instance of a WebSocket client per property (pair of Client & Access Token. 

For processing check-in and check-outs, and the requirement of customer detail such as Phone number:
The reservations operations and/or the customer operations might be of interest. The specific workflows offered in the Mobile key use case linked above might have some useful suggestions. 

Language code
can be retrieved as part of the customer profile -  with the customers/getAll or customers/search endpoint 

Amount in PLN
Could you share more information/context around this? What is the desired result?
If the purpose is to see current customer billing (folio) balance - the endpoint customers/getOpenItems might be of use:
https://mews-systems.gitbook.io/connector-api/operations/customers#get-customers-open-items

Call Detail Record 
There is also other issues
How you want to get data CDRs (Call Detail Record) from our PBX?
It can be required if customer want to get invoice. 
For getting CDRs from the PBX to Mews - orders/add would work well. The property will need to set up the Service (e.g. PBX service), and the integraiton would send the cost of the call + the details of the call (e.g. country code, phone number, call duration, etc), to the customer's billing to be settled later. 
https://mews-systems.gitbook.io/connector-api/operations/services#add-order


How you want to add extra balance to account if customer want to talk more and his account balance has been exhausted?
For adding extra balance to the account, depending on what sort of payment options a customer you allow the customer to use for adding balance, we do have some different options on adding payment items to a customer billing:
https://mews-systems.gitbook.io/connector-api/operations/finance



