---
slug: push-game-theory-explained
title: 'Push Game Theory Explained'
authors: [push]
tags: [Game Theory ,Blockchain ,Design ,Notifications ,Blog]
---
import { SubHeader, ImageText } from '@site/src/components/SharedStylingV2';

![Docusaurus Image](./cover-image.webp)

<!--truncate-->

In this post, we cover Push in more detail and explain the game theory used in its design.

Push provides a easy and simple way to send notifications to users by different Channel Owners (App Owners). Notifications can be sent via the web, mobile, and Web3.0 providers like Metamask. To ensure consistent messaging throughout the project we have created the following nomenclature of terms, roles that will be used in the rest of the project lifecycle.

- Contract Owner — The owner of the contract, specifically the address by whom the contract is deployed.
- App Owner — Referred to as <b>Channel Owners</b>. The third-party projects, dApps or smart contract, specifically the address which form their identity as well as the custom opt-in group that the subscribed users will receive message from.
- Users — All the users who don’t fall in either of the above categories.
- App Owner Group — Referred to as <b>Channel</b>. The group which contains subscribed users of a particular channel.
- Subscribed Users — The users who have subscribed to a specific channel.

For the purpose of explaining the above EPNS terms, let’s take the example of Youtube and the various associated roles.

- Youtube — Contract Owner
- Channels — App Owner Groups
- Channel Owners — App Owners
- Users — Users
- Subscribed Users — Users subscribed to a specific App owner group

<b>Game Theory -- Push</b>

In order to ensure the proper participation of all roles, following game theory is proposed, features marked with *** will mostly be excluded from the upcoming MVP:

- The <b>contract owner</b> doesn’t have any ability to send messages on behalf of <b>channel owners</b>.
- The <b>channel owners</b> might spoof other trusted apps and thus will have to be verified or a spam system developed so that users can mark them as spoof or a similar mechanism.
- The <b>channel owners</b> need explicit permission from the users before messages can be sent to them.
- The <b>channel owners</b> need to stake some minimum DAI to ensure a spam-free environment, this is going to be minimal but good enough to ascertain good behavior (for example, 50 DAI).
- The <b>users</b> need to transact on blockchain to specifically subscribe or unsubscribe to a channel, this leads to an incentive issue, ie: why would a user spend gas in most cases?
- To counter this, The staked DAI from <b>channel owners</b> can inturn be used as an incentive for <b>users</b> to subscribe to the specific channel.
- This can be done by using services like AAVE to accrue interest on the said DAI and distribute it to the subscribed users group.
- This incentivizes the users to spend gas to perform “subscribe” transaction operation.
- The <b>channel owners</b> can stake more DAI if they want to since the users are incentivized to subscribe.
- The <b>channel owner</b> can blacklist a certain user from their channel if they want to.
- The <b>channel owners</b> can reclaim this DAI back, reclaiming this DAI will also destroy the channel, a fee of 10 DAI will also be held back for the <b>contract owner</b>, the fees is small enough for serious players to not worry about but will act as a further deterrent for bad players.

We would love to hear your feedback and ideas to better the overall experience. Stay tuned for more updates!

### About Push Protocol

Push is the communication protocol of web3. Push protocol enables cross-chain notifications and messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and platform-agnostic fashion. The open communication layer allows any crypto wallet /frontend to tap into the network and get the communication across.

To keep up-to-date with Push Protocol: [Website](https://push.org/), [Twitter](https://twitter.com/pushprotocol), [Telegram](https://t.me/epnsproject), [Discord](https://discord.gg/pushprotocol), [YouTube](https://www.youtube.com/c/EthereumPushNotificationService), and [Linktree](https://linktr.ee/pushprotocol).