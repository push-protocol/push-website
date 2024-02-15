// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React, { useEffect, useLayoutEffect, useState } from "react";

// External Components
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { BsArrowRight, BsArrowUpRight, BsFileX } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

// Internal Components
import FadeInAnimation from "@site/src/components/FadeInAnimation";
import Glassy from '@site/src/components/Glassy/Glassy';
import AnalyticsStats from "@site/src/components/Home/AnalyticsStats";
import PushProductsScroll from "@site/src/components/Home/PushProductsScroll";
import RecentBlogPosts from "@site/src/components/Home/RecentBlogPosts";
import ShowcasePartners from "@site/src/components/Home/ShowcasePartners";
import ImageHolder from "@site/src/components/ImageHolder";
import { MailingSignup } from "@site/src/components/MailingSignup/MailingSignup";
import MarqueeAnimation from "@site/src/components/MarqueeAnimation";
import NewMarqueeAnimation from "@site/src/components/NewMarqueeAnimation";
import { GlassyComponentMarqueeList } from '@site/src/config/GlassyComponentMarqueeList';
import { HomeGlassyChatList, HomeGlassyNotifsList } from '@site/src/config/GlassyComponentsList';
import { slideSection } from '@site/src/config/SlideSection';
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
  Span
} from "@site/src/css/SharedStyling";
import useMediaQuery from "@site/src/hooks/useMediaQuery";
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Import Assets
import BNBChainSVG from "@site/static/assets/BNBChain.svg";
import EthLogoTextSVG from "@site/static/assets/ethereum-logo-landscape.svg";
import PolygonLogoTextSVG from "@site/static/assets/polygon_logo_text_black.svg";
import CensorshipresistantFigure from "@site/static/assets/website/illustrations/censorshipresistant.svg";
import ChainAgnosticFigure from "@site/static/assets/website/illustrations/chainagnostic.svg";
import DecentralizedstackFigure from "@site/static/assets/website/illustrations/decentralizedstack.svg";
import ImmediatecommunicationFigure from "@site/static/assets/website/illustrations/immediatecommunication.svg";
import ImproveduxFigure from "@site/static/assets/website/illustrations/improvedux.svg";
import SecurityalertsFigure from "@site/static/assets/website/illustrations/securityalerts.svg";
import StarColoredIcon from "@site/static/assets/website/illustrations/starColoredIcon.svg";
import StarIcon from "@site/static/assets/website/illustrations/starIcon.svg";
import StarSolidIcon from "@site/static/assets/website/illustrations/starSolidIcon.svg";
import DiscordSVG from "@site/static/assets/website/shared/discord.svg";
import GithubSVG from "@site/static/assets/website/shared/github.svg";
import TwitterSVG from "@site/static/assets/website/shared/twitter.svg";

// Internal Configs
import { InvList } from "@site/src/config/HomeInvestorList";
import { MediaList } from "@site/src/config/HomeMediaList";
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from "@site/src/config/pageMeta";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Setup some constants
const MARQUEE_ANIMATION_SPEED = 60;

