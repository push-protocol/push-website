// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Head from '@docusaurus/Head';
// import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// Internal Component
import ChainKnowledgeBase from '../../../components/Chain/ChainKnowledgeBase/ChainKnowledgeBase';

// Import Assets

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';

function PushChainKnowledgeBase() {
  return (
    <Layout
      title={PageMeta.KNOWLEDGE.pageTitle}
      description={PageMeta.KNOWLEDGE.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        {/* <meta property='og:url' content='https://push.org/brb' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Push | BRB (Billions Reasons to Build)'
        />
        <meta
          name='og:description'
          content='Join us in an epic tech showdown across 18 Indian cities, where brilliant minds collaborate to tackle a major challenge. Compete for a chance to claim over $50,000 USD in prizes!'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/brbpreview.png').default,
            { absolute: true }
          )}
        /> */}

        {/* <!-- Update Twitter Meta Tags --> */}
        {/* <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pushprotocol' />
        <meta
          name='twitter:title'
          content='Push | BRB (Billions Reasons to Build)'
        />
        <meta
          name='twitter:description'
          content='Join us in an epic tech showdown across 18 Indian cities, where brilliant minds collaborate to tackle a major challenge. Compete for a chance to claim over $50,000 USD in prizes!'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/brbpreview.png').default,
            { absolute: true }
          )}
        /> */}

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Protocol',
            description: 'The Communication Protocol of Web3',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://twitter.com/pushprotocol',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <ChainKnowledgeBase />
    </Layout>
  );
}

export default PushChainKnowledgeBase;
