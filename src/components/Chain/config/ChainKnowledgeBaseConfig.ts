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
    slug: 'partnerships',
    url: 'partnerships',
    image: '',
    title: 'Partnerships',
    subtitle:
      'Push Chain powers dApps and decentralized messaging, connecting blockchains seamlessly',
    content: [
      {
        type: 'text',
        value: `### **First**

        ![Cover Image of Push Protocol Monthly Updates - October](/assets/previews/brbpreview.png)

        ### **Protocol Milestones**

        ### **Push Points Program Launch 🚀**`,
      },
      {
        type: 'list',
        items: [
          {
            title: 'Push Points Program Launch 🚀',
            url: 'https://push.org/blog/introducing-the-push-points-program/',
            subtitle:
              'A reputation-based system designed to reward our community members and reinforce ties with our ecosystem partners.',
          },
          {
            slug: 'evolution-of-push',
            title: 'Abstracting Chains for Better UX',
            parentSlug: 'partnerships',
            url: 'evolution-of-push',
            subtitle:
              'Exploring CCR features that enhance Web3 user experience by simplifying chain interactions.',
            content: [
              {
                type: 'text',
                value:
                  'October has been another outstanding month for Push Protocol, showcasing significant advancements across development, integrations, and community engagement.',
              },
            ],
          },
        ],
      },
      {
        type: 'text',
        value: `

        ### **Protocol Milestonessss**

        ### **Test**

        We’re thrilled to push the boundaries of Web3 communication as we approach the new year. Stay tuned for December updates!`,
      },
    ],
  },

  {
    slug: 'push-101',
    url: 'push-101',
    image: '',
    title: 'Push 101',
    subtitle:
      'Push Chain powers dApps and decentralized messaging, connecting blockchains seamlessly',
    content: [
      {
        type: 'text',
        value: `
        ### Push 101-test

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.

        Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.

        Lorem [ipsum](https://test.com) dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis. Nulla convallis egestas rhoncus. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.`,
      },
      {
        type: 'list',
        items: [
          {
            title: 'Push Points Program Launch 🚀',
            url: 'https://push.org/blog/introducing-the-push-points-program/',
            subtitle:
              'A reputation-based system designed to reward our community members and reinforce ties with our ecosystem partners.',
          },
          {
            slug: 'evolution-of-push',
            title: 'Abstracting Chains for Better UX',
            parentSlug: 'push-101',
            url: 'evolution-of-push',
            subtitle:
              'Exploring CCR features that enhance Web3 user experience by simplifying chain interactions.',
            content: [
              {
                type: 'text',
                value:
                  'October has been another outstanding month for Push Protocol, showcasing significant advancements across development, integrations, and community engagement.',
              },
            ],
          },
        ],
      },
      {
        type: 'text',
        value: `
        Push 101 Test
        We’re thrilled to push the boundaries of Web3 communication as we approach the new year. Stay tuned for December updates!`,
      },
    ],
  },

  {
    slug: 'why-push-chain',
    image: 'why-push-chain',
    title: 'Why Push Chain?',
    subtitle:
      'Push Protocol recently announced its governance proposal of launching Push Chain. Push Protocol envisions the creation of Push Chain which enables a shared state L1 chain designed to support truly scalable consumer applications and universal applications.',
    url: '/blog/why-push-chain',
  },
  // {
  //   slug: 'push-101',
  //   image: '',
  //   title: 'Push 101',
  //   subtitle: '',
  //   url: '/knowledge/101',
  //   target: '_self',
  // },
  // {
  //   slug: 'deep-dives',
  //   image: '',
  //   title: 'Push Deep Dives',
  //   subtitle: 'Explore all articles related to Push Deep Dives',
  //   url: '/knowledge/deep-dives',
  //   target: '_self',
  // },
  {
    slug: 'innovations-by-push-chain',
    image: 'innovations-by-push-chain',
    title: 'Innovations by Push Chain',
    subtitle:
      'Unlike traditional L1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app. This article will help you understand - What Innovations Push Chain brings to Web3!',
    url: '/blog/innovations-by-push-chain',
  },

  {
    slug: 'partners',
    image: 'push-chain-partners',
    title: 'Explore Partners',
    subtitle:
      'Explore partnerships committed to building universal apps and unlocking chain abstraction on Push Chain..',
    url: '/knowledge/partners',
    target: '_self',
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
    slug: 'another-l1',
    title: 'Is Push Chain Another L1?',
    image: 'another-l1',
    subtitle:
      'The move towards Push Chain was driven by the realisation that we had to do our bit to move the needle on interoperability, not in order to create our own fragmented ecosystem.',
    url: '/blog/another-l1',
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

  {
    slug: 'understand-proof-of-stake-and-push-chain',
    image: 'understand-proof-of-stake',
    title: 'Understand Proof of Stake (POS) and Push Chain PoS',
    subtitle:
      'In a globally distributed computing environment, achieving collective agreement on the true state of the system has always been a complex challenge. Fortunately, there are algorithms (specialized instructions) that assist in preserving this ‘single-truth-state’ while...',
    url: '/blog/understand-proof-of-stake-and-push-chain/',
  },
];
