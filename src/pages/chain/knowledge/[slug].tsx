// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Layout from '@theme/Layout';

// Internal Component

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';
import ChainKnowledgeBaseArticle from '../../../components/ChainKnowledgeBaseArticle/ChainKnowledgeBaseArticle';

function Page(metadata) {
  console.log(metadata, 'close');
  return (
    <Layout
      title={PageMeta.ARTICLE.pageTitle}
      description={PageMeta.ARTICLE.pageDescription}
      showNavbar={'chain'}
    >
      <ChainKnowledgeBaseArticle />
    </Layout>
  );
}

export default Page;
