# Certification

Certification is the final step before your __Mews Connector API__ integration can go live in the Mews Production environment.

* If you are using the [Partner Portal](https://partnerportal.mews.com), you can initiate the certification process directly from there.
* If you do **not** have access to the Partner Portal, complete the [certification form](https://mews.typeform.com/to/ehTUz7) to begin the certification process.

> **Only required for public integrations**:
> Certification is only required for public integrations intended for distribution via the [Mews Marketplace](https://www.mews.com/en/products/marketplace). Private integrations do not need to be certified, but may still undergo a monitoring period before full rollout.

## Before you certify

Make sure you've completed the following:

* Registered to [Become a Mews Partner](https://www.mews.com/en/partners/new-partnerships)
* Registered your application (via the Partner Portal or by email)
* Developed and fully tested your integration in the [Demo environment](../guidelines/environments.md#demo-environments)

You are responsible for ensuring:

* All request and response payloads conform to specification
* The integration behaves reliably under realistic usage
* API call frequency stays within the limits of the target environment (see [Environments](../guidelines/environments.md))

You can test functionality using Demo properties to simulate real-world scenarios. The Demo environment mirrors Production capabilities.

## Certification process

The certification process aims to verify the technical correctness of your integration. Specifically, we check:

* The operations you use are appropriate for your use case
* API messages are formatted and sent correctly
* You handle authentication, error states, and data sync reliably

The process differs depending on your access method.

**If using the Partner Portal**:

* Log in to the [Partner Portal](https://partnerportal.mews.com).
* Go to **Integrations** > **Certify Existing Applications**.
* Follow the prompts to submit your certification request.

**If using the certification form**:

* Complete the [certification form](https://mews.typeform.com/to/ehTUz7).
* You will be asked to provide details on:
  * API operations used
  * Purpose and flow of the integration
  * Estimated usage or load expectations

Once submitted, the Mews team will review your integration logs from the Demo environment and contact you with next steps.

> Learn more about [what you can expect during the certification process](https://help.mews.com/s/article/connector-api-certification-what-to-expect?language=en_US)

## After certification

After successful certification:

* You will receive a `Client Token` for accessing the Production environment
* Your integration will be enabled at the agreed pilot property (if public)
* Mews will monitor the integration’s performance during a short pilot phase (typically 2 weeks)

## Support

* If you encounter issues, or the process is unclear, contact [partnersuccess@mews.com](mailto:partnersuccess@mews.com).
* For marketing, commercial questions, or general onboarding help, visit the [Mews Help Center](https://help.mews.com/s/?language=en_US).
