---
slug: epns-community-ama-recap
title: 'EPNS Community AMA Recap'
description: 'EPNS Community AMA Recap'
authors: [push]
image: './cover-image.webp'
text: "Ethereum Push Notification Service (EPNS) Founder and Project Lead- Harsh Rajat, Co-founder- Richa Joshi and Development lead- Jaffet Sandi joined the EPNS Community on 7th May 2021 for a community AMA session. We were thrilled to see such an overwhelming response from the community and thoroughly enjoyed answering community member’s amazing questions."
tags: [ Announcements
,Ama
,Ethereum
,Blockchain
,Community
]
---
import { ImageText } from '@site/src/css/SharedStyling';

![Cover Image of EPNS Community AMA Recap](./cover-image.webp)

<!--truncate-->

Ethereum Push Notification Service (EPNS) Founder and Project Lead- Harsh Rajat, Co-founder- Richa Joshi and Development lead- Jaffet Sandi joined the EPNS Community on 7th May 2021 for a community AMA session. We were thrilled to see such an overwhelming response from the community and thoroughly enjoyed answering community member’s amazing questions.

_Find the AMA transcript below:_

Jai: Hey everyone and welcome to our very first EPNS Community AMA 👋

I hope you all are as excited as we are.

**This group has been** **MUTED**, if you find yourself unable to post, this is only temporary as we will be opening the group during the live session and finally after the AMA; in other words, you aren’t banned from the group, it is only muted for our AMA.

**Flow of our Community AMA:**

**Section 1:** Introduction/Questions

**Section 2:** We have selected 4 of the best Questions from Twitter. Those that were selected are eligible to claim their share of the prize pool.

**Section 3:** There will be a live AMA session and everyone will be allowed to ask any questions, We will endeavour to answer as many of the questions as we can. The 4 best questions will be selected.

👥 **Harsh Rajat- Founder, Richa Joshi- Marketing Lead and Jafett Sandi- Dev Lead at EPNS are here with us to answer your questions.**

So, without further ado, Let’s get this show on the road!

Harsh @harshr, Richa @RJlwl and Jafett @JafCR can you please introduce yourselves and go over your backgrounds so everyone in here gets to know you better? 👏

Harsh: Hey Awesome Community!

Feels a bit weird to intro in our community but here goes… I am Harsh, Founder and Project Lead of Ethereum Push Notification Service. Some background about me, I love dabbling in all things tech; and have been fortunate enough to have the support from the awesome Ethereum and blockchain community to have been given the chance to create/change the communication layer for Ethereum and Web3, which we like to call as **The Missing Piece of Web3.0**.

Richa: Sure. Hey Awesome peeps, I’m Richa, co-founder of Ethereum Push Notification Service (EPNS). I wear multiple hats at EPNS though am focused on mostly Marketing, Growth and Product. Stoked to be #BUIDLing World’s First Decentralized Notification Protocol. Looking forward to some awesome questions today 🤗🙌

Jaf: Hi everyone! Super excited to join this AMA today! ✌🏾

I am Jaf, Product and Development Lead at Ethereum Push Notification Service.

I love living in the intersection of Technology, Product, and Users; and having the opportunity to participate in building the World’s first protocol for Web3Notifs is a true challenge and a true pleasure. So many things are coming, it’s going to be quite a ride!

Jai: Thank you so much for the introduction. ✈️ I am already impressed haha!

Richa: haha 😅👍

Jai: Let’s start with the SEGMENT 1⃣

**In SEGMENT 1⃣: I will ask to the team some introductory questions about EPNS. Are you set @harshr @RJlwl @JafCR ?**

Richa: GIF “I’m ready.”

Jaf: Lets do it! 😎

**Jai: Question1⃣: Hi @harshr, can you explain to us what is EPNS and how did you come up with the idea? What is your overall vision with EPNS?**

Harsh: Sure.

Ethereum Push Notifications Service aka EPNS is communication middleware for blockchain that enables any smart contracts, dApps or Web3 service to send notifications to wallet addresses.

