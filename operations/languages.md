<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Languages

## Get all languages

Returns all languages supported by the API.

### Request

`[PlatformAddress]/api/connector/v1/languages/getAll`

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
  "Languages": [
    {
      "Code": "zh-CN",
      "EnglishName": "Chinese (Simplified)",
      "FallbackLanguageCode": "en-US",
      "LocalName": "中文"
    },
    {
      "Code": "cs-CZ",
      "EnglishName": "Czech",
      "FallbackLanguageCode": "en-US",
      "LocalName": "Čeština"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Languages` | array of [Language](languages.md#language) | required | The supported languages. |

#### Language

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | required | Language-culture code of the language. |
| `FallbackLanguageCode` | string | optional | Language-culture code of the fallback language. |
| `EnglishName` | string | required | English name of the language. |
| `LocalName` | string | required | Local name of the language. |

## Get language texts

Returns translations of texts in the specified languages.

### Request

`[PlatformAddress]/api/connector/v1/languages/getTexts`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "LanguageCodes": [
    "en-US",
    "cs-CZ"
  ],
  "Scope": ""
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCodes` | array of string | required | Language-culture codes of the `Languages` whose texts to return. |
| `Scope` | string | required | Scope of texts to return. |

### Response

```javascript
{
  "LanguageTexts": [
    {
      "LanguageCode": "en-US",
      "Texts": {
        "Address": "Address",
        "AddressLine1": "Address line 1",
        "AddressLine2": "Address line 2",
        "AdultPlural": "Adults",
        "Apartment": "Apartment",
        "ApartmentPlural": "Apartments"
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LanguageTexts` | array of [Language texts](languages.md#language-texts) | required | Texts in the specified languages. |

#### Language texts

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `LanguageCode` | string | required | Language-culture code of the `Language`. |
| `Texts` | [Dictionary](_objects.md#dictionary) | required | Texts in the specified language by their keys. |
