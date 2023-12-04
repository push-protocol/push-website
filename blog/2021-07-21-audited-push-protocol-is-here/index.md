---
slug: audited-epns-push-protocol-v1-is-here
title: 'Roadmap Q3: Audited EPNS Push Protocol V1 is here!'
authors: [push]
image: './cover-image.webp'
description: 'Roadmap Q3: Audited EPNS Push Protocol V1 is here!'
text: "Since its inception, EPNS has been on its mission to build the most effective and reliable communication layer on Web3 to allow sending platform-agnostic and decentralized notifications."
tags: [Blockchain, Epnsproject, Web3, Crypto]
---
import { ImageText } from '@site/src/css/SharedStyling';

![Cover Image of Roadmap Q3: Audited EPNS Push Protocol V1 is here!](./cover-image.webp)

<!--truncate-->

Since its inception, EPNS has been on its mission to build the most effective and reliable communication layer on Web3 to allow sending platform-agnostic and decentralized notifications.

While the initial idea was to build a notification protocol on Ethereum blockchain specifically, we have always had the vision to become Blockchain agnostic. With this goal in mind, we set ourselves the task to make sure we end Q3 with our EPNS Protocol ready to support multi-chain interoperability.

### Understanding the Crucial Changes in the EPNS Protocol
#### Protocol Transformation
The EPNS Protocol has now been divided into two different smart contracts, i.e., <i>EPNS Core & EPNS Communicator.</i>

1. <b>EPNS Core Protocol</b>: The Core protocol (EPNSCore.sol), as the name might indicate, is the main smart contract as it handles some of the most crucial features like Channel creation, governance, channel state changes as well as funds and incentive mechanisms, etc.

It’s very important to note, however, that the EPNS Core smart contract will only be deployed on the Ethereum blockchain and not on any other chain.

2. <b>EPNS Communicator Protocol</b>: Unlike the EPNS Core smart contract, the Communicator Protocol (EPNSComm.sol) is designed to be deployed on multiple chains. The EPNS Communicator protocol is comparatively quite simple.

The communicator protocol includes features that allow users to subscribe to a channel, unsubscribe from a channel as well as the imperative one, i.e., sending notifications. As the communicator protocol can be deployed on various chains, it allows us to trigger notifications on multiple chains and not just the Ethereum blockchain.

#### User Incentives Transformation
With Protocol V1, we move towards blockchain agnostic behavior, the architecture also means that users preferences and notifications validation falls on the network (Push Nodes) as opposed to Ethereum smart contract.

