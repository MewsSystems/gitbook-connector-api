# Taxation

## Legal environments, tax environments, and tax codes in Mews


Each property (enterprise) in Mews is created with a legal and tax environment corresponding to the region in which it is located. This cannot be changed once the property has been created in Mews' database. 

Each tax environment contains its own set of hard-coded tax codes that are applicable for accounting items generated in the property with that legal environment. The tax codes allow Mews to record and calculate accurately and consistently the tax information associated with each accounting item (if tax should be applied). If no tax codes are used, then Mews will not calculate the tax breakdown. 

It is important to note the following when handling taxable items:

Mews expects its integration partners to send the correct tax codes in combination with net or gross amounts for items that are taxed.

Depending on the local government's ruling, tax environments can be subject to change ((e.g. Covid tax reductions)) from time to time. It is expected that integration partners act independently and pull updated information from Mews. In turn, Mews will keep the legal environment and tax codes up to date. 

## Implementation of tax codes 

The integration partner should use the following endpoints to correctly retrieve the set of tax codes applicable to a property.  

1. Call [Get configuration](../operations/configuration.md#get-configuration) to retrieve that `TaxEnvironmentCode` that applies to the relevant property. Note this information for the subsequent API call.

2. Call [Get all tax environments](../operations/configuration.md#get-all-tax-environments) and use the `TaxEnvironmentCode` retrieved earlier to find the corresponding list of `TaxationCodes`. The list of `TaxationCodes` is needed to obtain for the relevant taxation information for each code in the subsequent API call. 

3. Call [Get all taxations](../operations/configuration.md#get-all-taxations) to retrieve the individual tax `Codes`, their names, and values. 



## Tax exempt items

Tax exempt items should include the tax code value `null`. This will lead to Mews not including any tax breakdown. Legal environments in which no actual 0% tax rate exists do not have a 0% tax code in Mews.  

## Multi-tax environment

Multi-tax environments have instances in which a combination of taxes is applied. In those cases, Mews does not use a single composite tax code but expects that all relevant tax codes are forwarded.  

```javascript
"TaxCodes": [ 
    "US-MA-S, 
    US-MA-EXCISE-0.75%" 
]
```

## Validation

To understand for which time period the specific `TaxRatesCodes` are valid, you would need to review the [taxEnvironments/getAll response](../operations/configuration#response-3). 
