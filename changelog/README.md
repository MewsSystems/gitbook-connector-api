# Changelog

## 9th January 2025
* Deprecated operation extent `Documents` in [Get all customers](../operations/customers.md#get-all-customers). Use Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
* Deprecated `Passport`, `IdentityCard`, `Visa`, `DriversLicense` on [Customer](../operations/customers.md#customer) response object. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead. This affects:
  * [Search customers](../operations/customers.md#customer)
  * [Get all companionships](../operations/companionships.md#get-all-companionships) under extent `Customers`
  * [Get all customers](../operations/customers.md#get-all-customers)
* Deprecated `Passport`, `IdentityCard`, `Visa`, `DriversLicense` in:
  * [Add customer](../operations/customers.md#add-customer), use [Add identity documents](../operations/identitydocuments.md#add-identity-documents) instead.
  * [Update customer](../operations/customers.md#update-customer), Use [Update identity documents](../operations/identitydocuments.md#update-identity-documents) and [Delete identity documents](../operations/identitydocuments.md#delete-identity-documents) instead.
* Added missing documentation for webhook event `PaymentUpdated` in [General Webhooks](../events/wh-general.md).

## 7th January 2025
* Extended [Get all reservations (ver 2023-06-06)](../operations/reservations.md) request with `AvailabilityBlockIds` request filtering parameter.

## 6th January 2025
* Added new operation [Get all source assignments (ver 2024-09-20)](../operations/sourceassignments.md#get-all-source-assignments-ver-2024-09-20).

## 3rd January 2025
* Added new page [Authentication](../guidelines/authentication.md). Documentation-only. No change to API.
* Moved Multi-property page to [Concepts](../concepts/README.md). Documentation-only. No change to API.
* Clarified `discontinued` on the [Deprecations](../deprecations/README.md) page. Documentation-only, no changes to API.

| Changelog by year |
| :-- |
| [Changelog 2024](changelog2024.md) |
| [Changelog 2023](changelog2023.md) |
| [Changelog 2022](changelog2022.md) |
| [Changelog 2021](changelog2021.md) |
| [Changelog 2020](changelog2020.md) |
| [Changelog 2019](changelog2019.md) |
| [Changelog 2018](changelog2018.md) |
| [Changelog 2017](changelog2017.md) |
| [Changelog 2016](changelog2016.md) |
