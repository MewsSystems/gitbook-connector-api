# General Webhooks

This is a newer form of Webhook message which carries event information related to different entities in Mews.

Each General Webhook message corresponds to a single property or enterprise integration, identified by `EnterpriseId` and `IntegrationId` in the request body.
You will receive events for all the properties you are integrated with, and can identify each one from this information.

The message encapsulates all events occurring at the same time which relate to entities to which you have subscribed.
For example, if you are interested in reservations you will subscribe to Service Order events (a reservation is a type of Service Order) and you may receive multiple `ServiceOrderUpdated` events in one Webhook message, each for a different Service Order / Reservation.

Each event includes the type of event and the unique identifier for the related entity, e.g. a `Customer Added` event would also include the Customer ID.
To obtain details about the entity, you then need to call the corresponding API operation using that identifier, e.g. in the case of `Customer Added` you would call [Get all customers](../operations/customers.md#get-all-customers) with the Customer ID.

## Supported events

| <div style="width:100px">Entity</div> | <div style="width:150px">Event</div> | Description |
| :-- | :-- | :-- |
| Service Order | `ServiceOrderUpdated` | Event triggered when a service order is updated |
| Resource | `ResourceUpdated` | Event triggered when a resource is updated |
| Message | `MessageAdded` | Event triggered when a new message is added |
| Resource block | `ResourceBlockUpdated` | Event triggered when a resource block is updated |
| Customer | `CustomerAdded` | Event triggered when a customer is added |
| Customer | `CustomerUpdated` | Event triggered when a customer is updated |

> ### Terminology
> A *Service Order* is an order made against a *Service*. A *Service Order* made against a *Bookable Service* is called a *Reservation*.
> In fact only *Reservations* are currently supported, however this may be extended in future.
> A *Resource* can be a bookable space, an object or even the services of a person. *Resource* normally implies a space, but again this may be extended in future.
> For a full description of all the terms used, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

## Added vs Updated events

'Updated' implies that some change to an entity has occurred, including changes to the fields or properties within the entity but also when the entity is created or added at the beginning of its life. 'Added' implies only that the entity is created or added at the beginning of its life. In other words, 'Added' is a subset of 'Updated'.

As a consequence of this, note that if you subscribe to Customer events, then when a new Customer is created, the system will generate both a `CustomerAdded` event and a `CustomerUpdated` event for the same Customer ID in the same Webhook message. Be aware you should only call [Get all customers](../operations/customers.md#get-all-customers) once not twice in this case.

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

### Entity updated data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the updated/added entity. To fetch entity data use the related operation per [Event discriminator](#event-discriminator). |
