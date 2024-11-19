// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { ChainFeaturesSection } from './ChainFeaturesSection';

import styled from 'styled-components';

import { device } from '../../../src/config/globals';

import { ItemV } from '../../../src/css/SharedStyling';

const Chain = () => {
  return (
    <ChainWrapper>
      {/* Header */}
      <div>Header</div>
      <ChainFeaturesSection />
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
  background: #e8eff8;
  font-family: N27, sans-serif;

  & .pushMissingSvg {
    width: 900px;
    @media ${device.tablet} {
      width: 50%;
    }
    @media ${device.mobileL} {
      width: 248px;
    }
  }
`;
