// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';

// Internal Component
import Chain from '../components/Chain/Chain';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';

function PushHomepage() {
  return (
    <Layout
      title={PageMeta.CHAIN.pageTitle}
      description={PageMeta.CHAIN.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Push Chain | Any Chain. Any Wallet. Any App'
        />
        <meta
          name='og:description'
          content='Push Chain is a shared state L1 blockchain for Universal Apps. Capable of doing transactions from any chain, unifying L1s & L2s and enabling apps from any chain to be accessed by the users of any chain.'
        />
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
          content='Push Chain | Any Chain. Any User. Any App'
        />
        <meta
          name='twitter:description'
          content='Push Chain is a shared state L1 blockchain for Universal Apps. Capable of doing transactions from any chain, unifying L1s & L2s and enabling apps from any chain to be accessed by the users of any chain.'
        />
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
            name: 'Push Chain',
            description: 'Any Chain. Any Wallet. Any App',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-chain',
            ],
          })}
        </script>
      </Head>

      <div style={{ background: '#e8eff8' }}>
        <Chain />
      </div>
    </Layout>
  );
}

export default PushHomepage;
