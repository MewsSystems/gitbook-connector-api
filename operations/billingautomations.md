<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Billing automations

## Get all billing automations

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

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
      "Assignments": null
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
| `CompaniesWithRelations` | array of [CompanyWithBillingAutomationRelation](billingautomations.md#companywithbillingautomationrelation) | required, max 1000 items | List of companies with relations to the billing automation. |
| `Prepayment` | [Billing automation prepayment type](billingautomations.md#billing-automation-prepayment-type) | required | Type of prepayment. |
| `AssignmentTargetType` | [Billing automation assignment target type](billingautomations.md#billing-automation-assignment-target-type) | required | Type of target company and customer assignment behavior. |
| `TriggerType` | [Billing automation trigger type](billingautomations.md#billing-automation-trigger-type) | required | Trigger type of billing automation. |
| `BillAggregationType` | [Billing automation bill aggregation type](billingautomations.md#billing-automation-bill-aggregation-type) | required | Type of bill aggregation. |
| `CreatedUtc` | string | required | Creation date and time of the billing automation in UTC timezone in ISO 8601 format. |
| `ProcessingStartOffset` | string | optional | Processing start offset. Has value only if the billing automation `TriggerType` is recurring. |
| `OrderItemConsumptionPeriod` | [Billing automation order item consumption period type](billingautomations.md#billing-automation-order-item-consumption-period-type) | optional | Type of billing automation's order item consumption period. Has value only if the billing automation `TriggerType` is recurring. |
| `Assignments` | array of [Billing automation assignment](billingautomations.md#billing-automation-assignment) | optional, max 20 items | List of billing automation assignments. |

#### CompanyWithBillingAutomationRelation

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CompanyId` | string | required | Unique identifier of the company. |
| `CompanyRelations` | [CompanyRelationsParameters](billingautomations.md#companyrelationsparameters) | required | Company relations. |

#### CompanyRelationsParameters

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
* `Legacy` - Legacy

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
| `ServiceId` | string | required | Unique identifier of related service. |
| `RoutedItemTypes` | [Billing automation item types parameters](billingautomations.md#billing-automation-item-types-parameters) | required | Type of items that are going to be routed. |
| `RateIds` | array of string | optional, max 100 items | Unique identifiers of `Rates` used in billing automation conditions. |
| `ProductCategoryIds` | array of string | optional, max 100 items | Unique identifiers of `Product Categories` used in billing automation conditions. |
| `ProductIds` | array of string | optional, max 100 items | Unique identifiers of `Products` used in billing automation conditions. |
| `AccountingCategoryAssignments` | array of [Billing automation accounting category assignment](billingautomations.md#billing-automation-accounting-category-assignment) | optional, max 100 items | List of accounting category ids used in billing automation conditions. |

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
| `Products` | boolean | required | Indicates whether products falling under given accounting category are being routed. |
| `CustomItems` | boolean | required | Indicates whether custom items falling under given accounting category are being routed. |

## Add billing automations

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

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
      "BillAggregationType": "AggregateAll"
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
| `BillingAutomations` | array of [BillingAutomationAddParameters](billingautomations.md#billingautomationaddparameters) | required, max 100 items | Parameters of the new billing automations to be created. |

#### BillingAutomationAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required, max length 255 characters | Name of the billing automation. |
| `Description` | string | optional, max length 1000 characters | Description of the billing automation. |
| `CompaniesWithRelations` | array of [CompanyWithBillingAutomationRelation](billingautomations.md#companywithbillingautomationrelation) | optional, max 1000 items | List of companies with relations representing whether the company should be taken into account as travel agency or company in the reservation. Can only be empty if the `AssignmentTargetType` is `CompanyAsDetails` or `NoCompany`. |
| `Prepayment` | [Billing automation prepayment type](billingautomations.md#billing-automation-prepayment-type) | required | Type of prepayment. |
| `AssignmentTargetType` | [Billing automation assignment target type](billingautomations.md#billing-automation-assignment-target-type) | required | Type of assignment of company to the bill. If value is `NoCompany` then `BillAggregationType` must be `AggregateByCustomer`. |
| `TriggerType` | [Billing automation trigger type](billingautomations.md#billing-automation-trigger-type) | required | Trigger type of billing automation. |
| `BillAggregationType` | [Billing automation bill aggregation type](billingautomations.md#billing-automation-bill-aggregation-type) | required | Type of bill aggregation. If value is not `AggregateByCustomer` then `AssignmentTargetType` must be `CompanyAsOwner`. |
| `OrderItemConsumptionPeriod` | [Billing automation order item consumption period type](billingautomations.md#billing-automation-order-item-consumption-period-type) | optional | Type of billing automation's order item consumption period. Required if the billing automation `TriggerType` is recurring. |
| `ProcessingStartOffset` | string | optional, max length 20 characters | Processing start offset. Required if the billing automation `TriggerType` is recurring. |
| `Assignments` | array of [BillingAutomationAssignmentAddParameters](billingautomations.md#billingautomationassignmentaddparameters) | required, max 20 items | List of billing automation assignments. |

#### BillingAutomationAssignmentAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required | Unique identifier of related service. |
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
      "Assignments": null
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillingAutomations` | array of [Billing automation](billingautomations.md#billing-automation) | optional | Billing automations affected by the operation. |

## Update billing automations

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

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
| `BillingAutomationUpdates` | array of [BillingAutomationUpdateParameters](billingautomations.md#billingautomationupdateparameters) | required, max 100 items | Parameters of the new billing automations to be updated. |

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
      "Assignments": null
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
| `BillingAutomationUpdates` | array of [BillingAutomationUpdateParameters](billingautomations.md#billingautomationupdateparameters) | required, max 100 items | Parameters of the new billing automations to be updated. |

#### BillingAutomationUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillingAutomationId` | string | required | Unique identifier of the billing automation. |
| `Name` | [String update value](_objects.md#string-update-value) | optional, max length 255 characters | Name of the billing automation (or null should it not be updated). |
| `Description` | [String update value](_objects.md#string-update-value) | optional, max length 1000 characters | Description of the billing automation (or null should it not be updated). |
| `Companies` | [CompanyWithBillingAutomationRelationIEnumerableUpdateValue](billingautomations.md#companywithbillingautomationrelationienumerableupdatevalue) | optional, max length 1000 characters | List of companies with relations representing whether the company should be taken into account as travel agency or company in the reservation. Can only be empty if the `AssignmentTargetType` is `CompanyAsDetails` or `NoCompany`. (or null should it not be updated). |
| `Prepayment` | [BillingAutomationPrepaymentUpdateValue](billingautomations.md#billingautomationprepaymentupdatevalue) | optional | Type of prepayment (or null should it not be updated). |
| `AssignmentTargetType` | [BillingAutomationAssignmentTargetTypeUpdateValue](billingautomations.md#billingautomationassignmenttargettypeupdatevalue) | optional | Type of assignment of company to the bill. If value is `NoCompany` then `BillAggregationType` must be `AggregateByCustomer`. (or null should it not be updated). |
| `BillAggregationType` | [BillingAutomationBillAggregationTypeUpdateValue](billingautomations.md#billingautomationbillaggregationtypeupdatevalue) | optional | Billing automation aggregation target type. If value is not `AggregateByCustomer` then `AssignmentTargetType` must be `CompanyAsOwner`. (or null should it not be updated). |
| `OrderItemConsumptionPeriod` | [BillingAutomationOrderItemConsumptionPeriodTypeUpdateValue](billingautomations.md#billingautomationorderitemconsumptionperiodtypeupdatevalue) | optional | Type of billing automation's order item consumption period. Required if the billing automation `TriggerType` is recurring (or null should it not be updated). |
| `ProcessingStartOffset` | [String update value](_objects.md#string-update-value) | optional, max length 20 characters | Processing start offset. Required if the billing automation `TriggerType` is recurring (or null should it not be updated). |

#### CompanyWithBillingAutomationRelationIEnumerableUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of [CompanyWithBillingAutomationRelation](billingautomations.md#companywithbillingautomationrelation) | optional |  |

#### BillingAutomationPrepaymentUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Billing automation prepayment type](billingautomations.md#billing-automation-prepayment-type) | required |  |

#### BillingAutomationAssignmentTargetTypeUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Billing automation assignment target type](billingautomations.md#billing-automation-assignment-target-type) | required |  |

#### BillingAutomationBillAggregationTypeUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Billing automation bill aggregation type](billingautomations.md#billing-automation-bill-aggregation-type) | required |  |

#### BillingAutomationOrderItemConsumptionPeriodTypeUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Billing automation order item consumption period type](billingautomations.md#billing-automation-order-item-consumption-period-type) | required |  |

## Update billing automations assignments

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

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
| `AssignmentsToAdd` | array of [BillingAutomationAssignmentAddParameters](billingautomations.md#billingautomationassignmentaddparameters) | optional, max 20 items | List of parameters adding new assignments (or null should it not be updated). |
| `AssignmentsToUpdate` | array of [BillingAutomationAssignmentUpdateParameters](billingautomations.md#billingautomationassignmentupdateparameters) | optional, max 20 items | List of parameters updating existing assignments (or null should it not be updated). |
| `AssignmentIdsToRemove` | array of string | optional, max 100 items | List of unique identifiers of assignments, which should be removed (or null should it not be updated). |

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
      "Assignments": null
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
| `AssignmentsToAdd` | array of [BillingAutomationAssignmentAddParameters](billingautomations.md#billingautomationassignmentaddparameters) | optional, max 20 items | List of parameters adding new assignments (or null should it not be updated). |
| `AssignmentsToUpdate` | array of [BillingAutomationAssignmentUpdateParameters](billingautomations.md#billingautomationassignmentupdateparameters) | optional, max 20 items | List of parameters updating existing assignments (or null should it not be updated). |
| `AssignmentIdsToRemove` | array of string | optional, max 100 items | List of unique identifiers of assignments, which should be removed (or null should it not be updated). |

#### BillingAutomationAssignmentUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillingAutomationAssignmentId` | string | required | Unique identifier of the billing automation assignment. |
| `RoutedItemTypes` | [Billing automation item types parameters options](billingautomations.md#billing-automation-item-types-parameters-options) | optional | Type of items that are going to be routed (or `null` should it not be updated). |
| `RateIds` | [GuidIEnumerableUpdateValue](_object.md#array-of-strings-update-value) | optional, max length 100 characters | Unique identifiers of `Rates` that will be applied as billing automation condition (or `null` should it not be updated). |
| `ProductCategoryIds` | [GuidIEnumerableUpdateValue](_object.md#array-of-strings-update-value) | optional, max length 100 characters | Unique identifiers of `Product Categories` that will be applied as billing automation condition (or `null` should it not be updated). |
| `ProductIds` | [GuidIEnumerableUpdateValue](_object.md#array-of-strings-update-value) | optional, max length 100 characters | Unique identifiers of `Products` that will be applied as billing automation condition (or `null` should it not be updated). |
| `AccountingCategories` | [BillingAutomationAccountingCategoryAssignmentIEnumerableUpdateValue](billingautomations.md#billingautomationaccountingcategoryassignmentienumerableupdatevalue) | optional, max length 100 characters | List of `Accounting Categories` with their `ItemTypes` that will be applied as billing automation condition (or `null` should it not be updated). |

#### Billing automation item types parameters options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SpaceOrder` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `CityTax` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `AllProducts` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `Deposits` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `AdditionalExpenses` | [Bool update value](_objects.md#bool-update-value) | optional |  |
| `AllCustomItems` | [Bool update value](_objects.md#bool-update-value) | optional |  |

#### BillingAutomationAccountingCategoryAssignmentIEnumerableUpdateValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of [Billing automation accounting category assignment](billingautomations.md#billing-automation-accounting-category-assignment) | optional |  |

## Delete billing automations

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

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
