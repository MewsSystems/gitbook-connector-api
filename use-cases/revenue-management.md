## Revenue management

Revenue management systems obtain information about reservations, revenue and pricing from Mews. Based on this data, they may recommend or directly update rate prices, give future revenue estimates, predict occupancy etc. In bigger hotels, there might be more than 50k reservations in a year, so it is necessary to always limit the operations in terms of potential data size, in order to avoid timeouts, network errors etc. A recommended approach, how to implement a RMS client is described below. Following these guidelines should ensure that both our servers and RMS clients are not unnecessarily overutilized.

### Initial data pull

Performed once when setting up the connection, because the RMS needs to obtain historical data. RMS should obtain the reservations in time-limited batches using [Get all reservations](../operations/reservations.md#get-all-reservations) with [Reservation time filter](../operations/reservations.md#reservation-time-filter) set to `Start` \(that will give you all reservations with arrival time colliding with the selected interval\). Size of the batches depends on size of the hotel and its occupancy, but in general **weekly batches** are recommended and should work well even for big hotels \(1000+ units\). In order to get reservations e.g. in the past year, RMS should call [Get all reservations](../operations/reservations.md#get-all-reservations) sequentially 52 times \(one call for each week in the past year\). That would give RMS all reservations that have arrival within the past year. To obtain revenue items associated with reservations, `Items` should be set to `true` in the `Extent` parameter. Please note that there are four states in which reservation `Items` will be returned, listed below along with their meaning:

* Open: Items which have not been closed on a specific bill.
* Closed: Items which have already been closed on a specific bill.
* Canceled: Items which have been canceled.
* Inactive: Items which are free or have amount value 0.

One can take advantage of the fact that reservations are usually booked a few weeks or months in advance. The further in future, the lower the occupancy, so the reservation batch length may increase with the distance to future from current date. E.g. weekly batches can be used only for the first three months of the future year when there is higher occupancy. And for the remaining 9 months, monthly batches would be sufficient. This would reduce the operation count from 52 to 21 \(12 weekly batches + 9 monthly batches\).

Sometimes the data obtained through the previous two steps are not sufficient enough for RMS. So additionally, RMS can pull e.g. business segments via [Get all business segments](../operations/services.md#get-all-business-segments) or rates via [Get all rates](../operations/services.md#get-all-rates). Note that it is important to get the reservations and revenue first and the additional data later after that. If done the other way around, it might happen that RMS would receive a reservation with e.g. `RateId` which does not correspond to any rate that was pulled beforehand. Rates, business segments etc. are dynamic and hotel employees could create a new one and assign it to a reservation right before the reservation gets pulled to RMS.

### Periodic future update

Performed periodically after the connection is set up so that RMS has future reservations and revenue up to date. Length of the period is not specified, but it is recommended to update the future data once or twice a day. If you need to get the reservation changeset more frequently, you should use the [Get all reservations](../operations/reservations.md#get-all-reservations) with the [Reservation time filter](../operations/reservations.md#reservation-time-filter) set to `Updated`. That gives you just reservations that were created or updated within the specified interval.

### Rate pricing

To know the data about the rates of the enterprise, there are two relevant operations. [Get all rates](../operations/services.md#get-all-rates) can give you information about the names \(and ids\) of the rates in the property, their status, rate groups and restrictions. [Get rate pricing](../operations/services.md#get-rate-pricing) gives you the pricing of specific rate for a specific time period. In order to update rate prices, [Update rate price](../operations/services.md#update-rate-price) operation be used. Individual rate, resource category and time span can be chosen.

### Occupancy

When calculating occupancy, it is important to take hierarchy of resources into account. For example if there is a reservation for whole dorm, it occupies the dorm but also all child resources in the hierarchy \(the beds\). And vice versa, if there is a bed reservation, it occupies the bed but also all parent resources \(the dorm\). We consider a resource occupied if there is a reservation colliding with interval 18:00 to 24:00 on that day. So e.g. reservation from 14:00 to 16:00 is not calculated towards occupancy.

### Testing your integration

Once your integration is completed, all endpoints should be tested prior to initiating the [certification process](https://intercom.help/mews-systems/en/articles/4497819-connector-api-certification-what-to-expect) with the Mews Marketplace team. Testing your solution is done directly in the Connector API demo. You should use the credentials found in the [Authentication](../guidelines.md#authentication) section to sign in as an end-user. This allows you to fully understand how both systems will be used by the property and gives you additional information to ensure you provide a seamless and efficient onboarding experience for our hoteliers.

For help on how to create new reservations, please follow the steps outlined in [this guide](https://help.mews.com/en/articles/4245573-create-a-reservation).

If you'd like to double-check that you are correctly requesting all the reservations you want to retrieve, you can compare the API response to the [Mews Reservation Report](https://help.mews.com/en/articles/4245884-reservation-report). This report can easily be exported in various formats [following these steps](https://help.mews.com/en/articles/4245871-schedule-report-exports).

