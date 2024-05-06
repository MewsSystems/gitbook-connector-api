# Availability blocks

## Get all availability blocks

&gt; This feature is being actively developed, features and behavior of this operation may change at short notice.
Returns all availability blocks filtered by services, unique identifiers and other filters.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `Extent` | object | required | Extent of data to be returned, e.g. it is possible to specify that related service orders (for example reservations) are returned. |
| `ServiceIds` | array of string | optional, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service) to which [Availability blocks](https://mews-systems.gitbook.io/connector-api/operations/#availability-block) are assigned. |
| `AvailabilityBlockIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Availability blocks](https://mews-systems.gitbook.io/connector-api/operations/#availability-block). |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ReleasedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ExternalIdentifiers` | array of string | optional, max 1000 items | Identifiers of [Availability block](https://mews-systems.gitbook.io/connector-api/operations/#availability-block)s from external systems. |
| `States` | array of string | optional | States the availability blocks should be in. |
| `ActivityStates` | array of string | optional | Whether to return only active, only deleted or both records. |

#### AvailabilityBlockExtent
Extent of data to be returned, e.g. it is possible to specify that related service orders (for example reservations) are returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlocks` | boolean | required |  |
| `Adjustments` | boolean | required |  |
| `ServiceOrders` | boolean | required |  |
| `Rates` | boolean | required |  |

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
| `AvailabilityBlocks` | array of [Availability block](#AvailabilityBlock) | optional | Availability blocks. |
| `ServiceOrders` | array of [ReservationOld](#ReservationOld) | optional | Service orders (for example reservations) linked to availability blocks. |
| `Adjustments` | array of [Availability adjustment](#AvailabilityAdjustment) | optional | Availability adjustments of availability blocks. |
| `Rates` | array of [Rate](#Rate) | optional |  |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Availability block

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the availability block. |
| `EnterpriseId` | string | required |  |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) the block is assigned to. |
| `RateId` | string | required | Unique identifier of the [Rate](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate) the block is assigned to. |
| `VoucherId` | string | optional | Unique identifier of the [Voucher](https://mews-systems.gitbook.io/connector-api/operations/vouchers/#voucher) used to access specified private [Rate](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate). |
| `BookerId` | string | optional | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) on whose behalf the block was made. |
| `CompanyId` | string | optional | Unique identifier of the [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) linked to the block. |
| `TravelAgencyId` | string | optional |  |
| `Budget` | object | required | Total price of the reservation. |
| `State` | string | optional | State of the availability block. |
| `ReservationPurpose` | string | optional | The purpose of the block. |
| `CreatedUtc` | string | optional | Creation date and time of the block in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | optional | Last update date and time of the block in UTC timezone in ISO 8601 format. |
| `ActivityState` | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `FirstTimeUnitStartUtc` | string | optional | Start of the time interval, expressed as the timestamp for the start of the first [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | optional | End of the time interval, expressed as the timestamp for the start of the last [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `ReleasedUtc` | string | optional | The moment when the block and its availability is released in UTC timezone in ISO 8601 format. |
| `RollingReleaseOffset` | string | optional |  |
| `ExternalIdentifier` | string | optional | Identifier of the block from external system. |
| `Name` | string | optional | The name of the block in Mews. |
| `Notes` | string | optional | Additional notes of the block. |
| `PickupDistribution` | [PickupDistribution](#X-Ref-Name-PickupDistribution) | required |  |

#### CurrencyValueOld
Total price of the reservation.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |

#### PickupDistribution

- `AllInOneGroup`
- `IndividualGroups`

#### ReservationOld
The added reservation.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `ServiceId` | string | required |  |
| `GroupId` | string | required |  |
| `Number` | string | optional |  |
| `ChannelNumber` | string | optional |  |
| `ChannelManagerNumber` | string | optional |  |
| `ChannelManagerGroupNumber` | string | optional |  |
| `ChannelManager` | string | optional |  |
| `State` | string | optional |  |
| `Origin` | string | optional |  |
| `OriginDetails` | string | optional |  |
| `Purpose` | string | optional |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |
| `CancelledUtc` | string | optional |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `ReleasedUtc` | string | optional |  |
| `RequestedCategoryId` | string | required |  |
| ~~`AssignedSpaceId`~~ | string | optional |  |
| `AssignedResourceId` | string | optional |  |
| ~~`AssignedSpaceLocked`~~ | boolean | required |  |
| `AssignedResourceLocked` | boolean | required |  |
| `BusinessSegmentId` | string | optional |  |
| `CompanyId` | string | optional |  |
| `TravelAgencyId` | string | optional |  |
| `AvailabilityBlockId` | string | optional |  |
| `RateId` | string | required |  |
| `VoucherId` | string | optional |  |
| `CreditCardId` | string | optional |  |
| `CancellationReason` | string | optional |  |
| ~~`AdultCount`~~ | integer | required |  |
| ~~`ChildCount`~~ | integer | required |  |
| `PersonCounts` | array of [PersonCount](#PersonCount) | optional |  |
| `OwnerId` | string | required |  |
| ~~`CustomerId`~~ | string | optional |  |
| `BookerId` | string | optional |  |
| ~~`CompanionIds`~~ | array of string | optional |  |
| ~~`ChannelManagerId`~~ | string | optional |  |
| `Options` | object | required |  |

#### PersonCount

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required |  |
| `Count` | integer | required |  |

#### ReservationOptions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OwnerCheckedIn` | boolean | required |  |
| `AllCompanionsCheckedIn` | boolean | required |  |
| `AnyCompanionCheckedIn` | boolean | required |  |

#### Availability adjustment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the [Availability adjustment](https://mews-systems.gitbook.io/connector-api/operations/#availability-adjustment). |
| `AvailabilityBlockId` | string | optional | Unique identifier of the [Availability block](https://mews-systems.gitbook.io/connector-api/operations/availabilityblocks/#availability-block) which the availability adjustment belongs to. |
| `ResourceCategoryId` | string | required | Unique identifier of the [Resource category](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource-category) whose availability is updated. |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `FirstTimeUnitStartUtc` | string | required | Start of the time interval, expressed as the timestamp for the start of the first [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `LastTimeUnitStartUtc` | string | required | End of the time interval, expressed as the timestamp for the start of the last [time unit](https://mews-systems.gitbook.io/connector-api/operations/services/#time-unit), in UTC timezone ISO 8601 format. |
| `UnitCount` | integer | required | Adjustment value applied on the interval. |
| `ActivityState` | [ActivityState](#X-Ref-Name-ActivityState) | required |  |
| `ReleaseOverrideUtc` | string | optional |  |
| `UpdatedUtc` | string | required | Last update date and time of the adjustment in UTC timezone in ISO 8601 format. |

#### ActivityState

- `Deleted`
- `Active`

#### ActivityState

- `Deleted`
- `Active`

#### Rate

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](https://mews-systems.gitbook.io/connector-api/operations/#rate-group) where the rate belongs. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `BaseRateId` | string | optional | Unique identifier of the base [Rate](https://mews-systems.gitbook.io/connector-api/operations/#rate). |
| `BusinessSegmentId` | string | optional | Unique identifier of the [Business segment](https://mews-systems.gitbook.io/connector-api/operations/businesssegments/#business-segment). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsEnabled` | boolean | required | Whether the rate is currently available to customers. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Type` | [RateType](#X-Ref-Name-RateType) | required | Type of the rate |
| `Name` | string | optional | Name of the rate (in the default language). |
| `ShortName` | string | optional | Short name of the rate (in the default language). |
| `UpdatedUtc` | string | required |  |
| `ExternalNames` | object | optional | All translations of the external name of the rate. |
| `Description` | object | optional | All translations of the description of the rate. |
| `ExternalIdentifier` | string | optional | Identifier of the rate from external system. |

#### RateType

- `Public`
- `Private`
- `AvailabilityBlock`

## Add availability blocks

&gt; This feature is being actively developed, features and behavior of this operation might change on short notice.
Adds availability blocks which are used to group related [Availability updates](https://mews-systems.gitbook.io/connector-api/operations/#availability-update). This makes limiting public availability easier and more organized. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `AvailabilityBlocks` | array of [AvailabilityBlockAddParameters](#AvailabilityBlockAddParameters) | required, max 1000 items | Availability blocks to be added. |

#### AvailabilityBlockAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required |  |
| `RateId` | string | required |  |
| `FirstTimeUnitStartUtc` | string | required |  |
| `LastTimeUnitStartUtc` | string | required |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `ReleasedUtc` | string | required |  |
| `Name` | string | optional |  |
| `VoucherCode` | string | optional |  |
| `BookerId` | string | optional |  |
| `CompanyId` | string | optional |  |
| `TravelAgencyId` | string | optional |  |
| `Budget` | object | required | Total price of the reservation. |
| `ReservationPurpose` | [ReservationPurpose](#X-Ref-Name-ReservationPurpose) | required |  |
| `ExternalIdentifier` | string | optional |  |
| `Notes` | string | optional |  |
| `State` | [AvailabilityBlockState](#X-Ref-Name-AvailabilityBlockState) | required |  |

#### ReservationPurpose

- `Leisure`
- `Business`
- `Student`

#### AvailabilityBlockState

- `Confirmed`
- `Optional`
- `Inquired`
- `Canceled`

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
| `AvailabilityBlocks` | array of [Availability block](#AvailabilityBlock) | optional | Availability blocks. |

## Delete availability blocks

Delete availability blocks. Note that an availability block containing active reservations (reservations which are not &#x60;Canceled&#x60;) cannot be deleted.

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `AvailabilityBlockIds` | array of string | required, max 1000 items | Unique identifier of the Availability block to delete. |

### Response

```javascript
{}
```

## Update availability blocks

&gt; This feature is being actively developed, features and behavior of this operation might change on short notice.
Updates information about the specified [Availability block](https://mews-systems.gitbook.io/connector-api/operations/#availability-block).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `AvailabilityBlocks` | array of [AvailabilityBlockUpdateParameters](#AvailabilityBlockUpdateParameters) | optional | Availability blocks to be updated. |

#### AvailabilityBlockUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AvailabilityBlockId` | string | required |  |
| `Name` | object | required |  |
| `FirstTimeUnitStartUtc` | object | required |  |
| `LastTimeUnitStartUtc` | object | required |  |
| `StartUtc` | object | required |  |
| `EndUtc` | object | required |  |
| `ReleasedUtc` | object | required |  |
| `ExternalIdentifier` | object | required |  |
| `State` | object | required |  |
| `ReservationPurpose` | object | required |  |
| `CompanyId` | object | required |  |
| `TravelAgencyId` | object | required |  |
| `BookerId` | object | required |  |
| `Notes` | object | required |  |
| `Budget` | object | required |  |
| `CancellationReason` | object | required |  |
| `CancellationReasonDetail` | object | required |  |

#### CurrencyValueOldUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | object | required | Total price of the reservation. |

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
| `AvailabilityBlocks` | array of [Availability block](#AvailabilityBlock) | optional | Availability blocks. |
