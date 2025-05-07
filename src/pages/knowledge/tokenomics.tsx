// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Internal Component
import ChainKnowledgeBaseArticle from '../../components/Chain/ChainKnowledgeBaseArticle/ChainKnowledgeBaseArticle';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';
import { tokenomicsContent } from '@site/src/components/Chain/content/tokenomics';

function Page() {
  return (
    <Layout
      title={PageMeta.TOKENOMICS.pageTitle}
      description={PageMeta.TOKENOMICS.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content='https://push.org/chain/knowledge/push-chain-tokenomics'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Push Chain | Knowledge Base | Explore Tokenomics'
        />
        <meta
          name='og:description'
          content='Learn how Push Chains tokenomics incentivizes all actors and ensures sustainable network that is built to last'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainknowledgepreview.png')
              .default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta
          name='twitter:title'
          content='Push Chain | Knowledge Base | Explore Tokenomics'
        />
        <meta
          name='twitter:description'
          content='Learn how Push Chains tokenomics incentivizes all actors and ensures sustainable network that is built to last'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainknowledgepreview.png')
              .default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Chain',
            description: 'Any Chain. Any User. Any App',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <ChainKnowledgeBaseArticle item={tokenomicsContent} />
    </Layout>
  );
}

export default Page;
