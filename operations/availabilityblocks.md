<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Availability blocks

## Get all availability blocks

> This feature is being actively developed, features and behavior of this operation may change at short notice.
Returns all availability blocks filtered by services, unique identifiers and other filters.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "AvailabilityBlockIds": [
    "aaaa654a4a94-4f96-9efc-86da-bd26d8db"
  ],
  "ServiceIds": [
    "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
  ],
  "CreatedUtc": {
    "StartUtc": "2020-11-04T00:00:00Z",
    "EndUtc": "2020-11-05T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2020-11-04T00:00:00Z",
    "EndUtc": "2020-11-05T00:00:00Z"
  },
  "CollidingUtc": {
    "StartUtc": "2020-11-05T00:00:00Z",
    "EndUtc": "2020-11-05T00:00:00Z"
  },
  "ReleasedUtc": {
    "StartUtc": "2020-11-04T00:00:00Z",
    "EndUtc": "2020-11-05T00:00:00Z"
  },
  "States": [
    "Confirmed"
  ],
  "ExternalIdentifiers": [
    "Block-0001"
  ],
  "ActivityStates": [
    "Active"
  ],
  "Extent": {
    "AvailabilityBlocks": true,
    "Adjustments": true,
    "ServiceOrders": false,
    "Rates": false
  },
  "Limitation": {
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Extent` | [Availability block extent](availabilityblocks.md#availability-block-extent) | required | Extent of data to be returned, e.g. it is possible to specify that related service orders (for example reservations) are returned. |
| `ServiceIds` | array of string | optional, max 1000 items | Unique identifiers of the [Services](services.md#service) to which [Availability blocks](availabilityblocks.md#availability-block) are assigned. |
| `AvailabilityBlockIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Availability blocks](availabilityblocks.md#availability-block). |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Availability blocks` were created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Availability blocks` were updated. |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Availability blocks` are active. |
| `ReleasedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Availability blocks`are released. |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of [Availability block](availabilityblocks.md#availability-block)s from external systems. |
| `States` | array of [Availability block state](availabilityblocks.md#availability-block-state) | optional | States the availability blocks should be in. |
| `ActivityStates` | array of string | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### Availability block extent
Extent of data to be returned, e.g. it is possible to specify that related service orders (for example reservations) are returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | boolean | optional | Whether the response should contain the general availability blocks. |
| `Adjustments` | boolean | optional | Whether the response should contain individual availability adjustments related to availability blocks. |
| ~~`ServiceOrders`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain reservations related to availability blocks.~~ **Deprecated!** Use `reservations/getAll/2023-06-06` instead.|
| ~~`Rates`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain rates related to availability blocks.~~ **Deprecated!** Use `rates/getAll` instead.|

### Response

```javascript
{
  "AvailabilityBlocks": [
    {
      "Id": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "BookerId": null,
      "CompanyId": null,
      "Budget": {
        "Currency": "USD",
        "Value": 48
      },
      "State": "Confirmed",
      "ReservationPurpose": "Leisure",
      "CreatedUtc": "2021-10-11T13:32:32Z",
      "UpdatedUtc": "2021-10-11T13:32:32Z",
      "FirstTimeUnitStartUtc": "2021-10-14T00:00:00Z",
      "LastTimeUnitStartUtc": "2021-10-17T00:00:00Z",
      "ReleasedUtc": "2021-10-13T00:00:00Z",
      "ExternalIdentifier": "Block-0001",
      "Name": "Wedding group",
      "Notes": "Have a nice stay"
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
      "Id": "e19297af-373e-4701-b4ea-afae0129bded",
      "AvailabilityBlockId": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
      "ResourceCategoryId": "1268c440-21c5-415d-bf58-ac87008b2bda",
      "FirstTimeUnitStartUtc": "2021-10-14T00:00:00Z",
      "LastTimeUnitStartUtc": "2021-10-17T00:00:00Z",
      "UnitCount": 6,
      "ActivityState": "Active",
      "UpdatedUtc": "2021-10-21T13:32:32Z"
    }
  ],
  "Cursor": "aaaa654a4a94-4f96-9efc-86da-bd26d8db"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | array of [Availability block](availabilityblocks.md#availability-block) | optional | Availability blocks. |
| `Adjustments` | array of [Availability adjustment](availabilityadjustments.md#availability-adjustment) | optional | Availability adjustments of availability blocks. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |
| ~~`ServiceOrders`~~ | ~~array of [Reservation (ver 2017-04-12)](reservations.md#reservation-ver-2017-04-12)~~ | ~~optional~~ | ~~Service orders (for example reservations) linked to availability blocks.~~ **Deprecated!** Use `reservations/getAll/2023-06-06` instead.|
| ~~`Rates`~~ | ~~array of [Rate](rates.md#rate)~~ | ~~optional~~ | ~~`Rates` assigned to the block.~~ **Deprecated!** Use `rates/getAll` instead.|

#### Availability block

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the availability block. |
| `EnterpriseId` | string | required | Unique identifier of the [enterprise](enterprises.md#enterprise). |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) the block is assigned to. |
| `RateId` | string | required | Unique identifier of the [Rate](rates.md#rate) the block is assigned to. |
| `VoucherId` | string | optional | Unique identifier of the [Voucher](vouchers.md#voucher) used to access specified private [Rate](rates.md#rate). |
| `BookerId` | string | optional | Unique identifier of the [Customer](customers.md#customer) on whose behalf the block was made. |
| `CompanyId` | string | optional | Unique identifier of the [Company](companies.md#company) linked to the block. |
| `TravelAgencyId` | string | optional | Unique identifier of the `Travel agency`. |
| `Budget` | [Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07) | optional | The tentative budget for the total price of reservations in the block. |
| `State` | [Availability block state](availabilityblocks.md#availability-block-state) | required | State of the availability block. |
| `ReservationPurpose` | [Reservation purpose](reservations.md#reservation-purpose) | optional | The purpose of the block. |
| `CreatedUtc` | string | required | Creation date and time of the block in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the block in UTC timezone in ISO 8601 format. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](services.md#time-unit), in UTC timezone ISO 8601 format. |
| `ReleasedUtc` | string | optional | The moment when the block and its availability is released in UTC timezone in ISO 8601 format. |
| `RollingReleaseOffset` | string | optional | Exact offset from the start of availability adjustments to the moment the individual days in the adjustment should be released, in ISO 8601 duration format. Mutually exclusive with `ReleasedUtc`; the block will not be automatically released if neither `ReleasedUtc` nor `RollingReleaseOffsetUtc` is specified. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the block from external system. |
| `Name` | string | optional | The name of the block in Mews. |
| `Notes` | string | optional | Additional notes of the block. |
| `PickupDistribution` | [Pickup Distribution](availabilityblocks.md#pickup-distribution) | required | Whether assigning spaces to reservations within an availability block is done as a single group or divided into individual groups. |
| `IsActive` | boolean | required | Whether the `Availability Block` is still active. |

#### Availability block state

* `Confirmed`
* `Optional`
* `Inquired`
* `Canceled`

#### Pickup Distribution

* `AllInOneGroup`
* `IndividualGroups`

## Add availability blocks

> This feature is being actively developed, features and behavior of this operation might change on short notice.
Adds availability blocks which are used to group related [Availability updates](availabilityblocks.md#availability-update). This makes limiting public availability easier and more organized. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "AvailabilityBlocks": [
    {
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherCode": null,
      "Name": "Mr. Smith's block",
      "FirstTimeUnitStartUtc": "2020-11-05T00:00:00Z",
      "LastTimeUnitStartUtc": "2020-11-06T00:00:00Z",
      "ReleasedUtc": "2020-11-04T00:00:00Z",
      "ExternalIdentifier": "Block-0001",
      "Budget": {
        "Value": 500,
        "Currency": "EUR"
      },
      "ReservationPurpose": null,
      "Notes": null,
      "State": "Confirmed",
      "BookerId": null
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `AvailabilityBlocks` | array of [Availability block parameters](availabilityblocks.md#availability-block-parameters) | required, max 1000 items | Availability blocks to be added. |

#### Availability block parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) to assign block to. |
| `RateId` | string | required | Unique identifier of the [Rate](rates.md#rate) to assign block to. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first time unit, in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the first time unit, in UTC timezone ISO 8601 format. |
| `ReleasedUtc` | string | optional | The moment when the block and its availability is released, in UTC timezone ISO 8601 format. |
| `RollingReleaseOffset` | string | optional | Exact offset from the start of availability adjustments to the moment the availability adjustment should be released, in ISO 8601 duration format. Ignored if `ReleasedUtc` is specified. |
| `Name` | string | optional | The name of the block. |
| `VoucherCode` | string | optional | Voucher code providing access to specified private [Rate](rates.md#rate). |
| `BookerId` | string | optional | Unique identifier of the Booker as a creator of an availability block. |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company). |
| `TravelAgencyId` | string | optional | Unique identifier of `Travel Agency`. |
| `Budget` | [Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07) | optional | The tentative budget for the total price of reservations. |
| `ReservationPurpose` | [Reservation purpose](reservations.md#reservation-purpose) | optional | The purpose of the block. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the block from external system. |
| `Notes` | string | optional | Additional notes of the block. |
| `State` | [Availability block state](availabilityblocks.md#availability-block-state) | required | State of the availability block. |

#### Availability block state

* `Confirmed`
* `Optional`
* `Inquired`
* `Canceled`

### Response

```javascript
{
  "AvailabilityBlocks": [
    {
      "Id": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "FirstTimeUnitStartUtc": "2020-11-05T00:00:00Z",
      "LastTimeUnitStartUtc": "2020-11-06T00:00:00Z",
      "ReleasedUtc": "2020-11-04T00:00:00Z",
      "ExternalIdentifier": "Block-0001"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | array of [Availability block](availabilityblocks.md#availability-block) | required | Availability blocks. |

## Update availability blocks

> This feature is being actively developed, features and behavior of this operation might change on short notice.
Updates information about the specified [Availability block](availabilityblocks.md#availability-block).

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "AvailabilityBlocks": [
    {
      "AvailabilityBlockId": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
      "Name": {
        "Value": "Mr. John Snow block"
      },
      "FirstTimeUnitStartUtc": {
        "Value": "2021-07-05T00:00:00Z"
      },
      "LastTimeUnitStartUtc": {
        "Value": "2021-07-15T00:00:00Z"
      },
      "ReleasedUtc": {
        "Value": "2021-07-04T00:00:00Z"
      },
      "ExternalIdentifier": {
        "Value": "123456798"
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `AvailabilityBlocks` | array of [Availability block update parameters](availabilityblocks.md#availability-block-update-parameters) | required, max 1000 items | Availability blocks to be updated. |

#### Availability block update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlockId` | string | required | Unique identifier of the [Availability block](availabilityblocks.md#availability-block). |
| `Name` | [String update value](_objects.md#string-update-value) | optional | The name of the block (or `null` if the name should not be updated). |
| `FirstTimeUnitStartUtc` | [String update value](_objects.md#string-update-value) | optional | Start of the time interval, expressed as the timestamp for the start of the first time unit, in UTC timezone ISO 8601 format (or `null` if the start time should not be updated). |
| `LastTimeUnitStartUtc` | [String update value](_objects.md#string-update-value) | optional | End of the time interval, expressed as the timestamp for the start of the last time unit, in UTC timezone ISO 8601 format (or `null` if the end time should not be updated). |
| `ExternalIdentifier` | [String update value](_objects.md#string-update-value) | optional, max length 255 characters | Identifier of the block from external system (or `null` if the identifier should not be updated). |
| `State` | [String update value](_objects.md#string-update-value) | optional | State of the availability block (or `null` if not updated). |
| `ReservationPurpose` | [String update value](_objects.md#string-update-value) | optional | The purpose of the block (or `null` if not updated). |
| `CompanyId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the [Company](companies.md#company) (or `null` if not updated). |
| `TravelAgencyId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the `Travel Agency` (or `null` if not updated). |
| `BookerId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the Booker as a creator of an availability block (or `null` if not updated). |
| `Notes` | [String update value](_objects.md#string-update-value) | optional | Additional notes of the block (or `null` if not updated). |
| `Budget` | [CurrencyValueOldUpdateValue](availabilityblocks.md#currencyvalueoldupdatevalue) | optional | The tentative budget for the total price of reservations (or `null` if not updated). |
| `CancellationReason` | [String update value](_objects.md#string-update-value) | optional | Cancellation reason of the availability block (or `null` if not updated). |
| `CancellationReasonDetail` | [String update value](_objects.md#string-update-value) | optional | Cancellation reason detail of the availability block (or `null` if not updated). |
| `RollingReleaseOffset` | [String update value](_objects.md#string-update-value) | optional | Exact offset from the start of availability adjustments to the moment the availability adjustment should be released, in ISO 8601 duration format. Required if `ReleaseStrategy` is set to `RollingRelease`, ignored otherwise. |
| `ReleasedUtc` | [String update value](_objects.md#string-update-value) | optional | The moment when the block and its availability is released, in UTC timezone ISO 8601 format. Required if `ReleaseStrategy` is set to `FixedRelease`, or used when `ReleaseStrategy` update is unspecified. |
| `ReleaseStrategy` | [ReleaseStrategyUpdateValue](availabilityblocks.md#releasestrategyupdatevalue) | optional | The strategy for automatic release of the availability block (or `null` if not updated). |

#### CurrencyValueOldUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07) | optional | Total price of the reservation. |

#### ReleaseStrategyUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [The strategy for automatic release of the availability block.](availabilityblocks.md#the-strategy-for-automatic-release-of-the-availability-block) | required |  |

#### The strategy for automatic release of the availability block.

* `FixedRelease` - The availability block is released at a fixed time.
* `RollingRelease` - Each availability adjustment is released at a fixed offset from its start.
* `None` - The availability block is not automatically released.

### Response

```javascript
{
  "AvailabilityBlocks": [
    {
      "Id": "aaaa654a4a94-4f96-9efc-86da-bd26d8db",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "FirstTimeUnitStartUtc": "2020-11-05T00:00:00Z",
      "LastTimeUnitStartUtc": "2020-11-06T00:00:00Z",
      "ReleasedUtc": "2020-11-04T00:00:00Z",
      "ExternalIdentifier": "Block-0001"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | array of [Availability block](availabilityblocks.md#availability-block) | required | Availability blocks. |

## Delete availability blocks

Delete availability blocks. Note that an availability block containing active reservations (reservations which are not `Canceled`) cannot be deleted.

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "AvailabilityBlockIds": [
    "e5a4654a4a94-86da-4f96-9efc-bd26d8db",
    "aaaa654a4a94-4f96-9efc-86da-bd26d8db"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `AvailabilityBlockIds` | array of string | required, max 1000 items | Unique identifier of the Availability block to delete. |

### Response

```javascript
{}
```
