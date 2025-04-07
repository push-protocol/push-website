/* eslint-disable no-irregular-whitespace */
// Knowledge Base Content Configuration:
// - Add a new object with the following fields:
//   - `slug`: URL identifier for the knowledge base item.
//   - `image`, `title`, `subtitle`: Metadata for the item.
//   - `content`: Use HTML or Markdown to create the article (similar to the blog section).
//   - `url`: For external links, provide the full URL instead of using `content`.
//NOTE: , cause we use a plugin to get this to work, you have to restart your local server to see the code changes after editing a blog article(TODO: add hot-reload functionality)
import { push101Content } from '../content/push101';
import { deepDivesContent } from '../content/deepdives';
import { faqContent } from '../content/faq';

export const knowledgeBaseArticleContent = [
  push101Content,
  deepDivesContent,
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
  faqContent,
];
