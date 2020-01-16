# Webhooks

Partners can be notified about integration changes via webhook calls that are triggered everytime when hotel updates the integration.

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
| `Action` | string [Webhook action](webhooks.md#webhook-action) | required | Type of action. |
| `Data` | object | required | Webhook [Data](webhooks.md#integration-created-data). |

## Webhook action

Structure of data varies depending on the webhook action:

* `IntegrationCreated` - [Integration created data](webhooks.md#integration-created-data)
* `IntegrationDeleted` - [Integration deleted data](webhooks.md#integration-deleted-data)
* `IntegrationEnabled` - [Integration enabled data](webhooks.md#integration-enabled-data)
* `IntegrationDisabled` - [Integration disabled data](webhooks.md#integration-disabled-data)
* `IntegrationCanceled` - [Integration canceled data](webhooks.md#integration-canceled-data)
* `IntegrationReinstated` - [Integration reinstated data](webhooks.md#integration-reinstated-data)

### Integration created data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Enterprise` |[Enterprise](webhooks.md#Enterprise)| required | Commercial chain of the property. |
| `Requestor` | [Requestor](webhooks.md#Requestor) | required | Person requesting action. |
| `AccessToken` | string | required | Access token of the client application. |
| `CreatedUtc` | string | required | Creation date and time of the integration in UTC timezone in ISO 8601 format. |
| `IsEnabled` | bool | required | Whether integration is enabled. |
| `Integration` | [Integration](webhooks.md#Integration) | required | Integration data. |

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

### Integration deleted data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `DeletedUtc` | string | required | Deletion date and time of the integration in UTC timezone in ISO 8601 format. |
| `Integration` | [Integration](webhooks.md#Integration) | required | Integration data. |

### Integration disabled data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](webhooks.md#Integration) | required | Integration data. |

### Integration canceled data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](webhooks.md#Integration) | required | Integration data. |

### Integration reinstated data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](webhooks.md#Integration) | required | Integration data. |