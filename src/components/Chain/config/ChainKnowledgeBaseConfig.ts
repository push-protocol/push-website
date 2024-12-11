/* eslint-disable no-irregular-whitespace */

// Knowledge Base Header Configuration:
// This edits the Header, description oon /chain/knowledge
// FOr the header image, if you want to use an image, use the image field.
// If you want to use a youtube link or video, attach the embed link url in the video field

export const ChainKnowledgeBaseHeaderConfig = {
  title: 'Introducing Push Chain',
  description: `Push Chain is a shared state blockchain for shared app experience. Push Chain is capable of doing tx from any chain and connecting L1s, L2s, & L3s with <1 second finality with linear scalability`,
  // video: {
  //   src: 'https://www.youtube.com/embed/lhiwW3SfoZE',
  //   title: 'title',
  // },
  image: `knowledge-frame`,
  learnMore: 'Hey! Want to learn more about Push Chain?',
};

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
    slug: 'evolution-of-push-chain',
    image: 'evolution-of-push-chain',
    title: 'Evolution of Push',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget aliquet lectus. In at porttitor lacus. Morbi fermentum egestas porta.',
    url: '/blog/evolution-of-push-chain',
  },
  {
    slug: 'parallel-validators-and-dynamic-sharding',
    image: 'benchmarking-push-chain-nodes',
    title: 'Benchmark of Push Chain',
    subtitle:
      'The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space.',
    url: '/blog/parallel-validators-and-dynamic-sharding',
  },
  {
    slug: 'randomized-node-selection-push-chain',
    image: 'randomized-parallel',
    title: 'Node Randomization',
    subtitle:
      'One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate.',
    url: '/blog/randomized-node-selection-push-chain',
  },
  {
    slug: 'is-push-chain-another-layer-1',
    // image: '',
    title: 'Is Push Another L1?',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget aliquet lectus. In at porttitor lacus. Morbi fermentum egestas porta.',
    url: '/blog/is-push-chain-another-layer-1',
  },
];
