## Revenue management

Revenue management systems obtain information about reservations, revenue and pricing from Mews. And based on the data they may recommend or directly update rate prices, give future revenue estimates, predict occupancy etc. In larger properties, where there are more than 50k reservations in a year, it is necessary to  limit the operations due to data size to avoid timeouts. A recommended approach, how to implement a RMS client is described below. Following these guidelines will ensure an efficient integration.

### Initial data pull

Performed once when setting up the connection. Because the RMS requires historical data. RMS should obtain the reservations in time-limited batches using [Get all reservations](../operations/reservations.md#get-all-reservations) with [Reservation time filter](../operations/reservations.md#reservation-time-filter) set to `Start` \(that will give you all reservations with arrival time colliding with the selected interval\). Size of the batches depends on size of the hotel and its occupancy, but in general **weekly batches** are recommended and should work well even for larger hotels \(1000+ units\). In order to get reservations spanning over the past 12 months, RMS should call [Get all reservations](../operations/reservations.md#get-all-reservations) sequentially 52 times \(one call for each week in the past 12 months\). That will provide the RMS all reservations that had an arrival date within the past year. To obtain revenue items associated with reservations, `Items` should be set to `true` in the `Extent` parameter.

One can take advantage of the fact that reservations are usually booked a few weeks or months in advance. The further in future, the lower the occupancy, so the reservation batch length may increase with the distance to future from current date. E.g. weekly batches can be used only for the first three months of the future year when there is higher occupancy. And for the remaining 9 months, monthly batches would be sufficient. This will reduce the operation count from 52 to 21 \(12 weekly batches + 9 monthly batches\).

If the data pulled in the previous steps is not sufficient, RMS can pull e.g. business segments via [Get all business segments](../operations/services.md#get-all-business-segments) or rates via [Get all rates](../operations/services.md#get-all-rates). 
**Note: it is important to get the reservations and revenue first and the additional data later after that.** 
If done the other way around, there is a possibility that the RMS receives a reservation with a `RateId` which does not correspond to any rate that was pulled beforehand. Rates and business segments are dynamic and hotel employees could create a new one and assign it to a reservation right before the reservation gets pulled to RMS.

### Periodic future update

Performed periodically after the connection is set up so that RMS has future reservations and revenue up to date. Length of the period is not specified, but it is recommended to update the future data once or twice a day. If you need to get the reservation changeset more frequently, you should use the [Get all reservations](../operations/reservations.md#get-all-reservations) with the [Reservation time filter](../operations/reservations.md#reservation-time-filter) set to `Updated`. That gives you just reservations that were created or updated within the specified interval.

### Rate pricing

To receive data about the rate of the enterprise, there are two relevant operations. [Get all rates](../operations/services.md#get-all-rates) can give you information about the names \(and ids\) of the rates in the property, their status, rate groups and restrictions. [Get rate pricing](../operations/services.md#get-rate-pricing) gives you the pricing of specific rate for a specific time period. In order to update rate prices, [Update rate price](../operations/services.md#update-rate-price) operation be used. Individual rate, room category and time span can be chosen.

### Restrictions

To receive information about restrictions, please use [Get all restrictions](../) which returns all restrictions of a service.

RMSs can also add and remove restrictions by calling [Add restrictions](../operations/services#add-restrictions) - adds new restrictions and [Delete restrictions](../operations/services#delete-restrictions) - removes restrictions.

### Occupancy

When calculating occupancy, it is important to take hierarchy of spaces into account. For example if there is a reservation for whole dorm, it occupies the dorm but also all child spaces in the hierarchy \(the beds\). And vice versa, if there is a bed reservation, it occupies the bed but also all parent spaces \(the dorm\). We consider a space occupied if there is a reservation colliding with interval 18:00 to 24:00 on that day. So e.g. reservation from 14:00 to 16:00 is not calculated towards occupancy.
