# Deprecations

## Upcoming

### 31st March 2021

#### Deprecated operations

Following legacy operations will be completely removed:
* `companies/getAllByName`
* `bills/getAllByIds`
* `bills/getAllByCustomers`
* `bills/getAllClosed`
* `creditCards/getAllByIds`
* `creditCards/getAllByCustomers`
* `reservations/getAllByIds`
* `reservations/getAllByCustomers`
* `reservations/getAllByNumbers`
* `customers/getAllByIds`
* `customers/getAllByEmails`
* `customers/getAllByName`

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
* `TaxIdentificationNumber` on [Company](operations/enterprises.md#company) 
* `ChannelManagerId`, `TimeUnitCost`, `TraveAgencyId`, `ApplyCancelationFee` on [Reservation](operations/reservations.md#reservation)
* `Total` on [Reservation price](operations/reservations.md#reservation-price)
* `Gender`, `Passport`, `IdentityCard`, `Visa`, `DriversLicense`, `CategoryId`, `BirthDateUtc` on [Customer](operations/customers.md#customer)
* `ExpirationUtc`, `IssuanceUtc` on [Document](operations/customers.md#document)
* `Net`, `Tax`, `TaxRate` on [Currency value](operations/finance.md#currency-value)
* `UnitCost` replaced with [Amount](operations/finance.md#amount-value)

#### Websocket authentication

Changed [Websocket authentication](websockets.md#authentication) from being passed via URL query parameters to cookies.
