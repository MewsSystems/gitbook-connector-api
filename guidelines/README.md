# Guidelines

This section describes guidelines for general usage of the __Mews Connector API__ and serves as a quick-start guide to kickstart your integration development.

> ### Terminology
> Some of the terms used in the API, such as *enterprise*, *customer* or *resource* may not be familiar.
> For example, we use *resource* to describe guest rooms and other types of bookable space.
> For a full description of all the terms used, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

## Quick start

To begin with, Mews operates several environments. At the beginning of your development process, you'll be interested in the [Demo environment](environments.md#demo-environment). To get yourself familiar with the system and the types of data we provide, you can log in to __Mews Operations__ using the email and password provided and check out the Mews system features.

Alternatively, you can start using the API right away, using the demo tokens below. [Requests](requests.md) towards our API should be in `JSON` format and sent using `POST` method. Below is an example request which will return the configuration details for one of our test hotels.
You can find out more about this API operation in [Get configuration](../operations/configuration.md#get-configuration).

Endpoint URL:

`https://api.mews-demo.com/api/connector/v1/configuration/get`

Request payload:
```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
    "Client": "NameOfYourCompanyOrApplication"
}
```

If the [response](responses.md) looks something like this, you've successfully made your first request!
```javascript
{
    "NowUtc": "2021-05-05T11:39:29Z",
    "Enterprise": {
        "Id": "c65ea6e9-2340-42f4-9136-ab3a00b6da22",
        "ChainId": "8ddea57b-6a5c-4eec-8c4c-24467dce118e",
        "CreatedUtc": "2020-01-06T11:05:44Z",
        "Name": "Connector API Hotel (Net Pricing) TEST",
        "TimeZoneIdentifier": "America/New_York",
        "LegalEnvironmentCode": "US-DC",
        "AccommodationEnvironmentCode": "US",
        "AccountingEnvironmentCode": "DEFAULT",
        "TaxEnvironmentCode": "US-DC",
        "DefaultLanguageCode": "en-US",
        "EditableHistoryInterval": "P0M2DT0H0M0S",
        "WebsiteUrl": "https://www.mews.com/",
        "Email": "charging-api@mews.lixx",
        "Phone": "+12025555501xx",
        "LogoImageId": "c90a8d7e-a332-45c0-ac44-ac5600a4116e",
        "CoverImageId": "c867f682-4003-4518-b96c-abec0090a23b",
        "Address": {},
        "Currencies": [],
        "Pricing": "Net",
        "TaxPrecision": null
    },
    "PaymentCardStorage": {
        "PublicKey": "1100016827"
    }
}
```

There are several [serialization](serialization.md) patterns that you should get familiar with in order to use the API correctly. For example, we work with times in UTC so you should be aware of the timezone the property is in (as can be seen on example above) as well as any daylight saving time changes, and adjust accordingly.

If you receive an error response, check the [response codes](responses.md#response-codes) and the message specified in [response details](responses.md#response-details) to determine what went wrong. Note that if you encounter a `429` error with one of the testing demo credentials, it may be that multiple developers are using the same demo credentials and have exhausted our [request limits](requests.md#request-limits). To minimize the impact this may have on your development efforts, we provide multiple sets of tokens for the test hotels that you can use in Demo. 
