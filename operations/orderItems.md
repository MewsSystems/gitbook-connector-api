# Order Items

## Get all order items

Returns all order items. Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/orderitems/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "OrderItemIds": 
    [
        "3e982ab5-6245-4c39-80af-1118d40e7494",
        "bd11dc4a-8f9e-442b-bb1e-f5361b31dfa2"
    ],
    "ServiceOrderIds": 
    [
        "ac5ef5eb-c5b2-4083-879f-83f04a5ebda5",
        "5d603823-b40a-43a4-8244-d5d2b515deb5"
    ],
    "ServiceIds": 
    [
        "294c7859-63ba-46ad-a8bf-34fad2019383",
        "05089c0c-5d55-4756-827b-c4bcee1edf00"
    ],
    "BillIds": 
    [
        "d27ffe99-ff92-4afb-ac03-9268f24f0556",
        "297de6f8-bd67-4ebd-98b6-ecc1cd8f920c"
    ],
    "CreatedUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },
    "UpdatedUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },
    "ConsumedUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },
    "CanceledUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },
    "ClosedUtc": {
        "StartUtc": "2023-03-01T00:00:00Z",
        "EndUtc": "2023-03-31T00:00:00Z"
    },    
    "AccountingStates": [
        "Closed"
    ],
    "Currency": "EUR",
    "Limitation": {
        "Count": 10, 
        "Cursor": null
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `OrderItemIds` | array of string | required, max 1000 items | Unique identifier of the [Order item](orderItems.md#order-item). |
| `ServiceOrderIds` | array of string | required, max 1000 items | Unique identifier of the [Order item](orderItems.md#order-item). |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifier of the [Order item](orderItems.md#order-item). |
| `BillIds` | array of string | required, max 1000 items | Unique identifier of the [Bill](bills.md#bill) to which order item is assigned to. |
| `CreatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderItems.md#order-item) was created. |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderItems.md#order-item) was updated. |
| `ChargedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderItems.md#order-item) was charged. |
| `ConsumedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderItems.md#order-item) was consumed. |
| `CanceledUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderItems.md#order-item) was canceled. |
| `ClosedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Order item](orderItems.md#order-item) was closed. |
| `AccountingState` | string [Accounting state](#accounting-item-state) | required | Accounting state of the item. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](currencies.md#currency) the item costs should be converted to. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "OrderItems": [
    ],
    "Cursor": "d98c9611-0006-4691-a835-af2e00b170c4"
}
```

#### Order item