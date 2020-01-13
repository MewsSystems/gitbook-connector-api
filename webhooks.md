# Webhooks

Currently supported webhooks for operation on integrations. Action is triggered everytime when hotel updates the integration.

* [Integration created](webhooks.md#integration-created) - Whenever integration is created.
* [Integration disabled](webhooks.md#integration-disabled) - Whenever integration is disabled.
* [Integration enabled](webhooks.md#integration-enabled) - Whenever integration is enabled.
* [Integration deleted](webhooks.md#integration-deleted) - Whenever integration is deleted.
* [Integration canceled](webhooks.md#integration-canceled) - Whenever integration is canceled.
* [Integration reinstated](webhooks.md#integration-reinstated) - Whenever integration is reinstated.

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
| `Action` | [Action](configuration.md#Action)| required | Type of action |
| `Data` | [Data](integrations.md#Data) | required | Webhook object data. |

### Data

Structure of  data varies depending on type of the [Action](integrations.md#action):

* `IntegrationCreated` - [Integration created data](integrations.md#integration-created-data)
* `IntegrationDisabled` - [Integration disabled data](integrations.md#integration-disabled-data)
* `IntegrationEnabled` - [Integration enabled data](integrations.md#integration-enabled-data)
* `IntegrationDeleted` - [Integration deleted data](integrations.md#integration-deleted-data)
* `IntegrationCanceled` - [Integration canceled data](integrations.md#integration-canceled-data)
* `IntegrationReinstated` - [Integration reinstated data](integrations.md#integration-reinstated-data)

### Integration created data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Enterprise` |[Enterprise](configuration.md#Enterprise)| required | Commercial chain of the property |
| `Requestor` | [Requestor](configuration.md#Requestor) | required |  Person requesting action. |
| `AccessToken` | string | required | Access token of the client application. |
| `CreatedUtc` | string | required | Creation date and time of the integration. |
| `IsEnabled` | bool | required | Integration enabled by default. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration disabled data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration enabled data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration deleted data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `DeletedUtc` | string | required | Deletion date and time of the integration. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration canceled data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration reinstated data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

#### Enterprise

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `Name` | string | required | Name of the enterprise. |

#### Requestor

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Requestor's name. |
| `Email` | string | required | Requestor's email. |

#### Integration

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the Integration. |
| `Name` | string | required | Name of the intergation. |