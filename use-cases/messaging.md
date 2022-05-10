## Messaging

Enable guests to send messages to the enterprise and receive replies, by connecting your chatbot or instant messaging app into the customer messaging system of __Mews Operations__.
You can do this through the API with the [Messages](../operations/README.md#messages) family of API operations, in conjunction with the `MessageAdded` [General Webhook](../webhooks/wh-general.md).

Message threads or conversations are initiated by the customer and their messages are sent through to the enterprise, where employees are notified and can quickly respond with a message reply added to the thread.
The typical workflow is as follows:

1. [Customer creates a message within your app](#step-1---customer-creates-a-message-within-your-app)
2. [Your app creates a new message thread in Mews](#step-2---your-app-creates-a-new-message-thread-in-mews)
3. [Your app listens for MessageAdded Webhook events](#step-3---your-app-listens-for-messageadded-webhook-events)
4. [Continue the conversation!](#step-4---continue-the-conversation)

### Step 1 - Customer creates a message within your app

The customer or guest creates an instant message within your app, directed to the enterprise.

**Penelope:** ```"Hi! I just wanted to let you know I will be arriving late tonight"```

### Step 2 - Your app creates a new message thread in Mews

Your app creates a new message thread in Mews and adds the customer message to the thread.

- Use [Add message thread](../operations/messagethreads.md#add-message-thread) to create a new message thread:

`[PlatformAddress]/api/connector/v1/messageThreads/add`

**Request:**

```json
	{
	    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-	D24FB11DBE31D4621C4817E028D9E1D",
	    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
	    "Client": "SuperMessagingApp 1.0",
	    "OriginalSender": "Penelope Morgan",
	    "Subject": "Late arrival"
	}
```

**Response:**

```json
	{
	    "MessageThreads": [
      	  {
	            "Id": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
      	      "OriginalSender": "Penelope Morgan",
            	"Subject": "Late arrival",
	            "CreatedUtc": "2022-03-08T12:06:50Z",
      	      "UpdatedUtc": "2022-03-08T12:06:50Z",
            	"IsResolved": false
	        }
	    ]
	}
```

- Use [Add messages](../operations/messages.md#add-messages) to create a new message within the thread:

`[PlatformAddress]/api/connector/v1/messages/add`

**Request:**

```json
	{
	    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
	    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
	    "Client": "SuperMessagingApp 1.0",
	    "Messages": [
      	  {
	            "Text": "Hi! I just wanted to let you know I will be arriving late tonight",
      	      "MessageThreadId": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
            	"Identifier": "Message 1"
	        }
	    ]
	}
```

**Response:**

```json
	{
	    "Messages": [
  	      {
 	           "Identifier": "Message 1",
    	        "Message": {
    	            "Id": "4bfe4675-98a9-4428-9ea9-ae5300dbaa93",
      	          "ThreadId": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
            	    "Text": "Hi! I just wanted to let you know I will be arriving late tonight",
	                "Sender": {
      	              "Discriminator": "Application"
            	    },
	                "CreatedUtc": "2022-03-09T13:19:46Z"
      	      }
	        }
	    ]
	}
```

### Step 3 - Your app listens for MessageAdded Webhook events

**Enterprise:** ```"Hello Ms Penelope! Thank you for contacting us. What time do you expect to arrive?"```

- See [Webhooks](../webhooks/README.md) for details of how to set up Webhooks.

`MessageAdded` is a type of [General Webhook](../webhooks/wh-general.md) event.
When a `MessageAdded` event is received, the event will contain the ID of the newly added message and the ID of the message thread or conversation to which the message belongs; messages sent in reply by the enterprise have the Sender property set to "Enterprise".
The text of the message can be passed on to the customer through your app.

**Webhook request body:**
```json
{
	    "EnterpriseId": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
	    "IntegrationId": "c8bee838-7fb1-4f4e-8fac-ac87008b2f90",
	    "Events": [
      	  {
	            "Discriminator": "MessageAdded",
      	      "Value": {
	                "Id": "4bfe4675-98a9-4428-9ea9-ae5300dbaa93"
     	      }
	        }
	   ],
	    "Entities": {
	        "Messages": [
	        {
      	      "Id": "4bfe4675-98a9-4428-9ea9-ae5300dbaa93",
	            "MessageThreadId": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
      	      "Text": "Hello Ms Penelope! Thank you for contacting us. What time do you expect to arrive?",
	            "Sender": {
      	          "Discriminator": "Enterprise"
	            },
      	      "CreatedUtc": "2022-03-09T13:25:00Z"
	        }
	    ]
	    }
	}
```

### Step 4 - Continue the conversation!

You can pass messages back and forth, as above, until the conversation is resolved.
And if you need to search or fetch your messages or your message threads, you have the [Get all messages](../operations/messages.md#get-all-messages) and [Get all message threads](../operations/messagethreads.md#get-all-message-threads) API operations.

**Penelope:** ```"Around 11pm. Please hold my room, thank you."```

**Enterprise:** ```"Your room will be ready for you, travel safely and we look forward to welcoming you around 11pm."```

### Testing your integration

Please refer to our general [Guidelines](../guidelines/README.md) for testing integrations.

### Further information

For more information about Mews Messaging, the following guides may be helpful. You can also use the Search function to find suitable content in our Help system.

- [How do I reply to messages received from guests?](https://help.mews.com/s/article/how-do-i-reply-to-messages-received-from-guests-from-mews-online-guest-services?language=en_US)
- [Read and reply to messages](https://help.mews.com/s/article/read-and-reply-to-messages?language=en_US&Language=en_US)
