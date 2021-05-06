## Payment automation

### Using the [Add tokenized credit card](../operations/finance#add-tokenized-credit-card) operation

#### Retrieve PublicKey
As an integration partner, you will not need to set up your own PCI Proxy account. Rather, when automating payments via the Connector API, you should work with Mews' own account. To do so, call [Get configuration](../operations/configuration#get-configuration) to obtain the `PublicKey` value, found within the `PaymentCardStorage` object. 
