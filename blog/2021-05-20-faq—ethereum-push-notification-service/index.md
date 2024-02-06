---
slug: faq—ethereum-push-notification-service
title: 'FAQ — Ethereum Push Notification Service (EPNS)'
description: 'FAQ — Ethereum Push Notification Service (EPNS)'
authors: [push]
image: './cover-image.webp'
text: "Ethereum Push Notification Service (EPNS) is a platform-agnostic, decentralized notification protocol for Ethereum-based Web 3.0 applications. It enables users to receive notifications for on-chain or off-chain activity."
tags: [ FAQ
,Ethereum
,Blockchain
,Announcements
]
---
import { ImageText } from '@site/src/css/SharedStyling';

![Cover Image of FAQ — Ethereum Push Notification Service (EPNS)](./cover-image.webp)

<!--truncate-->

**Q. What does EPNS do?**
-------------------------

Ethereum Push Notification Service (EPNS) is a platform-agnostic, decentralized notification protocol for Ethereum-based Web 3.0 applications. It enables users to receive notifications for on-chain or off-chain activity. EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are triggered if and when a smart contract reaches certain conditions. Other Web3 participants can search, browse, and subscribe to specific notifications and more confidently interact with dapps. In doing so, EPNS combines the seamless user experience of Web 2.0 apps with the security and power of Web 3.0.

Q. What are some of the use cases for EPNS?
-------------------------------------------

We believe almost any application in the Web3 ecosystem can benefit from notifications. Some of the highest-impact immediate opportunities are:

**DEXes**: DEX users can be notified when the price of a token falls or rises a certain percentage. Users can also set up notifications for when their trades are executed and completed, rather than having to check back to see if trades were completed (especially during times of high network traffic). Users can also set up notifications for when gas prices go down or up to help them decide when to trade.

**DeFi**: Lending protocol users can set up notifications to be informed when they are about to be liquidated, rather than needing to check in regularly to ensure. LP providers can also set up notifications about impermanent loss in case they wish to cut their losses short during a volatile market. If DeFi users are interacting with a particularly young or untested protocol, they could set up notifications to inform them if large amounts of funds are being moved around in ways that could signal instability within that dapp.

**NFTs and Gaming:** Trading of NFTs or goods on markets or within games can be connected to EPNS to inform users 1) when certain goods go on sale or auction; 2) when auctions go live from crypto-artists; 3) when a bid is accepted or topped; 4) when one’s own NFT (or anyone else’s) sells.

**ENS/Consumer Apps:** Apps like the Ethereum Name Service (ENS) and .Crypto can notify users when their subscriptions are about to expire, rather than expecting users to remember or check in regularly to remind themselves of upcoming dates.

**Q. Why should I use EPNS?**
-----------------------------

Because for so long, as a Web3.0 user, you waited on Twitter or Telegram for important updates and communications from your favorite dApps. Developers suffered while sending necessary information regarding their app or product over social media, hoping for their users to see it. Of course, without certainty. Consequently, users missed out on crucial notifications, alerts, notices, and offers. EPNS solves these, plus incentivizes both senders and receivers with usage rewards.

**Q. What are the EPNS Products?**
----------------------------------

The EPNS product suite comprises the following elements:

1.  **EPNS Protocol:** The main goal of the EPNS Protocol is to make sure all notifications are prepared and sent in compliance with the protocol standards. This will make every notification readily available to be picked up by the PUSH Nodes in charge of dispatching.
2.  **PUSH Nodes:** The main goal of the PUSH Nodes is to listen to events in the EPNS protocol smart contracts and dispatch the notifications to the corresponding recipients.
3.  **Governance**: Governance is crucial for any decentralized protocol, and EPNS is no exception. We already have introduced liquidity mining and staking along with ROCKSTAR of EPNS NFT and PUSH rewards.
4.  **Alpha dApp**: Using the dApp, Subscribers can receive notifications from web browsers, while Channels can send notifications to decentralized carriers.
5.  **Mobile App:** The mobile app serves the crucial purpose of sending notifications from decentralized protocols to centralized ecosystems, such as Android, iOS, and so on.
6.  **Showrunners**: These are channels through which the EPNS Foundation sends notifications for the benefit of the community. Sending notifications about domain expiry, liquidation, and abnormal gas prices are some of the intended purposes of these channels.
7.  **Development SDKs and Documentation**: For developers looking to easily integrate EPNS with partners, we’ll be releasing the following SDKs — Front-end SDK, Back-end SDK, PUSH Mobile SDK, EPNS Subgraph.

Learn more about the EPNS ecosystem and compliments in our [EPNS Roadmap 2021](https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12).

Q. What are the main components of the EPNS Protocol?
-----------------------------------------------------

