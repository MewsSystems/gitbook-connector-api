# Using tokenized credit cards

If the user interface of your solution involves the collection and storage of credit card details in a secure manner against the customer's profile in Mews, you can use [Add tokenized credit card](../../operations/creditcards.md#add-tokenized-credit-card) and then [Charge credit card](../../operations/creditcards.md#charge-credit-card) to securely take and post a payment into Mews.
The workflow mimics the result of a user manually [adding a new payment card](https://mews.force.com/s/article/add-a-new-payment-card?language=en_US) in Mews Operations and then [charging the card via the Mews payment gateway](https://help.mews.com/s/article/take-a-payment?language=en_US).

## Retrieving tokenized credit cards

To see if a user's credit card is already attached to their customer profile, call [Get all credit cards](../../operations/creditcards.md#get-all-credit-cards) to search for credit cards by the `CreditCardId` or `CustomerId`. The credit cards tokenized via the Mews Payment Gateway (PCI Proxy) can be identified by the [`Credit card kind`](../../operations/creditcards.md#credit-card-kind) property, with the corresponding value being "Gateway".

## Adding a tokenized credit card

### 1. Retrieve PublicKey

As an integration partner, you will not need to set up your own Payment Gateway account. Rather, when automating payments via the Connector API, you should work with Mews' own account. To do so, call [Get configuration](../../operations/configuration.md#get-configuration) to obtain the `PublicKey` value, found within the [payment card storage](../../operations/configuration.md#payment-card-storage) object. This value will be used as the `merchantId` with the Mews Payment Gateway (PCI Proxy).

### 2. Set up the Secure Fields payment form to collect card data

Refer to the [PCI Proxy documentation on Secure Fields](https://docs.pci-proxy.com/docs/secure-fields) for collecting card number, CVV and expiration date\* through the Secure Fields payment form.
Implement Quick Start Step 1 [Set up your Payment Form](https://docs.pci-proxy.com/docs/secure-fields-quick-start) and follow the **Secure Fields Form** recipe. As part of this process, you will use the Mews `PublicKey` (obtained in the step above) as the `merchantId`.
Take note of `data.transactionId` in the response, which looks like a series of numbers (e.g. `201028230732590232`).
For further assistance, see [Integration Examples](https://docs.pci-proxy.com/docs/secure-fields-examples).
Note you do _not_ need to follow Step 2 [Obtain the tokens](https://docs.pci-proxy.com/docs/secure-fields-quick-start), this step is performed instead by the Mews back-end.

> **Expiration date:**
> Though not required by PCI Proxy, credit card expiration date is listed as a mandatory parameter on the [Add tokenized credit card](../../operations/creditcards.md#add-tokenized-credit-card) endpoint so that it can be displayed within the customer profile in Mews. This can also be used as an additional validation method for the property to know if there is an expired card on file.
> To handle this, we recommend that the payment form includes a field for users to input their credit card expiration date, which need not be sent to PCI Proxy, but should be cached, so that the information can be included in the [Add tokenized credit card](../../operations/creditcards.md#add-tokenized-credit-card) API request.

### 3. Add the tokenized credit card to a customer profile in Mews

Add the tokenized credit card to a customer profile in Mews by calling [Add tokenized credit card](../../operations/creditcards.md#add-tokenized-credit-card). Enter the `transactionId` and obfuscated credit card details in the [credit card data](../../operations/creditcards.md#credit-card-data) object. Take note of the `CreditCardId` in the API response.

> **Obfuscated number:**
> `ObfuscatedNumber` should only contain at most the first six digits and last four digits of a credit card. Alternatively replacing the entire string value with 16 asterisks `*` is also acceptable.

The credit card will now be visible in the customer profile in Mews, under the __Payments > Credit cards__ section.
Note that while customer profiles are shared across all properties in a chain, credit card details are not. 

## Charging the tokenized credit card

Now that you have the `CreditCardid`, you can use the [Charge credit card](../../operations/creditcards.md#charge-credit-card) endpoint to charge the customer. 

> **Charge credit card:**
> Note the [Charge credit card](../../operations/creditcards.md#charge-credit-card) operation actually charges the customer's credit card, whereas the [Add credit card payment](../../operations/payments.md#add-credit-card-payment) operation does NOT.
> The latter simply records a credit card payment in Mews and does not trigger any additional action beyond Mews - suitable for when the customer's credit card has already been charged from your solution.
