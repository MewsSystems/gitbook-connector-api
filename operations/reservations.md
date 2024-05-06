# Reservations

## Get all reservations (ver 2023-06-06)

Returns all reservations within scope of the Access Token, filtered according to the specified parameters. This operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property).

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAll/2023-06-06`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationIds": [
    "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
  ],
  "ServiceIds": [
    "ae8da28c-e8a4-4141-9df0-8c998976c691",
    "6b02d015-47ac-4c41-8e9f-5b4db61d4284"
  ],
  "AccountIds": [
    "94843f6f-3be3-481b-a1c7-06458774c3df"
  ],
  "ReservationGroupIds": [
    "94843f6f-3be3-481b-a1c7-06458774c3df"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-04-01T00:00:00Z",
    "EndUtc": "2023-05-05T00:00:00Z"
  },
  "Limitation": {
    "Cursor": "819e3435-7d5e-441f-bc68-76d89c69b8f5",
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `ReservationIds` | array of string | optional, max 1000 items | Unique identifiers of the [Reservations](https://mews-systems.gitbook.io/connector-api/operations/#reservation-ver-2023-06-06). |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service). If not provided, all bookable services are used. |
| `ReservationGroupIds` | array of string | optional, max 1000 items | Unique identifiers of [Reservation groups](https://mews-systems.gitbook.io/connector-api/operations/#reservation-group). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of accounts (currently only [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer), in the future also [Companies](https://mews-systems.gitbook.io/connector-api/operations/companies/#company)) the reservation is associated with. |
| `AssignedResourceIds` | array of string | optional, max 1000 items |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ScheduledStartUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `States` | array of [ServiceOrderState](#X-Ref-Name-ServiceOrderState) | optional | A list of service order states to filter by. |

### Response

```javascript
{
  "Reservations": [
    {
      "Id": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7",
      "ServiceId": "ae8da28c-e8a4-4141-9df0-8c998976c691",
      "AccountId": "94843f6f-3be3-481b-a1c7-06458774c3df",
      "AccountType": "Customer",
      "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "UpdaterProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
      "StartUtc": "2023-04-23T14:00:00Z",
      "ScheduledStartUtc": "2023-04-23T14:00:00Z",
      "ActualStartUtc": null,
      "EndUtc": "2023-04-24T14:00:00Z",
      "Number": "52",
      "State": "Confirmed",
      "Origin": "Connector",
      "CommanderOrigin": null,
      "OriginDetails": null,
      "CreatedUtc": "2023-04-23T14:58:02Z",
      "UpdatedUtc": "2023-04-23T14:58:02Z",
      "ReleasedUtc": null,
      "CancelledUtc": null,
      "VoucherId": null,
      "BusinessSegmentId": null,
      "Options": {
        "OwnerCheckedIn": true,
        "AllCompanionsCheckedIn": true,
        "AnyCompanionCheckedIn": true,
        "ConnectorCheckIn": true
      },
      "QrCodeData": null,
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "CreditCardId": null,
      "GroupId": null,
      "RequestedResourceCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "AvailabilityBlockId": null,
      "PartnerCompanyId": null,
      "TravelAgencyId": null,
      "AssignedResourceLocked": false,
      "ChannelNumber": "TW48ZP",
      "ChannelManagerNumber": "",
      "CancellationReason": null,
      "Purpose": "Leisure",
      "PersonCounts": [
        {
          "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
          "Count": 2
        },
        {
          "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
          "Count": 2
        }
      ]
    }
  ],
  "Cursor": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [Reservation (ver 2023-06-06)](#Reservation) | required | The reservations of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

## ~~Get all reservations (ver 2017-04-12)~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

Use reservations/getAll/2023-06-06.

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "StartUtc": "2016-01-01T00:00:00Z",
  "EndUtc": "2016-01-07T00:00:00Z",
  "ServiceIds": [
    "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
  ],
  "ReservationIds": [
    "db6cad34-9a91-448b-bea1-abbe01240d9c"
  ],
  "CustomerIds": [
    "8e1d0ca6-1dde-4be0-8566-aafc01866110"
  ],
  "RateIds": [
    "ed4b660b-19d0-434b-9360-a4de2ea42eda"
  ],
  "ChannelNumbers": [
    "TW48ZP"
  ],
  "States": [
    "Started"
  ],
  "Extent": {
    "Reservations": true,
    "ReservationGroups": true,
    "Customers": true
  },
  "Limitation": {
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
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
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service) from which the reservations are requested. |
| ~~`ServiceId`~~ | string | optional |  |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. Required when used in conjunction with the TimeFilter or States search parameter. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. Required when used in conjunction with the TimeFilter or States search parameter. |
| `GroupIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Reservation groups](https://mews-systems.gitbook.io/connector-api/operations/#reservation-group). |
| `ReservationIds` | array of string | optional, max 1000 items | Unique identifiers of the requested [Reservations](https://mews-systems.gitbook.io/connector-api/operations/#reservation-ver-2017-04-12). |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) which own the reservations. |
| `AssignedResourceIds` | array of string | optional, max 1000 items | Unique identifiers of [Resources](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource) assigned to the reservations. |
| `RateIds` | array of string | optional, max 1000 items | Unique identifiers of [Rates](https://mews-systems.gitbook.io/connector-api/operations/rates/#rate) assigned to the reservations. |
| `BusinessSegmentIds` | array of string | optional, max 1000 items | Unique identifiers of [Business segments](https://mews-systems.gitbook.io/connector-api/operations/businesssegments/#business-segment) assigned to the reservations. |
| `ChannelNumbers` | array of string | optional, max 1000 items | Set of numbers or references used by the Channel (i.e. OTA, GDS, CRS, etc.) in case the reservation group originates there, e.g. Booking.com confirmation numbers. |
| `Numbers` | array of string | optional, max 1000 items | Confirmation numbers of [Reservations](https://mews-systems.gitbook.io/connector-api/operations/#reservation-ver-2017-04-12). |
| `TimeFilter` | [ReservationTimeFilter](#X-Ref-Name-ReservationTimeFilter) | required | Time filter of the interval. If not specified, reservations Colliding with the interval are returned. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency) the item costs should be converted to. |
| `States` | array of string | optional | States the reservations should be in. If not specified, reservations in Confirmed, Started or Processed states or reservations specified by ReservationIds regardless of state are returned. |
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the reservations, customers, groups and rates should be also returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### ReservationTimeFilter

- `Colliding`
- `Created`
- `Updated`
- `Start`
- `End`
- `Overlapping`
- `Canceled`
- `Cancelled`

#### ReservationExtent
Extent of data to be returned. E.g. it is possible to specify that together with the reservations, customers, groups and rates should be also returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | boolean | required |  |
| `ReservationGroups` | boolean | required |  |
| `Customers` | boolean | required |  |
| `CustomerAdresses` | boolean | optional |  |
| `CustomerIdentityDocuments` | boolean | optional |  |
| `Services` | boolean | required |  |
| `Products` | boolean | required |  |
| `BusinessSegments` | boolean | required |  |
| `Resources` | boolean | required |  |
| `ResourceCategories` | boolean | required |  |
| `ResourceCategoryAssignments` | boolean | required |  |
| `Rates` | boolean | required |  |
| `Items` | boolean | required |  |
| `OrderItems` | boolean | required |  |
| `Notes` | boolean | required |  |
| `QrCodeData` | boolean | required |  |
| `Companies` | boolean | required |  |
| `AccountingStates` | array of string | optional |  |

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
      "Sex": null,
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
  "OrderItems": null,
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
      "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
      "Number": "52",
      "ChannelNumber": "TW48ZP",
      "ChannelManager": "",
      "ChannelManagerGroupNumber": null,
      "ChannelManagerNumber": null,
      "State": "Processed",
      "Origin": "Connector",
      "OriginDetail": null,
      "Purpose": "Student",
      "CreatedUtc": "2016-02-20T14:58:02Z",
      "UpdatedUtc": "2016-02-20T14:58:02Z",
      "CancelledUtc": null,
      "StartUtc": "2016-02-20T13:00:00Z",
      "EndUtc": "2016-02-22T11:00:00Z",
      "ReleasedUtc": null,
      "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "AssignedResourceLocked": false,
      "BusinessSegmentId": null,
      "CompanyId": null,
      "TravelAgencyId": null,
      "AvailabilityBlockId": null,
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "PersonCounts": [
        {
          "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
          "Count": 2
        },
        {
          "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
          "Count": 2
        }
      ]
    }
  ],
  "Services": null,
  "Resources": null,
  "ResourceCategories": null,
  "ResourceCategoryAssignments": null,
  "Notes": null,
  "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [ReservationOld](#ReservationOld) | optional | The reservations that collide with the specified interval. |
| `ReservationGroups` | array of [ReservationGroupOld](#ReservationGroupOld) | optional | Reservation groups that the reservations are members of. |
| `Customers` | array of [Customer](#Customer) | optional | Customers that are members of the reservations. |
| `Services` | array of [Service](#Service) | optional | Services that have been reserved. |
| `Products` | array of [Product](#Product) | optional | Products orderable with reservations. |
| `Resources` | array of [Resource](#Resource) | optional | Assigned resources of the reservations. |
| `ResourceCategories` | array of [Resource category](#ResourceCategory) | optional | Resource categories of the resources. |
| `ResourceCategoryAssignments` | array of [Resource category assignment](#ResourceCategoryAssignment) | optional | Assignments of the resources to categories. |
| `BusinessSegments` | array of [Business segment](#BusinessSegment) | optional | Business segments of the reservations. |
| `Rates` | array of [Rate](#Rate) | optional | Rates of the reservations. |
| `RateGroups` | array of [RateGroupOld](#RateGroupOld) | optional | Rate groups of the reservation rates. |
| `Items` | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | Revenue items of the reservations. |
| `Notes` | array of [OrderNote](#OrderNote) | optional | Notes of the reservations. |
| `QrCodeData` | array of [ReservationQrCodeData](#ReservationQrCodeData) | optional | QR code data of the reservations. |
| `Companies` | array of [Company](#Company) | optional |  |
| `ResourceAccessTokens` | array of [Resource access token](#ResourceAccessToken) | optional |  |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest reservation returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older reservations. |

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

#### ReservationGroupOld

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `Name` | string | optional |  |

#### Customer

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the customer. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Number` | string | optional | Number of the customer. |
| `Title` | string | optional | Title prefix of the customer. |
| `Sex` | string | optional | Sex of the customer. |
| ~~`Gender`~~ | string | optional |  |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `LanguageCode` | string | optional | Language and culture code of the customers preferred language. E.g. en-US or fr-FR. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `CitizenNumber` | string | optional |  |
| `MotherName` | string | optional |  |
| `FatherName` | string | optional |  |
| `Occupation` | string | optional |  |
| `Email` | string | optional | Email address of the customer. |
| `HasOtaEmail` | boolean | required |  |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional | Registration number of the customer&#x27;s car. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `Passport` | object | required |  |
| `IdentityCard` | object | required |  |
| `Visa` | object | required |  |
| `DriversLicense` | object | required |  |
| `Address` | object | required | Address of the customer. |
| `AddressId` | string | optional |  |
| `Classifications` | array of string | required | Classifications of the customer. |
| `Options` | array of string | required | Options of the customer. |
| ~~`CategoryId`~~ | string | optional |  |
| ~~`BirthDateUtc`~~ | string | optional |  |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| `CompanyId` | string | optional | Unique identifier of [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) the customer is associated with. |
| `MergeTargetId` | string | optional | Unique identifier of the account ([Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer)) to which this customer is linked. |
| `ActivityState` | string | required | [Activity State](https://mews-systems.gitbook.io/connector-api/operations/#activity-state) of customer record, i.e. whether active or deleted. |
| `IsUpdatedByMe` | boolean | optional |  |

#### Document

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the document. |
| `CustomerId` | string | required | Identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `Type` | string | optional | Type of the document. |
| `Number` | string | optional | Number of the document (e.g. passport number). |
| `Expiration` | string | optional | Expiration date in ISO 8601 format. |
| `Issuance` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `IssuingCity` | string | optional | City from which document issued |
| ~~`ExpirationUtc`~~ | string | optional |  |
| ~~`IssuanceUtc`~~ | string | optional |  |

#### OldAddress
Address of the customer.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `CountryCode` | string | optional |  |
| `CountrySubdivisionCode` | string | optional |  |
| `Latitude` | number | optional |  |
| `Longitude` | number | optional |  |

#### Service
The reservable service (e.g. accommodation, parking) associated with the access token of the service scoped integration.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `IsActive` | boolean | required | Whether the service is still active. |
| `Name` | string | optional | Name of the service. |
| ~~`StartTime`~~ | string | optional |  |
| ~~`EndTime`~~ | string | optional |  |
| `Options` | object | required | Options of the service. |
| `Promotions` | object | required | Promotions of the service. |
| ~~`Type`~~ | string | optional |  |
| `Ordering` | integer | required |  |
| `Data` | object | required | Additional information about the specific service. |
| `ExternalIdentifier` | string | optional | Identifier of the service from external system. |
| `CreatedUtc` | string | required | Creation date and time of the service in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the service in UTC timezone in ISO 8601 format. |

#### ServiceOptions
Options of the service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillAsPackage` | boolean | required |  |

#### Promotions
Promotions of the service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BeforeCheckIn` | boolean | required |  |
| `AfterCheckIn` | boolean | required |  |
| `DuringStay` | boolean | required |  |
| `BeforeCheckOut` | boolean | required |  |
| `AfterCheckOut` | boolean | required |  |
| `DuringCheckOut` | boolean | required |  |

#### Data
Additional information about the specific service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [ServiceType](#X-Ref-Name-ServiceType) | required |  |
| `value` | undefined | required |  |

#### ServiceType

- `Reservable`
- `Orderable`
- `Bookable`
- `Additional`

#### ServiceType

- `Reservable`
- `Orderable`
- `Bookable`
- `Additional`

#### Product

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `CategoryId` | string | optional | Unique identifier of the Product category. |
| `AccountingCategoryId` | string | optional | Unique identifier of [Accounting Category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category). |
| `IsActive` | boolean | required | Whether the product is still active. |
| `IsDefault` | boolean | required |  |
| ~~`Name`~~ | string | optional | Name of the product. **Deprecated!** Please use Names |
| `Names` | object | optional | All translations of the product name. |
| ~~`ExternalName`~~ | string | optional | Name of the product meant to be displayed to customer. **Deprecated!** Please use ExternalNames |
| `ExternalNames` | object | optional | All translations of the product name meant to be displayed to customer. |
| ~~`ShortName`~~ | string | optional | Short name of the product. **Deprecated!** Please use ShortNames |
| `ShortNames` | object | optional | All translations of the product short name. |
| ~~`Description`~~ | string | optional | Description of the product. **Deprecated!** Please use Descriptions |
| `Descriptions` | object | optional | All translations of the product description. |
| ~~`Charging`~~ | string | optional |  |
| `ChargingMode` | string | optional | Charging mode of the product. |
| ~~`Posting`~~ | string | optional |  |
| `PostingMode` | string | optional | Posting mode of the product. |
| `Options` | object | required | Options of the product. |
| `Promotions` | object | required | Promotions of the service. |
| `Classifications` | object | required | Classifications of the service. |
| `Price` | object | required | Price representing price of the product. |
| `Pricing` | object | required |  |
| `ImageIds` | array of string | optional |  |
| `Ordering` | integer | required |  |
| `ExternalIdentifier` | string | optional | Identifier of the product from external system. |
| `CreatedUtc` | string | required | Creation date and time of the product in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the product in UTC timezone in ISO 8601 format. |

#### ProductOptions
Options of the product.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillAsPackage` | boolean | required |  |

#### ProductClassifications
Classifications of the service.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Food` | boolean | required |  |
| `Beverage` | boolean | required |  |
| `Wellness` | boolean | required |  |
| `CityTax` | boolean | required |  |

#### ExtendedAmount
Price representing price of the product.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |

#### TaxValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Value` | number | required |  |

#### TaxBreakdown

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Items` | array of [TaxBreakdownItem](#TaxBreakdownItem) | optional |  |

#### TaxBreakdownItem

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxRateCode` | string | optional |  |
| `NetValue` | number | required |  |
| `TaxValue` | number | required |  |

#### Pricing

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [ProductPricing](#X-Ref-Name-ProductPricing) | required |  |
| `value` | undefined | required |  |

#### ProductPricing

- `Absolute`
- `Relative`

#### ProductPricing

- `Absolute`
- `Relative`

#### Resource

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the resource. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `IsActive` | boolean | required | Whether the resource is still active. |
| `ParentResourceId` | string | optional | Identifier of the parent [Resource](https://mews-systems.gitbook.io/connector-api/operations/#resource) (e.g. room of a bed). |
| `Name` | string | optional | Name of the resource (e.g. room number). |
| `State` | string | optional | State of the resource. |
| `Descriptions` | object | optional |  |
| `CreatedUtc` | string | optional | Creation date and time of the resource in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | optional | Last update date and time of the resource in UTC timezone in ISO 8601 format. |
| `Data` | object | required | Additional data of the resource. |

#### Data
Additional data of the resource.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | string | required |  |
| `value` | undefined | required |  |

#### Resource category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) of the resource category. |
| `IsActive` | boolean | required | Whether the category is still active. |
| `Type` | [ResourceCategoryType](#X-Ref-Name-ResourceCategoryType) | required |  |
| `Classification` | [ResourceClassification](#X-Ref-Name-ResourceClassification) | required |  |
| `Names` | object | required | All translations of the name. |
| `ShortNames` | object | required | All translations of the short name. |
| `Descriptions` | object | required | All translations of the description. |
| `Ordering` | integer | required |  |
| `Capacity` | integer | required |  |
| `ExtraCapacity` | integer | required | Extra capacity that can be served (e.g. extra bed count). |
| `ExternalIdentifier` | string | optional | Identifier of the resource category from external system. |

#### ResourceCategoryType

- `Room`
- `Bed`
- `Dorm`
- `Apartment`
- `Suite`
- `Villa`
- `Site`
- `Office`
- `MeetingRoom`
- `ParkingSpot`
- `Desk`
- `TeamArea`
- `Membership`
- `Tent`
- `CaravanOrRV`
- `UnequippedCampsite`
- `Bike`

#### ResourceClassification

- `StandardSingle`
- `StandardDouble`
- `SuperiorTwin`
- `SuperiorDouble`
- `JuniorSuite`
- `SharedOrDorm`
- `Other`
- `SuperiorSingle`
- `Triple`
- `Family`
- `StandardTwin`
- `Studio`
- `SuperiorTripleRoom`
- `OneBedroomApartment`
- `ThreeBedroomsApartment`
- `TwoBedroomsApartment`

#### Resource category assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the assignment. |
| `IsActive` | boolean | required | Whether the assignment is still active. |
| `ResourceId` | string | required | Unique identifier of the [Resource](https://mews-systems.gitbook.io/connector-api/operations/#resource) assigned to the Resource category. |
| `CategoryId` | string | required | Unique identifier of the [Resource category](https://mews-systems.gitbook.io/connector-api/operations/#resource-category). |
| `CreatedUtc` | string | required | Creation date and time of the assignment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the assignment in UTC timezone in ISO 8601 format. |

#### Business segment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the segment. |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `IsActive` | boolean | required | Whether the business segment is still active. |
| `Name` | string | required | Name of the segment. |
| `CreatedUtc` | string | required | Creation date and time of the business segment in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the business segment in UTC timezone in ISO 8601 format. |

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

#### RateType

- `Public`
- `Private`
- `AvailabilityBlock`

#### RateGroupOld

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `ServiceId` | string | required |  |
| `IsActive` | boolean | required |  |
| `Name` | string | optional |  |
| `ExternalIdentifier` | string | optional |  |

#### AccountingItem

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `AccountId` | string | required |  |
| ~~`CustomerId`~~ | string | optional |  |
| `OrderId` | string | optional |  |
| `ServiceId` | string | optional |  |
| `ProductId` | string | optional |  |
| `BillId` | string | optional |  |
| `InvoiceId` | string | optional |  |
| `AccountingCategoryId` | string | optional |  |
| `CreditCardId` | string | optional |  |
| `Type` | string | optional |  |
| `SubType` | string | optional |  |
| `Name` | string | optional |  |
| `Notes` | string | optional |  |
| `ConsumptionUtc` | string | optional |  |
| `ClosedUtc` | string | optional |  |
| `State` | string | optional |  |
| `SubState` | string | optional |  |
| `Amount` | object | required | Price representing price of the product. |

#### Order item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer)) the item belongs to. |
| `OrderId` | string | required | Unique identifier of the order (or [Reservation](https://mews-systems.gitbook.io/connector-api/operations/reservations/#reservation-ver-2023-06-06) which is a special type of order) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category) the item belongs to. |
| `UnitCount` | integer | required | Unit count of item, i.e. the number of sub-items or units, if applicable. |
| `UnitAmount` | object | required | Value of the preauthorization. |
| `Amount` | object | required | Price representing price of the product. |
| `OriginalAmount` | object | required | Price representing price of the product. |
| `RevenueType` | string | optional | Revenue type of the item. |
| `CreatorProfileId` | string | required |  |
| `UpdaterProfileId` | string | required |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `CanceledUtc` | string | optional |  |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `StartUtc` | string | optional |  |
| `AccountingState` | string | optional | Accounting state of the item. |
| `Data` | object | required | Additional data specific to particular order item. |

#### Amount
Value of the preauthorization.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |

#### Data
Additional data specific to particular order item.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [OrderItemTypeOld](#X-Ref-Name-OrderItemTypeOld) | required |  |
| `value` | undefined | required |  |

#### OrderItemTypeOld

- `CancellationFee`
- `Rebate`
- `Deposit`
- `ExchangeRateDifference`
- `CustomItem`
- `Surcharge`
- `SurchargeDiscount`
- `SpaceOrder`
- `ProductOrder`
- `Other`
- `TaxCorrection`
- `ResourceUpgradeFee`
- `InvoiceFee`

#### OrderItemTypeOld

- `CancellationFee`
- `Rebate`
- `Deposit`
- `ExchangeRateDifference`
- `CustomItem`
- `Surcharge`
- `SurchargeDiscount`
- `SpaceOrder`
- `ProductOrder`
- `Other`
- `TaxCorrection`
- `ResourceUpgradeFee`
- `InvoiceFee`

#### OrderNote

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `OrderId` | string | required |  |
| `Text` | string | optional |  |
| `Type` | [OrderNoteType](#X-Ref-Name-OrderNoteType) | required |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |

#### OrderNoteType

- `General`
- `ChannelManager`

#### ReservationQrCodeData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationId` | string | required |  |
| `Data` | string | optional |  |

#### Company

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the company. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Name` | string | required | Name of the company. |
| `MotherCompanyId` | string | optional | Unique identifier of mother company. |
| `InvoicingEmail` | string | optional | Email for issuing invoices to the company. |
| `WebsiteUrl` | string | optional | The website url of the company. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `Options` | object | required | Options of the company. |
| `CreditRating` | object | required | Credit rating to define creditworthiness of the company. |
| `Department` | string | optional | The internal segmentation of a company, e.g. sales department. |
| `DunsNumber` | string | optional | The Dun &amp; Bradstreet unique 9-digit DUNS number. |
| `ReferenceIdentifier` | string | optional | External system identifier - custom identifier used by an external system such as an external database. |
| `AccountingCode` | string | optional | Accounting code of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifier of the company. |
| `BillingCode` | string | optional | Billing code of the company. |
| `Contact` | string | optional | Other contact details, such as telephone, email or similar. |
| `ContactPerson` | string | optional | Contact person of the company. |
| `ElectronicInvoiceIdentifier` | string | optional | Electronic invoice identifier of the company. |
| `Identifier` | string | optional | Other identifier of the company, e.g. legal identifier. |
| `Iata` | string | optional | Iata of the company. |
| `IsActive` | boolean | required | Whether the company is still active. |
| `Notes` | string | optional | Additional notes. |
| `Number` | integer | required | Unique number of the company. |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `Telephone` | string | optional | Contact telephone number. |
| `CreatedUtc` | string | optional | Date of [Company](https://mews-systems.gitbook.io/connector-api/operations/#company) creation date and time. |
| `UpdatedUtc` | string | optional | Date of [Company](https://mews-systems.gitbook.io/connector-api/operations/#company) last update date and time. |
| `Address` | object | required | Address of the customer. |
| `AddressId` | string | optional | Unique identifier of the company [Address](https://mews-systems.gitbook.io/connector-api/operations/addresses/#account-address). |
| `MergeTargetId` | string | optional |  |
| ~~`TaxIdentificationNumber`~~ | string | optional |  |
| `ExternalIdentifier` | string | optional | Identifier of company from external system. |
| `IsUpdatedByMe` | boolean | optional |  |

#### CompanyOptions
Options of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Invoiceable` | boolean | required |  |
| `AddFeesToInvoices` | boolean | required |  |
| `AddTaxDeductedPaymentToInvoices` | boolean | required |  |

#### CreditRating
Credit rating to define creditworthiness of the company.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Basic` | string | optional |  |

#### Resource access token

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token). |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `ServiceOrderId` | string | required | Unique identifier of a reservation. |
| `CompanionshipId` | string | optional | Unique identifier of [Companionship](https://mews-systems.gitbook.io/connector-api/operations/companionships/#companionship). |
| `ResourceId` | string | optional | Unique identifier of [Resource](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource). |
| `Type` | [ResourceAccessTokenType](#X-Ref-Name-ResourceAccessTokenType) | required |  |
| `Value` | string | optional | Value of resource access token |
| `SerialNumber` | string | optional | Serial number of [Resource access token type](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token-type). |
| `ValidityStartUtc` | string | required | Marks the start of interval in which the resource access token can be used. |
| `ValidityEndUtc` | string | required | Marks the end of interval in which the resource access token can be used. |
| `Permissions` | object | required | Specify permissions of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token). |
| `CreatedUtc` | string | required | Creation date and time of the resource access token in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the resource access token in UTC timezone in ISO 8601 format. |
| `IsActive` | boolean | required | Whether the resource access token is still active. |

#### ResourceAccessTokenType

- `PinCode`
- `RfidTag`

#### ResourceAccessTokenPermissions
Specify permissions of [Resource access token](https://mews-systems.gitbook.io/connector-api/operations/#resource-access-token).

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bed` | boolean | required |  |
| `Room` | boolean | required |  |
| `Floor` | boolean | required |  |
| `Building` | boolean | required |  |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAllByIds`

```javascript
{
  "Client": "string",
  "LanguageCode": "string",
  "CultureCode": "string",
  "AccessToken": "string",
  "ClientToken": "string",
  "ReservationIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "Extent": {
    "Reservations": true,
    "ReservationGroups": true,
    "Customers": true,
    "CustomerAdresses": true,
    "CustomerIdentityDocuments": true,
    "Services": true,
    "Products": true,
    "BusinessSegments": true,
    "Resources": true,
    "ResourceCategories": true,
    "ResourceCategoryAssignments": true,
    "Rates": true,
    "Items": true,
    "OrderItems": true,
    "Notes": true,
    "QrCodeData": true,
    "Companies": true,
    "AccountingStates": [
      "string"
    ]
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required |  |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required |  |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required |  |
| `MaskedClientToken` | string | optional |  |
| `ReservationIds` | array of string | required |  |
| ~~`ReservationId`~~ | string | required |  |
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the reservations, customers, groups and rates should be also returned. |

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
      "Sex": null,
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
  "OrderItems": null,
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
      "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
      "Number": "52",
      "ChannelNumber": "TW48ZP",
      "ChannelManager": "",
      "ChannelManagerGroupNumber": null,
      "ChannelManagerNumber": null,
      "State": "Processed",
      "Origin": "Connector",
      "OriginDetail": null,
      "Purpose": "Student",
      "CreatedUtc": "2016-02-20T14:58:02Z",
      "UpdatedUtc": "2016-02-20T14:58:02Z",
      "CancelledUtc": null,
      "StartUtc": "2016-02-20T13:00:00Z",
      "EndUtc": "2016-02-22T11:00:00Z",
      "ReleasedUtc": null,
      "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "AssignedResourceLocked": false,
      "BusinessSegmentId": null,
      "CompanyId": null,
      "TravelAgencyId": null,
      "AvailabilityBlockId": null,
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "PersonCounts": [
        {
          "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
          "Count": 2
        },
        {
          "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
          "Count": 2
        }
      ]
    }
  ],
  "Services": null,
  "Resources": null,
  "ResourceCategories": null,
  "ResourceCategoryAssignments": null,
  "Notes": null,
  "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [ReservationOld](#ReservationOld) | optional | The reservations that collide with the specified interval. |
| `ReservationGroups` | array of [ReservationGroupOld](#ReservationGroupOld) | optional | Reservation groups that the reservations are members of. |
| `Customers` | array of [Customer](#Customer) | optional | Customers that are members of the reservations. |
| `Services` | array of [Service](#Service) | optional | Services that have been reserved. |
| `Products` | array of [Product](#Product) | optional | Products orderable with reservations. |
| `Resources` | array of [Resource](#Resource) | optional | Assigned resources of the reservations. |
| `ResourceCategories` | array of [Resource category](#ResourceCategory) | optional | Resource categories of the resources. |
| `ResourceCategoryAssignments` | array of [Resource category assignment](#ResourceCategoryAssignment) | optional | Assignments of the resources to categories. |
| `BusinessSegments` | array of [Business segment](#BusinessSegment) | optional | Business segments of the reservations. |
| `Rates` | array of [Rate](#Rate) | optional | Rates of the reservations. |
| `RateGroups` | array of [RateGroupOld](#RateGroupOld) | optional | Rate groups of the reservation rates. |
| `Items` | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | Revenue items of the reservations. |
| `Notes` | array of [OrderNote](#OrderNote) | optional | Notes of the reservations. |
| `QrCodeData` | array of [ReservationQrCodeData](#ReservationQrCodeData) | optional | QR code data of the reservations. |
| `Companies` | array of [Company](#Company) | optional |  |
| `ResourceAccessTokens` | array of [Resource access token](#ResourceAccessToken) | optional |  |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest reservation returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older reservations. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAllByCustomers`

```javascript
{
  "Client": "string",
  "LanguageCode": "string",
  "CultureCode": "string",
  "AccessToken": "string",
  "ClientToken": "string",
  "CustomerIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "Extent": {
    "Reservations": true,
    "ReservationGroups": true,
    "Customers": true,
    "CustomerAdresses": true,
    "CustomerIdentityDocuments": true,
    "Services": true,
    "Products": true,
    "BusinessSegments": true,
    "Resources": true,
    "ResourceCategories": true,
    "ResourceCategoryAssignments": true,
    "Rates": true,
    "Items": true,
    "OrderItems": true,
    "Notes": true,
    "QrCodeData": true,
    "Companies": true,
    "AccountingStates": [
      "string"
    ]
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required |  |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required |  |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required |  |
| `MaskedClientToken` | string | optional |  |
| `CustomerIds` | array of string | optional |  |
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the reservations, customers, groups and rates should be also returned. |

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
      "Sex": null,
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
  "OrderItems": null,
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
      "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
      "Number": "52",
      "ChannelNumber": "TW48ZP",
      "ChannelManager": "",
      "ChannelManagerGroupNumber": null,
      "ChannelManagerNumber": null,
      "State": "Processed",
      "Origin": "Connector",
      "OriginDetail": null,
      "Purpose": "Student",
      "CreatedUtc": "2016-02-20T14:58:02Z",
      "UpdatedUtc": "2016-02-20T14:58:02Z",
      "CancelledUtc": null,
      "StartUtc": "2016-02-20T13:00:00Z",
      "EndUtc": "2016-02-22T11:00:00Z",
      "ReleasedUtc": null,
      "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "AssignedResourceLocked": false,
      "BusinessSegmentId": null,
      "CompanyId": null,
      "TravelAgencyId": null,
      "AvailabilityBlockId": null,
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "PersonCounts": [
        {
          "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
          "Count": 2
        },
        {
          "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
          "Count": 2
        }
      ]
    }
  ],
  "Services": null,
  "Resources": null,
  "ResourceCategories": null,
  "ResourceCategoryAssignments": null,
  "Notes": null,
  "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [ReservationOld](#ReservationOld) | optional | The reservations that collide with the specified interval. |
| `ReservationGroups` | array of [ReservationGroupOld](#ReservationGroupOld) | optional | Reservation groups that the reservations are members of. |
| `Customers` | array of [Customer](#Customer) | optional | Customers that are members of the reservations. |
| `Services` | array of [Service](#Service) | optional | Services that have been reserved. |
| `Products` | array of [Product](#Product) | optional | Products orderable with reservations. |
| `Resources` | array of [Resource](#Resource) | optional | Assigned resources of the reservations. |
| `ResourceCategories` | array of [Resource category](#ResourceCategory) | optional | Resource categories of the resources. |
| `ResourceCategoryAssignments` | array of [Resource category assignment](#ResourceCategoryAssignment) | optional | Assignments of the resources to categories. |
| `BusinessSegments` | array of [Business segment](#BusinessSegment) | optional | Business segments of the reservations. |
| `Rates` | array of [Rate](#Rate) | optional | Rates of the reservations. |
| `RateGroups` | array of [RateGroupOld](#RateGroupOld) | optional | Rate groups of the reservation rates. |
| `Items` | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | Revenue items of the reservations. |
| `Notes` | array of [OrderNote](#OrderNote) | optional | Notes of the reservations. |
| `QrCodeData` | array of [ReservationQrCodeData](#ReservationQrCodeData) | optional | QR code data of the reservations. |
| `Companies` | array of [Company](#Company) | optional |  |
| `ResourceAccessTokens` | array of [Resource access token](#ResourceAccessToken) | optional |  |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest reservation returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older reservations. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAllByNumbers`

```javascript
{
  "Client": "string",
  "LanguageCode": "string",
  "CultureCode": "string",
  "AccessToken": "string",
  "ClientToken": "string",
  "Numbers": [
    "string"
  ],
  "Extent": {
    "Reservations": true,
    "ReservationGroups": true,
    "Customers": true,
    "CustomerAdresses": true,
    "CustomerIdentityDocuments": true,
    "Services": true,
    "Products": true,
    "BusinessSegments": true,
    "Resources": true,
    "ResourceCategories": true,
    "ResourceCategoryAssignments": true,
    "Rates": true,
    "Items": true,
    "OrderItems": true,
    "Notes": true,
    "QrCodeData": true,
    "Companies": true,
    "AccountingStates": [
      "string"
    ]
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required |  |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required |  |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required |  |
| `MaskedClientToken` | string | optional |  |
| `Numbers` | array of string | optional |  |
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the reservations, customers, groups and rates should be also returned. |

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
      "Sex": null,
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
  "OrderItems": null,
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
      "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
      "Number": "52",
      "ChannelNumber": "TW48ZP",
      "ChannelManager": "",
      "ChannelManagerGroupNumber": null,
      "ChannelManagerNumber": null,
      "State": "Processed",
      "Origin": "Connector",
      "OriginDetail": null,
      "Purpose": "Student",
      "CreatedUtc": "2016-02-20T14:58:02Z",
      "UpdatedUtc": "2016-02-20T14:58:02Z",
      "CancelledUtc": null,
      "StartUtc": "2016-02-20T13:00:00Z",
      "EndUtc": "2016-02-22T11:00:00Z",
      "ReleasedUtc": null,
      "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "AssignedResourceLocked": false,
      "BusinessSegmentId": null,
      "CompanyId": null,
      "TravelAgencyId": null,
      "AvailabilityBlockId": null,
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "PersonCounts": [
        {
          "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
          "Count": 2
        },
        {
          "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
          "Count": 2
        }
      ]
    }
  ],
  "Services": null,
  "Resources": null,
  "ResourceCategories": null,
  "ResourceCategoryAssignments": null,
  "Notes": null,
  "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [ReservationOld](#ReservationOld) | optional | The reservations that collide with the specified interval. |
| `ReservationGroups` | array of [ReservationGroupOld](#ReservationGroupOld) | optional | Reservation groups that the reservations are members of. |
| `Customers` | array of [Customer](#Customer) | optional | Customers that are members of the reservations. |
| `Services` | array of [Service](#Service) | optional | Services that have been reserved. |
| `Products` | array of [Product](#Product) | optional | Products orderable with reservations. |
| `Resources` | array of [Resource](#Resource) | optional | Assigned resources of the reservations. |
| `ResourceCategories` | array of [Resource category](#ResourceCategory) | optional | Resource categories of the resources. |
| `ResourceCategoryAssignments` | array of [Resource category assignment](#ResourceCategoryAssignment) | optional | Assignments of the resources to categories. |
| `BusinessSegments` | array of [Business segment](#BusinessSegment) | optional | Business segments of the reservations. |
| `Rates` | array of [Rate](#Rate) | optional | Rates of the reservations. |
| `RateGroups` | array of [RateGroupOld](#RateGroupOld) | optional | Rate groups of the reservation rates. |
| `Items` | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | Revenue items of the reservations. |
| `Notes` | array of [OrderNote](#OrderNote) | optional | Notes of the reservations. |
| `QrCodeData` | array of [ReservationQrCodeData](#ReservationQrCodeData) | optional | QR code data of the reservations. |
| `Companies` | array of [Company](#Company) | optional |  |
| `ResourceAccessTokens` | array of [Resource access token](#ResourceAccessToken) | optional |  |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest reservation returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older reservations. |

## ~~Get all reservation items~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

Use orderItems/getAll.

### Request

`[PlatformAddress]/api/connector/v1/reservations/getAllItems`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationIds": [
    "e6ea708c-2a2a-412f-a152-b6c76ffad49b"
  ],
  "Currency": "EUR",
  "AccountingStates": [
    "Closed"
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
| `ReservationIds` | array of string | required, max 1000 items | Unique identifiers of the reservation. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency) the item costs should be converted to. |
| `AccountingStates` | array of string | optional | States the items should be in. If not specified, items in Open or Closed states are returned. |

### Response

```javascript
{
  "Reservations": [
    {
      "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
      "OrderItems": [
        {
          "Id": "784a29df-6196-4402-96a0-58695a881239",
          "AccountId": "d73a087a-00c7-40cf-9372-314d0296334d",
          "OrderId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
          "BillId": "7fdc2957-bc08-44d3-ba2a-1c1760a84894",
          "AccountingCategoryId": "0cf7aa90-736f-43e9-a7dc-787704548d86",
          "Amount": {
            "Currency": "EUR",
            "NetValue": 19.38,
            "GrossValue": 23.26,
            "TaxValues": [
              {
                "Code": "UK-S",
                "Value": 3.88
              }
            ],
            "Breakdown": {
              "Items": [
                {
                  "TaxRateCode": "UK-S",
                  "NetValue": 19.38,
                  "TaxValue": 3.88
                }
              ]
            }
          },
          "RevenueType": "Service",
          "ConsumedUtc": "2016-03-10T13:00:00Z",
          "ClosedUtc": "2016-04-06T06:41:44Z",
          "AccountingState": "Closed",
          "Data": {
            "Discriminator": "ProductOrder",
            "Value": {
              "ProductId": "a3f4e006-b3e4-4485-8a00-ad11015ac494"
            }
          }
        }
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [Reservation items](#ReservationItems) | optional | The reservations with their items. |

#### Reservation items

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationId` | string | required | Unique identifier of the reservation. |
| `Items` | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | The items associated with the reservation. |

## Add reservations

Adds the specified reservations as a single group. If &#x60;GroupId&#x60; is specified, adds the reservations to an already existing group. Note that all reservations linked to an availability block must belong to the same reservation group.

### Request

`[PlatformAddress]/api/connector/v1/reservations/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
  "GroupId": null,
  "GroupName": null,
  "SendConfirmationEmail": true,
  "Reservations": [
    {
      "Identifier": "1234",
      "State": "Confirmed",
      "StartUtc": "2021-01-01T14:00:00Z",
      "EndUtc": "2021-01-03T10:00:00Z",
      "ReleasedUtc": null,
      "CustomerId": "e465c031-fd99-4546-8c70-abcf0029c249",
      "BookerId": "e465c031-fd99-4546-8c70-abcf0029c249",
      "RequestedCategoryId": "0a5da171-3663-4496-a61e-35ecbd78b9b1",
      "RateId": "a39a59fa-3a08-4822-bdd4-ab0b00e3d21f",
      "TravelAgencyId": null,
      "CompanyId": null,
      "Notes": "Test reservation",
      "TimeUnitAmount": null,
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
      "TimeUnitPrices": [
        {
          "Index": 0,
          "Amount": {
            "Currency": "GBP",
            "GrossValue": 20,
            "TaxCodes": [
              "UK-S"
            ]
          }
        },
        {
          "Index": 1,
          "Amount": {
            "Currency": "GBP",
            "GrossValue": 30,
            "TaxCodes": [
              "UK-S"
            ]
          }
        }
      ],
      "ProductOrders": [
        {
          "ProductId": "2e9eb3fc-8a77-466a-9cd9-abcf002a2a01",
          "StartUtc": "2021-01-02T00:00:00Z",
          "EndUtc": "2021-01-03T00:00:00Z"
        }
      ],
      "AvailabilityBlockId": null,
      "VoucherCode": "SpringSale2021"
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
| `EnterpriseId` | string | optional |  |
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) to be reserved. |
| `GroupId` | string | optional | Unique identifier of the [Reservation group](https://mews-systems.gitbook.io/connector-api/operations/#reservation-group) where the reservations are added. If not specified, a new group is created. |
| `GroupName` | string | optional | Name of the [Reservation group](https://mews-systems.gitbook.io/connector-api/operations/#reservation-group) which the reservations are added to. If GroupId is specified, this field is ignored. If not specified, the group name is automatically created. |
| `Reservations` | array of [ReservationData](#ReservationData) | required | Parameters of the new reservations. |
| `CheckRateApplicability` | boolean | optional | Indicates whether the system will check and prevent a booking being made using a restricted rate, e.g. a private rate. The default is true, i.e. the system will normally check for this unless the property is set to false. |
| `CheckOverbooking` | boolean | optional | Indicates whether the system will check and prevent a booking being made in the case of an overbooking, i.e. where there is an insufficient number of resources available to meet the request&lt;sup&gt;\*1&lt;/sup&gt;. The default is true, i.e. the system will normally check for this unless the property is set to false. |
| `SendConfirmationEmail` | boolean | optional | Whether the confirmation email is sent. Default value is true. |

### Response

```javascript
{
  "Reservations": [
    {
      "Identifier": "1234",
      "Reservation": {
        "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
        "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
        "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
        "Number": "52",
        "ChannelManager": "",
        "ChannelManagerGroupNumber": null,
        "ChannelManagerNumber": null,
        "ChannelNumber": null,
        "State": "Processed",
        "Origin": "Connector",
        "CreatedUtc": "2016-02-20T14:58:02Z",
        "UpdatedUtc": "2016-02-20T14:58:02Z",
        "CancelledUtc": null,
        "StartUtc": "2016-02-20T13:00:00Z",
        "EndUtc": "2016-02-22T11:00:00Z",
        "ReleasedUtc": null,
        "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
        "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
        "AssignedResourceLocked": false,
        "BusinessSegmentId": null,
        "CompanyId": null,
        "TravelAgencyId": null,
        "AvailabilityBlockId": null,
        "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
        "VoucherId": null,
        "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
        "CompanionIds": [
          "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a"
        ]
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [Added reservation](#AddedReservation) | optional | The added reservations. |

#### Added reservation

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional | Identifier of the reservation within the transaction. |
| `Reservation` | object | required | The added reservation. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

Use the equivalent endpoint reservations/getAll/2023-06-06

### Request

`[PlatformAddress]/api/connector/v1/serviceOrders/reservations/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationIds": [
    "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
  ],
  "ServiceIds": [
    "ae8da28c-e8a4-4141-9df0-8c998976c691",
    "6b02d015-47ac-4c41-8e9f-5b4db61d4284"
  ],
  "AccountIds": [
    "94843f6f-3be3-481b-a1c7-06458774c3df"
  ],
  "ReservationGroupIds": [
    "94843f6f-3be3-481b-a1c7-06458774c3df"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-04-01T00:00:00Z",
    "EndUtc": "2023-05-05T00:00:00Z"
  },
  "Limitation": {
    "Cursor": "819e3435-7d5e-441f-bc68-76d89c69b8f5",
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
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). |
| `ReservationIds` | array of string | optional, max 1000 items | Unique identifiers of the [Reservations](https://mews-systems.gitbook.io/connector-api/operations/#reservation-ver-2023-06-06). |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service). If not provided, all bookable services are used. |
| `ReservationGroupIds` | array of string | optional, max 1000 items | Unique identifiers of [Reservation groups](https://mews-systems.gitbook.io/connector-api/operations/#reservation-group). |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of accounts (currently only [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer), in the future also [Companies](https://mews-systems.gitbook.io/connector-api/operations/companies/#company)) the reservation is associated with. |
| `AssignedResourceIds` | array of string | optional, max 1000 items |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `CollidingUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ScheduledStartUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `States` | array of [ServiceOrderState](#X-Ref-Name-ServiceOrderState) | optional | A list of service order states to filter by. |

#### ServiceOrderState

- `Inquired`
- `Confirmed`
- `Started`
- `Processed`
- `Canceled`
- `Optional`
- `Requested`

### Response

```javascript
{
  "Reservations": [
    {
      "Id": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7",
      "ServiceId": "ae8da28c-e8a4-4141-9df0-8c998976c691",
      "AccountId": "94843f6f-3be3-481b-a1c7-06458774c3df",
      "AccountType": "Customer",
      "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "UpdaterProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
      "StartUtc": "2023-04-23T14:00:00Z",
      "ScheduledStartUtc": "2023-04-23T14:00:00Z",
      "ActualStartUtc": null,
      "EndUtc": "2023-04-24T14:00:00Z",
      "Number": "52",
      "State": "Confirmed",
      "Origin": "Connector",
      "CommanderOrigin": null,
      "OriginDetails": null,
      "CreatedUtc": "2023-04-23T14:58:02Z",
      "UpdatedUtc": "2023-04-23T14:58:02Z",
      "ReleasedUtc": null,
      "CancelledUtc": null,
      "VoucherId": null,
      "BusinessSegmentId": null,
      "Options": {
        "OwnerCheckedIn": true,
        "AllCompanionsCheckedIn": true,
        "AnyCompanionCheckedIn": true,
        "ConnectorCheckIn": true
      },
      "QrCodeData": null,
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "CreditCardId": null,
      "GroupId": null,
      "RequestedResourceCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "AvailabilityBlockId": null,
      "PartnerCompanyId": null,
      "TravelAgencyId": null,
      "AssignedResourceLocked": false,
      "ChannelNumber": "TW48ZP",
      "ChannelManagerNumber": "",
      "CancellationReason": null,
      "Purpose": "Leisure",
      "PersonCounts": [
        {
          "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
          "Count": 2
        },
        {
          "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
          "Count": 2
        }
      ]
    }
  ],
  "Cursor": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [Reservation (ver 2023-06-06)](#Reservation) | required | The reservations of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Reservation (ver 2023-06-06)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the reservation. |
| `ServiceId` | string | required | Unique identifier of the Service that reservation is made againts. |
| `AccountId` | string | required | Unique identifier of the Customer or a Company who owns the reservation. |
| `AccountType` | [AccountType](#X-Ref-Name-AccountType) | required | A discriminator specifying the type of account, e.g. customer or company. |
| `CreatorProfileId` | string | required | Unique identifier of the user who created the order item. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who updated the order item. |
| `BookerId` | string | optional | Unique identifier of the Customer on whose behalf the reservation was made. |
| `Number` | string | optional | Confirmation number of the reservation in Mews. |
| `State` | [ServiceOrderState](#X-Ref-Name-ServiceOrderState) | required |  |
| `Origin` | [ServiceOrderOrigin](#X-Ref-Name-ServiceOrderOrigin) | required |  |
| `CommanderOrigin` | [ServiceOrderCommanderOrigin](#X-Ref-Name-ServiceOrderCommanderOrigin) | required | Further detail about origin in case of Origin &#x60;Commander&#x60;. |
| `OriginDetails` | string | optional | Details about the reservation &#x60;Origin&#x60;. |
| `CreatedUtc` | string | required | Creation date and time of the reservation in UTC timezone. |
| `UpdatedUtc` | string | required | Last update date and time of the reservation in UTC timezone. |
| `CancelledUtc` | string | optional | Cancellation date and time in UTC timezone. |
| `VoucherId` | string | optional | Unique identifier of the &#x60;Voucher&#x60; that has been used to create reservation. |
| `BusinessSegmentId` | string | optional | Identifier of the reservation &#x60;Business segment&#x60;. |
| `LinkedReservationId` | string | optional |  |
| `Options` | object | required |  |
| `RateId` | string | required | Identifier of the reservation &#x60;Rate&#x60;. |
| `CreditCardId` | string | optional | Unique identifier of the Credit card. |
| `GroupId` | string | optional | Unique identifier of the Reservation group. |
| `RequestedResourceCategoryId` | string | optional | Unique identifier of the Resource category. |
| `AssignedResourceId` | string | optional | Identifier of the assigned Resource. |
| `AvailabilityBlockId` | string | optional | Unique identifier of the Availability block the reservation is assigned to. |
| `PartnerCompanyId` | string | optional | Identifier of the Company that mediated the reservation. |
| `TravelAgencyId` | string | optional | Identifier of the Travel Agency that mediated the reservation. |
| `AssignedResourceLocked` | boolean | required | Whether the reservation is locked to the assigned Resource and cannot be moved. |
| `ChannelNumber` | string | optional | Number of the reservation within the Channel (i.e. OTA, GDS, CRS, etc) in case the reservation group originates there (e.g. Booking.com confirmation number). |
| `ChannelManagerNumber` | string | optional | Unique number of the reservation within the reservation group. |
| `CancellationReason` | [ServiceOrderCancellationReason](#X-Ref-Name-ServiceOrderCancellationReason) | required | Cancellation reason of the reservation. |
| `ReleasedUtc` | string | optional | Date when the optional reservation is released in UTC timezone. |
| ~~`StartUtc`~~ | string | optional | Reservation start or check-in time (if it&#x27;s earlier than scheduled start) in UTC timezone.

**Deprecated!** Use &#x60;ScheduledStartUtc&#x60; and &#x60;ActualStartUtc&#x60; instead. |
| ~~`EndUtc`~~ | string | optional | End of the reservation (departure) in UTC timezone. |
| `ScheduledStartUtc` | string | optional | Scheduled start time of reservation in UTC timezone. |
| `ActualStartUtc` | string | optional | Actual customer check-in time of reservation in UTC timezone. |
| `ScheduledEndUtc` | string | optional |  |
| `ActualEndUtc` | string | optional |  |
| `Purpose` | [ReservationPurpose](#X-Ref-Name-ReservationPurpose) | required | Purpose of the reservation. |
| `QrCodeData` | string | optional | QR code data of the reservation. |
| `PersonCounts` | array of [ReservationPersonCount](#ReservationPersonCount) | optional | Number of people per age category the reservation was booked for. |

#### AccountType

- `Company`
- `Customer`

#### AccountType

- `Company`
- `Customer`

#### ServiceOrderOrigin

- `Distributor`
- `ChannelManager`
- `Commander`
- `Import`
- `Connector`
- `Navigator`

#### ServiceOrderCommanderOrigin

- `InPerson`
- `Channel`
- `Phone`
- `Email`
- `Website`
- `Message`
- `CallCenter`

#### Service Order Options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OwnerCheckedIn` | boolean | required | Owner of the reservation checked in. |
| `AllCompanionsCheckedIn` | boolean | required | All companions of the reservation checked in. |
| `AnyCompanionCheckedIn` | boolean | required | Any of the companions of the reservation checked in. |
| `ConnectorCheckIn` | boolean | required | Check in was done via Connector API. |

#### ServiceOrderCancellationReason

- `Other`
- `ConfirmationMissed`
- `BookedElsewhere`
- `ForceMajeure`
- `GuestComplaint`
- `NoShow`
- `PriceTooHigh`
- `ServiceNotAvailable`
- `InputError`
- `InvalidPayment`
- `TravelAgency`
- `RequestedByGuest`
- `Update`
- `BookingAbandoned`
- `RequestedByBooker`

#### ReservationPurpose

- `Leisure`
- `Business`
- `Student`

#### ReservationPurpose

- `Leisure`
- `Business`
- `Student`

#### ReservationPersonCount

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required |  |
| `Count` | integer | required |  |

## Price reservations

Returns prices of reservations with the specified parameters. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/reservations/price`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
  "Reservations": [
    {
      "Identifier": "1234",
      "StartUtc": "2018-01-01T14:00:00Z",
      "EndUtc": "2018-01-02T10:00:00Z",
      "RequestedCategoryId": "0a5da171-3663-4496-a61e-35ecbd78b9b1",
      "RateId": "33667cab-f17f-4089-ad07-c2cd50fa0df1",
      "Notes": "Test reservation",
      "ProductOrders": [
        {
          "ProductId": "3dc5d79b-67ce-48ed-9238-47fcf5d1a59f"
        }
      ],
      "PersonCounts": [
        {
          "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
          "Count": 2
        },
        {
          "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
          "Count": 2
        }
      ]
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
| `ServiceId` | string | required | Unique identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) to be priced. |
| `GroupId` | string | optional |  |
| `GroupName` | string | optional |  |
| `Reservations` | array of [ReservationData](#ReservationData) | required | Parameters of the reservations to price. Note that CustomerId is not required when pricing reservations. |
| `CheckRateApplicability` | boolean | optional |  |
| `CheckOverbooking` | boolean | optional |  |
| `SendConfirmationEmail` | boolean | optional |  |

#### ReservationData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional |  |
| `ChannelNumber` | string | optional |  |
| `State` | [ServiceOrderState](#X-Ref-Name-ServiceOrderState) | required |  |
| `StartUtc` | string | required |  |
| `EndUtc` | string | required |  |
| `ReleasedUtc` | string | optional |  |
| ~~`AdultCount`~~ | integer | required |  |
| ~~`ChildCount`~~ | integer | required |  |
| `PersonCounts` | array of [PersonCountParameters](#PersonCountParameters) | required |  |
| `CustomerId` | string | required |  |
| `BookerId` | string | optional |  |
| `RequestedCategoryId` | string | required |  |
| `RateId` | string | required |  |
| `VoucherCode` | string | optional |  |
| `CreditCardId` | string | optional |  |
| `TravelAgencyId` | string | optional |  |
| `CompanyId` | string | optional |  |
| `BusinessSegmentId` | string | optional |  |
| `Notes` | string | optional |  |
| `TimeUnitAmount` | object | required | Price of the product that overrides the price defined in Mews. |
| `TimeUnitPrices` | array of [PerUnitPriceParameters](#PerUnitPriceParameters) | optional |  |
| `ProductOrders` | array of [ProductOrderAdditionData](#ProductOrderAdditionData) | optional |  |
| `ResourceAccessTokens` | array of [ResourceAccessTokenParameters](#ResourceAccessTokenParameters) | optional |  |
| `AvailabilityBlockId` | string | optional |  |
| `ReservationPurpose` | [ReservationPurpose](#X-Ref-Name-ReservationPurpose) | required |  |
| `TimeUnitCost` | object | required |  |

#### PersonCountParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required |  |
| `Count` | integer | required |  |

#### AmountParameters
Price of the product that overrides the price defined in Mews.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `TaxCodes` | array of string | required |  |
| `NetValue` | number | optional |  |
| `GrossValue` | number | optional |  |

#### PerUnitPriceParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Index` | integer | required |  |
| `Amount` | object | required | Price of the product that overrides the price defined in Mews. |

#### ProductOrderAdditionData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required |  |
| `Count` | integer | optional |  |
| `UnitAmount` | object | required | Price of the product that overrides the price defined in Mews. |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `UnitCost` | object | required |  |

#### CostParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Amount` | number | required |  |
| `Currency` | string | required |  |
| `Tax` | number | required |  |

#### ResourceAccessTokenParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrderId` | string | required |  |
| `CompanionshipId` | string | optional |  |
| `ResourceId` | string | optional |  |
| `Value` | string | optional |  |
| `Type` | string | optional |  |
| `SerialNumber` | string | optional |  |
| `ValidityStartUtc` | string | optional |  |
| `ValidityEndUtc` | string | optional |  |
| `Permissions` | object | required |  |

#### ResourceAccessTokenPermissionsParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bed` | object | required |  |
| `Room` | object | required |  |
| `Floor` | object | required |  |
| `Building` | object | required |  |

### Response

```javascript
{
  "ReservationPrices": [
    {
      "Identifier": "1234",
      "Total": {
        "Currency": "GBP",
        "NetValue": 20,
        "GrossValue": 23,
        "TaxValues": [
          {
            "Code": "UK-S",
            "Value": 3
          }
        ]
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationPrices` | array of [Reservation price](#ReservationPrice) | optional | The reservation prices. |

#### Reservation price

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Identifier` | string | optional | Identifier of the reservation within the transaction. |
| `TotalAmount` | object | required | Value of the preauthorization. |
| `Total` | object | required | Total price of the reservation. |

#### CurrencyValueOld
Total price of the reservation.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |

## Update reservations

Updates information about the specified reservations. Note that if any of the fields are sent as &#x60;null&#x60;, it won&#x27;t clear the field in Mews. If the &#x60;Value&#x60; within the object is sent as &#x60;null&#x60;, the field will be cleared in Mews. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/reservations/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Client": "Sample Client 1.0.0",
  "Reason": "Testing",
  "CheckOverbooking": true,
  "CheckRateApplicability": true,
  "Reprice": true,
  "ApplyCancellationFee": true,
  "ReservationUpdates": [
    {
      "ReservationId": "622605a9-2969-441f-9610-aa720099ae1c",
      "StartUtc": {
        "Value": "2019-10-01T14:00:00Z"
      },
      "EndUtc": {
        "Value": "2019-10-03T10:00:00Z"
      },
      "AssignedResourceId": {
        "Value": "16ce4335-2198-408b-8949-9722894a42fb"
      },
      "AssignedResourceLocked": {
        "Value": "false"
      },
      "ChannelNumber": null,
      "RequestedCategoryId": null,
      "TravelAgencyId": {
        "Value": null
      },
      "CompanyId": {
        "Value": "73ba34d1-f375-460c-bf2d-8a63e71677a6"
      },
      "BusinessSegmentId": null,
      "Purpose": {
        "Value": "Business"
      },
      "RateId": null,
      "BookerId": {
        "Value": "92923102-bf91-4a4a-8ee8-9dcb79c9d6de"
      },
      "TimeUnitPrices": {
        "Value": [
          {
            "Index": 0,
            "Amount": {
              "Currency": "GBP",
              "GrossValue": 20,
              "TaxCodes": [
                "UK-S"
              ]
            }
          },
          {
            "Index": 1,
            "Amount": {
              "Currency": "GBP",
              "GrossValue": 30,
              "TaxCodes": [
                "UK-S"
              ]
            }
          }
        ]
      },
      "PersonCounts": {
        "Value": [
          {
            "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
            "Count": 2
          },
          {
            "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
            "Count": 2
          }
        ]
      },
      "CreditCardId": {
        "Value": "5d802a8f-3238-42b2-94be-ab0300ab2b6c"
      },
      "AvailabilityBlockId": {
        "Value": "aaaa654a4a94-4f96-9efc-86da-bd26d8db"
      },
      "Options": {
        "OwnerCheckedIn": {
          "Value": true
        }
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
| `ReservationId` | string | required |  |
| `ChannelNumber` | object | required |  |
| `StartUtc` | object | required |  |
| `EndUtc` | object | required |  |
| `ReleasedUtc` | object | required |  |
| `AdultCount` | object | required |  |
| `ChildCount` | object | required |  |
| `PersonCounts` | object | required |  |
| `AssignedResourceId` | object | required |  |
| `RequestedCategoryId` | object | required |  |
| `TraveAgencyId` | object | required |  |
| `TravelAgencyId` | object | required |  |
| `CompanyId` | object | required |  |
| `BusinessSegmentId` | object | required |  |
| `Purpose` | object | required |  |
| `RateId` | object | required |  |
| `CreditCardId` | object | required |  |
| `TimeUnitPrices` | object | required |  |
| `BookerId` | object | required |  |
| `AssignedResourceLocked` | object | required |  |
| `AvailabilityBlockId` | object | required |  |
| `Options` | object | required |  |
| `ReservationUpdates` | array of [ReservationUpdateParameters](#ReservationUpdateParameters) | required, max 1000 items | Array of properties to be updated in each reservation specified. |
| ~~`CheckOverbooking`~~ | boolean | optional | Indicates whether the system will check and prevent a booking being made in the case of an overbooking, i.e. where there is an insufficient number of resources available to meet the request&lt;sup&gt;\*1&lt;/sup&gt;. The default is true, i.e. the system will normally check for this unless the property is set to false. |
| ~~`CheckRateApplicability`~~ | boolean | optional | Indicates whether the system will check and prevent a booking being made using a restricted rate, e.g. a private rate. The default is true, i.e. the system will normally check for this unless the property is set to false. |
| `Reprice` | boolean | optional | Whether the price should be updated to latest value for date/rate/category combination set in Mews. If not specified, the reservation price is updated. |
| ~~`ApplyCancelationFee`~~ | boolean | optional |  |
| `ApplyCancellationFee` | boolean | optional | Whether the cancellation fees should be applied according to rate cancellation policies. If not specified, the cancellation fees are applied. |
| `Reason` | string | optional | Reason for updating the reservation. Required when updating the price of the reservation. |

#### Int32UpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | integer | required |  |

#### PersonCountParametersIEnumerableUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of [PersonCountParameters](#PersonCountParameters) | optional |  |

#### PerUnitPriceParametersIEnumerableUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of [PerUnitPriceParameters](#PerUnitPriceParameters) | optional |  |

#### ReservationUpdateOptionsParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OwnerCheckedIn` | object | required |  |

#### ReservationUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required |  |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required |  |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required |  |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional |  |
| `ReservationId` | string | required |  |
| `ChannelNumber` | object | required |  |
| `StartUtc` | object | required |  |
| `EndUtc` | object | required |  |
| `ReleasedUtc` | object | required |  |
| `AdultCount` | object | required |  |
| `ChildCount` | object | required |  |
| `PersonCounts` | object | required |  |
| `AssignedResourceId` | object | required |  |
| `RequestedCategoryId` | object | required |  |
| `TraveAgencyId` | object | required |  |
| `TravelAgencyId` | object | required |  |
| `CompanyId` | object | required |  |
| `BusinessSegmentId` | object | required |  |
| `Purpose` | object | required |  |
| `RateId` | object | required |  |
| `CreditCardId` | object | required |  |
| `TimeUnitPrices` | object | required |  |
| `BookerId` | object | required |  |
| `AssignedResourceLocked` | object | required |  |
| `AvailabilityBlockId` | object | required |  |
| `Options` | object | required |  |

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
      "Sex": null,
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
  "OrderItems": null,
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
      "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
      "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
      "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
      "Number": "52",
      "ChannelNumber": "TW48ZP",
      "ChannelManager": "",
      "ChannelManagerGroupNumber": null,
      "ChannelManagerNumber": null,
      "State": "Processed",
      "Origin": "Connector",
      "OriginDetail": null,
      "Purpose": "Student",
      "CreatedUtc": "2016-02-20T14:58:02Z",
      "UpdatedUtc": "2016-02-20T14:58:02Z",
      "CancelledUtc": null,
      "StartUtc": "2016-02-20T13:00:00Z",
      "EndUtc": "2016-02-22T11:00:00Z",
      "ReleasedUtc": null,
      "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      "AssignedResourceLocked": false,
      "BusinessSegmentId": null,
      "CompanyId": null,
      "TravelAgencyId": null,
      "AvailabilityBlockId": null,
      "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
      "VoucherId": null,
      "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
      "PersonCounts": [
        {
          "AgeCategoryId": "1f67644f-052d-4863-acdf-ae1600c60ca0",
          "Count": 2
        },
        {
          "AgeCategoryId": "ab58c939-be30-4a60-8f75-ae1600c60c9f",
          "Count": 2
        }
      ]
    }
  ],
  "Services": null,
  "Resources": null,
  "ResourceCategories": null,
  "ResourceCategoryAssignments": null,
  "Notes": null,
  "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | array of [ReservationOld](#ReservationOld) | optional | The reservations that collide with the specified interval. |
| `ReservationGroups` | array of [ReservationGroupOld](#ReservationGroupOld) | optional | Reservation groups that the reservations are members of. |
| `Customers` | array of [Customer](#Customer) | optional | Customers that are members of the reservations. |
| `Services` | array of [Service](#Service) | optional | Services that have been reserved. |
| `Products` | array of [Product](#Product) | optional | Products orderable with reservations. |
| `Resources` | array of [Resource](#Resource) | optional | Assigned resources of the reservations. |
| `ResourceCategories` | array of [Resource category](#ResourceCategory) | optional | Resource categories of the resources. |
| `ResourceCategoryAssignments` | array of [Resource category assignment](#ResourceCategoryAssignment) | optional | Assignments of the resources to categories. |
| `BusinessSegments` | array of [Business segment](#BusinessSegment) | optional | Business segments of the reservations. |
| `Rates` | array of [Rate](#Rate) | optional | Rates of the reservations. |
| `RateGroups` | array of [RateGroupOld](#RateGroupOld) | optional | Rate groups of the reservation rates. |
| `Items` | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | Revenue items of the reservations. |
| `Notes` | array of [OrderNote](#OrderNote) | optional | Notes of the reservations. |
| `QrCodeData` | array of [ReservationQrCodeData](#ReservationQrCodeData) | optional | QR code data of the reservations. |
| `Companies` | array of [Company](#Company) | optional |  |
| `ResourceAccessTokens` | array of [Resource access token](#ResourceAccessToken) | optional |  |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest reservation returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older reservations. |

## Confirm reservation

Marks all specified reservations as &#x60;Confirmed&#x60;. Succeeds only if all confirmation conditions are met (the reservations have the &#x60;Optional&#x60; state).

### Request

`[PlatformAddress]/api/connector/v1/reservations/confirm`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationIds": [
    "9af9d8b0-43ae-414d-80a8-abc1012a2a59"
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
| `ReservationIds` | array of string | required | Unique identifier of the reservations to confirm. |
| ~~`ReservationId`~~ | string | required |  |
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the reservations, customers, groups and rates should be also returned. |
| `SendConfirmationEmail` | boolean | optional | Wheter the confirmation email is sent. Default value is true. |

### Response

```javascript
{
  "ReservationIds": [
    "5ca70705-cbb7-48c4-8cc4-abb900aa278c"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationIds` | array of string | optional |  |

## Start reservation

Marks a reservation as &#x60;Started&#x60; (= checked in). Succeeds only if all starting conditions are met (the reservation has the &#x60;Confirmed&#x60; state, does not have start set to future, has an inspected room assigned etc). Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/reservations/start`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b"
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
| `ReservationId` | string | required | Unique identifier of the reservation to start. |

### Response

```javascript
{}
```

## Process reservation

Marks a reservation as &#x60;Processed&#x60; (= checked out). Succeeds only if all processing conditions are met (the reservation has the &#x60;Started&#x60; state, balance of all reservation members is zero etc). Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).
### Conditions
- Reservation has already been checked in.
- Reservation isn&#x27;t alredy in &#x60;Processed&#x60; state.
- Reservation can&#x27;t be checked out sooner than last day of planned stay.
- The companion profiles of reservation are complete (details can be found in error message).
- If &#x60;AllowOpenBalance&#x60; set to &#x60;false&#x60;, all bills have to be closable (items on bills are either paid by current customer, or set to be paid by other customer). With &#x60;CloseBills&#x60; option set to &#x60;true&#x60; they can be automatically closed, when set to &#x60;false&#x60; they must be closed manually.
- If &#x60;AllowOpenBalance&#x60; set to &#x60;true&#x60;, &#x60;Notes&#x60; must be filled in.

### Request

`[PlatformAddress]/api/connector/v1/reservations/process`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
  "CloseBills": false,
  "AllowOpenBalance": false,
  "Notes": null
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
| `ReservationId` | string | required | Unique identifier of the reservation to process. |
| `CloseBills` | boolean | required | Whether closable bills of the reservation members should be automatically closed. |
| `AllowOpenBalance` | boolean | required | Whether non-zero consumed balance of all reservation members is allowed. |
| `Notes` | string | optional | Required if AllowOpenBalance set to true. Used to provide reason for closing with unbalanced bill. |

### Response

```javascript
{}
```

## Cancel reservation

Cancels all reservation with specified identifiers. Succeeds only if the reservations are cancellable. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/reservations/cancel`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ReservationIds": [
    "5ca70705-cbb7-48c4-8cc4-abb900aa278c"
  ],
  "PostCancellationFee": true,
  "Notes": "Cancellation through Connector API"
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
| `ReservationIds` | array of string | required | Unique identifiers of the reservation to cancel. |
| ~~`ReservationId`~~ | string | required |  |
| `PostCancellationFee` | boolean | required | Whether cancellation fees should be charged according to rate conditions. |
| `Notes` | string | optional | Additional notes describing the reason for the cancellation. |

### Response

```javascript
{
  "ReservationIds": [
    "5ca70705-cbb7-48c4-8cc4-abb900aa278c"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ReservationIds` | array of string | optional |  |

## Update reservation customer

Updates customer of a reservation. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/reservations/updateCustomer`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ReservationId": "209d984d-4985-4efb-96ec-f6591fc597bf",
  "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
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
| `ReservationId` | string | required | Unique identifier of the reservation to be updated. |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |

### Response

```javascript
{}
```

## Update reservation interval

Updates reservation interval (start, end or both). Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/reservations/updateInterval`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ReservationId": "209d984d-4985-4efb-96ec-f6591fc597bf",
  "StartUtc": "2017-08-12T15:00:00Z",
  "EndUtc": "2017-08-15T12:00:00Z",
  "ChargeCancellationFee": false
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
| `ReservationId` | string | required | Unique identifier of the reservation to be updated. |
| `StartUtc` | string | optional | New reservation start in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | New reservation end in UTC timezone in ISO 8601 format. |
| `ChargeCancellationFee` | boolean | required | Whether cancellation fee should be charged for potentially canceled nights. |

### Response

```javascript
{}
```

## Add reservation companion

Adds a customer as a companion to the reservation. Succeeds only if there is space for the new companion (count of current companions is less than &#x60;AdultCount + ChildCount&#x60;).

### Request

`[PlatformAddress]/api/connector/v1/reservations/addCompanion`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
  "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
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
| `ReservationId` | string | required | Unique identifier of the reservation. |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |

### Response

```javascript
{}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CompanionshipId` | string | required |  |

## Delete reservation companion

Removes customer companionship from the reservation. Note that the customer profile stays untouched, only the relation between the customer and reservation is deleted.

### Request

`[PlatformAddress]/api/connector/v1/reservations/deleteCompanion`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
  "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
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
| `ReservationId` | string | required | Unique identifier of the reservation. |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |

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
  "Client": "Sample Client 1.0.0",
  "ReservationId": "4d2aa234-5d30-472c-899f-ab45008c3479",
  "ProductId": "47312820-2268-4f5c-864d-aa4100ed82bc",
  "Count": 1,
  "StartUtc": "2021-01-02T00:00:00Z",
  "EndUtc": "2021-01-03T00:00:00Z",
  "UnitAmount": {
    "Currency": "GBP",
    "GrossValue": 10,
    "TaxCodes": [
      "UK-S"
    ]
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
| `ReservationId` | string | required | Unique identifier of the reservation. |
| `ProductId` | string | required | Unique identifier of the [Product](https://mews-systems.gitbook.io/connector-api/operations/products/#product). |
| `Count` | integer | required | The amount of the products to be added. Note that if the product is charged e.g. per night, count 1 means a single product every night. Count 2 means two products every night. |
| `UnitAmount` | object | required | Price of the product that overrides the price defined in Mews. |
| `StartUtc` | string | optional | Product start in UTC timezone in ISO 8601 format. For products with charging Once and PerPerson must be set to same value as EndUtc. |
| `EndUtc` | string | optional | Product end in UTC timezone in ISO 8601 format. For products with charging Once and PerPerson must be set to same value as StartUtc. |
| `UnitCost` | object | required |  |

### Response

```javascript
{
  "ItemIds": [
    "ff81fd7a-29ba-4160-8e22-ab4300f67b23"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ItemIds` | array of string | optional |  |
