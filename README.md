# [ACTION REQUIRED]

We have changed the URLs for our API. The old URLs with `mews.li` are no longer operational, instead you should be using:
* `api.mews.com` for the endpoints
* `ws.mews.com` for websockets

# Introduction

Connector API is a general API for communication between Mews and external applications or systems. The API is typically consumed by other cloud services that work with data of hotels in Mews \(e.g. revenue management systems, cloud POS systems\). It can also be used by applications that are running on site in the hotel and mediate communication between Mews and local devices \(e.g. POS systems, printers and other physical devices, kiosks etc\).

To see scenarios where this API might be used, have a look at the [Use cases](use-cases/README.md) that may guide you through the implementation. Before the actual implementation, get familiar with the [Guidelines](guidelines/) which describe how to communicate with the API. All operations and functions supported by the API are described in [Operations](operations/), [Websockets](websockets.md) and [Webhooks](webhooks.md) sections. If you are interested in changes and updates of this API, check the [Changelog](changelog.md) or follow the Connector API [GitHub repository](https://github.com/MewsSystems/gitbook-connector-api/tree/master).
