# Changelog 2018

## 19th December 2018

* Extended [Bill](../operations/bills.md#bill) with `VariableSymbol`.

## 12th December 2018

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `TravelAgencyId`.

## 28th November 2018

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `TimeUnitCost`.

## 21st November 2018

* Extended [Reservation extent](../operations/reservations.md#reservation-extent) with `QrCodeData`.
* Extended 'Space feature' with `Names`, `ShortName`, `ShortNames` and `Descriptions`.

## 14th November 2018

* Extended [Add credit card payments](../operations/payments.md#add-credit-card-payment) parameters with `AccountingCategoryId`.
* Extended [Add external payment](../operations/payments.md#add-external-payment) parameters with `AccountingCategoryId`.
* Extended [Add outlet bills](../operations/outletitems.md#outlet-item-parameters) parameters with `AccountingCategoryId`.
* Extended [Add order](../operations/orders.md#add-order) parameters with `AccountingCategoryId`.

## 19th September 2018

* Extended [Reservation event](../websockets/README.md#reservation-event) with `AssignedSpaceId`.
* Extended [Service](../operations/services.md#service) with `Type`.

## 29th August 2018

* Extended 'Space category' with `ExtraUnitCount`.

## 16th August 2018

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `GroupId`.
* Extended [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) with `PaymentTerminalData`.
* Added [Confirm reservation](../operations/reservations.md#confirm-reservation) operation.

## 8th August 2018

* Extended [Get all countries](../operations/countries.md#get-all-countries) response with `CountrySubdivisions` and `CountryAlliances`.
* Extended 'Get all space blocks' parameters with `TimeFilter`.
* Extended [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) parameters with `Extent` and response with `CreditCardTransactions`.
* Extended [Key cutter command data](../operations/commands.md#key-cutter-command-data) with `Email`.

## 1st August 2018

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `CheckOverbooking`.
* Added [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) operation. 

## 25th July 2018

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `CheckRateApplicability`.

## 27th June 2018

* Added [Get all customers by name](../operations/customers.md#get-all-customers-by-name) operation.

## 20th June 2018

* Extended [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) with possibility to retrieve notes.

## 13th June 2018

* Added [Get all outlets](../operations/outlets.md#get-all-outlets) operation.
* Added [Add outlet bills](../operations/outletbills.md#add-outlet-bills) operation.

## 7th June 2018

* Extended [Bill](../operations/bills.md#bill) with `CounterId`.
* Extended [Key cutter command data](../operations/commands.md#key-cutter-command-data) with `Telephone` and `ReservationNumber`.
* Extended 'Space category' with `Names`, `ShortNames` and `Descriptions`.

## 5th June 2018

* Mimimal required TLS version updated to `TLS 1.2`.

## 31st May 2018

* Extended request [Body](../guidelines/README.md#body) with optional `Language` and `Culture`.
* Extended [Accounting item](../operations/accountingitems.md#accounting-item) with `CreditCardId`.
* Extended [Update reservation requested category](../operations/reservations.md#update-reservation-requested-category) with `Overbook`.
* Extended [Add reservation product](../operations/reservations.md#add-reservation-product) with `UnitCost`.
* Extended [Product charging](../operations/products.md#product-charging) with `PerPerson`.
* Updated `Expiration` in [Credit card parameters](../operations/creditcards.md#credit-card-parameters) to be optional. 
* Added [Get all credit cards by ids](../operations/creditcards.md#get-all-credit-cards-by-ids) operation.
* Added [Get all credit cards by customers](../operations/creditcards.md#get-all-credit-cards-by-customers) operation.

## 25th May 2018

* Extended [Company](../operations/companies.md#company) with `TaxIdentifier`, `TaxIdentificationNumber` is deprecated. 
* Extended [Product](../operations/products.md#product) with `CategoryId`.
* Extended [Company](../operations/companies.md#company) with `AccountingCode`.
* Extended [Add customer](../operations/customers.md#add-customer) and [Update customer](../operations/customers.md#update-customer) with `Identity card`, `Visa` and `Drivers license`.
* Added [Update reservation customer](../operations/reservations.md#update-reservation-customer) operation.

## 17th May 2018

* Added [Get all preauthorizations by customers](../operations/preauthorizations.md#get-all-preauthorizations-by-customers) operation.

## 9th May 2018

* Extended [Customer](../operations/customers.md#customer) with `Options`.

## 28th April 2018

* Extended [Company](../operations/companies.md#company) with `AdditionalTaxIdentifier`.

## 28th March 2018

* Added [Get all commands by ids](../operations/commands.md#get-all-commands-by-ids) operation.

## 22nd March 2018

* Extended and generalized [Rate restrictions](../operations/restrictions.md#rate-restrictions).

## 8th March 2018

* Extended [Command event](../websockets/README.md#command-event) with `State`.
* Extended [Reservation event](../websockets/README.md#reservation-event) with `State`, `StartUtc`, `EndUtc`.
* Extended [Space event](../websockets/README.md#space-event) with `State`.

## 21st February 2018

* Extended [Enterprise](../operations/configuration.md#enterprise) with `ChainId`, `DefaultLanguageCode`, `LegalEnvironmentCode`, `LogoImageId` and `CoverImageId`.
* Extended [Language](../operations/languages.md#language) with `FallbackLanguageCode`.
* Extended [Customer](../operations/customers.md#customer) with `TaxIdentificationCode`.
* Extended [Accounting item](../operations/accountingitems.md#accounting-item) with `ClosedUtc`.
* Extended [Product](../operations/products.md#product) with `Description`.
* Extended 'Space' and 'Space category' with `IsActive`.
* Extended 'Space extent' with `Inactive`.
* Extended [Update rate price](../operations/rates.md#update-rate-price) with possibility to remove adjustments \(using unspecified `Value`\).
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) response with `CategoryAdjustments`.
* Extended websocket events with [Space event](../websockets/README.md#space-event).
* Added [Get all bills by customers](../operations/bills.md#get-all-bills-by-customers) operation.

| Next |
| :-- |
| [Changelog 2017](changelog2017.md) |
