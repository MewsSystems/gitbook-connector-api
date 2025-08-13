# Integration Webhooks

This is an older form of Webhook, which only supports events related to changes in integration state.
Unlike [General Webhooks](wh-general.md), each event generates an individual Webhook.

## Supported events

| <div style="width:100px">Entity</div> | <div style="width:150px">Event</div> | Description |
| :-- | :-- | :-- |
| Integration | `IntegrationCreated` | Event triggered when a new integration is created |
| Integration | `IntegrationEnabled` | Event triggered when a integration is enabled |
| Integration | `IntegrationDisabled` | Event triggered when a integration is disabled |
| Integration | `IntegrationCanceled` | Event triggered when a integration is canceled |
| Integration | `IntegrationReinstated` | Event triggered when a integration is reinstated |
| Integration | `IntegrationDeleted` | Event triggered when a integration is deleted |
| Integration | `IntegrationApiKeyCreated` | Event triggered when an integration API key (`AccessToken`) is regenerated |

> ### Terminology
> An *Integration* refers to the unique connection between an *Enterprise* or *Property* (i.e. Mews customer) and an API client (i.e. Mews partner), corresponding to a unique *Access Token*.
> For a full description of all the terms used, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

## Request body

```json
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
| `Action` | string [Webhook action](#webhook-action) | required | Type of action or event. |
| `Data` | object | required | Structure of the object depends on [Webhook action](#webhook-action). |

### Webhook action

* `IntegrationCreated` - Triggered when a new integration is created. `Data` is [Integration created data](#integration-created-data).
* `IntegrationEnabled` - Triggered when an integration is enabled. `Data` is [Integration enabled data](#integration-enabled-data).
* `IntegrationDisabled` - Triggered when an integration is disabled. `Data` is [Integration disabled data](#integration-disabled-data).
* `IntegrationCanceled` - Triggered when an integration is canceled. `Data` is [Integration canceled data](#integration-canceled-data).
* `IntegrationReinstated` - Triggered when an integration is reinstated. `Data` is [Integration reinstated data](#integration-reinstated-data).
* `IntegrationDeleted` - Triggered when an integration is deleted. `Data` is [Integration deleted data](#integration-deleted-data).
* `IntegrationApiKeyCreated` – Triggered when an integration API key (`AccessToken`) is regenerated. `Data` is [Integration API key created data](#integration-api-key-created-data).

### Webhook data

The structure of the Data object depends on [Webhook action](#webhook-action).

### Integration created data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Enterprise` | [Enterprise](#enterprise) | required | Property or chain of properties. |
| `Service` | [Service](#service) | optional | Service the integration is connected to. |
| `Requestor` | [Requestor](#requestor) | required | Person requesting the action or event. |
| `AccessToken` | string | required | Access token of the client application. |
| `CreatedUtc` | string | required | Creation date and time of the integration in UTC timezone in ISO 8601 format. |
| `IsEnabled` | bool | required | Whether integration is enabled. |
| `Integration` | [Integration](#integration) | required | Integration data. |

### Enterprise

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `Name` | string | required | Name of the enterprise. |

### Service

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the service. |
| `Name` | string | required | Name of the service. |

### Requestor

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Name` | string | required | Name of the requestor. |
| `Email` | string | required | Email of the requestor. |

### Integration

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the integration. |
| `Name` | string | required | Name of the integration. |

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

### Integration API key created data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Integration` | [Integration](#integration) | required | Integration data. |
| `ApiKey` | string | required | The newly created API key. |