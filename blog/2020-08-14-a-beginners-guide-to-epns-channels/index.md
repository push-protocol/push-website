---
slug: a-beginners-guide-to-epns-channels
title: 'A Beginner’s Guide to EPNS Channels!'
description: 'A Beginner’s Guide to EPNS Channels!'
authors: [push]
image: './cover-image.webp'
text: "With the dawn of Web3.0 and the rising need for a decentralized communication system between dApp services and users, came the creation of **Ethereum Push Notification Service** (EPNS). EPNS is a **decentralized notification protocol** at its heart. It provides the means to communicate information which can be of different types, carry different utilities and perform different tasks as per their use cases. It also allows users to be in control of what notifications they receive allowing them to subscribe to and even unsubscribe from the channels that they deem fit."
tags: [ Ethereum
,Blockchain
,Web3
,Notifications
,Blog
]
---
import { ImageText } from '@site/src/css/SharedStyling';

![Cover Image of A Beginner’s Guide to EPNS Channels!](./cover-image.webp)

<!--truncate-->

An overview of types, activation mechanism and use cases of an EPNS Channel

With the dawn of Web3.0 and the rising need for a decentralized communication system between dApp services and users, came the creation of **Ethereum Push Notification Service** (EPNS). EPNS is a **decentralized notification protocol** at its heart. It provides the means to communicate information which can be of different types, carry different utilities and perform different tasks as per their use cases. It also allows users to be in control of what notifications they receive allowing them to subscribe to and even unsubscribe from the channels that they deem fit.

All this sounds great! But now the question arises from someone who is providing a dApp service — “_How do I create a channel and access all these cool features to be able to communicate with my clients?_”.

And the solution, my dear friend, is actually really (and I do mean REALLY) simple! But before I answer that question for you, let’s just lay down a general idea of what a channel is and what can it really do.

Channels
========

> Any user on the protocol who activates themselves on it to send notifications is called a **Channel**.

In other words, anyone who is a user of the protocol has the ability to become a channel owner and start sending notifications to its subscribers. One may consider this to be something similar to a Youtube Channel, where any user — if they want to — can create a channel and start posting content on their channel.

A service just needs to follow a one-time procedure in order to upgrade itself to create a channel and the channel owner will always be the first subscriber of the channel as soon as the channel is activated, it’s not possible to remove the channel owner (subscriber) from their own channel.

Types Of Channels
-----------------

Just like any other feature provided in the protocol, EPNS provides the channel owner full freedom in what kind of a channel it wants to create based on its business use case! This allows channel owners to be flexible and adapt their own channel to the use case they wish to accomplish from the protocol. Currently, the protocol offers 3 main types of channels with the promise to add even more types in the near future!

The 3 types of channels available now are:

1\. **Open Channel**: This is the default channel type on EPNS. In this, the channel is created by the service and is intended to be open for any user to come and subscribe without any restrictions. But it doesn’t end there, what if you as a service wants to add a user to the channel to increase reach? In this case, a channel can also indirectly subscribe the user to it, but here’s the catch, the channel must pay the user a minor fee in order to do an indirect subscription. This creates a **win-win** situation for both the user and the channel — the channel is able to bring a new user into their communication stream and the user gets paid a fee for being subscribed to the channel without consent. But if a user feels that the channel is not of their interest, they may choose to unsubscribe from that channel and the channel will not be able to add that same user back again through indirect subscription, in this way the user still has a control on what they see and do not see!

