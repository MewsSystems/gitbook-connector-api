# Customer messaging

Enable guests to send messages to the property and receive replies, by connecting your chatbot or instant messaging app into the customer messaging system of __Mews Operations__.
You can do this through the API with the [Messages](../operations/README.md#messages) collection of API operations, in conjunction with the `MessageAdded` [General Webhook](../events/wh-general.md).

Message threads or conversations are initiated by the customer (the guest). The customer messages are then sent through to the property, where employees are notified and can quickly respond with a message reply added to the thread.
The typical workflow is as follows:

1. [Customer creates a message within your app](#1-customer-creates-a-message-within-your-app)
2. [Your app creates a new message thread in Mews](#2-your-app-creates-a-new-message-thread-in-mews)
3. [Your app listens for MessageAdded events](#3-your-app-listens-for-messageadded-events)
4. [Continue the conversation!](#4-continue-the-conversation)

## 1. Customer creates a message within your app

The customer (the guest) creates an instant message within your app, directed to the property.

> **Penelope:** ```"Hi! I just wanted to let you know I will be arriving late tonight"```

## 2. Your app creates a new message thread in Mews

Your app creates a new message thread in Mews and adds the customer message to the thread. Use [Add message thread](../operations/messagethreads.md#add-message-thread) to create a new message thread, then [Add messages](../operations/messages.md#add-messages) to create a new message within the thread.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to create a new message thread | [Add message thread](../operations/messagethreads.md#add-message-thread) |
| How to create a new message within a thread | [Add messages](../operations/messages.md#add-messages) |

## 3. Your app listens for MessageAdded events

To get message responses in near real time, listen to the `MessageAdded` [General Webhook](../events/wh-general.md) event.
When a `MessageAdded` event is received, the event will contain the ID of the newly added message and the ID of the message thread or conversation to which the message belongs.
Messages sent in reply by the property have the Sender property set to "Enterprise" (in the API, we use term 'enterprise' rather than 'property').
The text of the message can be passed on to the customer through your app. See [Webhooks](../events/README.md) for details of how to set up Webhooks.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to listen for new customer messages | [General Webhooks](../events/wh-general.md) \(`MessageAdded` event\) |

> **Property:** ```"Hello Ms Penelope! Thank you for contacting us. What time do you expect to arrive?"```

## 4. Continue the conversation!

You can pass messages back and forth, as above, until the conversation is resolved.
And if you need to search or fetch your messages or your message threads, you have the [Get all messages](../operations/messages.md#get-all-messages) and [Get all message threads](../operations/messagethreads.md#get-all-message-threads) API operations.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get messages for your message threads | [Get all messages](../operations/messages.md#get-all-messages) |
| How to get your message threads | [Get all message threads](../operations/messagethreads.md#get-all-message-threads) |

> **Penelope:** ```"Around 11pm. Please hold my room, thank you."```
> **Property:** ```"Your room will be ready for you, travel safely and we look forward to welcoming you around 11pm."```

## Testing your integration

Please refer to our general [Usage guidelines](../guidelines/README.md) for testing integrations.

## Further information

> **Help Guides**:
> * [How to read and reply to messages](https://help.mews.com/s/article/read-and-reply-to-messages?language=en_US)
