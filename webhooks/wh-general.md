# General Webhooks

This is a newer form of Webhook message which will be extended in future to carry events about different entities in Mews.

Each General Webhook message corresponds to a single property or enterprise integration, identified by `EnterpriseId` and `IntegrationId` in the request body.
You will receive events for all the properties you are integrated with, and can identify each one from this information.

The message encapsulates all events occurring at the same time which belong to event types to which you have subscribed.
For example, if you are interested in reservations you will subscribe to `ServiceOrderUpdated` events (a reservation is a type of Service Order)
and you may receive multiple `ServiceOrderUpdated` events in one Webhook message. The message also contains the set of entities related to the events, as shown in the example below.

## Supported events

| <div style="width:100px">Entity</div> | <div style="width:150px">Event</div> | Description |
| :-- | :-- | :-- |
| Service Order | `ServiceOrderUpdated` | Event triggered when a service order is updated |
| Resource | `ResourceUpdated` | Event triggered when a resource is updated |
| Message | `MessageAdded` | Event triggered when a new message is added |
| Resource block | `ResourceBlockUpdated` | Event triggered when a resource block is updated |

> ### Terminology
> A *Service Order* is an order made against a *Service*. A *Service Order* made against a *Bookable Service* is called a *Reservation*.
> In fact only *Reservations* are currently supported, however this may be extended in future.
> A *Resource* can be a bookable space, an object or even the services of a person. *Resource* normally implies a space, but again this may be extended in future.
> For a full description of all the terms used, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

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
    ],
    "Entities": {
        "ServiceOrders": [
            {
                "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
                "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
                "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
                "Number": "52",
                "State": "Processed",
                "Origin": "Connector",
                "CreatedUtc": "2016-02-20T14:58:02Z",
                "UpdatedUtc": "2016-02-20T14:58:02Z",
                "CancelledUtc": null,
                "StartUtc": "2016-02-20T13:00:00Z",
                "EndUtc": "2016-02-22T11:00:00Z",
                "ReleasedUtc": null,
                "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
                "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
                "AssignedResourceLocked": false,
                "BusinessSegmentId": null,
                "CompanyId": null,
                "TravelAgencyId": null,
                "AvailabilityBlockId": null,
                "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
                "VoucherId": null,
                "AdultCount": 2,
                "ChildCount": 0,
                "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
            }
        ],
        "Resources": [
            {
                "Id": "7cccbdc6-73cf-4cd4-8056-6fd00f4d9699",
                "IsActive": true,
                "ParentResourceId": null,
                "Name": "210",
                "State": "Dirty",
                "Descriptions": {},
                "CreatedUtc": "2018-09-24T07:56:56Z",
                "UpdatedUtc": "2021-03-26T03:56:37Z",
                "Data": {
                    "Discriminator": "Space",
                    "Value": {
                        "FloorNumber": "2",
                        "LocationNotes": ""
                    }
                }
            }
        ],
        "Messages": [
        {
            "Id": "4bfe4675-98a9-4428-9ea9-ae5300dbaa93",
            "MessageThreadId": "8d02142f-31cf-4115-90bf-ae5200c7a1ba",
            "Text": "Text of the message",
            "Sender": {
                "Discriminator": "Application"
            },
            "CreatedUtc": "2022-03-09T13:19:46Z"
        },
        "ResourceBlocks": []
    ]
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `EnterpriseId` | string | required | Unique identifier of the [Enterprise](../operations/configuration.md#enterprise) to which the events belong. |
| `IntegrationId` | string | required | Unique identifier of the [Integration](wh-integration.md#integration) to which the events belong. |
| `Events` | array of [Event](#event) | required | The set of events that have occurred. |
| `Entities` | [Entities](#entities) | required | The sets of entities related to the [Events](#event). |

### Event

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Event discriminator](#event-discriminator) | required | The type of event. |
| `Value` | object | required | The structure of the object depends on [Event discriminator](#event-discriminator). |

### Event discriminator

* `ServiceOrderUpdated` - A [Reservation](../operations/reservations.md#reservation) or other Service Order was updated. `Value` is [Entity updated data](#entity-updated-data).
* `ResourceUpdated` - A [Resource](../operations/resources.md#resource) (for example a guest room or other space) was updated. `Value` is [Entity updated data](#entity-updated-data).
* `MessageAdded` - A [Message](../operations/messages.md#message) was added. `Value` is [Entity updated data](#entity-updated-data).
* `ResourceBlockUpdated` - A [Resource block](../operations/resourceblocks.md#resource-block) was updated. `Value` is [Entity updated data](#entity-updated-data).

### Entity updated data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the updated/added entity. |

### Entities

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrders` | array of [Reservation](../operations/reservations.md#reservation) | optional | Latest state of [Reservations](../operations/reservations.md#reservation) related to [Events](#event). |
| `Resources` | array of [Resource](../operations/resources.md#resource) | optional | Latest state of [Resources](../operations/resources.md#resource) related to [Events](#event). |
| `Messages` | array of [Message](../operations/messages.md#message) | optional | Newly added messages since the last webhook execution. |
| `ResourceBlocks` | array of [Resource block](../operations/resourceblocks.md#resource-block) | optional | Latest state of [Resource blocks](../operations/resourceblocks.md#resource-block) related to [Events](#event). |