Apart from the technological framework, the EPNS protocol consists of Users, who are further divided into Subscribers and Channels.

1.  **Service**: Any dApp / smart contract / service / etc. that wishes to send notifications.
2.  **Channel**: A service who is sending notifications using EPNS. To ensure their skin-in-the-game, Channels need to stake predetermined fees in pools, which are in turn used for incentivizing usage. Developers and Web3 project owners can create channels using the EPNS dApp, JS Library, or custom libraries.
3.  **Subscriber:** A user who subscribes to channels on EPNS for receiving notifications. EPNS adopts the opt-in model for subscriptions, meaning that channels can send notifications only to voluntary participants. Subscriptions can either be direct or indirect, and you can unsubscribe at any time.
4.  **Users**: Any user who is present in the protocol registry.

**Q. What are the types of Channels on EPNS?**
----------------------------------------------

Channels on EPNS can be of 3 types (in future can be more)— Open, Closed, and Mutual. An Open Channel is open to all and anyone can join. In Closed Channels, subscribers can join only on invitation by the channel. Combining these two, a Mutual Channel is such that Subscribers can send requests which the channel has to accept. Apart from these three, there are two special, automated, and opt-in channels — EPNS Channel and EPNS Alerter Channel. These send notifications to Subscribers and Channels respectively.

Q. **How does the EPNS communication layer actually works ?**
-------------------------------------------------------------

The communication layer basically can be categorized in two segments:

1\. **Sending Notifs**: This layer comprises of smart contracts (and later p2p nodes) that acts like a middleware through which all notifs / communication from a service to their subscribers needs to flow. Having these on L1 and L2 ensures even smart contracts can send notifs out.

2. **Receiving and dispersing Notifs:** This layer listens to our middleware smart contracts and then dispatches them forward.

These two segments ensures that communication is standardized, authenticated and can be listened to by any crypto wallet, mobile apps or any other infra service. Detailed read of the protocol can be found here: [https://whitepaper.epns.io](https://whitepaper.epns.io)

**Q. How do Channels send notifications?**
------------------------------------------

EPNS is designed in a way such that Channels send notifications in the form of JSON (JavaScript Object Notation) payloads. This allows for the flexible and streamlined transfer of the notification’s data from a decentralized storage environment. Further, the information is transmitted and recorded on-chain, following due validation. Leveraging EPNS Infra, decentralized protocols can also send notifications to centralized environments. To send notifications, Channels have to bear a fee, payable in ETH or DAI. Apart from directly sending notifications to Subscribers, Channels can also delegate declared wallet addresses to transmit notifications on their behalf. For further details and mathematical expositions, read the [relevant sections from our White Paper](https://whitepaper.epns.io/protocol-specs-section/specifications).

**Q. How can I activate or deactivate a Channel?**
--------------------------------------------------

To activate a Channel, you need to stake 50 DAI or higher, which adds to the staking pool used for distributing token incentives. You can also deactivate the channel by unstaking, but this involves a penalty of 20 DAI — half of it remains in the Stake Pool and the rest goes to the Fee Pool. This mechanism minimizes the risks of bad actors getting onboard.

**Q. Can I get spammed on EPNS?**
---------------------------------

In order to avoid spam, a spam score has been set from 0–1. 0 means that the channel has an excellent score while 1 means the channel is unhealthy. The range adjusts based on positive actions such as a higher number of subscribers, with the passing of time while negative actions are higher than usual unsubscribers, higher than usual notifications, etc. This is guided by the protocol and at a certain range, the protocol will start throttling the notifications or even stop them until the score comes back to a healthier range.

**Q. What are $PUSH tokens and how can I use them?**
----------------------------------------------------

$PUSH is a governance token that also carries usage mining incentives and the ability to split the fee pool in the future whenever the community chooses to enable that, it’s designed to incentivize all actors in the ecosystem to participate and check each other! Keeping this short but a much better version of what all things it does and how it ties to the ecosystem can be found here: [https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a](https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a)

Q. What incentive mechanism are currently available?
----------------------------------------------------

Incentives for participation both in terms of token rewards and otherwise is importance to ensure strong network effects. We already created the following incentives for governance:

*   Introduced liquidity mining and staking on [https://incentives.epns.io](https://incentives.epns.io/)
*   Introduced $ROCKSTAR of EPNS NFTs and $PUSH rewards to signal gratitude to early community and to reward new community and their participation in the ecosystem. [Read more about it here](https://medium.com/ethereum-push-notification-service/the-first-nft-collection-from-epns-677e23173c95).

Q. How can I keep up with EPNS?
-------------------------------

Join our [Telegram](https://t.me/epnsproject), follow us on [Twitter](https://twitter.com/epnsproject), and sign up for our 5 minute [weekly product updates](https://epns.substack.com/).
