// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { ChainFeaturesSection } from './ChainFeaturesSection';

import styled from 'styled-components';

import { device } from '../../../src/config/globals';

import { ItemV } from '../../../src/css/SharedStyling';
import ChainHeader from './ChainHeader';
import ChainHeroSection from './ChainHeroSection';
import ChainMarqueeSection from './ChainMarqueeSection';
import ChainFooter from './ChainFooter';
import ChainBottomComponent from './ChainBottomComponent';
import ChainUseCase from './ChainUseCase';
import ChainRoadmapSection from './ChainRoadmapSection';

const Chain = () => {
  return (
    <ChainWrapper>
      {/* Header */}
      <ChainHeader />

      <ChainInnerWrapper>
        <ChainHeroSection />
      </ChainInnerWrapper>

      <ChainMarqueeSection />

      <ChainFeaturesSection />

      <ChainInnerWrapper>
        <ChainUseCase />
      </ChainInnerWrapper>

      <ChainMarqueeSection />

      <ChainInnerWrapper>
        <ChainRoadmapSection />

        <ChainBottomComponent showFaq={true} />
      </ChainInnerWrapper>

      {/* Footer */}
      <ChainFooter />
    </ChainWrapper>
  );
};

export default Chain;

const ChainWrapper = styled(ItemV)`
  // overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e8eff8;
  font-family: N27, sans-serif;
`;

const ChainInnerWrapper = styled(ItemV)`
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
    // margin: 103px auto 0 auto;
    padding: 0 16px;
  }
`;
