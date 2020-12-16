## Revenue management

Revenue management systems obtain information about reservations, revenue and pricing from Mews. Based on this data, they may recommend or directly update rate prices, give future revenue estimates, predict occupancy etc. In bigger hotels, there might be more than 50k reservations in a year, so it is necessary to always limit the operations in terms of potential data size, in order to avoid timeouts, network errors etc. A recommended approach, how to implement a RMS client is described below. Following these guidelines should ensure that both our servers and RMS clients are not unnecessarily overutilized.

### Initial data pull

Performed once when setting up the connection, because the RMS needs to obtain historical data. RMS should obtain the reservations in time-limited batches using [Get all reservations](../operations/reservations.md#get-all-reservations) with [Reservation time filter](../operations/reservations.md#reservation-time-filter) set to `Start` \(that will give you all reservations with arrival time colliding with the selected interval\). Size of the batches depends on size of the hotel and its occupancy, but in general **weekly batches** are recommended and will work well even for big hotels \(1000+ units\). In order to get reservations e.g. in the past year, RMS should call [Get all reservations](../operations/reservations.md#get-all-reservations) sequentially 52 times \(one call for each week in the past year\). That would give the RMS all reservations that have arrival within the past year. To obtain revenue items associated with reservations, `Items` should be set to `true` in the `Extent` parameter. Please note that there are four accounting item states in which reservation `Items` will be returned. See [Accounting item state](../operations/finance.md#accounting-item-state) for the specific definitions.

One can take advantage of the fact that reservations are usually booked a few weeks or months in advance. The further in future, the lower the occupancy, so the reservation batch length may increase with the distance to future from current date. E.g. weekly batches can be used only for the first three months of the future year when there is higher occupancy. And for the remaining 9 months, monthly batches would be sufficient. This will reduce the operation count from 52 to 21 \(12 weekly batches + 9 monthly batches\).

If the data pulled in the previous steps is not sufficient, RMS can pull e.g. business segments via [Get all business segments](../operations/services.md#get-all-business-segments) or rates via [Get all rates](../operations/services.md#get-all-rates). 

**Note: it is important to get the reservations and revenue first and the additional data later after that.** 
If done the other way around, there is a possibility that the RMS receives a reservation with a `RateId` which does not correspond to any rate that was pulled beforehand. Rates and business segments are dynamic and hotel employees could create a new one and assign it to a reservation right before the reservation gets pulled to the RMS.

### Periodic updates and syncing reservation data

To keep reservations up-to-date and synced across your systems in real time, first cache the reservation data retrieved from the initial reservation data pull. Then use [WebSockets](../websockets.md) to listen for [Reservation Events](../websockets.md#reservation-event). 

Each time you receive a ReservationId from the Reservation event WebSocket message, retrieve said reservation with [Get all reservations](../operations/reservations.md#get-all-reservations), filtering by the `ReservationIds` obtained from the WebSocket message. 

In case of WebSocket disconnection, use [Get all reservations](../operations/reservations.md#get-all-reservations) to perform a full resync of reservations that have been updated within the time period since the last full reservation data pull. Suggested frequency is 30 minutes for business intelligence solutions. Adjust the frequency of the periodic reservation syncing depending your use case. For example, a mobile key integration would rely more on real-time accuracy of reservation data to provide correct door access to the guest, whereas a 30-minute to one-hour (or longer) interval reservation synce might suffice for a business intelligence solution aimed at providing daily statistical insight to a property's business operations.

### Rate pricing

To know the data about the rates of the enterprise, there are two relevant operations. [Get all rates](../operations/services.md#get-all-rates) can give you information about the names \(and ids\) of the rates in the property, their status, rate groups and restrictions. [Get rate pricing](../operations/services.md#get-rate-pricing) gives you the pricing of specific rate for a specific time period. In order to update rate prices, [Update rate price](../operations/services.md#update-rate-price) operation be used. Individual rate, resource category and time span can be chosen.

To avoid heavy consumption of API resources, while keeping rate price data up-to-date in real time, use WebSockets to listen for [Price update events](../websockets.md#price-update-event). Then retrieve information about the relevant rates using [Get rate pricing](../operations/services.md#get-rate-pricing), filtering by the relevant Rate Id.

### Restrictions

To receive information about restrictions, please use [Get all restrictions](../operations/services.md#get-all-restrictions) which returns all restrictions of a service.

RMSs can also add and remove restrictions by calling [Add restrictions](../operations/services.md#add-restrictions) - adds new restrictions and [Delete restrictions](../operations/services.md#delete-restrictions) - removes restrictions.

### Occupancy

When calculating occupancy, it is important to take hierarchy of resources into account. For example if there is a reservation for whole dorm, it occupies the dorm but also all child resources in the hierarchy \(the beds\). And vice versa, if there is a bed reservation, it occupies the bed but also all parent resources \(the dorm\). We consider a resource occupied if there is a reservation colliding with interval 18:00 to 24:00 on that day. So e.g. reservation from 14:00 to 16:00 is not calculated towards occupancy.

### Testing your integration

Once your integration is completed, all endpoints should be tested prior to initiating the certification process.(https://intercom.help/mews-systems/en/articles/4497819-connector-api-certification-what-to-expect) with the Mews Marketplace team. Testing your solution is done directly in the Connector API demo. You should use the credentials found in the [Authentication](../guidelines.md#authentication) section to sign in as an end-user. This allows you to fully understand how both systems will be used by the property and gives you additional information to ensure you provide a seamless and efficient onboarding experience for our mutual customers.

For help on how to create new reservations, please follow the steps outlined in [this guide](https://help.mews.com/en/articles/4245573-create-a-reservation).

If you'd like to double-check that you are correctly requesting all the reservations you want to retrieve, you can compare the API response to the [Mews Reservation Report](https://help.mews.com/en/articles/4245884-reservation-report). This report can easily be exported in various formats [following these steps](https://help.mews.com/en/articles/4245871-schedule-report-exports).

For testing WebSockets, set up your WebSocket client to start listening for events, then manually trigger an event (e.g. update an element of a reservation) to receive the message.

