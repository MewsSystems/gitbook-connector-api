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
* `TaxIdentificationNumber` (replaced by `TaxIdentifier`) on [Company](operations/enterprises.md#company) 
* `ChannelManagerId` (replaced by `ChannelManagerNumber`), `TimeUnitCost` (replaced by `TimeUnitPrices`), `TraveAgencyId` (replaced by `TravelAgencyId`), `ApplyCancelationFee` (replaced by `ApplyCancellationFee`) on [Reservation](operations/reservations.md#reservation)
* `Total` (replaced by `TotalAmount`) on [Reservation price](operations/reservations.md#reservation-price)
* `Gender` (replaced by `Sex`), `CategoryId` (unused), `BirthDateUtc` (replaced by `BirthDate`) on [Customer](operations/customers.md#customer)
* `Passport`, `IdentityCard`, `Visa`, `DriversLicense` on [Customer](operations/customers.md#customer) replaced by [Document](customers.md#document) object
* `ExpirationUtc` (replaced by `Expiration`), `IssuanceUtc` (replaced by `Issuance`) on [Document](operations/customers.md#document)
* `Net`, `Tax`, `TaxRate` on [Currency value](operations/finance.md#currency-value)
* `UnitCost` replaced by [Amount](operations/finance.md#amount-value)

#### Websocket authentication

Changed [Websocket authentication](websockets.md#authentication) from being passed via URL query parameters to cookies.
