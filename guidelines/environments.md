# Environments

There are two pricing environments in which enterprises can operate - Gross or Net.
* Gross Pricing Environments are environments in which taxes are *included* in the pricing that is offered to a customer, such as Germany, UK, Australia.
* Net Pricing Environments are environments in which taxes are *excluded* in the pricing that is offered to a customer, such as in the US.

## Demo environments

The below addresses should be used for testing and development of the client applications.

* **PlatformAddress** - `https://api.mews-demo.com`
* **WebSocketAddress** - `wss://ws.mews-demo.com`

Use the below logins for accessing the demo enterprises ([Gross Pricing Environment](#gross-pricing-environment) and [Net Pricing Environment](#net-pricing-environment)).

* **MewsWebApplicationAddress** - `https://app.mews-demo.com`
* **Email** - connector-api@mews.li
* **Password** - connector-API-2021

### Security Policy

> **IMPORTANT!** The demo environments listed below are completely public and NO REAL DATA should be used for any reason. Failure to comply with these guidelines can result in immediate suspension of the connection or denial of certification.

### Request limits

* 2000 requests per `ClientToken` within 15 minutes
* 1000 requests per `AccessToken` within 15 minutes
* 500 requests per endpoint per `AccessToken` within 15 minutes

### Gross Pricing Environment

The authentication below will connect with the demo enterprise that is configured with Gross Pricing. This demo enterprise is based in the `United Kingdom` legal and tax environment. It accepts `GBP`, `EUR` and `USD` currencies (any of them may be used). Refer to [Taxations](#taxations) for proper usage of the relevant [Tax rate codes](../operations/taxations.md#tax-rate)

Use any of the 4 sets of Client/AccessTokens to access the Gross Pricing demo enterprise.

**Integration: `Are you ready to integrate with Mews?`**
* **ClientToken** - `E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D`
* **AccessToken** - `C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D`

**Integration: `Connector API Test Client 2`**
* **ClientToken** - `E916C341431C4D28A866AD200152DBD3-A046EB5583FFBE94DE1172237763712`
* **AccessToken** - `CC150C355D6A4048A220AD20015483AB-B6D09C0C84B09538077CB8FFBB907B4`

**Integration: `Connector API Test Client 3`**
* **ClientToken** - `2CC71B0660F345019882AD200155B4FE-4A1FC9080A4DD2A404734003674F77E`
* **AccessToken** - `5F56B9903A834F199E28AD20015E58CA-5C6A1A00550634911534AD6A098E8B7`

**Integration: `Connector API Test Client 4`**
* **ClientToken** - `07AB1F14B55C49B8BDD6AD200158423B-273A4497AFF5E20566D7199DB3DC2BA`
* **AccessToken** - `39E301DD5A1C4A569087AD20015F60DD-50DC28896E9090CCA0995C9BBD90351`

### Net Pricing Environment

The authentication below will connect with the demo enterprise that is configured with Net Pricing. This enterprise is based in the `United States - Washington DC` legal and tax environment. It accepts `GBP`, `EUR` and `USD` currencies (any of them may be used). Refer to [Taxations](#taxations) for proper usage of the relevant [Tax rate codes](../operations/taxations.md#tax-rate).

Use any of the 4 sets of Client/AccessTokens to access the Net Pricing demo enterprise.

**Integration: `Are you ready to integrate with Mews?`**
* **ClientToken** - `E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D`
* **AccessToken** - `7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382`

**Integration: `Connector API Test Client 2`**
* **ClientToken** - `E916C341431C4D28A866AD200152DBD3-A046EB5583FFBE94DE1172237763712`
* **AccessToken** - `1AEFA58C55E74D65BDC7AD2001564C12-66633E0B736F523379B9E5966165A55`

**Integration: `Connector API Test Client 3`**
* **ClientToken** - `2CC71B0660F345019882AD200155B4FE-4A1FC9080A4DD2A404734003674F77E`
* **AccessToken** - `682C235379B64D909941AD2001577525-BFC60A026081F1350FAA99CAB9F7510`

**Integration: `Connector API Test Client 4`**
* **ClientToken** - `07AB1F14B55C49B8BDD6AD200158423B-273A4497AFF5E20566D7199DB3DC2BA`
* **AccessToken** - `BFD4298010F54B069F3DAD20015D53EA-D5561FADFBA4EFC8EA4C179C6BC461F`

## Production environment

* **MewsWebApplicationAddress** - `https://app.mews.com`
* **PlatformAddress** - `https://api.mews.com`
* **WebSocketAddress** - `wss://ws.mews.com`
* **ClientToken** - Unique token per integration which will be provided to you by our integration team upon certification completion. For further information, please use the chat function on this page.
* **AccessToken** - Unique token per enterprise. Can be provided to you by the enterprise admin.

### Security Policy

> **IMPORTANT!** To protect the live data of each property, please store your production tokens securely and do not share them publicly.

### Request limits

* 3600 requests per `ClientToken` within 15 minutes
* 1600 requests per `AccessToken` within 15 minutes
* 800 requests per endpoint per `AccessToken` within 15 minutes

## Taxations

Each enterprise is located in a specific [Tax environment](../operations/taxenvironments.md#tax-environment) that offers a list of applicable [Taxations](../operations/taxations.md#taxation). The numeric value of the taxations are represented by [Tax rate codes](../operations/taxations.md#tax-rate) that are accepted within the tax environment. 

Instead of numeric tax rates such as `0.1`, use [Tax rate codes](../operations/taxations.md#tax-rate) such as `AT-S` in order to represent and calculate the correct taxation for each accounting item in Mews. To obtain the applicable codes, first download the enterprise information with [Get configuration](../operations/configuration.md#get-configuration) to identify the Tax Environment, then filter for the applicable [Tax rate codes](../operations/taxations.md#tax-rate) from all tax environment information retrieved via [Get all tax environments](../operations/taxenvironments.md#get-all-tax-environments). 

Make sure to note the validity intervals as well as any government announcements to anticipate changes to tax rates. Should any changes occur, re-retrieve enterprise and tax environment information to identify the new tax rate codes.

## Whitelisting

Whitelisting (also called 'allowlisting') is a common security measure which can be applied to a system to allow only specified external systems to talk to it. This has traditionally been achieved using IP address-based firewall rules. However, this approach does not work with modern cloud based architectures, which use dynamic and shared IP addresses, proxy servers and elastic resources. For this reason, we do not support the use of IP address whitelists for our APIs and we cannot supply a list of IP addresses for our APIs.
