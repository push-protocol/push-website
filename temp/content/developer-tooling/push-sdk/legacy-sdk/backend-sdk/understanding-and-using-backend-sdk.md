# Understanding & Using Backend SDK

## About

This module is used to send notifications to [Push](http://www.push.org/) channels easy. It Provides an abstraction layer above advanced internal Push notification functions.

It is written in typescript and requires node v10.0.0 or higher. Most features will work with nodejs v6.0.0 and higher but using older versions than v10.0.0 is not recommended.

### Installation

```
npm install @epnsproject/backend-sdk-staging
```

### Usage

In order to use this package, [you must first have created a channel at Push](https://staging.push.org/). Then note the private key of the account you used to create the channel, because we would be using it in this tutorial

```
// Import the required packages
EpnsSDK, { InfuraSettings, NetWorkSettings, EPNSSettings } = require("'@epnsproject/backend-sdk-staging");
const ethers = require('ethers');

// Define the parameters we would need in order to initialize the SDK
const  CHANNEL_PK = '0x0000000000000000000000000000000000000000000000000000000000000fff'; // the private key of the channel


// Initialise the SDK
const  epnsSdk = new EpnsSDK(CHANNEL_PK);

// get the subscribers to your channel
const allSubscribers = await epnsSdk.getSubscribers()

// send a notification to your subscribers
const response = await epnsSdk.sendNotification(
      recipients, //the recipients of the notification
      pushNotificationTitle, // push notification title
      pushNotificationBody, //push notification body
      notificationTitle, //the title of the notification
      notificationBody, //the body of the notification
      notificationType, //1 - for broadcast, 3 - for direct message, 4 - for subset.
      link, //the CTA of the notification, the link which should be redirected to when they click on the notification
    );
    console.log(response)
```

## API

#### Initialising the SDK

```
new EpnsSDK(
	channelKey: string,
	{
		communicatorContractAddress =config.communicatorContractAddress,
		communicatorContractABI = config.communicatorContractABI,
		channelAddress = null,
		networkKeys = DEFAULT_NETWORK_SETTINGS,
		notificationChainId = DEFAULT_NOTIFICATION_CHAIN,
	} = {}
)
```

| Parameter                   | Description                                                                                              | Default Value                                                                                                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelKey                  | The private key of the account used to [create a channel on Push](https://staging.push.org/)             | N/A (This is the only parameter not required)                                                                                                                                   |
| communicatorContractAddress | an override parameter if you intend to use a different communicator contract from the staging one        | For `Kovan Network`:`0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC` and for `Polygon Network`: `0xD2ee1e96e3592d5945dDc1808834d7EE67400823`                                        |
| communicatorContractABI     | The ABI of the communicator contract specified                                                           | Defaults to the latest communicator contract published by Push                                                                                                                  |
| channelAddress              | The ethereum address used to create the channel                                                          | defaults to `ethers.utils.computeAddress(channelKey)` which is the public key of the specified private key                                                                      |
| networkKeys                 | These are important if you want to perform any on chain activities, you will have to provide infura keys | The type of the object containing the keys are as follows `interface NetWorkSettings {alchemy?: string;infura?: {projectID: string;projectSecret:string;};etherscan?: string;}` |
| notificationChainId         | The chain on which you want to send notifications                                                        | defaults to `42` which is for the kovan network, other option is `80001` which is for the kovan network                                                                         |

### How to get Subscribers of a specific Channel?

```
const  subscribers = await  epnsSdk.getSubscribedUsers();
```

This returns an array of addresses, which would be those already subscribed to your channel

### Sending Notifications using the SDK

```
/**
* Send Notification
* @description Sends notification to a particular user
* @param user User Address
* @param title push notification title of Notification
* @param message push notification Message of Notification
* @param payloadTitle Full notification Title
* @param payloadMsg Full notification Content
*/
public  async  sendNotification(
    recipient: string,
    pushNotificationTitle: string,
    pushNotificationMessage: string,
    notificationTitle: string,
    notificationMesssage: string,
    notificationType: number,
    cta: string | undefined,
    img: string | undefined,
    simulate: any,
  { offChain = true } = {}, //add optional parameter for offchain sending of notification
) {}
```



| Parameter               | Description                                                                                       | Value                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| recipient               | The recipient of the notification                                                                 | it would be equal to the channelAddress for a broadcast notification(type=1), it would be equal to the recipient address for a direct(targetted notification)(type=3), it would be equal to the comma seperated string of addresses for subset notifications(type=4) e.g`0xaddress1, 0xaddress2, 0xaddress3` |
| pushNotificationtitle   | This is the title of the notification which would be displayed on the `push notification`         | shorter form of the notification title, it could also be the same as the actual notification title                                                                                                                                                                                                           |
| pushNotificationMessage | This is the message which is going to be displayed on the push notification for this notification | usually a shorter version of the message, but could also be the actual message                                                                                                                                                                                                                               |
| notificationTitle       | The title/heading of the notification about to be sent                                            | any string which is the title of your notification                                                                                                                                                                                                                                                           |
| notificationMesssage    | The content of the notification to be sent                                                        | could be any string which contains some text                                                                                                                                                                                                                                                                 |
| notificationType        | The type of notification being sent                                                               | 1 ->Broadcast notification to every member of the channel. 3 -> Direct/targetted notification to a particular member of the channel 4 -> subset notifications to a group of subscribers of the channel                                                                                                       |
| cta                     | The url which you want user's to be redirected to upon clicking of the notifications              | URL or Undefined                                                                                                                                                                                                                                                                                             |
| img                     | A url which links to an image you want to be displayed along with your notification               |                                                                                                                                                                                                                                                                                                              |
| simulate                | An object which contains information used for testing purposes or simulating notification         | can safely be set to null                                                                                                                                                                                                                                                                                    |
| { offChain = true }     | an optional parameter which is used to specify choosing to use off chain notifications            | defaults to use off chain notifications.                                                                                                                                                                                                                                                                     |

:::info
Learn more about the technical details of different Notification types [here](https://docs.push.org/developer-zone/developer-guides/sending-notifications/notification-payload-types)&#x20;
:::

### Getting a deployed contract from the SDK

```
async  getContract(
	chainId: string,
	address: string,
	abi: string
) {}
```

| Parameter | Description                                                      | Default Value                       |
| --------- | ---------------------------------------------------------------- | ----------------------------------- |
| chainId   | Specify the id of the chain on which the contract ye seek exists | N/A - required parameter            |
| address   | Specify the address of which the contract you seek exists        | N/A - required parameter            |
| abi       | Specify the abi of which the contract you seek                   | <p>N/A - required parameter<br/></p> |

:::info
Find all the Push Contract Addresses [here](../../../push-smart-contracts/epns-contract-addresses.md)
:::

## Backend SDKs Packages

| Environment    | Github Repo                                                                                                                                                      | NPM Package                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Staging**    | [https://github.com/ethereum-push-notification-service/push-backend-sdk-staging](https://github.com/ethereum-push-notification-service/push-backend-sdk-staging) | [https://www.npmjs.com/package/@epnsproject/backend-sdk-staging](https://www.npmjs.com/package/@epnsproject/backend-sdk-staging) |
| **Production** | [https://github.com/ethereum-push-notification-service/push-backend-sdk](https://github.com/ethereum-push-notification-service/push-backend-sdk)                 | [https://www.npmjs.com/package/@epnsproject/backend-sdk](https://www.npmjs.com/package/@epnsproject/backend-sdk)                 |