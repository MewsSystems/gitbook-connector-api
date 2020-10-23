## Reputation management

Typically, reputation management systems require reservation information, customer profile information, be available to update customer profiles.

### Retrieving Reservations

After a customer has checked out from a reservation, reputation management systems often send through a survey through to a customers email. The integration should use the [Get all reservations by ids](../operations/reservations.md#get-all-reservations-by-ids) operation with a reservation state set to `Processed`.

### Updating Customer Profile

Upon a Reputation management system associating feedback with a customer the [Update customer](../operations/customers.md#update-customer) operation should be added to the customer profile in Mews. The customer classification type `Previous complaint` is one which should be used when negative feedback has been received. Further to this, keywords from the complaint and a url to the survey or Tripadvisor post can be added to the customer `notes`.
