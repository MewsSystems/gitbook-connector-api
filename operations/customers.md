# Customers

## Get all customers

Returns all customers filtered by identifiers, emails, names and other filters. Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerIds": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ],
    "Emails": [
        "john@doe.com"
    ],
    "FirstNames": [
        "John",
        "Jane"
    ],
    "LastNames": [
        "Doe"
    ],
    "LoyaltyCodes": [
        "LL810213"
    ],
    "CreatedUtc": {
        "StartUtc": "2019-12-05T00:00:00Z",
        "EndUtc": "2019-12-10T00:00:00Z"
    },
    "UpdatedUtc": {
        "StartUtc": "2019-12-10T00:00:00Z",
        "EndUtc": "2019-12-17T00:00:00Z"
    },
    "ActivityStates": [
        "Active"
    ],
    "Extent" : {
        "Customers": "true",
        "Documents": "true",
        "Addresses": "false"
    },
    "Limitation":{
        "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
        "Count": 10
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of [Customers](#customer). Required if no other filter is provided. |
| `Emails` | array of string | optional, max 1000 items | Emails of the [Customers](#customer). |
| `FirstNames` | array of string | optional, max 1000 items | First names of the [Customers](#customer). |
| `LastNames` | array of string | optional, max 1000 items | Last names of the [Customers](#customer). |
| `LoyaltyCodes` | array of string | optional, max 1000 items | Loyalty codes of the [Customers](#customer). |
| `CreatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which [Customer](#customer) was created. |
| `UpdatedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which [Customer](#customer) was updated. |
| `DeletedUtc` | [Time interval](#time-interval) | optional, max length 3 months | Interval in which [Customer](#customer) was deleted. `ActivityStates` value `Deleted` should be provided with this filter to get expected results. |
| `ActivityStates` | array of string [Activity state](vouchers.md#activity-state) | optional | Whether return only active, only deleted or both records. |
| `Extent` | [Customer extent](#customer-extent) | required | Extent of data to be returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of customers returned. |

#### Time interval

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

#### Customer extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | bool | required | Whether the response should contain information about customers. |
| `Documents` | bool | required | Whether the response should contain identity documents of customers. |
| `Addresses` | bool | required | Whether the response should contain addresses of customers. |

### Response

```javascript
{
    "Customers": [
        {
            "Address": {
                "Line1": "Somerford Road Hello House/135",
                "Line2": null,
                "City": "Christchurch",
                "PostalCode": "BH23 3PY",
                "CountryCode": "GB",
                "Latitude": null,
                "Longitude": null
            },
            "BirthDate": null,
            "BirthPlace": null,
            "CategoryId": null,
            "Classifications": [],
            "CreatedUtc": "2016-01-01T00:00:00Z",
            "Email": null,
            "FirstName": "John",
            "Sex": "Male",
            "Id": "35d4b117-4e60-44a3-9580-c582117eff98",
            "IdentityCard": null,
            "LanguageCode": null,
            "LastName": "Smith",
            "LoyaltyCode": null,
            "AccountingCode": null,
            "BillingCode": null,
            "NationalityCode": "US",
            "Notes": "",
            "CarRegistrationNumber": null,
            "Options": [],
            "Number": "1",
            "Phone": "00420123456789",
            "SecondLastName": null,
            "TaxIdentificationNumber": null,
            "Title": null,
            "UpdatedUtc": "2016-01-01T00:00:00Z",
            "CompanyId": "cb7d4a2f-10e0-4163-a176-ad03007efa8a",
            "MergeTargetId": null,
            "ActivityState": "Active"
        }
    ],
    "Documents": [
        {
            "Id": "e8a72a69-c20b-4278-b699-ab0400a32ecc",
            "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "Type": "IdentityCard",
            "Number": "123456",
            "Expiration": "2020-01-01",
            "Issuance": "2016-01-01",
            "IssuingCountryCode": "CZ"
        }
    ],
    "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer](#customer) | required | The customers. |
| `Documents` | array of [Document](#document) | required | The identity documents of customers. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest customer item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older customers. If [Limitation](../guidelines/pagination.md#limitation) is specified in the request message, then `Cursor` will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

#### Customer

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the customer. |
| `Number` | string | required | Number of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `Title` | string [Title](#title) | optional | Title prefix of the customer. |
| `Sex` | string [Sex](#sex) | optional | Sex of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `LanguageCode` | string | optional | Language and culture code of the customers preferred language. E.g. `en-US` or `fr-FR`. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Email` | string | optional | Email address of the customer. |
| `Phone` | string | optional | Phone number of the customer \(possibly mobile\). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional | Registration number of the customer's car. |
| `Classifications` | array of [Customer classification](#customer-classification) | required | Classifications of the customer. |
| `Options` | array of [Customer option](#customer-option) | required | Options of the customer. |
| `Address` | [Address](configuration.md#address) | optional | Address of the customer. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company) the customer is associated with. |
| `MergeTargetId` | string | optional | Unique identifier of the account ([Customer](#customer)) to which this customer is linked. |
| `ActivityState` | string | required | [Activity State](#activity-state) of customer record, i.e. whether active or deleted. |

#### Title

* `Mister`
* `Miss`
* `Misses`

#### Sex

* `Male`
* `Female`

#### Document

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the document. |
| `CustomerId` | string | required | Identifier of the [Customer](#customer). |
| `Type` | string [Document type](#document-type) | required | Type of the document. |
| `Number` | string | optional | Number of the document \(e.g. passport number\). |
| `Expiration` | string | optional | Expiration date in ISO 8601 format. |
| `Issuance` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |

#### Document type

* `Passport`
* `IdentityCard`
* `Visa`
* `DriversLicense`

#### Customer classification

* `PaymasterAccount`
* `Blacklist`
* `Media`
* `LoyaltyProgram`
* `PreviousComplaint`
* `Returning`
* `Staff`
* `FriendOrFamily`
* `TopManagement`
* `Important`
* `VeryImportant`
* `Problematic`
* `Cashlist`
* `DisabledPerson`
* `Military`
* ...

#### Customer option

* `SendMarketingEmails`
* ...

#### Activity State

* `Active`
* `Deleted`

## Search customers

Searches for customers that are active at the moment in the enterprise \(e.g. companions of checked-in reservations or paymasters\).

### Request

`[PlatformAddress]/api/connector/v1/customers/search`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Name": "Smith",
    "ResourceId": null,
    "Extent": {
        "Customers": true,
        "Documents": false,
        "Addresses": false
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Name` | string | optional | Name to search by \(applies to first name, last name and full name\). |
| `ResourceId` | string | optional | Identifier of [Resource](resources.md#resource) to search by \(members of [Reservation](reservations.md#reservation) assigned there will be returned\). |
| `Extent` | [Customer extent](#customer-extent) | required | Extent of data to be returned. |

### Response

```javascript
{
    "Customers": [
        {
            "Customer": {
                "Address": null,
                "BirthDate": null,
                "BirthPlace": null,
                "CategoryId": null,
                "Classifications": [],
                "CreatedUtc": "2016-01-01T00:00:00Z",
                "Email": null,
                "FirstName": "John",
                "Sex": "Male",
                "Id": "35d4b117-4e60-44a3-9580-c582117eff98",
                "IdentityCard": null,
                "LanguageCode": null,
                "LastName": "Smith",
                "LoyaltyCode": null,
                "NationalityCode": "US",
                "Notes": "",
                "Number": "1",
                "Options": [],
                "Passport": null,
                "Phone": "00420123456789",
                "SecondLastName": null,
                "TaxIdentificationNumber": null,
                "Title": null,
                "UpdatedUtc": "2016-01-01T00:00:00Z",
                "Visa": null
            },
            "Reservation": null
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer search result](#customer-search-result) | required | The customer search results. |

#### Customer search result

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customer` | [Customer](#customer) | required | The found customer. |
| `Reservation` | [Reservation](reservations.md#reservation) | optional | Reservation of the customer in case he currently stays in the enterprise. |

## Get customers open items

Returns all open items of the specified customers, i.e. all unpaid items and all deposited payments. Sum of the open items is the balance of the customer. If the `Currency` is specified, costs of the items are converted to that currency.

### Request

`[PlatformAddress]/api/connector/v1/customers/getOpenItems`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerIds": [
        "2a1a4315-7e6f-4131-af21-402cec59b8b9"
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerIds` | array of string | required, max 1000 items | Unique identifiers of the [Customers](#customer). |
| `Currency` | string | optional | ISO-4217 code of the [Currency](currencies.md#currency) the item costs should be converted to. |

### Response

```javascript
{
    "Customers": [
        {
            "CustomerId": "2a1a4315-7e6f-4131-af21-402cec59b8b9",
            "OrderItems": [
                {
                    "Id": "35820535-b988-4d6f-80cf-ecb19cdc3e58",
                    "AccountId": "2a1a4315-7e6f-4131-af21-402cec59b8b9",
                    "OrderId": "6645113e-72cc-4f99-ab77-e4452911bf20",
                    "BillId": null,
                    "AccountingCategoryId": "d250149e-a29d-4c70-b607-a1759faf7320",
                    "Amount": {
                        "Currency": "GBP",
                        "NetValue": -5.00,
                        "GrossValue": -5.00,
                        "TaxValues": [
                            {
                                "Code": "UK-Z",
                                "Value": 0.0
                            }
                        ],
                        "Breakdown": {
                            "Items": [
                                {
                                    "TaxRateCode": "UK-Z",
                                    "NetValue": -5.00,
                                    "TaxValue": 0.0
                                }
                            ]
                        }
                    },
                    "RevenueType": "Additional",
                    "ConsumedUtc": "2017-04-04T15:13:39Z",
                    "ClosedUtc": null,
                    "AccountingState": "Open",
                    "Data": {
                        "Discriminator": "Rebate",
                        "Value": {
                            "RebatedItemId": null
                        }
                    }
                }
            ],
            "PaymentItems": []
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer items](#customer-items) | required | The customers with their items. |

#### Customer items

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |
| `OrderItems` | array of [Order item](orders.md#order-item) | required | The open order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](orders.md#payment-item) | required | The open payment items (such as cash, credit card payments or invoices). |

## Add customer

Adds a new customer to the system and returns details of the added customer. If a customer with the specified email already exists, and `OverwriteExisting` is set to `true`, then the existing customer profile information is overwritten and the existing customer data returned. If `OverwriteExisting` is set to `false`, an error response is returned.

### Request

`[PlatformAddress]/api/connector/v1/customers/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "OverwriteExisting": false,
    "FirstName": "John",
    "LastName": "Doe",
    "SecondLastName": "the Second",
    "Title": "Mister",
    "Sex": "Male",
    "NationalityCode": "US",
    "BirthDate": "2000-01-01",
    "BirthPlace": "Prague, Czech Republic",
    "Email": "john@doe.com",
    "Phone": "00420123456789",
    "LoyaltyCode": null,
    "Notes": null,
    "IdentityCard": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    },
    "Passport": null,
    "Visa": null,
    "DriversLicense": null,
    "Address": {
        "Line1": "Astronautů 2",
        "Line2": "",
        "City": "Havířov",
        "PostalCode": "736 01",
        "CountryCode": "CZ",
        "CountrySubdivisionCode": null,
    },
    "ItalianDestinationCode": "1234567"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `OverwriteExisting` | bool | required | Whether an existing customer should be overwritten in case of duplicity. This applies only to basic personal information \(`Title`, `FirstName`, `LastName`, ...\). |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `Title` | string [Title](#title) | optional | Title prefix of the customer. |
| `Sex` | string [Sex](#Sex) | optional | Sex of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Email` | string | optional | Email address of the customer. |
| `Phone` | string | optional | Phone number of the customer \(possibly mobile\). |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional | Registration number of the customer's car. |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `IdentityCard` | [Document](#document) | optional | Identity card details of the customer. |
| `Passport` | [Document](#document) | optional | Passport details of the customer. |
| `Visa` | [Document](#document) | optional | Visa details of the customer. |
| `DriversLicense` | [Document](#document) | optional | Drivers license details of the customer. |
| `Address` | [Address parameters](#address-parameters) | optional | Address of the customer. |
| `Classifications` | array of [Customer classification](#customer-classification) | optional | Classifications of the customer. |
| `Options` | array of [Customer option](#customer-option) | optional | Options of the customer. |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |

#### Address parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Countryconfiguration.md#country). |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |

### Response

The created [Customer](#customer) or an existing [Customer](#customer) with the specified email.

## Update customer

Updates personal information of a customer. Note that if any of the fields is left blank, it won't clear the field in Mews. The field will be left intact. In case of email update, the email will change in Mews only if there is no other customer profile in the hotel with such email. Otherwise an error response is returned.

### Request

`[PlatformAddress]/api/connector/v1/customers/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
    "FirstName": "John",
    "LastName": "Smith",
    "SecondLastName": "the Second",
    "Title": "Mister",
    "Sex": "Male",
    "NationalityCode": "US",
    "BirthDate": "2000-01-01",
    "BirthPlace": "Prague, Czech Republic",
    "Email": "john.smith@gmail.com",
    "Phone": "00420123456789",
    "LoyaltyCode": null,
    "Notes": null,
    "IdentityCard": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    },
    "Passport": null,
    "Visa": null,
    "DriversLicense": null,
    "ItalianDestinationCode": {
        "Value": "7654321"
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |
| `FirstName` | string | optional | New first name. |
| `LastName` | string | optional | New last name. |
| `SecondLastName` | string | optional | New second last name. |
| `Title` | string [Title](#title) | optional | New title. |
| `Sex` | string [Sex](#sex) | optional | Sex of the customer. |
| `BirthDate` | string | optional | New birth date in ISO 8601 format. |
| `BithPlace` | string | optional | New birth place. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `Email` | string | optional | New email address. |
| `Phone` | string | optional | New phone number. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. Old value will be overwritten. |
| `CarRegistrationNumber` | string | optional | New registration number of the customer's car. |
| `TaxIdentificationNumber` | string | optional | New tax identification number of the customer. |
| `IdentityCard` | [Document](#document) | optional | New identity card details. |
| `Passport` | [Document](#document) | optional | New passport details. |
| `Visa` | [Document](#document) | optional | New visa details. |
| `DriversLicense` | [Document](#document) | optional | New drivers license details. |
| `Address` | [Address parameters](#address-parameters)  | optional | New address details. |
| `Classifications` | array of [Customer classification](#customer-classification) | optional | New classifications of the customer. |
| `Options` | array of [Customer option](#customer-option) | optional | Options of the customer. |
| `ItalianDestinationCode` | [String update value](#string-update-value) | optional | New Italian destination code of customer. |
| `ItalianFiscalCode` | [String update value](#string-update-value) | optional | New Italian fiscal code of customer. |

#### String update value

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | string | optional | Value which is to be updated. |

### Response

The updated [Customer](#customer).

## ~~Merge customers~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md), please use [Merge accounts](accounts.md#merge-accounts) instead.

Merges one customer to another. All entities attached to the source customer \(e.g. orders, bills\) are attached to the target customer. Profile information of the target customer are extended but not overwritten with profile information of the source customer.

### Request

`[PlatformAddress]/api/connector/v1/customers/merge`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "SourceCustomerId": "e11801ff-4148-4010-87f3-0d111e2893e3",
    "TargetCustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `SourceCustomerId` | string | required | Unique identifier of the source [Customer](#customer). |
| `TargetCustomerId` | string | required | Unique identifier of the target [Customer](#customer). |

### Response

```javascript
{}
```

## Add customer file

Attaches the specified file to the customer profile.

### Request

`[PlatformAddress]/api/connector/v1/customers/addFile`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "CustomerId": "49aaff6b-32d8-48f5-8234-ce875aefc508",
    "Name": "test.pdf",
    "Type": "application/pdf",
    "Data": "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |
| `Name` | string | required | Name of the file. |
| `Type` | string | required | MIME type of the file \(e.g. `application/pdf`\). |
| `Data` | string | required | Base64-encoded data of the file. |

### Response

```javascript
{}
```
