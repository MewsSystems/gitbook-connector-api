# Deprecations

## Upcoming

### 31st March 2021

#### Deprecated operations

Following legacy operations will be completely removed:
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

#### Deprecated time filters 

Properties `TimeFilter`, `StartUtc` and `EndUtc` will be removed on operations:
* [Get all customers](operations/customers.md#get-all-customers)
* [Get all bills](operations/finance.md#get-all-bills)
* [Get all companies](operations/enterprises.md#get-all-companies)
* [Get all restrictions](operations/services.md#get-all-restrictions)
* [Get all outlet items](operations/finance.md#get-all-outlet-items)
* [Get all cashier transactions](operations/finance.md#get-all-cashier-transactions)

Use properties `CreatedUtc`, `UpdatedUtc`, etc. as per operation description.

#### Other deprecated properties

Following properties will be removed from output and/or ignored on input:

| Object | Property | Replaced by |
| --- | --- | --- | 
| [Company](operations/enterprises.md#company) | `TaxIdentificationNumber` | `TaxIdentifier` | 
| [Reservation](operations/reservations.md#reservation) | `ChannelManagerId` | `ChannelManagerNumber` |
| [Reservation](operations/reservations.md#reservation) | `TimeUnitCost` | `TimeUnitPrices` |
| [Reservation](operations/reservations.md#reservation) | `TraveAgencyId` | `TravelAgencyId` |
| [Reservation](operations/reservations.md#reservation) | `ApplyCancelationFee` | `ApplyCancellationFee` |
| [Reservation price](operations/reservations.md#reservation-price) | `Total` | `TotalAmount` |
| [Customer](operations/customers.md#customer) | `Gender` | `Sex` |
| [Customer](operations/customers.md#customer) | `BirthDateUtc` | `BirthDate` |
| [Customer](operations/customers.md#customer) | `CategoryId` | --- |
| [Customer](operations/customers.md#customer) | `Passport` | [Document](customers.md#document) object in `Documents` part of response |
| [Customer](operations/customers.md#customer) | `IdentityCard` | [Document](customers.md#document) object in `Documents` part of response |
| [Customer](operations/customers.md#customer) | `Visa` | [Document](customers.md#document) object in `Documents` part of response |
| [Customer](operations/customers.md#customer) | `DriversLicense` | [Document](customers.md#document) object in `Documents` part of response |
| [Document](operations/customers.md#document) | `ExpirationUtc` | `Expiration` |
| [Document](operations/customers.md#document) | `IssuanceUtc` | `Issuance` |
| [Currency value](operations/finance.md#currency-value) | `Net` | --- |
| [Currency value](operations/finance.md#currency-value) | `Tax` | --- |
| [Currency value](operations/finance.md#currency-value) | `TaxRate` | --- |
| Whole `UnitCost` object | --- | [Amount](operations/finance.md#amount-value) |

#### Websocket authentication

Changed [Websocket authentication](websockets.md#authentication) from being passed via URL query parameters to cookies.
