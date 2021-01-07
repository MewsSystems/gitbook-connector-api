## Access Control 

Solutions such as door locks, mobile keys, and building management systems require a state of reservation and resources in real time.

In the example of a door lock and/or mobile key integration, a key may not be issued to a guest until their reservation has been checked-in in Mews. To avoid polling for updated reservations, a [Reservation Websocket](../websockets.md#reservation-event) should be used. 

### Initial set up

Use [Get all resources](../operations/enterprises.md#get-all-resources) to retrieve a list of resources, its corresponding resource categories, and any relevant parent-child resource relationships (can be used for configurations such as beds in a dorm, or rooms in an apartment). Use this information of the resource configuration in Mews to and map them to the corresponding door/room/lock in your system. The reservation websocket event will contain `AssignedResourceId`, which can be used to find the corresponding room number.  

#### Issuing physical keys and configuring key encoders
If your solution manages the issuance of physical key cards (whether in combination with mobile keys or not), each property using your solution will need to configure their key cutter devices in an additional integration in Mews and link it to your integration's **Connected devices**.

Refer to the [Device integrations](/use-cases/device-integrations.md) use case before continuing through this use case. Specifically, see **Adding a new device**, **Key cutter commands**, and **Testing your integration**.

#### Mobile or digitally-issued keys
If your solution does not issue any physical keys, and only generates keys/codes based on reservation events, continue through this use case. 

### General workflow 

After receiving a websocket event, use [Get all reservations](../operations/reservations.md#get-all-reservations) to retrieve information about the reservation and customer(s) if the websocket event fits your criteria. Include `ReservationIds` in the request body to retrieve more information about the reservation and `Customers` under `Extent` if you wish to retrieve information such as contact details (phone number, email address), as well as customer classification, if any. 

Depending on the workflow for your system, the information can be retrieved at any point during a guest's stay in order to send mobile keys to the customer. You should compare new websocket events with previously received ones for the same reservation to determine the changes made to a reservation (e.g. room moves, arrival/departure date changes). In case two websockets are the same, use [Get all reservations](../operations/reservations.md#get-all-reservations) to retrieve more information about the reservation.

See below for common usage scenarios.

### Common reservation event scenarios

#### Reservation creation

When a reservation has been created, your system will receive a reservation websocket event (state can be Confirmed, Optional, or Enquired). Use the [Get all reservations](../operations/reservations.md#get-all-reservations) operation to retrieve further information about the reservation and customer(s), such as contact information. If the reservation was made for two persons to be staying in one resource, usually only the reservation owner will be listed as a companion in the reservation at this point in time.  
#### Companions added to/removed from a reservation 

Companions may be added to or removed from a reservation either before or after a check-in event. This will trigger a websocket event but not a change in reservation state (e.g. state will be “Started” if after check in; “Confirmed” or other before check in). Use the [Get all reservations](../operations/reservations.md#get-all-reservations) operation to retrieve the most recently updated information about the reservation and customers. 

Examples of events that will trigger a websocket notification:
- Adding a companion to a reservation
- Changing the owner of reservation 
- Removing a companion from a reservation 

For more information about companions and reservation ownership, refer to our help guide on [adding a companion to the reservation][2] in Mews.

#### Room move

A reservation can be unlocked and assigned to a different resource before or after check-in. The websocket event will contain a new `AssignedResourceId`. Compare the unique Id in this field against previous reservation websocket events for the same reservation to determine whether a room move event has taken place (i.e. AssignedResourceId has been changed). 

For more information about room moves outside of a reservation's requested resource category, refer to the help guide [How to upgrade and downgrade a reservation][3].

#### Check in

A reservation check-in event is represented by the state `Started` in the reservation websocket event. If a reservation was checked in earlier than the stated arrival time, the system will automatically update the arrival time to the time that the reservation was actually checked in (e.g. 10:30, if the normal check-in time is 11:00). There may be additional companions added to the reservation before check-in (e.g. if the reservation was for two persons), use the Get all reservations operation to retrieve more information about the reservation and all customers staying in the assigned resource.  

#### Extended or shortened reservations  

A reservation can be extended or shortened before or after check-in. The websocket event triggered will contain the new `StartUtc` and `EndUtc`. Compare the information received with previous websocket events for the same reservation to identify the date time changes.  

For more information, refer to the help guide [How to extend a reservation][4].

#### Reservation split
In the scenario where a customer is upgraded to a different room for a latter part of his/her stay at the hotel, the reservation would be split - shortens original reservation and creates a new reservation for the second half of the stay. 

Currently reservation splits can only be done after a reservation has been checked-in in Mews. This action will trigger two reservation websocket events simultaneously, each representing one reservation. The first half of the original reservation can be identified with the original reservation id, with the reservation state “Started”. The second half of the original reservation will be given a new `ReservationId`, with the reservation state “Confirmed”. If the second reservation is assigned to a different resource, another websocket event will be triggered - see **Room move** section above. 

You can also identify the split reservations by using common factors such as `GroupIds` and/or `CustomerIds` in a [Get all reservations](../operations/reservations.md#get-all-reservations) search.

For more information, refer to our help guide on [how to split a reservation][1] in Mews.

#### Undo check-in

In the event that a reservation check-in has been undone, a websocket event will be triggered. Where the checked-in reservation state was represented by “Started”, the action to undo a check-in will return the reservation state to “Confirmed”. Compare with previous reservation websocket events to track changes.  

#### Check out 

When a reservation is checked out, the websocket event triggered will contain the new reservation state “Processed”. In the case where a reservation has been checked out earlier (e.g. at 09:43) than the set departure time (e.g. 11:00), the EndUtc in the websocket event will display the time at which the reservation was checked out, instead of the set departure time.


[1]: https://help.mews.com/en/articles/4245552-split-a-reservation
[2]: https://help.mews.com/en/articles/4397097-add-a-companion-to-the-reservation
[3]: https://help.mews.com/en/articles/4339329-how-to-upgrade-and-downgrade-a-reservation
[4]: https://help.mews.com/en/articles/4343196-how-do-i-extend-a-reservation
