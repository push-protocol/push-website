---
description: Send gasless notifications to wallet addresses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Send Notifications

:::danger
All SDK functions require passing the parameter **env** which should either pass **staging** or **prod** based on the demand. Passing anything else in this param might result in unexpected results.
:::

:::caution
Latest version of Ethers (v6) introduces some breaking changes, for best results use Ethers v5 (ethers@^5.6)
:::

## Introduction

Once you have created a channel on Push, you can send notifications to your subscribers. There are 3 types of notifications:

* **Broadcast**: Send notifications to all the subscribers of your channel
* **Targeted**: Send notification to only one subscriber
* **Subset**: Send notifications to an array of subscribers

## **Sending Notification**

```typescript
async function sendNotification(options: {
  senderType?: 0 | 1;
  signer: any;
  type: NOTIFICATION_TYPE;
  identityType: IDENTITY_TYPE;
  notification?: {
    title: string;
    body: string;
  };
  payload?: {
    sectype?: string;
    title: string;
    body: string;
    cta: string;
    img: string;
    metadata?: any;
    additionalMeta?: any;
  };
  recipients?: string | string[]; // CAIP or plain ETH
  channel: string; // CAIP or plain ETH
  expiry?: number;
  hidden?: boolean;
  graph?: {
    id: string;
    counter: number;
  };
  ipfsHash?: string;
  env?: ENV;
  chatId?: string;
  pgpPrivateKey?: string;
})
```

#### Allowed Options (params with \* are mandatory)

| Param                | Type                | Default | Remarks                                                                                                                                           |
| -------------------- | ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| signer\*             | -                   | -       | Signer object                                                                                                                                     |
| channel\*            | string              | -       | channel address (CAIP)                                                                                                                            |
| type\*               | number              | -       | <p>Notification Type<br/>Target = 3 (send to 1 address),<br/>Subset = 4 (send to 1 or more addresses),<br/>Broadcast = 1 (send to all addresses)</p> |
| identityType\*       | number              | -       | <p>Identity Type<br/>Minimal = 0,<br/>IPFS = 1,<br/>Direct Payload = 2,<br/>Subgraph = 3 }</p>                                                        |
| recipients\*         | string or string\[] | -       | <p>for Notification Type = Target it is 1 address,<br/>for Notification Type = Subset, Broadcast it is an array of addresses (CAIP)</p>            |
| notification.title\* | string              | -       | Push Notification Title (not required for identityType IPFS, Subgraph)                                                                            |
| notification.body\*  | string              | -       | Push Notification Body(not required for identityType IPFS, Subgraph)                                                                              |
| payload.title        | string              | -       | Notification Title(not required for identityType IPFS, Subgraph)                                                                                  |
| payload.body         | string              | -       | Notification Body(not required for identityType IPFS, Subgraph)                                                                                   |
| payload.cta          | string              | -       | Notification Call To Action url(not required for identityType IPFS, Subgraph)                                                                     |
| payload.img          | string              | -       | Notification Media url(not required for identityType IPFS, Subgraph)                                                                              |
| payload.sectype      | string              | -       | If Secret Notification then pass(not required for identityType IPFS, Subgraph)                                                                    |
| graph.id             | string              | -       | graph id, required only if the identityType is 3                                                                                                  |
| graph.counter        | string              | -       | graph counter, required only if the identityType is 3                                                                                             |
| ipfsHash             | string              | -       | ipfsHash, required only if the identityType is 1                                                                                                  |
| expiry               | number              | -       | (optional) epoch value if the notification has an expiry                                                                                          |
| hidden               | boolean             | false   | (optional) true if we want to hide the notification                                                                                               |
| env                  | string              | ‘prod’  | API env - ‘prod’, ‘staging’                                                                                                                       |

1. Requirements before using SDK calls, derive the `signer`

```mdx-code-block
<Tabs
    defaultValue="frontend"
    values={[
        {label: 'When Using Frontend', value: 'frontend'},
        {label: 'When Using Backend', value: 'backend'},
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

2. Call the appropriate SDK function

```mdx-code-block
<Tabs
    defaultValue="direct"
    values={[
        {label: 'Direct Payload', value: 'direct'},
        {label: 'IPFS Payload', value: 'ipfs'},
        {label: 'Minimal Payload', value: 'minimal'},
        {label: 'Subgraph Payload', value: 'subgraph'},
    ]}>
<TabItem value="direct">

