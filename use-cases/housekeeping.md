# Housekeeping

A Housekeeping integration pulls live information about the physical state of rooms and other space resources, allows the housekeeping staff to update the state from the Housekeeping system and pushes this data back into Mews.

## Initial configuration

The integration must first retrieve all the resources the property has configured in Mews using [Get all resources](../operations/resources.md#get-all-resources). The response contains all relevant information needed to map the physical configuration of the property in the external system. 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get the list of rooms and spaces | [Get all resources](../operations/resources.md#get-all-resources) |

> **Terminology:** For an explanation of terms like `room`, `space` and `resource`, see the [Mews Glossary for Open API users](https://help.mews.com/s/article/Mews-Glossary-for-Open-API-users?language=en_US).

## Managing resources 

To ensure all of the information is synchronized between the two systems, a Housekeeping integration can monitor changes to the state of a resource. Rather than polling the API for state changes, you can subscribe to notification events using [Webhooks](../webhooks/README.md) or [WebSockets](../websockets/README.md). Both methods support changes to resources. Don't know which one to use? See [Ways to communicate](../guidelines/communicate.md).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to listen for changes to reservations | [General Webhooks](../webhooks/wh-general.md) \(`ServiceOrderUpdated` event\) or [WebSockets](../websockets/README.md) \(`Reservation` event\) |
| How to get reservation and customer details | [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2023-06-06) |

Once a staff member has cleaned or inspected a room, the state can be updated in Mews using [Update resources](../operations/resources.md#update-resources), specifying the new state of the resource. 

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to update the state of a resource | [Update resources](../operations/resources.md#update-resources) |

Resource blocks are blocks of rooms or resources set to 'out of order' or 'internal use'.
Information about resource blocks can be requested using [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks). Housekeeping integrations can also manage blocks through [Add resource block](../operations/resourceblocks.md#add-resource-block) and [Delete resource blocks](../operations/resourceblocks.md#delete-resource-blocks).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to get information about resource blocks | [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks) |
| How to add a resource block | [Add resource block](../operations/resourceblocks.md#add-resource-block) |
| How to delete resource blocks | [Delete resource blocks](../operations/resourceblocks.md#delete-resource-blocks) |

## Staff tasks

If you need to create a task directly in Mews, this can be done using [Add task](../operations/tasks.md#add-task). If a task should be assigned to a specific department, the unique identifiers required for this action can be retrieved using [Get all departments](../operations/departments.md#get-all-departments). A list of existing tasks can be retrieved from Mews using [Get all tasks](../operations/tasks.md#get-all-tasks).

| <div style="width:350px">'How to' use case</div> | API Operations |
| :-- | :-- |
| How to add a staff task | [Add task](../operations/tasks.md#add-task) |
| How to get information about departments | [Get all departments](../operations/departments.md#get-all-departments) |
| How to get the list of staff tasks | [Get all tasks](../operations/tasks.md#get-all-tasks) |

## Dirty status

Mews allows properties to configure when a space will be marked as `Dirty`, upon check-in or check-out, in their Stay service settings. They can also configure a specific housekeeping time interval after which, if a space is vacant, it will automatically change state to `Dirty`. For example, if the field is set to two days, the space will automatically become `Dirty` after two days. Each unit represents a period of 24 hours, with automatic changes occurring between 04:00 and 05:00. The maximum amount of time for this time interval is 7 days, after which the state will automatically change to `Dirty` to adhere to regulations preventing Legionella.

## Testing your integration

Please ensure you follow our general [guidelines](../guidelines/README.md) for testing integrations. In addition to this, using the [demo environment](../guidelines/environments.md) credentials, you can run the [Space Status Report](https://help.mews.com/s/article/space-status-report?language=en_US) \(housekeeping report\) to cross-check if the integration is working correctly.

## Additional help for working with the demo environment

> **Help Guides**:
> * [Out-of-service and out-of-order](https://help.mews.com/s/article/what-are-house-use-out-of-service-and-out-of-order-features?language=en_US)
> * [How to set up a stay service](https://help.mews.com/s/article/set-up-a-bookable-service?language=en_US)
