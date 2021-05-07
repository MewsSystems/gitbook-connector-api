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

To model the structure of some general object, the characteristic of which can differ based on the specified type, we use `Coproducts` (also called `Discriminated unions`, `Sum types` or `Or types`).

For example, take a look at bookable [Resource](../operations/enterprises.md#resource)s. We currently support just one subtype - spaces (rooms, beds in hotels). Looking forward, we strive to include other types of resources like objects or persons soon. This means that basic properties such as `Id` or `Name` can be shared across the different resource subtypes, but others such as `FloorNumber` only make sense in context of spaces. These specific fields are stored in the coproduct object (in this example named `Data`) which stores the type of information in the `Discriminator` property and the values as part of the `Value` property.

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