**The idea in TLDR;** The idea for EPNS occurred when we sat down to observe what, if any, pain points still existed among blockchain apps (dApps / smart contracts / services) that we could solve. We were quick to realize that something felt a bit odd, but took some time to realize that Web3 tech behaved a lot like the early days of the internet.

That drastically changed after 2010 when Apple and then Google came with push notifs and after that for Web2.0, Notifications have engraved into our lives, so much so that we hardly realize most of our online actions are caused by them; think about it, whatsapp, facetime, emails, payments, games all inform you now. You don’t go back to them to see if something has happened.

Contrast this experience with any dApps, smart contracts or services you interact with on Web3. There’s no way to inform users (wallet addresses) any time an important event occurs. Instead, the user is assumed to go back to the service time and time again to check their activity.

For instance, Liquidation on AAVE, Compound or any DeFi, DAO Governance proposal (Yam!), or ENS / dEx orders. Each of these are a reality right now but no solution exists to address them and the problem will only worsen as more services come to Web3. This was the moment that we realized that we are in the stone age era of communication in blockchain and we need to do something about it!

**Actual TLDR:** Our vision for EPNS is to build the communication pillar of Ethereum and Web 3.0!

Done!

Jai: That sounds really great Harsh! 👏 Let’s move onto the next Question.

**Q2️⃣: How exactly does EPNS work and why is there a need for EPNS in the Blockchain space?**

Jaf: Thank you. I’ll take this one!

Jai: Sure, I am pretty sure our community members would love to know about it.

Jaf: To paint a high level picture — EPNS Core functionality can be divided into three big areas:

**EPNS Protocol (Send Notifications)**

Protocols looking to send Web3 notifications will have to create message payloads that are compliant with the EPNS protocol standards. By following the rules, protocols will be able to successfully call our smart contracts, which will allow the notification to be picked up and delivered.

**PUSH Nodes (Retrieval & Dispatch)**

These nodes will be listening to events in the EPNS smart contract to retrieve notifications, process them, and make sure they are delivered to the appropriate recipients.

**Governance of EPNS Protocol**

This will enable token holders to participate in the direction of the protocol, allowing them to control upgrades and receive incentives for participating in the protocol.

Having these pieces properly working together empowers us to create a set of different products around them. Such as:

\- dApp, Mobile App, Browser Extension

\- **Tooling for Developers**: Front-end/Back-end SDK, Mobile SDK, Subgraphs

\- **Showrunner channels** with more customizations for better user experiences.

Now, a service wanting to send notifications to their subscribers will create a Channel (similarly to a channel in Youtube). From the channel UI section in our dApp the service will have the opportunity to send highly customizable notifications to a specific recipient or as a broadcast to the entire list of subscribers.

To understand why notifications are needed, just compare how our daily Web2 life is driven by notifications — your amazon delivery, bank account related info, payments, even Facetime calls are driven by notification. Now comparing it to Web3, there is no way by which Web3 services can communicate with their users about critical events:

*   Loan liquidation on Alpha Homora, Compound, and other DeFi protocols.
*   Your trade gets executed on a DEX, or if your Limit order was filled.
*   New governance proposal is issued.
*   New Limited Edition NFT is about to drop.
*   Winning a PoolTogether lottery.
*   New features and upgrades to a protocol

Done!

Jai: Now this is indeed really interesting @JafCR ✈️

Thank you for the answer. My next Question is from @RJlwl 😊

**Question3️⃣: A lot has happened in the past 30 days — Successful public sale, listings, partnerships, development, interviews, NFT community drops etc. How about we explain some of this stuff?**

Richa: Sure! First off, we can’t thank the EPNS community enough for supporting and sharing their valuable feedback with us in this journey. We are very grateful for all the love we have gotten, so thank you for each and every one of you 💖🙏

The past 30 days have been superb. 🚀

