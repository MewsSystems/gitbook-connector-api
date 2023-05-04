# Service order

## Get all service orders

Returns all service orders associated with the given enterprise. This operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/serviceOrders/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ServiceIds": [
        "ae8da28c-e8a4-4141-9df0-8c998976c691",
        "6b02d015-47ac-4c41-8e9f-5b4db61d4284"
    ],
    "UpdatedUtc": {
      "StartUtc": "2023-04-01T00:00:00Z",
       "EndUtc": "2023-05-05T00:00:00Z"
    },
    "Limitation":{
        "Cursor": "819e3435-7d5e-441f-bc68-76d89c69b8f5", 
        "Count": 10
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ServiceOrderIds` | array of string | optional, max 1000 items | Unique identifiers of the [Service orders](serviceorders.md#service-order). |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](services.md#service). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of accounts (for example [Customers](customers.md#customer) or [Companies](companies.md#company)) the service order is associated with. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](currencies.md#currency) the item costs should be converted to. |
| `States` | array of string [Service order state](#service-order-state) | optional | A list of service order states to filter by. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Service orders](serviceorders.md#service-order) were created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Service orders](serviceorders.md#service-order) were updated. |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Service orders](serviceorders.md#service-order) are active. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "ServiceOrders": [
        {
            "Id": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7",
            "EnterpriseId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "ServiceId": "ae8da28c-e8a4-4141-9df0-8c998976c691",
            "AccountId": "94843f6f-3be3-481b-a1c7-06458774c3df",
            "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
            "Number": "52",
            "State": "Confirmed",
            "Origin": "Connector",
            "OriginDetails": null,
            "CreatedUtc": "2023-04-23T14:58:02Z",
            "UpdatedUtc": "2023-04-23T14:58:02Z",
            "CancelledUtc": null,
            "VoucherId": null,
            "BusinessSegmentId": null,
            "PersonCounts": [
                {
                    "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
                    "Count": 2
                },
                {
                    "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
                    "Count": 2
                }
            ],
            "CompanionIds": [
                "5560f6d4-b029-4eaa-a48f-cd8734db6876",
                "701459d7-730a-4d9f-b728-f865249b70d4"
            ],
            "Data":{
                "Discriminator": "Reservation",
                "Reservation":{
                    "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
                    "CreditCardId": null,
                    "GroupId": null,
                    "RequestedResourceCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
                    "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714"
                    "AvailabilityBlockId": null,
                    "PartnerCompanyId": null,
                    "TravelAgencyId": null,
                    "AssignedResourceLocked": false,
                    "ChannelNumber": "TW48ZP",
                    "ChannelManager": "",
                    "ChannelManagerGroupNumber": null,
                    "ChannelManagerNumber": null,
                    "CancellationReason": null,
                    "UpdatedUtc": "2023-04-23T14:58:02Z",
                    "ReservationPurpose": "Leisure",
                    "Options": {
                        "OwnerCheckedIn": true,
                        "AllCompanionsCheckedIn": true,
                        "AnyCompanionCheckedIn": true
                    }
                },
                "ProductServiceOrder": null
            }
        }
    ],
    "Cursor": "ea7da00f-fdc9-4014-b0f7-71003b87e3d0"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrders` | array of [Service orders](#service-order) | required | The service orders of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Service order

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service order. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](enterprises.md#enterprise). |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) that service order is made againts. |
| `AccountId` | string | required | Unique identifier of the [Customer](customers.md#customer) or a [Company](companies.md#company) who owns the service order. |
| `BookerId` | string | optional | Unique identifier of the [Customer](customers.md#customer) on whose behalf the service order was made. |
| `Number` | string | required | Confirmation number of the service order in Mews. |
| `State` | string [Service order state](#service-order-state) | required | State of the service order. |
| `Origin` | string [Service order origin](#service-order-origin) | required | Origin of the service order. |
| `OriginDetails`| string | optional | Details about the service order [origin](#service-order-origin). |
| `CreatedUtc` | string | required | Creation date and time of the service order in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the service order in UTC timezone in ISO 8601 format. |
| `CancelledUtc` | string | optional | Cancellation date and time in UTC timezone in ISO 8601 format. |
| `VoucherId` | string | optional | Unique identifier of the [Voucher](vouchers.md#voucher) that has been used to create service order. |
| `BusinessSegmentId` | string | optional | Identifier of the service order [Business segment](businesssegments.md#business-segment). |
| `Data` | object [Service order data](#service-order-data) | optional | Additional service order data. |

#### Service order data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Service order data discriminator](#service-order-data-discriminator) | required | Discriminator pointing to the fields within this object that contains additional data. |
| `Reservation` | object [Reservation](#reservation-data)| optional | Contains additional data in the case of reservation. |
| `ProductServiceOrder` | object | optional | Currently do not hold any additional data in the case of product service order. |

#### Reservation data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `RateId` | string | required | Identifier of the reservation [Rate](rates.md#rate). |
| `CreditCardId` | string | optional | Unique identifier of the [Credit card](creditcards.md#credit-card). |
| `GroupId` | string | required | Unique identifier of the [Reservation group](reservations.md#reservation-group). |
| `RequestedResourceCategoryId` | string | required | Unique identifier of the [Resource category](resources.md#resource-category). |
| `AssignedResourceId` | string | optional | Identifier of the assigned [Resource](resources.md#resource). |
| `AvailabilityBlockId` | string | optional | Unique identifier of the [Availability block](availabilityblocks.md#availability-block) the reservation is assigned to. |
| `CompanyId` | string | optional | Identifier of the [Company](companies.md#company) on behalf of which the reservation was made. |
| `TravelAgencyId` | string | optional | Identifier of the [Company](companies.md#company) that mediated the reservation. | 
| `AssignedResourceLocked` | bool | required | Whether the reservation is locked to the assigned [Resource](resources.md#resource) and cannot be moved. |
| `ChannelNumber` | string | optional | Number of the reservation within the Channel \(i.e. OTA, GDS, CRS, etc\) in case the reservation group originates there \(e.g. Booking.com confirmation number\). |
| `ChannelManagerNumber` | string | optional | Unique number of the reservation within the reservation group. |
| `ChannelManagerGroupNumber` | string | optional | Number of the reservation group within a Channel manager that transferred the reservation from Channel to Mews. |
| `ChannelManager` | string | optional | Name of the Channel manager \(e.g. AvailPro, SiteMinder, TravelClick, etc\). |
| `CancellationReason` | string [Cancellation reason](#reservation-cancellation-reason) | optional | Cancellation reason of the reservation. |
| `ReleasedUtc` | string | optional | Date when the optional reservation is released in UTC timezone in ISO 8601 format. |
| `Purpose` | string [Reservation purpose](reservations.md#reservation-purpose) | optional | Purpose of the reservation. |
| `Options` | string [Reservation options](reservations.md#reservation-options) | optional | Options of the reservations. |
| `PersonCounts` | array of [Person count](#person-count) | required | Number of people per age category the service order was booked for. |

#### Person count

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required | Unique identifier of the [Age category](agecategories.md#age-category). |
| `Count` | string | required | Number of people of a given age category. Only positive value is accepted. |

#### Reservation options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OwnerCheckedIn` | boolean | required | Owner of the reservation checked in. |
| `AllCompanionsCheckedIn` | boolean | required | All companions of the reservation checked in. |
| `AnyCompanionCheckedIn` | boolean | required | Any of the companions of the reservation checked in. |

#### Service order state

* `Enquired` - Confirmed neither by the customer nor enterprise.
* `Requested` - Confirmed by the customer but not by the enterprise \(waitlist\).
* `Optional` - Confirmed by enterprise but not by the guest \(the enterprise is holding resource for the guest\).
* `Confirmed` - Confirmed by both parties, before check-in.
* `Started` - Checked in.
* `Processed` - Checked out.
* `Canceled` - Canceled.

#### Service order origin

* `Distributor` - Service order from the Mews Booking Engine or Booking Engine API
* `ChannelManager` - Service order from a channel integration
* `Commander` - Service order from Mews Operations
* `Import` - Service order from an import process
* `Connector` - Service order from the Mews Connector API
* `Navigator` - Service order from Mews Guest Services
* ...

#### Service order data discriminator

* `Reservation`
* `ProductServiceOrder`
* ...

#### Reservation cancellation reason

* `Other`
* `ConfirmationMissed`
* `BookedElsewhere`
* `ForceMajeure`
* `GuestComplaint`
* `NoShow`
* `PriceTooHigh`
* `ServiceNotAvailable`
* `InputError`
* `InvalidPayment`
* `TravelAgency`
* `RequestedByGuest`
* `Update`
* `BookingAbandoned`
* `RequestedByBooker`
* ...
