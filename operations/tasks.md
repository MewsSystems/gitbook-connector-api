# Tasks

## Add task

Adds a new task to the enterprise, optionally to a specified department.

### Request

`[PlatformAddress]/api/connector/v1/tasks/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Name": "Test",
    "Description": "Task description",
    "DeadlineUtc": "2016-01-01T14:00:00Z",
    "ServiceOrderId": "c73cf884-ae2b-4fba-858c-ab1400b4c8c3",
    "DepartmentId": "8a0770a7-5178-4b87-8898-ab0400a346ec",
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Name` | string | required | Name \(or title\) of the task. |
| `Description` | string | optional | Further decription of the task. |
| `DeadlineUtc` | string | required | Deadline of the task in UTC timezone in ISO 8601 format. |
| `ServiceOrderId` | string | optional | Unique identifier of the order (for example a [Reservation](reservations.md#reservation) or Product order) the task is linked with. |
| `DepartmentId` | string | optional | Unique identifier of the [Department](departments.md#department) the task is addressed to. |

### Response

```javascript
{
    "TaskId": "11bcf947-d629-4781-89f9-ab1800d5aa47"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaskId` | string | required | Unique identifier of added task. |

## Get all tasks

Returns all tasks of the enterprise, filtered by identifiers or other filters.

### Request

`[PlatformAddress]/api/connector/v1/tasks/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "TaskIds": [
        "65cf1aac-bef2-4653-9350-ab2600af65af"
    ],
    "DepartmentIds": [
        "c28cfb42-a963-4195-ad26-ab1b009b6425"
    ],
    "ServiceOrderIds": [
        "8d70f718-e19c-458d-8ddb-ab1b009b5487"
    ],
    "CreatedUtc": {
        "StartUtc": "2019-12-08T00:00:00Z",
        "EndUtc": "2019-12-10T00:00:00Z"
    },
    "ClosedUtc": {
        "StartUtc": "2019-12-08T00:00:00Z",
        "EndUtc": "2019-12-10T00:00:00Z"
    },
    "DeadlineUtc": {
        "StartUtc": "2020-01-01T00:00:00Z",
        "EndUtc": "2020-01-02T00:00:00Z"
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `TaskIds` | array of string | optional, max 1000 items | Unique identifiers of [Tasks](#task). |
| `DepartmentIds` | array of string | optional, max 1000 items | Unique identifiers of [Departments](departments.md#department). Not possible to be used standalone, needs to be used in combination with other filters. |
| `ServiceOrderIds` | array of string  | optional, max 1000 items | Unique identifiers of Service orders (for example a [Reservation](reservations.md#reservation) or Product order). |
| `CreatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Task](#task) was created. |
| `ClosedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Task](#task) was closed. |
| `DeadlineUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which the [Task](#task) has a deadline. |

#### Time interval

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "Tasks": [
        {
            "Id": "b166fc93-c75a-438f-93b8-ab1e00a031ae",
            "Name": "Test all",
            "State": "Open"
            "Description": "Task description",
            "DepartmentId": "c28cfb42-a963-4195-ad26-ab1b009b6425",
            "ServiceOrderId": "8d70f718-e19c-458d-8ddb-ab1b009b5487",
            "CreatedUtc": "2019-12-09T09:43:14Z",
            "DeadlineUtc": "2020-01-01T14:00:00Z",
            "ClosedUtc": null,
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Tasks` | array of [Task](#task) | required | The filtered tasks. |

#### Task

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the task. |
| `Name` | string | required | Name \(or title\) of the task. |
| `State` | string [Task state](#task-state) | required | State of the task. |
| `Description` | string | optional | Further decription of the task. |
| `DepartmentId` | string | optional | Unique identifier of the [Department](departments.md#department) the task is addressed to. |
| `ServiceOrderId` | string | optional | Unique identifier of the order (for example a [Reservation](reservations.md#reservation) or Product order) the task is linked with. |
| `CreatedUtc` | string | required | Creation date and time of the task in UTC timezone in ISO 8601 format. |
| `DeadlineUtc` | string | required | Deadline date and time of the task in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the task in UTC timezone in ISO 8601 format. |

### Task state

* `Open` 
* `Closed` 
