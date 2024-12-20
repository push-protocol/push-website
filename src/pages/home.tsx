// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React, { useEffect, useLayoutEffect, useState } from 'react';

// External Components
import Spline from '@splinetool/react-spline';
import { useTranslation } from 'react-i18next';
import { BsArrowRight, BsArrowUpRight, BsFileX } from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
import FadeInAnimation from '@site/src/components/FadeInAnimation';
import FeaturedList from '@site/src/components/Featured/FeaturedList';
import Glassy from '@site/src/components/Glassy/Glassy';
import AnalyticsStats from '@site/src/components/Home/AnalyticsStats';
import RecentBlogPosts from '@site/src/components/Home/RecentBlogPosts';
import ShowcasePartners from '@site/src/components/Home/ShowcasePartners';
import ImageHolder from '@site/src/components/ImageHolder';
import { MailingSignup } from '@site/src/components/MailingSignup/MailingSignup';
import NewMarqueeAnimation from '@site/src/components/NewMarqueeAnimation';
import Accordion from '@site/src/components/Accordion';
import InfoBar from '@site/src/components/InfoBar';
import { General, Notifs } from '@site/src/config/HomepageFAQ';
import {
  A,
  B,
  Button,
  Content,
  H1,
  H2,
  H3,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Import Assets
import StarColoredIcon from '@site/static/assets/website/illustrations/starColoredIcon.svg';
import StarIcon from '@site/static/assets/website/illustrations/starIcon.svg';
import StarSolidIcon from '@site/static/assets/website/illustrations/starSolidIcon.svg';
import BgImage from '@site/static/assets/website/home/faq/footerbg@3x.png';

// Internal Configs
import {
  ChatFeaturesList,
  ChatUseCasesList,
} from '@site/src/config/HomeChatFeaturesList';
import { InvList } from '@site/src/config/HomeInvestorList';
import {
  NotifFeaturesList,
  NotifUseCasesList,
} from '@site/src/config/HomeNotifFeaturesList';
import { OthersFeaturesList } from '@site/src/config/HomeOthersFeaturesList';
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';

export default function Home({ homePageBlogMetadata, recentPosts }) {
  // Internationalization
  const { t, i18n } = useTranslation();

  const [showMoreTeamMembers, setShowMoreTeamMembers] = useState(false);
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  const onClickViewMoreTeamMembers = (e) => {
    e.preventDefault();
    setShowMoreTeamMembers(!showMoreTeamMembers);
  };

  const noNavbar = false;
  const alertLink = `https://gov.push.org/t/introducing-push-chain-a-shared-state-l1-for-universal-apps/1991`;

  return (
    <Layout
      title={PageMeta.HOME.pageTitle}
      description={PageMeta.HOME.pageDescription}
      showNavbar='website'
    >
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Push (Previously EPNS) | Communication Protocol of Web3</title>
        <meta
          name='description'
          content='Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push Protocol (Previously EPNS)' />
        <meta
          property='og:description'
          content='Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/homepreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pushprotocol' />
        <meta name='twitter:title' content='Push Protocol (Previously EPNS)' />
        <meta
          name='twitter:description'
          content='Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.'
        />
        <meta
          property='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/homepreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Protocol',
            description: 'The Communication Protocol of Web3',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://twitter.com/pushprotocol',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <HomeWrapper>
        {/* HERO SECTION */}
        <HeroSection
          id='hero'
          minHeight='100vh'
          width='100%'
          className='darkBackground'
        >
          <HeroContent alignSelf='center' overflow='visible'>
            <HeroAnimation>
              <Spline scene='https://prod.spline.design/vhrszmXNdAbcAHQW/scene.splinecode' />
            </HeroAnimation>
            <HeroPrimary flex='initial' justifyContent='flex-start'>
              <HeroItem maxWidth='50%' alignItems='flex-start'>
                <InfoBar
                  text='Push Chain Governance Proposal is Live'
                  url={alertLink}
                />

                <HeroBody>
                  <H1
                    zIndex='2'
                    fontSize={isMobile ? '32px' : '58px'}
                    margin='0 0 16px 0'
                    fontWeight='500'
                    lineHeight='116%'
                    letterSpacing='normal'
                    fontFamily='FK Grotesk Neue'
                  >
                    {t('home.hero.title')}
                  </H1>

                  <Span
                    color='rgba(255, 255, 255, 1)'
                    zIndex='2'
                    fontSize={isMobile ? '16px' : '21px'}
                    fontWeight='400'
                    lineHeight='140%'
                    letterSpacing='normal'
                  >
                    {t('home.hero.description')}
                  </Span>
                </HeroBody>

                <HeroCTA gap='18px'>
                  <A
                    href={useBaseUrl('/docs')}
                    title={t('home.hero.alt-start-button')}
                    background={GLOBALS.COLORS.HIGHLIGHT}
                    color={GLOBALS.COLORS.FONT_LIGHT}
                    lineHeight='142%'
                    fontSize='16px'
                    zIndex='2'
                  >
                    {t('home.hero.start-button')}
                  </A>
                </HeroCTA>
              </HeroItem>
            </HeroPrimary>

            <HeroAnalytics
              position='absolute'
              zIndex='9'
              left='0'
              right='0'
              bottom={`${GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP}px`}
            >
              <AnalyticsStats />
            </HeroAnalytics>
          </HeroContent>
        </HeroSection>

        {/* SHOWCASE SECTION */}
        <ShowcaseSection id='showcase'>
          <Content alignSelf='center'>
            <ShowcasePartners />
          </Content>
        </ShowcaseSection>

        {/* NOTIF SECTION */}
        <NotificationSection id='notification'>
          <Content alignSelf='center'>
            <ItemV maxWidth={'849px'} margin='0px auto'>
              <H2
                color='#DDD8D8'
                fontSize={isMobile ? '24px' : '30px'}
                textAlign={isMobile ? 'left' : 'center'}
                lineHeight='normal'
                fontWeight='400'
                letterSpacing='normal'
                fontFamily='FK Grotesk Neue'
              >
                <B color='#fff'>
                  {t('home.notification-section.header.main-text')}
                </B>{' '}
                {t('home.notification-section.header.other-text')}
              </H2>
            </ItemV>

            <NotificationFeatures>
              <NotificationFeatureItem flex='1'>
                {NotifFeaturesList?.first?.map((item) => (
                  <Glassy item={item} />
                ))}
              </NotificationFeatureItem>

              <NotificationFeatureItem flex='2'>
                {NotifFeaturesList?.second?.map((item) => (
                  <Glassy item={item} />
                ))}
              </NotificationFeatureItem>

              <NotificationFeatureItem onFocusCapturelex='1'>
                {NotifFeaturesList?.third?.map((item) => (
                  <Glassy item={item} />
                ))}
              </NotificationFeatureItem>
            </NotificationFeatures>

            <ItemV padding='0 0 15px 0' overflow='hidden'>
              <GridMarquee
                speed={1}
                gradientWidth={8}
                gap={18}
                bg={
                  'linear-gradient(90deg, #0D0D0F 0%, #0D0D0F 6%, rgba(13, 13, 15, 0.00) 32%, rgba(13, 13, 15, 0.00) 69%, #0D0D0F 94.5%, #0D0D0F 100%)'
                }
                direction='ltr'
              >
                {NotifUseCasesList.map((item) => {
                  return (
                    <SplideSlide>
                      <NotificationMarquee>
                        <GridItem>
                          <H2
                            fontWeight='400'
                            letterSpacing='normal'
                            fontFamily='FK Grotesk Neue'
                          >
                            {item.title}
                          </H2>
                          <StarIcon />
                        </GridItem>
                      </NotificationMarquee>
                    </SplideSlide>
                  );
                })}
              </GridMarquee>
            </ItemV>
          </Content>
        </NotificationSection>

        {/* CHAT SECTION */}
        <ChatSection id='chat' data-bkg='light' className='lightBackground'>
          <Content alignSelf='center'>
            <ItemV maxWidth={'849px'} margin='0px auto' flexDirection='row'>
              <H2
                color='#DDD8D8'
                fontSize={isMobile ? '24px' : '30px'}
                textAlign={isMobile ? 'left' : 'center'}
                lineHeight={isMobile && '30px'}
                fontWeight='500'
                fontFamily='FK Grotesk Neue'
              >
                <B color='#fff'>{t('home.chat-section.header.main-text')} </B>
                {t('home.chat-section.header.other-text')}
                <TagItem>COMING SOON</TagItem>
              </H2>
            </ItemV>

            <ChatFeatures>
              <ChatFeatureItem flex='1'>
                {ChatFeaturesList?.first?.map((item) => <Glassy item={item} />)}
              </ChatFeatureItem>

              <ChatFeatureItem flex='2'>
                {ChatFeaturesList?.second?.map((item) => (
                  <Glassy item={item} />
                ))}
              </ChatFeatureItem>

              <ChatFeatureItem flex='1'>
                {ChatFeaturesList?.third?.map((item) => <Glassy item={item} />)}
              </ChatFeatureItem>
            </ChatFeatures>

            <ItemV padding='0 0 15px 0' overflow='hidden'>
              <GridMarquee
                speed={1}
                gradientWidth={8}
                gap={18}
                bg={
                  'linear-gradient(90deg, #0D0D0F 0%, #0D0D0F 6%, rgba(13, 13, 15, 0.00) 32%, rgba(13, 13, 15, 0.00) 69%, #0D0D0F 94.5%, #0D0D0F 100%)'
                }
                direction='ltr'
              >
                {ChatUseCasesList.map((item) => {
                  return (
                    <SplideSlide>
                      <NotificationMarquee>
                        <GridItem>
                          <H2 fontFamily='FK Grotesk Neue'>{item.title}</H2>
                          <StarIcon />
                        </GridItem>
                      </NotificationMarquee>
                    </SplideSlide>
                  );
                })}
              </GridMarquee>
            </ItemV>
          </Content>
        </ChatSection>

        {/* PUSH SPACE AND VIDEO SECTION */}
        <OtherFeaturesSection id='otherfeatures'>
          <Content>
            <OtherFeatures>
              {OthersFeaturesList?.products.map((item) => (
                <OtherFeatureItem>
                  <Glassy item={item} />
                </OtherFeatureItem>
              ))}
            </OtherFeatures>
          </Content>
        </OtherFeaturesSection>

        <TokenomicsSection id='tokenomics'>
          <Content alignSelf='center'>
            <ItemH
              flexDirection={isMobile && 'column'}
              gap={isMobile ? '8px' : isTablet ? '16px' : '74px'}
            >
              <ItemV
                alignItems='flex-start'
                justifyContent={!isMobile && 'stretch'}
              >
                <ItemV alignItems='flex-start' justifyContent={'flex-start'}>
                  <H2
                    textAlign='left'
                    color='#D98AEC'
                    textTransform='uppercase'
                    fontSize='14px'
                    fontWeight='700'
                    lineHeight='130%'
                    letterSpacing='0.56px'
                    fontFamily='FK Grotesk Neue'
                  >
                    Push Network
                  </H2>

                  <H2
                    color='#FFF'
                    fontSize={isMobile ? '28px' : '30px'}
                    fontWeight='500'
                    margin='8px 0 0 0'
                    fontFamily='FK Grotesk Neue'
                    lineHeight='130%'
                    letterSpacing='normal'
                  >
                    {t('home.network-section.title')}
                  </H2>
                </ItemV>

                <TokenImage
                  width={'100%'}
                  height={'auto'}
                  src={
                    require(
                      `@site/static/assets/website/tokenomics/tokenomics.webp`
                    ).default
                  }
                  srcSet={`${require(`@site/static/assets/website/tokenomics/tokenomics@2x.webp`).default} 2x, ${require(`@site/static/assets/website/tokenomics/tokenomics@3x.webp`).default} 3x`}
                  alt={'Tokenomics'}
                  loading='lazy'
                />
              </ItemV>

              <ItemV>
                <TokenItem>{t('home.network-section.first-text')}</TokenItem>
                <TokenItem>{t('home.network-section.second-text')}</TokenItem>
                <TokenItem>
                  {t('home.network-section.third-text')}
                  <TagItem style={{ marginLeft: '10px' }}>NEW</TagItem>
                </TokenItem>
                <TokenItem>{t('home.network-section.fourth-text')}</TokenItem>
                <TokenItem>{t('home.network-section.fifth-text')}</TokenItem>
              </ItemV>
            </ItemH>
            <SlideLink
              href={useBaseUrl(`/docs/tokenomics/deepdive/$push/`)}
              title={'new'}
              target='_blank'
              padding='0px 0px'
              className='button'
              margin={isMobile ? '24px auto 0px 0px' : '24px 0px 0px auto'}
              background='transparent'
              alignItems='center'
              justifyContent='flex-end'
            >
              <SpanLink>Explore Tokenomics</SpanLink>
              <BsArrowRight className='anchorSVGlink' />
            </SlideLink>
          </Content>
        </TokenomicsSection>

        {/* WHY PUSH AND BLOG */}
        <BlogSection id='blog'>
          <Content alignSelf='center'>
            {/* BLOG SECTION */}
            <ItemH>
              <ItemH justifyContent='flex-start' alignItems='center' gap='8px'>
                <StarSolidIcon />
                <H2
                  color='#D98AEC'
                  fontSize={'21px'}
                  fontWeight='500'
                  letterSpacing='0.84px'
                  lineHeight='130%'
                  fontFamily='FK Grotesk Neue'
                >
                  Push Blog
                </H2>
              </ItemH>

              {!isMobile && (
                <ItemH justifyContent='flex-end'>
                  <SlideLink
                    href={useBaseUrl('/blog')}
                    title='Explore all articles'
                    hoverBackground='transparent'
                    hover='transparent'
                    background='transparent'
                    filter='none'
                    color='#fff'
                    borderRadius='0'
                    padding='0px 0px'
                    fontFamily='FK Grotesk Neue'
                  >
                    <SpanLink>Explore Blog</SpanLink>
                    <BsArrowRight className='anchorSVGlink' />
                  </SlideLink>
                </ItemH>
              )}
            </ItemH>

            <H2
              fontSize={isMobile ? '24px' : '30px'}
              color='#fff'
              margin='8px 0 0 0'
              fontWeight='500'
              fontFamily='FK Grotesk Neue'
              lineHeight='120%'
              letterSpacing='normal'
            >
              Your gateway to shiny updates and innovations at Push Protocol.
            </H2>

            <RecentBlogPosts recentPosts={recentPosts} />
          </Content>
        </BlogSection>

        {/* BACKED BY SECTION */}
        <BackedBySection id='investors'>
          <ItemV
            id='integratePush'
            position='absolute'
            top='0'
            right='0'
            bottom='0'
            left='0'
          />

          <Content alignSelf='center'>
            <InvestorItem alignItems='stretch'>
              <InvestorHeader
                color='#FFFFFF'
                fontWeight='700'
                letterSpacing='-0.02em'
                lineHeight='120%'
                fontSize={isMobile ? '24px' : '36px'}
                fontFamily='FK Grotesk Neue'
                lineHeight='130%'
                textAlign='center'
              >
                {t('home.investors-section.title')}
              </InvestorHeader>
            </InvestorItem>

            <MarqueeAnimationContainer
              margin={isMobile ? '24px 0 3em 0' : '72px 0 3em 0'}
              flex='1'
              alignItems='stretch'
            >
              <NewMarqueeAnimation
                speed={2}
                gradientWidth={8}
                gap={24}
                fixedWidth={'250px'}
                direction='ltr'
              >
                {InvList.top.map((item) => {
                  return (
                    <SplideSlide>
                      <InvestorCard key={item.id}>
                        <InvestorIcon
                          width={item.title ? 64 : 'auto'}
                          src={
                            require(
                              `@site/static/assets/website/investors/${item.srcref}.webp`
                            ).default
                          }
                          srcSet={`${require(`@site/static/assets/website/investors/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/investors/${item.srcref}@3x.webp`).default} 3x`}
                          alt={`${item?.alt}`}
                        />
                        {item.title && (
                          <InvestorDetails>
                            <InvestorTitle>{item.title}</InvestorTitle>
                            {item.subtitle && (
                              <InvestorSubtitle>
                                {item.subtitle}
                              </InvestorSubtitle>
                            )}
                          </InvestorDetails>
                        )}
                      </InvestorCard>
                    </SplideSlide>
                  );
                })}
              </NewMarqueeAnimation>
            </MarqueeAnimationContainer>

            <MarqueeAnimationContainer flex='1' alignItems='stretch'>
              <NewMarqueeAnimation
                speed={-2}
                gradientWidth={8}
                gap={24}
                fixedWidth={'250px'}
                direction='ltr'
              >
                {InvList.bottom.map((item, i) => {
                  return (
                    <SplideSlide>
                      <InvestorCard
                        key={item.id}
                        flexDirection={item.title ? 'true' : 'false'}
                      >
                        <InvestorIcon
                          width={item.title ? '64px' : 'auto'}
                          borderRadius={item.title ? '50%' : '0'}
                          src={
                            require(
                              `@site/static/assets/website/investors/${item.srcref}.webp`
                            ).default
                          }
                          srcSet={`${require(`@site/static/assets/website/investors/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/investors/${item.srcref}@3x.webp`).default} 3x`}
                          alt={`${item?.alt}`}
                        />
                        {item.title && (
                          <InvestorDetails>
                            <InvestorTitle>{item.title}</InvestorTitle>
                            {item.subtitle && (
                              <InvestorSubtitle>
                                {item.subtitle}
                              </InvestorSubtitle>
                            )}
                          </InvestorDetails>
                        )}
                      </InvestorCard>
                    </SplideSlide>
                  );
                })}
              </NewMarqueeAnimation>
            </MarqueeAnimationContainer>
          </Content>
        </BackedBySection>

        {/* MEDIA COVERAGE SECTION */}
        <FeaturedInSection id='featured'>
          <Content className='fluid'>
            <ItemH justifyContent='center'>
              <H2
                color='#FFFFFF'
                fontWeight='500'
                letterSpacing='normal'
                fontSize={isMobile ? '24px' : '36px'}
                fontFamily='FK Grotesk Neue'
                lineHeight='130%'
                textAlign='center'
              >
                {t('home.featured-section.title')}
              </H2>
            </ItemH>

            <FeaturedList />
          </Content>
        </FeaturedInSection>

        <FAQSection>
          <Content>
            <ItemH
              flexDirection={isMobile && 'column'}
              alignItems='flex-start'
              justifyContent='space-between'
            >
              <ItemV alignItems='flex-start' justifyContent='flex-start'>
                <H2
                  color='#FFF'
                  fontSize={isMobile ? '32px' : '36px'}
                  fontFamily='FK Grotesk Neue'
                  textAlign={isMobile && 'center'}
                  margin={isMobile && '0 auto'}
                  fontWeight='500'
                  lineHeight='130%'
                >
                  Frequently Asked Questions
                </H2>

                <FaqLink
                  href='https://discord.gg/pushprotocol'
                  target='_blank'
                  title='Discord'
                  fontSize='16px'
                  margin={isMobile ? '24px auto 0 auto' : '24px 0 0 0'}
                  background={GLOBALS.COLORS.HIGHLIGHT}
                  color={GLOBALS.COLORS.FONT_LIGHT}
                  fontFamily='FK Grotesk Neue'
                >
                  <p>Ask us on Discord</p>
                  <BsArrowRight className='anchorSVGlink' />
                </FaqLink>
              </ItemV>

              <ItemV alignItems='flex-start' justifyContent='flex-start'>
                <AccordionGrid>
                  <Accordion
                    items={General}
                    fontFamily='FK Grotesk Neue'
                    textColor='#BBBCD0 !important'
                  />
                </AccordionGrid>

                <AccordionGrid>
                  <Accordion
                    items={Notifs.slice(0, 2)}
                    fontFamily='FK Grotesk Neue'
                    firstOpen={false}
                  />
                </AccordionGrid>

                <SlideLink
                  href={useBaseUrl('/faq')}
                  title={'new'}
                  target='_blank'
                  padding='0px 0px'
                  className='button'
                  margin={isMobile ? '24px auto 0px 0px' : '24px 0px 0px auto'}
                  background='transparent'
                  alignItems='center'
                  justifyContent='flex-end'
                >
                  <SpanLink>Explore FAQs</SpanLink>
                  <BsArrowRight className='anchorSVGlink' />
                </SlideLink>
              </ItemV>
            </ItemH>
          </Content>
        </FAQSection>

        <BgSection>
          <Content>
            <ImageBackgroundDiv>
              <ItemV
                alignItems='center'
                justifyContent='flex-end'
                height='100%'
                zIndex='888'
              >
                <H2
                  color='#FFF'
                  fontSize={isMobile ? '20px' : '32px'}
                  fontFamily='FK Grotesk Neue'
                  fontWeight='500'
                  lineHeight='140%'
                  textAlign={isTablet && 'center'}
                  margin={isTablet && '0 auto'}
                >
                  {t('home.bg-section.title')}
                </H2>

                <H3
                  color='#a5abb8'
                  fontSize={isMobile ? '14px' : '19px'}
                  fontFamily='FK Grotesk Neue'
                  fontWeight='400'
                  lineHeight='192%'
                  textAlign={isTablet && 'center'}
                  margin={isTablet && '0 auto'}
                >
                  {t('home.bg-section.subtitle')}
                </H3>

                <FaqLink
                  href={useBaseUrl('/docs')}
                  title='Explore docs'
                  fontSize='16px'
                  margin='48px 0 0 0'
                  background={GLOBALS.COLORS.HIGHLIGHT}
                  color={GLOBALS.COLORS.FONT_LIGHT}
                  fontFamily='FK Grotesk Neue'
                >
                  <p>{t('home.bg-section.buttonText')}</p>
                </FaqLink>
              </ItemV>
            </ImageBackgroundDiv>
          </Content>
        </BgSection>
      </HomeWrapper>
    </Layout>
  );
}

const HomeWrapper = styled(ItemV)`
  background: #0d0d0f;
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  font-family: FK Grotesk Neue !important;

  box-sizing: border-box;
  & #hero .contentBox {
    row-gap: 18px;
  }

  & .pushMissingSvg {
    width: 500px;
    @media ${device.laptop} {
      width: 400px;
    }
    @media ${device.tablet} {
      width: 100%;
    }
  }
  @media ${device.tablet} {
    width: 100%;

    & svg.figureSvg {
      width: 100%;
    }
  }
`;

const HeroSection = styled(Section)`
  overflow-y: visible;
  overflow-x: clip;

  @media ${device.laptop} {
    min-height: initial;
  }
`;

const HeroContent = styled(Content)`
  align-self: stretch;
  padding-top: 250px;
  padding-bottom: 250px;

  @media ${device.laptop} {
    padding-top: 200px;
    padding-bottom: 40px;
  }

  @media ${device.mobileL} {
    padding-top: 112px;
    padding-bottom: 40px;
  }
`;

const HeroAnimation = styled(ItemH)`
  position: absolute;
  top: 0;
  left: 380px;
  right: auto;
  bottom: 150px;
  width: 100%;
  z-index: 1;

  @media ${device.laptop} {
    display: none;
  }
`;

const HeroPrimary = styled(ItemH)``;

const HeroItem = styled(ItemV)`
  z-index: 2;

  @media ${device.laptop} {
    max-width: initial;
    align-items: center;
    margin: 0 15%;
  }

  @media ${device.tablet} {
    margin: 0 auto;
  }
`;

const HeroBody = styled(ItemV)`
  margin: 32px 0px;
  text-align: left;

  @media ${device.laptop} {
    text-align: center;

    & > Span {
      text-align: center;
    }
  }
`;

const HeroCTA = styled(ItemH)`
  font-family: FK Grotesk Neue !important;
  letter-spacing: normal;
  justify-content: flex-start;

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.mobileM} {
    &.Button {
      display: none;
    }
  }
`;

const HeroAnalytics = styled(ItemH)`
  &:before {
    content: '';
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 40%;
    border-radius: 0 0 150px 150px;
    background-color: #c336e4;
    opacity: 0.35;
    filter: blur(80px);
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(202, 55, 237, 0) 18%,
      #ca37ed 50%,
      rgba(202, 55, 237, 0) 82%
    );
  }

  margin: 0 auto;

  @media ${device.laptop} {
    margin: 40px 0 0px 0;
    flex: initial;
    position: relative;
    bottom: auto;
  }
`;

/* Home Page Sections */

const ShowcaseSection = styled(Section)``;

const NotificationSection = styled(Section)``;

const ChatSection = styled(Section)``;

const OtherFeaturesSection = styled(Section)``;

const TokenomicsSection = styled(Section)``;

const FAQSection = styled(Section)``;

const BgSection = styled(Section)`
  &:after {
    content: '';
    position: absolute;
    height: 500px;
    width: 500px;
    top: 25px;
    background: radial-gradient(
      98.72% 98.72% at 50% 1.28%,
      rgba(206, 56, 231, 0.43) 0%,
      rgba(45, 20, 148, 0.26) 51.5%
    );
    filter: blur(95.11041259765625px);
    border-radius: 531.848px;
    margin: auto auto;

    @media ${device.mobileL} {
      height: 300px;
      width: 300px;
    }
  }
`;

const TokenItem = styled.div`
  width: 100%;
  padding: 24px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  color: #fff;
  font-family: 'FK Grotesk Neue';
  font-size: 19px;
  font-weight: 400;
  line-height: 130%;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: normal;

  @media ${device.mobileL} {
    font-size: 17px;
  }
`;

const TokenImage = styled(Image)`
  object-fit: contain;

  @media ${device.mobileL} {
    margin-top: 32px;
  }
`;

const FeaturedInSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogSection = styled(Section)``;

const BackedBySection = styled(Section)``;

const InvestorHeader = styled(H2)`
  width: 720px;
  margin: 0 auto 0px auto;
  @media ${device.tablet} {
    width: auto;
  }
`;

const InvestorItem = styled(ItemV)``;

const InvestorCard = styled(ItemV)`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 74px;
  padding: 8px;
  min-width: 242px;
  min-height: 96px;
  max-height: 96px;
  flex: 0;
`;

const InvestorIcon = styled(Image)`
  margin: auto auto;
`;

const InvestorDetails = styled(ItemV)`
  align-self: stretch;
  flex: 1;
  margin-bottom: auto;
`;

const InvestorTitle = styled(Span)`
  font-weight: 500;
  font-size: 22px;
  line-height: 142%;
  color: #09090b;
`;

const InvestorSubtitle = styled(Span)`
  font-weight: 500;
  font-size: 9px;
  line-height: 160%;
  letter-spacing: 0.11em;
  color: #303c5e;
  text-transform: uppercase;
`;

const NotificationFeatures = styled(ItemH)`
  font-family: FK Grotesk Neue;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 72px;
  justify-content: flex-start;

  @media ${device.laptopM} {
    width: 100%;
  }

  @media ${device.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    gap: 16px;
  }
`;

const NotificationFeatureItem = styled(ItemV)`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 24px;

  @media ${device.laptopM} {
    &:nth-child(3) {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;
    flex-wrap: nowrap;

    &:nth-child(n) {
      flex-direction: column;
      flex-wrap: nowrap;
    }

    gap: 16px;
  }
`;

const ChatFeatures = styled(NotificationFeatures)``;

const ChatFeatureItem = styled(NotificationFeatureItem)`
  &:nth-child(2) {
    flex-wrap: wrap;
    flex-direction: row;
  }

  .hyperscalable {
    width: calc(50% - 12px);
  }

  .plug-play {
    width: calc(50% - 12px);
  }

  @media ${device.mobileL} {
    .hyperscalable {
      width: 100%;
    }

    .plug-play {
      width: 100%;
    }
  }
`;

const OtherFeatures = styled(NotificationFeatures)`
  margin-top: 0px;
  justify-content: flex-start;
`;

const OtherFeatureItem = styled(NotificationFeatureItem)``;

const TagItem = styled.b`
  width: fit-content;
  border-radius: 12px;
  border: 1px solid #d98aec;
  background: transparent;
  padding: 2px 5px;
  color: #d98aec;
  font-size: 9px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
`;

const NotificationMarquee = styled(ItemH)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 64px 0;
`;

const GridMarquee = styled(NewMarqueeAnimation)``;

const GridItem = styled(ItemH)`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: center;

  h2 {
    color: #707187;
    font-size: 28px;
    line-height: 150%;
  }

  &:hover {
    cursor: pointer;
    h2 {
      color: #fff;
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

const SlideLink = styled(A)`
  overflow: inherit;
  .anchorSVGlink {
    color: #fff;
    top: 3px;
  }

  &:hover {
    .anchorSVGlink {
      color: #d98aec;
    }
  }
`;

const FaqLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: inherit;

  p {
    margin: 0px !important;
  }
  .anchorSVGlink {
    color: #fff;
    top: 0px;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #fff;
    }
  }
`;

const SpanLink = styled(Span)`
  position: relative;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 142%;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const MarqueeAnimationContainer = styled(ItemV)``;

const AccordionGrid = styled.div`
  max-width: 877px;
  min-width: 877px;

  @media ${device.laptop} {
    max-width: 100%;
    min-width: 100%;
  }
`;

const ImageBackgroundDiv = styled.div`
  width: 100%;
  min-height: 400px;
  background-image: url(${BgImage});
  background-size: auto 400px;
  background-repeat: no-repeat;
  background-position: top center;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 100%;
    background-size: contain;
    background-position: top center;
    min-height: 330px;
  }

  @media ${device.tablet} {
    width: 100%;
    background-size: contain;
    background-position: top center;
    min-height: 400px;
  }
`;
