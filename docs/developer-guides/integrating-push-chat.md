---
description: Overview about Push Chat SDK
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrating Push Chat

Integrating Push Chat for any functionality is extremely easy. The Push Chat SDK is divided into the following functionalities:

:::tip
This guide provides high-level knowledge about function calls and what they do, to dive into code :point_right: [@pushprotocol/restapi](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/ "mention")
:::

:::tip
Web sockets for Push Chat are live now :point_right: [@pushprotocol/socket](../developer-tooling/push-sdk/sdk-packages-details/pushprotocol-socket/ "mention")
:::

:::info
Push Chat API is in alpha, please bookmark this page for the new APIs introduction.
:::

For an overview of Push Chat, please go to [https://docs.push.org/developers/concepts/push-chat-for-web3](https://docs.push.org/developers/concepts/push-chat-for-web3).

## Rest API Calls

### Installation

```mdx-code-block
<Tabs
    defaultValue="npm"
    values={[
        {label: 'npm', value: 'npm'},
        {label: 'yarn', value: 'yarn'},
    ]}>
<TabItem value="npm">
```

```bash
npm install @pushprotocol/restapi@latest ethers@^5.6
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn add @pushprotocol/restapi@latest ethers@^5.6
```

```mdx-code-block
</TabItem>
</Tabs>
```

### Get User Information

Each User of Push Chat has a PGP key that is created locally and stored encrypted on Push nodes.&#x20;

You are required to get the PGP key and decrypt it locally, for which you can use the following SDK functions.

<details>

<summary><strong>To create the User (</strong><code>sdk.user.create</code>)</summary>

This function will create a new user and return the created user’s information, like the PGP keys. It takes as arguments the address of the wallet and the environment variable.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Initializing User](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/initializing-user.md "mention")

</details>

<details>

<summary>To get the User (<code>sdk.user.get</code>)</summary>

This function will return all the user information, like the PGP keys. It takes as arguments the address of the wallet and the environment variable.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Initializing User](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/initializing-user.md "mention")

</details>

### Fetching Chats for a User

All chats for a user or all chats request for a user can be fetched in a paginated fashion using the following SDK functions:

<details>

<summary><strong>To Fetch  a list of all chats of a User (</strong><code>sdk.chat.chats</code>)</summary>

This function returns all the latest chats from each address the caller is talking to. It’s used to build the inbox on a chat application for an address.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Fetching Chats](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/fetching-chats.md "mention")

</details>

<details>

<summary><strong>To Fetch a list of all chats request of a User (</strong><code>sdk.chat.requests</code>)</summary>

This function returns all the requests that wallet addresses sent to a particular address. In Push Chat, the receiver of the messages must always approve the request to start the chat with the other address.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Fetching Chats](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/fetching-chats.md "mention")

</details>

### Fetching individual messages in a specific Chat

Each conversation between the users or group of users have a conversation hash which is a linked list that contains the encrypted chat messages stored on IPFS. The SDK does the work of fetching, decrypting, and verifying the signature for the messages.

<details>

<summary><strong>Getting conversation hash of a single chat or group (</strong><code>sdk.chat.conversationHash</code>)</summary>

This function returns the conversation hash of the latest message exchanged between the user and the conversation.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Fetching Chats](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/fetching-chats.md "mention")

</details>

<details>

<summary><strong>Getting just the latest message from a single chat or group (</strong><code>sdk.chat.latest</code>)</summary>

This function takes as an argument the conversation hash from a message and then returns the message content decrypted.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Fetching Chats](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/fetching-chats.md "mention")

</details>

<details>

<summary><strong>Getting the history of a single chat or group (</strong><code>sdk.chat.history</code>)</summary>

This function takes in an argument as the conversation hash from a message and the pagination and then returns the message content decrypted.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Fetching Chats](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/fetching-chats.md "mention")

</details>

### Replying to Chats

The Replying chats require the user to approve the request if it's their first time and then interact normally via the send rest API call.

<details>

<summary><strong>To chat with a user or group (</strong><code>sdk.chat.send</code>)</summary>

Use this function to send messages to other addresses.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Sending Chats](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/sending-chat.md "mention")

</details>

<details>

<summary>To approve a chat request of user or group (<em>only required for first time</em>) (<code>sdk.chat.approve</code>)</summary>

When receiving a Request, call this function to approve the request so you can start talking back to the address.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Sending Chats](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/sending-chat.md "mention")

</details>

### For Group Chat

