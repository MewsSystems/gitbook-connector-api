# Addresses

## Get all addresses

Returns all addresses associated with the specified accounts within the enterprise. 
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
  "ActivityStates": [
    "Active"
  ],
  "Limitation": {
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `AccountIds` | array of string | optional, max 1000 items | Unique identifiers of [Companies](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) or [Customers](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) within the enterprise. Required if no other filter is provided. |
| `AddressIds` | array of string | optional, max 1000 items | Unique identifiers of [Addresses](https://mews-systems.gitbook.io/connector-api/operations/#account-address) within the enterprise. Use this property if you want to fetch specific addresses. Required if no other filter is provided. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ActivityStates` | array of [ActivityStates](#X-Ref-Name-ActivityStates) | optional | Whether to return only active, only deleted or both records. |

#### ActivityStates

- `Deleted`
- `Active`

#### ActivityStates

- `Deleted`
- `Active`

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
| `Addresses` | array of [Account address](#AccountAddress) | optional | Updated addresses. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest address item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older Account address. |

#### Account address

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the address. |
| `AccountId` | string | required | Unique identifier of a [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) or a [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer) within the enterprise. |
| `ChainId` | string | optional | Unique identifier of the chain. |
| `AccountType` | [AccountType](#X-Ref-Name-AccountType) | required | A discriminator specifying the [type of account](https://mews-systems.gitbook.io/connector-api/operations/accounts/#account-type), e.g. customer or company. |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. DE-BW. |
| `Latitude` | number | optional | The latitude. |
| `Longitude` | number | optional | The longitude. |
| `UpdatedUtc` | string | optional | Last update date and time of the address in UTC timezone in ISO 8601 format. |
| `IsActive` | boolean | required | Whether the address is still active. |
| `IsUpdatedByMe` | boolean | optional |  |

#### AccountType

- `Company`
- `Customer`

#### AccountType

- `Company`
- `Customer`

## Add addresses

Adds one or more new addresses to the system and assigns them to specified accounts. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `Addresses` | array of [AddressAddParameters](#AddressAddParameters) | required, max 1000 items | Collection of addresses to be created. |

#### AddressAddParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required |  |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `CountryCode` | string | optional |  |
| `CountrySubdivisionCode` | string | optional |  |
| `Latitude` | number | optional |  |
| `Longitude` | number | optional |  |

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
| `Addresses` | array of [Account address](#AccountAddress) | optional | Updated addresses. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest address item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older Account address. |

## Update addresses

Updates one or more existing addresses in the system, assigned to specified accounts. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/addresses/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "AddressUpdates": [
    {
      "AddressId": "fc7b2df3-de66-48a6-907d-af4600ecd892",
      "AccountId": "3db2c989-7d95-42b4-a502-a9f246db1634",
      "Line1": {
        "Value": "I.P. Pavlova 5"
      },
      "Line2": {
        "Value": null
      },
      "City": {
        "Value": "Prague"
      },
      "PostalCode": {
        "Value": "12000"
      },
      "CountryCode": {
        "Value": "CZ"
      },
      "CountrySubdivisionCode": {
        "Value": null
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `AddressUpdates` | array of [AddressUpdateParameters](#AddressUpdateParameters) | required, max 1000 items | Collection of addresses to be updated. |

#### AddressUpdateParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AddressId` | string | required |  |
| `AccountId` | string | required |  |
| `Line1` | object | required |  |
| `Line2` | object | required |  |
| `City` | object | required |  |
| `PostalCode` | object | required |  |
| `CountryCode` | object | required |  |
| `CountrySubdivisionCode` | object | required |  |

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
| `Addresses` | array of [Account address](#AccountAddress) | optional | Updated addresses. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest address item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older Account address. |

## Delete addresses

Deletes one or more addresses in the system. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/addresses/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "AddressIds": [
    "cefa640f-43fa-4a02-8d20-f97f68e19ed5",
    "44108366-8e9b-4007-844b-8ebcca4ac009"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `AddressIds` | array of string | required, max 1000 items | Unique identifiers of [Addresses](https://mews-systems.gitbook.io/connector-api/operations/#account-address) within the enterprise to be deleted. |

### Response

```javascript
{}
```
