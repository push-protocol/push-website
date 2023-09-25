---
slug: a-technical-deep-dive-5-simple-steps-to-get-started-with-push-nft-chat
title: 'A Technical Deep Dive + 5 Simple Steps to Get Started With Push NFT Chat'
authors: [push]
tags: [Pushprotocol, Developer, NFT]

---
import { SubHeader } from '@site/src/components/SharedStylingV2';

![Docusaurus Image](./cover-image.webp)

<!--truncate-->

<SubHeader>Exploring the Inner Workings and Implementation of Push NFT Chat for Enhanced NFT-Linked Conversations</SubHeader>


## What is Push NFT Chat?
Push NFT Chat is a seamless and secure communication platform that enables NFTs to chat directly with one another. Unlike traditional chat systems tied to wallet addresses, Push NFT Chat allows chats to be specifically associated with individual NFTs owned by users. This is a game changer for chat integrations.

With Push NFT Chat, users now have the flexibility to choose whether their communications remain connected to their NFTs or their wallets.

So how does it all work?

## Understanding Encryption Methodology of Push NFT Chat
The encryption methodology employed by Push Chat ensures secure and private communication while supporting the unique requirements of Push NFT Chat. Both Push Chat and Push NFT Chat rely on PGP keys which form the foundation for wallet-to-wallet communication. These keys are encrypted and stored on the Push Network, facilitating end-to-end encrypted (E2EE) universal inboxes.

Push NFT Chat utilises a distinct encryption mechanism specifically tailored to support NFT chats. This approach combines security and versatility, allowing seamless integration with NFTs. The encryption process involves a three-pass encryption procedure for new users:

1. A secret key is generated on the client side, automatically by the SDK, with the user having the option to choose the secret key if desired.
2. The generated secret key is then used to encrypt the locally generated PGP key on the client side.
3. Subsequently, the wallet encrypts the secret key itself, along with the encrypted PGP key. The encrypted versions of both the secret key and the PGP key are stored on the Push nodes.

Despite the integration of NFT-specific features, the default behaviour of Push Chat remains intact. Users still sign in once to unlock their Push Profiles and initiate messaging. However, the updated implementation now offers support for chat and connection transfers when moving NFTs to different wallets.

This means, even if you move your NFT from one wallet to another, your chats still remain tied to that NFT. In the case of transferring ownership of your NFT, unless you give that new owner your password, they’ll be required to create a new chat profile and hence be unable to access your previous chats tied to the NFT (more on ownership transfer in Step 5 of Getting Started).

This enhanced functionality ensures a seamless and continuous user experience while maintaining the security and privacy of communications.

The encryption methodology of Push Chat guarantees the protection of user data and enables the integration of NFTs into the communication framework, empowering users to securely connect and communicate in the context of their NFTs.

## Getting Started with Push NFT Chat
To get started with Push NFT Chat, the easiest approach is to utilise the Push SDK package. This can be seamlessly integrated into your frontend to develop custom NFT-tied chat systems. Additionally, Push NFT Chat can be deployed in the backend to implement automated chatbots or systems.

This guide is designed to showcase the straightforward process of building an NFT chat system with Push NFT Chat. Despite the complexity of the underlying logic, the Push Protocol abstracts away the intricacies, making the implementation remarkably simple for developers.

For the purpose of this guide, we will walk through the process of writing a simple TypeScript script to send NFT-tied chat messages.

## Step 1: Setting up the Environment
To begin, you need to set up your development environment.

Ensure that you have the necessary dependencies installed, such as Node.js, TypeScript and ts-node. Create a new project directory and initialise it with a package.json file. Install the Push SDK package which will fetch and install the required dependencies.


```js
# create project directory
mkdir nft-chat-guide
# browse to project directory
cd nft-chat-guide
# Initialise the project
npm init --y
# Install the dependencies
npm install @pushprotocol/restapi@latest ethers@^5.6
# Create the main ts file
touch index.ts
```

