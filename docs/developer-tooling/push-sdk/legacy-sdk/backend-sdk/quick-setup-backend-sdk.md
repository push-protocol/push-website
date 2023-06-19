# Quick Setup Backend SDK

Before we dive-in to the more technical details of our Back-end SDK, let's get a brief idea of the important steps involved to set it up and integrate with your back-end server.&#x20;

This guide is meant to serve as a quick guide to sending notification using backend sdk, it is heavily recommended to check out [**Understanding & Using Backend SDK Features**](understanding-and-using-backend-sdk.md) for in-depth understanding.

## Quick Setup

**Step 1:** Install the npm package

```
npm install @epnsproject/backend-sdk 
//this is the package for our production environment

OR

npm install @epnsproject/backend-sdk-staging 
//this is the package for our staging environment recommended for testing.
```

**Step 2:** Import the package.

```
import EpnsSDK from "@epnsproject/backend-sdk" // for production

OR

import EpnsSDK from "@epnsproject/backend-sdk-staging" // for testing or development.
```

**Step 3:** Initialise the SDK instance.

```
// the private key of the address which you used to create a channel
const  CHANNEL_PK = '0x0000000000000000000000000000000000000000000000000000000000000fff';

// Initialise the SDK
const  epnsSdk = new EpnsSDK(CHANNEL_PK);

const  CHANNEL_PK = '0x0000000000000000000000000000000000000000000000000000000000000fff'; // the private key of the address which you used to create a channel

// Initialise the SDK
const  epnsSdk = new EpnsSDK(CHANNEL_PK);
```

:::info
_If you are yet to create a channel you can proceed to_ [_our staging dapp_](https://staging.push.org/) _to create one or refer to our_ [_how-to guides_](https://www.notion.so/epns/How-to-EPNS-853afe64839b4cdd8c63209342a783d0)_._
:::

**Step 4:**  This is an interesting part where you can implement the notification logic, whether it’s on-chain or off-chain, based on which the notification is to be sent through your channel.

**Step 5:** Alright. Since we are all set.

**Let's send a notification!!** :rocket:

```
const tx = await sdk.sendNotification(
        recipientAddress,
        pushNotificationtitle,
        pushNotificationMessage,
        notificationTitle,
        notificationMessage,
        3, //this is the notificationType
        cta, // a url for users to be redirected to
        image ,// an image url, or an empty string
        null, //this can be left as null
      );
```

:::info
What is happening here? [Understand the sendNotification function and parameteres here.](understanding-and-using-backend-sdk.md#sending-notifications-using-the-sdk)
:::

Now that we know how quick it is to send a notification using the backend sdk, let's dive a bit deeper into the parameters to understand what's happening and how to tweak parameters based on what you want to do.
