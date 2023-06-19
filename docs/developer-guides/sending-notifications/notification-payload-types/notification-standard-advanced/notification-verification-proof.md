---
description: Imperative details about verification proof parameter in notification payload
---

import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Notification Verification Proof

Verification Proof is the outermost composable block that is sent along with the notification to help the network validate _the notification sender, the chain from which the notification is sent, and the content of the notification along with any other validation that might be required_.

Verification proofs differ based on the platform from which they are sent. For instance, _**smart contracts verification proof can be validated**_** on-chain** and smart contract-based notifications will usually carry transaction hash proofs, while _**off-chain / gasless notifications usually carry eip712 proofs**_, though they are capable of carrying smart contract verification proof as well which makes it composable.

## Specifications&#x20;

| verificationProof                               | Definition                                                                                             | Proof of verification                                                                                                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eip155:chainId:txHash::uid::optionaluid         | Verification proof generated from transaction hash of EPNSComm smart contracts on Ethereum or Polygon. | The type can be proven by on-chain activity                                                                                                                                                  |
| eip712v1:signature::uid::optionaluid            | Verification proof generated from off-chain EIP-712 signing of payload                                 | The type is proven by verifying the signature of eip712.                                                                                                                                     |
| eip712v2:signature::uid::optionaluid            | Verification proof generated from off-chain EIP-712 signing of payload                                 | The type is proven by verifying the signature of eip712                                                                                                                                      |
| thegraph:graphid+notifcounter::uid::optionaluid | Verification proof generated from any subgraph                                                         | The type is proven by validating if the subgraph is attached to the channel and then the counter id is used to pick the message and compare the payload with the payload stored on the graph |

:::info
**Note**:- __ _::**uid**:: is an optional delimiter which if present along with **optionaluid** allows the proof to be uniquely different._
:::

#### Understanding verificationProofs

1. **`eip155:chainId:txHash::uid::optionaluid`** - This signifies the on-chain verification. Currently, Ethereum and Polygon are supported networks and it can be verified by resolving the transaction hash from the respective chains and making sure that identity is present in the block.&#x20;
2. **`eip712v1`** - This signifies the verification from the off-chain, the verification is done through an EIP-712-based signature.&#x20;

:::caution
**Note**: _eip-712v1 has a limitation to support only completed old payloads which include all the parameters of the payload which are part of notification, data, and recipients._

_As identity formats like 0,1 and 3 have single string payload, only identity 2 is compatible with eip-712v1._

_To overcome this limitation eip-712v2 is identity-independent._
:::

3. **`eip712v2`** - eip712v2:\< Proof >, it contains a payload that is future compatible. It means the payload can be dynamic and can be extended for future reference.

4. **`thegraph`** - Notification can be triggered through a subgraph as well as mentioned in the subgraph section. 👇

<CustomLinkCard text="Using Subgraph (Gasless)" link="../../using-subgraph-gasless"/>

&#x20;They need to call the `addSubgraph` function from Push Core Contract to add the subgraph. The Push Node will pick up the same and verification proof for this consists of:

* **`GraphId`** - This will be the id of subgraph. It is usually represented as `githubid/subgraph name` e.g - push/pushsubgraph.
* **`notification number`**`[counter]` - It will keep the count of Notifications and will process in a successive manner
* **`::uid::optionaluid`** - **::uid** is an optional delimiter which if present along with **optionaluid** allows the proof to be uniquely different.

## Examples of Verification Proofs

### Transaction Based (eip155:....)

This signifies the verification from the on-chain, currently, Ethereum and Polygon are supported networks and it can be verified by resolving the transaction hash from the respective chains and making sure that identity is present in the block.

1. **For Identity 0**

```jsx
{
    "verificationProof":"eip155:<chainId>:<TX-Hash>",
    "channel": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "recipient": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "source": "ETH_TEST_GOERLI or POLYGON_TEST_MUMBAI or ETH_MAINNET"
    "identity": "0+<Notification-Type>+<Title>+<body>"
}
```

**2. For Identity 1**

```jsx
{
    "verificationProof":"eip155:<chainId>:<TX-Hash>",
    "channel": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "recipient": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "source": "ETH_TEST_GOERLI or POLYGON_TEST_MUMBAI or ETH_MAINNET"
    "identity": "1+<IPFS-HASH>"
}
```

