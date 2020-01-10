# Webhooks

Currently supported webhooks for operation on integrations. Action is triggered everytime when hotel updates the integration.

* [Integration created](webhooks.md#integration-created)
* [Integration disabled](webhooks.md#integration-disabled)
* [Integration enabled](webhooks.md#integration-enabled)
* [Integration deleted](webhooks.md#integration-deleted)
* [Integration canceled](webhooks.md#integration-canceled)
* [Integration reinstated](webhooks.md#integration-reinstated)

## Integration Created

Whenever integration is created.

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
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action)| required | Type of action |
| `Data` | [Data](integrations.md#Data) | required | Webhook object data. |

## Integration Disabled

Whenever integration is disabled.

## Message

```javascript
{
  "Action": "IntegrationDisabled",
  "Data": {
    "Integration": {
      "Id": "9e5e84e9-974d-4f16-9662-ab2200f27cb1",
      "Name": "WebhookTEST"
    }
  }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | Type of action  |
| `Data` | [Data](integrations.md#Data) | required | Webhook object data. |

## IntegrationEnabled

Whenever integration is enabled.

## Message

```javascript
{
  "Action": "IntegrationEnabled",
  "Data": {
    "Integration": {
      "Id": "9e5e84e9-974d-4f16-9662-ab2200f27cb1",
      "Name": "WebhookTEST"
    }
  }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | Type of action  |
| `Data` | [Data](integrations.md#Data) | required | Webhook object data. |

## Integration Deleted

Whenever integration is deleted.

## Message

```javascript
{
  "Action": "IntegrationDeleted",
  "Data": {
    "DeletedUtc": null,
    "Integration": {
      "Id": "201e7c8a-9883-4522-95e2-ab2200f3aa4b",
      "Name": "WebhookTEST"
    }
  }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | Type of action  |
| `Data` | [Data](integrations.md#Data) | required | Webhook object data. |

## Integration Canceled

Whenever integration is canceled.

## Message

```javascript
{
  "Action": "IntegrationCanceled",
  "Data": {
    "Integration": {
      "Id": "3bb50576-79ea-48f8-8d07-ab25009fdfb2",
      "Name": "WebhookTEST"
    }
  }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | Type of action  |
| `Data` | [Data](integrations.md#Data) | required | Webhook object data. |

## Integration Reinstated

Whenever integration is reinstated after cancellation.

## Message

```javascript
{
  "Action": "IntegrationReinstated",
  "Data": {
    "Integration": {
      "Id": "3bb50576-79ea-48f8-8d07-ab25009fdfb2",
      "Name": "WebhookTEST"
    }
  }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | Type of action  |
| `Data` | [Data](integrations.md#Data) | required | Webhook object data. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

#### Integration client webhook action

* `IntegrationCreated` - customer created within the interval.
* `IntegrationDisabled` - customer updated or created within the interval.
* `IntegrationEnabled` - customer updated or created within the interval.
* `IntegrationDeleted` - customer updated or created within the interval.
* `IntegrationCanceled` - customer updated or created within the interval.
* `IntegrationReinstated` - customer updated or created within the interval.

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

| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration enabled data

| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration deleted data

| `DeletedUtc` | string | required | Deletion date and time of the integration. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration canceled data

| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

### Integration reinstated data

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