
Just like here at Mews, we know that our partners are continuously developing and improving their solutions for the
benefit of our mutual clients. In doing so, solutions belonging to a certain category may wish to support additional functions.
Below is a list of commonly requested functions followed by a suggestion on how to implement it with your solution. If
you'd like to see instructions for a function that
is not included below, please submit a detailed request [via our feedback
page](https://feedback.mews.com/forums/919087-marketplace-app-store-integrations?category_id=353524).

* [Retrieve and apply correct VAT code](additional-functions.md#vat-codes)
* [Manage restrictions](additional-functions.md#manage-restrictions)

## VAT codes

To ensure correct VAT application, Mews has assigned a unique code to each existing VAT level across all of the legal
environments configured in our system.The value assigned to these codes is consistently updated to comply with the
latest changes implemented by the relevant
authorities of each country. As VAT levels are prone to changes,we do not recommend partners hardcode them.

The latest list of VAT codes is retrievable using [Get all tax
environments](operations/configuration.md#get-all-tax-environments). As a majority of our partners operate in multiple
countries, we've included all codes in the same response. To confirm which set of codes applies to a given property
location, first
retrieve their local configuration using [Get configuration](operations/configuration.md#get-configuration).
In this response, you will retrieve `TaxEnvironmentCode` (e.g. UK-2020).

This `TaxEnvironmentCode` will match the following from the response to [Get all tax
environments](operations/configuration.md#get-all-tax-environments):
* `Code`of the [Tax environment](operations/configuration.md#tax-environment)
* `Code`of the [Taxation](operations/configuration.md#taxation)
* `TaxEnvironmentCode`of the [Taxation](operations/configuration.md#taxation)
* `Code`of the [Tax rate](operations/configuration.md#tax-rate)
* `TaxationCode`of the [Tax rate](operations/configuration.md#tax-rate)

To correctly post any item requiring a VAT code, such as in [Add order](operations/services.md#add-order), use the value
of `Code`of the [Tax rate](operations/configuration.md#tax-rate) as the `TaxCodes` in the [Amount
parameters](operations/services.md#amount-parameters).

Integration partners utilizing VAT codes should agree with each new property they onboard that the property will inform
them of any local VAT changes in advance so they can update the codes accordingly.

## Manage restrictions

Restrictions in Mews are configured as combinations of [conditions and
exceptions](https://help.mews.com/en/articles/4244406-how-restrictions-work). Below are the three [restriction
types](operations/services.md#restriction-type) that can be applied:

* Start: Closed to arrival, meaning guests cannot check-in within the specified dates
* End: Closed to departure, meaning guests cannot check-out within the specified dates
* Stay: Closed to stay, meaning guests cannot stay overnight within the specified dates

Using the Connector API, restrictions are managed by [retrieving the existing
restrictions](operations/services.md#get-all-restrictions), [adding a new
restriction](operations/services.md#add-restrictions) or [deleting an existing
one](operations/services.md#delete-restrictions). A restriction can be applied to either rates or resources of a
specified reservable service.
A list of all services configured at a property is requested using [Get all
services](operations/services.md#get-all-services) and the services to which restrictions can be applied will have the
[service type](operations/services.md#service-type) `Reservable`.

### Adding a rate restriction

Properties can [configure their Mews rates](https://help.mews.com/en/articles/4244388-create-a-rate) as individual ones,
derived from another rate, as well as a part of a rate group. Integration partners use [Get all
rates](operations/services.md#get-all-rates) to retrieve the rates
configured at the property and the unique identifiers required for applying restrictions. To request information about
rate groups, include the relevant [rate extent](operations/services.md#rate-extent).

Rate restrictions can be applied to the following:

* Exact rate - Specify `ExactRateId` to apply the restriction only to this exact rate
* Base rate - Specify `BaseRateId` to apply the restriction to the base rate AND all its derived rates
* Rate group - Specify `RateGroupId` to apply the restriction to all base and derived rates included in a rate group

### Adding a resource restriction

Property resources refer to all of the active spaces available at a property and the initial configuration is done at
the creation of the property profile in Mews.
Each individual resource is mapped to a resource category in order to define its intended purpose and availability.
Integration partners
use [Get all resources](operations/enterprises.md#get-all-resources)
to retrieve the list of all resources at a given property. To request all related information, include the desired
[resources extent](operations/enterprises#resource-extent).

Resource restrictions can be applied to the following:

* Resource category - Specify `ResourceCategoryId` to apply a restriction to all spaces belonging to a specific category
* Resource category type - Specify [resource category type](operations/enterprises.md#resource-category-type) to apply a
restriction to one type of resource

Once created in Mews, rates are automatically applied to all active resource categories in their relevant service. In
order to allow restrictions to be applied to only one specific resource category via the API, the integration partner
needs to have the
entire configuration of the property mapped out in their system. Repeatedly retrieving all resource information for all
instances of the
above is not optimal API usage.

Aside from the above, restriction conditions include specifying the time period to which it is applied as well as
whether the restriction should apply to specific days.
If `EndUtc` is not specified when setting the time frame, the restriction will apply until deleted. Specifying one or
more [day](operations/services.md#day)s means that the restriction
will apply only to that specific day of the week within the set time frame.

Once the [restriction conditions](operations/services.md#restriction-conditions) above have been determined, a
restriction
can be further specified using [restriction exceptions](operations/services.md#restriction-exceptions). Exceptions are
used to managed the following:

*Availability before reservation start: Use `MinAdvance` and `MaxAdvance` when setting the minimum and/or maximum time
prior to start of reservation at which the given rate or resource is to be available.
*Lenght of reservation: Use `MinLength` and `MaxLength` when setting setting the minimum and/or maximum length for which
a reservation can be created within the specified time frame
*Price of reservation: Use `MinPrice` and `MaxPrice` when setting the minimum and/or maximum price for which a
reservation can be made within a specified time frame

Ensuring that restrictions are correctly applied via the API requires clear communication between the integration partner and each individual property.
The number of restrictions and the conditions related to Start & EndUtc will depend on how the property manages their
restrictions. As restrictions can be added in batches (as an array of conditions), the property can configure a week or two
or month(s) in advance.

If the property will continue managing restrictions both via the integration and in Mews, integration partners can use the
`ExternalIdentifier` when creating and retrieving restrictions to single out the ones made specifically via this
integration.

As restrictions cannot be modified, only added or deleted, partners map existing restrictions and their identifiers in their system so that
its available to be able to delete a restriction prior to its expiration.
