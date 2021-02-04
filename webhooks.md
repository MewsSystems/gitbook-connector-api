# Webhooks

When an action of particular type is performed in the system, a message is sent to the configured webhook, using HTTP POST and JSON body.

## Integration message

This is currently used format of webhooks, it carries only events about changes of integration state, will be deprecated in future.

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
| --- | --- | --- | --- |
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
| --- | --- | --- | --- |
| `Enterprise` | [Enterprise](#enterprise) | required | Commercial chain of the property. |
| `Service` | [Service](#service) | optional | Service the integration is connected to. |
| `Requestor` | [Requestor](#requestor) | required | Person requesting action. |
| `AccessToken` | string | required | Access token of the client application. |
| `CreatedUtc` | string | required | Creation date and time of the integration in UTC timezone in ISO 8601 format. |
| `IsEnabled` | bool | required | Whether integration is enabled. |
| `Integration` | [Integration](#integration) | required | Integration data. |

#### Enterprise

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `Name` | string | required | Name of the enterprise. |

#### Service

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the service. |
| `Name` | string | required | Name of the service. |

#### Requestor

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Name of the requestor. |
| `Email` | string | required | Email of the requestor. |

#### Integration

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the integration. |
| `Name` | string | required | Name of the intergation. |

### Integration enabled data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Integration disabled data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Integration canceled data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Integration reinstated data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Integration deleted data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `DeletedUtc` | string | required | Deletion date and time of the integration in UTC timezone in ISO 8601 format. |
| `Integration` | [Integration](#integration) | required | Integration data. |

## General message

This is a new format of webhook message which will be extended in future to carry events about different entities in Mews.

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
        }
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
                "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
                "AssignedResourceId": "20e00c32-d561-4008-8609-82d8aa525714",
                "AssignedResourceLocked": false,
                "BusinessSegmentId": null,
                "CompanyId": null,
                "TravelAgencyId": null,
                "AvailabilityBlockId": null,
                "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
                "AdultCount": 2,
                "ChildCount": 0,
                "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
                "VoucherId": null
            }
        ]
    }
}
```

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `EnterpriseId` | string | required | Unique identifier of [Enterprise](configuration.md#enterprise) where events belong to. |
| `IntegrationId` | string | required | Unique identifier of [Integration](#integration) which events are connected to. |
| `Events` | array of [Event](#event) | required | The events that occurred in Mews. |
| `Entities` | [Entities](#entities) | required | Collection of entities related to [Event](#event)s. |

### Event

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Discriminator` | string [Event discriminator](#event-discriminator) | required | Determines type of event. |
| `Value` | object | required | Structure of object depends on [Event discriminator](#event-discriminator). |

#### Event discriminator

* `ServiceOrderUpdated` - Service order (for example a [Reservation](reservations.md#reservation)) was updated. The value is [Entity updated data](#entity-updated-data).

#### Entity updated data

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of updated entity. |

### Entities

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `ServiceOrders` | array of [Reservation](reservations.md#reservation) | optional | Latest state of [Reservation](reservations.md#reservation)s related to [Event](#event)s. |
