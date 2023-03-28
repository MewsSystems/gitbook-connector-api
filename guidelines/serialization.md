# Serialization

## Datetimes

Some operations of the API accept datetimes in their parameters or return them in their results. Datetime is represented as a `string`, following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) formatting rules. Moreover, it should always be in [UTC](https://en.wikipedia.org/wiki/ISO_8601#UTC) so that it is clear which instant it represents and there is no room for confusion. This means the standard format for datetime used throughout the API is `YYYY-MM-DDThh:mm:ssZ`.

> ### Example 1
> A date and time of 7:12am on March 22nd 2023 local time in Chicago (UTC-5), would be represented as:
> * `2023-03-22T12:12:00Z`

Where only a date is needed, this is also usually represented with standard datetime, but in this case the time component is set to zero, i.e. `00:00:00`.
Note however that when adjusted from local time to UTC, the time may become non-zero.

> ### Example 2
> A date-only of March 22nd 2023 local time in Chicago (UTC-5), would be represented as:
> * `2023-03-22T05:00:00Z`

Note that adjusting from local time to UTC can also shift the date.

> ### Example 3
> A date-only of March 22nd 2023 local time in Beijing (UTC+8), would be represented as:
> * `2023-03-21T16:00:00Z`

The API frequently uses time intervals, i.e. periods of time defined by a start datetime and an end datetime, as usual expressed in UTC. These time intervals are inclusive, meaning that the interval includes the start and end as part of the interval. For example, an interval with start of January 1st and end of January 5th includes the 1st, 2nd, 3rd, 4th and 5th. The datetimes used to define a time interval follow all the normal rules for datetimes, as described above.

> ### Example 4
> A date-only time interval of March 20th to March 23rd 2023 (including the 20th, 21st, 22nd and 23rd) local time in Beijing (UTC+8), would be represented as:
> * StartUtc `2023-03-19T16:00:00Z`
> * EndUtc `2023-03-22T16:00:00Z`

## Durations

Some operations of the API accept durations in their parameters or return them in their results. Duration is represented as a `string`, following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) formatting rules.

As an example, consider minimum and maximum length of the reservation:

* MinLength `P0Y0M1DT0H0M0S`
* MaxLength `P0Y0M3DT0H0M0S`

## Update values

```javascript
{
    "UpdateValue": {
        "Value": "SampleValue"
    }
}
```

To update or remove a value of a property, we use the structure called `Update value`, which allows us to distinguish if you want to set a new value, keep the old one or completely remove it (if the property is nullable).

Therefore, there is no need to resend unchanged values. This also reduces the possibility of concurrency errors - resending all values (of which only few has actually changed) might overwrite other changes done by other users or integration partner.

Example usages: 
* To keep a current property value, do *not* send the `Update value` object at all.
* To set a new property value, provide it as a `Value` parameter of `Update value` object.
* To remove an old value, send `null` inside the `Value` parameter of `Update value` object.

```javascript
{
    "PropertyWithoutChange": null,
    "PropertyWithNewValue": {
        "Value": "NewValue"
    },
    "PropertyWithDeletedValue": {
        "Value": null
    }
}

```

## Coproducts

```javascript
{
    "Coproduct": {
        "Discriminator": "TypeOfValue",
        "Value": {
            "TypeSpecificProperty": "SampleValue"
        }
    }
}
```

To model the structure of some general object, the characteristic of which can differ based on the specified type, we use `Coproducts` (also called `Discriminated unions`, `Sum types` or `Or types`).

For example, take a look at bookable [Resources](../operations/resources.md#resource). We currently support just one subtype - spaces (rooms, beds in hotels). Looking forward, we strive to include other types of resources like objects or persons soon. This means that basic properties such as `Id` or `Name` can be shared across the different resource subtypes, but others such as `FloorNumber` only make sense in context of spaces. These specific fields are stored in the coproduct object (in this example named `Data`) which stores the type of information in the `Discriminator` property and the values as part of the `Value` property.

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
