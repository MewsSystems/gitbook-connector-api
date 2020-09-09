# Websockets

For use cases, when polling would be too resource consuming or not enough "real-time", websockets should be used. After successful connection, the client will start receiving messages depending on configuration of the Connector integration in Commander.

## Endpoint

`[PlatformAddress]/ws/connector?ClientToken=[ClientToken]&AccessToken=[AccessToken]`

Note that protocol of the `[PlatformAddress]` should be changed to `ws(s)://`. If `[PlatformAddress]` starts with `http://` then `ws://` should be used. If it starts with `https://` then `wss://` should be used. `ClientToken` and `AccessToken` parameter values should be the same as in case of standard API operations. For further details, consult the [Authentication](guidelines.md#authentication) section.

## Message

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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Events` | array of [Event](websockets.md#event) | required | The events that happened during the connection. |

### Event

Depending on the event `Type`, it is one of the following:

* [Command event](websockets.md#command-event)
* [Reservation event](websockets.md#reservation-event)
* [Resource event](websockets.md#resource-event)

#### Command event

If the Connector integration is configured to handle commands for some devices, it will receive events whenever a command is updated \(created, updated\).

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string `DeviceCommand` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the [Command](operations/integrations.md#command). |
| `State` | string [Command state](operations/integrations.md#command-state) | required | State of the command. |

#### Reservation event

If the Connector integration is configured to receive reservation updates, it will receive events whenever a reservation is updated \(created, updated, canceled etc\).

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string `Reservation` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the [Reservation](operations/reservations.md#reservation). |
| `State` | string [Reservation state](operations/reservations.md#reservation-state) | required | State of the reservation. |
| `StartUtc` | string | required | Start of the reservation \(arrival\) in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | Endof the reservation \(departure\) in UTC timezone in ISO 8601 format. |
| `AssignedResourceId` | string | optional | Unique identifier of the [operations/enterprises#resource](Resource) assigned to the reservation. |

#### Resource event

If the Connector integration is configured to receive resource updates, it will receive events whenever a resource is updated \(created, renamed, state updated\).

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string `Resource` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the [Resource](operations/enterprises.md#resource). |
| `State` | string [Resource state](operations/enterprises.md#resource-state) | required | State of the resource. |

#### Price update event

If the Connector integration is configured to receive price updates, it will receive events whenever a rate price is updated \(created\). Events are related to rate base price update, price adjustment and category adjustment.

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Type` | string `PriceUpdate` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the update event. |
| `StartUtc` | string | required | Start of the price update interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the price update interval in UTC timezone in ISO 8601 format. |
| `RateId` | string | optional | Unique identifier of the [Rate](operations/services.md#rate) assigned to the update price event. |
| `ResourceCategoryId` | string | optional | Unique identifier of the [Resource category](operations/enterprises.md#resource-category) assigned to the update price event. |
