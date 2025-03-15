// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Layout from '@theme/Layout';

// Internal Component

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';
import ChainKnowledgeBaseArticle from '@site/src/components/Chain/ChainKnowledgeBaseArticle/ChainKnowledgeBaseArticle';

function SlugPage(metadata) {
  console.log(metadata, '101 page');
  return (
    <Layout
      title={PageMeta.ARTICLE.pageTitle}
      description={PageMeta.ARTICLE.pageDescription}
      showNavbar={'chain'}
    >
      <ChainKnowledgeBaseArticle item={metadata?.metadata} />
    </Layout>
  );
}

export default SlugPage;
