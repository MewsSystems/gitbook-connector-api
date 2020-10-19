## Housekeeping

A housekeeping integration pulls live information about the physical state of a resource, allows the housekeeping staff to update it from the housekeeping software and pushes this data back into Mews. The sections below contain guidelines regarding the relevant endpoints used.

### Initial configuration

The integration must first retrieve all the resources the property has configured in Mews using [Get all resources](../operations/enterprises.md#get-all-resources). The response contains all relevant information needed to map the physical configuration of the property in the external system. 

### Managing resources 

To ensure all of the information is always synchronized between the two systems, the housekeeping integration monitors and manages any changes to the state of a resource. Use the [Resource event](../websockets.md#resource-event) websocket to receive real-time events whenever the [resource state](../operations/enterprises.md#resource-state) is changed. Once a staff member has cleaned or inspected a room, the state can be updated in Mews using [Update resources](../operations/enterprises.md#update-resources) by specifying the new state of the resource. 

Information about resource blocks can be requested using [Get all resource blocks](../operations/enterprises.md#get-all-resource-blocks). Housekeeping integrations can also manage blocks through [Add resource block](../operations/enterprises.md#add-resource-block) and [Delete resource blocks](../operations/enterprises.md#delete-resource-blocks). Learn more about the type of resource blocks available in Mews via [this article](https://intercom.help/mews-systems/en/articles/4374262-house-use-out-of-service-and-out-of-order).

If there is a use case for creating a task directly in Mews, this can be done using the [Add task](../operations/enterprises.md#add-task) request. If a task should be assigned to a specific department, the unique identifiers required for this action can be retrieved using [Get all departments](../operations/enterprises.md#get-all-departments). A list of existing tasks can be retrieved from Mews using [Get all tasks](../operations/enterprises.md#get-all-tasks).

### Additional information

Mews allows properties to configure when a space will be marked as `Dirty`, upon check-in or check-out, in their [Stay service settings](https://intercom.help/mews-systems/en/articles/4244328-set-up-your-stay-service). They can also configure a specific housekeeping interval at which, if empty, the space will automatically turn `Dirty`. For example, if the field is set to two days, the space will automatically be changed after two days. Each unit represents a period of 24 hours, with automatic changes occurring between 04:00-05:00. The maximum amount of time for this interval is 7 days, after which the state will automatically change to `Dirty` to adhere to regulations for preventing Legionella.

### Testing your integration

Once your integration is completed, all endpoints should be tested prior to initiating the [certification process](https://intercom.help/mews-systems/en/articles/4497819-connector-api-certification-what-to-expect) with the Mews Marketplace team. Testing your solution is done directly in the Connector API demo. You should use the credentials found in the [Authentication](../guidelines.md#authentication) section to sign in as an end-user. This allows you to fully understand how both systems will be used by the property and gives you additional information to ensure you provide a seamless and efficient onboarding experience for our hoteliers. 

Using these credentials, you can run the [housekeeping report](https://help.mews.com/en/articles/4245937-space-status-report) to cross-check whether you are correctly processing the information on your side.
