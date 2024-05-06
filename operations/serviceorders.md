# Service orders

## Get all product service orders

Returns all product service orders orders associated with the given enterprise. This operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/)..

### Request

`[PlatformAddress]/api/connector/v1/productServiceOrders/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ProductServiceOrderIds": [
    "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
  ],
  "ServiceIds": [
    "ae8da28c-e8a4-4141-9df0-8c998976c691",
    "6b02d015-47ac-4c41-8e9f-5b4db61d4284"
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
| `ProductServiceOrderIds` | array of string | optional, max 1000 items | Unique identifiers of the [Product service order](https://mews-systems.gitbook.io/connector-api/operations/#product-service-order). |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Services](https://mews-systems.gitbook.io/connector-api/operations/services/#service). |
| `AccountIds` | array of string | optional, max 1000 items |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `States` | array of [ServiceOrderState](#X-Ref-Name-ServiceOrderState) | optional | A list of product service order states to filter by. |

#### ServiceOrderState

- `Inquired`
- `Confirmed`
- `Started`
- `Processed`
- `Canceled`
- `Optional`
- `Requested`

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
  "ProductServiceOrders": [
    {
      "Id": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7",
      "ServiceId": "ae8da28c-e8a4-4141-9df0-8c998976c691",
      "AccountId": "94843f6f-3be3-481b-a1c7-06458774c3df",
      "AccountType": "Customer",
      "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "UpdaterProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "BookerId": "ebd507c5-6bfd-4ca9-96aa-ffed6fa94f72",
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
      "Options": {
        "OwnerCheckedIn": true,
        "AllCompanionsCheckedIn": true,
        "AnyCompanionCheckedIn": true,
        "ConnectorCheckIn": true
      }
    }
  ],
  "Cursor": "9b59b50d-bd32-4ce5-add8-09ea0e1300e7"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductServiceOrders` | array of [ServiceOrder](#ServiceOrder) | required | The product service order of the enterprise. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### ServiceOrder

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `ServiceId` | string | required |  |
| `AccountId` | string | required |  |
| `AccountType` | [AccountType](#X-Ref-Name-AccountType) | required |  |
| `CreatorProfileId` | string | required |  |
| `UpdaterProfileId` | string | required |  |
| `BookerId` | string | optional |  |
| `Number` | string | optional |  |
| `State` | [ServiceOrderState](#X-Ref-Name-ServiceOrderState) | required |  |
| `Origin` | [ServiceOrderOrigin](#X-Ref-Name-ServiceOrderOrigin) | required |  |
| `CommanderOrigin` | [ServiceOrderCommanderOrigin](#X-Ref-Name-ServiceOrderCommanderOrigin) | required |  |
| `OriginDetails` | string | optional |  |
| `CreatedUtc` | string | required |  |
| `UpdatedUtc` | string | required |  |
| `CancelledUtc` | string | optional |  |
| `VoucherId` | string | optional |  |
| `BusinessSegmentId` | string | optional |  |
| `LinkedReservationId` | string | optional |  |
| `Options` | object | required |  |

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

## Add order

Creates a new order, with the specified products and items. If the time of consumption is specified, it must be either in the future or within the Editable History Interval for the enterprise. Compared to a stay service order (i.e. a reservation), which is consumed over certain span of time, a product service order is consumed at a single point in time. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/orders/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "AccountId": "407a26f8-dcfc-4e29-b978-ab440117a153",
  "ServiceId": "d2129910-1da9-4d39-be14-ab3a00c9e70c",
  "BillId": "22b68915-05fe-4a31-b1cb-bd5efa35d305",
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
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `ServiceId` | string | required | Identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) to be ordered. |
| `AccountId` | string | optional | Identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) to be charged. Company billing may not be enabled for your integration. |
| ~~`CustomerId`~~ | string | optional | Identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) to be charged.  **Deprecated!** |
| `Options` | object | required |  |
| `ProductOrders` | array of [ProductOrderAdditionData](#ProductOrderAdditionData) | optional | Parameters of the ordered products. |
| `Items` | array of [OrderItemAdditionData](#OrderItemAdditionData) | optional | Parameters of the ordered custom items. |
| `ConsumptionUtc` | string | optional | Date and time of the order consumption in UTC timezone in ISO 8601 format. If not specified, current date and time is used. Please note, as order consumption is one-time event, the optional parameters StartUtc and EndUtc in [Product order parameters](https://mews-systems.gitbook.io/connector-api/operations/#product-order-parameters) should not be used. |
| `Notes` | string | optional | Additional notes of the order. |
| `BusinessSegmentId` | string | optional |  |
| `BillId` | string | optional | Identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) to which the created order will be assigned. The bill needs to be issued to the same account as the order. |
| `LinkedReservationId` | string | optional |  |

### Response

```javascript
{
  "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderId` | string | required | Unique identifier of the created order. |
| `ChargeId` | string | required |  |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/charge`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "AccountId": "407a26f8-dcfc-4e29-b978-ab440117a153",
  "ServiceId": "d2129910-1da9-4d39-be14-ab3a00c9e70c",
  "BillId": "22b68915-05fe-4a31-b1cb-bd5efa35d305",
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
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](https://mews-systems.gitbook.io/connector-api/operations/enterprises/#enterprise). Required when using a [Portfolio Access Token](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `ServiceId` | string | required | Identifier of the [Service](https://mews-systems.gitbook.io/connector-api/operations/services/#service) to be ordered. |
| `AccountId` | string | optional | Identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) or [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) to be charged. Company billing may not be enabled for your integration. |
| ~~`CustomerId`~~ | string | optional | Identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) to be charged.  **Deprecated!** |
| `Options` | object | required |  |
| `ProductOrders` | array of [ProductOrderAdditionData](#ProductOrderAdditionData) | optional | Parameters of the ordered products. |
| `Items` | array of [OrderItemAdditionData](#OrderItemAdditionData) | optional | Parameters of the ordered custom items. |
| `ConsumptionUtc` | string | optional | Date and time of the order consumption in UTC timezone in ISO 8601 format. If not specified, current date and time is used. Please note, as order consumption is one-time event, the optional parameters StartUtc and EndUtc in [Product order parameters](https://mews-systems.gitbook.io/connector-api/operations/#product-order-parameters) should not be used. |
| `Notes` | string | optional | Additional notes of the order. |
| `BusinessSegmentId` | string | optional |  |
| `BillId` | string | optional | Identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) to which the created order will be assigned. The bill needs to be issued to the same account as the order. |
| `LinkedReservationId` | string | optional |  |

#### OrderAdditionOptions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DisableItemGrouping` | boolean | required |  |

#### ProductOrderAdditionData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required |  |
| `Count` | integer | optional |  |
| `UnitAmount` | object | required | Price of the product that overrides the price defined in Mews. |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `UnitCost` | object | required |  |

#### AmountParameters
Price of the product that overrides the price defined in Mews.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required |  |
| `TaxCodes` | array of string | required |  |
| `NetValue` | number | optional |  |
| `GrossValue` | number | optional |  |

#### CostParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Amount` | number | required |  |
| `Currency` | string | required |  |
| `Tax` | number | required |  |

#### OrderItemAdditionData

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required |  |
| `UnitCount` | integer | required |  |
| `UnitAmount` | object | required | Price of the product that overrides the price defined in Mews. |
| `AccountingCategoryId` | string | optional |  |
| `Category` | object | required |  |
| `UnitCost` | object | required |  |

#### AccountingCategoryParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Name` | string | optional |  |

### Response

```javascript
{
  "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderId` | string | required | Unique identifier of the created order. |
| `ChargeId` | string | required |  |
