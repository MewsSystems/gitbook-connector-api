# Changelog

## 26th January 2023

* Deprecated `AssigneeData` in [Get all bills](../operations/bills.md#get-all-bills) response and replaced with  `OwnerData`.
* Extended [Bill customer data](../operations/bills.md#bill-customer-data) with `CustomerID`, `LegalIdentifiers`, `BillingCode`, `LastName`, `FirstName`, `SecondLastName`, `TitlePrefix` and with [Bill address](../operations/bills.md#bill-address) fields.
* Extended [Bill company data](../operations/bills.md#bill-company-data) with Owner Data `LegalIdentifiers`, `BillingCode`, `Name`, `FiscalIdentifier`, `AdditionalTaxIdentifier` and with [Bill address](../operations/bills.md#bill-address) fields.
* Extended [Payment Items](../operations/accountingitems.md#payment-item) with `AmountDefault`.
* Deprecated  `ItalianFiscalCode` and `ItalianLotteryCode` in [Bill customer data](../operations/bills.md#bill-customer-data).

## 13th January 2023

* Extended [Get all addresses](../operations/addresses#get-all-addresses) with filter parameter `UpdatedUtc`.

## 6th January 2023

* Extended [Get all rates](../operations/rates.md#get-all-rates) with filtering parameters `RateIds` and `UpdatedUtc`.

| Changelog by year |
| :-- |
| [Changelog 2022](changelog2022.md) |
| [Changelog 2021](changelog2021.md) |
| [Changelog 2020](changelog2020.md) |
| [Changelog 2019](changelog2019.md) |
| [Changelog 2018](changelog2018.md) |
| [Changelog 2017](changelog2017.md) |
| [Changelog 2016](changelog2016.md) |
