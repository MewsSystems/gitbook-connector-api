# Deprecations

## Operations we are planning to deprecate in 2021

These are the operations that we will deprecate in 2021. While we are not yet enforcing these changes, and are yet to finalise a date for these deprecations, we strongly advise you to review these and if you are using them in your API calls, to update them accordingly.

### Deprecated operations

Following legacy operations to be completely removed:
* `companies/getAllByName` (replaced by [Get all companies](../operations/companies.md#get-all-companies))
* `bills/getAllByIds` (replaced by [Get all bills](../operations/bills.md#get-all-bills))
* `bills/getAllByCustomers` (replaced by [Get all bills](../operations/bills.md#get-all-bills))
* `bills/getAllClosed` (replaced by [Get all bills](../operations/bills.md#get-all-bills))
* `creditCards/getAllByIds` (replaced by [Get all credit cards](../operations/creditcards.md#get-all-credit-cards))
* `creditCards/getAllByCustomers` (replaced by [Get all credit cards](../operations/creditcards.md#get-all-credit-cards))
* `reservations/getAllByIds` (replaced by [Get all reservations](../operations/reservations.md#get-all-reservations))
* `reservations/getAllByCustomers` (replaced by [Get all reservations](../operations/reservations.md#get-all-reservations))
* `reservations/getAllByNumbers` (replaced by [Get all reservations](../operations/reservations.md#get-all-reservations))
* `customers/getAllByIds` (replaced by [Get all customers](../operations/customers.md#get-all-customers))
* `customers/getAllByEmails` (replaced by [Get all customers](../operations/customers.md#get-all-customers))
* `customers/getAllByName` (replaced by [Get all customers](../operations/customers.md#get-all-customers))

### Deprecated time filters 

Properties `TimeFilter`, `StartUtc` and `EndUtc` to be removed on operations:
* [Get all customers](../operations/customers.md#get-all-customers)
* [Get all bills](../operations/bills.md#get-all-bills)
* [Get all companies](../operations/companies.md#get-all-companies)
* [Get all restrictions](../operations/restrictions.md#get-all-restrictions)
* [Get all outlet items](../operations/outletitems.md#get-all-outlet-items)
* [Get all cashier transactions](../operations/cashiertransactions.md#get-all-cashier-transactions)

Use properties `CreatedUtc`, `UpdatedUtc`, etc. as per operation description.

### Other deprecated properties

Following properties to be removed from output and/or ignored on input:

| Object | Property | Replaced by |
| :-- | :-- | :-- |
| [Company](../operations/companies.md#company) | `TaxIdentificationNumber` | `TaxIdentifier` |
| [Reservation](../operations/reservations.md#reservation) | `ChannelManagerId` | `ChannelManagerNumber` |
| [Reservation](../operations/reservations.md#reservation) | `TimeUnitCost` | `TimeUnitPrices` |
| [Reservation](../operations/reservations.md#reservation) | `TraveAgencyId` | `TravelAgencyId` |
| [Reservation](../operations/reservations.md#reservation) | `ApplyCancelationFee` | `ApplyCancellationFee` |
| [Reservation](../operations/reservations.md#reservation) | `CompanionIds` | Operation [Get all companionships](../operations/services.md#get-all-companionships) |
| [Reservation price](../operations/reservations.md#reservation-price) | `Total` | `TotalAmount` |
| [Customer](../operations/customers.md#customer) | `Gender` | `Sex` |
| [Customer](../operations/customers.md#customer) | `BirthDateUtc` | `BirthDate` |
| [Customer](../operations/customers.md#customer) | `CategoryId` | --- |
| [Customer](../operations/customers.md#customer) | `Passport` | [Document](../operations/customers.md#document) object in `Documents` part of response |
| [Customer](../operations/customers.md#customer) | `IdentityCard` | [Document](../operations/customers.md#document) object in `Documents` part of response |
| [Customer](../operations/customers.md#customer) | `Visa` | [Document](../operations/customers.md#document) object in `Documents` part of response |
| [Customer](../operations/customers.md#customer) | `DriversLicense` | [Document](../operations/customers.md#document) object in `Documents` part of response |
| [Document](../operations/customers.md#document) | `ExpirationUtc` | `Expiration` |
| [Document](../operations/customers.md#document) | `IssuanceUtc` | `Issuance` |
| [Currency value](../operations/accountingitems.md#currency-value) | `Net` | --- |
| [Currency value](../operations/accountingitems.md#currency-value) | `Tax` | --- |
| [Currency value](../operations/accountingitems.md#currency-value) | `TaxRate` | --- |
| Whole `UnitCost` object | --- | [Amount](../operations/accountingitems.md#amount-value) |
| [Bill options](../operations/bills.md#bill-options) | `Rebated` | [Working with rebates](../use-cases/accounting.md#working-with-rebates) |

### Websocket authentication

Changed [Websocket authentication](../websockets/README.md#authentication) from being passed via URL query parameters to cookies.
