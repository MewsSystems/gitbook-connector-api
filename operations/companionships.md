# Companionships

## Get all companionships

Returns all companionships based on customers, reservations or reservation groups. One of them must be specified in the request.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/companionships/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "CompanionshipIds": [
    "72d4b117-1f84-44a3-1f84-8b2c0635ac60"
  ],
  "CustomerIds": [
    "35d4b117-4e60-44a3-9580-c582117eff98"
  ],
  "ReservationIds": [
    "bfee2c44-1f84-4326-a862-5289598f6e2d"
  ],
  "ReservationGroupIds": [
    "c704dff3-7811-4af7-a3a0-7b2b0635ac59"
  ],
  "UpdatedUtc": {
    "StartUtc": "2020-02-05T00:00:00Z",
    "EndUtc": "2020-02-10T00:00:00Z"
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
| `CompanionshipIds` | array of string | optional, max 1000 items | Unique identifiers of [Companionship](https://mews-systems.gitbook.io/connector-api/operations/#companionship). |
| `Extent` | object | required | Extent of data to be returned. E.g. it is possible to specify that together with the companionships, customers, reservations, and reservation groups should be also returned. |
| `ReservationIds` | array of string | optional, max 1000 items | Unique identifiers of reservations. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `ReservationGroupIds` | array of string | optional, max 1000 items | Unique identifiers of [Reservation groups](https://mews-systems.gitbook.io/connector-api/operations/reservations/#reservation-group). |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |

#### CompanionshipExtent
Extent of data to be returned. E.g. it is possible to specify that together with the companionships, customers, reservations, and reservation groups should be also returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Reservations` | boolean | required |  |
| `ReservationGroups` | boolean | required |  |
| `Customers` | boolean | required |  |

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
  "ReservationGroups": null,
  "Cursor": "72d4b117-1f84-44a3-1f84-8b2c0635ac60"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Companionships` | array of [Companionship](#Companionship) | optional | Companionships. |
| `Reservations` | array of [ReservationOld](#ReservationOld) | optional | The accompanied reservations. |
| `ReservationGroups` | array of [ReservationGroupOld](#ReservationGroupOld) | optional | The accompanied reservation groups. |
| `Customers` | array of [Customer](#Customer) | optional | Customers that belong to the companionships. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Companionship

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of [Companionship](https://mews-systems.gitbook.io/connector-api/operations/#companionship). |
| `CustomerId` | string | required | Unique identifier of [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |
| `ReservationGroupId` | string | required | Unique identifier of [Reservation group](https://mews-systems.gitbook.io/connector-api/operations/reservations/#reservation-group). |
| `ReservationId` | string | optional | Unique identifier of reservation. |

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
