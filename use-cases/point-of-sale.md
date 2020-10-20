## Point of sale

Traditionally, a Point of Sale system (POS) will send totals from the system to a room or reservation located inside the Property Management System (PMS). 

In Mews, all charges are posted directly to the billing tab of either customer profiles that are active and attached to a reservation (checked in) or profiles that are classified as `Paymaster`. Learn how customer profiles work in Mews by reading [this article](https://help.mews.com/en/articles/4245538-create-a-customer-profile) and learn more about managing items in their billing tab [here](https://intercom.help/mews-systems/en/articles/4245416-add-move-or-remove-items-from-open-bills). The items that are sent from the POS to Mews are called Orders.

The receipts that have been finalized in the POS can be sent to Mews to allow for end of day balancing. In Mews, these are called Outlets. 

By default, only positive charges are allowed. Mews provides a guide for properties to follow before using a Point of Sale integration, which can be viewed [here](https://help.mewssystems.com/hc/en-us/articles/360002080037-Point-of-sale-integrations-for-Commander). Integration partners should confirm that each new property has completed the steps outlined in the article prior to onboarding the client to their system.

### Initial setup

The integration should use the [Get all services](../operations/services.md#get-all-services) endpoint to retrieve all services the property has created in Mews which then could be correctly mapped with similar information in the POS. The `ServiceId` will need to be used in the API call. Point of sale systems should use non-Stay/Accommodation services and their relevant products. For a better understanding, please review our articles about [services](https://intercom.help/mews-systems/en/articles/4244364-understanding-services) and [products](https://intercom.help/mews-systems/en/articles/4244370-create-or-delete-a-product). 

[Get all resources](../operations/enterprises.md#get-all-resources) will retrieve the list of `ResourceId`s the property has setup in Mews. This endpoint will give the information needed to search for a specific room number in Mews.

Outlets are used for the POS to send a full revenue push to Mews. Using the [Get all outlets](../operations/enterprises.md#get-all-outlets) endpoint will retrieve any Outlets that the property has configured in Mews. Outlets should be created by the property for each external location as well as different `AccountingCategories` that should be used to seperate payments and revenue per Outlet.  

In the POS system, accounting categories usually exist such as entree, main, dessert, beverage or alcohol. In order for the revenue to be correctly reported in Mews with these categories, they should be correctly mapped against accounting categories in Mews. The POS integration should use the [Get all account categories](../operations/finance.md#get-all-accounting-categories) endpoint to pull a list of all `AccountingCategories` which the property has setup in Mews.

### Searching customers

Searching for actively checked-in customers is done via the [Search customers](../operations/customers.md#search-customers) endpoint. This will allow you to search among all customers that are checked in or classified with the `Paymaster` customer classification. Customers can be either searched by `FirstName` and/or `LastName` or by `ResourceId` which then returns all active customers within the reservation.

Customer profiles with the classification of `Paymaster` can have charges added without needing a reservation attached or checked in. The customer classification, `Cashlist` is used by properties to not allow charges sent to their bill. This is also commonly known as "No Post" in other PMS products.

Note: As room numbers of some hotels consist of numbers, letters, and other characters, this should be supported in your search.

### Charging in-house customers

Once the customer profile to be charged is identified, the items can be posted onto their bill using the [Add order](../operations/services.md#add-order) operation. The order needs to be sent with its full name (e.g. Caesar salad, Beer, etc.) and not just “Item". The `AccountingCategoryId` will need to be used per item to allow for correct reporting for accounting systems.

### Split payments

If the POS supports split payments, e.g. one salad divided between two people, it must be sent to Mews as separate transactions with the item count rounded up to the nearest whole number.

### Rebates

Rebates (or cancelled items) will need to be allowed by the property. The [Add order](../operations/services.md#add-order) endpoint, with the items to be cancelled, should be sent through with negative values. This applies to Outlet items as well.

### Gratuities

Gratuities should be sent as another item to Mews with possibility of assigning an different accounting category to it. In the full revenue push, both the tip revenue item and the payment used to cover the tip should be sent.

### Outlets

Outlets are used in Mews to collect any revenue and payments that are taken outside of Mews to allow for reporting to an external system (such as an accounting software). The POS will need to post all end of day revenue and payments to the Outlets the property has configured in Mews using the [Add outlet bill](../operations/finance.md#add-outlet-bills) endpoint. Any outlet items that are sent to Mews will need to have an `AccountingCategoryId` attached to each item.

### Testing your integration

Once your integration is completed, all endpoints should be tested prior to initiating the [certification process](https://intercom.help/mews-systems/en/articles/4497819-connector-api-certification-what-to-expect) with the Mews Marketplace team. Testing your solution is done directly in the Connector API demo. You should use the credentials found in the [Authentication](../guidelines.md#authentication) section to sign in as an end-user. This allows you to fully understand how both systems will be used by the property and gives you additional information to ensure you provide a seamless and efficient onboarding experience for our hoteliers.

To make sure the integration supports the minimum expected functionality, please test the following operations:
* Post a charge to the guest bill.
* Post a % discount to guest bill.
* Post an absolute discount to guest bill.
* Post an item with the amount 0 to guest bill.
* Post an outlet bill correctly.
* Post an outlet bill with the amount 0.
* Confirm that a room posting cannot be done for a customer with the [classification](../operations/customers.md#customer-classification) `Paymaster`.

To check that you've correctly posted an order, you can review the billing tab of the relevant guest profile. To confirm you are relating any product that is not configured in Mews with the correct accounting category, you can review the Mews [Accounting Report](https://intercom.help/mews-systems/en/articles/4245918-accounting-report). If done correctly, the product you've posted will appear under the relevant accounting category. All correctly posted orders will be shown in the Revenue section of the report and all bills closed in the outlet (e.g. containing both revenue items and matching payments) will be shown in the Outlet section of the Accounting report. An incorrectly posted item will be displayed in the Accounting report under the 'None' accounting category of either section. 