<blockquote><i>Note: ethers is a peer dependency required by the restapi package</i></blockquote>

## Step 2: Creating an NFT-Chat Profile
Before you can create an NFT-Chat profile, it is essential to have a wallet that owns an NFT. This ensures that you have a unique NFT to associate with your chat profile. You have the flexibility to choose from various options: you can utilise any NFT available or even create your own NFT contract and mint some NFTs specifically for this purpose.

```js
# setup .env file to store private info safely
touch .env
npm install dotenv
# type definitions for nodeJs
npm install --save @types/node
```

Inside index.ts add the following code to create a Push NFT chat profile.

```js
import { PushAPI } from '@pushprotocol/restapi'
import { ENV } from '@pushprotocol/restapi/src/lib/constants'
import * as dotenv from 'dotenv'
import { ethers } from 'ethers'
dotenv.config()

// using staging environment
const env = ENV.STAGING

/**
* Creates a Push NFT Profile
* @param signer - signer of wallet which owns the NFT
* @param account - NFT account
* @param password - password of NFT Profile
*/
const PushAPI_nft_user_create = async (
 signer: ethers.Signer,
 account: string,
 password: string
) => {
 const response = await PushAPI.user.create({
   account,
   signer,
   env,
   additionalMeta: { NFTPGP_V1: { password } },
 })
 return response
}

const NFT_CHAT = async () => {
 // private key of wallet holding the NFT
 const nftHolderWalletPrivatekey1 = process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_1
 const nftSigner1 = new ethers.Wallet(`0x${nftHolderWalletPrivatekey1}`)
 // nft:eip155:${nftChainId}:${nftContractAddress}:${nftTokenId}
 const nftAccount1 =
   'nft:eip155:5:0x42af3147f17239341477113484752d5d3dda997b:2'
 // user preferred profile password
 const nftProfilePassword1 = '@PushNFTProfile#01'
 const pushProfile1 = await PushAPI_nft_user_create(
   nftSigner1,
   nftAccount1,
   nftProfilePassword1
 )
 console.log(pushProfile1)
}

NFT_CHAT()
```

Behind the scenes, the Push SDK handles the creation of data for your Push profile, incorporating verification proofs that are subsequently verified by the Push nodes. These verification proofs help establish the authenticity and integrity of your profile within the Push network.

Moreover, the Push nodes play a crucial role in verifying the ownership of the NFT associated with your wallet on the blockchain. This verification process ensures that the NFT is genuinely owned by your wallet address, providing a secure and reliable connection between your NFT and your NFT-Chat profile.

### Step 3: Sending messages to another Push Profile
An NFT-Push Chat Profile can send messages to another NFT-Push Profile or a wallet-based Push profile. In the following example, we would see how one NFT Profile can send a message to another NFT Profile.


```js
import { PushAPI } from '@pushprotocol/restapi'
import { ENV } from '@pushprotocol/restapi/src/lib/constants'
import * as dotenv from 'dotenv'
import { ethers } from 'ethers'
dotenv.config()

// using staging environment
const env = ENV.STAGING

const NFT_CHAT = async () => {
 /**
  * 1. PROFILE CREATIONS
  */
 // 1.1 Create PushProfile#1
 const nftSigner1 = new ethers.Wallet(
   `0x${process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_1}`
 )
 const nftAccount1 =
   'nft:eip155:5:0x42af3147f17239341477113484752d5d3dda997b:2'
 const nftProfilePassword1 = '@PushNFTProfile#01'
 const pushProfile1 = await PushAPI.user.create({
   account: nftAccount1,
   signer: nftSigner1,
   env,
   additionalMeta: { NFTPGP_V1: { password: nftProfilePassword1 } },
 })
 // 1.2 Create PushProfile#2
 const nftSigner2 = new ethers.Wallet(
   `0x${process.env.NFT_HOLDER_WALLET_PRIVATE_KEY_2}`
 )
 const nftAccount2 =
   'nft:eip155:5:0x42af3147f17239341477113484752d5d3dda997b:3'
 const nftProfilePassword2 = '@PushNFTProfile#02'
 const pushProfile2 = await PushAPI.user.create({
   account: nftAccount2,
   signer: nftSigner2,
   env,
   additionalMeta: { NFTPGP_V1: { password: nftProfilePassword2 } },
 })
 /**
  * 2. SENDING MESSAGE FROM PROFILE#1 TO PROFILE#2
  */
 // 2.1 Decrypt keys for PushProfile#1
 const decryptedPGPPrivateKey = await PushAPI.chat.decryptPGPKey({
   encryptedPGPPrivateKey: pushProfile1.encryptedPrivateKey,
   account: nftAccount1,
   signer: nftSigner1,
 })
 // 2.2 send the actual message
 const response = await PushAPI.chat.send({
   messageContent: "Gm gm! It's me... Mario",
   messageType: 'Text', // can be "Text" | "Image" | "File" | etc
   receiverAddress: nftAccount2,
   account: nftAccount1,
   pgpPrivateKey: decryptedPGPPrivateKey,
   env: env,
 })
 console.log(response)
}

NFT_CHAT()
```

