# Use cases

This section describes, how to use the Connector API in order to implement some of the well-known scenarios. Even if you are integrating different type of system, it may serve as a good starting point for the API usage patterns and practices. The following types of systems are described here:

* [Revenue management systems](use-cases.md#revenue-management-systems)
* [Device integrations](use-cases.md#device-integrations)
* [Point of sale systems](use-cases.md#point-of-sale-systems)
* [Guest technology systems](use-cases.md#guest-technology-systems)
* [Reputation management systems](use-cases.md#reputation-management-systems)
* [Mobile Key Systems](use-cases.md#mobile-key-systems)
* [Event Management Software](use-cases.md#event-management-software)
* [Accounting Systems](use-cases.md#accounting-systems)

## Revenue management systems

Revenue management systems obtain information about reservations, revenue and pricing from Mews. And based on the data they may recommend or directly update rate prices, give future revenue estimates, predict occupancy etc. In bigger hotels, there might be more than 50k reservations in a year, so it is necessary to always limit the operations in terms of potential data size, in order to avoid timeouts, network errors etc. A recommended approach, how to implement a RMS client is described below. Following these guidelines should ensure that both our servers and RMS clients are not unnecessarily overutilized.

### Initial data pull

Performed once when setting up the connection, because the RMS needs to obtain historical data. RMS should obtain the reservations in time-limited batches using [Get all reservations](operations/reservations.md#get-all-reservations) with [Reservation time filter](operations/reservations.md#reservation-time-filter) set to `Start` \(that will give you all reservations with arrival time colliding with the selected interval\). Size of the batches depends on size of the hotel and its occupancy, but in general **weekly batches** are recommended and should work well even for big hotels \(1000+ units\). In order to get reservations e.g. in the past year, RMS should call [Get all reservations](operations/reservations.md#get-all-reservations) sequentially 52 times \(one call for each week in the past year\). That would give RMS all reservations that have arrival within the past year. To obtain revenue items associated with reservations, `Items` should be set to `true` in the `Extent` parameter.

One can take advantage of the fact that reservations are usually booked a few weeks or months in advance. The further in future, the lower the occupancy, so the reservation batch length may increase with the distance to future from current date. E.g. weekly batches can be used only for the first three months of the future year when there is higher occupancy. And for the remaining 9 months, monthly batches would be sufficient. This would reduce the operation count from 52 to 21 \(12 weekly batches + 9 monthly batches\).

Sometimes the data obtained through the previous two steps are not sufficient enough for RMS. So additionally, RMS can pull e.g. business segments via [Get all business segments](operations/services.md#get-all-business-segments) or rates via [Get all rates](operations/services.md#get-all-rates). Note that it is important to get the reservations and revenue first and the additional data later after that. If done the other way around, it might happen that RMS would receive a reservation with e.g. `RateId` which does not correspond to any rate that was pulled beforehand. Rates, business segments etc. are dynamic and hotel employees could create a new one and assign it to a reservation right before the reservation gets pulled to RMS.

### Periodic future update

Performed periodically after the connection is set up so that RMS has future reservations and revenue up to date. Length of the period is not specified, but it is recommended to update the future data once or twice a day. If you need to get the reservation changeset more frequently, you should use the [Get all reservations](operations/reservations.md#get-all-reservations) with the [Reservation time filter](operations/reservations.md#reservation-time-filter) set to `Updated`. That gives you just reservations that were created or updated within the specified interval.

### Rate pricing

To know the data about the rates of the enterprise, there are two relevant operations. [Get all rates](operations/services.md#get-all-rates) can give you information about the names \(and ids\) of the rates in the property, their status, rate groups and restrictions. [Get rate pricing](operations/services.md#get-rate-pricing) gives you the pricing of specific rate for a specific time period. In order to update rate prices, [Update rate price](operations/services.md#update-rate-price) operation be used. Individual rate, room category and time span can be chosen.

### Occupancy

When calculating occupancy, it is important to take hierarchy of spaces into account. For example if there is a reservation for whole dorm, it occupies the dorm but also all child spaces in the hierarchy \(the beds\). And vice versa, if there is a bed reservation, it occupies the bed but also all parent spaces \(the dorm\). We consider a space occupied if there is a reservation colliding with interval 18:00 to 24:00 on that day. So e.g. reservation from 14:00 to 16:00 is not calculated towards occupancy.

## Device integrations

In order to communicate with devices on the local hotel network, such as printers, lock systems, PBX, TVs, key cutters or fiscal machines, Mews has introduced the concept of devices and device commands. When a relevant action happens in Mews, a device command is generated and put into the device command queue. Using the API, you can pull the commands from the queue, process them as you find necessary and later mark them as processed. Of course, as many of the actions with devices should happen in real time, you should in most of the cases use this in combination with [Websockets](websockets.md) to avoid polling for new commands. Whenever a relevant command is created, you would receive a notification about such an event through the opened websocket.

### Processing commands

First of all, you should subscribe your application for receiving device command events by connecting to the [Websockets](websockets.md) endpoint. Since then, your application will receive all the newly created device commands in real time. You might also need to obtain all of the commands that are already pending in the queue while your application was offline. To do so, you should use the [Get all commands](operations/integrations.md#get-all-commands) operation. You want to pull the pending commands every time your application reconnects using websockets, no matter how long it was offline. Otherwise, there might be some unprocessed commands in your queue.

Once you are notified via a websocket about the fact that a device command was created or updated, you need to pull the command into your application using [Get all commands](operations/integrations.md#get-all-commands). Once done, you should mark the command as processed using the [Update command](operations/integrations.md#update-command) operation.

#### Fiscal machine commands

In case your device is a Fiscal Machine \(no matter whether it is a virtual or a physical one\), you would get a command containing [Fiscal machine command data](operations/integrations.md#fiscal-machine-command-data). That involves all data of the related [Bill](operations/finance.md#bill) including all the payments and revenue items in a form of [Accounting item](operations/finance.md#accounting-item). Currently, there is no way how to send any fiscal code generated by the fiscal machine back to Mews.

#### Key cutter commands

In case your device is a Key Cutter, you would get a command containing [Key cutter command data](operations/integrations.md#key-cutter-command-data).

## Point of sale systems

Point of Sale systems \(POS\) need to be able to create charges in Mews. With Mews, charges are placed on a customer as rooms do not pay bills, customers do. Therefore, a POS system needs to identify/search customers where revenue items can be posted. By default, only positive charges are allowed.

### Inital Setup

The integration should use the [Get all services](operations/services.md#get-all-services) operation to retrieve all services the property has configured in Mews. Once all services are retrieved, the service which you would like all charges to be sent under should be selected. Ideally this would be done via the UI in the setup page. Alternatively, a field for the `ServiceId` to be entered in can be used.

In the POS system, accounting categories usually exist such as entree, main, dessert, beverage or alcohol. In order for the revenue to be correctly reported in Mews with these categories, they should be correctly mapped against accounting categories in Mews. The POS integration should use the [Get all account categories](operations/finance.md#get-all-accounting-categories) operation to retrieve a list of all `AccountingCategories` which the property has in Mews. These should be mapped via a UI in the POS.

### Searching customers

To search for customers active in Mews is achieved via the [Search customers](operations/customers.md#search-customers) operation. This will allow you to search among all customers that are checked in or classified with the `Paymaster` customer classification. Customers can be either searched by `FirstName` and/or `LastName` or by `SpaceId` which then returns all active customers within the reservation.

Note: The customer classification, `Cashlist` is what customers are classified with if charges should not be sent to their bill. This is also commonly known as "No Post".

Note: Room numbers of some hotels consist of numbers, letters and other characters so this should be supported in your search.

### Charging in-house customers

Once the customer to be charged is identified, the items can be posted onto their bill using the [Add order](operations/services.md#add-order) operation. The order needs to be sent with its full name \(e.g. Caesar salad, Beer, etc.\) and not just “Item". The accounting category is to be specified per item to ensure reporting is correct.

### Split payments

If the POS supports split payments, e.g. one salad divided between two people, it must be sent to Mews as separate transactions with the item count rounded up to the nearest integer.

### Rebates

Rebates need to be allowed by the hotel to be performed. The [Add order](operations/services.md#add-order) operation with the items to be rebated should be sent through with negative values. This applies for the on-room charges.

### Gratuities

Gratuities should be sent as another item to Mews with possibility of assigning an different accounting category to it. In the full revenue push, both the tip revenue item and the payment used to cover the tip should be sent.

## Guest Technology \(PABX &TV\)

Guest Technology integrations such as a telephone system are used for staff to identify guests on telephones or TV's and to generate revenue by charging guests for outside phone calls.

### Setup

The integration should use [Get all services](operations/services.md#get-all-services) operation to retrieve all services the property has configured in Mews. Once all services are retrieved, the service which you would like all charges to be send under would be selected. Alternatively, a field where the `ServiceId` can be entered can be used.

The [Get all accounting categories](operations/finance.md#get-all-accounting-categories) operation should be used to retrieve all accounting categories has configured in Mews. This is important as a hotel may prefer to have charges for international phone calls reported with a different accounting category than domestic phone calls.

### Room Status

Guest Technology integrations are required to receive an update to a Reservation State in real time, this is why a Reservation Websocket should be used to avoid constantly polling for new commands.

After receiving a Websocket event, use [Get all reservations by ids](operations/reservations.md#get-all-reservations-by-ids) to retrieve the information about the reservation and customer if the websocket event fits your criteria.

Note: The customer classification, `Cashlist` is what customers are classified as if charges should not be sent to their bill. This is also commonly known as ‘No Post’.

### Charging checked in customers

Once the customer to be charged is identified, the items can be posted onto their bill using the [Add order](operations/services.md#add-order) operation.

## Reputation management systems

Reputation management systems provide valuable insight to obtain an understanding of performance relating to operation and service strengths and weaknesses. This understanding is captured via post-stay surveys and by monitoring social channels such as Tripadvisor.

### Retrieving Reservations

After a customer has checked out from a reservation, reputation management systems often send through a survey through to a customers email. The integration should use the [Get all reservations by ids](operations/reservations.md#get-all-reservations-by-ids) operation with a reservation state set to `Processed`.

### Updating Customer Profile

Upon a Reputation management system associating feedback with a customer the [Update customer](operations/customers.md#update-customer) operation should be added to the customer profile in Mews. The customer classification type `Previous complaint` is one which should be used when negative feedback has been received. Further to this, keywords from the complaint and a url to the survey or Tripadvisor post can be added to the customer `notes`.

## Mobile Key Systems

Mobile Key solutions require a state of reservation in real time, a key should not be issued to a guest until they have been checked in Mews. To avoid polling for updated reservations, a Reservation Websocket should be used.

After receiving a websocket event, use [Get all reservations by ids](operations/reservations.md#get-all-reservations-by-ids) to retrieve information about the reservation and customer if the websocket event fits your criteria. With this response, you will have information to issue the mobile key to the customer using their contact information in Mews.

## Event management software

An event management integration pushes contracted revenue to the relevant guest’s profile in Mews, pulls live information about rates and availability and allows for the group reservations already pushed into Mews to be managed from the event management software. The sections below contain guidelines regarding the relevant endpoints used.

### Managing customers

In Mews, billing is managed at the customer’s profile level instead of being charged to a specific room. In order to be able to send the charges to the correct customer, they must have a profile in Mews. A new customer can be added using the [Add customer](operations/customers.md#add-customer) operation and any information can be updated using the [Update customer](operations/customers.md#update-customer) one. In order to retrieve a list of all customer profiles created within a certain interval, use the [Get all customers](operations/customers.md#get-all-customers) operation.

### New group reservation 

When a new reservation is created within the event management software, it needs to be synced with Mews. This can be pushed into Mews using the [Add reservations](operations/reservations.md#add-reservations) operation. 
In order to ensure that the property can further manage individual companions to the group reservation via the integration, use the [Add reservation companion](operations/reservations.md#add-reservation-companion) or [Delete reservation companion](operations/reservations.md#delete-reservation-companion). 

### Adding items

One of the expected functionalities of an event management integration is to push items into Mews to the correct customer’s profile. This can be done using the operation [Add order](operations/services.md#add-order). 

### Rates and availability

In order to pull data about rates from Mews into the event management integration you can use the [Get all rates](operations/services.md#get-all-rates) and  [Get rate pricing](operations/services.md#get-all-rates) as well as [Get service availability](operations/services.md#get-service-availability).

## Accounting Systems

Accounting systems are created to record and process accounting transactions for internal and external review and auditing. Accounting systems must include core modules such as accounts payable, accounts receivable, general ledger, and billing. Additional non-core modules could include reconciliation, inventory, a document approval system, expense tracking, reporting and electronic payment processing for added value. 

### Initial configuration

The integration must first retrieve all configured accounting categories using [Get all accounting categories](operations/finance.md#get-all-accounting-categories) which returns all ids and codes required to ensure revenue, payments and costs are correctly assigned to their designated accounting categories. To ensure accuracy, only data that is no longer editable by the property can be retrieved by the integration. Mews includes an Editable History Window configuration which allows properties to determine, how long after a bill or invoice has been closed can it be amended. Accounting integrations retrieve this information from `EditableHistoryInterval` using [Get configuration](operations/configuration.md#get-configuration).

### Periodic update

The integration should call [Get all accounting items](operations/finance.md#get-all-accounting-items) with the accounting item time filter `Consumed` at regular (at least daily) intervals to return all accounting items of the enterprise that have been consumed within the selected time period. The same must be done with all outlet items using [Get all outlet items](operations/finance.md#get-all-outlet-items) with the time filter `Consumed`. For both calls, if the `Currency`
is specified, the cost of the items will be converted to that currency. When retrieving the accounting items, the extent should include `CreditCardTransactions`  

In order to retrieve all bills and invoices that must be paid and reconciled within the accounting software, the integration should use [Get all closed bills](operations/finance.md#get-all-closed-bills).
