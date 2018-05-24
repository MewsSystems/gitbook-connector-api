# Reservations

## Get all reservations

Returns all reservations from the specified interval according to the time filter \(e.g. colliding with that interval or created in that interval\).

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2016-01-01T00:00:00Z",
    "EndUtc": "2016-01-07T00:00:00Z",
    "Extent": {
        "Reservations": true,
        "ReservationGroups": true,
        "Customers": true
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `TimeFilter` | string [Reservation time filter](reservations.md#reservation-time-filter) | optional | Time filter of the interval. If not specified, reservations `Colliding` with the interval are returned. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `States` | array of string [Reservation state](reservations.md#reservation-state) | optional | States the reservations should be in. If not specified, reservations in `Confirmed`, `Started` or `Processed` states are returned. |
| `Extent` | [Reservation extent](reservations.md#reservation-extent) | optional | Extent of data to be returned. E.g. it is possible to specify that together with the reservations, customers, groups and rates should be also returned. If not specified, `Reservations`, `Groups` and `Customers` is used as the default extent. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](configuration.md#currency) the item costs should be converted to. |

#### Reservation time filter

* `Colliding` - reservation interval collides with the interval.
* `Created` - reservation created within the interval.
* `Updated` - reservation updated \(or created\) within the interval.
* `Start`- reservation start \(= arrival\) within the interval.
* `End` - reservation end \(= departure\) within the interval.
* `Overlapping` - reservation interval contains the specified interval.
* `Canceled` - reservation cancelled within the specified interval.

#### Reservation extent

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `BusinessSegments` | bool | optional | Whether the response should contain business segmentation. |
| `Customers` | bool | optional | Whether the response should contain customers of the reservations. |
| `Items` | bool | optional | Whether the response should contain reservation items. |
| `Products` | bool | optional | Whether the response should contain products orderable with the reservations. |
| `Rates` | bool | optional | Whether the response should contain rates and rate groups. |
| `Reservations` | bool | optional | Whether the response should contain reservations. |
| `ReservationGroups` | bool | optional | Whether the response should contain groups of the reservations. |
| `Services` | bool | optional | Whether the response should contain services reserved by the reservations. |
| `Spaces` | bool | optional | Whether the response should contain spaces and space categories. |

### Response

```javascript
{
    "BusinessSegments": null,
    "Customers": [
        {
            "Address": null,
            "BirthDate": null,
            "BirthPlace": null,
            "CategoryId": null,
            "Classifications": [],
            "CreatedUtc": "2016-01-01T00:00:00Z",
            "Email": null,
            "FirstName": "John",
            "Gender": null,
            "Id": "35d4b117-4e60-44a3-9580-c582117eff98",
            "IdentityCard": null,
            "LanguageCode": null,
            "LastName": "Smith",
            "LoyaltyCode": null,
            "NationalityCode": "US",
            "Notes": "",
            "Number": "1",
            "Passport": null,
            "Phone": "00420123456789",
            "SecondLastName": null,
            "TaxIdentificationNumber": null,
            "Title": null,
            "UpdatedUtc": "2016-01-01T00:00:00Z",
            "Visa": null
        }
    ],
    "Items": null,
    "Products": null,
    "RateGroups": null,
    "Rates": null,
    "ReservationGroups": [
        {
            "Id": "c704dff3-7811-4af7-a3a0-7b2b0635ac59",
            "Name": "13-12-Smith-F712"
        }
    ],
    "Reservations": [
        {
            "AdultCount": 2,
            "AssignedSpaceId": "20e00c32-d561-4008-8609-82d8aa525714",
            "AssignedSpaceLocked": false,
            "BusinessSegmentId": null,
            "CancelledUtc": null,
            "ChannelNumber": "1337614414",
            "ChannelManagerNumber": "01",
            "ChannelManagerGroupNumber": "JX8PA2",
            "ChannelManager": "AvailPro",
            "ChildCount": 0,
            "CompanionIds": [
                "35d4b117-4e60-44a3-9580-c582117eff98"
            ],
            "CompanyId": null,
            "CreatedUtc": "2016-02-20T14:58:02Z",
            "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "EndUtc": "2016-02-22T11:00:00Z",
            "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
            "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
            "Number": "52",
            "Origin": "Manual",
            "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "StartUtc": "2016-02-20T13:00:00Z",
            "State": "Processed",
            "TravelAgencyId": null,
            "UpdatedUtc": "2016-02-20T14:58:02Z"
        }
    ],
    "Services": null,
    "SpaceCategories": null,
    "Spaces": null
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `BusinessSegments` | array of [Business segment](services.md#business-segment) | optional | Business segments of the reservations. |
| `Customers` | array of [Customer](customers.md#customer) | optional | Customers that are members of the reservations. |
| `Items` | array of [Accounting item](finance.md#accounting-item) | optional | Revenue items of the reservations. |
| `Products` | array of [Product](services.md#product) | optional | Products orderable with reservations. |
| `RateGroups` | array of [Rate group](services.md#rate-group) | optional | Rate groups of the reservation rates. |
| `Rates` | array of [Rate](services.md#rate) | optional | Rates of the reservations. |
| `ReservationGroups` | array of [Reservation group](reservations.md#reservation-group) | optional | Reservation groups that the reservations are members of. |
| `Reservations` | array of [Reservation](reservations.md#reservation) | optional | The reservations that collide with the specified interval. |
| `Services` | array of [Service](services.md#service) | optional | Services that have been reserved. |
| `SpaceCategories` | array of [Space category](enterprises.md#space-category) | optional | Space categories of the spaces. |
| `Spaces` | array of [Space](enterprises.md#space) | optional | Assigned spaces of the reservations. |

#### Reservation

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the reservation. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) that is reserved. |
| `GroupId` | string | required | Unique identifier of the [Reservation group](reservations.md#reservation-group). |
| `Number` | string | required | Confirmation number of the reservation in Mews. |
| `ChannelNumber` | string | optional | Number of the reservation within the Channel \(i.e. OTA, GDS, CRS, etc\) in case the reservation group originates there \(e.g. Booking.com confirmation number\). |
| `ChannelManagerNumber` | string | optional | Unique number of the reservation within the reservation group. |
| `ChannelManagerGroupNumber` | string | optional | Number of the reservation group within a Channel manager that transferred the reservation from Channel to Mews. |
| `ChannelManager` | string | optional | Name of the Channel manager \(e.g. AvailPro, SiteMinder, TravelClick, etc\). |
| `State` | string [Reservation state](reservations.md#reservation-state) | required | State of the reservation. |
| `Origin` | string [Reservation origin](reservations.md#reservation-origin) | required | Origin of the reservation. |
| `CreatedUtc` | string | required | Creation date and time of the reservation in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the reservation in UTC timezone in ISO 8601 format. |
| `StartUtc` | string | required | Start of the reservation \(arrival\) in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the reservation \(departure\) in UTC timezone in ISO 8601 format. |
| `CancelledUtc` | string | optional | Cancellation date and time in UTC timezone in ISO 8601 format. |
| `RequestedCategoryId` | string | required | Identifier of the requested [Space category](enterprises.md#space-category). |
| `AssignedSpaceId` | string | optional | Identifier of the assigned [Space](enterprises.md#space). |
| `AssignedSpaceLocked` | bool | required | Whether the reservation is locked in the assigned [Space](enterprises.md#space) and cannot be moved. |
| `BusinessSegmentId` | string | optional | Identifier of the reservation [Business segment](services.md#business-segment). |
| `CompanyId` | string | optional | Identifier of the [Company](enterprises.md#company) on behalf of which the reservation was made. |
| `TravelAgencyId` | string | optional | Identifier of the [Company](enterprises.md#company) that mediated the reservation. |
| `RateId` | string | required | Identifier of the reservation [Rate](services.md#rate). |
| `AdultCount` | number | required | Count of adults the reservation was booked for. |
| `ChildCount` | number | required | Count of children the reservation was booked for. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer) who owns the reservation. |
| `CompanionIds` | array of string | required | Unique identifiers of [Customer](customers.md#customer)s that will occupy the space. |

#### Reservation state

* `Enquired` - Confirmed neither by the customer nor enterprise.
* `Requested` - Confirmed by the customer but not by the enterprise \(waitlist\).
* `Optional` - Confirmed by enterprise but not by the guest \(the enterprise is holding space for the guest\).
* `Confirmed` - Confirmed by both parties, before check-in.
* `Started` - Checked in.
* `Processed` - Checked out.
* `Canceled` - Canceled.

#### Reservation origin

* `ChannelManager`
* `Connector`
* `Distributor`
* `Import`
* `ManualEmail`
* `ManualWebsite`
* ...       

#### Reservation group

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the reservation group. |
| `Name` | string | optional | Name of the reservation group, might be empty or same for multiple groups. |

## Get all reservations by ids

Returns all reservations with the specified unique identifiers.

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAllByIds`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationIds": [
        "2b6212d4-55d5-47ba-b8d2-da07be15bce9",
        "0e2983e9-5ac1-4fd9-9f76-76565c1a9b67"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationIds` | array of string | required | Unique identifiers of [Reservation](reservations.md#reservation)s to be returned. |
| `Extent` | [Reservation extent](reservations.md#reservation-extent) | optional | Extent of data to be returned. |

### Response

Same structure as in [Get all reservations](reservations.md#get-all-reservations) operation.

## Get all reservations by customers

Returns all reservations owned by the specified customers.

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAllByCustomers`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Unique identifiers of [Customer](customers.md#customer)s owning the reservations. |
| `Extent` | [Reservation extent](reservations.md#reservation-extent) | optional | Extent of data to be returned. |

### Response

Same structure as in [Get all reservations](reservations.md#get-all-reservations) operation.

## Get all reservation items

Returns all revenue items associated with the specified reservations.

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAllItems`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationIds": [
        "e6ea708c-2a2a-412f-a152-b6c76ffad49b"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationIds` | array of string | required | Unique identifiers of the [Reservation](reservations.md#reservation)s. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](configuration.md#currency) the item costs should be converted to. |

### Response

```javascript
{
    "Reservations": [
        {
            "Items": [
                {
                    "AccountingCategoryId": "0cf7aa90-736f-43e9-a7dc-787704548d86",
                    "Amount": {
                        "Currency": "GBP",
                        "Net": 16.67,
                        "Tax": 3.33,
                        "TaxRate": 0.2,
                        "Value": 20
                    },
                    "BillId": null,
                    "ClosedUtc": "2017-02-41T10:41:54Z",
                    "ConsumptionUtc": "2016-03-10T13:00:00Z",
                    "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
                    "Id": "784a29df-6196-4402-96a0-58695a881239",
                    "InvoiceId": null,
                    "Name": "Night 3/10/2016",
                    "Notes": null,
                    "OrderId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
                    "ProductId": null,
                    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
                    "Type": "ServiceRevenue"
                }
            ],
            "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Reservations` | array of [Reservation items](reservations.md#reservation-items) | required | The reservations with their items. |

#### Reservation items

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation). |
| `Items` | array of [Accounting item](finance.md#accounting-item) | required | The items associated with the reservation. |

## Price reservations

Returns prices of reservations with the specified parameters.

### Request

`[PlatformAddress]/api/connector/v1/reservations/price`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "Reservations": [
        {
            "Identifier": "1234",
            "StartUtc": "2018-01-01T14:00:00Z",
            "EndUtc": "2018-01-02T10:00:00Z",
            "AdultCount": 2,
            "ChildCount": 0,
            "RequestedCategoryId": "0a5da171-3663-4496-a61e-35ecbd78b9b1",
            "RateId": "33667cab-f17f-4089-ad07-c2cd50fa0df1",
            "Notes": "Test reservation",
            "ProductOrders": [
                {
                    "ProductId": "3dc5d79b-67ce-48ed-9238-47fcf5d1a59f"
                }
            ]
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) to be priced. |
| `Reservations` | array of [Reservation parameters](reservations.md#reservation-parameters) | required | Parameters of the reservations to price. Note that `CustomerId` is not required when pricing reservations. |

### Response

```javascript
{
    "ReservationPrices": [
        {
            "Identifier": "1234",
            "Total": {
                "Currency": "GBP",
                "Net": 20,
                "Tax": 3,
                "TaxRate": null,
                "Value": 23
            }
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ReservationPrices` | array of [Reservation price](reservations.md#reservation-price) | required | The reservation prices. |

#### Reservation price

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the reservation within the transaction. |
| `Total` | [Currency value](finance.md#currency-value) | required | Total price of the reservation. |

## Add reservations

Adds the specified reservations as a single group.

### Request

`[PlatformAddress]/api/connector/v1/reservations/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "Reservations": [
        {
            "Identifier": "1234",
            "StartUtc": "2018-01-01T14:00:00Z",
            "EndUtc": "2018-01-02T10:00:00Z",
            "AdultCount": 2,
            "ChildCount": 0,
            "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
            "RequestedCategoryId": "0a5da171-3663-4496-a61e-35ecbd78b9b1",
            "RateId": "33667cab-f17f-4089-ad07-c2cd50fa0df1",
            "Notes": "Test reservation",
            "ProductOrders": [
                {
                    "ProductId": "3dc5d79b-67ce-48ed-9238-47fcf5d1a59f"
                }
            ]
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) to be reserved. |
| `Reservations` | array of [Reservation parameters](reservations.md#reservation-parameters) | required | Parameters of the new reservations. |

#### Reservation parameters

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the reservation within the transaction. |
| `State` | string [Reservation state](reservations.md#reservation-state) | optional | State of the newly created reservation \(either `Optional` or `Confirmed`\). If not specified, `Confirmed` is used. |
| `StartUtc` | string | required | Reservation start in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | Reservation end in UTC timezone in ISO 8601 format. |
| `AdultCount` | number | required | Count of adults the reservation is for. |
| `ChildCount` | number | required | Count of children the reservation is for. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer) who owns the reservation. |
| `RequestedCategoryId` | string | required | Identifier of the requested [Space category](enterprises.md#space-category). |
| `RateId` | string | required | Identifier of the reservation [Rate](services.md#rate). |
| `Notes` | string | optional | Additional notes. |
| `ProductOrders` | array of [Product order parameters](services.md#product-order-parameters) | optional | Parameters of the products ordered together with the reservation. |

### Response

```javascript
{
    "Reservations": [
        {
            "Identifier": "1234",
            "Reservation":
            {
                "AdultCount": 2,
                "AssignedSpaceId": "16ce4335-2198-408b-8949-9722894a42fb",
                "AssignedSpaceLocked": false,
                "BusinessSegmentId": "7760b5cb-a666-41bb-9758-76bf5d1df399",
                "CancelledUtc": null,
                "ChannelManager": "",
                "ChannelManagerGroupNumber": null,
                "ChannelManagerNumber": null,
                "ChannelNumber": null,
                "ChildCount": 0,
                "CompanionIds": [
                    "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a"
                ],
                "CompanyId": null,
                "CreatedUtc": "2017-08-03T13:32:35Z",
                "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
                "EndUtc": "2018-01-02T09:00:00Z",
                "GroupId": "4c79d393-53e1-45fd-bd24-2b0a36b4b3e6",
                "Id": "cfdfb9a1-b613-4cc1-b6c1-dfbb574c0f0e",
                "Number": "870",
                "Origin": "Manual",
                "RateId": "33667cab-f17f-4089-ad07-c2cd50fa0df1",
                "RequestedCategoryId": "0a5da171-3663-4496-a61e-35ecbd78b9b1",
                "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
                "StartUtc": "2018-01-01T14:00:00Z",
                "State": "Confirmed",
                "TravelAgencyId": null,
                "UpdatedUtc": "2017-08-03T13:32:35Z"
            }
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Reservations` | array of [Added reservation](reservations.md#added-reservation) | required | The added reservations. |

#### Added reservation

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the reservation within the transaction. |
| `Reservation` | [Reservation](reservations.md#reservation) | required | The added reservation. |

## Start reservation

Marks a reservation as `Started` \(= checked in\). Succeeds only if all starting conditions are met \(the reservation has the `Confirmed` state, does not have start set to future, has an inspected room assigned etc\).

### Request

`[PlatformAddress]/api/connector/v1/reservations/start`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation) to start. |

### Response

```javascript
{}
```

## Process reservation

Marks a reservation as `Processed` \(= checked out\). Succeeds only if all processing conditions are met \(the reservation has the `Started` state, balance of all reservation members is zero etc\).

### Request

`[PlatformAddress]/api/connector/v1/reservations/process`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "CloseBills": false,
    "AllowOpenBalance": false,
    "Notes": null
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation) to process. |
| `CloseBills` | bool | optional | Whether closable bills of the reservation members should be automatically closed. |
| `AllowOpenBalance` | bool | optional | Whether non-zero consumed balance of all reservation members is allowed. |
| `Notes` | string | optional | Notes of the event, required if `AllowOpenBalance` set to `true`. |

### Response

```javascript
{}
```

## Cancel reservation

Cancels a reservation. Succeeds only if the reservation is cancellable.

### Request

`[PlatformAddress]/api/connector/v1/reservations/cancel`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "ChargeCancellationFee": true,
    "Notes": "Cancellation through Connector API"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation) to cancel. |
| `ChargeCancellationFee` | boolean | required | Whether cancellation fees should be charged according to rate conditions. |
| `Notes` | string | required | Addiotional notes describing the cancellation. |

### Response

```javascript
{}
```

## Update reservation customer

Updates reservation's customer.

### Request

`[PlatformAddress]/api/connector/v1/reservations/updateCustomer`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "209d984d-4985-4efb-96ec-f6591fc597bf",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation) to be updated. |
| `CustomerId` | string | required |  Unique identifier of the [Customer](customers.md#customer). |

### Response

```javascript
{}
```

## Update reservation interval

Updates reservation interval \(start, end or both\).

### Request

`[PlatformAddress]/api/connector/v1/reservations/updateInterval`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "209d984d-4985-4efb-96ec-f6591fc597bf",
    "StartUtc": "2017-08-12T15:00:00Z",
    "EndUtc": "2017-08-15T12:00:00Z",
    "ChargeCancellationFee": false
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation) to be updated. |
| `StartUtc` | string | optional | New reservation start in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | New reservation end in UTC timezone in ISO 8601 format. |
| `ChargeCancellationFee` | boolean | required | Whether cancellation fee should be charged for potentially cancelled nights. |

### Response

```javascript
{}
```

## Update reservation space

Updates reservation allocation to space, e.g. to different room.

### Request

`[PlatformAddress]/api/connector/v1/reservations/updateSpace`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "SpaceId": "5ee074b1-6c86-48e8-915f-c7aa4702086f"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation) to be reassigned. |
| `SpaceId` | string | required | Unique identifier of the [Space](enterprises.md#space) where the reservation should be assigned. |

### Response

```javascript
{}
```

## Update reservation requested category

Updates reservation category requested by the customer to a different one.

### Request

`[PlatformAddress]/api/connector/v1/reservations/updateRequestedCategory`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
    "Reprice": false
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation) to be updated. |
| `CategoryId` | string | required | Unique identifier of the [Space category](enterprises.md#space-category). |
| `Reprice` | bool | required | Whether reservation should be repriced according to new category pricing. |

### Response

```javascript
{}
```

## Add reservation companion

Adds a customer as a companion to the reservation. Succeeds only if there is space for the new companion \(count of current companions is less than `AdultCount + ChildCount`\).

### Request

`[PlatformAddress]/api/connector/v1/reservations/addCompanion`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation). |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |

### Response

```javascript
{}
```

## Delete reservation companion

Removes customer companionship from the reservation. Note that the customer profile stays untouched, only the relation between the customer and reservation is deleted.

### Request

`[PlatformAddress]/api/connector/v1/reservations/deleteCompanion`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation). |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |

### Response

```javascript
{}
```

## Add reservation product

Adds a new product order of the specified product to the reservation.

### Request

`[PlatformAddress]/api/connector/v1/reservations/addProduct`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "c2e37cec-11a0-4fe7-8467-fbc50b54722f",
    "ProductId": "3dc5d79b-67ce-48ed-9238-47fcf5d1a59f",
    "Count": 1
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](reservations.md#reservation). |
| `ProductId` | string | required | Unique identifier of the [Product](services.md#product). |
| `Count` | int | required | The amount of the products to be added. Note that if the product is charged e.g. per night, count 1 means a single product every night. Count 2 means two products every night. |

### Response

```javascript
{}
```

