---
description: Before sending messages, first you have to create a User
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Initializing User

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
```

## Create User

To start messaging wallet addresses, you need to get encryption keys attached to the user. In case the user is not created, the first step is to create the user.

```typescript
const user = await PushAPI.user.create({
  env?: ENV;
  account?: string;
  signer?: SignerType;
  version?: typeof Constants.ENC_TYPE_V1 | typeof Constants.ENC_TYPE_V3;
  additionalMeta?: { password?: string };
  progressHook?: (progress: ProgressHookType) => void;
})
```

| Property       | Description                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| env            | Environment variable. Default `prod`. For testing, use `staging`                                                  |
| account        | user account in `eip155:walletAddress` format or `nft:eip155:nftChainId:nftContractAddress:nftTokenId:RandomHash` |
| signer         | ethers.js signer                                                                                                  |
| version        | encryption type version, how the pgp private key will be encrypted                                                |
| additionalMeta | Additional information in case when necessary when creating a user. For NFT Chat, this field is necessary         |
| progressHook   | Inform the developer about the status of creating user                                                            |

<CustomLinkCard text="Create User Example" link="https://www.npmjs.com/package/@pushprotocol/restapi#create-user-for-chat"/>

### Response

```typescript
export interface IUser {
  did: string;
  wallets: string;
  profilePicture: string | null;
  publicKey: string;
  encryptedPrivateKey: string;
  encryptionType: string;
  signature: string;
  sigType: string;
  about: string | null;
  name: string | null;
  encryptedPassword: string | null;
  nftOwner: string | null;
  numMsg: number;
  allowedNumMsg: number;
  linkedListHash?: string | null;
  nfts?: [] | null;
}
```

Example response:

```json
{
  allowedNumMsg: 1000,
  numMsg: 0,

  did: 'eip155:0x141d703744186Dd87390d42DaefDd42403C5f6ab',
  name: null,
  about: null, 
  profilePicture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzklEQVR4AcXBoW0DQAxA0V/rBvEaWSEyzgaBnqMDGHYNqyuEFAebdYyWWgVXnQL83tvt8v5Do2F05ckrNIyuPOmEYcIwYdjSMLrypNMwXlGedBpGJwwThgnDFoc+Lx/sXB93TgjDhGHCsFWedBpGV55018ednfKk0zC68qQThgnDhGFLw9jRMLryZEfD2NEwOmGYMEwYtvijPOk0jE7DOFGedBpGJwwThgnDVnlyojzZ0TB2ypNOGCYME4Yt/lGedM+vb7Y8OSEME4YJw34BoIY3gwcFm94AAAAASUVORK5CYII=',

  encryptedPrivateKey: '{"ciphertext":"966bf7d6a78683266c94849da2651cf483b69cd8a1716992d805324bbcb8309e5194331dae56e8dabd956bc06d4f54221cd7401e7e703659a4aef08353f4191bd467623dacf7e7fb18945d4a7d5d691988bff907965aadc1807be9b3be4e4354243e88c81fd822481a5acb4739206a06bb4a9f623ad88efbe19f66f8a515714766596aa24c7328e4b9f06d5dae838358fee22424594ab046d5f1c6f53bbf9637935091bb58ea72d624e19ba0a28f3c9b5665126d9b82c80eed1ed84779ea2cbdbd64e3ae43eca887727284d2c11c724261bf4ac5d436d5c2e568f344ba1cf7fc3bba4d6f5ab31941705a02192592a60814f365a231c14165b5faeef8d28836acea3329aa8ded35af3cba83a0cf06237c0b4e5f30ef175a8a6464f84b573027f5487d78a87943fb9c43efcff4d380611789fc8cf76c35a9239b58259ef9c9a10defc71d8b44338ec42dd882d35baf6d71600d6e50e5259b1a821e2a742ca4fae432e567e14cd0fd9bc78f182ed6e24a74397eb043d258fdfb43271d5dd78ace7bcdde19a71e29b157ab92590708b57588986d04c9e3e88b8ee666597550f4a3215dc4f8465f8cbdd30dcf257889abc629940b10103580fd781fdd9f00d8fab0b8dac64f65650dfdfd9415e6178f2627fd14b917c5036e8d3993de0de1ab783eceb4e9a587cb93785285e226d05c2c27c84c5421590fb7c4a28fb3a54db03b9aebfe91c0e5e0bcc104bfd08e1797cb1453f569fa11f2b4f3438bf5fc95c893e64284ead49bd5ddfdc7fd45e0ce96db6a71887dfd6aaf8a295e0a32dc242fb786371272f330ae181b48158ddba475f26bbbce7629630e4d2b1bfdd5bcbe76f6cb67347fc9fd013d297290c45a40a2c273ce273d018374c139ea948724dc2a2c20278a10c31b655663d413d10bd8c83af122678536d4a3a886db9698f1d68bf4ce5be7a4fbe80ee8a0e4e78b224d92883183704ee3e1ce78479ecc795cff4a44792c999122ef652ff76bbc8bb32245fb2a8b3d6a8514bbe923c4f35bcd58815f2ea994095189d0b567d4f7d202766c8b39dc23db212826d9f45a4d290ffe3c8bc4a9f40da8eb2073e8657089aaf8696f2cd558857477857de95769dfbcdc8e880be8752f4b6ae82a39e42e47107c46e8b97aeec95710c9835011e620a1a621b700a307c4b05e9263d9bb9f7bd001411798415dde723a026a52b74489f422daf953fd7d797e0c932330f400a0021810d39f844e5455c4494b5f59cdc8657ce278c13eb1cd3a789f64c22266fd8efc8660537131cbff346cce64edb9f121c9e6eccd9e1292b532038dea29f48ea0f50de2fc4fb40c1552a2a5fb710b9df0d6e90cf59cf04b033a57612c0662201c8e38d0634df382f0c8d939ea5c6269144f78307a8b8fbe7f7f9f0dca763e9920ebf51235cce2d79d96d675e493b48269d719f777b9eed9b8b2a8309a86e55bbbcae2cc6db16e21ab86c750f19422e0db4e54eca400a079eda7b307d973c2f18972c8ea169fed38f8d4579ece8e85dcc6c1aac648bbfd6a3a63b96a6c0f7c7b6b990670f8a2aa07dbfa15f043a53768568ecef3f5fe90873529870cdfbed6d82571425e5c0ea6b0e3c75df97c5ba9710d84152f6a990f4bcf07d6eccf3f3cf1669a9a39d406cefff70ef023a5c44eaa4e393b1d577f31056df1405aedc0358024307ede39781e25daaa94d46ec8bf706b7694941f0beedcf24218850ec0543c03e6f537382c7db60244ab46e00056e5de8b34cef9f491a0f4b1ba8a2d080c7bfaf8f96039e6f316e89ed770000866e3222647ffef75bef7e99f1fd1f2f2ba79e94497ba33dfac96839d57db97f6ab7463b96693116621393a441da113cf07d392abdb88882747922e0abe37dc03af02af8796be2052edbc22aff6bb5462ec664db0684329c54a168390a1f7e679b4d42e777b2761a04e3e064409d11d6dcecf50c902bb626511953de183042c55da4bb2fbccb8f91e8ac3fbaa063f25c02e276f294502fd0091d2d83bae6172b4d77f58df71870e72d82b0854efc7339fbb5b9b64aa9be3e360faa233438e5984eb8702ae1a3af243dd14fdfa5263d50b0c4b5a60b2aedbfa71db037825845e567bc55efa62b38d0a444b5218b6bdcc81f9879548391e111a8c1fcdba36ad636d20d71c883936d77511a6917989c795f03b67cf7a482e5f77bb8d1c9a662ccd14f91d0f0584f1bf87cc7d4c68f549b77fc597fa5647efbf5a564f0b4a0e0525cba9e21908d25ccf3b9d9f3f7ac0800de425fbc2e4e5477da09f6bb2b648e390b17230718fe968a57e8ea02717df8177e36a36372ff55f48c61270f3953e05d79b637e5ea515b36729ff02b4482e52a54cee7e418e04f48bba3b45e2194d33da8ffaeb66a515d3493ab2619c71e9114b5834f8b5a745066b95fb4b9f5fcb658d5cb8ba10251f0df337b48048f90d78c9818200bee2af49ea990474ed03e724dbe0160d781f6da828b0ead3d0888909426e1cd64a437b2c758f01d8c917cee87a5cc1a6dac0cb2484fb5152f3de7dd6db85cad15c086cc18fe819cb22da7a3cb32f6e892043b8c9e597bb57aac553fc915ff3843ca34bb81b3c84deaca118b40519cc7d519c435780a869bf6a2fffb2eec643d89d363ff25742fbc4648d94c1524442b00050fe1b7aafb01d9b0d13ae66c16c5be007ecb6fb6260625e0a39e43058668861633d429715d94c3c05e63ee636b11c32a0cb271e0a31a07bc10bb42bcbf8bd63bb252e35a03ef1e567e27e6ae56dec7f125d16ab3930f7d2a5d39ccc5bafe89c2f3c2d3eeaf0e2d959ef375d018c39138456ebdccc25d349e97a2ef1ac45bba3b71076d5c09f0c849888aed522b27bfe899b89059f9d9e5643d5ff537b5a0ad91df0ca97d9f5f8fec8709b46ff63a1730c36e043a2febedc353eaa178d2414154d6a426823eb68b823073ba9a98504de2f49a0ce019cdcd265dc06cab016beef4fed45e2a9568f9cc7e3fe62a8cd746baa6fced9b70f81b9b0bc1cf8292d536bb7885f5c2315e7d4725eef39979a6d05d823c6dc99370fe2329473e3a7325fcd8e1b5f39feeda1a886ffcf2f75faf5d4490e54f80955cc1962f18fe57e76e5d00fddc81d0ed53b89b9c5e9575654d51f7546dcbe79512b7454fcf7d663bbc93d4725b7f21495962bf87cdb796467358443fa1cde27871ff2b78022ca58594c83ed926ceddc7bae265ce95f73bd5fd23389dde0591d0ef2a346e933410ddc0330df2f81f974d1d2f5ece8c132564f9a91aa1710fbd6c596ccf65e4e357af477db81f52bdb8bca586d8b9f5a39ddbc041f0130bc39995e2aa0502f735b7dfde79cf59b0357f78ee101c4b7ecd53affcb7fade3d5514468ebfc34c0010f2e2d548abc984a9fab02042f8a3b19b30e710c672b45393cc53a348aac07fcb86abb3c7b3ac69e0bb98d3942fc92736b539f54baa7cebda572fd7c1c3f2747a9b74073e8646a7a064c882f641fc3a4723148e6434a87bf8d1414d647d5d00ed8a547b612f9bff543f6cd87a821db7fb3a594d1391ce79f9d56e2718a6e257a49e3b4d4fcc24d9f04d291b014f7fb817b4f4cdffff00f893115f304f38556ed547116d3b358998d560f1338b7cdb30b0c40b410a42a760af8e6872f82548aa26fd8a2dbce884d023a9a7f114087fe45bf3768ad0d22c36a6baf5172f9e2fb3fafab94e038bf1c65ced2b7f659f06fa5230b3d7c08204a4b347cbcc5cdbedc013b52f7214df886c43c26ea62e5c2adb83eb9f3828f2cfd2d2143f5c83ae51fd0709b50293343c857dcc7fb6d74c0e90fe0e1ed22fad5bb9f3b71ba48c5ea4dcdd31e42276c5c93ee345960681798953990571c54841535ca0cdd88989fc1854968f5d0d764026d7309bfbd76a2e009002d3dd8d70f43d597d4c0636325fa4f7734ff3903d0b19401b477817aa40c540b5376aa5ff92abb649e7e032fb1b666fa82b6cdf092edb8c0e155dcf2904b276d8f01bdee8d5581f862315533aeb59b6ad5f70d63a0a51254ff1911a529899fd213ed7091c51a5d98d59a90b4faab0d0cd4cf0958ae2445c7ee15f4c5c646e8bbbf64b839de2067e3d35eee77af2ed5abf63678644d3214f4cc99921e8288c14c4f31ba2a83ca39938c17caf1965adfe5fac21354085d1af14b8cb04b88c9b4b58fd19b2900b6746793fcfcf960da25cf444ec9611f65c5e1e7a7590d0306f34bf91c3ed2ee98270793d1764610780f22eef05ff082ab13f358b60b757f90f8ac01f070585ae432fad89cf17993cc09888a1d08c79474a6a9af038d0473603bac1a38de3ab08c69c048b9e0edf38a53bcac82aa1a55384d7ec7d995cfd478eae7c9fe625bfdd1b26f981649ceededd05ba0f3787dcb47eee255699af4d253edb30107d2c9914e2661df789802d3631bfd47101e46bb970d4dded4d0fa3f78d981cb47e9124ac70fe91d48d4d626ddc03b65a443a8e991e4864ec1a5b9ffb38cca285be66ef2f41a5f2d4f45c87a58812c1f31526cbdd3505c0b5175e1f02b4f52655f032226f575bd215079810d77a909cea7714d977b9e13930bc3d2c8f2a8cd1c986c457ce35fa9d7cda6c92abc95756abed0b2961624c0991d60b73752320af230921f41ca7d2f860eeabda2d19d343120826e8d1531f8f9c17aef1a69e3df466f57fa60055ee4119e40673ca2f256e243afb57c7cc2f90ee32739189598d92a1d73ab8e2ec87b4d9a670af14d7e9d0ebbfee7741d058570a99a25ad491deff4c61acfdb53adc2545b4eb0a1599a7368064434067a4cb453acdd724f3dd2686007037796976aebd72d3f0caba19c8b5a322347015fb3409f1644769fe09c39f15d1b3666b705572de7bad114d05755a47c25ac80bb111534746e9e9aaff708d839b4c11f85d23569913f3c8c56ed42d4ffa4","salt":"3a79ad3fb5f36ac6edf53e9c97e936e59be820080bb8e80837f9753328c84b08","nonce":"0821c09fa545f69492f95373","version":"eip191-aes256-gcm-hkdf-sha256","preKey":"731e266bf610ebff6a89205219bd406410c840b1a3a9b0ea3cde9dbf952c40cf"}',
  encryptionType: 'eip191-aes256-gcm-hkdf-sha256',
  encryptedPassword: null,

  nftOwner: null,
  publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\n' +
    '\n' +
    'xsBNBGRKisMBCADIwqh5NYpXtOeUQwjjtWwM6rQqL5jP3AJprNLYqNcQFHUH\n' +
    '7fEjz/+vfb6nivj21bRoeToPz9sj4ATqh9o4fiE+jfkFih3vQxR43p93FIx7\n' +
    'u4hUNsxHkg5v/ek43+IxYbl9tXDzcciikzzjuIzO5yjXu62UAYAHzwf5XJ2g\n' +
    'm48uNWvzclTHlTRWltVKO57FOAFUIYtNRAux9JlzJiIcLiBhpEwGY8QM5qkj\n' +
    '0cw8wPyiao6dD4fSGksse1P4txMJbyUzZ4Cdh9yRARFkg0Y6wRCuhE4B+y0Q\n' +
    'ULQsLsKupkesYqWDxIvlF3dSlduTgwKUJ0P7A4S4IO7oNsIYR9+Nvzx3ABEB\n' +
    'AAHNAMLAigQQAQgAPgWCZEqKwwQLCQcICZCgEoDWdM6knAMVCAoEFgACAQIZ\n' +
    'AQKbAwIeARYhBAcTNezEWVrBsiBI4KASgNZ0zqScAACymQf/e4juYRa1564a\n' +
    'qaMetz7hVRn15M+PS9yoDT1sE/eOxMzrKDoyzUGvJXJHNXRw9wBl1Zjwe/mR\n' +
    'Czn99FLuETxoM2PUs6/vZjui6O93I3GrenAgcMxdoGBOd6rSo+P3gevm9X71\n' +
    'R6xQm3IjemY5QQ4s928Yp8Erzi+u6OtrP23wbKtoiCC8FBjBG2TU7t9z40Jw\n' +
    'DV+Ash9wWJjZTrSuyKs4xP+5njFEVM4QBRqs7i8GstO6T5/AMoPfEJApXiO9\n' +
    'cLJ1MFDpjfIPjCE0w8cgbFelS2wdnQiaAExqFgCWjUsYfC3ik00cFJewGLzO\n' +
    'vGQbLI1LsbWDE9oxg5aodVnhluUbbM7ATQRkSorDAQgA7vEJF/gFW4QTUqCI\n' +
    'tcFPP9xWxTBmoLSsTJWuKYEOGUjcNv6nCtvUaTeSlKeVdKZ0LAur/8GB4BEd\n' +
    'PLXJ1gK56W0ZIuc3x5GXPAUt6f9ZSDh2O3M3mkcwxA6CrEkOY/jC1vOS+scv\n' +
    'DbmLOgsJlAVHSyNw/pce60BbU6YYDwZupXRG7fxYkkQe6ryQMd8+KYdniJQr\n' +
    'ksXdY5UeTPNWo378u03i6OFGsjKeXOva6zmTicAle/bVDOODAnZrpD7tHlfW\n' +
    'eprADORyBIWixyIAvZSnI95lpRrMF1HaYyRQLB4czlf15wPuVtI9ZHv3fcmu\n' +
    'kpDUK7DBYzGCsKevt+hHOvxnfwARAQABwsB2BBgBCAAqBYJkSorDCZCgEoDW\n' +
    'dM6knAKbDBYhBAcTNezEWVrBsiBI4KASgNZ0zqScAABgwggArSnrqA2Uu8r9\n' +
    'eoZ8t7me0stohj+900arMgqd1CI1gVg2TeQJQq29xUX0ImGQ97rNwiYhAzIf\n' +
    'vFRZN4nsB/nfy0EFb8EdXeQNVhV1ZZpZt6vvsgqdqgO35w80MPemvGHJPK1b\n' +
    'aaCXIFjttT+Q6+6jPiPdj6X/PS0MECKvp58oYOXG7c/94xcj4fbfgCguEGYn\n' +
    '6MBOpZTeh/Q+72TOl8swR9IalMDT67b4yu358kI0pDfV3q+fCtbC/+6D6h1u\n' +
    'T7slcG9RK63J5/F1S69Mm3kj3wUc3nRGHvuCPgM+zUFCLD1R57Gq6Ec8TClf\n' +
    'NrD/eipCuEuZ4vHp0UUpCCNF95fidQ==\n' +
    '=YfD8\n' +
    '-----END PGP PUBLIC KEY BLOCK-----\n',
  sigType: 'eip191',
  signature: '0x45a5ee5ab63c75d78a256b1164b1f6b2807391d773de095b539e0cf751cb8b58248fcb975cc32dc464ae3473035c4870ce914bc3b8fc5bb6a7ad1b8813f9e7ec1c',

  nftOwner: string | null; // Delete
  wallets: 'eip155:0x141d703744186Dd87390d42DaefDd42403C5f6ab',
  linkedListHash: '',
  nfts: []
}
```

## Get User

Once the user is created, you can fetch details about the user including their encrypted PGP keys. PGP keys are used to encrypt and decrypt messages and you are required to decrypt them after fetching the encrypted version of it.

```javascript
const user = await PushAPI.user.get({
    env?: ENV;
    account?: string;
  })
