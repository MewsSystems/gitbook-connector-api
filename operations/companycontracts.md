# Company contracts

## Get all company contracts

Returns all contracts between the enterprise and other companies.

### Request

`[PlatformAddress]/api/connector/v1/companyContracts/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "TravelAgencyContracts": [
        {
            "Id": "0078f370-3787-43dc-a615-af150066bb88",
            "ServiceId": "c8f88563-dc60-47f3-aca3-af150065d951",
            "CompanyId": "bfd5667b-533f-424f-860d-af150065f4d6",
            "IsActive": true,
            "CommissionIncluded": null,
            "Commission": null,
            "ChannelManagerAbsoluteAdjustment": null,
            "ChannelManagerRelativeAdjustment": null,
            "Options": {
                "IncludeCancellationFeeInCommissionEstimate": false,
                "SkipAutomaticSettlement": false
            },
            "AccountingCode": null,
            "InvoiceDueInterval": null,
            "ChannelManagerBusinessSegmentId": null,
            "ContactPerson": null,
            "ContactEmail": null,
            "AdditionalContactInfo": null,
            "Notes": null
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TravelAgencyContracts` | array of [Travel agency contract](#travel-agency-contract) | required | The travel agency contracts. |

#### Travel agency contract

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the contract. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) the contract is related to. |
| `CompanyId` | string | required | Unique identifier of the contracted [Company](companies.md#company). |
| `IsActive` | boolean | required | Whether the contract is still active. |
| `CommissionIncluded` | boolean | optional | Whether commission of the travel agency is included in the rate. |
| `Commission` | number | optional | Commission of the travel agency. |
| `ChannelManagerAbsoluteAdjustment` | number | optional | Flat fee added to (or subtracted from) the reservation price when coming from Channel Managers. |
| `ChannelManagerRelativeAdjustment` | number | optional | Percentage of the reservation price added to (or subtracted from) price when coming from Channel Managers. |
| `Options` | [Travel agency contract options](#travel-agency-contract-options) | required | Options of the travel agency contract. |
| `AccountingCode` | string | optional | Accounting code of the travel agency contract. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `ChannelManagerBusinessSegmentId` | string | optional | Unique identifier of the [Business segment](businesssegments.md#business-segment) used for incoming reservations originating from Channel Managers, for this particular contract.
| `ContactPerson` | string | optional | Contact person of the travel agency. |
| `ContactEmail` | string | optional | Contact email of the travel agency. |
| `AdditionalContactInfo` | string | optional | Additional contact info of the travel agency. |
| `Notes` | string | optional | Additional notes of the travel agency contract. |

#### Travel agency contract options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `IncludeCancellationFeeInCommissionEstimate` | boolean | required | Cancellation fee will be considered when calculating the travel agency commission estimate. |
| `SkipAutomaticSettlement` | boolean | required | Reservations from travel agencies will not be automatically charged. |

## Update company contracts

Update one or more company contracts.

### Request

`[PlatformAddress]/api/connector/v1/companyContracts/update`

```javascript
{
  "AccessToken": "A3CD5F1B459A4892B152AF150065F0FE-2A81539951DF3298BDBC32B6D6D926F",
  "Client": "tempor incididunt sint",
  "ClientToken": "3541B8FE13FF4B5EA615AF150065F086-F716F74E7446AFE28D526BA65EB630D",
  "TravelAgencyContractUpdates": [
    {
        "TravelAgencyContractId": "652d4a22-ac33-42b7-abe7-af1f00820023",
        "CommissionIncluded": { "Value": true },
        "Commission": { "Value" : "0.3" },
        "Options": {
            "IncludeCancellationFeeInCommissionEstimate": { "Value": true },
            "SkipAutomaticSettlement": { "Value": true }
        },
        "ChannelManagerAbsoluteAdjustment": { "Value": 0.5 },
        "ChannelManagerRelativeAdjustment": { "Value": 0.5 },
        "AccountingCode": { "Value": "AccountingCode test" },
        "InvoiceDueInterval": { "Value": "P0M15DT0H0M0S" },
        "ChannelManagerBusinessSegmentId": { "Value": "1289D3C8-3C83-4169-B756-AF150066BB87" },
        "ContactPerson": { "Value": "ContactPerson test" },
        "ContactEmail": { "Value": "ContactEmail@email.com" },
        "AdditionalContactInfo": { "Value": "Additional contact info test" },
        "Notes": { "Value": "Notes test" }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `TravelAgencyContracts` | array of [Travel agency contract update parameters](#travel-agency-contract-update-parameters) | required | Information about travel agency contracts to be updated. |

#### Travel agency contract update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CommissionIncluded` | [Bool update value](#bool-update-value) | optional | Whether commission of the travel agency is included in the rate. |
| `Commission` | [Number update value](#number-update-value) | optional | Commission of the travel agency. |
| `ChannelManagerAbsoluteAdjustment` | [Number update value](#number-update-value) | optional | Flat fee added to (or subtracted from) the reservation price when coming from Channel Managers. |
| `ChannelManagerRelativeAdjustment` | [Number update value](#number-update-value) | optional | Percentage of the reservation price added to (or subtracted from) price when coming from Channel Managers. |
| `Options` | [Travel agency contract update options](#travel-agency-contract-update-options) | required | Options of the travel agency contract. |
| `AccountingCode` | [String update value](#string-update-value) | optional | Accounting code of the travel agency contract. |
| `InvoiceDueInterval` | [String update value](#string-update-value) | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `ChannelManagerBusinessSegmentId` | [String update value](#string-update-value) | optional | Unique identifier of the [Business segment](businesssegments.md#business-segment) used for incoming reservations originating from Channel Managers, for this particular contract. |
| `ContactPerson` | [String update value](#string-update-value) | optional | Contact person of the travel agency. |
| `ContactEmail` | [String update value](#string-update-value) | optional | Contact email of the travel agency. |
| `AdditionalContactInfo` | [String update value](#string-update-value) | optional | Additional contact info of the travel agency. |
| `Notes` | [String update value](#string-update-value) | optional | Additional notes of the travel agency contract. |

#### Travel agency contract update options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `IncludeCancellationFeeInCommissionEstimate` | [Bool update value](#bool-update-value) | required | Cancellation fee will be considered when calculating the travel agency commission estimate. |
| `SkipAutomaticSettlement` | [Bool update value](#bool-update-value) | required | Reservations from travel agencies will not be automatically charged. |

#### String update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | string | optional | Value which is to be updated. |

#### Number update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | number | optional | Value which is to be updated. |

#### Bool update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | bool | optional | Value which is to be updated. |

### Response

```javascript
{
    "TravelAgencyContracts": [
        {
            "Id": "0078f370-3787-43dc-a615-af150066bb88",
            "ServiceId": "c8f88563-dc60-47f3-aca3-af150065d951",
            "CompanyId": "bfd5667b-533f-424f-860d-af150065f4d6",
            "IsActive": true,
            "CommissionIncluded": true,
            "Commission": 0.1,
            "ChannelManagerAbsoluteAdjustment": 0.1,
            "ChannelManagerRelativeAdjustment": 0.1,
            "Options": {
                "IncludeCancellationFeeInCommissionEstimate": true,
                "SkipAutomaticSettlement": true
            },
            "AccountingCode": "P2DT23H",
            "InvoiceDueInterval": "P0M15DT0H0M0S",
            "ChannelManagerBusinessSegmentId": "1289d3c8-3c83-4169-b756-af150066bb87",
            "ContactPerson": "Sample person",
            "ContactEmail": "sample-person@email.com",
            "AdditionalContactInfo": null,
            "Notes": null
        }
    ]
}
```
| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TravelAgencyContracts` | array of [Travel agency contracts parameters](#travel-agency-contract-parameters) | required | Travel agency contracts. |
