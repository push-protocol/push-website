import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Fetching Chats

## **Fetching list of user chats**

A user generally will have multiple chats associated with them (ie: them talking to multiple wallets). Use the following function to get information about all the chats that they are a part of.

```typescript
// pre-requisite API calls that should be made before
// need to get user and through it, the encryptedPvtKey of the user
const user = await PushAPI.user.get({
  account: `eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7`,
  env: ENV.STAGING,
})

// need to decrypt the encryptedPvtKey to pass in the api using helper function
const pgpDecrpyptedPvtKey = await PushAPI.chat.decryptPGPKey({
  encryptedPGPPrivateKey: user.encryptedPrivateKey,
  signer: signer,
})

// Actual api
const response = await PushAPI.chat.chats({
  account: `eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7`,
  toDecrypt: true,
  pgpPrivateKey: pgpDecrpyptedPvtKey,
  env: ENV.STAGING,
})
```

#### Allowed Options (params with \* are mandatory)

| Param         | Type    | Default | Remarks                                                                |
| ------------- | ------- | ------- | ---------------------------------------------------------------------- |
| account\*     | string  | -       | user address (Partial CAIP)                                            |
| toDecrypt     | boolean | false   | if "true" the method will return decrypted message content in response |
| pgpPrivateKey | string  | null    | mandatory for users having pgp keys                                    |
| env           | string  | 'prod'  | API env - 'prod' or 'staging'                                          |

<CustomLinkCard text="Fetching List of Chats of a User" link="https://www.npmjs.com/package/@pushprotocol/restapi#fetching-list-of-user-chats"/>

### Response

```typescript
export interface IFeeds {
    msg: IMessageIPFS;
    did: string;
    wallets: string;
    profilePicture: string | null;
    publicKey: string | null;
    about: string | null;
    threadhash: string | null;
    intent: string | null;
    intentSentBy: string | null;
    intentTimestamp: Date;
    combinedDID: string;
    cid?: string;
    chatId?: string;
    groupInformation?: GroupDTO;
}

export interface IMessageIPFS {
    fromCAIP10: string;
    toCAIP10: string;
    fromDID: string;
    toDID: string;
    messageType: string;
    messageContent: string;
    signature: string;
    sigType: string;
    link: string | null;
    timestamp?: number;
    encType: string;
    encryptedSecret: string;
}

export interface GroupDTO {
    members: {
        wallet: string;
        publicKey: string;
        isAdmin: boolean;
        image: string;
    }[];
    pendingMembers: {
        wallet: string;
        publicKey: string;
        isAdmin: boolean;
        image: string;
    }[];
    contractAddressERC20: string | null;
    numberOfERC20: number;
    contractAddressNFT: string | null;
    numberOfNFTTokens: number;
    verificationProof: string;
    groupImage: string | null;
    groupName: string;
    isPublic: boolean;
    groupDescription: string | null;
    groupCreator: string;
    chatId: string;
    scheduleAt?: Date | null;
    scheduleEnd?: Date | null;
    groupType: string;
}
```

**Example response**

