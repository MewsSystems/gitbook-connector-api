# Upsell

An Upsell integration pulls information about customers, reservations, products and services, for specified time intervals, in order to automate upselling of personalised room upgrades, add-ons and experiences to guests.

## Data pull

Each Mews property creates a unique set of services and related products based on what they offer to their guests. Upsell integrations pull the relevant product information (e.g. name, unique identifier, price) and store it in their system for future use. A list of all the services a property offers can be requested using [Get all services](../operations/services.md#get-all-services). The response contains a unique identifier which can then be used to pull all related products using [Get all products](../operations/products.md#get-all-products). 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the list of services offered | [Get all services](../operations/services.md#get-all-services) |
| How to get the list of products linked to services | [Get all products](../operations/products.md#get-all-products) |

If the integration is offering room upgrades to guests, it is important to take availability of the resources into account. After mapping the configuration of the property in your system, use [Get service availability](../operations/services.md#get-service-availability) to fetch resource availability for each resource category.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get room or resource availability | [Get service availability](../operations/services.md#get-service-availability) |

> **Help Guides**:
> * [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US)
> * [Understanding services](https://help.mews.com/s/article/understanding-services?language=en_US)
> * [Creating products](https://help.mews.com/s/article/create-or-delete-a-product?language=en_US)

## Adding items
Once all of the products, services and related information are correctly stored in the Upsell system, the next step is the posting of a selected product into Mews. How this product should be posted into Mews depends on whether it exists as a product in Mews and which type of service it belongs to.

### Adding product items such as breakfast or a room upgrade

If the product is related to a Stay/Accommodation service, e.g. breakfast, an extra bed or a room upgrade, then it is useful to associate it with a specific reservation. This will lead to the correct overall count of products to be posted based on the total of nights in the reservation. First, the integration should retrieve the specific reservation using [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06). The unique identifiers of the product and the reservation are then used in [Add reservation product](../operations/reservations.md#add-reservation-product) to add the required product order to the reservation. 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get a specific reservation | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) |
| How to add a product order to a reservation | [Add reservation product](../operations/reservations.md#add-reservation-product) |

### Adding product items such as champagne or a massage

If the product is created under a non-Stay/Accommodation service, it will only be posted once and does not have to be attached to a reservation. Examples include a bottle of champagne, a one-hour massage, or a pool bar cocktail. Unlike with a traditional PMS, where charges are posted to a room, in Mews all charges are posted directly to the guest profile. All guests, both active and checked out, can be retrieved using [Get all customers](../operations/customers.md#get-all-customers). This operation offers numerous filters, including guest email and guest names. To retrieve only guests still checked in at the property, use [Search customers](../operations/customers.md#search-customers). The unique identifier of the chosen guest or customer is then used to add the product to the correct profile using [Add order](../operations/orders.md#add-order). If the product being posted already exists in Mews, then use [Product order parameters](../operations/orders.md#product-order-parameters). If the product does not exist in Mews then use [Item parameters](../operations/orders.md#item-parameters).

> ### Linking orders to reservations
> When using [Add order](../operations/orders.md#add-order), specify parameter `linkedReservationId` in order to link the order to a guest reservation.
> This will greatly assist the property when using billing automation.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get checked in and checked out guests | [Get all customers](../operations/customers.md#get-all-customers) |
| How to get only checked in guests | [Search customers](../operations/customers.md#search-customers) |
| How to add a product order to a guest profile | [Add order](../operations/orders.md#add-order) |
| How to link an order to a reservation | [Add order](../operations/orders.md#add-order) (use `linkedReservationId`) |

### Accounting categories and staff reminders

To ensure correct reporting, all revenue items posted into Mews must be associated with their correct accounting category by sending the unique identifier in the [Item parameters](../operations/orders.md#item-parameters) of the [Add order](../operations/orders.md#add-order) request. Information about all the categories configured at each property can be obtained with [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories). If a product being added to a reservation requires further action from hotel staff, create reminders and assign responsiblities using [Add task](../operations/tasks.md#add-task) to ensure no aspect of the guest experience is forgotten.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the list of accounting categories | [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) |
| How to create staff reminders | [Add task](../operations/tasks.md#add-task) |

> **Help Guides**:
> * [Creating an accounting category](https://help.mews.com/s/article/create-an-accounting-category?language=en_US)
> * [how tasks are created and managed](https://help.mews.com/s/article/create-and-manage-tasks?language=en_US)

## Testing your Upsell integration

Ensure you follow our general [Usage guidelines](../guidelines/README.md) for testing integrations. In addition to this, and specific to Upsell integrations, check whether you are correctly managing the Stay product postings by reviewing the _Items_ tab of the reservation you have posted it to, or review the _Product_ column of the [Reservation report](https://help.mews.com/s/article/reservation-report?language=en_US) which has `Include products` selected in the _Options_ section. To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the [Accounting Report](https://help.mews.com/s/article/accounting-report?language=en_US). If done correctly, the product you've posted will be listed under the relevant accounting category.  
