# Changelog 2020

## 16th December 2020
* Added [Request limits](../guidelines/README.md#request-limits) and [Taxations](../guidelines/README.md#taxations) to [Guidelines](../guidelines/README.md)
* Extended operation [Get all customers](../operations/customers.md#get-all-customers) with property `LoyaltyCodes`.

## 27th November 2020
* Added operation [Get all vouchers](../operations/vouchers.md#get-all-vouchers) and extended  [Reservation](../operations/reservations.md#reservation) with property `VoucherId`.

## 3rd November 2020
* Extended response of operation [Get all tax environments](../operations/taxenvironments.md#get-all-tax-environments) with validity interval of taxation.
* Extended response of operation [Get all rates](../operations/rates.md#get-all-rates) with property `IsEnabled` specifying the rate is currently available to customers.
* Extended operation [Update reservation](../operations/reservations.md#update-reservation) with parameter `AssignedResourceLocked`.
* Extended operation [Get service availability](../operations/services.md#get-service-availability) with list of active availability adjustments.
* Added operation [Update service availability](../operations/services.md#update-service-availability).

## 29th September 2020
* Replaced `Gender` property with `Sex` for operations [Add customer](../operations/customers.md#add-customer), [Update customer](../operations/customers.md#update-customer), [Get all customers](../operations/customers.md#get-all-customer), [Search customers](../operations/customers.md#search-customers) and [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) and all other usages.

## 24th September 2020

* Extended operations [Add reservations](../operations/reservations.md#add-reservations), [Add reservation product](../operations/reservations.md#add-reservation-product) and [Add order](../operations/orders.md#add-order) with possibility to specify consumption date for products charged `Once` and `Per Person`.

## 21st September 2020

* Replaced Space websocket event by [Resource event](../websockets/README.md#resource-event)
* Extended [Reservation event](../websockets/README.md#reservation-event) with `AssignedResourceId`
* Extended [Price update event](../websockets/README.md#price-update-event) with `ResourceCategoryId`

## 1st September 2020

* Added new operation [Get all rules](../operations/rules.md#rules).
* Added new operation [Add alternative payment](../operations/payments.md#add-alternative-payment).
* Extended operation [Get all accounting items](../operations/accountingitems.md#Get-all-accounting-items) with filter `ItemIds` and response with `SubState`.

## 19th August 2020

* Extended [Travel agency contract](../operations/companycontracts#travel-agency-contract) with `ServiceId`.
* Extended [Bill](../operations/bills.md#bill) object with [Bill assignee data](../operations/bills.md#bill-assignee-data).
* Extended [Promotions](../operations/services.md#promotions) object with `DuringCheckOut` property.
* Extended [Resource](../operations/resources#resource) with `CreatedUtc` and `UpdatedUtc`.
* Extended [Resource category assignment](../operations/resourcecategories.md#resource-category-assignment) with `Id`, `IsActive`, `CreatedUtc` and `UpdatedUtc`.
* Extended [Resource category image assignment](../operations/resourcecategories.md#resource-category-image-assignment) with `Id`, `IsActive`, `CreatedUtc` and `UpdatedUtc`.
* Extended [Resource feature assignment](../operations/resourcefeatures.md#resource-feature-assignment) with `Id`, `IsActive`, `CreatedUtc` and `UpdatedUtc`.

## 5th August 2020

* Fixed spelling mistake in parameter `TravelAgencyId` in operation [Update reservation](../operations/reservations.md#update-reservation).
* Extended operations [Get all products](../operations/products.md#get-all-products) with property `ExternalName`.
* Extended [Get configuration](../operations/configuration.md#get-configuration) response with [Service](../operations/services#service).
* Extended [Integration created data](../webhooks/README.md#integration-created-data) with [Service](..webhooks/README.md#service).

## 23rd July 2020

* Extended [Product order parameters](../operations/orders.md#product-order-parameters) with consumption dates.

## 21st July 2020

* Added new operations [Update accounting items](../operations/accountingitems.md#update-accounting-items), [Add bill](../operations/bills.md#add-bill) and [Delete bill](../operations/bills.md#delete-bill).
* Added new operations [Get all counters](../operations/counters.md#get-all-counters), [Close bill](../operations/bills.md#close-bill), [Get bill PDF](../operations/bills.md#get-bill-pdf)
* Extended operations [Get all products](../operations/products.md#get-all-products) with property `ExternalName`.
* Extended operations [Add customer](../operations/customers.md#add-customer) and [Update customer](../operations/customers.md#update-customer) with optional parameters `ItalianFiscalCode` and `ItalianDestinationCode`.
* Removed value of [Tax rate](../operations/taxations.md#tax-rate).
* Fixed filtering by `ReservationIds` in [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) operation.

## 2nd July 2020

A month ago we announced the [project Spacetime](https://developers.mews.com/project-spacetime/) whose main objective is to generalize the notion of services and spaces. And later, also the time units. We're pleased to announce that the first phase is now available in the Connector API. We are generalizing spaces into resources, we're introducing the possibility to have multiple "visit" services, not just a single one. The resources might be offered via multiple services which also means that a few entities like rates, restrictions or resource features are no longer defined on enterprise level, they're defined on service level and apply only to specified service.

**There are no immediate breaking changes in the API, all of the previous endpoints and capabilities are still working and will be working until the end of the deprecation period which is scheduled for 15 Jan 2021**. 

However we'd like to ask you to update your clients as soon as possible, we're not able to roll out the new possibilities to our clients if you are not ready. Therefore we rely on you and your timely cooperation because we want to give this new opportunity to the hotels as soon as we can. We acknowledge it's a lot of changes, we're prepared to monitor the situation and help you with any questions or concerns, feel free to contact us at partnersuccess@mews.com.

* Added [Resource](../operations/resources.md#resource) that is replacing the Space. It can have multiple categories through multiple services. Note that Resource does not need to be assigned to any category.
* Added [Resource category](../operations/resources.md#resource-category) that is replacing the Space category.
* Added [Resource category image assignment](../operations/resourcecategories.md#resource-category-image-assignment) that links an image to a category.
* Added [Resource category assignment](../operations/resources.md#resource-category-assignment) that links a resource to a category. Note that resource can be assigned only to a single category within the same service.
* Added [Resource feature](../operations/resourcefeatures.md#resource-feature) that is replacing the Space feature and now is within the service context.
* Added [Resource feature assignment](../operations/resourcefeatures.md#resource-feature-assignment) that is replacing the Space feature assignment.
* Added [Resource block](../operations/resources.md#resource-block) that is replacing the Space block. Note that a resource without any category can be assigned to a block.
* Added [Get all resources](../operations/resources.md#get-all-resources) that is replacing Get all spaces.
* Added [Update resources](../operations/resources.md#update-resources).
* Added [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) that is replacing Get all space blocks.
* Added [Add resource blocks](../operations/resourceblocks.md#add-resource-block) that is replacing Add space block.
* Added [Delete resource blocks](../operations/resourceblocks.md#delete-resource-blocks) that is replacing Delete space blocks.
* Extended [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) parameters with required `ServiceIds` and `AssignedResourceIds` that is replacing `SpaceIds`.
* Extended [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) response with `Resources`, `ResourceCategories` that is replacing `Spaces`, `SpaceCategories` and `ResourceCategoryAssignments`.
* Extended [Reservation extent](../operations/reservations.md#reservation-extent) with `ResourceCategories`, `ResourceCategoryAssignments` and `Resources` that is replacing the `Spaces`.
* Extended [Reservation](../operations/reservations.md#reservation) with `AssignedResourceId` and `AssignedResourceLocked` that is replacing `AssignedSpaceId` and `AssignedSpaceLocked`.
* Extended [Update reservation](../operations/reservations.md#update-reservation) parameters with `AssignedResourceId` that is replacing Update reservation space.
* Extended [Search customers](../operations/customers.md#search-customers) parameters with `ResourceId` that is replacing `SpaceId`.
* Extended [Get all business segments](../operations/businesssegments.md#get-all-business-segments) parameters with required `ServiceIds`.
* Extended [Get all rates](../operations/rates.md#get-all-rates) parameters with required `ServiceIds`.
* Extended [Get all restrictions](../operations/restrictions.md#get-all-restrictions) parameters with required `ServiceIds` and `ResourceCategoryIds` that is replacing `SpaceCategoryIds`.
* Extended [Add restrictions](../operations/rates.md#get-all-rates) parameters with required `ServiceId`.
* Extended [Restriction](../operations/restrictions.md#restriction) with `ServiceId` and `ResourceCategoryId`, `ResourceCategoryType` that is replacing `SpaceCategoryId`, `SpaceType`.
* Extended [Restriction conditions](../operations/restrictions.md#restriction-conditions) with `ResourceCategoryId`, `ResourceCategoryType` that is replacing `SpaceCategoryId`, `SpaceType`,
* Extended [Business segment](../operations/businesssegments.md#business-segment) with `ServiceId`.
* Extended [Rate](../operations/rates.md#rate) with `ServiceId`.
* Extended [Rate group](../operations/rates.md#rate-group) with `ServiceId`.
* Renamed `Space category availability` to [Resource category availability](../operations/resources.md#resource-category-availability).
* Renamed `Space category pricing` to [Resource category pricing](../operations/resources.md#resource-category-pricing).
* Renamed `Space category adjustment` to [Resource category adjustment](../operations/resources.md#resource-category-adjustment).
* Removed `Update space state` which is replaced by general Update resources.
* Removed `Update reservation requested category`. [Update reservation](../operations/reservations.md#update-reservation) should be used instead.

## 6th June 2020

* Extended [Add restrictions](../operations/restrictions.md#add-restrictions) and [Get all restrictions](../operations/restrictions.md#get-all-restrictions) parameters with `ExternalIdentifier`.
* Extended [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) parameters with `ReservationIds`, `GroupIds`, `CustomerIds`, `SpaceIds`, `RateIds`, `BusinessSegmentIds` and `Numbers`. 
* Updated [Add reservations](../operations/reservations.md#add-reservations), [Update reservation](../operations/reservations.md#update-reservation), [Confirm reservation](../operations/reservations.md#confirm-reservation) and [Cancel reservation](../operations/reservations.md#cancel-reservation) by allowing an array of reservations to be specified in each request.
* Extended [Get all tax environments](../operations/taxenvironments.md#get-all-tax-environments) with new `Discriminator` to allow both `Flat` and `Relative` [Tax rate strategy](../operations/taxations.md#tax-rate-strategy).
* Extents changed from optional to required for [Space extent](../operations/resources.md#space-extent), [Accounting item extent](../operations/accountingitems.md#accounting-item-extent), [Bill extent](../operations/bills.md#bill-extent), [Rate extent](../operations/rates.md#rate-extent) and [Companionship extent](../operations/companionships.md#companionship-extent).    

## 17th March 2020

* Added [Webhooks](../webhooks/README.md).

## 16th March 2020

* Extended [Add company](../operations/companies.md#add-company) parameters with `InvoiceDueInterval`, `Telephone`, `ContactPerson`, `Contact`, `Notes` and `Iata`.
* Extended [Update company](../operations/companies.md#update-company) parameters with `InvoiceDueInterval`, `Telephone`, `ContactPerson`, `Contact`, `Notes` and `Iata`.
* Extended [Get all cashier transactions](../operations/cashiertransactions.md#get-all-cashier-transactions) parameters with `CreatedUtc`.
* Extended [Get all outlet items](../operations/outletitems.md#get-all-outlet-items) parameters with `ClosedUtc` and `ConsumedUtc`.
* Extended [Get all restrictions](../operations/restrictions.md#get-all-restrictions) parameters with `CollidingUtc`, `CreatedUtc` and `UpdatedUtc`.
* Extended [Get all space blocks](../operations/resources.md#get-all-space-blocks) parameters with `CollidingUtc`, `CreatedUtc` and `UpdatedUtc`.
* Added [Get all tasks](../operations/tasks.md#get-all-tasks).
* Extended [Get all customers](../operations/customers.md#get-all-customers) with `CustomerIds`, `Emails`, `FirstNames`, `LastNames`, `CreatedUtc`, `UpdatedUtc`, `Extent`.

## 13th March 2020

* Updated [Update rate price](../operations/rates.md#update-rate-price) operation to accept only updates for the future for up to 5 years.
* Extended [Get all bills](../operations/bills.md#get-all-bills) parameters with `ClosedUtc`, `CreatedUtc`, `DueDateUtc` and `PaidUtc`.
* Updated [Add reservations](../operations/reservations.md#add-reservations) parameters with `Enquired` state.
* Added [Address parameters](../operations/customers.md#address-parameters).
* Extended [Address](../operations/configuration.md#address) with `Latitude` and `Longitude`.

## 13th March 2020

* Extended [Get all reservation items](../operations/reservations.md#get-all-reservation-items) with `AccountingStates`.

## 13th February 2020

* Extended [Get all products](../operations/products.md#get-all-products) result with `Classifications`.

## 15th January 2020

* Extended [Add task](../operations/tasks.md#add-task) parameters with `ServiceOrderId`. 

## 9th January 2020

* Extended [Get all companies](../operations/companies.md#get-all-companies) parameters with `Ids`, `Names`, `CreatedUtc` and `UpdatedUtc`. 

| Next |
| :-- |
| [Changelog 2019](changelog2019.md) |
