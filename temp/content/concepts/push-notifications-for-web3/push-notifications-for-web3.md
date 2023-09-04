---
sidebar_position: 2
---

import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Push Notification for Web3

### Quick explainer of what web3 notifications are, who can trigger them, its different types etc

Any successfully created channel, in its **active** state, can send notifications to its subscribers about a wide range of things related to defi, governance proposals, web3 news, or any other crucial updates about their protocol/services.

Notifications land in the inbox of those users who are subscribed to the channel. Non-subscribers of a particular channel aren't alerted about notifications from that channel as they land in their spam box.

## Who can Send Notifications?

As per the current design of the protocol, there can be 3 main actors who can send notifications:

**1. Channel Owners:** The owners of a particular channel can send notifications to their subscribers.

**2**. **Delegate Notification Senders:** Channel owners can allow any particular wallet address to send notifications on behalf of his/her channel. This feature is called delegated notifications and you can read more about it in this section 👉[what-are-delegated-notifications.md](what-are-delegated-notifications.md "mention")

**3. Notifications To Yourself:** The Push Communicator allows any address to send notifications to themselves 😃 It’s important to note, however, that the address sends the notification to themselves only.

:::info
**Note:**

_Sending notifications is a gasless transaction and therefore notification senders need not pay any gas fee while sending notifications via the Dapp._

_**Gas** Fees are only applicable when **on-chain notifications** are triggered directly from smart contracts._


:::

Now that you have a brief overview of notifications in the protocol, let's understand and explore the different ways to send notifications to your users.

### How to Send Notifications?

<CustomLinkCard text='Sending Notifications' link='../../developer-guides/sending-notifications/' />

<CustomLinkCard text='Using Push SDK (Gasless)' link='../../developer-guides/sending-notifications/using-epns-sdk-gasless' />

<CustomLinkCard text='Using Subgraph (Gasless)' link='../../developer-guides/sending-notifications/using-subgraph-gasless' />

### How to Receive Notifications?

<CustomLinkCard text='Receiving via AWS SNS' link='../../developer-guides/receiving-notifications/receiving-via-aws-sns' />

<CustomLinkCard text='Receiving Notifications' link='../../developer-guides/receiving-notifications' />

### Learn more about Notification

<CustomLinkCard text='What are Delegated Notifications' link='./what-are-delegated-notifications' />

<CustomLinkCard text='Design Notification Content' link='./design-notification-content' />
