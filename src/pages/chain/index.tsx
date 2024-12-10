// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// Internal Component
import Chain from '../../components/Chain/Chain';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';

function PushChain() {
  return (
    <Layout
      title={PageMeta.CHAIN.pageTitle}
      description={PageMeta.CHAIN.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org/chain' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Push Chain | Any Chain. Any User. Any App'
        />
        <meta
          name='og:description'
          content='Push Chain is a shared state blockchain for shared app experience. Capable of doing tx from any chain and connecting L1s, L2s, & L3s with <1 second finality with linear scalability.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainpreview.webp').default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pushprotocol' />
        <meta
          name='twitter:title'
          content='Push Chain | Any Chain. Any User. Any App'
        />
        <meta
          name='twitter:description'
          content='Push Chain is a shared state blockchain for shared app experience. Capable of doing tx from any chain and connecting L1s, L2s, & L3s with <1 second finality with linear scalability.'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainpreview.webp').default,
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
              'https://twitter.com/pushprotocol',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <Chain />
    </Layout>
  );
}

export default PushChain;
