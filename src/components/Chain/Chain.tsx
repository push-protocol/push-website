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

const Chain = () => {
  return (
    <ChainWrapper>
      {/* Header */}
      <ChainHeader />

      <ChainHeroSection />

      <ChainMarqueeSection />
      
      <ChainFeaturesSection />

      <ChainBottomComponent />

      {/* Footer */}
      <ChainFooter />
    </ChainWrapper>
  );
};

export default Chain;

const ChainWrapper = styled(ItemV)`
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e8eff8;
  font-family: N27, sans-serif;
`;
