# Changelog

## 28th Nonvember 2019 08:30 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `CreditCardId`.
* Extended [Update Reservation](operations/reservations.md#update-reservation) parameters with `CreditCardId`.

## 21st Nonvember 2019 08:30 UTC

* Added [Delete space blocks](operations/enterprises.md#delete-space-blocks) operation.

## 6th November 2019 14:30 UTC

* Extended [Product](operations/services.md#product) with `Posting`.

## 15th October 2019 16:00 UTC

* Added [Add tokenized credit card](operations/finance.md#add-tokenized-credit-card) operation.
* Extended [Get configuration](operations/configuration.md#get-configuration) with [PaymentCardStorage](operations/configuration.md#payment-card-storage).

## 9th October 2019 09:00 UTC

* Added [Update company](operations/enterprises.md#update-company) operation.

## 8th October 2019 09:00 UTC

* Added [Add space block](operations/enterprises.md#add-space-block) operation.
* Extended [Customer](operations/customers.md#customer) with `BillingCode` and `AccountingCode`.

## 7th October 2019 13:10 UTC

* Extended [Bill](operations/finance.md#bill) with `TaxedUtc`.

## 7th October 2019 10:00 UTC

* Extended [Request body](guidelines.md#body) with `Client`.

## 25th September 2019 08:08 UTC

* Added [Get all companionships](operations/services.md#get-all-companionships) operation.

## 9th September 2019 15:50 UTC

* Added [Get all bills](operations/finance.md#get-all-bills) operation.

## 6th September 2019 18:00 UTC

* Extended websocket events with [Price update event](websockets.md#price-update-event).

## 18th August 2019 18:00 UTC

* Extended [Get all restrictions](operations/services.md#get-all-restrictions) parameters with `StartUtc`, `EndUtc`, `TimeFilter`, `SpaceCategoryIds` and `RateIds`.

## 13th August 2019 16:55 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `BookerId`.
* Extended [Update Reservation](operations/reservations.md#update-reservation) parameters with `BookerId`.

## 12th August 2019 16:55 UTC

* Extended [External payment type](operations/finance.md#external-payment-type) with `Invoice`, `WireTransfer` and `Bacs`.

## 17th July 2019 18:00 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `TimeUnitPrices`.
* Extended [Update Reservation](operations/reservations.md#update-reservation) parameters with `TimeUnitPrices`.

## 26th June 2019 19:00 UTC

* Added [Get all tax environments](operations/configuration.md#get-all-tax-environments) operation.
* Added [Amount](operations/finance.md#amount-value).
* Added [Amount Parameters](operations/services.md#amount-parameters).
* Extended [Fiscal machine command data](integrations.md#fiscal-machine-command-data) with `FiscalMachineData` and `ApiUrl`.
* Extended [Get all accounting items](operations/finance.md#get-all-accounting-items) response with `SubType`.
* Extended [Enterprise](operations/configuration.md#enterprise) with `Pricing`.

## 21st June 2019 19:00 UTC

* Added [Update Reservation](operations/reservations.md#update-reservation) operation.

## 10th June 2019 19:00 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `GroupName`.

## 15th May 2019 19:00 UTC

* Added [Add Company](operations/enterprises.md#add-company) operation.
* Extended [Add Customer](operations/customers.md#add-customer) parameters with `CarRegistrationNumber` and `TaxIdentificationNumber`.
* Extended [Update Customer](operations/customers.md#update-customer) parameters with `CarRegistrationNumber` and `TaxIdentificationNumber`.
* Extended [Confirm reservation](operations/reservations.md#confirm-reservation) parameters with `SendConfirmationEmail`.
* Extended [Get all accounting items](operations/finance.md#accounting-items-get-all) parameters with `States`.
* Extended [Reservation extent](operations/reservations.md#reservation-extent) with `AccountingStates`.
* Extended [Get rate pricing](operations/services.md#get-rate-pricing) response with `RelativeAdjustment`, `AbsoluteAdjustment`, `EmptyUnitAdjustment` and `ExtraUnitAdjustment`.

## 13th March 2019 19:00 UTC

* Added [Get all reservations by numbers](operations/reservations.md#get-all-reservations-by-numbers) operation.

## 27th February 2019 22:00 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `SendConfirmationEmail`.

## 19th February 2019 18:00 UTC

* Extended [Add restriction](operations/services.md#add-restrictions) parameters with `Identifier`.
* Extended [Company](operations/enterprises.md#company) with `BillingCode`.

## 6th February 2019 17:00 UTC

* Extended [Get all space blocks](operations/enterprises.md#get-all-space-blocks) parameters with `Extent`.
* Extended [Space block](operations/enterprises.md#space-block) with `IsActive`.

## 5th February 2019 9:20 UTC

* Added [Get all restrictions](operations/services.md#get-all-restrictions) operation.
* Added [Add restrictions](operations/services.md#add-restrictions) operation.
* Added [Delete restrictions](operations/services.md#delete-restrictions) operation.

## 29th January 2019 19:00 UTC

* Extended [Company](operations/enterprises.md#company) with `IsActive`.

## 26th January 2019 15:40 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `CompanyId`.

## 4nd January 2019 18:00 UTC

* Added [Charge credit card](operations/finance.md#charge-credit-card) operation.
* Added [Get all companies by name](operations/enterprises.md#get-all-companies-by-name) operation.

## 2nd January 2019 16:00 UTC

* Extended [Add customer](operations/customers.md#add-customer) parameters with `Options`.
* Extended [Update customer](operations/customers.md#update-customer) parameters with `Options`.

## 19th December 2018 18:00 UTC

* Extended [Bill](operations/finance.md#bill) with `VariableSymbol`.

## 12th December 2018 18:00 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `TravelAgencyId`.

## 28th November 2018 22:00 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `TimeUnitCost`.

## 21st Nov 2018 18:00 UTC

* Extended [Reservation extent](operations/reservations.md#reservation-extent) with `QrCodeData`.
* Extended [Space feature](operations/enterprises.md#space-feature) with `Names`, `ShortName`, `ShortNames` and `Descriptions`.

## 14th Nov 2018 17:00 UTC

* Extended [Add credit card payments](operations/finance.md#add-credit-card-payment) parameters with `AccountingCategoryId`.
* Extended [Add external payment](operations/finance.md#add-external-payment) parameters with `AccountingCategoryId`.
* Extended [Add outlet bills](operations/finance.md#outlet-item-parameters) parameters with `AccountingCategoryId`.
* Extended [Add order](operations/services.md#add-order) parameters with `AccountingCategoryId`.

## 19th Sep 2018 18:00 UTC

* Extended [Reservation event](websockets.md#reservation-event) with `AssignedSpaceId`.
* Extended [Service](operations/services.md#service) with `Type`.

## 29th Aug 2018 17:00 UTC

* Extended [Space category](operations/enterprises.md#space-category) with `ExtraUnitCount`.

## 16th Aug 2018 22:00 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `GroupId`.
* Extended [Payment terminal command data](operations/integrations.md#payment-terminal-command-data) with `PaymentTerminalData`.
* Added [Confirm reservation](operations/reservations.md#confirm-reservation) operation.

## 8th Aug 2018 17:00 UTC

* Extended [Get all countries](operations/configuration.md#get-all-countries) response with `CountrySubdivisions` and `CountryAlliances`.
* Extended [Get all space blocks](operations/enterprises.md#get-all-space-blocks) parameters with `TimeFilter`.
* Extended [Get all accounting items](operations/finance.md#get-all-accounting-items) parameters with `Extent` and response with `CreditCardTransactions`.
* Extended [Key cutter command data](operations/integrations.md#key-cutter-command-data) with `Email`.

## 1st Aug 2018 16:00 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `CheckOverbooking`.
* Added [Get all outlet items](operations/finance.md#get-all-outlet-items) operation. 

## 25th Jul 2018 16:20 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `CheckRateApplicability`.

## 27th Jun 2018 16:30 UTC

* Added [Get all customers by name](operations/customers.md#get-all-customers-by-name) operation.

## 20th Jun 2018 16:15 UTC

* Extended [Get all reservations](operations/reservations.md#get-all-reservations) with possibility to retrieve notes.

## 13th Jun 2018 21:30 UTC

* Added [Get all outlets](operations/enterprises.md#get-all-outlets) operation.
* Added [Add outlet bills](operations/finance.md#add-outlet-bills) operation.

## 7th Jun 2018 22:00 UTC

* Extended [Bill](operations/finance.md#bill) with `CounterId`.
* Extended [Key cutter command data](operations/integrations.md#key-cutter-command-data) with `Telephone` and `ReservationNumber`.
* Extended [Space category](operations/enterprises.md#space-category) with `Names`, `ShortNames` and `Descriptions`.

## 5th Jun 2018 15:00 UTC

* Mimimal required TLS version updated to `TLS 1.2`.

## 31st May 2018 22:30 UTC

* Extended request [Body](guidelines.md#body) with optional `Language` and `Culture`.
* Extended [Accounting item](operations/finance.md#accounting-item) with `CreditCardId`.
* Extended [Update reservation requested category](operations/reservations.md#update-reservation-requested-category) with `Overbook`.
* Extended [Add reservation product](operations/reservations.md#add-reservation-product) with `UnitCost`.
* Extended [Product charging](operations/services.md#product-charging) with `PerPerson`.
* Updated `Expiration` in [Credit card parameters](operations/finance.md#credit-card-parameters) to be optional. 
* Added [Get all credit cards by ids](operations/finance.md#get-all-credit-cards-by-ids) operation.
* Added [Get all credit cards by customers](operations/finance.md#get-all-credit-cards-by-customers) operation.

## 25th May 2018 23:00 UTC

* Extended [Company](operations/enterprises.md#company) with `TaxIdentifier`, `TaxIdentificationNumber` is deprecated. 
* Extended [Product](operations/services.md#product) with `CategoryId`.
* Extended [Company](operations/enterprises.md#company) with `AccountingCode`.
* Extended [Add customer](operations/customers.md#add-customer) and [Update customer](operations/customers.md#update-customer) with `Identity card`, `Visa` and `Drivers license`.
* Added [Update reservation customer](operations/reservations.md#update-reservation-customer) operation.

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

