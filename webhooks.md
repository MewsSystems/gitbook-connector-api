# Webhooks

The integrator may provide a webhook address to [integrations@mewssystems.com](mailto://integrations@mewssystems.com) where Mews will deliver webhook event data.

### Integration event

Returns event information related to the integration connection.

#### Response

```javascript
{
    "Action": "IntegrationCreated",
    "CreatedUtc": "2019-05-24T07:35:35Z",
    "IsEnabled": true,
    "Data": {
        "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
        "Enterprise": {
            "Id": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
            "Name": "Connector API Hotel"
            },
        "Requestor": {
            "Name": "Mews Integrations",
            "Email": "integrations@mewssystems.com"
            },
        "Integration": {
            "Id": "c66ef7b2-39d2-4632-943d-115ede9cb810",
            "Name": "Example"
        }
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Action` | string | required | The [Action](webhooks.md#action) performed. |
| `CreatedUtc` | string | optional | Creation date and time of the integration in UTC timezone in ISO 8601 format. |
| `IsEnabled` | string | optional | The state of the integration. |
| `Data` | [Data](webhooks.md#data) | required | Data of the integration event. |

#### Action

* `IntegrationCreated` - A new integration has been created.
* `IntegrationEnabled` - An integration has been enabled.
* `IntegrationDisabled` - An integration has been disabled.
* ...

#### Data

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `AccessToken` | string | optional | Access token of the client application. |
| `Enterprise` | [Enterprise](operations/configuration.md#enterprise) | optional | Enterprise data from the enterprise event where the integration event was generated. |
| `Requestor` | [Requestor](webhooks.md#requestor) | optional | Information relating to the user who requested the integration event. |
| `Integration` | [Integration](webhooks.md#integration) | required | Information relating to the integration. |

#### Enterprise

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the [Enterprise](operations/configuration.md#enterprise). |
| `Name` | string | required | Name of the [Enterprise](operations/configuration.md#enterprise). |

#### Requestor

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Name of the user who requested the integration. |
| `Email` | string | required | Email of the user who requested the integration. |

#### Integration

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the integration.|
| `Name` | string | required | Name of the integration. |
