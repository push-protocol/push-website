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
import { newPageContent } from '@site/src/components/Chain/content/new-page';

function Page() {
  return (
    <Layout
      title={PageMeta.NEWPAGE.pageTitle}
      description={PageMeta.NEWPAGE.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content='https://push.org/chain/knowledge/faq-push-chain'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Push Chain | Knowledge Base | Push Chain FAQ'
        />
        <meta
          name='og:description'
          content='The place to find answers to all the popular questions the community has asked. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.'
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
          content='Push Chain | Knowledge Base | Push Chain FAQ'
        />
        <meta
          name='twitter:description'
          content='The place to find answers to all the popular questions the community has asked. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.'
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

      <ChainKnowledgeBaseArticle item={newPageContent} />
    </Layout>
  );
}

export default Page;
