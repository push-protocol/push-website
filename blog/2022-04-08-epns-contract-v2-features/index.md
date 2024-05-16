---
slug: epns-contract-v2-features
title: 'EPNS Contract V2 features'
authors: [push]
image: './cover-image.webp'
description: 'EPNS Contract V2 features'
text: 'As Q1 came to an end, one of the most significant tasks that we had was to plan and initiate the design for the 2nd version of our smart contracts.'
tags: [Roadmap, Blockchain, Ethereum, Notifications, Newsletter]
---

import { ImageText } from '@site/src/css/SharedStyling';

![Cover Image of EPNS Contract V2 features](./cover-image.webp)

<!--truncate-->

As Q1 came to an end, one of the most significant tasks that we had was to plan and initiate the design for the 2nd version of our smart contracts.

After our successful Mainnet launch, we’ve been working on not only extending the functionality of our protocol but enhancing and improving the pre-existing features.

Although designing and brainstorming on the new ideas for our EPNS smart contracts, internally as well as with our community is an ongoing process, we have decided on some core functionalities for our EPNS Core V2 contracts.

Alright! Let’s dive in and get a brief overview of each of the new features that we are working on.

### 1. Channel Creation with $PUSH Token (instead of DAI)

One of the most crucial modifications in the new version of our smart contracts will be in the channel creation procedure.

As per the current contract design, in order to create a channel, the channel creator must deposit a sum of 50 DAI to the EPNS Core contract.

However, with the deployment of the new version of the contract, the channel creation procedure will require the user to use the $PUSH token instead of DAI. The users shall now be able to create channels by depositing a minimum amount of 50 $PUSH to the protocol.

The usage of the $PUSH token for channel creation is one of the imperative steps in the direction of having more utility for our $PUSH token. The underlying channel creation mechanism in the smart contract, however, shall remain the same.

### 2. Allowing PUSH Holders to CLAIM their rewards

It can be undoubtedly stated that the functionality for claiming rewards has been one of the most awaited features for our EPNS Core smart contracts, and is probably the star function of our 2nd version of the smart contract.⭐️

In order to provide some colors to it, the intention of claim functionality is to not just limit our users to receiving notifications but also allow them to earn and claim their rewards in $PUSH tokens for being active users of the protocol.

<b>Brief glance at the reward mechanisms</b>

The 2nd version of our EPNS Core contract will come with some imperative modifications in the way rewards are generated and distributed among the participants.

The previous architecture of our EPNS Core contract involved the usage of the AAVE lending protocol for interest generation. As per the current version, whenever a new channel is created, the channel creation fees(DAI) deposited by the channel owner are being lent out to the AAVE’s lending protocol. This ensures that the EPNS Core contract receives the aDAI tokens as interests.

However, with the upgrade of the contract, this procedure for interest generation shall be changed. The new version of the contract shall not include any dependencies on AAVE’s lending protocol. Moreover, as previously mentioned, the token used for the channel creation fee shall also be changed to $PUSH instead of DAI.

Unlike the current contract structure, the 2nd version of the contract shall not deposit the channel creation fees to AAVE. Instead, a particular fraction of the $PUSH token that is to be used for channel creation, shall be stored in the fee pool of the contract.

Moreover, while incentives were initially planned to be distributed only among the channel owners as well as subscribers, they shall now be claimable by every $PUSH Token holder. The amount of rewards claimable by a particular user shall rely on the holder weight of that particular user.

<blockquote><i>More details about the reward distribution mechanism of the EPNS Core contract shall be shared soon</i></blockquote>

### 3. Channel Owners will be able to UPDATE-EDIT their channel details

The new version of the EPNS core shall include the required function that allows a channel owner to edit his channel’s details.

Before I dive deep into this feature, let’s quickly understand what exactly do I mean by channel details.

Whenever a channel is created from the dApp, the creator is required to pass 4 important parameters, i.e.,

