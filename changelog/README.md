# Changelog

## 17th October 2022

* Updated [Get company contracts](../operations/companycontracts.md#get-company-contracts) with pagination and filtering.
* Added [Add company contracts](../operations/companycontracts.md#add-company-contracts).
* Added [Update company contracts](../operations/companycontracts.md#update-company-contracts).
* Added [Delete company contracts](../operations/companycontracts.md#delete-company-contracts).

## 11th October 2022

* Added new operations [Get all source assignments](../operations/sourceassignments.md#get-all-source-assignments) and [Get all sources](../operations/sources.md#get-all-sources) for retrieval of reservation sources.

## 7th October 2022

* Added [Pagination](../guidelines/pagination.md) to [Get all resource access tokens](../operations/resourceaccesstokens.md#get-all-resource-access-tokens).

## 22nd September 2022

* Added description of [Travel agency contract options](../operations/companycontracts.md#travel-agency-contract-options).
* Added `ChannelManagerAbsoluteAdjustment` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `ChannelManagerRelativeAdjustment` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `Options` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `AccountingCode` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `InvoiceDueInterval` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `ChannelManagerBusinessSegmentId` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `ContactPerson` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `ContactEmail` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `AdditionalContactInfo` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
* Added `Notes` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).

## 13th September 2022

* Added [Pagination](../guidelines/pagination.md) to [Get All Customers](../operations/customers.md#get-all-customers).

## 8th September 2022

* Extended [Get all customers](../operations/customers.md#get-all-customers) response with `CarRegistrationNumber` field.

## 30th August 2022

* Small improvements to [Webhooks](../webhooks/README.md) documentation, including moving the [Webhooks FAQ](../webhooks/wh-faq.md) to its own page.

## 23rd August 2022

* Added new webhook events `CustomerAdded` and `CustomerUpdated` in [General webhooks](../webhooks/wh-general.md).

## 17th August 2022

* Added `BookerId` field in [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters).
* Extended [Get all availability blocks](../operations/availabilityblocks#get-all-availability-blocks) response with `CompanyId` field in [Availability block](../operations/availabilityblocks.md#availability-block).
* Added `ActivityState` and `MergeTargetId` to the [Customer](../operations/customers.md#customer) object.

## 10th August 2022

* Added a new type of webhook for updated Resource blocks (../webhooks/wh-general.md).

## 5th August 2022

* Updated PCI Proxy use case [Using tokenized credit cards](../use-cases/payment-automation/using-tokenized-credit-cards.md).

## 22nd July 2022

* Added new page [Pagination](../guidelines/pagination.md) under [Guidelines](../guidelines/README.md).
* Added cursor pagination in [Get all bills](../operations/bills.md#get-all-bills), [Get all reservation](../operations/reservations.md#get-all-reservations), [Get all outletItems](../operations/outletitems.md#get-all-outletitems) operations.
* Added InvoicingEmail field in [Company](../operations/companies.md#company).
* Added InvoiceDueInterval field in [Company](../operations/companies.md#company).
* Added MotherCompanyId field in [Company](../operations/companies.md#company).
* Added CreatedUtc field in [Company](../operations/companies.md#company).
* Added UpdatedUtc field in [Company](../operations/companies.md#company).
* Added Telephone field in [Company](../operations/companies.md#company).
* Added ContactPerson field in [Company](../operations/companies.md#company).
* Added Contact field in [Company](../operations/companies.md#company).
* Added Notes field in [Company](../operations/companies.md#company).
* Changed Price to UnitAmount field in [Product](../operations/products.md#response).

## 19th July 2022

* Extended operation [Update reservations](../operations/reservations.md#update-reservations) with `Purpose` property.

## 8th July 2022

* Re-designed and updated [Deprecations page](../deprecations/README.md)

## 29th June 2022

* Monthly Services (coming soon) - Deprecated `StartUtc` and `EndUtc` in favor of `FirstTimeUnitUtc` and `LastTimeUnitUtc` in [Availability block](../operations/availabilityblocks.md#availability-block), [Availability block adjustment](../operations/availabilityblocks.md#availability-block-adjustment) 

## 24th Jun 2022

* Monthly Services (coming soon) - Deprecated `StartUtc` and `EndUtc` in favor of `FirstTimeUnitUtc` and `LastTimeUnitUtc` in [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters), [Availability block update parameters](../operations/availabilityblocks.md#availability-block-update-parameters)

## 25th May 2022

* Updated guidance on [Request limits](../guidelines/requests.md#request-limits)
* Added `Retry-After` HTTP header to `429 Too Many requests` error response

## 25th April 2022

* Extended operations [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) with `ActivityStates` property.
* Extended operations [Get all availability blocks](../operations/availabilityblocks.md#availability-block-extent) with `Rates` property.

## 24th March 2022

* Extended operations [Get all services](../operations/services.md#get-all-services) and [Get all products](../operations/products.md#get-all-products) with `Options` property.

## 16th March 2022

* Added operation [Get all message threads](../operations/messagethreads.md#get-all-message-threads) to retrieve message threads.
* Added operation [Add message thread](../operations/messagethreads.md#add-message-thread) to add message thread.
* Added operation [Get all messages](../operations/messages.md#get-all-messages) to retrieve messages.
* Added operation [Add messages](../operations/messages.md#add-messages) to add messages.

## 7th March 2022

* Re-structured documentation pages for API operations so pages are organised by domain entity (e.g. [countries](../operations/countries.md), [outletbills](../operations/outletbills.md), [products](../operations/products.md)) rather than theme (e.g. configuration, reservations, finance)
* Re-structured documentation pages for Changelog so organised by year; [deprecations](../deprecations/README.md) split off into its own page
* Some minor additional changes to documentation pages, e.g. [webhooks](../webhooks/README.md) and [websockets](../websockets/README.md) now in separate directories
* Added reference to Swagger/OpenAPI definition on [home page](../README.md)

## 11th February 2022

* Deprecated `AdultCount` and `ChildCount` from [Reservation](../operations/reservations.md#reservation) and [Reservation parameters](../operations/reservations.md#reservation-parameters) and [Reservation updates](../operations/reservations.md#reservation-updates).
* Added [Age category parameters](../operations/reservations.md#age-category-parameters) replacing `AdultCount` and `ChildCount` for [Reservation](../operations/reservations.md#reservation) and [Reservation parameters](../operations/reservations.md#reservation-parameters) and [Reservation updates](../operations/reservations.md#reservation-updates). 

## 8th February 2022

* Extended [Time unit period](../operations/services.md#time-unit-period) with Month.
* Added [Time unit](../operations/services.md#time-unit).
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) with FirstTimeUnitStartUtc, LastTimeUnitStartUtc and info about max interval length.
* Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) return value with TimeUnitStartsUtc
* Removed DatesUtc from [Get rate pricing](../operations/rates.md#get-rate-pricing) return value
* Extended [Update rate price](../operations/rates.md#update-rate-price) with FirstTimeUnitStartUtc, LastTimeUnitStartUtc and info about max interval length.
* Removed TimeUnit from [Bookable service data](../operations/services.md#bookable-service-data)
* Added TimeUnitPeriod to [Bookable service data](../operations/services.md#bookable-service-data)

## 7th February 2022

* Added [Get all age categories](../operations/agecategories.md#get-all-age-categories) operation.

## 2nd February 2022

* Extended the request parameters for [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) to add new filter parameter `Rebated item IDs`
* Extended the [Accounting use case](../use-cases/accounting.md) to include new section [Working with rebates](../use-cases/accounting.md#working-with-rebates)
* Deprecated `Rebated` property from [Bill options](../operations/bills.md#bill-options) object

| Changelog by year |
| :-- |
| [Changelog 2021](changelog2021.md) |
| [Changelog 2020](changelog2020.md) |
| [Changelog 2019](changelog2019.md) |
| [Changelog 2018](changelog2018.md) |
| [Changelog 2017](changelog2017.md) |
| [Changelog 2016](changelog2016.md) |
