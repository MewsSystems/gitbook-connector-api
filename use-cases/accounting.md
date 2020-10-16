## Accounting

Accounting systems are created to record and process accounting transactions for internal and external review and auditing. Accounting systems must include core modules such as accounts payable, accounts receivable, general ledger, and billing. Additional non-core modules could include reconciliation, inventory, a document approval system, expense tracking, reporting and electronic payment processing for added value. 

### Initial configuration

The integration must first retrieve all configured accounting categories using [Get all accounting categories](../operations/finance.md#get-all-accounting-categories) which returns all ids and codes required to ensure revenue, payments and costs are correctly assigned to their designated accounting categories. To ensure accuracy, only data that is no longer editable by the property can be retrieved by the integration. Mews includes an Editable History Window configuration which allows properties to determine, how long after a bill or invoice has been closed can it be amended. Accounting integrations retrieve this information from `EditableHistoryInterval` using [Get configuration](../operations/configuration.md#get-configuration).

### Periodic update

The integration should call [Get all accounting items](../operations/finance.md#get-all-accounting-items) with the accounting item time filter `Consumed` at regular (at least daily) intervals to return all accounting items of the enterprise that have been consumed within the selected time period. The same must be done with all outlet items using [Get all outlet items](../operations/finance.md#get-all-outlet-items) with the time filter `Consumed`. For both calls, if the `Currency` is specified, the cost of the items will be converted to that currency. When retrieving the accounting items, the extent should include `CreditCardTransactions`  

In order to retrieve all bills and invoices that must be paid and reconciled within the accounting software, the integration should use [Get all closed bills](../operations/finance.md#get-all-closed-bills).
