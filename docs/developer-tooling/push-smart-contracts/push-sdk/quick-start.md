---
description: A super quick guide to get you started with Push SDK
---

# Quick Start

Now that you have a basic understanding of what Push SDK is, let's go through an absolutely easy procedure of how to set it up and fetch notifications from an address.

## Installation and Set-Up

Let's start by creating a new project

```bash
mkdir sdk-quickstart
cd sdk-quickstart
npm init -y
```

> _**Note**:_ If you wish to use ES6 Modules syntax, then inside package.json set **“type” to “module”.**

Install the Push SDK and `ethers`

```bash
npm install @pushprotocol/restapi ethers
```

## Fetch Notifications

For this example, we will use the `getFeeds` function from the `restapi` **** package to fetch all the notifications from an address on a specific chain.

```typescript
import * as PushAPI from "@pushprotocol/restapi";

const fetchNotifs = async() => {
    const notifications = await PushAPI.user.getFeeds({
        user: 'eip155:42:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP-10
        env: 'staging'
    });

    console.log('Notifications: \n', notifications);
}

fetchNotifs();
```

:::info
Note on CAIP-10: We use [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) format for any on-chain addresses to pass to the SDK methods.
:::

## Fetching Spam Notifications

In the example above, we got the notifications that an address received on the inbox. If the address hasn't opted-in to the channel, the notifications will land in the **spam box**.

To fetch spam notifications:

```typescript
import * as PushAPI from "@pushprotocol/restapi";

const fetchSpam = async() => {
    const spams = await PushAPI.user.getFeeds({
        user: 'eip155:42:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
        spam: true,
        env: 'staging'
    });

    console.log('Spams: \n', spams);
}

fetchSpam();
```

Notice, how we simply need to add an additional argument, i.e., _**`spam: true`**_to get the spam notifications for the given address.
