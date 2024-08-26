---
slug: the-role-of-randomness-in-push-nodes
title: 'The Role of Randomness in Push Nodes'
authors: [push]
image: './cover-image.webp'
description: 'The Role of Randomness in Push Nodes'
text: "One important aspect of decentralized networks is that they don’t have any central authority that governs their working mechanism."
tags: [Push Protocol, Web3, Blockchain Technology]
---

![Cover Image of The Role of Randomness in Push Nodes ](./cover-image.webp)

<!--truncate-->

One important aspect of decentralized networks is that they don’t have any central authority that governs their working mechanism. This means, the network must create a system and rules that allows them to not just securely communicate but to also form a consensus on the overall state of the network.

While it's a complicated task and there exists a plethora of imperative ingredients that enable security and fairness in a decentralized network, one of the most significant ones is randomness.

Randomness, in its simplest form, refers to the lack of pattern or predictability in events. It's a concept that plays a crucial role in various fields, from mathematics and computer science to nature itself. Randomness is what makes a dice roll unpredictable, ensures fairness in games, and powers the algorithms behind secure cryptographic systems. In technology, especially within decentralized networks, randomness serves as a fundamental building block that underpins security and fairness, ensuring that processes are free from bias and manipulation.

In this article, we explore the significance of randomness in decentralized networks and how Push nodes incorporate randomness to enhance the security of the Push network.

### Why do we even need Randomness?

To begin with, let’s understand the importance of Randomness in decentralized networks.

As previously mentioned, decentralized networks don’t have a central authority. Instead, they are made of a group of nodes located at different parts of the world. These nodes are responsible to act and perform certain actions in the network to keep it functional.

The selection of nodes to perform specific tasks must happen in a decentralized and fair manner to ensure no single actor in the network is capable of controlling the operations of the network.

This is where randomness plays a critical role.

In such decentralized systems, randomness is used to ensure the unpredictability of various processes, such as selecting validators, generating cryptographic keys, etc. 

This unpredictability is essential to prevent malicious actors from gaining control or manipulating the network. For example, in consensus mechanisms like Proof of Stake, a random selection of validators ensures that no single participant can dominate the process, thereby maintaining the decentralized nature of the network involved.

Randomness also enhances the resilience of blockchains by making it difficult for attackers to predict or influence outcomes. This unpredictability protects against various attacks, such as Sybil attacks or collusion, where adversaries attempt to gain disproportionate control over a network.

Moreover, randomness is vital in achieving fairness as it helps ensure that every participant has an equal opportunity to contribute and benefit from a network, regardless of their resources or influence.

Now that we have a basic understanding of how crucial randomness is, let’s understand its how Push Nodes use randomness to enhance their security and fairness.

### Quick Glance at Push Nodes

