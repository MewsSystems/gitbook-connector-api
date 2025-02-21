# Migration Guide: Get all reservations

This guide is intended to assist API users to migrate away from the obsolete API Operation [Get all reservations] which is long deprecated and will be permanently discontinued.

## Contents

- [Get all reservations (ver 2023-06-06)](#get-all-reservations-ver-2023-06-06)
- [Migration steps](#migration-steps)
- [Request parameters](#request-parameters)
- [Time filters](#time-filters)
- [Extents removal](#extents-removal)
- [Replacement operations for extents](#replacement-operations-for-extents)
- [Response properties](#response-properties)
- [Known issues](#known-issues)
- [Feedback and troubleshooting](#feedback-and-troubleshooting)

## Get all reservations (ver 2023-06-06)

API Operation [Get all reservations] is replaced by [Get all reservations (ver 2023-06-06)]. The original operation became increasingly complex and combination of extents along with backward compatibility requirements resulted in unpredictable performance and frequent timeouts. The new operation performs the same basic function to fetch reservations from Mews, however there are substantial differences that you need to be aware of.
The major differences are as follows:

- The new operation doesn't support extents
- The new operation requires [pagination](../guidelines/pagination.md)
- The new operation supports filtering by more time intervals
- The new operation supports [Portfolio Access Tokens](../guidelines/multi-property.md)

### What do these changes mean for you?

- If you previously used extents, you will need to change your implementation to make additional calls to the API to get the same information.
- You will need to change your implementation to support pagination, including supplying the mandatory Limitation parameter in your request.
- Filtering by time intervals offers new opportunities to make your calls more efficient.
- Portfolio Access Tokens again offers new opportunities to users taking advantage of the Mews Multi-Property feature.

> **Extents**: Extents are a way to fetch related entities with a single API request. For example, when fetching reservations in the original Get all reservations operation, you were able to receive data about related customers and resources in the same resources. While this simplified some use cases, it frequently resulted in request timeouts and overfetching of rarely updated data. Furthermore, contract changes in related entities complicated tracking changes to the operation. See also [Best practices](../guidelines/best-practices.md).

## Migration steps

1. Check the usage of request parameters and map the original request parameters to their new equivalents.
2. Replace extents in request parameters (if used) with calls to additional operations.
3. Map original response parameters to their new equivalents.
4. Ensure your implementation supports pagination.

## Request parameters

The following table maps request parameters from [Get all reservations] to the equivalent request parameters in [Get all reservations (ver 2023-06-06)].

| Original property | New property | Notes |
| :-- | :-- | :-- |
| `ServiceIds` | `ServiceIds` | No longer `required`. |
| `GroupIds` | `ReservationGroupIds` | - |
| `ReservationIds` | `ReservationIds` | No change. |
| `CustomerIds` | `AccountIds` | Accounts are more general than Customers and include Companies as well. |
| `AssignedResourceIds` | `AssignedResourceIds` | No change. |
| `RateIds` | n/a | Currently not supported. |
| `BusinessSegmentIds` | n/a | Currently not supported. |
| `ChannelNumbers` | n/a | Currently not supported. |
| `Numbers` | `Numbers` | - |
| `StartUtc` | See [Time filters] | - |
| `EndUtc` | See [Time filters] | - |
| `TimeFilter` | See [Time filters] | - |
| `Currency` | n/a | Currently not supported. |
| `States` | `States` | No change. |
| `Limitation` | `Limitation` | Required for all requests. |

## Time filters

The combination of the request properties `TimeFilter`, `StartUtc` and `EndUtc` has been replaced by individual Time interval properties.
For example, instead of `"TimeFilter":"Colliding"` use `CollidingUtc` request property.

Original request to [Get all reservations]:

```txt
[PlatformAddress]/api/connector/v1/reservations/getAll
```

```json
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "StartUtc": "2023-04-01T00:00:00Z",
  "EndUtc": "2023-05-05T00:00:00Z",
  "TimeFilter": "Colliding"
}
```

Migrated request to [Get all reservations (ver 2023-06-06)]:

```txt
[PlatformAddress]/api/connector/v1/reservations/getAll/2023-06-06
```

```json
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CollidingUtc": {
    "StartUtc": "2023-04-01T00:00:00Z",
    "EndUtc": "2023-05-05T00:00:00Z"
  }
}
```

The following table maps the original `TimeFilter` value to the equivalent properties for [Get all reservations (ver 2023-06-06)]:

| `TimeFilter` value | Request property | Notes |
| :-- | :-- | :-- |
| `Colliding` | `CollidingUtc` | - |
| `Created` | `CreatedUtc` | - |
| `Updated` | `UpdatedUtc` | - |
| `Start` | `ScheduledStartUtc` | Clarified behavior of filtering by the scheduled time of reservation. |
| `End` | `ScheduledEndUtc` | - |
| `Overlapping` | n/a | Dropped due to low usage, use `CollidingUtc` instead. |
| `Canceled` | n/a | Dropped due to low usage. Can be emulated with the combination of `UpdatedUtc` and States set to [“Canceled"] filters. |

## Extents removal

The new [Get all reservations (ver 2023-06-06)] operation doesn’t support extents. Instead, separate API Operations to retrieve respective entities should be used.

### Extents migration example

The following example request to [Get all reservations] uses extents to retrieve Reservations, Customers, and Resources in a single request:

```txt
[PlatformAddress]/api/connector/v1/reservations/getAll
```

```json
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "StartUtc": "2023-04-01T00:00:00Z",
  "EndUtc": "2023-05-05T00:00:00Z",
  "TimeFilter": "Updated",
  "Extent": {
    "Reservations": true,
    "Customers": true,
    "Resources": true
  },
}
```

With [Get all reservations (ver 2023-06-06)] the request needs to be broken down into 3 separate requests:

1. [Get all reservations (ver 2023-06-06)] to retrieve reservations including AccountId and AssignedResourceIds properties of individual reservations.
2. [Get all customers] to retrieve customers' details using the `CustomerIds` filter with `AccountId` values retrieved in the first step (where `AccountType` is `"Customer"`).
3. [Get all resources] to retrieve resources' details using the `ResourceIds` filter with `AssignedResourceIds` values retrieved in the first step. Alternatively, [Get all resources] can be regularly requested without filters and cached, since resources' details don’t change frequently.

First request to [Get all reservations (ver 2023-06-06)]:

```txt
[PlatformAddress]/api/connector/v1/reservations/getAll/2023-06-06
```

```json
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "UpdatedUtc": {
    "StartUtc": "2023-04-01T00:00:00Z",
    "EndUtc": "2023-05-05T00:00:00Z"
  },
  "Limitation": { "Count": 2 }
}
```

Returns the following response with two reservations:

```jsonc
{
  "Reservations": [
    {
      "Id": "0f515589-99b4-423d-b83a-b237009f0509",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "AccountType": "Customer",
      "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
      // other properties removed for clarity
    },
    {
      "Id": "bdf1138f-6d47-4f30-9d5a-02c65344f396",
      "AccountId": "06ab4938-9675-4f3b-a198-012ed8abc1a6",
      "AccountType": "Customer",
      "AssignedResourceId": "ed705d9e-ec6d-4ba7-9ffb-a25de7fbfb52",
      // other properties removed for clarity
    }
  ],
  "Cursor": "bdf1138f-6d47-4f30-9d5a-02c65344f396"
}
```

Second request to [Get all customers](../operations/customers.md#get-all-customers) passes value of `AccountId` to `CustomerIds` filter only from the first reservation as `AccountType` is `"Customer"`:

```txt
[PlatformAddress]/api/connector/v1/customers/getAll
```

```json
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CustomerIds": [
    "fadd5bb6-b428-45d5-94f8-fd0d89fece6d"
  ],
  "Limitation": { "Count": 10 }
}
```

Third request to [Get all resources](../operations/resources.md#get-all-resources) uses values from `AssignedResourceId` in `ResourceIds` filter from both reservations:

```txt
[PlatformAddress]/api/connector/v1/resources/getAll
```

```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ResourceIds": [
        "20e00c32-d561-4008-8609-82d8aa525714",
        "ed705d9e-ec6d-4ba7-9ffb-a25de7fbfb52"
    ],
    "Limitation": { "Count": 10 }
}
```

### Replacement operations for extents

The following table links individual extents together with their replacement API Operations.

| Extent | API operation | Notes |
| :-- | :-- | :-- |
| `Reservations` | n/a | Operation always returns reservations. |
| `ReservationGroups` | [Get all reservation groups] | Use `GroupId` response property in `ReservationGroupIds` request parameter. |
| `Customers` | [Get all customers] | Use `AccountId` response property where `AccountType` is "Customer". |
| `CustomerAdresses` (sic) | [Get all addresses] | Use `AccountId` response property where in `AccountIds` parameter. |
| `CustomerIdentityDocuments` | [Get all identity documents] | Use `AccountId` response property where `AccountType` is "Customer" |
| `Services` | [Get all services] | Use `ServiceId` response property. |
| `Products` | [Get all products] | Use `ServiceId` response property. |
| `BusinessSegments` | [Get all business segments] | Use `BusinessSegmentId` response property. |
| `Resources` | [Get all resources] | Use `AssignedResourceIds` response property. |
| `ResourceCategories` | [Get all resource categories] | Use `RequestedResourceCategoryId` response property. |
| `ResourceCategoryAssignments` | [Get all resource category assignments] | Use `AssignedResourceIds` property in `ResourceIds` request parameter. |
| `Rates` | [Get all rates] | Use `RateId` response property. |
| `Items` | [Get all payments]<br>[Get all order items] | Payments: Use `Id` response property in `ReservationIds` request parameter.<br>Order items: Use `Id` response property in `ServiceOrderIds` request parameter. |
| `OrderItems` | [Get all order items] | Use `Id` response property in `ServiceOrderIds` request parameter. |
| `Notes` | [Get all service order notes] | Use `Id` response property in `ServiceOrderIds` request parameter. |
| `QrCodeData` | n/a | Use `QrCodeData` response property. |
| `Companies` | [Get all companies] | Use `AccountId` response property where `AccountType` is `"Company"`. |
| `AccountingStates` | [Get all payments]<br>[Get all order items] | Use `AccountingStates` request parameter for both operations. |

## Response properties

The following table maps the response properties from the original [Reservation (ver 2017-04-12)] entity to the properties of [Reservation (ver 2023-06-06)]. Only the changed properties are listed.

| Original property | New property | Notes |
| :-- | :-- | :-- |
| `ChannelManagerGroupNumber` | n/a | No longer supported. |
| `ChannelManager` | n/a | `TO DO` |
| `Origin` | `Origin` | Operations-specific values moved to `CommanderOrigin` (see Commander origin). |
| `Purpose` | `Purpose` | No longer required. |
| `StartUtc` | `ScheduledStartUtc`<br>`ActualStartUtc` | Early check-ins changed `StartUtc` value. Check-in time and scheduled start time are now provided in separate properties. |
| `EndUtc` | `ScheduledEndUtc`<br>`ActualEndUtc` | Check-outs changed EndUtc value. Check-out time and scheduled end time are now provided in separate properties. |
| `RequestedCategoryId` | `RequestedResourceCategoryId` | - |
| `CompanyId` | `PartnerCompanyId` | - |
| `CancellationReason` | `CancellationReason` | Optional, previously incorrectly marked as required. |
| `OwnerId` | `AccountId` | - |
| `Options` | `Options` | Uses Service order options. |
| `AssignedSpaceId` | `AssignedResourceId` | Previously deprecated. |
| `AssignedSpaceLocked` | `AssignedResourceLocked` | Previously deprecated. |
| `AdultCount` | `PersonCounts` | Previously deprecated. |
| `ChildCount` | `PersonCounts` | Previously deprecated. |
| `CustomerId` | `AccountId` | Previously deprecated. |
| `CompanionIds` | n/a | Previously deprecated, replaced by [Get all companions](../operations/companies.md#get-all-companies). |
| `ChannelManagerId` | `ChannelManagerNumber` | Previously deprecated. |

## Known issues

The [Add reservation] and [Update reservation] operations work with older versions of request and response properties corresponding to [Reservation (ver 2017-04-12)] entity. An updated versions of these operations will be published in H2/2025.

## Feedback and troubleshooting

> **TODO** Here will be a link to partner survey and page on how to contact partner success.

[Get all reservations]: ../operations/reservations.md#get-all-reservations
[Get all reservations (ver 2023-06-06)]: ../operations/reservations.md#get-all-reservations-ver-2023-06-06
[Time filters]: #time-filters
[Get all reservation groups]: ../operations/reservationgroups.md#get-all-reservation-groups
[Get all customers]: ../operations/customers.md#get-all-customers
[Get all addresses]: ../operations/addresses.md#get-all-addresses
[Get all identity documents]: ../operations/identitydocuments.md#get-all-identity-documents
[Get all services]: ../operations/services.md#get-all-services
[Get all products]: ../operations/products.md#get-all-products
[Get all business segments]: ../operations/businesssegments.md#get-all-business-segments
[Get all resources]: ../operations/resources.md#get-all-resources
[Get all resource categories]: ../operations/resourcecategories.md#get-all-resource-categories
[Get all resource category assignments]: ../operations/resourcecategories.md#get-all-resource-category-assignments
[Get all rates]: ../operations/rates.md#get-all-rates
[Get all payments]: ../operations/payments.md#get-all-payments
[Get all order items]: ../operations/orderitems.md#get-all-order-items
[Get all service order notes]: ../operations/serviceordernotes.md#get-all-service-order-notes
[Get all companies]: ../operations/companies.md#get-all-companies
[Reservation (ver 2017-04-12)]: ../operations/reservations.md#reservation-ver-2017-04-12
[Reservation (ver 2023-06-06)]: ../operations/reservations.md#reservation-ver-2023-06-06
[Add reservation]: ../operations/reservations.md#add-reservation
[Update reservation]: ../operations/reservations.md#update-reservation
