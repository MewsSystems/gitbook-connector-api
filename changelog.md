# Changelog

## 28th March 2018 23:00 UTC

* Added [Get all commands by ids](operations/#get-all-commands-by-ids) operation.

## 22nd March 2018 22:00 UTC

* Extended and generalized [Rate restrictions](operations/#rate-restrictions).

## 8th March 2018 22:30 UTC

* Extended [Command event](websockets.md#command-event) with `State`.
* Extended [Reservation event](websockets.md#reservation-event) with `State`, `StartUtc`, `EndUtc`.
* Extended [Space event](websockets.md#space-event) with `State`.

## 21st February 2018 22:00 UTC

* Extended [Enterprise](operations/#enterprise) with `ChainId`, `DefaultLanguageCode`, `LegalEnvironmentCode`, `LogoImageId` and `CoverImageId`.
* Extended [Language](operations/#language) with `FallbackLanguageCode`.
* Extended [Customer](operations/#customer) with `TaxIdentificationCode`.
* Extended [Accounting item](operations/#accounting-item) with `ClosedUtc`.
* Extended [Product](operations/#product) with `Description`.
* Extended [Space](operations/#space) and [Space category](operations/#space-category) with `IsActive`.
* Extended [Space extent](operations/#space-extent) with `Inactive`.
* Extended [Update rate price](operations/#update-rate-price) with possibility to remove adjustments \(using unspecified `Value`\).
* Extended [Get rate pricing](operations/#get-rate-pricing) response with `CategoryAdjustments`.
* Extended websocket events with [Space event](websockets.md#space-event).
* Added [Get all bills by customers](operations/#get-all-bills-by-customers) operation.

## 6th December 2017 21:00 UTC

* Extended [Product order parameters](operations/#product-order-parameters) with `UnitCost`.
* Extended parameters of [Get all accounting items](operations/#get-all-accounting-items) with `TimeFilter`.
* Added [Get all bills by ids](operations/#get-all-bills-by-ids) operation.
* Added [Get all customers by emails](operations/#get-all-customers-by-emails) operation.

## 30th November 2017 22:30 UTC

* Extended [Accounting item](operations/#accounting-item) with `InvoiceId`.
* Extended [Space category](operations/#space-category) with `Description` and `ImageIds`.
* Extended [Customer](operations/#customer) with `Notes`.
* Extended [Key cutter command data](operations/#key-cutter-command-data) with `ReservationId`.
* Extended parameters of [Add customer](operations/#add-customer) and [Update customer](operations/#update-customer) with `Classifications` and `Notes`.
* Extended parameters of [Add reservations](operations/#add-reservations) with `Identifier`.
* Added [Get all reservations by customers](operations/#get-all-reservations-by-customers) operation.
* Added [Price reservations](operations/#price-reservations) operation.
* Added [Add customer file](operations/#add-customer-file) operation.
* Added [Get image URLs](operations/#get-image-urls) operation.

## 9th November 2017 21:30 UTC

* Extended [Reservation](operations/#reservation) with `Origin`.
* Extended [Enterprise](operations/#enterprise) with `Currencies`.
* Extended [Space](operations/#space) with `FloorNumber` and `BuildingNumber`.
* Added [Get all countries](operations/#get-all-countries) operation.
* Added [Get all currencies](operations/#get-all-currencies) operation.
* Added [Get all exchange rates](operations/#get-all-exchange-rates) operation.
* Made `Type` in parameters of [Add external payment](operations/#add-external-payment) optional.

## 19th October 2017 22:00 UTC

* Extended [Company](operations/#company) with `Address`.
* Extended [Space category](operations/#space-category) with `UnitCount`.
* Extended parameters of [Add reservations](operations/#add-reservations) with `State`.
* Added [Add printer command](operations/#add-printer-command) operation.
* Added [Add key cutter command](operations/#add-key-cutter-command) operation.
* Added [Get all devices](operations/#get-all-devices) operation.

## 21st September 2017 21:00 UTC

* Extended [Enterprise](operations/#enterprise) with `Email` and `Phone`.
* Extended parameters of [Get all reservations by ids](operations/#get-all-reservations-by-ids) with `Extent`.
* Added [Add external payment](operations/#add-external-payment) operation.

## 13th September 2017 21:00 UTC

* Extended [Company](operations/#company) with `Identifier` and `ElectronicInvoiceIdentifier`.
* Extended [Rate](operations/#rate) with `IsPublic`.
* Extended [Enterprise](operations/#enterprise) with `TimeZoneIdentifier`.
* Added [Get all departments](operations/#get-all-company-departments) operation.

## 31st August 2017 16:00 UTC

* Extended [Customer](operations/#customer) with `Number`.

## 24th August 2017 20:00 UTC

* Renamed `Charge Customer` to [Add order](operations/#add-order), the old endpoint still works.
* Extended parameters of [Add order](operations/#add-order) with `ProductOrders`.
* Extended [Bill](operations/#bill) with `CustomerId`, `CompanyId` and `DueUtc`.
* Extended [Enterprise](operations/#enterprise) with `CreatedUtc`, `EditableHistoryInterval`.
* Extended [Product](operations/#product) with `Price`.
* Extended [Key cutter command data](operations/#key-cutter-command-data) with `KeyCutterData`.
* Added [Passport scanner command data](operations/#passport-scanner-command-data).

## 16th August 2017 22:00 UTC

* Added [Get all company contracts](operations/#get-all-company-contracts) operation.
* Added [Get all cashiers](operations/#get-all-cashiers) operation.
* Added [Get all cashier transactions](operations/#get-all-cashier-transactions) operation.

## 2nd August 2017 21:00 UTC

* Added [Get service availability](operations/#get-service-availability) operation.
* Added [Add reservations](operations/#add-reservations) operation.
* Extended [Company](operations/#company) with `TaxIdentificationNumber`.
* Extended [Accounting item](operations/#accounting-item) with `CustomerId`.
* Extended parameters of [Add customer](operations/#add-customer) with `OverwriteExisting` and updated behaviour to return error in case of duplicate customer, unless `OverwriteExisting` is set to `true`.
* Updated behaviour of [Update customer](operations/#update-customer) to return error in case of duplicate customer.

## 19th July 2017 22:00 UTC

* Extended [Customer](operations/#customer) with `LoyaltyCode` and added it as a parameter to the [Add customer](operations/#add-customer) and [Update customer](operations/#update-customer).
* Added [Get all closed bills](operations/#get-all-closed-bills) operation.
* Extended [bill](operations/#bill) with `Type`.
* Extended [Key cutter command data](operations/#key-cutter-command-data) with `KeyCount`.
* Added [Merge customers](operations/#merge-customers) operation.
* Extended [Enterprise](operations/#enterprise) with `WebsiteUrl` and `Address`.
* Extended [Currency value](operations/#currency-value) with `Net`.

## 12th July 2017 20:00 UTC

* Added [Fiscal machine command data](operations/#fiscal-machine-command-data).

## 3rd July 2017 22:00 UTC

* Added optional `ConsumptionUtc` parameter to [Charge customer](operations/#charge-customer) operation.
* Extended response of [Get Rate Pricing](operations/#get-rate-pricing) operation with `Currency`.
* Added `Classifications` to [Customer](operations/#customer).
* Added `Ordering` to [Space category](operations/#space-category).
* Added `CancelledUtc` to [Reservation](operations/#reservation).
* Added optional `AllowOpenBalance` and `Notes` parameters to [Process Reservation](operations/#process-reservation) operation.
* Extended websocket events with [Reservation event](websockets.md#reservation-event).

## 18th June 2017 21:30 UTC

* Extended [Reservation](operations/#reservation) with `AssignedSpaceLocked`.
* Added [Rate Extent](operations/#rate-extent) to [Get All Rates](operations/#get-all-rates), added [Rate Restrictions](operations/#rate-restrictions) to the result.
* Added [Space Extent](operations/#space-extent) to [Get All Spaces](operations/#get-all-rates), added and [Space Feature](operations/#space-feature)s and [Space Feature Assignment](operations/#space-feature-assignment)s to the result.
* Added [Update Reservation Interval](operations/#update-reservation-interval) operation.
* Added optional `ServiceId` parameter to [Charge Customer](operations/#charge-customer) operation, so any service can be charged.
* Added [Promotions](operations/#promotions) to [Service](operations/#service) and [Product](operations/#product).
* Extended [Customer](operations/#customer) with `SecondLastName` and added it as a parameter to the [Add Customer](operations/#add-customer) and [Update Customer](operations/#update-customer).

## 13th June 2017 21:00 UTC

* Introduced [Websockets](websockets.md) and first use case for command events.

## 7th June 2017 11:00 UTC

* Deprecated `BirthDateUtc` on [Customer](operations/#customer) and in [Update Customer](operations/#update-customer) parameters. `BirthDate` without time specified should be used instead.
* Deprecated `IssuanceUtc` and `ExpirationUtc` on [Document](operations/#document). `Issuance` and `Expiration` without time should be used instead.

## 10th May 2017 23:00 UTC

* Added `ServiceId` to [Accounting Item](operations/#accounting-item).

## 3rd May 2017 21:30 UTC

* Added [Update Space State](operations/#update-space-state) operation.
* Added [Add Reservation Product](operations/#add-reservation-product) operation.
* Extended [Product](operations/#product) with `ShortName`.
* Extended [Reservation Time Filter](operations/#reservation-time-filter) with `Cancelled` option.

## 12th April 2017 22:30 UTC

* Extended [Get All Reservations](operations/#get-all-reservations) operation with `Extent` parameter. This simplifies some of integrations, since now it is possible to fetch both reservations and their items at the same time. It is no longer necessary to first get all reservations and then obtain their items using [Get All Reservation Items](operations/#get-all-reservation-items). Also clients that do not use reservation groups or reservation customers should specify the `Extent` to be only `Reservations` and nothing else in order to reduce unnecessary network traffic. On the other hand, if the client makes many successive calls to [Get All Reservations](operations/#get-all-reservations) \(e.g. week by week or month by month\), it is not recommended to include things that do not vary into `Extent`. E.g. `Spaces` or `Rates` should still be fetched once, not together with every reservation fetch.
* Added `Overlapping` time filter to [Get All Reservations](operations/#get-all-reservations) operation.
* Added [Get Configuration](operations/#get-configuration) operation.
* Added [Update Reservation Space](operations/#update-reservation-space) operation.
* Added [Update Reservation Requested Category](operations/#update-reservation-requested-category) operation.

## 22nd February 2017 22:00 UTC

* Extended [Update Customer](operations/#update-customer) operation parameters with `Email`.
* Extended [Accounting Category](operations/#accounting-category) with `Classification`.

## 9th February 2017 00:00 UTC

* Added [Delete Reservation Companion](operations/#delete-reservation-companion) operation.
* Added [Get All Customers](operations/#get-all-customers) operation.
* Extended [Customer](operations/#customer) with `CreatedUtc` and `UpdatedUtc`.

## 26th January 2017 00:30 UTC

* Extended [Customer](operations/#customer) with `BirthPlace` \(affected update customer and add customer operations\).
* Extended [Document](operations/#document) with `Issuance`.

## 18th January 2017 22:00 UTC

* Extended [Accounting category](operations/#accounting-category) with `LedgerAccountCode`, `PostingAccountCode` and `CostCenterCode`.
* Extended [Customer](operations/#customer) with `LanguageCode`.

## 14th December 2016 21:50 UTC

* Added [Get All Customers By Ids](operations/#get-all-customers-by-ids) operation.
* Extended [Reservation](operations/#reservation) with `ChannelManagerNumber`, `ChannelManagerGroupNumber` and `ChannelManager`.
* Extended [Get All Products](operations/#get-all-products) to return products of mulitple services at once.
* Extended [Accounting Category](operations/#accounting-category) with `Code` and `ExternalCode`.

## 22nd November 2016 23:15 UTC

* Added `Notes` to [Accounting Item](operations/#accounting-item).
* Deprecated response of [Add Credit Card Payment](operations/#add-credit-card-payment).

## 15th November 2016 22:00 UTC

* Added `BaseRateId` and `ShortName` to [Rate](operations/#rate).
* Added [Get All Reservations By Ids](operations/#get-all-reservations-by-ids) operation.

## 17th October 2016 23:00 UTC

* Removed the deprecated data fields and operations.
* Added `Start` and `End` [Reservation Time Filter](operations/#reservation-time-filter).
* Added `ProductId`, `BillId` and `Type` to [Accounting Item](operations/#accounting-item).
* Added `ServiceId` to [Reservation](operations/#reservation).
* Added optional `BillId` parameter to [Add Credit Card Payment](operations/#add-credit-card-payment).
* Added [Get All Services](operations/#get-all-services) operation.
* Added [Get All Products](operations/#get-all-products) operation.
* Added [Get Rate Pricing](operations/#get-rate-pricing) operation.
* Generalized `Update Rate Base Price` to [Update Rate Price](operations/#update-rate-price).

## 1st September 2016 22:00 UTC

* Added operation [Update Rate Base Price](operations/#update-rate-base-price) that allows e.g. revenue management systems to provide recommended rates to MEWS.
* Added operation [Get All Reservation Items](operations/#get-all-reservation-items) that returns revenue items of selected reservations.
* Added `Currency` parameter to operations [Get Customers Open Items](operations/#get-customers-open-items) and [Get All Accounting Items](operations/#get-all-accounting-items).
* Deprecated operation [Get Customer Balance](operations/#get-customer-balance). Operation [Get Customer Open Items](operations/#get-customer-open-items) should be used instead, since it provides more complete information.
* Deprecated properties `Customer` and `Companions` on [Reservation](operations/#reservation). `CustomerId` an `CompanionIds` should be used instead. The customer data are part of the result of [Get All Reservations](operations/#get-all-reservations). This removes redundancy in the response data, especially in hostels where the customer is mostly the only companion and currently the customer data were twice in the result.
* We plan to make `Address` on [Customer](operations/#customer) optional in order to reduce response sizes, in many cases the customers do not have address details filled in.

