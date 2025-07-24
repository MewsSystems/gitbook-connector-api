# Webhooks FAQ

* [How do I register a Webhook with Mews?](#how-do-i-register-a-webhook-with-mews)
* [Are there special considerations for setting up a Webhook server?](#are-there-special-considerations-for-setting-up-a-webhook-server)
* [How can I authenticate Mews?](#how-can-i-authenticate-mews)
* [How should the server respond to a Webhook request?](#how-should-the-server-respond-to-a-webhook-request)
* [Do you attempt to resend failed Webhook messages?](#do-you-attempt-to-resend-failed-webhook-messages)
* [When should I use Webhooks?](#when-should-i-use-webhooks)
* [How are Webhooks different to WebSockets?](#how-are-webhooks-different-to-websockets)
* [What events can I create Webhooks for?](#what-events-can-i-create-webhooks-for)
* [What does an event message look like?](what-does-an-event-message-look-like)
* [What is the frequency of event generation?](#what-is-the-frequency-of-event-generation)
* [Can I see what Webhooks are configured?](#can-i-see-what-webhooks-are-configured)
* [Can I set up multiple Webhooks?](#can-i-set-up-multiple-webhooks)
* [Can I use Webhooks in an on-premise application?](#can-i-use-webhooks-in-an-on-premise-application)
* [Is it possible to disable sending some messages to Webhooks?](#is-it-possible-to-disable-sending-some-messages-to-webhooks)
* [Can you give me a specific use case for Webhooks?](#can-you-give-me-a-specific-use-case-for-webhooks)
* [Is there a limit on the number of events in one Webhook?](#is-there-a-limit-on-the-number-of-events-in-one-webhook)
* [I want an event not currently supported](#i-want-an-event-not-currently-supported)

## How do I register a Webhook with Mews?

Email [partnersuccess@mews.com] with details of your Webhook endpoint URL.

## Are there special considerations for setting up a Webhook server?

The server must expose an endpoint accessible from the Mews infrastructure and can receive incoming `POST` HTTP requests with JSON content type. No special `content-type` headers are used.

The server must respond in a timely manner (within 5 seconds).

## How can I authenticate Mews?

To confirm that a request to your Webhook endpoint originates from Mews, we can add a shared secret token to the URL, as follows:

### Figure 1: Webhook Authentication

![Webhook authentication](../.gitbook/assets/webhook-auth.png)

To use this authentication, send us the token you wish to use via [partnersuccess@mews.com].
The token should be kept secret and not shared with anyone except Mews.

## How should the server respond to a Webhook request?

The server must respond with an HTTP status code indicating a success (e.g. `200 OK`,  `202 Accepted`, or `204 No Content`). The server can respond with a redirection status code which doesn't change the request method (e.g. `307 Temporary Redirect` or `308 Permanent Redirect`) and the event message will be sent to the new location.

If the server cannot process the request, it should respond with an appropriate error status code (i.e. `4xx` or `5xx` status codes). When the server responds with an error status code, the event message delivery will be retried, see [Do you attempt to resend failed Webhook messages?](#do-you-attempt-to-resend-failed-webhook-messages).

## Do you attempt to resend failed Webhook messages?

If an event message fails to be delivered (either HTTP error code is received or the server doesn't respond within 5 seconds), the message will be re-sent after a few minutes. If the message isn't received after repeated attempts, it will be discarded.

## When should I use Webhooks?

See [Ways to communicate](../events/communicate.md).

## How are Webhooks different to WebSockets?

See [Ways to communicate](../events/communicate.md).

## What events can I create Webhooks for?

See the Webhook reference pages for the list of currently supported events:

* [General Webhooks](wh-general.md)
* [Integration Webhooks](wh-integration.md)

## What does an event message look like?

See the Webhook reference pages for details of the request body:

* [General Webhooks](wh-general.md)
* [Integration Webhooks](wh-integration.md)

## What is the frequency of event generation?

The frequency at which events are created in the Mews system depends on the type of event and on the level of activity.
Note however there may be a time lag of up to several minutes from when the event occurs to when the actual Webhook request is made.
See [When are Webhooks generated?](../events/communicate.md#when-are-webhooks-generated).

## Can I see what Webhooks are configured?

Webhooks are set up in the system administration, please contact [partnersuccess@mews.com] for information about what Webhooks are configured on the system for your application.

## Can I set up multiple Webhooks?

Only one endpoint URL for [General Webhooks](wh-general.md) and one endpoint URL for [Integration Webhooks](wh-integration.md) can be set up per integration client, i.e. per partner application.
If you wish, you can use the same endpoint URL for both types of Webhook.

## Can I use Webhooks in an on-premise application?

Although possible, it is generally not recommended to use Webhooks for on-premise solutions. The webhooks endpoint must be accessible from Mews infrastructure and we may update the API multiple times a year, which may require updates to your application.
If pushing the updates to the on-premise solution is difficult then the solution won't scale well.

## Is it possible to disable sending some messages to Webhooks?

Yes. Event messages are configured for each integration, please contact [partnersuccess@mews.com] with your requirements and they can configure only the messages you want to receive.

## Can you give me a specific use case for Webhooks?

A specific use case for Webhooks is described in [Event management - Managing availability block inventory and pickup](../use-cases/events.md#managing-availability-block-inventory-and-pickup), but Webhooks are relevant to many use cases and are discussed in the relevant section - see [Use cases](../use-cases/README.md).

## Is there a limit on the number of events in one Webhook?

[General Webhooks](wh-general.md) carry multiple events that have occurred at the same time.
Yes, there is an upper limit on the number of messages carried, before rolling over to a new message.
This number is a system parameter, currently in the order of hundreds, but Mews reserves the right to adjust this value for performance reasons.

## I want an event not currently supported

The list of supported events is always under review and may be extended in future.
If there is a system event that you are particularly interested in, please submit your request via the Mews [Product Ideas Forum](https://feedback.mews.com/).
We can't provide any guarantees, but we are very interested to know what kind of features our customers and partners are requesting.

[partnersuccess@mews.com]: mailto:partnersuccess@mews.com
