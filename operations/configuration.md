<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
# Configuration

## Get configuration

Returns the enterprise configuration. For single-enterprise Access Tokens, this is the enterprise associated with the token. For [Portfolio Access Tokens](../concepts/multi-property.md), use the `EnterpriseId` parameter to specify which enterprise you want the configuration for. In the case of service scoped integrations, the operation returns the configuration associated with both the enterprise and the bookable service linked to the token.

### Request

`[PlatformAddress]/api/connector/v1/configuration/get`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "851df8c8-90f2-4c4a-8e01-a4fc46b25178"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the [Enterprise](configuration.md#enterprise), defaults to the enterprise associated with the given access token. |

### Response

```javascript
{
  "NowUtc": "2018-01-01T14:58:02Z",
  "Enterprise": {
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
    "AccountingConfiguration": {
      "AdditionalTaxIdentifier": null,
      "CompanyName": "Connector API Hotel",
      "BankAccountNumber": "1234",
      "BankName": "Random bank",
      "Iban": "CZ7250517882393618329719",
      "Bic": "GIBACZPY",
      "SurchargeConfiguration": {
        "SurchargeFees": {
          "Amex": 3,
          "DinersClub": 4
        },
        "SurchargeServiceId": "2b9b0143-3135-485b-8064-76c90d1be69e",
        "SurchargeTaxCode": "US-HI-KA"
      },
      "EnabledExternalPaymentTypes": [
        "Invoice",
        "Cash",
        "GiftCard"
      ],
      "Options": [
        "ReceivableTrackingEnabled",
        "GroupTaxesOnBill"
      ]
    },
    "IsPortfolio": false,
    "Id": "851df8c8-90f2-4c4a-8e01-a4fc46b25178",
    "ExternalIdentifier": null,
    "HoldingKey": "CA123",
    "ChainId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
    "ChainName": "Connector API Chain",
    "CreatedUtc": "2015-07-07T13:33:17Z",
    "UpdatedUtc": "2015-07-07T13:33:17Z",
    "Name": "Connector API Hotel",
    "TimeZoneIdentifier": "Europe/Budapest",
    "LegalEnvironmentCode": "UK",
    "AccommodationEnvironmentCode": null,
    "AccountingEnvironmentCode": null,
    "TaxEnvironmentCode": null,
    "DefaultLanguageCode": "en-US",
    "EditableHistoryInterval": "P0M7DT0H0M0S",
    "AccountingEditableHistoryInterval": "P0M7DT0H0M0S",
    "OperationalEditableHistoryInterval": "P0M5DT0H0M0S",
    "BusinessDayClosingOffset": null,
    "WebsiteUrl": "https://en.wikipedia.org/wiki/St._Vitus_Cathedral",
    "Email": "charging-api@mews.li",
    "Phone": "00000 123 456 789",
    "LogoImageId": null,
    "CoverImageId": null,
    "Pricing": "Gross",
    "TaxPrecision": null,
    "AddressId": "c556f56e-713e-4102-9de5-0e853b5a8586",
    "Address": {
      "Id": "8c2c4371-5d42-40a9-b551-ab0b00d75076",
      "Line1": "I.P. Pavlova 5",
      "Line2": null,
      "City": "Prague",
      "PostalCode": "1200",
      "CountryCode": "CZ",
      "CountrySubdivisionCode": null,
      "Latitude": 14.429645,
      "Longitude": 50.075181
    },
    "GroupNames": [
      "Connector API Group"
    ],
    "Subscription": {
      "TaxIdentifier": "123456789 RC 0001"
    }
  },
  "Service": {
    "Id": "bd26d8db-86da-4f96-9efc-e5a4654a4a94",
    "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "IsActive": true,
    "Name": "Accommodation",
    "Names": {
      "en-GB": "Accommodation"
    },
    "StartTime": "PT14H",
    "EndTime": "PT12H",
    "Options": {
      "BillAsPackage": false
    },
    "Promotions": {
      "BeforeCheckIn": false,
      "AfterCheckIn": false,
      "DuringStay": false,
      "BeforeCheckOut": false,
      "AfterCheckOut": false,
      "DuringCheckOut": false
    },
    "Type": "Reservable",
    "Ordering": 0,
    "Data": null,
    "ExternalIdentifier": null,
    "CreatedUtc": "2023-10-01T11:48:57Z",
    "UpdatedUtc": "2023-10-28T11:48:57Z"
  },
  "PaymentCardStorage": null,
  "IsIdentityDocumentNumberRequired": true
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `NowUtc` | string | required | Current server date and time in UTC timezone in ISO 8601 format. |
| `Enterprise` | [Enterprise](configuration.md#enterprise) | required | The enterprise (e.g. hotel, hostel) associated with the access token. |
| `Service` | [Service](services.md#service) | optional | The reservable service (e.g. accommodation, parking) associated with the access token of the service scoped integration. |
| `PaymentCardStorage` | [Payment card storage](configuration.md#payment-card-storage) | optional | Contains information about payment card storage. |
| `IsIdentityDocumentNumberRequired` | boolean | required | Whether the identity documents for this enterprise include the value of identity document number as required by the legal environment. When `false`, the number is not required, and an empty string can be used in write operations. In read operations, an empty string is returned when an empty string was provided for the number. |

#### Enterprise

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the enterprise. |
| `ExternalIdentifier` | string | optional, max length 255 characters | Identifier of the enterprise from external system. |
| `HoldingKey` | string | optional, max length 255 characters | Identifies an enterprise in the external system of a holding company. The holding company may administer multiple portfolios. |
| `ChainId` | string | required | Unique identifier of the chain to which the enterprise belongs. |
| `ChainName` | string | required | Name of the `Chain` to which the enterprise belongs. |
| `CreatedUtc` | string | required | Creation date and time of the enterprise in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Creation date and time of the enterprise in UTC timezone in ISO 8601 format. |
| `Name` | string | required | Name of the enterprise. |
| `TimeZoneIdentifier` | string | required | IANA timezone identifier of the enterprise. |
| `LegalEnvironmentCode` | string | required | Unique identifier of the legal environment where the enterprise resides. |
| `AccommodationEnvironmentCode` | string | required | Unique code of the accommodation environment where the enterprise resides. |
| `AccountingEnvironmentCode` | string | required | Unique code of the accounting environment where the enterprise resides. |
| `TaxEnvironmentCode` | string | required | Unique code of the tax environment where the enterprise resides. |
| `DefaultLanguageCode` | string | required | Language-culture codes of the enterprise default `Language`. |
| `AccountingEditableHistoryInterval` | string | required | Editable history interval for accounting data in ISO 8601 duration format. |
| `OperationalEditableHistoryInterval` | string | required | Editable history interval for operational data in ISO 8601 duration format. |
| `BusinessDayClosingOffset` | string | optional | The offset value for the business day closing time, in ISO 8601 duration format. |
| `WebsiteUrl` | string | optional | URL of the enterprise website. |
| `Email` | string | optional | Email address of the enterprise. |
| `Phone` | string | optional | Phone number of the enterprise. |
| `LogoImageId` | string | optional | Unique identifier of the `Image` of the enterprise logo. |
| `CoverImageId` | string | optional | Unique identifier of the `Image` of the enterprise cover. |
| `Pricing` | [Pricing](configuration.md#pricing) | required | Pricing of the enterprise. |
| `TaxPrecision` | integer | optional | Tax precision used for financial calculations in the enterprise. If `null`, `Currency` precision is used. |
| `AddressId` | string | required | Unique identifier of the `Address` of the enterprise. |
| `Address` | [Address](configuration.md#address) | required | Address of the enterprise. |
| `GroupNames` | array of string | required | A list of the group names of the enterprise. |
| `Subscription` | [Enterprise subscription](enterprises.md#enterprise-subscription) | required | Subscription information of the enterprise. |
| `Currencies` | array of [Accepted currency](configuration.md#accepted-currency) | required | Currencies accepted by the enterprise. |
| `AccountingConfiguration` | [Accounting configuration](configuration.md#accounting-configuration) | optional | Configuration information containing financial information about the property. |
| `IsPortfolio` | boolean | required | Whether the enterprise is a Portfolio enterprise (see [Multi-property guidelines](../guidelines/multi-property.md)). |
| ~~`EditableHistoryInterval`~~ | ~~string~~ | ~~required~~ | **Deprecated!** Use `AccountingEditableHistoryInterval` and `OperationalEditableHistoryInterval` instead.|

#### Pricing

* `Gross` - The enterprise shows amount with gross prices.
* `Net` - The enterprise shows amount with net prices.

#### Address

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the address. |
| `Line1` | string | optional | First line of the address. |
| `Line2` | string | optional | Second line of the address. |
| `City` | string | optional | The city. |
| `PostalCode` | string | optional | Postal code. |
| `CountryCode` | string | optional | ISO 3166-1 code of the `Country`. |
| `CountrySubdivisionCode` | string | optional | ISO 3166-2 code of the administrative division, e.g. `DE-BW`. |
| `Latitude` | number | optional | The latitude. |
| `Longitude` | number | optional | The longitude. |

#### Accepted currency

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Currency` | string | required | ISO-4217 code of the `Currency`. |
| `IsDefault` | boolean | required | Whether the currency is a default accounting currency. |
| `IsEnabled` | boolean | required | Whether the currency is enabled for usage. |

#### Accounting configuration

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AdditionalTaxIdentifier` | string | optional, max length 50 characters | Organization number. |
| `CompanyName` | string | optional, max length 100 characters | Legal name of the company. |
| `BankAccountNumber` | string | optional, max length 50 characters | Bank account number. |
| `BankName` | string | optional, max length 100 characters | Name of the bank. |
| `Iban` | string | optional, max length 40 characters | International Bank Account Number. |
| `Bic` | string | optional, max length 11 characters | Business Identification Code. |
| `SurchargeConfiguration` | [Surcharging fees configuration](configuration.md#surcharging-fees-configuration) | required | Configuration for surcharging fees. |
| `EnabledExternalPaymentTypes` | array of [External payment type](payments.md#external-payment-type) | required | External payment types that are enabled for the enterprise and can be used in `payments/addExternal`. |
| `Options` | array of [Accounting configuration option](configuration.md#accounting-configuration-option) | required | Accounting configuration options. |

#### Surcharging fees configuration

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `SurchargeFees` | [Dictionary of numbers](_objects.md#dictionary-of-numbers) | required | Dictionary keys are `CreditCardType` and values are surcharging fees as a percentage. |
| `SurchargeServiceId` | string | optional | Unique identifier of the surcharging `Service`. |
| `SurchargeTaxCode` | string | optional | Surcharging fee `TaxCode`. |

#### Accounting configuration option

* `OptionalCreditCardPaymentDetails` - Optional credit card payment details
* `ReceivableTrackingEnabled` - Receivable tracking enabled
* `SeparateDepositsOnBill` - Separate deposits on bill
* `AllowModifyingClosedBills` - Allow modifying closed bills
* `RequireAccountingCategorySetup` - Require accounting category setup
* `GroupTaxesOnBill` - Group taxes on bill
* `DisplayEmployeeNameOnBill` - Display employee name on bill
* `TaxDeclarationOnDeposit` - Tax declaration on deposit

#### Payment card storage

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `PublicKey` | string | required | Key for accessing PCI proxy storage. |
