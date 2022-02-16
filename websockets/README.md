# Websockets

For use cases where polling would be too resource consuming or not real-time enough, websockets can be used.
A websocket is an open connection over which Mews can send event messages as the events occur.
After the client application makes a successful connection, it will receive messages according to the configuration of the Connector integration in __Mews Operations__.

## Endpoint

`[WebSocketAddress]/ws/connector`

## Authentication

Authentication is done using same combination of `ClientToken` and `AccessToken` values as in case of standard API operations. These tokens must be sent as cookies together with the connection request. Most websocket client libraries support this. 

```
Cookie: ClientToken=E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D; AccessToken=C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D
```

Note: There can't be any spaces around `=` in the Cookie value as this would prevent successful WebSocket connection.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

For further details about access tokens, consult the [Authentication](../guidelines/requests.md#authentication) section.

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

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Events` | array of [Event](#event) | required | The events that happened during the connection. |

### Event

Depending on the event `Type`, it is one of the following:

* [Command event](#command-event)
* [Reservation event](#reservation-event)
* [Resource event](#resource-event)

#### Command event

If the Connector integration is configured to handle commands for some devices, it will receive events whenever a command is updated \(created, updated\).

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Type` | string `DeviceCommand` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the [Command](../operations/commands.md#command). |
| `State` | string [Command state](../operations/commands.md#command-state) | required | State of the command. |

#### Reservation event

If the Connector integration is configured to receive reservation updates, it will receive events whenever a reservation is updated \(created, updated, canceled etc\).

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Type` | string `Reservation` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the [Reservation](../operations/reservations.md#reservation). |
| `State` | string [Reservation state](../operations/reservations.md#reservation-state) | required | State of the reservation. |
| `StartUtc` | string | required | Start of the reservation \(arrival\) in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the reservation \(departure\) in UTC timezone in ISO 8601 format. |
| `AssignedResourceId` | string | optional | Unique identifier of the [Resource](../operations/resources.md#resource) assigned to the reservation. |

#### Resource event

If the Connector integration is configured to receive resource updates, it will receive events whenever a resource is updated \(created, renamed, state updated\).

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Type` | string `Resource` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the [Resource](../operations/resources.md#resource). |
| `State` | string [Resource state](../operations/resources.md#resource-state) | required | State of the resource. |

#### Price update event

If the Connector integration is configured to receive price updates, it will receive events whenever a rate price is updated \(created\). Events are related to rate base price update, price adjustment and category adjustment.

| Property | Type | Contract | Description |
| --- | --- | --- | --- |
| `Type` | string `PriceUpdate` | required | Type of the event. |
| `Id` | string | required | Unique identifier of the update event. |
| `StartUtc` | string | required | Start of the price update interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the price update interval in UTC timezone in ISO 8601 format. |
| `RateId` | string | optional | Unique identifier of the [Rate](../operations/rates.md#rate) assigned to the update price event. |
| `ResourceCategoryId` | string | optional | Unique identifier of the [Resource category](../operations/resources.md#resource-category) assigned to the update price event. |
