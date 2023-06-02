---
description: >-
  Push SDK provides an abstraction layer to integrate Push protocol features
  with your Frontend as well as Backend
---

# Push SDK

Push SDK is a growing _**Monorepo**_ of packages that provide solutions for a wide range of development tasks one might come across while building on top of Push protocol. It is a Javascript-based group of packages that helps developers to:

* Send notifications
* Subscribe (opt-in) / Unsubscribe (opt-out)
* Build Push features into their dApps
* Enable Access to Push Nodes APIs
* Render Default Notifications UI, etc

It is written in Typescript and supports React, React Native, Plain JS, and Node JS-based platforms. (We are adding support for more!).&#x20;

It is also built on top of standard Web3 packages like **ethers**, **@web3-react**

### Push SDK Features

A brief glance at the most imperative features of Push SDK along with the associated package and target platform.

|          Feature         | Description                                                             | Monorepo package          | Target platform |
| :----------------------: | ----------------------------------------------------------------------- | ------------------------- | --------------- |
|   Sending Notification   | Send notification to user(s) from a channel.                            | @pushprotocol/restapi     | UI, Server      |
|    Opting to a Channel   | Subscribe to a channel                                                  | @pushprotocol/restapi     | UI, Server      |
|  Opting out of a Channel | Unsubscribe to a channel                                                | @pushprotocol/restapi     | UI, Server      |
|    Fetch Notifications   | Get all the notifications for a user address                            | @pushprotocol/restapi     | UI, Server      |
|        Fetch Spam        | Get all the spam notifications for a user address                       | @pushprotocol/restapi     | UI, Server      |
|  Notification component  | UI React Component to display a notification item.                      | @pushprotocol/uiweb       | UI              |
| Fetch User Subscriptions | Get list of all the channels a user has subscribed.                     | @pushprotocol/restapi     | UI, Server      |
|   Fetch Channel Details  | Get channel details for a specific channel address                      | @pushprotocol/restapi     | UI, Server      |
|   Search for channel(s)  | Query for channel(s) using a keyword                                    | @pushprotocol/restapi     | UI, Server      |
|     Notification View    | UI React Native Component to display a notification item                | @pushprotocol/reactnative | UI-mobile       |
|    Embed Notifications   | UI JS based sidebar modal to display notifications of a user in a dapp. | @pushprotocol/uiembed     | UI              |

:::info
**Note**_**:** It must be noted that the_ Push _SDK uses the_ [_CAIP format_](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) _as of now, in order to provide a chain-agnostic protocol for communication between dapps or wallets._&#x20;

Push SDK uses CAIP10 format but defaults to Ethereum address format, CAIP 10 format is a way to identify multichain addresses which is extended from CAIP 2. Any blockchain address becomes namespace + “:” + chain\_id + “:” + account\_address.\
__\
_However, as we expand our boundaries to multiple chains in the future, we shall define our own specifications, if need be._\
__\
_More details about this are in the_ [epnsproject-sdk-restapi](sdk-packages-details/epnsproject-sdk-restapi/ "mention")__
:::

### Build using Push SDK

{% content-ref url="epns-sdk-starter-kit.md" %}
[epns-sdk-starter-kit.md](epns-sdk-starter-kit.md)
{% endcontent-ref %}

### Learn more about the Push SDK Packages

{% content-ref url="sdk-packages-details/epnsproject-sdk-restapi/" %}
[epnsproject-sdk-restapi](sdk-packages-details/epnsproject-sdk-restapi/)
{% endcontent-ref %}

{% content-ref url="../epns-sdk/sdk-packages-details/epnsproject-sdk-uiembed.md" %}
[epnsproject-sdk-uiembed.md](../epns-sdk/sdk-packages-details/epnsproject-sdk-uiembed.md)
{% endcontent-ref %}

{% content-ref url="sdk-packages-details/epnsproject-sdk-uiweb/" %}
[epnsproject-sdk-uiweb](sdk-packages-details/epnsproject-sdk-uiweb/)
{% endcontent-ref %}

{% content-ref url="sdk-packages-details/pushprotocol-socket/" %}
[pushprotocol-socket](sdk-packages-details/pushprotocol-socket/)
{% endcontent-ref %}
