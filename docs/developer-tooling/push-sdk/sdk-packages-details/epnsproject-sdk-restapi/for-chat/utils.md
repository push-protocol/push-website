---
description: Helper functions
---

import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Chat Helper Utils

## **Decrypting messages**

SDK functions provide params to automatically do this for you (via **toDecrypt** flag). However, you can use the following helper function to decrypt a chat message or array of messages if you wish to do so manually.

```typescript
// pre-requisite API calls that should be made before
// need to get user and through that encryptedPvtKey of the user
const user = await PushAPI.user.get({
    account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7'
  });
  
// need to decrypt the encryptedPvtKey to pass in the api using helper function
const pgpDecryptedPvtKey = await PushAPI.chat.decryptPGPKey({
    encryptedPGPPrivateKey: user.encryptedPrivateKey, 
    signer: _signer
});

// get threadhash, this will fetch the latest conversation hash
// you can also use older conversation hash (called link) by iterating over to fetch more historical messages
// conversation hash are also called link inside chat messages
const conversationHash = await PushAPI.chat.conversationHash({
  account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7',
  conversationId: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d' // receiver's address or chatId of a group
});
  
// chat history but with decrypt helper so everything is encrypted
const encryptedChats = await PushAPI.chat.history({
  threadhash: conversationHash.threadHash,
  account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7',
  limit: 2,
  toDecrypt: false,
  pgpPrivateKey: pgpDecryptedPvtKey
});
  
// actual api
const decryptedChat = await PushAPI.chat.decryptConversation({
  messages: encryptedChats, // array of message object fetched from chat.history method
  connectedUser: user, // user meta data object fetched from chat.get method
  pgpPrivateKey: pgpDecrpyptedPvtKey //decrypted private key
});
```

#### Allowed Options (params with \* are mandatory)

| Param           | Type   | Default  | Remarks                                                  |
| --------------- | ------ | -------- | -------------------------------------------------------- |
| env             | string | `'prod'` | API env: `'prod'`, `'staging'`, `'dev'`                  |
| messages\*      | string | -        | array of message object fetched from chat.history method |
| connectedUser\* | IUser  | `false`  | user meta data object                                    |
| pgpPrivateKey   | string | `null`   | mandatory for users having pgp keys                      |

<CustomLinkCard text="Decrypt Chat Messages" link="https://www.npmjs.com/package/@pushprotocol/restapi#decrypting-messages"/>
