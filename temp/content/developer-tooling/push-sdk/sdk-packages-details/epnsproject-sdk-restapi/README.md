---
description: This package gives access to Push Protocol backend APIs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CustomLinkCard from '@site/src/components/CustomLinkCard';

# @pushprotocol/restapi

:::caution
All SDK functions require passing the parameter **env** which should either pass **staging** or **prod** based on the demand. Passing anything else in this param might result in unexpected results.
:::

## Installation <a href="#installation" id="installation"></a>

```mdx-code-block
<Tabs
    defaultValue="npm"
    values={[
        {label: 'npm', value: 'npm'},
        {label: 'yarn', value: 'yarn'},
    ]}>
<TabItem value="npm">
```

```bash
npm install @pushprotocol/restapi@latest ethers
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn add @pushprotocol/restapi@latest ethers
```

```mdx-code-block
</TabItem>
</Tabs>
```

### I**mport in your file**

```typescript
import * as PushAPI from "@pushprotocol/restapi";
```

#### About generating the `signer` object for different platforms

When using SERVER-SIDE code:

```typescript
const ethers = require('ethers');
const PK = 'your_channel_address_secret_key';
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
```

When using in FRONT-END code:

```typescript
// any other web3 ui lib is also acceptable
import { useWeb3React } from "@web3-react/core";
.
.
.
const { account, library, chainId } = useWeb3React();
const signer = library.getSigner(account);
```

:::info
**Note on Addresses:**

PUSH SDK uses [**CAIP-10**](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) format but defaults to Ethereum address format.

CAIP-10 format is a way to identify multichain addresses. Any blockchain address becomes`namespace + “:” + chain_id + “:” + account_address`



**Example:**

For both Ethereum and Polygon, the namespace is `eip155` and the chain\_id is `1` and `5` respectively:

* Polygon mainnet:

`eip155:137:0x20E0e045F1baB5CD9284602bdf24D050Dc8CB719`

* Ethereum mainnet:

`eip155:1:0x20E0e045F1baB5CD9284602bdf24D050Dc8CB719`

For Goerli and Mumbai testnets, the namespace is `eip155` and the chain\_id is `5` and `80001` respectively:

* Goerli testnet:

`eip155:5:0x20E0e045F1baB5CD9284602bdf24D050Dc8CB719`

* Mumbai testnet:

`eip155:80001:0x20E0e045F1baB5CD9284602bdf24D050Dc8CB719`


In any of the `restapi` methods (unless explicitly stated otherwise) we accept either -

* [CAIP format](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md#test-cases): for any on-chain addresses _**We strongly recommend using this address format**_. (Example : `eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb`)
* ETH address format: only for backwards compatibility. (Example: `0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb`)
:::

## Features

The `@pushprotocol/restapi` package provides us with the following features:

### Notifications

* Get user notifications and spam notifications
* Get channel information
* Opt-in and opt-out to a channel
* Send notifications

### Chat

* Send messages to a wallet address
* Get messages
* Create user encryption keys
* Create group chat

Here below, you can find more information on the features described:

<CustomLinkCard text="Fetching User and Channel Details" link="./for-notification/fetching-user-channel-details"/>

<CustomLinkCard text="Opt-In and Opt-Out" link="./for-notification/opt-in-and-opt-out"/>

<CustomLinkCard text="Send Notifications" link="./for-notification/send-notifications"/>

<CustomLinkCard text="Broken link" link="./broken-reference"/>

<CustomLinkCard text="Broken link" link="./broken-reference"/>

<CustomLinkCard text="Notification Helper Utils" link="./for-notification/utils"/>
