---
slug: the-rise-of-chains-and-fall-of-ux-in-web3-ux
title: 'The Rise of Chains and Fall of UX in Web3 UX'
authors: [push]
image: './cover-image.webp'
description: 'The Rise of Chains and Fall of UX in Web3 UX'
text: "It has been around 9 years since Ethereum was born. It's been 9 years since Ethereum first launched, marking the beginning of a revolutionary era in blockchain technology."
tags: [Web3 UX, Insights]
---

![Cover Image of The Rise of Chains and Fall of UX in Web3 UX](./cover-image.webp)

<!--truncate-->

It has been around 9 years since Ethereum was born.

It's been 9 years since Ethereum first launched, marking the beginning of a revolutionary era in blockchain technology. What began as a general-purpose blockchain has evolved into a global, decentralized World Computer, unlocking a wave of technological innovations through the power of cryptography and decentralization.

Fast forward to today, the landscape has dramatically shifted. 

We have over [30 Layer 2 solutions](https://dune.com/21co/layer-2-summary), numerous rollups and now even Layer 3s. With such an explosion of chains what we now have is a fragmented ecosystem where user experience is compromised, liquidity is spread thin across multiple platforms, security of assets is a major concern, and building applications in the multi-chain world is getting increasingly difficult.

*But how did we get here?*

This article is designed to give a complete picture of the following:

- *How web3 ended up with so many chains,*
- *How this has adversely affected the entire ecosystem,*
- *And, what we can do to build better web3 apps in this multi-chain world*

Let’s get started.

### The Rise of Chains

Since the advent of layer 1 chains, scalability and high fee (gas) requirements have been a major concern. For chains like Ethereum specifically, as the number of applications grew, so did the network’s congestion and the overall cost for users.

A significant step to resolve these issues was taken on October 02, 2020, when Vitalik introduced the [*Rollup-Centric Ethereum Roadmap*](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698). This meant Ethereum moved towards rollups as its scaling strategy because **bundling multiple transactions** **into batches** significantly increased ***transaction throughput*** and ***reduced transaction costs.***

This solved Ethereum's scalability issue effectively as it reduced the load on the Layer 1 chain and provided cheaper transaction fees. However, we soon realized that the rollup-centric roadmap had led to the development of plethora of new L2s, Rollup solutions, and even L3s. This expansion has enabled greater scalability and reduced transaction costs, which are essential for the growth of decentralized applications (dApps). 

Additionally, the web3 ecosystem soon realized the need for designing chains that are specifically optimized for single applications, i.e. app-specific chains. Technically, this seemed necessary to ensure that these applications could achieve optimal performance, security, and user experience tailored to their unique requirements without being affected by the general-purpose network congestion and fees of more generic Layer 1 or Layer 2 solutions.

While app-specific chains achieved the desired outcome by optimizing for their specific needs, this again led to the creation of multiple new chains. L3s as applications like dYdX, Hyperliquid, or Frax became standalone app chains or rollups of their own.

This inception of new rollups, app chains, L2, and L3s undoubtedly resolved quite a few key issues of the ecosystem like *scalability, block space, network usage fees*, etc. However, it also led to another significant concern for web3 users and devs.

A deep dive into this topic will lead us to many concerns that arise with the significant proliferation of chains such as f*ragmentation of liquidity across chains, inadequate incentive management, broken user experience, difficulties for developers, security risks, etc.*  

However, in this article, we will primarily focus on the ones that affect either the existing users or the newcomers.

### The Fall of Web3 UX

As the number of chains has multiplied, so have the challenges, particularly in terms of user experience (UX). With the rise of these new chains, the overall UX of web3 has become increasingly complex for the average user to navigate. 

Here is a quick glance at what a typical web3 user needs to deal with in this multi-chain universe:

- *managing multiple wallets,*
- *managing multiple native tokens/assets in their multiple wallets,*
- *understanding the nuances of each network,*
- *navigating multiple networks to perform simple tasks,*
- *interacting with complicated dapp UIs with frequent network switching*
- *navigate through inconsistent user interfaces*
- *relying on the risky route of cross-chain bridging between chains*
- *experiencing difficulty in maintaining a consistent cross-chain identity due to the multi-chain ecosystem*
- *dealing with the lack of standardization between networks, protocols, etc*
- *dealing with the learning curve of understanding different networks, each with its own set of rules, interfaces, and requirements.*

Remember that this is just a glance at the UX problem. There are undoubtedly more issues issues for a web3 user daily. The list is even longer when it comes to newbie web3 users.

The above-mentioned issues lead to a few major hurdles for not just users but also for developers as well as the entire web3 ecosystem: 

**Fragmented User Experience**

The main drawback of navigating a multi-chain world is, well, the ***multiple chains*** (*instead of just one)*. And that leads to a completely fragmented user experience. 

A continual requirement for users to switch between chains, often using different wallets or interfaces for each one makes it challenging for users to keep track of their assets or manage their interactions with dApps. As a result, many find the Web3 experience confusing and overwhelming, which can deter them from using these services altogether.

**User Retention Challenges**

Poor UX can directly impact user retention. 

Truth be told, it already is impacting user retention.

When users encounter difficulties in navigating the web3 ecosystem, they are less likely to return to it. High-profile dApps that have struggled with user retention due to UX issues serve as cautionary tales for new projects entering the space. Complex interfaces, slow transaction times, and confusing wallet setups have all contributed to a decline in user engagement and adoption.

**Security and Trust Concerns**

The complexity of managing multiple chains also introduces security risks. 

Users must ensure that they are interacting with the correct chain, using the right wallet, and understanding the implications of each transaction. This complexity increases the likelihood of user errors, such as sending assets to the wrong address or falling victim to phishing attacks.

Furthermore, the process of bridging assets between these chains is quite often cumbersome and fraught with risks. Users must rely on various bridging protocols, which not only add to the complexity but also introduce potential security vulnerabilities. For instance, a user willing to move tokens from Ethereum to an L2 solution must navigate multiple steps, including wrapping and unwrapping tokens, which can be a deterrent for new users.

**Increased Complexity for Builders**

The rise of multiple chains was never just a UX problem for the users of web3. There’s more to it. It has also introduced a host of extra challenges for developers and builders in the space. 

For example, each chain often has its own development tools, SDKs, and environments that developers must learn & adapt to, which can be time-consuming and lead to inconsistencies in development practices. Maintaining applications that operate across multiple chains requires managing multiple codebases or conditional code paths. This can lead to significant maintenance overhead, especially when chains update their protocols or APIs.

Each additional chain integrated into an application introduces new potential vulnerabilities. Developers must ensure that the security of cross-chain interactions is robust, as any weakness could lead to exploits or hacks. 

Furthermore, developing for a multi-chain ecosystem that still lacks adequate standardization - is costly. It requires more time and resources, as developers need to learn and implement different protocols, test on multiple platforms, and ensure compatibility across the whole environment involved. The additional cost of extensive security audits makes the process of building & maintaining apps even more difficult.

**Barrier to Mass Adoption**

The above-mentioned problems are issues that affect not just users but the web3 world as a whole. 

One of the biggest barriers to the mass adoption of Web3 is poor UX. While early adopters and tech-savvy users may be willing to navigate the complexities of the blockchain, the average user is likely to be put off by the steep learning curve. To achieve widespread adoption, Web3 dApps must prioritize UX and make it as easy as possible for users to interact with their services. This means simplifying interfaces, reducing the need for users to understand the underlying technology, and providing clear, concise instructions.

### So, What Can We Do About It?

Web3 has come as far as it has today by collaborating to solve the major problems of the ecosystem from providing decentralized infrastructure to solving scalability concerns. The current major problem, however, is the fragmented and broken UX of web3 apps.

Fortunately, some teams and protocols have some of the best minds in the industry, already working on solving this problem.

One of the major roadmap items of Ethereum, for instance, is its plans to fix the fragmented ecosystem with [***Universal Synchronous Composability](https://ethcc.io/archive/universal-synchronous-composability),*** which undoubtedly would be a massive step towards solving the fragmented world we have today as well as towards providing a better UX for users.

Frameworks like [CAKE](https://frontier.tech/the-cake-framework) by Frontier Research as well as protocols like Socket, Particle Network, etc., are all building solutions to provide an abstracted user experience for web3 users where they no longer have to bother about the underlying chains, *which in itself resolves more than half of web3 users’ UX issues.* 

Most of these solutions, however, are currently in their nascent stages and it will still take a significant amount of time for them to shape the overall fragmented UX of Ethereum.

Moreover, this does not indicate that it all has been addressed. As web3 builders or protocols, we can still do more to expand the boundaries for improving web3 UX. There are still a few imperative actions that we can take to enhance the experience for our users because as previously mentioned - ***good UX for users impacts the overall web3 ecosystem positively.***

In fact, some of those actions can be taken instantly to improve your applications.

1. **A UX-First Approach to App Development**
    
    In simpler terms, this means building your apps in a way that even a newbie web3 user can navigate without having to read a single page of documentation or reach out to you for extra support.
    
    Most web3 applications are usually built with native web3 users in mind. It is simply assumed that users should be well aware of what a *hexadecimal blockchain address* looks like or what *blockchain-based* *transactions* mean.
    
    Dapps with such assumptions, while easy to build, are a nightmare for new users who aren’t tech-savvy and this leads to a bad UX for most users.
    
    To combat this, apps should focus on creating intuitive, user-friendly interfaces that abstract away the complexity of interacting with the blockchain - *as much as possible*. This includes providing clear instructions, reducing the number of steps required to complete a transaction, and ensuring that users have access to all of the information they need to make informed decisions. 
    
    Thus, focus on creating apps with user-friendly designs that prioritize seamless interactions and accessibility.
    
2. **Provide Cross-Chain Support & Solutions If required**
    
    Cross-chain interoperability is another critical solution for improving Web3 UX. By enabling seamless communication between different chains, interoperability protocols can reduce the complexity of navigating a multi-chain environment.
    
    If your protocol spreads across multiple chains, you need to figure out ways to make it seamless for your users to navigate through it and the apps built on top of it. Including cross-chain solutions for such cases eventually leads to a better UX for your users.
    
    A good example of this in practice is how Push leverages cross-chain solutions for its [CCR feature](https://push.org/blog/cross-chain-requests-pre-pip/) which primarily aims to improve the experience for the users.
    
3. **Incentive Structure for Seamless UX**
    
    Incentivization could play a key role as well. To encourage developers to prioritize UX, dApps can create incentive structures that reward user-centric design.
    
    This could include offering grants to developers who create user-friendly interfaces, and focus on solving UX challenges in multi-chain environments. This could help fund the creation of tools and features that reduce friction for users by either optimizing existing pieces of software for better performance or simplifying user interfaces.
    
4. **Good UX is more than just a User Interface**
    
    A common misconception is to equate good UX solely with fast and visually appealing user interfaces. In reality, a truly great UX goes far beyond just the front-end design.
    
    Two critical components that significantly enhance the overall UX for your users are ***usability and trust.***
    
    Unlike traditional Web2 apps, Web3 applications interact with smart contracts, which require gas fees for any on-chain operations. Optimizing these smart contracts to minimize gas consumption is essential. By doing so, you ensure that users can engage with your dApp more cost-effectively, directly improving usability and making your application more accessible to a broader audience.
    
    Moreover, robust security features and a commitment to transparency with users are fundamental to building **reliability and trust.** In the Web3 space, where apps interact with immutable databases—the blockchain—users must be confident in the safety of their transactions. Since most on-chain transactions are irreversible, providing clear security warnings before users commit and giving detailed error messages, and transparent indicators of transaction statuses (including estimated processing times) are crucial for fostering trust.
    
    In addition, conducting thorough audits of your smart contracts to mitigate the risk of exploits is not just a security measure but a vital aspect of UX. Ensuring that users' assets are safe builds confidence and reliability in your app, which is indispensable for an overall positive user experience.
    

### Building a Web3 App in a Multi-Chain World

Push Protocol has always aimed to improve the overall user experience for not just its own users but the entire web3 ecosystem.

Since the launch of our dapp, we have led with the incorporation of a UX-Driven and Security-First approach. Be it visual interface changes to the dapp, optimizations of our smart contract, or enabling gasless opt-ins for smooth dapp interactions, we continue to put this into practice across the board.

Here is a quick glance at the evolution of the Push Dapp since its early days.

![Push DApp](cover-image1.webp)   

However, as previously mentioned, UX is more than just user interface improvements.

In particular, maintaining an excellent UX in web3 app with such a fragmented ecosystem could be very challenging. 

We faced a similar challenge as well.

Push has built a communication & notification layer for all EVM ( *and soon, Non-EVM )* chains. This means our dapp supports multiple chains which leads to a fragmented experience where user have to frequently switch between chains to perform various actions.

A major improvement to resolve this was recently proposed in the PRE-PIP 3 of Push Governance, i.e.,  **[Cross Chain Requests.**](https://gov.push.org/t/pre-pip-3-cross-chain-request-feature-in-push-smart-contracts-v3/1794) 

**Cross Chain Requests ( CCR)** feature shall be one of the most significant features of Push Smart Contracts as it will enable users to perform important actions like c*hannel creation, creation of Incentivized Chat requests, or any arbitrary request* from the chain of their choice.

The core idea of the Cross Chain Request feature is to **make Push smart contracts capable of handling requests that can originate from any chain and are securely relayed to Push Core contracts on Ethereum for necessary validations & state changes.**

In other words, we shall be able to provide an abstracted experience to our users, one in which they no longer have to care about switching to a specific network to interact with the dapp. Users can choose to stay on their preferred chain and the dapp shall be able to handle the rest, thus providing a significantly improved UX in the currently fragmented multi-chain world of Web3.  

### Conclusion

The rise of multi-chain environments has undoubtedly brought about significant advancements in scalability and efficiency within the Web3 ecosystem. However, this growth has also introduced new challenges, particularly regarding user experience. As dApps continue to evolve and expand across multiple chains, it is crucial to prioritize UX to ensure that users can navigate the ecosystem with ease. 

By focusing on creating unified experiences, leveraging cross-chain interoperability solutions, and simplifying user interfaces, web3 apps can overcome the challenges of a multi-chain world and hopefully drive mass adoption of web3 technology.

To achieve mainstream adoption, it's now imperative that web3 finds ways to streamline these experiences, making it easier for average users to navigate the complex landscape of multiple chains and protocols.