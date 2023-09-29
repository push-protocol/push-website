import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Sending Chat

## Pre-requisite: Deriving the signer

Some functions require passing the signer object with the API call. fetching signer for web3 wallets is quite easy.

```mdx-code-block
<Tabs
    defaultValue="frontend"
    values={[
        {label: 'When Using Frontend', value: 'frontend'},
        {label: 'When Using Backend', value: 'backend'},
    ]}>
<TabItem value="frontend">
```

```typescript
// any other web3 ui lib is also acceptable
import { useWeb3React } from "@web3-react/core";
.
.
.
const { account, library, chainId } = useWeb3React();
const signer = library.getSigner(account);
```

```mdx-code-block
</TabItem>
<TabItem value="backend">
```

```typescript
const ethers = require('ethers');
const PK = 'your_channel_address_secret_key';
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
```

```mdx-code-block
</TabItem>
</Tabs>

## **To send a message**

Enables sending messages to a user or a group (via chat id).

```javascript
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

// actual api
const response = await PushAPI.chat.send({
  messageContent: "Gm gm! It's me... Mario",
  messageType: 'Text', // can be "Text" | "Image" | "File" | "GIF" 
  receiverAddress: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d',
  signer: _signer,
  pgpPrivateKey: pgpDecrpyptedPvtKey
});
```

#### Allowed Options (params with \* are mandatory)

| Param             | Type                                 | Default | Remarks                                      |
| ----------------- | ------------------------------------ | ------- | -------------------------------------------- |
| messageContent    | string                               | ''      | message to be sent                           |
| messageType       | 'Text' \| 'Image' \| 'File' \| 'GIF' | 'Text'  | type of messageContent                       |
| receiverAddress\* | string                               | -       | user address or group chat id (Partial CAIP) |
| signer\*          | -                                    | -       | signer object                                |
| pgpPrivateKey     | string                               | null    | mandatory for users having pgp keys          |
| env               | string                               | 'prod'  | API env - 'prod' or 'staging'                |

<CustomLinkCard text="To Send Message" link="https://www.npmjs.com/package/@pushprotocol/restapi#to-send-a-message"/>

## **To approve a chat request**

Approves a chat request from a user or group (one-time process). Enables native web3 push notifications as soon as approval is done.

```javascript
const response = await PushAPI.chat.approve({
  status: 'Approved',
  account: '0x18C0Ab0809589c423Ac9eb42897258757b6b3d3d',
  senderAddress : '0x873a538254f8162377296326BB3eDDbA7d00F8E9' // receiver's address or chatId of a group
});
```

#### Allowed Options (params with \* are mandatory)

| Param           | Type       | Default    | Remarks                                                                        |
| --------------- | ---------- | ---------- | ------------------------------------------------------------------------------ |
| status          | 'Approved' | 'Approved' | flag for approving and rejecting chat request, supports only approving for now |
| senderAddress\* | string     | -          | chat request sender's address or chatId of a group                             |
| signer\*        | -          | -          | signer object                                                                  |
| pgpPrivateKey   | string     | null       | mandatory for users having pgp keys                                            |
| env             | string     | 'prod'     | API env - 'prod' or 'staging'                                                  |

<CustomLinkCard text="To Approve a Chat Request" link="https://www.npmjs.com/package/@pushprotocol/restapi#to-approve-a-chat-request"/>
