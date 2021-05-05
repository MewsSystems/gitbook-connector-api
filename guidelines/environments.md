# Environments

## Demo environments

These demo environments are meant to be used during implementation of the client applications. There are two pricing environments that enterprises can operate in, Gross Pricing Environment (totals displayed include VAT/Tax) and Net Pricing Environment (totals displayed do not include VAT/Tax). 

* **PlatformAddress** - `https://app.mews-demo.com`
* **ApiAddress** - `https://api.mews-demo.com`
* **WebSocketAddress** - `wss://ws.mews-demo.com`
* **Email** - connector-api@mews.li
* **Password** - connector-API-2021

### Security Policy

**The demo environments listed below are completely public and NO REAL DATA should be used for any reason. Failure to comply with these guidelines can result in immediate suspension of the connection or denial of certification.**

### Request limits

* 2000 requests per `ClientToken` within 15 minutes
* 1000 requests per `AccessToken` within 15 minutes
* 500 requests per endpoint per `AccessToken` within 15 minutes

### Gross Pricing Environment

The authentication below will connect with the demo enterprise that is configured with gross pricing:

* **ClientToken** - `E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D`
* **AccessToken** - `C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D`

The enterprise is based in the United Kingdom, it accepts `GBP`, `EUR` and `USD` currencies (any of them may be used). Refer to [Taxations](#taxations) for proper usage of the relevant [Tax rate codes](../operations/configuration.md#tax-rate)

#### Net Pricing Environment

The authentication below will connect with the demo enterprise that is configured with net pricing:

* **ClientToken** - `E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D`
* **AccessToken** - `7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382`

The enterprise is based in the United States, it accepts `GBP`, `EUR` and `USD` currencies (any of them may be used). Refer to [Taxations](#taxations) for proper usage of the relevant [Tax rate codes](../operations/configuration.md#tax-rate)

## Production environment

* **PlatformAddress** - `https://www.mews.li`
* **ApiAddress** - `https://www.mews.li`
* **WebSocketAddress** - `wss://www.mews.li`
* **ClientToken** - Unique token per integration which will be provided to you by our integration team upon certification completion. For further information, please use the chat function on this page.
* **AccessToken** - Unique token per enterprise. Can be provided to you by the enterprise admin.

### Security Policy

**To protect the live data of each property, please store your production tokens securely and do not share them publicly.**

### Request limits

* 3600 requests per `ClientToken` within 15 minutes
* 1600 requests per `AccessToken` within 15 minutes
* 800 requests per endpoint per `AccessToken` within 15 minutes

## Taxations

Each enterprise is located in a specific [Tax environment](../operations/configuration.md#tax-environment) that offers a list of applicable [Taxations](../operations/configuration.md#taxation). The numeric value of the taxations are represented by [Tax rate codes](../operations/configuration.md#tax-rate) that are accepted within the tax environment. 

Instead of numeric tax rates such as `0.1`, use [Tax rate codes](../operations/configuration.md#tax-rate) such as `AT-S` in order to represent and calculate the correct taxation for each accounting item in Mews. To obtain the applicable codes, first download the enterprise information with [Get configuration](../operations/configuration.md#get-configuration) to identify the Tax Environment, then filter for the applicable [Tax rate codes](../operations/configuration.md#tax-rate) from all tax environment information retrieved via [Get all tax environments](../operations/configuration.md#get-all-tax-environments). 

Make sure to note the validity intervals as well as any government announcements to anticipate changes to tax rates. Should any changes occur, re-retrieve enterprise and tax environment information to identify the new tax rate codes.