*   After the TGE, our **Polkastarter IDO** was a huge success and post which we listed on **Uniswap**, **Paraswap** and **WazirX** India.
*   We announced our gratitude to early backers (48 NFTs) and community members (52 NFTs/ week) by announcing **ROCKSTAR NFT**s. Very happy to share that we have already given away the first two ROCKSTAR NFTs to our awesome community members.
*   We successfully launched the **EPNS Liquidity** **Rewards Program**, offering a total of 5,510,000 $PUSH to be distributed along the program and ending on 15th March 2023.
*   We released the **EPNS Roadmap 2021,** that we are working on to achieve. Also, on that note we’re **HIRING** for multiple roles at EPNS so if you are a curious developer (Reactjs, Nodejs, Solidity or Tech Lead) and like what we are doing, drop us a note at **support@epns.io** or send a DM to one of the admins here.
*   Development on-going for Uniswap, Alpha Homora and a few secret channels 😉. Also, integrated .crypto and ENS support to EPNS mobile app
*   Collaboration and Partnership with **Gitcoin** | **Polygon** | **Mask** **Network** | **PoolTogether** | **Alpha** **Homora** | **Biconomy** | **Frontier** | **bZx** | **Ceramic** **Network**
*   Welcomed **Gitcoin Kernel** on our Advisory board
*   Interviewed by BeInCrypto, CryptoKanoon, TheWolfDen Newsletter — Review of EPNS,TheDefiant — First look, Unstoppable domain podcast
*   **Rockstars of Ethereum Y**outube series — Kevin Owocki, DeFi Dad episode
*   Community-based AMA, Telegram and Youtube contest

Done!

Jai: Absolutely, the support of community members is just WOW!

Richa: Rockstar GIF.

Jai: YAY!! Community full of ROCKSTARS :D

Harsh: GIF Jack Nicholson nodding.

Jai: Thank you for the answer @RJlwl let’s move onto the next Question right away!

**Question4️⃣: What kind of token is $PUSH and what are the token utilities of it especially in EPNS dApp?**

Who is going to take this up? :D

Jaf: I’ll take this one too.

Jai: @JafCR is on fire.🔥

Jaf: $PUSH is a governance token that also carries usage mining incentives and the ability to split the fee pool in the future whenever the community chooses to enable that. It’s designed to incentivize all actors in the ecosystem to participate and check each other! Keeping this short but a much better version of what all things it does and how it ties to the ecosystem can be found here: [https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a](https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a)

Done!

Jai: An informative article to go through for sure. 👀 Thank you for the answer.

I am in love with NFT for sure, so next Question is around it.

Richa: Sure.

**Jai: Question5️⃣: There’s a huge market for NFTs in today’s world. A lot of artists are coming up with their own NFTs. Does EPNS have any plans to integrate NFTs in any possible way?**

Richa: NFTs are booming at the moment, and there is a significant opportunity for push notifications. As auctions take place on decentralized platforms, participants will want to know if they’ve been outbid instead of having to check back in all the time to figure that out. We can set up a push notification for that. If you’re an artist who has minted an NFT that has specific rules (royalty rules, use rules, perhaps generative/evolutionary rules), you can set up a push notification to know when those rules are met.

We’re speaking with NFT-based marketplaces, dApp owners for future integrations of push notifications.

Done!

Jai: Woah! Integrations would be really awesome.

**Question6️⃣: What are the major milestones EPNS have achieved so far and are there any competitors?**

**Harsh:** Awesome question and probably I can take this!

**Competitors:** We are the first one to do this so no direct competitors 😉. We have been lucky to have been at the right place at the right time. The only indirect competitors we can be compared with are Apple and Google if you go to Web 2.0 / closed ecosystem.

**Journey:** We have had an awesome journey! Ideation and loads of research were taken to Ethereum Foundation -> EthGlobal HackMoney 2020 where we build POC -> selected for IDEO PVD -> selected for Gitcoin Kernel fellowship and came out as top 20 projects! -> entered Gitcoin Grant round 7 (top 5 projects / 210+ contributors) which led us to raise our seed ($1.4 Million).

Also, extremely grateful to be backed by 35+ top VCs and Web3 leaders including: Balaji Srinivasan, Binance Labs, True Ventures, LD Capital, Sandeep (Polygon), Mariano Conti, Anthony Sassano (EthHub / TheDailyGwei), DeFiDad, Preethi Kasireddy among several more awesome peeps.

