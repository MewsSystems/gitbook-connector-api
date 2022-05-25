# Requests

The API accepts only `HTTP POST` requests with `Content-Type` set to `application/json` and JSON content depending on the operation to be performed. All operations follow this address pattern:

```text
[PlatformAddress]/api/connector/v1/[Resource]/[Operation]
```

* **PlatformAddress** - Base address of the MEWS API, depends on environment \(testing, staging, production\).
* **MewsWebApplicationAddress** - Address of the MEWS web application, depends on environment \(testing, staging, production\).
* **Resource** - Logical group of operations, in most cases identifies target of the operations.
* **Operation** - Name of the operation to be performed.

## Body

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "LanguageCode": null,
    "CultureCode": null 
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional | Code of the [language](../operations/languages.md#language). |
| `CultureCode` | string | optional | Code of the culture. |

All operations of the API require a `ClientToken`, an `AccessToken` and `Client` to be present in the request. Those are used to [authenticate](#authentication) incoming requests.

All operations of the API optionally accept `LanguageCode` and `CultureCode`. These can be used to enforce language and culture of the operation which affects e.g. names of entities, descriptions or error messages. Both of these values must be defined together otherwise default values of the [Enterprise](../operations/configuration.md#enterprise) are used.

## Authentication

Each Mews environment (e.g. demo, production) requires a different set of tokens.

The `ClientToken` serves as a unique identifier of the integration partner consuming the API. A unique `AccessToken` is generated for each new property using the connection and allows the partner to access the data of that enterprise. As in the description above, `Client` is the name and version of the application you are integrating with Mews. 

In order to receive credentials for production usage, you will have to successfully complete a [certification](certification.md) process. After certification, your integration profile will be created and you will automatically receive a unique `ClientToken`. This `ClientToken` will stay the same for all of the connections that will be created in the production environment. 

A unique `AccessToken` will automatically be generated and shared with you for each enterprise requesting to connect their Mews profile to your system.

## Request limits

Mews implements API request limits in order to protect our systems against an excessive volume of calls which could compromise the service for all its users.
The limits are dependent on circumstances and on the environment - see [Environments](environments.md) for details of specific request limits.
Regardless, your system should be prepared to receive a `429 Too Many Requests` response in cases where you hit such a limit - see [Responses](responses.md).

If you receive this error response, your system can re-try after an interval time, however some care is needed in choosing the interval time.
In case of a 429 error, we include the `Retry-After` HTTP header in the response to indicate how long you should wait before making a re-try attempt.
Alternatively, you could implement something like an exponential backoff strategy, i.e. using a progressively longer wait between re-tries for consecutive error responses. Pausing for a fixed amount of time is never recommended.
If you are receiving `429 Too Many Requests` errors, then we would also recommend examining your implementation to see if it is possible to make design changes to reduce the load on our API and prevent the errors being generated in the first place.
