# Customers

## Get all customers

Returns all customers filtered by identifiers, emails, names and other filters.
Note this operation uses [Pagination](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/) and supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/customers/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainIds": [
    "1df21f06-0cfc-4960-9c58-a3bf1261663e",
    "5fcd1933-22f2-40b9-84da-7db04cbecec2"
  ],
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
  "Extent": {
    "Customers": "true",
    "Documents": "true",
    "Addresses": "false"
  },
  "Limitation": {
    "Count": 10
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
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ChainIds` | array of string | optional |  |
| `Extent` | object | required | Extent of data to be returned. |
| ~~`TimeFilter`~~ | string | optional |  |
| ~~`StartUtc`~~ | string | optional |  |
| ~~`EndUtc`~~ | string | optional |  |
| `DeletedUtc` | [Time interval](_objects.md#time-interval) | required |  |
| `ActivityStates` | array of [ActivityStates](#X-Ref-Name-ActivityStates) | optional | Whether to return only active, only deleted or both records. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of [Customers](https://mews-systems.gitbook.io/connector-api/operations/#customer). Required if no other filter is provided. |
| `Emails` | array of string | optional, max 1000 items | Emails of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `FirstNames` | array of string | optional, max 1000 items | First names of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `LastNames` | array of string | optional, max 1000 items | Last names of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `LoyaltyCodes` | array of string | optional, max 1000 items | Loyalty codes of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### CustomerExtent
Extent of data to be returned.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | boolean | required |  |
| `Documents` | boolean | required |  |
| `Addresses` | boolean | required |  |

#### ActivityStates

- `Deleted`
- `Active`

#### ActivityStates

- `Deleted`
- `Active`

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
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
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
      "IssuingCountryCode": "CZ",
      "IssuingCity": "Prague"
    }
  ],
  "Cursor": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer](#Customer) | optional | The customers. |
| `Documents` | array of [Document](#Document) | optional | The identity documents of customers. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest customer item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older customers. If [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

#### Customer

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the customer. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Number` | string | optional | Number of the customer. |
| `Title` | string | optional | Title prefix of the customer. |
| `Sex` | string | optional | Sex of the customer. |
| ~~`Gender`~~ | string | optional |  |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `LanguageCode` | string | optional | Language and culture code of the customers preferred language. E.g. en-US or fr-FR. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `CitizenNumber` | string | optional |  |
| `MotherName` | string | optional |  |
| `FatherName` | string | optional |  |
| `Occupation` | string | optional |  |
| `Email` | string | optional | Email address of the customer. |
| `HasOtaEmail` | boolean | required |  |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional | Registration number of the customer&#x27;s car. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `Passport` | object | required |  |
| `IdentityCard` | object | required |  |
| `Visa` | object | required |  |
| `DriversLicense` | object | required |  |
| `Address` | object | required | Address of the customer. |
| `AddressId` | string | optional |  |
| `Classifications` | array of string | required | Classifications of the customer. |
| `Options` | array of string | required | Options of the customer. |
| ~~`CategoryId`~~ | string | optional |  |
| ~~`BirthDateUtc`~~ | string | optional |  |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| `CompanyId` | string | optional | Unique identifier of [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) the customer is associated with. |
| `MergeTargetId` | string | optional | Unique identifier of the account ([Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer)) to which this customer is linked. |
| `ActivityState` | string | required | [Activity State](https://mews-systems.gitbook.io/connector-api/operations/#activity-state) of customer record, i.e. whether active or deleted. |
| `IsUpdatedByMe` | boolean | optional |  |

#### Document

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the document. |
| `CustomerId` | string | required | Identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `Type` | string | optional | Type of the document. |
| `Number` | string | optional | Number of the document (e.g. passport number). |
| `Expiration` | string | optional | Expiration date in ISO 8601 format. |
| `Issuance` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `IssuingCity` | string | optional | City from which document issued |
| ~~`ExpirationUtc`~~ | string | optional |  |
| ~~`IssuanceUtc`~~ | string | optional |  |

#### OldAddress
Address of the customer.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `CountryCode` | string | optional |  |
| `CountrySubdivisionCode` | string | optional |  |
| `Latitude` | number | optional |  |
| `Longitude` | number | optional |  |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/getAllByIds`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CustomerIds": [
    "e98995b0-140a-4208-bbeb-b77f2c43d6ee"
  ]
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
| `CustomerIds` | array of string | required, max 1000 items | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer). |

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
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
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
      "IssuingCountryCode": "CZ",
      "IssuingCity": "Prague"
    }
  ],
  "Cursor": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer](#Customer) | optional | The customers. |
| `Documents` | array of [Document](#Document) | optional | The identity documents of customers. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest customer item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older customers. If [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/getAllByEmails`

```javascript
{
  "Client": "string",
  "LanguageCode": "string",
  "CultureCode": "string",
  "AccessToken": "string",
  "ClientToken": "string",
  "Emails": [
    "string"
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required |  |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required |  |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required |  |
| `MaskedClientToken` | string | optional |  |
| `Emails` | array of string | optional |  |

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
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
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
      "IssuingCountryCode": "CZ",
      "IssuingCity": "Prague"
    }
  ],
  "Cursor": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer](#Customer) | optional | The customers. |
| `Documents` | array of [Document](#Document) | optional | The identity documents of customers. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest customer item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older customers. If [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

## ~~undefined~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/getAllByName`

```javascript
{
  "Client": "string",
  "LanguageCode": "string",
  "CultureCode": "string",
  "AccessToken": "string",
  "ClientToken": "string",
  "FirstName": "string",
  "LastName": "string"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Client` | string | required |  |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required |  |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required |  |
| `MaskedClientToken` | string | optional |  |
| `FirstName` | string | optional |  |
| `LastName` | string | optional |  |

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
      "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
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
      "IssuingCountryCode": "CZ",
      "IssuingCity": "Prague"
    }
  ],
  "Cursor": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer](#Customer) | optional | The customers. |
| `Documents` | array of [Document](#Document) | optional | The identity documents of customers. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest customer item returned. This can be used in [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) in a subsequent request to fetch the next batch of older customers. If [Limitation](https://mews-systems.gitbook.io/connector-api/guidelines/pagination/#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |

## ~~Get customers open items~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

Use payments/getAll and orderItems/getAll

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `CustomerIds` | array of string | required, max 1000 items | Unique identifiers of the [Customers](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `Currency` | string | optional | ISO-4217 code of the [Currency](https://mews-systems.gitbook.io/connector-api/operations/currencies/#currency) the item costs should be converted to. |

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
            "NetValue": -5,
            "GrossValue": -5,
            "TaxValues": [
              {
                "Code": "UK-Z",
                "Value": 0
              }
            ],
            "Breakdown": {
              "Items": [
                {
                  "TaxRateCode": "UK-Z",
                  "NetValue": -5,
                  "TaxValue": 0
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
| `Customers` | array of [Customer items](#CustomerItems) | optional | The customers with their items. |

#### Customer items

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `Items` | array of [AccountingItem](#AccountingItem) | optional |  |
| `OrderItems` | array of [Order item](#OrderItemOld) | optional | The open order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](#PaymentItemOld) | optional | The open payment items (such as cash, credit card payments or invoices). |

#### AccountingItem

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `AccountId` | string | required |  |
| ~~`CustomerId`~~ | string | optional |  |
| `OrderId` | string | optional |  |
| `ServiceId` | string | optional |  |
| `ProductId` | string | optional |  |
| `BillId` | string | optional |  |
| `InvoiceId` | string | optional |  |
| `AccountingCategoryId` | string | optional |  |
| `CreditCardId` | string | optional |  |
| `Type` | string | optional |  |
| `SubType` | string | optional |  |
| `Name` | string | optional |  |
| `Notes` | string | optional |  |
| `ConsumptionUtc` | string | optional |  |
| `ClosedUtc` | string | optional |  |
| `State` | string | optional |  |
| `SubState` | string | optional |  |
| `Amount` | object | required | Price representing price of the product. |

#### ExtendedAmount
Price representing price of the product.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |
| `Value` | number | optional |  |
| `Net` | number | optional |  |
| `Tax` | number | optional |  |
| `TaxRate` | number | optional |  |

#### TaxValue

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Code` | string | optional |  |
| `Value` | number | required |  |

#### TaxBreakdown

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Items` | array of [TaxBreakdownItem](#TaxBreakdownItem) | optional |  |

#### TaxBreakdownItem

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `TaxRateCode` | string | optional |  |
| `NetValue` | number | required |  |
| `TaxValue` | number | required |  |

#### Order item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer)) the item belongs to. |
| `OrderId` | string | required | Unique identifier of the order (or [Reservation](https://mews-systems.gitbook.io/connector-api/operations/reservations/#reservation-ver-2023-06-06) which is a special type of order) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category) the item belongs to. |
| `UnitCount` | integer | required | Unit count of item, i.e. the number of sub-items or units, if applicable. |
| `UnitAmount` | object | required | Value of the preauthorization. |
| `Amount` | object | required | Price representing price of the product. |
| `OriginalAmount` | object | required | Price representing price of the product. |
| `RevenueType` | string | optional | Revenue type of the item. |
| `CreatorProfileId` | string | required |  |
| `UpdaterProfileId` | string | required |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `CanceledUtc` | string | optional |  |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `StartUtc` | string | optional |  |
| `AccountingState` | string | optional | Accounting state of the item. |
| `Data` | object | required | Additional data specific to particular order item. |

#### Amount
Value of the preauthorization.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | optional |  |
| `NetValue` | number | required |  |
| `GrossValue` | number | required |  |
| `TaxValues` | array of [TaxValue](#TaxValue) | optional |  |
| `Breakdown` | object | required |  |

#### Data
Additional data specific to particular order item.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [OrderItemTypeOld](#X-Ref-Name-OrderItemTypeOld) | required |  |
| `value` | undefined | required |  |

#### OrderItemTypeOld

- `CancellationFee`
- `Rebate`
- `Deposit`
- `ExchangeRateDifference`
- `CustomItem`
- `Surcharge`
- `SurchargeDiscount`
- `SpaceOrder`
- `ProductOrder`
- `Other`
- `TaxCorrection`
- `ResourceUpgradeFee`
- `InvoiceFee`

#### OrderItemTypeOld

- `CancellationFee`
- `Rebate`
- `Deposit`
- `ExchangeRateDifference`
- `CustomItem`
- `Surcharge`
- `SurchargeDiscount`
- `SpaceOrder`
- `ProductOrder`
- `Other`
- `TaxCorrection`
- `ResourceUpgradeFee`
- `InvoiceFee`

#### Payment item

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the item. |
| `AccountId` | string | required | Unique identifier of the account (for example [Customer](https://mews-systems.gitbook.io/connector-api/operations/customers/#customer)) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the [Bill](https://mews-systems.gitbook.io/connector-api/operations/bills/#bill) the item is assigned to. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](https://mews-systems.gitbook.io/connector-api/operations/accountingcategories/#accounting-category) the item belongs to. |
| `Amount` | object | required | Price representing price of the product. |
| `OriginalAmount` | object | required | Price representing price of the product. |
| `AmountDefault` | object | required | Price representing price of the product. |
| `Notes` | string | optional | Additional notes. |
| `SettlementId` | string | optional | Identifier of the settled payment from the external system (ApplePay/GooglePay). |
| `ConsumedUtc` | string | optional | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |
| `AccountingState` | string | optional | Accounting state of the item. |
| `State` | string | optional | Payment state of the item. |
| `Identifier` | string | optional |  |
| `Data` | object | required | Additional data specific to particular payment item. |

#### Data
Additional data specific to particular payment item.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `discriminator` | [PaymentType](#X-Ref-Name-PaymentType) | required |  |
| `value` | undefined | required |  |

#### PaymentType

- `CreditCard`
- `Invoice`
- `Cash`
- `Unspecified`
- `BadDebts`
- `WireTransfer`
- `ExchangeRateDifference`
- `ExchangeRoundingDifference`
- `BankCharges`
- `Cheque`
- `Other`

#### PaymentType

- `CreditCard`
- `Invoice`
- `Cash`
- `Unspecified`
- `BadDebts`
- `WireTransfer`
- `ExchangeRateDifference`
- `ExchangeRoundingDifference`
- `BankCharges`
- `Cheque`
- `Other`

## Add customer

Adds a new customer to the system and returns details of the added customer. If a customer with the specified email already exists, and &#x60;OverwriteExisting&#x60; is set to &#x60;true&#x60;, then the existing customer profile information is overwritten and the existing customer data returned. If &#x60;OverwriteExisting&#x60; is set to &#x60;false&#x60;, an error response is returned. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/customers/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
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
    "IssuingCountryCode": "US",
    "IssuingCity": "Seattle"
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
    "CountrySubdivisionCode": null
  },
  "ItalianDestinationCode": "1234567"
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
| `Title` | string | optional | Title prefix of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | optional | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `Sex` | [Sex](#X-Ref-Name-Sex) | required | Sex of the customer. |
| ~~`Gender`~~ | string | optional |  |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Occupation` | string | optional |  |
| `Email` | string | optional | Email address of the customer. |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional | Registration number of the customer&#x27;s car. |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `CompanyId` | string | optional |  |
| `Address` | object | required | New address details. |
| `IdentityCard` | object | required | New drivers license details. |
| `Passport` | object | required | New drivers license details. |
| `Visa` | object | required | New drivers license details. |
| `DriversLicense` | object | required | New drivers license details. |
| `Classifications` | array of string | optional | Classifications of the customer. |
| `Options` | array of string | optional | Options of the customer. |
| ~~`BirthDateUtc`~~ | string | optional |  |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `OverwriteExisting` | boolean | required | Whether an existing customer should be overwritten in case of duplicity. This applies only to basic personal information (Title, FirstName, LastName, ...). |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |

#### Sex

- `Male`
- `Female`

#### AddressParameters
New address details.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Line1` | string | optional |  |
| `Line2` | string | optional |  |
| `City` | string | optional |  |
| `PostalCode` | string | optional |  |
| `CountryCode` | string | optional |  |
| `CountrySubdivisionCode` | string | optional |  |

#### DocumentParameters
New drivers license details.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Number` | string | optional |  |
| `Expiration` | string | optional |  |
| `Issuance` | string | optional |  |
| `IssuingCountryCode` | string | optional |  |
| `IssuingCity` | string | optional |  |
| ~~`ExpirationUtc`~~ | string | optional |  |
| ~~`IssuanceUtc`~~ | string | optional |  |

### Response

```javascript
{
  "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Number": "string",
  "Title": "string",
  "Sex": "string",
  "FirstName": "string",
  "LastName": "string",
  "SecondLastName": "string",
  "NationalityCode": "string",
  "LanguageCode": "string",
  "BirthDate": "string",
  "BirthPlace": "string",
  "CitizenNumber": "string",
  "MotherName": "string",
  "FatherName": "string",
  "Occupation": "string",
  "Email": "string",
  "HasOtaEmail": true,
  "Phone": "string",
  "TaxIdentificationNumber": "string",
  "LoyaltyCode": "string",
  "AccountingCode": "string",
  "BillingCode": "string",
  "Notes": "string",
  "CarRegistrationNumber": "string",
  "CreatedUtc": "2024-04-11T08:54:47.193Z",
  "UpdatedUtc": "2024-04-11T08:54:47.193Z",
  "Passport": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Type": "string",
    "Number": "string",
    "Expiration": "string",
    "Issuance": "string",
    "IssuingCountryCode": "string",
    "IssuingCity": "string"
  },
  "IdentityCard": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Type": "string",
    "Number": "string",
    "Expiration": "string",
    "Issuance": "string",
    "IssuingCountryCode": "string",
    "IssuingCity": "string"
  },
  "Visa": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Type": "string",
    "Number": "string",
    "Expiration": "string",
    "Issuance": "string",
    "IssuingCountryCode": "string",
    "IssuingCity": "string"
  },
  "DriversLicense": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Type": "string",
    "Number": "string",
    "Expiration": "string",
    "Issuance": "string",
    "IssuingCountryCode": "string",
    "IssuingCity": "string"
  },
  "Address": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Line1": "string",
    "Line2": "string",
    "City": "string",
    "PostalCode": "string",
    "CountryCode": "string",
    "CountrySubdivisionCode": "string",
    "Latitude": 0,
    "Longitude": 0
  },
  "AddressId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Classifications": [
    "string"
  ],
  "Options": [
    "string"
  ],
  "ItalianDestinationCode": "string",
  "ItalianFiscalCode": "string",
  "CompanyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "MergeTargetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ActivityState": "string",
  "IsUpdatedByMe": true
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the customer. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Number` | string | optional | Number of the customer. |
| `Title` | string | optional | Title prefix of the customer. |
| `Sex` | string | optional | Sex of the customer. |
| ~~`Gender`~~ | string | optional |  |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `LanguageCode` | string | optional | Language and culture code of the customers preferred language. E.g. en-US or fr-FR. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `CitizenNumber` | string | optional |  |
| `MotherName` | string | optional |  |
| `FatherName` | string | optional |  |
| `Occupation` | string | optional |  |
| `Email` | string | optional | Email address of the customer. |
| `HasOtaEmail` | boolean | required |  |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional | Registration number of the customer&#x27;s car. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `Passport` | object | required |  |
| `IdentityCard` | object | required |  |
| `Visa` | object | required |  |
| `DriversLicense` | object | required |  |
| `Address` | object | required | Address of the customer. |
| `AddressId` | string | optional |  |
| `Classifications` | array of string | required | Classifications of the customer. |
| `Options` | array of string | required | Options of the customer. |
| ~~`CategoryId`~~ | string | optional |  |
| ~~`BirthDateUtc`~~ | string | optional |  |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| `CompanyId` | string | optional | Unique identifier of [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) the customer is associated with. |
| `MergeTargetId` | string | optional | Unique identifier of the account ([Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer)) to which this customer is linked. |
| `ActivityState` | string | required | [Activity State](https://mews-systems.gitbook.io/connector-api/operations/#activity-state) of customer record, i.e. whether active or deleted. |
| `IsUpdatedByMe` | boolean | optional |  |

## Search customers

Searches for customers that are active at the moment in the enterprise (e.g. companions of checked-in reservations or paymasters).

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `Operator` | [SearchOperator](#X-Ref-Name-SearchOperator) | required |  |
| `Name` | string | optional | Name to search by (applies to first name, last name and full name). |
| `ResourceId` | string | optional | Identifier of [Resource](https://mews-systems.gitbook.io/connector-api/operations/resources/#resource) to search by (members of reservation assigned there will be returned). |
| `Extent` | object | required | Extent of data to be returned. |
| ~~`RoomNumber`~~ | string | optional |  |

#### SearchOperator

- `And`
- `Or`

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
| `Customers` | array of [ChargeableCustomer](#ChargeableCustomer) | optional | The customer search results. |
| `Documents` | array of [Document](#Document) | optional |  |

#### ChargeableCustomer

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customer` | object | required |  |
| `Reservation` | object | required | The added reservation. |
| `Id` | string | required |  |
| `FirstName` | string | optional |  |
| `LastName` | string | optional |  |
| ~~`RoomNumber`~~ | string | optional |  |
| `ResourceName` | string | optional |  |

#### ReservationOld
The added reservation.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required |  |
| `ServiceId` | string | required |  |
| `GroupId` | string | required |  |
| `Number` | string | optional |  |
| `ChannelNumber` | string | optional |  |
| `ChannelManagerNumber` | string | optional |  |
| `ChannelManagerGroupNumber` | string | optional |  |
| `ChannelManager` | string | optional |  |
| `State` | string | optional |  |
| `Origin` | string | optional |  |
| `OriginDetails` | string | optional |  |
| `Purpose` | string | optional |  |
| `CreatedUtc` | string | optional |  |
| `UpdatedUtc` | string | optional |  |
| `CancelledUtc` | string | optional |  |
| `StartUtc` | string | optional |  |
| `EndUtc` | string | optional |  |
| `ReleasedUtc` | string | optional |  |
| `RequestedCategoryId` | string | required |  |
| ~~`AssignedSpaceId`~~ | string | optional |  |
| `AssignedResourceId` | string | optional |  |
| ~~`AssignedSpaceLocked`~~ | boolean | required |  |
| `AssignedResourceLocked` | boolean | required |  |
| `BusinessSegmentId` | string | optional |  |
| `CompanyId` | string | optional |  |
| `TravelAgencyId` | string | optional |  |
| `AvailabilityBlockId` | string | optional |  |
| `RateId` | string | required |  |
| `VoucherId` | string | optional |  |
| `CreditCardId` | string | optional |  |
| `CancellationReason` | string | optional |  |
| ~~`AdultCount`~~ | integer | required |  |
| ~~`ChildCount`~~ | integer | required |  |
| `PersonCounts` | array of [PersonCount](#PersonCount) | optional |  |
| `OwnerId` | string | required |  |
| ~~`CustomerId`~~ | string | optional |  |
| `BookerId` | string | optional |  |
| ~~`CompanionIds`~~ | array of string | optional |  |
| ~~`ChannelManagerId`~~ | string | optional |  |
| `Options` | object | required |  |

#### PersonCount

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AgeCategoryId` | string | required |  |
| `Count` | integer | required |  |

#### ReservationOptions

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `OwnerCheckedIn` | boolean | required |  |
| `AllCompanionsCheckedIn` | boolean | required |  |
| `AnyCompanionCheckedIn` | boolean | required |  |

## Update customer

Updates personal information of a customer. Note that if any of the fields is left blank, it won&#x27;t clear the field in Mews. The field will be left intact. In case of email update, the email will change in Mews only if there is no other customer profile in the hotel with such email. Otherwise an error response is returned. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/customers/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
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
    "IssuingCountryCode": "US",
    "IssuingCity": "Seattle"
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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `Title` | string | optional | New title. |
| `FirstName` | string | optional | New first name. |
| `LastName` | string | optional | New last name. |
| `SecondLastName` | string | optional | New second last name. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `Sex` | [Sex](#X-Ref-Name-Sex) | required | Sex of the customer. |
| ~~`Gender`~~ | string | optional |  |
| `BirthDate` | string | optional | New birth date in ISO 8601 format. |
| `BirthPlace` | string | optional |  |
| `Occupation` | string | optional |  |
| `Email` | string | optional | New email address. |
| `Phone` | string | optional | New phone number. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. Old value will be overwritten. |
| `CarRegistrationNumber` | string | optional | New registration number of the customer&#x27;s car. |
| `TaxIdentificationNumber` | string | optional | New tax identification number of the customer. |
| `CompanyId` | string | optional |  |
| `Address` | object | required | New address details. |
| `IdentityCard` | object | required | New drivers license details. |
| `Passport` | object | required | New drivers license details. |
| `Visa` | object | required | New drivers license details. |
| `DriversLicense` | object | required | New drivers license details. |
| `Classifications` | array of string | optional | New classifications of the customer. |
| `Options` | array of string | optional | Options of the customer. |
| ~~`BirthDateUtc`~~ | string | optional |  |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `ItalianDestinationCode` | object | required |  |
| `ItalianFiscalCode` | object | required |  |

### Response

```javascript
{
  "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Number": "string",
  "Title": "string",
  "Sex": "string",
  "FirstName": "string",
  "LastName": "string",
  "SecondLastName": "string",
  "NationalityCode": "string",
  "LanguageCode": "string",
  "BirthDate": "string",
  "BirthPlace": "string",
  "CitizenNumber": "string",
  "MotherName": "string",
  "FatherName": "string",
  "Occupation": "string",
  "Email": "string",
  "HasOtaEmail": true,
  "Phone": "string",
  "TaxIdentificationNumber": "string",
  "LoyaltyCode": "string",
  "AccountingCode": "string",
  "BillingCode": "string",
  "Notes": "string",
  "CarRegistrationNumber": "string",
  "CreatedUtc": "2024-04-11T08:54:47.193Z",
  "UpdatedUtc": "2024-04-11T08:54:47.193Z",
  "Passport": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Type": "string",
    "Number": "string",
    "Expiration": "string",
    "Issuance": "string",
    "IssuingCountryCode": "string",
    "IssuingCity": "string"
  },
  "IdentityCard": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Type": "string",
    "Number": "string",
    "Expiration": "string",
    "Issuance": "string",
    "IssuingCountryCode": "string",
    "IssuingCity": "string"
  },
  "Visa": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Type": "string",
    "Number": "string",
    "Expiration": "string",
    "Issuance": "string",
    "IssuingCountryCode": "string",
    "IssuingCity": "string"
  },
  "DriversLicense": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Type": "string",
    "Number": "string",
    "Expiration": "string",
    "Issuance": "string",
    "IssuingCountryCode": "string",
    "IssuingCity": "string"
  },
  "Address": {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Line1": "string",
    "Line2": "string",
    "City": "string",
    "PostalCode": "string",
    "CountryCode": "string",
    "CountrySubdivisionCode": "string",
    "Latitude": 0,
    "Longitude": 0
  },
  "AddressId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Classifications": [
    "string"
  ],
  "Options": [
    "string"
  ],
  "ItalianDestinationCode": "string",
  "ItalianFiscalCode": "string",
  "CompanyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "MergeTargetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "ActivityState": "string",
  "IsUpdatedByMe": true
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the customer. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Number` | string | optional | Number of the customer. |
| `Title` | string | optional | Title prefix of the customer. |
| `Sex` | string | optional | Sex of the customer. |
| ~~`Gender`~~ | string | optional |  |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](https://mews-systems.gitbook.io/connector-api/operations/countries/#country). |
| `LanguageCode` | string | optional | Language and culture code of the customers preferred language. E.g. en-US or fr-FR. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `CitizenNumber` | string | optional |  |
| `MotherName` | string | optional |  |
| `FatherName` | string | optional |  |
| `Occupation` | string | optional |  |
| `Email` | string | optional | Email address of the customer. |
| `HasOtaEmail` | boolean | required |  |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional | Registration number of the customer&#x27;s car. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `Passport` | object | required |  |
| `IdentityCard` | object | required |  |
| `Visa` | object | required |  |
| `DriversLicense` | object | required |  |
| `Address` | object | required | Address of the customer. |
| `AddressId` | string | optional |  |
| `Classifications` | array of string | required | Classifications of the customer. |
| `Options` | array of string | required | Options of the customer. |
| ~~`CategoryId`~~ | string | optional |  |
| ~~`BirthDateUtc`~~ | string | optional |  |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| `CompanyId` | string | optional | Unique identifier of [Company](https://mews-systems.gitbook.io/connector-api/operations/companies/#company) the customer is associated with. |
| `MergeTargetId` | string | optional | Unique identifier of the account ([Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer)) to which this customer is linked. |
| `ActivityState` | string | required | [Activity State](https://mews-systems.gitbook.io/connector-api/operations/#activity-state) of customer record, i.e. whether active or deleted. |
| `IsUpdatedByMe` | boolean | optional |  |

## ~~Merge customers~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md).

Use accounts/merge instead.

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
| `Client` | string | required | Name and version of the client application. |
| `LanguageCode` | string | optional |  |
| `CultureCode` | string | optional |  |
| `AccessToken` | string | required | Access token of the client application. |
| `MaskedAccessToken` | string | optional |  |
| `ClientToken` | string | required | Token identifying the client application. |
| `MaskedClientToken` | string | optional |  |
| `SourceCustomerId` | string | required | Unique identifier of the source [Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `TargetCustomerId` | string | required | Unique identifier of the target [Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer). |

### Response

```javascript
{}
```

## Add customer file

Attaches the specified file to the customer profile. Note this operation supports [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/).

### Request

`[PlatformAddress]/api/connector/v1/customers/addFile`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CustomerId": "49aaff6b-32d8-48f5-8234-ce875aefc508",
  "ChainId": "1df21f06-0cfc-4960-9c58-a3bf1261663e",
  "Name": "test.pdf",
  "Type": "application/pdf",
  "Data": "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G"
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
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](https://mews-systems.gitbook.io/connector-api/guidelines/multi-property/), ignored otherwise. |
| `CustomerId` | string | required | Unique identifier of the [Customer](https://mews-systems.gitbook.io/connector-api/operations/#customer). |
| `Name` | string | required | Name of the file. |
| `Type` | string | required | MIME type of the file (e.g. application/pdf). |
| `Data` | string | required | Base64-encoded data of the file. |

### Response

```javascript
{}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FileId` | string | required |  |
