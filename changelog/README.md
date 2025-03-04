# Changelog

## 3rd March 2025
* [Get all cashier transactions)](../operations/cashiertransactions.md#get-all-cashier-transactions):
  * Incorrectly named filtering parameter `UpdatedUtc` changed to `CreatedUtc`.

## 25th February 2025
* [Get all cashier transactions)](../operations/cashiertransactions.md#get-all-cashier-transactions):
  * Extended request object with `ActualEndUtc` filtering parameter.

## 21st February 2025
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `ActualEndUtc` filtering parameter.

## 20th February 2025
* Added new restricted operation [Get reservations channel manager details](../operations/reservations.md#get-reservations-channel-manager-details).

## 19th February 2025
* [Delete company contracts](../operations/companycontracts.md#delete-company-contracts):
  * Included support for [Portfolio Access Tokens](../guidelines/authentication.md#portfolio-access-tokens).

## 11th February 2025
* Added new restricted operation [Disable credit card](../operations/creditcards.md#disable-credit-card).

## 3rd February 2025
* [Add rates](../operations/rates.md#add-rates):
  * Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request parameters `ServiceId`, `RateGroupId` and `BaseRateId`.
* [Set rates](../operations/rates.md#set-rates):
  * Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request parameters `ServiceId`, `RateGroupId` and `BaseRateId`.
* [Delete rates](../operations/rates.md#delete-rates):
  * Introduced backward-compatible [Hybrid identifier](../operations/_objects.md#hybrid-identifier) string for request parameter `RateIds`.
* [Get all age categories](../operations/agecategories.md#get-all-age-categories):
  * Extended [Age category](../operations/agecategories.md#age-category) with `ExternalIdentifier`.

## 31st January 2025
* [Get bill PDF](../operations/bills.md#get-bill-pdf):
  * Extended request object with `PdfTemplate` and `PrintReason` parameters.
* [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06):
  * Extended request object with `ActualStartUtc` filtering parameter.

## 23rd January 2025
* [Get all commands](../operations/commands.md#get-all-commands):
  * **Breaking:** `CustomerId` and `FullName` is no longer required in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object.
  * **Deprecated:** `CustomerId` and `FullName` in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object.
  * Extended [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) with `AccountId` and [`AccountData`](../operations/commands.md#account-data-for-payment-terminal-command).
* [Get all commands by ids](../operations/commands.md#get-all-commands-by-ids):
  * **Breaking:** `CustomerId` and `FullName` is no longer required in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object.
  * **Deprecated:** `CustomerId` and `FullName` in [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object.
  * Extended [Payment terminal command data](../operations/commands.md#payment-terminal-command-data) response object with `AccountId` property and [`AccountData`](../operations/commands.md#account-data-for-payment-terminal-command) object

## 21st January 2025
* [Get all customers](../operations/customers.md#get-all-customers):
  * **Deprecated** operation extent `Documents`. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense` in [Customer](../operations/customers.md#customer) response object. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
* [Search customers](../operations/customers.md#search-customers):
  * **Deprecated** operation extent `Documents`. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense` in [Customer](../operations/customers.md#customer) response object. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
* [Get all companionships](../operations/companionships.md#get-all-companionships):
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense` in [Customer](../operations/customers.md#customer) response object under extent `Customers`. Use [Get all identity documents](../operations/identitydocuments.md#get-all-identity-documents) instead.
* [Add customer](../operations/customers.md#add-customer): 
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense`. Use [Add identity documents](../operations/identitydocuments.md#add-identity-documents) instead
* [Update customer](../operations/customers.md#update-customer): 
  * **Deprecated** `Passport`, `IdentityCard`, `Visa` and `DriversLicense`. Use [Update identity documents](../operations/identitydocuments.md#update-identity-documents) and [Delete identity documents](../operations/identitydocuments.md#delete-identity-documents) instead.
* [Get all enterprises](../operations/enterprises.md#get-all-enterprises)
  * Extended [Enterprise](../operations/enterprises.md#enterprise) response object with `Address`.
* [Get configuration](../operations/configuration.md#get-configuration): 
  * `Address` is no longer deprecated in [Enterprise](../operations/configuration.md#enterprise).
* [Get all payments](../operations/payments.md#get-all-payments):
  * Extended request object with `AccountIds` filtering parameter.
* [Update resource access tokens](../operations/resourceaccesstokens.md#update-resource-access-tokens): 
  * Extended request object with `Value` parameter.

## 16th January 2025
* [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) response object with `PickupDistribution` property.
  * **Deprecated** operation extent `ServiceOrders`. Use [Get all reservations (ver 2023-06-06)](../operations/reservations.md#get-all-reservations-ver-2023-06-06) instead.
  * **Deprecated** operation extent `Rates`. Use [Get all rates](../operations/rates.md#get-all-rates) instead.
* [Add availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) response object with `PickupDistribution` property.
* [Update availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks):
  * Extended [Availability block](../operations/availabilityblocks.md#availability-block) response object with `PickupDistribution` property.
* Added new operation [Cancel order items](../operations/orderitems.md#cancel-order-items).

## 9th January 2025
* Postponed the discontinuation of the following operations to 10th May 2025:
  * [Get all reservations (ver 2017-04-12)](../operations/reservations.md#get-all-reservations-ver-2017-04-12)
  * [Get all reservation items](../operations/reservations.md#get-all-reservation-items)
  * [Merge customers](../operations/customers.md#merge-customers)
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
