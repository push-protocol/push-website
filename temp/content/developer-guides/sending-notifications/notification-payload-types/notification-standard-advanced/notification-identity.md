---
description: Imperative details about identity parameter in notification payload
---

# Notification Identity

Identity defines where the notification is coming from and the rules by which we can get the payload JSON of that specific notification. Currently, supported identities are Minimal, IPFS, Direct, and Subgraph.

## Specifications

Each notification identity carries at least two parameters which are joined by **+**  delimiter.

* **`Storage Type:`**The first parameter represents **the identity type used** (Minimal, IPFS, Direct, etc). The type id represents where the payload is stored or coming from.
* **`Payload storage info`**: Hash of the payload representing proof or pointer from which the payload can be retrieved. The second parameter represents either the **hash or identifying information** that can be used to fetch the necessary JSON which can also be made of composable information.

#### Storage Types

_As of now, there are 4 types of storage that are supported:_

| Id | Type           | Definition                          |
| -- | -------------- | ----------------------------------- |
| 0  | Minimal        | Recommended for Smart Contract      |
| 1  | IPFS           | Indicates storage on IPFS           |
| 2  | Direct Payload | Indicates storage of direct payload |
| 3  | SubGraph       | Indicates storage on the subgraph   |

## **Implementations** for different identity

### **Type 0**

Format: `0+<Notification Type>+<Title>+<Body>`

`<Notification Payload Type>`: Type of notification (Broadcast, Subset, Targetted, Secret, etc)

`<Title>`: This will be the title of the Message. `<Body>`: This will be the body/description of the Message.

Example:

```jsx
0+1+Hello+This is a broadacasted notification
```

### **Type 1**

Format: `1 + <IPFS HASH (cid)>`

`<IPFS HASH (cid)>`: The IPFS hash pointing to the payload. The payload should be as per Push protocol standard for Notification.

Example:

```jsx
1+b45165ed3cd437b9ffad02a2aad22a4ddc69162470e2622982889ce5826f6e3d
```

### **Type 2**

Format: `2+<Payload in string format>`

`<Payload in string format>`: The payload as per Push standard should be stringified and attested to the storage type.

Example:

```jsx
2+{\\"notification\\":{\\"title\\":\\"TEST Title\\",\\"body\\":\\"Test Body\\"},\\"data\\":{\\"acta\\":\\"\\",\\"aimg\\":\\"\\",\\"amsg\\":\\"Test Message\\",\\"asub\\":\\"\\",\\"type\\":\\"3\\",\\"etime\\":\\"\\",\\"hidden\\":\\"\\"}}
```

### **Type 3**

Format: `3 + subgraphId + notification number[counter]`

`subgraphId`: The subgraph id deployed in The Graph. It has the format of `<github id>/<subgraph name>`.

`notification number`: As per the Push entity, every notification has a notification number attached. So, one will need to pass the subgraph number to identify which subgraph data should be sent as a notification.
