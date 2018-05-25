# Enterprises

## Get all companies

Returns all company profiles of the enterprise, possible filtered by their identifiers.

### Request

`[PlatformAddress]/api/connector/v1/companies/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Ids` | array of string | optional | If specified, returns only companies with the specified identifiers. |

### Response

```javascript
{
    "Companies": [
        {
            "AccountingCode": "",
            "AdditionalTaxIdentifier": "",
            "Address": {
                "City": "Dortmund",
                "CountryCode": "DE",
                "Line1": "Rheinlanddamm 207-209",
                "Line2": "",
                "PostalCode": "44137"
            },
            "ElectronicInvoiceIdentifier": "",
            "Id": "207b9da3-1c2a-45df-af20-54e57a13368c",
            "Identifier": "",
            "Name": "IBM",
            "TaxIdentifier": ""
        },
        {
            "AccountingCode": "",
            "AdditionalTaxIdentifier": "",
            "Address": null,
            "ElectronicInvoiceIdentifier": "",
            "Id": "217b9da3-1c2a-45df-af20-54e57a13368c",
            "Identifier": "",
            "Name": "Booking.com",
            "TaxIdentifier": ""
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Companies` | array of [Company](enterprises.md#company) | required | The company profiles of the enterprise. |

#### Company

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the company. |
| `Name` | string | required | Name of the company. |
| `Identifier` | string | optional | Identifier of the company \(e.g. legal identifier\). |
| `TaxIdentifier` | string | optional | Tax identification number of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifer of the company. |
| `ElectronicInvoiceIdentifier` | string | optional | Electronic invoice identifer of the company. |
| `AccountingCode ` | string | optional | Accounting code of the company. |
| `Address` | [Address](configuration.md#address) | optional | Address of the company \(if it is non-empty, otherwise `null`\). |

## Get all company contracts

Returns all contracts between the enterprise and other companies.

### Request

`[PlatformAddress]/api/connector/v1/companyContracts/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

### Response

```javascript
{
    "TravelAgencyContracts": [
        {
            "Commission": null,
            "CommissionIncluded": null,
            "CompanyId": "04ba69d8-ff17-494f-be27-92422e100aa1",
            "Id": "c172d21a-5595-44ab-8088-014eedd5bbf3",
            "IsActive": true
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `TravelAgencyContracts` | array of [Travel agency contract](enterprises.md#travel-agency-contract) | required | The travel agency contracts. |

#### Travel agency contract

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the contract. |
| `CompanyId` | string | required | Unique identifier of the contracted [Company](enterprises.md#company). |
| `IsActive` | boolean | required | Whether the contract is still active. |
| `CommissionIncluded` | boolean | optional | Whether commission of the travel agency is included in the rate. |
| `Commission` | number | optional | Commission of the travel agency. |

## Get all departments

Returns all departments of an enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/departments/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

### Response

```javascript
{
    "Departments": [
        {
            "Id": "98776d06-60e4-495f-82f1-95ab2f644d63",
            "IsActive": true,
            "Name": "Sales"
        },
        {
            "Id": "915fbb82-de35-48a0-9e9b-f4a7eac711bb",
            "IsActive": true,
            "Name": "Housekeeping"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Departments` | array of [Department](enterprises.md#department) | required | The departments of the enterprise. |

#### Department

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the department. |
| `IsActive` | boolean | required | Whether the department is still active. |
| `Name` | string | required | Name of the department. |

## Get all spaces

Returns all spaces of an enterprise associated with the connector integration.

### Request

`[PlatformAddress]/api/connector/v1/spaces/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Extent": {
        "Spaces": true,
        "SpaceCategories": true,
        "SpaceFeatures": false,
        "Inactive": false
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Extent` | [Space extent](enterprises.md#space-extent) | optional | Extent of data to be returned. If not specified, `Spaces` and `SpaceCategories` is used as the default extent. |

#### Space extent

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Spaces` | bool | optional | Whether the response should contain spaces. |
| `SpaceCategories` | bool | optional | Whether the response should contain space categories. |
| `SpaceFeatures` | bool | optional | Whether the response should contain space features and their assignments. |
| `Inactive` | bool | optional | Whether the response should contain inactive entities. |

### Response

```javascript
{
    "Spaces": [
        {
            "BuildingNumber": null,
            "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
            "FloorNumber": "1",
            "Id": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
            "IsActive": true,
            "Number": "101",
            "ParentSpaceId": null,
            "State": "Dirty",
            "Type": "Room"
        },
        {
            "BuildingNumber": null,
            "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
            "FloorNumber": "1",
            "Id": "c32386aa-1cd2-414a-a823-489325842fbe",
            "IsActive": true,
            "Number": "102",
            "ParentSpaceId": null,
            "State": "Inspected",
            "Type": "Room"
        }
    ],
    "SpaceCategories": [
        {
            "Description": "",
            "Id": "aaed6e21-1c1f-4644-9872-e53f96a21bf9",
            "IsActive": true,
            "ImageIds": [],
            "Name": "Best Room",
            "Ordering": 0,
            "ShortName": "BR",
            "UnitCount": 2
        }
    ],
    "SpaceFeatures": [
        {
            "Description": null,
            "Id": "a693dd8c-21fe-4dae-b450-ea3bd9ab3bb0",
            "Name": "123"
        }
    ],
    "SpaceFeatureAssignments": [
        {
            "SpaceFeatureId": "a693dd8c-21fe-4dae-b450-ea3bd9ab3bb0",
            "SpaceId": "18019693-c66f-4be8-a893-c3d89fd291cc"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Spaces` | array of [Space](enterprises.md#space) | required | The spaces of the enterprise. |
| `SpaceCategories` | array of [Space category](enterprises.md#space-category) | required | Categories of spaces in the enterprise. |
| `SpaceFeatures` | array of [Space feature](enterprises.md#space-feature) | optional | Features of spaces in the enterprise. |
| `SpaceFeatureAssignments` | array of [Space feature assignment](enterprises.md#space-feature-assignment) | optional | Assignments of space features to spaces. |

#### Space

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the space. |
| `IsActive` | bool | required | Whether the space is still active. |
| `Type` | string [Space type](enterprises.md#space-type) | required | Type of the space. |
| `Number` | string | required | Number of the space \(e.g. room number\). |
| `FloorNumber` | string | optional | Number of the floor the space is on. |
| `BuildingNumber` | string | optional | Number of the building the space is in. |
| `ParentSpaceId` | string | optional | Identifier of the parent [Space](enterprises.md#space) \(e.g. room of a bed\). |
| `CategoryId` | string | required | Identifier of the [Space category](enterprises.md#space-category) assigned to the space. |
| `State` | string [Space state](enterprises.md#space-state) | required | State of the room. |

#### Space type

* `Room`
* `Dorm`
* `Bed`
* ...

#### Space state

* `Dirty`
* `Clean`
* `Inspected`
* `OutOfService`
* `OutOfOrder`

#### Space category

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the category. |
| `IsActive` | bool | required | Whether the space category is still active. |
| `Name` | string | required | Name of the category. |
| `ShortName` | string | optional | Short name \(e.g. code\) of the category. |
| `Description` | string | optional | Description of the category. |
| `Ordering` | number | required | Ordering of the category, lower number corresponds to lower category \(note that uniqueness nor continuous sequence is guaranteed\). |
| `UnitCount` | number | required | Count of units that can be accommodated \(e.g. bed count\). |
| `ImageIds` | array of string | required | Unique identifiers of the space category images. |

#### Space feature

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the feature. |
| `Name` | string | required | Name of the feature. |
| `Description` | string | optional | Description of the feature. |

#### Space feature assignment

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `SpaceId` | string | required | Unique identifier [Space](enterprises.md#space). |
| `SpaceFeatureId` | string | required | Unique identifier [Space feature](enterprises.md#space-feature). |

## Get all space blocks

Returns all space blocks \(out of order blocks or house use blocks\) colliding with the specified interval.

### Request

`[PlatformAddress]/api/connector/v1/spaceBlocks/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2016-01-01T00:00:00Z",
    "EndUtc": "2017-01-01T00:00:00Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

### Response

```javascript
{
    "SpaceBlocks": [
        {
            "AssignedSpaceId": "5ee074b1-6c86-48e8-915f-c7aa4702086f",
            "CreatedUtc": "2016-03-29T22:02:34Z",
            "EndUtc": "2016-01-01T16:00:00Z",
            "Id": "5ab9d519-2485-4d77-85c4-2a619cbdc4e7",
            "StartUtc": "2016-01-01T10:00:00Z",
            "Type": "HouseUse",
            "UpdatedUtc": "2016-03-29T22:02:34Z"
        },
        {
            "AssignedSpaceId": "f7c4b4f5-ac83-4977-a41a-63d27cc6e3e9",
            "CreatedUtc": "2016-03-29T15:14:06Z",
            "EndUtc": "2016-01-01T16:00:00Z",
            "Id": "4d98ad40-a726-409e-8bf3-2c12ff3c0331",
            "StartUtc": "2016-01-01T10:00:00Z",
            "Type": "OutOfOrder",
            "UpdatedUtc": "2016-03-29T15:14:06Z"
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `SpaceBlocks` | array of [Space block](enterprises.md#space-block) | required | The space blocks colliding with the interval. |

#### Space block

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the block. |
| `AssignedSpaceId` | string | required | Unique identifier of the assigned [Space](enterprises.md#space). |
| `Type` | string [Space block type](enterprises.md#space-block-type) | required | Type of the space block. |
| `StartUtc` | string | required | Start of the block in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the block in UTC timezone in ISO 8601 format. |
| `CreatedUtc` | string | required | Creation date and time of the block in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the block in UTC timezone in ISO 8601 format. |

#### Space block type

* `OutOfOrder`
* `HouseUse`

## Update space state

Updates state of the specified space. Note that the state is also updated on the child spaces of the specified space. So if e.g. dorm space is set to `Dirty`, ale subspaces \(beds\) are also set to `Dirty`.

### Request

`[PlatformAddress]/api/connector/v1/spaces/updateState`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "SpaceId": "41b3e3a2-3400-4d72-86d4-1e341ccf8977",
    "State": "Inspected"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `SpaceId` | string | required | Unique identifier of the [Space](enterprises.md#space) to be updated. |
| `State` | string [Space state](enterprises.md#space-state) | required | New state of the space \(`Dirty`, `Clean`, `Inspected` or `OutOfService`\). |

### Response

```javascript
{}
```

## Add task

Adds a new task to the enterprise, optionally to a specified department.

### Request

`[PlatformAddress]/api/connector/v1/tasks/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "DepartmentId": null,
    "Name": "Test",
    "Description": "Task description",
    "DeadlineUtc": "2016-01-01T14:00:00Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `DepartmentId` | string | optional | Unique identifier of the [Department](enterprises.md#department) the task is addressed to. |
| `Name` | string | required | Name \(or title\) of the task. |
| `Description` | string | optional | Further decription of the task. |
| `DeadlineUtc` | string | required | Deadline of the task in UTC timezone in ISO 8601 format. |

### Response

```javascript
{}
```

