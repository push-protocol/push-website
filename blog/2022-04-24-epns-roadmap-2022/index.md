---
slug: epns-roadmap-2022
title: 'EPNS Roadmap 2022'
authors: [push]
image: './cover-image.webp'
description: 'Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties'
text: "Q1’s already done and boy has it been an amazing 3 months! We showcase what the EPNS team achieved in Q1."
tags: [Blockchain, Epnsproject, Web3, Crypto]
---
import { ImageText } from '@site/src/css/SharedStyling';

![Cover Image of Roadmap 2022 — Q1 Wrap up](./cover-image.webp)

<!--truncate-->

2021 was the year of enormous things in the crypto world. We witnessed DeFi taking over the world, NFTs driving adoption and landing mainstream spots, Metaverse coming to a room near you and so many more things! And of course, the creation of EPNS Protocol, the communication layer for Web3 that will ensure all of these things (and more!) can function properly.

We had a phenomenal 2021 with building the tech that will empower the future of the internet aka Web3. Continuing with our vision of becoming the de-facto communication layer for Web3, the 2022 roadmap is designed to enable faster adoption of the EPNS protocol, becoming multi-chain, further perfecting the protocol, and enabling developers and wallets alike to integrate the protocol in the smoothest way possible.

To help us achieve our objectives, we will focus on the following product themes:

- EPNS Protocol & Smart Contracts (Send Notifications)
- Progressive Decentralized Governance
- Front-End products: dApp, Mobile App, Browser extension
- PUSH Nodes (Retrieval & Dispatch)
- Technical Documentation

TLDR;

![First Image of Roadmap 2022](./image-1.webp)

### EPNS Protocol (Send Notifications)

![Second Image of Roadmap 2022](./image-2.webp)

2021 witnessed the creation and [successful audit](https://epns.io/EPNS-Protocol-Audit2021.pdf) of the EPNS Smart Contracts!

The main goal of the EPNS Protocol is to make sure all communication is prepared and sent in compliance with the protocol standards. This will make every notification readily available to be picked up by the PUSH Nodes in charge of dispatching.

The year 2021 witnessed quite significant modifications in the EPNS Smart contract.

As we continue to work towards our vision of becoming blockchain agnostic, we have now ensured that our protocol is capable of effectively supporting multi-chain interoperability.

In order for us to provide a communication layer across multiple chains, our protocol has now been divided into 2 major components namely EPNS Core & EPNS Comm(Communicator). As per the current architecture, the EPNSCore contract shall only be deployed to the Ethereum blockchain, the EPNSComm is designed to be used in multiple chains. Read more about the in-depth details about the contracts [here](https://medium.com/ethereum-push-notification-service/roadmap-q3-audited-epns-push-protocol-v1-is-here-f4560dfe550c).

While some of our imperative features like Channel Creation, notification sending, subscribe/unsubscribe, etc; were already designed in our smart contracts, new features are coming to the protocol this year. For instance:

- [Channel State cycles](https://medium.com/ethereum-push-notification-service/roadmap-q3-audited-epns-push-protocol-v1-is-here-f4560dfe550c): This feature allows a channel’s state to be changed in the protocol. A specific channel can either have an inactive, active, deactivated or even a blocked state. Moreover, a channel’s activities and capabilities in the protocol will also be highly dependent on the state of the channel,
- Addition or Removal of Delegate Notification senders: Yes, the whole procedure of Sending notifications to subscribers can now be delegated to any given wallet address. As per the current architecture of the protocol, a channel owner has the power to add any specific wallet address as a valid delegate for his/her channel, thus allowing the wallet to send notifications on his behalf,
- Verification of Channels through the smart contracts.
- Meta transaction for Subscribing, Unsubscribing Sending notifications, etc

Although most of the MVP features are already in place, there will be quite significant upgrades to the EPNS smart contracts in the year 2022 as well.

#### Functionality for Claiming Interests:

- One of the most significant features of our smart contracts and perhaps much-awaited one is the claim interests functionality that allows the users to claim their incentives from the contract.
- While this feature was initially planned for just the channel owners as well as subscribers in the EPNS contract, it is now being designed to distribute rewards among all $PUSH Token Holders. The incentives shall be in the form of $PUSH tokens themselves.
- This entire claim procedure shall be a part of the EPNS Core contracts and will be included very soon.

#### On-Chain Governance Mechanism:

- Since the launch of our EPNS Governance, it has been quite evident that EPNS wholeheartedly believes in the significance & power of a progressive decentralized governance system.
- While the EPNS community is actively participating in different governance frameworks like the Weekly Rockstar NFT, Grants program, etc, we shall have a similar procedure for the further development & upgrades of our smart contracts as well.
- As the EPNS Governance contracts have already qualified the entire security audit, the community shall soon be able to participate in the decision-making process for the inclusion of any new features in the contracts, upgrades of the contract to newer versions as well as the overall growth of the protocol.
- Moreover, some of the imperative functionalities of the current EPNS Core contract like blocking a channel permanently, verifying a channel, or revoking a channel’s verification shall also be handled via the on-chain governance procedure itself.

#### Wallet-to-Wallet Chat Functionality

- As per our recent announcement, one of the super interesting features that we are planning to launch this year is the Wallet to Wallet Chat feature. This functionality is undoubtedly is one of its kind and we are planning to modify our EPNS Core and Comm contracts to ensure this feature can be used adequately.

#### Designing EPNS Comm Contract for Non-EVM Chains:

- Becoming blockchain agnostic demands equal attention to all the different types of chains that exist in the Web3 world.
- While EPNS smart contracts are specifically designed for EVM compatible chains at the moment, we shall soon initiate the design and development process of our smart contracts for non-EVM chains as well.
- Since the EPNS Communicator contract is supposed to be deployed on multiple chains, it is, by design, comparatively simpler than Core and does not rely on the core contract for any of its actions. Hence, we shall especially be focussing on designing the EPNS Communicator contract in order to make it ready for deployment across all different types of chains, including the non-EVM compatible chains.

We are making it easier for teams and individual contributors to make use of all these features to create solutions. A revamped version of the Showrunners Framework will be made available together with Integration Guides aiming to foster a healthy and creative developers community using EPNS as the building block for communication needs.

#### Progressive Decentralized Governance

