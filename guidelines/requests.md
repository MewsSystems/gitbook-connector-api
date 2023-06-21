# Requests

The API accepts only `HTTP POST` requests with `Content-Type` set to `application/json` and JSON content depending on the operation to be performed. All operations follow this address pattern:

```text
[PlatformAddress]/api/connector/v1/[Resource]/[Action]
```

* **PlatformAddress** - Base address of the Mews Connector API, this depends on the environment \(e.g. test, demo, production\)
* **Resource** - Resource or domain entity which is the target of the action, always pluralized \(e.g. bills, reservations\)
* **Action** - Name of the action to be performed on the resource \(e.g. getAll, add, delete\)

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

All operations of the API require `ClientToken`, `AccessToken` and `Client` to be present in the request. These are used to authenticate incoming requests - see [Authentication](#authentication).

All operations of the API optionally accept `LanguageCode` and `CultureCode`. These can be used to enforce the language and culture of the operation, which may affect, for example, entity descriptions or error messages. Both of these values must be defined together, otherwise default values will be used.

## Authentication

Each Mews environment (e.g. demo, production) requires a different set of tokens.

* `ClientToken` serves as the unique identifier of the API client, i.e. the integration partner consuming the API
* `AccessToken` serves to identify the enterprise or enterprises whose data and services you have access to
* `Client` is the name and version of the client application you are integrating with Mews

A unique `AccessToken` is generated for each new property or enterprise which uses your connection, and allows the client application to access the data for that enterprise via the API.

`AccessTokens` normally allow access to a single enterprise, however some tokens may be Portfolio Access Tokens, to facilitate multi-property operation in cases where you are working with a portfolio of properties.
These are multi-enterprise tokens, which grant access to more than one enterprise with a single token.
For more information on Portfolio Access Tokens and multi-property working, see [Multi-property](multi-property.md).

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

## Request timeouts

In rare circumstances, you may receive a `408 Request Timeout` response if the request puts a large demand on the system and we are unable to prepare the data within a reasonable timeframe.
There are numerous scenarios in which that might occur, the most common of which are related to [Get all reservations](../operations/reservations.md#get-all-reservations).
There can be a large number of reservations on the system, they can carry a lot of information, and the greater the use of [Reservation extent](../operations/reservations.md#reservation-extent) then the more workload is put on the system to prepare the response data.
You should be prepared to receive this error response and have a mitigation solution in place.

What should you do if you receive a 408 error? The error indicates that the load required to prepare the response is too great, so the best solution is to lessen the load.
If you are asking for reservations over a period of time, instead make multiple requests over shorter periods of time.
For example, if a single request for reservation data over a period of several days returns a 408 error, instead try multiple requests, each for a separate day;
if a single request for reservation data over a period of one day returns a 408 error, instead try multiple requests, each for a separate hour.
