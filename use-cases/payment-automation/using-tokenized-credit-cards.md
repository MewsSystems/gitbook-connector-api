# Using tokenized credit cards

If the user interface of your solution involves the collection and storage of credit card details in a secure manner against the customer's profile in Mews, you can use [Add tokenized credit card](../../operations/creditcards.md#add-tokenized-credit-card), and then [Charge credit card](../../operations/creditcards.md#charge-credit-card) operations to securely take and post a payment into Mews.

The workflow mimics the result of a user manually [adding a new payment card](https://mews.force.com/s/article/add-a-new-payment-card?language=en_US) in Mews Operations and then [charging the card via the Mews payment gateway](https://help.mews.com/s/article/take-a-payment?language=en_US).

## Retrieving tokenized credit cards

To see if a user's credit card is already attached to their customer profile, call [Get all credit cards](../../operations/creditcards.md#get-all-credit-cards) to search for credit cards by the `CreditCardId` or `CustomerId`. The credit cards tokenized via the Mews PCI Proxy can be identified by the [`Kind` parameter](../../operations/creditcards.md#credit-card-kind), with the corresponding value being "Gateway".

## Adding a tokenized credit card

### 1. Retrieve PublicKey

As an integration partner, you will not need to set up your own PCI Proxy account. Rather, when automating payments via the Connector API, you should work with Mews' own account. To do so, call [Get configuration](../../operations/configuration.md#get-configuration) to obtain the `PublicKey` value, found within the [payment card storage](../../operations/configuration.md#payment-card-storage) object. This value will be used as the `merchantId` with PCI Proxy.

### 2. Set up Secure Fields (iframes) to collect cards

Refer to the PCI Proxy documentation on [collecting and storing cards](https://docs.pci-proxy.com/collect-and-store-cards/capture-iframes#3-retrieve-a-transaction-id) and implement steps 1 through 3. See [Examples](https://docs.pci-proxy.com/collect-and-store-cards/capture-iframes#examples) in the documentation for more help.
1. [Set up Secure Fields](https://docs.pci-proxy.com/collect-and-store-cards/capture-iframes#1-setup-secure-fields).
2. [Create payment form](https://docs.pci-proxy.com/collect-and-store-cards/capture-iframes#1-setup-secure-fields) to collect card number, CVV, and expiration date*.

*Note on expiration dates:* 

Though not required by PCI Proxy, credit card expiration date is listed as a mandatory parameter on the [Add tokenized credit card](../../operations/creditcards.md#add-tokenized-credit-card) endpoint so that it can be displayed within the customer profile in Mews. This can also be used as an additional validation method for the property to know if there is an expired card on file.

To handle this, we recommend that the payment form includes a field for users to input their credit card expiration date, which need not be sent to PCI Proxy, but should be cached, so that the information can be included in the [Add tokenized credit card](../../operations/creditcards.md#add-tokenized-credit-card) API request. 

3. [Retrieve a Transaction ID](https://docs.pci-proxy.com/collect-and-store-cards/capture-iframes#3-retrieve-a-transaction-id) using the `merchantId`. Take note of the `transactionId` in the response, which looks like a series of numbers (e.g. `201028230732590232`).

*Note:* [Step 4 - Obtain tokens](https://docs.pci-proxy.com/collect-and-store-cards/capture-iframes#4-obtain-tokens) is done by Mews’ backend. No action is required by the integration partner in this step.

### 3. Add the tokenized credit card to a customer profile in Mews

Add the tokenized credit card to a customer profile in Mews by calling [Add tokenized credit card](../../operations/creditcards.md#add-tokenized-credit-card). Enter the `transactionId` and obfuscated credit card details in the [credit card data](../../operations/creditcards.md#credit-card-data) object. Take note of the `CreditCardId` in the API response.

*Note:* `ObfuscatedNumber` should only contain at most the first six digits and last four digits of a credit card. Alternatively replacing the entire string value with 16 asterisks `*` is also acceptable.

The credit card will now be visible in the customer profile in Mews, under the __Payments tab > Credit cards__ section. 

*Note:* While customer profiles are shared across all properties in a chain, credit card details are not. 

## Charging the tokenized credit card

Now that you have the `CreditCardid`, you can use the [Charge credit card](../../operations/creditcards.md#charge-credit-card) endpoint to charge the customer. 

*Note:* The [Charge credit card](../../operations/creditcards.md#charge-credit-card) operation actually charges the customer's credit card, whereas the [Add credit card payment](../../operations/creditcards.md#add-credit-card-payment) operation does NOT. The latter simply records a credit card payment in Mews and does not trigger any additional action beyond Mews - suitable for when the customer's credit card has already been charged from your solution.

