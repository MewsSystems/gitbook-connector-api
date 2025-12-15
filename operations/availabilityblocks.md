<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Availability blocks

## Get all availability blocks

Returns all availability blocks filtered by services, unique identifiers and other filters. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "Extent": {
    "AvailabilityBlocks": true,
    "Adjustments": true,
    "ServiceOrders": false,
    "Rates": false
  },
  "ServiceIds": [
    "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
  ],
  "AvailabilityBlockIds": [
    "5ee074b1-6c86-48e8-915f-c7aa4702086f"
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
    "StartUtc": "2020-11-04T00:00:00Z",
    "EndUtc": "2020-11-05T00:00:00Z"
  },
  "ReleasedUtc": {
    "StartUtc": "2020-11-04T00:00:00Z",
    "EndUtc": "2020-11-05T00:00:00Z"
  },
  "ExternalIdentifiers": [
    "Block-0001"
  ],
  "States": [
    "Confirmed"
  ],
  "ActivityStates": [
    "Active"
  ],
  "Limitation": {
    "Count": 100
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
| `ServiceIds` | array of string | optional, max 1000 items | Unique identifiers of the `Services` to which `Availability blocks` are assigned. |
| `AvailabilityBlockIds` | array of string | optional, max 1000 items | Unique identifiers of the requested `Availability blocks`. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the availability blocks were created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Availability blocks` were updated. |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Availability blocks` are active. |
| `ReleasedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Availability blocks`are released. |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of `Availability blocks` from external systems. |
| `States` | array of [Availability block state](availabilityblocks.md#availability-block-state) | optional | States the availability blocks should be in. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

#### Availability block extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | boolean | optional | Whether the response should contain the general availability blocks. |
| `Adjustments` | boolean | optional | Whether the response should contain individual availability adjustments related to availability blocks. |
| ~~`ServiceOrders`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain reservations related to availability blocks.~~ **Deprecated!** Use [Get all reservations (ver 2023-06-06)](reservations.md#get-all-reservations-ver-2023-06-06) instead.|
| ~~`Rates`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain rates related to availability blocks.~~ **Deprecated!** Use [Get all rates](rates.md#get-all-rates) instead.|

### Response

```javascript
{
  "AvailabilityBlocks": [
    {
      "Id": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
      "CompanyId": null,
      "TravelAgencyId": null,
      "Budget": {
        "Currency": "USD",
        "Value": 48,
        "Net": null,
        "Tax": null,
        "TaxRate": null
      },
      "State": "Confirmed",
      "ReservationPurpose": "Leisure",
      "CreatedUtc": "2020-11-04T13:00:00Z",
      "UpdatedUtc": "2020-11-04T13:00:00Z",
      "FirstTimeUnitStartUtc": "2020-11-04T13:00:00Z",
      "LastTimeUnitStartUtc": "2020-11-04T13:00:00Z",
      "ReleasedUtc": "2020-11-04T13:00:00Z",
      "RollingReleaseOffset": null,
      "ExternalIdentifier": "Block-0001",
      "Name": "Wedding group",
      "Notes": "Have a nice stay",
      "PickupDistribution": "AllInOneGroup",
      "IsActive": false,
      "QuoteId": null,
      "AvailabilityBlockNumber": "478",
      "ReleaseStrategy": "FixedRelease",
      "PurchaseOrderNumber": "XX-123",
      "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
      "CanceledUtc": null,
      "CancellationReason": null,
      "CancellationReasonDetail": null
    },
    {
      "Id": "c32386aa-1cd2-414a-a823-489325842fbe",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
      "CompanyId": null,
      "TravelAgencyId": null,
      "Budget": {
        "Currency": "USD",
        "Value": 48,
        "Net": null,
        "Tax": null,
        "TaxRate": null
      },
      "State": "Confirmed",
      "ReservationPurpose": "Leisure",
      "CreatedUtc": "2022-10-11T13:32:32Z",
      "UpdatedUtc": "2022-10-11T13:32:32Z",
      "FirstTimeUnitStartUtc": "2022-10-14T00:00:00Z",
      "LastTimeUnitStartUtc": "2022-11-17T00:00:00Z",
      "ReleasedUtc": null,
      "RollingReleaseOffset": "P-3DT4H",
      "ExternalIdentifier": "Block-0002",
      "Name": "Rolling release",
      "Notes": null,
      "PickupDistribution": "AllInOneGroup",
      "IsActive": false,
      "QuoteId": "67eaf3c8-81e0-4ffb-b5f2-2b61803feb9c",
      "AvailabilityBlockNumber": "479",
      "ReleaseStrategy": "RollingRelease",
      "PurchaseOrderNumber": null,
      "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
      "CanceledUtc": null,
      "CancellationReason": null,
      "CancellationReasonDetail": null
    }
  ],
  "ServiceOrders": null,
  "Adjustments": [
    {
      "Id": "e19297af-373e-4701-b4ea-afae0129bded",
      "AvailabilityBlockId": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
      "ResourceCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "StartUtc": null,
      "EndUtc": null,
      "FirstTimeUnitStartUtc": "2021-10-14T00:00:00Z",
      "LastTimeUnitStartUtc": "2021-10-17T00:00:00Z",
      "UnitCount": 6,
      "ActivityState": "Active",
      "ReleaseOverrideUtc": "2021-10-13T00:00:00Z",
      "UpdatedUtc": "2021-10-21T13:32:32Z",
      "IsActive": false,
      "PaxCounts": null,
      "FirstTimeUnitReleaseUtc": "2021-10-13T00:00:00Z"
    }
  ],
  "Rates": null,
  "Cursor": "c32386aa-1cd2-414a-a823-489325842fbe"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | array of [Availability block](availabilityblocks.md#availability-block) | optional | Availability blocks. |
| `Adjustments` | array of [Availability adjustment](availabilityadjustments.md#availability-adjustment) | optional | Availability adjustments of availability blocks. |
| `Cursor` | string | optional | Unique identifier of the last returned availability block. This can be used in Limitation in a subsequent request to fetch the next batch of availability block. |
| ~~`ServiceOrders`~~ | ~~array of [Reservation (ver 2017-04-12)](reservations.md#reservation-ver-2017-04-12)~~ | ~~optional~~ | ~~Service orders (for example reservations) linked to availability blocks.~~ **Deprecated!** Use [Get all reservations (ver 2023-06-06)](reservations.md#get-all-reservations-ver-2023-06-06) instead.|
| ~~`Rates`~~ | ~~array of [Rate for extent](reservations.md#rate-for-extent)~~ | ~~optional~~ | ~~`Rates` assigned to the block.~~ **Deprecated!** Use [Get all rates](rates.md#get-all-rates) instead.|

#### Availability block

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the availability block. |
| `EnterpriseId` | string | required | Unique identifier of the [enterprise](enterprises.md#enterprise). |
| `ServiceId` | string | required | Unique identifier of the `Service` the block is assigned to. |
| `RateId` | string | required | Unique identifier of the `Rate` the block is assigned to. |
| `VoucherId` | string | optional | Unique identifier of the `Voucher` used to access specified private `Rate`. |
| `BookerId` | string | optional | Unique identifier of the `Customer` on whose behalf the block was made. |
| `CompanyId` | string | optional | Unique identifier of the `Company` linked to the block. |
| `TravelAgencyId` | string | optional | Unique identifier of `Company`with `Travel agency contract` the Availability Block is related to. |
| `Budget` | [Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07) | optional | The tentative budget for the total price of reservations in the block. |
| `State` | [Availability block state](availabilityblocks.md#availability-block-state) | required | State of the availability block. |
| `ReservationPurpose` | [Reservation purpose](reservations.md#reservation-purpose) | optional | The purpose of the block. |
| `CreatedUtc` | string | required | Creation date and time of the block in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the block in UTC timezone in ISO 8601 format. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first time unit, in UTC timezone ISO 8601 format. See [Time units](../concepts/time-units.md). |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last time unit, in UTC timezone ISO 8601 format. See [Time units](../concepts/time-units.md). |
| `ReleasedUtc` | string | optional | The moment when the block and its availability is released in UTC timezone in ISO 8601 format. Mutually exclusive with `RollingReleaseOffset`; the block will not be automatically released if neither `ReleasedUtc` nor `RollingReleaseOffsetUtc` is specified. |
| `RollingReleaseOffset` | string | optional | Exact offset from the start of availability adjustments to the moment the individual days in the adjustment should be released, in ISO 8601 duration format. Mutually exclusive with `ReleasedUtc`; the block will not be automatically released if neither `ReleasedUtc` nor `RollingReleaseOffsetUtc` is specified. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the block from external system. |
| `Name` | string | optional | The name of the block in Mews. |
| `Notes` | string | optional | Additional notes of the block. |
| `PickupDistribution` | [Pickup distribution](availabilityblocks.md#pickup-distribution) | required | Whether assigning spaces to reservations within an availability block is done as a single group or divided into individual groups. |
| `IsActive` | boolean | required | Whether the `Availability Block` is still active. |
| `QuoteId` | string | optional | Unique identifier of the Mews Events quote associated with the availability block. |
| `AvailabilityBlockNumber` | string | required | Unique number for a specific availability block within the Mews system. |
| `ReleaseStrategy` | [Release strategy](availabilityblocks.md#release-strategy) | required | The strategy for automatic release of the availability block. |
| `PurchaseOrderNumber` | string | optional | Unique number of the purchase order. This number is propagated to any newly picked up `Reservation` within the block. |
| `BusinessSegmentId` | string | optional | Unique identifier of the associated `Business segment`. |
| `CanceledUtc` | string | optional | Date and time of the block cancellation in UTC timezone in ISO 8601 format. |
| `CancellationReason` | [Reservation cancellation reason](reservations.md#reservation-cancellation-reason) | optional | Cancellation reason of the availability block. |
| `CancellationReasonDetail` | string | optional | Additional details of availability block cancellation. |

#### Availability block state

* `Confirmed` - The block deducts availability and can have reservations assigned.
* `Optional` - The block deducts availability and cannot have reservations assigned.
* `Inquired` - The block does not deduct availability and cannot have reservations assigned (waitlist).
* `Canceled` - The block does not deduct availability and cannot have reservations assigned (waitlist).

#### Pickup distribution

* `AllInOneGroup` - All created reservations in the block are added to the same reservation group.
* `IndividualGroups` - Reservations can be picked up in multiple groups, with up to 750 reservations per group.

#### Release strategy

* `FixedRelease` - The availability block is released at a fixed time.
* `RollingRelease` - Each availability adjustment is released at a fixed offset from its start.
* `None` - The availability block is not automatically released.

## Add availability blocks

Adds availability blocks which are used to group related `Availability updates`. This makes limiting public availability easier and more organized. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

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
      "FirstTimeUnitStartUtc": "2020-11-05T00:00:00Z",
      "LastTimeUnitStartUtc": "2020-11-06T00:00:00Z",
      "ReleasedUtc": "2020-11-04T00:00:00Z",
      "Name": "Mr. Smith's block",
      "Budget": {
        "Currency": "USD",
        "Value": 48
      },
      "ExternalIdentifier": "Block-0001",
      "State": "Confirmed"
    },
    {
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "FirstTimeUnitStartUtc": "2021-11-05T00:00:00Z",
      "LastTimeUnitStartUtc": "2021-11-06T00:00:00Z",
      "Name": "Rolling release block",
      "Budget": {
        "Currency": "USD",
        "Value": 48
      },
      "ExternalIdentifier": "Block-0002",
      "State": "Confirmed"
    }
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `AvailabilityBlocks` | array of [Availability block parameters](availabilityblocks.md#availability-block-parameters) | required, max 1000 items | Availability blocks to be added. |

#### Availability block parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) to assign block to. |
| `RateId` | string | required | Unique identifier of the [Rate](rates.md#rate) to assign block to. |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first time unit, in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the first time unit, in UTC timezone ISO 8601 format. |
| `ReleasedUtc` | string | optional | The moment when the block and its availability is released, in UTC timezone ISO 8601 format. Takes precedence over `RollingReleaseOffset`. |
| `RollingReleaseOffset` | string | optional | Exact offset from the start of availability adjustments to the moment the availability adjustment should be released, in ISO 8601 duration format. Ignored if `ReleasedUtc` is specified. |
| `Name` | string | optional | The name of the block. |
| `VoucherCode` | string | optional | Voucher code providing access to specified private [Rate](rates.md#rate). |
| `BookerId` | string | optional | Unique identifier of the Booker as a creator of an availability block. |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company). |
| `TravelAgencyId` | string | optional | Unique identifier of travel agency (`Company` with a `TravelAgencyContract`). |
| `Budget` | [Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07) | optional | The tentative budget for the total price of reservations. |
| `ReservationPurpose` | [Reservation purpose](reservations.md#reservation-purpose) | optional | The purpose of the block. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the block from external system. |
| `Notes` | string | optional | Additional notes of the block. |
| `State` | [Availability block state](availabilityblocks.md#availability-block-state) | required | State of the availability block. |
| `QuoteId` | string | optional | Unique identifier of the Mews Events quote associated with the availability block. |
| `PurchaseOrderNumber` | string | optional | Unique number of the purchase order. This number is propagated to any newly picked up `Reservation` within the block. |
| `BusinessSegmentId` | string | optional | Unique identifier of the business segment. |
| `PickupDistribution` | [Pickup distribution](availabilityblocks.md#pickup-distribution) | optional | Specifies how reservations within the block are distributed for pickup. Defaults to `AllInOneGroup` if not provided. This value cannot be updated after creation. |

### Response

```javascript
{
  "AvailabilityBlocks": [
    {
      "Id": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
      "CompanyId": null,
      "TravelAgencyId": null,
      "Budget": {
        "Currency": "USD",
        "Value": 48,
        "Net": null,
        "Tax": null,
        "TaxRate": null
      },
      "State": "Confirmed",
      "ReservationPurpose": "Leisure",
      "CreatedUtc": "2020-11-04T13:00:00Z",
      "UpdatedUtc": "2020-11-04T13:00:00Z",
      "FirstTimeUnitStartUtc": "2020-11-04T13:00:00Z",
      "LastTimeUnitStartUtc": "2020-11-04T13:00:00Z",
      "ReleasedUtc": "2020-11-04T13:00:00Z",
      "RollingReleaseOffset": null,
      "ExternalIdentifier": "Block-0001",
      "Name": "Wedding group",
      "Notes": "Have a nice stay",
      "PickupDistribution": "AllInOneGroup",
      "IsActive": false,
      "QuoteId": null,
      "AvailabilityBlockNumber": "478",
      "ReleaseStrategy": "FixedRelease",
      "PurchaseOrderNumber": "XX-123",
      "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
      "CanceledUtc": null,
      "CancellationReason": null,
      "CancellationReasonDetail": null
    },
    {
      "Id": "c32386aa-1cd2-414a-a823-489325842fbe",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
      "CompanyId": null,
      "TravelAgencyId": null,
      "Budget": {
        "Currency": "USD",
        "Value": 48,
        "Net": null,
        "Tax": null,
        "TaxRate": null
      },
      "State": "Confirmed",
      "ReservationPurpose": "Leisure",
      "CreatedUtc": "2022-10-11T13:32:32Z",
      "UpdatedUtc": "2022-10-11T13:32:32Z",
      "FirstTimeUnitStartUtc": "2022-10-14T00:00:00Z",
      "LastTimeUnitStartUtc": "2022-11-17T00:00:00Z",
      "ReleasedUtc": null,
      "RollingReleaseOffset": "P-3DT4H",
      "ExternalIdentifier": "Block-0002",
      "Name": "Rolling release",
      "Notes": null,
      "PickupDistribution": "AllInOneGroup",
      "IsActive": false,
      "QuoteId": "67eaf3c8-81e0-4ffb-b5f2-2b61803feb9c",
      "AvailabilityBlockNumber": "479",
      "ReleaseStrategy": "RollingRelease",
      "PurchaseOrderNumber": null,
      "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
      "CanceledUtc": null,
      "CancellationReason": null,
      "CancellationReasonDetail": null
    }
  ],
  "ServiceOrders": null,
  "Adjustments": [
    {
      "Id": "e19297af-373e-4701-b4ea-afae0129bded",
      "AvailabilityBlockId": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
      "ResourceCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "StartUtc": null,
      "EndUtc": null,
      "FirstTimeUnitStartUtc": "2021-10-14T00:00:00Z",
      "LastTimeUnitStartUtc": "2021-10-17T00:00:00Z",
      "UnitCount": 6,
      "ActivityState": "Active",
      "ReleaseOverrideUtc": "2021-10-13T00:00:00Z",
      "UpdatedUtc": "2021-10-21T13:32:32Z",
      "IsActive": false,
      "PaxCounts": null,
      "FirstTimeUnitReleaseUtc": "2021-10-13T00:00:00Z"
    }
  ],
  "Rates": null,
  "Cursor": "c32386aa-1cd2-414a-a823-489325842fbe"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | array of [Availability block](availabilityblocks.md#availability-block) | required | Availability blocks. |

## Update availability blocks

Updates information about the specified `Availability block`. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/update`

```javascript
{
  "AvailabilityBlocks": [
    {
      "AvailabilityBlockId": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
      "Name": {
        "Value": "Mr. Smith's block"
      },
      "FirstTimeUnitStartUtc": {
        "Value": "2021-07-05T00:00:00Z"
      },
      "LastTimeUnitStartUtc": {
        "Value": "2021-07-15T00:00:00Z"
      },
      "ExternalIdentifier": {
        "Value": "Block-1002"
      },
      "State": {
        "Value": "Confirmed"
      },
      "ReservationPurpose": {
        "Value": "Business"
      },
      "BookerId": {
        "Value": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72"
      },
      "Notes": {
        "Value": "Welcome to Washington"
      },
      "Budget": {
        "Value": {
          "Currency": "USD",
          "Value": 48
        }
      },
      "ReleasedUtc": {
        "Value": "2021-07-04T00:00:00Z"
      },
      "QuoteId": {},
      "BusinessSegmentId": {
        "Value": "dc9188f6-fb61-412c-b3fd-af32dab082ed"
      }
    },
    {
      "AvailabilityBlockId": "c32386aa-1cd2-414a-a823-489325842fbe",
      "State": {
        "Value": "Canceled"
      },
      "CancellationReason": {
        "Value": "ForceMajeure"
      },
      "CancellationReasonDetail": {
        "Value": "Event was canceled due to rain."
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
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
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
| `TravelAgencyId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the travel agency (i.e. `Company`; or `null` if not updated). |
| `BookerId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the Booker as a creator of an availability block (or `null` if not updated). |
| `Notes` | [String update value](_objects.md#string-update-value) | optional | Additional notes of the block (or `null` if not updated). |
| `Budget` | [Currency value (ver 2018-06-07) update value](availabilityblocks.md#currency-value-ver-2018-06-07-update-value) | optional | The tentative budget for the total price of reservations (or `null` if not updated). |
| `CancellationReason` | [String update value](_objects.md#string-update-value) | optional | Cancellation reason of the availability block (or `null` if not updated). |
| `CancellationReasonDetail` | [String update value](_objects.md#string-update-value) | optional | Cancellation reason detail of the availability block (or `null` if not updated). |
| `RollingReleaseOffset` | [String update value](_objects.md#string-update-value) | optional | Exact offset from the start of availability adjustments to the moment the availability adjustment should be released, in ISO 8601 duration format. Required if `ReleaseStrategy` is set to `RollingRelease`, ignored otherwise. |
| `ReleasedUtc` | [String update value](_objects.md#string-update-value) | optional | The moment when the block and its availability is released, in UTC timezone ISO 8601 format. Required if `ReleaseStrategy` is set to `FixedRelease`, or used when `ReleaseStrategy` update is unspecified. |
| `ReleaseStrategy` | [Release strategy update value](availabilityblocks.md#release-strategy-update-value) | optional | The strategy for automatic release of the availability block (or `null` if not updated). |
| `QuoteId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the Mews Events quote associated with the availability block (or `null` if not updated). |
| `PurchaseOrderNumber` | [String update value](_objects.md#string-update-value) | optional | Unique number of the purchase order. This number is propagated to any newly picked up `Reservation` within the block. |
| `BusinessSegmentId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the Business segment. |

#### Currency value (ver 2018-06-07) update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Currency value (ver 2018-06-07)](_objects.md#currency-value-ver-2018-06-07) | optional | Value in the specified currency. |

#### Release strategy update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Release strategy](availabilityblocks.md#release-strategy) | required | The strategy for automatic release of the availability block. |

### Response

```javascript
{
  "AvailabilityBlocks": [
    {
      "Id": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
      "CompanyId": null,
      "TravelAgencyId": null,
      "Budget": {
        "Currency": "USD",
        "Value": 48,
        "Net": null,
        "Tax": null,
        "TaxRate": null
      },
      "State": "Confirmed",
      "ReservationPurpose": "Business",
      "CreatedUtc": "2020-11-04T13:00:00Z",
      "UpdatedUtc": "2020-11-05T16:11:38Z",
      "FirstTimeUnitStartUtc": "2021-07-05T00:00:00Z",
      "LastTimeUnitStartUtc": "2021-07-15T00:00:00Z",
      "ReleasedUtc": "2021-07-04T00:00:00Z",
      "RollingReleaseOffset": null,
      "ExternalIdentifier": "Block-1002",
      "Name": "Mr. Smith's block",
      "Notes": "Welcome to Washington",
      "PickupDistribution": "AllInOneGroup",
      "IsActive": false,
      "QuoteId": null,
      "AvailabilityBlockNumber": "478",
      "ReleaseStrategy": "FixedRelease",
      "PurchaseOrderNumber": "XX-123",
      "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
      "CanceledUtc": null,
      "CancellationReason": null,
      "CancellationReasonDetail": null
    },
    {
      "Id": "c32386aa-1cd2-414a-a823-489325842fbe",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
      "CompanyId": null,
      "TravelAgencyId": null,
      "Budget": {
        "Currency": "USD",
        "Value": 48,
        "Net": null,
        "Tax": null,
        "TaxRate": null
      },
      "State": "Canceled",
      "ReservationPurpose": "Leisure",
      "CreatedUtc": "2022-10-11T13:32:32Z",
      "UpdatedUtc": "2022-10-11T13:32:32Z",
      "FirstTimeUnitStartUtc": "2022-10-14T00:00:00Z",
      "LastTimeUnitStartUtc": "2022-11-17T00:00:00Z",
      "ReleasedUtc": null,
      "RollingReleaseOffset": "P-3DT4H",
      "ExternalIdentifier": "Block-0002",
      "Name": "Rolling release",
      "Notes": null,
      "PickupDistribution": "AllInOneGroup",
      "IsActive": false,
      "QuoteId": "67eaf3c8-81e0-4ffb-b5f2-2b61803feb9c",
      "AvailabilityBlockNumber": "479",
      "ReleaseStrategy": "RollingRelease",
      "PurchaseOrderNumber": null,
      "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
      "CanceledUtc": "2022-10-12T15:12:49Z",
      "CancellationReason": "ForceMajeure",
      "CancellationReasonDetail": "Event was canceled due to rain."
    }
  ],
  "ServiceOrders": null,
  "Adjustments": [
    {
      "Id": "e19297af-373e-4701-b4ea-afae0129bded",
      "AvailabilityBlockId": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
      "ResourceCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "StartUtc": null,
      "EndUtc": null,
      "FirstTimeUnitStartUtc": "2021-10-14T00:00:00Z",
      "LastTimeUnitStartUtc": "2021-10-17T00:00:00Z",
      "UnitCount": 6,
      "ActivityState": "Active",
      "ReleaseOverrideUtc": "2021-10-13T00:00:00Z",
      "UpdatedUtc": "2021-10-21T13:32:32Z",
      "IsActive": false,
      "PaxCounts": null,
      "FirstTimeUnitReleaseUtc": "2021-10-13T00:00:00Z"
    }
  ],
  "Rates": null,
  "Cursor": "c32386aa-1cd2-414a-a823-489325842fbe"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | array of [Availability block](availabilityblocks.md#availability-block) | required | Availability blocks. |

## Delete availability blocks

Delete availability blocks. Note that an availability block containing active reservations (reservations which are not Canceled) cannot be deleted. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/availabilityBlocks/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "AvailabilityBlockIds": [
    "5ee074b1-6c86-48e8-915f-c7aa4702086f",
    "c32386aa-1cd2-414a-a823-489325842fbe"
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `AvailabilityBlockIds` | array of string | required, max 1000 items | Unique identifier of the Availability block to delete. |

### Response

```javascript
{}
```
