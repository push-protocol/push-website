---
description: This section describes how to send a notification using the Push SDK.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Using Push SDK (Gasless)

:::info
Check out [**push-for-hackers/sdk-functionality**](https://github.com/ethereum-push-notification-service/push-for-hackers/tree/main/sdk-functionality) repo for code coverage of all SDK functions. Check out [**@pushprotocol/restapi**](https://www.npmjs.com/package/@pushprotocol/restapi) or [**@pushprotocol/socket**](https://www.npmjs.com/package/@pushprotocol/socket) for more examples.
:::

## Installation

Install the sdk `restapi` package and its peer dependencies in your app.

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

:::caution
_**Note**:_ If you wish to use ES6 Modules syntax, then inside `package.json` set **“type” to “module”.**
:::

## Import

```typescript
import * as PushAPI from "@pushprotocol/restapi";
```

## Sample Usage

In the code below, we'll send a notification to all subscribers of your channel, a broadcast notification. For different types of notifications and more examples, go to [this page](../../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-notification/send-notifications.md).

:::info
The `PKey` is the private key from the wallet you created a channel. The `channel address` is going to be the address of the wallet you created your channel.
:::

```typescript
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = "your_channel_address_secret_key"; // channel private key
const Pkey = `0x${PK}`;
const _signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `[SDK-TEST] notification TITLE:`,
        body: `[sdk-test] notification BODY`,
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
      channel: "eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681", // your channel address
      env: "staging",
    });
  } catch (err) {
    console.error("Error: ", err);
  }
};

sendNotification();
```

For sending different types of notifications, such as Targeted and Subset, and for more examples, go to the page below:

<CustomLinkCard text='Send Notifications' link='../../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-notification/send-notifications' />