### Targeted Notification

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 3, // target
  identityType: 2, // direct payload
  notification: {
    title: `[SDK-TEST] notification TITLE:`,
    body: `[sdk-test] notification BODY`
  },
  payload: {
    title: `[sdk-test] payload title`,
    body: `sample msg body`,
    cta: '',
    img: ''
  },
  recipients: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // recipient address
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```

###

### Subset Notification

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 4, // subset
  identityType: 2, // direct payload
  notification: {
    title: `[SDK-TEST] notification TITLE:`,
    body: `[sdk-test] notification BODY`
  },
  payload: {
    title: `[sdk-test] payload title`,
    body: `sample msg body`,
    cta: '',
    img: ''
  },
  recipients: ['eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', 'eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1'], // recipients addresses
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```



### **Broadcast Notification**

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 1, // broadcast
  identityType: 2, // direct payload
  notification: {
    title: `[SDK-TEST] notification TITLE:`,
    body: `[sdk-test] notification BODY`
  },
  payload: {
    title: `[sdk-test] payload title`,
    body: `sample msg body`,
    cta: '',
    img: ''
  },
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```
</TabItem>
<TabItem value="ipfs">

### Targeted Notification

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 3, // target
  identityType: 1, // ipfs payload
  ipfsHash: 'bafkreicuttr5gpbyzyn6cyapxctlr7dk2g6fnydqxy6lps424mcjcn73we', // IPFS hash of the payload
  recipients: 'eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1', // recipient address
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```



### Subset Notification

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 4, // subset
  identityType: 1, // ipfs payload
  ipfsHash: 'bafkreicuttr5gpbyzyn6cyapxctlr7dk2g6fnydqxy6lps424mcjcn73we', // IPFS hash of the payload
  recipients: ['eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1', 'eip155:5:0x52f856A160733A860ae7DC98DC71061bE33A28b3'], // recipients addresses
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```

****

### **Broadcast Notification**

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 1, // broadcast
  identityType: 1, // direct payload
  ipfsHash: 'bafkreicuttr5gpbyzyn6cyapxctlr7dk2g6fnydqxy6lps424mcjcn73we', // IPFS hash of the payload
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```
</TabItem>
<TabItem value="minimal">

### Targeted Notification

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 3, // target
  identityType: 0, // Minimal payload
  notification: {
    title: `[SDK-TEST] notification TITLE:`,
    body: `[sdk-test] notification BODY`
  },
  payload: {
    title: `[sdk-test] payload title`,
    body: `sample msg body`,
    cta: '',
    img: ''
  },
  recipients: 'eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1', // recipient address
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```



### Subset Notification

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 4, // subset
  identityType: 0, // Minimal payload
  notification: {
    title: `[SDK-TEST] notification TITLE:`,
    body: `[sdk-test] notification BODY`
  },
  payload: {
    title: `[sdk-test] payload title`,
    body: `sample msg body`,
    cta: '',
    img: ''
  },
  recipients: ['eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1', 'eip155:5:0x52f856A160733A860ae7DC98DC71061bE33A28b3'], // recipients address
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```

****

### **Broadcast Notification**

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 1, // broadcast
  identityType: 0, // Minimal payload
  notification: {
    title: `[SDK-TEST] notification TITLE:`,
    body: `[sdk-test] notification BODY`
  },
  payload: {
    title: `[sdk-test] payload title`,
    body: `sample msg body`,
    cta: '',
    img: ''
  },
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```
</TabItem>
<TabItem value="subgraph">

:::info
Ensure that the channel has the `graphId` being provided
:::

### Targeted Notification

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 3, // target
  identityType: 3, // Subgraph payload
  graph: {
    id: '_your_graph_id',
    counter: 3
  },
  recipients: 'eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1', // recipient address
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```



### Subset Notification

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 4, // subset
  identityType: 3, // graph payload
  graph: {
    id: '_your_graph_id',
    counter: 3
  },
  recipients: ['eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1', 'eip155:5:0x52f856A160733A860ae7DC98DC71061bE33A28b3'], // recipients addresses
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```

****

### **Broadcast Notification**

```typescript
const apiResponse = await PushAPI.payloads.sendNotification({
  signer: _signer,
  type: 1, // broadcast
  identityType: 3, // graph payload
  graph: {
    id: '_your_graph_id',
    counter: 3
  },
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
  env: 'staging'
});
```
</TabItem>
</Tabs>


