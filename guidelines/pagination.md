# Pagination

Pagination is a feature introduced into the API to manage requests for large amounts of data. It enables us to deliver data in a measured way that does not put a strain on performance for all API users. We use a method called _cursor pagination_. This takes the following form:

### Request

`[PlatformAddress]/api/connector/v1/{entity}/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Limitation":{
        "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
        "Count": 10
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Limitation` | [Limitation](#limitation) | required | Limitation on the quantity of data returned (using cursor pagination). |

#### Limitation

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. Note that the response message will include the identifier of the oldest item in the response, which can then be used in subsequent calls - see _Limitation example_ below. |
| `Count` | number | required | Count of items to be returned, minimum 1, maximum 1000. |

> **Limitation example:**
> A request with Cursor set to null and Count set to 10 will return the latest or most recent 10 items, and the value of Cursor in the response will reference the oldest of those 10 items returned.
> Let's say the value of Cursor returned is "12345", then if a subsequent request is made with Cursor set to "12345" and Count set to 10, then the next oldest 10 items will be returned.
> This process can be repeated as required to fetch historical data.

### Response

```javascript
{
    "Data": [
        {
        	...
        }
    ],
    "Cursor": "7f9325f6-ef44-4911-89a8-ae51010a5aa4"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Data` | ... | required | Placeholder for response data (details will vary). |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest datum returned. This can be used in [Limitation](#limitation) in a subsequent request to fetch the next batch of older data. If [Limitation](#limitation) is specified in the request message, then `Cursor` will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned, e.g. in case of [Get all customers](../operations/customers.md#get-all-customers) with all Extent properties set to "false".|

> **Cursor null:**
> Cursor is shown as _optional_ even though the field is always present in the response. This is because if there is no data to return then the value of Cursor is null.
> Cursor identifies the last datum returned, therefore it will only ever be null if there is no data returned.

### How to request pages

Set a suitable value for _Count_ and request pages of data until _Cursor_ in the response is null. Alternatively, count the number of data records returned. If it is less than the number requested, this implies you have come to the end of the data.
