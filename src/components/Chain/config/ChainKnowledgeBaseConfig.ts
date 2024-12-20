// Knowledge Base Content Configuration:
// - Add a new object with the following fields:
//   - `slug`: URL identifier for the knowledge base item.
//   - `image`, `title`, `subtitle`: Metadata for the item.
//   - `content`: Use HTML or Markdown to create the article (similar to the blog section).
//   - `url`: For external links, provide the full URL instead of using `content`.
//NOTE: , cause we use a plugin to get this to work, you have to restart your local server to see the code changes after editing a blog article(TODO: add hot-reload functionality)

export const knowledgeBaseArticleContent = [
  {
    slug: 'why-push-chain',
    image: 'why-push-chain',
    title: 'Why Push Chain?',
    subtitle:
      'Push Protocol recently announced its governance proposal of launching Push Chain. Push Protocol envisions the creation of Push Chain which enables a shared state L1 chain designed to support truly scalable consumer applications and universal applications.',
    url: '/blog/why-push-chain',
  },
  {
    slug: 'innovations-by-push-chain',
    image: 'innovations-by-push-chain',
    title: 'Innovations by Push Chain',
    subtitle:
      'Unlike traditional L1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app. This article will help you understand - What Innovations Push Chain brings to Web3!',
    url: '/blog/innovations-by-push-chain',
  },
  {
    slug: 'evolution-of-push',
    image: 'evolution-of-push',
    title: 'Evolution of Push',
    subtitle:
      'Push Protocol has come a long way! We’ve delivered over 140M notifications, built a community of 500K aggregate users, powered notifications for 500+ projects, and are known as the de facto leader in notifications and communications for web3.',
    url: '/blog/evolution-of-push',
  },
  {
    slug: 'faq-push-chain',
    image: 'frequently-asked-questions',
    title: 'Push Chain’s Frequently Asked Questions',
    subtitle:
      'The place to find answers to all the popular questions the community has asked about Push Chain. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.',
    url: '/blog/faq-push-chain/',
  },
  {
    slug: 'consumer-apps-that-can-be-built-on-push-chain',
    image: 'consumer-apps',
    title: 'Consumer Apps 🫶🏽 Push Chain?',
    subtitle:
      'Web 3 is growing at lightning speed!Hundreds of L1s, Thousands of L2s and soon Tens of thousands of L3s!! While striving to make systems more scalable, decentralized and secure, we risk overlooking a crucial goal...',
    url: '/blog/consumer-apps-that-can-be-built-on-push-chain/',
  },
  {
    slug: 'parallel-validators-and-dynamic-sharding',
    image: 'benchmarking-push-chain-nodes',
    title: 'Benchmark of Push Chain',
    subtitle:
      'The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain...',
    url: '/blog/parallel-validators-and-dynamic-sharding',
  },
  {
    slug: 'randomized-node-selection-push-chain',
    image: 'randomized-parallel',
    title: 'Node Randomization',
    subtitle:
      'One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.',
    url: '/blog/randomized-node-selection-push-chain',
  },
  // {
  //   slug: 'is-push-chain-another-layer-1',
  //   title: 'Is Push Another L1?',
  //   subtitle:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget aliquet lectus. In at porttitor lacus. Morbi fermentum egestas porta.',
  //   url: '/blog/is-push-chain-another-layer-1',
  // },
  {
    slug: 'understand-proof-of-stake-and-push-chain',
    image: 'understand-proof-of-stake',
    title: 'Understand Proof of Stake (POS) and Push Chain PoS',
    subtitle:
      'In a globally distributed computing environment, achieving collective agreement on the true state of the system has always been a complex challenge. Fortunately, there are algorithms (specialized instructions) that assist in preserving this ‘single-truth-state’ while...',
    url: '/blog/understand-proof-of-stake-and-push-chain/',
  },
];
