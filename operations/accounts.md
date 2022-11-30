# Accounts

## Merge accounts

Merges two or more accounts of the same account type together. The given source accounts will be merged into the given target account and the merged account will keep the target account ID.

### Request

`[PlatformAddress]/api/connector/v1/accounts/merge`

```javascript
{
    "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
    "AccessToken": "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
    "Client": "Sample Client 1.0.0",
    "AccountMergeParameters" : [
        {
            "AccountType" : "Company",
            "SourceAccountIds" : 
            [ 
                "b0c10ced-34eb-44b4-92e8-af5b008f3fb4",
                "5176d000-bf17-40be-b140-9041d2b70eee"
            ],
            "TargetAccountId" : "51262225-8130-4320-8210-af5b008f64e5"
        },
        {
            "AccountType" : "Customer",
            "SourceAccountIds" :
                [
                    "7799f19a-c9c9-42bf-968f-a759e3ea1ea6",
                    "bb926ffe-5310-48bc-8202-6165fa3bdcad"
                ],
            "TargetAccountId" : "49b2abd4-df58-4f1d-bead-0fa6342f8a78"
        }
    ]
}
```

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `ClientToken` | string | required | Token identifying the client application. |
| `AccessToken` | string | required | Access token of the client application. |
| `Client` | string | required | Name and version of the client application. |
| `AccountMergeParameters` | array of [Account merge parameters](#account-merge-parameters) | required, max 1000 items | Accounts to be merged |

#### Account merge parameters

| Property | Type | Contract | Description |
| :-- | :-- | :-- | :-- |
| `AccountType` | string [Account type](#account-type)| required | Specifying types of accounts provided, ([Customer](../operations/customers.md#customer), [Company](../operations/companies.md#company)). |
| `SourceAccountIds` | array of string | required, max 1000 items | Unique identifiers of the source accounts ([Customer](../operations/customers.md#customer) or [Company](../operations/companies.md#company)). |
| `TargetAccountId` | string | required | Unique identifier of the target account ([Customer](../operations/customers.md#customer) or [Company](../operations/companies.md#company)). |

### Account type

* `Customer`
* `Company`
* ...

### Response

```javascript
{}
```
