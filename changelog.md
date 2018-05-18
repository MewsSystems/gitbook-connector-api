# Changelog

## 17th May 2018 22:00 UTC

* Added [Get all preauthorizations by customers](operations/finance.md#get-all-preauthorizations-by-customers) operation.

## 9th May 2018 21:00 UTC

* Extended [Customer](operations/customers.md#customer) with `Options`.

## 28th April 2018 22:00 UTC

* Extended [Company](operations/enterprises.md#company) with `AdditionalTaxIdentifier`.

## 28th March 2018 23:00 UTC

* Added [Get all commands by ids](operations/integrations.md#get-all-commands-by-ids) operation.

## 22nd March 2018 22:00 UTC

* Extended and generalized [Rate restrictions](operations/services.md#rate-restrictions).

## 8th March 2018 22:30 UTC

* Extended [Command event](websockets.md#command-event) with `State`.
* Extended [Reservation event](websockets.md#reservation-event) with `State`, `StartUtc`, `EndUtc`.
* Extended [Space event](websockets.md#space-event) with `State`.

## 21st February 2018 22:00 UTC

* Extended [Enterprise](operations/configuration.md#enterprise) with `ChainId`, `DefaultLanguageCode`, `LegalEnvironmentCode`, `LogoImageId` and `CoverImageId`.
* Extended [Language](operations/configuration.md#language) with `FallbackLanguageCode`.
* Extended [Customer](operations/customers.md#customer) with `TaxIdentificationCode`.
* Extended [Accounting item](operations/finance.md#accounting-item) with `ClosedUtc`.
* Extended [Product](operations/services.md#product) with `Description`.
* Extended [Space](operations/enterprises.md#space) and [Space category](operations/enterprises.md#space-category) with `IsActive`.
* Extended [Space extent](operations/enterprises.md#space-extent) with `Inactive`.
* Extended [Update rate price](operations/services.md#update-rate-price) with possibility to remove adjustments \(using unspecified `Value`\).
* Extended [Get rate pricing](operations/services.md#get-rate-pricing) response with `CategoryAdjustments`.
* Extended websocket events with [Space event](websockets.md#space-event).
* Added [Get all bills by customers](operations/finance.md#get-all-bills-by-customers) operation.

## 6th December 2017 21:00 UTC

* Extended `Product order parameters` with `UnitCost`.
* Extended parameters of `Get all accounting items` with `TimeFilter`.
* Added `Get all bills by ids` operation.
* Added `Get all customers by emails` operation.

## 30th November 2017 22:30 UTC

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

## 9th November 2017 21:30 UTC

* Extended `Reservation` with `Origin`.
* Extended `Enterprise` with `Currencies`.
* Extended `Space` with `FloorNumber` and `BuildingNumber`.
* Added `Get all countries` operation.
* Added `Get all currencies` operation.
* Added `Get all exchange rates` operation.
* Made `Type` in parameters of `Add external payment` optional.

## 19th October 2017 22:00 UTC

* Extended `Company` with `Address`.
* Extended `Space category` with `UnitCount`.
* Extended parameters of `Add reservations` with `State`.
* Added `Add printer command` operation.
* Added `Add key cutter command` operation.
* Added `Get all devices` operation.

## 21st September 2017 21:00 UTC

* Extended `Enterprise` with `Email` and `Phone`.
* Extended parameters of `Get all reservations by ids` with `Extent`.
* Added `Add external payment` operation.

## 13th September 2017 21:00 UTC

* Extended `Company` with `Identifier` and `ElectronicInvoiceIdentifier`.
* Extended `Rate` with `IsPublic`.
* Extended `Enterprise` with `TimeZoneIdentifier`.
* Added `Get all departments` operation.

## 31st August 2017 16:00 UTC

* Extended `Customer` with `Number`.

## 24th August 2017 20:00 UTC

* Renamed `Charge Customer` to `Add order`, the old endpoint still works.
* Extended parameters of `Add order` with `ProductOrders`.
* Extended `Bill` with `CustomerId`, `CompanyId` and `DueUtc`.
* Extended `Enterprise` with `CreatedUtc`, `EditableHistoryInterval`.
* Extended `Product` with `Price`.
* Extended `Key cutter command data` with `KeyCutterData`.
* Added `Passport scanner command data`.

## 16th August 2017 22:00 UTC

* Added `Get all company contracts` operation.
* Added `Get all cashiers` operation.
* Added `Get all cashier transactions` operation.

## 2nd August 2017 21:00 UTC

* Added `Get service availability` operation.
* Added `Add reservations` operation.
* Extended `Company` with `TaxIdentificationNumber`.
* Extended `Accounting item` with `CustomerId`.
* Extended parameters of `Add customer` with `OverwriteExisting` and updated behaviour to return error in case of duplicate customer, unless `OverwriteExisting` is set to `true`.
* Updated behaviour of `Update customer` to return error in case of duplicate customer.

## 19th July 2017 22:00 UTC

* Extended `Customer` with `LoyaltyCode` and added it as a parameter to the `Add customer` and `Update customer`.
* Added `Get all closed bills` operation.
* Extended `bill` with `Type`.
* Extended `Key cutter command data` with `KeyCount`.
* Added `Merge customers` operation.
* Extended `Enterprise` with `WebsiteUrl` and `Address`.
* Extended `Currency value` with `Net`.

## 12th July 2017 20:00 UTC

* Added `Fiscal machine command data`.

## 3rd July 2017 22:00 UTC

* Added optional `ConsumptionUtc` parameter to `Charge customer` operation.
* Extended response of `Get Rate Pricing` operation with `Currency`.
* Added `Classifications` to `Customer`.
* Added `Ordering` to `Space category`.
* Added `CancelledUtc` to `Reservation`.
* Added optional `AllowOpenBalance` and `Notes` parameters to `Process Reservation` operation.
* Extended websocket events with `Reservation event`.

## 18th June 2017 21:30 UTC

* Extended `Reservation` with `AssignedSpaceLocked`.
* Added `Rate Extent` to `Get All Rates`, added `Rate Restrictions` to the result.
* Added `Space Extent` to `Get All Spaces`, added and `Space Feature`s and `Space Feature Assignment`s to the result.
* Added `Update Reservation Interval` operation.
* Added optional `ServiceId` parameter to `Charge Customer` operation, so any service can be charged.
* Added `Promotions` to `Service` and `Product`.
* Extended `Customer` with `SecondLastName` and added it as a parameter to the `Add Customer` and `Update Customer`.

## 13th June 2017 21:00 UTC

* Introduced `Websockets` and first use case for command events.

## 7th June 2017 11:00 UTC

* Deprecated `BirthDateUtc` on `Customer` and in `Update Customer` parameters. `BirthDate` without time specified should be used instead.
* Deprecated `IssuanceUtc` and `ExpirationUtc` on `Document`. `Issuance` and `Expiration` without time should be used instead.

## 10th May 2017 23:00 UTC

* Added `ServiceId` to `Accounting Item`.

## 3rd May 2017 21:30 UTC

* Added `Update Space State` operation.
* Added `Add Reservation Product` operation.
* Extended `Product` with `ShortName`.
* Extended `Reservation Time Filter` with `Cancelled` option.

## 12th April 2017 22:30 UTC

* Extended `Get All Reservations` operation with `Extent` parameter. This simplifies some of integrations, since now it is possible to fetch both reservations and their items at the same time. It is no longer necessary to first get all reservations and then obtain their items using `Get All Reservation Items`. Also clients that do not use reservation groups or reservation customers should specify the `Extent` to be only `Reservations` and nothing else in order to reduce unnecessary network traffic. On the other hand, if the client makes many successive calls to `Get All Reservations` \, it is not recommended to include things that do not vary into `Extent`. E.g. `Spaces` or `Rates` should still be fetched once, not together with every reservation fetch.
* Added `Overlapping` time filter to `Get All Reservations` operation.
* Added `Get Configuration` operation.
* Added `Update Reservation Space` operation.
* Added `Update Reservation Requested Category` operation.

## 22nd February 2017 22:00 UTC

* Extended `Update Customer` operation parameters with `Email`.
* Extended `Accounting Category` with `Classification`.

## 9th February 2017 00:00 UTC

* Added `Delete Reservation Companion` operation.
* Added `Get All Customers` operation.
* Extended `Customer` with `CreatedUtc` and `UpdatedUtc`.

## 26th January 2017 00:30 UTC

* Extended `Customer` with `BirthPlace` .
* Extended `Document` with `Issuance`.

## 18th January 2017 22:00 UTC

* Extended `Accounting category` with `LedgerAccountCode`, `PostingAccountCode` and `CostCenterCode`.
* Extended `Customer` with `LanguageCode`.

## 14th December 2016 21:50 UTC

* Added `Get All Customers By Ids` operation.
* Extended `Reservation` with `ChannelManagerNumber`, `ChannelManagerGroupNumber` and `ChannelManager`.
* Extended `Get All Products` to return products of mulitple services at once.
* Extended `Accounting Category` with `Code` and `ExternalCode`.

## 22nd November 2016 23:15 UTC

* Added `Notes` to `Accounting Item`.
* Deprecated response of `Add Credit Card Payment`.

## 15th November 2016 22:00 UTC

* Added `BaseRateId` and `ShortName` to `Rate`.
* Added `Get All Reservations By Ids` operation.

## 17th October 2016 23:00 UTC

* Removed the deprecated data fields and operations.
* Added `Start` and `End` `Reservation Time Filter`.
* Added `ProductId`, `BillId` and `Type` to `Accounting Item`.
* Added `ServiceId` to `Reservation`.
* Added optional `BillId` parameter to `Add Credit Card Payment`.
* Added `Get All Services` operation.
* Added `Get All Products` operation.
* Added `Get Rate Pricing` operation.
* Generalized `Update Rate Base Price` to `Update Rate Price`.

## 1st September 2016 22:00 UTC

* Added operation `Update Rate Base Price` that allows e.g. revenue management systems to provide recommended rates to MEWS.
* Added operation `Get All Reservation Items` that returns revenue items of selected reservations.
* Added `Currency` parameter to operations `Get Customers Open Items` and `Get All Accounting Items`.
* Deprecated operation `Get Customer Balance`. Operation `Get Customer Open Items` should be used instead, since it provides more complete information.
* Deprecated properties `Customer` and `Companions` on `Reservation`. `CustomerId` an `CompanionIds` should be used instead. The customer data are part of the result of `Get All Reservations`. This removes redundancy in the response data, especially in hostels where the customer is mostly the only companion and currently the customer data were twice in the result.
* We plan to make `Address` on `Customer` optional in order to reduce response sizes, in many cases the customers do not have address details filled in.

