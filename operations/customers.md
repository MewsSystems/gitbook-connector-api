# Customers

## Get all customers

Returns all customers from the specified interval according to the time filter \(e.g. customers created in that interval\).

### Request

`[PlatformAddress]/api/connector/v1/customers/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "TimeFilter": "Created",
    "StartUtc": "2016-01-01T00:00:00Z",
    "EndUtc": "2016-01-07T00:00:00Z"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `TimeFilter` | string [Customer time filter](customers.md#customer-time-filter) | required | Time filter of the interval. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

#### Customer time filter

* `Created` - customer created within the interval.
* `Updated` - customer updated or created within the interval.

### Response

```javascript
{
    "Customers": [
        {
            "Address": null,
            "BirthDate": null,
            "BirthPlace": null,
            "CategoryId": null,
            "Classifications": [],
            "CreatedUtc": "2016-01-01T00:00:00Z",
            "Email": null,
            "FirstName": "John",
            "Gender": null,
            "Id": "35d4b117-4e60-44a3-9580-c582117eff98",
            "IdentityCard": null,
            "LanguageCode": null,
            "LastName": "Smith",
            "LoyaltyCode": null,
            "NationalityCode": "US",
            "Notes": "",
            "Options": [],
            "Number": "1",
            "Passport": null,
            "Phone": "00420123456789",
            "SecondLastName": null,
            "TaxIdentificationNumber": null,
            "Title": null,
            "UpdatedUtc": "2016-01-01T00:00:00Z",
            "Visa": null
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Customers` | array of [Customer](customers.md#customer) | required | The customers. |

#### Customer

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the customer. |
| `Number` | string | required | Number of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `Title` | string [Title](customers.md#title) | optional | Title prefix of the customer. |
| `Gender` | string [Gender](customers.md#gender) | optional | Gender of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](configuration.md#country). |
| `LanguageCode` | string | optional | Language and culture code of the customers preferred language. E.g. `en-US` or `fr-FR`. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Email` | string | optional | Email address of the customer. |
| `Phone` | string | optional | Phone number of the customer \(possibly mobile\). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `Classifications` | array of [Customer classification](customers.md#customer-classification) | required | Classifications of the customer. |
| `Options` | array of [Customer option](customers.md#customer-option) | required | Options of the customer. |
| `Passport` | [Document](customers.md#document) | optional | Passport details of the customer. |
| `IdentityCard` | [Document](customers.md#document) | optional | Identity card details of the customer. |
| `Visa` | [Document](customers.md#document) | optional | Visa details of the customer. |
| `DriversLicense ` | [Document](customers.md#document) | optional | Drivers license  details of the customer. |
| `Address` | [Address](configuration.md#address) | optional | Address of the customer. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |

#### Title

* `Mister`
* `Miss`
* `Misses`

#### Gender

* `Male`
* `Female`

#### Document

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Number` | string | optional | Number of the document \(e.g. passport number\). |
| `Expiration` | string | optional | Expiration date in ISO 8601 format. |
| `Issuance` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the [Country](configuration.md#country). |

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
* ...

#### Customer option

* `SendMarketingEmails`

## Get all customers by ids

Returns all customers with the specified ids.

### Request

`[PlatformAddress]/api/connector/v1/customers/getAllByIds`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Identifiers of [Customer](customers.md#customer)s. |

### Response

Same structure as in [Get all customers](customers.md#get-all-customers) operation.

## Get all customers by emails

Returns all customers with the specified emails.

### Request

`[PlatformAddress]/api/connector/v1/customers/getAllByEmails`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Emails": [
        "john@doe.com"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Emails` | array of string | required | Emails of the [Customer](customers.md#customer)s. |

### Response

Same structure as in [Get all customers](customers.md#get-all-customers) operation.

## Search customers

Searches for customers that are active at the moment in the enterprise \(e.g. companions of on checked-in reservations or paymasters\).

### Request

`[PlatformAddress]/api/connector/v1/customers/search`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Name": "Smith"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Name` | string | optional | Name to search by \(applies to first name, last name and full name\). |
| `SpaceId` | string | optional | Identifier of [Space](enterprises.md#space) to search by \(members of [Reservation](reservations.md#reservation) assigned there will be returned\). |

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
                "Gender": null,
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

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Customers` | array of [Customer search result](customers.md#customer-search-result) | required | The customer search results. |

#### Customer search result

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Customer` | [Customer](customers.md#customer) | required | The found customer. |
| `Reservation` | [Reservation](reservations.md#reservation) | optional | Reservation of the customer in case he currently stays in the enterprise. |

## Get customers open items

Returns all open items of the specified customers, i.e. all unpaid items and all deposited payments. Sum of the open items is the balance of the customer. If the `Currency` is specified, costs of the items are converted to that currency.

### Request

`[PlatformAddress]/api/connector/v1/customers/getOpenItems`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "2a1a4315-7e6f-4131-af21-402cec59b8b9"
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Unique identifiers of the [Customer](customers.md#customer)s. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](configuration.md#currency) the item costs should be converted to. |

### Response

```javascript
{
    "Customers": [
        {
            "CustomerId": "2a1a4315-7e6f-4131-af21-402cec59b8b9",
            "Items": [
                {
                    "AccountingCategoryId": "12345678-7e6f-4131-af21-402cec59b8b9",
                    "Amount": {
                        "Currency": "EUR",
                        "Net": null,
                        "Tax": null,
                        "TaxRate": null,
                        "Value": -100
                    },
                    "BillId": null,
                    "ClosedUtc": null,
                    "ConsumptionUtc": "2016-05-25T15:56:54Z",
                    "CustomerId": "2a1a4315-7e6f-4131-af21-402cec59b8b9",
                    "Id": "79aa7645-fe3a-4e9e-9311-e11df4686fca",
                    "InvoiceId": null,
                    "Name": "Cash Payment EUR",
                    "Notes": null,
                    "OrderId": null,
                    "ProductId": null,
                    "ServiceId": null,
                    "Type": "Payment"
                }
            ]
        }
    ]
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `Customers` | array of [Customer items](customers.md#customer-items) | required | The customers with their items. |

#### Customer items

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `Items` | array of [Accounting item](finance.md#accounting-item) | required | The open items. |

## Add customer

Adds a new customer to the system and returns details of the added customer. If a customer with the specified email already exists, and `OverwriteExisting` is set to `true`, then the existing customer profile information is overwritten and the existing customer data returned. If `OverwriteExisting` is set to `false`, an error response is returned.

### Request

`[PlatformAddress]/api/connector/v1/customers/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "OverwriteExisting": false,
    "FirstName": "John",
    "LastName": "Doe",
    "SecondLastName": "the Second",
    "Title": "Mister",
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
    "Passport": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    },
    "Visa": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    },
    "DriversLicense": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `OverwriteExisting` | bool | required | Whether an existing customer should be overwritten in case of duplicity. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `Title` | string [Title](customers.md#title) | optional | Title prefix of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](configuration.md#country). |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Email` | string | optional | Email address of the customer. |
| `Phone` | string | optional | Phone number of the customer \(possibly mobile\). |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `IdentityCard` | [Document](customers.md#document) | optional | Identity card details of the customer. |
| `Passport` | [Document](customers.md#document) | optional | Passport details of the customer. |
| `Visa` | [Document](customers.md#document) | optional | Visa details of the customer. |
| `DriversLicense` | [Document](customers.md#document) | optional | Drivers license details of the customer. |
| `Address` | [Address](configuration.md#address) | optional | Address of the customer. |
| `Classifications` | array of [Customer classification](customers.md#customer-classification) | optional | Classifications of the customer. |

### Response

The created [Customer](customers.md#customer) or an existing [Customer](customers.md#customer) with the specified email.

## Update customer

Updates personal information of a customer. Note that if any of the fields is left blank, it won't clear the field in Mews. The field will be left intact. In case of email update, the email will change in Mews only if there is no other customer profile in the hotel with such email. Otherwise an error response is returned.

### Request

`[PlatformAddress]/api/connector/v1/customers/update`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
    "FirstName": "John",
    "LastName": "Smith",
    "SecondLastName": "the Second",
    "Title": "Mister",
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
    "Passport": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    },
    "Visa": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    },
    "DriversLicense": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    }
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `FirstName` | string | optional | New first name. |
| `LastName` | string | optional | New last name. |
| `SecondLastName` | string | optional | New second last name. |
| `Title` | string [Title](customers.md#title) | optional | New title. |
| `BirthDate` | string | optional | New birth date in ISO 8601 format. |
| `BithPlace` | string | optional | New birth place. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](configuration.md#country). |
| `Email` | string | optional | New email address. |
| `Phone` | string | optional | New phone number. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `IdentityCard` | [Document](customers.md#document) | optional | New identity card details. |
| `Passport` | [Document](customers.md#document) | optional | New passport details. |
| `Visa` | [Document](customers.md#document) | optional | New visa details. |
| `DriversLicense` | [Document](customers.md#document) | optional | New drivers license details. |
| `Address` | [Address](configuration.md#address) | optional | New address details. |
| `Classifications` | array of [Customer classification](customers.md#customer-classification) | optional | New classifications of the customer. |

### Response

The updated [Customer](customers.md#customer).

## Merge customers

Merges one customer to another. All entities attached to the source customer \(e.g. orders, bills\) are attached to the target customer. Profile information of the target customer are extended but not overwritten with profile information of the source customer.

### Request

`[PlatformAddress]/api/connector/v1/customers/merge`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "SourceCustomerId": "e11801ff-4148-4010-87f3-0d111e2893e3",
    "TargetCustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `SourceCustomerId` | string | required | Unique identifier of the source [Customer](customers.md#customer). |
| `TargetCustomerId` | string | required | Unique identifier of the target [Customer](customers.md#customer). |

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
    "CustomerId": "49aaff6b-32d8-48f5-8234-ce875aefc508",
    "Name": "test.pdf",
    "Type": "application/pdf",
    "Data": "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G"
}
```

| Property | Type |  | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `Name` | string | required | Name of the file. |
| `Type` | string | required | MIME type of the file \(e.g. `application/pdf`\). |
| `Data` | string | required | Base64-encoded data of the file. |

### Response

```javascript
{}
```

