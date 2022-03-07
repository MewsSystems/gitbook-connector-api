# Webhooks

Webhooks provides another way to communicate with Mews.
A webhook is a web address that a client application registers with the Mews API to receive event-based messages.
It is also known as a web callback, because Mews is 'calling back' the client application.
In other words, rather than make a request to the Mews API and wait for a response, you can register for Mews to contact you when an event occurs.
For example, you may want to receive notifications when a check-in event occurs.
See also [websockets](../websockets/).

Like normal requests to API endpoints in the __Mews Connector API__, the webhook message will be made as a request using HTTP POST and with the details of the message in the JSON body. 

## Integration message

This is an older form of webhook, which only supports events related to changes in integration state.
It is currently supported, but will be deprecated in future - see [Deprecations](../deprecations/).

### Request body

```javascript
{
    "Action": "IntegrationCreated",
    "Data": {
        "Enterprise": {
            "Id": "8865aa96-f62d-4f9b-a912-ab2100f60f42",
            "Name": "Sample Chain Hotel 1"
        },
        "Service": {
            "Id": "9745ce3a-8dbb-4cc0-a550-55f9ff67b242",
            "Name": "Accommodation"
        },
        "Requestor": null,
        "AccessToken":"9E5E84E9974D4F169662AB2200F27CB1-00B343A0DDA725CACAC028E38E3EABF",
        "CreatedUtc": "2019-12-13T14:42:52Z",
        "IsEnabled": true,
        "Integration": {
            "Id": "9e5e84e9-974d-4f16-9662-ab2200f27cb1",
            "Name": "WebhookTEST"
        }
    }
}

```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Action` | string [Webhook action](#webhook-action) | required | Type of the action. |
| `Data` | object | required | Structure of the object depends on [Webhook action](#webhook-action). |

## Webhook action

* `IntegrationCreated` - triggered when a new integration is created ([Integration created data](#integration-created-data))
* `IntegrationEnabled` - triggered when an integration is enabled ([Integration enabled data](#integration-enabled-data))
* `IntegrationDisabled` - triggered when an integration is disabled ([Integration disabled data](#integration-disabled-data))
* `IntegrationCanceled` - triggered when an integration is canceled ([Integration canceled data](#integration-canceled-data))
* `IntegrationReinstated` - triggered when an integration is reinstated ([Integration reinstated data](#integration-reinstated-data))
* `IntegrationDeleted` - triggered when an integration is deleted ([Integration deleted data](#integration-deleted-data))

## Webhook data

### Integration created data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Enterprise` | [Enterprise](#enterprise) | required | Commercial chain of the property. |
| `Service` | [Service](#service) | optional | Service the integration is connected to. |
| `Requestor` | [Requestor](#requestor) | required | Person requesting action. |
| `AccessToken` | string | required | Access token of the client application. |
| `CreatedUtc` | string | required | Creation date and time of the integration in UTC timezone in ISO 8601 format. |
| `IsEnabled` | bool | required | Whether integration is enabled. |
| `Integration` | [Integration](#integration) | required | Integration data. |

#### Enterprise

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `Name` | string | required | Name of the enterprise. |

#### Service

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service. |
| `Name` | string | required | Name of the service. |

#### Requestor

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required | Name of the requestor. |
| `Email` | string | required | Email of the requestor. |

#### Integration

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the integration. |
| `Name` | string | required | Name of the intergation. |

### Integration enabled data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Integration disabled data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Integration canceled data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Integration reinstated data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Integration deleted data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DeletedUtc` | string | required | Deletion date and time of the integration in UTC timezone in ISO 8601 format. |
| `Integration` | [Integration](#integration) | required | Integration data. |

## General message

This is a newer format of webhook message which will be extended in future to carry events about different entities in Mews.

### Request body

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
        ]
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `EnterpriseId` | string | required | Unique identifier of [Enterprise](../operations/configuration.md#enterprise) where events belong to. |
| `IntegrationId` | string | required | Unique identifier of [Integration](#integration) which events are connected to. |
| `Events` | array of [Event](#event) | required | The events that occurred in Mews. |
| `Entities` | [Entities](#entities) | required | Collection of entities related to [Events](#event). |

### Event

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Event discriminator](#event-discriminator) | required | Determines type of event. |
| `Value` | object | required | Structure of object depends on [Event discriminator](#event-discriminator). |

#### Event discriminator

* `ServiceOrderUpdated` - Service order (for example a [Reservation](../operations/reservations.md#reservation)) was updated. The value is [Entity updated data](#entity-updated-data).
* `ResourceUpdated` - [Resource](../operations/resources.md#resource) (for example a room) was updated. The value is [Entity updated data](#entity-updated-data).

#### Entity updated data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of updated entity. |

### Entities

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ServiceOrders` | array of [Reservation](../operations/reservations.md#reservation) | optional | Latest state of [Reservations](../operations/reservations.md#reservation) related to [Events](#event). |
| `Resources` | array of [Resource](../operations/resources.md#resource) | optional | Latest state of [Resources](../operations/resources.md#resource) related to [Events](#event). |
