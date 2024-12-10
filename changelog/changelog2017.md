# Changelog 2017

## 6th December 2017

* Extended `Product order parameters` with `UnitCost`.
* Extended parameters of `Get all accounting items` with `TimeFilter`.
* Added `Get all bills by ids` operation.
* Added `Get all customers by emails` operation.

## 30th November 2017

* Extended `Accounting item` with `InvoiceId`.
* Extended `Space category` with `Description` and `ImageIds`.
* Extended `Customer` with `Notes`.
* Extended `Key cutter command data` with `ReservationId`.
* Extended parameters of `Add customer` and `Update customer` with `Classifications` and `Notes`.
* Extended parameters of `Add reservations` with `Identifier`.
* Added `Get all reservations by customers` operation.
* Added `Price reservations` operation.
* Added `Add customer file` operation.
* Added `Get image URLs` operation.

## 9th November 2017

* Extended `Reservation` with `Origin`.
* Extended `Enterprise` with `Currencies`.
* Extended `Space` with `FloorNumber` and `BuildingNumber`.
* Added `Get all countries` operation.
* Added `Get all currencies` operation.
* Added `Get all exchange rates` operation.
* Made `Type` in parameters of `Add external payment` optional.

## 19th October 2017

* Extended `Company` with `Address`.
* Extended `Space category` with `UnitCount`.
* Extended parameters of `Add reservations` with `State`.
* Added `Add printer command` operation.
* Added `Add key cutter command` operation.
* Added `Get all devices` operation.

## 21st September 2017

* Extended `Enterprise` with `Email` and `Phone`.
* Extended parameters of `Get all reservations by ids` with `Extent`.
* Added `Add external payment` operation.

## 13th September 2017

* Extended `Company` with `Identifier` and `ElectronicInvoiceIdentifier`.
* Extended `Rate` with `IsPublic`.
* Extended `Enterprise` with `TimeZoneIdentifier`.
* Added `Get all departments` operation.

## 31st August 2017

* Extended `Customer` with `Number`.

## 24th August 2017

* Renamed `Charge Customer` to `Add order`, the old endpoint still works.
* Extended parameters of `Add order` with `ProductOrders`.
* Extended `Bill` with `CustomerId`, `CompanyId` and `DueUtc`.
* Extended `Enterprise` with `CreatedUtc`, `EditableHistoryInterval`.
* Extended `Product` with `Price`.
* Extended `Key cutter command data` with `KeyCutterData`.
* Added `Passport scanner command data`.

## 16th August 2017

* Added `Get all company contracts` operation.
* Added `Get all cashiers` operation.
* Added `Get all cashier transactions` operation.

## 2nd August 2017

* Added `Get service availability` operation.
* Added `Add reservations` operation.
* Extended `Company` with `TaxIdentificationNumber`.
* Extended `Accounting item` with `CustomerId`.
* Extended parameters of `Add customer` with `OverwriteExisting` and updated behaviour to return error in case of duplicate customer, unless `OverwriteExisting` is set to `true`.
* Updated behaviour of `Update customer` to return error in case of duplicate customer.

## 19th July 2017

* Extended `Customer` with `LoyaltyCode` and added it as a parameter to the `Add customer` and `Update customer`.
* Added `Get all closed bills` operation.
* Extended `bill` with `Type`.
* Extended `Key cutter command data` with `KeyCount`.
* Added `Merge customers` operation.
* Extended `Enterprise` with `WebsiteUrl` and `Address`.
* Extended `Currency value` with `Net`.

## 12th July 2017

* Added `Fiscal machine command data`.

## 3rd July 2017

* Added optional `ConsumptionUtc` parameter to `Charge customer` operation.
* Extended response of `Get Rate Pricing` operation with `Currency`.
* Added `Classifications` to `Customer`.
* Added `Ordering` to `Space category`.
* Added `CancelledUtc` to `Reservation`.
* Added optional `AllowOpenBalance` and `Notes` parameters to `Process Reservation` operation.
* Extended WebSockets events with `Reservation` event.

## 18th June 2017

* Extended `Reservation` with `AssignedSpaceLocked`.
* Added `Rate Extent` to `Get All Rates`, added `Rate Restrictions` to the result.
* Added `Space Extent` to `Get All Spaces`, added and `Space Feature`s and `Space Feature Assignment`s to the result.
* Added `Update Reservation Interval` operation.
* Added optional `ServiceId` parameter to `Charge Customer` operation, so any service can be charged.
* Added `Promotions` to `Service` and `Product`.
* Extended `Customer` with `SecondLastName` and added it as a parameter to the `Add Customer` and `Update Customer`.

## 13th June 2017

* Introduced WebSockets and first use case for command events.

## 7th June 2017

* Deprecated `BirthDateUtc` on `Customer` and in `Update Customer` parameters. `BirthDate` without time specified should be used instead.
* Deprecated `IssuanceUtc` and `ExpirationUtc` on `Document`. `Issuance` and `Expiration` without time should be used instead.

## 10th May 2017

* Added `ServiceId` to `Accounting Item`.

## 3rd May 2017

* Added `Update Space State` operation.
* Added `Add Reservation Product` operation.
* Extended `Product` with `ShortName`.
* Extended `Reservation Time Filter` with `Cancelled` option.

## 12th April 2017

* Extended `Get All Reservations` operation with `Extent` parameter. This simplifies some of integrations, since now it is possible to fetch both reservations and their items at the same time. It is no longer necessary to first get all reservations and then obtain their items using `Get All Reservation Items`. Also clients that do not use reservation groups or reservation customers should specify the `Extent` to be only `Reservations` and nothing else in order to reduce unnecessary network traffic. On the other hand, if the client makes many successive calls to `Get All Reservations` \, it is not recommended to include things that do not vary into `Extent`. E.g. `Spaces` or `Rates` should still be fetched once, not together with every reservation fetch.
* Added `Overlapping` time filter to `Get All Reservations` operation.
* Added `Get Configuration` operation.
* Added `Update Reservation Space` operation.
* Added `Update Reservation Requested Category` operation.

## 22nd February 2017

* Extended `Update Customer` operation parameters with `Email`.
* Extended `Accounting Category` with `Classification`.

## 9th February 2017

* Added `Delete Reservation Companion` operation.
* Added `Get All Customers` operation.
* Extended `Customer` with `CreatedUtc` and `UpdatedUtc`.

## 26th January 2017

* Extended `Customer` with `BirthPlace` .
* Extended `Document` with `Issuance`.

## 18th January 2017

* Extended `Accounting category` with `LedgerAccountCode`, `PostingAccountCode` and `CostCenterCode`.
* Extended `Customer` with `LanguageCode`.

| Next |
| :-- |
| [Changelog 2016](changelog2016.md) |
