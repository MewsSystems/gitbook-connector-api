## Upselling

An upselling integration pulls information about customers, reservations, products and services for specified intervals in order to automate upselling of personalised room upgrades, add-ons and experiences to the guests.

### Data pull

Each Mews property creates a unique set of services and related products based on what they offer to their guests. Upselling integrations pull the relevant product information (e.g. name, unique identifier, price) and store it in their system for future use. A list of all the services a property offers can be requested using [Get all services](../operations/services.md#get-all-services). The response contains a unique identifier which can then be used to pull all related products using [Get all products](../operations/services.md#get-all-products). 

If the integration is offering room upgrades to guests, it is important to take availability of spaces into account. After mapping the configuration of the property in your system, space (room) availability is returned per space category (room type) in the response to [Get service availability](../operations/services.md#get-service-availability).

### Adding items
Once all of the products, services and related information are correctly stored in the upselling system, the next step is the posting of a selected product into Mews. How this product should be posted into Mews depends on whether it exists as a product in Mews and which type of service it belongs to.

If the product is related to a Stay/Accommodation service (e.g. breakfast, extra bed, room upgrade), then it is useful to associate it with a specific reservation. This will lead to the correct overall count of products to be posted based on the total of nights in the reservation. First, the integration should retrieve the specific reservation using [Get all reservations](../operations/reservations.md#get-all-reservations). The unique identifiers of the product and the reservation are then used in the [Add reservation product](../operations/reservations.md#add-reservation-product) request. 

If the product is created under a non-Stay/Accommodation service it will only be posted once and does not have to be attached to a reservation (e.g. a bottle of champagne, 1-hr massage, pool bar cocktail). In Mews, unlike with a traditional PMS where charges are posted to a room, all charges are posted directly to the guest profile. All guests, both active and checked out, can be retrieved using [Get all customers](../operations/customers.md#get-all-customers) which offers numerous filters by email, names and more. To retrieve only the customers still checked in at the property, use the [Search customers](../operations/customers.md#search-customers) request. The unique identifier of the chosen customer is then used to add the product to the correct guest profile using [Add order](../operations/services.md#add-order).

If the product being posted already exists in Mews, then use [Product order parameters](../operations/services.md#product-order-parameters). If the product does not exist in Mews then use the [Item parameters](../operations/services.md#item-parameters).

To ensure correct reporting, all revenue items posted into Mews must be associated with their correct accounting category by sending the unique identifier in the Item parameters of the Add order request. Information about all the categories configured at each property are requested using [Get all accounting categories](../operations/finance.md#get-all-accounting-categories).
