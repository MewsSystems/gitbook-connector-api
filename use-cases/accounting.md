# Accounting

Accounting systems are created to record and process accounting transactions for internal and external review and auditing. Accounting systems include core modules such as accounts payable, accounts receivable, general ledger, and billing. Additional non-core modules could include reconciliation, inventory, a document approval system, expense tracking, reporting and electronic payment processing for added value. 

## Initial configuration

An Accounting integration must first retrieve all configured accounting categories, i.e. all the IDs and codes required to ensure that revenue, payments and costs are correctly assigned to their designated accounting categories. Accounting categories should be created by the property in co-operation with their accountants.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get accounting categories | [Get all accounting categories](../operations/accountingcategories.md#get-all-accounting-categories) |

To ensure accuracy, only data that is no longer editable by the property can be retrieved by the integration. This is determined by a period of time called the Editable History Window, which is the length of time after a bill or invoice has been closed during which it can still be amended. In fact there are two values, one for Accounting purposes and one for Operational purposes, so take the longest of the two values to ensure the data cannot be changed. Use API operation [Get configuration](../operations/configuration.md#get-configuration) to fetch the configuration for your enterprise or property. This will include two fields representing the two windows, `AccountingEditableHistoryInterval` and `OperationalEditableHistoryInterval`.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get editable history window | [Get configuration](../operations/configuration.md#get-configuration) |

> **Editable History Window**: For a full description and links to further information, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

> **Debtor tracking**: If debtor tracking is to be done in the external system instead of Mews, the property must have the Accounting configuration option "Receivable tracking enabled" unchecked in Mews. See [Receivable tracking - enabled or disabled?](https://help.mews.com/s/article/Receivable-tracking-enabled-or-disabled?language=en_US).

## Periodic update

An Accounting integration should fetch accounting items and outlet items at regular intervals, at least daily. In both cases, if `Currency` is specified, the cost of the items will be converted to that currency. The integration should also fetch all bills and invoices that must be paid and reconciled within the accounting software. These can be filtered by a specific customer, by date of creation, consumption or payment, or, in the case of invoices, by due date.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get accounting items consumed over a period | [Get all payments](../operations/payments.md#get-all-payments), [Get all order items](../operations/orderitems.md#get-all-order-items) |
| How to get order items consumed over a period | [Get all order items](../operations/orderitems.md#get-all-order-items) |
| How to get payment items paid over a period | [Get all payments](../operations/payments.md#get-all-payments) |
| How to get outlet items consumed over a period | [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) |
| How to get bills and invoices | [Get all bills](../operations/bills.md#get-all-bills) |

## Accounting items and reservations

It is important to understand that in Mews, accounting items are posted directly to the guest profile instead of being attached to a specific reservation. Products created under the 'Stay' service (i.e. accommodation) are used to create stay packages, while products related to any other service are used for all other postings. Only Stay products can be related back to a specific reservation, by matching their `OrderId` with the unique identifier of the relevant reservation. If products are created under any other service configured at the property, they are not related to the reservation. To retrieve a complete list of revenue items for a specific reservation, use [Get all order items](../operations/orderitems.md#get-all-order-items) and pass the Reservation ID as parameter `ServiceOrderId` (A reservation is a type of Service Order).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get a list of revenue items for a reservation | [Get all order items](../operations/orderitems.md#get-all-order-items) |

> **Accounting item states**: Accounting items will always be assigned one of four [accounting item states](../operations/accountingitems.md#accounting-item-state) (`Open`, `Closed`, `Inactive`, `Canceled`).

## Working with rebates

If an accounting item is a rebate item, then the ID for the original order item which is rebated will be stored in the item data. Specifically, an [Order item](../operations/orderitems.md#order-item) with `Data` `Discriminator` set to "Rebate" will have `Data` `Rebate` set to the value of the `RebatedItemId`. You can then use [Get all order items](../operations/orderitems.md#get-all-order-items) with the `OrderItemIds` filter parameter set to this ID to fetch the details about the item. Note that a rebate item can rebate another rebate item, so it may be necessary to recursively call [Get all order items](../operations/orderitems.md#get-all-order-items) to find the original order item in the chain.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to find the original order item for a rebate item | [Get all order items](../operations/orderitems.md#get-all-order-items) |

> **How can I tell if an entire Bill has been rebated?** Rebates are on an individual item-by-item basis, so if every individual order item on a Bill has been rebated then this is equivalent to the entire Bill being rebated.

## Testing your integration

Please follow our general [Guidelines](../guidelines/README.md) for testing integrations.
When testing an Accounting integration, you can cross-check whether you are correctly requesting all of the accounting information via the API by matching your data with the Mews Accounting Report. For reconciliation of all bills and invoices, you can use the Bills and Invoices Report. You can easily create export schedules to a specific target and in a desired format for both of these reports. 

Before assisting any new enterprise client with connecting to your accounting integration, it's recommended that you check that they have first completed their configuration, to ensure a smoother onboarding experience.

## Additional help for working with the demo environment

> **Help Guides**:
> * [Creating an accounting category](https://help.mews.com/s/article/create-an-accounting-category?language=en_US)
> * [Set up a bookable service](https://help.mews.com/s/article/set-up-a-bookable-service?language=en_US)
> * [The Accounting Report](https://help.mews.com/s/article/accounting-report?language=en_US)
> * [The Bills and Invoices Report](https://help.mews.com/s/article/bills-and-invoices-report?language=en_US)
> * [Scheduling report exports](https://help.mews.com/s/article/schedule-report-exports?language=en_US)
> * [How can I connect my accounting integration?](https://help.mews.com/s/article/how-can-i-connect-my-accounting-integration?language=en_US)