```json
[
  {
    "chatId": "b65a2376c83f63b9f95c63578c0d7fab6dc40d8e9c8a82054eeef3bd9db852fa",
    "combinedDID": "eip155:0x2F6EC243BbB92E4a2B84059A61101a95cCca4971_eip155:0xA2279CB36Fa433fc84ABA43e9293a7a93652D06B_eip155:0xDB24816bc6Bf832FCEd728e7f8a89fdABEd64d4A",
    "did": null,
    "intent": "eip155:0x2F6EC243BbB92E4a2B84059A61101a95cCca4971",
    "intentSentBy": "eip155:0x2F6EC243BbB92E4a2B84059A61101a95cCca4971",
    "intentTimestamp": "2023-05-03T03:14:13.000Z",
    "name": null,
    "profilePicture": null,
    "publicKey": null,
    "threadhash": "bafyreih7mnk4h4qgn4ypesoxlswkerin5a6chi7gybhjbyaxty73dfnbny",
    "wallets": null,
    "groupInformation": {
      "members": [
        {
          "wallet": "eip155:0x2F6EC243BbB92E4a2B84059A61101a95cCca4971",
          "publicKey": "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nxsBNBGRRhBEBCACmwAwf3rQCauR40LR9oKemhdFl9LBsdTouMqybv7HcpX5N\n9D3/C1G5tB+1VZQv5/vdcJGweZlIgEbUfSTRs7IKQvdFR8WKuSQ21qKCTu80\n3/2OJVWPZBx4JHxfF3UES1nX8+FJPOBqKCkbd7lOcx0CeEr2WKwCwsnoDi70\nlTWV1fkrG+98PO+MWOilkKulnAbkLYS4dt63uM5ETE+WohBUQtcZe/Yw7lBN\nfB9XOKepfn6JV1zI/26z2BrOERlmPH6Zzzw4YCDSmBKCwfdoMtu78o3x/2N4\nc9SGK5dDaUD1iV7YF5UP9MnS2cTX0EQgyhVbekADeZZ2Xbzb9LRsq2x9ABEB\nAAHNAMLAigQQAQgAPgWCZFGEEQQLCQcICZCXqB9EYc2d6AMVCAoEFgACAQIZ\nAQKbAwIeARYhBI6qUGlvXGaYW7uhO5eoH0RhzZ3oAABUHwf6AvfA7sS+ncKi\nxr+u1jX0VlFJPUMPWUZZFrkQtbm0z6m8S4q5MXDc/SIq58okXteOxPgGTANL\nRwiS2sXg6IJ8WhWyqxxi3VySI4Fdb4lLAZpWKOYOOKmcge//1eJIL6KWNTVV\nYRKGVo5ng0EXJnY5+BeQBzlT1e9bfKcpCNBtt8T1DYCIy+AVSVf23WolHocE\nTAbpPUWb/v6wHY9eJmCJPXj18Dq+jBmSOX7Soej/9skmIghr0SvduyNVCij9\n2lcE7WTkN/1fwG+gpDWcDY7fRImHIlFzojrjERWqrw+9oDP7kx5WnHZeRaJm\nvvuXqT2A4BC/VzgGVVfdbS6KWxDHg87ATQRkUYQRAQgAvrCsQ5ldEDoeYVWr\nXRKusEfo5HLU5Q4cHy6R1HbAe5qc5zqiGCOsoItuPZR4Nd61NjWveE2iX8pU\nOUEg2FKRCthhOnst6IvXu+urpt0PrMO6NfvAYPS+KSk3sXJFjFByVcIj8K8x\n0L1wc8U4jTtOZL+7JjEzPLG6o51/vxJy4oJadPgkWkXd3eUMCNfZbTRgRmJn\n+XZt59iUtSERXtLWkZzQKi87kNbAqpDCaK8d3dizEh9Hu6sN70eOCXq8ahbI\nHpN4k74LnfMlP1e7XFE9unvNES21UY56+CQK1/cEt26X/B/E6w6jd/vq/6J3\n+QPE+EU8uLmshHeMk/2H/+FDBwARAQABwsB2BBgBCAAqBYJkUYQRCZCXqB9E\nYc2d6AKbDBYhBI6qUGlvXGaYW7uhO5eoH0RhzZ3oAADu2Af/crptdtzTLx5x\nHJRhipr8f8XOL60V3peao2Xly+azyLn7j6fmFC+dWq0OJv1zIZ/B0RxIQTuG\n+CytwXLJzvZWa2Xa/UF8D96aB6yesnX+c+ytrpGCJ4J3GjBDLG7Z99nwvxel\n1gFN+9Mo+hrpTMH5TFzKi334WO0VRsASgCskfrzjRoEWbWKxAa/EJffI0tOQ\nrHaauLqDpDOVNHakl+uT23MeMJmaXKzOWc35Hn2H/6Z8NiCqVEYPKjtCe+VR\no/tDToOrxaGomw6gIyQ2zvrMpbB6KNMejk6uz+zwbFdQvWNmp4gbiNK6//xq\n/VK8ykDaWS7TAbk66zqrD8NVSKix8A==\n=WnQz\n-----END PGP PUBLIC KEY BLOCK-----\n",
          "isAdmin": true,
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAtklEQVR4AcXBsW3DMBRF0asHzpCSm5gDpNQeKbmDAW71oUn+FOqUlnZBQDCSd852Ps+LSY3OLNvgEzU6s2yDmTATZsKscFONzkq2wR3CTJgJs1Kj859qdGbCTJgJs+18nheTGp2/lG0wE2bCTJiV/XHwIljKNlip0VnZHwczYSbMhFnhTbbBJ7INVnYOZsJMmAmz7ev75+KGbIOVGp07hJkwE2Yl22ClRmdWo3NHtsGKMBNmwuwXTaUrgCBycrQAAAAASUVORK5CYII="
        }
      ],
      "pendingMembers": [
        {
          "wallet": "eip155:0xA2279CB36Fa433fc84ABA43e9293a7a93652D06B",
          "publicKey": "",
          "isAdmin": false,
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsU1DQRBF0eun3w4VUMFIE9HDSoQuwgVYpNuDo5VGdEFHJl0IBv0AvXMurx9fTzYxF50aSSfmolMj2QkzYSbMDn6pkXRiLjo1kjOEmTATZsfn2zu7eySdGkkn5qJzrcVOmAkzYXa5vdyeNGoku5iLTo1kF3PREWbCTJgdNZL/VCPpCDNhJswOTrrWolOP5AxhJsyE2RFz0amR7O6RtAY/xFx0hJkwE2YHf4i5OCPm4gxhJsyE2Td/OyykMeidBAAAAABJRU5ErkJggg=="
        },
        {
          "wallet": "eip155:0xDB24816bc6Bf832FCEd728e7f8a89fdABEd64d4A",
          "publicKey": "",
          "isAdmin": false,
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAs0lEQVR4AcXBwWkDUAxEwRfxUTkKpMJtzg2oHF2Sq/Dhm2DDznw9vn9+WXrEVim2HnFTKbYesVWKLTALzAKz0yO2SnFTKf6jUmw9YgvMArPA7PBCj3hHpbgJzAKzwOxUiptK8UmVYgvMArPA7PBCj9gqxU2P2CrFTWAWmAVmhyc94pN6xFYptsAsMAvMTo/YKsVNj7ipFDc9YgvMArPA7FSKrUfcVIqbHnFTKbbALDALzP4AQkoxj7rA55kAAAAASUVORK5CYII="
        }
      ],
      "contractAddressERC20": null,
      "numberOfERC20": 0,
      "contractAddressNFT": null,
      "numberOfNFTTokens": 0,
      "verificationProof": "pgp:-----BEGIN PGP SIGNATURE-----\n\nwsBzBAEBCAAnBYJkUYQoCZCXqB9EYc2d6BYhBI6qUGlvXGaYW7uhO5eoH0Rh\nzZ3oAADV/Qf/WXulnYwhy7ZoH8je0WVoJo+t6kJOWWx76BwObOejVAMbY2HY\nMbdP2WC648iEm7nvM2qeZcIfTgztym8gD7ICM5O7CZ/yaBNmuF6Bp37FXzz5\nsJPMP9LpkrRO9zGeQO6qs2Q7hwyqt5y6Qnz7r1QiI+PsSMkQ5Ry5MPIAkpoA\ngmi43qxOPhpQuai0ds+BrwyBUtATmSdZuCrtJq9mrPWLUfdXdFSRnVgMYXLU\np5+yPb7kkSA2S1rGPDb6/UNHdH+peFyDwrVvIMYaffFJKKJd7ZzGHRcvfaZf\nEvOnfcie8H4pREYVZNtSQpbIzbD7MWFN+rXAIYwhoQbt78ENd8jR2Q==\n=y1q4\n-----END PGP SIGNATURE-----\n",
      "groupImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==",
      "groupName": "protective_cyan_otter",
      "groupDescription": "narrow_plum_antelope",
      "isPublic": true,
      "groupCreator": "eip155:0x2F6EC243BbB92E4a2B84059A61101a95cCca4971",
      "chatId": "b65a2376c83f63b9f95c63578c0d7fab6dc40d8e9c8a82054eeef3bd9db852fa",
      "scheduleAt": null,
      "scheduleEnd": null,
      "groupType": "default"
    },
    "msg": {
      "fromCAIP10": "eip155:0x2F6EC243BbB92E4a2B84059A61101a95cCca4971",
      "toCAIP10": "b65a2376c83f63b9f95c63578c0d7fab6dc40d8e9c8a82054eeef3bd9db852fa",
      "fromDID": "eip155:0x2F6EC243BbB92E4a2B84059A61101a95cCca4971",
      "toDID": "b65a2376c83f63b9f95c63578c0d7fab6dc40d8e9c8a82054eeef3bd9db852fa",
      "messageContent": "Gm gm! It's me... Mario",
      "messageType": "Text",
      "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBzBAEBCAAnBYJkUYQsCZCXqB9EYc2d6BYhBI6qUGlvXGaYW7uhO5eoH0Rh\nzZ3oAAC/Pgf/R+ppzwtz3lqNQNOf2GOUzfsbt7ykhDolgXxO+FgYmpP9BiVY\nzY5gHernTWX/ySUjiTAZ8imQ4ygh7Y2/L24WaHxFg7Nbb9SL4nki9g53eYbO\n0wqVUL0DbvZSH7bEcE4wk5sdtRAlgzdEFL/2r8I6ZukpyJ2wvFSZRR4C+3Vx\nygWgmYYeh+g7/k3wKoghahlUhsNWCu7vNHH+t5E9GTKyPX4Vzc3PsMY9xaF6\nLvGHuINY+JImrMduVTtFvY4SXOcOJrSaE+NCNsHYt3RAXpTSJGnWkoQ89elY\n/3LAGn7ZjsKeV9UWE2EnRXv4NJl65jKRQ/9cnKDMiataPjvtvuCswQ==\n=d0nv\n-----END PGP SIGNATURE-----\n",
      "timestamp": 1683063853450,
      "sigType": "pgp",
      "encType": "PlainText",
      "encryptedSecret": "",
      "link": null
    }
  }
]
```

