## Reputation management

Typically, reputation management systems require reservation information, customer profile information, be available to update customer profiles.

### Retrieving Reservations

After a customer has checked out from a reservation, reputation management systems often send a survey through to a customer's email. The integration partner can request all checked-out reservations for a given period using [Get all reservations](../operations/reservations.md#get-all-reservations) with State set to `Processed`. For optimal API usage, ensure cascading time periods with short time frames (e.g. request every 4 hours for the previous 4 hour period). To receive real-time notifications that a reservation has been checked-out, partners should configure a [reservation event websocket](../websockets.md#reservation-event).

### Updating Customer Profile

Upon a Reputation management system associating feedback with a customer the [Update customer](../operations/customers.md#update-customer) operation should be added to the customer profile in Mews. The customer classification type `Previous complaint` is one which should be used when negative feedback has been received. Further to this, keywords from the complaint and a url to the survey or Tripadvisor post can be added to the customer `notes`.

### Testing your integration

Ensure you follow our general [guidelines](../guidelines) for testing integrations.
