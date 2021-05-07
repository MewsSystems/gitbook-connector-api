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

## Coproducts

To model that structure of some general object can change based on the particular type we're using `Coproducts` (also called `Discriminated unions`, `Sum types` or `Or types`).

For example take a look at bookable [Resource](../operations/enterprises.md#resource). We currently support just spaces (rooms, beds in hotels), but we strive to include other types of resources like objects or persons soon. That means that basic properties like `Id` or `Name` can be shared across the different resource subtypes, but others like `FloorNumber` only make sense in context of spaces. These specific fields are stored in coproduct object (in this example named `Data`) which stores the type of information in `Discriminator` property and the values as part of `Value` property.

```javascript
{
    "Id": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
    "IsActive": true,
    "Name": "101",
    "ParentResourceId": null,
    "State": "Dirty",
    "Descriptions": {},
    "Data": {
        "Discriminator": "Space",
        "Value": {
            "FloorNumber": "3",
            "LocationNotes": "A1"
        }
    },
    "CreatedUtc": "2016-03-29T15:14:06Z",
    "UpdatedUtc": "2016-03-29T15:14:06Z"
}
```
