import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { TbArrowUpRight } from 'react-icons/tb';
import styled from 'styled-components';
import { Button } from '@site/src/css/SharedStyling';

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
              display='flex'
              gap='12px'
            >
              Read Whitepaper
              <TbArrowUpRight size={24} />
            </Button>
          </Link>
        </HeaderContainer>
        <FeatureContainer>
          <FinalityContainer>
            <FeatureTextHeading>
              Instant
              <br />
              Finality
            </FeatureTextHeading>
          </FinalityContainer>
          <FeatureContainerSegregator>
            <OnboardingContainer>
              <FeatureTextSubHeading>
                Seamless, Instant
                <br />
                Onboarding
              </FeatureTextSubHeading>
            </OnboardingContainer>
            <FeatureContainerSecondSegregator>
              <TxFeeContainer>
                <FeatureTextSubHeading style={{ color: 'white' }}>
                  Cheap
                  <br />
                  Storage &<br />
                  Tx Fee
                </FeatureTextSubHeading>
              </TxFeeContainer>
              <ScalableContainer>
                <FeatureTextSubHeading>
                  Infinitely
                  <br />
                  Scalable
                </FeatureTextSubHeading>
              </ScalableContainer>
            </FeatureContainerSecondSegregator>
          </FeatureContainerSegregator>
          <KnowledgeBaseContainer>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: '-webkit-fill-available',
              }}
            >
              <FeatureTextHeading style={{ color: '#000000' }}>
                Explore the
                <br />
                Knowledge Base
              </FeatureTextHeading>
              <FeatureTextDescription>
                Learn why Push Chain stands out as
                <br />
                the foremost consumer chain in web3
              </FeatureTextDescription>
            </div>
          </KnowledgeBaseContainer>
        </FeatureContainer>

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
  width: -webkit-fill-available;

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

const FeatureContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 100px;
  position: relative;
`;

const FeatureTextHeading = styled.span`
  color: #fff;
  font-family: N27;
  font-size: 52px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 52px */
  letter-spacing: -1.04px;
`;

const FeatureTextSubHeading = styled.span`
  color: #000;
  font-family: N27;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 36px */
  letter-spacing: -0.72px;
`;

const FeatureTextDescription = styled.span`
  color: #000;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 30px */
  letter-spacing: -0.48px;
`;

const FinalityContainer = styled.div`
  display: flex;
  width: 50%;
  height: 630.085px;
  padding: 40px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  border: 2px solid #fff;
`;

const FeatureContainerSegregator = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  gap: 16px;
`;

const FeatureContainerSecondSegregator = styled.div`
  display: flex;
  width: -webkit-fill-available;
  gap: 16px;
`;

const TxFeeContainer = styled.div`
  display: flex;
  width: 50%;
  height: 278.124px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #4b75ff;
`;

const OnboardingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 334.496px;
  padding: 32px;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #64f6b2;
`;

const ScalableContainer = styled.div`
  display: flex;
  width: 50%;
  height: 709px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #ffe659;
`;

const KnowledgeBaseContainer = styled.div`
  display: flex;
  width: 75.5%;
  height: 413.56px;
  padding: 40px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #e492ff;
  position: absolute;
  bottom: 0;
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
