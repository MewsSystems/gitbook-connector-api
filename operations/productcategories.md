<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Product categories

## Get all product categories

Returns all categories of products. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/productCategories/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "ProductCategoryIds": [
    "5228623e-b2cf-4f9f-8bd6-71cbe3ec5e6f",
    "63bc87d3-edf5-4d06-a601-6052a2ad709d"
  ],
  "ServiceIds": [
    "9b3a6c54-63aa-4383-b50e-b0030078184b",
    "c0f71466-6c0b-4993-88ac-1794f6b7e958"
  ],
  "UpdatedUtc": {
    "StartUtc": "2023-05-05T00:00:00Z",
    "EndUtc": "2023-05-10T00:00:00Z"
  },
  "Limitation": {
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ProductCategoryIds` | array of string | optional, max 1000 items | Unique identifiers of `ProductCategory`. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of `Services` to which the resource categories belong. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the product categories were updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "ProductCategories": [
    {
      "Id": "5c0804f9-d03a-4b13-a57d-b00300781a41",
      "ServiceId": "9b3a6c54-63aa-4383-b50e-b0030078184b",
      "Names": {
        "en-US": "Alcohol 1"
      },
      "ShortNames": {
        "en-US": "Alcohol 1"
      },
      "Descriptions": {},
      "ParentProductCategory": [
        {
          "Id": "0b82f6d8-e5eb-4711-9069-40db2b8d968f"
        },
        {
          "Names": {
            "en-US": "Alcoholic beverages"
          }
        }
      ],
      "CreatedUtc": "2023-06-09T13:32:32Z",
      "UpdatedUtc": "2023-06-09T13:32:32Z",
      "Ordering": 1
    },
    {
      "Id": "f0709b02-f1a4-46b2-9c1e-744b5ecd6980",
      "ServiceId": "9b3a6c54-63aa-4383-b50e-b0030078184b",
      "Names": {
        "en-US": "Lemonade 1"
      },
      "ShortNames": {
        "en-US": "Lemonade 1"
      },
      "Descriptions": {},
      "ParentProductCategory": [
        {
          "Id": "aa4f3930-3f9d-4df7-9c6b-5aba5b2f6f7e"
        },
        {
          "Names": {
            "en-US": "Lemonades"
          }
        }
      ],
      "CreatedUtc": "2023-06-09T13:32:32Z",
      "UpdatedUtc": "2023-06-09T13:32:32Z",
      "Ordering": 1
    }
  ],
  "Cursor": "f0709b02-f1a4-46b2-9c1e-744b5ecd6980"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ProductCategories` | array of [Product category](productcategories.md#product-category) | required, max 1000 items | Product categories. |
| `Cursor` | string | optional | Unique identifier of the last product category returned. This can be used in `Limitation` in a subsequent request to fetch the next batch of product categories. |

#### Product category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `EnterpriseId` | string | required | Unique identifier of the enterprise to which the product category belongs. |
| `ServiceId` | string | required | Unique identifier of the `Service` of the resource category. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name. |
| `ShortNames` | [Localized text](_objects.md#localized-text) | required | All translations of the short name. |
| `Descriptions` | [Localized text](_objects.md#localized-text) | required | All translations of the description. |
| `ParentProductCategory` | [Parent product category](productcategories.md#parent-product-category) | optional | Parent product category, if set. |
| `UpdatedUtc` | string | required | Date and time of the product category update in UTC timezone in ISO 8601 format. |
| `CreatedUtc` | string | required | Date and time of the product category creation in UTC timezone in ISO 8601 format. |
| `Ordering` | integer | required | Ordering of the category, lower number corresponds to lower category (note that neither uniqueness nor continuous sequence is guaranteed). |

#### Parent product category

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the category. |
| `Names` | [Localized text](_objects.md#localized-text) | required | All translations of the name. |
