## Reputation management

Reputation management systems provide valuable insight to obtain an understanding of performance relating to operation and service strengths and weaknesses. This understanding is captured via post-stay surveys and by monitoring social channels such as Tripadvisor.

### Retrieving Reservations

After a customer has checked out from a reservation, reputation management systems often send through a survey through to a customers email. The integration should use the [Get all reservations by ids](../operations/reservations.md#get-all-reservations-by-ids) operation with a reservation state set to `Processed`.

### Updating Customer Profile

Upon a Reputation management system associating feedback with a customer the [Update customer](../operations/customers.md#update-customer) operation should be added to the customer profile in Mews. The customer classification type `Previous complaint` is one which should be used when negative feedback has been received. Further to this, keywords from the complaint and a url to the survey or Tripadvisor post can be added to the customer `notes`.

## Mobile keys

Mobile key solutions require a state of reservation in real time, a key should not be issued to a guest until they have been checked in Mews. To avoid polling for updated reservations, a Reservation Websocket should be used.

After receiving a websocket event, use [Get all reservations by ids](../operations/reservations.md#get-all-reservations-by-ids) to retrieve information about the reservation and customer if the websocket event fits your criteria. With this response, you will have information to issue the mobile key to the customer using their contact information in Mews.
