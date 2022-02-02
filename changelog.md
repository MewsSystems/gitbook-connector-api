# Changelog

## Operations we are planning to deprecate in 2021

These are the operations that we will deprecate in 2021. While we are not yet enforcing these changes, and are yet to finalise a date for these deprecations, we strongly advise you to review these and if you are using them in your API calls, to update them accordingly.

### Deprecated operations

Following legacy operations to be completely removed:
* `companies/getAllByName` (replaced by [Get all companies](operations/enterprises.md#get-all-companies))
* `bills/getAllByIds` (replaced by [Get all bills](operations/finance.md#get-all-bills))
* `bills/getAllByCustomers` (replaced by [Get all bills](operations/finance.md#get-all-bills))
* `bills/getAllClosed` (replaced by [Get all bills](operations/finance.md#get-all-bills))
* `creditCards/getAllByIds` (replaced by [Get all credit cards](operations/finance.md#get-all-credit-cards))
* `creditCards/getAllByCustomers` (replaced by [Get all credit cards](operations/finance.md#get-all-credit-cards))
* `reservations/getAllByIds` (replaced by [Get all reservations](operations/reservations.md#get-all-reservations))
* `reservations/getAllByCustomers` (replaced by [Get all reservations](operations/reservations.md#get-all-reservations))
* `reservations/getAllByNumbers` (replaced by [Get all reservations](operations/reservations.md#get-all-reservations))
* `customers/getAllByIds` (replaced by [Get all customers](operations/customers.md#get-all-customers))
* `customers/getAllByEmails` (replaced by [Get all customers](operations/customers.md#get-all-customers))
* `customers/getAllByName` (replaced by [Get all customers](operations/customers.md#get-all-customers))

### Deprecated time filters 

Properties `TimeFilter`, `StartUtc` and `EndUtc` to be removed on operations:
* [Get all customers](operations/customers.md#get-all-customers)
* [Get all bills](operations/finance.md#get-all-bills)
* [Get all companies](operations/enterprises.md#get-all-companies)
* [Get all restrictions](operations/services.md#get-all-restrictions)
* [Get all outlet items](operations/finance.md#get-all-outlet-items)
* [Get all cashier transactions](operations/finance.md#get-all-cashier-transactions)

Use properties `CreatedUtc`, `UpdatedUtc`, etc. as per operation description.

### Other deprecated properties

Following properties to be removed from output and/or ignored on input:

| Object | Property | Replaced by |
| --- | --- | --- |
| [Company](operations/enterprises.md#company) | `TaxIdentificationNumber` | `TaxIdentifier` |
| [Reservation](operations/reservations.md#reservation) | `ChannelManagerId` | `ChannelManagerNumber` |
| [Reservation](operations/reservations.md#reservation) | `TimeUnitCost` | `TimeUnitPrices` |
| [Reservation](operations/reservations.md#reservation) | `TraveAgencyId` | `TravelAgencyId` |
| [Reservation](operations/reservations.md#reservation) | `ApplyCancelationFee` | `ApplyCancellationFee` |
| [Reservation](operations/reservations.md#reservation) | `CompanionIds` | Operation [Get all companionships](operations/services.md#get-all-companionships) |
| [Reservation price](operations/reservations.md#reservation-price) | `Total` | `TotalAmount` |
| [Customer](operations/customers.md#customer) | `Gender` | `Sex` |
| [Customer](operations/customers.md#customer) | `BirthDateUtc` | `BirthDate` |
| [Customer](operations/customers.md#customer) | `CategoryId` | --- |
| [Customer](operations/customers.md#customer) | `Passport` | [Document](operations/customers.md#document) object in `Documents` part of response |
| [Customer](operations/customers.md#customer) | `IdentityCard` | [Document](operations/customers.md#document) object in `Documents` part of response |
| [Customer](operations/customers.md#customer) | `Visa` | [Document](operations/customers.md#document) object in `Documents` part of response |
| [Customer](operations/customers.md#customer) | `DriversLicense` | [Document](operations/customers.md#document) object in `Documents` part of response |
| [Document](operations/customers.md#document) | `ExpirationUtc` | `Expiration` |
| [Document](operations/customers.md#document) | `IssuanceUtc` | `Issuance` |
| [Currency value](operations/finance.md#currency-value) | `Net` | --- |
| [Currency value](operations/finance.md#currency-value) | `Tax` | --- |
| [Currency value](operations/finance.md#currency-value) | `TaxRate` | --- |
| Whole `UnitCost` object | --- | [Amount](operations/finance.md#amount-value) |
| [Bill options](operations/finance.md#bill-options) | `Rebated` | [Working with rebates](use-cases/accounting.md#working-with-rebates) |

### Websocket authentication

Changed [Websocket authentication](websockets.md#authentication) from being passed via URL query parameters to cookies.

## 22nd November 2021 11:20 UTC

* Extended [Availability block parameters](operations/services.md#availability-block-parameters) with `State`.

## 13th August 2021 10:20 UTC

* Added [Update availability blocks](operations/services.md#update-availability-blocks) operation.

## 21st June 2021 8:20 UTC

* Extended [Get all accounting items](operations/finance.md#get-all-accounting-items) parameters  with `ClosedUtc` and `ConsumedUtc`.
* Extended [Add external payment](operations/finance.md#add-external-payment) parameters with `CrossSettlement` type and `ExternalIdentifier` key.

## 29th March 2021 8:20 UTC
* Added new type `ResourceUpdated` of webhook [Event](webhooks.md#event).

## 18th March 2021 8:20 UTC
* For demo environment, platform URL changed to `https://api.mews-demo.com`.
* For demo environment, web socket URL changed to `wss://ws.mews-demo.com`.

## 3rd March 2021 12:30 UTC
* Removed obsolete property `CompanionIds` from [Reservation](operations/reservations.md#reservation) surpassed by operation [Get all companionships](operations/services.md#get-all-companionships).

## 22nd February 2021 11:30 UTC
* Added [Get all resource access tokens](operations/services.md#get-all-resource-access-tokens), [Add resource access tokens](operations/services.md#add-resource-access-tokens), [Update resource access tokens](operations/services.md#update-resource-access-tokens), [Delete resource access tokens](operations/services.md#delete-resource-access-tokens).

## 21st January 2021 11:30 UTC
* Added [Add availability blocks](operations/services.md#add-availability-blocks), [Delete availability blocks](operations/services.md#delete-availability-blocks).
* Extended [Update service availability](operations/services.md#update-service-availability) with `AvailabilityBlockId`.
* Split [Get all tax environments](operations/configuration.md#get-all-tax-environments) and [Get all taxations](operations/configuration.md#get-all-taxations).
* Extended [Tax Rate](operations/configuration.md#tax-rate) discriminator with `Dependent`.

## 6th January 20201 11:30 UTC
* Specified limitations on operation parameters (generally 1000 items in collection and maximum time filter length of 3 months).
* Changed the [websocket](websockets.md) authentication method to use cookies instead of URL query parameters.
* Extended [Space resource data](operations/enterprises.md#space-resource-data) with `LocationNotes`.
* Extended [Space resource data update](operations/enterprises.md#space-resource-data-update) with `LocationNotes`.

## 16th December 2020 11:30 UTC
* Added [Request limits](guidelines.md#request-limits) and [Taxations](guidelines#taxations) to [Guidelines](guidelines.md)
* Extended operation [Get all customers](operations/customers.md#get-all-customers) with property `LoyaltyCodes`.

## 27th November 2020 11:30 UTC
* Added operation [Get all vouchers](operations/services.md#get-all-vouchers) and extended  [Reservation](operations/reservations.md#reservation) with property `VoucherId`.

## 3th November 2020 11:30 UTC
* Extended response of operation [Get all tax environments](operations/configuration.md#get-all-tax-environments) with validity interval of taxation.
* Extended response of operation [Get all rates](operations/services.md#get-all-rates) with property `IsEnabled` specifying the rate is currently available to customers.
* Extended operation [Update reservation](operations/reservations.md#update-reservation) with parameter `AssignedResourceLocked`.
* Extended operation [Get service availability](operations/services.md#get-service-availability) with list of active availability adjustments.
* Added operation [Update service availability](operations/services.md#update-service-availability).

## 29th September 2020 11:30 UTC
* Replaced `Gender` property with `Sex` for operations [Add customer](operations/customers.md#add-customer), [Update customer](operations/customers.md#update-customer), [Get all customers](operations/customers.md#get-all-customer), [Search customers](operations/customers.md#search-customers) and [Get all reservations](operations/reservations.md#get-all-reservations) and all other usages.

## 24th September 2020 11:30 UTC

* Extended operations [Add reservations](operations/reservations.md#add-reservations), [Add reservation product](operations/reservations.md#add-reservation-product) and [Add order](operations/services.md#add-order) with possibility to specify consumption date for products charged `Once` and `Per Person`.

## 21st September 2020 11:30 UTC

* Replaced Space websocket event by [Resource event](websockets.md#resource-event)
* Extended [Reservation event](websockets.md#reservation-event) with `AssignedResourceId`
* Extended [Price update event](websockets.md#price-update-event) with `ResourceCategoryId`

## 1st September 2020 11:30 UTC

* Added new operation [Get all rules](operations/services.md#rules).
* Added new operation [Add alternative payment](operations/finance.md#add-alternative-payment).
* Extended operation [Get all accounting items](operations/finance.md#Get-all-accounting-items) with filter `ItemIds` and response with `SubState`.

## 19th August 2020 11:30 UTC

* Extended [Travel agency contract](operations/enterprises#travel-agency-contract) with `ServiceId`.
* Extended [Bill](operations/finance.md#bill) object with [Bill assignee data](operations/finance.md#bill-assignee-data).
* Extended [Promotions](operations/services.md#promotions) object with `DuringCheckOut` property.
* Extended [Resource](operations/enterprises#resource) with `CreatedUtc` and `UpdatedUtc`.
* Extended [Resource category assignment](operations/enterprises#resource-category-assignment) with `Id`, `IsActive`, `CreatedUtc` and `UpdatedUtc`.
* Extended [Resource category image assignment](operations/enterprises#resource-category-image-assignment) with `Id`, `IsActive`, `CreatedUtc` and `UpdatedUtc`.
* Extended [Resource feature assignment](operations/enterprises#resource-feature-assignment) with `Id`, `IsActive`, `CreatedUtc` and `UpdatedUtc`.

## 5th August 2020 11:30 UTC

* Fixed spelling mistake in parameter `TravelAgencyId` in operation [Update reservation](operations/reservations.md#update-reservation).
* Extended operations [Get all products](operations/services.md#get-all-products) with property `ExternalName`.
* Extended [Get configuration](operations/configuration.md#get-configuration) response with [Service](operations/services#service).
* Extended [Integration created data](webhooks#integration-created-data) with [Service](webhooks#service).

## 23rd July 2020 11:30 UTC

* Extended [Product order parameters](operations/services.md#product-order-parameters) with consumption dates.

## 21st July 2020 11:30 UTC

* Added new operations [Update accounting items](operations/finance.md#update-accounting-items), [Add bill](operations/finance.md#add-bill) and [Delete bill](operations/finance.md#delete-bill).
* Added new operations [Get all counters](operations/enterprises.md#get-all-counters), [Close bill](operations/finance.md#close-bill), [Get bill PDF](operations/finance.md#get-bill-pdf)
* Extended operations [Get all products](operations/services.md#get-all-products) with property `ExternalName`.
* Extended operations [Add customer](operations/customers.md#add-customer) and [Update customer](operations/customers.md#update-customer) with optional parameters `ItalianFiscalCode` and `ItalianDestinationCode`.
* Removed value of [Tax rate](operations/configuration.md#tax-rate).
* Fixed filtering by `ReservationIds` in [Get all reservations](operations/reservations.md#get-all-reservations) operation.

## 2nd July 2020 11:30 UTC

A month ago we announced the [project Spacetime](https://developers.mews.com/project-spacetime/) whose main objective is to generalize the notion of services and spaces. And later, also the time units. We're pleased to announce that the first phase is now available in the Connector API. We are generalizing spaces into resources, we're introducing the possibility to have multiple "visit" services, not just a single one. The resources might be offered via multiple services which also means that a few entities like rates, restrictions or resource features are no longer defined on enterprise level, they're defined on service level and apply only to specified service.

**There are no immediate breaking changes in the API, all of the previous endpoints and capabilities are still working and will be working until the end of the deprecation period which is scheduled for 15 Jan 2021**. 

However we'd like to ask you to update your clients as soon as possible, we're not able to roll out the new possibilities to our clients if you are not ready. Therefore we rely on you and your timely cooperation because we want to give this new opportunity to the hotels as soon as we can. We acknowledge it's a lot of changes, we're prepared to monitor the situation and help you with any questions or concerns, feel free to contact us at partnersuccess@mews.com.

* Added [Resource](operations/enterprises.md#resource) that is replacing the Space. It can have multiple categories through multiple services. Note that Resource does not need to be assigned to any category.
* Added [Resource category](operations/enterprises.md#resource-category) that is replacing the Space category.
* Added [Resource category image assignment](operations/enterprises.md#resource-category-image-assignment) that links an image to a category.
* Added [Resource category assignment](operations/enterprises.md#resource-category-assignment) that links a resource to a category. Note that resource can be assigned only to a single category within the same service.
* Added [Resource feature](operations/enterprises.md#resource-feature) that is replacing the Space feature and now is within the service context.
* Added [Resource feature assignment](operations/enterprises.md#resource-feature-assignment) that is replacing the Space feature assignment.
* Added [Resource block](operations/enterprises.md#resource-block) that is replacing the Space block. Note that a resource without any category can be assigned to a block.
* Added [Get all resources](operations/enterprises.md#get-all-resources) that is replacing Get all spaces.
* Added [Update resources](operations/enterprises.md#update-resources).
* Added [Get all resource blocks](operations/enterprises.md#get-all-resource-blocks) that is replacing Get all space blocks.
* Added [Add resource blocks](operations/enterprises.md#add-resource-block) that is replacing Add space block.
* Added [Delete resource blocks](operations/enterprises.md#delete-resource-blocks) that is replacing Delete space blocks.
* Extended [Get all reservations](operations/reservations.md#get-all-reservations) parameters with required `ServiceIds` and `AssignedResourceIds` that is replacing `SpaceIds`.
* Extended [Get all reservations](operations/reservations.md#get-all-reservations) response with `Resources`, `ResourceCategories` that is replacing `Spaces`, `SpaceCategories` and `ResourceCategoryAssignments`.
* Extended [Reservation extent](operations/reservations.md#reservation-extent) with `ResourceCategories`, `ResourceCategoryAssignments` and `Resources` that is replacing the `Spaces`.
* Extended [Reservation](operations/reservations.md#reservation) with `AssignedResourceId` and `AssignedResourceLocked` that is replacing `AssignedSpaceId` and `AssignedSpaceLocked`.
* Extended [Update reservation](operations/reservations.md#update-reservation) parameters with `AssignedResourceId` that is replacing Update reservation space.
* Extended [Search customers](operations/customers.md#search-customers) parameters with `ResourceId` that is replacing `SpaceId`.
* Extended [Get all business segments](operations/services.md#get-all-business-segments) parameters with required `ServiceIds`.
* Extended [Get all rates](operations/services.md#get-all-rates) parameters with required `ServiceIds`.
* Extended [Get all restrictions](operations/services.md#get-all-restrictions) parameters with required `ServiceIds` and `ResourceCategoryIds` that is replacing `SpaceCategoryIds`.
* Extended [Add restrictions](operations/services.md#get-all-rates) parameters with required `ServiceId`.
* Extended [Restriction](operations/services.md#restriction) with `ServiceId` and `ResourceCategoryId`, `ResourceCategoryType` that is replacing `SpaceCategoryId`, `SpaceType`.
* Extended [Restriction conditions](operations/services.md#restriction-conditions) with `ResourceCategoryId`, `ResourceCategoryType` that is replacing `SpaceCategoryId`, `SpaceType`,
* Extended [Business segment](operations/services.md#business-segment) with `ServiceId`.
* Extended [Rate](operations/services.md#rate) with `ServiceId`.
* Extended [Rate group](operations/services.md#rate-group) with `ServiceId`.
* Renamed `Space category availability` to [Resource category availability](operations/services.md#resource-category-availability).
* Renamed `Space category pricing` to [Resource category pricing](operations/services.md#resource-category-pricing).
* Renamed `Space category adjustment` to [Resource category adjustment](operations/services.md#resource-category-adjustment).
* Removed `Update space state` which is replaced by general Update resources.
* Removed `Update reservation requested category`. [Update reservation](operations/reservations.md#update-reservation) should be used instead.

## 6th June 2020 11:30 UTC

* Extended [Add restrictions](operations/services.md#add-restrictions) and [Get all restrictions](operations/services.md#get-all-restrictions) parameters with `ExternalIdentifier`.
* Extended [Get all reservations](operations/reservations.md#get-all-reservations) parameters with `ReservationIds`, `GroupIds`, `CustomerIds`, `SpaceIds`, `RateIds`, `BusinessSegmentIds` and `Numbers`. 
* Updated [Add reservations](operations/reservations.md#add-reservations), [Update reservation](operations/reservations.md#update-reservation), [Confirm reservation](operations/reservations.md#confirm-reservation) and [Cancel reservation](operations/reservations.md#cancel-reservation) by allowing an array of reservations to be specified in each request.
* Extended [Get all tax environments](operations/configuration.md#get-all-tax-environments) with new `Discriminator` to allow both `Flat` and `Relative` [Tax rate strategy](operations/configuration.md#tax-rate-strategy).
* Extents changed from optional to required for [Space extent](operations/enterprises.md#space-extent), [Accounting item extent](operations/finance.md#accounting-item-extent), [Bill extent](operations/finance.md#bill-extent), [Rate extent](operations/services.md#rate-extent) and [Companionship extent](operations/services.md#companionship-extent).    

## 17th March 2020 11:30 UTC

* Added [Webhooks](./webhooks.md).

## 16th March 2020 19:55 UTC

* Extended [Add company](operations/enterprises.md#add-company) parameters with `InvoiceDueInterval`, `Telephone`, `ContactPerson`, `Contact`, `Notes` and `Iata`.
* Extended [Update company](operations/enterprises.md#update-company) parameters with `InvoiceDueInterval`, `Telephone`, `ContactPerson`, `Contact`, `Notes` and `Iata`.
* Extended [Get all cashier transactions](operations/finance.md#get-all-cashier-transactions) parameters with `CreatedUtc`.
* Extended [Get all outlet items](operations/finance.md#get-all-outlet-items) parameters with `ClosedUtc` and `ConsumedUtc`.
* Extended [Get all restrictions](operations/services.md#get-all-restrictions) parameters with `CollidingUtc`, `CreatedUtc` and `UpdatedUtc`.
* Extended [Get all space blocks](operations/enterprises.md#get-all-space-blocks) parameters with `CollidingUtc`, `CreatedUtc` and `UpdatedUtc`.
* Added [Get all tasks](operations/enterprises.md#get-all-tasks).
* Extended [Get all customers](operations/customers.md#get-all-customers) with `CustomerIds`, `Emails`, `FirstNames`, `LastNames`, `CreatedUtc`, `UpdatedUtc`, `Extent`.

## 13th March 2020 11:45 UTC

* Updated [Update rate price](operations/services.md#update-rate-price) operation to accept only updates for the future for up to 5 years.
* Extended [Get all bills](operations/finance.md#get-all-bills) parameters with `ClosedUtc`, `CreatedUtc`, `DueDateUtc` and `PaidUtc`.
* Updated [Add reservations](operations/reservations.md#add-reservations) parameters with `Enquired` state.
* Added [Address parameters](operations/customers.md#address-parameters).
* Extended [Address](operations/configuration.md#address) with `Latitude` and `Longitude`.

## 13th March 2020 11:35 UTC

* Extended [Get all reservation items](operations/reservations.md#get-all-reservation-items) with `AccountingStates`.

## 13th February 2020 11:33 UTC

* Extended [Get all products](operations/services.md#get-all-products) result with `Classifications`.

## 15th January 2020 14:00 UTC

* Extended [Add task](operations/enterprises.md#add-task) parameters with `ServiceOrderId`. 

## 9th January 2020 14:00 UTC

* Extended [Get all companies](operations/enterprises.md#get-all-companies) parameters with `Ids`, `Names`, `CreatedUtc` and `UpdatedUtc`. 

## 12th December 2019 14:00 UTC

* Added [Get all credit cards](operations/finance.md#get-all-credit-cards) operation.

## 28th November 2019 08:30 UTC

* Extended [Add reservations](operations/reservations.md#add-reservations) parameters with `CreditCardId`.
* Extended [Update Reservation](operations/reservations.md#update-reservation) parameters with `CreditCardId`.

## 21st November 2019 08:30 UTC

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

