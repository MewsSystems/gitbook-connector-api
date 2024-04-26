# Guest technology

Guest technology covers a range of use cases related to guest technology, especially in-room technology, such as telephones, TV and entertainment systems, room controls and internet access. A typical use case involves posting charges for in-room telephone usage.

## Setup

Firstly, use [Get all services](../operations/services.md#get-all-services) to retrieve all services the property has configured in Mews. Once all services are retrieved, you can select the service against which you would like charges to be posted. To retrieve the list of configured accounting categories or accounting codes, use [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories). This is important because a hotel may, for example, prefer to have charges for international phone calls reported with a different accounting category than for domestic phone calls.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the list of property services | [Get all services](../operations/services.md#get-all-services) |
| How to get the list of accounting categories | [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) |

## Checked-in status

Guest technology integrations typically require information on changes to [reservation state](../operations/reservations.md#reservation-state), especially when a reservation is checked-in and checked-out. Rather than polling the API for state changes, it is better to subscribe to notification events using [Webhooks](../webhooks/README.md) or [WebSockets](../websockets/README.md). Both methods support changes to reservations. Don't know which one to use? See [Ways to communicate](../guidelines/communicate.md). Once a reservation update event is received, use the reservation ID in a [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) request to retrieve information about the reservation and customer.

> **No Post:** The customer classification `Cashlist` is used when charges cannot be sent to the customer bill. This is commonly known as ‘No Post’.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to listen for changes to reservations | [General Webhooks](../webhooks/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../websockets/README.md) \(`Reservation` event\) |
| How to get reservation and customer details | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) |

## Charging checked-in customers

Once the unique identifier of the customer to be charged is obtained, the items can be posted onto their billing tab using the [Add order](../operations/orders.md#add-order) operation. If the product being posted already exists in Mews, then use [Product order parameters](../operations/orders.md#product-order-parameters). If the product does *not* exist in Mews, then use [Item parameters](../operations/orders.md#item-parameters). 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to post an order item to a guest profile | [Add order](../operations/orders.md#add-order) |

## Testing your integration

Please ensure you follow our general [guidelines](../guidelines/README.md) for testing integrations. To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the [Accounting Report](https://help.mews.com/s/article/accounting-report?language=en_US). If done correctly, the product you've posted will appear under the relevant accounting category in the Revenue section of the report.

## Additional help for working with the demo environment

> **Help Guides**:
> * [Understanding services](https://help.mews.com/s/article/understanding-services?language=en_US)
> * [Create or delete a product](https://help.mews.com/s/article/create-or-delete-a-product?language=en_US)
> * [Creating an accounting category](https://help.mews.com/s/article/create-an-accounting-category?language=en_US)