- Channel’s Name
- Channel’s Description
- Channel’s Logo, and
- Channel’s CTA

Once all these details are passed, they together form the channel’s identity bytes, which are then stored on IPFS.

However, as per the current implementation of our dApp, a channel cannot edit any of these details once the channel creation is successfully completed. While this leads to an unwanted scenario where any mistake done during channel creation cannot be rectified later, it also stops a channel owner to add or modify their pre-existing channel description, name, or logo

Hence, after a few internal discussions and taking in some valuable feedback from our community, we decided to resolve this concern and include the relevant functions in the smart contracts, to begin with.

The 2nd version of the EPNS Core contract shall have a function that allows, only the channel owner of a particular channel, to edit any specific detail about his/her channel.

<i>Wait! There’s a CATCH</i>

The channel update function in the contract, however, comes with 2 crucial pointers and requirements.

- ⚠️ <b>he NOTICE Sign</b> ⚠️: Whenever a channel owner modifies any specific detail about his/her channel on the protocol, the channel shall appear with an additional note in the View Channels section of the DAPP UI. This note will inform the rest of the users as well as subscribers about the channel’s old name or description.
- 💰 <b>Channel Edit Fees</b> 💰: Editing channel detail comes with fees. A channel owner who wishes to update his channel detail later must deposit pre-defined fees in the protocol in order to be able to edit their channel description, name, or logo. Most importantly, this fee shall keep increasing every time the channel owner makes a new edit in his/her channel details.

The Rationale Behind…

In order to understand the above-mentioned details in a better manner, it's best to get some clarity on the reason behind those two procedures.

Ideally, editing and modifying channel details repeatedly is not a behavior that should be encouraged. Editing and modifying channel details give the power to any malicious channel owner to change the name of their channel to a more popular defi or governance channel, in order to gain subscribers and this shall be a wrong practice.

The above-mentioned procedures allow the users and subscribers to get a clear and transparent detail about a channel’s old details, even if the channel owner changes it later.

Moreover, the strict requirement of fees for editing channel details and increasing the fees with every new edit penalizes and discourages the channel owner to edit important channel details time and again.

### 4. Functionalities for Wallet-To-Wallet Feature

The Wallet-to-Wallet (W2W) chat feature is one of our major milestones of this year and an incredibly interesting feature for the entire Web3 world.

The new version of our smart contracts shall also include the crucial functions in order to implement this feature adequately in our protocol.

As per the current discussions & plans around this feature, any user shall be able to use the wallet to wallet, chat feature on our protocol, with a particular number of addresses. However, if the user wishes to expand his/her boundaries for W2W interaction, they can choose to activate themselves on our EPNS Smart contracts by depositing a specific sum of $PUSH Tokens. This shall ensure that the user can use the W2W chat feature with any number of wallets throughout the web3 world.

### 5. On-Chain Governance — a major step towards our Progressive Decentralized Governance

Since the launch of our EPNS Governance, it can undoubtedly be stated that EPNS wholeheartedly believes in the significance & power of a progressive decentralized governance system.

Considering the current scenario, while the EPNS community is actively participating in different governance frameworks like the Weekly Rockstar NFT, Grants program, etc, we shall have a similar procedure for the further development & upgrades of our smart contracts as well.

As it has already been shared with the community that during the [last security audit by ChainSafe](https://epns.io/EPNS-Protocol-Audit2021.pdf), the EPNS Governance contracts were also audited and qualified for the entire security audit procedure.

Therefore, one of the most significant plans for this year's roadmap items is to initiate our On-Chain governance procedures. This shall ensure that the EPNS community will be capable of participating in the decision-making process for the inclusion of any new features in the contracts, upgrades of the contract to newer versions as well as the overall growth of the protocol.

Moreover, some of the imperative functionalities of the current EPNS Core contract like blocking a channel permanently, verifying a channel, or revoking a channel’s verification shall also be handled via the on-chain governance procedure itself.
