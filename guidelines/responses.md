# Responses

## Content-type

The API responds with `Content-Type` set to `application/json`, and with JSON content in the body. In case of a 204 response (see [Request minimal response](requests.md#request-minimal-response)), the `Content-Type` header is _not_ set and the response body is empty. 

## Response codes

In case of success, the HTTP status code is normally 200 and the content contains the result according to the nature of the request. The client may opt-in to instead receive HTTP status code 204 in certain circumstances, see [Request minimal response](requests.md#request-minimal-response). In case of error, there are multiple HTTP status codes for different types of errors.
Every response contains `Request-Id` header with unique identifation of the request, that can be used in communication with [partnersuccess@mews.com](mailto:partnersuccess@mews.com).

* **200 OK**
  * Success response. The content contains the result according to the nature of the request.
* **204 No Content**
  * Success response, the content is empty. Clients can opt-in to receive this response code, see [Request minimal response](requests.md#request-minimal-response).
* **400 Bad Request**
  * Error caused by the client app, e.g. in case of malformed request or invalid identifier of a resource. In most cases, such an error signifies a bug in the client app \(consumer of the API\).
* **401 Unauthorized**
  * Error caused by usage of invalid ClientToken, AccessToken, or you may not have the necessary permission to use the endpoint.
* **403 Forbidden**
  * Server error that should be reported to the end user of the client app. Happens for example when the server-side validation fails or when a business-logic check is violated.
* **404 Not found**
  * The server cannot find the resource requested by the client app. Verify the URL and request method.
* **408 Request Timeout**
  * Error caused by heavy request that takes too long to process (typically tens of seconds). To get around this, request data in smaller batches. For more information, see [Request timeouts](requests.md#request-timeouts).
* **409 Conflict**
  * The request cannot be completed because the data has changed. To get around this error, try refreshing the data on the client and resubmitting the request.
* **429 Too Many Requests**
  * Error caused by too many requests sent in a given amount of time. Response contains `Retry-After` header indicating how long the user agent should wait before making a follow-up request. For more information, see [Request limits](requests.md#request-limits).
* **500 Internal Server Error** and other **5xx** response codes
  * Unexpected error on the Mews side. This may be due to a software fault. If such a situation occurs, the error will be logged and the development team notified.

## Error response details

In case of any error, the returned JSON object describes the error and has the following properties:

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Message` | string | required | Description of the error. |
| `RequestId` | string | optional | Unique identifier of the request. You can provide this unique identifier when communicating with [partnersuccess@mews.com](mailto:partnersuccess@mews.com) for quick identification of the request.|
| `Details` | string | optional | Additional details about the error \(request, headers, server stack trace, inner exceptions etc.\). Only available on development environment. |