In the Push NFT Chat system, messages are encrypted using the PGP public key of the intended receiver. This encryption ensures that only the recipient’s Push profile possesses the corresponding private key required to decrypt and access the chats. By utilizing PGP encryption, the security and confidentiality of the messages are upheld, providing a trusted communication channel.

To ensure decentralized storage and robust availability, the messages in Push NFT Chat are stored on IPFS. IPFS allows for distributed and peer-to-peer storage, ensuring that the messages are not reliant on a single central server. This decentralized storage approach enhances data resilience and availability, making the system more robust against failures or data loss.

In order to maintain a controlled and spam-free communication experience, when one Push profile attempts to send a message to another profile, it is delivered as an intent rather than a direct message. This means that the message is sent to the receiver as a request or proposal, requiring their approval before it is fully delivered and visible in their chat. This intent-based delivery system helps prevent spamming and unwanted messages, ensuring that the recipient has control over the content they receive.

## Step 4: Getting chats, requests and approving intents
Continuing from Step 3. we would now fetch all requests received by an NFT Profile and approve the intent.

```js

...
...

 /**
  * 3. GETTING ALL CHAT REQUESTS OF PUSHPROFILE#2
  */
 // 3.1 Decrypt keys for PushProfile#2
 const decryptedPGPPrivateKey2 = await PushAPI.chat.decryptPGPKey({
   encryptedPGPPrivateKey: pushProfile2.encryptedPrivateKey,
   account: nftAccount2,
   signer: nftSigner2,
 })
 // 3.2 Getting all requests or intents for PushProfile#2
 const requests = await PushAPI.chat.requests({
   account: nftAccount2,
   toDecrypt: true, // to decrypt the received request messages
   pgpPrivateKey: decryptedPGPPrivateKey2,
   env: env,
 })
 console.log(requests)
 // 3.3 Approve the request by PushProfile#2
 await PushAPI.chat.approve({
   status: 'Approved',
   senderAddress: requests[0].did, // push profile which sent the request ie nftAccount1
   account: nftAccount2,
   signer: nftSigner2,
   pgpPrivateKey: decryptedPGPPrivateKey2,
   env: env,
 })
 // 3.4 Fetching the chats of PushProfile#2
 // After approval of intent, messages sent by PushProfile#1 will be visible in chats of PushProfile#2
 const chats = await PushAPI.chat.chats({
   account: nftAccount2,
   toDecrypt: true, // to decrypt the received chat messages
   pgpPrivateKey: decryptedPGPPrivateKey2,
   env: env,
 })
 console.log(chats)
}

NFT_CHAT()
```

## Step 5: Transferring Chats on NFT transfer
On transferring an NFT the new NFT holder wallet has two choices:

### 1. Starting as a fresh new Push Chat Profile with no previous history of past NFT owner chats.

