---
slug: how-to-implement-gasless-vote
title: 'How to Implement Gasless Vote Delegation — A novel feature for Governance'
description: 'How to Implement Gasless Vote Delegation — A novel feature for Governance'
authors: [push]
image: './cover-image.webp'
text: "Last month we released the gas-free vote delegation offer and planned to run it for the whole month of March with the option to extend. Today we’re happy to share that this offer will be available to a wider set of users for a longer period of time. Details below."
tags: [ Blockchain
,Governance
,Epnsproject
,Delegation
,Vote ]
---
import { ImageText } from '@site/src/css/SharedStyling';

![Cover image of How to Implement Gasless Vote Delegation — A novel feature for Governance](./cover-image.webp)

<!--truncate-->


### Gasless Delegation Period Extended!

Last month we released the gas-free vote delegation offer and planned to run it for the whole month of March with the option to extend. Today we’re happy to share that this offer will be available to a wider set of users for a longer period of time. Details below.

*   Reduced minimum token holding for eligibility from 250 $PUSH to 100.
*   The eligibility period has been extended for the whole month of April.

All other details will remain the same as of now.

Vote Delegation
---------------

Vote delegation is a novel feature that is enabled in the PUSH token contract, keeping in mind the idea to grow a strong community that acts in the best interest of the protocol. `PUSH` allows its token holders to **delegate** their voting rights to an address of their choice.

Vote delegation is creating a strong barrier for the majority of token holders as it requires ETH to cover gas-fee to execute the `delegate` on-chain transaction.

As the DAO landscape is going through immense experimentation and innovation to address the pressing problems, we came up with the **Gasless Vote Delegation** feature as a solution to voter apathy. We launched the feature a month ago and would like to share our insights and feedback received since its release.

Gasless Delegation
------------------

The goal of this initiative is to make voting an accessible activity to every PUSH token holder. Holders currently have a few ways to activate their voting power, and many of those ways are already incentivized with users receiving $PUSH token rewards!

With this feature token holders can delegate their voting power, free of gas cost. From our PUSH Governance dashboard, a token holder would just have to sign the delegate transaction.

As this feature rollout was an experiment, we took precautions from exploitations by enabling few barriers.

*   This feature is accessible to everyone holding at least 250 PUSH.
*   A unique wallet address would be able to use the gasless delegation feature once in 7 days.

How to implement Gasless Vote Delegation
----------------------------------------

After the implementation of the Gasless Vote Delegation, we see this to be a much better delegation architecture for holders than them delegating votes on-chain. Hence we are releasing this article & making the repositories public so that any DAOs out there could explore & implement the feature without much difficulty.

**A high-level overview of the steps involved for a delegator**

1.  Click on _Delegate_ from [Push Governance Dashboard](https://incentives.epns.io/)
2.  Sign the delegate parameters needed for _delegateBySig_ contract function
3.  The backend verifies the signature by leveraging EIP712 & does the backend checks.
4.  The backend wallet pays for the transaction.

EIP-712 is a more advanced and safer signature method. It is a standard for hashing and signing typed structured data. Gasless delegation is implemented using EIP-712.

How the frontend works
----------------------

[Frontend repository](https://github.com/ethereum-push-notification-service/epns-incentives-dapp)

1.  Sign the delegate parameters needed for _delegateBySig_ contract function

```
const domain = {  
 name: contractName,  
 chainId: chainId,  
 verifyingContract: contractAddress  
}const types = {  
 Delegation: \[  
  { name: "delegatee", type: "address" },  
  { name: "nonce", type: "uint256" },  
  { name: "expiry", type: "uint256" },  
 \]  
}const value = {  
 'delegatee': newDelegatee.toString(),  
 'nonce': nonce.toString(),  
 'expiry': expiry.toString()  
}signature = await signerObject.\_signTypedData(domain, types, value);
```

2\. Check whether the gasEstimate for the transaction is less than or equal to GAS\_LIMIT.

```
const gasPrice = await EPNSCoreHelper.getGasPriceInDollars(library);  
const totalCost = gasPrice \* gasEstimate;  
if(totalCost > GAS\_LIMIT){  
 return "Gas Price is too high, Please try again in a while."  
}
```

3\. Call the Delegate API

```
await postReq("/gov/gasless\_delegate", { delegator: account, signature: signature, delegatee: delegatee, nonce: nonce.toString(), expiry: expiry })
```

How the backend works
---------------------

[Backend repository](https://github.com/ethereum-push-notification-service/epns-incentives-backend)

Once the incentives frontend triggers the Delegate API, the following conditions are checked before proceeding to pay for the delegation from the backend wallet.

1.  ETH balance of the backend wallet must be greater than the WALLET\_THRESHOLD

```
balance > WALLET\_THRESHOLD
```

2\. PUSH Balance of the delegator must be greater than the PUSH\_THRESHOLD

```
pushBalance > PUSH\_THRESHOLD
```

3\. The delegator must not have attempted the Gasless Delegation feature in the past 7 days.

```
days > 7
```

Once these conditions are met, the delegation transaction is initiated from the backend wallet.

1.  Split the signature and extract v, r & s
2.  Initiate the _delegateBySig_ contract call

**Note:** We released this feature on an experimental basis. Please DYOR before implementing this feature.
