# Orders

## Add order

Creates a new order, with the specified products and items. If the product being posted already exists in Mews, then use [Product order parameters](#product-order-parameters). If the product does *not* exist in Mews, then use [Item parameters](#item-parameters). If the time of consumption is specified, this must be either in the future or within the Editable History Interval for the enterprise. Compared to a stay service order (i.e. a reservation), which is consumed over certain span of time, a product service order is consumed at a single point in time.
Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

> ### Linking orders to reservations
> Specify parameter `LinkedReservationId` in order to link the order to a guest reservation. This will greatly assist the property when using billing automation.

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
    "LinkedReservationId": "6c576c9f-653f-4034-8e31-ecb108de9ac5",
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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](enterprises.md#enterprise). Required when using a [Portfolio Access Token](../concepts/multi-property.md), ignored otherwise. |
| ~~`CustomerId`~~ | ~~string~~ | ~~required~~ | ~~Identifier of the [Customer](customers.md#customer) to be charged.~~  **Deprecated!** |
| `AccountId` | string | required | Identifier of the [Customer](customers.md#customer) or [Company](companies.md#company) to be charged. Company billing may not be enabled for your integration. |
| `ServiceId` | string | required | Identifier of the [Service](services.md#service) to be ordered. |
| `BillId` | string | optional | Identifier of the [Bill](bills.md#bill) to which the created order will be assigned. The bill needs to be issued to the same account as the order. |
| `LinkedReservationId` | string | optional | Identifier of the [Reservation](reservations.md#reservation-ver-2023-06-06) to which the created order will be linked. |
| `ConsumptionUtc` | string | optional | Date and time of the order consumption in UTC timezone in ISO 8601 format. If not specified, current date and time is used. Please note, as order consumption is one-time event, the optional parameters `StartUtc` and `EndUtc` in [Product order parameters](#product-order-parameters) should not be used. |
| `Notes` | string | optional | Additional notes of the order. |
| `ProductOrders` | array of [Product order parameters](#product-order-parameters) | optional | Parameters of the ordered products. |
| `Items` | array of [Item parameters](#item-parameters) | optional | Parameters of the ordered custom items. |

#### Product order parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductId` | string | required | Unique identifier of the [Product](products.md#product) to be ordered. |
| `Count` | number | optional | Count of products to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount parameters](_objects.#amount-parameters) | optional | Unit amount of the product that overrides the amount defined in Mews. |
| `StartUtc` | string | optional | Product start in UTC timezone in ISO 8601 format. For products with charging `Once` and `PerPerson` must be set to same value as `EndUtc`. Use only with operation [Add reservations](reservations.md#add-reservations) or [Add reservation product](reservations.md#add-reservation-product), can be omitted for [Add order](#add-order) operation. |
| `EndUtc` | string | optional | Product end in UTC timezone in ISO 8601 format. For products with charging `Once` and `PerPerson` must be set to same value as `StartUtc`. Use only with operation [Add reservations](reservations.md#add-reservations) or [Add reservation product](reservations.md#add-reservation-product), can be omitted for [Add order](#add-order) operation. |

#### Item parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Count of units to be ordered, e.g. 10 in case of 10 beers. |
| `UnitAmount` | [Amount parameters](_objects.md#amount-parameters) | required | Unit amount, e.g. amount for one beer \(note that total amount of the item is therefore `UnitAmount` times `UnitCount`\). |
| `AccountingCategoryId` | string | optional | Unique identifier of an [Accounting category](accountingcategories.md#accounting-category) to be assigned to the item. |

### Response

```javascript
{
    "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OrderId` | string | required | Unique identifier of the created order. |
