# Images

## Get image URLs

Returns URLs of the specified images.

### Request

`[PlatformAddress]/api/connector/v1/images/getUrls`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "Images": [
    {
      "ImageId": "57a971a5-a335-48f4-8cd1-595245d1a876",
      "Width": 200,
      "Height": 150,
      "ResizeMode": "Fit"
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
| `Images` | array of [ImageSizeParameters](#ImageSizeParameters) | required | Parameters of images whose URLs should be returned. |

#### ImageSizeParameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ImageId` | string | required |  |
| `Width` | integer | optional |  |
| `Height` | integer | optional |  |
| `ResizeMode` | [ImageResizeMode](#X-Ref-Name-ImageResizeMode) | required |  |

#### ImageResizeMode

- `Cover`
- `CoverExact`
- `Fit`
- `FitExact`

### Response

```javascript
{
  "ImageUrls": [
    {
      "ImageId": "57a971a5-a335-48f4-8cd1-595245d1a876",
      "Url": "https://cdn.demo.mews.li/Media/Image/57a971a5-a335-48f4-8cd1-595245d1a876?Mode=Fit&Width=200&Height=150"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ImageUrls` | array of [Image URL](#ImageUrl) | optional | URLs of the images. |

#### Image URL

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ImageId` | string | required | Unique identifier of the image. |
| `Url` | string | optional | URL of the image. |
