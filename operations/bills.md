# Bills

## Get all bills

Returns all bills, optionally filtered by customers, identifiers and other filters. Note this operation uses [Pagination](../guidelines/pagination.md).

### Request

`[PlatformAddress]/api/connector/v1/bills/getAll`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "BillIds": [
        "e654f217-d1b5-46be-a820-e93ba568dfac"
    ],
    "CustomerIds": [
        "fe795f96-0b64-445b-89ed-c032563f2bac"
    ],
    "State": "Closed",
    "ClosedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-10T00:00:00Z"
    },
    "CreatedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-10T00:00:00Z"
    },
    "UpdatedUtc": {
        "StartUtc": "2020-02-05T00:00:00Z",
        "EndUtc": "2020-02-10T00:00:00Z"
    },
    "DueUtc": null,
    "PaidUtc": null,
    "Extent": {
        "Items": false
    },
    "Limitation":{
        "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7",
        "Count": 100
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the [Bills](#bill). Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the [Customers](customers.md#customer). |
| `State` | string | optional | [Bill state](#bill-state) the bills should be in. If not specified `Open` and `Closed` bills are returned. |
| `ClosedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Bill](#bill) was closed. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Bill](#bill) was created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Bill](#bill) was updated. |
| `DueUtc` | [Time interval](_objects.md#time-interval) | optional , max length 3 months| Interval in which the [Bill](#bill) is due to be paid. |
| `PaidUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the [Bill](#bill) was paid. |
| `Extent` | [Bill extent](#bill-extent) | required | Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of bill data returned. |

#### Bill state

* `Open`
* `Closed`

#### Bill extent

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Items` | bool | required | Whether the response should contain payments and revenue items. |

### Response

```javascript
{
    "Bills": [
        {
            "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
            "AccountId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "CustomerId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "CompanyId": null,
            "CounterId": null,
            "State": "Closed",
            "Type": "Invoice",
            "Number": "29",
            "VariableSymbol": null,
            "CreatedUtc": "2017-01-31T10:48:06Z",
            "IssuedUtc": "2017-01-31T10:58:06Z",
            "UpdatedUtc": null,
            "TaxedUtc": null,
            "PaidUtc": null,
            "DueUtc": null,
            "PurchaseOrderNumber": "XX-123",
            "Notes": "",
            "Options": {
                "DisplayCustomer": true,
                "DisplayTaxation": true,
                "TrackReceivable": true,
                "DisplayCid": false
            },
            "OrderItems": [],
            "PaymentItems": [],
            "OwnerData": {
                "Discriminator": "BillCustomerData",
                "Value": {
                    "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
                    "Address": {
                        "Line1": "Joe Doe street",
                        "Line2": "Very long ave",
                        "City": "Townston",
                        "PostalCode": "154 00",
                        "SubdivisionCode": "AU-NSW",
                        "CountryCode": "AU"
                    },
                    "LegalIdentifiers": {
                        "TaxIdentifier": "CZ8810310963",
                        "CityOfRegistration": "Prague"
                    },
                    "BillingCode": "Billing code value",
                    "LastName": "Doe",
                    "FirstName": "John",
                    "SecondLastName": "Vincent",
                    "TitlePrefix": "Mistress",
                    "FiscalIdentifier": "Fiscal identifier",
                    "AdditionalTaxIdentifier": "Additional tax identifier"
                }
            },
            "CompanyDetails": {
                "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
                "Address": {
                    "Line1": "Joe Doe street",
                    "Line2": "Very long ave",
                    "City": "Townston",
                    "PostalCode": "154 00",
                    "SubdivisionCode": "AU-NSW",
                    "CountryCode": "AU"
                },
                "LegalIdentifiers": {
                    "TaxIdentifier": "CZ8810310963",
                    "CityOfRegistration": "Prague",
                },
                "BillingCode": "billing code value",
                "Name": "Company Name Inc.",
                "FiscalIdentifier": "Fiscal identifier",
                "AdditionalTaxIdentifier": "Additional tax identifier"
            },
            "EnterpriseData": {
                AdditionalTaxIdentifier: "XY00112233445",
                CompanyName: "The Sample Hotel Group AS",
                BankAccount: "CZ3808000000000012345678",
                BankName: "CESKA SPORITELNA A.S.",
                Iban: "CZ6508000000192000145399",
                Bic: "GIBACZPX"
            }            
        }
    ],
    "Cursor": "8d02142f-31cf-4115-90bf-ae5200c7a1ba"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#bill) | required | The filtered bills. |
| `Cursor` | string | required | Unique identifier of the last and hence oldest bill returned. This can be used in [Limitation](../guidelines/pagination.md#limitation) in a subsequent request to fetch the next batch of older bills. |

#### Bill

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the bill. |
| `AccountId` | string | required | Unique identifier of the account ([Customer](customers.md#customer) or [Company](companies.md#company)) the bill is issued to. |
| ~~`CustomerId`~~ | ~~string~~ | ~~optional~~ | ~~Unique identifier of the [Customer](customers.md#customer) the bill is issued to.~~ **Deprecated!** |
| `CompanyId` | string | optional | Unique identifier of the [Company](companies.md#company) specified in `CompanyDetails` or the [Company](companies.md#company) the bill is issued to. |
| `CounterId` | string | optional | Unique identifier of the bill Counter. |
| `State` | string [Bill state](#bill-state) | required | State of the bill. |
| `Type` | string [Bill type](#bill-type) | required | Type of the bill. |
| `Number` | string | required | Number of the bill. |
| `VariableSymbol` | string | optional | Variable symbol of the bill. |
| `CreatedUtc` | string | required | Date and time of the bill creation in UTC timezone in ISO 8601 format. |
| `IssuedUtc` | string | required | Date and time of the bill issuance in UTC timezone in ISO 8601 format. |
| `TaxedUtc` | string | optional | Taxation date of the bill in UTC timezone in ISO 8601 format. |
| `PaidUtc` | string | optional | Date when the bill was paid in UTC timezone in ISO 8601 format. |
| `DueUtc` | string | optional | Bill due date and time in UTC timezone in ISO 8601 format. |
| `PurchaseOrderNumber` | string | optional | Unique number of the purchase order from the buyer. |
| `Notes` | string | optional | Additional notes. |
| `Options` | [Bill options](#bill-options) | required | Options of the bill. |
| `OrderItems` | array of [Order item](accountingitems.md#order-item) | required | The order items (consumed items such as nights or products) on the bill. |
| `PaymentItems` | array of [Payment item](accountingitems.md#payment-item) | required | The payment items (such as cash, credit card payments or invoices) on the bill. |
| `OwnerData` | [Bill owner data](#bill-owner-data) | optional | Additional information about owner of the bill. Can be a [Customer](customers.md#customer) or [Company](companies.md#company). Persisted at the time of closing of the bill. |
| `CompanyDetails` | [Bill company data](#bill-company-data) | optional | Additional information about the company assigned to the bill. Not the same as the owner. Persisted at the time of closing of the bill. |
| `EnterpriseData` | [Bill enterprise data](#bill-enterprise-data) | optional | Additional information about the enterprise issuing the bill, including bank account details. Persisted at the time of closing of the bill. |

#### Bill type

A bill is either a `Receipt` which means that it has been fully paid, or `Invoice` that is supposed to be paid in the future.

* `Receipt` - the bill has already been fully paid.
* `Invoice` - the bill is supposed to be paid in the future. Before closing it is balanced with an invoice payment.

#### Bill options

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DisplayCustomer` | boolean | required | Display customer information on a bill. |
| `DisplayTaxation` | boolean | required | Display taxation detail on a bill. |
| `TrackReceivable` | boolean | required | Tracking of payments is enabled for bill, only applicable for `Invoice`. |
| `DisplayCid` | boolean | required | Display CID number on bill, only applicable for `Invoice`. |

#### Bill owner data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Bill owner data discriminator](#bill-owner-data-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on [Bill owner data discriminator](#bill-owner-data-discriminator). Can be either of type [Bill customer data](#bill-customer-data) or [Bill company data](#bill-company-data). |

#### Bill owner data discriminator

* `BillCustomerData` - Owner data specific to a [Customer](customers.md#customer).
* `BillCompanyData` - Owner data specific to a [Company](companies.md#company).

#### Bill customer data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string  | required | ID of the [Customer](customers.md#customer) to whom the bill was assigned. |
| `Address` | [Bill address](#bill-address) | optional | Address of the customer. |
| `LegalIdentifiers` | [Dictionary](_objects.md#dictionary) | optional | The set of [LegalIdentifiers](#legal-identifiers) for the customer. |
| `BillingCode` | string  | optional | A unique code for Mews to list on invoices it sends to the customer. |
| `LastName` | string  | required | Last name of the customer. |
| `FirstName` | string  | optional | First name of the customer. |
| `SecondLastName` | string  | optional | Second last name of the customer. |
| `TitlePrefix` | [Title](customers.md#Title)  | optional | Title prefix of the customer. |

#### Bill company data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string  | required | ID of the [Company](companies.md#company). |
| `Address` | [Bill address](#bill-address) | optional | Address of the company. |
| `LegalIdentifiers` | [Dictionary](_objects.md#dictionary) | optional | The set of [LegalIdentifiers](#legal-identifiers) for the company. |
| `BillingCode` | string  | optional | A unique code for Mews to list on invoices it sends to the company. |
| `Name` | string  | required | Name of the company. |
| `FiscalIdentifier` | string  | optional | Fiscal identifier of the company. |
| `AdditionalTaxIdentifier` | string  | optional | Additional tax identifier of the company. |

#### Bill enterprise data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AdditionalTaxIdentifier` | string  | optional | Enterprise additional tax identifier. |
| `CompanyName` | string  | optional | Enterprise company name. |
| `BankAccount` | string  | optional | Enterprise bank account. |
| `BankName` | string  | optional | Enterprise bank name. |
| `Iban` | string  | optional | Enterprise IBAN (International Bank Account Number). |
| `Bic` | string  | optional | Enterprise BIC (Bank Identifier Code). |

#### Bill address

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Line1` | string  | optional | First line of the address. |
| `Line2` | string  | optional | Second line of the address. |
| `City` | string  | optional | City of the address. |
| `Postal Code` | string  | optional | Postal code of the address. |
| `SubdivisionCode` | string  | optional | ISO 3166-2 code of the administrative division. |
| `CountryCode` | string  | optional | ISO 3166-1 code of the country. |

#### Legal Identifiers

`LegalIdentifiers` is a [Dictionary](_objects.md#dictionary), where the key is the type of legal identifier and the value is the corresponding value of that identifier. Keys are as follows:

* `TaxIdentifier`
* `Siret`
* `Siren`
* `NafCode`
* `RcsCode`
* `LegalStatus`
* `RegisteredCapital`
* `CityOfRegistration`
* `TradesDirectoryRegistrationNumber`
* `ItDestinationCode`
* `ItFiscalCode`
* `ItLotteryCode`
* `HungarianVatCode`
* `HungarianCompanyName`
* `HungarianTaxPayerIdentifier`
* ...

## Add bill

Creates new empty bill assigned to specified account.

### Request

`[PlatformAddress]/api/connector/v1/bills/add`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "Bills": [
        {
            "AccountId": "a5786a7b-a388-43cc-a838-abd7007b5ff7"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `Bills` | array of [Bill parameters](#bill-parameters) | required, max 1000 items | Information about bills to be created. |

#### Bill parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required | Unique identifier of the account ([Customer](customers.md#customer) or [Company](companies.md#company)) the bill is issued to. |

### Response

```javascript
{
    "Bills": [
        {
            "Id": "177966b7-f3d9-42b7-ba49-abd80057329b",
            "AccountId": "fe795f96-0b64-445b-89ed-c032563f2bac",
            "CompanyId": null,
            "CounterId": null,
            "State": "Open",
            "Type": "Receipt",
            "Number": null,
            "VariableSymbol": null,
            "CreatedUtc": "2020-06-12T05:17:28Z",
            "IssuedUtc": null,
            "TaxedUtc": null,
            "PaidUtc": null,
            "DueUtc": null,
            "Notes": null,
            "OrderItems": [],
            "PaymentItems": []
        }
    ]
}
``` 

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#bill) | required | The created bills. |

## Delete bill

Removes selected bills. Bill must be empty, otherwise it's not possible to delete it.

### Request

`[PlatformAddress]/api/connector/v1/bills/delete`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "BillIds": [
        "177966b7-f3d9-42b7-ba49-abd80057329b"
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillIds` | array of string | required | Unique identifiers of the [Bill](#bill)s to be deleted. |

### Response

```javascript
{}
```

## Close bill

Closes a bill so no further modification to it is possible.

### Request

`[PlatformAddress]/api/connector/v1/bills/close`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
    "Type": "Receipt",
    "BillCounterId": "84b25778-c1dd-48dc-8c00-ab3a00b6df14",
    "FiscalMachineId": null,
    "Options": {
        "DisplayCustomer": {
            "Value": false
        },
        "DisplayTaxation": null
    },
    "TaxedDate": {
        "Value": "2020-07-07"
    },
    "DueDate": {
        "Value": "2020-07-14"
    },
    "VariableSymbol": {
        "Value": "5343"
    },
    "TaxIdentifier": {
        "Value": "446768"
    },
    "PurchaseOrderNumber": {
        "Value": "XX-123"
    },
    "Notes": {
        "Value": "Bill closing note"
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillId` | string | required | Unique identifier of the [Bill](#bill) to be closed. |
| `Type` | string [Bill type](#bill-type) | required | Specifies the mode bill should be closed in. |
| `BillCounterId` | string | optional | Unique identifier of the [Counter](counters.md#counter) to be used for closing. Default one is used when no value is provided. |
| `FiscalMachineId` | string | optional | Unique identifier of the [Fiscal Machine](devices.md#device) to be used for closing. Default one is used when no value is provided. |
| `Options` | [Bill options parameters](#bill-options-parameters) | optional  | Options of the bill. If not provided both `DisplayCustomer` and `DisplayTaxation` are set by default. |
| `TaxedDate` | [String update value](_objects.md#string-update-value) | optional | Date of consumption for tax purposes. Can be used only with [Bill type](#bill-type) `Invoice`. |
| `DueDate` | [String update value](_objects.md#string-update-value) | optional | Deadline when [Bill](#bill) is due to be paid. Can be used only with [Bill type](#bill-type) `Invoice`. |
| `VariableSymbol` | [String update value](_objects.md#string-update-value) | optional | Optional unique identifier of requested payment. Can be used only with [Bill type](#bill-type) `Invoice`. |
| `TaxIdentifier` | [String update value](_objects.md#string-update-value) | optional | Tax identifier of account to be put on a bill. |
| `PurchaseOrderNumber` | [String update value](_objects.md#string-update-value) | optional | Unique number of the purchase order from the buyer. |
| `Notes` | [String update value](_objects.md#string-update-value) | optional | Notes to be attached to bill. |
| `Address` | [Address parameters](customers.md#address-parameters) | optional | Address of the account to be displayed on bill. Overrides the default one taken from account profile. |

#### Bill options parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DisplayCustomer` | [Bool update value](_objects.md#bool-update-value) | required | Display customer information on a bill. |
| `DisplayTaxation` | [Bool update value](_objects.md#bool-update-value) | required | Display taxation detail on a bill. |

### Response

```javascript
{
    "Bills": [
        {
            "Id": "44eba542-193e-47c7-8077-abd7008eb206",
            "CustomerId": "7eaf9da6-7229-454a-8cb0-abd700804bd2",
            "CompanyId": null,
            "CounterId": "84b25778-c1dd-48dc-8c00-ab3a00b6df14",
            "State": "Closed",
            "Type": "Receipt",
            "Number": "84",
            "VariableSymbol": null,
            "CreatedUtc": "2020-06-11T08:39:32Z",
            "IssuedUtc": "2020-06-25T08:49:38Z",
            "TaxedUtc": "2020-06-25",
            "PaidUtc": null,
            "DueUtc": null,
            "PurchaseOrderNumber": "XX-123",
            "Notes": null,
            "Options": {
                "DisplayCustomer": false,
                "DisplayTaxation": true,
                "TrackReceivable": false,
                "DisplayCid": false
            },
            "OrderItems": [],
            "PaymentItems": []
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](#bill) | required | The closed bill. |

## Get bill PDF

Creates a PDF version of the specified bill. In case it's not possible to return PDF immediately, you must retry the call later while providing the unique event identifier that is returned from the first invocation.

### Request

`[PlatformAddress]/api/connector/v1/bills/getPdf`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
    "BillPrintEventId": null
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillId` | string | required | Unique identifier of the [Bill](#bill) to be printed. |
| `BillPrintEventId` | string | optional | Unique identifier of the [Bill print event](#bill-print-event) returned by previous invocation. |

### Response

```javascript
{
    "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
    "Result": {
        "Discriminator": "BillPdfFile",
        "Value": {
            "Base64Data": "JVBER....."
        }
    }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillId` | string | required | The unique identifier of printed [Bill](#bill). |
| `Result` | object [Bill PDF result](#bill-pdf-result) | required | The result of operation. |

#### Bill PDF result

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | string [Bill PDF result discriminator](#bill-pdf-result-discriminator) | required | Determines type of result. |
| `Value` | object | required | Structure of object depends on [Bill PDF result discriminator](#bill-pdf-result-discriminator). |

#### Bill PDF result discriminator

* `BillPdfFile` - PDF version of a [Bill](#bill) was successfully created, `Value` is [Bill PDF file](#bill-pdf-file).
* `BillPrintEvent` - PDF version of a [Bill](#bill) couldn't be created at this moment (for example bill haven't been reported to authorities yet), `Value` is [Bill print event](#bill-print-event).

#### Bill PDF file

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Base64Data` | string  | required | BASE64 encoded PDF file. |

#### Bill print event

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillPrintEventId` | string  | required | Unique identifier of print event. Must be used in retry calls to retrieve the PDF. |
