---
description: >-
  This package helps to connect to Push backend using websockets built on top of
  Socket.IO
---

# @pushprotocol/socket

:::info
Push for hackers repo contains all code coverage and examples of @pushprotocol/restapi and @pushprotocol/socket [👇](https://emojipedia.org/emoji/%F0%9F%91%87/)
:::

{% embed url="https://github.com/ethereum-push-notification-service/push-for-hackers/tree/main/sdk-functionality" %}
Push for Hackers repo containing code coverage for all sdk functionality with examples
{% endembed %}

## Introduction

The [`@pushprotocol/socket`](https://github.com/ethereum-push-notification-service/push-sdk/tree/main/packages/socket) package contains all the WebSocket implementation for Push Protocol.

The socket client will allow you to receive both notifications and chat messages.

## Chat SDK Features

### Events

The Push SDK contains an `EVENT` object that contains all the supported events. Here below are they:

| Event name                    | When is it triggered?                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| `EVENT.CONNECT`               | Whenever the socket is connected                                                    |
| `EVENT.DISCONNECT`            | Whenever the socket is disconneted                                                  |
| `EVENT.USER_FEEDS`            | Whenever the user receives a new notification after the last socket connection      |
| `EVENT.USER_SPAM_FEEDS`       | Whenever the user receives a new spam notification after the last socket connection |
| `EVENT.CHAT_RECEIVED_MESSAGE` | Whenever a new message or intent is received                                        |

:::info
**Note on Addresses:**

PUSH SDK uses [**CAIP-10**](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) format but defaults to Ethereum address format.

CAIP-10 format is a way to identify multichain addresses. Any blockchain address becomes`namespace + “:” + chain_id + “:” + account_address`



**Example:**

For both Ethereum and Polygon, the namespace is `eip155` and the chain\_id is `1` and `5` respectively:

* Polygon mainnet:

`eip155:137:0x20E0e045F1baB5CD9284602bdf24D050Dc8CB719`

* Ethereum mainnet:

`eip155:1:0x20E0e045F1baB5CD9284602bdf24D050Dc8CB719`

For Goerli and Mumbai testnets, the namespace is `eip155` and the chain\_id is `5` and `80001` respectively:

* Goerli testnet:

`eip155:5:0x20E0e045F1baB5CD9284602bdf24D050Dc8CB719`

* Mumbai testnet:

`eip155:80001:0x20E0e045F1baB5CD9284602bdf24D050Dc8CB719`
:::

:::info
**Push Chat:**\
****\
****For Push Chat related APIs, the address is in the format:&#x20;

**eip155:\< address >** instead of **eip155:\<chain\_id>:\< address >**
:::

### Installation

{% tabs %}
{% tab title="npm" %}
```bash
npm install @pushprotocol/socket ethers
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add @pushprotocol/socket ethers
```
{% endtab %}
{% endtabs %}

Import in your file

```typescript
import { createSocketConnection, EVENTS } from '@pushprotocol/socket';
```

#### For Notification

```typescript
const pushSDKSocket = createSocketConnection({
  user: 'eip155:5:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb', // CAIP-10 format
  env: 'staging',
  socketOptions: { autoConnect: false }
});
```

#### For Chat&#x20;

For now, when instantiating the socket client, you should define the socket type: `notification` or `chat`, with the notification being the default.

```typescript
const pushSDKSocket = createSocketConnection({
    user: 'eip155:0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9', // Not CAIP-10 format
    env: 'staging',
    socketType: 'chat',
    socketOptions: { autoConnect: true, reconnectionAttempts: 3 }
});
```

#### Allowed Options (params with \* are mandatory)

| Param           | Type                       | Default          | Remarks                                                                            |
| --------------- | -------------------------- | ---------------- | ---------------------------------------------------------------------------------- |
| `user*`         | `string`                   | -                | user wallet address in CAIP-10 format                                              |
| `env`           | `string`                   | `'prod'`         | API environment: `'prod'`, `'staging'` or `'dev'`                                  |
| `socketType`    | `'notification' \| 'chat'` | `'notification'` | socket type                                                                        |
| `apiKey`        | `string`                   | -                | api key is needed for chat socket type only                                        |
| `socketOptions` | `object`                   | -                | supports the same as [SocketIO Options](https://socket.io/docs/v4/client-options/) |

:::caution
**`autoConnect`**: Generally, if we don't pass `autoConnect: false`, then the socket connection is automatic once the object is created.

Since we may or may not have the account address handy and wish to start the connection during instantiation, this option makes it easier for us to choose when we want to`connect` or not.
:::

### Subscribing to Socket Events

```typescript
pushSDKSocket?.on(EVENTS.CONNECT, () => { console.log('connected') })
pushSDKSocket?.on(EVENTS.DISCONNECT, (err) => console.log(err));
pushSDKSocket?.on(EVENTS.CHAT_RECEIVED_MESSAGE, (message) => console.log(message))
pushSDKSocket?.on(EVENTS.USER_FEEDS, (notification) => console.log(notification))
pushSDKSocket?.on(EVENTS.USER_SPAM_FEEDS, (spam) => console.log(spam))
```

### Integration with Push Chat

The **`EVENTS.CHAT_RECEIVED_MESSAGE`** event for new messages on Push Chat will only send the new messages after the connection is established. If you want to display the previous messages, use the `@pushprotocol/restapi` package to first fetch all the previous messages from a conversation between two wallets, then use them `socket` to display the latest messages received.
