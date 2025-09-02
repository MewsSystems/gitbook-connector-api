<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Orders

## Add order

Creates a new order, with the specified products and items. If the product being posted already exists in Mews, then use `ProductOrders`. If the product does *not* exist in Mews, then use `Items`. If the time of consumption is specified, this must be either in the future or within the Editable History Interval for the enterprise. Compared to a stay service order (i.e. a reservation), which is consumed over certain span of time, a product service order is consumed at a single point in time.
Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

> ### Linking orders to reservations
> Specify parameter `LinkedReservationId` in order to link the order to a guest reservation. This will greatly assist the property when using billing automation.

### Request

`[PlatformAddress]/api/connector/v1/orders/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
  "AccountId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
  "Options": {
    "DisableItemGrouping": false
  },
  "ProductOrders": [
    {
      "ProductId": "2eb7ad8b-8dfb-4381-aba5-ab58009f2993",
      "Count": 2,
      "ExternalIdentifier": "EXT-PROD-001"
    }
  ],
  "Items": [
    {
      "Name": "Beer",
      "UnitCount": 3,
      "UnitAmount": {
        "Currency": "USD",
        "TaxCodes": [
          "US-DC-G"
        ],
        "NetValue": 7
      },
      "AccountingCategoryId": "90eff5aa-36b4-4689-80c0-ab3a00bb412e",
      "ExternalIdentifier": "EXT-ITEM-001"
    }
  ],
  "ConsumptionUtc": "2020-02-04T00:00:00Z",
  "Notes": "Order for guest room service",
  "BusinessSegmentId": "dc9188f6-fb61-412c-b3fd-af32dab082ed",
  "BillId": "ea087d64-3901-4eee-b0b7-9fce4c58a005",
  "LinkedReservationId": "0f515589-99b4-423d-b83a-b237009f0509"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the `Enterprise`. Required when using Portfolio Access Tokens, ignored otherwise. |
| `ServiceId` | string | required | Identifier of the `Service` to be ordered. |
| `AccountId` | string | required | Identifier of the `Customer` or `Company` to be charged. Company billing may not be enabled for your integration. |
| `Options` | [Order addition options](orders.md#order-addition-options) | optional | Options for the added order. |
| `ProductOrders` | array of [Product order parameters](orders.md#product-order-parameters) | optional | Parameters of the ordered products. |
| `Items` | array of [Item parameters](orders.md#item-parameters) | optional | Parameters of the ordered custom items. |
| `ConsumptionUtc` | string | optional | Date and time of the order consumption in UTC timezone in ISO 8601 format. If not specified, current date and time is used. Please note, as order consumption is one-time event, the optional parameters `StartUtc` and `EndUtc` in `ProductOrders` should not be used. |
| `Notes` | string | optional | Additional notes of the order. |
| `BusinessSegmentId` | string | optional | Unique identifier of the business segment. |
| `BillId` | string | optional | Identifier of the `Bill` to which the created order will be assigned. The bill needs to be issued to the same account as the order. |
| `LinkedReservationId` | string | optional | Identifier of the `Reservation` to which the created order will be linked. |
| ~~`CustomerId`~~ | ~~string~~ | ~~optional~~ | ~~Identifier of the [Customer](customers.md#customer) to be charged.  **Deprecated!**~~ **Deprecated!** Use `AccountId`.|

#### Order addition options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DisableItemGrouping` | boolean | optional | Whether to disable item grouping. Defaults to `false` (item grouping is enabled by default). |

#### Product order parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required | Unique identifier of the `Product` to be ordered. |
| `Count` | integer | optional | Count of products to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount parameters](_objects.md#amount-parameters) | optional | Unit amount of the product that overrides the amount defined in Mews. |
| `StartUtc` | string | optional | Product start in UTC timezone in ISO 8601 format. For products with charging `Once` and `PerPerson` must be set to same value as `EndUtc`. Use only with operation [Add reservations](reservations.md#add-reservations) or [Add reservation product](reservations.md#add-reservation-product), can be omitted for [Add order](orders.md#add-order) operation. |
| `EndUtc` | string | optional | Product end in UTC timezone in ISO 8601 format. For products with charging `Once` and `PerPerson` must be set to same value as `StartUtc`. Use only with operation [Add reservations](reservations.md#add-reservations) or [Add reservation product](reservations.md#add-reservation-product), can be omitted for [Add order](orders.md#add-order) operation. |
| `ExternalIdentifier` | string | optional | External identifier of the product order. |

#### Item parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required | Name of the item. |
| `UnitCount` | integer | required | Count of units to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount parameters](_objects.md#amount-parameters) | required | Unit amount, e.g. amount for one beer (note that total amount of the item is therefore `UnitAmount` times `UnitCount`). |
| `AccountingCategoryId` | string | optional | Unique identifier of an `AccountingCategory` to be assigned to the item. |
| `ExternalIdentifier` | string | optional | External identifier of the order item. |

### Response

```javascript
{
  "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderId` | string | required | Unique identifier of the created order. |
