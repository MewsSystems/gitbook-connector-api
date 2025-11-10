<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Billing automations

## Get all billing automations

Returns all billing automations. Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/billingAutomations/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CompanyIds": [
    "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
    "956aa0f0-a090-42c8-bee2-991972d32f80"
  ],
  "BillingAutomationIds": [
    "ecd64eec-4423-4c65-b844-814b9199856d",
    "13e6b16e-39bc-4cb1-8610-70ecdb4f91cc"
  ],
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `CompanyIds` | array of string | optional, max 100 items | Unique identifiers of `Company` associated with the billing automations. |
| `BillingAutomationIds` | array of string | optional, max 100 items | Unique identifiers of specific `Billing automation` items. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "BillingAutomations": [
    {
      "Id": "ecd64eec-4423-4c65-b844-814b9199856d",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Name": "Continuous billing automation for company XYZ",
      "Description": "Billing Automation for company XYZ with prepayment all, company as owner.",
      "CompaniesWithRelations": [
        {
          "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
          "CompanyRelations": {
            "PartnerCompany": true,
            "TravelAgency": false
          }
        }
      ],
      "Prepayment": "All",
      "AssignmentTargetType": "CompanyAsOwner",
      "TriggerType": "Continuous",
      "BillAggregationType": "AggregateAll",
      "CreatedUtc": "2017-01-31T10:58:06Z",
      "ProcessingStartOffset": null,
      "OrderItemConsumptionPeriod": null,
      "Assignments": [
        {
          "Id": "d6b550e9-9c4b-42dd-9daa-555312b030e6",
          "BillingAutomationId": "ecd64eec-4423-4c65-b844-814b9199856d",
          "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
          "RoutedItemTypes": {
            "SpaceOrder": true,
            "CityTax": true,
            "AllProducts": true,
            "Deposits": true,
            "AdditionalExpenses": false,
            "AllCustomItems": false
          },
          "RateIds": [
            "ab3682ba-4493-4eb0-bcdc-8d000f5bad65"
          ],
          "ProductCategoryIds": [
            "599c477e-b826-4444-8ded-4fa7276ef0c1"
          ],
          "ProductIds": [
            "f0184ec2-9f02-4026-9b70-0b2bed2adde7"
          ],
          "AccountingCategoryAssignments": [
            {
              "AccountingCategoryId": "2e0f5930-605e-4a23-9994-a7701a56b576",
              "ItemTypes": {
                "Products": true,
                "CustomItems": false
              }
            }
          ]
        }
      ]
    }
  ],
  "Cursor": "54ec08b6-e6fc-48e9-b8ae-02943e0ac693"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillingAutomations` | array of [Billing automation](billingautomations.md#billing-automation) | optional, max 1000 items | The list of filtered billing automations. |
| `Cursor` | string | optional | Unique identifier of the last returned billing automation. This can be used in Limitation in a subsequent request to fetch the next batch of billing automations. |

#### Billing automation

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the billing automation. |
| `EnterpriseId` | string | required | Unique identifier of the enterprise. |
| `Name` | string | required | Name of the billing automation. |
| `Description` | string | optional | Description of the billing automation. |
| `CompaniesWithRelations` | array of [Company with billing automation relation](billingautomations.md#company-with-billing-automation-relation) | required, max 1000 items | List of companies with relations to the billing automation. |
| `Prepayment` | [Billing automation prepayment type](billingautomations.md#billing-automation-prepayment-type) | required | Type of prepayment. |
| `AssignmentTargetType` | [Billing automation assignment target type](billingautomations.md#billing-automation-assignment-target-type) | required | Type of target company and customer assignment behavior. |
| `TriggerType` | [Billing automation trigger type](billingautomations.md#billing-automation-trigger-type) | required | Trigger type of billing automation. |
| `BillAggregationType` | [Billing automation bill aggregation type](billingautomations.md#billing-automation-bill-aggregation-type) | required | Type of bill aggregation. |
| `CreatedUtc` | string | required | Creation date and time of the billing automation in UTC timezone in ISO 8601 format. |
| `ProcessingStartOffset` | string | optional | Processing start offset. Applicable only if the billing automation `TriggerType` is set to `Reccuring`. |
| `OrderItemConsumptionPeriod` | [Billing automation order item consumption period type](billingautomations.md#billing-automation-order-item-consumption-period-type) | optional | Specifies the type of order item consumption period for the billing automation. This value is applicable only when the `TriggerType` is set to `Reccuring`. |
| `Assignments` | array of [Billing automation assignment](billingautomations.md#billing-automation-assignment) | optional, max 20 items | List of billing automation assignments. |

#### Company with billing automation relation

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CompanyId` | string | required | Unique identifier of the company. |
| `CompanyRelations` | [Company with relations parameters](billingautomations.md#company-with-relations-parameters) | required | Company relations. |

#### Company with relations parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PartnerCompany` | boolean | required | Indicates whether the billing automation will apply if the company added to a reservation is a partner company. |
| `TravelAgency` | boolean | required | Indicates whether the billing automation will apply if the company added to a reservation is a travel agency. |

#### Billing automation prepayment type

* `All` - All
* `Prepaid` - Prepaid

#### Billing automation assignment target type

* `CompanyAsDetails` - The company will be the associated account in the resulting routed bill, and the customer is the owner.
* `CompanyAsOwner` - The company will be the owner in the resulting routed bill, and the customer might be the associated account.
* `NoCompany` - The customer will be owner of the bill.

#### Billing automation trigger type

* `Continuous` - Billing automation is continuously triggered by reservation actions, such as creation, updates, and rebates.
* `Recurring` - Billing automation is executed monthly.
* `Legacy` - Billing automation is executed on reservation creation only. Items added later are not transfered to any bill.

#### Billing automation bill aggregation type

* `OnePerReservation` - Create a separate bill for each reservation.
* `AggregateByCustomer` - Create a separate bill for each reservation owner.
* `AggregateAll` - Group all moved items on one bill.
* `AggregatePerReservationGroup` - Create a separate bill for each reservation group.

#### Billing automation order item consumption period type

* `MonthBefore` - Only items with a consumption date within the previous month will be routed.
* `SameMonthAndMonthBefore` - Only items with a consumption date within this and the previous month will be routed.
* `SameMonth` - Only items with a consumption date within this month will be routed.
* `SameMonthAndMonthAfter` - Only items with a consumption date within this and the next month will be routed.
* `MonthAfter` - Only items with a consumption date within the next month will be routed.

#### Billing automation assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the billing automation assignment. |
| `BillingAutomationId` | string | required | Unique identifier of the billing automation. |
| `ServiceId` | string | required | Unique identifier of the related service. |
| `RoutedItemTypes` | [Billing automation item types parameters](billingautomations.md#billing-automation-item-types-parameters) | required | Type of items that are going to be routed. |
| `RateIds` | array of string | optional, max 100 items | Unique identifiers of `Rates` used in billing automation conditions. |
| `ProductCategoryIds` | array of string | optional, max 100 items | Unique identifiers of `Product Categories` used in billing automation conditions. |
| `ProductIds` | array of string | optional, max 100 items | Unique identifiers of `Products` used in billing automation conditions. |
| `AccountingCategoryAssignments` | array of [Billing automation accounting category assignment](billingautomations.md#billing-automation-accounting-category-assignment) | optional, max 100 items | List of accounting category assignments used in billing automation conditions. |

#### Billing automation item types parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SpaceOrder` | boolean | required | Space order |
| `CityTax` | boolean | required | City tax |
| `AllProducts` | boolean | required | All products |
| `Deposits` | boolean | required | Deposits |
| `AdditionalExpenses` | boolean | required | Additional expenses |
| `AllCustomItems` | boolean | required | All custom items |

#### Billing automation accounting category assignment

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountingCategoryId` | string | required | Unique identifier of the accounting category. |
| `ItemTypes` | [Accounting category routed item types](billingautomations.md#accounting-category-routed-item-types) | required | Type of the accounting category routed item. |

#### Accounting category routed item types

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Products` | boolean | required | Specifies whether products under the given accounting category are routed. |
| `CustomItems` | boolean | required | Specifies whether custom items under the given accounting category are routed. |

## Add billing automations

Adds billing automations.

### Request

`[PlatformAddress]/api/connector/v1/billingAutomations/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillingAutomations": [
    {
      "Name": "Company A billing automation",
      "Description": "Billing automation routing reservations made for Company A to bills where company is an owner, aggregating all reservations onto one bill.",
      "CompaniesWithRelations": [
        {
          "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
          "CompanyRelations": {
            "PartnerCompany": true,
            "TravelAgency": false
          }
        }
      ],
      "Prepayment": "All",
      "AssignmentTargetType": "CompanyAsOwner",
      "TriggerType": "Continuous",
      "BillAggregationType": "AggregateAll",
      "Assignments": [
        {
          "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
          "RoutedItemTypes": {
            "SpaceOrder": true,
            "CityTax": true,
            "AllProducts": false,
            "Deposits": true,
            "AdditionalExpenses": true,
            "AllCustomItems": false
          },
          "ProductIds": [
            "507d93e6-9fb5-4734-a6d1-977afc4dfdff"
          ]
        }
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `BillingAutomations` | array of [Billing automation add parameters](billingautomations.md#billing-automation-add-parameters) | required, max 100 items | Parameters of the new billing automations to be created. |

#### Billing automation add parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required, max length 255 characters | Name of the billing automation. |
| `Description` | string | optional, max length 1000 characters | Description of the billing automation. |
| `CompaniesWithRelations` | array of [Company with billing automation relation](billingautomations.md#company-with-billing-automation-relation) | optional, max 1000 items | List of companies with relations indicating whether the company is considered a travel agency or a company in the reservation. Can only be empty if `AssignmentTargetType` is `CompanyAsDetails` or `NoCompany`. |
| `Prepayment` | [Billing automation prepayment type](billingautomations.md#billing-automation-prepayment-type) | required | Type of prepayment. |
| `AssignmentTargetType` | [Billing automation assignment target type](billingautomations.md#billing-automation-assignment-target-type) | required | Specifies the type of company assignment to the bill. If set to `NoCompany`, the `BillAggregationType` must be `AggregateByCustomer`. |
| `TriggerType` | [Billing automation trigger type](billingautomations.md#billing-automation-trigger-type) | required | Trigger type of billing automation. |
| `BillAggregationType` | [Billing automation bill aggregation type](billingautomations.md#billing-automation-bill-aggregation-type) | required | Specifies the type of bill aggregation. If the value is not `AggregateByCustomer`, the `AssignmentTargetType` must be `CompanyAsOwner`. |
| `OrderItemConsumptionPeriod` | [Billing automation order item consumption period type](billingautomations.md#billing-automation-order-item-consumption-period-type) | optional | Specifies the order item consumption period type for the billing automation. This is required if the `TriggerType` is set to `Reccuring`. |
| `ProcessingStartOffset` | string | optional, max length 20 characters | Specifies the processing start offset. This is required if the billing automation `TriggerType` is set to `Reccuring`. |
| `Assignments` | array of [Billing automation assignment add parameters](billingautomations.md#billing-automation-assignment-add-parameters) | required, max 20 items | List of billing automation assignments. |

#### Billing automation assignment add parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required | Unique identifier of the related service. |
| `RoutedItemTypes` | [Billing automation item types parameters](billingautomations.md#billing-automation-item-types-parameters) | required | Type of items that are going to be routed. |
| `RateIds` | array of string | optional, max 100 items | Unique identifiers of `Rates` that will be applied as billing automation condition. |
| `ProductCategoryIds` | array of string | optional, max 100 items | Unique identifiers of `Product Categories` that will be applied as billing automation condition. |
| `ProductIds` | array of string | optional, max 100 items | Unique identifiers of `Products` that will be applied as billing automation condition. |
| `AccountingCategories` | array of [Billing automation accounting category assignment](billingautomations.md#billing-automation-accounting-category-assignment) | optional, max 100 items | List of accounting categories that will be applied as billing automation condition. |

### Response

```javascript
{
  "BillingAutomations": [
    {
      "Id": "ecd64eec-4423-4c65-b844-814b9199856d",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Name": "Continuous billing automation for company XYZ",
      "Description": "Billing Automation for company XYZ with prepayment all, company as owner.",
      "CompaniesWithRelations": [
        {
          "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
          "CompanyRelations": {
            "PartnerCompany": true,
            "TravelAgency": false
          }
        }
      ],
      "Prepayment": "All",
      "AssignmentTargetType": "CompanyAsOwner",
      "TriggerType": "Continuous",
      "BillAggregationType": "AggregateAll",
      "CreatedUtc": "2017-01-31T10:58:06Z",
      "ProcessingStartOffset": null,
      "OrderItemConsumptionPeriod": null,
      "Assignments": [
        {
          "Id": "d6b550e9-9c4b-42dd-9daa-555312b030e6",
          "BillingAutomationId": "ecd64eec-4423-4c65-b844-814b9199856d",
          "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
          "RoutedItemTypes": {
            "SpaceOrder": true,
            "CityTax": true,
            "AllProducts": true,
            "Deposits": true,
            "AdditionalExpenses": false,
            "AllCustomItems": false
          },
          "RateIds": [
            "ab3682ba-4493-4eb0-bcdc-8d000f5bad65"
          ],
          "ProductCategoryIds": [
            "599c477e-b826-4444-8ded-4fa7276ef0c1"
          ],
          "ProductIds": [
            "f0184ec2-9f02-4026-9b70-0b2bed2adde7"
          ],
          "AccountingCategoryAssignments": [
            {
              "AccountingCategoryId": "2e0f5930-605e-4a23-9994-a7701a56b576",
              "ItemTypes": {
                "Products": true,
                "CustomItems": false
              }
            }
          ]
        }
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillingAutomations` | array of [Billing automation](billingautomations.md#billing-automation) | optional | Billing automations affected by the operation. |

## Update billing automations

Updates one or more existing billing automations.

### Request

`[PlatformAddress]/api/connector/v1/billingAutomations/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillingAutomationUpdates": [
    {
      "BillingAutomationId": "ecd64eec-4423-4c65-b844-814b9199856d",
      "Name": {
        "Value": "New name."
      },
      "Description": {
        "Value": "Billing Automation that has prepayment changed to All, Assignment target to Company as owner and Bill aggregation to aggregate all items into one bill."
      },
      "Prepayment": {
        "Value": "All"
      },
      "AssignmentTargetType": {
        "Value": "CompanyAsOwner"
      },
      "BillAggregationType": {
        "Value": "AggregateAll"
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `BillingAutomationUpdates` | array of [Billing automation update parameters](billingautomations.md#billing-automation-update-parameters) | required, max 100 items | Details of the billing automations to be updated. |

#### Billing automation update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillingAutomationId` | string | required | Unique identifier of the billing automation. |
| `Name` | [String update value](_objects.md#string-update-value) | optional, max length 255 characters | Name of the billing automation (or null should it not be updated). |
| `Description` | [String update value](_objects.md#string-update-value) | optional, max length 1000 characters | Description of the billing automation (or null should it not be updated). |
| `Companies` | [Company with billing automation relation array update value](billingautomations.md#company-with-billing-automation-relation-array-update-value) | optional, max length 1000 characters | List of companies with relations indicating whether the company should be considered as a travel agency or a company in the reservation. This list can only be empty if the `AssignmentTargetType` is `CompanyAsDetails` or `NoCompany`. Set to null if the value is not updated. |
| `Prepayment` | [Billing automation prepayment update value](_objects.md#string-update-value) | optional | Type of prepayment (or null should it not be updated). |
| `AssignmentTargetType` | [Billing automation assignment target type update value](_objects.md#string-update-value) | optional | Specifies the type of company assignment to the bill. If set to `NoCompany`, the `BillAggregationType` must be `AggregateByCustomer`. Set to null if the value is not updated. |
| `BillAggregationType` | [Billing automation bill aggregation type update value](_objects.md#string-update-value) | optional | Defines the aggregation target type for billing automation. If not `AggregateByCustomer`, the `AssignmentTargetType` must be `CompanyAsOwner`. Set to null if the value is not updated. |
| `OrderItemConsumptionPeriod` | [Billing automation order item consumption period type update value](_objects.md#string-update-value) | optional | Specifies the order item consumption period type for the billing automation. Required if the `TriggerType` is recurring. Can be null if the value is not updated. |
| `ProcessingStartOffset` | [String update value](_objects.md#string-update-value) | optional, max length 20 characters | Processing start offset. Required if the billing automation `TriggerType` is recurring (or null should it not be updated). |

#### Company with billing automation relation array update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of [Company with billing automation relation](billingautomations.md#company-with-billing-automation-relation) | optional | Value which is to be updated. |

### Response

```javascript
{
  "BillingAutomations": [
    {
      "Id": "ecd64eec-4423-4c65-b844-814b9199856d",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Name": "Continuous billing automation for company XYZ",
      "Description": "Billing Automation for company XYZ with prepayment all, company as owner.",
      "CompaniesWithRelations": [
        {
          "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
          "CompanyRelations": {
            "PartnerCompany": true,
            "TravelAgency": false
          }
        }
      ],
      "Prepayment": "All",
      "AssignmentTargetType": "CompanyAsOwner",
      "TriggerType": "Continuous",
      "BillAggregationType": "AggregateAll",
      "CreatedUtc": "2017-01-31T10:58:06Z",
      "ProcessingStartOffset": null,
      "OrderItemConsumptionPeriod": null,
      "Assignments": [
        {
          "Id": "d6b550e9-9c4b-42dd-9daa-555312b030e6",
          "BillingAutomationId": "ecd64eec-4423-4c65-b844-814b9199856d",
          "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
          "RoutedItemTypes": {
            "SpaceOrder": true,
            "CityTax": true,
            "AllProducts": true,
            "Deposits": true,
            "AdditionalExpenses": false,
            "AllCustomItems": false
          },
          "RateIds": [
            "ab3682ba-4493-4eb0-bcdc-8d000f5bad65"
          ],
          "ProductCategoryIds": [
            "599c477e-b826-4444-8ded-4fa7276ef0c1"
          ],
          "ProductIds": [
            "f0184ec2-9f02-4026-9b70-0b2bed2adde7"
          ],
          "AccountingCategoryAssignments": [
            {
              "AccountingCategoryId": "2e0f5930-605e-4a23-9994-a7701a56b576",
              "ItemTypes": {
                "Products": true,
                "CustomItems": false
              }
            }
          ]
        }
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillingAutomations` | array of [Billing automation](billingautomations.md#billing-automation) | optional | Billing automations affected by the operation. |

## Update billing automations assignments

Add, update or remove billing automation assignments of a specific billing automation.

### Request

`[PlatformAddress]/api/connector/v1/billingAutomations/updateAssignments`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillingAutomationId": "ecd64eec-4423-4c65-b844-814b9199856d",
  "AssignmentsToUpdate": [
    {
      "BillingAutomationAssignmentId": "00000000-0000-0000-0000-000000000000",
      "RoutedItemTypes": {
        "SpaceOrder": {
          "Value": true
        },
        "CityTax": {
          "Value": true
        },
        "AllProducts": {
          "Value": false
        },
        "Deposits": {
          "Value": true
        },
        "AdditionalExpenses": {
          "Value": true
        },
        "AllCustomItems": {
          "Value": false
        }
      },
      "ProductIds": {
        "Value": [
          "507d93e6-9fb5-4734-a6d1-977afc4dfdff"
        ]
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `BillingAutomationId` | string | required | Unique identifier of the billing automation. |
| `AssignmentsToAdd` | array of [Billing automation assignment add parameters](billingautomations.md#billing-automation-assignment-add-parameters) | optional, max 20 items | Parameters for adding new assignments (or null if not being updated). |
| `AssignmentsToUpdate` | array of [Billing automation assignment update parameters](billingautomations.md#billing-automation-assignment-update-parameters) | optional, max 20 items | List of parameters for updating existing assignments (or null if not being updated). |
| `AssignmentIdsToRemove` | array of string | optional, max 100 items | List of unique identifiers for assignments to be removed (or null if not being updated). |

### Response

```javascript
{
  "BillingAutomations": [
    {
      "Id": "ecd64eec-4423-4c65-b844-814b9199856d",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Name": "Continuous billing automation for company XYZ",
      "Description": "Billing Automation for company XYZ with prepayment all, company as owner.",
      "CompaniesWithRelations": [
        {
          "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
          "CompanyRelations": {
            "PartnerCompany": true,
            "TravelAgency": false
          }
        }
      ],
      "Prepayment": "All",
      "AssignmentTargetType": "CompanyAsOwner",
      "TriggerType": "Continuous",
      "BillAggregationType": "AggregateAll",
      "CreatedUtc": "2017-01-31T10:58:06Z",
      "ProcessingStartOffset": null,
      "OrderItemConsumptionPeriod": null,
      "Assignments": [
        {
          "Id": "d6b550e9-9c4b-42dd-9daa-555312b030e6",
          "BillingAutomationId": "ecd64eec-4423-4c65-b844-814b9199856d",
          "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
          "RoutedItemTypes": {
            "SpaceOrder": true,
            "CityTax": true,
            "AllProducts": true,
            "Deposits": true,
            "AdditionalExpenses": false,
            "AllCustomItems": false
          },
          "RateIds": [
            "ab3682ba-4493-4eb0-bcdc-8d000f5bad65"
          ],
          "ProductCategoryIds": [
            "599c477e-b826-4444-8ded-4fa7276ef0c1"
          ],
          "ProductIds": [
            "f0184ec2-9f02-4026-9b70-0b2bed2adde7"
          ],
          "AccountingCategoryAssignments": [
            {
              "AccountingCategoryId": "2e0f5930-605e-4a23-9994-a7701a56b576",
              "ItemTypes": {
                "Products": true,
                "CustomItems": false
              }
            }
          ]
        }
      ]
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `BillingAutomationId` | string | required | Unique identifier of the billing automation. |
| `AssignmentsToAdd` | array of [Billing automation assignment add parameters](billingautomations.md#billing-automation-assignment-add-parameters) | optional, max 20 items | Parameters for adding new assignments (or null if not being updated). |
| `AssignmentsToUpdate` | array of [Billing automation assignment update parameters](billingautomations.md#billing-automation-assignment-update-parameters) | optional, max 20 items | List of parameters for updating existing assignments (or null if not being updated). |
| `AssignmentIdsToRemove` | array of string | optional, max 100 items | List of unique identifiers for assignments to be removed (or null if not being updated). |

#### Billing automation assignment update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillingAutomationAssignmentId` | string | required | Unique identifier of the billing automation assignment. |
| `RoutedItemTypes` | [Billing automation item types update parameters](billingautomations.md#billing-automation-item-types-update-parameters) | optional | Type of items that are going to be routed (or `null` should it not be updated). |
| `RateIds` | [Guid array update value](_object.md#array-of-strings-update-value) | optional, max length 100 characters | Unique identifiers of `Rates` that will be applied as billing automation condition (or `null` should it not be updated). |
| `ProductCategoryIds` | [Guid array update value](_object.md#array-of-strings-update-value) | optional, max length 100 characters | Unique identifiers of `Product Categories` that will be applied as billing automation condition (or `null` should it not be updated). |
| `ProductIds` | [Guid array update value](_object.md#array-of-strings-update-value) | optional, max length 100 characters | Unique identifiers of `Products` that will be applied as billing automation condition (or `null` should it not be updated). |
| `AccountingCategories` | [Billing automation accounting category assignment array update value](billingautomations.md#billing-automation-accounting-category-assignment-array-update-value) | optional, max length 100 characters | List of `Accounting Categories` with their `ItemTypes` that will be applied as billing automation condition (or `null` should it not be updated). |

#### Billing automation item types update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SpaceOrder` | [Bool update value](_objects.md#bool-update-value) | optional | Space order (or `null` should it not be updated). |
| `CityTax` | [Bool update value](_objects.md#bool-update-value) | optional | City tax (or `null` should it not be updated). |
| `AllProducts` | [Bool update value](_objects.md#bool-update-value) | optional | Products (or `null` should it not be updated). |
| `Deposits` | [Bool update value](_objects.md#bool-update-value) | optional | Deposits(or `null` should it not be updated). |
| `AdditionalExpenses` | [Bool update value](_objects.md#bool-update-value) | optional | Additional expenses (or `null` should it not be updated). |
| `AllCustomItems` | [Bool update value](_objects.md#bool-update-value) | optional | Custom items (or `null` should it not be updated). |

#### Billing automation accounting category assignment array update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of [Billing automation accounting category assignment](billingautomations.md#billing-automation-accounting-category-assignment) | optional | Value which is to be updated. |

## Delete billing automations

Deletes specified billing automations.

### Request

`[PlatformAddress]/api/connector/v1/billingAutomations/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillingAutomationIds": [
    "ecd64eec-4423-4c65-b844-814b9199856d",
    "13e6b16e-39bc-4cb1-8610-70ecdb4f91cc"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `BillingAutomationIds` | array of string | required, max 100 items | Unique identifier of the billing automations to be deleted. |

### Response

```javascript
{}
```