Group chats enable multiple wallet to talk to each other for the first time and provide a number of features (Public, Private, Token Gated, NFT Gated, Transaction Gated, Message Gated) for developers to integrate/build on their dApp.

:::info
Each group has a chat id associated with them. The chat id is used to do modifications to a group or send messages or approve a group chat request.
:::

<details>

<summary>To create a group (<code>sdk.chat.createGroup</code>)</summary>

Use this function to create group chat between multiple wallets.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Group Chat](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/group-chat.md "mention")

</details>

<details>

<summary>To modify a group (<code>sdk.chat.updateGroup</code>)</summary>

Use this function to modify a group name, description, members, etc.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Group Chat](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/group-chat.md "mention")

</details>

<details>

<summary>To fetch a group by group name (<code>sdk.chat.getGroupByName</code>)</summary>

To get info of the group including the chat id which is used to send messages in that group.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Group Chat](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/group-chat.md "mention")

</details>

<details>

<summary>To fetch a group by chat id (<code>sdk.chat.getGroup</code>)</summary>

To get info of the group including by providing chat id of the group.

Read in detail [👉](https://emojipedia.org/backhand-index-pointing-right/) [Group Chat](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/for-chat/group-chat.md "mention")

</details>

:::tip
To learn more about the API params and how to call the Restful API, please check :point_right: [@pushprotocol/restapi](../developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi/ "mention")and :point_right: [@pushprotocol/socket](../developer-tooling/push-sdk/sdk-packages-details/pushprotocol-socket/ "mention")
:::

## Socket API Calls

### Installation

```mdx-code-block
<Tabs
    defaultValue="npm"
    values={[
        {label: 'npm', value: 'npm'},
        {label: 'yarn', value: 'yarn'},
    ]}>
<TabItem value="npm">
```

```bash
npm install @pushprotocol/socket ethers
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn add @pushprotocol/socket ethers
```

```mdx-code-block
</TabItem>
</Tabs>
```

### Import

```typescript
import {
  createSocketConnection,
  EVENTS
} from '@pushprotocol/socket';
```

### **Creating a socket connection object**

<details>

<summary>To create a socket connection (<code>createSocketConnection</code>)</summary>

To create a socket connection and retain the variable.

```javascript
const pushSDKSocket = createSocketConnection({
    user: 'eip155:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb',
    env: 'staging',
    socketType: 'chat',
    socketOptions: { autoConnect: true, reconnectionAttempts: 3 }
});
```

</details>

### Connect and Disconnect

<details>

<summary>To connect the socket (<code>pushSDKSocket.connect()</code>)</summary>

Establishes a socket connection to stream all incoming chat requests, messages, etc.

</details>

<details>

<summary>To disconnect the socket (<code>pushSDKSocket.connect()</code>)</summary>

Disconnects the socket connection.

</details>

### **Subscribing to Socket Events**

<details>

<summary>To subscribe to and react to socket events (<code>pushSDKSocket.on</code>)</summary>

* EVENTS.CONNECT - Whenever the socket is connected
* EVENTS.DISCONNECT - Whenever the socket is connected
* EVENTS.CHAT\_RECEIVED\_MESSAGE - Whenever the user recieves a message or chat requests

**Sample Code**

```javascript
pushSDKSocket.on(EVENTS.CONNECT, () => {

});

pushSDKSocket.on(EVENTS.DISCONNECT, () => {

});

pushSDKSocket.on(EVENT.CHAT_RECEIVED_MESSAGE, (message) => {
  // message is the message object data whenever a new message is received
});
```

</details>

## Push Support Chat

A React component for integrating support chat in DApps.

### How to use it in your app?

Installation:

```bash
yarn add @pushprotocol/uiweb@latest
```

or

```bash
npm install @pushprotocol/uiweb@latest
```

Note: `styled-components` and `@pushprotocol/restapi@0.2.1` are peerDependencies. Please install them in your dApp if you don't have them already!

```mdx-code-block
<Tabs
    defaultValue="npm"
    values={[
        {label: 'npm', value: 'npm'},
        {label: 'yarn', value: 'yarn'},
    ]}>
<TabItem value="npm">
```

```bash
npm install styled-components 
npm install @pushprotocol/restapi@latest
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn add styled-components
yarn add @pushprotocol/restapi@latest
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Support Chat component Usage

```typescript
import { Chat } from "@pushprotocol/uiweb";

<Chat 
    account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address             
    supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address          
/>
```
