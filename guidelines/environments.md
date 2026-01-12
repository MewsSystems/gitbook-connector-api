# Environments

Mews supports two main environments: Demo and Production. Demo can be used for integration development and testing.
Production is for live customer sites.

## Pricing environments

Enterprises can be configured for Gross Tax or Net Tax. In the Production environment this will depend on the individual enterprise.
For development and test purposes, we have set up two versions of the Demo environment, one for Gross Tax and one for Net Tax.

* **Gross Pricing Environments**: These are environments in which taxes are *included* in the pricing that is offered to the end customer, such as used by Germany, UK and Australia.
* **Net Pricing Environments**: These are environments in which taxes are *excluded* from the pricing that is offered to the end customer, such as used in the USA.

## Demo environments

### Security Policy

> **IMPORTANT!** The demo environments are completely public and NO REAL DATA should be used for any reason. Failure to comply with these guidelines can result in immediate suspension of the connection or denial of certification.

### Platform addresses

These addresses should be used for testing and development of client applications:

* **PlatformAddress** - `https://api.mews-demo.com`
* **WebSocketAddress** - `wss://ws.mews-demo.com`

### Mews system credentials

These login credentials to connect to __Mews Operations__ will be automatically sent after the user creation in the Demo Property (for both Gross and Net Pricing Environments), see the process below:

* Fill in the **Become a Mews Partner Form** - `https://www.mews.com/en/partners/new-partnerships`
* An automated email will be sent to your email address to reset your password to log in into the Demo Property
* Reset the password
* Now, you can successfully log in into the Demo Property
* **Mews Web Application Address** - `https://app.mews-demo.com`

### API tokens (Gross Pricing Environment)

The credentials below will connect with a demo enterprise configured for Gross pricing. This demo enterprise is based in the `United Kingdom` legal and tax environment. It accepts `GBP`, `EUR` and `USD` currencies (any of them may be used). Refer to [Taxations](#taxations) for proper usage of the relevant [Tax rate](../operations/taxations.md#tax-rate) codes. Use any of the four sets of tokens.

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

### API tokens (Net Pricing Environment)

The credentials below will connect with a demo enterprise configured for Net pricing. This demo enterprise is based in the `United States - Washington DC` legal and tax environment. It accepts `GBP`, `EUR` and `USD` currencies (any of them may be used). Refer to [Taxations](#taxations) for proper usage of the relevant [Tax rate](../operations/taxations.md#tax-rate) codes. Use any of the four sets of tokens.

**Integration: `Are you ready to integrate with Mews?`**
* **ClientToken** - `E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D`
* **AccessToken** - `4D6C7ABE0E6A4681B0AFB16900AE5D86-DF50CBC89E1D4FF5859DDF021649ED5`

**Integration: `Connector API Test Client 2`**
* **ClientToken** - `E916C341431C4D28A866AD200152DBD3-A046EB5583FFBE94DE1172237763712`
* **AccessToken** - `1AEFA58C55E74D65BDC7AD2001564C12-66633E0B736F523379B9E5966165A55`

**Integration: `Connector API Test Client 3`**
* **ClientToken** - `2CC71B0660F345019882AD200155B4FE-4A1FC9080A4DD2A404734003674F77E`
* **AccessToken** - `682C235379B64D909941AD2001577525-BFC60A026081F1350FAA99CAB9F7510`

**Integration: `Connector API Test Client 4`**
* **ClientToken** - `07AB1F14B55C49B8BDD6AD200158423B-273A4497AFF5E20566D7199DB3DC2BA`
* **AccessToken** - `BFD4298010F54B069F3DAD20015D53EA-D5561FADFBA4EFC8EA4C179C6BC461F`

### Request limits

* 200 requests per `AccessToken` within 30 seconds

> **IMPORTANT** Number of requests and time window can be changed without prior notice. Your application must be prepared to handle `429 Too Many Requests` responses. See [Request limits](../guidelines/requests.md#request-limits) for more information.

## Production environment

### Security Policy

> **IMPORTANT!** To protect the live data of each enterprise, please store your production tokens securely and do not share them publicly.

### Addresses

* **PlatformAddress** - `https://api.mews.com`
* **WebSocketAddress** - `wss://ws.mews.com`
* **Mews Web Application Address** - `https://app.mews.com`

### API tokens

* **ClientToken** - Unique to your application, serving as the identifier of the API client. This token will be provided to you by our integration team upon successful [certification](../your-journey/README.md).
* **AccessToken** - Unique token per enterprise. Can be provided to you by the enterprise admin.

### Request limits

* 200 requests per `AccessToken` within 30 seconds

> **IMPORTANT** Number of requests and time window can be changed without prior notice. Your application must be prepared to handle `429 Too Many Requests` responses. See [Request limits](../guidelines/requests.md#request-limits) for more information.

## Taxations

Each enterprise operates within a specific [Tax environment](../operations/taxenvironments.md#tax-environment), which defines the applicable [Taxations](../operations/taxations.md#taxation). The tax rates are represented by [Tax rate](../operations/taxations.md#tax-rate) codes accepted within that environment.
Instead of using numeric tax rates like `0.1`, use [Tax rate](../operations/taxations.md#tax-rate) codes such as `AT-S` to accurately represent and calculate the correct taxation for each accounting item in Mews.

To obtain the applicable codes:

1. Download the enterprise information using [Get configuration](../operations/configuration.md#get-configuration) to identify the Tax Environment.
2. Filter for the applicable [Tax rate](../operations/taxations.md#tax-rate) codes from the tax environment information retrieved via [Get all tax environments](../operations/taxenvironments.md#get-all-tax-environments).
3. Be sure to note the validity intervals, and monitor any government announcements for changes to tax rates. If changes occur, re-retrieve the enterprise and tax environment information to identify the new tax rate codes.

## IP address allowlisting

Allowlisting (formerly called 'whitelisting') is a common security measure which can be applied to a system to allow only specified external systems to talk to it. This has traditionally been achieved using IP address-based firewall rules. However, this approach does not work with modern cloud based architectures, which use dynamic and shared IP addresses, proxy servers and elastic resources. For this reason, we do not support the use of IP address allowlists for our APIs and we cannot supply a list of IP addresses for our APIs.
