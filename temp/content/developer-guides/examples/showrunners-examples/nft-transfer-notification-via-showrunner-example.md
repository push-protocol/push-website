---
description: Understanding how to build a channel on top of Showrunners for your own use.
---

# NFT Transfer Notification via Showrunner Example

Alright, now that we understand the basics of showrunners and how to set it up. This guide will teach you how to get started with building one for your own use case.

In order to get an adequate understanding of the Showrunners, let's get our hands dirty with it and build one.&#x20;

A heads-up: :innocent: _We are going to build out simple showrunner that is going to monitor an event on some smart contract on the Ethereum blockchain. The event that we are going to pick is the `Transfer` event in an ERC721 contract. We will use the Crypto Coven contract for this purpose._

### Creating the NFT Transfer Showrunner

**Creation and Initial Set-Up**

**Step 1:** Create a new folder inside the `src/showrunners` folder named `nftTransfer`

Step 2: Create a channel in the Push staging dApp

**Step 3**: Get the private key for the wallet you used to create the channel and create a file called `nftTransferKeys.json` inside the nftTransfer folder

```
{
    "PRIVATE_KEY":"YOUR_CHANNEL_PRIVATE_KEY_HERE"
}
```

**Step 4 :** Create the `nftTransferChannel.ts` file

The `nftTransferChannel.ts` will be the file which will contain all the logic for the fetching the data and constructing the payload.

There is some boilerplate code involved in creating a channel. The channel.ts file will contain the following boilerplate:

```
import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import config, { defaultSdkSettings } from '../../config';
import { EPNSChannel } from '../../helpers/epnschannel';

@Service()
export default class NFTTransferChannel extends EPNSChannel {
  constructor(@Inject('logger') public logger: Logger, @Inject('cached') public cached) {
    super(logger, {
      sdkSettings: {
        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,
        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,
        networkSettings: defaultSdkSettings.networkSettings,
      },
      networkToMonitor: config.web3MainnetNetwork,
      dirname: __dirname,
      name: 'NFT Trasfer',
      url: 'https://push.org',
      useOffChain: true,
    });
  }
}
```

**What's going on here?**

* **W**e are creating a new class `NFTTransferChannel` which extends the Push Channel class.
* In the `super() the` constructor we pass in certain arguments required for the channel like the `networkToMonitor` , name, and URL for the channel.
* The `useOffChain the` parameter tells the showrunner to use the off-chain notification instead of an on-chain one.

**Getting the Contract address and ABI file**

Our objective is to create a channel to send notifications about `Transfer` events of an ERC721 contract. So we will need to fetch events from the blockchain and construct meaningful notification payload from them

For that, we can make use of the Push backend-SDK for fetching the data from the blockchain.

Before the next thing we need is to pick an NFT for which we want to monitor the events. For this, we can use the Awesome `Crypto Coven` NFTs.

