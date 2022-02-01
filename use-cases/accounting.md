## Accounting

Accounting systems are created to record and process accounting transactions for internal and external review and auditing. Accounting systems must include core modules such as accounts payable, accounts receivable, general ledger, and billing. Additional non-core modules could include reconciliation, inventory, a document approval system, expense tracking, reporting and electronic payment processing for added value. 

### Initial configuration

The integration must first retrieve all configured accounting categories using [Get all accounting categories](../operations/finance.md#get-all-accounting-categories) which returns all ids and codes required to ensure revenue, payments and costs are correctly assigned to their designated accounting categories. Accounting categories should be created by the property in cooperation with their accountant and following [these instructions](https://help.mews.com/s/article/create-an-accounting-category?language=en_US). 

To ensure accuracy, only data that is no longer editable by the property can be retrieved by the integration. Mews properties configure their Editable History Window via their [Accounting configurations](https://help.mews.com/s/article/what-is-the-accounting-configuration?language=en_US) to determine how long after a bill or invoice has been closed can it be amended. Accounting integrations retrieve this information from `EditableHistoryInterval` using [Get configuration](../operations/configuration.md#get-configuration). If debtor tracking is to be done in the external system instead of Mews, the property must have the Accounting configuration option "Receivable tracking enabled" unchecked.

### Periodic update

The integration should call [Get all accounting items](../operations/finance.md#get-all-accounting-items) with the accounting item time filter `Consumed` at regular (at least daily) intervals to return all accounting items of the enterprise that have been consumed within the selected time period. The same must be done with all outlet items using [Get all outlet items](../operations/finance.md#get-all-outlet-items) with the time filter `Consumed`. For both calls, if the `Currency` is specified, the cost of the items will be converted to that currency. When retrieving the accounting items, the extent should include `CreditCardTransactions`. In order to retrieve all bills and invoices that must be paid and reconciled within the accounting software, the integration should use [Get all bills](../operations/finance.md#get-all-bills). These can be filtered by a specific customer, date of creation, consumption, payment or, in the case of invoices, due date.

It's important to understand that in Mews, accounting items are posted directly to the guest profile instead of being attached to a specific reservation. Products created under the Stay/Accommodation service are used to create stay packages, while products related to any other service are used for all other postings. If the integration uses [Get all accounting items](../operations/finance.md#get-all-accounting-items), only Stay/Accommodation products can be related back to a specific reservation by matching their `OrderId` with the unique identifier of the relevant reservation. If products are created under any other service configured at the property, they are not related to the reservation. In order to retrieve a complete list of revenue items of a specific reservation, partners can use [Get all reservation items](../operations/reservations.md#get-all-reservation-items). 

Accounting items will always be assigned one of the four following [states](../operations/finance.md#accounting-item-state):
* **Open**: Items that have been posted to the guest profile and remain on a bill that has not been closed yet.
* **Closed**: Items that were assigned to a bill that has already been paid or an already issued invoice.
* **Inactive**: Items that have the value of 0 and have no impact on the overall total.
* **Canceled**: Items that were posted to the guest profile but have since been canceled.

When testing the integration, you can cross-check whether you are correctly requesting all of the accounting information via the API by matching your data with the Mews Accounting Report. For reconciliation of all bills and invoices, you can use the Bills and invoice report. You can easily create export schedules to a specific target and in desired format for both of these reports. 

Before assisting any new client with connecting to your accounting integration, it's recommend you check that they have completed their configuration to ensure a smoother onboarding experience.

### Testing your integration

Ensure you follow our general [guidelines](../guidelines) for testing integrations.

### Working with rebates

#### For a given order item, how can I tell if it has been rebated?

To find out if an individual order item has been rebated, use [Get all accounting items](../operations/finance.md#get-all-accounting-items) with the `RebatedItemIds` filter parameter set to the value of the item ID for that order item. If the operation returns any items, these are rebate items relating to the original order item. If no items are returned, then the original order item has not been rebated. You can also search for rebates against multiple order items, by including all of the item IDs in the `RebatedItemIds` filter parameter.

#### For a given rebate item, how can I find the original order item that has been rebated?

If an accounting item is a rebate item, then the ID for the original order item which is rebated will be stored in the item data. Specifically, an order item with Data Discriminator set to "Rebate" will have Data Value set to the `RebatedItemId`. You can then use [Get all accounting items](../operations/finance.md#get-all-accounting-items) with the `ItemIds` filter parameter set to this ID to fetch the details about the item. Note that a rebate item can rebate another rebate item, so it may be necessary to recursively call Get all accounting items to find the original order item in the chain.

#### How can I tell if an entire Bill has been rebated

Rebates are on an individual item-by-item basis, so if every individual order item on a Bill has been rebated then this is equivalent to the entire Bill being rebated.

#### For a given bill, how can I tell if any order items on the bill have been rebated?

First use [Get all bills](../operations/finance.md#get-all-bills) to get a list of the order items on the bill. Then search for rebates against any of these order items, as described above.

### Additional Help for working with the demo environment

- [How to set up a Stay/Accommodation service](https://help.mews.com/s/article/set-up-a-bookable-service?language=en_US)
- [How to view the Accounting report](https://help.mews.com/s/article/accounting-report?language=en_US)
- [How to view the Bills and invoice report](https://help.mews.com/s/article/bills-and-invoices-report?language=en_US)
- [How to schedule report exports](https://help.mews.com/s/article/schedule-report-exports?language=en_US)
- [How to connect my accounting integration](https://help.mews.com/s/article/how-can-i-connect-my-accounting-integration?language=en_US)
