# Addresses

## Get all addresses

Returns all addresses associated with the specified accounts within the enterprise. 
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/addresses/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ChainIds": [
        "1df21f06-0cfc-4960-9c58-a3bf1261663e",
        "5fcd1933-22f2-40b9-84da-7db04cbecec2"
    ],
    "AccountIds": [
        "3db2c989-7d95-42b4-a502-a9f246db1634"
    ],
    "AddressIds": [
        "fc7b2df3-de66-48a6-907d-af4600ecd892"
    ],
    "UpdatedUtc": {
        "StartUtc": "2022-12-10T00:00:00Z",
        "EndUtc": "2022-12-17T00:00:00Z"
    },
    "ActivityStates": [ "Active" ],
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of [Companies](companies.md#company) or [Customers](customers.md#customer) within the enterprise. Required if no other filter is provided. |
| `AddressIds` | array of string | optional, max 1000 items | Unique identifiers of [Addresses](#account-address) within the enterprise. Use this property if you want to fetch specific addresses. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval of [Address](#account-address) last update date and time. Required if no other filter is provided. |
| `ActivityStates` | array of string [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

### Response

```javascript
{
    "Addresses": [
        {
            "Id": "fc7b2df3-de66-48a6-907d-af4600ecd892",
            "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
            "AccountId": "3db2c989-7d95-42b4-a502-a9f246db1634",
            "AccountType": "Customer",
            "Line1": "Rheinlanddamm 207-209",
            "Line2": null,
            "City": "Dortmund",
            "PostalCode": "44137",
            "CountryCode": "DE",
            "CountrySubdivisionCode": null,
            "Latitude": null,
            "Longitude": null,
            "UpdatedUtc": "2023-11-29T14:49:29.982Z",
            "IsActive": true			
        }
    ],
    "Cursor": "fc7b2df3-de66-48a6-907d-af4600ecd892"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Addresses` | array of [Account address](#account-address) | required | The collection of Account addresses, containing address and account information. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest address item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older Account address. |

#### Account address

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the address. |
| `ChainId` | string | optional | Unique identifier of the chain. |
| `AccountId` | string | required | Unique identifier of a [Company](companies.md#company) or a [Customer](customers.md#customer) within the enterprise. |
| `AccountType` | string | required | A discriminator specifying the [type of account](accounts.md#account-type), e.g. customer or company. |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |
| `Latitude` | number | optional | The latitude. |
| `Longitude` | number | optional | The longitude. |
| `UpdatedUtc` | string | optional | Last update date and time of the address in UTC timezone in ISO 8601 format. |
| `IsActive` | boolean | optional | Whether the address is still active. |


## Add addresses

Adds one or more new addresses to the system and assigns them to specified accounts. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/addresses/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
    "Addresses": [
        {
            "AccountId": "3db2c989-7d95-42b4-a502-a9f246db1634",
            "Line1": "Rheinlanddamm 207-209",
            "Line2": null,
            "City": "Dortmund",
            "PostalCode": "44137",
            "CountryCode": "DE",
            "CountrySubdivisionCode": null,
            "Latitude": null,
            "Longitude": null
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `Addresses` | array of [Account address parameters](#account-address-parameters), max 1000 items | required | Collection of addresses to be created. |

#### Account address parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required | Unique identifier of a [Company](companies.md#company) or a [Customer](customers.md#customer) within the enterprise. |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |
| `Latitude` | number | optional | The latitude in range of -90 to 90. |
| `Longitude` | number | optional | The longitude in range of -180 to 180. |

### Response

```javascript
{
    "Addresses": [
        {
            "Id": "fc7b2df3-de66-48a6-907d-af4600ecd892",
            "AccountId": "3db2c989-7d95-42b4-a502-a9f246db1634",
            "AccountType": "Customer",
            "Line1": "Rheinlanddamm 207-209",
            "Line2": null,
            "City": "Dortmund",
            "PostalCode": "44137",
            "CountryCode": "DE",
            "CountrySubdivisionCode": null,
            "Latitude": null,
            "Longitude": null,
            "UpdatedUtc": "2023-11-29T14:49:29.982Z",
            "IsActive": true
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Addresses` | array of [Account address](#account-address) | required | Created addresses. |

## Update addresses

Updates one or more existing addresses in the system, assigned to specified accounts. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/addresses/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
    "AddressUpdates" : [
        {
            "AddressId" : "fc7b2df3-de66-48a6-907d-af4600ecd892",
            "AccountId": "3db2c989-7d95-42b4-a502-a9f246db1634",
            "Line1": { "Value" : "I.P. Pavlova 5" },
            "Line2": { "Value" : null },
            "City": { "Value" : "Prague" },
            "PostalCode": { "Value" : "12000" },
            "CountryCode": { "Value" : "CZ" },
            "CountrySubdivisionCode": { "Value" : null }
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `AddressUpdates` | array of [Account address updates](#account-address-update-parameters), max 1000 items | required | Collection of addresses to be updated. |

#### Account address update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AddressId` | string | required | Unique identifier of the address. |
| `AccountId` | string | required | Unique identifier of a [Company](companies.md#company) or a [Customer](customers.md#customer) within the enterprise. |
| `Line1` | [String update value](_objects.md#string-update-value) | optional | First line of the address. |
| `Line2` | [String update value](_objects.md#string-update-value) | optional | Second line of the address. |
| `City` | [String update value](_objects.md#string-update-value) | optional | The city. |
| `PostalCode` | [String update value](_objects.md#string-update-value) | optional | Postal code. |
| `CountryCode` | [String update value](_objects.md#string-update-value) | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `CountrySubdivisionCode` | [String update value](_objects.md#string-update-value) | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |

### Response

```javascript
{
    "Addresses": [
        {
            "Id": "fc7b2df3-de66-48a6-907d-af4600ecd892",
            "AccountId": "3db2c989-7d95-42b4-a502-a9f246db1634",
            "AccountType": "Customer",
            "Line1": "I.P. Pavlova 5",
            "Line2": null,
            "City": "Prague",
            "PostalCode": "12000",
            "CountryCode": "CZ",
            "CountrySubdivisionCode": null,
            "Latitude": null,
            "Longitude": null,
            "UpdatedUtc": "2023-11-29T14:49:29.982Z",
            "IsActive": true
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Addresses` | array of [Account address](#account-address) | required | Updated addresses. |

## Delete addresses

Deletes one or more addresses in the system. Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/addresses/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
    "AddressIds" : [
        "cefa640f-43fa-4a02-8d20-f97f68e19ed5",
        "44108366-8e9b-4007-844b-8ebcca4ac009"
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `AddressIds` | array of string | required, max 1000 items | Unique identifiers of [Addresses](#account-address) within the enterprise to be deleted. |

### Response

```javascript
{}
```
