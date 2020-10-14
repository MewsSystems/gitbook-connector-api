## VAT codes

To ensure correct VAT application, Mews has assigned a unique code to each existing VAT level across all of the legal
environments configured in our system.The value assigned to these codes is consistently updated to comply with the
latest changes implemented by the relevant
authorities of each country. As VAT levels are prone to changes,we do not recommend partners hardcode them.

The latest list of VAT codes is retrievable using [Get all tax
environments](../operations/configuration.md#get-all-tax-environments). As a majority of our partners operate in multiple
countries, we've included all codes in the same response. To confirm which set of codes applies to a given property
location, first
retrieve their local configuration using [Get configuration](../operations/configuration.md#get-configuration).
In this response, you will retrieve `TaxEnvironmentCode` (e.g. UK-2020).

This `TaxEnvironmentCode` will match the following from the response to [Get all tax
environments](../operations/configuration.md#get-all-tax-environments):
* `Code`of the [Tax environment](../operations/configuration.md#tax-environment).
* `Code`of the [Taxation](../operations/configuration.md#taxation).
* `TaxEnvironmentCode`of the [Taxation](../operations/configuration.md#taxation).
* `Code`of the [Tax rate](../operations/configuration.md#tax-rate).
* `TaxationCode`of the [Tax rate](../operations/configuration.md#tax-rate).

To correctly post any item requiring a VAT code, such as in [Add order](../operations/services.md#add-order), use the value
of `Code`of the [Tax rate](../operations/configuration.md#tax-rate) as the `TaxCodes` in the [Amount
parameters](../operations/services.md#amount-parameters).

Integration partners utilizing VAT codes should agree with each new property they onboard that the property will inform
them of any local VAT changes in advance so they can update the codes accordingly.
