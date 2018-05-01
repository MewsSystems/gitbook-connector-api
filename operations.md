# Operations

This section describes all operations supported by the API:

- [Configuration](#configuration) - operations related to configuration of the client, enterprise or API.
    - [Get configuration](#get-configuration) - returns configuration of the client and enterprise.
    - [Get all countries](#get-all-countries) - returns all countries supported by the API.
    - [Get all currencies](#get-all-currencies) - returns all currencies supported by the API.
    - [Get all languages](#get-all-languages) - returns all languages supported by the API.
    - [Get language texts](#get-language-texts) - returns translations of texts to a specified language.
    - [Get image URLs](#get-image-urls) - returns URLs of specified images.
- [Enterprises](#enterprises) - operations related to the enterprise and its settings.
    - [Get all companies](#get-all-companies) - returns company profiles of the enterprise.
    - [Get all company contracts](#get-all-company-contracts) - returns contracts of the enterprise with companies.
    - [Get all departments](#get-all-departments) - returns all departments of the enterprise.
    - [Get all spaces](#get-all-spaces) - returns spaces in the enterprise together with their configuration.
    - [Get all space blocks](#get-all-space-blocks) - returns space blocks in an interval.
    - [Update space state](#update-space-state) - updates state of a space.
    - [Add task](#add-task) - adds a task to the enterprise.
- [Services](#services) - operations related to offered services, availability and prices.
    - [Get all services](#get-all-services) - returns all services offered by the enterprise.
    - [Get service availability](#get-service-availability) - returns availability of a service in an interval.
    - [Get all products](#get-all-products) - returns all products offered together with services.
    - [Get all business segments](#get-all-business-segments) - returns all business segments of a service.
    - [Get all rates](#get-all-rates) - returns all rates of a service.
    - [Get rate pricing](#get-rate-pricing) - returns prices of a rate in an interval.
    - [Update rate price](#update-rate-price) - updates prices of a rate.
    - [Add order](#add-order) - adds a new service order.
- [Reservations](#reservations) - operations for retrieval and modifications of reservations.
    - [Get all reservations](#get-all-reservations) - returns all reservations in an interval.
    - [Get all reservations by ids](#get-all-reservations-by-ids) - returns all reservations by their identifiers.
    - [Get all reservations by customers](#get-all-reservations-by-customers) - returns all reservations by the customers that own them.
    - [Get all reservation items](#get-all-reservation-items) - returns all accounting items of reservations. 
    - [Price reservations](#price-reservations) - returns prices of specified reservations.
    - [Add reservations](#add-reservations) - adds a new group of reservations.
    - [Start reservation](#start-reservation) - starts (checks in) a reservation.
    - [Process reservation](#process-reservation) - processes (checks out) a reservation.
    - [Cancel reservation](#cancel-reservation) - cancels a reservation.
    - [Update reservation interval](#update-reservation-interval) - updates start (arrival) and end (departure) of a reservation.
    - [Update reservation space](#update-reservation-space) - updates assignment of a reservation to another space.
    - [Update reservation requested category](#update-reservation-requested-category) - updates requested space category of a reservation.
    - [Add reservation companion](#add-reservation-companion) - adds a new companion to a reservation.
    - [Delete reservation companion](#delete-reservation-companion) - deletes a companion from a reservation.
    - [Add reservation product](#add-reservation-product) - adds a new product to the reservation.
- [Customers](#customers) - operations for retrieval and modifications of customers.
    - [Get all customers](#get-all-customers) - returns all customers in an interval.
    - [Get all customers by ids](#get-all-customers-by-ids) - returns all customers by their identifiers.
    - [Get all customers by emails](#get-all-customers-by-emails) - returns all customers by their emails.
    - [Search customers](#search-customers) - searches among active customers.
    - [Get customers open items](#get-customers-open-items) - returns open items of customers.
    - [Add customer](#add-customer) - adds a new customer.
    - [Update customer](#update-customer) - updates personal/internal information of a customer.
    - [Merge customers](#merge-customers) - merges two customers into one.
    - [Add customer file](#add-customer-file) - adds a new file to a customer.
- [Finance](#finance) - operations related to financial settings, bills and payments.
    - [Get all exchange rates](#get-all-exchange-rates) - returns all exchange rates of the enterprise.
    - [Get all cashiers](#get-all-cashiers) - returns all cashiers of the enterprise.
    - [Get all cashier transactions](#get-all-cashier-transactions) - returns all cashier transactions in an interval.
    - [Get all accounting categories](#get-all-accounting-categories) - returns all accounting categories of the enterprise.
    - [Get all accounting items](#get-all-accounting-items) - returns all accounting items in an interval.
    - [Get all bills by ids](#get-all-bills-by-ids) - returns all bills by their identifiers.
    - [Get all bills by customers](#get-all-bills-by-customers) - returns all bills of the specified customers.
    - [Get all closed bills](#get-all-closed-bills) - returns all closed bills in an interval.
    - [Add credit card payment](#add-credit-card-payment) - adds a new credit card payment.
    - [Add external payment](#add-external-payment) - adds a new external payment.
- [Integrations](#integrations) - operations related to integrations, devices and commands to them.
    - [Get all devices](#get-all-devices) - returns all physical devices defined in the enterprise.
    - [Get all commands](#get-all-commands) - returns all active commands issued for the client.
    - [Get all commands by ids](#get-all-commands-by-ids) - returns all commands by their identifiers.
    - [Add printer command](#add-printer-command) - adds a new command for a printer to print a document.
    - [Add key cutter command](#add-key-cutter-command) - adds a new command for key cutter to cut keys.
    - [Update command](#update-command) - updates a command for a device.

## Configuration

### Get configuration

Returns configuration of the enterprise and the client.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/configuration/get`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Enterprise` | [Enterprise](#enterprise) | required | The enterprise (e.g. hotel, hostel) associated with the access token. |

##### Enterprise

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `ChainId` | string | required | Unique identifier of the chain whose member the enterprise is. |
| `CreatedUtc` | string | required | Creation date and time of the enterprise in UTC timezone in ISO 8601 format. |
| `Name` | string | required | Name of the enterprise. |
| `TimeZoneIdentifier` | string | required | IANA timezone identifier of the enterprise. |
| `LegalEnvironmentCode` | string | required | Unique identifier of the legal environment where the enterprise resides. |
| `DefaultLanguageCode` | string | required | Language-culture codes of the enterprise default [Language](#langauge). |
| `EditableHistoryInterval` | string | required | Editable history interval in ISO 8601 duration format. |
| `WebsiteUrl` | string | optional | URL of the enterprise website. |
| `Email` | string | optional | Email address of the enterprise. |
| `Phone` | string | optional | Phone number of the enterprise. |
| `LogoImageId` | string | required | Unique identifier of the enterprise logo image. |
| `CoverImageId` | string | required | Unique identifier of the enterprise cover image. |
| `Address` | [Address](#address) | required | Address of the enterprise. |
| `Currencies` | array of [Accepted currency](#accepted-currency) | required | Currencies accepted by the enterprise. |

##### Address

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](#country). |

##### Accepted currency

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](#currency). |
| `IsDefault` | bool | required | Whether the currency is a default accounting currency. |
| `IsEnabled` | bool | required | Whether the currency is enabled for usage. |

{% common %}
```json
{
    "Enterprise": {
        "Address": {
            "City": "Prague",
            "CountryCode": "CZ",
            "Line1": "Anenské nám. 1",
            "Line2": "Ahoj",
            "PostalCode": "110 00"
        },
        "ChainId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
        "CoverImageId": null,
        "CreatedUtc": "2015-07-07T13:33:17Z",
        "Currencies": [
            {
                "Currency": "GBP",
                "IsDefault": true,
                "IsEnabled": true
            },
            {
                "Currency": "USD",
                "IsDefault": false,
                "IsEnabled": true
            }
        ],
        "DefaultLanguageCode": "en-US",
        "EditableHistoryInterval": "P0M3DT0H0M0S",
        "Email": "charging-api@mews.li",
        "Id": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
        "LegalEnvironmentCode": "UK",
        "LogoImageId": null,
        "Name": "Connector API Hotel",
        "Phone": "+",
        "TimeZoneIdentifier": "Europe/Budapest",
        "WebsiteUrl": "https://en.wikipedia.org/wiki/St._Vitus_Cathedral"
    }
}
```
{% endmethod %}

### Get all countries

Returns all countries supported by the API.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/countries/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common%}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Countries` | array of [Country](#country) | required | The supported countries. |

##### Country

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Code` | string | required | ISO 3166-1 alpha-2 code, e.g. `US` or `GB`. |
| `EnglishName` | string  | required | English name of the country. |

{% common %}
```json
{
    "Countries": [
        {
            "Code": "GB",
            "EnglishName": "United Kingdom of Great Britain and Northern Ireland"
        },
        {
            "Code": "US",
            "EnglishName": "United States of America"
        }
    ]
}
```
{% endmethod %}

### Get all currencies

Returns all currencies supported by the API.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/currencies/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Currencies` | array of [Currency](#currency) | required | The supported currencies. |

##### Currency

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Code` | string | required | ISO-4217 three-letter code, e.g. `USD` or `GBP`. |
| `Precision` | number  | required | Precision of the currency (count of decimal places). |

{% common %}
```json
{
    "Currencies": [
        {
            "Code": "USD",
            "Precision": 2
        },
        {
            "Code": "GBP",
            "Precision": 2
        }
    ]
}
```
{% endmethod %}

### Get all languages

Returns all languages supported by the API.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/languages/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Languages` | array of [Language](#language) | required | The supported languages. |

##### Language

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Code` | string | required | Language-culture code of the language. |
| `FallbackLanguageCode` | string | optional | Language-culture code of the fallback language. |
| `EnglishName` | string  | required | English name of the language. |
| `LocalName` | string  | required | Local name of the language. |

{% common %}
```json
{
    "Languages": [
        {
            "Code": "zh-CN",
            "EnglishName": "Chinese (Simplified)",
            "FallbackLanguageCode": "en-US",
            "LocalName": "中文"
        },
        {
            "Code": "cs-CZ",
            "EnglishName": "Czech",
            "FallbackLanguageCode": "en-US",
            "LocalName": "Čeština"
        }
    ]
}
```
{% endmethod %}

### Get language texts

Returns translations of texts in the specified languages.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/languages/getTexts`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `LangaugeCodes` | array of string | required | Language-culture codes of the [Language](#langauge)s whose texts to return. |
| `Scope` | string | required | Scope of texts to return. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "LanguageCodes": [
        "en-US",
        "cs-CZ"
    ],
    "Scope": ""
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `LanguageTexts` | array of [Language texts](#language-texts) | required | Texts in the specified languages. |

##### Language texts

| Property | Type | | Description |
| --- | --- | --- | --- |
| `LanguageCode` | string | required | Language-culture code of the [Language](#langauge). |
| `Texts` | number | required | Texts in the specified language by their keys. |

{% common %}
```json
{
    "LanguageTexts": [
        {
            "LanguageCode": "en-US",
            "Texts": {
                "Address": "Address",
                "AddressLine1": "Address line 1",
                "AddressLine2": "Address line 2",
                "AdultPlural": "Adults",
                "Apartment": "Apartment",
                "ApartmentPlural": "Apartments"
            }
        }
    ]
}
```
{% endmethod %}

### Get image URLs

Returns URLs of the specified images.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/images/getUrls`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Images` | array of [Image parameters](#image-parameters) | required | Parameters of images whose URLs should be returned. |

##### Image parameters

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ImageId` | string | required | Unique identifier of the image. |
| `Width` | number | required | Desired width of the image. |
| `Height` | number | required | Desired height of the image. |
| `ResizeMode` | string [Image resize mode](#image-resize-mode) | required | Mode how the image should be resized to the desired width and height. |

##### Image resize mode

- `Fit` - resize to fit within the specified size, so the result might be smaller than requested.
- `FitExact` - resize and pad to exactly fit within the specified size.
- `Cover` - resize to cover the specified dimensions, so the result might be larger than requested.
- `CoverExact` - resize and clip to cover the specified size.

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
	"Images":[
        {
            "ImageId": "57a971a5-a335-48f4-8cd1-595245d1a876",
            "Width": 200,
            "Height": 150,
            "ResizeMode": "Fit"
        }
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ImageUrls` | array of [Image URL](#image-url) | required | URLs of the images. |

##### Image URL

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ImageId` | string | required | Unique identifier of the image. |
| `Url` | string | required | URL of the image. |

{% common %}
```json
{
    "ImageUrls": [
        {
            "ImageId": "57a971a5-a335-48f4-8cd1-595245d1a876",
            "Url": "https://cdn.demo.mews.li/Media/Image/57a971a5-a335-48f4-8cd1-595245d1a876?Mode=Fit&Width=200&Height=150"
        }
    ]
}
```
{% endmethod %}

## Enterprises

### Get all companies

Returns all company profiles of the enterprise, possible filtered by their identifiers.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/companies/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Ids` | array of string | optional | If specified, returns only companies with the specified identifiers.  |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Companies` | array of [Company](#company) | required | The company profiles of the enterprise. |

##### Company

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the company. |
| `Name` | string  | required | Name of the company. |
| `Identifier` | string  | optional | Identifier of the company (e.g. legal identifier). |
| `TaxIdentificationNumber` | string  | optional | Tax identification number of the company. |
| `ElectronicInvoiceIdentifier` | string | optional | Electronic invoice identifer of the company. |
| `Address` | [Address](#address) | optional | Address of the company (if it is non-empty, otherwise `null`). |

{% common %}
```json
{
    "Companies": [
        {
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
            "TaxIdentificationNumber": ""
        },
        {
            "Address": null,
            "ElectronicInvoiceIdentifier": "",
            "Id": "217b9da3-1c2a-45df-af20-54e57a13368c",
            "Identifier": "",
            "Name": "Booking.com",
            "TaxIdentificationNumber": ""
        }
    ]
}
```
{% endmethod %}

### Get all company contracts

Returns all contracts between the enterprise and other companies.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/companyContracts/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `TravelAgencyContracts` | array of [Travel agency contract](#travel-agency-contract) | required | The travel agency contracts. |

##### Travel agency contract

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the contract. |
| `CompanyId` | string | required | Unique identifier of the contracted [Company](#company). |
| `IsActive` | boolean | required | Whether the contract is still active. |
| `CommissionIncluded` | boolean  | optional | Whether commission of the travel agency is included in the rate. |
| `Commission` | number  | optional | Commission of the travel agency. |

{% common %}
```json
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
{% endmethod %}

### Get all departments

Returns all departments of an enterprise associated with the connector integration.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/departments/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Departments` | array of [Department](#department) | required | The departments of the enterprise. |

##### Department

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the department. |
| `IsActive` | boolean | required | Whether the department is still active. |
| `Name` | string | required | Name of the department. |

{% common %}
```json
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
{% endmethod %}

### Get all spaces

Returns all spaces of an enterprise associated with the connector integration.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/spaces/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Extent` | [Space extent](#space-extent) | optional | Extent of data to be returned. If not specified, `Spaces` and `SpaceCategories` is used as the default extent. |

##### Space extent

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Spaces` | bool | optional | Whether the response should contain spaces. |
| `SpaceCategories` | bool | optional | Whether the response should contain space categories. |
| `SpaceFeatures` | bool | optional | Whether the response should contain space features and their assignments. |
| `Inactive` | bool | optional | Whether the response should contain inactive entities. |

{% common %}
```json
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
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Spaces` | array of [Space](#space) | required | The spaces of the enterprise. |
| `SpaceCategories` | array of [Space category](#space-category) | required | Categories of spaces in the enterprise. |
| `SpaceFeatures` | array of [Space feature](#space-feature) | optional | Features of spaces in the enterprise. |
| `SpaceFeatureAssignments` | array of [Space feature assignment](#space-feature-assignment) | optional | Assignments of space features to spaces. |

##### Space

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the space. |
| `IsActive` | bool | required | Whether the space is still active. |
| `Type` | string [Space type](#space-type) | required | Type of the space. |
| `Number` | string | required | Number of the space (e.g. room number). |
| `FloorNumber` | string | optional | Number of the floor the space is on. |
| `BuildingNumber` | string | optional | Number of the building the space is in. |
| `ParentSpaceId` | string | optional | Identifier of the parent [Space](#space) (e.g. room of a bed). |
| `CategoryId` | string | required | Identifier of the [Space category](#space-category) assigned to the space. |
| `State` | string [Space state](#space-state) | required | State of the room. |

##### Space type

- `Room`
- `Dorm`
- `Bed`
- ...

##### Space state

- `Dirty`
- `Clean`
- `Inspected`
- `OutOfService`
- `OutOfOrder`

##### Space category

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the category. |
| `IsActive` | bool | required | Whether the space category is still active. |
| `Name` | string | required | Name of the category. |
| `ShortName` | string | optional | Short name (e.g. code) of the category. |
| `Description` | string | optional | Description of the category. |
| `Ordering` | number | required | Ordering of the category, lower number corresponds to lower category (note that uniqueness nor continuous sequence is guaranteed). |
| `UnitCount` | number | required | Count of units that can be accommodated (e.g. bed count). |
| `ImageIds` | array of string | required | Unique identifiers of the space category images. |

##### Space feature

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the feature. |
| `Name` | string | required | Name of the feature. |
| `Description` | string | optional | Description of the feature. |

##### Space feature assignment

| Property | Type | | Description |
| --- | --- | --- | --- |
| `SpaceId` | string | required | Unique identifier [Space](#space). |
| `SpaceFeatureId` | string | required | Unique identifier [Space feature](#space-feature). |

{% common %}
```json
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
{% endmethod %}

### Get all space blocks

Returns all space blocks (out of order blocks or house use blocks) colliding with the specified interval.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/spaceBlocks/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2016-01-01T00:00:00Z",
    "EndUtc": "2017-01-01T00:00:00Z"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `SpaceBlocks` | array of [Space block](#space-block) | required | The space blocks colliding with the interval. |

##### Space block

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the block. |
| `AssignedSpaceId` | string | required | Unique identifier of the assigned [Space](#space). |
| `Type` | string [Space block type](#space-block-type) | required | Type of the space block. |
| `StartUtc` | string | required | Start of the block in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the block in UTC timezone in ISO 8601 format. |
| `CreatedUtc` | string | required | Creation date and time of the block in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the block in UTC timezone in ISO 8601 format. |

##### Space block type

- `OutOfOrder`
- `HouseUse`

{% common %}
```json
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
{% endmethod %}

### Update space state

Updates state of the specified space. Note that the state is also updated on the child spaces of the specified space. So if e.g. dorm space is set to `Dirty`, ale subspaces (beds) are also set to `Dirty`.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/spaces/updateState`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `SpaceId` | string | required | Unique identifier of the [Space](#space) to be updated. |
| `State` | string [Space state](#space-state) | required | New state of the space (`Dirty`, `Clean`, `Inspected` or `OutOfService`). |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "SpaceId": "41b3e3a2-3400-4d72-86d4-1e341ccf8977",
    "State": "Inspected"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Add task

Adds a new task to the enterprise, optionally to a specified department.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/tasks/add`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `DepartmentId` | string | optional | Unique identifier of the [Department](#department) the task is addressed to. |
| `Name` | string | required | Name (or title) of the task. |
| `Description` | string | optional | Further decription of the task. |
| `DeadlineUtc` | string | required | Deadline of the task in UTC timezone in ISO 8601 format. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "DepartmentId": null,
    "Name": "Test",
    "Description": "Task description",
    "DeadlineUtc": "2016-01-01T14:00:00Z"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

## Services

### Get all services

Raturns all services offered by the enterprise.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/services/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Services` | array of [Service](#service) | required | Services offered by the enterprise. |

##### Service

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the service. |
| `IsActive` | boolean | required | Whether the service is still active. |
| `Name` | string | required | Name of the service. |
| `StartTime` | string | optional | Default start time of the service orders in ISO 8601 duration format. |
| `EndTime` | string | optional | Default end time of the service orders in ISO 8601 duration format. |
| `Promotions` | [Promotions](#promotions) | required | Promotions of the service. |

##### Promotions

| Property | Type | | Description |
| --- | --- | --- | --- |
| `BeforeCheckIn` | boolean | required | Whether it can be promoted before check-in. |
| `AfterCheckIn` | boolean | required | Whether it can be promoted after check-in. |
| `DuringStay` | boolean | required | Whether it can be promoted during stay. |
| `BeforeCheckOut` | boolean | required | Whether it can be promoted before check-out. |
| `AfterCheckOut` | boolean | required | Whether it can be promoted after check-out. |

{% common %}
```json
{
    "Services": [
        {
            "EndTime": null,
            "Id": "fc79a518-bc69-45b8-93bd-83326201bd14",
            "IsActive": true,
            "Name": "Restaurant",
            "StartTime": null,
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false
            }
        },
        {
            "EndTime": "PT12H",
            "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "IsActive": true,
            "Name": "Accommodation",
            "StartTime": "PT14H",
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false
            }
        }
    ]
}
```
{% endmethod %}

### Get service availability

Returns availability of a service in the specified interval. Note that response contains availability for all dates that the specified interval intersects.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/services/getAvailability`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) whose availability should be returned. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "StartUtc":"2017-01-01T00:00:00.000Z",
    "EndUtc":"2017-01-03T00:00:00.000Z"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CategoryAvailabilities` | array of [Space category availability](#space-category-availability) | required | Space category availabilities. |
| `DatesUtc` | array of string | required | Covered dates in UTC timezone in ISO 8601 format. |

##### Space category availability

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the [Space category](#space-category). |
| `Availabilities` | array of number | required | Availabilities of the space category in the covered dates. |

{% common %}
```json
{
    "CategoryAvailabilities": [
        {
            "Availabilities": [ 6, 6, 6 ],
            "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f"
        },
        {
            "Availabilities": [ 8, 8, 8 ],
            "CategoryId": "a0a7a5c5-c4ef-494a-8b34-6cca97629076"
        }
    ],
    "DatesUtc": [
        "2016-12-31T23:00:00Z",
        "2017-01-01T23:00:00Z",
        "2017-01-02T23:00:00Z"
    ]
}
```
{% endmethod %}

### Get all products

Raturns all products offered together with the specified services.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/products/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ServiceIds` | array of string | required | Unique identifiers of the [Service](#service)s. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ServiceIds": [
        "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Products` | array of [Product](#product) | required | Products offered with the service. |

##### Product

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the product. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service). |
| `IsActive` | boolean | required | Whether the product is still active. |
| `Name` | string | required | Name of the product. |
| `ShortName` | string | required | Short name of the product. |
| `Description` | string | optional | Description of the product. |
| `Charging` | string [Product charging](#product-charging) | required | Charging of the product. |
| `Promotions` | [Promotions](#promotions) | required | Promotions of the service. |
| `Price` | [Currency value](#currency-value) | required | Price of the product. |

##### Product charging

- `Once`
- `PerTimeUnit`
- `PerPersonPerTimeUnit`

{% common %}
```json
{
    "Products": [
        {
            "Charging": "PerPersonPerTimeUnit",
            "Description": "Nice continental breakfast.",
            "Id": "198bc308-c1f2-4a1c-a827-c41d99d52f3d",
            "IsActive": true,
            "Name": "Breakfast",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "ShortName": "BFST",
            "Price": {
                "Currency": "GBP",
                "Net": 7.5,
                "Tax": 1.5,
                "TaxRate": 0.2,
                "Value": 9
            },
            "Promotions": {
                "BeforeCheckIn": false,
                "AfterCheckIn": false,
                "DuringStay": false,
                "BeforeCheckOut": false,
                "AfterCheckOut": false
            }
        }
    ]
}
```
{% endmethod %}

### Get all business segments

Returns all business segments of the default service provided by the enterprise.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/businessSegments/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `BusinessSegments` | array of [Business segment](#business-segment) | required | Business segments of the default service. |

##### Business segment

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the segment. |
| `IsActive` | boolean | required | Whether the business segment is still active. |
| `Name` | string | required | Name of the segment. |

{% common %}
```json
{
    "BusinessSegments": [
        {
            "Id": "7760b5cb-a666-41bb-9758-76bf5d1df399",
            "IsActive": true,
            "Name": "Business"
        },
        {
            "Id": "54ec08b6-e6fc-48e9-b8ae-02943e0ac693",
            "IsActive": true,
            "Name": "Leisure"
        }
    ]
}
```
{% endmethod %}

### Get all rates

Returns all rates (pricing setups) and rate groups (condition settings) of the default service provided by the enterprise.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/rates/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Extent` | [Rate extent](#reservation-extent) | optional | Extent of data to be returned. If not specified, `Rates` and `RateGroups` is used as the default extent. |

##### Rate extent

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Rates` | bool | optional | Whether the response should contain rates. |
| `RateGroups` | bool | optional | Whether the response should contain rate groups. |
| `RateRestrictions` | bool | optional | Whether the response should contain rate restrictions. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Extent": {
        "Rates": true,
        "RateGroups": true,
        "RateRestrictions": false
    }
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Rates` | array of [Rate](#rate) | required | Rates of the default service. |
| `RateGroups` | array of [Rate group](#rate-group) | required | Rate groups of the default service. |
| `RateRestrictions` | [Rate restrictions](#rate-restrictions) | required | Rate restrictions of the rates. |

##### Rate

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the rate. |
| `GroupId` | string | required | Unique identifier of [Rate group](#rate-group) where the rate belongs. |
| `BaseRateId` | string | required | Unique identifier of the base [Rate](#rate). |
| `IsActive` | boolean | required | Whether the rate is still active. |
| `IsPublic` | boolean | required | Whether the rate is publicly available. |
| `Name` | string | required | Name of the rate. |
| `ShortName` | string | required | Short name of the rate. |

##### Rate group

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the group. |
| `IsActive` | boolean | required | Whether the rate group is still active. |
| `Name` | string | required | Name of the rate group. |

##### Rate restrictions

| Property | Type | | Description |
| --- | --- | --- | --- |
| `DateRestrictions` | array of [Date restriction](#date-restriction) | optional | The date restrictions. |
| `EarlinessRestrictions` | array of [Earliness restriction](#earliness-restriction) | optional | The earliness restrictions. |
| `LengthRestrictions` | array of [Length restriction](#length-restriction) | optional | The length restrictions. |

##### Date restriction

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `RateId` | string | required | Unique identifier of the restricted [Rate](#rate). |
| `IsInherited` | boolean | required | Whether child rates inherit the restriction. |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](#day) | required | The restricted days of week. |

##### Earliness restriction

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `RateId` | string | required | Unique identifier of the restricted [Rate](#rate). |
| `IsInherited` | boolean | required | Whether child rates inherit the restriction. |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](#day) | required | The restricted days of week. |
| `MinAdvance` | string | optional | Minimal advance for reservation creation in ISO 8601 duration format. |
| `MaxAdvance` | string | optional | Maximal advance for reservation creation in ISO 8601 duration format. |

##### Length restriction

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the restriction. |
| `RateId` | string | required | Unique identifier of the restricted [Rate](#rate). |
| `IsInherited` | boolean | required | Whether child rates inherit the restriction. |
| `StartUtc` | string | optional | Start of the restricted interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | End of the restricted interval in UTC timezone in ISO 8601 format. |
| `Days` | array of string [Day](#day) | required | The restricted days of week. |
| `MinLength` | string | optional | Minimal reservation length in ISO 8601 duration format. |
| `MaxLength` | string | optional | Maximal reservation length in ISO 8601 duration format. |

##### Day

- `Monday`
- `Tuesday`
- `Wednesday`
- `Thursday`
- `Friday`
- `Saturday`
- `Sunday`

{% common %}
```json
{
    "Rates": [
        {
            "BaseRateId": null,
            "GroupId": "c8b866b3-be2e-4a47-9486-034318e9f393",
            "Id": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "IsActive": true,
            "IsPublic": true,
            "Name": "Fully Flexible",
            "ShortName": "FF"
        }
    ],
    "RateGroups": [
        {
            "Id": "c8b866b3-be2e-4a47-9486-034318e9f393",
            "IsActive": true,
            "Name": "Default"
        }
    ],
    "RateRestrictions": {
        "DateRestrictions": [
            {
                "Days": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                "Id": "cd12a0db-1eeb-4eda-965c-229efff4bd5d",
                "IsInherited": true,
                "RateId": "b7e30382-ccd2-4982-8a29-0eb8d9386e1a",
                "EndUtc": "2019-12-31T23:00:00Z",
                "IsInverted": false,
                "StartUtc": "2016-12-31T23:00:00Z"
            }
        ],
        "EarlinessRestrictions": [
            {
                "Days": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                "Id": "0b9f74e7-3b7b-4472-a476-8ac1f01696ea",
                "IsInherited": true,
                "RateId": "b7e30382-ccd2-4982-8a29-0eb8d9386e1a",
                "EndUtc": null,
                "MaxAdvance": null,
                "MinAdvance": "P7D",
                "StartUtc": null
            }
        ],
        "LengthRestrictions": [
            {
                "Days": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                "Id": "c91dcd27-fd53-4bc6-bb2a-a783e39c61f1",
                "IsInherited": true,
                "RateId": "b7e30382-ccd2-4982-8a29-0eb8d9386e1a",
                "EndUtc": null,
                "MaxLength": null,
                "MinLength": "P4D",
                "StartUtc": null
            }
        ]
    }
}
```
{% endmethod %}

### Get rate pricing

Returns prices of a rate in the specified interval. Note that response contains prices for all dates that the specified interval intersects. So e.g. interval `1st Jan 13:00 - 1st Jan 14:00` will result in one price for `1st Jan`. Interval `1st Jan 23:00 - 2nd Jan 01:00` will result in two prices for `1st Jan` and `2nd Jan`.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/rates/getPricing`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `RateId` | string | required | Unique identifier of the [Rate](#rate) whose prices should be returned. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
    "StartUtc":"2017-01-01T00:00:00.000Z",
    "EndUtc":"2017-01-03T00:00:00.000Z"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](#currency). |
| `DatesUtc` | array of string | required | Covered dates in UTC timezone in ISO 8601 format. |
| `BasePrices` | array of number | required | Base prices of the rate in the covered dates. |
| `CategoryPrices` | array of [Space category pricing](#space-category-pricing) | required | Space category prices. |
| `CategoryAdjustments` | array of [Space category adjustment](#space-category-adjustment) | required | Space category adjustments. |

##### Space category pricing

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the [Space category](#space-category). |
| `Prices` | array of number | required | Prices of the rate for the space category in the covered dates. |

##### Space category adjustment

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | required | Unique identifier of the adjustment [Space category](#space-category). |
| `ParentCategoryId` | string | optional | Unique identifier of the parent [Space category](#space-category) that serves as a base price for the current category. |
| `RelativeValue` | number | required | Relative value of the adjustment (e.g. `0.5` represents 50% increase). |
| `AbsoluteValue` | number | required | Absolute value of the adjustment (e.g. `50` represents 50 EUR in case the rate currency is `EUR`). |

{% common %}
```json
{
    "Currency": "EUR",
    "BasePrices": [ 20, 20, 20 ],
    "CategoryAdjustments": [
        {
            "AbsoluteValue": 0,
            "CategoryId": "34c29e73-c8db-4e93-b51b-981e42655e03",
            "ParentCategoryId": null,
            "RelativeValue": 0.2
        },
        {
            "AbsoluteValue": 50,
            "CategoryId": "a0a7a5c5-c4ef-494a-8b34-6cca97629076",
            "ParentCategoryId": "34c29e73-c8db-4e93-b51b-981e42655e03",
            "RelativeValue": 0
        }
    ]
    "CategoryPrices": [
        {
            "CategoryId": "e3aa3117-dff0-46b7-b49a-2c0391e70ff9",
            "Prices": [ 20, 20, 20 ]
        }
    ],
    "DatesUtc": [
        "2016-12-31T23:00:00Z",
        "2017-01-01T23:00:00Z",
        "2017-01-02T23:00:00Z"
    ]
}
```
{% endmethod %}

### Update rate price

Updates price of a rate in the specified intervals. If the `CategoryId` is specified, updates price of the corresponding [Space category](#space-category), otherwise updates the base price. Note that prices are defined daily, so when the server receives the UTC interval, it first converts it to enterprise timezone and updates the price on all dates that the interval intersects.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/rates/updatePrice`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `RateId` | string | required | Unique identifier of the [Rate](#rate) to update. |
| `PriceUpdates` | array of [Price update](#price-update) | required | Price updates. |

##### Price update

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CategoryId` | string | optional | Unique identifier of the [Space category](#space-category) whose prices to update. If not specified, base price is updated. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `Value` | number | optional | New value of the rate on the interval. If not specified, removes all adjustments within the interval. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
    "PriceUpdates": [
        {
            "StartUtc": "2016-09-01T00:00:00Z",
            "EndUtc": "2016-09-02T00:00:00Z",
            "Value": 111
        },
        {
            "CategoryId": "e3aa3117-dff0-46b7-b49a-2c0391e70ff9",
            "StartUtc": "2016-09-04T00:00:00Z",
            "EndUtc": "2016-09-05T00:00:00Z",
            "Value": 222
        }
    ]
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Add order

Creates a new order with the specified products and items. Only positive charges are allowed by default, in order to post negative charges (rebates), the connector integration has to be configured in Mews to allow it. If the consumption is specified, it has to be in the future or within editable history interval of the enterprise.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/orders/add`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Identifier of the [Customer](#customer) to be charged. |
| `ServiceId` | string | required | Identifier of the [Service](#service) to be ordered. |
| `ConsumptionUtc` | string | optional | Date and time of the order consumption in UTC timezone in ISO 8601 format. If not specified, current date and time is used. |
| `Notes` | string | optional | Additional notes of the order. |
| `ProductOrders` | array of [Product order parameters](#product-order-parameters) | optional | Parameters of the ordered products. |
| `Items` | array of [Item parameters](#item-parameters) | optional | Parameters of the ordered custom items. |

##### Product order parameters

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ProductId` | string | required | Unique identifier of the [Product](#product) to be ordered. |
| `Count` | number | optional | Count of products to be ordered, e.g. 10 in case of 10 beers. |
| `UnitCost` | [Cost](#cost) | optional | Unit cost of the product that overrides the cost defined in Mews. |

##### Item parameters

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Name` | string | required | Name of the item. |
| `UnitCount` | number | required | Count of units to be ordered, e.g. 10 in case of 10 beers. |
| `UnitCost` | [Cost](#cost) | required | Unit cost, e.g. cost for one beer (note that total cost of the item is therefore `UnitCount` times `UnitCost`). |
| `Category` | [Accounting category parameters](#accounting-category-parameters) | optional | Category of the item. |

##### Cost

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Amount` | decimal | required | Amount including tax. |
| `Currency` | string | required | ISO-4217 code of the [Currency](#currency). |
| `Tax` | decimal | required | Tax rate, e.g. `0.21` in case of 21% tax rate.  |

##### Accounting category parameters

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Code` | string | required | Code of the accounting category in Mews. |
| `Name` | string | optional | Name of the category, used if no category is matched using the code. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerId": "794dbb77-0a9a-4170-9fa9-62ea4bf2a56e",
    "ServiceId": "0f7f56db-b8b3-42b0-8b53-2df4c8a87997",
    "ConsumptionUtc": "2018-01-01T00:00:00Z",
    "ProductOrders": [
        {
            "ProductId": "80191f0c-89f7-49ac-a150-1f342b29c4cf",
            "Count": 2
        }
    ],
    "Items": [
        {
            "Name": "Beer",
            "UnitCount": 10,
            "UnitCost": {
                "Amount": 2.50,
                "Currency": "GBP",
                "Tax": 0.20
            },
            "Category": {
                "Code": "ABVG"
            }
        }
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `OrderId` | string | required | Unique identifier of the created order. |

{% common %}
```json
{
    "OrderId": "cdfd5caa-2868-411b-ba95-322e70035f1a"
}
```
{% endmethod %}

## Reservations

### Get all reservations

Returns all reservations from the specified interval according to the time filter (e.g. colliding with that interval or created in that interval).

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `TimeFilter` | string [Reservation time filter](#reservation-time-filter) | optional | Time filter of the interval. If not specified, reservations `Colliding` with the interval are returned. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |
| `States` | array of string [Reservation state](#reservation-state) | optional | States the reservations should be in. If not specified, reservations in `Confirmed`, `Started` or `Processed` states are returned. |
| `Extent` | [Reservation extent](#reservation-extent) | optional | Extent of data to be returned. E.g. it is possible to specify that together with the reservations, customers, groups and rates should be also returned. If not specified, `Reservations`, `Groups` and `Customers` is used as the default extent. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](#currency) the item costs should be converted to. |

##### Reservation time filter

- `Colliding` - reservation interval collides with the interval.
- `Created` - reservation created within the interval.
- `Updated` - reservation updated (or created) within the interval.
- `Start`- reservation start (= arrival) within the interval.
- `End` - reservation end (= departure) within the interval.
- `Overlapping` - reservation interval contains the specified interval.
- `Canceled` - reservation cancelled within the specified interval.

##### Reservation extent

| Property | Type | | Description |
| --- | --- | --- | --- |
| `BusinessSegments` | bool | optional | Whether the response should contain business segmentation. |
| `Customers` | bool | optional | Whether the response should contain customers of the reservations. |
| `Items` | bool | optional | Whether the response should contain reservation items. |
| `Products` | bool | optional | Whether the response should contain products orderable with the reservations. |
| `Rates` | bool | optional | Whether the response should contain rates and rate groups. |
| `Reservations` | bool | optional | Whether the response should contain reservations. |
| `ReservationGroups` | bool | optional | Whether the response should contain groups of the reservations. |
| `Services` | bool | optional | Whether the response should contain services reserved by the reservations. |
| `Spaces` | bool | optional | Whether the response should contain spaces and space categories. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2016-01-01T00:00:00Z",
    "EndUtc": "2016-01-07T00:00:00Z",
    "Extent": {
        "Reservations": true,
        "ReservationGroups": true,
        "Customers": true
    }
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `BusinessSegments` | array of [Business segment](#business-segment) | optional | Business segments of the reservations. |
| `Customers` | array of [Customer](#customer) | optional | Customers that are members of the reservations. |
| `Items` | array of [Accounting item](#accounting-item) | optional | Revenue items of the reservations. |
| `Products` | array of [Product](#product) | optional | Products orderable with reservations. |
| `RateGroups` | array of [Rate group](#rate-group) | optional | Rate groups of the reservation rates. |
| `Rates` | array of [Rate](#rate) | optional | Rates of the reservations. |
| `ReservationGroups` | array of [Reservation group](#reservation-group) | optional | Reservation groups that the reservations are members of. |
| `Reservations` | array of [Reservation](#reservation) | optional | The reservations that collide with the specified interval. |
| `Services` | array of [Service](#service) | optional | Services that have been reserved. |
| `SpaceCategories` | array of [Space category](#space-category) | optional | Space categories of the spaces. |
| `Spaces` | array of [Space](#space) | optional | Assigned spaces of the reservations. |

##### Reservation

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the reservation. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) that is reserved. |
| `GroupId` | string | required | Unique identifier of the [Reservation group](#reservation-group). |
| `Number` | string | required | Confirmation number of the reservation in Mews. |
| `ChannelNumber` | string | optional | Number of the reservation within the Channel (i.e. OTA, GDS, CRS, etc) in case the reservation group originates there (e.g. Booking.com confirmation number). |
| `ChannelManagerNumber` | string | optional | Unique number of the reservation within the reservation group. |
| `ChannelManagerGroupNumber` | string | optional | Number of the reservation group within a Channel manager that transferred the reservation from Channel to Mews. |
| `ChannelManager` | string | optional | Name of the Channel manager (e.g. AvailPro, SiteMinder, TravelClick, etc). |
| `State` | string [Reservation state](#reservation-state) | required | State of the reservation. |
| `Origin` | string [Reservation origin](#reservation-origin) | required | Origin of the reservation. |
| `CreatedUtc` | string | required | Creation date and time of the reservation in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the reservation in UTC timezone in ISO 8601 format. |
| `StartUtc` | string | required | Start of the reservation (arrival) in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the reservation (departure) in UTC timezone in ISO 8601 format. |
| `CancelledUtc` | string | optional | Cancellation date and time in UTC timezone in ISO 8601 format. |
| `RequestedCategoryId` | string | required | Identifier of the requested [Space category](#space-category). |
| `AssignedSpaceId` | string | optional | Identifier of the assigned [Space](#space). |
| `AssignedSpaceLocked` | bool | required | Whether the reservation is locked in the assigned [Space](#space) and cannot be moved. |
| `BusinessSegmentId` | string | optional | Identifier of the reservation [Business segment](#business-segment). |
| `CompanyId` | string | optional | Identifier of the [Company](#company) on behalf of which the reservation was made. |
| `TravelAgencyId` | string | optional | Identifier of the [Company](#company) that mediated the reservation. |
| `RateId` | string | required | Identifier of the reservation [Rate](#rate). |
| `AdultCount` | number | required | Count of adults the reservation was booked for. |
| `ChildCount` | number | required | Count of children the reservation was booked for. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer) who owns the reservation. |
| `CompanionIds` | array of string | required | Unique identifiers of [Customer](#customer)s that will occupy the space. |

##### Reservation state

- `Enquired` - Confirmed neither by the customer nor enterprise.
- `Requested` - Confirmed by the customer but not by the enterprise (waitlist).
- `Optional` - Confirmed by enterprise but not by the guest (the enterprise is holding space for the guest).
- `Confirmed` - Confirmed by both parties, before check-in.
- `Started` - Checked in.
- `Processed` - Checked out.
- `Canceled` - Canceled.

##### Reservation origin

- `ChannelManager`
- `Connector`
- `Distributor`
- `Import`
- `ManualEmail`
- `ManualWebsite`
- ...       

##### Reservation group

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the reservation group. |
| `Name` | string | optional | Name of the reservation group, might be empty or same for multiple groups. |

{% common %}
```json
{
    "BusinessSegments": null,
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
            "Number": "1",
            "Passport": null,
            "Phone": "00420123456789",
            "SecondLastName": null,
            "TaxIdentificationNumber": null,
            "Title": null,
            "UpdatedUtc": "2016-01-01T00:00:00Z",
            "Visa": null
        }
    ],
    "Items": null,
    "Products": null,
    "RateGroups": null,
    "Rates": null,
    "ReservationGroups": [
        {
            "Id": "c704dff3-7811-4af7-a3a0-7b2b0635ac59",
            "Name": "13-12-Smith-F712"
        }
    ],
    "Reservations": [
        {
            "AdultCount": 2,
            "AssignedSpaceId": "20e00c32-d561-4008-8609-82d8aa525714",
            "AssignedSpaceLocked": false,
            "BusinessSegmentId": null,
            "CancelledUtc": null,
            "ChannelNumber": "1337614414",
            "ChannelManagerNumber": "01",
            "ChannelManagerGroupNumber": "JX8PA2",
            "ChannelManager": "AvailPro",
            "ChildCount": 0,
            "CompanionIds": [
                "35d4b117-4e60-44a3-9580-c582117eff98"
            ],
            "CompanyId": null,
            "CreatedUtc": "2016-02-20T14:58:02Z",
            "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
            "EndUtc": "2016-02-22T11:00:00Z",
            "GroupId": "94843f6f-3be3-481b-a1c7-06458774c3df",
            "Id": "bfee2c44-1f84-4326-a862-5289598f6e2d",
            "Number": "52",
            "Origin": "Manual",
            "RateId": "ed4b660b-19d0-434b-9360-a4de2ea42eda",
            "RequestedCategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "StartUtc": "2016-02-20T13:00:00Z",
            "State": "Processed",
            "TravelAgencyId": null,
            "UpdatedUtc": "2016-02-20T14:58:02Z"
        }
    ],
    "Services": null,
    "SpaceCategories": null,
    "Spaces": null
}
```
{% endmethod %}

### Get all reservations by ids

Returns all reservations with the specified unique identifiers.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/getAllByIds`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationIds` | array of string | required | Unique identifiers of [Reservation](#reservation)s to be returned. |
| `Extent` | [Reservation extent](#reservation-extent) | optional | Extent of data to be returned. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationIds": [
        "2b6212d4-55d5-47ba-b8d2-da07be15bce9",
        "0e2983e9-5ac1-4fd9-9f76-76565c1a9b67"
    ]
}
```
{% endmethod %}

#### Response

Same structure as in [Get all reservations](#get-all-reservations) operation.

### Get all reservations by customers

Returns all reservations owned by the specified customers.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/getAllByCustomers`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Unique identifiers of [Customer](#customer)s owning the reservations. |
| `Extent` | [Reservation extent](#reservation-extent) | optional | Extent of data to be returned. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a"
    ]
}
```
{% endmethod %}

#### Response

Same structure as in [Get all reservations](#get-all-reservations) operation.

### Get all reservation items

Returns all revenue items associated with the specified reservations.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/getAllItems`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationIds` | array of string | required | Unique identifiers of the [Reservation](#reservation)s. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](#currency) the item costs should be converted to. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationIds": [
        "e6ea708c-2a2a-412f-a152-b6c76ffad49b"
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Reservations` | array of [Reservation items](#reservation-items) | required | The reservations with their items. |

##### Reservation items

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservations). |
| `Items` | array of [Accounting item](#accounting-item) | required | The items associated with the reservation. |

{% common %}
```json
{
    "Reservations": [
        {
            "Items": [
                {
                    "AccountingCategoryId": "0cf7aa90-736f-43e9-a7dc-787704548d86",
                    "Amount": {
                        "Currency": "GBP",
                        "Net": 16.67,
                        "Tax": 3.33,
                        "TaxRate": 0.2,
                        "Value": 20
                    },
                    "BillId": null,
                    "ClosedUtc": "2017-02-41T10:41:54Z",
                    "ConsumptionUtc": "2016-03-10T13:00:00Z",
                    "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
                    "Id": "784a29df-6196-4402-96a0-58695a881239",
                    "InvoiceId": null,
                    "Name": "Night 3/10/2016",
                    "Notes": null,
                    "OrderId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
                    "ProductId": null,
                    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
                    "Type": "ServiceRevenue"
                }
            ],
            "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b"
        }
    ]
}
```
{% endmethod %}

### Price reservations

Returns prices of reservations with the specified parameters.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/price`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) to be priced. |
| `Reservations` | array of [Reservation parameters](#reservation-parameters) | required | Parameters of the reservations to price. Note that `CustomerId` is not required when pricing reservations. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "Reservations": [
        {
            "Identifier": "1234",
            "StartUtc": "2018-01-01T14:00:00Z",
            "EndUtc": "2018-01-02T10:00:00Z",
            "AdultCount": 2,
            "ChildCount": 0,
            "RequestedCategoryId": "0a5da171-3663-4496-a61e-35ecbd78b9b1",
            "RateId": "33667cab-f17f-4089-ad07-c2cd50fa0df1",
            "Notes": "Test reservation",
            "ProductOrders": [
                {
                    "ProductId": "3dc5d79b-67ce-48ed-9238-47fcf5d1a59f"
                }
            ]
        }
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ReservationPrices` | array of [Reservation price](#reservation-price) | required | The reservation prices. |

##### Reservation price

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the reservation within the transaction. |
| `Total` | [Currency value](#currency-value) | required | Total price of the reservation. |

{% common %}
```json
{
    "ReservationPrices": [
        {
            "Identifier": "1234",
            "Total": {
                "Currency": "GBP",
                "Net": 20,
                "Tax": 3,
                "TaxRate": null,
                "Value": 23
            }
        }
    ]
}
```
{% endmethod %}

### Add reservations

Adds the specified reservations as a single group.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/add`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ServiceId` | string | required | Unique identifier of the [Service](#service) to be reserved. |
| `Reservations` | array of [Reservation parameters](#reservation-parameters) | required | Parameters of the new reservations. |

##### Reservation parameters

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the reservation within the transaction. |
| `State` | string [Reservation state](#reservation-state) | optional | State of the newly created reservation (either `Optional` or `Confirmed`). If not specified, `Confirmed` is used. |
| `StartUtc` | string | required | Reservation start in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | Reservation end in UTC timezone in ISO 8601 format. |
| `AdultCount` | number | required | Count of adults the reservation is for. |
| `ChildCount` | number | required | Count of children the reservation is for. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer) who owns the reservation. |
| `RequestedCategoryId` | string | required | Identifier of the requested [Space category](#space-category). |
| `RateId` | string | required | Identifier of the reservation [Rate](#rate). |
| `Notes` | string | optional | Additional notes. |
| `ProductOrders` | array of [Product order parameters](#product-order-parameters) | optional | Parameters of the products ordered together with the reservation. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "Reservations": [
        {
            "Identifier": "1234",
            "StartUtc": "2018-01-01T14:00:00Z",
            "EndUtc": "2018-01-02T10:00:00Z",
            "AdultCount": 2,
            "ChildCount": 0,
            "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
            "RequestedCategoryId": "0a5da171-3663-4496-a61e-35ecbd78b9b1",
            "RateId": "33667cab-f17f-4089-ad07-c2cd50fa0df1",
            "Notes": "Test reservation",
            "ProductOrders": [
                {
                    "ProductId": "3dc5d79b-67ce-48ed-9238-47fcf5d1a59f"
                }
            ]
        }
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Reservations` | array of [Added reservation](#added-reservation) | required | The added reservations. |

##### Added reservation

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Identifier` | string | optional | Identifier of the reservation within the transaction. |
| `Reservation` | [Reservation](#reservation) | required | The added reservation. |

{% common %}
```json
{
    "Reservations": [
        {
            "Identifier": "1234",
            "Reservation":
            {
                "AdultCount": 2,
                "AssignedSpaceId": "16ce4335-2198-408b-8949-9722894a42fb",
                "AssignedSpaceLocked": false,
                "BusinessSegmentId": "7760b5cb-a666-41bb-9758-76bf5d1df399",
                "CancelledUtc": null,
                "ChannelManager": "",
                "ChannelManagerGroupNumber": null,
                "ChannelManagerNumber": null,
                "ChannelNumber": null,
                "ChildCount": 0,
                "CompanionIds": [
                    "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a"
                ],
                "CompanyId": null,
                "CreatedUtc": "2017-08-03T13:32:35Z",
                "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
                "EndUtc": "2018-01-02T09:00:00Z",
                "GroupId": "4c79d393-53e1-45fd-bd24-2b0a36b4b3e6",
                "Id": "cfdfb9a1-b613-4cc1-b6c1-dfbb574c0f0e",
                "Number": "870",
                "Origin": "Manual",
                "RateId": "33667cab-f17f-4089-ad07-c2cd50fa0df1",
                "RequestedCategoryId": "0a5da171-3663-4496-a61e-35ecbd78b9b1",
                "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
                "StartUtc": "2018-01-01T14:00:00Z",
                "State": "Confirmed",
                "TravelAgencyId": null,
                "UpdatedUtc": "2017-08-03T13:32:35Z"
            }
        }
    ]
}
```
{% endmethod %}

### Start reservation

Marks a reservation as `Started` (= checked in). Succeeds only if all starting conditions are met (the reservation has the `Confirmed` state, does not have start set to future, has an inspected room assigned etc).

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/start`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation) to start. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Process reservation

Marks a reservation as `Processed` (= checked out). Succeeds only if all processing conditions are met (the reservation has the `Started` state, balance of all reservation members is zero etc).

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/process`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation) to process. |
| `CloseBills` | bool | optional | Whether closable bills of the reservation members should be automatically closed. |
| `AllowOpenBalance` | bool | optional | Whether non-zero consumed balance of all reservation members is allowed. |
| `Notes` | string | optional | Notes of the event, required if `AllowOpenBalance` set to `true`. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "CloseBills": false,
    "AllowOpenBalance": false,
    "Notes": null
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Cancel reservation

Cancels a reservation. Succeeds only if the reservation is cancellable.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/cancel`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation) to cancel. |
| `ChargeCancellationFee` | boolean | required | Whether cancellation fees should be charged according to rate conditions. |
| `Notes` | string | required | Addiotional notes describing the cancellation. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "ChargeCancellationFee": true,
    "Notes": "Cancellation through Connector API"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Update reservation interval

Updates reservation interval (start, end or both).

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/updateInterval`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation) to be updated. |
| `StartUtc` | string | optional | New reservation start in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | optional | New reservation end in UTC timezone in ISO 8601 format. |
| `ChargeCancellationFee` | boolean | required | Whether cancellation fee should be charged for potentially cancelled nights. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "209d984d-4985-4efb-96ec-f6591fc597bf",
    "StartUtc": "2017-08-12T15:00:00Z",
    "EndUtc": "2017-08-15T12:00:00Z",
    "ChargeCancellationFee": false
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Update reservation space

Updates reservation allocation to space, e.g. to different room.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/updateSpace`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation) to be reassigned. |
| `SpaceId` | string | required | Unique identifier of the [Space](#space) where the reservation should be assigned. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "SpaceId": "5ee074b1-6c86-48e8-915f-c7aa4702086f"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Update reservation requested category

Updates reservation category requested by the customer to a different one.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/updateRequestedCategory`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation) to be updated. |
| `CategoryId` | string | required | Unique identifier of the [Space category](#space-category). |
| `Reprice` | bool | required | Whether reservation should be repriced according to new category pricing. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "CategoryId": "773d5e42-de1e-43a0-9ce6-f940faf2303f",
    "Reprice": false
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Add reservation companion

Adds a customer as a companion to the reservation. Succeeds only if there is space for the new companion (count of current companions is less than `AdultCount + ChildCount`).

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/addCompanion`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation). |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Delete reservation companion

Removes customer companionship from the reservation. Note that the customer profile stays untouched, only the relation between the customer and reservation is deleted. 

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/deleteCompanion`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation). |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "e6ea708c-2a2a-412f-a152-b6c76ffad49b",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Add reservation product

Adds a new product order of the specified product to the reservation.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/reservations/addProduct`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation). |
| `ProductId` | string | required | Unique identifier of the [Product](#product). |
| `Count` | int | required | The amount of the products to be added. Note that if the product is charged e.g. per night, count 1 means a single product every night. Count 2 means two products every night. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "ReservationId": "c2e37cec-11a0-4fe7-8467-fbc50b54722f",
    "ProductId": "3dc5d79b-67ce-48ed-9238-47fcf5d1a59f",
    "Count": 1
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

## Customers

### Get all customers

Returns all customers from the specified interval according to the time filter (e.g. customers created in that interval).

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `TimeFilter` | string [Customer time filter](#customer-time-filter) | required | Time filter of the interval. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

##### Customer time filter

- `Created` - customer created within the interval.
- `Updated` - customer updated or created within the interval.

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "TimeFilter": "Created",
    "StartUtc": "2016-01-01T00:00:00Z",
    "EndUtc": "2016-01-07T00:00:00Z"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Customers` | array of [Customer](#customer) | required | The customers. |

##### Customer

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the customer. |
| `Number` | string | required | Number of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `Title` | string [Title](#title) | optional | Title prefix of the customer. |
| `Gender` | string [Gender](#gender) | optional | Gender of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](#country). |
| `LanguageCode` | string | optional | Language and culture code of the customers preferred language. E.g. `en-US` or `fr-FR`. |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Email` | string | optional | Email address of the customer. |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `TaxIdentificationNumber` | string  | optional | Tax identification number of the customer. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `Classifications` | array of [Customer classification](#customer-classification) | required | Classifications of the customer. |
| `Passport` | [Document](#document) | optional | Passport details of the customer. |
| `IdentityCard` | [Document](#document) | optional | Identity card details of the customer. |
| `Visa` | [Document](#document) | optional | Visa details of the customer. |
| `Address` | [Address](#address) | optional | Address of the customer. |
| `CreatedUtc` | string | required | Creation date and time of the customer in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Last update date and time of the customer in UTC timezone in ISO 8601 format. |

##### Title

- `Mister`
- `Miss`
- `Misses`

##### Gender

- `Male`
- `Female`

##### Document

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Number` | string | optional | Number of the document (e.g. passport number). |
| `Expiration` | string | optional | Expiration date in ISO 8601 format. |
| `Issuance` | string | optional | Date of issuance in ISO 8601 format. |
| `IssuingCountryCode` | string | optional | ISO 3166-1 code of the [Country](#country). |

##### Customer classification

- `PaymasterAccount`
- `Blacklist`
- `Media`
- `LoyaltyProgram`
- `PreviousComplaint`
- `Returning`
- `Staff`
- `FriendOrFamily`
- `TopManagement`
- `Important`
- `VeryImportant`
- `Problematic`
- ...

{% common %}
```json
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
{% endmethod %}

### Get all customers by ids

Returns all customers with the specified ids.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/getAllByIds`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Identifiers of [Customer](#customer)s. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Customers` | array of [Customer](#customer) | required | The customers. |

{% common %}
```json
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
{% endmethod %}

### Get all customers by emails

Returns all customers with the specified emails.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/getAllByEmails`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Emails` | array of string | required | Emails of the [Customer](#customer)s. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Emails": [
        "john@doe.com"
    ]
}
```
{% endmethod %}

#### Response

Same structure as in [Get all customers by ids](#get-all-customers-by-ids) operation.

### Search customers

Searches for customers that are active at the moment in the enterprise (e.g. companions of on checked-in reservations or paymasters).

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/search`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Name` | string | optional | Name to search by (applies to first name, last name and full name). |
| `SpaceId` | string | optional | Identifier of [Space](#space) to search by (members of [Reservation](#reservation) assigned there will be returned). |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Name": "Smith"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Customers` | array of [Customer search result](#customer-search-result) | required | The customer search results. |

##### Customer search result

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Customer` | [Customer](#customer) | required | The found customer. |
| `Reservation` | [Reservation](#reservation) | optional | Reservation of the customer in case he currently stays in the enterprise. |

{% common %}
```json
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
{% endmethod %}

### Get customers open items

Returns all open items of the specified customers, i.e. all unpaid items and all deposited payments. Sum of the open items is the balance of the customer. If the `Currency` is specified, costs of the items are converted to that currency.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/getOpenItems`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Unique identifiers of the [Customer](#customer)s. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](#currency) the item costs should be converted to. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "2a1a4315-7e6f-4131-af21-402cec59b8b9"
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Customers` | array of [Customer items](#customer-items) | required | The customers with their items. |

##### Customer items

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |
| `Items` | array of [Accounting item](#accounting-item) | required | The open items. |

{% common %}
```json
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
{% endmethod %}

### Add customer

Adds a new customer to the system and returns details of the added customer. If a customer with the specified email already exists, and `OverwriteExisting` is set to `true`, then the existing customer profile information is overwritten and the existing customer data returned. If `OverwriteExisting` is set to `false`, an error response is returned.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/add`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `OverwriteExisting` | bool | required | Whether an existing customer should be overwritten in case of duplicity. |
| `FirstName` | string | optional | First name of the customer. |
| `LastName` | string | required | Last name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `Title` | string [Title](#title) | optional | Title prefix of the customer. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](#country). |
| `BirthDate` | string | optional | Date of birth in ISO 8601 format. |
| `BirthPlace` | string | optional | Place of birth. |
| `Email` | string | optional | Email address of the customer. |
| `Phone` | string | optional | Phone number of the customer (possibly mobile). |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `Passport` | [Document](#document) | optional | Passport details of the customer. |
| `Address` | [Address](#address) | optional | Address of the customer. |
| `Classifications` | array of [Customer classification](#customer-classification) | optional | Classifications of the customer. |

{% common %}
```json
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
    "Notes": null
}
```
{% endmethod %}

#### Response

The created [Customer](#customer) or an existing [Customer](#customer) with the specified email. 

### Update customer

Updates personal information of a customer. Note that if any of the fields is left blank, it won't clear the field in Mews. The field will be left intact. In case of email update, the email will change in Mews only if there is no other customer profile in the hotel with such email. Otherwise an error response is returned.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/update`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |
| `FirstName` | string | optional | New first name. |
| `LastName` | string | optional | New last name. |
| `SecondLastName` | string | optional | New second last name. |
| `Title` | string [Title](#title) | optional | New title. |
| `BirthDate` | string | optional | New birth date in ISO 8601 format. |
| `BithPlace` | string | optional | New birth place. |
| `NationalityCode` | string | optional | ISO 3166-1 code of the [Country](#country). |
| `Email` | string | optional | New email address. |
| `Phone` | string | optional | New phone number. |
| `LoyaltyCode` | string | optional | Loyalty code of the customer. |
| `Notes` | string | optional | Internal notes about the customer. |
| `Passport` | [Document](#document) | optional | New passport details. |
| `Address` | [Address](#address) | optional | New address details. |
| `Classifications` | array of [Customer classification](#customer-classification) | optional | New classifications of the customer. |

{% common %}
```json
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
    "Passport": {
        "Number": "123456",
        "Expiration": "2020-01-01",
        "Issuance": "2016-01-01",
        "IssuingCountryCode": "US"
    }
}
```
{% endmethod %}

#### Response

The updated [Customer](#customer).

### Merge customers

Merges one customer to another. All entities attached to the source customer (e.g. orders, bills) are attached to the target customer. Profile information of the target customer are extended but not overwritten with profile information of the source customer.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/merge`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `SourceCustomerId` | string | required | Unique identifier of the source [Customer](#customer). |
| `TargetCustomerId` | string | required | Unique identifier of the target [Customer](#customer). |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "SourceCustomerId": "e11801ff-4148-4010-87f3-0d111e2893e3",
    "TargetCustomerId": "35d4b117-4e60-44a3-9580-c582117eff98"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Add customer file

Attaches the specified file to the customer profile.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/customers/addFile`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |
| `Name` | string | required | Name of the file. |
| `Type` | string | required | MIME type of the file (e.g. `application/pdf`). |
| `Data` | string | required | Base64-encoded data of the file. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerId": "49aaff6b-32d8-48f5-8234-ce875aefc508",
    "Name": "test.pdf",
    "Type": "application/pdf",
    "Data": "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

## Finance

### Get all exchange rates

Returns all available exchange rates among currencies of the [Enterprise](#enterprise).

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/exchangeRates/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ExchangeRates` | array of [Exchange rate](#exchange-rate) | required | The available exchange rates. |

##### Exchange rate

| Property | Type | | Description |
| --- | --- | --- | --- |
| `SourceCurrency` | string | required | ISO-4217 code of the source [Currency](#currency). |
| `TargetCurrency` | string | required | ISO-4217 code of the target [Currency](#currency). |
| `Value` | number | required | The exchange rate from the source currency to the target currency. |

{% common %}
```json
{
    "ExchangeRates": [
        {
            "SourceCurrency": "EUR",
            "TargetCurrency": "GBP",
            "Value": 0.85053421
        },
        {
            "SourceCurrency": "GBP",
            "TargetCurrency": "EUR",
            "Value": 1.17573165
        }
    ]
}
```
{% endmethod %}

### Get all cashiers

Returns all cashiers in the enterprise.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/cashiers/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Cashiers` | array of [Cashier](#cashier) | required | Cashiers in the enterprise. |

##### Cashier

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the cashier. |
| `IsActive` | boolean | required | Whether the cashier is still active. |
| `Name` | string | required | Name of the cashier. |

{% common %}
```json
{
    "Cashiers": [
        {
            "Id": "9a36e3fa-2299-474b-a8a2-5ea4da317abc",
            "IsActive": true,
            "Name": "Main Cashier"
        }
    ]
}
```
{% endmethod %}

### Get all cashier transactions

Returns all cashier transactions created within the specified interval.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/cashierTransactions/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `StartUtc` | string | required | Start of the creation interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the creation interval in UTC timezone in ISO 8601 format. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2017-01-01T00:00:00Z",
    "EndUtc": "2017-02-01T00:00:00Z"    
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CashierTransactions` | array of [Cashier transaction](#cashier-transaction) | required | Cashier transactions created in the interval. |

##### Cashier transaction

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the transaction. |
| `CashierId` | string | required | Unique identifier of the [Cashier](#cashier). |
| `PaymentId` | string | optional | Unique identifier of the corresponding payment [Accounting item](#accounting-item). |
| `CreatedUtc` | string | required | Creation date and time of the transaction. |
| `Number` | string | required | Number of the transaction. |
| `Notes` | string | optional | Additional notes of the transaction. |
| `Amount` | [Currency value](#currency-value) | required | Value of the transaction. |

{% common %}
```json
{
    "CashierTransactions": [
        {
            "Amount": {
                "Currency": "EUR",
                "Net": null,
                "Tax": null,
                "TaxRate": null,
                "Value": 100
            },
            "CashierId": "9a36e3fa-2299-474b-a8a2-5ea4da317abc",
            "CreatedUtc": "2017-01-10T00:00:00Z",
            "Id": "177740c3-fec9-4338-a224-a3b03a35b3e1",
            "Notes": "Cash payment EUR",
            "Number": "47",
            "PaymentId": "a68ef257-2fbc-4a4f-85de-59d808cef657"
        }
    ]
}
```
{% endmethod %}

### Get all accounting categories

Returns all accounting categories of the enterprise associated with the connector integration.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/accountingCategories/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `AccountingCategories` | array of [Accounting category](#accounting-category) | required | Accounting categories of the enterprise. |

##### Accounting category

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the category. |
| `IsActive` | boolean | required | Whether the accounting category is still active. |
| `Name` | string | required | Name of the category. |
| `Code` | string | optional | Code of the category within Mews. |
| `Classification` | string [Accounting category classification](#accounting-category-classification) | optional | Classification of the accounting category allowing cross-enterprise reporting. |
| `ExternalCode` | string | optional | Code of the category in external systems. |
| `LedgerAccountCode` | string | optional | Code of the ledger account (double entry accounting). |
| `PostingAccountCode` | string | optional | Code of the posting account (double entry accounting). |
| `CostCenterCode` | string | optional | Code of cost center. |

##### Accounting category classification

- `Accommodation`
- `FoodAndBeverage`
- `Taxes`
- ...

{% common %}
```json
{
    "AccountingCategories": [
        {
            "Classification": "Accommodation",
            "Code": "345",
            "CostCenterCode": "2589",
            "ExternalCode": "3010",
            "Id": "0cf7aa90-736f-43e9-a7dc-787704548d86",
            "IsActive": true,
            "LedgerAccountCode": "311100",
            "Name": "Accommodation",
            "PostingAccountCode": "602020"
        },
        {
            "Classification": null,
            "Code": "100",
            "CostCenterCode": "2589",
            "ExternalCode": "ABVG",
            "Id": "0b9560fb-055d-47d3-a6d4-e579c44ca558",
            "IsActive": true,
            "LedgerAccountCode": "311100",
            "Name": "Alcoholic Beverage",
            "PostingAccountCode": "602020"
        }
    ]
}
```
{% endmethod %}

### Get all accounting items

Returns all accounting items of the enterprise that were consumed (posted) or will be consumed within the specified interval. If the `Currency` is specified, costs of the items are converted to that currency.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/accountingItems/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `TimeFilter` | string [Accounting item time filter](#accounting-item-time-filter) | optional | Time filter of the interval. If not specified, items `Consumed` in the interval are returned. |
| `StartUtc` | string | required | Start of the consumption interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the consumption interval in UTC timezone in ISO 8601 format. |
| `Currency` | string | optional | ISO-4217 code of the [Currency](#currency) the item costs should be converted to. |

##### Accounting item time filter

- `Consumed` - items consumed in the interval.
- `Closed` - items whose bills have been closed in the interval.

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2017-01-01T00:00:00Z",
    "EndUtc": "2017-02-01T00:00:00Z"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `AccountingItems` | array of [Accounting item](#accounting-item) | required | The consumed accounting items. |

##### Accounting item

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the item. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer) whose account the item belongs to. |
| `ProductId` | string | optional | Unique identifier of the [Product](#product). |
| `ServiceId` | string | optional | Unique identifier of the [Service](#service) the item belongs to. |
| `OrderId` | string | optional | Unique identifier of the order (or [Reservation](#reservation) which is a special type of order) the item belongs to. |
| `BillId` | string | optional | Unique identifier of the bill the item is assigned to. |
| `InvoiceId` | string | optional | Unique identifier of the invoiced [Bill](#bill) the item is receivable for. |
| `AccountingCategoryId` | string | optional | Unique identifier of the [Accounting category](#accounting-category) the item belongs to. |
| `Amount` | [Currency value](#currency-value) | required | Amount the item costs, negative amount represents either rebate or a payment. |
| `Type` | string [Accounting item type](#accounting-item-type) | required | Type of the item. |
| `Name` | string | required | Name of the item. |
| `Notes` | string | optional | Additional notes. |
| `ConsumptionUtc` | string | required | Date and time of the item consumption in UTC timezone in ISO 8601 format. |
| `ClosedUtc` | string | optional | Date and time of the item bill closure in UTC timezone in ISO 8601 format. |

##### Accounting item type

- `ServiceRevenue`
- `ProductRevenue`
- `AdditionalRevenue`
- `Payment`

##### Currency value

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Currency` | string | required | ISO-4217 code of the [Currency](#currency). |
| `Net` | number | optional | Net value in case the item is taxed. |
| `Tax` | number | optional | Tax value in case the item is taxed. |
| `TaxRate` | number | optional | Tax rate in case the item is taxed (e.g. `0.21`). |
| `Value` | number | required | Amount in the currency (including tax if taxed). |

{% common %}
```json
{
    "AccountingItems": [
        {
            "AccountingCategoryId": "4ac8ce68-5732-4f1d-bf0d-e557072c926f",
            "Amount": {
                "Currency": "GBP",
                "Net": 2.08,
                "Tax": 0.42,
                "TaxRate": 0.2,
                "Value": 2.5
            },
            "BillId": null,
            "ClosedUtc": "2017-02-41T10:41:54Z",
            "ConsumptionUtc": "2016-07-27T12:48:39Z",
            "CustomerId": "2a1a4315-7e6f-4131-af21-402cec59b8b9",
            "Id": "89b93f7c-5c63-4de2-bd17-ec5fee5e3120",
            "InvoiceId": null,
            "Name": "Caramel, Pepper & Chilli Popcorn",
            "Notes": null,
            "OrderId": "810b8c3a-d358-4378-84a9-534c830016fc",
            "ProductId": null,
            "ServiceId": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
            "Type": "ServiceRevenue"
        }
    ]
}
```
{% endmethod %}

### Get all bills by ids

Returns all bills with the specified ids.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/bills/getAllByIds`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `BillIds` | array of string | required | Unique identifiers of the [Bill](#bill)s. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "BillIds": [
        "e654f217-d1b5-46be-a820-e93ba568dfac"
    ]
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Bills` | array of [Bill](#bill) | required | The closed bills. |

##### Bill

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the bill. |
| `CustomerId` | string | optional | Unique identifier of the [Customer](#customer) the bill is issued to. |
| `CompanyId` | string | optional | Unique identifier of the [Company](#company) the bill is issued to. |
| `State` | string [Bill state](#bill-state) | required | State of the bill. |
| `Type` | string [Bill type](#bill-type) | required | Type of the bill. |
| `Number` | string | required | Number of the bill. |
| `IssuedUtc` | string | required | Date and time of the bill issuance in UTC timezone in ISO 8601 format. |
| `DueUtc` | string | optional | Bill due date and time in UTC timezone in ISO 8601 format. |
| `Notes` | string | optional | Additional notes. |
| `Revenue` | array of [Accounting item](#accounting-item) | required | The revenue items on the bill. |
| `Payments` | array of [Accounting item](#accounting-item) | required | The payments on the bill. |

##### Bill state

- `Open`
- `Closed`

##### Bill type

A bill is either a `Receipt` which means , or `Invoice` that is supposed to be paid in the future.

- `Receipt` - the bill has already been fully paid.
- `Invoice` - the bill is supposed to be paid in the future. Before closing it is balanced with an invoice payment.

{% common %}
```json
{
    "Bills": [
        {
            "CompanyId": null,
            "CustomerId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "DueUtc": null,
            "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
            "IssuedUtc": "2017-01-31T10:58:06Z",
            "Notes": "",
            "Number": "29",
            "Payments": [
                {
                    "AccountingCategoryId": null,
                    "Amount": {
                        "Currency": "GBP",
                        "Net": null,
                        "Tax": null,
                        "TaxRate": null,
                        "Value": -340.22
                    },
                    "BillId": "26afba60-06c3-455b-92db-0e3983be0b1d",
                    "ClosedUtc": "2017-02-41T10:41:54Z",
                    "ConsumptionUtc": "2017-01-31T10:58:06Z",
                    "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
                    "Id": "9701f58d-3959-4d9d-9ba8-8e1d7c0adceb",
                    "InvoiceId": null,
                    "Name": "Invoice payment",
                    "Notes": null,
                    "OrderId": null,
                    "ProductId": null,
                    "ServiceId": null,
                    "Type": "Payment"
                }
            ],
            "Revenue": [
                {
                    "AccountingCategoryId": "7cd113f6-c5de-4bc9-8d78-3f73721c4c37",
                    "Amount": {
                        "Currency": "GBP",
                        "Net": 340.22,
                        "Tax": 0,
                        "TaxRate": 0,
                        "Value": 340.22
                    },
                    "BillId": "26afba60-06c3-455b-92db-0e3983be0b1d",
                    "ClosedUtc": "2017-01-41T10:41:54Z",
                    "ConsumptionUtc": "2017-01-31T08:41:54Z",
                    "CustomerId": "b22bf671-ccdf-40aa-a7e6-b20a4f91d79a",
                    "Id": "bc5885fe-38ce-4d3e-b5c4-f30cb3b8622f",
                    "InvoiceId": null,
                    "Name": "Miscellaneous",
                    "Notes": null,
                    "OrderId": "1dac7592-afe7-4dd3-acc0-fefdddadbe6e",
                    "ProductId": null,
                    "ServiceId": "0f7f56db-b8b3-42b0-8b53-2df4c8a87997",
                    "Type": "ProductRevenue"
                }
            ],
            "State": "Closed",
            "Type": "Invoice"
        }
    ]
}
```
{% endmethod %}

### Get all bills by customers

Returns all bills of the specified customers.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/bills/getAllByCustomers`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerIds` | array of string | required | Unique identifiers of the [Customer](#customer)s. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerIds": [
        "35d4b117-4e60-44a3-9580-c582117eff98"
    ]
}
```
{% endmethod %}

#### Response

Same structure as in [Get all bills by ids](#get-all-bills-by-ids) operation.

### Get all closed bills

Returns all bills (both receipts and invoices) that have been closed in the specified time interval.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/bills/getAllClosed`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `StartUtc` | string | required | Start of the interval in UTC timezone in ISO 8601 format. |
| `EndUtc` | string | required | End of the interval in UTC timezone in ISO 8601 format. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "StartUtc": "2017-01-01T00:00:00Z",
    "EndUtc": "2017-02-01T00:00:00Z"
}
```
{% endmethod %}

#### Response

Same structure as in [Get all bills by ids](#get-all-bills-by-ids) operation.

### Add credit card payment

Adds a new credit card payment to a bill of the specified customer. Note that the payment is added to open bill of the customer, either to the specified one or the default one. So the bill has to be later settled in Mews. So e.g. payment terminal integration should use this operation to post payments taken through the terminal.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/payments/addCreditCard`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Currency value](#currency-value) | required | Amount of the credit card payment. |
| `CreditCard` | [Credit card](#credit-card) | required | Credit card details. |
| `Category` | [Accounting category parameters](#accounting-category-parameters) | optional | Accounting category to be assigned to the payment. |
| `ReceiptIdentifier` | string | optional | Identifier of the payment receipt. |
| `Notes` | string | optional | Additional payment notes. |

##### Credit card

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Type` | string | required | Type of the credit card, one of: `Visa`, `MasterCard`, `Amex`, `Discover`, `DinersClub`, `Jcb`, `EnRoute`, `Maestro`, `UnionPay`. |
| `Number` | string | required | Obfuscated credit card number. At most first six digits and last four digits can be specified, the digits in between should be replaced with `*`. It is possible to provide even more obfuscated number or just last four digits. **Never provide full credit card number**. For example `411111******1111`. |
| `Expiration` | string | required | Expiration of the credit card in format `MM/YYYY`, e.g. `12/2016` or `04/2017`. |
| `Name` | string | required | Name of the card holder. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
    "Amount": { 
        "Currency": "GBP",
        "Value": 100
    },
    "CreditCard": {
        "Type": "Visa",
        "Number": "411111******1111",
        "Expiration": "12/2016",
        "Name": "John Smith"
    },
    "Category": {
        "Code": "CCP"
    },
    "ReceiptIdentifier": "123456",
    "Notes": "Terminal A"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

### Add external payment

Adds a new external payment to a bill of the specified customer. An external payment represents a payment that is tracked outside of the system.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/payments/addExternal`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CustomerId` | string | required | Unique identifier of the [Customer](#customer). |
| `BillId` | string | optional | Unique identifier of an open bill of the customer where to assign the payment. |
| `Amount` | [Currency value](#currency-value) | required | Amount of the external card payment. |
| `Type` | string [External payment type](#external-payment-type) | optional | Type of the external payment. |
| `Category` | [Accounting category parameters](#accounting-category-parameters) | optional | Accounting category to be assigned to the payment. |
| `Notes` | string | optional | Additional payment notes. |

##### External payment type

- `Cash`
- `CreditCard`

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CustomerId": "35d4b117-4e60-44a3-9580-c582117eff98",
    "Amount": { 
        "Currency": "GBP",
        "Value": 100
    },
    "Type": "Cash"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}

## Integrations

### Get all devices

Returns all devices in the enterprise.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/devices/getAll`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Devices` | array of [Device](#device) | required | The devices. |

##### Device

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the device. |
| `Name` | string | required | Name of the device. |
| `Type` | string | required | Type of the device (see [Command data](#command-data)). |

{% common %}
```json
{
    "Devices": [
        {
            "Id": "d14efcfd-75b9-4bd3-9f10-5657a01f860a",
            "Name": "Key cutter 1",
            "Type": "KeyCutter"
        }
    ]
}
```
{% endmethod %}

### Get all commands

Returns all commands the are still active from the client application point of view. That means commands that are in either `Pending` or `Received` state.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/commands/getAllActive`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Commands` | array of [Command](#command) | required | The active commands. |

##### Command

| Property | Type | | Description |
| --- | --- | --- | --- |
| `Id` | string | required | Unique identifier of the command. |
| `State` | string [Command state](#command-state) | required | State of the command. |
| `CreatedUtc` | string | required | Creation date and time of the command. |
| `Creator` | [User](#user) | optional | Creator of the command. |
| `Device` | [Device](#device) | required | Device that the command should be executed on. |
| `Data` | object | [Command data](#command-data) | Data of the command depending on [Device Type](#device-type) of the [Device](#device). |

##### Command state

- `Pending` - Created in Mews, but not yet received by the client application.
- `Received` - Received by the client application.
- `Processing` - Being processed by the client application.
- `Processed` - Successfully processed command.
- `Cancelled` - A command whose execution has been cancelled before (or during) processing.
- `Error` - A command whose execution or processing was terminated by an error.

##### User

| Property | Type | | Description |
| --- | --- | --- | --- |
| `FirstName` | string | optional | First name of the user. |
| `LastName` | string | required | Last name of the user. |
| `ImageUrl` | string | optional | URL of the profile image. |

#### Command data

Structure of command data varies depending on type of the [Device](#device):

- `Printer` - [Printer command data](#printer-command-data)
- `PaymentTerminal` - [Payment Terminal Command data](#payment-terminal-command-data)
- `PassportScanner` - [Passport scanner command data](#passport-scanner-command-data)
- `FiscalMachine` - [Fiscal machine command data](#fiscal-machine-command-data)
- `KeyCutter` - [Key cutter command data](#key-cutter-command-data)
- `VisiOnlineKeyCutter` - [VisiOnline key cutter command data](#visionline-key-cutter-command-data)

##### Printer command data

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CopyCount` | number | required | Number of copies to be printed. |
| `FileType` | string | required | MIME type of the file to be printed (e.g. `application/pdf`). |
| `FileData` | string | required | Base64-encoded data of the file to be printed. |
| `PrinterName` | string | required | Name of the printer. |
| `PrinterDriverName` | string | required | Name of the printer driver. |
| `PrinterPortName` | string | required | Name of the printer port. |

##### Passport scanner command data

| Property | Type | | Description |
| --- | --- | --- | --- |
| `PassportScannerId` | string | optional | Identifier of the passport scanner. |
| `CustomerId` | string | optional | Unique identifier of the [Customer](#customer) who should be processed. |
| `ReservationId` | string | optional | Unique identifier of the [Reservation](#reservation) whose companions should be processed. |

##### Fiscal machine command data

| Property | Type | | Description |
| --- | --- | --- | --- |
| `FiscalMachineId` | string | optional | Identifier of the fiscal machine. |
| `Bill` | [Bill](#bill) | required | The issued bill that should be fiscalized. |
| `TaxIdentifier` | string | optional | Tax identifier to be used for fiscalization. |

##### Key cutter command data

| Property | Type | | Description |
| --- | --- | --- | --- |
| `KeyCutterId` | string | optional | Identifier of the key cutter. |
| `KeyCutterData` | string | optional | Custom JSON data. |
| `ApiUrl` | string | optional | URL of the key cutter server API. |
| `StartUtc` | string | required | Reservation start. |
| `EndUtc` | string | required | Reservation end. |
| `FirstName` | string | optional | First name of the reservation owner. |
| `LastName` | string | required | Last name of the reservation owner. |
| `KeyCount` | number | required | Count of keys to cut. |
| `LockIds` | array of string | required | Identifiers of locks/rooms the key should open. |
| `ReservationId` | string | optional | Unique identifier of the [Reservation](#reservation). |

##### VisiOnline key cutter command data

| Property | Type | | Description |
| --- | --- | --- | --- |
| `KeyCutterId` | string | required | Identifier of the key cutter which should cut the keys. |
| `ApiUrl` | string | required | VisiOnline API URL. |
| `UserName` | string | required | VisiOnline user name. |
| `Password` | string | required | VisiOnline password. |
| `LockIds` | array of string | required | Identifiers of locks/rooms the key should open. |
| `ValidityStartUtc` | string | required | Start of the key validity interval in UTC timezone in ISO 8601 format. |
| `ValidityEndUtc` | string | required | End of the key validity interval in UTC timezone in ISO 8601 format. |
| `KeyCount` | number | required | Count of keys to cut. |
| `Reservation` | [Reservation](#reservation) | optional | Additional information about the reservation. |

{% common %}
```json
{
    "Commands": [
        {
            "Id": "aa20961f-6d9e-4b35-ad25-071213530aec",
            "State": "Pending",
            "CreatedUtc": "2015-09-02T19:25:44Z",
            "Creator": {
                "FirstName": "Sample",
                "LastName": "User",
                "ImageUrl": "..."
            },
            "Device": {
                "Id": "63efb573-fc58-4065-b687-9bdd51568529",
                "Name": "Test Printer",
                "Type": "Printer"
            },
            "Data": {
                "CopyCount": 1,
                "FileType": "application/pdf",
                "FileData": "...",
                "PrinterName": "Printer",
                "PrinterDriverName": "",
                "PrinterPortName": ""
            }
        }
    ]
}
```
{% endmethod %}

### Get all commands by ids

Returns all commands by their identifiers.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/commands/getAllByIds`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CommandIds` | array of string | required | Unique identifiers of [Command](#command)s to be returned. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CommandIds": [
        "aa20961f-6d9e-4b35-ad25-071213530aec"
    ]
}
```
{% endmethod %}

#### Response

Same structure as in [Get all commands](#get-all-commands) operation.

### Add printer command

Adds a new printer command representing printing of the specified document on a printer.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/commands/addPrinter`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `PrinterId` | string | required | Uniqque identifier of the `Printer` [Device](#device) where to print the document. |
| `CopyCount` | int | required | Count of copies to be printed. |
| `Data` | string | required | Base64 encoded data of PDF document to print. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "PrinterId": "d117866d-78de-4459-9077-42d7ea0120e3",
    "CopyCount": 1,
    "Data": "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G"
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CommandId` | string | required | Unique identifier of the created [Command](#command). |

{% common %}
```json
{
    "CommandId": "588fc010-1971-4589-b39f-9550d1e1b3a7"
}
```
{% endmethod %}

### Add key cutter command

Adds a new key cutter command representing cutting of a key for the specified reservation.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/commands/addKeyCutter`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `KeyCutterId` | string | required | Unique identifier of the `KeyCutter` [Device](#device) where to encode the key. |
| `ReservationId` | string | required | Unique identifier of the [Reservation](#reservation) to encode the key for. |
| `KeyCount` | int | required | Count of keys to encode. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "KeyCutterId": "7dafffff-a727-4917-a203-bd53995f21bf",
    "ReservationId": "be35b39e-ad7e-460a-8de9-4c7581e016a2",
    "KeyCount": 1
}
```
{% endmethod %}

{% method %}
#### Response

| Property | Type | | Description |
| --- | --- | --- | --- |
| `CommandId` | string | required | Unique identifier of the created [Command](#command). |

{% common %}
```json
{
    "CommandId": "4a787fce-a881-4f40-8c97-bc97a6ef4ee8"
}
```
{% endmethod %}

### Update command

Updates state of a command.

{% method %}
#### Request `[PlatformAddress]/api/connector/v1/commands/update`

| Property | Type | | Description |
| --- | --- | --- | --- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `CommandId` | string | required | Identifier of the [Command](#command) to be updated. |
| `State` | string [Command state](#command-state) | required | New state of the command. |
| `Progress` | number | optional | Progress of the command processing. Only used if the `State` is `Processing`, otherwise ignored. |
| `Notes` | string | optional | Notes about command execution. Only used if the `State` is `Processed`, `Cancelled` or `Error`, otherwise ignored. |

{% common %}
```json
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "CommandId": "aa20961f-6d9e-4b35-ad25-071213530aec",
    "State": "Processed"
}
```
{% endmethod %}

{% method %}
#### Response

Empty object.

{% common %}
```json
{}
```
{% endmethod %}
