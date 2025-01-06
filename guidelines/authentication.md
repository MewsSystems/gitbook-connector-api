# Authentication

To interact with the __Mews Connector API__, you need to authenticate your requests using `ClientToken` and `AccessToken`. These tokens are supplied as parameters in the request body, ensuring that only authorized clients can access and manipulate data.

* `ClientToken`: Unique to your application, serving as the identifier of the API client.
* `AccessToken`: Unique to the connection with a property (referred to as an enterprise in the API), identifying the property or properties whose data and services you can access.
* `Client`: The name and version of the client application you are integrating with Mews.

> **Environment-specific**: Note that each Mews environment (e.g., demo, production) requires a different set of tokens.

## Access Tokens

A unique `AccessToken` is generated for each new enterprise (property) using your connection. This allows your application to access the data for that enterprise via the API.

### Portfolio Access Tokens

Access Tokens typically allow access to a single, named enterprise. However, some tokens may be Portfolio Access Tokens, which facilitate multi-property operations. These tokens grant access to more than one enterprise with a single token. For more information, see [Multi-property](../concepts/multi-property.md).

## Obtaining your tokens

### Demo environment

Public tokens are available for the demo environment. For more details, see [Environments](environments.md).

### Production environment

To receive credentials for production usage, you must successfully complete a [certification process](../your-journey/README.md). After certification:

1. Your integration profile will be created.
2. You will automatically receive a unique `ClientToken`, which remains the same for all connections in the production environment.
3. A unique `AccessToken` will be generated and shared with you for each enterprise requesting to connect their Mews profile to your system.
