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
import { devDocsContent } from '../content/devdocs';
import { tokenomicsContent } from '../content/tokenomics';


export const knowledgeBaseArticleContent = [
  push101Content,
  deepDivesContent,
  devDocsContent,
  tokenomicsContent,
  faqContent,
];
