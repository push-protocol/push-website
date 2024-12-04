// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import styled from 'styled-components';
import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';

import { A, Button, H2, H3, ItemV } from '../../css/SharedStyling';
import ChainAlertBar from './ChainAlertBar';

const ChainHeroSection: FC = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  const HeroGrid = [
    {
      count: '4MB',
      label: 'Block Size',
    },
    {
      count: '1s',
      label: 'Finality',
    },
    {
      count: '150k',
      label: 'Transactions',
    },
    {
      count: '130+',
      label: 'Supported Chains',
    },
  ];

  return (
    <ChainHeroSectionWrapper>
      <ChainAlertBar
        text='Push Chain Governance Proposal is Live'
        url='https://test.com'
        center={true}
      />
      <HeroText>Build Universal Apps</HeroText>
      <HeroSubText>
        Push Chain is a shared state blockchain allowing all chains to come
        together and enable consumer apps that works from any chain.
      </HeroSubText>
      <HeroButtons>
        <Button
          background='#FFF'
          fontFamily='N27'
          fontWeight='500'
          fontSize='18px'
          color='#000'
          width={isMobile && '100%'}
        >
          Explore Push Chain
        </Button>
        <Button
          background='#D548EC'
          fontFamily='N27'
          fontWeight='500'
          fontSize='18px'
          width={isMobile && '100%'}
        >
          Start Building
        </Button>
      </HeroButtons>

      {/* image here */}
      <div style={{ height: '400px' }}></div>

      <SectionText>
        Consumer apps that work from any chain, has instant finality and has
        true scalability
      </SectionText>

      <CountSection>
        <GridSection>
          {HeroGrid.map((item) => (
            <ItemV alignItems={isTablet ? 'center' : 'flex-start'}>
              <H2
                fontSize={isMobile ? '40px' : '72px'}
                fontWeight='500'
                fontFamily='N27'
                lineHeight={isMobile ? '80px' : '100px'}
              >
                {item.count}
              </H2>
              <H3
                fontSize={isMobile ? '20px' : '24px'}
                fontWeight='500'
                fontFamily='N27'
                lineHeight={isMobile ? '20px' : '24px'}
              >
                {item.label}
              </H3>
            </ItemV>
          ))}
        </GridSection>

        <GridText>
          Create shared app experiences, fading away boundaries from specific
          chains ecosystem and allowing all web3 userbase to access your
          application.
          <br />
          <br />
          Linear scalability and dynamic sharding ensures read and write txs
          keep on increasing as number of nodes are added to the network.
          <TextLink
            href='https://discord.gg/pushprotocol'
            target='_blank'
            title='Discord Push Network'
            fontSize={isMobile ? '16px' : '20px'}
            margin={isMobile ? '24px auto 0 auto' : '29px 0 0 0'}
            background='transparent'
            padding='0'
            color='#D548EC'
            fontFamily='N27'
            hoverBackground='transparent'
          >
            <p>Discover Push Network</p>
            <TbArrowUpRight className='anchorSVGlink' />
          </TextLink>
        </GridText>
      </CountSection>

      <ItemV margin='300px auto 0 auto' maxWidth='870px'>
        <H3
          fontSize={isMobile ? '36px' : '48px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight='120%'
          letterSpacing='-0.72px'
          textAlign='center'
        >
          A foundation built from pioneering communications for web3
        </H3>
      </ItemV>

      {/* image here */}
      <div style={{ height: '400px' }}></div>

      <ItemV margin='0px auto 0 auto' maxWidth='806px'>
        <H3
          fontSize={isMobile ? '20px' : '28px'}
          fontWeight='400'
          fontFamily='N27'
          lineHeight='140%'
          textAlign='center'
        >
          After four years of building the leading notifications protocol and a
          thriving ecosystem, Push is evolving to launch and scale Push Chain.
        </H3>
      </ItemV>
    </ChainHeroSectionWrapper>
  );
};

export default ChainHeroSection;

const ChainHeroSectionWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 103px auto 0 auto;
  }
`;

const HeroText = styled.div`
  color: #000;
  font-family: N27;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -1.44px;
  text-align: center;
  margin-top: 12px;

  @media ${device.tablet} {
    font-size: 48px;
    font-weight: 500;
    line-height: 111%;
    letter-spacing: -0.96px;
  }
`;

const HeroSubText = styled.div`
  text-align: center;
  color: #000;
  text-align: center;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  width: 662px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    margin: 24px auto 0 auto;
  }
`;

const HeroButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 48px auto 0 auto;

  @media ${device.mobileL} {
    flex-direction: column;
    width: 100%;
    margin: 64px auto 0 auto;
  }
`;

const SectionText = styled.div`
  color: #000;
  font-family: N27;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.96px;

  @media ${device.mobileL} {
    text-align: center;
    font-size: 36px;
    letter-spacing: -0.72px;
  }
`;

const CountSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 90px;

  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 120px;
  }
`;
const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 500px;
  row-gap: 40px;

  @media ${device.tablet} {
    width: 100%;
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