With this new horizon, we understood that our staking (by service) — lending (by protocol)— interest (to users) will be complicated (if not improbable) to design for multi-chain. With this in mind, we are pivoting the earning to Push Token holders, the [token already had time weight](https://etherscan.io/token/0xf418588522d5dd018b425e472991e52ebbeeeeee#readContract) built into it when we launched it in April 2021, we will be utilizing this to calculate the interest and distribute to Push holders.

<blockquote>Note: This feature still required some work as per the <a href="https://twitter.com/ChainSafeth/status/1452640644397248520">audit done by Chainsafe</a>, we will be introducing this feature soon via update once we iron out the clinks.</blockquote>

With that being said, we still are keeping the weight calculation formula on EPNS Communication contracts and will be exploring incentives for the users on different chains as we launch on them.

Alright, it’s time to dive deeper and understand the significant details about both of these smart contracts. Let’s begin with the EPNS Core first.

### EPNS Core Protocol

#### a. Channel Creation on EPNS Core Protocol
The creation of channels as well as storing all the imperative details about a channel is <b>handled only by the EPNS Core protocol on the Ethereum blockchain.</b>

Before we proceed to understand how exactly channels are created in the EPNS Core, it's quite important to understand the 4 different states of channels in the protocol.

Every channel in the protocol might have any one of the following states at a given time:

1. Inactive State: The Inactive state simply means that a particular address has not been activated as a channel yet, on the EPNS Core protocol.
2. Activated State: Once a channel is created for a particular Ethereum address, it is marked as Activated. Activated channels are capable of sending notifications as well as using all other channel-related features available in the protocol.
3. Deactivated State: Every active channel has the power to deactivate itself in the protocol and stop providing its services to the users. Deactivation of a particular channel can only be done by the Channel owner.

Channel deactivation is not a permanent action as the channel owner can choose to reactivate their channel at any time and can go back from Deactivated to Active state, more on this later.
4. Blocked State: Every Activated or Deactivated channel can be sent to a blocked state. Blocking a particular channel is a permanent action as once blocked, a channel cannot reactivate itself on the EPNS Core protocol again.

<blockquote>While as per the current protocol design, only the Push channel admin can block a channel, this power will eventually be shifted to <i>On-Chain Governance.</i></blockquote>

Alright, now that we have a brief idea about all the possible states of a Channel in the protocol, let’s understand the channel creation process on EPNS Core.

Keeping in mind the fact that the EPNS Core resides only on the Ethereum blockchain, it’s important to note that every channel must be created on Ethereum itself.

The entire channel creation process in the protocol can be well understood by breaking it down into 4 main steps:

1. <b>Checkpoints</b>: Before the channel creation process is initiated, the channel address must go through some crucial checkpoints to ensure that it is valid. For instance, some of the significant factors to check are:
a. A channel must not be in an active state before the channel creation process starts.
b. Channel addresses that are already in a blocked state should never be allowed to create channels again.
c. The amount of DAI being deposited for channel creation must be above the minimum threshold, etc.
2. <b>Deposit of Channel Creation Fee</b>: Creating a channel on EPNS Core requires a channel creation fee of at least 50 DAI. In order to create a channel, the channel owner must deposit a sum of at least 50 DAI or more.

The amount of DAI transferred by a channel owner while creating their channel is directly deposited on Aave’s lending pool in order to generate interests in aDAI.
3. <b>Storing imperative Channel data</b>: Once the deposited amount is handled properly, the significant details like channel’s pool contribution, state, weight, the channel creation block number as well as the total number of channels in the protocol, etc, are updated and stored on-chain.
4. <b>Subscribing to important channels</b>: As per the current architecture of the protocol, the new channel being created must subscribe to 3 important channels right at the time of its creation:
a. EPNS Alerter Channel
b. Push Channel Admin
c. Channel owner must subscribe to its own channel as well.
Once all the above-mentioned steps are completed successfully, the channel’s state is activated and it's all set to start sending notifications 🔔.

#### b. Channel State Cycles
As discussed previously, a channel can have 4 states in the protocol, i.e., inactive, activated, deactivated, and blocked. Now that we already have a better understanding of the activated state of a channel, let’s understand the deactivation, reactivation, and blocking of a channel.

1. <b>Channel Deactivation</b>: A channel that is currently in an active state can choose to deactivate itself using the deactivateChannel() function of the protocol. It’s important to note that a channel can only be deactivated by the channel owner.

When a channel is deactivated, a small amount of 10 DAI is deducted as channel deactivation fees. However, the remaining DAI amount, initially deposited at the time of Channel creation, is refunded back to the channel owner in the form of PUSH tokens.

As previously mentioned, the deactivation of a channel is not a permanent action as the channel owner can choose to reactivate their channel at any time. Moreover, it's interesting to note that the channel deactivation fees are added back to the channel’s pool contribution account, once it's reactivated. Let’s understand more about this in the reactivate channel section.
2. <b>Channel Reactivation</b>: Any deactivated channel can always be reactivated at any time by calling the reactivateChannel() function of the EPNS Core protocol. Reactivation of a channel can be done by the channel owner only. The reactivateChannel() function basically changes the state of the channel from a deactivated to an activated state.

It’s important to note that while reactivating their channel, the channel owner must deposit a sum of at least 50 DAI or more to complete the reactivation process.

Alright, now it's time to understand the entire working mechanism of <b>channel activation, deactivation, and reactivation fees.</b>

<blockquote>
1. You Create a new Channel:
-> Minimum Channel Creation fees = 50 DAI
-> 50 DAI is deposited to create a new channel.
-> Channel’s Pool contribution in Core protocol is 50 DAI

2. You Deactivate your Channel.
-> Channel Deactivation Fees = 10 DAI
-> 10 DAI is deducted, and 40 DAI is refunded back to you
-> Channel’s Pool contribution in Core protocol now is 10 DAI

3. You Reactivate your Channel.
-> Minimum reactivation fees = 50 DAI
-> You deposit 50 DAI, for channel reactivation.
-> Your Channel’s Pool contribution in Core protocol now is 60 DAI
(Reactivation Fee(50) + Previous Deactivation Fee(10))
</blockquote>
