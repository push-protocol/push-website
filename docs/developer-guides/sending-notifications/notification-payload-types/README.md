---
description: >-
  Explains the supported notification payload types, and the payload data they
  carry
---

import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Notification Standard

Considering the fact that notifications have been so imperative as well as customizable in web2, we definitely need to ensure that the same experience carries forward in web3 and therefore we have divided notifications into two parts - _**Basic** and **Advanced**._


:::info
**The notification standard (Basic)** covers all the requirements you need to know to start sending notifications.

**Notification standard (Advanced)** covers topics related to the composability of the Push notification protocol, how it works, how it can be expanded, etc
:::

<CustomLinkCard text="Notification Standard Basics" link="./notification-standard-basics"/>

<CustomLinkCard text="Notification Standard Advanced" link="./notification-standard-advanced"/>


Every notification starts its journey as a payload. Internally, the notifications are divided into four composable blocks:

* Verification
* Identity
* Payload
* Content

1. `verificationProof`: A proof to verify if the sender is the rightful entity to send the notification.
2. `identity`: It contains information about the payload. More on it in the later parts of the doc.
3. `sender`: The entity that is trying to send a notification.
4. `source`: The source of the notification.
5. `recipient`: The address to which the sender is trying to send a notification.
