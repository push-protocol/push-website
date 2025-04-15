// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Layout from '@theme/Layout';

// Internal Component
import ChainKnowledgeBaseArticle from '../../components/Chain/ChainKnowledgeBaseArticle/ChainKnowledgeBaseArticle';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';
import { faqContent } from '@site/src/components/Chain/content/faq';

function Page() {
  return (
    <Layout
      title={PageMeta.ARTICLE.pageTitle}
      description={PageMeta.ARTICLE.pageDescription}
      showNavbar={'chain'}
    >
      <ChainKnowledgeBaseArticle item={faqContent} />
    </Layout>
  );
}

export default Page;
