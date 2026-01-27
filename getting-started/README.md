# Getting started

This page walks you through the key steps to begin developing your integration with the __Mews Connector API__. Whether you're exploring the demo environment, preparing for certification, or validating your first request, this guide covers the tools, environments and concepts you'll need.

> **Ready to try a test call?** Jump to [Step 2: Make your first API call](#step-2-make-your-first-api-call).

## What you’ll need

Before making your first request, make sure you're familiar with the following:

- **Authentication tokens**<br>
  Every API request requires:
  - `ClientToken`: Identifies your application. Issued by Mews.
  - `AccessToken`: Identifies the enterprise or property you're connecting to. Issued by the property.
  - `Client`: A short string naming your application.

- **Mews environments**<br>
  Mews provides two environments:
  - [Demo environment](../guidelines/environments.md#demo-environment) – for development and testing.
    - Net pricing and Gross pricing variants simulate different tax regimes used by properties in different jurisdictions.
  - [Production environment](../guidelines/environments.md#production-environment) – used by live properties after certification.

- **Mews Operations**<br>
  You can optionally log into the UI of Mews Operations (used by hotel staff) to understand how API data maps to the product.

- **Demo credentials**<br>
  Mews provides shared tokens and login details for test properties. These are suitable for early development, but subject to [rate limits](../guidelines/requests.md#request-limits).

> **Want to know more?** For full details, see [Authentication](../guidelines/authentication.md) and [Environments](../guidelines/environments.md).

## Step 1: Set up your environment

To begin testing:

1. **Choose a demo property** from the list in [Demo environments](../guidelines/environments.md#demo-environments).
   - Use either the Net pricing or Gross pricing variant depending on your target markets.
2. **Note the tokens** for that property:
   - `ClientToken`
   - `AccessToken`
3. **(Optional)** [Request a dedicated Demo Property](../guidelines/environments.md#mews-operations-credentials) in __Mews Operations__  to explore the UI and sample data.

You’ll use these credentials to make authenticated API requests.

## Step 2: Make your first API call

Let’s start by calling [Get configuration](../operations/configuration.md#get-configuration), which returns details about the test property — a useful check that your setup is working.

- **Endpoint URL**

```
https://api.mews-demo.com/api/connector/v1/configuration/get
```

- **Request body**
```json
{
  "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
  "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
  "Client": "NameOfYourCompanyOrApplication"
}
```

- **Expected response**  
If successful, the API will return HTTP status code `200 - OK` along with property details in the message body:
```json
{
  "NowUtc": "2021-05-05T11:39:29Z",
  "Enterprise": {
    "Id": "c65ea6e9-2340-42f4-9136-ab3a00b6da22",
    "Name": "Connector API Hotel (Net Pricing) TEST",
    "TimeZoneIdentifier": "America/New_York",
    "LegalEnvironmentCode": "US-DC",
    "AccommodationEnvironmentCode": "US",
    ...
  },
  "PaymentCardStorage": {
    "PublicKey": "1100016827"
  }
}
```

> **Requests and responses**: For more on request formatting and response codes, see [Requests](../guidelines/requests.md) and [Responses](../guidelines/responses.md) respectively.

## Step 3: Learn the API essentials

### Time and data serialization
- All dates and times are in UTC.
- Dates, durations and other data types follow specific [serialization rules](../guidelines/serialization.md).

### Pagination
- Some operations (like [Get all reservations](../operations/reservations.md#get-all-reservations-2023-06-06)) use [pagination](../guidelines/pagination.md) to handle large result sets.

### Rate limits
- Shared demo credentials may return `429 - Too many requests` response code if multiple developers are testing the same property.
- Use a different demo property if limits are reached.

### Error handling
- Check the [response code](../guidelines/responses.md#response-codes) and [details](../guidelines/responses.md#error-response-details) to diagnose issues.
- Always validate required fields and timezones in your request payloads.

> **Best practices**: For additional tips on how to get the most out of your integration, see our [best practices](../guidelines/best-practices.md).

## Next steps

Now that you've made a successful call, here’s where to go next:

- [Usage guidelines](../guidelines/README.md) – How to structure requests, handle authentication, best practices, and more.
- [API Operations](../operations/README.md) – Full list of API Operations.
- [API Events](../events/README.md) – How to receive near-real-time event notifications.
- [Concepts](../concepts/README.md) – Deeper insights into selected Mews concepts.
- [Use cases](../use-cases/README.md) – Guidance on using the API for common scenarios.
- [Certification](../your-journey/certification.md) – What’s required before going live.
- [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US) – Terminology for terms like *enterprise*, *customer*, and *resource*.
