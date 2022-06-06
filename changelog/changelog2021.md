# Changelog 2021

## 22nd November 2021

* Extended [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters) with `State`.

## 13th August 2021

* Added [Update availability blocks](../operations/availabilityblocks.md#update-availability-blocks) operation.

## 21st June 2021

* Extended [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) parameters  with `ClosedUtc` and `ConsumedUtc`.
* Extended [Add external payment](../operations/payments.md#add-external-payment) parameters with `CrossSettlement` type and `ExternalIdentifier` key.

## 29th March 2021
* Added new type `ResourceUpdated` of webhook [Event](../webhooks/README.md#event).

## 18th March 2021
* For demo environment, platform URL changed to `https://api.mews-demo.com`.
* For demo environment, web socket URL changed to `wss://ws.mews-demo.com`.

## 3rd March 2021
* Removed obsolete property `CompanionIds` from [Reservation](../operations/reservations.md#reservation) surpassed by operation [Get all companionships](../operations/companionships.md#get-all-companionships).

## 22nd February 2021
* Added [Get all resource access tokens](../operations/resourceaccesstokens.md#get-all-resource-access-tokens), [Add resource access tokens](../operations/resourceaccesstokens.md#add-resource-access-tokens), [Update resource access tokens](../operations/resourceaccesstokens.md#update-resource-access-tokens), [Delete resource access tokens](../operations/resourceaccesstokens.md#delete-resource-access-tokens).

## 21st January 2021
* Added [Add availability blocks](../operations/availabilityblocks.md#add-availability-blocks), [Delete availability blocks](../operations/availabilityblocks.md#delete-availability-blocks).
* Extended [Update service availability](../operations/services.md#update-service-availability) with `AvailabilityBlockId`.
* Split [Get all tax environments](../operations/taxenvironments.md#get-all-tax-environments) and [Get all taxations](../operations/taxations.md#get-all-taxations).
* Extended [Tax Rate](../operations/taxations.md#tax-rate) discriminator with `Dependent`.

## 6th January 2021
* Specified limitations on operation parameters (generally 1000 items in collection and maximum time filter length of 3 months).
* Changed the [websocket](../websockets/README.md) authentication method to use cookies instead of URL query parameters.
* Extended [Space resource data](../operations/resources.md#space-resource-data) with `LocationNotes`.
* Extended [Space resource data update](../operations/resources.md#space-resource-data-update) with `LocationNotes`.

| Next |
| :-- |
| [Changelog 2020](changelog2020.md) |
