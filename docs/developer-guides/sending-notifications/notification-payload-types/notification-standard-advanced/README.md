# Notification Standard (Advanced)

### What is Notification?

Notifications follow composable blocks that helps achieve modular structure and helps in building on top of them. Any developer can utilize the notification protocol to send out notifications (on-chain or off-chain) to their users from a variety of platforms including web3 protocols, smart contracts, dapps, backend, etc.&#x20;

These notifications are tied to wallet address of the user and are indexed by push nodes allowing any crypto frontend such as wallet, dapp or mobile app to query and display these notifications for the wallet users along with sending them out as push notifications.

<!-- <figure><img src="../../../../.gitbook/assets/image (38).png" alt=""><figcaption></figcaption></figure> -->

### Specifications

```
Verification - To verify the notification
    Identity - To understand the storage format and rules to interpret the notification payload
        Payload - To understand what is the type of notification, what data it contains and to whom it should be addresses to
            Content - To interpret or extend format types for content inside the notification
```

* `Verification` - It defines the way to verify that the payload is valid by checking sender, source, and authenticitiy of the payload content.
* `Identity` - Notification Identity Payload is the standard through which notification payload can be sent to Push Nodes for processing. There are multiple ways by which these payloads can be stored (storage-independent behavior) and identity ensures that the push node are able to understand and construct the notification payload from the data.
* `Payload` - Each notification sent to the protocol is essentially a JSON payload which contains data about things a notification contains, notification recipients and even data to encrypt these notifications. This json payload is what makes Push Protocol payload content-independent and allows for expansion to several new types of notifications based on the community needs and as the communication protocol develops further.
* `Content` - Notification Content Markdown standardize the content markdown and create a standard for styling and formatting.
