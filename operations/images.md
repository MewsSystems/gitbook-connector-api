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
    "Images":[
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
| :--- | :--- | :--- | :--- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Images` | array of [Image parameters](#image-parameters) | required | Parameters of images whose URLs should be returned. |

#### Image parameters

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `ImageId` | string | required | Unique identifier of the image. |
| `Width` | number | required | Desired width of the image. |
| `Height` | number | required | Desired height of the image. |
| `ResizeMode` | string [Image resize mode](#image-resize-mode) | required | Mode how the image should be resized to the desired width and height. |

#### Image resize mode

* `Fit` - resize to fit within the specified size, so the result might be smaller than requested.
* `FitExact` - resize and pad to exactly fit within the specified size.
* `Cover` - resize to cover the specified dimensions, so the result might be larger than requested.
* `CoverExact` - resize and clip to cover the specified size.

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
| :--- | :--- | :--- | :--- |
| `ImageUrls` | array of [Image URL](#image-url) | required | URLs of the images. |

#### Image URL

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `ImageId` | string | required | Unique identifier of the image. |
| `Url` | string | required | URL of the image. |

