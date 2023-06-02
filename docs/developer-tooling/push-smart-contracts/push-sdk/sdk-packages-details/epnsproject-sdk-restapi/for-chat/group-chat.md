# Group Chat

## **About Group Chat**

Group chat is the latest exciting addition to Push suite, for the first time ever, web3 users are finally able to talk to each other in groups and have fine-grained controls over them. Group chat is a part of Push Chat protocol with the vision of enabling protocols to finally build:

* Their own Discord
* DAO communication
* NFT negotiation
* Private or Public groups
* Token-gated, NFT-gated or Transaction-gated group
* Message gating (coming soon)
* Incentivized Chat (coming soon)
* Payments, Polls and DAO Voting

:::tip
Each group has a chat id associated with them. The chat id is used to do modifications to a group or send messages or approve a group chat request.
:::

## Pre-requisite: Deriving the signer

Some functions require passing the signer object with the API call. fetching signer for web3 wallets is quite easy.

{% tabs %}
{% tab title="When using Frontend" %}
```typescript
// any other web3 ui lib is also acceptable
import { useWeb3React } from "@web3-react/core";
.
.
.
const { account, library, chainId } = useWeb3React();
const signer = library.getSigner(account);
```
{% endtab %}

{% tab title="When using Backend" %}
```typescript
const ethers = require('ethers');
const PK = 'your_channel_address_secret_key';
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
```
{% endtab %}
{% endtabs %}

## **To create a group**

Enables creation of the group, group (and even DMs) have chat ids. For group controls, chat id of the group is required. There are a couple of ways by which they can be obtained (via group name or chat id).

```javascript
// pre-requisite API calls that should be made before
// need to get user and through that encryptedPvtKey of the user
const user = await PushAPI.user.get({
    account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7'
  });
  
// need to decrypt the encryptedPvtKey to pass in the api using helper function
const pgpDecryptedPvtKey = await PushAPI.chat.decryptPGPKey({
      encryptedPGPPrivateKey: user.encryptedPrivateKey, signer: _signer
    });

// actual api
const response = await PushAPI.chat.createGroup({
  groupName:'Push Group Chat 3',
  groupDescription: 'This is the oficial group for Push Protocol',
  members: ['0x9e60c47edF21fa5e5Af33347680B3971F2FfD464','0x3829E53A15856d1846e1b52d3Bdf5839705c29e5'],
  groupImage: &lt;group image link&gt; ,
  admins: ['0x3829E53A15856d1846e1b52d3Bdf5839705c29e5'],
  isPublic: true,
  account: '0xD993eb61B8843439A23741C0A3b5138763aE11a4',
  pgpPrivateKey: pgpDecryptedPvtKey, //decrypted private key
});
```

#### Allowed Options (params with \* are mandatory)

| Param              | Type    | Default | Remarks                                                        |
| ------------------ | ------- | ------- | -------------------------------------------------------------- |
| account\*          | string  | -       | user address                                                   |
| groupName\*        | string  | -       | group name                                                     |
| groupDescription\* | string  | -       | group description                                              |
| groupImage\*       | string  | -       | group image link                                               |
| members\*          | Array   | -       | wallet addresses of all members except admins and groupCreator |
| admins\*           | Array   | -       | wallet addresses of all admins except members and groupCreator |
| isPublic\*         | boolean | -       | true for public group, false for private group                 |
| pgpPrivateKey      | string  | null    | mandatory for users having pgp keys                            |
| env                | string  | 'prod'  | API env - 'prod' or 'staging'                                  |

{% embed url="https://www.npmjs.com/package/@pushprotocol/restapi#to-create-a-group" %}
To create a group
{% endembed %}

## **To update group details**

Enables updating group details (is an idempotent operation). Idempotent means that most of the details even if unmodified are required to be passed as a way to protect the group's latest settings and have verification proof available for the modification of the group.

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
const response = await PushAPI.chat.updateGroup({
    chatId: '870cbb20f0b116d5e461a154dc723dc1485976e97f61a673259698aa7f48371c',
    groupName: 'Push Group Chat 3',
    groupDescription: 'This is the oficial group for Push Protocol',
    members: ['0x2e60c47edF21fa5e5A333347680B3971F1FfD456','0x3829E53A15856d1846e1b52d3Bdf5839705c29e5'],
    groupImage: &lt;group image link&gt; ,
    admins: ['0x3829E53A15856d1846e1b52d3Bdf5839705c29e5'],
    account: '0xD993eb61B8843439A23741C0A3b5138763aE11a4',
    pgpPrivateKey: pgpDecryptedPvtKey, //decrypted private key
});
```

#### Allowed Options (params with \* are mandatory)

| Param              | Type   | Default | Remarks                                                        |
| ------------------ | ------ | ------- | -------------------------------------------------------------- |
| chatId\*           | string | -       | chatId of the group                                            |
| account\*          | string | -       | user address                                                   |
| groupName\*        | string | -       | group name                                                     |
| groupDescription\* | string | -       | group description                                              |
| groupImage\*       | string | -       | group image link                                               |
| members\*          | Array  | -       | wallet addresses of all members except admins and groupCreator |
| admins\*           | Array  | -       | wallet addresses of all admins except members and groupCreator |
| pgpPrivateKey      | string | null    | mandatory for users having pgp keys                            |
| env                | string | 'prod'  | API env - 'prod' or 'staging'                                  |

{% embed url="https://www.npmjs.com/package/@pushprotocol/restapi#to-update-group-details" %}
To update the group
{% endembed %}

## **To get group details by group name**

Enables fetching group details by group name.

```javascript
const response = await PushAPI.chat.getGroupByName({
  groupName: "Push Group Chat 3"
});
```

#### Allowed Options (params with \* are mandatory)

| Param       | Type   | Default | Remarks                       |
| ----------- | ------ | ------- | ----------------------------- |
| groupName\* | string | -       | name of the group             |
| env         | string | 'prod'  | API env - 'prod' or 'staging' |

{% embed url="https://www.npmjs.com/package/@pushprotocol/restapi#to-get-group-details-by-group-name" %}
Get group details by group name
{% endembed %}

## **To get group details by chatId**

Enables fetching group details by chat id.

```javascript
const response = await PushAPI.chat.getGroup({
  chatId: '190591e84108cdf12e62eecabf02ddb123ea92f1c06fb98ee9b5cf3871f46fa9'
});
```

#### Allowed Options (params with \* are mandatory)

| Param    | Type   | Default | Remarks                       |
| -------- | ------ | ------- | ----------------------------- |
| chatId\* | string | -       | group chat id                 |
| env      | string | 'prod'  | API env - 'prod' or 'staging' |

{% embed url="https://www.npmjs.com/package/@pushprotocol/restapi#to-get-group-details-by-chatid" %}
Get group details by chat id
{% endembed %}
