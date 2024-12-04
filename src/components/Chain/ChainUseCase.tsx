// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import styled from 'styled-components';
import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';

import { A, H3 } from '../../css/SharedStyling';

const ChainUseCase: FC = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  return (
    <ChainUseCaseWrapper>
      <H3
        fontSize={isMobile ? '36px' : '52px'}
        fontWeight='500'
        fontFamily='N27'
        lineHeight='120%'
        letterSpacing='-1.05px'
        textAlign={isTablet && 'center'}
      >
        A use case for every consumer
      </H3>

      <GridText>
        Discover use cases thriving on Push Chain. Build true cross chain
        experiences. The possibilities are endless.
        <TextLink
          href='https://discord.gg/pushprotocol'
          target='_blank'
          title='Discord Push Network'
          fontSize={isMobile ? '16px' : '20px'}
          margin={isMobile ? '24px auto 0 auto' : '29px 0 0 0'}
          background='transparent'
          hoverBackground='transparent'
          padding='0'
          color='#D548EC'
          fontFamily='N27'
        >
          <p>Explore Ecosystem Apps</p>
          <TbArrowUpRight className='anchorSVGlink' />
        </TextLink>
      </GridText>
    </ChainUseCaseWrapper>
  );
};

export default ChainUseCase;

const ChainUseCaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0px;
  gap: 222px;

  @media ${device.tablet} {
    gap: 0px;
    flex-direction: column;
    margin-top: 0px;
  }
`;

const GridText = styled.div`
  width: 500px;
  color: #000;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
    margin-top: 48px;
    text-align: center;
  }
`;

const TextLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;

  @media ${device.tablet} {
    justify-content: center;
  }

  p {
    margin: 0px !important;
  }
  .anchorSVGlink {
    color: #d548ec;
    top: 0px;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #d548ec;
    }
  }
`;
