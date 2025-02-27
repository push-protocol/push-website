// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// Internal Component

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';
import Rewards from '../components/Rewards/Rewards';
import { Box } from '../blocks/index';

function PushRewards() {
  return (
    <Layout
      title={PageMeta.REWARDS.pageTitle}
      description={PageMeta.REWARDS.pageDescription}
      showNavbar='rewards'
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org/rewards' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Reward Points' />
        <meta name='og:description' content='Win Rewards by completing tasks' />
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
        <meta name='twitter:title' content='Reward Points' />
        <meta
          name='twitter:description'
          content='Win Rewards by completing tasks'
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

      <Box backgroundColor='surface-secondary'>
        <Rewards />
      </Box>
    </Layout>
  );
}

export default PushRewards;