```js 
...
...
 /**
  * 4 PUSHPROFILE#1 TRANSFERRED NFT TO ANOTHER WALLET
  */
 const newNftSigner1 = new ethers.Wallet(
   `0x${process.env.NEW_NFT_HOLDER_WALLET_PRIVATE_KEY_1}`
 )
 const newNftProfilePassword1 = '@NEWPushNFTProfile#01'
 // 4.1 New NFT Owner resets the Push NFT Profile
 const newPushProfile1 = await PushAPI.user.create({
   account: nftAccount1,
   signer: newNftSigner1,
   env,
   additionalMeta: { NFTPGP_V1: { password: newNftProfilePassword1 } },
 })
}

NFT_CHAT()
```

### 2. Continue with the chats of previous NFT owners.

```js
...
...
  /**
  * 4 PUSHPROFILE#1 TRANSFERRED NFT TO ANOTHER WALLET
  */
 const newNftSigner1 = new ethers.Wallet(
   `0x${process.env.NEW_NFT_HOLDER_WALLET_PRIVATE_KEY_1}`
 )
 const newNftProfilePassword1 = '@NEWPushNFTProfile#01'
 // 4.1 Decrypt the keys from password of the previous owner
 const profile1DecryptedPGPPrivateKey = await PushAPI.chat.decryptPGPKey({
   encryptedPGPPrivateKey: pushProfile1.encryptedPrivateKey,
   account: nftAccount1,
   env: env,
   additionalMeta: {
     NFTPGP_V1: {
       password: nftProfilePassword1,
     },
   },
 })
 // 4.2 New NFT Owner continues with the Old Profile with re-encrypting keys with new Wallet
 await PushAPI.user.auth.update({
   pgpPrivateKey: profile1DecryptedPGPPrivateKey,
   pgpEncryptionVersion: ENCRYPTION_TYPE.NFTPGP_V1,
   signer: newNftSigner1,
   pgpPublicKey: pushProfile1.publicKey,
   account: nftAccount1,
   env: env,
   additionalMeta: {
     NFTPGP_V1: {
       password: newNftProfilePassword1, //new nft profile password
     },
   },
 })
}

NFT_CHAT()
```
Continuing the chats of the previous NFT owner requires the previous owner’s password. This means that the previous owner of the NFT has the option to decide whether or not to hand over the password to the new NFT owner.

When ownership of an NFT tied to a chat profile is transferred from one individual to another, the previous owner’s password is necessary to maintain access to the ongoing chats associated with that NFT. This approach ensures that the new NFT owner does not automatically inherit access to the previous owner’s private conversations without explicit authorization.

By giving control over the password transfer to the previous NFT owner, Push NFT Chat respects the privacy and consent of all parties involved. It provides a transparent process where the previous owner can choose to share or withhold the password, allowing for a seamless transition of NFT ownership while maintaining the security and confidentiality of the chat history.

## Exploring Additional Capabilities of Push NFT Chat
- [Creating Public / Private Groups for NFT Chat Profiles](https://github.com/ethereum-push-notification-service/push-sdk/blob/88bafe49d489cfe399efa7166407a50574995b16/packages/examples/sdk-backend-node/src/main.ts#L1390)
- [Listening to Chat Socket Events for NFT Chat Profiles](https://github.com/ethereum-push-notification-service/push-sdk/blob/88bafe49d489cfe399efa7166407a50574995b16/packages/examples/sdk-backend-node/src/main.ts#L1546)


### About Push Protocol

Push is the communication protocol of web3. Push protocol enables cross-chain notifications and messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and platform-agnostic fashion. The open communication layer allows any crypto wallet /frontend to tap into the network and get the communication across.

To keep up-to-date with Push Protocol: [Website](https://push.org/), [Twitter](https://twitter.com/pushprotocol), [Telegram](https://t.me/epnsproject), [Discord](https://discord.gg/pushprotocol), [YouTube](https://www.youtube.com/c/EthereumPushNotificationService), and [Linktree](https://linktr.ee/pushprotocol).
