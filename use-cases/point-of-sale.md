# Point of sale

Here we walk you through a Point-of-sale (POS) integration, from initial setup (synchronizing product and payment information with Mews) through to customer/guest search, posting charges and posting end-of-day balances or 'outlet bills'. We also cover split payments, rebates and gratuities, as well as providing some guidance on testing your integration; and finally, some links to further information.

## General principles

When using the API, charge items are part of an `order` and are posted directly to a customer profile and not to a room or reservation. The target profile is either one that is active and attached to a reservation, i.e. a checked-in guest, or else is a profile classified as `Paymaster`. To post a charge to a customer profile, use the API operation [Add order](../operations/orders.md#add-order). For more details, see [Charge posting](#charge-posting) below.
The receipts that are finalized in the POS system can be sent to Mews to allow for end-of-day balancing (sometimes referred to as 'revenue push' or 'revenue sync'). In Mews, these are called `outlet bills`. For more details, see [Outlets bills](#outlets-bills) below.

## Initial setup

There are two concepts in Mews that are used to represent the point-of-sale or revenue center that exists in a property: `services` and `outlets`. A user can configure the names of both to match the actual name of the restaurant/bar/spa/etc. for ease of recognition on Mews reports. Both already exist in the [Demo environment](../guidelines/environments.md) for testing purposes.

* A `service` is used to represent the point-of-sale under which `items` are recorded when posting `orders`.
* An `outlet` is used to represent the point-of-sale under which `items` are recorded when posting `outlet bills`.

### Services

Use [Get all services](../operations/services.md#get-all-services) to retrieve services the property has created in Mews, which can then be mapped to corresponding services in the POS system. The services of interest to POS systems are those with [service data](../operations/services.md#service-data) of type `Additional`, together with any products offered under those services. Use the service `Id` when identifying a service in subsequent API calls.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the configured services | [Get all services](../operations/services.md#get-all-services) |

### Outlets

Outlets are used by the POS to send a full revenue push to Mews, for end-of-day balancing. Use [Get all outlets](../operations/outlets.md#get-all-outlets) to retrieve outlets that the property has configured. Outlets should be created by the property for each external location, as well as unique `accounting categories` that should be used to separate payments and revenue per outlet.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the configured outlets | [Get all outlets](../operations/outlets.md#get-all-outlets) |

### Resources

Use [Get all resources](../operations/resources.md#get-all-resources) to retrieve the list of resources the property has set up in Mews. Resources includes bookable spaces such as guest rooms. This will then give you the information needed to make a customer look-up against a specific guest room or other type of resource.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the configured rooms and spaces | [Get all resources](../operations/resources.md#get-all-resources) |

### Accounting categories

Accounting categories are linked to accounting items such as revenue items (e.g. entree, main, dessert, beverage, or alcohol) and payment items (e.g. credit card, cash, voucher, invoice). The POS system should be configured to map accounting items to the correct accounting categories in Mews to ensure accurate posting.  Use [Get all account categories](../operations/accountingcategories.md#get-all-accounting-categories) to retrieve a list of all `accounting categories` which the property has configured, then map these against the product offerings and accepted payment types that have been configured in the POS system. 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the configured accounting categories | [Get all account categories](../operations/accountingcategories.md#get-all-accounting-categories) |

### Example of POS revenue item and payment type mapping

| POS Revenue/Payment | Mews Accounting Category |
| :-- | :-- |
| Champagne | Resto Beverage Alcoholic |
| Orange juice | Resto Beverage Non-Alcoholic | 
| Salad | Restaurant Food | 
| Cash | Cash |
| Credit card | Credit card |

## Customer search

Searching for customers active within the property is done via the [Search customers](../operations/customers.md#search-customers) operation. This will allow you to search all customers that are in-house or those with the `PaymasterAccount` [customer classification](../operations/customers.md#customer-classification). Customers can be searched by `FirstName` and/or `LastName`, or by `ResourceId`, which then returns all customers matching the criteria. In-house customers are those who are listed as `companions` against a checked-in reservation - see the [Additional help](#additional-help) links below for more information.

You can post charges to customer profiles with the classification of `PaymasterAccount` regardless of whether they are attached to checked-in reservations or not. The customer classification `Cashlist` is used by properties to indicate where charges should __not__ be posted to the customer bill, this is also commonly known as "No Post". Note that having a `Cashlist` [customer classification](../operations/customers.md#customer-classification) does not automatically prevent orders from being posted to the customer's bill, the POS system can decide whether to recognise this classification on a customer profile and prevent users from sending room charges from the POS system.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to search for a customer (guest) | [Search customers](../operations/customers.md#search-customers) |

> **Room numbers:** Note that hotel room numbers and other space descriptors may consist of numbers, letters and other characters. Don't assume they only contain numbers.

## Charge posting

Once the customer profile to be charged is identified, the items can be posted onto their bill using the [Add order](../operations/orders.md#add-order) operation. The order needs to be sent with its full name, e.g. "Caesar salad" or "Beer", and not just “Item". The `AccountingCategoryId` will need to be used per item to allow for correct reporting for accounting systems. You can make use of `Notes` to record the associated ticket number from the POS system.

> ### Linking orders to reservations
> When using [Add order](../operations/orders.md#add-order), specify parameter `LinkedReservationId` in order to link the order to a guest reservation. This will greatly assist the property when using billing automation.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to post a charge to a customer profile | [Add order](../operations/orders.md#add-order) |
| How to link an order to a reservation | [Add order](../operations/orders.md#add-order) (use `LinkedReservationId`) |

## Split payments

If the POS supports split payments, e.g. one salad divided between two people, it must be sent to Mews as separate transactions with the product `Count` or item `UnitCount` rounded up to the nearest whole number. 

*Example: One salad of €10.00 divided between two people is sent as two separate orders, each with one salad at a price of €5.00.*

## Rebates

Rebates or canceled items will need to be allowed by the property and can be applied to both orders and outlet bills. It is not permitted to directly cancel or modify the originally posted item, therefore the POS system should use the applicable API operation \([Add order](../operations/orders.md#add-order) or [Add outlet bill](../operations/outletbills.md#add-outlet-bills)\) to post a rebate or canceled item. Such items should be sent through with __negative__ values, in order to balance out the previously posted amount.

*Example: One salad of €10.00 has been sent to Mews. To rebate this item, send through one salad of -€10.00. For a partial rebate of 50%, send through one salad of -€5.00.*

## Gratuities

Gratuities should be sent as another item to Mews and can be posted under a different accounting category, depending on the property's accounting practices and configurations. In the full revenue push, both the tip revenue item and the payment used to cover the tip should be sent.

## Outlets bills

Outlets are used in Mews to record any revenue and payments that have been taken outside of Mews. This allows for the centralization and reporting of data to an external accounting system. The POS system will need to use [Add outlet bill](../operations/outletbills.md#add-outlet-bills) to post all end-of-day revenue and payments to the outlet(s) the property has configured in Mews. Any outlet items that are sent to Mews will need to have an `AccountingCategoryId` attached to the item. You can make use of `Number` to record the associated ticket or receipt number from the POS system.

In an outlet bill, items of [outlet item type](../operations/outletitems.md#outlet-item-type) `Payment` are customisable by `Name`, and should draw from the list of accepted types of payment configured in the POS system. Such items should also be sent with the corresponding accounting categories previously mapped in the POS system to ensure correct reporting.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to post end-of-day accounting items | [Add outlet bill](../operations/outletbills.md#add-outlet-bills) |

## Testing your integration

Ensure you follow our general [Usage guidelines](../guidelines/README.md) for testing integrations.
To make sure the integration supports the minimum expected functionality, please test the following operations. Ignore any items that are not supported by your solution or not required by the property.

* Post a charge to the guest bill (in-house customer or Paymaster)
* Post a split charge to separate guest bills
* Post a % discount to the guest bill
* Post an absolute discount to the guest bill
* Post an item with the amount 0 to the guest bill
* Post an outlet bill with revenue items and payment items
* Post an outlet bill with the amount 0
* Confirm that a room posting cannot be made for a customer with the [customer classification](../operations/customers.md#customer-classification) `Cashlist`

To check that you have correctly posted an order, you can review the billing tab of the relevant guest profile.
To confirm you are mapping any product that is not configured in Mews with the correct accounting category, you can review the [Mews Accounting Report](https://help.mews.com/s/article/accounting-report?language=en_US).
If done correctly, the product you have posted will appear under the relevant accounting category.
All correctly posted orders will be shown in the Revenue section of the report.
All outlet bills (containing both revenue items and matching payments) will be shown in the Outlet section of the report.
An incorrectly posted item (without an associated accounting category) will be displayed in the Accounting Report under the 'None' accounting category of either section. 

## Connecting to Mews Terminals

To connect to Mews Payment Terminals, see [Mews Payment Terminals](mews-terminals.md).

## Additional help

> **Help Guides**:
> * [Point-of-sale integrations for Mews Operations](https://help.mews.com/s/article/point-of-sale-integrations-for-mews-operations?language=en_US)
> * [Mews Availability Block Report](https://help.mews.com/s/article/Availability-block-report?language=en_US)
> * [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US)
> * [Mews Accounting Report](https://help.mews.com/s/article/accounting-report?language=en_US)
> * [Create a customer profile](https://help.mews.com/s/article/create-a-customer-profile?language=en_US)
> * [How to add a customer to a reservation](https://help.mews.com/s/article/How-to-add-a-customer-to-a-reservation?language=en_US)
> * [Add, move or remove items from open bills](https://help.mews.com/s/article/new-billing-procedure-add-move-or-remove-items-from-open-bills?language=en_US)
> * [Understanding services](https://help.mews.com/s/article/understanding-services?language=en_US)
> * [Set up outlets](https://help.mews.com/s/article/set-up-outlets?language=en_US)
> * [Create or delete a product](https://help.mews.com/s/article/create-or-delete-a-product?language=en_US)
