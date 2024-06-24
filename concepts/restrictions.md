# Restrictions

An explanation of the algorithms used to support [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions).

## Contents

* [What are restrictions?](#what-are-restrictions)
* [Restrictions in the API](#restrictions-in-the-api)
* [Set restrictions and Clear restrictions](#set-restrictions-and-clear-restrictions)
* [Merging algorithm](#merging-algorithm)
* [Matching conditions](#matching-conditions)
* [Time interval splicing](#time-interval-splicing)
* [Scope of restrictions](#scope-of-restrictions)

## What are restrictions?

Restrictions give **Mews** customers more control over their reservations, by preventing guests from making bookings that meet certain conditions. Restrictions can be applied to rates and space types, to control the way guests can book them. For example:

* Use restrictions to implement a promotional rate which applies only to weekend bookings during July and August
* Use restrictions to prevent guests from booking a room in a particular space type category (room type)

> ### Additional help on restrictions
> * [Understanding restrictions in Mews Operations](https://help.mews.com/s/article/Understanding-restrictions-in-Mews-Operations?language=en_US)
> * [How to create restrictions in Mews Operations](https://help.mews.com/s/article/How-to-create-restrictions-in-Mews-Operations?language=en_US)
> * [Search all Help articles related to restrictions](https://help.mews.com/s/global-search/restrictions?language=en_US)

## Restrictions in the API

To retrieve information about restrictions, use [Get all restrictions](../operations/restrictions.md#get-all-restrictions). To add and remove restrictions, use [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions) respectively.

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get service restrictions | [Get all restrictions](../operations/restrictions.md#get-all-restrictions) |
| How to add service restrictions | [Set restrictions](../operations/restrictions.md#set-restrictions) |
| How to remove service restrictions | [Clear restrictions](../operations/restrictions.md#clear-restrictions) |

> **Restrictions operations:** Older operations [Add restrictions](../operations/restrictions.md#add-restrictions) and [Delete restrictions](../operations/restrictions.md#delete-restrictions) are deprecated. They are replaced by the more efficient [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions).
> Refer to the documentation for the individual operations for an explanation of the workings of these operations. Do not mix them, use _Add restrictions_ with _Delete restrictions_, or _Set restrictions_ with _Clear restrictions_. Note that as an API user you can only set and clear your own restrictions, independently of restrictions set within the user interface of **Mews Operations**, or indeed by other API users.

## Set restrictions and Clear restrictions

When using old API operation [Add restrictions](../operations/restrictions.md#add-restrictions), if consecutive restrictions are sent with the same conditions and exceptions, no attempt is made by the system to merge the duplicate or overlapping restrictions. This means that there can be a large number of restrictions created per service, leading to sub-optimal performance. A quota limit of 150,000 was introduced. However, to mitigate the issue, API users are encouraged to migrate to new operation [Set restrictions](#set-restrictions) instead. For improved efficiency, [Set restrictions](../operations/restrictions.md#set-restrictions) merges multiple similar restrictions into a single restriction. Its sibling operation [Clear restrictions](../operations/restrictions.md#clear-restrictions) uses a splicing algorithm to work out how to divide up any existing restrictions to meet the specified time interval.

The following sections explain the algorithms used by these operations in more detail. These algorithms only apply to [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](../operations/restrictions.md#clear-restrictions).

## Merging algorithm

When using [Set restrictions](../operations/restrictions.md#set-restrictions), if a specified restriction already exists with the same conditions, or if multiple specified restrictions match in all properties but differ in time interval and follow each other chronologically, a merging algorithm is applied to combine them. This reduces the overall number of restrictions and improves system performance. The merging algorithm is as follows:

* If the exceptions of the new restriction match the old restriction:
  * If the new interval is longer than the old one, a new restriction is created joining the two intervals.
  * If the new interval is shorter, no changes are made.
* If the exceptions of the new restriction do _not_ match the old restriction:
  * If the new interval overlaps the old interval, the old restriction will be [spliced](#time-interval-splicing) before and after the new interval. Restrictions matching the old restriction are then added at the appropriate interval along with the new restriction.
  * If the new interval does _not_ overlap the old interval, the new restriction is added as usual.

## Matching conditions

The conditions specified in [Set restrictions](../operations/restrictions.md#set-restrictions) and [Clear restrictions](#clear-restrictions) must be met exactly. For example:

* A bookable service has two restrictions A and B. Restriction A applies to resource category C1 and rate R1. Restriction B applies to resource category C1 and to all rates. If [Clear restrictions](#clear-restrictions) is called, specifying a restriction condition of resource category C1 but with no rate specified (this defaults to _all_ rates), then only Restriction B is cleared, not Restriction A.

## Time interval splicing

The time interval for a specified restriction does not need to correspond to an existing restriction in the system, instead the API uses a splicing algorithm to work out how to divide up any existing restrictions to meet the specified time interval. For example:

* An existing restriction in the system A applies from 5th January to 25th January. As usual, time intervals are inclusive, meaning that the time interval includes both the 5th January and the 25th January. If the [Clear restrictions](#clear-restrictions) operation is called, specifying a restriction time interval of 10th January to 20th January, i.e. within the original restriction A, then the time interval of restriction A is split into three separate intervals. The original restriction A is deleted, and in its place new restriction B is created for the period of time from 5th January to 9th January inclusive, and new restriction C is created for the period of time from 21st January to 25th January. Thus the period 10th January to 20th January has been cleared, but without affecting other time periods.

## Scope of restrictions

Only restrictions created through the API are affected by these operations, _not_ restrictions created by the user within **Mews Operations**. Similarly, if a user creates a restriction in **Mews Operations**, this will _not_ affect restrictions created through the API. User restrictions and API restrictions are independent.
