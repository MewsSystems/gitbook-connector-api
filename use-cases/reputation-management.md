## Reputation management

Typically, reputation management systems require reservation information, customer profile information, and the ability to update customer profiles.

### Retrieving Reservations

After a customer has checked out from a reservation, reputation management systems often send a survey through to a customer's email. The integration partner can request all checked-out reservations for a given period using [Get all reservations](../operations/reservations.md#get-all-reservations) with [reservation state](../operations/reservations.md#reservation-state) set to `Processed`. For optimal API usage, ensure cascading time periods with short time frames (e.g. request every 4 hours for the previous 4 hour period).
To receive notifications that a reservation has been checked-out, partners should use [General Webhooks](../webhooks/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../websockets/README.md) \(`Reservation` event\).

### Updating Customer Profile

When a Reputation management system links customer feedback to a customer, use [Update customer](../operations/customers.md#update-customer) to update the customer profile in Mews.
The [customer classification](../operations/customers.md#customer-classification) `Previous complaint` should be used when negative feedback has been received.
Further to this, keywords from the complaint and a URL to the survey or Tripadvisor post can be added to the customer `Notes` field.

### Testing your integration

Please ensure you follow our general [Guidelines](../guidelines/README.md) for testing integrations.
