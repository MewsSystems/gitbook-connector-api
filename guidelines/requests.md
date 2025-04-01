# Requests

The API accepts only `HTTP POST` requests with `Content-Type` set to `application/json` and JSON content depending on the operation to be performed. All operations follow this address pattern:

```text
[PlatformAddress]/api/connector/v1/[Resource]/[Action]
```

* **PlatformAddress** - Base address of the Mews Connector API, this depends on the environment \(e.g. test, demo, production\)
* **Resource** - Resource or domain entity which is the target of the action, always pluralized \(e.g. bills, reservations\)
* **Action** - Name of the action to be performed on the resource \(e.g. getAll, add, delete\)

The operation address **must match the format specified in the documentation**. It is case-sensitive and cannot include a trailing slash or any additional characters. If the address does not match, the server will respond with `404 Not Found` error.

## Body

All API operations require the inclusion of `ClientToken`, `AccessToken` and `Client` in the request. These parameters authenticate incoming requests. For more details, see [Authentication](authentication.md).
Additionally, all API operations can optionally accept `LanguageCode` and `CultureCode`. These parameters enforce the language and culture of the operation, potentially affecting entity descriptions or error messages. Both values must be provided together; otherwise, default values will be used.

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
There are numerous scenarios in which that might occur, the most common of which are related to [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06).
There can be a large number of reservations on the system, and they can carry a lot of information. You should be prepared to receive this error response and have a mitigation solution in place.

What should you do if you receive a 408 error? The error indicates that the load required to prepare the response is too great, so the best solution is to lessen the load.
If you are asking for reservations over a period of time, instead make multiple requests over shorter periods of time.
For example, if a single request for reservation data over a period of several days returns a 408 error, instead try multiple requests, each for a separate day;
if a single request for reservation data over a period of one day returns a 408 error, instead try multiple requests, each for a separate hour.

## Request minimal response

> ### Restricted!
>
> This functionality is currently in beta-test and as such it is subject to change.

By default, in case of success the API responds to every request with a `200 OK` status code and a JSON response body containing the result of the operation. For some use cases, like polling changes and storing responses into a data lake, the client may prefer to receive an empty body where appropriate, with a `204 No Content` status code.

This feature is optional, and can be achieved by setting the `Prefer` header to `return=minimal` in the request.

```http
POST /api/connector/v1/reservations/getAll HTTP/1.1
Host: api.mews-demo.com
Content-Type: application/json
Prefer: return=minimal
```

When the header is present, the API will return `204 No Content` for the following endpoints:

- All endpoints which support [pagination](pagination.md) and where the request results in an empty page.
- All endpoints which normally return an empty JSON object in case of success, e.g. [Delete account notes](../operations/accountnotes.md#delete-account-notes).