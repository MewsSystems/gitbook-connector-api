# Changelog 2019

## 12th December 2019

* Added [Get all credit cards](../operations/creditcards.md#get-all-credit-cards) operation.

## 28th November 2019

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `CreditCardId`.
* Extended [Update Reservation](../operations/reservations.md#update-reservation) parameters with `CreditCardId`.

## 21st November 2019

* Added 'Delete space blocks' operation.

## 6th November 2019

* Extended [Product](../operations/products.md#product) with `Posting`.

## 15th October 2019

* Added [Add tokenized credit card](../operations/creditcards.md#add-tokenized-credit-card) operation.
* Extended [Get configuration](../operations/configuration.md#get-configuration) with [PaymentCardStorage](../operations/configuration.md#payment-card-storage).

## 9th October 2019

* Added [Update company](../operations/companies.md#update-company) operation.

## 8th October 2019

* Added 'Add space block' operation.
* Extended [Customer](../operations/customers.md#customer) with `BillingCode` and `AccountingCode`.

## 7th October 2019

* Extended [Bill](../operations/bills.md#bill) with `TaxedUtc`.

## 7th October 2019

* Extended [Request body](../guidelines/README.md#body) with `Client`.

## 25th September 2019

* Added [Get all companionships](../operations/companionships.md#get-all-companionships) operation.

## 9th September 2019

* Added [Get all bills](../operations/bills.md#get-all-bills) operation.

## 6th September 2019

* Extended websocket events with [Price update event](../websockets/README.md#price-update-event).

## 18th August 2019

* Extended [Get all restrictions](../operations/restrictions.md#get-all-restrictions) parameters with `StartUtc`, `EndUtc`, `TimeFilter`, `SpaceCategoryIds` and `RateIds`.

## 13th August 2019

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `BookerId`.
* Extended [Update Reservation](../operations/reservations.md#update-reservation) parameters with `BookerId`.

## 12th August 2019

* Extended [External payment type](../operations/payments.md#external-payment-type) with `Invoice`, `WireTransfer` and `Bacs`.

## 17th July 2019

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `TimeUnitPrices`.
* Extended [Update Reservation](../operations/reservations.md#update-reservation) parameters with `TimeUnitPrices`.

## 26th June 2019

* Added [Get all tax environments](../operations/taxenvironments.md#get-all-tax-environments) operation.
* Added [Amount](../operations/accountingitems.md#amount-value).
* Added [Amount Parameters](../operations/accountingitems.md#amount-parameters).
* Extended [Fiscal machine command data](../operations/commands.md#fiscal-machine-command-data) with `FiscalMachineData` and `ApiUrl`.
* Extended [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) response with `SubType`.
* Extended [Enterprise](../operations/configuration.md#enterprise) with `Pricing`.

## 21st June 2019

* Added [Update Reservation](../operations/reservations.md#update-reservation) operation.

## 10th June 2019

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `GroupName`.

## 15th May 2019

* Added [Add Company](../operations/companies.md#add-company) operation.
* Extended [Add Customer](../operations/customers.md#add-customer) parameters with `CarRegistrationNumber` and `TaxIdentificationNumber`.
* Extended [Update Customer](../operations/customers.md#update-customer) parameters with `CarRegistrationNumber` and `TaxIdentificationNumber`.
* Extended [Confirm reservation](../operations/reservations.md#confirm-reservation) parameters with `SendConfirmationEmail`.
* Extended [Get all accounting items](../operations/accountingitems.md#accounting-items-get-all) parameters with `States`.
* Extended [Reservation extent](../operations/reservations.md#reservation-extent) with `AccountingStates`.
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) response with `RelativeAdjustment`, `AbsoluteAdjustment`, `EmptyUnitAdjustment` and `ExtraUnitAdjustment`.

## 13th March 2019

* Added [Get all reservations by numbers](../operations/reservations.md#get-all-reservations-by-numbers) operation.

## 27th February 2019

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `SendConfirmationEmail`.

## 19th February 2019

* Extended [Add restriction](../operations/restrictions.md#add-restrictions) parameters with `Identifier`.
* Extended [Company](../operations/companies.md#company) with `BillingCode`.

## 6th February 2019

* Extended 'Get all space blocks' parameters with `Extent`.
* Extended 'Space block' with `IsActive`.

## 5th February 2019

* Added [Get all restrictions](../operations/restrictions.md#get-all-restrictions) operation.
* Added [Add restrictions](../operations/restrictions.md#add-restrictions) operation.
* Added [Delete restrictions](../operations/restrictions.md#delete-restrictions) operation.

## 29th January 2019

* Extended [Company](../operations/companies.md#company) with `IsActive`.

## 26th January 2019

* Extended [Add reservations](../operations/reservations.md#add-reservations) parameters with `CompanyId`.

## 4nd January 2019

* Added [Charge credit card](../operations/creditcards.md#charge-credit-card) operation.
* Added [Get all companies by name](../operations/companies.md#get-all-companies-by-name) operation.

## 2nd January 2019

* Extended [Add customer](../operations/customers.md#add-customer) parameters with `Options`.
* Extended [Update customer](../operations/customers.md#update-customer) parameters with `Options`.

| Next |
| :-- |
| [Changelog 2018](changelog2018.md) |
