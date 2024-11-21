/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { TbArrowUpRight } from 'react-icons/tb';
import styled from 'styled-components';
import { Button } from '@site/src/css/SharedStyling';
import { device } from '@site/src/config/globals';

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

      <ChainFeatureWrapper>
        <InnerContainer>
          <HeaderContainer>
            <Header>
              Craft seamless, consumer <br /> focused experiences across <br />
              any chain
            </Header>
            <Link href='#'>
              <Button
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
            <FeatureSubContainer>
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
                  <StorageAndScalableContainerMobile>
                    <TxFeeContainerMobile>
                      <FeatureTextSubHeading style={{ color: 'white' }}>
                        Cheap
                        <br />
                        Storage &<br />
                        Tx Fee
                      </FeatureTextSubHeading>
                    </TxFeeContainerMobile>
                    <ScalableContainerMobile>
                      <FeatureTextSubHeading>
                        Infinitely
                        <br />
                        Scalable
                      </FeatureTextSubHeading>
                    </ScalableContainerMobile>
                  </StorageAndScalableContainerMobile>
                  <AnyChainContainer>
                    <FeatureTextSubHeading style={{ color: 'white' }}>
                      Any Chain
                      <br />
                      Transactions
                    </FeatureTextSubHeading>
                  </AnyChainContainer>
                </FeatureContainerSecondSegregator>
              </FeatureContainerSegregator>
            </FeatureSubContainer>
            <FeatureSubContainer>
              <KnowledgeBaseContainer>
                <KnowledgeBaseIcon
                  size={56}
                  style={{ alignSelf: 'flex-end' }}
                />
                <KnowledgeBaseIconMobile
                  size={24}
                  style={{ alignSelf: 'flex-end' }}
                />
                <KnowledgeBaseTextContainer>
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
                </KnowledgeBaseTextContainer>
              </KnowledgeBaseContainer>

              <ScalableContainer>
                <FeatureTextSubHeading>
                  Infinitely
                  <br />
                  Scalable
                </FeatureTextSubHeading>
              </ScalableContainer>
            </FeatureSubContainer>
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
      </ChainFeatureWrapper>
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

const ChainFeatureWrapper = styled.div`
  background-color: #000000;
  width: 100%;
  margin: -3px auto;
`;

const InnerContainer = styled.div`
  width: 1200px;
  margin: 120px auto;

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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const Header = styled.span`
  color: #fff;
  font-family: N27;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.96px;

  @media ${device.mobileL} {
    text-align: center;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 100px;
  flex-direction: column;

  @media ${device.mobileL} {
    margin-top: 40px;
  }
`;

const FeatureSubContainer = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const FeatureTextHeading = styled.span`
  color: #fff;
  font-family: N27;
  font-size: 52px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 52px */
  letter-spacing: -1.04px;

  @media ${device.mobileL} {
    font-size: 28px;
  }
`;

const FeatureTextSubHeading = styled.span`
  color: #000;
  font-family: N27;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 36px */
  letter-spacing: -0.72px;

  @media ${device.mobileL} {
    font-size: 24px;
  }
`;

const FeatureTextDescription = styled.span`
  color: #000;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 30px */
  letter-spacing: -0.48px;

  @media ${device.mobileL} {
    font-size: 14px;
  }
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

  @media ${device.mobileL} {
    width: 100%;
    height: 292px;
    padding: 24px;
  }
`;

const FeatureContainerSegregator = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  gap: 16px;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const FeatureContainerSecondSegregator = styled.div`
  display: flex;
  width: -webkit-fill-available;
  gap: 16px;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const TxFeeContainer = styled.div`
  display: flex;
  width: 49%;
  height: 278.124px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #4b75ff;

  @media ${device.mobileL} {
    height: 246px;
    display: none;
  }
`;
const TxFeeContainerMobile = styled(TxFeeContainer)`
  display: none;

  @media ${device.mobileL} {
    display: flex;
  }
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

  @media ${device.mobileL} {
    width: 100%;
    height: 219px;
    padding: 24px;
  }
`;
const AnyChainContainer = styled.div`
  display: flex;
  width: 49%;
  height: 278.124px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #fc564a;

  @media ${device.mobileL} {
    width: 100%;
    height: 216px;
    padding: 24px;
  }
`;

const ScalableContainer = styled.div`
  display: flex;
  width: 24%;
  height: 413.56px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #ffe659;

  @media ${device.mobileL} {
    display: none;
  }
`;

const ScalableContainerMobile = styled(ScalableContainer)`
  display: none;
  @media ${device.mobileL} {
    display: flex;
    width: 47%;
    height: 246px;
  }
`;

const KnowledgeBaseContainer = styled.div`
  display: flex;
  width: 75.2%;
  height: 413.56px;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #e492ff;

  @media ${device.mobileL} {
    width: 100%;
    height: 244px;
    padding: 24px;
  }
`;

const KnowledgeBaseTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: -webkit-fill-available;

  @media ${device.mobileL} {
    align-items: flex-start;
  }
`;

const KnowledgeBaseIcon = styled(TbArrowUpRight)`
  display: flex;
  @media ${device.mobileL} {
    display: none;
  }
`;

const KnowledgeBaseIconMobile = styled(TbArrowUpRight)`
  display: none;
  @media ${device.mobileL} {
    display: flex;
  }
`;

const StorageAndScalableContainerMobile = styled.div`
  display: none;
  @media ${device.mobileL} {
    display: flex;
    gap: 16px;
  }
`;

const HeaderTwoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 479px;

  @media ${device.mobileL} {
    margin-top: 120px;
  }
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
