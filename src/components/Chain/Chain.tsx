// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { ChainFeaturesSection } from './ChainFeaturesSection';

import styled from 'styled-components';

import { ItemV } from '../../../src/css/SharedStyling';
import ChainHeader from './ChainHeader';
import ChainHeroSection from './ChainHeroSection';
import ChainMarqueeSection from './ChainMarqueeSection';
import ChainFooter from './ChainFooter';
import ChainBottomComponent from './ChainBottomComponent';

import { device } from '../../../src/config/globals';

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
        <ChainBottomComponent />
      </ChainInnerWrapper>
      {/* Footer */}
      <ChainFooter />
    </ChainWrapper>
  );
};

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

const ChainInnerWrapper = styled(ItemV)`
  width: 1200px;
  margin: 0 auto;

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
