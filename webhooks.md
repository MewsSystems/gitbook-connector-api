# Webhooks

Whenever integration client is changing its state webhook message could be sent to certain url set in webhook field.

## Integration Created

Whenever integration client is created.

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