Jai: Totally complete unique concept 👀

Harsh: and… Done!

Jai: Impressive stuff! Thank you @harshr

**Question7️⃣: Can you share the steps with the community on how one can successfully receive PUSH Notifications?**

Jaf: GIF Bart Simpson. “ME! ME! ME!”

Jai: Haha! I knew that 🤪

Jaf: In order to start receiving PUSH notifications, a user must first subscribe to at least one channel:

\- Make sure you have Metamask extension installed on your browser.

\- Connect your Metamask to the Ropsten Test Network.

\- Visit: [https://app.epns.io/.](https://app.epns.io/.)

\- After landing in the Channels section, go over the list of channels available to look for the one of your preference. Each channel contains a brief description and a “Subscribe” action button on the right.

\- Click on “Subscribe” to the channels that you wish to receive notifications from.

(This operation requires a small gas fee. Please find an Ethereum Ropsten faucet conveniently located on the top of the channels section).

Now, How to receive the notifications?

There are 2 options:

1) From the top navigation menu, go to the “Feedbox” option.

In here users will be able to view all notifications sent to them from the different channels they are subscribed to.

2) From the top navigation menu, go to the “Receive Notifs” option.

From here users can install the Mobile App of their preference: Android or iOs.

After installing the App, follow the step-by-step guide to start receiving notifications directly to your phone.

Done!

Jai: Noted and all steps are now on our tips! :P

**Thank you for the answers and this ends our first segment. Now we move to segment 2**️⃣**.**

For Segment 2️⃣, The team has selected 4 of the best Questions from Twitter.

Let’s go! 💥

**First Question is from Elena Kasapidi (@EKasapidi) Congratulations!**

**Can you tell us something about your vision and target that EPNS is focusing most until end of this year?**

Harsh: Great question!

We recently released our roadmap with a ton of details. Make sure to check it out! [https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12](https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12)

Thesis behind it

To start, we tried to find a balance that allows us to grow the protocol while providing the development community with the necessary tooling to integrate EPNS within their protocols and dApps.

Additionally, we put an important focus in extending the functionalities available in the Mobile App and the dApp. This aims to create a one-stop-shop for all users notification needs.

Last but not least, a critical item in our roadmap is establishing an incentivized Peer-to-Peer network of PUSH Nodes — which will allow the community to play one more role in the EPNS ecosystem.s

All these efforts combined aims to find a balance between priortizing features important for users and for services to enable us to grow on both directions!

Done!

A lot of stuff is in pipeline I must say :D

**Jai: Second Question is from ethereal.one (@ethereal\_123) Congratulations**

**What incentivizes services to offer EPNS on their platform? The incentives to the customer are clear: user-centricity, opportunity to earn and get notified, but why should a service integrate with EPNS?**

**Richa:** In short: It’s all UX and customer engagement / retention!

Traditionally, Web2 services are ahead in this curve since they always notify the users when something important for them is happening! If you observe, almost all of your virtual interaction is through notifications whether it’s emails, Venmo payments, Amazon deliveries, social media or even Whatsapp chats / videos. It all starts with services letting a user know that hey we think this might be important to you and then the user acts / ignores.

Coming to Web3, we all know that this communication layer is absent and causes several headaches, for example: loan liquidations happen, important governance proposals are missed, security audits aren’t communicated in time, version rollouts are not conveyed, etc. The list essentially goes on. This causes discomfort and users disconnect which thankfully whoever we have spoken to in the services sectors have recognized which is why it’s super essential for them to also get Web3 notifications going!

Done!

Jai: “It’s all UX and customer engagement/retention” 👏👏

Thank you @RJlwl for answering it

**Next Question is from Lucky Mbu (@lucky\_mbu)- Congratulations!**

**What are benefit to user from governance of EPNS’ system?**

Jaf: Let me jump into this one.

This is a great question that interests the community very much.

