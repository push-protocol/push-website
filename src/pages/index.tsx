// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React, { useEffect, useLayoutEffect, useState } from "react";

// External Components
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { BsArrowUpRight, BsFileX } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

// Internal Components
import AnalyticsStats from "@site/src/components/AnalyticsStats";
import Blogs from "@site/src/components/Blogs";
import FadeInAnimation from "@site/src/components/FadeInAnimation";
import HybridSection from "@site/src/components/HybridSection";
import ImageHolder from "@site/src/components/ImageHolder";
import MarqueeAnimation from "@site/src/components/MarqueeAnimation";
import PageWrapper from "@site/src/components/PageWrapper";
import PartnerChannels from "@site/src/components/PartnerChannels";
import PushProductsScroll from "@site/src/components/PushProductsScroll";
import {
  Atag,
  ContentV2,
  H1V2,
  H2V2,
  ImageV2,
  ItemHV2,
  ItemVV2,
  SectionV2,
  SpanV2
} from "@site/src/components/SharedStylingV2";
import SignupInput from "@site/src/components/SignupInput";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

// Import Assets
import BNBChainSVG from "@site/static/assets/BNBChain.svg";
import DiscordSVG from "@site/static/assets/discord.svg";
import EthLogoTextSVG from "@site/static/assets/ethereum-logo-landscape.svg";
import CensorshipresistantFigure from "@site/static/assets/figures/censorshipresistant.svg";
import ChainAgnosticFigure from "@site/static/assets/figures/chainagnostic.svg";
import DecentralizedstackFigure from "@site/static/assets/figures/decentralizedstack.svg";
import GrowWithPushFigure from "@site/static/assets/figures/growwithpush.webp";
import ImmediatecommunicationFigure from "@site/static/assets/figures/immediatecommunication.svg";
import ImproveduxFigure from "@site/static/assets/figures/improvedux.svg";
import PushMissingPieceFigure from "@site/static/assets/figures/pushmissingtest.webp";
import SecurityalertsFigure from "@site/static/assets/figures/securityalerts.svg";
import GithubSVG from "@site/static/assets/github.svg";
import PolygonLogoTextSVG from "@site/static/assets/polygon_logo_text_black.svg";
import TwitterSVG from "@site/static/assets/twitter.svg";
import BeInCryptoSVG from "@site/static/assets/website/coverage/raw/BeInCryptoLogo.svg";
import BalajiTweethandleBlackSVG from "@site/static/assets/website/coverage/raw/balajitweethandle.svg";
import CoindeskBlackSVG from "@site/static/assets/website/coverage/raw/coindesk_black.svg";
import DefiPrimeBlackSVG from "@site/static/assets/website/coverage/raw/defiprime.svg";
import EthFoundationBlackSVG from "@site/static/assets/website/coverage/raw/eth_foundation_black.svg";

// Internal Configs
import TeamList from "@site/src/components/config/teamList";
import { InvList } from "@site/src/config/HomeInvestorList";
import { MediaList } from "@site/src/config/HomeMediaList";
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from "@site/src/config/pageMeta";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Setup some constants
const MARQUEE_ANIMATION_SPEED = 60;

