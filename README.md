# ACTION REQUIRED!

We have changed the URLs for our API. The old URLs with `mews.li` are no longer operational, instead you should be using:
* `api.mews.com` for the endpoints
* `ws.mews.com` for websockets

For more details see our [guidelines](guidelines/environments.md#production-environment).

# Introduction

Welcome to the __Mews Connector API__. This is a general-purpose API that enables partners of Mews to access data and services in __Mews Operations__.

The API is typically consumed by cloud applications that work with the data of hotels and other properties hosted in Mews, e.g. revenue management systems and cloud-based point-of-sale systems.
It can also be used by applications that are running on-premise to mediate communication between Mews and local devices, e.g. en-premise point-of-sale systems, self-service kiosks and physical devices such as printers.

As your first step to using the API, you will want to get familiar with the [Guidelines](guidelines/) which describe how to get started communicating with the API.
All API endpoints are detailed in [Operations](operations/), see also [Websockets](websockets/) and [Webhooks](webhooks/) for other ways to communicate.
For guidance on using the API for different scenarios, have a look at the [Use cases](use-cases/) which will help you through your implementation.

> ### Changes to this API
> * For the history of changes to the API, see the [Changelog](changelog/)
> * For important information on deprecations, see [Deprecations](deprecations/)
> * To track changes and updates, you can follow the [GitHub repository](https://github.com/MewsSystems/gitbook-connector-api/tree/master)

> ### OpenAPI definition
> The Swagger/OpenAPI definition for the __Mews Connector API__ can be found [here](https://www.mews.li/Swagger/connector/swagger.yaml?utm_medium=email&_hsmi=2&_hsenc=p2ANqtz--5lDCujDR6Xe7Jy52w3Lnw1k6BdHQKkAlBtI9IgVXTrKDCzqGE0VkjZU8LIhw7ZI8P3_e90peDM_GJ7Fz7iEXjPdJZrw&utm_content=2&utm_source=hs_email),
> you can use this to build out client applications using third party tools.
> At this stage we consider this a Beta test version, but please use it and get in touch to let us know how you get on.
