## Reputation management

Reputation management systems provide valuable insight to obtain an understanding of performance relating to operation and service strengths and weaknesses. This understanding is captured via post-stay surveys and by monitoring social channels such as Tripadvisor.

### Retrieving Reservations

After a customer has checked out from a reservation, reputation management systems often send a survey through to a customer's email. The integration partner can request all checked-out reservations for a given period using [Get all reservations](../operations/reservations.md#get-all-reservations) with State set to `Processed`. For optimal API usage, ensure cascading time periods with short time frames (e.g. request every 4 hours for the previous 4 hour period). To receive real-time notifications that a reservation has been checked-out, partners should configure a [reservation event websocket](https://mews-systems.gitbook.io/connector-api/websockets#reservation-event).

### Updating Customer Profile

Upon a Reputation management system associating feedback with a customer the [Update customer](../operations/customers.md#update-customer) operation should be added to the customer profile in Mews. The customer classification type `Previous complaint` is one which should be used when negative feedback has been received. Further to this, keywords from the complaint and a url to the survey or Tripadvisor post can be added to the customer `notes`.

### Testing your integration

Once your integration is completed, all endpoints should be tested prior to initiating the [certification process](https://intercom.help/mews-systems/en/articles/4497819-connector-api-certification-what-to-expect) with the Mews Marketplace team. Testing your solution is done directly in the Connector API demo. You should use the credentials found in the [Authentication](../guidelines.md#authentication) section to sign in as an end-user. This allows you to fully understand how both systems will be used by the property and gives you additional information to ensure you provide a seamless and efficient onboarding experience for our hoteliers.
