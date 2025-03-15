// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';

// Internal Component
import ChainKnowledgeBase101 from '../../components/Chain/ChainKnowledgeBasePartners/ChainKnowledgeBase101';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';

function PushChainKnowledgeBase(metadata) {
  return (
    <Layout
      title={PageMeta.PARTNERS.pageTitle}
      description={PageMeta.PARTNERS.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content='https://push.org/chain/knowledge/101'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push Chain | Knowledge Base - 101' />
        <meta name='og:description' content='Meet our Partners.' />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainpreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta
          name='twitter:title'
          content='Push Chain | Knowledge Base - 101'
        />
        <meta name='twitter:description' content='Meet our Partners' />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainpreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Protocol',
            description: 'The Communication Protocol of Web3',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <ChainKnowledgeBase101 item={metadata.metadata} />
    </Layout>
  );
}

export default PushChainKnowledgeBase;
