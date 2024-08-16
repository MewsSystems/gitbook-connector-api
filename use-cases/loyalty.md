# Customer loyalty

Loyalty scheme providers can use the **Mews Connector API** to synchronize their loyalty programs with **Mews Operations**.
Hotel staff can then easily access a guest's membership status, including loyalty tier such as "Gold member", through the guest profile within the Mews system.

> ### Loyalty data model
>
> The data model for Loyalty consists of three main entities:
> * **Loyalty Program**<br>This is the main loyalty scheme or program. A guest can be a member of multiple programs.
> * **Loyalty Tier**<br>You can optionally define tiers or levels of membership for your program.
> * **Loyalty Membership**<br>A Loyalty Membership describes the relationship between a customer or guest and a loyalty program. This includes reward points, loyalty tier and membership expiration date.

## Chains

Loyalty programs are set up in Mews at the above-property chain level. However, this does not prevent individual properties (called _Enterprises_ in Mews) from having loyalty programs, because a property by default is in a chain of one.

> ### Where can I obtain the Chain identifier?
>
> You can obtain the Chain identifier for an enterprise or property using [Get configuration](../operations/configuration.md#get-configuration).

## Set up loyalty programs

Use [Add loyalty programs](../operations/loyaltyprograms.md#add-loyalty-programs) to create your loyalty programs in Mews. If using a normal, single enterprise Access Token, the programs will be created for the chain corresponding to the enterprise within scope of the Access Token. If using a multi-property [Portfolio Access Token](../guidelines/multi-property.md), you must specify the `ChainId`. The programs will then be created for the specified chain.

To create a program, you must specify a program name, program code (used to match the loyalty on bookings such as those coming in to Mews from the [Mews Channel Manager API](https://mews-systems.gitbook.io/channel-manager-api)), type of program, and subscription model (`Free` or `Paid`). To see what loyalty programs are already set up, use [Get all loyalty programs](../operations/loyaltyprograms.md#get-all-loyalty-programs), which can be called with various filter parameters, depending on your requirements.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to add a Loyalty Program | [Add loyalty programs](../operations/loyaltyprograms.md#add-loyalty-programs) |
| How to get a list of Loyalty Programs | [Get all loyalty programs](../operations/loyaltyprograms.md#get-all-loyalty-programs) |
| How to get the Chain identifier for a property | [Get configuration](../operations/configuration.md#get-configuration) |

> ### How can I validate the Loyalty Programs setup?
>
> With access to **Mews Operations**, you can go to the Loyalty section of the Customer Profile and manually add a customer to a program. The available programs should reflect what you have configured through the API.
> For more information, see these articles in the [Mews Help Center](https://help.mews.com):
> * [Understanding the Loyalty section in Mews Operations](https://help.mews.com/s/article/Understanding-the-Loyalty-section-in-Mews-Operations)
> * [Managing the Loyalty section in Mews Operations](https://help.mews.com/s/article/Managing-the-Loyalty-section-in-Mews-Operations)

## Maintain your loyalty programs

To make changes to existing loyalty programs, use [Update loyalty programs](../operations/loyaltyprograms.md#update-loyalty-programs). To delete unwanted loyalty programs, use [Delete loyalty programs](../operations/loyaltyprograms.md#delete-loyalty-programs).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to update a Loyalty Program | [Update loyalty programs](../operations/loyaltyprograms.md#update-loyalty-programs) |
| How to delete a Loyalty Program | [Delete loyalty programs](../operations/loyaltyprograms.md#delete-loyalty-programs) |

## Set up loyalty tiers

If any of the loyalty programs use tiers, set up those tiers and link them to the programs, using [Add loyalty tiers](../operations/loyaltytiers.md#add-loyalty-tiers). To see what loyalty tiers are already set up, use [Get all loyalty tiers](../operations/loyaltytiers.md#get-all-loyalty-tiers), which can be called with various filter parameters, depending on your requirements. To make changes to existing loyalty tiers, use [Update loyalty tiers](../operations/loyaltytiers.md#update-loyalty-tiers). To delete unwanted loyalty tiers, use [Delete loyalty tiers](../operations/loyaltytiers.md#delete-loyalty-tiers).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to add a Loyalty Tier | [Add loyalty tiers](../operations/loyaltytiers.md#add-loyalty-tiers) |
| How to get a list of Loyalty Tiers | [Get all loyalty tiers](../operations/loyaltytiers.md#get-all-loyalty-tiers) |
| How to update a Loyalty Tier | [Update loyalty tiers](../operations/loyaltytiers.md#update-loyalty-tiers) |
| How to delete a Loyalty Tier | [Delete loyalty tiers](../operations/loyaltytiers.md#delete-loyalty-tiers) |

## Add guests to loyalty programs

Loyalty Memberships are used to connect guests (called _Customers_ in Mews) with loyalty programs. To connect a guest or customer to a loyalty program, use [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships). Specify the identifier of the loyalty program, the identifier of the customer account, and optionally you can specify their reward points, a membership expiration date, a URL to an entry in your loyalty system, a loyalty tier that the customer belongs to, and/or the state of their membership, e.g. `Pending`. If the customer is a member of more than one loyalty program within scope of the chain, specify which one is the primary program against which points should be allocated, using the `isPrimary` JSON property.
To fetch a list of guest memberships, use [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships), which can be called with various filter parameters.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to add a Loyalty Membership | [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships) |
| How to get a list of Loyalty Memberships | [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships) |

## Maintain your guest memberships

To make changes to guest loyalty memberships, use [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships). To remove guest loyalty memberships, use [Delete loyalty memberships](../operations/loyaltymemberships.md#delete-loyalty-memberships).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to update a Loyalty Membership | [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships) |
| How to delete a Loyalty Membership | [Delete loyalty memberships](../operations/loyaltymemberships.md#delete-loyalty-memberships) |

## Testing your integration

Ensure you follow our general [guidelines](../guidelines/README.md) for testing integrations.
For additional help when working with the demo environment, there is a range of helpful articles in the [Mews Help Center](https://help.mews.com/s/?language=en_US). These are available in a number of languages.
The following articles may be of interest:
* [Understanding the Loyalty section in Mews Operations](https://help.mews.com/s/article/Understanding-the-Loyalty-section-in-Mews-Operations)
* [Managing the Loyalty section in Mews Operations](https://help.mews.com/s/article/Managing-the-Loyalty-section-in-Mews-Operations)