export default function Home(): JSX.Element {
  // Internationalization
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery(device.laptop);
  const isLargeScreen = useMediaQuery("(max-width: 1250px)");

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
        trigger: "#newone",
        start: "center top",
        end: "+=500",
        scrub: true,
        markers: false,
      },
      scale: 0.985,
      borderRadius: GLOBALS.ADJUSTMENTS.RADIUS.LARGE,
    });
  }, []);

  const [showMoreTeamMembers, setShowMoreTeamMembers] = useState(false);

  const onClickViewMoreTeamMembers = (e) => {
    e.preventDefault();
    setShowMoreTeamMembers(!showMoreTeamMembers);
  };

  return (
    <Layout title={PageMeta.HOME.pageTitle} description={PageMeta.HOME.pageDescription}>
      {/* <Head>
        <meta property="og:image" content="image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://example.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Meta Open Source',
            url: 'https://opensource.fb.com/',
            logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
          })}
        </script>
      </Head> */}
      
      <HomeWrapper>
        {/* HERO SECTION */}
        <SectionV2
          id="hero"
          minHeight={`calc(100vh + ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE})`}
          background={GLOBALS.COLORS.BG_LIGHT}
          width="100%"
          overflow="hidden"
          className="darkBackground"
        >
          <ItemVV2
            // id="herobg"
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            background={GLOBALS.COLORS.BG_DARK}
            borderRadius={`0 0 ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}`}
          />

          <ContentV2 alignSelf="center">
            {
              // rendering the main animation only on large laptops and desktops
              !isMobile && (
                <HeroAnimation>
                  <Spline scene="https://prod.spline.design/vhrszmXNdAbcAHQW/scene.splinecode" />
                </HeroAnimation>
              )
            }
            <HeroPrimary flex="initial" justifyContent="flex-start">
              <HeroItem
                maxWidth="50%"
                alignItems="flex-start"
                MarginTop={"100px"}
              >
                <FadeInAnimation wrapperElement="div" delay={0.25}>
                  <H1V2 zIndex="2">{t("home.hero.title")}</H1V2>
                </FadeInAnimation>

                <SpanV2
                  margin={`${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0px ${GLOBALS.ADJUSTMENTS.PADDING.BIG} 0`}
                  color="rgba(255, 255, 255, 1)"
                  zIndex="2"
                >
                  <FadeInAnimation wrapperElement="div" delay={0.35}>
                    {t("home.hero.description")}
                  </FadeInAnimation>
                </SpanV2>

                <FadeInAnimation wrapperElement="div" delay={0.55}>
                  <HeroCTA justifyContent="flex-start" gap="18px">
                    <Atag
                      href="/docs"
                      title={t("home.hero.alt-start-button")}
                      background={GLOBALS.COLORS.HIGHLIGHT}
                      color={GLOBALS.COLORS.FONT_LIGHT}
                      lineHeight="26px"
                      zIndex="2"
                    >
                      {t("home.hero.start-button")}
                    </Atag>
                    <Atag
                      href="https://app.push.org/"
                      title={t("home.hero.alt-explore-button")}
                      target="_blank"
                      background={GLOBALS.COLORS.BG_DARK_SECONDARY}
                      lineHeight="26px"
                      zIndex="2"
                    >
                      {t("home.hero.explore-button")}
                    </Atag>
                  </HeroCTA>
                </FadeInAnimation>

                <FadeInAnimation wrapperElement="div" delay={0.65}>
                  <ItemHV2
                    justifyContent="flex-start"
                    margin={`${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0px ${GLOBALS.ADJUSTMENTS.PADDING.BIG} 0`}
                  >
                    <Atag
                      href="https://twitter.com/pushprotocol"
                      title="Push Protocol Twitter"
                      target="_blank"
                      margin="0 0 0 -10px"
                      background="transparent"
                      padding="10px 15px"
                    >
                      <TwitterSVG width={32} height={32} />
                    </Atag>

                    <Atag
                      href="https://github.com/ethereum-push-notification-service"
                      title="Push Github"
                      target="_blank"
                      background="transparent"
                      padding="10px 15px"
                    >
                      <GithubSVG width={32} height={32} />
                    </Atag>

                    <Atag
                      href="https://discord.gg/pushprotocol"
                      title="Push Discord"
                      target="_blank"
                      background="transparent"
                      padding="10px 15px"
                    >
                      <DiscordSVG width={32} height={32} />
                    </Atag>
                  </ItemHV2>
                </FadeInAnimation>  
              </HeroItem>
            </HeroPrimary>

            <AnalyticsStatsContainer
              position="absolute"
              zIndex="9"
              left="0"
              right="0"
              bottom="7vh"
            >
              <AnalyticsStats />
            </AnalyticsStatsContainer>
          </ContentV2>
        </SectionV2>

        {/* MISSING PIECE OF WEB3 */}
        <StorySection id="story" data-bkg="light" className="lightBackground">
          <ContentV2
            className="contentBox"
            alignSelf="center"
            padding="40px 0px"
          >
            <PartnerChannels />

            <Partners margin="40px 0" gap={isMobile ? "30px" : "50px"}>
              <ItemVV2>
                <SpanV2
                  fontWeight="400"
                  color="#303C5E"
                  fontSize="19px"
                  lineHeight="160%"
                  letterSpacing="-0.03em"
                >
                  {t("home.partners-section.networks")}{" "}
                </SpanV2>
              </ItemVV2>

              <LiveNetworks>
                <LiveNetworkCard className="network">
                  <EthLogoTextSVG
                    alt="Logo for Ethereum"
                    title="Ethereum Logo"
                  />
                </LiveNetworkCard>

                <LiveNetworkCard className="network">
                  <PolygonLogoTextSVG
                    alt="Logo for Polygon"
                    title="Polygon Logo"
                  />
                </LiveNetworkCard>

                <LiveNetworkCard className="network">
                  <BNBChainSVG
                    alt="Logo for BNB Chain"
                    title="BNB Chain Logo"
                  />
                </LiveNetworkCard>
              </LiveNetworks>
            </Partners>

            <PushWorksRow>
              <ItemImage justifyContent="center">
                <MemberImage
                  className="pushMissingSvg"
                  src={PushMissingPieceFigure}
                  srcSet={PushMissingPieceFigure}
                  alt={t("home.partners-section.alt-missing-web3-image")}
                  title={t("home.partners-section.title-missing-web3-image")}
                  style={{ margin: "0 auto" }}
                  // width="100%"
                  // height="100%"
                />
              </ItemImage>

              <ItemVV2
                justifyContent="space-around"
                minHeight="530px"
                // alignSelf='center'
                alignItems={isMobile ? "center" : "flex-start"}
                // flex="2"
                // gap='22px'
              >
                <ResponsiveH2
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                >
                  {t("home.partners-section.missing-web3-title")}
                </ResponsiveH2>

                <SpanV2
                  fontWeight="400"
                  color="#303C5E"
                  fontSize="19px"
                  lineHeight="160%"
                  letterSpacing="-0.03em"
                  margin={isMobile && "10px 0px 0px 0px"}
                >
                  {t("home.partners-section.missing-web3-text")}
                </SpanV2>

                <SpanV2
                  fontWeight="500"
                  color="#121315"
                  fontSize="22px"
                  lineHeight="142%"
                  letterSpacing="-0.03em"
                  margin={isMobile && "10px 0px 0px 0px"}
                >
                  {t("home.partners-section.missing-web3-span")}
                </SpanV2>

                <Atag
                  href="https://docs.push.org/developers"
                  title={t("home.partners-section.missing-web3-alt-button")}
                  target="_blank"
                  background="#DD44B9"
                  borderRadius="16px"
                  padding="14px 32px"
                  fontSize="18px"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  lineHeight="26px"
                  alignSelf="center"
                  margin={isMobile ? "50px 0px 0px 0px" : ""}
                >
                  {/* Learn about $PUSH */}
                  {t("home.partners-section.missing-web3-button")}
                  <BsArrowUpRight className="anchorSVGlink" />
                </Atag>
              </ItemVV2>
            </PushWorksRow>
          </ContentV2>
        </StorySection>
        
        {/* BUILD WITH PUSH */}
        <BuildWithPushSection
          curve="both"
          id="buildWithPush"
          data-bkg="dark"
          className="darkBackground"
        >
          <BodyContent className="contentBox">
              <SignupBox margin="0 0 0px 0">
                <ItemVV2 justifyContent="flex-start" gap="12px">
                  <ResponsiveH2
                    color="#09090B"
                    fontSize="40px"
                    fontWeight="700"
                    letterSpacing="-0.02em"
                    lineHeight="110%"
                    margin="0"
                  >
                    {t("home.email-section.title")}
                  </ResponsiveH2>
                  <SpanV2
                    color="#303C5E"
                    fontSize="20px"
                    fontWeight="400"
                    letterSpacing="-0.03em"
                    lineHeight="138.5%"
                  >
                    {t("home.email-section.text")}
                  </SpanV2>
                </ItemVV2>

                <ItemVV2>
                  <SignupInput />
                </ItemVV2>
              </SignupBox>
            <PushProductsScroll />
          </BodyContent>
        </BuildWithPushSection>
        
        {/* SECTION THAT SHRINKS WHEN REACHING END */}
        <ShrinkingSection
          curve="bottom"
          data-bkg="dark"
          className="darkBackground"
        >
          <ItemVV2
            id="integratePush"
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            background={GLOBALS.COLORS.BG_LIGHT}
            borderRadius={`0 0 ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}`}
          />

          <ContentV2
            className="contentBox"
            alignSelf="center"
            padding="40px 0px"
          >
            {/* GROW WITH PUSH */}
            <IntegrateGrowWithPushRow gap="18px">
              <ImageV2
                className="figureSvg"
                src={require(`@site/static/assets/figures/growwithpush.webp`).default}
                srcSet={`${require(`@site/static/assets/figures/growwithpush.webp`).default} 2x, ${require(`@site/static/assets/figures/growwithpush.webp`).default} 3x`}
                srcSet={GrowWithPushFigure}
                alt={t("home.grow-section.image-alt")}
                title={t("home.grow-section.image-title")}
                width="100%"
                height="100%"
              />

              <ResponsiveH2
                color="#121315"
                fontSize="40px"
                fontWeight="700"
                letterSpacing="-0.02em"
                lineHeight="110%"
                margin="-32px 0 0 0"
              >
                {t("home.grow-section.title")}
              </ResponsiveH2>

              <SpanV2
                className="growWithPushtext"
                color="#303C5E"
                fontSize="19px"
                fontWeight="400"
                letterSpacing="-0.03em"
                lineHeight="160%"
              >
                {t("home.grow-section.text")}
              </SpanV2>
            </IntegrateGrowWithPushRow>
            
            {/* INTEGRATE AND EARN */}
            <ItemHV2 margin="120px 0 0 0">
              <IntegrateAndEarn>
                <ResponsiveH2
                  color="#09090B"
                  fontSize="36px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  {t("home.grow-section.wallet-text.part1")} <br></br>{" "}
                  {t("home.grow-section.wallet-text.part2")}
                </ResponsiveH2>

                <Atag
                  href="/docs"
                  title={t("home.grow-section.button-alt")}
                  background="#DD44B9"
                  borderRadius="16px"
                  padding="10px 15px"
                  fontSize="18px"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  lineHeight="26px"
                  alignSelf="center"
                >
                  {t("home.grow-section.button")}
                </Atag>
              </IntegrateAndEarn>
            </ItemHV2>

            {/* WHY YOU NEED PUSH PUSH */}
            <ItemHV2 margin="80px 0 0 0">
              <ItemVV2 justifyContent="flex-start" alignItems="flex-start">
                <ResponsiveH2
                  color="#09090B"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  {t("home.why-push-section.title")}
                </ResponsiveH2>
              </ItemVV2>
            </ItemHV2>

            {/* WHY YOU NEED PUSH PUSH */}
            <ItemHV2 padding="80px 0 0 0">
              <Matrix>
                <MatrixCell>
                  <div className="matrixFigure">
                    <ChainAgnosticFigure
                      alt="Icon showing Push is chain agnostic"
                      title={t("home.why-push-section.chain-agnostic-text")}
                    />
                  </div>

                  <SpanV2
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.chain-agnostic-text")}
                  </SpanV2>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <ImmediatecommunicationFigure
                      alt="Icon showing Immediate Communication"
                      title={t(
                        "home.why-push-section.immediate-communication-text"
                      )}
                    />
                  </div>

                  <SpanV2
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.immediate-communication-text")}
                  </SpanV2>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <DecentralizedstackFigure
                      alt="Icon showing decentralization"
                      title={t(
                        "home.why-push-section.decentralized-stack-text"
                      )}
                    />
                  </div>

                  <SpanV2
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.decentralized-stack-text")}
                  </SpanV2>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <ImproveduxFigure
                      alt="Icon showing User Experience"
                      title={t("home.why-push-section.improved-ux-text")}
                    />
                  </div>

                  <SpanV2
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.improved-ux-text")}
                  </SpanV2>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <SecurityalertsFigure
                      alt="Icon showing Security"
                      title={t("home.why-push-section.security-alerts-text")}
                    />
                  </div>

                  <SpanV2
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.security-alerts-text")}
                  </SpanV2>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <CensorshipresistantFigure
                      alt="Icon showing Censorship Resistance"
                      title={t(
                        "home.why-push-section.censorship-resistant-text"
                      )}
                    />
                  </div>

                  <SpanV2
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.censorship-resistant-text")}
                  </SpanV2>
                </MatrixCell>
              </Matrix>
            </ItemHV2>

            {/* WHY YOU NEED PUSH PUSH */}
            <WhyPushTextBox textAlign="center" margin="80px 160px">
              <SpanV2
                color="#303C5E"
                fontSize="19px"
                fontWeight="400"
                letterSpacing="-0.03em"
                lineHeight="142%"
              >
                {t("home.why-push-section.text")}
              </SpanV2>
            </WhyPushTextBox>

            {/* BLOG SECTION */}
            <ItemHV2 margin="80px 0 0 0">
              <ItemVV2 justifyContent="flex-start" alignItems="flex-start">
                <ResponsiveH2
                  color="#09090B"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                  width="50%"
                >
                  {t("home.insights-section.title")}
                </ResponsiveH2>
              </ItemVV2>

              <ItemHV2 justifyContent="flex-end">
                <Atag
                  href="https://push-protocol.medium.com/"
                  title="Exlore all articles"
                  target="_blank"
                  hoverBackground="transparent"
                  hover="transparent"
                  background="transparent"
                  filter="none"
                  color="#DD44B9"
                  borderRadius="16px"
                  padding="14px 32px"
                  fontSize="18px"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  lineHeight="142%"
                >
                  {t("home.insights-section.link-text")}
                  <BsArrowUpRight className="anchorSVGlink" />
                </Atag>
              </ItemHV2>
            </ItemHV2>

            <Blogs count={4} />

            {/* BACKED BY SECTION */}
            <SectionV2 flexDirection="column" margin="80px 0 80px 0">
              <ContentV2 padding="0px">

                <ItemVV2
                  alignItems="stretch"
                >
                  <InvestorHeader
                      color="#09090B"
                      fontSize="40px"
                      fontWeight="700"
                      letterSpacing="-0.02em"
                      lineHeight="110%"
                      margin="0"
                    >
                      {t("home.investors-section.title")}
                  </InvestorHeader>
                </ItemVV2>
                <ItemVV2
                  margin="80px 0 0 0"
                  flex="1"
                  alignItems="stretch"
                >
                  <MarqueeAnimation
                    speed={MARQUEE_ANIMATION_SPEED}
                    gradientWidth={8}
                    gap={18}
                  >
                    {InvList.top.map((item) => {
                      return (
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
                      );
                    })}
                  </MarqueeAnimation>
                </ItemVV2>
                <ItemVV2
                  margin="120px 0 0 0"
                  flex="1"
                  alignItems="stretch"
                >
                  <MarqueeAnimation
                    speed={MARQUEE_ANIMATION_SPEED}
                    gradientWidth={8}
                    gap={18}
                    direction="right"
                  >
                    {InvList.bottom.map((item) => {
                      return (
                        <InvestorCard 
                          key={item.id}
                          flexDirection={item.title ? 'row' : 'column'}
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
                      );
                    })}
                  </MarqueeAnimation>
                </ItemVV2>

              </ContentV2>
            </SectionV2>
          </ContentV2>
        </ShrinkingSection>
        
        {/* MEDIA COVERAGE SECTION */}
        <FeaturedInSection
          id="featuredIn"
          data-bkg="dark"
          className="darkBackground"
        >
          <ContentV2
            className="contentBox"
            padding="40px"
            alignSelf="flex-start"
          >

            <ItemHV2 justifyContent="flex-start">
              <ItemHV2 justifyContent="flex-start" alignItems="flex-start">
                <H2V2
                  color="#FFFFFF"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  {t("home.featured-section.title")}
                </H2V2>
              </ItemHV2>
            </ItemHV2>
          </ContentV2>

          <FeaturedCardList
            className="featuredInMarquee"
            id="newone"
          >
            <MarqueeAnimation speed={MARQUEE_ANIMATION_SPEED * 1.15} gradient={false}>
              {MediaList.map((item) => {
                return (
                  <FeaturedCard key={item.srcref}>
                    <FeaturedCardTitle>
                      {t(item.translatedtitle)}
                    </FeaturedCardTitle>
                    <ArticleSource>
                      <ImageV2
                        width={item.title ? '64px' : 'auto'}
                        borderRadius={item.title ? '50%' : '0'}
                        src={require(`@site/static/assets/website/coverage/${item.srcref}.webp`).default}
                        srcSet={`${require(`@site/static/assets/website/coverage/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/coverage/${item.srcref}@3x.webp`).default} 3x`}
                        alt={`${item?.alt}`}
                      />
                      <Atag
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
                      </Atag>
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

/**
 * V2 Design
 */
const HeroPrimary = styled(ItemHV2)`
  margin: 120px 0;

  @media ${device.laptop} {
    margin: 80px 0;
  }

  @media ${device.mobileM} {
    margin: 80px 0;
  }
`;

const MemberImage = styled(ImageHolder)``;

const HeroAnimation = styled(ItemHV2)`
  position: absolute;
  top: 0;
  left: 380px;
  right: auto;
  bottom: 150px;
  width: 100%;
  z-index: 1;
`;

const HeroItem = styled(ItemVV2)`
  z-index: 2;
  @media ${device.laptop} {
    max-width: initial;
    margin-top: ${(props) => props.MarginTop || "0px"};
  }

  @media ${device.mobileM} {
    max-width: initial;
  }
`;

const HeroCTA = styled(ItemHV2)`
  @media ${device.mobileM} {
    &.Button {
      display: none;
    }
  }
`;

const AnalyticsStatsContainer = styled(ItemHV2)`
  @media ${device.laptop} {
    flex: initial;
    position: relative;
    bottom: auto;
    margin: 30px;
  }
`;

/**
 * Responsive Styled Components for Shared Styling
 */

const ResponsiveSection = styled(HybridSection)`
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
  @media (max-width: 380px) {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
`;

const ResponsiveH2 = styled(H2V2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const HomeWrapper = styled.main`
  margin: 0;
  padding: 0;
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

const HeroSection = styled(ResponsiveSection)`
  padding: 0px 160px 0px 160px;
`;

const StorySection = styled(ResponsiveSection)`
  padding: 0px 160px 80px 160px;

  @media ${device.tablet} {
    padding-bottom: 32px;
  }
`;

const BuildWithPushSection = styled(ResponsiveSection)`
  overflow: hidden;
  padding: 0px 160px 80px 160px;
  border-radius: 48px;

  @media ${device.tablet} {
    padding: 0px 0px 10px 0px;
  }
`;

const ShrinkingSection = styled(ResponsiveSection)`
  padding: 80px 160px 180px 160px;
`;

const ItemImage = styled(ItemVV2)`
  width: 100%;
  @media ${device.tablet} {
    width: 400px;
    margin: 0 auto;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const FeaturedInSection = styled(ResponsiveSection)`
  padding: 0;
  min-height: auto;

  & .contentBox {
    gap: 80px;
    flex: 0;
    padding-top: 0;
    margin-top: 60px;
    // margin-top: 160px;
  }
`;

const FeaturedInMarquee = styled(ItemHV2)``;

const ResponsiveHeroContent = styled(ItemHV2)`
  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 240px;
  }
`;

const HeroBox = styled(ItemVV2)`
  flex: 0 0 52%;

  @media ${device.tablet} {
    flex: 1;

    & span {
      font-weight: 400;
      font-size: 18px;
    }
  }
`;

const PushWorksRow = styled(ItemHV2)`
  // column-gap: 105px;
  column-gap: 40px;
  margin-top: 150px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: row;

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

const PoweringCommunicationRow = styled(ItemHV2)`
  margin: 80px 0 50px 0;

  @media ${device.tablet} {
    margin-top: 80px;
  }
`;

const LiveNetworks = styled(ItemHV2)` 
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

const LiveNetworkCard = styled(ItemVV2)`
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

export const BodyContent = styled.div`
	// display: flex;
	// flex-direction: column;
	padding: ${(props) => props.padding || "40px 0px"};
	// position: relative;

	&.contentBox {
	// 	width: 100%;
  //   align-self: center;
    max-width: 1213px;
  //   flex: 1;
  //   display: flex;
	// }

  @media ${device.tablet} {
  	padding: ${(props) => props.padding || "10px 0px"};
  }
`;

const Partners = styled(ItemVV2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const SignupBox = styled(ItemHV2)`
  background: #b9abef;
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 72px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media ${device.tablet} {
    padding: 24px;
    flex-direction: column;
  }
`;

const GrowPushCard = styled(ItemVV2)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 32px;
  padding: 60px 80px;
  width: 45%;

  background: ${(props) => props.background || "#FFFBFB"};
  border-radius: 48px;

  & .figureSvg {
    width: 100%;
    height: 227px;

    @media ${device.tablet} {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    padding: 28px;
    border-radius: 36px;
  }
`;

const GrowPushCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const IntegrateGrowWithPushRow = styled(ItemHV2)`
  margin: 40px 0 0 0;
  padding: 0 160px 0 160px;

  & svg.figureSvg {
    width: 100%;
  }

  @media ${device.tablet} {
    padding-left: 30px;
    padding-right: 30px;
    margin: 0;

    & svg.figureSvg {
      height: 180px;
    }

    & .growWithPushtext {
      text-align: center;
    }
  }
`;

const IntegrateAndEarn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  text-align: center;
  background: rgba(235, 216, 249, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 32px;
  padding: 60px 300px;

  @media ${device.tablet} {
    padding: 32px 36px;
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

const WhyPushTextBox = styled(ItemHV2)`
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

const BuiltByIntro = styled(ItemHV2)`
  margin: 120px 160px;

  @media ${device.tablet} {
    margin: 40px 0;
  }
`;

const FeaturedCell = styled.div`
  width: 568px;
  height: 224px;

  padding: 48px 32px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;

  flex-basis: 100%;

  border: 1px solid #fff;
  border-left: 0;
  color: "#FFF";

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

  &:hover {
    background: linear-gradient(251.72deg, #dd44b9 14.29%, #8b6fd9 86.35%);

    &::before {
      background: #ffffff;
    }

    & a {
      color: #fff;
    }
  }
`;

const BuiltByCards = styled(ItemHV2)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 26px;

  transition: all 350ms linear;
`;

const TeamMemberButtons = styled(ItemHV2)`
  @media ${device.tablet} {
    & a {
      width: 100%;
    }
  }
`;

const InvestorHeader = styled(ResponsiveH2)`
  flex-direction: column;
  width: 60%;
  align-self: flex-start;

  @media ${device.tablet} {
    width: 100%;
    text-align: center;
  }
`;

const InvestorCard = styled(ItemVV2)`
    border: 1px solid rgb(204, 204, 204);
    border-radius: 74px;
    padding: 8px;
    min-width: 242px;
    min-height: 66px;
    margin-right: 18px;
    flex: 0;
`

const InvestorIcon = styled(ImageV2)`
  
`

const InvestorDetails = styled(ItemVV2)`
  align-self: stretch;
  flex: 1;
`

const InvestorTitle = styled(SpanV2)`
  font-weight: 500;
  font-size: 22px;
  line-height: 142%;
  color: #09090b;
`

const InvestorSubtitle = styled(SpanV2)`
  font-weight: 500;
  font-size: 9px;
  line-height: 160%;
  letter-spacing: 0.11em;
  color: #303c5e;
  text-transform: uppercase;
`

const FeaturedCardList = styled(ItemHV2)`
  margin: 0 0 320px 0;
  flex-flow: nowrap;
`
const FeaturedCard = styled(ItemVV2)`    
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

const FeaturedCardTitle = styled(SpanV2)`
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

const ArticleSource = styled(ItemHV2)`
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