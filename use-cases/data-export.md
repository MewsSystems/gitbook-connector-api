# Data export

The _Data export_ feature of the **Mews Connector API** provides a streamlined method for retrieving bulk data. This feature is designed for users who require access to a substantial amount of data, such as [Order items](../operations/orderitems.md#order-item), without the hassle of making multiple paginated requests subject to timeouts and other constraints.

### User scenarios

- You are a Mews partner onboarding a new property and you need an initial data sync
- You are a Mews Multi-Property user and want to retrieve data shared across multiple properties
- You are using a newly added API operation and are loading data for the first time
- You wish to perform a cross-data sanity check

### User benefits

- Streamlined bulk data export process
- Reduced API request complexity and potential timeouts
- Improved scalability for large-scale data retrieval
- Faster property onboarding process
- Potential for future expansion to support further data entities

> ### Restricted!
>
> This feature is currently under beta test and is subject to change. If you would like to take advantage of the feature, contact us via [partnersuccess@mews.com](mailto:partnersuccess@mews.com).

## Initiate the export

To initiate a bulk data export, use the [Add export](../operations/exports.md#add-export) operation, specifying the data _Entity type_, e.g. `OrderItem`. The operation returns an [Export](../operations/exports.md#export) object containing the Export `Id` to use in the next step. If there is already an export pending, the operation returns a 400 HTTP error code.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to create a new bulk data export | [Add export](../operations/exports.md#add-export) |

## Check export status

To monitor the progress of the export and retrieve the exported data, use the [Get all exports](../operations/exports.md#get-all-exports) operation. This operation returns details of exports for the `Id`s you specify, including their status. You can repeatedly check the status of an export while its status is `Pending` or `Processing`, for example every 5 minutes.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to check on data export progress | [Get all exports](../operations/exports.md#get-all-exports) |

## Download exported data

Once the export status changes to `Success`, you can download the exported data from the provided [file URLs](../operations/exports.md#exported-file). For example:

```javascript
{
    "Exports": [
        {
            "Id": "3fa85f64-5717-4562-b3fd-2c963f66afa6",
            "Status": "Success",
            "EntityType": "OrderItem",
            "ExpiresUtc": "2023-10-26T11:42:28Z",
            "Files": [
                {
                    "Url": "https://example.com/exports/3fa85f64-5717-4562-b3fd-2c963f66afa6-1.jsonl?example=signature",
                    "SizeInBytes": 1215279
                },
                {
                    "Url": "https://example.com/exports/3fa85f64-5717-4562-b3fd-2c963f66afa6-2.jsonl?example=signature",
                    "SizeInBytes": 1398362
                }
            ]
        },
    ]
}
```
> **Multiple files:** Note the data export may consist of multiple files.

## Frequently Asked Questions

### Will the supported entity types be extended in future?

Depending on user demand, the **Mews Connector API** may be expanded to support additional data entities for bulk export.

### How often should I check for updates?

Export duration can vary enormously, but checking status every 5 minutes is a reasonable frequency. The current mechanism is considered a trial which may be enhanced in future.

### Can I export data from multiple enterprises in one request?

Yes, you can use a [Portfolio Access Token](../guidelines/multi-property.md) to request data from multiple enterprises. Doing so will generate an export of data for all enterprises within scope of the Access Token.

### For how long are export files available to download?

Export files are available to download for a limited period, typically 1 week. The expiry time is specified by `ExpiresUtc` in the [Export](../operations/exports.md#export) object.
