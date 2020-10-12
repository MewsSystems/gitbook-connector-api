## Housekeeping

A housekeeping integration pulls live information about the physical state of a space, allows the housekeeping staff to update it from the housekeeping software and pushes this data back into Mews. The sections below contain guidelines regarding the relevant endpoints used.

### Initial configuration

The integration must first retrieve all the spaces the property has configured in Mews using [Get all spaces](operations/enterprises.md#get-all-spaces). The response contains all relevant information needed to map the space configuration of the property in the external system. 

### Managing spaces 

To ensure all of the information is always synchronized between the two systems, the housekeeping integration monitors and manages any changes to the state of a space. Use the [Space event](websockets.md#space-event) websocket to receive real-time events whenever the [space state](operations/enterprises.md#space-state) is changed. Once a staff member has cleaned or inspected a room, the state can be updated in Mews using [Update space state](operations/enterprises.md#update-space-state).

Information about space blocks can be requested using [Get all space blocks](operations/enterprises.md#get-all-space-blocks). Housekeeping integrations can also manage blocks through [Add space block](operations/enterprises.md#add-space-block) and [Delete space blocks](operations/enterprises.md#delete-space-blocks).

If there is a use case for creating a task directly in Mews, this can be done using the [Add task](operations/enterprises.md#add-task) request. If a task should be assigned to a specific department, the unique identifiers required for this action can be retrieved using [Get all departments](operations/enterprises.md#get-all-departments). A list of existing tasks can be retrieved from Mews Commander using [Get all tasks](operations/enterprises.md#get-all-tasks).

### Additional information

The Mews Commander allows properties to configure when a space will be marked as `Dirty`, upon check-in or check-out, in their Stay service settings. They can also configure a specific housekeeping interval at which, if empty, the space will automatically turn `Dirty`. For example, if the field is set to two days, the space will automatically be changed after two days. Each unit represents a period of 24 hours, with automatic changes occurring between 04:00-05:00. The maximum amount of time for this interval is 7 days, after which the state will automatically change to `Dirty` to adhere to regulations for preventing Legionella.