export default function Home({ homePageBlogMetadata, recentPosts }) {
  // Internationalization
  const { t, i18n } = useTranslation();

  // Hero Shrink Animation
  useLayoutEffect(() => {
    gsap.to("#herobg", {
      scrollTrigger: {
        trigger: "#herobg",
        start: "center center",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
      scale: 0.985,
      borderRadius: GLOBALS.ADJUSTMENTS.RADIUS.LARGE,
    });

    gsap.to("#integratePush", {
      scrollTrigger: {
        trigger: "#mediaFeaturedInSection",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
      scale: 0.985,
      borderRadius: GLOBALS.ADJUSTMENTS.RADIUS.LARGE,
    });
  }, []);

  const [showMoreTeamMembers, setShowMoreTeamMembers] = useState(false);
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  const onClickViewMoreTeamMembers = (e) => {
    e.preventDefault();
    setShowMoreTeamMembers(!showMoreTeamMembers);
  };

  const noNavbar = false;

  return (
     <Layout title={PageMeta.HOME.pageTitle} description={PageMeta.HOME.pageDescription} showNavbar='website'>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Push (Previously EPNS) | Communication Protocol of Web3</title>
        <meta name="description" content="Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services." />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://push.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Push Protocol (Previously EPNS)" />
        <meta property="og:description" content="Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services." />
        <meta property="og:image" content={useBaseUrl(require("/static/assets/previews/homepreview.png").default, { absolute: true})} />


        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pushprotocol" />
        <meta name="twitter:title" content="Push Protocol (Previously EPNS)" />
        <meta name="twitter:description" content="Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services." />
        <meta property="twitter:image" content={useBaseUrl(require("/static/assets/previews/homepreview.png").default, { absolute: true})} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            "name": "Push Protocol",
            "description": "The Communication Protocol of Web3",
            "url": "https://push.org",
            "logo": "/assets/website/favicon.ico",
            "sameAs": [
              "https://twitter.com/pushprotocol",
              "https://www.linkedin.com/company/push-protocol/mycompany/"
            ]
          })}
        </script>
      </Head>
      
      <HomeWrapper>
        {/* HERO SECTION */}
        <HeroSection
          id="hero"
          minHeight="100vh"
          width="100%"
          overflow="hidden"
          className="darkBackground"
        >
          <HeroContent alignSelf="center">
            <HeroAnimation>
              <Spline scene="https://prod.spline.design/vhrszmXNdAbcAHQW/scene.splinecode" />
            </HeroAnimation>
            <HeroPrimary flex="initial" justifyContent="flex-start">
              <HeroItem
                maxWidth="50%"
                alignItems="flex-start"
                // margin="10px 0 0 0"
              >
                <HeroButton>
                  <StarColoredIcon />
                  <H2 fontSize='14px' fontFamily="FK Grotesk Neue">Push Metamask Snap is now Live! Get Started</H2>
                  <BsArrowRight />
                </HeroButton>

                <HeroBody>
                  <H1 
                    zIndex="2" 
                    fontSize={isMobile ? '32px' : '58px'} 
                    margin="0 0 16px 0"
                    fontWeight="700" 
                    fontFamily="FK Grotesk Neue">{t("home.hero.title")}
                  </H1>

                  <Span
                    color="rgba(255, 255, 255, 1)"
                    zIndex="2"
                    fontSize='21px'
                  >
                      {/* {t("home.hero.description")} */}
                      Push is a web3 native communication network, enabling cross-chain notifications, messaging, and more for apps, wallets, and services.
                  </Span>
                </HeroBody>

                <HeroCTA gap="18px">
                  <A
                    href="/docs"
                    title={t("home.hero.alt-start-button")}
                    background={GLOBALS.COLORS.HIGHLIGHT}
                    color={GLOBALS.COLORS.FONT_LIGHT}
                    lineHeight="142%"
                    fontSize='16px'
                    zIndex="2"
                  >
                    {t("home.hero.start-button")}
                  </A>
                </HeroCTA>
              
              </HeroItem>
            </HeroPrimary>

            <HeroAnalytics
              position="absolute"
              zIndex="9"
              left="0"
              right="0"
              bottom='0'
              bottom="20px"
          >
              <AnalyticsStats />
            </HeroAnalytics>


          </HeroContent>
        </HeroSection>

        {/* SHOWCASE SECTION */}
        <ShowcaseSection id="showcase-section">
          <Content
            className="contentBox"
            alignSelf="center"
            padding="200px 40px 0px 40px"
          >
            <ShowcasePartners />
          </Content>
        </ShowcaseSection>

        {/* NOTIF SECTION */}
        <NotificationSection id="notification-section">
          <Content
            className="contentBox"
            alignSelf="center"
          >
                  <ItemV
                      maxWidth = {'849px'}
                      margin = '0px auto 72px auto'>
                      <H2 color='#DDD8D8' fontSize={isMobile ? '24px' : '30px'} textAlign={isMobile ? 'left' : 'center'} lineHeight={isMobile && '30px'} fontWeight="500" fontFamily="FK Grotesk Neue">
                          <B color='#fff'>{t("home.notification-section.header.main-text")} </B> 
                          {t("home.notification-section.header.other-text")}
                      </H2>
                  </ItemV>

                  <NotificationGridSystem>
                      <NotificationGridItem maxWidth="282px">
                          {HomeGlassyNotifsList?.first?.map((item)=>(
                              <Glassy section = {item} />
                          ))}
                      </NotificationGridItem>

                  

                      <NotificationGridItem maxWidth="588px" main={true}>
                          {HomeGlassyNotifsList?.second?.map((item)=>(
                              <Glassy section = {item} />
                              ))}
                      </NotificationGridItem>

                      <NotificationGridItem maxWidth="282px" lastRow={true}>
                          {HomeGlassyNotifsList?.third?.map((item)=>(
                                  <Glassy section = {item} />
                              ))}
                      </NotificationGridItem>
                  </NotificationGridSystem>

                  <ItemV padding='0 0 10px 0'>
                    <GridMarquee
                          speed={1}
                          gradientWidth={8}
                          gap={18}
                          bg={'linear-gradient(90deg, #0D0D0F 0%, #0D0D0F 6%, rgba(13, 13, 15, 0.00) 32%, rgba(13, 13, 15, 0.00) 69%, #0D0D0F 94.5%, #0D0D0F 100%)'}
                          // fixedWidth={'2'}
                          direction="ltr">
                        {GlassyComponentMarqueeList.map((item) => {
                          return (
                          <SplideSlide>
                            <NotificationMarquee>
                              
                              <GridItem>
                                <H2 fontFamily="FK Grotesk Neue">{item.title}</H2>
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
         <ChatSection id="chat-section" data-bkg="light" className="lightBackground">
          <Content
            className="contentBox"
            alignSelf="center"
            padding="200px 40px 0px 40px"
          >

                  <ItemV
                      maxWidth = {'849px'}
                      margin = '0px auto 72px auto'
                      flexDirection = 'row'>
                      <H2 color='#DDD8D8' fontSize={isMobile ? '24px' : '30px'} textAlign={isMobile ? 'left' : 'center'} lineHeight={isMobile && '30px'} fontWeight="500" fontFamily="FK Grotesk Neue">
                          <B color='#fff'>{t("home.chat-section.header.main-text")} </B> 
                          {t("home.chat-section.header.other-text")}
                           <TagItem>COMING SOON</TagItem>
                      </H2>
                  </ItemV>

                  <ChatGridSystem>
                        <ChatGridItem maxWidth="282px">
                            {HomeGlassyChatList?.first?.map((item)=>(
                                  <Glassy section = {item} />
                            ))}
                        </ChatGridItem>

                    

                        <ChatGridItem maxWidth="588px" main={true}>
                            {HomeGlassyChatList?.second?.map((item)=>(
                                  <Glassy section = {item} />
                                ))}
                        </ChatGridItem>

                        <ChatGridItem maxWidth="282px" lastRow={true}>
                            {HomeGlassyChatList?.third?.map((item)=>(
                                  <Glassy section = {item} />
                                ))}
                        </ChatGridItem>
                    </ChatGridSystem>

                    <ItemV padding='0 0 10px 0'>
                    <GridMarquee
                        speed={1}
                        gradientWidth={8}
                        gap={18}
                        bg={'linear-gradient(90deg, #0D0D0F 0%, #0D0D0F 6%, rgba(13, 13, 15, 0.00) 32%, rgba(13, 13, 15, 0.00) 69%, #0D0D0F 94.5%, #0D0D0F 100%)'}
                        // fixedWidth={'2'}
                        direction="ltr">
                      {GlassyComponentMarqueeList.map((item) => {
                        return (
                        <SplideSlide>
                          <NotificationMarquee>
                            
                            <GridItem>
                              <H2 fontFamily="FK Grotesk Neue">{item.title}</H2>
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

        <SlideSection id="slide-section">
          <Content
            className="contentBox"
            alignSelf="center"
          >

            <ItemH flexDirection={isMobile ? 'column' : 'row'} flexWrap='nowrap' gap="29px">
                {slideSection.map((item) => (<SlideItem>
                      <Image
                        width={'100%'}
                        height={'auto'}
                        // borderRadius={item.title ? '50%' : '0'}
                        src={require(`@site/static/assets/website/slides/${item.imageref}.png`).default}
                        srcSet={`${require(`@site/static/assets/website/slides/${item.imageref}@2x.png`).default} 2x, ${require(`@site/static/assets/website/slides/${item.imageref}@3x.png`).default} 3x`}
                        // alt={`${item?.alt}`}
                        loading="lazy"
                      />


                      <ItemV alignItems='flex-start' margin="64px auto 0 0" maxWidth={isTablet ? "80%" : "70%"}>
                          <H2 
                             textAlign='left'
                             color="#D98AEC"
                             textTransform="uppercase"
                             fontSize="14px"
                             fontWeight="700"
                             lineHeight="130%"
                             letterSpacing="0.56px" 
                             fontFamily="FK Grotesk Neue"
                             >{item.title}</H2>
                          
                          <H2 color="#FFF"
                              fontSize={isMobile ? '24px' : '30px'}
                              fontWeight="500"
                              margin="8px 0px"
                              fontFamily="FK Grotesk Neue"
                              >{item.subtitle}</H2>

                          <H3 color="#FFF"
                              fontSize="19px"
                              fontWeight="400"
                              fontFamily="FK Grotesk Neue"
                              color="#BBBCD0"
                              lineHeight="130%"
                              margin="8px 0px">{item.content}</H3>

                              <SlideLink
                                  href={item.link}
                                  title={'new'}
                                  target="_self"
                                  padding="0px 0px"
                                  fontSize="16px"
                                  fontWeight="500"
                                  letterSpacing="-0.03em"
                                  lineHeight="26px"
                                  className='button'
                                  margin="24px 0px 0px 0px"
                                  background="transparent"
                                  alignItems='center'
                                >
                                  <SpanLink>{item.itemLink}</SpanLink>
                                  <BsArrowRight className="anchorSVGlink" />
                                </SlideLink>
                      </ItemV>

                </SlideItem>))}
            </ItemH>

            </Content>
        </SlideSection>
            


        {/* BUILD WITH PUSH */}
        {/* <BuildWithPushSection id="buildWithPush">
          <ItemV
            position="absolute"
            background={GLOBALS.COLORS.BG_DARK}
            top="0"
            bottom="0"
            right="0"
            left="0"
            borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.LARGE}
          />
          <PushProductContent className="contentBox">
            <PushProductsScroll />
          </PushProductContent>
        </BuildWithPushSection> */}
        
        {/* WHY PUSH AND BLOG */}
        <WhyPushAndBlogSection>
          {/* <ItemV
            id="integratePush"
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            background={GLOBALS.COLORS.BG_LIGHT}
            borderRadius="0px"
          /> */}

          <Content
            className="contentBox"
            alignSelf="center"
          >

            {/* BLOG SECTION */}
            <ItemH>
              <ItemH justifyContent="flex-start" alignItems="center" gap='6px'>
                <StarSolidIcon />
                <H2
                  color="#D98AEC"
                  fontSize={"21px"}
                  fontWeight="500"
                  letterSpacing="-0.02em"
                  lineHeight="130%"
                  fontFamily="FK Grotesk Neue"
                  // margin="0 0 40px 0"
                  // width="50%"
                >
                  Push Blog
                </H2>
              </ItemH>

              {!isMobile && (<ItemH justifyContent="flex-end">
                <A
                  href="/blog"
                  title="Exlore all articles"
                  hoverBackground="transparent"
                  hover="transparent"
                  background="transparent"
                  filter="none"
                  color="#fff"
                  borderRadius="0"
                  padding="0px 0px"
                  fontSize="16px"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  lineHeight="142%"
                  fontFamily="FK Grotesk Neue"
                >
                  Explore Blog
                  <BsArrowRight className="anchorSVGlink" />
                </A>
              </ItemH>)}
            </ItemH>

            <H2
                fontSize={isMobile ? "24px" : "30px"}
                color="#fff"
                margin="4px 0 0 0"
                fontWeight="500"
                fontFamily="FK Grotesk Neue"
                lineHeight="120%"
            >Your gateway to shiny updates and innovations at Push Protocol. </H2>

             {isMobile && (<A
                  href="/blog"
                  title="Exlore all articles"
                  hoverBackground="transparent"
                  hover="transparent"
                  background="transparent"
                  filter="none"
                  color="#fff"
                  borderRadius="0"
                  padding="0px 0px"
                  fontSize="16px"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  lineHeight="142%"
                  fontFamily="FK Grotesk Neue"
                  margin={'24px 0 0 0'}
                >
                  Explore Blog
                  <BsArrowRight className="anchorSVGlink" />
                </A>)}
            
            <RecentBlogPosts recentPosts={recentPosts} />

          </Content>
        </WhyPushAndBlogSection>

        {/* BACKED BY SECTION */}
        <BackedBySection
          background={GLOBALS.COLORS.BG_DARK}
        >
          <ItemV
            id="integratePush"
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            background={GLOBALS.COLORS.BG_LIGHT}
            borderRadius={`${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}`}
            // borderRadius={`0 0 ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}`}
          />

          <Content
            className="contentBox"
            alignSelf="center"
            width="inherit"
            
          >
            <InvestorItem
              alignItems="stretch"
            >
              <InvestorHeader
                  color="#09090B"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                >
                  {t("home.investors-section.title")}
              </InvestorHeader>
            </InvestorItem>
            
            <MarqueeAnimationContainer
              // padding="120px 0 0 0"
              margin="3em 0"
              flex="1"
              alignItems="stretch"
            >
              <NewMarqueeAnimation
                speed={3}
                gradientWidth={8}
                gap={18}
                fixedWidth={'250px'}
                direction="ltr"

              >
                {InvList.top.map((item) => {
                  return (
                    <SplideSlide>
                    <InvestorCard 
                      key={item.id}
                    >
                      <InvestorIcon
                        width={item.title ? 64 : 'auto'}
                        src={require(`@site/static/assets/website/investors/${item.srcref}.webp`).default}
                        srcSet={`${require(`@site/static/assets/website/investors/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/investors/${item.srcref}@3x.webp`).default} 3x`}
                        alt={`${item?.alt}`}
                      />
                      {item.title && 
                        <InvestorDetails>
                          <InvestorTitle>{item.title}</InvestorTitle>
                          {item.subtitle && 
                            <InvestorSubtitle>{item.subtitle}</InvestorSubtitle>
                          }
                        </InvestorDetails>
                      }
                    </InvestorCard>
                    </SplideSlide>
                  );
                })}
              </NewMarqueeAnimation>
            </MarqueeAnimationContainer>

            <MarqueeAnimationContainer
              // padding="2em 0 0 0"
              // margin="0 0 5em 0"
              flex="1"
              alignItems="stretch"
            >
              <NewMarqueeAnimation
                speed={-3}
                gradientWidth={8}
                gap={18}
                fixedWidth={'250px'}
                direction="ltr"
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
                        src={require(`@site/static/assets/website/investors/${item.srcref}.webp`).default}
                        srcSet={`${require(`@site/static/assets/website/investors/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/investors/${item.srcref}@3x.webp`).default} 3x`}
                        alt={`${item?.alt}`}
                      />
                      {item.title && 
                        <InvestorDetails>
                          <InvestorTitle>{item.title}</InvestorTitle>
                          {item.subtitle && 
                            <InvestorSubtitle>{item.subtitle}</InvestorSubtitle>
                          }
                        </InvestorDetails>
                      }
                    </InvestorCard>
                    </SplideSlide>
                  );
                })}
              </NewMarqueeAnimation>
            </MarqueeAnimationContainer>

          </Content>
        </BackedBySection>
        
        {/* MEDIA COVERAGE SECTION */}
        <FeaturedInSection
          id="mediaFeaturedInSection"
          background={GLOBALS.COLORS.BG_DARK}
        >
          <Content
            className="contentBox"
            padding="40px"
            alignSelf="flex-start"
            id="MediaFeaturedIn"
          >

            <ItemH justifyContent="flex-start">
              <ItemH justifyContent="flex-start" alignItems="flex-start">
                <H2
                  color="#FFFFFF"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  {t("home.featured-section.title")}
                </H2>
              </ItemH>
            </ItemH>
          </Content>

          <FeaturedCardList
            className="featuredInMarquee"
          >
            <MarqueeAnimation speed={MARQUEE_ANIMATION_SPEED * 1.15} gradient={false}>
              {MediaList.map((item) => {
                return (
                  <FeaturedCard key={item.srcref}>
                    <FeaturedCardTitle>
                      {t(item.translatedtitle)}
                    </FeaturedCardTitle>
                    <ArticleSource>
                      <Image
                        width={item.title ? '64px' : 'auto'}
                        borderRadius={item.title ? '50%' : '0'}
                        src={require(`@site/static/assets/website/coverage/${item.srcref}.webp`).default}
                        srcSet={`${require(`@site/static/assets/website/coverage/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/coverage/${item.srcref}@3x.webp`).default} 3x`}
                        alt={`${item?.alt}`}
                        loading="lazy"
                      />
                      <A
                        href={item.url}
                        title={t(item.urltranslatedtitle)}
                        display="flex"
                        alignItems="center"
                        target="_blank"
                        background="transparent"
                        hoverBackground="transparent"
                        hover="transparent"
                        filter="none"
                        color="#DD44B9"
                        borderRadius="16px"
                        fontSize="18px"
                        fontWeight="500"
                        letterSpacing="-0.03em"
                        lineHeight="142%"
                        padding="0"
                      >
                        {t(item.urltranslatedtitle)}
                        <BsArrowUpRight className="anchorSVGlink" />
                      </A>
                    </ArticleSource>
                  </FeaturedCard>
                );
              })}
            </MarqueeAnimation>
          </FeaturedCardList>

        </FeaturedInSection>
        
      </HomeWrapper>
      </Layout>
  );
}

const HeroSection = styled(Section)`
  overflow: visible;

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

const HeroPrimary = styled(ItemH)`
  
`;

const HeroItem = styled(ItemV)`
  z-index: 2;

  @media ${device.laptop} {
    max-width: initial;
    align-items: center;
    margin: 0 15%;
  }

  @media ${device.mobileL} {
    margin: 0 auto;
  }
`;

const HeroButton = styled(Button)`
  font-family: FK Grotesk Neue;
  display: flex;
  flex-direction: row;
  align-items: center;  
  justify-content: space-between;
  padding: 12px 16px;
  gap: 8px;
  // margin: 24px 0px;

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    border: 1px solid transparent;
  }
  
  h2 {
    color: #fff;
    font-size: 13px;
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
  letter-spacing: -0.03em;
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
    transform: translate(-50%,-50%);
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
    background: linear-gradient(90deg, rgba(202, 55, 237, 0) 18%, #CA37ED 50%, rgba(202, 55, 237, 0) 82%);
  }
  
  @media ${device.laptop} {
    margin: 40px 0 40px 0;
    flex: initial;
    position: relative;
    bottom: auto;
  }
`;

const MemberImage = styled(ImageHolder)``;

const Gradient = styled.div`
    // background: linear-gradient(90deg, rgba(202, 55, 237, 0.00) 17.99%, #CA37ED 50.08%, rgba(202, 55, 237, 0.00) 79.26%);
    // width: 100%;
    // height: 200px;
`;

/**
 * Responsive Styled Components for Shared Styling
 */

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const HomeWrapper = styled(ItemV)`
  background: #0D0D0F;
  margin: 0;
  padding: 0;
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

/**
 * Home Page Sections
 */

const ShowcaseSection = styled(Section)`
  width: 100%;
  overflow: hidden;
  padding-bottom: 0px;
`;

const NotificationSection = styled(Section)`
  width: 100%;
  overflow: hidden;
  padding-bottom: 0px;

  .contentBox {
    padding: 200px 40px 0px 40px;

    @media ${device.laptop} {
      padding: 200px 32px 0px 32px;
    }

    @media ${device.tablet} {
      padding: 200px 24px 0px 24px;
    }

    @media ${device.mobileL} {
      padding: 200px 16px 0px 16px;
    }
  }
`;

const ChatSection = styled(Section)`
  width: 100%;
  overflow: hidden;
  padding-bottom: 0px;

  .contentBox {
    padding: 200px 40px 0px 40px;

    @media ${device.laptop} {
      padding: 200px 32px 0px 32px;
    }

    @media ${device.tablet} {
      padding: 200px 24px 0px 24px;
    }

    @media ${device.mobileL} {
      padding: 200px 16px 0px 16px;
    }
  }
`;

const SlideSection = styled(Section)`
  width: 100%;
  overflow: hidden;
  padding-bottom: 0px;

  .contentBox {
    padding: 200px 40px 0px 40px;

    @media ${device.laptop} {
      padding: 200px 32px 0px 32px;
    }

    @media ${device.tablet} {
      padding: 200px 24px 0px 24px;
    }

    @media ${device.mobileL} {
      padding: 200px 16px 0px 16px;
    }
  }
`;

const SlideItem = styled(ItemH)`
   padding: 48px;
   width: 100%;
   border-radius: 32px;
   border: 1px solid rgba(255, 255, 255, 0.10);
   backdrop-filter: blur(60px);
   max-height: 750px;
   min-height: 750px;

   @media ${device.laptop} {
     min-height: auto;
     max-height: auto;
   }

   img {
    margin: 0;
    padding: 0;
    display: block;
   }

   @media ${device.tablet} {
    padding: 32px;
  }
`;

const BuildWithPushSection = styled(Section)`
  overflow: hidden;
  padding: 0px 160px 0px;
  width: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    padding: 0px 0px 10px 0px;
  }

  @media ${device.laptopL} {
    padding: 0px 20px 40px;
  }

`;

const ItemImage = styled(ItemV)`
  width: 100%;
  @media ${device.tablet} {
    width: 400px;
    margin: 0 auto;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const FeaturedInSection = styled(Section)`
  padding: 0;
  min-height: auto;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  & .contentBox {
    gap: 80px;
    flex: 0;
    padding-top: 0;
    margin-top: 60px;
    // margin-top: 160px;
  }
`;

const PushWorksRow = styled(ItemH)`
  // column-gap: 105px;
  column-gap: 40px;
  margin-top: 150px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: row;

  @media ${device.laptop} {
    & ${ItemV} {
      align-items: flex-start;

      & ${Span} {
        margin: 10px 0px 0px 0px;
      }

      & ${A} {
        margin: 50px 0px 0px 0px;
      }
    }
  }
  
  @media ${device.tablet} {
    flex-direction: column;
    row-gap: 30px;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media ${device.mobileL} {
    row-gap: 30px;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

const LiveNetworks = styled(ItemH)` 
  background: #ffffff;
  border: 1px solid #bac4d6;
  border-radius: 28px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  max-width: 550px;

  & .network {
    padding: 26px 16px;

    & svg {
      width: 106px;
      height: 26px;
    }
  }

  @media ${device.laptopL} {
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 18px;

    & .network {
      padding: 26px 16px;

      & svg {
        width: 106px;
        height: 26px;
      }
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 18px;
    max-width: initial;
    align-self: stretch;

    & .network {
      padding: 15px 10px;

      & svg {
        width: 79.5px;
        height: 19.5px;
      }
    }
  }
`;

const LiveNetworkCard = styled(ItemV)`
  flex: 1;
  border-right: 1px solid #bac4d6;
  
  &:last-child {
    border-right: 0px;
  }

  @media ${device.tablet} {
    border-right: 1px solid #bac4d6;
  
    &:last-child {
      border-right: 0px;
    }
  }
`;

const PushProductContent = styled.div`
	padding: ${(props) => props.padding || "40px 0px 0px"};

	&.contentBox {
    max-width: 1213px;
	}

  @media ${device.tablet} {
  	padding: ${(props) => props.padding || "40px 0px"};
  }
`;

const Partners = styled(ItemV)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;

  @media ${device.laptop} {
    flex-direction: column;
    gap: 30px;
  }
`;

const Matrix = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #000;
`;

const MatrixCell = styled.div`
  display: flex;
  padding: 42px 0 32px 32px;
  flex-direction: column;
  flex-basis: 33.33%;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  box-sizing: border-box;
  position: relative;
  color: #000;
  row-gap: 24px;

  justify-content: space-between;
  flex-direction: column;

  & .matrixFigure {
    display: flex;
    height: 72px;
    align-items: center;
  }

  &:nth-child(3) {
    border-right: 0;
  }

  &:nth-child(6) {
    border-right: 0;
  }

  &::before {
    position: absolute;
    z-index: 1;
    content: "";
    top: -1px;
    left: 0;
    height: 8px;
    width: 96px;
    background: #dd44b9;
  }

  @media ${device.tablet} {
    flex-basis: 50%;
    padding: 16px 12px;
    row-gap: 16px;

    &:nth-child(2) {
      border-right: 0;
    }

    &:nth-child(4) {
      border-right: 0;
    }

    &:nth-child(3) {
      border-right: 1px solid #000;
    }

    &:nth-child(6) {
      border-right: 0;
    }

    & span {
      font-size: 20px;
    }

    & .matrixFigure {
      margin-top: 8px;
    }
  }
`;

const WhyPushTextBox = styled(ItemH)`
  margin: 80px 160px;

  @media ${device.tablet} {
    margin: 50px 0;

    & span {
      text-align: center;
      font-size: 16px;
      line-height: 160%;
    }
  }
`;

const WhyPushAndBlogSection = styled(Section)`
  width: 100%;
  overflow: hidden;

  .contentBox {
    padding: 200px 40px 0px 40px;

    @media ${device.tablet} {
      padding: 200px 32px 0px 32px;
    }

    @media ${device.tablet} {
      padding: 200px 24px 0px 24px;
    }

    @media ${device.tablet} {
      padding: 200px 16px 0px 16px;
    }
  }
`;

const BackedBySection = styled(Section)`
  width: 100%;
  overflow: hidden;
`;

const InvestorHeader = styled(ResponsiveH2)`
  flex-direction: column;
  width: 60%;
  align-self: flex-start;
  margin-bottom: 40px;
  @media ${device.tablet} {
    width: auto;
  }
`;

const InvestorItem = styled(ItemV)`
  @media (max-width: 1300px) {
    padding: ${(props) =>
      props.padding || GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.TABLET}
  }

  @media ${device.tablet} {
    padding: ${(props) =>
      props.padding || GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE}
  }`;

const InvestorCard = styled(ItemV)`
    border: 1px solid rgb(204, 204, 204);
    border-radius: 74px;
    padding: 8px;
    min-width: 242px;
    min-height: 83px;
    max-height: 83px;
    // margin-right: 18px;
    flex: 0;

    // margin-bottom: auto;

`

const NewInvestorCard = styled.div`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 74px;
  padding: 8px;
  min-width: 242px;
  min-height: 83px;
  max-height: 83px;
  // margin-right: 18px;

  display: flex;
  flex-direction: ${(props) => props.flexDirection ? "row" : 'column'};
  align-items: center;
  justify-content: flex-start;
  background: red;
  margin-bottom: auto
`;

const NewInvestorIcon = styled(Image)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: auto auto;
  justify-content: flex-start;
  
`

const InvestorIcon = styled(Image)`
margin: auto auto;
  
`



const InvestorDetails = styled(ItemV)`
  align-self: stretch;
  flex: 1;
  margin-bottom: auto;

`

const InvestorTitle = styled(Span)`
  font-weight: 500;
  font-size: 22px;
  line-height: 142%;
  color: #09090b;
`

const InvestorSubtitle = styled(Span)`
  font-weight: 500;
  font-size: 9px;
  line-height: 160%;
  letter-spacing: 0.11em;
  color: #303c5e;
  text-transform: uppercase;
`

const FeaturedCardList = styled(ItemH)`
  margin: 0 0 0 0;
  flex-flow: nowrap;
`
const FeaturedCard = styled(ItemV)`    
  width: 554px;
  padding: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;
  border-right: 1px solid #fff;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  & a {
    border-radius: 0px;
  }

  &:before {
    position: absolute;
    z-index: 1;
    content: "";
    top: -1px;
    left: 0px;
    height: 8px;
    width: 96px;
    background: rgb(221, 68, 185);
  }

  &:hover {
    background: linear-gradient(251.72deg, rgb(221, 68, 185) 14.29%, rgb(139, 111, 217) 86.35%);

    &:before {
      background: #fff;
    }

    & a {
      color: #fff !important;
      border-radius: 0px;
    }
  }
`

const FeaturedCardTitle = styled(Span)`
  flex: initial;
  align-self: auto;
  color: rgb(255, 255, 255);
  background: transparent;
  font-weight: 400;
  font-size: 22px;
  text-transform: inherit;
  margin: 0px;
  padding: 0px;
  letter-spacing: -0.03em;
  text-align: initial;
  line-height: 142%;
  position: initial;
  inset: auto;
  z-index: auto;
  padding-bottom: 50px;
`

const ArticleSource = styled(ItemH)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex: 0;

  & img {
    height: 40px;
  }
`;

const NotificationGridItem = styled.div`
    display: flex;
    flex-direction: column;

    max-width: ${(props) => props.maxWidth || "100%"};
    min-width: ${(props) => props.maxWidth || "100%"};
    gap: 24px;

    &:nth-child(2) {
      flex-wrap: wrap;
      flex-direction: row;
      flex-grow: 1;
      flex-shrink: 1;
  }


    @media ${device.laptopM} {
        max-width: ${(props) => props.main && '100%'};
        min-width: ${(props) => props.lastRow ? "100%" : '0'};
        flex-grow: ${(props) => props.main ? "1" : '0'};
        flex-direction: ${(props) => props.lastRow ? "row" : 'column'};

        & .anti-spam {
            max-width: 255px !important;
        }

        .receive, .increase {
            flex: 1 0 calc((100% - 303px)/2) !important; 
            min-height: 321px;
        }

        &:nth-child(1) {
            max-width: 255px !important;
        }

        &:nth-child(2) {
            flex: 1 1 10%;
        }

    }

    @media ${device.tablet} {
        &:nth-child(1) {
            max-width: 215px !important;
        }

        .anti-spam {
            max-width: 215px !important;
        }
    }

    @media ${device.mobileL} {
        max-width: 100% !important;
        min-width: 100% !important;
        flex-direction: column;


        .anti-spam {
            max-width: 100% !important;
            min-width: 100% !important;
        }

    }
`;

const NotificationGridSystem = styled.div`
    font-family: FK Grotesk Neue;
    width: 1200px;
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;

    @media ${device.laptopM} {
        width: 100%;

    }

    @media ${device.mobileL} {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

const ChatGridItem = styled.div`
    display: flex;
    flex-direction: column;

    max-width: ${(props) => props.maxWidth || "100%"};
    min-width: ${(props) => props.maxWidth || "100%"};
    gap: 24px;

    &:nth-child(2) {
        flex-wrap: wrap;
        flex-direction: row;
        flex-grow: 1;
        flex-shrink: 1;
    }


    .hyperscalable {
      flex: 1 0 calc(50% - 12px);
    }

    .plug-play {
      flex: 1 0 calc(50% - 12px);
    }

    @media ${device.laptopM} {
        // max-width: 100%;
        max-width: ${(props) => props.main && '100%'};
        min-width: ${(props) => props.lastRow ? "100%" : '0'};
        flex-grow: ${(props) => props.main ? "1" : '0'};

        flex-direction: ${(props) => props.lastRow ? "row" : 'column'};

        &:nth-child(1) {
            max-width: 255px !important;
        }

        &:nth-child(2) {
            flex: 1 1 10%;
        }
       
        &:nth-child(3) {
            display: grid;
            grid-template-columns: 255px 1fr 1fr;
            grid-auto-flow: column;
        }
        
        .chain-agnostic {
            grid-column: 1;
        }
        
        
        .token-gated {
            grid-column: 2;
            grid-row: span 3 / span 3;
        }
        
        .e2e {
            grid-column: 3;
            grid-row: 1;
        }
        
        .web3-standard {
            grid-column: 3;
            grid-row: 2;
        }
        

    }

    @media ${device.tablet} {
        &:nth-child(1) {
            max-width: 215px !important;
        }

        &:nth-child(3) {
          display: grid;
          grid-template-columns: 215px 1fr 1fr;
          grid-auto-flow: column;
      }

    }

    @media ${device.mobileL} {
        max-width: 100% !important;
        min-width: 100% !important;

        &:nth-child(3) {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));

      } 

      .hyperscalable {
        flex: 1 0 100%;
      }
  
      .plug-play {
        flex: 1 1 0;
      }

      .chain-agnostic {
          grid-column: 1;
      }
      
      
      .token-gated {
        grid-column: 1;
      }
      
      .e2e {
        grid-column: 1;
      }
      
      .web3-standard {
        grid-column: 1;
      }
    
    }
`;

const ChatGridSystem = styled.div`
    font-family: FK Grotesk Neue;
    width: 1200px;
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
    // margin: 20em 0;

    @media ${device.laptopM} {
        width: 100%;

    }

    @media ${device.mobileL} {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

const TagItem = styled.b`
    width: fit-content;
    border-radius: 12px;
    border: 1px solid #D98AEC;
    background: transparent;
    padding: 4px 8px;
    color: #D98AEC;
    // text-align: center;
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

const GridMarquee = styled(NewMarqueeAnimation)`
  // margin: 0 0 0 0;
  // flex-flow: nowrap;

  // background-color: red !important;
  // background: linear-gradient(90deg, #0D0D0F 0%, #0D0D0F 6%, rgba(13, 13, 15, 0.00) 32%, rgba(13, 13, 15, 0.00) 69%, #0D0D0F 94.5%, #0D0D0F 100%) !important;
`;

const GridItem = styled(ItemH)`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: center;

  h2 { 
    color: #707187;
    font-size: 30px;
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

const TextSpan = styled(Span)`
  overflow: hidden;
`;


const SlideLink = styled(A)`
.anchorSVGlink {
  color: #fff;
}

&:hover {

  .anchorSVGlink {
    color: #D98AEC;
  }
}
  @media ${device.tablet} {
    font-size: 18px;
    font-weight: 400;
  }
`;

const SpanLink = styled(Span)`
  position: relative;
  text-decoration: none;

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

const MarqueeAnimationContainer = styled(ItemV)`
`

const GridAnimationContainer = styled(ItemV)`
`

