---
slug: what-is-erc-6551-and-how-s-it-better-than-erc-721
title: 'What is ERC-6551 and How’s It Better than ERC-721?'
authors: [push]
tags: [Erc6551, Eip, Ethereum, Nft, Web Tools]
---

import { SubHeader } from '@site/src/components/SharedStylingV2';

![Docusaurus Image](./cover-image.png)

<!--truncate-->


In 2017, the ERC-721 standard revolutionized the tokenization of digital assets, defining the basic set of rules and functions for creating non-fungible tokens (NFTs). Since then, NFTs have gained significant popularity, transforming how we perceive and interact with digital art, collectibles, virtual real estate, and more.

However, as the NFT space evolved, it became apparent that the ERC-721 standard had certain limitations. For one, the ERC-721 was not compatible with smart contracts and dApps across Ethereum. Additionally, due to static JSON metadata, ERC-721 tokens are inflexible when it comes to Uniform Resource Identifier (URI) codes, security, and efficiency.

Recognizing the need to address these limitations, and enable NFTs to evolve over time, a new standard had to be introduced. Enter the ERC-6551 standard!

## Understanding ERC-6551
ERC-6551, also known as token-bound accounts (or TBA), builds upon the ERC-721 standard by introducing smart contract capabilities to NFTs.

What does this mean?

TBA creates a smart contract wallet for each ERC-721, allowing them to perform transactions, interact with other dApps, hold tokens or other NFTs, or serve as an on-chain identity. TBA is also backward compatible with the ERC-721 standard, meaning that ERC-721 tokens can implement the ERC-6551 standard without requiring any significant modifications.

## How Does ERC-6551 Work?
The ERC-6551 standard leverages a permissionless registry that is compatible with existing ERC-721 tokens. This registry serves as a factory and directory for creating and managing token-bound accounts. By calling a function on the registry and paying a small fee, anyone can create a token-bound account for an ERC-721 token. The registry deploys a proxy contract that represents the token-bound account, inheriting all the properties and metadata of the original ERC-721 token.

The proxy contract incorporates the EIP-1271 standard, enabling the token-bound account to sign messages and verify signatures on behalf of the NFT. This capability empowers token-bound accounts to interact with other smart contracts, including any dApps on the Ethereum network.

## What Are the Core Benefits of ERC-6551 in the NFT Space?
1. Enhanced Composability
2. On-chain Interactivity
3. Trackable History
4. Metadata flexibility

### Enhanced Composability
ERC-6551 allows for the bundling of NFTs with related assets, such as tokens or other NFTs, into a single profile. By consolidating tokens, assets, and NFTs within a single TBA, users can effortlessly transfer assets and seamlessly switch between platforms, greatly enhancing their experience.

### On-chain Interactivity
ERC-6551 enables you to use your NFT address as your on-chain identity and hence interact with other on-chain smart contracts and dApps on the Ethereum network. All without relying on a wallet address.

### Trackable History
ERC-6551 solves the problem of limited transaction history associated with traditional NFTs. With token-bound accounts, owners can obtain insights into an asset’s transaction history and utility beyond simple proof of ownership. This transparency adds value to NFTs and fosters trust and confidence among collectors and creators.

Moreover, based on an NFT’s history, loyalty programs, in-game rewards, airdrops, and more can leverage this new functionality. For lending protocols, this could even facilitate the establishment of credit ratings in the future.

### Metadata flexibility
ERC-721 NFTs have immutable JSON metadata. That is, once the NFT is minted the data can’t be changed. Conversely, ERC-6551 NFTs leave room for additional data and values to be added on the token, making them infinitely more flexible.

## Potential Use Case Example: In-game enhancements
Prior to the introduction of ERC-6551, players could own their in-game characters as ERC-721 NFTs. However, the assets they collected within the game existed as separate tokens in their wallets.

Token-bound accounts change this dynamic by allowing game developers to create “inventories” for players. This means that all game-related assets can be automatically transferred into the character’s wallet, resulting in a smoother user experience. It also enables the creation of in-game user interfaces (UIs) that were previously challenging to implement.

While this example is only one way ERC-6551 NFTs can be used, there are many more applications across DeFi, DAOs, and general web3 tools.

To read more about ERC-6551 EIP, you can do so here 👉 https://eips.ethereum.org/EIPS/eip-6551

Big congratulations and thank you to the team who helped author this incredible development: Jayden Windle, Benny Giang, Steve Jang, Druzy Downs, Raymond Huynh, Alanah Lam, Wilkins Chung, Paul Sullivan.

## Pushing the Boundaries of ERC-6551 with Push NFT-to-NFT Chat
In addition to the release of ERC-6551, Push NFT Chat is also here, providing even more potential utility for NFTs.

Push NFT Chat enables chats to be tied to a specific NFT owned by you, instead of a chat owned by a wallet address. Built as an extension of Push Chat, Push NFT Chat benefits from all the intuitive, user-centric features that Push Chat has while revolutionizing the way NFT holders interact.

By introducing web3 native NFT-to-NFT and dApp-to-NFT instant communication, we’ll be adding to the suite of enhancements that the recently launched ERC-6551 is also bringing to NFTs in web3.

More info about Push NFT Chat 👉 https://push-protocol.medium.com/introducing-push-nft-chat-chats-and-comms-tied-to-your-nfts-done-right-98717c04438d

ERC-6551 might just be the dawn of a new era of NFTs. This game-changing standard is set to break free from the limitations of static assets, paving the way for dynamic, interconnected digital experiences. As we embrace this new paradigm, we embark on an exciting journey where NFTs shape the future of digital ownership. We’re yet to see the boundless possibilities!

### About Push Protocol

Push is the communication protocol of web3. Push protocol enables cross-chain notifications and messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and platform-agnostic fashion. The open communication layer allows any crypto wallet /frontend to tap into the network and get the communication across.

To keep up-to-date with Push Protocol: [Website](https://push.org/), [Twitter](https://twitter.com/pushprotocol), [Telegram](https://t.me/epnsproject), [Discord](https://discord.gg/pushprotocol), [YouTube](https://www.youtube.com/c/EthereumPushNotificationService), and [Linktree](https://linktr.ee/pushprotocol).