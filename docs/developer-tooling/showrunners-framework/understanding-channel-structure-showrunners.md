---
description: >-
  Understanding the folder structure inside showrunners and using the various
  tools provided to implement / debug / refine your channel notifications.
---

# Understanding Channel Structure - Showrunners

Showrunners framework provides you with a scaffold that enables plug and play for your channel or even for multiple channels having their own logic triggers.&#x20;

Let's understand the requirements for the folder structure inside the `src/showrunners` folder and how you can use them to quickly refine / debug / deploy your channels.

:::info
It is recommended to understand [Setup Showrunners](how-to-setup-showrunners.md) guide and [Hello World Channel](hello-world-channel.md) guide before diving in specifics of this guide as the guide relies on prior knowledge of the above two.
:::

## Channel Structure

Each folder inside `src/showrunners` is treated as their own channel. Showrunners is designed to be a plug and play solution for your channel which means that each of the folders designated filenames are used to add-on various functionalities. You can have a look at all the files that are required to be inside your channel folder and [it's structure here](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/tree/main/src/sample\_showrunners/helloWorld).

Note: For example, we will assume that your are creating a channel called **uniswap**

### Mandatory files required inside Channel directory

At the very least, two files are required to be inside your channel directory:

* channel**Channel.js \[.ts]**
  * For example: **helloWorldChannel.js** | [demo file here](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/sample\_showrunners/helloWorld/helloWorldChannel.ts)
  * This file contains all the logic functions of your channel, it can for instance have a way to poll all opted in users of your channel and based on certain conditions that are met, fire notifications out.
* channel**Keys.json**
  * For example: **helloWorldKeys.json** | [demo file here](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/sample\_showrunners/helloWorld/helloWorldKeys.json)
  * This file contains all your private keys that you either belong to the channel you created or have authorized the wallets to send notification on your channel's behalf.
  * This is a normal json file, sample below:\
    \
    `{` \
    &#x20;   `"PRIVATE_KEY_NEW_STANDARD_1":` \
    &#x20;   `{` \
    &#x20;       `"PK": "YOUR_CHANNEL_PRIVATE_KEY_HERE",` \
    &#x20;       `"CHAIN_ID": "CHAIN_ID_HERE"`\
    &#x20;   `},` \
    &#x20;   `"PRIVATE_KEY_NEW_STANDARD_2":` \
    &#x20;   `{` \
    &#x20;       `"PK": "YOUR_CHANNEL_DELEGATE_1_PRIVATE_KEY_HERE",` \
    &#x20;       `"CHAIN_ID": "CHAIN_ID_HERE"`\
    &#x20;   `},` \
    &#x20;   `"PRIVATE_KEY_NEW_STANDARD_3":` \
    &#x20;   `{` \
    &#x20;       `"PK": "YOUR_CHANNEL_DELEGATE_2_PRIVATE_KEY_HERE",` \
    &#x20;       `"CHAIN_ID": "CHAIN_ID_HERE"`\
    &#x20;   `},` \
    `}`

:::info
Only one private key is required and your channel delegate key also works. Some devs prefer to not expose their channel creator key even when it's used on your server or local backend to sign the notification payload. \
\
It's also useful when you create a channel from a smart contract or a multisig / multisafe.
:::

These two files inside your channel folder will ensure that your channel is correctly loaded in showrunners framework but it doesn't do any magic by itself. Do ensure that your channel is triggering logic points either through cron job or through postman routes, you need ways to trigger that which leads us to the optional files that enables that.

### Optional files inside channel directory

These files while optional enables certain trigger points for your channel to operate on.

* channel**Routes.js \[.ts]**
  * For example: **helloWorldRoutes.js** | [demo file here](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/sample\_showrunners/helloWorld/helloWorldRoutes.ts)
  * This file contains the routes that you will enable to ensure you are able to manually trigger notification or any other logic points in your channel**Channel.js \[.ts]**
  * You will ideally use the route of this files in postman to trigger logic functions / test them out.&#x20;
* channel**Jobs.js \[.ts]**
  * For example: **helloWorldJobs.js** | [demo file here](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/sample\_showrunners/helloWorld/helloWorldJobs.ts)
  * This file contains your cron jobs to trigger logic points in your channel**Channel.js \[.ts]**
  * The file is based on [node-schedule](https://github.com/node-schedule/node-schedule) and can handle a wide variety of automated cron jobs to enable sending wide array of notifications based on triggers.
* channel**AWSSNS.js\[.ts]**
  * For example: **helloWorldAWSSNS.ts** | [demo file here](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/sample\_showrunners/helloWorld/helloWorldAWSSNS.ts)
  * This file contains the webhook helpers and handle the logic points for consuming a webhook.
  * This file is based on [AWS-SNS](https://aws.amazon.com/sns/) and can handle the variety of logics for consuming webhook to enable sending wide array of notifications based on webhook triggers.

Congrats, that is all you need to know to start creating your channel and sending notifications. [Check out examples of showrunners channels](../../developer-guides/examples/showrunners-examples/) for advance implementation of your channel!
