<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Identity documents

## Delete identity documents

Deletes specified identity documents. This operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/identityDocuments/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "IdentityDocumentIds": [
    "7e55ee8e-11a0-4d9d-8880-f8d8494824b5",
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
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `IdentityDocumentIds` | array of string | required, max 100 items | Unique identifiers of the identity documents to be deleted. |

### Response

```javascript
{}
```

## Clear identity documents

Deletes all identity documents for provided `Customers`. This operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

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
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../guidelines/multi-property.md), ignored otherwise. |
| `CustomerIds` | array of string | required, max 10 items | Unique identifiers of the customer for whom documents will be deleted. |

### Response

```javascript
{}
```