2\. **Closed Channel**: A service can opt to create a closed channel. Just as the name suggests, these types of channels are closed and cannot be directly subscribed by the user, but can only be added by the channel owner. A good analogy to this would be your group chats in your favourite messaging apps like Whatsapp and Telegram (if you haven’t joined our Telegram group do so [here](https://t.me/epnsproject)!). Just like group chats in Whatsapp — only users added to the group are able to communicate with the group members and see messages passed within the group — Closed channels provide a way for services to control to an extent which users are able to access the channel and be a part of it. And yes, the minor fee still exists, since the service is technically subscribing users to their channel without consent, it is an indirect subscription.

Let’s take the example of MakerDAO. MakerDAO can create an official channel where any user can subscribe to it (open channel) but they can also create a MakerDAO Token Holder Channel wherein they only allow wallet addresses that hold the MakerDAO tokens to gain access to the channel. What would be the reason they would create such a channel? Well, MakerDAO would add token holders for the purpose of governance voting. In this way, they get to ensure to provide a smooth means of communication with the user as well as organize their governance system much better.

3\. **Mutual Channel:** EPNS also allows a service to create a mutual channel — one could say, a mix of both the above types of channels — In this the user may opt to subscribe directly to the service channel but will only be considered subscribed after the mutual consent of the channel owner as well. This could be considered as sending a follow request to a private Instagram account!

A channel can be updated as long as there are no subscribers. The channel becomes immutable as soon as a new subscriber joins the channel.

What must I do to activate a Channel?
=====================================

So far we have explored what a channel is and the different types of channels there are. So what must a user do to activate itself as a channel?

As stated before, a service needs to activate itself on the protocol as a one-time step before they can send notifications to their subscribers. When a service is activated on the protocol, they are referred to as a Channel.

Did we mention that a user earns tokens when they subscribe to a channel? Good news, they do!

But where do these tokens come from?

When a channel is activated, the channel is required to stake fees in DAI of 50 DAI or higher, this is used to create a staking pool which in turn interacts with the AAVE Protocol to earn interest. This interest is then distributed back to all the subscribers of the channel of that service in a weighted manner, favouring early subscribers more than the later ones. So if a channel stakes more DAI, then it incentivizes more users to subscribe to their channel in order to earn higher interests!

What can a Channel Owner do?
----------------------------

So, you’ve activated yourself as a channel, you’ve staked your DAI, you’ve even started to get subscribers. Now what? Well, now you may send various types of notifications to your subscribers! Gone are the old days of dreading a boring old plain text notification, now you may even add images, videos and link to your own website through the EPNS protocol!

Although notifications and its types may be an article on itself, here is a small brief on the various types of notifications provided by the protocol.

1\. **Direct Payload Notification**: Direct payloads are special payloads meant for sending directly to the protocol.

2\. **Broadcast Notification**: Broadcast notification goes to all subscribers of a channel; the notification payload, in this case, is not encrypted.

3\. **Secret Notification**: Secret notifications are intended to be delivered to one subscriber of the channel, and are encrypted.

4\. **Targeted Notification**: Targeted notifications go to a single subscriber of a channel; the notification payload, in this case, is not encrypted.

Conclusion
==========

EPNS is a decentralized DeFi Notification protocol that enables users (wallet addresses) to receive notifications and earn from them. It enables wallet addresses to receive notifications in a platform-agnostic fashion from both decentralized and centralized carriers.

With incentives for users to subscribe to channels in order to gain weighted interest from the stake of the channel and with the added flexibility for channels to create different types of channels to reach out to their user in not just plain text notifications but also various forms of multimedia like video and images. Services get to fulfil their business goal to be able to reach their customers and provide a more fluid and dynamic experience. Services can now reach their users, rather than a user going to the service. EPNS sounds like a good deal for almost every participant involved!

_Connect with us if you have any questions!_

> _Telegram:_ [_https://t.me/epnsproject_](https://t.me/epnsproject)
> 
> _Twitter:_ [_https://twitter.com/epnsproject_](https://twitter.com/epnsproject)
> 
> [_Github_](https://github.com/push-protocol/push-website)_:_ [_https://github.com/ethereum-push-notification-service_](https://github.com/push-protocol/push-website)

_Reference:_ [_EPNS Whitepaper_](https://whitepaper.epns.io/)
