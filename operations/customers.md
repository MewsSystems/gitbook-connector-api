<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Customers

## Get all customers

Returns all customers filtered by identifiers, emails, names and other filters.
Note this operation uses [Pagination](../guidelines/pagination.md) and supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/getAll`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "5fcd1933-22f2-40b9-84da-7db04cbecec2"
  ],
  "CreatedUtc": {
    "StartUtc": "2018-01-01T00:00:00Z",
    "EndUtc": "2018-01-30T00:00:00Z"
  },
  "UpdatedUtc": {
    "StartUtc": "2018-01-02T00:00:00Z",
    "EndUtc": "2018-01-30T00:00:00Z"
  },
  "Extent": {
    "Customers": true,
    "Documents": false,
    "Addresses": false
  },
  "ActivityStates": [
    "Active"
  ],
  "CustomerIds": [
    "fadd5bb6-b428-45d5-94f8-fd0d89fece6d"
  ],
  "CompanyIds": [
    "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f"
  ],
  "Emails": [
    "j.smith@example.com"
  ],
  "FirstNames": [
    "John",
    "Jane"
  ],
  "LastNames": [
    "Doe",
    "Smith"
  ],
  "LoyaltyCodes": [
    "LL810213"
  ],
  "Limitation": {
    "Count": 10
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainIds` | array of string | optional, max 1000 items | Unique identifiers of the chains. Required when using Portfolio Access Tokens, ignored otherwise. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which Customer was created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which Customer was updated. |
| `Extent` | [Customer extent](customers.md#customer-extent) | required | Extent of data to be returned. |
| `DeletedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which Customer was deleted. `ActivityStates` value `Deleted` should be provided with this filter to get expected results. |
| `ActivityStates` | array of [Activity state](_objects.md#activity-state) | optional | Whether to return only active, only deleted or both records. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of Customers. Required if no other filter is provided. |
| `CompanyIds` | array of string | optional, max 1 item | Unique identifier of the Company the customer is associated with. |
| `Emails` | array of string | optional, max 1000 items | Emails of the [Customers](customers.md#customer). |
| `FirstNames` | array of string | optional, max 1000 items | First names of the [Customers](customers.md#customer). |
| `LastNames` | array of string | optional, max 1000 items | Last names of the [Customers](customers.md#customer). |
| `LoyaltyCodes` | array of string | optional, max 1000 items | Loyalty codes of the [Customers](customers.md#customer). |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned. |

#### Customer extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | boolean | optional | Whether the response should contain information about customers. |
| `Addresses` | boolean | optional | Whether the response should contain addresses of customers. |
| ~~`Documents`~~ | ~~boolean~~ | ~~optional~~ | ~~Whether the response should contain identity documents of customers.~~ **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) instead.|

### Response

```javascript
{
  "Customers": [
    {
      "Id": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
      "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "Number": "12345",
      "Title": "Mister",
      "Sex": "Male",
      "FirstName": "John",
      "LastName": "Smith",
      "SecondLastName": "Williams",
      "NationalityCode": "US",
      "PreferredLanguageCode": "en-GB",
      "LanguageCode": "en-US",
      "BirthDate": "1983-12-31",
      "BirthPlace": "New York City, NY",
      "Occupation": "Carpenter",
      "Email": "j.smith@example.com",
      "HasOtaEmail": false,
      "Phone": "00420123456789",
      "TaxIdentificationNumber": "123456789",
      "LoyaltyCode": "LL810213",
      "AccountingCode": "AC123",
      "BillingCode": null,
      "Notes": "",
      "CarRegistrationNumber": "1A2 3456",
      "DietaryRequirements": null,
      "CreatedUtc": "2018-01-01T00:00:00Z",
      "UpdatedUtc": "2018-01-02T00:00:00Z",
      "Passport": null,
      "IdentityCard": null,
      "Visa": null,
      "DriversLicense": null,
      "Address": {
        "Id": "f8495413-bf49-45dd-843c-44be7f365569",
        "Line1": "Somerford Road Hello House/135",
        "Line2": null,
        "City": "Christchurch",
        "PostalCode": "BH23 3PY",
        "CountryCode": "GB",
        "CountrySubdivisionCode": "GB-ENG",
        "Latitude": null,
        "Longitude": null
      },
      "AddressId": "f8495413-bf49-45dd-843c-44be7f365569",
      "Classifications": [
        "Returning"
      ],
      "Options": [
        "SendMarketingEmails"
      ],
      "ItalianDestinationCode": null,
      "ItalianFiscalCode": null,
      "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
      "MergeTargetId": null,
      "ActivityState": "Active",
      "IsActive": true,
      "PreferredSpaceFeatures": [
        "OceanView"
      ],
      "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
      "UpdaterProfileId": "122fc063-ec6e-4198-b8db-6b168a59ffae"
    }
  ],
  "Documents": null,
  "Cursor": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer](customers.md#customer) | required | The customers. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest customer item returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older customers. If [Limitation](../guidelines/pagination.md#limitation) is specified in the request message, then Cursor will always be included in the response message; this is true even when using Extents set to false so that no actual data is returned. |
| ~~`Documents`~~ | ~~array of [Identity document](customers.md#identity-document)~~ | ~~optional~~ | ~~The identity documents of customers.~~ **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|

#### Customer

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the customer. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Number` | string | required | Number of the customer. |
| `Title` | [Title](customers.md#title) | optional | Title of the customer. |
| `Sex` | [Sex](customers.md#sex) | optional | Sex of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `PreferredLanguageCode` | string | optional | Language and culture code of the customer's preferred language, according to their profile. For example: `en-GB`, `fr-CA`. |
| `LanguageCode` | string | optional | Language and culture code of the customer's language, based on multiple sources. These sources include the preferred language specified in internal data based on previous bookings, and the preferred language of the customer specified in their profile. If neither of these sources are present, we use the native language based on the customer's nationality. The format is, for example, `en-US` or `fr-FR`. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Occupation` | string | optional | Occupation of the customer. |
| `Email` | string | optional | Email address of the customer. |
| `HasOtaEmail` | boolean | required | Whether the customer's email address is a temporary email address from an OTA. For more details, see the [product documentation](https://help.mews.com/s/article/how-to-maintain-ota-guest-profiles-with-verified-email-addresses-obtained-from-the-guest-portal). |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional, max length 255 characters | Registration number of the customer's car. |
| `DietaryRequirements` | string | optional, max length 255 characters | Customer's dietary requirements, e.g. Vegan, Halal. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `AddressId` | string | optional | Unique identifier of the `Address` of the customer. |
| `Classifications` | array of [Customer classification](customers.md#customer-classification) | required | Classifications of the customer. |
| `Options` | array of [Customer option](customers.md#customer-option) | required | Options of the customer. |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company) the customer is associated with. |
| `MergeTargetId` | string | optional | Unique identifier of the account ([Customer](customers.md#customer)) to which this customer is linked. |
| `IsActive` | boolean | required | Whether the customer record is still active. |
| `PreferredSpaceFeatures` | array of [Resource feature classification](resourcefeatures.md#resource-feature-classification) | required | A list of room preferences, such as view type, bed type, and amenities. |
| `CreatorProfileId` | string | required | Unique identifier of the user who created the customer. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who last updated the customer. |
| ~~`Passport`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`IdentityCard`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`Visa`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`DriversLicense`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`Address`~~ | ~~[Address](configuration.md#address)~~ | ~~optional~~ | **Deprecated!** Use `AddressId` instead.|
| ~~`ActivityState`~~ | ~~string~~ | ~~optional~~ | ~~[Activity State](customers.md#activity-state) of customer record, i.e. whether active or deleted.~~ **Deprecated!** Use `IsActive` instead.|

#### Title
Type of the title prefix of the customer.

Note that the value should not be used as-is, but localized. For example, the value `Misses` should be displayed as `Mrs.` in English and `Fr.` in German.

* `Mister` - Mr.
* `Miss` - Ms.
* `Misses` - Mrs.

#### Sex

* `Male`
* `Female`

#### Identity document

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the document. |
| `CustomerId` | string | required | Identifier of the `Customer`. |
| `Type` | [Document type](reservations.md#document-type) | required | Type of the document. |
| `Number` | string | optional | Number of the document (e.g. passport number). |
| `Expiration` | string | optional | Expiration date in ISO 8601 format. |
| `Issuance` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the `Country`. |
| `IssuingCountrySubdivisionCode` | string | optional | Identifier of the country subdivision where the document was issued (province, state or region). |
| `IssuingCity` | string | optional | City where the document was issued. |
| `IdentityDocumentSupportNumber` | string | optional | Identity document support number. Only required for Spanish identity cards in Spanish hotels. |

#### Customer classification

* `None`
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
* `Airline`
* `HealthCompliant`
* `InRoom`
* `WaitingForRoom`
* `Student`

#### Customer option

* `None`
* `SendMarketingEmails`
* `Invoiceable`
* `BillAddressObjection`
* `SendMarketingPostalMail`
* `SendPartnerMarketingEmails`
* `SendPartnerMarketingPostalMail`
* `WithdrawCardConsent`
* `GuestPhotoConsent`
* `IdPhotosConsent`

## ~~Get customers open items~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md). Use [Get all payments](payments.md#get-all-payments) and [Get all order items](orderitems.md#get-all-order-items) instead.

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
| `CustomerIds` | array of string | required, max 1000 items | Unique identifiers of `Customer`. |
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
| `Customers` | array of [Customer items](customers.md#customer-items) | optional | The customers with their items. |

#### Customer items

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `CustomerId` | string | required | Unique identifier of the `Customer`. |
| `OrderItems` | array of [Order item](accountingitems.md#order-item) | required | The open order items (consumed items such as nights or products). |
| `PaymentItems` | array of [Payment item](accountingitems.md#payment-item) | required | The open payment items (such as cash, credit card payments or invoices). |
| ~~`Items`~~ | ~~array of [Accounting item](accountingitems.md#accounting-item)~~ | ~~required~~ | **Deprecated!** Use `OrderItems` and `PaymentItems` instead.|

## Add customer

Adds a new customer to the system and returns details of the added customer. If a customer with the specified email already exists, and `OverwriteExisting` is set to `true`, then the existing customer profile information is overwritten and the existing customer data returned. If `OverwriteExisting` is set to `false`, an error response is returned. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "Title": "Miss",
  "FirstName": "Thea",
  "LastName": "Carbone",
  "BirthDate": "1985-09-30",
  "BirthPlace": "Pescara (BI)",
  "Occupation": "Giornalista",
  "Email": "thea@quotidiano.example",
  "Phone": "+39 06 555 5555",
  "Notes": "Check-in notturno.",
  "CarRegistrationNumber": "AA 111AA",
  "TaxIdentificationNumber": "ZGNZLR17U72P554F",
  "Address": {
    "Line1": "Via Antimo 474 Piano 5",
    "City": "Liborio laziale",
    "PostalCode": "30228",
    "CountryCode": "IT",
    "CountrySubdivisionCode": "IT-65"
  },
  "Classifications": [
    "Media",
    "FriendOrFamily"
  ],
  "Options": [
    "SendMarketingEmails"
  ],
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "OverwriteExisting": false,
  "ItalianDestinationCode": "7654321",
  "ItalianFiscalCode": "ZGNZLR17U72P554F"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Title` | [Title](customers.md#title) | optional | Title prefix of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the `Country`. |
| `PreferredLanguageCode` | string | optional | Language and culture code of the customer's preferred language, according to their profile. For example: `en-GB`, `fr-CA`. |
| `Sex` | [Sex](customers.md#sex) | optional | Sex of the customer. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Occupation` | string | optional | Occupation of the customer. |
| `Email` | string | optional | Email address of the customer. |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional, max length 255 characters | Registration number of the customer's car. |
| `DietaryRequirements` | string | optional, max length 255 characters | Customer's dietary requirements, e.g. Vegan, Halal. |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `CompanyId` | string | optional | Unique identifier of `Company` the customer is associated with. |
| `Address` | [Address parameters](companies.md#address-parameters) | optional | Address of the customer. |
| `Classifications` | array of [Customer classification](customers.md#customer-classification) | optional | Classifications of the customer. |
| `Options` | array of [Customer option](customers.md#customer-option) | optional | Options of the customer. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using `PortfolioAccessTokens`, ignored otherwise. |
| `OverwriteExisting` | boolean | required | Whether an existing customer should be overwritten in case of duplicity. This applies only to basic personal information (`Title`, `FirstName`, `LastName`, ...). |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| ~~`IdentityCard`~~ | ~~[Identity document parameters](customers.md#identity-document-parameters)~~ | ~~optional~~ | ~~Identity card details of the customer.~~ **Deprecated!** Use [Add identity documents](https://github.com/MewsSystems/gitbook-connector-api/pull/identitydocuments.md#add-identity-documents) to add document.|
| ~~`Passport`~~ | ~~[Identity document parameters](customers.md#identity-document-parameters)~~ | ~~optional~~ | ~~Passport details of the customer.~~ **Deprecated!** Use [Add identity documents](https://github.com/MewsSystems/gitbook-connector-api/pull/identitydocuments.md#add-identity-documents) to add document.|
| ~~`Visa`~~ | ~~[Identity document parameters](customers.md#identity-document-parameters)~~ | ~~optional~~ | ~~Visa details of the customer.~~ **Deprecated!** Use [Add identity documents](https://github.com/MewsSystems/gitbook-connector-api/pull/identitydocuments.md#add-identity-documents) to add document.|
| ~~`DriversLicense`~~ | ~~[Identity document parameters](customers.md#identity-document-parameters)~~ | ~~optional~~ | ~~Drivers license details of the customer.~~ **Deprecated!** Use [Add identity documents](https://github.com/MewsSystems/gitbook-connector-api/pull/identitydocuments.md#add-identity-documents) to add document.|

#### Sex

* `Male`
* `Female`

#### Identity document parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Number` | string | optional | Number of the document (e.g. passport number). |
| `Expiration` | string | optional | Expiration date in ISO 8601 format. |
| `Issuance` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the `Country`. |
| `IssuingCountrySubdivisionCode` | string | optional | Identifier of the country subdivision where the document was issued (province, state or region). |
| `IssuingCity` | string | optional | City from which document issued |

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
* `Airline`
* `HealthCompliant`
* `InRoom`
* `WaitingForRoom`
* `Student`

#### Customer option

* `SendMarketingEmails`
* `Invoiceable`
* `BillAddressObjection`
* `SendMarketingPostalMail`
* `SendPartnerMarketingEmails`
* `SendPartnerMarketingPostalMail`
* `WithdrawCardConsent`
* `GuestPhotoConsent` - Whether to ask for consent to take a guest photo.
* `IdPhotosConsent` - Whether to ask for consent to take identity document photos.

### Response

```javascript
{
  "Id": "99b4f0af-9558-463b-8452-07a9bc414708",
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Number": "390881",
  "Title": "Miss",
  "Sex": null,
  "FirstName": "Thea",
  "LastName": "Carbone",
  "SecondLastName": null,
  "NationalityCode": null,
  "PreferredLanguageCode": null,
  "LanguageCode": null,
  "BirthDate": "1985-09-30",
  "BirthPlace": "Pescara (BI)",
  "Occupation": "Giornalista",
  "Email": "thea@quotidiano.example",
  "HasOtaEmail": false,
  "Phone": "+39 06 555 5555",
  "TaxIdentificationNumber": "ZGNZLR17U72P554F",
  "LoyaltyCode": null,
  "AccountingCode": null,
  "BillingCode": null,
  "Notes": "Check-in notturno.",
  "CarRegistrationNumber": "AA 111AA",
  "DietaryRequirements": null,
  "CreatedUtc": "2024-09-17T12:22:33Z",
  "UpdatedUtc": "2024-10-12T09:45:00Z",
  "Passport": null,
  "IdentityCard": null,
  "Visa": null,
  "DriversLicense": null,
  "Address": {
    "Id": "81f62f08-26d5-408f-9b0d-d030957dc799",
    "Line1": "Via Antimo 474 Piano 5",
    "Line2": null,
    "City": "Liborio laziale",
    "PostalCode": "30228",
    "CountryCode": "IT",
    "CountrySubdivisionCode": "IT-65",
    "Latitude": 28.56333,
    "Longitude": -121.243143
  },
  "AddressId": "81f62f08-26d5-408f-9b0d-d030957dc799",
  "Classifications": [
    "Media",
    "FriendOrFamily"
  ],
  "Options": [],
  "ItalianDestinationCode": "7654321",
  "ItalianFiscalCode": "ZGNZLR17U72P554F",
  "CompanyId": "f3b4f0af-9558-463b-8452-07a9bc414708",
  "MergeTargetId": null,
  "ActivityState": null,
  "IsActive": true,
  "PreferredSpaceFeatures": [
    "LowerBed"
  ],
  "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
  "UpdaterProfileId": "122fc063-ec6e-4198-b8db-6b168a59ffae"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the customer. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Number` | string | required | Number of the customer. |
| `Title` | [Title](customers.md#title) | optional | Title of the customer. |
| `Sex` | [Sex](customers.md#sex) | optional | Sex of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `PreferredLanguageCode` | string | optional | Language and culture code of the customer's preferred language, according to their profile. For example: `en-GB`, `fr-CA`. |
| `LanguageCode` | string | optional | Language and culture code of the customer's language, based on multiple sources. These sources include the preferred language specified in internal data based on previous bookings, and the preferred language of the customer specified in their profile. If neither of these sources are present, we use the native language based on the customer's nationality. The format is, for example, `en-US` or `fr-FR`. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Occupation` | string | optional | Occupation of the customer. |
| `Email` | string | optional | Email address of the customer. |
| `HasOtaEmail` | boolean | required | Whether the customer's email address is a temporary email address from an OTA. For more details, see the [product documentation](https://help.mews.com/s/article/how-to-maintain-ota-guest-profiles-with-verified-email-addresses-obtained-from-the-guest-portal). |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional, max length 255 characters | Registration number of the customer's car. |
| `DietaryRequirements` | string | optional, max length 255 characters | Customer's dietary requirements, e.g. Vegan, Halal. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `AddressId` | string | optional | Unique identifier of the `Address` of the customer. |
| `Classifications` | array of [Customer classification](customers.md#customer-classification) | required | Classifications of the customer. |
| `Options` | array of [Customer option](customers.md#customer-option) | required | Options of the customer. |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company) the customer is associated with. |
| `MergeTargetId` | string | optional | Unique identifier of the account ([Customer](customers.md#customer)) to which this customer is linked. |
| `IsActive` | boolean | required | Whether the customer record is still active. |
| `PreferredSpaceFeatures` | array of [Resource feature classification](resourcefeatures.md#resource-feature-classification) | required | A list of room preferences, such as view type, bed type, and amenities. |
| `CreatorProfileId` | string | required | Unique identifier of the user who created the customer. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who last updated the customer. |
| ~~`Passport`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`IdentityCard`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`Visa`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`DriversLicense`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`Address`~~ | ~~[Address](configuration.md#address)~~ | ~~optional~~ | **Deprecated!** Use `AddressId` instead.|
| ~~`ActivityState`~~ | ~~string~~ | ~~optional~~ | ~~[Activity State](customers.md#activity-state) of customer record, i.e. whether active or deleted.~~ **Deprecated!** Use `IsActive` instead.|

## Update customer

Updates personal information of a customer. Note that if any of the fields is left blank, it won't clear the field in Mews. The field will be left intact. In case of email update, the email will change in Mews only if there is no other customer profile in the hotel with such email. Otherwise an error response is returned. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "CustomerId": "99b4f0af-9558-463b-8452-07a9bc414708",
  "Title": "Miss",
  "FirstName": "Thea",
  "LastName": "Carbone",
  "BirthDate": "1985-09-30",
  "BirthPlace": "Pescara (BI)",
  "Occupation": "Giornalista",
  "Email": "thea@quotidiano.example",
  "Phone": "+39 06 555 5555",
  "Notes": "Check-in notturno.",
  "CarRegistrationNumber": "AA 111AA",
  "TaxIdentificationNumber": "ZGNZLR17U72P554F",
  "CompanyId": "f3b4f0af-9558-463b-8452-07a9bc414708",
  "Address": {
    "Line1": "Via Antimo 474 Piano 5",
    "City": "Liborio laziale",
    "PostalCode": "30228",
    "CountryCode": "IT",
    "CountrySubdivisionCode": "IT-65"
  },
  "Classifications": [
    "Media",
    "FriendOrFamily"
  ],
  "Options": [
    "SendMarketingEmails"
  ],
  "ItalianDestinationCode": {
    "Value": "7654321"
  },
  "ItalianFiscalCode": {
    "Value": "ZGNZLR17U72P554F"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using `PortfolioAccessTokens`, ignored otherwise. |
| `CustomerId` | string | required | Unique identifier of the `Customer` to be updated. |
| `Title` | [Title](customers.md#title) | optional | New title. |
| `FirstName` | string | optional | New first name. |
| `LastName` | string | optional | New last name. |
| `SecondLastName` | string | optional | New second last name. |
| `NationalityCode` | string | optional | New nationality code as ISO 3166-1 code of the `Country`. |
| `PreferredLanguageCode` | string | optional | Language and culture code of the customer's preferred language, according to their profile. For example: `en-GB`, `fr-CA`. |
| `Sex` | [Sex](customers.md#sex) | optional | Sex of the customer. |
| `BirthDate` | string | optional | New birth date in ISO 8601 format. |
| `BirthPlace` | string | optional | New birth place. |
| `Occupation` | string | optional | Occupation of the customer. |
| `Email` | string | optional | New email address. |
| `Phone` | string | optional | New phone number. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. Old value will be overwritten. |
| `CarRegistrationNumber` | string | optional, max length 255 characters | New registration number of the customer's car. |
| `DietaryRequirements` | string | optional, max length 255 characters | Customer's dietary requirements, e.g. Vegan, Halal. |
| `TaxIdentificationNumber` | string | optional | New tax identification number of the customer. |
| `CompanyId` | string | optional | Unique identifier of `Company` the customer is associated with. |
| `Address` | [Address parameters](companies.md#address-parameters) | optional | New address details. |
| `Classifications` | array of [Customer classification](customers.md#customer-classification) | optional | New classifications of the customer. |
| `Options` | array of [Customer option](customers.md#customer-option) | optional | Options of the customer. |
| `ItalianDestinationCode` | [String update value](_objects.md#string-update-value) | optional | New Italian destination code of customer. |
| `ItalianFiscalCode` | [String update value](_objects.md#string-update-value) | optional | New Italian fiscal code of customer. |
| ~~`IdentityCard`~~ | ~~[Identity document parameters](customers.md#identity-document-parameters)~~ | ~~optional~~ | ~~New identity card details.~~ **Deprecated!** Use [Update identity documents](https://github.com/MewsSystems/gitbook-connector-api/pull/identitydocuments.md#update-identity-documents) to update document.|
| ~~`Passport`~~ | ~~[Identity document parameters](customers.md#identity-document-parameters)~~ | ~~optional~~ | ~~New passport details.~~ **Deprecated!** Use [Update identity documents](https://github.com/MewsSystems/gitbook-connector-api/pull/identitydocuments.md#update-identity-documents) to update document.|
| ~~`Visa`~~ | ~~[Identity document parameters](customers.md#identity-document-parameters)~~ | ~~optional~~ | ~~New visa details.~~ **Deprecated!** Use [Update identity documents](https://github.com/MewsSystems/gitbook-connector-api/pull/identitydocuments.md#update-identity-documents) to update document.|
| ~~`DriversLicense`~~ | ~~[Identity document parameters](customers.md#identity-document-parameters)~~ | ~~optional~~ | ~~New drivers license details.~~ **Deprecated!** Use [Update identity documents](https://github.com/MewsSystems/gitbook-connector-api/pull/identitydocuments.md#update-identity-documents) to update document.|

### Response

```javascript
{
  "Id": "99b4f0af-9558-463b-8452-07a9bc414708",
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Number": "390881",
  "Title": "Miss",
  "Sex": null,
  "FirstName": "Thea",
  "LastName": "Carbone",
  "SecondLastName": null,
  "NationalityCode": null,
  "PreferredLanguageCode": null,
  "LanguageCode": null,
  "BirthDate": "1985-09-30",
  "BirthPlace": "Pescara (BI)",
  "Occupation": "Giornalista",
  "Email": "thea@quotidiano.example",
  "HasOtaEmail": false,
  "Phone": "+39 06 555 5555",
  "TaxIdentificationNumber": "ZGNZLR17U72P554F",
  "LoyaltyCode": null,
  "AccountingCode": null,
  "BillingCode": null,
  "Notes": "Check-in notturno.",
  "CarRegistrationNumber": "AA 111AA",
  "DietaryRequirements": null,
  "CreatedUtc": "2024-09-17T12:22:33Z",
  "UpdatedUtc": "2024-10-12T09:45:00Z",
  "Passport": null,
  "IdentityCard": null,
  "Visa": null,
  "DriversLicense": null,
  "Address": {
    "Id": "81f62f08-26d5-408f-9b0d-d030957dc799",
    "Line1": "Via Antimo 474 Piano 5",
    "Line2": null,
    "City": "Liborio laziale",
    "PostalCode": "30228",
    "CountryCode": "IT",
    "CountrySubdivisionCode": "IT-65",
    "Latitude": 28.56333,
    "Longitude": -121.243143
  },
  "AddressId": "81f62f08-26d5-408f-9b0d-d030957dc799",
  "Classifications": [
    "Media",
    "FriendOrFamily"
  ],
  "Options": [],
  "ItalianDestinationCode": "7654321",
  "ItalianFiscalCode": "ZGNZLR17U72P554F",
  "CompanyId": "f3b4f0af-9558-463b-8452-07a9bc414708",
  "MergeTargetId": null,
  "ActivityState": null,
  "IsActive": true,
  "PreferredSpaceFeatures": [
    "LowerBed"
  ],
  "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
  "UpdaterProfileId": "122fc063-ec6e-4198-b8db-6b168a59ffae"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the customer. |
| `ChainId` | string | required | Unique identifier of the chain. |
| `Number` | string | required | Number of the customer. |
| `Title` | [Title](customers.md#title) | optional | Title of the customer. |
| `Sex` | [Sex](customers.md#sex) | optional | Sex of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `PreferredLanguageCode` | string | optional | Language and culture code of the customer's preferred language, according to their profile. For example: `en-GB`, `fr-CA`. |
| `LanguageCode` | string | optional | Language and culture code of the customer's language, based on multiple sources. These sources include the preferred language specified in internal data based on previous bookings, and the preferred language of the customer specified in their profile. If neither of these sources are present, we use the native language based on the customer's nationality. The format is, for example, `en-US` or `fr-FR`. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Occupation` | string | optional | Occupation of the customer. |
| `Email` | string | optional | Email address of the customer. |
| `HasOtaEmail` | boolean | required | Whether the customer's email address is a temporary email address from an OTA. For more details, see the [product documentation](https://help.mews.com/s/article/how-to-maintain-ota-guest-profiles-with-verified-email-addresses-obtained-from-the-guest-portal). |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `TaxIdentificationNumber` | string | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `AccountingCode` | string | optional | Accounting code of the customer. |
| `BillingCode` | string | optional | Billing code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `CarRegistrationNumber` | string | optional, max length 255 characters | Registration number of the customer's car. |
| `DietaryRequirements` | string | optional, max length 255 characters | Customer's dietary requirements, e.g. Vegan, Halal. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |
| `AddressId` | string | optional | Unique identifier of the `Address` of the customer. |
| `Classifications` | array of [Customer classification](customers.md#customer-classification) | required | Classifications of the customer. |
| `Options` | array of [Customer option](customers.md#customer-option) | required | Options of the customer. |
| `ItalianDestinationCode` | string | optional | Value of Italian destination code. |
| `ItalianFiscalCode` | string | optional | Value of Italian fiscal code. |
| `CompanyId` | string | optional | Unique identifier of [Company](companies.md#company) the customer is associated with. |
| `MergeTargetId` | string | optional | Unique identifier of the account ([Customer](customers.md#customer)) to which this customer is linked. |
| `IsActive` | boolean | required | Whether the customer record is still active. |
| `PreferredSpaceFeatures` | array of [Resource feature classification](resourcefeatures.md#resource-feature-classification) | required | A list of room preferences, such as view type, bed type, and amenities. |
| `CreatorProfileId` | string | required | Unique identifier of the user who created the customer. |
| `UpdaterProfileId` | string | required | Unique identifier of the user who last updated the customer. |
| ~~`Passport`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`IdentityCard`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`Visa`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`DriversLicense`~~ | ~~[Identity document](customers.md#identity-document)~~ | ~~optional~~ | **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|
| ~~`Address`~~ | ~~[Address](configuration.md#address)~~ | ~~optional~~ | **Deprecated!** Use `AddressId` instead.|
| ~~`ActivityState`~~ | ~~string~~ | ~~optional~~ | ~~[Activity State](customers.md#activity-state) of customer record, i.e. whether active or deleted.~~ **Deprecated!** Use `IsActive` instead.|

## Add customer file

Attaches the specified file to the customer profile. 

Allowed MIME types: `application/pdf`, `image/bmp`, `image/gif`, `image/jpeg`, `image/png`, `image/tiff`.

Note this operation supports [Portfolio Access Tokens](../guidelines/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/customers/addFile`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "CustomerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Name": "document.pdf",
  "Type": "application/pdf",
  "Data": "JVBERi0xLjAKMSAwIG9iajw8L1BhZ2VzIDIgMCBSPj5lbmRvYmogMiAwIG9iajw8L0tpZHNbMyAwIFJdL0NvdW50IDE+PmVuZG9iaiAzIDAgb2JqPDwvTWVkaWFCb3hbMCAwIDMgM10+PmVuZG9iagp0cmFpbGVyPDwvUm9vdCAxIDAgUj4+Cg==",
  "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `ChainId` | string | optional | Unique identifier of the chain. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `CustomerId` | string | required | Unique identifier of the [Customer](customers.md#customer). |
| `Name` | string | required | Name of the file. |
| `Type` | string | required | MIME type of the file (e.g. `application/pdf`). |
| `Data` | string | required | Base64-encoded data of the file. |

### Response

```javascript
{
  "FileId": "f039f5b4-ff18-4510-9086-92b14a68ed78"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `FileId` | string | required | Unique identifier of the uploaded file. |

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
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Name` | string | optional | Name to search by (applies to first name, last name, and full name). |
| `ResourceId` | string | optional | Identifier of [Resource](resources.md#resource) to search by (members of reservation assigned there will be returned). |
| `Extent` | [Customer extent](customers.md#customer-extent) | optional | Extent of data to be returned. |

### Response

```javascript
{
  "Customers": [
    {
      "Customer": {
        "Id": "fadd5bb6-b428-45d5-94f8-fd0d89fece6d",
        "ChainId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "Number": "12345",
        "Title": "Mister",
        "Sex": "Male",
        "FirstName": "John",
        "LastName": "Smith",
        "SecondLastName": "Williams",
        "NationalityCode": "US",
        "PreferredLanguageCode": "en-GB",
        "LanguageCode": "en-US",
        "BirthDate": "1983-12-31",
        "BirthPlace": "New York City, NY",
        "Occupation": "Carpenter",
        "Email": "j.smith@example.com",
        "HasOtaEmail": false,
        "Phone": "00420123456789",
        "TaxIdentificationNumber": "123456789",
        "LoyaltyCode": "LL810213",
        "AccountingCode": "AC123",
        "BillingCode": null,
        "Notes": "",
        "CarRegistrationNumber": "1A2 3456",
        "DietaryRequirements": null,
        "CreatedUtc": "2018-01-01T00:00:00Z",
        "UpdatedUtc": "2018-01-02T00:00:00Z",
        "Passport": null,
        "IdentityCard": null,
        "Visa": null,
        "DriversLicense": null,
        "Address": {
          "Id": "f8495413-bf49-45dd-843c-44be7f365569",
          "Line1": "Somerford Road Hello House/135",
          "Line2": null,
          "City": "Christchurch",
          "PostalCode": "BH23 3PY",
          "CountryCode": "GB",
          "CountrySubdivisionCode": "GB-ENG",
          "Latitude": null,
          "Longitude": null
        },
        "AddressId": "f8495413-bf49-45dd-843c-44be7f365569",
        "Classifications": [
          "Returning"
        ],
        "Options": [
          "SendMarketingEmails"
        ],
        "ItalianDestinationCode": null,
        "ItalianFiscalCode": null,
        "CompanyId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
        "MergeTargetId": null,
        "ActivityState": "Active",
        "IsActive": true,
        "PreferredSpaceFeatures": [
          "OceanView"
        ],
        "CreatorProfileId": "3cd637ef-4728-47f9-8fb1-afb900c9cdcf",
        "UpdaterProfileId": "122fc063-ec6e-4198-b8db-6b168a59ffae"
      },
      "Reservation": null
    }
  ],
  "Documents": null
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customers` | array of [Customer search result](customers.md#customer-search-result) | required | The customer search results. |
| ~~`Documents`~~ | ~~array of [Identity document](customers.md#identity-document)~~ | ~~optional~~ | ~~The identity documents of customers.~~ **Deprecated!** Use [Get all identity documents](identitydocuments.md#get-all-identity-documents) to fetch identity documents.|

#### Customer search result

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Customer` | [Customer](customers.md#customer) | required | The found customer. |
| `Reservation` | [Reservation (ver 2017-04-12)](reservations.md#reservation-ver-2017-04-12) | optional | Reservation of the customer in case they are currently staying in the property. |

## ~~Merge customers~~

> ### Deprecated!
> This operation is [deprecated](../deprecations/README.md). Use [Merge accounts](accounts.md#merge-accounts) instead.

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
| `SourceCustomerId` | string | required | Unique identifier of the source [Customer](customers.md#customer). |
| `TargetCustomerId` | string | required | Unique identifier of the target [Customer](customers.md#customer). |

### Response

```javascript
{}
```
