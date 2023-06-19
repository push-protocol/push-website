---
description: >-
  This is a step-by-step introductory tutorial that will teach you how to build
  a channel based on NFTs and their respective events in a contract.
---

# NFT-Based notification via Showrunner example

**Greetings!!**<br/>
If you are new to Push protocol and don't have a proper idea of how to create an NFT-based channel for notifications on top of [showrunners](https://docs.epns.io/developers/developer-tooling/showrunners-framework). This guide is for you ;)

We will walk through coding and interacting with the [Digible ](https://www.digible.io/)to create the notification regarding the NFTs listed there.

And don’t worry if you don’t understand what any these words mean yet, I'll explain everything!

You can access the [code ](https://github.com/ethereum-push-notification-service/epns-showrunners-framework-staging/tree/main/src/sample\_showrunners/digible)for the channel and get some vibe for how the code is looking !!

### Create a  folder

For starting with showrunners and setting it up follow this guide here. // need to add link

First we need to create a folder in `src/showrunners/<`_`your_channel_name>`_

### USE CASE:

To Notify a User when the Phygital Status of a NFT has changed.

### SAMPLE CODE STRUCTURE

#### Logic Overview

Digible has provided us with the Contract Addresses and ABIs for the concerned event. The most basic approach will be monitoring the function concerning the Phygital Status and triggering a notification whenever the concerned function is called.

To get the Idea of when the function is called we monitor the block numbers of every transaction in the given contract address if it concerned to call the monitored event.Whenever we observe a new block number, we trigger a notification and also update the latest block number in our temporary storage for further monitoring.

#### [Channel File](https://github.com/ethereum-push-notification-service/push-showrunners-framework/blob/main/src/sample\_showrunners/digible/digibleChannel.ts)

The channel file is the brain for every channel notification logic. The file follows basic steps of input obtainment, some processed logic and conditions and when the condition for logic is satisfied the code generates the notification.

#### The Channel Class Creation (The Boilerplate)

Every development procedure initiates with creating a channel specific class with contains various information regarding the concerned channel, such as:

* The network to monitor for the Channel
* Name of the Channel
* The URL of channel owner
* Whether channel uses off chain notification or not

```jsx
import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import config, { defaultSdkSettings } from '../../config';
import { EPNSChannel } from '../../helpers/epnschannel';

export default class DigibleChannel extends EPNSChannel {
  constructor(@Inject('logger') public logger: Logger, @Inject('cached') private cached) {
    super(logger, {
      sdkSettings: {
        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,
        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,
        networkSettings: defaultSdkSettings.networkSettings,
      },
      networkToMonitor: config.web3PolygonMainnetRPC,
      dirname: __dirname,
      name: 'Digible',
      url: '<https://www.digible.io/>',
      useOffChain: true,
    });
  }
```

#### The Fetching of Block Numbers

The block number for the latest transaction and also the block number for the last transaction of the concerned event is fetched.

**Getting the Block Number for the event and the Latest block number from the contract**

The below given function fetches the block number previously saved for the Event, for example in this case **fromBlockDigiTrack** is the latest block number in the local database for the Event.

Also the Latest block number for the contract is fetched and save as the **toBlock.**

```jsx
//Get the Block Number previously saved for each of the events.
  async getBlockNumbers(simulate, contract: ethers.Contract) {
    this.logInfo(`Getting Block Numbers`);

    let fromBlockDigiTrack = simulate?.logicOverride?.mode
      ? simulate?.logicOverride?.fromBlock
      : (await contract.provider.getBlockNumber());

    let toBlock = simulate?.logicOverride?.mode
      ? simulate?.logicOverride?.toBlock
      : await contract.provider.getBlockNumber();

    const contractNumber = await contract.provider.getBlockNumber();
    
    //Declaring or somewhat re-saving the imported Block Numbers 
    const result = {
      fromBlockDigiTrack,
      toBlock: toBlock,
    };
    return result;
  }
```

#### The Notification Trigger Logic

The digible channel follows a primary logic of event monitoring. In this specific use case we are monitoring an event named **“StatusUpdated()”** The following are the steps followed to monitor the event and trigger a notification, if required.

**Getting the contract information to monitor the event**

The below given lines of code are using our SDK to get a contract from the Provided contract address and the ABI for the contract.This then also filters out and assigns the concerned event a variable to be worked upon. The blockNumbers variable is assigned to the value of block numbers fetched from the contract using the above explained getBlockNumbers function.

```jsx
const sdk = await this.getSdk();
const digibleContract = await sdk.getContract(digibleSettings.digiTrackContractAddressMainnet,JSON.stringify(digiTrackABI));
const filter = digibleContract.contract.filters.StatusUpdated();
const blockNumbers = await this.getBlockNumbers(simulate, digibleContract.contract);
```

**Implementing a condition to trigger the notification**

The following condition is then implemented:-

```jsx
if (blockNumbers.toBlock > blockNumbers.fromBlockDigiTrack)
```

This conditions allows us to trigger a notification if the fetched block number from the contract is greater than the latest saved block number in the model file.The greater block number implies that a new transaction utilising the concerned event was made.

**Structuring the Notification**

If the above condition is verified the process of triggering a notification is initiated.

First of all a “For” condition is implemented to send the notifs for all the times the event was called.

```jsx
for (const e of events)
```

For sending a notification we use an inbuilt EPNS class function called “sendNotification”.This function to send the notification requires certain data from our side.The following data is what we generally provide in a notification:

* Recipient Address
* Notification Title
* Notification Message
* Call to Action Link (The link which redirects the user to the channel holders domain for further actions)

Sometimes to provide we have to provide some necessary information in the notification message. For this we use the contract and fetch the different arguments for the concerned event. In the case of involvement of token, we use the ERC20 (if the token is listed in ERC20) Json to extract the information for a specific token.

```jsx
const contract = await sdk.getContract(e.args.nftAddress, JSON.stringify(ERC20ABI));
const name = await contract.contract.name();
const newStatus =e.args[2];
const tokenId = e.args[1];
```

After we get the required information from the arguments we frame the Title and Message for the notification.

```jsx
const title = `DigiTrack-Phygital Status Updated !!`;
const message = `DigiSafe status for ${name} has been updated to ${newStatus}.`;
```

**Triggering a Notification**

After getting all the data from our side the notification is good-to-go, and the sendNotification function is implemented.

This notification is addressed only to the people who are involved in the specific event transaction.Hence the recipient addresses are also fetched from the Event arguments.

```jsx
            await this.sendNotification({
              recipient:e.args[3] ,
              title,
              message,
              payloadMsg,
              payloadTitle,
              cta:`https://www.digible.io/`,
              notificationType,
              simulate,
              image: null,
            });
