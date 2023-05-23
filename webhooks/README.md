# Webhooks

Webhooks provides another way to communicate with Mews.
A Webhook is a web address that your application registers with the Mews API to receive event-based messages.
It is also known as a web callback, because Mews 'calls back' the client application when an event occurs.
For a fuller explanation of Webhooks and how they differ from [WebSockets](../websockets/README.md) and normal [API Operations](../operations/README.md), see [Ways to communicate](../guidelines/communicate.md).

Like normal requests to API endpoints in the __Mews Connector API__, the Webhook message will be made as a request using `HTTP POST` and with the details of the message in the JSON body. 

Mews currently supports two types of Webhook:

* [General Webhooks](wh-general.md) - a single webhook request encapsulating multiple types of event
* [Integration Webhooks](wh-integration.md) - individual webhooks related solely to integration events

## Frequently Asked Questions

For all your questions about webhooks, including setting up a webhooks server, registering the URL, and how to respond to webhook messages, see our [Webhooks FAQ](wh-faq.md).
