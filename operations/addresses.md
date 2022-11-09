# Addresses

## Get all addresses

Returns all addresses associated with the specified accounts within the enterprise. This operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/addresses/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "AccountIds": [
        "3db2c989-7d95-42b4-a502-a9f246db1634",
        "1f841f0a-2af3-4f01-9441-ca52828d5224",
        "5e045eb0-8d57-4bf5-a766-1fa28e7dfd11",
    ],
    "AddressIds": [
        "6cabdd7b-6c6b-4939-919a-0d043997fa7a",
        "cfc63db6-ccae-44ad-9e58-48aa89b301ed"
    ],
    "Limitation": { "Count": 10 }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AccountIds` | array of string | required, max 1000 items | Unique identifiers of [Companies](companies.md#company) or [Customers](customers.md#customer) within the enterprise. |
| `AddressIds` | array of string | optional, max 1000 items | Unique identifiers of [Addresses](configuration.md#address) addresses within the enterprise. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of address items returned. |

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
            "Longitude": null
        }
    ],
    "Cursor": "a5347333-74c0-4ffb-82d7-af4600df5047"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Addresses` | array of [Address](#address-items) | required | The addresses with their items. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest address item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older address items. |

#### Address items

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the [Address](configuration.md#address). |
| `AccountId` | string | required | Unique identifier of a [Company](companies.md#company) or a [Customer](customers.md#customer) within the enterprise. |
| `AccountType` | string | required | Discriminator specifying whether the account is a [Company](companies.md#company) or a [Customer](customers.md#customer). |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |
| `Latitude` | number | optional | The latitude. |
| `Longitude` | number | optional | The longitude. |

## Add addresses

Adds a new address to the system and assigns it to a specified account. The account has to be within the same enterprise.

### Request

`[PlatformAddress]/api/connector/v1/addresses/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
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
| `Addresses` | array of [Address add items](#address-add-items), max 1000 items | required | Collection of addresses to be created. |

#### Address add items

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the [Address](configuration.md#address). |
| `AccountId` | string | required | Unique identifier of a [Company](companies.md#company) or a [Customer](customers.md#customer) within the enterprise. |
| `AccountType` | string | required | Discriminator specifying whether the account is a [Company](companies.md#company) or a [Customer](customers.md#customer). |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |
| `Latitude` | number | optional | The latitude. |
| `Longitude` | number | optional | The longitude. |

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
            "Longitude": null
        }
    ],
    "Cursor": null
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Addresses` | array of [Address](#address-items) | required | Created addresses. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest address item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older address items. |

## Update addresses

Updates an existing address in the system assigned to a specified account.

### Request

`[PlatformAddress]/api/connector/v1/addresses/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "AddressUpdates" : [
        {
            "AddressId" : "fc7b2df3-de66-48a6-907d-af4600ecd892",
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
| `AddressUpdates` | array of [Address update parameters](#address-update-parameters), max 1000 items | required | Collection of addresses to be updated. |

#### Address update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AddressId` | string | required | Unique identifier of the [Address](configuration.md#address). |
| `Line1` | [String update value](#string-update-value) | optional | First line of the address. |
| `Line2` | [String update value](#string-update-value) | optional | Second line of the address. |
| `City` | [String update value](#string-update-value) | optional | The city. |
| `PostalCode` | [String update value](#string-update-value) | optional | Postal code. |
| `CountryCode` | [String update value](#string-update-value) | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `CountrySubdivisionCode` | [String update value](#string-update-value) | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |

#### String update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | string | optional | Value which is to be updated. |

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
            "Longitude": null
        }
    ],
    "Cursor": null
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Addresses` | array of [Address](#address-items) | required | Updated addresses. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest address item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older address items. |