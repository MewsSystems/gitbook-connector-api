# Configuration

## Get configuration

Returns configuration of the enterprise and the client.

### Request

`[PlatformAddress]/api/connector/v1/configuration/get`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0"
}
```

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |

### Response

```javascript
{
    "NowUtc": "2018-01-01T14:58:02Z",
    "Enterprise": {
        "Id": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
        "ChainId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
        "CreatedUtc": "2015-07-07T13:33:17Z",
        "Name": "Connector API Hotel",
        "TimeZoneIdentifier": "Europe/Budapest",
        "LegalEnvironmentCode": "UK",
        "DefaultLanguageCode": "en-US",
        "EditableHistoryInterval": "P0M3DT0H0M0S",
        "WebsiteUrl": "https://en.wikipedia.org/wiki/St._Vitus_Cathedral",
        "Email": "charging-api@mews.li",
        "Phone": "00000 123 456 789",
        "LogoImageId": null,
        "CoverImageId": null,
        "Address": {
            "Id": "8c2c4371-5d42-40a9-b551-ab0b00d75076",
            "Line1": "Anenské nám. 1",
            "Line2": "Ahoj",
            "City": "Prague",
            "PostalCode": "110 00",
            "CountryCode": "CZ",
            "CountrySubdivisionCode": null,
            "Latitude": 50.085180,
            "Longitude": 14.414926
        },
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
        "Pricing": "Gross",
        "TaxPrecision": null,
        "ExternalIdentifier": null,
        "AccountingConfiguration": {
            "AdditionalTaxIdentifier": null,
            "CompanyName": "Connector API Hotel",
            "BankAccountNumber": "1234",
            "BankName": "Random bank",
            "Iban": "CZ7250517882393618329719",
            "Bic": "GIBACZPY"
        }
    },
    "Service":
    {
        "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
        "IsActive": true,
        "Name": "Accommodation",
        "StartTime": "PT14H",
        "EndTime": "PT12H",
        "Promotions": {
            "BeforeCheckIn": false,
            "AfterCheckIn": false,
            "DuringStay": false,
            "BeforeCheckOut": false,
            "AfterCheckOut": false
        },
        "Type": "Reservable"
    },
    "PaymentCardStorage": null
}
```

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `NowUtc` | string | required | Current server date and time in UTC timezone in ISO 8601 format. |
| `Enterprise` | [Enterprise](#enterprise) | required | The enterprise \(e.g. hotel, hostel\) associated with the access token. |
| `Service` | [Service](services.md#service) | optional | The reservable service \(e.g. accommodation, parking\) associated with the access token of the service scoped integration. |
| `PaymentCardStorage` | [PaymentCardStorage](#payment-card-storage) | optional | Contains information about payment card storage. |

#### Enterprise

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `ChainId` | string | required | Unique identifier of the chain whose member the enterprise is. |
| `CreatedUtc` | string | required | Creation date and time of the enterprise in UTC timezone in ISO 8601 format. |
| `Name` | string | required | Name of the enterprise. |
| `TimeZoneIdentifier` | string | required | IANA timezone identifier of the enterprise. |
| `LegalEnvironmentCode` | string | required | Unique identifier of the legal environment where the enterprise resides. |
| `DefaultLanguageCode` | string | required | Language-culture codes of the enterprise default [Language](languages.md#language). |
| `EditableHistoryInterval` | string | required | Editable history interval in ISO 8601 duration format. |
| `WebsiteUrl` | string | optional | URL of the enterprise website. |
| `Email` | string | optional | Email address of the enterprise. |
| `Phone` | string | optional | Phone number of the enterprise. |
| `LogoImageId` | string | required | Unique identifier of the enterprise logo image. |
| `CoverImageId` | string | required | Unique identifier of the enterprise cover image. |
| `Address` | [Address](#address) | required | Address of the enterprise. |
| `Currencies` | array of [Accepted currency](#accepted-currency) | required | Currencies accepted by the enterprise. |
| `Pricing` | string | required | [Pricing](#pricing) of the enterprise. |
| `TaxPrecision` | string | optional | Tax precision used for financial calculations in the enterprise. If `null`, [Currency](currencies.md#currency) precision is used. |
| `ExternalIdentifier` | string | optional, max 255 characters | Portfolio-level enterprise identifier, chosen by the user for the purposes of portfolio management; called Enterprise Key in Mews Operations. |
| `AccountingConfiguration` | [Accounting configuration](#accounting-configuration) | optional | Configuration information containg financial information about the property. |

#### Address

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `Id` | string | required | Unique identifier of the address. |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the [Country](countries.md#country). |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |
| `Latitude` | number | optional | The latitude. |
| `Longitude` | number | optional | The longitude. |

#### Accepted currency

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `Currency` | string | required | ISO-4217 code of the [Currency](currencies.md#currency). |
| `IsDefault` | bool | required | Whether the currency is a default accounting currency. |
| `IsEnabled` | bool | required | Whether the currency is enabled for usage. |

#### Pricing

* `Gross` - the enterprise shows amount with gross prices.
* `Net` - the enterprise shows amount with net prices.

#### Payment card storage

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `PublicKey` | string | required | Key for accessing PCI proxy storage. |

#### Accounting configuration

| Property | Type | Contract | Description |
| :--- | :--- | :--- | :--- |
| `AdditionalTaxIdentifier` | string | optional, max 50 characters | Organization number. |
| `CompanyName` | string | optional, max 100 characters | Legal name of the company. |
| `BankAccountNumber` | string | optional, max 50 characters | Bank account number. |
| `BankName` | string | optional, max 100 characters | Name of the bank. |
| `Iban` | string | optional, max 40 characters | International Bank Account Number. |
| `Bic` | string | optional, max 11 characters | Business Identification Code. |