## **Fetching list of user chat requests**

Until the user approves a chat, it shows up in their chat requests folder. Use this function to retrieve the list of user chat requests.

```typescript
// pre-requisite API calls that should be made before
// need to get user and through it, the encryptedPvtKey of the user
const user = await PushAPI.user.get({
  account: `eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7`,
  env: ENV.STAGING,
})

// need to decrypt the encryptedPvtKey to pass in the api using helper function
const pgpDecrpyptedPvtKey = await PushAPI.chat.decryptPGPKey({
  encryptedPGPPrivateKey: user.encryptedPrivateKey,
  signer: signer,
})

// Actual api
const response = await PushAPI.chat.requests({
  account: `eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7`,
  toDecrypt: true,
  pgpPrivateKey: pgpDecrpyptedPvtKey,
  env: ENV.STAGING,
})
```

#### Allowed Options (params with \* are mandatory)

| Param         | Type    | Default | Remarks                                                                |
| ------------- | ------- | ------- | ---------------------------------------------------------------------- |
| account\*     | string  | -       | user address (Partial CAIP)                                            |
| toDecrypt     | boolean | false   | if "true" the method will return decrypted message content in response |
| pgpPrivateKey | string  | null    | mandatory for users having pgp keys                                    |
| env           | string  | 'prod'  | API env - 'prod' or 'staging'                                          |

