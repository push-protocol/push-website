// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import { device } from '../../../src/config/globals';
import { ItemV } from '../../../src/css/SharedStyling';

import ChainHeroSection from './ChainHeroSection';
import ChainMarqueeSection from './ChainMarqueeSection';
import ChainBottomComponent from './ChainBottomComponent';
import ChainUseCase from './ChainUseCase';
import ChainRoadmapSection from './ChainRoadmapSection';
import { ChainFeaturesSection } from './ChainFeaturesSection';

const Chain = () => (
  <ChainWrapper>
    {/* Main Content */}
    <MainContent>
      <ChainHeroSection />
    </MainContent>

    <ChainMarqueeSection />

    <ChainFeaturesSection />

    <MainContent>
      <ChainUseCase />
    </MainContent>

    <ChainMarqueeSection />

    <MainContent>
      <ChainRoadmapSection />
      <ChainBottomComponent showFaq={true} />
    </MainContent>
  </ChainWrapper>
);

export default Chain;

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