The main objective behind the EPNS governance strategy is starting a slow decentralization process that will ultimately give control to the community over important decisions of the protocol.

Such as upgradeability, incentives for active participation in the protocol, activating fees and fee split.

Done!

Jai: Awesome @JafCR ✈️

**Last Question in our Twitter round is from Carlos Mena (@asdasper)- Congratulations!**

**I am interested in the Push Nodes P2P strategy. Can you give more details as to how you envision this working for community members that want to run a node?**

Harsh: Sure… This strategy is aligned with our goal of becoming a defacto communication layer for Ethereum L1, L2s and then with other blockchain as well.

With this PUSH Nodes P2P network, we are introducing yet another role in the EPNS ecosystem, which will allow participants to spin their own nodes and assist in retrieving notifications and dispatching them to the corresponding carriers. Additionally, by providing this important service participants will receive incentives as rewards for being good actors. The incentives haven’t been decided yet and we will provide more information on this as we move forward to this milestone.

And done!

Jai: We are looking forward for more information on this @harshr 💥 thanks a lot for answering it.

Thank you for your answers team! We will now move to the last round which is **Live Q/A session.**

Dear Community, get ready to shoot all your Questions! 🚀

**Segment** 3️⃣: **HARSH/JAF/RICHA will answer the LIVE questions asked. Please note: The team can answer any number of Questions but at the end of the AMA, 4 BEST Questions will be rewarded.**

I will leave the other questions for our community members to ask. Are you guys all set? 💪

Harsh: GIF Let’s do this,

Jai: I will **UNMUTE** the group soon and team will pick and answer as many questions as possible but only participants with the BEST questions will be selected as winners by the end of AMA.

3… 2… 1…

Let’s GO!!!! 💥💥

Jai: Our chat is on MUTE again, we have got the last set of Questions from community members and I must say that the response is HUGE. I now request the team to pick and answer the BEST Questions. This AMA is getting really interesting.

Harsh: Blown away!

**Lee Chen: NFT is very hot trend now, do you pretend to catch up with this trend or still follow and focus your original roadmap? create values, not create TREND !**

