# Webhooks
Currently supported webhooks for operation on integrations. Action is triggered everytime when hotel updates the integration.

* [Integration created](websockets.md#integration-created)
* [Integration disabled](websockets.md#integration-disabled)
* [Integration enabled](websockets.md#integration-enabled)
* [Integration deleted](websockets.md#integration-deleted)
* [Integration canceled](websockets.md#integration-canceled)
* [Integration reinstated](websockets.md#integration-reinstated)

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

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action)| required | State of the integration |
| `Data` | object | required | Webhook object data. |
| `Enterprise` |[Enterprise](configuration.md#Enterprise)| required | Commercial chain of the property |
| `Requestor` | [Requestor](configuration.md#Requestor) | required |  Person requesting action. |
| `AccessToken` | string | required | Access token of the client application. |
| `CreatedUtc` | string | required | Creation date and time of the integration. |
| `IsEnabled` | bool | required | Integration enabled by default. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

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

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | State of the integration |
| `Data` | object | required | Webhook object data. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

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

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | State of the integration |
| `Data` | object | required | Webhook object data. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

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

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | State of the integration |
| `Data` | object | required |Webhook object data. |
| `DeletedUtc` | string | required | Deletion date and time of the integration. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

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

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | State of the integration |
| `Data` | object | required | Webhook object data. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

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

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Action` | [Integration client webhook action](configuration.md#Integration-client-webhook-action) | required | State of the integration |
| `Data` | object | required | Webhook object data. |
| `Integration` | [Integration](configuration.md#Integration) | required | Integration data. |

#### Integration client webhook action

* `IntegrationCreated` - customer created within the interval.
* `IntegrationDisabled` - customer updated or created within the interval.
* `IntegrationEnabled` - customer updated or created within the interval.
* `IntegrationDeleted` - customer updated or created within the interval.
* `IntegrationCanceled` - customer updated or created within the interval.
* `IntegrationReinstated` - customer updated or created within the interval.

#### Enterprise

| `Id` | string | required | Unique identifier of the enterprise. |
| `Name` | string | required | Name of the enterprise. |

#### Requestor

| `Name` | string | required | Requestor's name. |
| `Email` | string | required | Requestor's email. |

#### Integration

| `Id` | string | required | Unique identifier of the Integration. |
| `Name` | string | required | Name of the intergation. |