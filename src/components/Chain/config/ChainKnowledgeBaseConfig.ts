/* eslint-disable no-irregular-whitespace */
// Knowledge Base Content Configuration:
// - Add a new object with the following fields:
//   - `slug`: URL identifier for the knowledge base item.
//   - `image`, `title`, `subtitle`: Metadata for the item.
//   - `content`: Use HTML or Markdown to create the article (similar to the blog section).
//   - `url`: For external links, provide the full URL instead of using `content`.
//NOTE: , cause we use a plugin to get this to work, you have to restart your local server to see the code changes after editing a blog article(TODO: add hot-reload functionality)

export const knowledgeBaseArticleContent = [
  {
    slug: 'push101',
    url: 'push101',
    ctatitle: 'Explore More',
    target: '_self',
    image: 'knowledge_101',
    title: 'Push 101',
    subtitle:
      'Learn about basics of Push Chain. The innovations it introduces, what makes it tick and why is it required!',
    content: [
      {
        type: 'text',
        value: `# Why Push Chain?

        Push Chain addresses specific gaps in the existing blockchains, such as interoperability, state access across chains, programmable solvers and wallet abstraction resulting in a **full stack interop**. While existing blockchains are robust, they operate in their own eco-system and an aggregator to unite these chains are needed.<p />

        While existing blockchains are robust, they operate in their own eco-system and an aggregator to unite these chains are needed.<p />

        Push Chain’s focus is on being a **shared state chain** for universal applications acting as a unifying layer where all chains can come together and use PC as universal hub or do settlement between them.<p />
PC offers a new paradigm of web3 that works from **Any Chain.** For **Any Wallet/User.** And is suitable for **Any App.**`,
      },
      {
        type: 'text',
        value: `# What is Push Chain?

        Push Chain is a Proof-of-Stake (PoS) L1 blockchain that is designed to eliminate fragmentation across all chains.<p />

        It is a **shared state L1** blockchain for **Universal (Interoperable) Apps** across chains. Push Chain enables txs from any chain (Eth, Solana, EVM, or non-EVM) enabling apps from any chain to be accessed by the users of any chain (**polymarket** from any chain, **pump.fun** from any chain, etc).`,
      },
      {
        type: 'text',
        value: `# Innovations of Push Chain

        ![Easter Egg](/assets/website/chain/knowledge/Easter-Egg-5.webp) Push Chain introduces some groundbreaking innovations such as:<p />

        **Fee and Wallet abstraction** - allowing wallets/users of any chain to interact natively while being on the chain of their choice.<p />

        **Universal Wallet** - ensuring user can login via social or email and still have non-custodial wallets created for them for all chains (Ethereum, Bitcoin, Solana, etc).<p />

        **Shared State** - enabling developers to read the state of any wallet or smart contract of any other blockchain via smart contract on Push Chain.<p />

        **Programmable Solvers** - ensures that a developer can create a basic path for cross chain actions (write actions) based on the shared state.<p />

        **Universal Smart Contracts** - giving developers ability to use shared state and generalized solvers for read and write action in chain agnostic fashion. And enables users to use fees and wallet abstraction to access any app or any chain without any hassle.<p />

        Push Chain uses all these innovations to enable reading (shared state) or writing to different chains (programmable solvers), all controlled by the universal smart contract. The fee and wallet abstraction further enables a seamless, user centric approach as the learnings for a user is abstracted away no matter from what chain they chose to interact. <p/>

        This results in **fully interoperable applications** for web3. In this paradigm, instead of being a user of "Uniswap on Ethereum," "Uniswap on Polygon," or "Uniswap on Arbitrum," a person simply becomes a **user of Uniswap.**`,
      },
      {
        type: 'text',
        value: `# Curated Reads 👇`,
      },
      {
        type: 'list',
        items: [
          {
            slug: 'evolution-of-push',
            image: 'evolution-of-push',
            title: 'Evolution of Push',
            subtitle:
              'Push Protocol has come a long way! We’ve delivered over 140M notifications, built a community of 500K aggregate users, powered notifications for 500+ projects, and are known as the de facto leader in notifications and communications for web3.',
            url: '/blog/evolution-of-push',
            target: '_self',
          },
          {
            slug: 'innovations-by-push-chain',
            image: 'innovations-by-push-chain',
            title: 'Innovations by Push Chain',
            subtitle:
              'Unlike traditional L1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app. This article will help you understand - What Innovations Push Chain brings to Web3!',
            url: '/blog/innovations-by-push-chain',
            target: '_self',
          },
          {
            slug: 'another-l1',
            title: 'Is Push Chain Another L1?',
            image: 'another-l1',
            subtitle:
              'The move towards Push Chain was driven by the realisation that we had to do our bit to move the needle on interoperability, not in order to create our own fragmented ecosystem.',
            url: '/blog/another-l1',
            target: '_self',
          },
        ],
      },
      {
        type: 'list',
        items: [
          {
            slug: 'faq-push-chain',
            image: 'frequently-asked-questions',
            title: 'Push Chain’s Frequently Asked Questions',
            subtitle:
              'The place to find answers to all the popular questions the community has asked about Push Chain. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.',
            url: '/blog/faq-push-chain/',
            target: '_self',
          },
          {
            slug: 'consumer-apps-that-can-be-built-on-push-chain',
            image: 'consumer-apps',
            title: 'Consumer Apps 🫶🏽 Push Chain?',
            subtitle:
              'Web 3 is growing at lightning speed!Hundreds of L1s, Thousands of L2s and soon Tens of thousands of L3s!! While striving to make systems more scalable, decentralized and secure, we risk overlooking a crucial goal...',
            url: '/blog/consumer-apps-that-can-be-built-on-push-chain/',
            target: '_self',
          },
          {
            slug: 'why-push-chain',
            image: 'why-push-chain',
            title: 'Why Push Chain?',
            subtitle:
              'Push Protocol recently announced its governance proposal of launching Push Chain. Push Protocol envisions the creation of Push Chain which enables a shared state L1 chain designed to support truly scalable consumer applications and universal applications.',
            url: '/blog/why-push-chain',
            target: '_self',
          },
        ],
      },
    ],
  },

  {
    slug: 'deepdives',
    url: 'deepdives',
    ctatitle: 'See it Tick',
    target: '_self',
    image: 'knowledge_deepdives',
    title: 'Deep Dives',
    subtitle:
      'Want to know the intricate working of Push? or just a curious fellow? If so, this section is for you ❤️',
    content: [
      {
        type: 'text',
        value: `# Curated Reads 👇

        Deep dive into the inner working of Push Chain and how everything comes together to create a universal, fully interoperable chain that unites all L1s 🤝 L2s 🤝 L3s.`,
      },
      {
        type: 'list',
        items: [
          {
            slug: 'understand-proof-of-stake-and-push-chain',
            image: 'understand-proof-of-stake',
            title: 'Understand Proof of Stake (POS) and Push Chain PoS',
            subtitle:
              'In a globally distributed computing environment, achieving collective agreement on the true state of the system has always been a complex challenge. Fortunately, there are algorithms (specialized instructions) that assist in preserving this ‘single-truth-state’ while...',
            url: '/blog/understand-proof-of-stake-and-push-chain/',
            target: '_self',
          },
          {
            slug: 'randomized-node-selection-push-chain',
            image: 'randomized-parallel',
            title: 'Node Randomization',
            subtitle:
              'One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.',
            url: '/blog/randomized-node-selection-push-chain',
            target: '_self',
          },
          {
            slug: 'parallel-validators-and-dynamic-sharding',
            image: 'benchmarking-push-chain-nodes',
            title: 'Benchmark of Push Chain',
            subtitle:
              'The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain...',
            url: '/blog/parallel-validators-and-dynamic-sharding',
            target: '_self',
          },
          {
            slug: 'interop-spectrum',
            image: 'interop-spectrum',
            title: 'Interop as a Spectrum',
            subtitle:
              'Understand how Push Chain flips the script on the Interop Trilemma but turning it into a Design Choice Spectrum for Universal App developers.',
            url: '/blog/interop-spectrum',
            target: '_self',
          },
        ],
      },
    ],
  },

  {
    slug: 'devdocs',
    image: 'knowledge_devdocs',
    title: 'Developer Docs',
    subtitle: `Let's come straight to the point! I am universal chain... and you are a dev, let's make it official!`,
    url: '/docs',
    target: '_self',
    ctatitle: 'Build Now',
  },

  {
    slug: 'tokenomics',
    image: 'knowledge_tokenomics',
    title: 'Explore Tokenomics',
    subtitle: `Learn how Push Chain's tokenomics incentivizes all actors and ensures sustainable network that's built to last`,
    url: '/blog/push-chain-tokenomics/',
    target: '_self',
    ctatitle: 'Learn Token Design',
  },

  {
    slug: 'faq-push-chain',
    image: 'frequently-asked-questions',
    title: 'Push Chain’s Frequently Asked Questions',
    subtitle:
      'The place to find answers to all the popular questions the community has asked. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.',
    url: '/blog/faq-push-chain/',
    target: '_self',
    ctatitle: 'Read More',
  },
];