```

#### [Jobs File](https://github.com/ethereum-push-notification-service/push-showrunners-framework/blob/main/src/sample\_showrunners/digible/digibleJobs.ts)

This folder is responsible to run the Cron Jobs. Expanding on the “Cron Jobs”, this is a function which uses a module called Node-Schedule to run a code at a specific, repeating time interval. Though the main logic resides in the Channel file, the logic is constantly run by this file, so that as soon as the function satisfies the condition when its called, a notification is sent.

**Creation of a Time Rule**

This involves creating a type of countdown values for a specific job to run.This is customised on the basis of the requirement of a certain use case. For example in this case we create a Daily Rule which makes the channel logic run once in every 10 minutes.

```jsx
  const startTime = new Date(new Date().setHours(0, 0, 0, 0));
  const channel = Container.get(DigibleChannel);

  const tenMinuteRule = new schedule.RecurrenceRule();
  tenMinuteRule.minute = new schedule.Range(0, 59, 10);
```

**Calling the Channel Function for a Job**

Once the schedule job is set to run. The below stated function calls the Task Function from the Channel file to run and send the notification if need be.

```jsx
schedule.scheduleJob({ start: startTime, rule: tenMinuteRule }, async function() {
    const taskName = `${channel.cSettings.name} getDigiTrackEvents(false)`;
    try {
      channel.getDigiTrackEvents(false);
      channel.logInfo(`🐣 Cron Task Completed -- ${taskName}`);
    } catch (err) {
      logger.error(`❌ Cron Task Failed -- ${taskName}`);
      logger.error(`Error Object: %o`, err);
    }
  });
```

You can now heat up the server by running `docker-compose up` and `npm run dev` and start sending notification.

_In the channel file you can also track the block numbers for which last notification by using `database` , so that next time the jobs hit the engine, it won't repeat sending notification from same block again i.e. repeated notifications_

That's all for now :)

If you enjoyed this tutorial, Do join our [Discord server](https://discord.gg/YVPB99F9W5) to meet other devs and builders.
