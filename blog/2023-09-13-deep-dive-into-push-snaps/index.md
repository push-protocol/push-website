---
slug: deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need
title: Deep-dive into Push Snaps Features & Getting Started 🛠️
authors: [push]
tags: [Pushprotocol, Metamask, Metamask Wallet, Web3, Blockchain]
---

import { SubHeader } from '@site/src/components/SharedStylingV2';

![Docusaurus Image](./cover-image.webp)

<!--truncate-->

<SubHeader>All the technical specifications and getting started tips you need.</SubHeader>

As we outlined in our [announcement article](https://push-protocol.medium.com/bringing-push-to-metamask-snaps-fc780fec004b) — the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet. With the Push Snap installed, you can now seamlessly receive notifications powered by [Push Protocol](https://push.org/) directly into your wallet, ensuring you never miss out on important updates from the channels you subscribe to.

By delivering notifications directly to your wallet address, we’re eliminating the need to log in to any other front-end separately to get those same notifications and alerts. By bringing all your notifications into one place, we’re saving you time, effort, and allowing you to more easily stay connected and informed.

## Core Snap Features

The main features of version 1 of the Push Snap include:

1. <b>Notifications</b>: Notifying users of all updates from the channels they
   opt-in to.
2. <b>Address Selection</b>: Addition or removal of their desired addresses for
   notifications.
3. <b>Customization of Pop-Ups</b>: Push Snap allows users to toggle popup
   notifications at their convenience.

## Brief glance at the Push Snap’s working mechanism

- The snap requests permission to run periodically every minute.
- While running, it scouts for all new notifications/alerts received by your wallet
- It then bundles all the notifications together and shows all of them in the form of a pop-up as well as in-app notification.
- The Push Snap allows users to update their address for which they prefer to receive notifications.
- The Push Snap also includes features to toggle the pop-up notifications as per the user’s choice.

<blockquote>
<i>
  Note: Currently, the Push Snap checks if more than 25 notifications are
  received per minute. If that’s the case, the Push Snap automatically notifies
  the user and snoozes the popups, which can always be turned back on from the
  dApp.
  </i>
</blockquote>

## Snap installation and Set-Up guide

- If you don’t already have a MetaMask wallet, install and [set-up a wallet in MetaMask](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask) here.
- Next, go to [https://app.push.org/receive](https://app.push.org/receive)
- Click on <b>Install Snap</b> → <i>approve the required permissions to run the snap</i>
- Once successfully installed the snap will redirect to Push Channels Dapp
- Here you can opt-in to your favourite channels to receive notifications
- Once done, you can go back to the Snap Settings Page.
- With the connected wallet, click on <b>Add Address:</b>
- This allows you to add an address for which you prefer to receive notifications
- Once you click, simply sign the message to complete the process
- Once done, you are all set. The address will now start receiving notifications.

## Snap’s permissions

- <b>Local storage</b>: To store the addresses to send notifications and PGP
  private key to send PUSH Chat notifications
- <b>Periodic actions</b>: This includes sending notifications every minute to
  the wallet
- <b>Dialog Boxes</b>: This includes popups for showing notifications on screen
  and the initial screen
- <b>Internet Access</b>: The Push Snap has internet access and can make API
  calls using fetch()

## Technical Specifications

Mentioned below are the imperative calls made by the Push Snap.

## onRPCHandler Specifications

- <b>‘pushproto_addaddress’</b> — This stores the address in the local storage chosen
  by the user after the signature is successful. This address will be served the
  notifications.
- <b>‘pushproto_removeaddress’</b> — This removes the address from the local storage
  chosen by the user. That address won’t be served the notification anymore.
- <b>‘pushproto_welcome’</b> — Serves as an initial popup to introduce the user to
  what the snap does and redirects the user to <a href="https://app.push.org">
    app.push.org
  </a> to opt-in to the push channels to start getting notifications.
- <b>‘pushproto_togglepopup’</b> — This method turns off the snooze and notifications
  would be allowed to be shown in the form of popups again.

## onCronjob Handler Specifications

- Check if the total notification received is >25. If not it continues to display notifications in the form of popups, otherwise it turns off popups notifying the user, and it can be toggled from the app
- InApp notifications have a limit of 11 notifications per second since notifications could be sent every 5 sec, to adhere to that it’s limited to 11 latest notifications per second fired every 5 seconds, adding up to 55 secs, and the next 5-sec gap is freed for the next iteration

## Trouble getting started? We’re here to help!

If you have any issues with setting up your Push Snap, we have a 24/7 dedicated team of devs to help you out.

You can find us here 👉https://discord.gg/pushprotocol

## Other FAQs

### How can I install the Push Snap?

To install the Push Protocol Snap, you need to go to our dApp, https://app.push.org/receive and click on the Receive Notifications section. From there, install the Push Snap by giving it the required permissions. After adding addresses, you’re all set to start receiving notifications.

### Can I add an address that I do not own?

The addresses to receive notifications can be added only after signing a message, which proves the ownership of that address, hence un-owned addresses cannot be added

### Can I opt for only in-app MetaMask notifications?

Yes, the Push Snap can run only on in-app notifications, to avail that, you need to go through the Push Snap settings in the Push dApp and turn off pop-up notifications.

### Can I opt into channels using this Push Snap?

Opting-in to channels can only be done using the Push Protocol dApp. The Push Snap is only for receiving and displaying these notifications.

### Can the Push Snap sign and send transactions?

No, the Push Snap does not have access to the Ethereum provider nor the signer hence the Push Snap cannot initiate any kind of transaction that may or may not involve asset transfers.

### Is there a way to minimize frequent notification pop-ups?

The Push Snap has an in-built feature to snooze frequent pop-up notifications. If you receive more than 25 notifications within 5 minutes, it automatically goes into snooze mode and notifications would only come in MetaMask. These settings can always be reset from the dApp.

### What permissions do I need to provide while installing or using the Push Snap?

The only permissions required are:

- Local storage access for the Push Snap to store details of notifications received and allowed addresses
- Internet access to gather notifications from Push Protocol
- Periodic running of services while the browser is active to check for latest notifications
- Dialog box access to allow pop-up notifications

### Can I add more than one wallet to receive notifications?

Yes, more than one wallet can be added to receive notifications:

- Go to the Push Snap settings on the Push dApp
- Connect the wallet you want to add
- Click on <a>Add Address</a> button and sign a message
- The address will be added to the snap to receive notifications

### If I have more than one wallet added to the Push Snap, will I receive notifications for all of them?

Yes, every wallet you add will receive a notification.

### Does the MetaMask Wallet need to be unlocked to receive notification?

Yes, the browser window needs to be active and MetaMask needs to be unlocked to start receiving notifications.

### About Push Protocol

Push is the communication protocol of web3. Push protocol enables cross-chain notifications and messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and platform-agnostic fashion. The open communication layer allows any crypto wallet /frontend to tap into the network and get the communication across.

To keep up-to-date with Push Protocol: [Website](https://push.org/), [Twitter](https://twitter.com/pushprotocol), [Telegram](https://t.me/epnsproject), [Discord](https://discord.gg/pushprotocol), [YouTube](https://www.youtube.com/c/EthereumPushNotificationService), and [Linktree](https://linktr.ee/pushprotocol).

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as: -->

<!-- The blog supports tags as well! -->

<!-- **And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config. -->
