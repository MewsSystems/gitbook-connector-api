## Access & Identity Management

Access & Identity systems integrating with Mews can store and retrieve **PIN codes** and **RFID tags** against a guest reservation.
These could, for example, be associated with a key card carried by the guest, or with a coded wristband or bracelet worn by the guest.
Systems that detect such cards or bracelets can then look up the guest details via the API to determine access permissions or for posting of charges to the guest account.

### Resource access token

The relevant API operations are based around the [`resource access token`](../operations/resourceaccesstokens.md#resource-access-token). It is this token that represents the PIN code or RFID tag and is stored against the reservation.
The resource access token grants access to specified resources or services for a specified period of time and with specified permissions.
The token has a `Value` attribute and a separate `SerialNumber` attribute, the latter could be used to store some associated entity like a key card or wristband which has meaning within the Access & Identity system.
`Permissions` are used to specify the scope of access, e.g. Room, Floor.

> **Terminology:** Note that a _resource access token_ is completely separate from and unrelated to the _access token_ used by client applications to access the Mews Connector API; and the word _resource_ is used here in the broadest sense and does not necessarily imply a _space_.

### API operations

| Operation or Endpoint | Description |
| :-- | :-- |
| [Get all resource access tokens](../operations/resourceaccesstokens.md#get-all-resource-access-tokens) | Returns all resource access tokens (may be filtered by resource access token, reservation or time interval) |
| [Add resource access tokens](../operations/resourceaccesstokens.md#add-resource-access-tokens) | Adds new resource access tokens with the specified data |
| [Update resource access tokens](../operations/resourceaccesstokens.md#update-resource-access-tokens) | Updates resource access token validity time intervals and permissions |
| [Delete resource access tokens](../operations/resourceaccesstokens.md#delete-resource-access-tokens) | Delete specified resource access tokens |
