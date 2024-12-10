# WebSockets

WebSockets provides another way to communicate with Mews, for special use cases where polling using [API Operations](../operations/README.md) is too resource consuming, and event-driven [Webhooks](../webhooks/README.md) are not sufficiently real-time.
A WebSocket is an open connection over which Mews can send event messages as the events occur.
After you make a successful WebSocket connection to Mews, you will receive event messages according to the configuration of your integration in __Mews Operations__.
For a comparative overview of [Operations](../operations/README.md) vs [Webhooks](../webhooks/README.md) vs WebSockets, see [Ways to communicate](../guidelines/communicate.md).

## Supported events

| <div style="width:100px">Entity</div> | <div style="width:150px">Event</div> | Description |
| :-- | :-- | :-- |
| Command | `DeviceCommand` | Event triggered when a device command is updated |
| Reservation | `Reservation` | Event triggered when a reservation is updated |
| Resource | `Resource` | Event triggered when a resource is updated |
| Price | `PriceUpdate` | Event triggered when a rate price is updated |

## Endpoint URL

```text
[WebSocketAddress]/ws/connector
```

* **WebSocketAddress** - Base address for Mews WebSockets, depending on the [Environment](../guidelines/environments.md) \(Demo or Production\).

## Authentication

Authentication is done using the same combination of `ClientToken` and `AccessToken` as used for standard API operations. These tokens must be sent as cookies together with the connection request. Most WebSocket client libraries support this. 
For more information about client tokens and access tokens, see [Authentication](../guidelines/requests.md#authentication).

```
Cookie: ClientToken=E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D; AccessToken=C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D
```

> Note: There can't be any spaces around `=` in the Cookie value as this would prevent successful WebSocket connection.

* **ClientToken** - Unique token per integration which will be provided to you by Mews upon successful certification.
* **AccessToken** - Unique token per enterprise. Can be provided to you by the enterprise admin.


## Message body

```javascript
{
    "Events": [
        {
            "Type": "DeviceCommand",
            "Id": "2391a3df-1c61-4131-b6f8-c85b4234adcb",
            "State": "Pending"
        },
        {
            "Type": "Reservation",
            "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
            "State": "Processed",
            "StartUtc": "2016-02-20T13:00:00Z",
            "EndUtc": "2016-02-22T11:00:00Z"
        },
        {
            "Type": "Resource",
            "Id": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
            "State": "Dirty"
        },
        {
            "Type": "PriceUpdate",
            "Id": "bd75f159-f22a-4685-abdb-aac0008e2af3",
            "StartUtc": "2019-09-07T22:00:00Z",
            "EndUtc": "2019-09-07T22:00:00Z",
            "RateId": "9c6c0556-42bb-409a-86ca-6ca430773b99",
            "ResourceCategoryId": null
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Events` | array of [Event](#event) | required | The events that happened during the connection. |

### Event

Depending on the event `Type`, it is one of the following:

* [Device Command event](#device-command-event)
* [Reservation event](#reservation-event)
* [Resource event](#resource-event)
* [Price Update event](#price-update-event)

#### Device Command event

If the integration is configured to handle commands for some devices, it will receive events whenever a command is created or updated.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string `DeviceCommand` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the [Command](../operations/commands.md#command). |
| `State` | string [Command state](../operations/commands.md#command-state) | required | State of the command. |

#### Reservation event

If the integration is configured to receive reservation updates, it will receive events whenever any change is made to a reservation \(created, updated, canceled, etc.\).

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string `Reservation` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the reservation. |
| `State` | string [Reservation state](../operations/reservations.md#reservation-state) | required | State of the reservation. |
| `StartUtc` | string | required | Start of the reservation \(arrival\) in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the reservation \(departure\) in UTC timezone in ISO 8601 format. |
| `AssignedResourceId` | string | optional | Unique identifier of the [Resource](../operations/resources.md#resource) assigned to the reservation. |

#### Resource event

If the integration is configured to receive resource updates, it will receive events whenever a change is made to a resource \(created, renamed, state updated\).

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string `Resource` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the [Resource](../operations/resources.md#resource). |
| `State` | string [Resource state](../operations/resources.md#resource-state) | required | State of the resource. |

#### Price Update event

If the integration is configured to receive price updates, it will receive events whenever a rate price is created or updated.
Events are related to base price updates, price adjustments and category adjustments.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Type` | string `PriceUpdate` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the update event. |
| `StartUtc` | string | optional | Start of the price update interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the price update interval in UTC timezone in ISO 8601 format. |
| `RateId` | string | optional | Unique identifier of the [Rate](../operations/rates.md#rate) assigned to the update price event. |
| `ResourceCategoryId` | string | optional | Unique identifier of the [Resource category](../operations/resources.md#resource-category) assigned to the update price event. |