**3. For Identity 2**

```jsx
{
    "verificationProof":"eip155:<chainId>:<TX-Hash>",
    "channel": "eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681",
    "recipient": "eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681",
    "source": "ETH_TEST_GOERLI or POLYGON_TEST_MUMBAI or ETH_MAINNET",
    "identity": "2+<Payload-in-form-of-string>",
}
```

**3. For Identity 3**

```jsx
{
    "verificationProof":"eip155:<chainId>:<TX-Hash>",
    "channel": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "recipient": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "source": "THE_GRAPH",
    "identity": "3+graph:<subgraph-id>+<notification number>"
}
```

### EIP-712

This signifies the verification from the off-chain, the verification is done through an EIP-712-based signature.

> EIP-712v1 - It contains a fully loaded old payload. This is present to provide backward compatibility.

1. **eip-712v1** has a limitation to support only the completed old payload which includes all the parameters of the payload which are part of notification, data, and recipients. As identity formats like 0,1 and 3 have single string payload, only identity 2 is compatible with eip-712v1. To overcome this limitation eip-712v2 is identity independent.

```jsx
{
    "channel": "0x69e666767Ba3a661369e1e2F572EdE7ADC926029",
    "recipient": "0x69e666767Ba3a661369e1e2F572EdE7ADC926029",
    "signature": "<Signature generated using eip712>",
    "deployedContract": "0x99047d328496C14016222a998564B334A4A5723f",
    "chainId": "42",
    "payload": {
        "data": {
            "acta": "",
            "aimg": "",
            "amsg": "Current BTC price is - 47,785.10USD",
            "asub": "",
            "type": "1",
            "secret": ""
        }
    },
    "type": "1",
    "op": "write"
}
```

2\. **EIP-712v2 - eip712v2:\< Proof >**, it contains a payload that is future compatible. It means the payload can be dynamic and can be extended for future reference.

```jsx
{
    "verificationProof":"eip712v2:<Proof>",
    "channel": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "recipient": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
	"source": "ETH_TEST_GOERLI or POLYGON_TEST_MUMBAI or ETH_MAINNET",
    "identity": "0+1+Test Title+Test Body"
}
```

```jsx
{
    "verificationProof":"eip712v2:<Proof>",
    "channel": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "recipient": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
	"source": "ETH_TEST_GOERLI or POLYGON_TEST_MUMBAI or ETH_MAINNET",
    "identity": "1+bafkreicuttr5gpbyzyn6cyapxctlr7dk2g6fnydqxy6lps424mcjcn73we"
}
```

```jsx
{
    "verificationProof":"eip712v2:<Proof>",
    "channel": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
    "recipient": "eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681",
	"source": "THE_GRAPH",
    "identity": "3+graph:<subgraph-id>+<notification number>"
}
```

```jsx
{
    "verificationProof": "eip712v1:<Proof>",
    "channel": "eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681",
    "recipient": "eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681",
	"source": "ETH_TEST_GOERLI or POLYGON_TEST_MUMBAI or ETH_MAINNET",
    "identity": "2+{\\"notification\\":{\\"title\\":\\"TEST Title\\",\\"body\\":\\"Test Body\\"},\\"data\\":{\\"acta\\":\\"\\",\\"aimg\\":\\"\\",\\"amsg\\":\\"Test Message\\",\\"asub\\":\\"\\",\\"type\\":\\"3\\",\\"etime\\":\\"\\",\\"hidden\\":\\"\\"}}",
}
```

### The Graph

* `The Graph` - Notification can be triggered through a subgraph. They need to call `addSubgraph` function from Push Core Contract to add the subgraph. The Push Node will pick up the same, verification proof of the same consist of -
* `GraphId` - This will be the id of subgraph. It is usually represented as `githubid/subgraph name` e.g - push/pushsubgraph.
* `notification number[counter]` - It will keep the count of Notifications and will process in a successive manner

```jsx
{
    "verificationProof":`graph:<subgraph-id>+<notification number>`,
    "channel": "eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681",
    "recipient": "eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681",
    "source":'THE_GRAPH',
    "identity": `3+graph:<subgraph-id>+<notification number>`,
}
```