The address for the Crypto Coven contract is `[`[`0x5180db8F5c931aaE63c74266b211F580155ecac8`](https://etherscan.io/address/0x5180db8f5c931aae63c74266b211f580155ecac8)`]`

You also will need to get the ABI file for the contract from [etherscan](https://etherscan.io/address/0x5180db8f5c931aae63c74266b211f580155ecac8)**.**

**What NEXT?**

* Create a new file called `abi.json` containing the ABI obtained from [etherscan](https://etherscan.io/address/0x5180db8f5c931aae63c74266b211f580155ecac8)**.**
* Then import the ABI at the top of the `nttTransferChannel.ts` file

```
import abi from './abi.json';
```

### Developing the Channel Logic

* Create a new variable in the class called `LAST_CHECKED_BLOCK` this is to store the last block number until which we checked for transfer events.
* Inside the NFTTransferChannel class create a new method called `sendTransferEventNotif`

```
async sendTransferEventNotif() {
    const sdk = await this.getSdk();
    const coven = await sdk.getContract('0x5180db8f5c931aae63c74266b211f580155ecac8', JSON.stringify(abi));
    const filter = await coven.contract.filters.Transfer();

    if (!this.LAST_CHECKED_BLOCK) {
      this.LAST_CHECKED_BLOCK = await coven.provider.getBlockNumber();
    }

    const toBlock = await coven.provider.getBlockNumber();
    this.logInfo(`No of events fetching events from  ${this.LAST_CHECKED_BLOCK} to ${toBlock}`);

    const events = await coven.contract.queryFilter(filter, this.LAST_CHECKED_BLOCK, toBlock);

    this.logInfo(`No of events fetched ${events.length}`);

    for (const evt of events) {
      const msg = `Coven #${evt.args.tokenId} transferred from ${evt.args.from} to ${evt.args.to}`;
      const payloadMsg = `Coven [b:#${evt.args.tokenId}] transferred\nFrom :  [s:${evt.args.from}]\nTo : [t:${evt.args.to}]`;
      const title = `Coven Transferred`;
      const payloadTitle = `Coven Transferred`;
      await this.sendNotification({
        title: title,
        payloadTitle: payloadTitle,
        message: msg,
        payloadMsg: payloadMsg,
        notificationType: 1,
        recipient: this.channelAddress,
        cta: `https://opensea.io/assets/0x5180db8f5c931aae63c74266b211f580155ecac8/${evt.args.tokenId}`,
        simulate: false,
        image: null,
      });
    }

    this.LAST_CHECKED_BLOCK = toBlock;
  }
```

Phewww! 🤯, that's a lot of CODE. We really need to break this down now, to get a better understanding. :innocent:

**Breaking down the CODE**

```
const sdk = await this.getSdk();
const coven = await sdk.getContract('0x5180db8f5c931aae63c74266b211f580155ecac8', JSON.stringify(abi));
const filter = await coven.contract.filters.Transfer();
```

* In the above-mentioned lines, we are using the backend-SDK provided to us by the `EPNSChannel` class.
* And using it to get the contract for the crypto coven. Then we are using the contract to create a filter for Transfer() event which we will use later to get events.

```
 if (!this.LAST_CHECKED_BLOCK) {
      this.LAST_CHECKED_BLOCK = await coven.provider.getBlockNumber();
  }

  const toBlock = await coven.provider.getBlockNumber();
  this.logInfo(`No of events fetching events from  ${this.LAST_CHECKED_BLOCK} to ${toBlock}`);

```

* Here, we are checking if the `LAST_CHECKED_BLOCK` is null and if it is not initialized we are initializing it with the current block number after fetching it.
* The block is always the current block number.

```
 const events = await coven.contract.queryFilter(filter, this.LAST_CHECKED_BLOCK, toBlock);

 this.logInfo(`No of events fetched ${events.length}`);
```

* In the above-mentioned lines, we are fetching the `Transfer` events from the blockchain using the `filter` and from and **toBlock** up to which the events are to be fetched.

```
   for (const evt of events) {
      const msg = `Coven #${evt.args.tokenId} transferred from ${evt.args.from} to ${evt.args.to}`;
      const payloadMsg = `Coven [b:#${evt.args.tokenId}] transferred\nFrom :  [s:${evt.args.from}]\nTo : [t:${evt.args.to}]`;
      const title = `Coven Transferred`;
      const payloadTitle = `Coven Transferred`;
      await this.sendNotification({
        title: title,
        payloadTitle: payloadTitle,
        message: msg,
        payloadMsg: payloadMsg,
        notificationType: 1,
        recipient: this.channelAddress,
        cta: `https://opensea.io/assets/0x5180db8f5c931aae63c74266b211f580155ecac8/${evt.args.tokenId}`,
        simulate: false,
        image: null,
      });
    }
```

* Here we are looping through all the events obtained and sending a broadcast notification using the epns-backend-sdk
* We are constructing a payload by creating a title, message, and cta for the notification.
* A CTA is a call to action link which enables the notification to be clicked and redirected to the URL specified.
* Here we are redirecting to the open sea page for the token

### Finally! Setting up the CRON Tasks

Now that we have finished the actual logic for fetching the data and constructing and sending the payload. Now we can focus on scheduling this method to run at certain intervals

For that, we use a jobs file for scheduling the method using the built-in scheduling engine that comes with the showrunners framework.

* **Step 1**: Create a file called `nftTransferJobs.ts` inside the nftTransfer folder
* **Step 2**: Import our channel class that we previously created and the necessary packages.

```
import { Container } from 'typedi';
import schedule from 'node-schedule';
import NFTTransferChannel from './nftTransferChannel';
```

* **Step 3**: Export a function containing the scheduling logic

```

import { Container } from 'typedi';
import schedule from 'node-schedule';
import NFTTransferChannel from './nftTransferChannel';

export default () => {
  const startTime = new Date(new Date().setHours(0, 0, 0, 0));
  const channel = Container.get(NFTTransferChannel);
  const tenMinuteRule = new schedule.RecurrenceRule();
  tenMinuteRule.minute = new schedule.Range(0, 59, 10);

  channel.logInfo(`-- 🛵 Scheduling Showrunner ${channel.cSettings.name} -  Channel [on 5 mins ]`);
  schedule.scheduleJob({ start: startTime, rule: tenMinuteRule }, async function () {
    const taskName = `${channel.cSettings.name} snapShotProposalsTask(false)`;
    try {
      await channel.sendTransferEventNotif();
      channel.logger.info(`🐣 Cron Task Completed -- ${taskName}`);
    } catch (err) {
      channel.logger.error(`❌ Cron Task Failed -- ${taskName}`);
      channel.logger.error(`Error Object: %o`, err);
    }
  });
};
```

Here we are scheduling our showrunner for 10 mins. The method `sendTransferEventNotif` runs every 10 mins and keeps on checking for Transfer Events and send broadcast notifications to the channel

### Wrapping it UP :rocket:

This is a very minimalistic example of how to get started with the showrunners framework. The ways in which you can customize this to create basically any kind of notification is unlimited.

One can even go ahead and include an image in the notification using the `image` parameter in the `sendNotification` function.

Can send targetted notifications, subset notifications to a set of addresses etc. The possibilities are unlimited!!