Harsh: Original Roadmap, $ROCKSTAR of EPNS is already created, we have 5️⃣0️⃣ 🎸 NFTs to give away to the community, read more here: [https://medium.com/ethereum-push-notification-service/kicking-off-the-epns-nft-community-drops-6a5c49808cf](https://medium.com/ethereum-push-notification-service/kicking-off-the-epns-nft-community-drops-6a5c49808cf)

**Thanh Trung: On the whitepaper it’s been said notifications are treated more like a social feed. For Twitter being suspending the Twitter accounts of crypto and defi project, how can EPNS be alternative for crypto projects?**

Great to know you caught that! yes, building communication middleware means not only building notifications but anything that is used for communication is supported! EPNS can be an alternative to social media in the future with added features but currently our priority is to focus on notifs and push nodes.

**Quynh Anh: What makes EPNS distinctive?**

Richa: Sure! great question. Each project has a unique problem that they are trying to solve, be it DeFi, infrastructure or NFTs. First mover advantage, network effect along with the game theory to ensure win-win for all ecosystem players is important for a successful project. We believe EPNS encompasses all to have a unique advantage.

**Quynh Anh: Staking is the new trend. What staking options are available for EPNS token? Are there any incentives for staking? What are the various ways to earn EPNS token and are there any limits to amount of EPNS I can earn?**

Harsh: Checkout [https://incentives.epns.io](https://incentives.epns.io)

Jai: Such a HUGE opportunity for community members! 🏆

Richa: Sure! Our Staking, and Time Vesting smart contracts, have been audited. Please refer to the audit report [https://epns.io/EPNS-release-Audit.pdf](https://epns.io/EPNS-release-Audit.pdf)

**Xperia: Is EPSN system easy to use also for non-crypto savvy people? How user friendly is your interface?**

Harsh: We are alpha but constantly working on improving the interface. We do think we will be able to attract non-crypto savvy people as we complete more features.

**Viet Alexander Carlos Allentown: EPNS claims a collaboration with UNISWAP. We know that Uniswap will also launch its V3 version with many more functionalities, is EPNS ready to adapt to them?**

Richa: We love the Uniswap team and are working with them to build the core features of EPNS protocol. Currently, the Uniswap Channel on EPNS protocol is under development for governance related notifications.

You can learn more our collab in this blog post [https://medium.com/ethereum-push-notification-service/accelerating-defi-with-epns-f2cbfaa33c91](https://medium.com/ethereum-push-notification-service/accelerating-defi-with-epns-f2cbfaa33c91)

**Wolf Khikada: If many people who fully understand the EPNS project want to be part of the EPNS network and community, how can they be involved as a community? Do you have any ongoing rewards or incentives programs for now?**

Harsh: Currently we are running Liquidity Program: [https://medium.com/ethereum-push-notification-service/epns-push-liquidity-rewards-program-d16ff2c0fef4](https://medium.com/ethereum-push-notification-service/epns-push-liquidity-rewards-program-d16ff2c0fef4) and Rockstars Community Program: [https://medium.com/ethereum-push-notification-service/kicking-off-the-epns-nft-community-drops-6a5c49808cf,](https://medium.com/ethereum-push-notification-service/kicking-off-the-epns-nft-community-drops-6a5c49808cf,) more will be coming soon! stay tuned!

**LXM: Will there be an API available for users of the network to implement easily into various web services and sites? When do you think this will become available if so?**

Harsh: Yes, our PUSH nodes will enable that along with our planned SDKs, more info about our roadmap here: [https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12](https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12)

**Tamphat: So far, Almost 80% investors have just focused on price of token in short term instead of understanding the real value of the project. Can you tell us on motivations and benefits for investors to hold EPNS (EPNS) in long term? Will run any stake program with your token?**

Jaf: We are blessed and we are extremely proud of our backers, advisors and investors.

They have been instrumental to us in providing guidance and advisory because they care about this space, and they see the importance of filling this communication gap. They understand what it will bring to the advancement of usability, and that why they are invested in the project, because of the value it brings to everyone.

**Mehdi AG: Are you planning to keep it only on eth network ?**

Richa: Sure! So as our name suggests we are building on Ethereum blockchain and will go live in future first here. We are blockchain agnostic so in future multi blockchain is possible

**KK — LIANG: EPNS is currently going well and is receiving positive attention. What will you do to get more exposure and adoption? What is the EPNS message for the Community today?**

Jaf: We are keeping in parallel different initiatives that will help with adoption

\- Developing tooling for the software development community

\- working on Collaboration Programs with key players in the space

*   Designing ways for the community to actively participate in the protocol.

**SonGo Ku: Once the product is developed, one of the main challenges seems to be adoption. What are some of the plans to stimulate adoption and build out the ecosystem around EPNS?**

Jaf: We are forming strategic collaborations with key players. Not only because of how much we will learn and understand to develop the EPNS protocol further, but also because working with these other protocols will open a window for users to experience receiving notifications, and see how much value they provide.

**Jessika: What was the biggest milestone your project has? What is plan in the future ?**

Richa: Sure! Our 2021 roadmap is here [https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12](https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12)

**Santhosh Srinivasan: I’m fascinated by the spam scores/verified badges aspect of EPNS. With how prevalent scams are in the industry currently, I think they could be really useful. You earlier spoke of a browser extension, could this be used to alert users about scammy websites (like the ones that ask you send X coins and get back 2X coins) or other bad actors?**

Jaf: Thanks! We also believe this is an important feature that will add a lot of value to users and services.

About your question: yes! its doable.

We’ve had a great experience working with developers creating their own channels because they have their own ideas that they want to make a reality.

**CMD\_GOD: What role does the community play in the EPNS financeio? What have you done and will do to attract people to join EPNS financeio and build a thriving community?**

Jaf: That’s a great question, we constantly try to grow our community through initiatives and think the best way to strengthen the community is by asking them, do let us know if you have any ideas!

**DeCh: From reading through the chat since launch, a lot of questions have been asked regarding auto-compounding of our stake rewards, and do you have plans to introduce a tracker similar to what @rzumbado has created, which is awesome.**

Richa: Yes! Shoutout to @rzumbado for creating an awesome tracker. Of course, we will implement (copy 😅) some of the features. For auto staking, while we are still brain storming it seems a bit out of scope as it will require a new forumla and therefore audit and a lot of testing which is why it is not in any current sprint but we are not writing it off as well.

**Thanh Trung: How does EPNS take care of user data? Is user data guaranteed to be safe from misuse of third parties? How does EPNS ensure that users’** emails or smartphones are safe from spam or annoying ad offers?

Harsh: We take care of the data by ensuring that we don’t ask for it! EPNS follows web3 ethos very closely which means it doesn’t send or ask for any identity except for your wallet address which we feel is how every interaction on web3 should be.

**SonGo Ku: Vast majority of Crypto projects are built just for the sole purpose of amassing wealth for themselves. So, I want to know the EPNS you aim to add to crypto industry that will bring greater abundance to the industry?**

Harsh: Vesting and backing should help improve the confidence! at the same time, it’s essential to do your own research around the tech, how is it built and ask questions. We do feel we are building something that changes the ecosystem and have time and time again validated the idea by our awesome community but as mentioned, always, always asks questions

**Mortimer — Morty’’s Nodes: What are you doing to attract investors from all over the world? What are you presenting projects to make investors part of your community?**

Harsh: We already have 35+ top VCs and investors backing us up, you can see more info here: [https://epns.io](https://epns.io)

**Dr. Stone: All crypto apps has inbuilt notification what any crypto op for this?**

Harsh: Nice question, this is actually not the case. Some of the crypto apps have some notifications about limited operations you do on them which still work in centralized fashion, for example: facebook might send you notification about a post you like but who do they send it to? The answer is they send it to the communication middleware which if you are using Apple is going to be Apple Push Notification Service (APNs), we are building that communication layer for web3 so that all smart contracts, dApps (and not just a limited few) can finally have access to communication layer. This seems trivial but it essentially opens the gateway foor any platform to show these notifications as well as enable any web3 services to send anything. Another way to think is that we are building the SMTP protocol that will finally allow any user to send email to other users. Hope that clears it a bit 😅

Richa: I think we over shot the AMA timeslot!

Thank you all for asking such awesome questions. We are running out of time and have a lot of great questions, would have loved to answer them all 🙂

Also, shout out to our ROCKSTAR admins @OfficiaL\_Jai96 @justnow09 @Vinayak\_3 @Dinesh\_Sha @extreme2323 for always helping and supporting the community, thank you guys!

Jaf: Thank you for your amazing answers. We highly appreciate it @harshr @RJlwl and @JafCR and this ends the last round of our AMA.

Team will pick 4 winners in total from the Questions answered above. We will announce it via our announcement channel within 2 days! All the best everyone 🚀

Subscribe to @epnsprojectnews

Harsh: Thanks everyone for joining… this was fun for us, so much so that we overshot it by an hour 😅! hopefully it was the same for you guys, have a great weekend and stay safe everyone!

Jaf: Great questions!

Thank you so much for the time!!

GIF: OK BYE!

Jai: Thank you team for sharing insights on the project and for answering the questions by the community members. Community members have nailed it indeed with active participation and by sharing really great Questions.

Richa: Please stay up to date by joining our Official EPNS Channels 🚀

**Telegram** [https://t.me/epnsproject](https://t.me/epnsproject)

**Telegram** **ANN**: [https://t.me/epnsprojectnews](https://t.me/epnsprojectnews)

**Twitter** [https://twitter.com/epnsproject](https://twitter.com/epnsproject)

**Medium**: [https://medium.com/ethereum-push-notification-service](https://medium.com/ethereum-push-notification-service)

Jai: For all the updates and future plans, Join EPNS Official channels. ✅

That ends the EPNS Community AMA.

Thank you everyone once again for participating in this exciting community AMA. We will **UNMUTE** the chat soon.

Richa: GIF: Thank you. EPNS Fam
