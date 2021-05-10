# Responses

## Content-type

The API responds with `Content-Type` set to `application/json` and JSON content. In case of success, the HTTP status code is 200 and the content contains result according to the call. In case of error, there are multiple HTTP status codes for different types of errors:

## Response codes

* `400 Bad Request` - Error caused by the client app, e.g. in case of malformed request or invalid identifier of a resource. In most cases, such an error signifies a bug in the client app \(consumer of the API\).
* `401 Unauthorized` - Error caused by usage of invalid ClientToken, AccessToken, or you may not have the necessary permission to use the endpoint.
* `403 Forbidden` - Server error that should be reported to the end user of the client app. Happens for example when the server-side validation fails or when a business-logic check is violated.
* `408 Request Timeout` - Error caused by heavy requests that takes too long to process (in magnitude of tens of seconds). To get around this send/request data in smaller batches.
* `429 Too Many Requests` - Error caused by too many requests sent in a given amount of time, please see [Request limits](requests.md#request-limits) for more information.
* `500 Internal Server Error` - Unexpected error of the server. In most cases, such an error signifies a bug on our side. We are logging it and are immediately notified when such an error happens. If anything like this happens, feel free to directly contact us or raise an issue here on Github.

## Response details

In case of any error, the returned JSON object describes the error and has the following properties:

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Message` | string | required | Description of the error. |
| `Details` | string | optional | Additional details about the error \(request, headers, server stack trace, inner exceptions etc.\). Only available on development environment. |

Some errors may also contain additional information relevant to the error on top of these two properties. This depends on the operation. 
