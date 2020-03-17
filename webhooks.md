# Webhooks

When an action of particular type is performed in the system, a message is sent to the configured webhook, using HTTP POST and JSON body.

## Message

```javascript
{
    "Action": "IntegrationCreated",
    "Data": {
        "Enterprise": {
            "Id": "8865aa96-f62d-4f9b-a912-ab2100f60f42",
            "Name": "Sample Chain Hotel 1"
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

| Property | Type |  | Description |
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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Enterprise` | [Enterprise](#Enterprise) | required | Commercial chain of the property. |
| `Requestor` | [Requestor](#Requestor) | required | Person requesting action. |
| `AccessToken` | string | required | Access token of the client application. |
| `CreatedUtc` | string | required | Creation date and time of the integration in UTC timezone in ISO 8601 format. |
| `IsEnabled` | bool | required | Whether integration is enabled. |
| `Integration` | [Integration](#Integration) | required | Integration data. |

#### Enterprise

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `Name` | string | required | Name of the enterprise. |

#### Requestor

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Name of the requestor. |
| `Email` | string | required | Email of the requestor. |

#### Integration

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the integration. |
| `Name` | string | required | Name of the intergation. |

### Integration enabled data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](#Integration) | required | Integration data. |

### Integration disabled data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](#Integration) | required | Integration data. |

### Integration canceled data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](#Integration) | required | Integration data. |

### Integration reinstated data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](#Integration) | required | Integration data. |

### Integration deleted data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `DeletedUtc` | string | required | Deletion date and time of the integration in UTC timezone in ISO 8601 format. |
| `Integration` | [Integration](#Integration) | required | Integration data. |