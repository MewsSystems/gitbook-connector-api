# Revenue management

A Revenue Management System (RMS) optimizes occupancy and rates to achieve maximum total revenue for a property. To do this, a Revenue management integration fetches information about reservations, revenue and pricing from Mews, and then based on this data may recommend new rates, or directly update the rates, and estimates future revenue and occupancy. In bigger properties, there may be more than 50,000 reservations in a year, so it is necessary to limit operations in terms of potential data size, in order to avoid timeouts, network errors, etc. A recommended approach for implementing a Revenue management integration is described below. Following these guidelines should ensure that both our servers and those of the RMS are not unnecessarily overburdened.

## Initial data pull

> **Data export:** See also [Bulk data export](#bulk-data-export) below.

An initial data pull is performed once when setting up the connection, because the RMS needs to obtain historical data on which to base its calculations.

### Fetching reservations

The RMS should fetch the reservations in time-limited batches using [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06), with [`TimeFilter`](../operations/reservations.md#reservation-time-filter) set to `Start`. That will give you all reservations with an arrival time colliding with the selected interval. The optimum size of the batches depends on the size of the property and its occupancy, but in general **weekly batches** are recommended and will work well even for big hotels of 1000+ units. For example, in order to get reservations for the past year, the RMS should call [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) sequentially 52 times, with one call for each week in the past year. That would give the RMS all reservations that have an arrival within the past year.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get historical reservations data | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) |

You can take advantage of the fact that reservations are usually booked a few weeks or months in advance. The further in future, the lower the occupancy, so the reservation batch length may increase with the distance to future from the current date. For example, weekly batches can be used only for the first three months of the future year when there is higher occupancy. And for the remaining 9 months, monthly batches would be sufficient. This will reduce the operation count from 52 to 21 \(12 weekly batches + 9 monthly batches\).

### Fetching rates and other data

The RMS can also pull business segments via [Get all business segments](../operations/businesssegments.md#get-all-business-segments) and rates via [Get all rates](../operations/rates.md#get-all-rates). To obtain revenue items associated with reservations, use [Get all order items](../operations/orderitems.md#get-all-order-items). Information about resource blocks, e.g. rooms out of order, can be requested using [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks). If you are managing availability blocks, see the [Events](events.md#managing-group-reservations-with-availability-blocks) use case for information on relevant operations.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get all configured business segments | [Get all business segments](../operations/businesssegments.md#get-all-business-segments) |
| How to get all configured rates and rate groups | [Get all rates](../operations/rates.md#get-all-rates) |
| How to get order items linked to a reservation | [Get all order items](../operations/orderitems.md#get-all-order-items) |
| How to get information about out-of-order blocks | [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) |

> **Terminology:** For an explanation of terms such as _business segment_, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

### Fetching data in the right order

It is important to get the reservations and revenue first and the additional data afterwards. If done the other way around, there is a possibility that the RMS receives a reservation with a `RateId` which does not correspond to any rate that was pulled beforehand. Rates and business segments are dynamic and hotel employees could create a new one and assign it to a reservation just before the reservation gets pulled to the RMS.

## Bulk data export

As an alternative to making conventional API requests using [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06), we provide a bulk [Data export](data-export.md) feature.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to create a bulk data export | [Add export](../operations/exports.md#add-export) |
| How to check on data export progress | [Get all exports](../operations/exports.md#get-all-exports) |

## Periodic updates and syncing data

To keep reservations up-to-date and synced across your systems in real time, first cache the reservation data retrieved from the initial reservation data pull, then use [General Webhooks](../webhooks/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../websockets/README.md) \(`Reservation` event\) to listen for reservation events. When you receive a reservation event, use the reservation `Id` obtained from the event to fetch the details of the reservation with [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06).

> **WebSocket disconnection:** In case of WebSocket disconnection, use [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) with `UpdatedUtc` to perform a full resync of reservations that have been updated within the time period since the last full reservation data pull.

The suggested frequency for periodic reservation syncing is 30 minutes for business intelligence solutions. Adjust the frequency depending on your use case. For example, a mobile key integration would rely more on real-time accuracy of reservation data to provide correct door access to the guest, whereas a thirty-minute to one-hour (or longer) interval period might suffice for a business intelligence solution aimed at providing daily statistical insight to a property's business operations.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to listen for changes to reservations | [General Webhooks](../webhooks/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../websockets/README.md) \(`Reservation` event\) |
| How to get reservation details | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) |

## Rate pricing

To get rate information, there are two relevant operations. [Get all rates](../operations/rates.md#get-all-rates) gives you information about the names and IDs of the rates in the property, and their status, and also rate groups and restrictions. [Get rate pricing](../operations/rates.md#get-rate-pricing) gives you the pricing of a specific rate for a specific time period. In order to update rate prices, use [Update rate price](../operations/rates.md#update-rate-price). Individual rate, resource category and time span can be selected. To avoid heavy consumption of API resources, while keeping rate price data up-to-date in real time, use [WebSockets](../websockets/README.md) to listen for `PriceUpdate` events. Then retrieve information about the relevant rates using [Get rate pricing](../operations/rates.md#get-rate-pricing), filtering by the relevant `RateId`.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get all configured rates and rate groups | [Get all rates](../operations/rates.md#get-all-rates) |
| How to get the price for a specific rate and time period | [Get rate pricing](../operations/rates.md#get-rate-pricing) |
| How to listen for changes to rate prices | [WebSockets](../websockets/README.md) \(`PriceUpdate` event\) |

## Restrictions

To retrieve information about restrictions, use [Get all restrictions](../operations/restrictions.md#get-all-restrictions). Revenue management integrations can also add and remove restrictions using [Add restrictions](../operations/restrictions.md#add-restrictions) and [Delete restrictions](../operations/restrictions.md#delete-restrictions), or newer operations [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get service restrictions | [Get all restrictions](../operations/restrictions.md#get-all-restrictions) |
| How to add or remove restrictions (old) | [Add restrictions](../operations/restrictions.md#add-restrictions), [Delete restrictions](../operations/restrictions.md#delete-restrictions) |
| How to add or remove restrictions (new) | [Set restrictions](../operations/restrictions.md#set-restrictions), [Clear restrictions](../operations/restrictions.md#clear-restrictions) |

> **Restrictions operations:** [Add restrictions](../operations/restrictions.md#add-restrictions) and [Delete restrictions](../operations/restrictions.md#delete-restrictions) are being replaced in the API by the more efficient [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions).
> Refer to the documentation for the individual operations for an explanation of the workings of these operations. Do not mix them, use _Add restrictions_ with _Delete restrictions_, or _Set restrictions_ with _Clear restrictions_. Note that as an integration partner you can only set and clear your own restrictions, independently of restrictions set within the user interface of **Mews Operations** or indeed by other API users.

## Occupancy

When calculating occupancy, it is important to take the hierarchy of resources into account. For example, if there is a reservation against a dormitory (or dorm), then not only is the dormitory occupied but also the beds which are child resources of the dormitory. And vice versa, if a bed in a dorm is occupied, then the dorm is also occupied.

## Testing your integration

Once your integration is completed, all operations should be tested prior to initiating the [Certification process](https://help.mews.com/s/article/connector-api-certification-what-to-expect?language=en_US) with the **Mews Marketplace** team. Testing your solution is done directly in the Connector API Demo environment. You should use the credentials found in [Environments](../guidelines/environments.md) to sign in as an end-user. This allows you to understand how both your system and the Mews system will be used by the property and gives you additional information to ensure you can provide a seamless on-boarding experience for our customers.

For help on how to create new reservations, please follow the steps outlined in the [Create a reservation](https://help.mews.com/s/article/create-a-reservation?language=en_US) guide. If you'd like to double-check that you are correctly requesting all the reservations you want to retrieve, you can compare the API response to the Mews [Reservation Report](https://help.mews.com/s/article/reservation-report?language=en_US). This report can easily be exported in various formats following the steps in [Scheduling report exports](https://help.mews.com/s/article/schedule-report-exports?language=en_US).

For testing Webhooks or WebSockets, set up your system to start listening for events, then manually trigger an event, e.g. update any element within a reservation.

## Additional help

> **Help Guides**:
> * [Create a reservation](https://help.mews.com/s/article/create-a-reservation?language=en_US)
> * [Reservation Report](https://help.mews.com/s/article/reservation-report?language=en_US)
> * [Scheduling report exports](https://help.mews.com/s/article/schedule-report-exports?language=en_US)
> * [Understanding restrictions](https://help.mews.com/s/article/Understanding-restrictions-in-Mews-Operations?language=en_US)
