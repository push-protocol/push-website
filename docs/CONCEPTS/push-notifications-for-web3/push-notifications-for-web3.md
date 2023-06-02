---
sidebar_position: 2
---

# Push Notification for Web3

### Quick explainer of what web3 notifications are, who can trigger them, its different types etc

Any successfully created channel, in its **active** state, can send notifications to its subscribers about a wide range of things related to defi, governance proposals, web3 news, or any other crucial updates about their protocol/services.

Notifications land in the inbox of those users who are subscribed to the channel. Non-subscribers of a particular channel aren't alerted about notifications from that channel as they land in their spam box.

## Who can Send Notifications?

As per the current design of the protocol, there can be 3 main actors who can send notifications:

**1. Channel Owners:** The owners of a particular channel can send notifications to their subscribers.

**2**. **Delegate Notification Senders:** Channel owners can allow any particular wallet address to send notifications on behalf of his/her channel. This feature is called delegated notifications and you can read more about it in this section 👉[what-are-delegated-notifications.md](what-are-delegated-notifications.md "mention")

**3. Notifications To Yourself:** The Push Communicator allows any address to send notifications to themselves 😃 It’s important to note, however, that the address sends the notification to themselves only.

:::info
**Note:**

_Sending notifications is a gasless transaction and therefore notification senders need not pay any gas fee while sending notifications via the Dapp._

__\
_**Gas** Fees **** are only applicable when **on-chain notifications** are triggered directly from smart contracts._


:::

Now that you have a brief overview of notifications in the protocol, let's understand and explore the different ways to send notifications to your users.

### How to Send Notifications?

{% content-ref url="../../developer-guides/sending-notifications/" %}
[sending-notifications](../../developer-guides/sending-notifications/)
{% endcontent-ref %}

{% content-ref url="../../developer-guides/sending-notifications/using-epns-sdk-gasless.md" %}
[using-epns-sdk-gasless.md](../../developer-guides/sending-notifications/using-epns-sdk-gasless.md)
{% endcontent-ref %}

{% content-ref url="../../developer-guides/sending-notifications/using-subgraph-gasless.md" %}
[using-subgraph-gasless.md](../../developer-guides/sending-notifications/using-subgraph-gasless.md)
{% endcontent-ref %}

### How to Receive Notifications?

{% content-ref url="../../developer-guides/receiving-notifications/receiving-via-aws-sns.md" %}
[receiving-via-aws-sns.md](../../developer-guides/receiving-notifications/receiving-via-aws-sns.md)
{% endcontent-ref %}

{% content-ref url="../../developer-guides/receiving-notifications/" %}
[receiving-notifications](../../developer-guides/receiving-notifications/)
{% endcontent-ref %}

### Learn more about Notification

{% content-ref url="what-are-delegated-notifications.md" %}
[what-are-delegated-notifications.md](what-are-delegated-notifications.md)
{% endcontent-ref %}

{% content-ref url="design-notification-content.md" %}
[design-notification-content.md](design-notification-content.md)
{% endcontent-ref %}
