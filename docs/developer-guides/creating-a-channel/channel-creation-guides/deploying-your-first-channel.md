---
description: >-
  This quick tutorial will walk you through setting up a Test Channel using the
  Push Staging dApp
---

# Deploying your First Channel

Any legitimate Ethereum Wallet address can activate itself in the protocol as a Channel, and start sending notifications. In order to set up a channel, a user can create one by using our Push [dapp ](https://app.push.org/)or directly interacting with our [EPNS Core Smart Contracts](../../developer-tooling/push-smart-contracts/epns-core-contract/channel-creation-process-on-smart-contract.md).

In this tutorial, we will use the Push Staging dApp to launch our channel and test notifications features. It's incredibly simple and easy to deploy channels on the Push using our dApp. Without any further ado, let's set up our channel 🚀

## 6 Steps to Create Channel

:::info
Make sure you are ready with your wallet. Push protocol supports both EOA & Multisig wallets.
:::

### Step 1️⃣ - Visit Push dapp

Head to [the Push prod dapp](http://app.push.org/) or the [staging dapp](https://staging.push.org/#/channels) based on your channel creation requirement.&#x20;

### Step 2️⃣ - Connect to Web3

Connect your [Metamask Wallet](https://metamask.io/) or any other supported wallet!&#x20;

<!-- ![Push dApp](<../../.gitbook/assets/Screenshot 2022-06-30 at 5.12.24 PM.png>) -->

### Step 3️⃣ - **Developer** > **Create Channel**

Once Connected, go to the **Developer** > **Create Channel**

<!-- <figure><img src="../../.gitbook/assets/Screenshot 2022-09-05 at 12.27.22 AM.png" alt=""><figcaption><p>Create Channel Page</p></figcaption></figure> -->

:::caution
If you are on a staging environment, don't forget to mint:\
\- [Testnet Ethereum](https://faucet.paradigm.xyz/)\
\- [Goerli Testnet PUSH Tokens](https://goerli.etherscan.io/address/0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33)\
\- [Testnet Matic (If Multichain)](https://faucet.polygon.technology/)
:::

:::danger
Currently, Channel Alias is the only way to enable multi-chain communication and it is **immutable**. It's heavily recommended to understand it and set it up as part of channel creation.
:::

:::info
Faucets giving you trouble? Head to our :point\_right: Push [Discord Channel](https://discord.com/invite/pushprotocol) and ask an admin to send you some.
:::

### in Step 4️⃣ - Understand and fill details (Especially Channel Alias) ****&#x20;

<!-- <figure><img src="../../.gitbook/assets/Screenshot 2022-09-05 at 2.30.03 AM.png" alt=""><figcaption><p>Channel Alias is immutable in Push Protocol v1 and can't be changed later</p></figcaption></figure> -->

#### What is Channel Alias Address?

An alias address is required to enable your channel on other chains so that they are capable of triggering notifications on other chains apart from the Ethereum chain only.&#x20;

:::info
For instance, if you wish to send a notification on the polygon chain, provide the alias address of your channel on Polygon chain. Alternatively, you may choose to keep it blank if you only wish to send notifications on the Ethereum chain itself.
:::

:::caution
Channel Alias is only shown if you switch to any other network than Ethereum. **This means that your channel will be able to send notifications on both Ethereum and the other blockchains which you select!**
:::

Read the section attached below to learn more about channel alias addresses.

{% content-ref url="../../concepts/create-your-notif-channel/what-is-a-channel-alias.md" %}
[what-is-a-channel-alias.md](../../concepts/create-your-notif-channel/what-is-a-channel-alias.md)
{% endcontent-ref %}

### **Step** 5️⃣ - Do Transactions

You will need to do two transactions (and optionally the third one if you are creating a multi-chain channel, more on that in step 6).

1. **Approval of PUSH tokens** -> This transaction ensures that your wallet address has successfully approved the EPNSCore contract to use 50 PUSH tokens on your behalf.
2. **Channel Creation on EPNSCore ->** Once approved, the 2nd transaction calls the channel creation function on EPNSCore smart contract to create the channel.

<!-- <figure><img src="../../.gitbook/assets/Screenshot 2022-09-05 at 2.27.04 AM.png" alt=""><figcaption></figcaption></figure> -->

### **Step** 6️⃣ - Verify Channel on another Blockchain

If you have created a multichain channel then you need to switch to that blockchain network and do another tx that verifies your channel on that network.

<!-- <figure><img src="../../.gitbook/assets/Screenshot 2022-09-05 at 2.33.17 AM.png" alt=""><figcaption></figcaption></figure> -->

:::tip
Congratulations 🎉 Your channel should now be successfully created. YES, it's this much easy..!
:::

## Know your Channel

<!-- <figure><img src="../../.gitbook/assets/Screenshot 2022-09-05 at 2.44.05 AM.png" alt=""><figcaption><p>Channel Dashboard</p></figcaption></figure> -->

After successful channel creation, the EPNS dApp will start showing the Channel's Profile Page. There are a few details about this page listed below for your reference;

* This Channel Profile page shall only be visible to the _**Creator**_ of the Channel.
* The Channel Profile page allows the channel owner to trigger notifications to its subscribers via the dApp.
* This page also gives the channel owner access to the **Settings** button through which the channel owner can perform multiple actions, such as _adding a delegate notification sender for the channel, removing a delegate, deactivating the channel, etc._

Alright, now that you own a Channel, let's understand how you can send notifications to your subscribers and establish better communications in the Web3 world 🥳
