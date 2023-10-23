# Company contracts

## Get all company contracts

Returns all contracts between the enterprise and other companies.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/companyContracts/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "EnterpriseIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "4d0201db-36f5-428b-8d11-4f0a65e960cc"
    ],
    "CompanyIds": [
        "bfd5667b-533f-424f-860d-af150065f4d6"
    ],
    "ServiceIds": [
        "c8f88563-dc60-47f3-aca3-af150065d951"
    ],
    "UpdatedUtc": {
        "StartUtc": "2023-10-01T00:00:00Z",
        "EndUtc": "2023-10-31T00:00:00Z"
    },
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the [Enterprises](enterprises.md#enterprise). If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `ServiceIds` | array of string | optional, max 1000 items | Unique identifiers of [Services](services.md#service) where the Travel agency contract belong to. |
| `CompanyIds` | array of string | optional, max 1000 items | Unique identifiers of [Companies](companies.md#company) assigned with Travel agency contracts. |
| `CompanyContractIds` | array of string | optional, max 1000 items | Unique identifier of the Travel agency contract to fetch. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which [Travel agency contract](#travel-agency-contract) was updated. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "TravelAgencyContracts": [
        {
            "Id": "0078f370-3787-43dc-a615-af150066bb88",
            "ServiceId": "c8f88563-dc60-47f3-aca3-af150065d951",
            "CompanyId": "bfd5667b-533f-424f-860d-af150065f4d6",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
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
    ],
    "Cursor": "0078f370-3787-43dc-a615-af150066bb88"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TravelAgencyContracts` | array of [Travel agency contract](#travel-agency-contract) | required | The travel agency contracts. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest contract returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older messages. |

#### Travel agency contract

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the contract. |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) the contract is related to. |
| `CompanyId` | string | required | Unique identifier of the contracted [Company](companies.md#company). |
| `CreatedUtc` | string | required | Creation date and time of the travel agency contract in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the travel agency contract in UTC timezone in ISO 8601 format. |
| `IsActive` | boolean | required | Whether the contract is still active. |
| `CommissionIncluded` | boolean | optional | Whether commission of the travel agency is included in the rate. When `CommissionIncluded` is not provided in the response, that means commission is unspecified, when set to true it means the the commission is included in the rate and false means the commission in not included in the rate. |
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

## Add company contracts

Adds one or more company contracts.

### Request

`[PlatformAddress]/api/connector/v1/companyContracts/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "TravelAgencyContracts": [
        {
            "ServiceId": "c8f88563-dc60-47f3-aca3-af150065d951",
            "CompanyId": "896e9313-477d-4306-9d37-af150065f4d6",
            "CommissionIncluded": true,
            "Commission": 0.1,
            "ChannelManagerAbsoluteAdjustment": 10,
            "ChannelManagerRelativeAdjustment": 0.15,
            "Options": {
                "IncludeCancellationFeeInCommissionEstimate": false,
                "SkipAutomaticSettlement": false
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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `TravelAgencyContracts` | array of [Travel agency contract parameters](#travel-agency-contract-parameters) | required | Information about travel agency contracts to be created. |

#### Travel agency contract parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceId` | string | required | Unique identifier of the [Service](services.md#service) the travel agency contract is created to. |
| `CompanyId` | string | required | Unique identifier of the [Company](companies.md#company) the travel agency contract is issued to. |
| `CommissionIncluded` | boolean | optional | Whether commission of the travel agency is included in the rate. |
| `Commission` | number | optional | Commission of the travel agency. Value must be between 0 and 1. |
| `ChannelManagerAbsoluteAdjustment` | number | optional | Flat fee added to (or subtracted from) the reservation price when coming from Channel Managers. |
| `ChannelManagerRelativeAdjustment` | number | optional | Percentage of the reservation price added to (or subtracted from) price when coming from Channel Managers. Value must be between -1 and 1.|
| `Options` | [Travel agency contract options](#travel-agency-contract-options) | required | Options of the travel agency contract. |
| `AccountingCode` | string | optional | Accounting code of the travel agency contract. |
| `InvoiceDueInterval` | string | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `ChannelManagerBusinessSegmentId` | string | optional | Unique identifier of the [Business segment](businesssegments.md#business-segment) used for incoming reservations originating from Channel Managers, for this particular contract. |
| `ContactPerson` | string | optional | Contact person of the travel agency. |
| `ContactEmail` | string | optional | Contact email of the travel agency. |
| `AdditionalContactInfo` | string | optional | Additional contact info of the travel agency. |
| `Notes` | string | optional | Additional notes of the travel agency contract. |

### Response

```javascript
{
    "TravelAgencyContracts": [
        {
            "Id": "0078f370-3787-43dc-a615-af150066bb88",
            "ServiceId": "c8f88563-dc60-47f3-aca3-af150065d951",
            "CompanyId": "896e9313-477d-4306-9d37-af150065f4d6",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "IsActive": true,
            "CommissionIncluded": true,
            "Commission": 0.1,
            "ChannelManagerAbsoluteAdjustment": 10,
            "ChannelManagerRelativeAdjustment": 0.15,
            "Options": {
                "IncludeCancellationFeeInCommissionEstimate": false,
                "SkipAutomaticSettlement": false
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
| `TravelAgencyContracts` | array of [Travel agency contract](#travel-agency-contract) | required | The added travel agency contracts. |

## Update company contracts

Updates one or more company contracts.

### Request

`[PlatformAddress]/api/connector/v1/companyContracts/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "TravelAgencyContractUpdates": [
    {
        "TravelAgencyContractId": "652d4a22-ac33-42b7-abe7-af1f00820023",
        "CommissionIncluded": { "Value": true },
        "Commission": { "Value" : 0.1 },
        "ChannelManagerAbsoluteAdjustment": { "Value": 10 },
        "ChannelManagerRelativeAdjustment": { "Value": 0.15 },
        "Options": {
            "IncludeCancellationFeeInCommissionEstimate": { "Value": true },
            "SkipAutomaticSettlement": { "Value": true }
        },
        "AccountingCode": { "Value": "P2DT23H" },
        "InvoiceDueInterval": { "Value": "P0M15DT0H0M0S" },
        "ChannelManagerBusinessSegmentId": { "Value": "1289D3C8-3C83-4169-B756-AF150066BB87" },
        "ContactPerson": { "Value": "Sample person" },
        "ContactEmail": { "Value": "sample-person@email.com" },
        "AdditionalContactInfo": null,
        "Notes": null
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `TravelAgencyContractUpdates` | array of [Travel agency contract update parameters](#travel-agency-contract-update-parameters) | required | Information about travel agency contracts to be updated. |

#### Travel agency contract update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TravelAgencyContractId` | string | required | Unique identifier of the Travel agency contract. |
| `CommissionIncluded` | [Bool update value](_objects.md#bool-update-value) | optional | Whether commission of the travel agency is included in the rate. |
| `Commission` | [Number update value](_objects.md#number-update-value) | optional | Commission of the travel agency. |
| `ChannelManagerAbsoluteAdjustment` | [Number update value](_objects.md#number-update-value) | optional | Flat fee added to (or subtracted from) the reservation price when coming from Channel Managers. |
| `ChannelManagerRelativeAdjustment` | [Number update value](_objects.md#number-update-value) | optional | Percentage of the reservation price added to (or subtracted from) price when coming from Channel Managers. |
| `Options` | [Travel agency contract update options](#travel-agency-contract-update-options) | optional | Options of the travel agency contract. |
| `AccountingCode` | [String update value](_objects.md#string-update-value) | optional | Accounting code of the travel agency contract. |
| `InvoiceDueInterval` | [String update value](_objects.md#string-update-value) | optional | The maximum time, when the invoice has to be be paid in ISO 8601 duration format. |
| `ChannelManagerBusinessSegmentId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the [Business segment](businesssegments.md#business-segment) used for incoming reservations originating from Channel Managers, for this particular contract. |
| `ContactPerson` | [String update value](_objects.md#string-update-value) | optional | Contact person of the travel agency. |
| `ContactEmail` | [String update value](_objects.md#string-update-value) | optional | Contact email of the travel agency. |
| `AdditionalContactInfo` | [String update value](_objects.md#string-update-value) | optional | Additional contact info of the travel agency. |
| `Notes` | [String update value](_objects.md#string-update-value) | optional | Additional notes of the travel agency contract. |

#### Travel agency contract update options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `IncludeCancellationFeeInCommissionEstimate` | [Bool update value](_objects.md#bool-update-value) | required | Cancellation fee will be considered when calculating the travel agency commission estimate. |
| `SkipAutomaticSettlement` | [Bool update value](_objects.md#bool-update-value) | required | Reservations from travel agencies will not be automatically charged. |

### Response

```javascript
{
    "TravelAgencyContracts": [
        {
            "Id": "0078f370-3787-43dc-a615-af150066bb88",
            "ServiceId": "c8f88563-dc60-47f3-aca3-af150065d951",
            "CompanyId": "bfd5667b-533f-424f-860d-af150065f4d6",
            "CreatedUtc": "2023-10-01T11:48:57Z",
            "UpdatedUtc": "2023-10-28T11:48:57Z",
            "IsActive": true,
            "CommissionIncluded": true,
            "Commission": 0.1,
            "ChannelManagerAbsoluteAdjustment": 10,
            "ChannelManagerRelativeAdjustment": 0.15,
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
| `TravelAgencyContracts` | array of [Travel agency contract](#travel-agency-contract) | required | The updated travel agency contracts. |

## Delete company contracts

Deletes one or more company contracts.

### Request

`[PlatformAddress]/api/connector/v1/companyContracts/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "TravelAgencyContractIds": [
        "0078f370-3787-43dc-a615-af150066bb88",
        "652d4a22-ac33-42b7-abe7-af1f00820023"
    ],
    "ServiceIds":
    [
        "a1d6dee8-355b-44c3-b6be-faef1a7eb6c0",
        "d5a2aac3-5194-479b-ba05-6c073398e0fd"
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `TravelAgencyContractIds` | array of string | required, max 1000 items | Unique identifiers of the Travel agency contract to delete. |
| `ServiceIds` | array of string | required, max 1000 items | Unique identifiers of the [Service](services.md#service) the travel agency contract belongs to. |

### Response

```javascript
{}
```
