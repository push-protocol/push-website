---
description: Opt-in to a channel to start receiving notifications
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Opt-In and Opt-Out

:::danger
All SDK functions require passing the parameter **env** which should either pass **staging** or **prod** based on the demand. Passing anything else in this param might result in unexpected results.
:::

:::caution
Latest version of Ethers (v6) introduces some breaking changes, for best results use Ethers v5 (ethers@^5.6)
:::

## Introduction

To receive notifications, the user must opt-in to the channel. This is done only once and is gasless, the user only needs to sign a message.

To see all the supported channels on Push, go to [Push Protocol dapp](https://app.push.org/#/channels) and opt-in to your favorite protocol to receive notifications.

## Pre-requisite: Deriving the signer

```mdx-code-block
<Tabs
    defaultValue="frontend"
    values={[
        {label: 'When Using Frontend', value: 'frontend'},
        {label: 'When Using Backend', value:'backend'},
    ]}>
<TabItem value="frontend">
```

```typescript
// any other web3 ui lib is also acceptable
import { useWeb3React } from "@web3-react/core";
.
.
.
const { account, library, chainId } = useWeb3React();
const signer = library.getSigner(account);
```

```mdx-code-block
</TabItem>
<TabItem value="backend">
```

```typescript
const ethers = require('ethers');
const PK = 'your_channel_address_secret_key';
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Opt-in to a Channel

In the example below, the user `eip155:5:0x52f856A160733A860ae7DC98DC71061bE33A28b3` will opt-in to the channel `eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681` on the testnet environment (`staging`).

```typescript
await PushAPI.channels.subscribe({
  signer: _signer,
  channelAddress: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // channel address in CAIP
  userAddress: 'eip155:5:0x52f856A160733A860ae7DC98DC71061bE33A28b3', // user address in CAIP
  onSuccess: () => {
   console.log('opt in success');
  },
  onError: () => {
    console.error('opt in error');
  },
  env: 'staging'
})
```

#### Allowed Options (params with \* are mandatory)

| Param                    | Type     | Default | Remarks                            |
| ------------------------ | -------- | ------- | ---------------------------------- |
| signer\*                 | -        | -       | Signer object                      |
| channelAddress\*         | string   | -       | channel address (CAIP)             |
| userAddress\*            | string   | -       | user address (CAIP)                |
| verifyingContractAddress | string   | -       | Push communicator contract address |
| onSuccess                | function | -       | on success callback                |
| onError                  | function | -       | on error callback                  |
| env                      | string   | ‘prod’  | API env - ‘prod’, ‘staging’, ‘dev’ |

## **Opt-out to a channel**

If you want to stop receiving notifications from a channel, you have to opt-out.

```typescript
await PushAPI.channels.unsubscribe({
  signer: _signer,
  channelAddress: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // channel address in CAIP
  userAddress: 'eip155:5:0x52f856A160733A860ae7DC98DC71061bE33A28b3', // user address in CAIP
  onSuccess: () => {
   console.log('opt out success');
  },
  onError: () => {
    console.error('opt out error');
  },
  env: 'staging'
})
```

#### Allowed Options (params with \* are mandatory)

| Param                    | Type     | Default | Remarks                            |
| ------------------------ | -------- | ------- | ---------------------------------- |
| signer\*                 | -        | -       | Signer object                      |
| channelAddress\*         | string   | -       | channel address (CAIP)             |
| userAddress\*            | string   | -       | user address (CAIP)                |
| verifyingContractAddress | string   | -       | EPNS communicator contract address |
| onSuccess                | function | -       | on success callback                |
| onError                  | function | -       | on error callback                  |
| env                      | string   | ‘prod’  | API env - ‘prod’, ‘staging’, ‘dev  |
