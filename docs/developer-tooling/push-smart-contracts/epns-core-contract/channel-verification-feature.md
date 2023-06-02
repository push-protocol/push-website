---
description: >-
  Understanding the Channel verification and revocation of channel verification
  in Push Core V1
---

# Channel Verification Feature

Push  Core contract also includes a new Channel Verification feature which allows Channels to have a verification tag.

The **verification tag** of a Channel has its own significance. While on one hand, a verified channel enhances the user’s reliability on the channel and its notifications, it also gets a comparatively better position on the User interface.&#x20;

### **Understanding the Channel Verification procedure**

Channels in the Push Core protocol can have either a **Primary** or **** a **Secondary verification tag.**

**a. Primary Verification tag:** Channels that have directly been verified by the Push Channel Admin are the ones that have a _**primary verification**_ tag.\
All Primary Verified channels have the power to verify other unverified channels.

**b. Secondary Verification tag:** Channels that have been verified by other Primary Verified channels and not directly by the Push Channel Admin, have a _**secondary verification**_ tag.

### **Revocation of the Verification Tag**

The protocol also allows revocation of the verification tag of any specific channel in specific circumstances. Any channel can be unverified either by the Channel’s actual verifier or Push Channel Admin.

**a.Unverifying a Primary verified channel:** The verification tag of a primary verified channel can only be revoked by the Push channel admin. \
However, an imperative part to note here is the fact that _**once a specific target channel with a primary verification tag is unverified, the secondary verification tag of all those channels that were verified by this target channel will be revoked as well.**_\
For instance:

> &#x20;**1.** **Push Channel Admin** verifies **Channel A — Primary Verification**

> **2. Channel A** verifies **Channel B, C & D — Secondary Verification**

> **3. Push channel admin** revokes the verification of **Channel A after some days**

> **4. Channel B, C, & D** are **unverfied** as well

The infographics below will help understand the verification procedure in the core smart contract effectively:

<!-- ![Channel verification and Unverfication Process in Push CoreV1](<../../../.gitbook/assets/image (14).png>) -->

**b.Unverifying a Secondary verified channel:** A channel with a secondary verification tag can be unverified either by the actual verifier of the channel or by the **Push** channel admin itself. As channels with secondary verification tags cannot verify other channels, their revocation of the verification tag has no impact on any other Channel’s verification tag.