<CustomLinkCard text="To Fetch Chat Requests of the User" link="https://www.npmjs.com/package/@pushprotocol/restapi#fetching-list-of-user-chat-requests"/>

## **Fetching conversation hash between two users (or group)**

Conversation hash (also known as threadhash or link) is the conversation pointer between two users of Push chat. It's used to get the chat message hash between two users.

```javascript
// conversation hash is also called link inside chat messages
const conversationHash = await PushAPI.chat.conversationHash({
  account: 'eip155:0xb340E384FC4549591bc7994b0f90074753dEC72a',
  conversationId: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d' // receiver's address or chatId of a group
});
```

#### Allowed Options (params with \* are mandatory)

| Param            | Type   | Default | Remarks                                                |
| ---------------- | ------ | ------- | ------------------------------------------------------ |
| account\*        | string | -       | user address (partial CAIP)                            |
| conversationId\* | string | -       | receiver's address (partial CAIP) or chatId of a group |
| env              | string | 'prod'  | API env - 'prod' or 'staging'                          |

<CustomLinkCard text="To Fetch a Conversation Hash Between Two Users / Group" link="https://www.npmjs.com/package/@pushprotocol/restapi#fetching-conversation-hash-between-two-users"/>

## **Fetching latest chat between two users (or group)**

