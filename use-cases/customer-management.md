## Customer management

Customer management integrations pull live information about reservations, customers, products and services for specified intervals. These types of solutions allow properties to manage the entire customer journey, from automating targeted marketing and driving sales to guest communication and engagement.

### Retrieving new and modified reservations

While new profiles can be created in Mews without a reservaton, the communication with a customer typically begins the moment a new reservation is created in Mews. Integration partners can listen for newly-created reservations in real time using the websocket [Reservation event](../websockets.md#reservation-event). A new event occurs with every change to the [reservation state](../operations/reservations.md#reservation-state) meaning partners are informed of any change that should lead to communication from their side (e.g. sending a custom welcome message or a post-stay survey). This websocket event contains the unique identifier of the reservation which can then be used as the filter in the [Get all reservations](../operations/reservations.md#get-all-reservations) request to retrieve any required information about the customer and their stay. You are be able to trigger these events and test your websocket configuration by creating new reservations in Mews.

If a websocket cannot be configured, reservation information can be requested using [Get all reservations](../operations/reservations.md#get-all-reservations) with specified [Reservation states](../operations/reservations.md#reservation-state) and [Time filters](../operations/reservations.md#reservation-time-filter). For example, using the `Updated` time filter will return all reservations modified during the time interval specified in the request.

### Offering additional products or services

Each Mews property creates a unique set of services and related products which they can offer to their guests. For more information on how to retrieve relevant product information from Mews, search for customers and correctly post orders to their profile, please review the [Upselling](../use-cases.md#upselling) integration use case.

### Testing your integration

Ensure you follow our general [guidelines](../guidelines.md) for testing integrations. In addition to this, and specific to POS integrations:

### Additional Help for working with the demo environment

- How to [create a reservation](https://help.mews.com/en/articles/4245573-create-a-reservation) 
- How to [check in a reservation](https://help.mews.com/en/articles/4245570-check-in-a-reservation) 
