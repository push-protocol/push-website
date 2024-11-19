// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import styled from 'styled-components';

import { ItemV } from '../../../src/css/SharedStyling';
import ChainHeader from './ChainHeader';
import ChainHeroSection from './ChainHeroSection';
import ChainMarqueeSection from './ChainMarqueeSection';

const Chain = () => {
  return (
    <ChainWrapper>
      {/* Header */}
      <ChainHeader />

      <ChainHeroSection />

      <ChainMarqueeSection />

      {/* Footer */}
      <div>Footer</div>
    </ChainWrapper>
  );
};

export default Chain;

const ChainWrapper = styled(ItemV)`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   min-height: 1000vh;
  background: #e8eff8;
  font-family: N27, sans-serif;
`;
