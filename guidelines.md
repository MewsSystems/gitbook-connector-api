# Guidelines

This part describes guidelines for general usage of the Connector API.

## Requests

The API accepts only `HTTP POST` requests with `Content-Type` set to `application/json` and JSON content depending on the operation to be performed. All operations follow this address pattern:

```text
[PlatformAddress]/api/connector/v1/[Resource]/[Operation]
```

* **PlatformAddress** - Base address of the MEWS platform, depends on environment \(testing, staging, production\).
* **Resource** - Logical group of operations, in most cases identifies target of the operations.
* **Operation** - Name of the operation to be performed.

### Body

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "LanguageCode": null,
    "CultureCode": null 
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional | Code of the [language](operations/configuration.md#language). |
| `CultureCode` | string | optional | Code of the culture. |

All operations of the API require a `ClientToken`, an `AccessToken` and `Client` to be present in the request. The `ClientToken` serves as a unique identifier of the integration partner consuming the API. A unique `AccessToken` is generated for each new property using the connection and allows the partner to access the data of that enterprise. As in the description above, `Client` is the name and version of the application you are integrating with Mews. 

For development and testing of your integration, use the demo environment credentials listed in the [Authentication](guidelines.md#authentication) section below. 

In order to receive credentials for production usage, you will have to successfully complete a certification process. After certification, your integration profile will be created and you will automatically receive a unique `ClientToken`. This `ClientToken` will stay the same for all of the connections that you configure in the production environment. 

A unique `AccessToken` will automatically be generated and shared with you for each enterprise requesting to connect their Mews profile to your system.

All operations of the API optionally accept `LanguageCode` and `CultureCode`. These can be used to enforce language and culture of the operation which affects e.g. names of entities, descriptions or error messages. Both of these values must be defined together otherwise default values of the [Enterprise](operations/configuration.md#enterprise) are used.

## Responses

The API responds with `Content-Type` set to `application/json` and JSON content. In case of success, the HTTP status code is 200 and the content contains result according to the call. In case of error, there are multiple HTTP status codes for different types of errors:

* `400 Bad Request` - Error caused by the client app, e.g. in case of malformed request or invalid identifier of a resource. In most cases, such an error signifies a bug in the client app \(consumer of the API\).
* `401 Unauthorized` - Error caused by usage of invalid access token.
* `403 Forbidden` - Server error that should be reported to the end user of the client app. Happens for example when the server-side validation fails or when a business-logic check is violated.
* `500 Internal Server Error` - Unexpected error of the server. In most cases, such an error signifies a bug on our side. We are logging it and immediately notified when such error happens. If anything like this happens, feel free to directly contact us or raise an issue here on Github.

In case of any error, the returned JSON object describes the error and has the following properties:

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Message` | string | required | Description of the error. |
| `Details` | string | optional | Additional details about the error \(request, headers, server stack trace, inner exceptions etc.\). Only available on development environment. |

Some errors may also contain additional information relevant to the error on top of these two properties. That depends on the operation and is specifically described in the operation documentation.

## Authentication

Each Mews environment (e.g. demo, production) requires a different set of tokens. Please use the tokens below to connect to the Mews Demo environments. To sign into the system, use the following credentials:
* **PlatformAddress** - https://demo.mews.li
* **Email** - connector-api@mews.li
* **Password** - connector-api  

### Demo environments

These demo environments are meant to be used during implementation of the client applications. There are two pricing environments that enterprises can operate in, Gross Pricing Environment (totals displayed include VAT/Tax) and Net Pricing Environment (totals displayed do not include VAT/Tax). 

##### Security Policy

**The demo environments listed below are completely public and NO REAL DATA should be used for any reason. Failure to comply with these guidelines can result in immediate suspension of the connection or denial of certification.**

##### Gross Pricing Environment

The authentication below will connect with the demo enterprise that is configured with gross pricing:

* **ClientToken** - `E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D`
* **AccessToken** - `C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D`

The enterprise is based in the United Kingdom, it accepts `GBP`, `EUR` and `USD` currencies (any of them may be used). As a tax rate, either `0.0`, `0.05` or `0.20` can be used.

##### Net Pricing Environment

The authentication below will connect with the demo enterprise that is configured with net pricing:

* **ClientToken** - `E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D`
* **AccessToken** - `7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382`

The enterprise is based in the United States, it accepts `GBP`, `EUR` and `USD` currencies (any of them may be used). As a tax rate, either `0.0`, `0.06`, `0.10`, `0.1025`, `0.1495` or `0.18` can be used.

### Production environment

* **PlatformAddress** - `https://www.mews.li`
* **ClientToken** - Unique token per integration. Will be provided to you by our integration team upon certification completion. For further information, please contact [marketplace@mewssystems.com](mailto://marketplace@mewssystems.com).
* **AccessToken** - Unique token per enterprise. Can be provided to you by the enterprise admin.

##### Security Policy

**To protect the live data of each property, please store your production tokens securely and do not share them publicly.**

## Testing your integration

Once your integration is completed, all operations must be tested prior to initiating the [certification process](https://intercom.help/mews-systems/en/articles/4497819-connector-api-certification-what-to-expect). Testing your solution is done directly in the Connector API demo. You should use the credentials found in the [Authentication](#authentication) section to sign in as an end-user.

## Datetimes

Some operations of the API accept datetimes in their parameters or return them in their results. The datetimes are represented as `string`s following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) formatting rules. Moreover they should always be in [UTC](https://en.wikipedia.org/wiki/ISO_8601#UTC) so that it is clear which instant they represent and there is no room for confusion. Putting this all together means that the expected format of datetimes is `YYYY-MM-DDThh:mm:ssZ`. This format is also used in return values.

As an example, consider an operation that takes datetime interval in its parameters. And let's say we want to fully cover 1st and 2nd of January 2017 in an enterprise that is located in timezone UTC+2. Then the interval in the local time is:

* Start `2017-01-01T00:00:00+02:00`
* End `2017-01-03T00:00:00+02:00`

In order to pass this interval to the API, it has to be converted to UTC:

* StartUtc `2016-12-31T22:00:00Z`
* EndUtc `2017-01-02T22:00:00Z`

## Durations

Some operations of the API accept durations in their parameters or return them in their results. The durations are represented as `string`s following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) formatting rules.

As an example, consider minimum and maximum length of the reservation:

* MinLength `P0Y0M1DT0H0M0S`
* MaxLength `P0Y0M3DT0H0M0S`
