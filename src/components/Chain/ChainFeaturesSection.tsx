import Link from '@docusaurus/Link';
import { Button } from '@site/src/css/SharedStyling';
import React, { FC } from 'react';
import styled from 'styled-components';

export type ChainFeaturesSectionProps = {};

const ChainFeaturesSection: FC<ChainFeaturesSectionProps> = () => {
  return (
    <ChainFeaturesContainer>
      <DividerImg
        src={
          require(`@site/static/assets/website/chain/chainFeaturesDivider.png`)
            .default
        }
        alt={`Chain Features Divider`}
        loading='lazy'
      />

      <InnerContainer>
        <HeaderContainer>
          <Header>
            Craft seamless, consumer <br /> focused experiences across <br />
            any chain
          </Header>
          <Link href='#'>
            <Button
              // @ts-expect-error
              background='#D548EC'
              borderRadius='16px'
              fontFamily='N27'
              fontSize='18px'
              fontWeight='500'
            >
              Read Whitepaper
            </Button>
          </Link>
        </HeaderContainer>
        <HeaderTwoContainer>
          <HeaderTwo>One chain, infinite possibilities</HeaderTwo>
          <div style={{ height: 200 }}></div>
          <HeaderTwoSubheader>
            Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk
            <br />
            handango empressr orkut appjet, convore xobni eduvant babblely.
            <br /> <br />
            Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk
            handango.
          </HeaderTwoSubheader>
        </HeaderTwoContainer>
      </InnerContainer>
      <DividerImg
        src={
          require(`@site/static/assets/website/chain/chainFeaturesDivider.png`)
            .default
        }
        alt={`Chain Features Divider`}
        width='-webkit-fill-available'
        height='auto'
        loading='lazy'
        className='inverted-divider'
      />
    </ChainFeaturesContainer>
  );
};

export { ChainFeaturesSection };

const ChainFeaturesContainer = styled.div`
  align-items: flex-start;
  display: flex;
  padding: 172px 0px 224px 0px;
  flex-direction: column;

  .inverted-divider {
    transform: rotate(180deg);
  }
`;

const DividerImg = styled.img`
  width: -webkit-fill-available;
`;
const InnerContainer = styled.div`
  background-color: #000000;
  padding: 167px 120px 409px 120px;
  width: -webkit-fill-available;
  margin: -2px 0px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.span`
  color: #fff;
  font-family: N27;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.96px;
`;

const HeaderTwoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 479px;
`;

const HeaderTwo = styled.span`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.96px;
`;

const HeaderTwoSubheader = styled.span`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
`;
