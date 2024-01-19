# Customer management

Customer management integrations pull live information about reservations, customers, products and services for specified intervals. These types of solutions allow properties to manage the entire customer journey, from automating targeted marketing and driving sales to guest communication and engagement.

### Retrieving new and modified reservations

While new profiles can be created in Mews without a reservation, the communication with a customer typically begins the moment a new reservation is created in Mews.

Integration partners can listen for newly-created reservations using [General Webhooks](../webhooks/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../websockets/README.md) \(`Reservation` event\).
A new event occurs with every change to the reservation state, meaning partners are informed of any change that might lead to communication from their side, e.g. sending a custom welcome message or a post-stay survey.
The reservation events contain the unique identifiers for affected reservations, these can then be used as the filter in a [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) request to retrieve the required information about the customer and their stay.
You can test your Webhooks or WebSockets integration by creating new reservations in Mews, which will trigger these notification events.

If Webhooks or WebSockets cannot be configured, reservation information can instead be requested using [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) with specified [Reservation states](../operations/reservations.md#reservation-state) and [Reservation time filters](../operations/reservations.md#reservation-time-filter).
For example, using the `Updated` time filter will return all reservations modified during the time interval specified in the request.

### Offering additional products or services

Each Mews property creates a unique set of services and related products which they can offer to their guests. For more information on how to retrieve relevant product information from Mews, search for customers and correctly post orders to their profile, please review the [Upsell](upsell.md) integration use case.

### Testing your integration

Please ensure you follow our general [Guidelines](../guidelines/README.md) for testing integrations.

### Additional Help for working with the demo environment

- [How to create a reservation](https://help.mews.com/s/article/create-a-reservation?language=en_US)
- [How to check in a reservation](https://help.mews.com/s/article/check-in-a-reservation?language=en_US)
