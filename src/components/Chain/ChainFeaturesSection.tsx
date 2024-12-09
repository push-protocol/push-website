/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import styled from 'styled-components';
import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../../src/config/globals';

import { Button, ItemH, Image } from '@site/src/css/SharedStyling';
import ImageHolder from '../../../src/components/ImageHolder';

export type ChainFeaturesSectionProps = {};

const ChainFeaturesSection: FC<ChainFeaturesSectionProps> = () => {
  return (
    <ChainFeaturesContainer>
      <DividerImg
        src={
          require(`@site/static/assets/website/chain/chainFeaturesDivider.png`)
            .default
        }
        srcSet={`${
          require('/static/assets/website/chain/chainFeaturesDivider@2x.png')
            .default
        } 2x, ${require('/static/assets/website/chain/chainFeaturesDivider@3x.png').default} 3x`}
        alt={`Chain Features Divider`}
        width='-webkit-fill-available'
        height='auto'
        loading='lazy'
      />
      <ChainFeaturesWrapper>
        <InnerContainer>
          <HeaderContainer>
            <Header>
              Craft seamless, consumer-focused
              <br />
              experiences for users on any chain
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
          <FeatureContainer id='technology'>
            <FeatureSubContainer>
              <FinalityContainer>
                <ImageHolder
                  src={
                    require(
                      `@site/static/assets/website/chain/instant-finality.webp`
                    ).default
                  }
                  srcSet={`${require(`@site/static/assets/website/chain/instant-finality@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/instant-finality@3x.webp`).default} 3x`}
                  alt={'alt'}
                  title={'title'}
                />

                <FeatureTextHeading>
                  Instant
                  <span className='breakpoint'> Finality</span>
                </FeatureTextHeading>
              </FinalityContainer>

              <FeatureContainerSegregator>
                <OnboardingContainer>
                  <ImageHolder
                    src={
                      require(
                        `@site/static/assets/website/chain/seamless-instant.webp`
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/chain/seamless-instant@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/seamless-instant@3x.webp`).default} 3x`}
                    alt={'alt'}
                    title={'title'}
                  />

                  <FeatureTextSubHeading>
                    Seamless, Instant
                    <br />
                    Onboarding
                  </FeatureTextSubHeading>
                </OnboardingContainer>

                <FeatureContainerSecondSegregator>
                  <TxFeeContainer>
                    <Image
                      src={
                        require(
                          `@site/static/assets/website/chain/cheap-storage.webp`
                        ).default
                      }
                      srcSet={`${require(`@site/static/assets/website/chain/cheap-storage@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/cheap-storage@3x.webp`).default} 3x`}
                      alt={'alt'}
                      title={'title'}
                      width='auto'
                    />
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
                    <ImageHolder
                      src={
                        require(
                          `@site/static/assets/website/chain/any-chain.webp`
                        ).default
                      }
                      srcSet={`${require(`@site/static/assets/website/chain/any-chain@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/any-chain@3x.webp`).default} 3x`}
                      alt={'alt'}
                      title={'title'}
                    />

                    <FeatureTextSubHeading style={{ color: '#000' }}>
                      Any Chain
                      <span className='breakpoint'>Transactions</span>
                    </FeatureTextSubHeading>
                  </AnyChainContainer>
                </FeatureContainerSecondSegregator>
              </FeatureContainerSegregator>
            </FeatureSubContainer>

            <FeatureSubContainer>
              <KnowledgeBaseContainer>
                <ItemH alignItems='flex-start' justifyContent='space-between'>
                  <ImageHolder
                    src={
                      require(
                        `@site/static/assets/website/chain/explore-knowledgebase.webp`
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/chain/explore-knowledgebase@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/explore-knowledgebase@3x.webp`).default} 3x`}
                    alt={'alt'}
                    title={'title'}
                  />
                  <KnowledgeBaseIcon
                    size={56}
                    style={{ alignSelf: 'flex-start' }}
                  />
                  <KnowledgeBaseIconMobile
                    size={24}
                    style={{ alignSelf: 'flex-start' }}
                  />
                </ItemH>
                <KnowledgeBaseTextContainer>
                  <FeatureTextHeading
                    style={{ color: '#000000', whiteSpace: 'break-spaces' }}
                  >
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
                <Image
                  src={
                    require(
                      `@site/static/assets/website/chain/infinitely-scalable.webp`
                    ).default
                  }
                  srcSet={`${require(`@site/static/assets/website/chain/infinitely-scalable@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/infinitely-scalable@3x.webp`).default} 3x`}
                  alt={'alt'}
                  title={'title'}
                  width='auto'
                />
                <FeatureTextSubHeading>
                  Infinitely
                  <br />
                  Scalable
                </FeatureTextSubHeading>
              </ScalableContainer>
            </FeatureSubContainer>
          </FeatureContainer>

          <HeaderTwoContainer>
            <HeaderTwo>One chain for infinite possibilities</HeaderTwo>

            <ImageHolder
              src={
                require(`@site/static/assets/website/chain/one-chain.webp`)
                  .default
              }
              srcSet={`${require(`@site/static/assets/website/chain/one-chain@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/one-chain@3x.webp`).default} 3x`}
              alt={'alt'}
              title={'title'}
            />
            <HeaderTwoSubheader>
              Push chain allows developers to finally create applications that
              are accessible from any chain.
              <br /> <br />
              Push Chain's shared state enables settlement from all EVM and
              non-EVM chains, enabling shared applications and unleashing new
              experiences that benefit all L1s, L2s, and their users.
            </HeaderTwoSubheader>
          </HeaderTwoContainer>
        </InnerContainer>
      </ChainFeaturesWrapper>
      <DividerImg
        srcSet={`${
          require('/static/assets/website/chain/chainFeaturesDivider@2x.png')
            .default
        } 2x, ${require('/static/assets/website/chain/chainFeaturesDivider@3x.png').default} 3x`}
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
  padding: 172px 0px 192px 0px;
  flex-direction: column;

  width: -webkit-fill-available;

  .inverted-divider {
    transform: rotate(180deg);
  }

  .breakpoint {
    display: block;
  }
`;

const DividerImg = styled.img`
  width: -webkit-fill-available;
`;

const ChainFeaturesWrapper = styled.div`
  background-color: #000000;
  margin: -4px 0px;
  width: -webkit-fill-available;
`;

const InnerContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media ${device.desktopL} {
    width: 1400px;
  }

  @media ${device.desktop} {
    width: 1200px;
  }

  @media (max-width: 1248px) {
    padding: 0 24px;
    width: 100%;
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

  @media ${device.tablet} {
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

  @media ${device.tablet} {
    text-align: center;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 100px;
  flex-direction: column;

  @media ${device.tablet} {
    margin-top: 40px;
  }
`;

const FeatureSubContainer = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.tablet} {
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

  display: inline;
  white-space: nowrap;

  @media ${device.tablet} {
    font-size: 28px;

    .breakpoint {
      display: inline;
    }
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

  display: inline;
  white-space: nowrap;

  @media ${device.tablet} {
    font-size: 24px;

    .breakpoint {
      display: inline;
    }
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

  @media ${device.tablet} {
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

  @media (max-width: 1248px) {
    width: calc(50% - 8px);
  }

  @media ${device.tablet} {
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

  @media (max-width: 1248px) {
    width: calc(50% - 8px);
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: -webkit-fill-available;
  }
`;

const FeatureContainerSecondSegregator = styled.div`
  display: flex;
  width: -webkit-fill-available;
  gap: 16px;

  @media ${device.tablet} {
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

  @media ${device.tablet} {
    height: 246px;
    display: none;
  }
`;
const TxFeeContainerMobile = styled(TxFeeContainer)`
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;
const OnboardingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 334.496px;
  padding: 32px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #64f6b2;
  flex-direction: column;

  @media ${device.tablet} {
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
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #ffff;

  @media ${device.tablet} {
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

  @media ${device.tablet} {
    display: none;
  }
`;

const ScalableContainerMobile = styled(ScalableContainer)`
  display: none;
  @media ${device.tablet} {
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

  @media ${device.tablet} {
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

  @media ${device.tablet} {
    align-items: flex-start;
  }
`;

const KnowledgeBaseIcon = styled(TbArrowUpRight)`
  display: flex;
  @media ${device.tablet} {
    display: none;
  }
`;

const KnowledgeBaseIconMobile = styled(TbArrowUpRight)`
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

const StorageAndScalableContainerMobile = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    gap: 16px;
  }
`;

const HeaderTwoContainer = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 300px auto 0 auto;
  gap: 20px;

  @media ${device.tablet} {
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
