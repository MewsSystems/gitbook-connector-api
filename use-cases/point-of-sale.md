## Point of sale

In Mews charges are not sent to rooms or reservations but to the customer profile that are active and attached to a reservation (checked-in) or profiles that are classified as `Paymaster`. 

In Mews, all charges are posted directly to the billing tab of either customer profiles that are active and attached to a reservation (checked-in) or profiles that are classified as `Paymaster`. The items that are sent from the POS to Mews are called *Orders*.

The receipts that are finalized in the POS system can be sent to Mews to allow for end-of-day balancing (sometimes referred to as revenue push or revenue sync). In Mews, these are called *[Outlet bills](#outlet-bills)*. 


### Initial setup

There are two concepts in Mews that are used to represent the point of sale or revenue center that exists in a property - `Services` and `Outlets`. A user can configure the names of both to match the actual name of the restaurant/bar/spa/etc for ease of recognition on Mews reports. Both already exist in the [Demo environment](../guidelines.md#demo-environments) for testing purposes.

A Service is used to represent the point of sale, under which items are recorded when posting *Orders*. 
An Outlet is used to represent the point of sale, under which items are recorded when posting *Outlet bills*.

#### Services
The integration should use the [Get all services](../operations/services.md#get-all-services) endpoint to retrieve all services the property has created in Mews, which then could be correctly mapped with similar information in the POS. The `ServiceId` will need to be used in the API call. Point of sale systems should use services of the `Orderable` [service type](../operations/services.md#service-type) and their relevant products (if any).

#### Outlets

Outlets are used for the POS to send a full revenue push to Mews. Using the [Get all outlets](../operations/enterprises.md#get-all-outlets) endpoint will retrieve any Outlets that the property has configured in Mews. Outlets should be created by the property for each external location as well as different `AccountingCategories` that should be used to seperate payments and revenue per Outlet.

##### Example of Service and Outlet mapping to the point of sale

| Point of sale | Service | Outlet | 
| --- | --- | --- |
| Mai Tai Restaurant | Mai Tai Restaurant | Mai Tai Restaurant |
| Room Service | Room Service | Room Service |
| Hina Spa | Hina Spa | Hina Spa |

#### Resources

[Get all resources](../operations/enterprises.md#get-all-resources) will retrieve the list of `ResourceId`s the property has setup in Mews. This endpoint will give the information needed to search for a specific room number in Mews. 

#### Accounting categories

In the Mews PMS, accounting categories usually exist and are linked to accounting items such as revenue items (e.g. entree, main, dessert, beverage, or alcohol) and payment items (credit card, cash, voucher, invoice, etc). Such types of accounting items in the POS should also be associated with an accounting category configured in Mews, to ensure accurate posting with the correct accounting category in Mews. 

First, use [Get all account categories](../operations/finance.md#get-all-accounting-categories) to retrieve a list of all `AccountingCategories` which the property has configured in Mews, and then map them against the product offerings/services and accepted payment types that have been configured in the POS system. 

##### Example of POS revenue items and payment types mapping to Mews accounting categories

| POS Revenue/Payment | Mews Accounting Category |
| --- | --- |
| Champagne | Resto Beverage Alcoholic |
| Orange juice | Resto Beverage Non-Alcoholic | 
| Salad | Restaurant Food | 
| Cash | Cash |
| Credit card | Credit card |


### Searching customers

Searching for customers active within the enterprise is done via the [Search customers](../operations/customers.md#search-customers) endpoint. This will allow you to search among all customers that are in-house or those with the `Paymaster` customer [classification](../operations/customers.md#customer-classification). Customers can be either searched by `FirstName` and/or `LastName` or by `ResourceId` which then returns all active customers within the reservation. 

In-house customers are those who are listed as Companions of a checked-in reservation. See linked help center articles below for more information.. 

You can post charges to customer profiles with the classification of `Paymaster` regardless of whether it is attached to a checked-in reservation. The customer classification, `Cashlist` is used by properties to not allow charges sent to their bill. This is also commonly known as "No Post" in other PMS products.

Note that having a `Cashlist` customer [classification](../operations/customers.md#customer-classification) does not automatically prevent Orders from being posted to the customer's billing. The POS system can decide whether to recognise this classification on a customer profile and prevent users from sending room charges from the POS system.

*Note: Room numbers of some hotels consist of numbers, letters, and other characters.*

### Charging in-house customers or Paymaster accounts

Once the customer profile to be charged is identified, the items can be posted onto their bill using the [Add order](../operations/services.md#add-order) operation. The order needs to be sent with its full name (e.g. Caesar salad, Beer, etc.) and not just “Item". The `AccountingCategoryId` will need to be used per item to allow for correct reporting for accounting systems. You can make use of `Notes` to record the associated ticket number from the POS system.

### Split payments

If the POS supports split payments, e.g. one salad divided between two people, it must be sent to Mews as separate transactions with the product `Count` or item `UnitCount` rounded up to the nearest whole number. 

Example: One salad of €10.00 divided between two people are sent as two separate Orders, each with 1 salad at a price of €5.00.

### Rebates

Rebates (or cancelled items) will need to be allowed by the property and can be applied to both Orders and Outlet bills. The POS system should use the applicable endpoint - [Add order](../operations/services.md#add-order) or [Add outlet bill](../operations/finance.md#add-outlet-bills) - to post a rebate or cancelled item.

### Gratuities

Gratuities should be sent as another item to Mews and can be posted under a different accounting category, depending on the property's accounting practices and configurations. In the full revenue push, both the tip revenue item and the payment used to cover the tip should be sent.

### Outlets bills

Outlets are used in Mews to record any revenue and payments that have been taken outside of Mews. This allows for the centralization and reporting of accounting data to an external system (such as an accounting software) from Mews. The POS system will need to use the [Add outlet bill](../operations/finance.md#add-outlet-bills) endpoint to post all end-of-day revenue and payments to the Outlet(s) the property has configured in Mews. Any outlet items that are sent to Mews will need to have an `AccountingCategoryId` attached to the item. You can make use of `Number` to record the associated ticket or receipt number from the POS system.

In an outlet bill, items of the [payment](../operations/finance#outlet-item-type) type are customisable by `Name`, and should draw from the list of accepted types of payment configured in the POS system. Such items should also be sent with the corresponding accounting categories previously mapped in the POS system to ensure correct reporting.

### Testing your integration

Ensure you follow our general [guidelines](../guidelines.md) for testing integrations.

To make sure the integration supports the minimum expected functionality, please test the following operations. Ignore any items that are not supported by your solution or required by the property.
* Post a charge to the guest bill (in-house customer or Paymaster).
* Post a split charge to separate guest bills.
* Post a % discount to the guest bill.
* Post an absolute discount to the guest bill.
* Post an item with the amount 0 to guest bill.
* Post an outlet bill correctly with revenue items and payment items.
* Post an outlet bill with the amount 0.
* Confirm that a room posting cannot be done for a customer with the [classification](../operations/customers.md#customer-classification) `Paymaster`.

To check that you have correctly posted an order, you can review the billing tab of the relevant guest profile. To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the Mews Accounting Report. If done correctly, the product you have posted will appear under the relevant accounting category. All correctly posted Orders will be shown in the Revenue section of the report. All Outlet bills (e.g. containing both revenue items and matching payments) will be shown in the Outlet section of the Accounting report. An incorrectly posted item (without an associated accounting category) will be displayed in the Accounting report under the 'None' accounting category of either section. 

### Additional Help for working with the demo environment

- Full list of [Mews Glossary and Concepts](https://help.mews.com/en/articles/4476514-mews-glossary-for-connector-api-partners)
- How to view the [Accounting Report](https://intercom.help/mews-systems/en/articles/4245918-accounting-report)
- How do [customer profiles](https://help.mews.com/en/articles/4245538-create-a-customer-profile) work in Mews 
- Where to see [companions of a reservation](https://help.mews.com/en/articles/4397097-add-a-companion-to-the-reservation)
- How to manage [billing items](https://intercom.help/mews-systems/en/articles/4245416-add-move-or-remove-items-from-open-bills). 
- How to manage [services](https://intercom.help/mews-systems/en/articles/4244364-understanding-services) 
- How to manage [products](https://intercom.help/mews-systems/en/articles/4244370-create-or-delete-a-product). 
- Mews properties' [guide to using a Point of Sale integration](https://help.mews.com/en/articles/4245649-point-of-sale-integrations-for-commander)