Enables fetching the latest chat message between two users (or user and group). Usually useful to display the latest message in the preview window of the chat sidebar of a dApp or crypto wallet.

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

// conversation hash are also called link inside chat messages
const conversationHash = await PushAPI.chat.conversationHash({
  account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7',
  conversationId: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d' // receiver's address or chatId of a group
});
  
// actual api
const chatHistory = await PushAPI.chat.latest({
  threadhash: conversationHash.threadHash,
  account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7',
  toDecrypt: true,
  pgpPrivateKey: decryptedPvtKey
});
```

#### Allowed Options (params with \* are mandatory)

| Param         | Type    | Default | Remarks                                                                |
| ------------- | ------- | ------- | ---------------------------------------------------------------------- |
| account\*     | string  | -       | user address (Partial CAIP)                                            |
| threadhash\*  | string  | -       | conversation hash between two users                                    |
| toDecrypt     | boolean | false   | if "true" the method will return decrypted message content in response |
| pgpPrivateKey | string  | null    | mandatory for users having pgp keys                                    |
| env           | string  | 'prod'  | API env - 'prod' or 'staging'                                          |

<CustomLinkCard text="Fetching Latest Chat Between Users / Group" link="https://www.npmjs.com/package/@pushprotocol/restapi#fetching-latest-chat-between-two-users"/>

## **Fetching chat history between two users (or group)**

Enables fetching chat history between two users (or group), useful in displaying the history of conversation between two users.

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

// get threadhash, this will fetch the latest conversation hash
// you can also use older conversation hash (called link) by iterating over to fetch more historical messages
// conversation hash are also called link inside chat messages
const conversationHash = await PushAPI.chat.conversationHash({
  account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7',
  conversationId: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d' // receiver's address or chatId of a group
});
  
// actual api
const chatHistory = await PushAPI.chat.history({
  threadhash: conversationHash.threadHash,
  account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7',
  limit: 2,
  toDecrypt: true,
  pgpPrivateKey: pgpDecryptedPvtKey
});
```

#### Allowed Options (params with \* are mandatory)

| Param         | Type    | Default | Remarks                                                                |
| ------------- | ------- | ------- | ---------------------------------------------------------------------- |
| account\*     | string  | -       | user address                                                           |
| threadhash\*  | string  | -       | conversation hash between two users                                    |
| toDecrypt     | boolean | false   | if "true" the method will return decrypted message content in response |
| limit         | number  | 10      | number of messages between two users                                   |
| pgpPrivateKey | string  | null    | mandatory for users having pgp keys                                    |
| env           | string  | 'prod'  | API env - 'prod', 'staging', 'dev'                                     |

<CustomLinkCard text="Fetching Chat History Between Two Users / Group" link="https://www.npmjs.com/package/@pushprotocol/restapi#fetching-chat-history-between-two-users"/>
