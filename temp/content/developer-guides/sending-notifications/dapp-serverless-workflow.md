---
description: >-
  In this tutorial, you will learn to send notifications from the PUSH dapp to
  your subscribers. We will be using our Staging dApp & Goerli Network to
  deliver notifications.
---

# Using Push dApp (Gasless)

One of the easiest ways to send decentralized notifications is by using the Push dApp itself. The only prerequisite is that you must create a Channel on Push to be able to send notifications. In case you missed out, please check [this tutorial to create a Channel.](../create-your-notif-channel/)

Once you create a Channel, you have to navigate to the [Channel Dashboard](https://staging.epns.io/#/dashboard). There you will see the profile page for your newly created Channel along with some Utilities to play around with.

Towards the bottom of the Dashboard, you will find the Send Notification section. That's what we are going to utilize today for sending notifications. Clicking on the **Select Notification Type** dropdown, you will see various types of notifications that can be sent manually via dApp.

Push currently supports **Broadcast, Subsets, and Targeted** notifications. All the notifications sent via dApp are **Gasless**.

:::info
You can  send notifications to any wallet address but the wallet addresses that have opted-in to your channel will have notifications delivered to their feed while wallets that are not opted in will have the notifications routed to spam.
:::

Let’s walk you through sending notifications in all the available types.

### Sending Broadcast Notifications

Broadcast notifications are useful when a channel wants to **communicate a message to all the subscribers of a channel**.

Imagine if you are the owner of a dApp-based channel on Push , and you pushed out some updates to your dApp. You will definitely want to broadcast this news to all the subscriber audiences you have. Broadcast notifications are designed for this purpose.

In order to do that, select **Broadcast** from the dropdown list under **Send Notifications.** You will see new input fields, something like the below picture. For your reference, we have filled the input fields with some dummy messages. You can fill in details according to your needs.

![BroadCast Notification](../../../static/img/assets/broadcast-notification.png)

You can also see the real-time **Notification Preview** and check out how the Notification would appear once delivered to your subscribers.

![Notification Preview](../../../static/img/assets/notification-preview.png)

Hit the **Send Notification** button and it will initiate a gasless transaction on Goerli Network. Click on **Sign**, and the notification will be sent. Subscribers can see the notification appear in their Inboxes.

### Sending Subset Notifications

Suppose you want to notify only a specific group of wallet addresses. It might be needed for distributing membership rewards or sending notifications only to those with special access or any other use case.

To cater to this request, Push brings you the capability to send notifications to a subset of users. All you need is the wallet addresses of all those whom you want to notify. Wanna see how? Come check this out ‼️

Select **Subset** from the dropdown list under **Send Notifications.** You will see input fields similar to Broadcast notifications. The only difference is there is a **new field that asks you to enter wallet addresses.**

For your reference, I have populated the fields with some data which you can see in the below image 👇🏼 (wallets can be added by pressing the enter key or comma-separated addresses)

![Subset Notification](../../../static/img/assets/subset-notification.png)

Click on the **Send Notification** button and it’ll initiate a gasless signing transaction. Upon successful delivery, your notification will be sent to your respective wallet addresses.

### Sending Targeted Notifications

Till now, we have seen examples of how to send broadcast & subset notifications. Now, we’ll show you how to send notifications to a specific wallet address.

For many dapps and developers, this is **the most important type** which helps in serving customized notifications for users. And a lot of official channels on Push combine with backend SDK and Showrunners to send wallet-specific notifications.

To send **Targeted** notifications, simply click on the **Targeted** option under **Send Notification** panel. Fill in the contents and also **specify the wallet address** that you want to notify. Take a look at the below example;

![Targeted Notification](../../../static/img/assets/targeted-notification.png)

Hit on the **Send Notification** button, **Sign** the Payload, and your customized notification would be delivered to the specified wallet address.
