<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Identity documents

## Get all identity documents

Returns all identity documents for the specified customers, with additional filtering options available. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/identityDocuments/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "IdentityDocumentIds": [
    "e8a72a69-c20b-4278-b699-ab0400a32ecc",
    "24a3f051-49ed-411b-9384-78187f9daae6"
  ],
  "CustomerIds": [
    "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
    "bccdafd1-3e44-439d-861f-341526b597a9"
  ],
  "ChainIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "5fcd1933-22f2-40b9-84da-7db04cbecec2"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of `Chain`. If not specified, the operation returns data for all chains within scope of the Access Token. |
| `IdentityDocumentIds` | array of string | optional, max 100 items | Unique identifiers of `Identity document`. |
| `CustomerIds` | array of string | required, max 100 items | Unique identifiers of `Customer`. |
| `Types` | array of [Document type](reservations.md#document-type) | optional | Type of the identity document. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |

### Response

```javascript
{
  "IdentityDocuments": [
    {
      "Id": "e8a72a69-c20b-4278-b699-ab0400a32ecc",
      "CustomerId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "Type": "Passport",
      "Number": "M1234567",
      "ExpirationDate": "2040-10-24T00:00:00Z",
      "IssuanceDate": "2024-10-24T00:00:00Z",
      "IssuingCountryCode": "CZ",
      "IssuingCountrySubdivisionCode": null,
      "IssuingCity": "Prague",
      "IdentityDocumentSupportNumber": "S-123456"
    },
    {
      "Id": "cbe8a32e-3eb7-4226-baf4-69455a0eeaf4",
      "CustomerId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "Type": "IdentityCard",
      "Number": "ID7654321",
      "ExpirationDate": "2040-11-20T00:00:00Z",
      "IssuanceDate": "2024-11-20T00:00:00Z",
      "IssuingCountryCode": "CZ",
      "IssuingCountrySubdivisionCode": null,
      "IssuingCity": "Brno",
      "IdentityDocumentSupportNumber": "B-321"
    }
  ],
  "Cursor": "cbe8a32e-3eb7-4226-baf4-69455a0eeaf4"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `IdentityDocuments` | array of [Identity document (ver 2024-10-25)](identitydocuments.md#identity-document-ver-2024-10-25) | required, max 1000 items | The identity documents of customers. |
| `Cursor` | string | optional | Unique identifier of the item one newer in time order than the items to be returned. If Cursor is not specified, i.e. null, then the latest or most recent items will be returned. |

#### Identity document (ver 2024-10-25)

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the document. |
| `CustomerId` | string | required | Identifier of the `Customer`. |
| `Type` | [Document type](reservations.md#document-type) | required | Type of the document. |
| `Number` | string | required | Number of the document (e.g. passport number). The value is an empty string when the number is not collected in certain regions, such as The Netherlands. |
| `ExpirationDate` | string | optional | Expiration date in ISO 8601 format. |
| `IssuanceDate` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the `Country`. |
| `IssuingCountrySubdivisionCode` | string | optional | Identifier of the country subdivision where the document was issued (province, state or region). |
| `IssuingCity` | string | optional | City where the document was issued. |
| `IdentityDocumentSupportNumber` | string | optional | Identity document support number. Only required for Spanish identity cards in Spanish hotels. |

## Add identity documents

Adds identity documents. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/identityDocuments/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "IdentityDocuments": [
    {
      "CustomerId": "e8a72a69-c20b-4278-b699-ab0400a32ecc",
      "Type": "Passport",
      "Number": "123456789",
      "ExpirationDate": "2040-11-20T00:00:00Z",
      "IssuanceDate": "2020-11-20T00:00:00Z",
      "IssuingCountryCode": "CZ",
      "IssuingCity": "Prague",
      "IdentityDocumentSupportNumber": "S-123456"
    }
  ],
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `IdentityDocuments` | array of [Identity document parameters](identitydocuments.md#identity-document-parameters) | required, max 10 items | Identity documents to be added. |

#### Identity document parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CustomerId` | string | required | Identifier of the `Customer`. |
| `Type` | [Document type](reservations.md#document-type) | required | Type of the document. |
| `Number` | string | required | Number of the document (e.g. passport number). If the number is not collected in certain regions, such as The Netherlands, use an empty string. In all other cases, a value should be supplied. |
| `ExpirationDate` | string | optional | Expiration date in ISO 8601 format. |
| `IssuanceDate` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the `Country`). |
| `IssuingCountrySubdivisionCode` | string | optional | Identifier of the country subdivision where the document was issued (province, state or region). |
| `IssuingCity` | string | optional | City where the document was issued. |
| `IdentityDocumentSupportNumber` | string | optional | Identity document support number. Only required for Spanish identity cards in Spanish hotels. |

### Response

```javascript
{
  "IdentityDocuments": [
    {
      "Id": "e8a72a69-c20b-4278-b699-ab0400a32ecc",
      "CustomerId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "Type": "Passport",
      "Number": "M1234567",
      "ExpirationDate": "2040-10-24T00:00:00Z",
      "IssuanceDate": "2024-10-24T00:00:00Z",
      "IssuingCountryCode": "CZ",
      "IssuingCountrySubdivisionCode": null,
      "IssuingCity": "Prague",
      "IdentityDocumentSupportNumber": "S-123456"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `IdentityDocuments` | array of [Identity document (ver 2024-10-25)](identitydocuments.md#identity-document-ver-2024-10-25) | required, max 10 items | Modified identity documents. |

## Update identity documents

Updates specified identity documents. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/identityDocuments/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "IdentityDocuments": [
    {
      "Id": "e8a72a69-c20b-4278-b699-ab0400a32ecc",
      "Type": {
        "Value": "Passport"
      },
      "Number": {
        "Value": "123456789"
      },
      "ExpirationDate": {
        "Value": "2040-11-20T00:00:00Z"
      },
      "IssuanceDate": {
        "Value": "2020-11-20T00:00:00Z"
      },
      "IssuingCountryCode": {
        "Value": "CZ"
      },
      "IssuingCity": {
        "Value": "Prague"
      },
      "IdentityDocumentSupportNumber": {
        "Value": "S-123456"
      }
    }
  ],
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `IdentityDocuments` | array of [Identity document update parameters](identitydocuments.md#identity-document-update-parameters) | required, max 10 items | Identity documents to be updated. |

#### Identity document update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the document. |
| `Type` | [Identity document type update value](identitydocuments.md#identity-document-type-update-value) | optional | Type of the document (or `null` if the type should not be updated). |
| `Number` | [String update value](_objects.md#string-update-value) | optional | Number of the document (e.g. passport number or `null` if the number should not be updated). |
| `ExpirationDate` | [String update value](_objects.md#string-update-value) | optional | Expiration date in ISO 8601 format (or `null` if the expiration date should not be updated). |
| `IssuanceDate` | [String update value](_objects.md#string-update-value) | optional | Date of issuance in ISO 8601 format (or `null` if the issuance date should not be updated). |
| `IssuingCountryCode` | [String update value](_objects.md#string-update-value) | optional | ISO 3166-1 code of the `Country` (or `null` if the issuing country code should not be updated). |
| `IssuingCountrySubdivisionCode` | [String update value](_objects.md#string-update-value) | optional | Identifier of the country subdivision where the document was issued (province, state or region) (or `null` if the value should not be updated). |
| `IssuingCity` | [String update value](_objects.md#string-update-value) | optional | City where the document was issued (or `null` if the issuing city should not be updated). |
| `IdentityDocumentSupportNumber` | [String update value](_objects.md#string-update-value) | optional | Identity document support number. Only required for Spanish identity cards in Spanish hotels. |

#### Identity document type update value
Has same structure as [String update value](_objects.md#string-update-value).

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | [Document type](reservations.md#document-type) | required | Type of the document (or `null` if the type should not be updated). |

### Response

```javascript
{
  "IdentityDocuments": [
    {
      "Id": "e8a72a69-c20b-4278-b699-ab0400a32ecc",
      "CustomerId": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "Type": "Passport",
      "Number": "M1234567",
      "ExpirationDate": "2040-10-24T00:00:00Z",
      "IssuanceDate": "2024-10-24T00:00:00Z",
      "IssuingCountryCode": "CZ",
      "IssuingCountrySubdivisionCode": null,
      "IssuingCity": "Prague",
      "IdentityDocumentSupportNumber": "S-123456"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `IdentityDocuments` | array of [Identity document (ver 2024-10-25)](identitydocuments.md#identity-document-ver-2024-10-25) | required, max 10 items | Modified identity documents. |

## Delete identity documents

Deletes specified identity documents. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/identityDocuments/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "IdentityDocumentIds": [
    "e8a72a69-c20b-4278-b699-ab0400a32ecc",
    "2e1c6096-3a28-411d-a375-150a7350b278"
  ],
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `IdentityDocumentIds` | array of string | required, max 100 items | Unique identifiers of the identity documents to be deleted. |

### Response

```javascript
{}
```

## Clear identity documents

Deletes all identity documents for the specified customers. This operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/identityDocuments/clear`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CustomerIds": [
    "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
    "bccdafd1-3e44-439d-861f-341526b597a9"
  ],
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `CustomerIds` | array of string | required, max 10 items | Unique identifiers of the `Customer` for whom documents will be deleted. |

### Response

```javascript
{}
```
