# Services

## Get all services

Returns all services offered by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/services/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "Services": [
        {
            "EndTime": null,
            "Id": "fc79a518-bc69-45b8-93bd-83326201bd14",
            "IsActive": true,
            "Name": "Restaurant",
            "StartTime": null,
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false,
                "DuringCheckOut": false
            },
            "Type": "Orderable"
        },
        {
            "EndTime": "PT12H",
            "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Accommodation",
            "StartTime": "PT14H",
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false,
                "DuringCheckOut": false
            },
            "Type": "Reservable"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Services` | array of [Service](services.md#service) | required | Services offered by the enterprise. |

#### Service

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the service. |
| `IsActive` | boolean | required | Whether the service is still active. |
| `Name` | string | required | Name of the service. |
| `StartTime` | string | optional | Default start time of the service orders in ISO 8601 duration format. |
| `EndTime` | string | optional | Default end time of the service orders in ISO 8601 duration format. |
| `Promotions` | [Promotions](services.md#promotions) | required | Promotions of the service. |
| `Type` | string [Service type](services.md#service-type) | required | Type of the service. |

#### Promotions

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `BeforeCheckIn` | boolean | required | Whether it can be promoted before check-in. |
| `AfterCheckIn` | boolean | required | Whether it can be promoted after check-in. |
| `DuringStay` | boolean | required | Whether it can be promoted during stay. |
| `BeforeCheckOut` | boolean | required | Whether it can be promoted before check-out. |
| `AfterCheckOut` | boolean | required | Whether it can be promoted after check-out. |
| `DuringCheckOut` | boolean | required | Whether it can be promoted during check-out. | 

#### Service type

* `Reservable`
* `Orderable`

## Get all availability blocks

Returns all availability blocks filtered by services, unique identifiers and other filters.

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "AvailabilityBlockIds": [
        "aaaa654a4a94-4f96-9efc-86da-bd26d8db"
    ],
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "CreatedUtc" : {
        "StartUtc": "2020-11-05T00:00:00Z",
        "EndUtc": "2020-11-05T00:00:00Z"
    },
    "UpdatedUtc" : {
        "StartUtc": "2020-11-05T00:00:00Z",
        "EndUtc": "2020-11-05T00:00:00Z"
    },
    "CollidingUtc" : {
        "StartUtc": "2020-11-05T00:00:00Z",
        "EndUtc": "2020-11-05T00:00:00Z"
    },
    "ExternalIdentifiers": [
        "Block-0001"
    ],
    "Extent": {
        "AvailabilityBlocks": true,
        "Adjustments": true,
        "ServiceOrders": false
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AvailabilityBlockIds` | string | optional, max 1000 items | Unique identifiers of the requested [Availability block](#availability-block)s. |
| `ServiceIds` | string | optional, max 1000 items | Unique identifiers of the [Service](services.md#service)s to which [Availability block](#availability-block)s are assigned. |
| `CreatedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Availability block](#availability-block)s were crated. |
| `UpdatedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Availability block](#availability-block)s were updated. |
| `CollidingUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Availability block](#availability-block)s are active. |
| `ExternalIdentifiers` | string | optional, max 1000 items | Identifiers of [Availability block](#availability-block)s from external systems |
| `Extent` | [Availability block extent](#availability-block-extent) | required | Extent of data to be returned. E.g. it is possible to specify that related service orders (for example [Reservation](reservations.md#reservation)s) are returned. |

#### Availability block extent

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `AvailabilityBlocks` | bool | optional | Whether the response should contain the general availability blocks. |
| `Adjustments` | bool | optional | Whether the response should contain individual availability adjustments related to availability blocks. |
| `ServiceOrders` | bool | optional | Whether the response should contain reservations related to availability blocks. |

### Response

```javascript
{
    "AvailabilityBlocks": [
        {
            "Id": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "StartUtc": "2020-11-05T00:00:00Z",
            "EndUtc": "2020-11-06T00:00:00Z",
            "ReleasedUtc": "2020-11-04T00:00:00Z",
            "ExternalIdentifier": "Block-0001"
        }
    ],
    "ServiceOrders": [
        {
            "Id": "5281b551-bd90-4def-b211-acbd00d3ac8c",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "GroupId": "edad92db-0b60-4b91-a090-acbd00d3ac75",
            "Number": "61",
            "ChannelNumber": "68845CDD-1340-49B5-9071-ACBD00B1D091",
            "ChannelManagerNumber": null,
            "ChannelManagerGroupNumber": null,
            "ChannelManager": null,
            "State": "Confirmed",
            "Origin": "Connector",
            "CreatedUtc": "2020-11-05T12:50:40Z",
            "UpdatedUtc": "2020-11-06T07:59:19Z",
            "CancelledUtc": null,
            "StartUtc": "2020-11-05T00:00:00Z",
            "EndUtc": "2020-11-06T00:00:00Z",
            "ReleasedUtc": null,
            "RequestedCategoryId": "1268c440-21c5-415d-bf58-ac87008b2bda",
            "AssignedResourceId": "f97a6b96-b17f-421f-9b97-ac87008b3324",
            "AssignedResourceLocked": false,
            "BusinessSegmentId": null,
            "CompanyId": null,
            "TravelAgencyId": null,
            "AvailabilityBlockId": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
            "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "VoucherId": null,
            "AdultCount": 2,
            "ChildCount": 0,
            "CustomerId": "c2730cbc-53ca-440d-8b30-ac87008b30af",
            "CompanionIds": []
        }
    ],
    "Adjustments": [
        {
            "AvailabilityBlockId": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
            "ResourceCategoryId": "1268c440-21c5-415d-bf58-ac87008b2bda",
            "StartUtc": "2020-11-05T23:00:00Z",
            "EndUtc": "2020-11-06T23:00:00Z",
            "UnitCount": 6
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `AvailabilityBlocks` | array of [Availability block](#availability-block) | optional | Availability blocks. |
| `ServiceOrders` | array of [Reservation](reservations.md#reservation) | optional | Service orders (for example [Reservation](reservations.md#reservation)s) linked to availability blocks. |
| `Adjustments` | array of [Availability block adjustment](#availability-block-adjustment) | optional | Availability adjustments of availability blocks. |

#### Availability block

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the availability block. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) the block is assigned to. |
| `RateId` | string | required | Unique identifier of the [Rate](#rate) the block is assigned to. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `ReleasedUtc` | string | required | The moment when the block and its availability is released in UTC timezone in ISO 8601 format. |
| `ExternalIdentifier` | string | optional, max 255 characters | Identifier of the block from external system. |

#### Availability block adjustment

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `AvailabilityBlockId` | string | required | Unique identifier of the [Availability block](#availability-block) whose availability is updated. |
| `ResourceCategoryId` | string | required | Unique identifier of the [Resource category](enterprises.md#resource-category) whose availability is updated. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `UnitCount` | string | required | Adjustment value applied on the interval. |

## Add availability blocks

Adds availability blocks which are used to group related [Availability update](#availability-update)s. This makes limiting public availability easier and more organized.

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "AvailabilityBlocks": [
        {
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "StartUtc": "2020-11-05T00:00:00Z",
            "EndUtc": "2020-11-06T00:00:00Z",
            "ReleasedUtc": "2020-11-04T00:00:00Z",
            "ExternalIdentifier": "Block-0001"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AvailabilityBlocks` | array of [Availability block parameters](#availability-block-parameters) | required, max 1000 items | Availability blocks to be added. |

#### Availability block parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) to assign block to. |
| `RateId` | string | required | Unique identifier of the [Rate](#rate) to assign block to. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `ReleasedUtc` | string | required | The moment when the block and its availability is released. |
| `ExternalIdentifier` | string | optional, max 255 characters | Identifier of the block from external system. |

### Response

```javascript
{
    "AvailabilityBlocks": [
        {
            "Id": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "StartUtc": "2020-11-05T00:00:00Z",
            "EndUtc": "2020-11-06T00:00:00Z",
            "ReleasedUtc": "2020-11-04T00:00:00Z",
            "ExternalIdentifier": "Block-0001"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `AvailabilityBlocks` | array of [Availability block](#availability-block) | required | Availability blocks. |

## Delete availability blocks

Delete availability blocks.

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "AvailabilityBlockIds": [
        "e5a4654a4a94-86da-4f96-9efc-bd26d8db",
        "aaaa654a4a94-4f96-9efc-86da-bd26d8db"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AvailabilityBlockIds` | array of string | required, max 1000 items | Unique identifier of the Availability block to delete. |

### Response

```javascript
{}
```

## Get service availability

Returns availability of a reservable service in the specified interval including applied availability adjustments. The response contains availability for all dates that the specified interval intersects.

### Request

`[PlatformAddress]/api/connector/v1/services/getAvailability`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "StartUtc":"2017-01-01T00:00:00.000Z",
    "EndUtc":"2017-01-03T00:00:00.000Z"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) whose availability should be returned. |
| `StartUtc` | string | required, max length 3 months | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required, max length 3 months | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "CategoryAvailabilities": [
        {
            "Availabilities": [ 6, 7, 5 ],
            "Adjustments ": [ 0, 1, -1 ],
            "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f"
        },
        {
            "Availabilities": [ 7, 7, 7 ],
            "Adjustments ": [ 1, 0, -1 ],
            "CategoryId": "a0a7a5c5-c4ef-494a-8b34-6cca97629076"
        }
    ],
    "DatesUtc": [
        "2016-12-31T23:00:00Z",
        "2017-01-01T23:00:00Z",
        "2017-01-02T23:00:00Z"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CategoryAvailabilities` | array of [Resource category availability](#resource-category-availability) | required | Resource category availabilities. |
| `DatesUtc` | array of string | required | Covered dates in UTC timezone in ISO 8601 format. |

#### Resource category availability

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the [Resource category](enterprises.md#resource-category). |
| `Availabilities` | array of number | required | Absolute availabilities of the resource category in the covered dates. |
| `Adjustments` | array of number | required | Relative availability adjustments set for resource category in the covered dates. |

## Update service availability

Updates the number of available resources in [Resource category](enterprises.md#resource-category) by certain amount (relative adjustment). Note that availabilities are defined daily, so when the server receives the UTC interval, it first converts it to enterprise timezone and updates the price on all dates that the interval intersects. It's not allowed to update past availabilities outside of `EditableHistoryInterval`, future updates are allowed for up to 5 years.

### Request

`[PlatformAddress]/api/connector/v1/services/updateAvailability`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "AvailabilityUpdates": [
        {
            "StartUtc": "2020-10-05T00:00:00Z",
            "EndUtc": "2020-10-05T00:00:00Z",
            "AvailabilityBlockId": "23e85a44-d95a-4dcf-9f36-acb000b10abe",
            "ResourceCategoryId": "46bc1498-38cf-4d03-b144-aa69012f5d50",
            "UnitCountAdjustment": { "Value": 6 }
        },
        {
            "StartUtc": "2020-10-07T00:00:00Z",
            "EndUtc": "2020-10-08T00:00:00Z",
            "ResourceCategoryId": "46bc1498-38cf-4d03-b144-aa69012f5d50",
            "UnitCountAdjustment": { }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) to update. |
| `AvailabilityUpdates` | array of [Availability update](#availability-update) | required, max 1000 items | Availability updates. |

#### Availability update

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `AvailabilityBlockId` | string | optional | Unique identifier of the [Availability block](#availability-block) whose availability to update. |
| `ResourceCategoryId` | string | required | Unique identifier of the [Resource category](enterprises.md#resource-category) whose availability to update. |
| `UnitCountAdjustment` | [Number update value](reservations.md#number-update-value) | required | Adjustment value to be applied on the interval, can be both positive and negative (relative adjustment, not an absolute number). If specified without `Value` parameter, removes all adjustments within the interval. |

### Response

```javascript
{}
```

## Get all products

Returns all products offered together with the specified services.

### Request

`[PlatformAddress]/api/connector/v1/products/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Service](services.md#service)s. |

### Response

```javascript
{
    "Products": [
        {
            "Id": "198bc308-c1f2-4a1c-a827-c41d99d52f3d",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "CategoryId": null,
            "IsActive": true,
            "Name": "Breakfast",
            "ExternalName": "Breakfast",
            "ShortName": "BFST",
            "Description": "Nice continental breakfast.",
            "Charging": "PerPersonPerTimeUnit",
            "Posting": "Once",
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false,
                "DuringCheckOut": false
            },
            "Classifications": {
                "Food": false,
                "Beverage": false,
                "Wellness": false,
                "CityTax": false
            },
            "Price": {
                "Currency": "GBP",
                "NetValue": 7.5,
                "GrossValue": 9
                "TaxValues": [
                    {
                        "Code": "UK-S",
                        "Value": 1.50
                    }
                ],
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Products` | array of [Product](services.md#product) | required | Products offered with the service. |

#### Product

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service). |
| `CategoryId` | string | optional | Unique identifier of the Product category. |
| `IsActive` | boolean | required | Whether the product is still active. |
| `Name` | string | required | Name of the product.  |
| `ExternalName` | string | required | Name of the product meant to be displayed to customer. |
| `ShortName` | string | required | Short name of the product. |
| `Description` | string | optional | Description of the product. |
| `Charging` | string [Product charging](services.md#product-charging) | required | Charging of the product. |
| `Posting` | string [Product posting](services.md#product-posting) | required | Posting of the product. |
| `Promotions` | [Promotions](services.md#promotions) | required | Promotions of the service. |
| `Classifications` | [Product classifications](services.md#product-classifications) | required | Classifications of the service. |
| `Price` | [Currency value](finance.md#currency-value) | required | Price of the product. |

#### Product charging

* `Once`
* `PerTimeUnit`
* `PerPersonPerTimeUnit`
* `PerPerson`

#### Product posting

* `Once`
* `Daily`

#### Product classifications

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Food` | boolean | required | Product is classified as food. |
| `Beverage` | boolean | required | Product is classified as beverage. |
| `Wellness` | boolean | required | Product is classified as wellness. |
| `CityTax` | boolean | required | Product is classified as city tax. |

## Get all rules

Returns all rules applied with the reservations.

### Request

`[PlatformAddress]/api/connector/v1/rules/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "Extent": 
    {
        "RuleActions": true,
        "Rates": true,
        "RateGroups": true,
        "ResourceCategories": true,
        "BusinessSegments": true
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Service](#service)s. |
| `Extent` | [Rule extent](#rule-extent) | required | Extent of data to be returned. |

#### Rule extent

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `RuleActions` | bool | optional | Whether the response should contain rule actions. |
| `Rates` | bool | optional | Whether the response should contain rates. |
| `RateGroups` | bool | optional | Whether the response should contain rate groups. |
| `ResourceCategories` | bool | optional | Whether the response should contain rate resource categories. |
| `BusinessSegments` | bool | optional | Whether the response should contain business segments. |

### Response

```javascript
{
    "Rules": [
        {
            "Id": "13638b12-53f1-4b35-baab-ac1e006ed8cb",
            "Conditions": {
                "RateId": {
                    "Value": "8a13f4e8-0274-4bcc-b2d4-ac1c00d1cd3f",
                    "ConditionType": "Equals"
                },
                "RateGroupId": null,
                "BusinessSegmentId": null,
                "ResourceCategoryId": null,
                "ResourceCategoryType": null,
                "Origin": {
                    "Value": "Connector",
                    "ConditionType": "NotEquals"
                },
                "MinimumTimeUnitCount": null,
                "MaximumTimeUnitCount": null
            }
        }
    ],
    "RuleActions": [
        {
            "Id": "307e75a6-2cc8-4226-a600-ac1e006fbdb9",
            "RuleId": "13638b12-53f1-4b35-baab-ac1e006ed8cb",
            "Data": {
                "Discriminator": "Product",
                "Value": {
                    "ProductId": "122fd92d-c561-4995-8ebc-ac1c00d1eaa8",
                    "ActionType": "Add"
                }
            }
        }
    ],
    "Rates": [
        {
            "Id": "8a13f4e8-0274-4bcc-b2d4-ac1c00d1cd3f",
            "GroupId": "e4a9d8d1-5793-4d35-954e-ac1c00d1eaa8",
            "ServiceId": "ea80bbca-372f-4550-8e48-ac1c00d1cd20",
            "BaseRateId": null,
            "IsActive": true,
            "IsEnabled": true,
            "IsPublic": true,
            "Name": "Fully Flexible",
            "ShortName": "FF",
            "ExternalNames": {}
        }
    ],
    "RateGroups": [],
    "ResourceCategories": [],
    "BusinessSegments": []
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Rules` | array of [Rule](#rule) | required | Rules used with reservation creations and modifications. |
| `RuleActions` | array of [Rule action](#rule-action) | required | Rule actions applied in rules. |
| `Rates` | array of [Rate](#rate) | required | Rates used in conditions. |
| `RateGroups` | array of [Rate group](#rate-group) | required | Rate groups used in conditions. |
| `ResourceCategories` | array of [Resource category](enterprises.md#resource-category) | required | Resource categories used in conditions. |
| `BusinessSegments` | array of [Business segment](#business-segment) | required | Business segments used in conditions. |

#### Rule

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the rule. |
| `Conditions` | [Rule conditions](#rule-conditions) | required | Conditions of the rule. |

#### Rule conditions

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `RateId` | [Rule condition](#rule-condition) | required | Condition based on [Rate](#rate). |
| `RateGroupId` | [Rule condition](#rule-condition) | required | Condition based on [Rate group](#rate-group). |
| `BusinessSegmentId` | [Rule condition](#rule-condition) | required | Condition based on [Business segment](#business-segment). |
| `ResourceCategoryId` | [Rule condition](#rule-condition) | required | Condition based on [Resource category](enterprises.md#resource-category). |
| `ResourceCategoryType` | [Rule condition](#rule-condition) | required | Condition based on [Resource category type](enterprises.md#resource-category-type). |
| `Origin` | [Rule condition](#rule-condition) | required | Condition based on [Reservation origin](reservations.md#reservation-origin). |
| `MinimumTimeUnitCount` | string | required | Condition based on minimum amount of time units. |
| `MaximumTimeUnitCount` | string | required | Condition based on maximum amount of time units. |

#### Rule condition

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ConditionType` | string [Condition type](#condition-type) | required | Type of condition. |
| `Value` | string | required | Value of the condition depending on the property. E.g. [Reservation origin](reservations.md#reservation-origin) in case of origin condition or unique identifier of a rate in case of rate condition. |

#### Condition type

* `Equals`
* `NotEquals`

#### Rule action

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the rule action. |
| `RuleId` | string | required | Unique identifier of the rule. |
| `Data` | [RuleActionData](#rule-aciton-data) | optional | Additional information about action. |

#### Rule action data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Discriminator` | string [Rule action discriminator](#rule-action-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on [Rule action discriminator](#rule-action-discriminator). |

#### Rule action discriminator

* `Product` - Data specific to a product.

#### Rule action product data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ProductId` | string | required | Unique identifier of product. |
| `ActionType` | string [Product action type](#product-action-type) | required | Action of rule. |

#### Product action type

* `Add` - Adds specified item.
* `Delete` - Deletes specified item.

## Get all business segments

Returns all business segments of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/businessSegments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required | Unique identifiers of the [Service](#service)s from which the business segments are requested. |

### Response

```javascript
{
    "BusinessSegments": [
        {
            "Id": "7760b5cb-a666-41bb-9758-76bf5d1df399",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Business"
        },
        {
            "Id": "54ec08b6-e6fc-48e9-b8ae-02943e0ac693",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Leisure"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `BusinessSegments` | array of [Business segment](services.md#business-segment) | required | Business segments of the default service. |

#### Business segment

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the segment. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `IsActive` | boolean | required | Whether the business segment is still active. |
| `Name` | string | required | Name of the segment. |

## Get all rates

Returns all rates \(pricing setups\) and rate groups \(condition settings\) of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/rates/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "Extent": {
        "Rates": true,
        "RateGroups": true
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Service](#service)s from which the rates are requested. |
| `Extent` | [Rate extent](services.md#rate-extent) | required | Extent of data to be returned. |

#### Rate extent

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Rates` | bool | optional | Whether the response should contain rates. |
| `RateGroups` | bool | optional | Whether the response should contain rate groups. |
| `RateRestrictions` | bool | optional | Whether the response should contain rate restrictions. |

### Response

```javascript
{
    "Rates": [
        {
            "BaseRateId": null,
            "GroupId": "c8b866b3-be2e-4a47-9486-034318e9f393",
            "Id": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "IsEnabled": true,
            "IsPublic": true,
            "Name": "Fully Flexible",
            "ShortName": "FF",
            "ExternalNames": {
                "en-US": "Long Stay Flexible Rate"
            } 
        }
    ],
    "RateGroups": [
        {
            "Id": "c8b866b3-be2e-4a47-9486-034318e9f393",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Default"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Rates` | array of [Rate](services.md#rate) | required | Rates of the default service. |
| `RateGroups` | array of [Rate group](services.md#rate-group) | required | Rate groups of the default service. |

#### Rate

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](services.md#rate-group) where the rate belongs. |
| `BaseRateId` | string | required | Unique identifier of the base [Rate](services.md#rate). |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsEnabled` | boolean | required | Whether the rate is currently available to customers. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Name` | string | required | Name of the rate. |
| `ShortName` | string | required | Short name of the rate. |
| `ExternalNames` | [Localized text](enterprises.md#localized-text) | required | All translations of the external name of the rate. |

#### Rate group

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the group. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `IsActive` | boolean | required | Whether the rate group is still active. |
| `Name` | string | required | Name of the rate group. |

## Get rate pricing

Returns prices of a rate in the specified interval. Note that response contains prices for all dates that the specified interval intersects. So e.g. interval `1st Jan 13:00 - 1st Jan 14:00` will result in one price for `1st Jan`. Interval `1st Jan 23:00 - 2nd Jan 01:00` will result in two prices for `1st Jan` and `2nd Jan`.

### Request

`[PlatformAddress]/api/connector/v1/rates/getPricing`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
    "StartUtc":"2017-01-01T00:00:00.000Z",
    "EndUtc":"2017-01-03T00:00:00.000Z"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RateId` | string | required | Unique identifier of the [Rate](services.md#rate) whose prices should be returned. |
| `StartUtc` | string | required, max length 3 months | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required, max length 3 months | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "Currency": "EUR",
    "BasePrices": [ 20, 20, 20 ],
    "CategoryAdjustments": [
        {
            "AbsoluteValue": 0,
            "CategoryId": "34c29e73-c8db-4e93-b51b-981e42655e03",
            "ParentCategoryId": null,
            "RelativeValue": 0.2
        },
        {
            "AbsoluteValue": 50,
            "CategoryId": "a0a7a5c5-c4ef-494a-8b34-6cca97629076",
            "ParentCategoryId": "34c29e73-c8db-4e93-b51b-981e42655e03",
            "RelativeValue": 0
        }
    ]
    "CategoryPrices": [
        {
            "CategoryId": "e3aa3117-dff0-46b7-b49a-2c0391e70ff9",
            "Prices": [ 20, 20, 20 ]
        }
    ],
    "DatesUtc": [
        "2016-12-31T23:00:00Z",
        "2017-01-01T23:00:00Z",
        "2017-01-02T23:00:00Z"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `DatesUtc` | array of string | required | Covered dates in UTC timezone in ISO 8601 format. |
| `BasePrices` | array of number | required | Base prices of the rate in the covered dates. |
| `CategoryPrices` | array of [Resource category pricing](#resource-category-pricing) | required | Resource category prices. |
| `CategoryAdjustments` | array of [Resource category adjustment](#resource-category-adjustment) | required | Resource category adjustments. |
| `RelativeAdjustment` | decimal | required | Specific amount which shows the difference between this rate and the base rate. |
| `AbsoluteAdjustment` | decimal | required | Relative amount which shows the difference between this rate and the base rate. |
| `EmptyUnitAdjustment` | decimal | required | Price adjustment for when the resource booked with this rate is not full to capacity. |
| `ExtraUnitAdjustment` | decimal | required | Price adjustment for when the resource booked with this rate exceeds capacity. |

#### Resource category pricing

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the [Resource category](enterprises.md#resource-category). |
| `Prices` | array of number | required | Prices of the rate for the resource category in the covered dates. |

#### Resource category adjustment

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the adjustment [Resource category](enterprises.md#resource-category). |
| `ParentCategoryId` | string | optional | Unique identifier of the parent [Resource category](enterprises.md#resource-category) that serves as a base price for the current category. |
| `RelativeValue` | number | required | Relative value of the adjustment \(e.g. `0.5` represents 50% increase\). |
| `AbsoluteValue` | number | required | Absolute value of the adjustment \(e.g. `50` represents 50 EUR in case the rate currency is `EUR`\). |

## Update rate price

Updates price of a rate in the specified intervals. If the `CategoryId` is specified, updates price of the corresponding [Resource category](enterprises.md#resource-category), otherwise updates the base price for all resource categories. Note that prices are defined daily, so when the server receives the UTC interval, it first converts it to enterprise timezone and updates the price on all dates that the interval intersects. Only root rates can be updated (the rates that have no base rate, that have `BaseRateId` set to `null`). It's not allowed to update past prices outside of `EditableHistoryInterval`, future updates are allowed for up to 5 years.

### Request

`[PlatformAddress]/api/connector/v1/rates/updatePrice`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
    "PriceUpdates": [
        {
            "StartUtc": "2016-09-01T00:00:00Z",
            "EndUtc": "2016-09-02T00:00:00Z",
            "Value": 111
        },
        {
            "CategoryId": "e3aa3117-dff0-46b7-b49a-2c0391e70ff9",
            "StartUtc": "2016-09-04T00:00:00Z",
            "EndUtc": "2016-09-05T00:00:00Z",
            "Value": 222
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RateId` | string | required | Unique identifier of the base [Rate](services.md#rate) to update. |
| `PriceUpdates` | array of [Price update](services.md#price-update) | required, max 1000 items | Price updates. |

#### Price update

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | optional | Unique identifier of the [Resource category](enterprises.md#resource-category) whose prices to update. If not specified, base price is updated. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `Value` | number | optional | New value of the rate on the interval. If not specified, removes all adjustments within the interval. |

### Response

```javascript
{}
```

## Get all restrictions

Returns all restrictions of the default service provided by the enterprise.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "ResourceCategoryIds": [
        "34c29e73-c8db-4e93-b51b-981e42655e03"
    ],
    "RateIds": [
        "ed4b660b-19d0-434b-9360-a4de2ea42eda"
    ],
    "CollidingUtc": {
        "StartUtc": "2020-02-15T00:00:00Z",
        "EndUtc": "2020-02-20T00:00:00Z"
    },
    "CreatedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-15T00:00:00Z"
    },
    "UpdatedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-15T00:00:00Z"
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Service](#service)s from which the restrictions are requested. |
| `ResourceCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource categories](enterprises.md#resource-category). |
| `RateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rate](#rate)s. Returns all restrictions that affect given rates (i.e. ones without any [Conditions](#restriction-conditions), ones assigned directly to specified rates, ones assigned to [Rate group](services.md#rate-group) of specified rates, or ones inherited from base rates).  |
| `BaseRateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rate](#rate)s. Returns only those restrictions which have matching `BaseRateId` set in [Conditions](#restriction-conditions). |
| `ExactRateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rate](#rate)s. Returns only those restrictions which have matching `ExactRateId` set in [Conditions](#restriction-conditions). |
| `CollidingUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) is active. Required if no other filter is provided. |
| `CreatedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) was created. |
| `UpdatedUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Restriction](#restriction) was updated. |

### Response

```javascript
{  
   "Restrictions": [  
      {  
         "Id": "40c24757-c16e-4094-91d3-4ca952e488a1",
         "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
         "ExternalIdentifier": "5678",
         "Conditions": {  
            "Type": "Stay",
            "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
            "BaseRateId": null,
            "RateGroupId": null,
            "ResourceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
            "ResourceCategoryType": null,
            "StartUtc": "2018-10-09T00:00:00Z",
            "EndUtc": "2018-10-31T00:00:00Z",
            "Days": [  
               "Saturday",
               "Sunday"
            ]
         },
         "Exceptions": {  
            "MinAdvance": null,
            "MaxAdvance": null,
            "MinLength": "P0M2DT0H0M0S",
            "MaxLength": "P0M7DT0H0M0S",
            "MinPrice": {  
               "Value": 50,
               "Currency": "EUR"
            },
            "MaxPrice": {  
               "Value": 150,
               "Currency": "EUR"
            }
         }
      },
      {  
         "Id": "b40ac4a8-f5da-457d-88fe-7a895e1580ab",
         "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
         "ExternalIdentifier": "5678",
         "Conditions": {  
            "Type": "Start",
            "ExactRateId": null,
            "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
            "RateGroupId": null,
            "ResourceCategoryId": null,
            "ResourceCategoryType": "Room",
            "StartUtc": "2018-10-01T00:00:00Z",
            "EndUtc": "2018-10-31T00:00:00Z",
            "Days": [  
               "Monday",
               "Tuesday",
               "Wednesday",
               "Thursday",
               "Friday"
            ]
         },
         "Exceptions": {  
            "MinAdvance": "P0M1DT0H0M0S",
            "MaxAdvance": "P0M3DT0H0M0S",
            "MinLength": null,
            "MaxLength": null,
            "MinPrice": null,
            "MaxPrice": null
         }
      }
   ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Restrictions` | array of [Restriction](services.md#restriction) | required | Restrictions of the default service. |

#### Restriction

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `ExternalIdentifier` | string | optional | External identifier of the restriction. |
| `Conditions` | string | required | [Conditions](services.md#restriction-conditions) are rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | string | optional | [Exceptions](services.md#restriction-exceptions) are rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

#### Restriction Conditions

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Type` | string | required | [Restriction type](services.md#restriction-type). |
| `ExactRateId` | string | optional | Unique identifier of the restricted [Exact rate](services.md#rate). |
| `BaseRateId` | string | optional | Unique identifier of the restricted [Base rate](services.md#rate). |
| `RateGroupId` | string | optional | Unique identifier of the restricted [Rate group](services.md#rate-group). |
| `ResourceCategoryId` | string | optional | Unique identifier of the restricted [Resource category](enterprises.md#resource-category). |
| `ResourceCategoryType` | string | optional | Name of the restricted [Resource category type](enterprises.md#resource-category-type). |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](services.md#day) | required | The restricted days of week. |

#### Restriction Exceptions

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `MinAdvance` | string | optional | The minimum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MaxAdvance` | string | optional | The maximum time before the reservation starts, you can reserve in ISO 8601 duration format. |
| `MinLength` | string | optional | Minimal reservation length in ISO 8601 duration format. |
| `MaxLength` | string | optional | Maximal reservation length in ISO 8601 duration format. |
| `MinPrice` | [Currency value](finance.md#currency-value)| optional | Value of the minimum night price. |
| `MaxPrice` | [Currency value](finance.md#currency-value)| optional | Value of the maximum night price. |

#### Day

* `Monday`
* `Tuesday`
* `Wednesday`
* `Thursday`
* `Friday`
* `Saturday`
* `Sunday`

#### Restriction type

* `Stay` - guests can't stay overnight within specified dates.
* `Start`- guests can't check in within specified dates.
* `End` - guests can't check out within specified dates.

## Add restrictions

Adds new restrictions with the specified conditions.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/add`

```javascript
{  
   "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
   "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
   "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
   "Restrictions": [  
      {  
         "Identifier": "1234",
         "ExternalIdentifier": "5678",
         "Conditions": {  
            "Type": "Start",
            "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
            "ResourceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
            "Days": [  
               "Friday",
               "Saturday",
               "Sunday"
            ]
         },
         "Exceptions": {  
            "MinLength": "P0M2DT0H0M0S",
            "MaxLength": "P0M7DT0H0M0S",
         }
      },
      {  
         "Identifier": "1235",
         "ExternalIdentifier": "5678",
         "Conditions": {  
            "Type": "Start",
            "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
            "Days": [  
               "Friday",
               "Saturday",
               "Sunday"
            ]
         },
         "Exceptions": {  
            "MinAdvance": "P0Y0M1DT0H0M0S",
            "MaxAdvance": "P0Y0M3DT0H0M0S"
         }
      }
   ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) restrictions will be added in. |
| `Restrictions` | array of [Restriction parameters](services.md#restriction-parameters) | required | Parameters of restrictions. |

#### Restriction parameters
| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the restriction within the transaction. |
| `ExternalIdentifier` | string | optional | External identifier of the restriction. |
| `Conditions` | string | required | [Conditions](services.md#restriction-conditions) are rules that must be met by a reservation for the restriction to apply. |
| `Exceptions` | string | optional | [Exceptions](services.md#restriction-exceptions) are rules that prevent the restriction from applying to a reservation, even when all conditions have been met. |

### Response

```javascript
{
   "Restrictions": [
      {
         "Identifier": "1234",
         "Restriction": {
            "Id": "40c24757-c16e-4094-91d3-4ca952e488a1",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "ExternalIdentifier": "5678",
            "Conditions": {
               "Type": "Stay",
               "ExactRateId": "7c7e89d6-69c0-4cce-9d42-35443f2193f3",
               "BaseRateId": null,
               "RateGroupId": null,
               "ResourceCategoryId": "86336EAC-4168-46B1-A544-2A47251BF864",
               "ResourceCategoryType": null,
               "StartUtc": "2018-10-09T00:00:00Z",
               "EndUtc": "2018-10-31T00:00:00Z",
               "Days": [
                  "Saturday",
                  "Sunday"
               ]
            },
            "Exceptions": {
               "MinAdvance": null,
               "MaxAdvance": null,
               "MinLength": "P0M2DT0H0M0S",
               "MaxLength": "P0M7DT0H0M0S",
               "MinPrice": null,
               "MaxPrice": null
            }
         }
      },
      {
         "Identifier": "1235",
         "Restriction": {
            "Id": "b40ac4a8-f5da-457d-88fe-7a895e1580ab",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "ExternalIdentifier": "5678",
            "Conditions": {
               "Type": "Start",
               "ExactRateId": null,
               "BaseRateId": "e5b538b1-36e6-43a0-9f5c-103204c7f68e",
               "RateGroupId": null,
               "ResourceCategoryId": null,
               "ResourceCategoryType": "Room",
               "StartUtc": "2018-10-01T00:00:00Z",
               "EndUtc": "2018-10-31T00:00:00Z",
               "Days": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
               ]
            },
            "Exceptions": {
               "MinAdvance": "P0M1DT0H0M0S",
               "MaxAdvance": "P0M3DT0H0M0S",
               "MinLength": null,
               "MaxLength": null,
               "MinPrice": null,
               "MaxPrice": null
            }
         }
      }
   ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Restrictions` | array of [Added restriction](services.md#added-restriction) | required | The added restrictions. |

#### Added restriction

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the restriction within the transaction. |
| `Restriction` | [Restriction](services.md#restriction) | required | The added restriction. |

## Delete restrictions

Removes restrictions from the service.

### Request

`[PlatformAddress]/api/connector/v1/restrictions/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "RestrictionIds": [
        "af4949ce-c061-4f27-89f9-5a6a9ef725a7", 
        "e2f8aa29-0c09-4097-801c-7888c9fb57ae"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `RestrictionIds` | array of string | required | Unique identifiers of the [Restriction](services.md#restriction)s. |

### Response

```javascript
{}
```

## Add order

Creates a new order with the specified products and items. Only positive charges are allowed by default, in order to post negative charges \(rebates\), the connector integration has to be configured in Mews to allow it. If the consumption is specified, it has to be in the future or within editable history interval of the enterprise. Compared to stay service order ([Reservation](reservations.md#reservation)) which is consumed over certain span of time, the product order is consumed at one point in time.

### Request

`[PlatformAddress]/api/connector/v1/orders/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "407a26f8-dcfc-4e29-b978-ab440117a153",
    "ServiceId": "d2129910-1da9-4d39-be14-ab3a00c9e70c",
    "ConsumptionUtc": "2020-02-04T00:00:00Z",
    "ProductOrders": [
        {
            "ProductId": "2eb7ad8b-8dfb-4381-aba5-ab58009f2993",
            "Count": 2
        }
    ],
    "Items": [
        {
            "Name": "Beer",
            "UnitCount": 3,
            "UnitAmount": {
                "Currency": "USD",
                "NetValue": 7,
                "TaxCodes": [
                    "US-DC-G"
                ]
            },
            "AccountingCategoryId": "90eff5aa-36b4-4689-80c0-ab3a00bb412e"
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Identifier of the [Customer](customers.md#customer) to be charged. |
| `ServiceId` | string | required | Identifier of the [Service](services.md#service) to be ordered. |
| `ConsumptionUtc` | string | optional | Date and time of the order consumption in UTC timezone in ISO 8601 format. If not specified, current date and time is used. Please note, as order consumption is one-time event, the optional parameters `StartUtc` and `EndUtc` in [Product order parameters](services.md#product-order-parameters) should not be used. |
| `Notes` | string | optional | Additional notes of the order. |
| `ProductOrders` | array of [Product order parameters](services.md#product-order-parameters) | optional | Parameters of the ordered products. |
| `Items` | array of [Item parameters](services.md#item-parameters) | optional | Parameters of the ordered custom items. |

#### Product order parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ProductId` | string | required | Unique identifier of the [Product](services.md#product) to be ordered. |
| `Count` | number | optional | Count of products to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount](services.md#amount-parameters) | optional | Unit amount of the product that overrides the amount defined in Mews. |
| `StartUtc` | string | optional | Product start in UTC timezone in ISO 8601 format. For products with charging `Once` and `PerPerson` must be set to same value as `EndUtc`. Use only with operation [Add reservation](reservations.md#add-reservation) or [Add reservation product](reservations.md#add-reservation-product), can be omitted for [Add order](services.md#add-order) operation. |
| `EndUtc` | string | optional | Product end in UTC timezone in ISO 8601 format. For products with charging `Once` and `PerPerson` must be set to same value as `StartUtc`. Use only with operation [Add reservation](reservations.md#add-reservation) or [Add reservation product](reservations.md#add-reservation-product), can be omitted for [Add order](services.md#add-order) operation. |

#### Item parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Count of units to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount](services.md#amount-parameters) | required | Unit amount, e.g. amount for one beer \(note that total amount of the item is therefore `UnitAmount` times `UnitCount`\). |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](finance.md#accounting-category) to be assigned to the item. |

#### Amount parameters

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `GrossValue` | decimal | optional | Amount including tax. Required for [Gross enviroments](configuration.md#pricing). |
| `NetValue` | decimal | optional | Amount excluding tax. Required for [Net enviroments](configuration.md#pricing). |
| `Currency` | string | required | ISO-4217 code of the [Currency](configuration.md#currency). |
| `TaxCodes` | array of string | required | Codes of [Tax rate](configuration.md#tax-rate)s to be applied to the item. (Note, you can only define one tax when sending `GrossValue`. For multiple taxes, use `NetValue`)|

### Response

```javascript
{
    "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `OrderId` | string | required | Unique identifier of the created order. |

## Get all companionships

Returns all companionships based on customers, reservations or reservation groups. One of them must be specified in the request.

### Request

`[PlatformAddress]/api/connector/v1/companionships/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerIds": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ],
    "ReservationIds": [
        "bfee2c44-1f84-4326-a862-5289598f6e2d"
    ],
    "ReservationGroupIds": [
        "c704dff3-7811-4af7-a3a0-7b2b0635ac59"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of [Customer](customers.md#customer)s. |
| `ReservationIds` | array of string | optional, max 1000 items | Unique identifiers of [Reservation](reservations.md#reservation)s. |
| `ReservationGroupIds` | array of string | optional, max 1000 items | Unique identifiers of [Reservation group](reservations.md#reservation-group)s. |
| `Extent` | [Companionship extent](services.md#companionship-extent) | required | Extent of data to be returned. E.g. it is possible to specify that together with the companionships, customers, reservations, and reservation groups should be also returned. |

#### Companionship extent

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Customers` | bool | optional | Whether the response should contain customers. |
| `Reservations` | bool | optional | Whether the response should contain reservations. |
| `ReservationGroups` | bool | optional | Whether the response should contain reservation groups. |

### Response

```javascript
{
    "Companionships": [
        {
            "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
            "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "ReservationGroupId": "c704dff3-7811-4af7-a3a0-7b2b0635ac59",
            "ReservationId": "bfee2c44-1f84-4326-a862-5289598f6e2d"
        }
    ],
    "Customers": null,
    "Reservations": null,
    "ReservationGroups": null
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Companionships` | array of [Companionship](services.md#companionship) | required | Companionships. |
| `Customers` | array of [Customer](customers.md#customer) | optional | Customers that belong to the companionships. |
| `Reservations` | array of [Reservation](reservations.md#reservation) | optional | The accompanied reservations. |
| `ReservationGroups` | array of [Reservation group](reservations.md#reservation-group) | optional | The accompanied reservation groups. |

#### Companionship

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of [Companionship](services.md#Companionship). |
| `CustomerId` | string | required | Unique identifier of [Customer](customers.md#customer). |
| `ReservationId` | string | optional | Unique identifier of [Reservation](reservations.md#reservation). |
| `ReservationGroupId` | string | required | Unique identifier of [Reservation group](reservations.md#reservation-group). |

## Get all resource access tokens

Returns all resource access tokens based on resource access tokens, reservations or interval. One of them must be specified in the request.

### Request

`[PlatformAddress]/api/connector/v1/resourceAccessTokens/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ResourceAccessTokenIds": [
        "90eff5aa-36b4-4689-80c0-ab3a00bb412e"
    ],
    "ServiceOrderIds": [
        "65eff5aa-36b4-4689-80c0-ab3a00bb412e"
    ],
    "CollidingUtc": {
        "StartUtc": "2020-02-15T00:00:00Z",
        "EndUtc": "2020-02-20T00:00:00Z"
    },
    "ActivityStates": [
        "Active"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ResourceAccessTokenIds` | array of string | optional, max 1000 items | Unique identifiers of [Resource access token](#resource-access-token)s. Required if no other filter is provided. |
| `ServiceOrderIds` | array of string | optional, max 1000 items | Unique identifiers of service orders (for example [Reservation](reservations.md#reservation)). Required if no other filter is provided. |
| `CollidingUtc` | [Time interval](enterprises.md#time-interval) | optional, max length 3 months | Interval in which the [Resource access token](#resource-access-token) is valid. Required if no other filter is provided. |
| `ActivityStates` | array of string [Activity state](#activity-state) | required | Whether return only active, only deleted or both records. |

### Response

```javascript
{
    "ResourceAccessTokens": [
        {
            "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
            "ServiceOrderId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "CompanionshipId": "25d4b117-4e60-44a3-9580-c582117eff98",
            "ResourceId": "65d4b117-4e60-44a3-9580-c582117eff98",
            "Type": "PinCode",
            "Value": "1234#",
            "SerialNumber": null,
            "ValidityStartUtc": "2020-10-09T22:00:00Z",
            "ValidityEndUtc": "2020-10-10T22:00:00Z",
            "Permissions":
            {
                "Bed": true,
                "Room": false,
                "Floor": false,
                "Building": false
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ResourceAccessTokens` | array of [Resource access token](#resource-access-token) | required | Resource access tokens. |

#### Resource access token

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of [Resource access token](#resource-access-token). |
| `ServiceOrderId` | string | required | Unique identifier of a service order (for example [Reservation](reservations.md#reservation)). |
| `CompanionshipId` | string | optional | Unique identifier of [Companionship](services.md#companionship). |
| `ResourceId` | string | optional | Unique identifier of [Resource](enterprises.md#resource). |
| `Type` | [Resource access token type](#resource-access-token-type) | required | Type of stored value. |
| `Value` | string | required | Value of resource access token |
| `SerialNumber` | string | optional | Serial number of [Resource access token type](#resource-access-token-type). |
| `ValidityStartUtc` | string | required | Marks the start of interval in which the resource access token can be used. |
| `ValidityEndUtc` | string | required | Marks the end of interval in which the resource access token can be used. |
| `Permissions` | [Resource access token permissions](#resource-access-token-permissions) | required | Specify permissions of [Resource access token](#resource-access-token). |

#### Resource access token type

* `PinCode`
* `RfidTag`

#### Resource access token permissions

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Bed` | bool | required | Specify whether [Resource access token](#resource-access-token) grants permission to access bed. |
| `Room` | bool | required | Specify whether [Resource access token](#resource-access-token) grants permission to access room. |
| `Floor` | bool | required | Specify whether [Resource access token](#resource-access-token) grants permission to access floor. |
| `Building` | bool | required | Specify whether [Resource access token](#resource-access-token) grants permission to access building. |

## Add resource access tokens

Adds new resource access tokens with the specified data.

### Request

`[PlatformAddress]/api/connector/v1/resourceAccessTokens/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ResourceAccessTokenParameters": [
        {
            "ServiceOrderId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "CompanionshipId": "25d4b117-4e60-44a3-9580-c582117eff98",
            "ResourceId": "65d4b117-4e60-44a3-9580-c582117eff98",
            "Type": "PinCode",
            "Value": "1234#",
            "SerialNumber": null,
            "ValidityStartUtc": "2020-10-09T22:00:00Z",
            "ValidityEndUtc": "2020-10-10T22:00:00Z",
            "Permissions":
            {
                "Bed": { "Value": true },
                "Room": { "Value": false },
                "Floor": { "Value": false },
                "Building": { "Value": false }
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ResourceAccessTokenParameters` | Array of [Resource access token parameter](#resource-access-token-parameter) | required, max 1000 items | Parameters of [Resource access token](#resource-access-token). |

#### Resource access token parameter

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ServiceOrderId` | string | required | Unique identifier of a service order (for example [Reservation](reservations.md#reservation)). |
| `CompanionshipId` | string | optional | Unique identifier of [Companionship](services.md#companionship). |
| `ResourceId` | string | optional | Unique identifier of [Resource](enterprises.md#resource). |
| `Type` | [Resource access token type](#resource-access-token-type) | required | Type of stored value. |
| `Value` | string | required | Value of resource access token |
| `SerialNumber` | string | optional | Serial number of [Resource access token type](#resource-access-token-type). |
| `ValidityStartUtc` | string | required | Marks the start of interval in which the resource access token can be used. |
| `ValidityEndUtc` | string | required | Marks the end of interval in which the resource access token can be used. |
| `Permissions` | [Resource access token permission parameter](#resource-access-token-permission-parameter) | required | Specify permissions of [Resource access token](#resource-access-token). |

#### Resource access token permission parameter

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Bed` | [Bool update value](reservations.md#bool-update-value) | optional | Specify whether [Resource access token](#resource-access-token) grants permission to access bed. |
| `Room` | [Bool update value](reservations.md#bool-update-value) | optional | Specify whether [Resource access token](#resource-access-token) grants permission to access room. |
| `Floor` | [Bool update value](reservations.md#bool-update-value) | optional | Specify whether [Resource access token](#resource-access-token) grants permission to access floor. |
| `Building` | [Bool update value](reservations.md#bool-update-value) | optional | Specify whether [Resource access token](#resource-access-token) grants permission to access building. |

### Response

```javascript
{
    "ResourceAccessTokens": [
        {
            "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
            "ServiceOrderId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "CompanionshipId": "25d4b117-4e60-44a3-9580-c582117eff98",
            "ResourceId": "65d4b117-4e60-44a3-9580-c582117eff98",
            "Type": "PinCode",
            "Value": "1234#",
            "SerialNumber": null,
            "ValidityStartUtc": "2020-10-09T22:00:00Z",
            "ValidityEndUtc": "2020-10-10T22:00:00Z",
            "Permissions":
            {
                "Bed": true,
                "Room": false,
                "Floor": false,
                "Building": false
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ResourceAccessTokens` | array of [Resource access token](#resource-access-token) | required | Resource access tokens. |

## Update resource access tokens

Updates the [Resource access token](#resource-access-token) validity interval and [permissions](#resource-access-token-permission-parameter) that its grants.

### Request

`[PlatformAddress]/api/connector/v1/resourceAccessTokens/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ResourceAccessTokenUpdates": [
        {
            "ResourceAccessTokenId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "ValidityStartUtc": { "Value": "2020-10-09T22:00:00Z" },
            "ValidityEndUtc": { "Value": "2020-10-10T22:00:00Z" },
            "Permissions":
            {
                "Bed": { "Value": true },
                "Room": { "Value": false },
                "Floor": { "Value": false },
                "Building": { "Value": false }
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ResourceAccessTokenUpdates` | Array of [Resource access token update](#resource-access-token-update) | required | Parameters of [Resource access token](#resource-access-token). |

#### Resource access token update

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ResourceAccessTokenId` | [String update value](reservations.md#string-update-value) | required | Unique identifier of [Resource access token](#resource-access-token). |
| `ValidityStartUtc` | [String update value](reservations.md#string-update-value) | optional | Marks the start of interval in which the resource access token can be used. |
| `ValidityEndUtc` | [String update value](reservations.md#string-update-value) | optional | Marks the end of interval in which the resource access token can be used. |
| `Permissions` | [Resource access token permission parameter](#resource-access-token-permission-parameter) | optional | Specify permissions of [Resource access token](#resource-access-token). |

### Response

```javascript
{
    "ResourceAccessTokens": [
        {
            "Id": "72d4b117-1f84-44a3-1f84-8b2c0635ac60",
            "ServiceOrderId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "CompanionshipId": "25d4b117-4e60-44a3-9580-c582117eff98",
            "ResourceId": "65d4b117-4e60-44a3-9580-c582117eff98",
            "Type": "PinCode",
            "Value": "1234#",
            "SerialNumber": null,
            "ValidityStartUtc": "2020-10-09T22:00:00Z",
            "ValidityEndUtc": "2020-10-10T22:00:00Z",
            "Permissions":
            {
                "Bed": true,
                "Room": false,
                "Floor": false,
                "Building": false
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ResourceAccessTokens` | array of [Resource access token](#resource-access-token) | required | Resource access tokens. |


## Delete resource access tokens

Delete specified resource access tokens.

### Request

`[PlatformAddress]/api/connector/v1/resourceAccessTokens/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Ids": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Ids` | Array of string | required | Unique identifiers of [Resource access token](#resource-access-token). |

### Response

```javascript
{}
```

## Get all vouchers

Returns all rate vouchers filtered by [Service](#service), voucher code or voucher identifier.

### Request

`[PlatformAddress]/api/connector/v1/vouchers/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ],
    "VoucherIds": [
        "fe568bbd-1ecb-4bb2-bf77-96c3698de20d"
    ],
    "VoucherCodeValues": [
        "TEST-VOUCHER-CODE"
    ],
    "Extent": {
        "Vouchers": true,
        "VoucherCodes": true,
        "VoucherAssignments": true,
        "Companies": false,
        "Rates": false
    },
    "ActivityStates": [
        "Active"
    ]
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of [Service](#service)s where the vouchers belong to. |
| `VoucherIds` | array of string | optional, max 1000 items | Unique identifiers of vouchers. |
| `VoucherCodeValues` | array of string | optional, max 1000 items | Value of voucher codes used by customers. |
| `Extent` | [Voucher extent](#voucher-extent) | required | Extent of data to be returned. Whether only specific voucher info should be returned or related items as well. |
| `ActivityStates` | array of string [Activity state](#activity-state) | required | Whether return only active, only deleted or both records. |

#### Voucher extent

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Vouchers` | bool | optional | Whether the response should contain main information about vouchers. |
| `VoucherCodes` | bool | optional | Whether the response should contain voucher codes used by customers. |
| `VoucherAssignments` | bool | optional | Whether the response should contain assignments between vouchers and [Rate](#rate)s. |
| `Companies` | bool | optional | Whether the response should contain detail of related companies. |
| `Rates` | bool | optional | Whether the response should contain detail of assigned rates. |

#### Activity state

* `Active` - active records (the validity might be restricted by another parameter i.e. interval).
* `Deleted`- deleted records.

### Response

```javascript
{
    "Vouchers": [
        {
            "Id": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "Name": "Weekend Voucher",
            "CreatedUtc": "2018-11-29T08:17:05Z",
            "UpdatedUtc": "2020-10-30T13:38:49Z",
            "ActivityState": "Active",
            "CompanyId": "3506994b-3c0b-49ba-9f57-ac4700641440",
            "TravelAgencyId": null
        }
    ],
    "VoucherCodes": [
        {
            "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
            "Value": "TEST-VOUCHER-CODE",
            "ValidityStartUtc": null,
            "ValidityEndUtc": null,
            "CreatedUtc": "2020-10-30T13:37:16Z",
            "UpdatedUtc": "2020-10-30T13:37:16Z",
            "ActivityState": "Active"
        },
        {
            "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
            "Value": "05400269B23A59C649E4",
            "ValidityStartUtc": "2020-10-09T22:00:00Z",
            "ValidityEndUtc": "2020-10-09T22:00:00Z",
            "CreatedUtc": "2020-10-09T15:08:14Z",
            "UpdatedUtc": "2020-10-09T15:08:14Z",
            "ActivityState": "Active"
        }
    ],
    "VoucherAssignments": [
        {
            "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
            "RateId": "6639eaa9-bbe0-46c0-94a2-aa5d00a2353c"
        },
        {
            "VoucherId": "fe568bbd-1ecb-4bb2-bf77-96c3698de20d",
            "RateId": "61133a42-41d2-4e46-b5b0-ab1701268b75"
        }
    ],
    "Rates": null,
    "Companies": null
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Vouchers` | array of [Voucher](#voucher) | optional | Main information about voucher. |
| `VoucherCodes` | array of [Voucher code](#voucher-code) | optional | Information about voucher codes used by customers. |
| `VoucherAssignments` | array of [Voucher assignment](#voucher-assignment) | optional | The assignments between vouchers and [Rate](#rate)s. |
| `Rates` | array of [Rate](#rate) | optional | The assigned rates. |
| `Companies` | array of [Company](enterprises.md#company) | optional | The related companies and travel agencies. |

#### Voucher

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of voucher. |
| `ServiceId` | string | required | Unique identifier of [Service](#service) the voucher belongs to. |
| `Name` | string | required | Internal name of the voucher. |
| `CreatedUtc` | string | required | Creation date and time of the voucher in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the voucher in UTC timezone in ISO 8601 format. |
| `ActivityState` | string [Activity state](#activity-state) | required | Whether voucher is active or deleted. |
| `CompanyId` | string | optional | Unique identifier of [Company](enterprises.md#company) the voucher is related to. |
| `TravelAgencyId` | string | optional | Unique identifier of [Company](enterprises.md#company) with [Travel agency contract](enterprises.md#travel-agency-contract) the voucher is related to. |

#### Voucher code

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `VoucherId` | string | required | Unique identifier of [Voucher](#voucher) the code belongs to. |
| `Value` | string | required | Value of voucher code used by customers. |
| `ValidityStartUtc` | string | optional | If specified, marks the beginning of interval in which the code can be used. |
| `ValidityEndUtc` | string | optional | If specified, marks the end of interval in which the code can be used. |
| `CreatedUtc` | string | required | Creation date and time of the voucher in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the voucher in UTC timezone in ISO 8601 format. |
| `ActivityState` | string [Activity state](#activity-state) | required | Whether voucher code is active or deleted. |

#### Voucher assignment

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `VoucherId` | string | required | Unique identifier of [Voucher](#voucher). |
| `RateId` | string | required | Unique identifier of [Rate](#rate) the voucher is assigned with. |
