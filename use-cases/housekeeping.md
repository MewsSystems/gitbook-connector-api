# Housekeeping

A Housekeeping integration pulls live information about the physical state of a resource, allows the housekeeping staff to update it from the housekeeping software and pushes this data back into Mews. The sections below contain guidelines regarding the relevant endpoints used.

### Initial configuration

The integration must first retrieve all the resources the property has configured in Mews using [Get all resources](../operations/resources.md#get-all-resources). The response contains all relevant information needed to map the physical configuration of the property in the external system. 

### Managing resources 

To ensure all of the information is always synchronized between the two systems, the housekeeping integration monitors and manages any changes to the state of a resource.
Rather than polling the Mews API for state changes, you can subscribe to notification events using [Webhooks](../webhooks/README.md) or [WebSockets](../websockets/README.md).
Both methods support changes to resources. Don't know which one to use? See [Ways to communicate](../guidelines/communicate.md).
Once a staff member has cleaned or inspected a room, the state can be updated in Mews using [Update resources](../operations/resources.md#update-resources) by specifying the new state of the resource. 

Information about resource blocks can be requested using [Get all resource blocks](../operations/resourceblocks.md#get-all-resource-blocks). Housekeeping integrations can also manage blocks through [Add resource block](../operations/resourceblocks.md#add-resource-block) and [Delete resource blocks](../operations/resourceblocks.md#delete-resource-blocks).

If there is a use case for creating a task directly in Mews, this can be done using the [Add task](../operations/tasks.md#add-task) operation.
If a task should be assigned to a specific department, the unique identifiers required for this action can be retrieved using [Get all departments](../operations/departments.md#get-all-departments). A list of existing tasks can be retrieved from Mews using [Get all tasks](../operations/tasks.md#get-all-tasks).

### Additional information

Mews allows properties to configure when a space will be marked as `Dirty`, upon check-in or check-out, in their Stay service settings. They can also configure a specific housekeeping interval at which, if empty, the space will automatically turn `Dirty`. For example, if the field is set to two days, the space will automatically be changed after two days. Each unit represents a period of 24 hours, with automatic changes occurring between 04:00-05:00. The maximum amount of time for this interval is 7 days, after which the state will automatically change to `Dirty` to adhere to regulations for preventing Legionella.

### Testing your integration

Please ensure you follow our general [Guidelines](../guidelines/README.md) for testing integrations. In addition to this, and specific to housekeeping integrations:

* Using the demo credentials, you can run the [housekeeping report](https://help.mews.com/s/article/space-status-report?language=en_US) to cross-check whether the integration is working correctly.

### Additional Help for working with the demo environment

- [Out-of-service and out-of-order](https://help.mews.com/s/article/what-are-house-use-out-of-service-and-out-of-order-features?language=en_US)
- [How to set up a stay service](https://help.mews.com/s/article/set-up-a-bookable-service?language=en_US)
