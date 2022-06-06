# Changelog 2016

## 14th December 2016

* Added `Get All Customers By Ids` operation.
* Extended `Reservation` with `ChannelManagerNumber`, `ChannelManagerGroupNumber` and `ChannelManager`.
* Extended `Get All Products` to return products of mulitple services at once.
* Extended `Accounting Category` with `Code` and `ExternalCode`.

## 22nd November 2016

* Added `Notes` to `Accounting Item`.
* Deprecated response of `Add Credit Card Payment`.

## 15th November 2016

* Added `BaseRateId` and `ShortName` to `Rate`.
* Added `Get All Reservations By Ids` operation.

## 17th October 2016

* Removed the deprecated data fields and operations.
* Added `Start` and `End` `Reservation Time Filter`.
* Added `ProductId`, `BillId` and `Type` to `Accounting Item`.
* Added `ServiceId` to `Reservation`.
* Added optional `BillId` parameter to `Add Credit Card Payment`.
* Added `Get All Services` operation.
* Added `Get All Products` operation.
* Added `Get Rate Pricing` operation.
* Generalized `Update Rate Base Price` to `Update Rate Price`.

## 1st September 2016

* Added operation `Update Rate Base Price` that allows e.g. revenue management systems to provide recommended rates to MEWS.
* Added operation `Get All Reservation Items` that returns revenue items of selected reservations.
* Added `Currency` parameter to operations `Get Customers Open Items` and `Get All Accounting Items`.
* Deprecated operation `Get Customer Balance`. Operation `Get Customer Open Items` should be used instead, since it provides more complete information.
* Deprecated properties `Customer` and `Companions` on `Reservation`. `CustomerId` an `CompanionIds` should be used instead. The customer data are part of the result of `Get All Reservations`. This removes redundancy in the response data, especially in hostels where the customer is mostly the only companion and currently the customer data were twice in the result.
* We plan to make `Address` on `Customer` optional in order to reduce response sizes, in many cases the customers do not have address details filled in.
