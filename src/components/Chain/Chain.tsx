// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import styled from 'styled-components';

import { device } from '../../../src/config/globals';

import { ItemV } from '../../../src/css/SharedStyling';
import ChainHeader from './ChainHeader';

const Chain = () => {
  return (
    <ChainWrapper>
      <ChainHeader />

      <div>Koko</div>
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
  min-height: 100vh;
  background: #e8eff8;
  font-family: Glancyr, sans-serif;

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
