# General Webhooks

General Webhooks provide a streamlined way to receive event notifications about various Mews entities.
Each Webhook message corresponds to a specific enterprise integration, identifiable via the `EnterpriseId` and `IntegrationId` fields in the request body.
These identifiers allow you to track events across all enterprises or properties connected to your integration.

## Key features

* __Unified event delivery__ – Each message encapsulates all events related to the entities you’ve subscribed to that occur simultaneously.
For example, subscribing to Service Order events (which include reservations as a subtype) may result in a Webhook containing multiple `ServiceOrderUpdated` events, each corresponding to a different reservation.

* __Event structure__ – Each event within a message specifies the event type and includes the unique identifier of the associated entity, e.g. `CustomerAdded` events include a `CustomerId`.
To retrieve detailed information about an entity, use the relevant API Operation along with the entity’s unique identifier. For instance, for a `CustomerAdded` event, call [Get all customers](../operations/customers.md#get-all-customers) with the provided `CustomerId`.

* __Efficient integration__ - Receive notifications for all subscribed enterprises or properties in a single payload, minimizing the need for multiple requests or real-time polling.
Leverage `EnterpriseId` and `IntegrationId` to manage and filter event data effectively.

## Implementation

To implement General Webhooks:

1. Define the entities and event types you are interested in via your Webhook subscription.
2. Use `EnterpriseId` and `IntegrationId` to differentiate messages across multiple enterprises or properties.
3. Fetch additional details about entities as needed by using the appropriate [API Operations](../operations/README.md).

## Supported events

| <div style="width:100px">Entity</div> | <div style="width:150px">Event</div> | Description |
| :-- | :-- | :-- |
| Service Order | `ServiceOrderUpdated` | Event triggered when a service order is updated |
| Resource | `ResourceUpdated` | Event triggered when a resource is updated |
| Message | `MessageAdded` | Event triggered when a new message is added |
| Resource block | `ResourceBlockUpdated` | Event triggered when a resource block is updated |
| Customer | `CustomerAdded` | Event triggered when a customer is added |
| Customer | `CustomerUpdated` | Event triggered when a customer is updated |
| Payment | `PaymentUpdated` | Event triggered when a payment is updated |

> ### Terminology
> A *Service Order* is an order made against a *Service*. A *Service Order* made against a *Bookable Service* is called a *Reservation*.
> In fact only *Reservations* are currently supported, however this may be extended in future.
> A *Resource* can be a bookable space, an object or even the services of a person. *Resource* normally implies a space, but again this may be extended in future.
> For a full description of all the terms used, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

## Added vs Updated events

In the context of General Webhooks, the terms Added and Updated describe different types of changes to an entity:

* __Updated__ – This indicates any change to an entity, including modifications to its fields or properties; it also encompasses the creation of a new entity, as creating an entity is considered a change to its lifecycle state.
* __Added__ – This specifically refers to the initial creation of an entity at the start of its lifecycle; it represents a subset of Updated events, as every Added event is inherently also an Updated event.

### Important considerations

When you subscribe to events for entities like Customers, a newly created entity generates both a `CustomerAdded` event and a `CustomerUpdated` event.
These events will have the same `CustomerId` and will often appear within the same Webhook message.
To avoid redundant API calls, ensure that you process each entity only once. For example, when you receive both a `CustomerAdded` and a `CustomerUpdated` event for the same `CustomerId`, call [Get all customers](../operations/customers.md#get-all-customers) only once to retrieve the entity details.

## Request body

```javascript
{
    "EnterpriseId": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
    "IntegrationId": "c8bee838-7fb1-4f4e-8fac-ac87008b2f90",
    "Events": [
        {
            "Discriminator": "ServiceOrderUpdated",
            "Value": {
                "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d"
            }
        },
        {
            "Discriminator": "ResourceUpdated",
            "Value": {
                "Id": "7cccbdc6-73cf-4cd4-8056-6fd00f4d9699"
            }
        },
        {
            "Discriminator": "MessageAdded",
            "Value": {
                "Id": "4bfe4675-98a9-4428-9ea9-ae5300dbaa93"
            }
        },
        {
            "Discriminator": "CustomerAdded",
            "Value": {
                "Id": "c2f1d888-232e-49eb-87ac-5f75363af13b"
            }
        },
        {
            "Discriminator": "CustomerUpdated",
            "Value": {
                "Id": "b3ce0fd7-a715-4bfc-969e-ef7a4822963c"
            }
        },
        {
            "Discriminator": "PaymentUpdated",
            "Value": {
                "Id": "a41e2d45-71bc-49b4-9a05-a3ac5f75735c"
            }
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](../operations/configuration.md#enterprise) to which the events belong. |
| `IntegrationId` | string | required | Unique identifier of the [Integration](wh-integration.md#integration) to which the events belong. |
| `Events` | array of [Event](#event) | required | The set of events that have occurred. |

### Event

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Event discriminator](#event-discriminator) | required | The type of event. |
| `Value` | object | required | The structure of the object depends on [Event discriminator](#event-discriminator). |

### Event discriminator

| Discriminator | Description | Value | Fetch operation |
| :-- | :-- | :-- | :-- |
| `ServiceOrderUpdated` | A [Reservation](../operations/reservations.md#reservation-ver-2023-06-06) or other Service Order was updated. | [Entity updated data](#entity-updated-data) | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) |
| `ResourceUpdated` | A [Resource](../operations/resources.md#resource) (for example a guest room or other space) was updated. | [Entity updated data](#entity-updated-data) | [Get all resources](../operations/resources.md#get-all-resources) |
| `MessageAdded` | A [Message](../operations/messages.md#message) was added. | [Entity updated data](#entity-updated-data) | [Get all messages](../operations/messages.md#get-all-messages) |
| `ResourceBlockUpdated` | A [Resource block](../operations/resourceblocks.md#resource-block) was updated. | [Entity updated data](#entity-updated-data) | [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) |
| `CustomerAdded` | A [Customer](../operations/customers.md#customer) was added. | [Entity updated data](#entity-updated-data) | [Get all customers](../operations/customers.md#get-all-customers) |
| `CustomerUpdated` | A [Customer](../operations/customers.md#customer) was updated. | [Entity updated data](#entity-updated-data) | [Get all customers](../operations/customers.md#get-all-customers) |
| `PaymentUpdated` | A [Payment](../operations/payments.md#payment) was updated. | [Entity updated data](#entity-updated-data) | [Get all payments](../operations/payments.md#get-all-payments) |

### Entity updated data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the updated/added entity. To fetch entity data use the related operation per [Event discriminator](#event-discriminator). |
