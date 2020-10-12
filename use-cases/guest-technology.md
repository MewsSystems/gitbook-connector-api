## Guest technology

Guest Technology integrations such as a telephone system are used for staff to identify guests on telephones or TV's and to generate revenue by charging guests for outside phone calls.

### Setup

The integration should use [Get all services](operations/services.md#get-all-services) operation to retrieve all services the property has configured in Mews. Once all services are retrieved, the service which you would like all charges to be send under would be selected. Alternatively, a field where the `ServiceId` can be entered can be used.

The [Get all accounting categories](operations/finance.md#get-all-accounting-categories) operation should be used to retrieve all accounting categories has configured in Mews. This is important as a hotel may prefer to have charges for international phone calls reported with a different accounting category than domestic phone calls.

### Room Status

Guest Technology integrations are required to receive an update to a Reservation State in real time, this is why a Reservation Websocket should be used to avoid constantly polling for new commands.

After receiving a Websocket event, use [Get all reservations by ids](operations/reservations.md#get-all-reservations-by-ids) to retrieve the information about the reservation and customer if the websocket event fits your criteria.

Note: The customer classification, `Cashlist` is what customers are classified as if charges should not be sent to their bill. This is also commonly known as ‘No Post’.

### Charging checked in customers

Once the customer to be charged is identified, the items can be posted onto their bill using the [Add order](operations/services.md#add-order) operation.
