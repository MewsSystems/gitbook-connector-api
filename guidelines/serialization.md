# Serialization

## Datetimes

Some operations of the API accept datetimes in their parameters or return them in their results. The datetimes are represented as `string`s following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) formatting rules. Moreover, they should always be in [UTC](https://en.wikipedia.org/wiki/ISO_8601#UTC) so that it is clear which instant they represent and there is no room for confusion. Putting this all together means that the expected format of datetimes is `YYYY-MM-DDThh:mm:ssZ`. This format is also used in return values.

As an example, consider an operation that takes datetime interval in its parameters. And let's say we want to fully cover 1st and 2nd of January 2017 in an enterprise that is located in timezone UTC+2. Then the interval in the local time is:

* Start `2021-01-01T00:00:00+02:00`
* End `2021-01-03T00:00:00+02:00`

In order to pass this interval to the API, it has to be converted to UTC:

* StartUtc `2020-12-31T22:00:00Z`
* EndUtc `2021-01-02T22:00:00Z`

## Durations

Some operations of the API accept durations in their parameters or return them in their results. The durations are represented as `string`s following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) formatting rules.

As an example, consider minimum and maximum length of the reservation:

* MinLength `P0Y0M1DT0H0M0S`
* MaxLength `P0Y0M3DT0H0M0S`
