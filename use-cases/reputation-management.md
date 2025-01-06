# Reputation management

Reputation management systems typically require reservation information, customer profile information, and the ability to update customer profiles.

## Retrieving reservations

After a customer has checked out from a reservation, Reputation management systems often send a survey through to a customer's email. The integration partner can request all checked-out reservations for a given period using [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) with [reservation state](../operations/reservations.md#reservation-state) set to `Processed`. For optimal API usage, ensure cascading time periods with short time frames, e.g. request every 4 hours for the previous 4 hour period. To receive notifications that a reservation has been checked-out, you should use [General Webhooks](../events/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../events/websockets.md) \(`Reservation` event\).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get checked-out reservations | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) |
| How to listen for changes to reservations | [General Webhooks](../events/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../events/websockets.md) \(`Reservation` event\) |

## Updating the customer profile

When a Reputation management system links customer feedback to a customer, use [Update customer](../operations/customers.md#update-customer) to update the customer profile in Mews.
The [customer classification](../operations/customers.md#customer-classification) `PreviousComplaint` should be used when negative feedback has been received.
Further to this, keywords from the complaint and a URL to the survey or Tripadvisor post can be added to the customer `Notes` field.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to update the customer profile | [Update customer](../operations/customers.md#update-customer) |

## Testing your integration

Please ensure you follow our general [Usage guidelines](../guidelines/README.md) for testing integrations.
