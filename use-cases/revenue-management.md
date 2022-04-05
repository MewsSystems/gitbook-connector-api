## Revenue management

Revenue Management Systems (RMSs) obtain information about reservations, revenue and pricing from Mews. Based on this data, they may recommend or directly update rate prices, give future revenue estimates, predict occupancy, etc. In bigger hotels, there might be more than 50,000 reservations in a year, so it is necessary to always limit the operations in terms of potential data size, in order to avoid timeouts, network errors, etc.
A recommended approach for implementing an RMS integration is described below. Following these guidelines should ensure that both our servers and the RMS are not unnecessarily overutilized.

### Initial data pull

* Performed once when setting up the connection, because the RMS needs to obtain historical data

The RMS should obtain the reservations in time-limited batches using [Get all reservations](../operations/reservations.md#get-all-reservations) with [Reservation time filter](../operations/reservations.md#reservation-time-filter) set to `Start` \(that will give you all reservations with arrival time colliding with the selected interval\). Size of the batches depends on size of the hotel and its occupancy, but in general **weekly batches** are recommended and will work well even for big hotels \(1000+ units\).
For example, in order to get reservations for the past year, the RMS should call [Get all reservations](../operations/reservations.md#get-all-reservations) sequentially 52 times \(one call for each week in the past year\). That would give the RMS all reservations that have arrival within the past year.

To obtain revenue items associated with reservations, `Items` should be set to `true` in the `Extent` parameter. Please note that there are four accounting item states in which reservation `Items` will be returned. See [Accounting item state](../operations/accountingitems.md#accounting-item-state) for the specific definitions.

You can take advantage of the fact that reservations are usually booked a few weeks or months in advance. The further in future, the lower the occupancy, so the reservation batch length may increase with the distance to future from current date.
For example, weekly batches can be used only for the first three months of the future year when there is higher occupancy. And for the remaining 9 months, monthly batches would be sufficient. This will reduce the operation count from 52 to 21 \(12 weekly batches + 9 monthly batches\).

If the reservation data pulled in the previous steps is not sufficient, the RMS can pull business segments via [Get all business segments](../operations/businesssegments.md#get-all-business-segments) or rates via [Get all rates](../operations/rates.md#get-all-rates). 

### Fetching data in the right order

It is important to get the reservations and revenue first and the additional data afterwards.
If done the other way around, there is a possibility that the RMS receives a reservation with a `RateId` which does not correspond to any rate that was pulled beforehand. Rates and business segments are dynamic and hotel employees could create a new one and assign it to a reservation just before the reservation gets pulled to the RMS.

### Periodic updates and syncing reservation data

To keep reservations up-to-date and synced across your systems in real time, first cache the reservation data retrieved from the initial reservation data pull, then use [General Webhooks](../webhooks/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../websockets/README.md) \(`Reservation` event\) to listen for reservation events.
When you receive a reservation event, use `ReservationId` obtained from the event to fetch the details of the reservation with [Get all reservations](../operations/reservations.md#get-all-reservations).

> Note: In case of WebSocket disconnection, use [Get all reservations](../operations/reservations.md#get-all-reservations) to perform a full resync of reservations that have been updated within the time period since the last full reservation data pull.

Suggested frequency is 30 minutes for business intelligence solutions. Adjust the frequency of the periodic reservation syncing depending on your use case. For example, a mobile key integration would rely more on real-time accuracy of reservation data to provide correct door access to the guest, whereas a 30-minute to one-hour (or longer) interval reservation synce might suffice for a business intelligence solution aimed at providing daily statistical insight to a property's business operations.

### Rate pricing

To get rate information, there are two relevant operations. [Get all rates](../operations/rates.md#get-all-rates) can give you information about the names \(and ids\) of the rates in the property, their status, rate groups and restrictions.
[Get rate pricing](../operations/rates.md#get-rate-pricing) can give you the pricing of a specific rate for a specific time period.
In order to update rate prices, use [Update rate price](../operations/rates.md#update-rate-price).
Individual rate, resource category and time span can be selected.

To avoid heavy consumption of API resources, while keeping rate price data up-to-date in real time, use [WebSockets](../websockets/README.md) to listen for [Price Update events](../websockets/README.md#price-update-event).
Then retrieve information about the relevant rates using [Get rate pricing](../operations/rates.md#get-rate-pricing), filtering by the relevant `RateId`.

### Restrictions

To receive information about restrictions, please use [Get all restrictions](../operations/restrictions.md#get-all-restrictions) which returns all restrictions of a service.
RMSs can also add and remove restrictions using [Add restrictions](../operations/restrictions.md#add-restrictions) and [Delete restrictions](../operations/restrictions.md#delete-restrictions).

### Occupancy

When calculating occupancy, it is important to take the hierarchy of resources into account.
For example, if there is a reservation against a dormitory (or dorm), then not only is the dormitory occupied but also the beds which are child resources of the dormitory.
And vice versa, if a bed in a dorm is occupied, then the dorm is also occupied.

### Testing your integration

Once your integration is completed, all endpoints should be tested prior to initiating the [Certification process](https://help.mews.com/s/article/connector-api-certification-what-to-expect?language=en_US) with the Mews Marketplace team. Testing your solution is done directly in the Connector API Demo.
You should use the credentials found in the [Guidelines](../guidelines/README.md) to sign in as an end-user.
This allows you to fully understand how both systems will be used by the property and gives you additional information to ensure you provide a seamless and efficient on-boarding experience for our mutual customers.

For help on how to create new reservations, please follow the steps outlined in the [Create a reservation](https://help.mews.com/s/article/create-a-reservation?language=en_US) guide.
If you'd like to double-check that you are correctly requesting all the reservations you want to retrieve, you can compare the API response to the Mews [Reservation Report](https://help.mews.com/s/article/reservation-report?language=en_US).
This report can easily be exported in various formats [following these steps](https://help.mews.com/s/article/schedule-report-exports?language=en_US).

For testing Webhooks or WebSockets, set up your system to start listening for events, then manually trigger an event, e.g. update an element within a reservation.

