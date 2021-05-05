# Guidelines

This part describes guidelines for general usage of the Connector API and serves as a quick-start guide to kickstart your integration development.

To begin with, Mews operates several environments. In the beginning of development process you'll be interested in [Demo environment](environments.md#demo-environment). To get yourself familiar with the system and types of data we provide you can login into the web platform using the email and password provided and check out the Mews features.

Or alternatively you can start using the API right away using the demo tokens. [Requests](requests.md) towards our API should be in `JSON` format send using `POST` method. This is example request which will return basic configuration of one of the testing hotels:

`https://api.mews-demo.com/api/connector/v1/configuration/get`
```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
    "Client": "NameOfYourCompanyOrApplication"
}
```

If the [response](responses.md) looks something like this, you've successfully made your first request.
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

There are several [serialization](serialization.md) patterns that you should get familiar with in order to use the API correctly, for example we work with times in UTC so you should be aware of the timezone the hotel is in (as can be seen on example above).

If you receive some error, check the [response codes](responses.md#response-codes) to figure out what went wrong.

One of possible reasons is that multiple developers using same demo credentials can exhaust our [request limits](requests.md#request-limits). To get around this we have a process of [certification](certification.md) during which you can get your private set of credentials.