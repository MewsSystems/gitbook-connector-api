<!-- AUTOMATICALLY GENERATED, DO NOT MODIFY -->
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
  "Extent": {
    "Items": false
  },
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
  "BillIds": [
    "e654f217-d1b5-46be-a820-e93ba568dfac"
  ],
  "CustomerIds": [
    "fe795f96-0b64-445b-89ed-c032563f2bac"
  ],
  "State": "Closed",
  "EnterpriseIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "4d0201db-36f5-428b-8d11-4f0a65e960cc"
  ],
  "Limitation": {
    "Count": 100,
    "Cursor": "e7f26210-10e7-462e-9da8-ae8300be8ab7"
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseIds` | array of string | optional, max 1000 items | Unique identifiers of the Enterprises. If not specified, the operation returns data for all enterprises within scope of the Access Token. |
| `IssuedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Bill` was issued. |
| `PaidUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Bill` was paid. |
| `DueUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Bill` is due to be paid. |
| `CreatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Bill` was created. |
| `UpdatedUtc` | [Time interval](_objects.md#time-interval) | optional, max length 3 months | Interval in which the `Bill` was updated. |
| `BillIds` | array of string | optional, max 1000 items | Unique identifiers of the `Bills`. Required if no other filter is provided. |
| `CustomerIds` | array of string | optional, max 1000 items | Unique identifiers of the `Customers`. |
| `State` | [Bill state](bills.md#bill-state) | optional | State the bills should be in. If not specified, `Open` and `Closed` bills are returned. |
| `Type` | [Bill type](bills.md#bill-type) | optional | Type of the bills. If not specified, all types are returned. |
| `CorrectionState` | array of [Bill correction state](bills.md#bill-correction-state) | optional | Whether to return regular bills, corrective bills, or both. If `BillIds` are specified, defaults to both, otherwise defaults to `Bill`. |
| `Limitation` | [Limitation](../guidelines/pagination.md#limitation) | required | Limitation on the quantity of data returned and optional Cursor for the starting point of data. |
| ~~`Extent`~~ | ~~[Bill extent](bills.md#bill-extent)~~ | ~~optional~~ | ~~Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned.~~ **Deprecated!** Use `orderItems/getAll` and `payments/getAll` with `BillIds` filter instead.|
| ~~`ClosedUtc`~~ | ~~[Time interval](_objects.md#time-interval)~~ | ~~optional, max length 3 months~~ | ~~Interval in which the `Bill` was closed.~~ **Deprecated!** Use `IssuedUtc` instead.|

#### Bill extent
Extent of data to be returned. E.g. it is possible to specify that together with the bills, payments and revenue items should be also returned. **Deprecated!**

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| ~~`Items`~~ | ~~boolean~~ | ~~required~~ | ~~Whether the response should contain payments and revenue items.~~ **Deprecated!** Use `orderItems/getAll` and `payments/getAll` with `BillIds` filter instead.|

#### Bill state

* `Open`
* `Closed`

#### Bill type

* `Receipt` - Default; the bill has been paid in full; only applicable after the bill is closed.
* `Invoice` - Bill has not been paid in full but an invoice has been issued to request payment.

### Response

```javascript
{
  "Bills": [
    {
      "Id": "ea087d64-3901-4eee-b0b7-9fce4c58a005",
      "Name": "Accommodation Charges",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
      "AccountType": "Company",
      "CustomerId": null,
      "CompanyId": null,
      "AssociatedAccountIds": [
        "fadd5bb6-b428-45d5-94f8-fd0d89fece6d"
      ],
      "CounterId": null,
      "State": "Closed",
      "Type": "Invoice",
      "Number": "29",
      "VariableSymbol": null,
      "CreatedUtc": "2017-01-31T10:48:06Z",
      "IssuedUtc": "2017-01-31T10:58:06Z",
      "TaxedUtc": null,
      "PaidUtc": null,
      "DueUtc": null,
      "LastReminderDateUtc": null,
      "UpdatedUtc": "2017-01-31T10:58:06Z",
      "PurchaseOrderNumber": "XX-123",
      "Notes": "",
      "Options": {
        "DisplayCustomer": true,
        "DisplayTaxation": true,
        "TrackReceivable": true,
        "DisplayCid": false,
        "Rebated": false
      },
      "Revenue": [],
      "Payments": [],
      "OrderItems": [],
      "PaymentItems": [],
      "AssigneeData": null,
      "OwnerData": {
        "Discriminator": "BillCompanyData",
        "Value": {
          "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
          "Address": {
            "Line1": "I.P. Pavlova 5",
            "Line2": null,
            "City": "Prague",
            "PostalCode": "12000",
            "SubdivisionCode": "CZ-PR",
            "CountryCode": "CZ"
          },
          "LegalIdentifiers": {
            "TaxIdentifier": "CZ24227781",
            "CityOfRegistration": "Prague"
          },
          "BillingCode": "Billing code value",
          "Name": "Acme, Inc.",
          "FiscalIdentifier": "Fiscal identifier",
          "AdditionalTaxIdentifier": "Additional tax identifier",
          "DUNS": "150483782",
          "Telephone": "+420123456789",
          "TaxIdentifier": "CZ24227781",
          "InvoicingEmail": "billing@acme.example",
          "Department": "Billing"
        }
      },
      "CompanyDetails": null,
      "AssociatedAccountData": [
        {
          "Discriminator": "BillCompanyData",
          "BillCustomerData": null,
          "BillCompanyData": {
            "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
            "Address": {
              "Line1": "I.P. Pavlova 5",
              "Line2": null,
              "City": "Prague",
              "PostalCode": "12000",
              "SubdivisionCode": "CZ-PR",
              "CountryCode": "CZ"
            },
            "LegalIdentifiers": {
              "TaxIdentifier": "CZ24227781",
              "CityOfRegistration": "Prague"
            },
            "BillingCode": "Billing code value",
            "Name": "Acme, Inc.",
            "FiscalIdentifier": "Fiscal identifier",
            "AdditionalTaxIdentifier": "Additional tax identifier",
            "DUNS": "150483782",
            "Telephone": "+420123456789",
            "TaxIdentifier": "CZ24227781",
            "InvoicingEmail": "billing@acme.example",
            "Department": "Billing"
          }
        }
      ],
      "EnterpriseData": {
        "AdditionalTaxIdentifier": "XY00112233445",
        "CompanyName": "The Sample Hotel Group AS",
        "BankAccount": "CZ3808000000000012345678",
        "BankName": "CESKA SPORITELNA A.S.",
        "Iban": "CZ6508000000192000145399",
        "Bic": "GIBACZPX"
      },
      "CorrectionState": "Bill",
      "CorrectionType": null,
      "CorrectedBillId": null
    }
  ],
  "Cursor": "ea087d64-3901-4eee-b0b7-9fce4c58a005"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](bills.md#bill) | required | The filtered bills. |
| `Cursor` | string | optional | Unique identifier of the last and hence oldest bill returned. This can be used in `Limitation` in a subsequent request to fetch the next batch of older bills. |

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
  "PdfTemplate": "Detailed"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `BillId` | string | required | Unique identifier of the [Bill](bills.md#bill) to be printed. |
| `BillPrintEventId` | string | optional | Unique identifier of the [Bill print event](bills.md#bill-print-event) returned by previous invocation. |
| `PdfTemplate` | [Bill PDF template type](bills.md#bill-pdf-template-type) | optional | Bill PDF template type. If not specified, the default template is used. |
| `PrintReason` | string | optional, max length 255 characters | The reason for reprinting the bill with different template. Required for France LE. |

#### Bill PDF template type

* `Detailed` - Detailed overview. Items are grouped by the reservation, item type and price, and consumption date.
* `Consumption` - Overview by date (no reservation details). Items of the same type and price are grouped by consumption date.
* `Reservation` - Overview by reservation (no date). Items of the same type and price are grouped by reservation.
* `OrderItem` - Consumption overview (not fiscal document). Items are grouped by the item type and price without reservation details and consumption date.
* `Guest` - Overview by guest. Items are grouped by guest, reservation, consumption date, and item type.

### Response

```javascript
{
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "Result": {
    "Discriminator": "BillPdfFile",
    "Value": {
      "Base64Data": "JVBERi0xLj..."
    }
  }
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillId` | string | required | Unique identifier of the printed bill. |
| `Result` | [Bill PDF result discriminator](bills.md#bill-pdf-result-discriminator) | required | The result of operation. |

#### Bill PDF result discriminator

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Bill PDF result discriminator](bills.md#bill-pdf-result-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on `Discriminator`. |

#### Bill PDF result discriminator

* `BillPdfFile` - PDF version of a `Bill` was successfully created, `Value` is `BillPdfFile`.
* `BillPrintEvent` - PDF version of a `Bill` couldn't be created at this moment (for example bill haven't been reported to authorities yet), `Value` is `BillPrintEvent`

#### Bill PDF file

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Base64Data` | string | required | Base64 encoded PDF file. |

#### Bill print event

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillPrintEventId` | string | required | Unique identifier of print event. Must be used in retry calls to retrieve the PDF. |

## Add bill

Creates new empty bill assigned to specified account. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/bills/add`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Bills": [
    {
      "AccountId": "a5786a7b-a388-43cc-a838-abd7007b5ff7",
      "Name": "Bill of Joe Doe"
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `Bills` | array of [Bill parameters](bills.md#bill-parameters) | required, max 1000 items | Information about bills to be created. |

#### Bill parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountId` | string | required | Unique identifier of the account (`Customer` or `Company`) the bill is issued to. Company billing may not be enabled for your integration. |
| `AssociatedAccountId` | string | optional | Account that has a possible link with the owner of the bill. |
| `Name` | string | optional | Name of the newly created bill. |

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
| `Bills` | array of [Bill](bills.md#bill) | required | The created bills. |

## Update bills

> ### Restricted!
> This operation is currently in beta-test and as such it is subject to change.

Updates one or more existing bills in the system. Closed bills cannot be updated. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/bills/update`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillsUpdates": [
    {
      "BillId": "ea087d64-3901-4eee-b0b7-9fce4c58a005",
      "AccountId": {
        "Value": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f"
      },
      "AssociatedAccountIds": {
        "Value": [
          "fadd5bb6-b428-45d5-94f8-fd0d89fece6d"
        ]
      }
    }
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `BillsUpdates` | array of [Bill update parameters](bills.md#bill-update-parameters) | required, max 10 items | Information about bills to be updated. |

#### Bill update parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `BillId` | string | required | Unique identifier of the bill to update. |
| `AccountId` | [String update value](_objects.md#string-update-value) | optional | Unique identifier of the account (`Customer` or `Company`) the bill is issued to (or null if the account should not be updated). |
| `AssociatedAccountIds` | [Associated account IDs update parameters](bills.md#associated-account-ids-update-parameters) | optional | Unique identifiers of the `Customer` or `Company` that are associated to the bill (or null if the account should not be updated). |

#### Associated account IDs update parameters
Has same structure as [Array of strings update value](_objects.md#array-of-strings-update-value).

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Value` | array of string | optional, max 1 item | Unique identifiers of the `Customer` or `Company` that are associated to the bill. Set to `null` to remove all associated accounts. Note that only single associated account is currently supported. |

### Response

```javascript
{
  "Bills": [
    {
      "Id": "ea087d64-3901-4eee-b0b7-9fce4c58a005",
      "Name": "Accommodation Charges",
      "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "AccountId": "c6f5c82d-621a-4c8a-903b-1b0a9a23b71f",
      "AccountType": "Company",
      "CustomerId": null,
      "CompanyId": null,
      "AssociatedAccountIds": [
        "fadd5bb6-b428-45d5-94f8-fd0d89fece6d"
      ],
      "CounterId": null,
      "State": "Closed",
      "Type": "Invoice",
      "Number": "29",
      "VariableSymbol": null,
      "CreatedUtc": "2017-01-31T10:48:06Z",
      "IssuedUtc": "2017-01-31T10:58:06Z",
      "TaxedUtc": null,
      "PaidUtc": null,
      "DueUtc": null,
      "LastReminderDateUtc": null,
      "UpdatedUtc": "2017-01-31T10:58:06Z",
      "PurchaseOrderNumber": "XX-123",
      "Notes": "",
      "Options": {
        "DisplayCustomer": true,
        "DisplayTaxation": true,
        "TrackReceivable": true,
        "DisplayCid": false,
        "Rebated": false
      },
      "Revenue": [],
      "Payments": [],
      "OrderItems": [],
      "PaymentItems": [],
      "AssigneeData": null,
      "OwnerData": {
        "Discriminator": "BillCompanyData",
        "Value": {
          "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
          "Address": {
            "Line1": "I.P. Pavlova 5",
            "Line2": null,
            "City": "Prague",
            "PostalCode": "12000",
            "SubdivisionCode": "CZ-PR",
            "CountryCode": "CZ"
          },
          "LegalIdentifiers": {
            "TaxIdentifier": "CZ24227781",
            "CityOfRegistration": "Prague"
          },
          "BillingCode": "Billing code value",
          "Name": "Acme, Inc.",
          "FiscalIdentifier": "Fiscal identifier",
          "AdditionalTaxIdentifier": "Additional tax identifier",
          "DUNS": "150483782",
          "Telephone": "+420123456789",
          "TaxIdentifier": "CZ24227781",
          "InvoicingEmail": "billing@acme.example",
          "Department": "Billing"
        }
      },
      "CompanyDetails": null,
      "AssociatedAccountData": [
        {
          "Discriminator": "BillCompanyData",
          "BillCustomerData": null,
          "BillCompanyData": {
            "Id": "26afba60-06c3-455b-92db-0e3983be0b1d",
            "Address": {
              "Line1": "I.P. Pavlova 5",
              "Line2": null,
              "City": "Prague",
              "PostalCode": "12000",
              "SubdivisionCode": "CZ-PR",
              "CountryCode": "CZ"
            },
            "LegalIdentifiers": {
              "TaxIdentifier": "CZ24227781",
              "CityOfRegistration": "Prague"
            },
            "BillingCode": "Billing code value",
            "Name": "Acme, Inc.",
            "FiscalIdentifier": "Fiscal identifier",
            "AdditionalTaxIdentifier": "Additional tax identifier",
            "DUNS": "150483782",
            "Telephone": "+420123456789",
            "TaxIdentifier": "CZ24227781",
            "InvoicingEmail": "billing@acme.example",
            "Department": "Billing"
          }
        }
      ],
      "EnterpriseData": {
        "AdditionalTaxIdentifier": "XY00112233445",
        "CompanyName": "The Sample Hotel Group AS",
        "BankAccount": "CZ3808000000000012345678",
        "BankName": "CESKA SPORITELNA A.S.",
        "Iban": "CZ6508000000192000145399",
        "Bic": "GIBACZPX"
      },
      "CorrectionState": "Bill",
      "CorrectionType": null,
      "CorrectedBillId": null
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Bills` | array of [Bill](bills.md#bill) | required | Updated bills. |

#### Bill

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the bill. |
| `Name` | string | optional | Name of the bill. |
| `EnterpriseId` | string | required | Unique identifier of the `Enterprise`. |
| `AccountId` | string | required | Unique identifier of the account (`Customer` or `Company`) the bill is issued to. |
| `AccountType` | [Account type](accounts.md#account-type) | required | A discriminator specifying the [type of account](accounts.md#account-type), i.e. `Customer` or `Company`. |
| `AssociatedAccountIds` | array of string | optional | Unique identifiers of the `Customers` or `Companies` that are associated to the bill. |
| `CounterId` | string | optional | Unique identifier of the bill `Counter`. |
| `State` | [Bill state](bills.md#bill-state) | required | Whether the bill is `Open` or `Closed`. |
| `Type` | [Bill type](bills.md#bill-type) | required | After a bill is closed, the Bill Type is set to `Receipt` or `Invoice`. `Receipt` indicates that the bill has been fully paid and the balance is zero. `Invoice` indicates that the bill has not yet been fully paid but an invoice has been issued. Prior to closing, Bill Type should not be used. |
| `Number` | string | optional | Number of the bill. |
| `VariableSymbol` | string | optional | Variable symbol of the bill. |
| `CreatedUtc` | string | required | Date and time of the bill creation in UTC timezone in ISO 8601 format. |
| `IssuedUtc` | string | optional | Date and time of the bill issuance in UTC timezone in ISO 8601 format. |
| `TaxedUtc` | string | optional | Taxation date of the bill in UTC timezone in ISO 8601 format. |
| `PaidUtc` | string | optional | Date when the bill was paid in UTC timezone in ISO 8601 format. |
| `DueUtc` | string | optional | Bill due date and time in UTC timezone in ISO 8601 format. |
| `LastReminderDateUtc` | string | optional | Date and time when an email reminder to pay an invoice was last sent, in UTC timezone in ISO 8601 format. |
| `UpdatedUtc` | string | required | Date and time when the bill was last updated, in UTC timezone in ISO 8601 format. |
| `PurchaseOrderNumber` | string | optional | Unique number of the purchase order from the buyer. |
| `Notes` | string | optional | Additional notes. |
| `Options` | [Bill options](bills.md#bill-options) | optional | Options of the bill. |
| `OwnerData` | [Bill owner data](bills.md#bill-owner-data) | optional | Additional information about owner of the bill. Can be a `Customer` or `Company`. Persisted at the time of closing of the bill. |
| `AssociatedAccountData` | array of [Associated account bill data](bills.md#associated-account-bill-data) | optional | Additional information about the associated account of the bill. Can be a `Customer` or `Company`. Persisted at the time of closing of the bill. Currently only one account can be associated with a bill, but this may be extended in future. |
| `EnterpriseData` | [Bill enterprise data](bills.md#bill-enterprise-data) | optional | Additional information about the enterprise issuing the bill, including bank account details. Persisted at the time of closing of the bill. |
| `CorrectionState` | [Bill correction state](bills.md#bill-correction-state) | required | Whether the bill is a regular bill or a corrective bill. |
| `CorrectionType` | [Bill correction type](bills.md#bill-correction-type) | optional | Type of correction. |
| `CorrectedBillId` | string | optional | The ID of the bill that the corrective bill corrects. If the corrected bill was deleted, this field is `null`. |
| ~~`CustomerId`~~ | ~~string~~ | ~~optional~~ | ~~Unique identifier of the `Customer` the bill is issued to.~~ **Deprecated!** Use `AccountId` instead.|
| ~~`CompanyId`~~ | ~~string~~ | ~~optional~~ | ~~Unique identifier of the `Company` specified in `CompanyDetails` or the `Company` the bill is issued to.~~ **Deprecated!** Use `AssociatedAccountIds` instead.|
| ~~`Revenue`~~ | ~~array of [Accounting item](accountingitems.md#accounting-item)~~ | ~~optional~~ | **Deprecated!** Use `orderItems/getAll` with `BillId` instead.|
| ~~`Payments`~~ | ~~array of [Accounting item](accountingitems.md#accounting-item)~~ | ~~optional~~ | **Deprecated!** Use `payments/getAll` with `BillId` instead.|
| ~~`OrderItems`~~ | ~~array of [Order item](accountingitems.md#order-item)~~ | ~~optional~~ | ~~The order items (consumed items such as nights or products) on the bill.~~ **Deprecated!** Use `orderItems/getAll` with `BillId` instead.|
| ~~`PaymentItems`~~ | ~~array of [Payment item](accountingitems.md#payment-item)~~ | ~~optional~~ | ~~The payment items (such as cash, credit card payments or invoices) on the bill.~~ **Deprecated!** |
| ~~`AssigneeData`~~ | ~~[Bill assignee data](bills.md#bill-assignee-data)~~ | ~~optional~~ | **Deprecated!** Use `OwnerData` instead.|
| ~~`CompanyDetails`~~ | ~~[Bill company data](bills.md#bill-company-data)~~ | ~~optional~~ | ~~Additional information about the company assigned to the bill. Not the same as the owner. Persisted at the time of closing of the bill.~~ **Deprecated!** Use `AssociatedAccountData` instead.|

#### Bill state

* `Open`
* `Closed`

#### Bill type

* `Receipt` - Default; the bill has been paid in full; only applicable after the bill is closed.
* `Invoice` - Bill has not been paid in full but an invoice has been issued to request payment.

#### Bill options
Options of the bill.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DisplayCustomer` | boolean | required | Display customer information on a bill. |
| `DisplayTaxation` | boolean | required | Display taxation detail on a bill. |
| `TrackReceivable` | boolean | required | Tracking of payments is enabled for bill, only applicable for `BillType` of `Invoice`. |
| `DisplayCid` | boolean | required | Display CID number on bill, only applicable for `BillType` of `Invoice`. |
| `Rebated` | boolean | required | Whether the bill is rebated (both fully or partially). |

#### Bill assignee data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Bill associated account data discriminator](bills.md#bill-associated-account-data-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on `Discriminator`. |

#### Bill associated account data discriminator

* `BillCustomerData`
* `BillCompanyData`

#### Bill company data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | optional | ID of the `Company`. |
| `Address` | [Address](addresses.md#account-address) | optional | Address of the company. |
| `LegalIdentifiers` | object | optional | The set of `LegalIdentifiers` for the company. |
| `BillingCode` | string | optional | A unique code for Mews to list on invoices it sends to the company. |
| `Name` | string | required | Name of the company. |
| `FiscalIdentifier` | string | optional | Fiscal identifier of the company. |
| `AdditionalTaxIdentifier` | string | optional | Additional tax identifier of the company. |
| `DUNS` | string | optional | DUNS (Data Universal Numbering System) number of the company. |
| `Telephone` | string | optional | Company telephone number. |
| `TaxIdentifier` | string | optional | Tax identifier of the company. |
| `InvoicingEmail` | string | optional | Invoicing email of the company. |
| `Department` | string | optional | Department of the company. |

#### Bill customer data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | ID of the `Customer` to whom the bill was assigned. |
| `Address` | [Address](addresses.md#account-address) | optional | Address of the customer. |
| `LegalIdentifiers` | object | optional | The set of `LegalIdentifiers` for the customer. |
| `BillingCode` | string | optional | A unique code for Mews to list on invoices it sends to the customer. |
| `LastName` | string | required | Last name of the customer. |
| `FirstName` | string | optional | First name of the customer. |
| `SecondLastName` | string | optional | Second last name of the customer. |
| `TitlePrefix` | [Title](customers.md#title) | optional | Title prefix of the customer. |
| `TaxIdentifier` | string | optional | Tax identifier of the customer. |

#### Bill owner data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Bill associated account data discriminator](bills.md#bill-associated-account-data-discriminator) | required | Determines type of value. |
| `Value` | object | required | Structure of object depends on `Discriminator`. |

#### Associated account bill data

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Discriminator` | [Bill associated account data discriminator](bills.md#bill-associated-account-data-discriminator) | required | Determines type of value. |
| `BillCustomerData` | [Bill customer data](bills.md#bill-customer-data) | optional | Associated account bill data for customer. |
| `BillCompanyData` | [Bill company data](bills.md#bill-company-data) | optional | Associated account bill data for company. |

#### Bill enterprise data
Additional information about the enterprise issuing the bill, including bank account details. Persisted at the time of closing of the bill.

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AdditionalTaxIdentifier` | string | optional | Enterprise additional tax identifier. |
| `CompanyName` | string | optional | Enterprise company name. |
| `BankAccount` | string | optional | Enterprise bank account. |
| `BankName` | string | optional | Enterprise bank name. |
| `Iban` | string | optional | Enterprise IBAN (International Bank Account Number). |
| `Bic` | string | optional | Enterprise BIC (Bank Identifier Code). |

#### Bill correction state

* `Bill` - Regular bill.
* `CorrectiveBill` - Corrective bill, i.e. the `CorrectionType` is either `Edit`, `Cancellation`, or `ReceivablePaymentsBalance`.

#### Bill correction type

* `Cancellation`
* `Edit`
* `CreditNote`
* `Reinstatement`
* `ReceivablePaymentsBalance`

## Delete bill

Removes selected bills. Bill must be empty, otherwise it's not possible to delete it. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/bills/delete`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillIds": [
    "177966b7-f3d9-42b7-ba49-abd80057329b"
  ],
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `BillIds` | array of string | required, max 1000 items | Unique identifiers of the [Bill](bills.md#bill)s to be deleted. |

### Response

```javascript
{}
```

## Close bill

Closes a bill so no further modification to it is possible. Note this operation supports [Portfolio Access Tokens](../concepts/multi-property.md).

### Request

`[PlatformAddress]/api/connector/v1/bills/close`

```javascript
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
  "Client": "Sample Client 1.0.0",
  "BillId": "44eba542-193e-47c7-8077-abd7008eb206",
  "EnterpriseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
  "AccountTaxIdentifier": {
    "Value": "446768"
  },
  "AccountAddress": {
    "Line1": "Astronautů 2",
    "Line2": "",
    "City": "Havířov",
    "PostalCode": "736 01",
    "CountryCode": "CZ",
    "CountrySubdivisionCode": null
  },
  "PurchaseOrderNumber": {
    "Value": "XX-123"
  },
  "Notes": {
    "Value": "Bill closing note"
  },
  "AssociatedAccountData": [
    {
      "Id": "84b25778-c1dd-48dc-8c00-ab3a00b6df14",
      "TaxIdentifier": {
        "Value": "123459"
      },
      "Address": {
        "Line1": "Astronautů 2",
        "Line2": "",
        "City": "Havířov",
        "PostalCode": "736 01",
        "CountryCode": "CZ",
        "CountrySubdivisionCode": null
      }
    }
  ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `EnterpriseId` | string | optional | Unique identifier of the enterprise. Required when using [Portfolio Access Tokens](../concepts/multi-property.md), ignored otherwise. |
| `BillId` | string | required | Unique identifier of the [Bill](bills.md#bill) to be closed. |
| `Type` | [Bill type](bills.md#bill-type) | required | After a bill is closed, the Bill Type is set to `Receipt` or `Invoice`. `Receipt` indicates that the bill has been fully paid and the balance is zero. `Invoice` indicates that the bill has not yet been fully paid but an invoice has been issued. Prior to closing, Bill Type should not be used. |
| `BillCounterId` | string | optional | Unique identifier of the [Counter](counters.md#counter) to be used for closing. Default one is used when no value is provided. |
| `FiscalMachineId` | string | optional | Unique identifier of the [Fiscal Machine](devices.md#device) to be used for closing. Default one is used when no value is provided. |
| `Options` | [Bill options parameters](bills.md#bill-options-parameters) | optional | Options of the bill. If not provided, both DisplayCustomer and DisplayTaxation are set by default. |
| `TaxedDate` | [String update value](_objects.md#string-update-value) | optional | Date of consumption for tax purposes. Can be used only with `Type` of `Invoice`. |
| `DueDate` | [String update value](_objects.md#string-update-value) | optional | Deadline when bill is due to be paid. Can be used only with `Type` of `Invoice`. |
| `VariableSymbol` | [String update value](_objects.md#string-update-value) | optional | Optional unique identifier of requested payment. Can be used only with `Type` of `Invoice`. |
| `AccountTaxIdentifier` | [String update value](_objects.md#string-update-value) | optional | Tax identifier of account to be put on a bill. |
| `PurchaseOrderNumber` | [String update value](_objects.md#string-update-value) | optional | Unique number of the purchase order from the buyer. |
| `Notes` | [String update value](_objects.md#string-update-value) | optional | Notes to be attached to bill. |
| `AccountAddress` | [Address parameters](companies.md#address-parameters) | optional | Address of the account to be displayed on bill. Overrides the default one taken from account profile. |
| `AssociatedAccountData` | array of [Bill close account parameters](bills.md#bill-close-account-parameters) | optional, max 1 item | Account data of the associated account on a bill. Currently one object is supported and only populated when the bill is closed. |
| ~~`TaxIdentifier`~~ | ~~[String update value](_objects.md#string-update-value)~~ | ~~optional~~ | ~~Tax identifier of account to be put on a bill.~~ **Deprecated!** Use `AccountTaxIdentifier` or `AssociatedAccountData` instead.|
| ~~`CompanyTaxIdentifier`~~ | ~~[String update value](_objects.md#string-update-value)~~ | ~~optional~~ | ~~Tax identifier of company to be put on a bill.~~ **Deprecated!** Use `AccountTaxIdentifier` or `AssociatedAccountData` instead.|
| ~~`Address`~~ | ~~[Address parameters](companies.md#address-parameters)~~ | ~~optional~~ | ~~Address of the account to be displayed on bill. Overrides the default one taken from account profile.~~ **Deprecated!** Use `AccountAddress` or `AssociatedAccountData` instead.|

#### Bill options parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `DisplayCustomer` | [Bool update value](_objects.md#bool-update-value) | required | Display customer information on a bill. |
| `DisplayTaxation` | [Bool update value](_objects.md#bool-update-value) | required | Display taxation detail on a bill. |

#### Bill close account parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `Id` | string | required | Unique identifier of the associated account (`Customer` or `Company`) the bill is associated to. |
| `TaxIdentifier` | [String update value](_objects.md#string-update-value) | optional | Tax identifier of the associated account to be put on a bill. |
| `Address` | [Address parameters](companies.md#address-parameters) | optional | Address of the associated account to be displayed on bill. Overrides the default one taken from account profile. |

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
| `Bills` | array of [Bill](bills.md#bill) | required | The closed bills. |
