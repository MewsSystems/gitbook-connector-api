# Tasks

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |
| `EnterpriseIds` | array of string | optional, max 1000 items |  |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `DeadlineUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `TaskIds` | array of string | optional, max 1000 items | Unique identifiers of [Tasks](https://mews-systems.gitbook.io/connector-api/operations/#task). |
| `DepartmentIds` | array of string | optional, max 1000 items | Unique identifiers of [Departments](https://mews-systems.gitbook.io/connector-api/operations/departments/#department). Not possible to be used standalone, needs to be used in combination with other filters. |
| `ServiceOrderIds` | array of string | optional, max 1000 items | Unique identifiers of service orders (reservations or product service orders). |

### Response

```javascript
{
  "Tasks": [
    {
      "Id": "b166fc93-c75a-438f-93b8-ab1e00a031ae",
      "Name": "Test all",
      "State": "Open",
      "Description": "Task description",
      "DepartmentId": "c28cfb42-a963-4195-ad26-ab1b009b6425",
      "ServiceOrderId": "8d70f718-e19c-458d-8ddb-ab1b009b5487",
      "CreatedUtc": "2019-12-09T09:43:14Z",
      "DeadlineUtc": "2020-01-01T14:00:00Z",
      "ClosedUtc": null
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Tasks` | array of [Task](#Task) | optional | The filtered tasks. |
| `Cursor` | string | optional |  |

#### Task

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `EnterpriseId` | string | required |  |
| `Name` | string | optional |  |
| `State` | string | optional |  |
| `Description` | string | optional |  |
| `DepartmentId` | string | optional |  |
| `ServiceOrderId` | string | optional |  |
| `CreatedUtc` | string | optional |  |
| `DeadlineUtc` | string | optional |  |
| `ClosedUtc` | string | optional |  |

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
  "DepartmentId": "8a0770a7-5178-4b87-8898-ab0400a346ec"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `DepartmentId` | string | optional | Unique identifier of the [Department](https://mews-systems.gitbook.io/connector-api/operations/departments/#department) the task is addressed to. |
| `ServiceOrderId` | string | optional | Unique identifier of the service order (reservation or product service order) the task is linked with. |
| `Name` | string | required | Name (or title) of the task. |
| `Description` | string | optional | Further decription of the task. |
| `DeadlineUtc` | string | required | Deadline of the task in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
  "TaskId": "11bcf947-d629-4781-89f9-ab1800d5aa47"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaskId` | string | required | Unique identifier of added task. |
