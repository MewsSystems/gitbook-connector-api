# Time units

Bookable Services are booked in terms of integer multiples of standard `time units`. The length of a time unit depends on the particular service and is given by `time unit period`, which can be obtained through [Get all services](#get-all-services). For example, a service with a time unit period of "Day" can be booked in multiples of days. This is equivalent to booking a hotel room stay for a specified number of days or a specified number of nights.

A monthly time unit, i.e. a time unit with time unit period of "Month", starts at midnight on the first day of the month and ends at midnight on the first day of the following month.

The service is not assumed to start at the beginning of a time unit, e.g. 00:00 midnight for a "Day", nor end at the end of a time unit, e.g. the following midnight. Instead we define `StartOffset` as the offset from the beginning of the time unit at which the service starts, and `EndOffset` as the offset from the end of the time unit at which the service actually ends - see the illustrations below. Similarly, `OccupancyStartOffset` and `OccupancyEndOffset` define the offsets for which the service is considered occupied.

A positive value for `EndOffset` is normal for a nightly stay and implies that the service ends on the following morning. A negative value for `EndOffset` can be used to specify a daytime service that ends before the end of the day.

#### Figure 1: Illustration of a nightly service
![](../.gitbook/assets/timeunits-connector-night.png)

#### Figure 2: Illustration of a daytime service
![](../.gitbook/assets/timeunits-connector-day.png)
