import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Core & Communicator Smart Contracts

In order for the protocol to be chain-agnostic as well as truly decentralized, Push smart contracts play a major role.

The Push smart contracts have now been divided into two different smart contracts, i.e., **Push **_**Core &**_** Push **_**Communicator.**_


### **1.** Push **Core Protocol: (EPNSCore)**

The Push core protocol, as the name might indicate, is the main smart contract as it handles some of the most crucial features like _**Channel creation, governance, channel state changes as well as funds and incentive mechanisms**_**, etc.**&#x20;


It’s very important to note, however, that the Push **Core smart contract will only be deployed on the Ethereum blockchain and not on any other chain.**

### **2.** Push **Communicator Protocol: (EPNSCommunicator)**

Unlike the Push Core smart contract, the communicator protocol is designed to be deployed on multiple chains. This is also one of the imperative reasons behind the communicator contract being lightweight and less reliant on Push Core.

The Push Communicator protocol is comparatively quite simple. The communicator protocol includes features that allow users to _subscribe to a channel, unsubscribe from a channel as well as the imperative one, i.e., **sending notifications.**_

&#x20;As the communicator protocol can be deployed on various chains, it allows us to trigger notifications on multiple chains and not just the Ethereum blockchain.

### Technical Resources for Push Smart Contracts

<CustomLinkCard text="Push Core Contract" link="./epns-core-contract"/>

<CustomLinkCard text="Push Communicator Protocol" link="./epns-communicator-protocol"/>

<CustomLinkCard text="Push Contract Addresses" link="./epns-contract-addresses"/>
