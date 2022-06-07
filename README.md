# ACTION REQUIRED!

We have changed the URLs for our API. The old URLs with `mews.li` are no longer operational, instead you should be using:
* `api.mews.com` for the endpoints
* `ws.mews.com` for websockets

For more details, see [Environments](guidelines/environments.md).

# Introduction

Welcome to the __Mews Connector API__. This is a general-purpose API that enables partners of Mews to access data and services in __Mews Operations__.

The API is typically consumed by cloud applications that work with the data of properties hosted in Mews, e.g. revenue management systems and cloud-based point-of-sale systems.
It can also be used by applications that are running on-premise to mediate communication between Mews and local devices, e.g. on-premise point-of-sale systems, self-service kiosks and physical devices such as printers.

To get started, see our [Guidelines](guidelines/README.md) for information on how to connect, what authentication tokens you need, Mews terminology, and more besides.
All of the API operations are detailed in [Operations](operations/README.md). In addition, we support [Webhooks](webhooks/README.md) and [WebSockets](websockets/README.md).
Not sure which to use? See [Ways to communicate](guidelines/communicate.md).
For specific guidance on using the API for different scenarios, have a look at [Use cases](use-cases/README.md) which will help you through your implementation.

If you encounter any issues using the API, or you have a question or special request, please get in touch via [partnersuccess@mews.com](mailto://partnersuccess@mews.com).

> ### Changes to this API
> * For the history of changes to the API, see the [Changelog](changelog/)
> * For important information on deprecations, see [Deprecations](deprecations/)
> * To track changes and updates, you can follow the [GitHub repository](https://github.com/MewsSystems/gitbook-connector-api/tree/master)

> ### OpenAPI definition
> The Swagger/OpenAPI definition for the __Mews Connector API__ can be found [here](https://api.mews.com/Swagger/connector/swagger.yaml),
> you can use this to build out client applications using third party tools.
> At this stage we consider this a Beta test version, but please use it and get in touch to let us know how you get on.
