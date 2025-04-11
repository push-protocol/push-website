// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styled from 'styled-components';

// Internal Config
import { device } from '../config/globals';
import { PageMeta } from '@site/src/config/pageMeta';
import ChainHeroSection from '../components/Chain/ChainHeroSection';
import ChainMarqueeSection from '../components/Chain/ChainMarqueeSection';
import {
  ChainMarqueeList,
  ChainMarqueeSecondList,
} from '../components/Chain/config/ChainMarqueeList';
import { ChainFeaturesSection } from '../components/Chain/ChainFeaturesSection';
import ChainUseCase from '../components/Chain/ChainUseCase';
import ChainRoadmapSection from '../components/Chain/ChainRoadmapSection';
import ChainBottomComponent from '../components/Chain/ChainBottomComponent';

// Internal Component
import { ItemV } from '../../src/css/SharedStyling';

// Import assets
import StarIcon from '@site/static/assets/website/chain/StarIcon.svg';
import UnionIcon from '@site/static/assets/website/chain/Union.svg';
import BellIcon from '@site/static/assets/website/chain/bellicon.svg';
import DCAIcon from '@site/static/assets/website/chain/dcaicon.svg';
import EmailIcon from '@site/static/assets/website/chain/email.svg';
import NoteIcon from '@site/static/assets/website/chain/note.svg';
import SmileIcon from '@site/static/assets/website/chain/smile.svg';
import SpadeIcon from '@site/static/assets/website/chain/spades.svg';
import TechnologyIcon from '@site/static/assets/website/chain/technology.svg';

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
        <ChainWrapper>
          <MainContent>
            <ChainHeroSection />
          </MainContent>

          {/* marquee section */}
          <ChainMarqueeSection
            chainMarqueeList={ChainMarqueeList}
            backgroundColor='#F19AFF'
            rotateDegree={-5}
            icons={[StarIcon, UnionIcon]}
          />

          <ChainFeaturesSection />

          <MainContent>
            <ChainUseCase />
          </MainContent>

          {/* second marquee section */}
          <ChainMarqueeSection
            chainMarqueeList={ChainMarqueeSecondList}
            backgroundColor='#3EF09D'
            rotateDegree={5}
            icons={[
              SpadeIcon,
              SmileIcon,
              EmailIcon,
              NoteIcon,
              BellIcon,
              DCAIcon,
              TechnologyIcon,
            ]}
          />

          <MainContent>
            <ChainRoadmapSection />

            <ChainBottomComponent showFaq={true} />
          </MainContent>
        </ChainWrapper>
      </div>
    </Layout>
  );
}

export default PushHomepage;

const ChainWrapper = styled(ItemV)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e8eff8;
  font-family: N27, sans-serif;
`;

const MainContent = styled(ItemV)`
  margin: 0 auto;

  @media ${device.desktopL} {
    width: 1400px;
  }

  @media ${device.desktop} {
    width: 1200px;
  }

  @media (max-width: 1248px) {
    width: 100%;
    padding: 0 24px;
  }

  @media ${device.tablet} {
    padding: 0 24px;
  }
  @media ${device.mobileL} {
    padding: 0 16px;
  }
`;