[Push Nodes](https://push.org/blog/explaining-push-nodes/) are a significant step towards the decentralized infrastructure for web3’s leading communication layer, the Push Protocol Network. This network is designed to facilitate secure and efficient movement of web3 notifications. 

The Push Network comprises different types of nodes such as Validator Nodes, Storage nodes, etc. A smart contract guards the network to maintain node staking and slashing. This is where the PUSH token is used.

### How the Push Network uses Randomness to enhance its Security

In this section, we will specifically understand the complete mechanism of how a transaction is submitted onto Push network and the role of randomness involved in the process.

In the Push Network, the role of randomization is incorporated at multiple levels which allows the network to prevent centralization while ensuring that it remains resilient against a variety of attacks. 

A crucial security mechanism of the Push Chain is the randomized selection of validators for transaction validation or block production. This mechanism leverages cryptographic randomness to ensure an unpredictable selection of validators & attestants ( *who verify whether or not a transaction is legit* ) to enhance the network’s resilience and fairness.

A brief overview of the process looks something like this:

- To send a transaction to the network, the SDK/sender must attach a randomly generated token number to the transaction.
- To fetch this token, the SDK can request the same from any validator.
- Once received, the SDK attaches this token to the transaction and sends it to the network.
- The network then uses this random token to cryptographically decide the specific validator to verify the particular transaction for further processing.
- Additionally, the validator also randomly decides the validator set responsible for attesting to the transaction.

### **Now, let’s dive deeper into the Randomness of the Push Network:**

The Push SDK selects a random validator (VR1) to generate a special signed (RANDX) hex token. 

The generation is performed as follows:

1. **Generation of a Random Token:**
    
    The network is designed to ensure that a random token cannot merely be generated by a single validator. Instead, it must be a combined effort as every random token is ideally a collection of digitally signed pieces of random numbers provided by specific validators in the network.
    
    To determine the exact number of such pieces required to form the token, the Validator.sol smart contract defines a parameter called `*required_random_number`.* This indicates the number of required random peers whose signed values each validator must hold, at a given time. Additionally, the contract also defines an `*expiration_time*` parameter that defines the expiry time for these tokens which helps ensure that only freshly created tokens can be used for the creation of random tokens.
    
    It should be kept in mind that validators in the network periodically ping their peers to collect and exchange signed random values. The collected value from each validator is a combination of the random value itself and the validator's signature, ensuring it can be verifiable.
    
    ```jsx
    signedRandomValue = value + validatorSignature
    ```
    
    As a result, at any given moment the validators should have a collection of signed random values by their peers, i.e., **`signedRandomValue[].`**
    
    Once a validator has accumulated the necessary signed random values, it can generate the random token. This token is derived from the network's collective randomness using the following formula:
    
    ```jsx
    RANDX_Token = XOR(sha(signedRandomValue[i])) for all i
    ```
    
    1. **The SDK Requests for a Random Token** 
        
        Next, now let’s understand what happens when the SDK requests for a random token.
        
        As previously mentioned, before sending any transaction to the network, the SDK  requests for a random token that must be attached with the transaction being sent.
        
        Now, since a random token value has already been generated ( as mentioned in step 1), any validator can provide this random token to the SDK.
        
        The SDK then attaches this random token to the transaction payloads and sends the transaction to the network.
        
    2. **Randomized Selection of Validators**
        
        This random token attached to the transaction plays a crucial role in randomly deciding which validator will process the transaction. With this token, the SDK deciphers the validator ID, to whom it must send the transaction for further processing. 
        
        ```jsx
        validator_id = f( RANDX_TOKEN, contract_defaults)
        
        //OUTPUT looks like: 
        validator_id = v1
        
        where contract default parameters could be:
        a. min required quantity of random numbers,
        b. expiration time,
        c. a minimum number of peers that acknowledge the validator's online status.
        ```
        
        Upon receiving the transaction, the validator checks the random token in the transaction’s payload and validates it to confirm that it has been correctly assigned the role of handling this transaction. 
        
        In case the validator identifies that it has been wrongly chosen, ***it can reject the transaction.***
        
        Once the accurate assignment of the validator is confirmed, the validator now creates a similar randomized process for creating a list of validators who must attest to the transaction being processed.
        
        ```jsx
        vlist = f(RANDX_Token_2nd, contract_defaults)
        
        // Output looks like this:
        vlist = V2, V50, V11, V8, V38, V17, V29
        ```
        
        This list of validators is also responsible for verifying its **legitimacy.**
        
    
    ### Summary
    
    To summarize, the entire process detailed above adds a security layer with the inclusion of randomization at multiple levels, i.e.,:
    
    - **1st Level:** The initial randomization starts with the SDK choosing any random validator to request for a token to be attached to the transaction.
    - **2nd Level: A token is generated** using digitally signed pieces of random values from multiple random validators instead of relying on any single actor.
    - **3rd Level: A specific validator is randomly selected** to create the token to be attached in the transaction occurs.
    - **4th Level:** The final level of randomization determines which specific validator (VR2) will process a transaction and which validator set will act as attestants to verify the transaction.
    
    This multi-level randomness ensures that at every step, the network is secure, and fair, while continuing to operate in a completely decentralized fashion.
    

---