```

#### Allowed Options (params with \* are mandatory)

| Param     | Type   | Default | Remarks                                                                                                           |
| --------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------------- |
| account\* | string | -       | user account in `eip155:walletAddress` format or `nft:eip155:nftChainId:nftContractAddress:nftTokenId:RandomHash` |
| env       | string | 'prod'  | API env - 'prod' or 'staging'                                                                                     |

<CustomLinkCard text="Get User Example" link="https://www.npmjs.com/package/@pushprotocol/restapi#get-user-data-for-chat"/>

### Response

```typescript
export interface IUser {
  did: string;
  wallets: string;
  profilePicture: string | null;
  publicKey: string;
  encryptedPrivateKey: string;
  encryptionType: string;
  signature: string;
  sigType: string;
  about: string | null;
  name: string | null;
  encryptedPassword: string | null;
  nftOwner: string | null;
  numMsg: number;
  allowedNumMsg: number;
  linkedListHash?: string | null;
  nfts?: [] | null;
}
```

Example response

```json
{
  allowedNumMsg: 1000,
  numMsg: 0,

  did: 'eip155:0x141d703744186Dd87390d42DaefDd42403C5f6ab',
  name: null,
  about: null, 
  profilePicture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzklEQVR4AcXBoW0DQAxA0V/rBvEaWSEyzgaBnqMDGHYNqyuEFAebdYyWWgVXnQL83tvt8v5Do2F05ckrNIyuPOmEYcIwYdjSMLrypNMwXlGedBpGJwwThgnDFoc+Lx/sXB93TgjDhGHCsFWedBpGV55018ednfKk0zC68qQThgnDhGFLw9jRMLryZEfD2NEwOmGYMEwYtvijPOk0jE7DOFGedBpGJwwThgnDVnlyojzZ0TB2ypNOGCYME4Yt/lGedM+vb7Y8OSEME4YJw34BoIY3gwcFm94AAAAASUVORK5CYII=',

  encryptedPrivateKey: '{"ciphertext":"966bf7d6a78683266c94849da2651cf483b69cd8a1716992d805324bbcb8309e5194331dae56e8dabd956bc06d4f54221cd7401e7e703659a4aef08353f4191bd467623dacf7e7fb18945d4a7d5d691988bff907965aadc1807be9b3be4e4354243e88c81fd822481a5acb4739206a06bb4a9f623ad88efbe19f66f8a515714766596aa24c7328e4b9f06d5dae838358fee22424594ab046d5f1c6f53bbf9637935091bb58ea72d624e19ba0a28f3c9b5665126d9b82c80eed1ed84779ea2cbdbd64e3ae43eca887727284d2c11c724261bf4ac5d436d5c2e568f344ba1cf7fc3bba4d6f5ab31941705a02192592a60814f365a231c14165b5faeef8d28836acea3329aa8ded35af3cba83a0cf06237c0b4e5f30ef175a8a6464f84b573027f5487d78a87943fb9c43efcff4d380611789fc8cf76c35a9239b58259ef9c9a10defc71d8b44338ec42dd882d35baf6d71600d6e50e5259b1a821e2a742ca4fae432e567e14cd0fd9bc78f182ed6e24a74397eb043d258fdfb43271d5dd78ace7bcdde19a71e29b157ab92590708b57588986d04c9e3e88b8ee666597550f4a3215dc4f8465f8cbdd30dcf257889abc629940b10103580fd781fdd9f00d8fab0b8dac64f65650dfdfd9415e6178f2627fd14b917c5036e8d3993de0de1ab783eceb4e9a587cb93785285e226d05c2c27c84c5421590fb7c4a28fb3a54db03b9aebfe91c0e5e0bcc104bfd08e1797cb1453f569fa11f2b4f3438bf5fc95c893e64284ead49bd5ddfdc7fd45e0ce96db6a71887dfd6aaf8a295e0a32dc242fb786371272f330ae181b48158ddba475f26bbbce7629630e4d2b1bfdd5bcbe76f6cb67347fc9fd013d297290c45a40a2c273ce273d018374c139ea948724dc2a2c20278a10c31b655663d413d10bd8c83af122678536d4a3a886db9698f1d68bf4ce5be7a4fbe80ee8a0e4e78b224d92883183704ee3e1ce78479ecc795cff4a44792c999122ef652ff76bbc8bb32245fb2a8b3d6a8514bbe923c4f35bcd58815f2ea994095189d0b567d4f7d202766c8b39dc23db212826d9f45a4d290ffe3c8bc4a9f40da8eb2073e8657089aaf8696f2cd558857477857de95769dfbcdc8e880be8752f4b6ae82a39e42e47107c46e8b97aeec95710c9835011e620a1a621b700a307c4b05e9263d9bb9f7bd001411798415dde723a026a52b74489f422daf953fd7d797e0c932330f400a0021810d39f844e5455c4494b5f59cdc8657ce278c13eb1cd3a789f64c22266fd8efc8660537131cbff346cce64edb9f121c9e6eccd9e1292b532038dea29f48ea0f50de2fc4fb40c1552a2a5fb710b9df0d6e90cf59cf04b033a57612c0662201c8e38d0634df382f0c8d939ea5c6269144f78307a8b8fbe7f7f9f0dca763e9920ebf51235cce2d79d96d675e493b48269d719f777b9eed9b8b2a8309a86e55bbbcae2cc6db16e21ab86c750f19422e0db4e54eca400a079eda7b307d973c2f18972c8ea169fed38f8d4579ece8e85dcc6c1aac648bbfd6a3a63b96a6c0f7c7b6b990670f8a2aa07dbfa15f043a53768568ecef3f5fe90873529870cdfbed6d82571425e5c0ea6b0e3c75df97c5ba9710d84152f6a990f4bcf07d6eccf3f3cf1669a9a39d406cefff70ef023a5c44eaa4e393b1d577f31056df1405aedc0358024307ede39781e25daaa94d46ec8bf706b7694941f0beedcf24218850ec0543c03e6f537382c7db60244ab46e00056e5de8b34cef9f491a0f4b1ba8a2d080c7bfaf8f96039e6f316e89ed770000866e3222647ffef75bef7e99f1fd1f2f2ba79e94497ba33dfac96839d57db97f6ab7463b96693116621393a441da113cf07d392abdb88882747922e0abe37dc03af02af8796be2052edbc22aff6bb5462ec664db0684329c54a168390a1f7e679b4d42e777b2761a04e3e064409d11d6dcecf50c902bb626511953de183042c55da4bb2fbccb8f91e8ac3fbaa063f25c02e276f294502fd0091d2d83bae6172b4d77f58df71870e72d82b0854efc7339fbb5b9b64aa9be3e360faa233438e5984eb8702ae1a3af243dd14fdfa5263d50b0c4b5a60b2aedbfa71db037825845e567bc55efa62b38d0a444b5218b6bdcc81f9879548391e111a8c1fcdba36ad636d20d71c883936d77511a6917989c795f03b67cf7a482e5f77bb8d1c9a662ccd14f91d0f0584f1bf87cc7d4c68f549b77fc597fa5647efbf5a564f0b4a0e0525cba9e21908d25ccf3b9d9f3f7ac0800de425fbc2e4e5477da09f6bb2b648e390b17230718fe968a57e8ea02717df8177e36a36372ff55f48c61270f3953e05d79b637e5ea515b36729ff02b4482e52a54cee7e418e04f48bba3b45e2194d33da8ffaeb66a515d3493ab2619c71e9114b5834f8b5a745066b95fb4b9f5fcb658d5cb8ba10251f0df337b48048f90d78c9818200bee2af49ea990474ed03e724dbe0160d781f6da828b0ead3d0888909426e1cd64a437b2c758f01d8c917cee87a5cc1a6dac0cb2484fb5152f3de7dd6db85cad15c086cc18fe819cb22da7a3cb32f6e892043b8c9e597bb57aac553fc915ff3843ca34bb81b3c84deaca118b40519cc7d519c435780a869bf6a2fffb2eec643d89d363ff25742fbc4648d94c1524442b00050fe1b7aafb01d9b0d13ae66c16c5be007ecb6fb6260625e0a39e43058668861633d429715d94c3c05e63ee636b11c32a0cb271e0a31a07bc10bb42bcbf8bd63bb252e35a03ef1e567e27e6ae56dec7f125d16ab3930f7d2a5d39ccc5bafe89c2f3c2d3eeaf0e2d959ef375d018c39138456ebdccc25d349e97a2ef1ac45bba3b71076d5c09f0c849888aed522b27bfe899b89059f9d9e5643d5ff537b5a0ad91df0ca97d9f5f8fec8709b46ff63a1730c36e043a2febedc353eaa178d2414154d6a426823eb68b823073ba9a98504de2f49a0ce019cdcd265dc06cab016beef4fed45e2a9568f9cc7e3fe62a8cd746baa6fced9b70f81b9b0bc1cf8292d536bb7885f5c2315e7d4725eef39979a6d05d823c6dc99370fe2329473e3a7325fcd8e1b5f39feeda1a886ffcf2f75faf5d4490e54f80955cc1962f18fe57e76e5d00fddc81d0ed53b89b9c5e9575654d51f7546dcbe79512b7454fcf7d663bbc93d4725b7f21495962bf87cdb796467358443fa1cde27871ff2b78022ca58594c83ed926ceddc7bae265ce95f73bd5fd23389dde0591d0ef2a346e933410ddc0330df2f81f974d1d2f5ece8c132564f9a91aa1710fbd6c596ccf65e4e357af477db81f52bdb8bca586d8b9f5a39ddbc041f0130bc39995e2aa0502f735b7dfde79cf59b0357f78ee101c4b7ecd53affcb7fade3d5514468ebfc34c0010f2e2d548abc984a9fab02042f8a3b19b30e710c672b45393cc53a348aac07fcb86abb3c7b3ac69e0bb98d3942fc92736b539f54baa7cebda572fd7c1c3f2747a9b74073e8646a7a064c882f641fc3a4723148e6434a87bf8d1414d647d5d00ed8a547b612f9bff543f6cd87a821db7fb3a594d1391ce79f9d56e2718a6e257a49e3b4d4fcc24d9f04d291b014f7fb817b4f4cdffff00f893115f304f38556ed547116d3b358998d560f1338b7cdb30b0c40b410a42a760af8e6872f82548aa26fd8a2dbce884d023a9a7f114087fe45bf3768ad0d22c36a6baf5172f9e2fb3fafab94e038bf1c65ced2b7f659f06fa5230b3d7c08204a4b347cbcc5cdbedc013b52f7214df886c43c26ea62e5c2adb83eb9f3828f2cfd2d2143f5c83ae51fd0709b50293343c857dcc7fb6d74c0e90fe0e1ed22fad5bb9f3b71ba48c5ea4dcdd31e42276c5c93ee345960681798953990571c54841535ca0cdd88989fc1854968f5d0d764026d7309bfbd76a2e009002d3dd8d70f43d597d4c0636325fa4f7734ff3903d0b19401b477817aa40c540b5376aa5ff92abb649e7e032fb1b666fa82b6cdf092edb8c0e155dcf2904b276d8f01bdee8d5581f862315533aeb59b6ad5f70d63a0a51254ff1911a529899fd213ed7091c51a5d98d59a90b4faab0d0cd4cf0958ae2445c7ee15f4c5c646e8bbbf64b839de2067e3d35eee77af2ed5abf63678644d3214f4cc99921e8288c14c4f31ba2a83ca39938c17caf1965adfe5fac21354085d1af14b8cb04b88c9b4b58fd19b2900b6746793fcfcf960da25cf444ec9611f65c5e1e7a7590d0306f34bf91c3ed2ee98270793d1764610780f22eef05ff082ab13f358b60b757f90f8ac01f070585ae432fad89cf17993cc09888a1d08c79474a6a9af038d0473603bac1a38de3ab08c69c048b9e0edf38a53bcac82aa1a55384d7ec7d995cfd478eae7c9fe625bfdd1b26f981649ceededd05ba0f3787dcb47eee255699af4d253edb30107d2c9914e2661df789802d3631bfd47101e46bb970d4dded4d0fa3f78d981cb47e9124ac70fe91d48d4d626ddc03b65a443a8e991e4864ec1a5b9ffb38cca285be66ef2f41a5f2d4f45c87a58812c1f31526cbdd3505c0b5175e1f02b4f52655f032226f575bd215079810d77a909cea7714d977b9e13930bc3d2c8f2a8cd1c986c457ce35fa9d7cda6c92abc95756abed0b2961624c0991d60b73752320af230921f41ca7d2f860eeabda2d19d343120826e8d1531f8f9c17aef1a69e3df466f57fa60055ee4119e40673ca2f256e243afb57c7cc2f90ee32739189598d92a1d73ab8e2ec87b4d9a670af14d7e9d0ebbfee7741d058570a99a25ad491deff4c61acfdb53adc2545b4eb0a1599a7368064434067a4cb453acdd724f3dd2686007037796976aebd72d3f0caba19c8b5a322347015fb3409f1644769fe09c39f15d1b3666b705572de7bad114d05755a47c25ac80bb111534746e9e9aaff708d839b4c11f85d23569913f3c8c56ed42d4ffa4","salt":"3a79ad3fb5f36ac6edf53e9c97e936e59be820080bb8e80837f9753328c84b08","nonce":"0821c09fa545f69492f95373","version":"eip191-aes256-gcm-hkdf-sha256","preKey":"731e266bf610ebff6a89205219bd406410c840b1a3a9b0ea3cde9dbf952c40cf"}',
  encryptionType: 'eip191-aes256-gcm-hkdf-sha256',
  encryptedPassword: null,

  nftOwner: null,
  publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\n' +
    '\n' +
    'xsBNBGRKisMBCADIwqh5NYpXtOeUQwjjtWwM6rQqL5jP3AJprNLYqNcQFHUH\n' +
    '7fEjz/+vfb6nivj21bRoeToPz9sj4ATqh9o4fiE+jfkFih3vQxR43p93FIx7\n' +
    'u4hUNsxHkg5v/ek43+IxYbl9tXDzcciikzzjuIzO5yjXu62UAYAHzwf5XJ2g\n' +
    'm48uNWvzclTHlTRWltVKO57FOAFUIYtNRAux9JlzJiIcLiBhpEwGY8QM5qkj\n' +
    '0cw8wPyiao6dD4fSGksse1P4txMJbyUzZ4Cdh9yRARFkg0Y6wRCuhE4B+y0Q\n' +
    'ULQsLsKupkesYqWDxIvlF3dSlduTgwKUJ0P7A4S4IO7oNsIYR9+Nvzx3ABEB\n' +
    'AAHNAMLAigQQAQgAPgWCZEqKwwQLCQcICZCgEoDWdM6knAMVCAoEFgACAQIZ\n' +
    'AQKbAwIeARYhBAcTNezEWVrBsiBI4KASgNZ0zqScAACymQf/e4juYRa1564a\n' +
    'qaMetz7hVRn15M+PS9yoDT1sE/eOxMzrKDoyzUGvJXJHNXRw9wBl1Zjwe/mR\n' +
    'Czn99FLuETxoM2PUs6/vZjui6O93I3GrenAgcMxdoGBOd6rSo+P3gevm9X71\n' +
    'R6xQm3IjemY5QQ4s928Yp8Erzi+u6OtrP23wbKtoiCC8FBjBG2TU7t9z40Jw\n' +
    'DV+Ash9wWJjZTrSuyKs4xP+5njFEVM4QBRqs7i8GstO6T5/AMoPfEJApXiO9\n' +
    'cLJ1MFDpjfIPjCE0w8cgbFelS2wdnQiaAExqFgCWjUsYfC3ik00cFJewGLzO\n' +
    'vGQbLI1LsbWDE9oxg5aodVnhluUbbM7ATQRkSorDAQgA7vEJF/gFW4QTUqCI\n' +
    'tcFPP9xWxTBmoLSsTJWuKYEOGUjcNv6nCtvUaTeSlKeVdKZ0LAur/8GB4BEd\n' +
    'PLXJ1gK56W0ZIuc3x5GXPAUt6f9ZSDh2O3M3mkcwxA6CrEkOY/jC1vOS+scv\n' +
    'DbmLOgsJlAVHSyNw/pce60BbU6YYDwZupXRG7fxYkkQe6ryQMd8+KYdniJQr\n' +
    'ksXdY5UeTPNWo378u03i6OFGsjKeXOva6zmTicAle/bVDOODAnZrpD7tHlfW\n' +
    'eprADORyBIWixyIAvZSnI95lpRrMF1HaYyRQLB4czlf15wPuVtI9ZHv3fcmu\n' +
    'kpDUK7DBYzGCsKevt+hHOvxnfwARAQABwsB2BBgBCAAqBYJkSorDCZCgEoDW\n' +
    'dM6knAKbDBYhBAcTNezEWVrBsiBI4KASgNZ0zqScAABgwggArSnrqA2Uu8r9\n' +
    'eoZ8t7me0stohj+900arMgqd1CI1gVg2TeQJQq29xUX0ImGQ97rNwiYhAzIf\n' +
    'vFRZN4nsB/nfy0EFb8EdXeQNVhV1ZZpZt6vvsgqdqgO35w80MPemvGHJPK1b\n' +
    'aaCXIFjttT+Q6+6jPiPdj6X/PS0MECKvp58oYOXG7c/94xcj4fbfgCguEGYn\n' +
    '6MBOpZTeh/Q+72TOl8swR9IalMDT67b4yu358kI0pDfV3q+fCtbC/+6D6h1u\n' +
    'T7slcG9RK63J5/F1S69Mm3kj3wUc3nRGHvuCPgM+zUFCLD1R57Gq6Ec8TClf\n' +
    'NrD/eipCuEuZ4vHp0UUpCCNF95fidQ==\n' +
    '=YfD8\n' +
    '-----END PGP PUBLIC KEY BLOCK-----\n',
  sigType: 'eip191',
  signature: '0x45a5ee5ab63c75d78a256b1164b1f6b2807391d773de095b539e0cf751cb8b58248fcb975cc32dc464ae3473035c4870ce914bc3b8fc5bb6a7ad1b8813f9e7ec1c',

  nftOwner: string | null; // Delete
  wallets: 'eip155:0x141d703744186Dd87390d42DaefDd42403C5f6ab',
  linkedListHash: '',
  nfts: []
}
```

## Decrypt PGP Keys

Push chat is encrypted and only the users are able to decrypt chats, send messages, approve chat, etc. This means that you need to decrypt PGP keys after you have fetched user info for most of the features. Decrypting is easy and requires you to pass the user object and the signer.

```javascript
// pre-requisite API calls that should be made before
const user = await PushAPI.user.get({
    account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7', 
    env: 'staging'
});
  
// actual api
const response = await PushAPI.chat.decryptPGPKey({
    encryptedPGPPrivateKey: string;
    account?: string;
    signer?: SignerType;
    additionalMeta?: { password?: string }; 
    env?: ENV;
    toUpgrade?: boolean;
    progressHook?: (progress: ProgressHookType) => void;
  })
```

| Property               | Description                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| encryptedPGPPrivateKey | encrypted pgp private key                                                                                         |
| account                | user account in `eip155:walletAddress` format or `nft:eip155:nftChainId:nftContractAddress:nftTokenId:RandomHash` |
| signer                 | ethers.js signer                                                                                                  |
| additionalMeta         | Additional information in case when necessary.                                                                    |
| env                    | Environment variable. Default prod. For testing, use staging.                                                     |
| toUpgrade              | Whether or not to to upgrade pgp encryption scheme                                                                |
| progressHook           | notify developer about status of updating pgp encryption scheme                                                   |

<CustomLinkCard text="Decrypt PGP Keys" link="https://www.npmjs.com/package/@pushprotocol/restapi#decrypting-encrypted-pgp-private-key-from-user-data"/>