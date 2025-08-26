<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Product service orders

## Get all product service orders

Returns all product service orders associated with the given enterprise. This operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/productServiceOrders/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ProductServiceOrderIds": [
    "9e6d4492-315b-4089-b9d6-5b1bd2eddc1b"
  ],
  "ServiceIds": [
    "ae8da28c-e8a4-4141-9df0-8c998976c691",
    "6b02d015-47ac-4c41-8e9f-5b4db61d4284"
  ],
  "LinkedReservationIds": [
    "0f515589-99b4-423d-b83a-b237009f0509",
    "b7a3f5cb-1e69-4a5f-a069-10f461996d7f"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-04-01T00:00:00Z",
    "EndUtc": "2023-05-05T00:00:00Z"
  },
  "States": [
    "Confirmed",
    "Started"
  ],
  "Limitation": {
    "Count": 10,
    "Cursor": "819e3435-7d5e-441f-bc68-76d89c69b8f5"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ProductServiceOrderIds` | array of string | optional, max 1000 items | Unique identifiers of the Product service order. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the `Service`. |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of the Customer or Company who owns the product service order. |
| `LinkedReservationIds` | array of string | optional, max 1000 items | Unique identifiers of linked Reservations. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the Product service orders were updated. |
| `States` | array of [Service order state](reservations.md#service-order-state) | optional | A list of product service order states to filter by. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "ProductServiceOrders": [
    {
      "Id": "9e6d4492-315b-4089-b9d6-5b1bd2eddc1b",
      "ServiceId": "ae8da28c-e8a4-4141-9df0-8c998976c691",
      "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "AccountType": "Customer",
      "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "UpdaterProfileId": "122fc063-ec6e-4198-b8db-6b168a59ffae",
      "BookerId": "bccdafd1-3e44-439d-861f-341526b597a9",
      "Number": "52",
      "State": "Confirmed",
      "Origin": "Connector",
      "CommanderOrigin": null,
      "OriginDetails": null,
      "CreatedUtc": "2023-04-23T14:58:02Z",
      "UpdatedUtc": "2023-04-23T14:58:02Z",
      "CancelledUtc": null,
      "VoucherId": null,
      "BusinessSegmentId": null,
      "LinkedReservationId": "0f515589-99b4-423d-b83a-b237009f0509",
      "Options": {
        "OwnerCheckedIn": true,
        "AllCompanionsCheckedIn": true,
        "AnyCompanionCheckedIn": true,
        "ConnectorCheckIn": true
      }
    }
  ],
  "Cursor": "9e6d4492-315b-4089-b9d6-5b1bd2eddc1b"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductServiceOrders` | array of [Product service order](productserviceorders.md#product-service-order) | required | The collection of product service orders. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Product service order

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the product service order |
| `ServiceId` | string | required | Unique identifier of the `Service` that product service order is made against. |
| `AccountId` | string | required | Unique identifier of the Customer or Company who owns the product service order. |
| `AccountType` | [Account type](accounts.md#account-type) | required | A discriminator specifying the type of account, e.g. `Customer` or `Company`. |
| `CreatorProfileId` | string | required | Unique identifier of the user who created the product service order. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who updated the product service order. |
| `BookerId` | string | optional | Unique identifier of the Customer on whose behalf the service order was made. |
| `Number` | string | required | Confirmation number of the service order in Mews. |
| `State` | [Service order state](reservations.md#service-order-state) | required | State of the product service order. |
| `Origin` | [Service order origin](reservations.md#service-order-origin) | required | Origin of the product service order. |
| `CommanderOrigin` | [Commander origin](reservations.md#commander-origin) | optional | Further detail about origin in case of Origin Commander. |
| `OriginDetails` | string | optional | Details about the product service order Origin. |
| `CreatedUtc` | string | required | Creation date and time of the product service order in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the product service order in UTC timezone in ISO 8601 format. |
| `CancelledUtc` | string | optional | Cancellation date and time in UTC timezone in ISO 8601 format. |
| `VoucherId` | string | optional | Unique identifier of the Voucher that has been used to create product service order. |
| `BusinessSegmentId` | string | optional | Identifier of the Business segment. |
| `LinkedReservationId` | string | optional | Identifier of the linked Reservation. |
| `Options` | [Service Order Options](reservations.md#service-order-options) | required | Options of the service order. |
