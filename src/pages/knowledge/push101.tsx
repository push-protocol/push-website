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
import { push101Content } from '@site/src/components/Chain/content/push101';

function Page() {
  return (
    <Layout
      title={PageMeta.PUSH101.pageTitle}
      description={PageMeta.PUSH101.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content='https://push.org/chain/knowledge/push101'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Push Chain | Knowledge Base | Push101'
        />
        <meta
          name='og:description'
          content='Learn about basics of Push Chain. The innovations it introduces, what makes it tick and why is it required!'
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
          content='Push Chain | Knowledge Base | Push101'
        />
        <meta
          name='twitter:description'
          content='Learn about basics of Push Chain. The innovations it introduces, what makes it tick and why is it required!'
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

      <ChainKnowledgeBaseArticle item={push101Content} />
    </Layout>
  );
}

export default Page;
