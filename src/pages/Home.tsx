// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */

// React + Web3 Essentials
import React, { lazy ,useLayoutEffect, useState} from 'react';

// External Components
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

// Internal Components
import Spline from '@splinetool/react-spline';
import { BsArrowUpRight } from 'react-icons/bs';
import useMediaQuery from '../hooks/useMediaQuery';

// Internal Configs
import GLOBALS, { device } from '../config/globals';
import PageMeta from '../config/pageMeta';
import TeamList from '../config/teamList';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

import AnalyticsStats from '../components/AnalyticsStats';
import Blogs from '../components/Blogs';
import HybridSection from '../components/HybridSection';
import InvestorList from '../components/InvestorList';
import MarqueeAnimation from '../components/MarqueeAnimation';
import PageWrapper from '../components/PageWrapper';
import PartnerChannels from '../components/PartnerChannels';
import { Anchor, Content, H2, HeroHeader, ItemBreak, ItemH, ItemV, Section, Span } from '../components/SharedStyling';
import { Atag, ButtonV2, ContentV2, H1V2, H2V2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from '../components/SharedStylingV2';
import SignupInput from '../components/SignupInput';
import TeamMember from '../components/TeamMember';

import { ReactComponent as BalajiTweethandleBlackSVG } from '../assets/balajitweethandle.svg';
import { ReactComponent as CoindeskBlackSVG } from '../assets/coindesk_black.svg';
import { ReactComponent as DefiPrimeBlackSVG } from '../assets/defiprime.svg';
import { ReactComponent as DiscordSVG } from '../assets/discord.svg';
import { ReactComponent as EthLogoTextSVG } from '../assets/ethereum-logo-landscape.svg';
import { ReactComponent as EthFoundationBlackSVG } from '../assets/eth_foundation_black.svg';

import { ReactComponent as GithubSVG } from '../assets/github.svg';
import { ReactComponent as PolygonLogoTextSVG } from '../assets/polygon_logo_text_black.svg';
import { ReactComponent as TwitterSVG } from '../assets/twitter.svg';
import GrowWithPushFigure from '../assets/figures/growwithpush.webp';
import PushMissingPieceFigure from '../assets/figures/push-missingtest.webp';

import { ReactComponent as CensorshipresistantFigure } from '../assets/figures/censorshipresistant.svg';
import { ReactComponent as ChainAgnosticFigure } from '../assets/figures/chainagnostic.svg';
import { ReactComponent as DecentralizedstackFigure } from '../assets/figures/decentralizedstack.svg';
import { ReactComponent as ImmediatecommunicationFigure } from '../assets/figures/immediatecommunication.svg';
import { ReactComponent as ImproveduxFigure } from '../assets/figures/improvedux.svg';
import { ReactComponent as SecurityalertsFigure } from '../assets/figures/securityalerts.svg';
import HorizontalScroll from 'components/HorizontalScroll';
import ImageHolder from 'components/ImageHolder';
import FadeInAnimation from 'components/FadeInAnimation';
import { FiArrowUpRight } from 'react-icons/fi';

function Home({isAlertVisible}) {
  const isMobile = useMediaQuery(device.laptop);
  const isLargeScreen = useMediaQuery('(max-width: 1250px)');

  // Hero Shrink Animation
  useLayoutEffect(() => {
    gsap.to('#herobg', {
      scrollTrigger: {
        trigger: '#herobg',
        start: 'center center',
        end: 'bottom top',
        scrub: true,
        markers:false
      },
      scale: 0.985,
      borderRadius: GLOBALS.ADJUSTMENTS.RADIUS.LARGE,
    });

    gsap.to('#integratePush', {
      scrollTrigger: {
        trigger: '#newone',
        start: 'center top',
        end: '+=500',
        scrub: true,
        markers:false
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
    <PageWrapper
      pageName={PageMeta.HOME.pageName}
      pageTitle={PageMeta.HOME.pageTitle}
    >
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
            id="herobg"
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            background={GLOBALS.COLORS.BG_DARK}
            borderRadius={`0 0 ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}`}
          />

          <ContentV2>
            {
              // rendering the main animation only on large laptops and desktops
              !isMobile && (
                <HeroAnimation>
                  <Spline scene="https://prod.spline.design/BCzLnLkXXcDtLpMt/scene.splinecode" />
                </HeroAnimation>
              )
            }
            <HeroPrimary
              flex="initial"
              justifyContent="flex-start"
            >
              <HeroItem
                maxWidth="60%"
                alignItems="flex-start"
                MarginTop={isAlertVisible ? '100px' : '0px'}
              >
                <H1V2 zIndex="2">The Communication Protocol of Web3</H1V2>

                <SpanV2
                  margin={`${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0px ${GLOBALS.ADJUSTMENTS.PADDING.BIG} 0`}
                  color="rgba(255, 255, 255, 1)"
                  zIndex="2"
                >
                  Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for
                  dapps, wallets, and services.
                </SpanV2>

                <HeroCTA
                  justifyContent="flex-start"
                  gap="18px"
                >
                  <Atag
                    href="https://docs.push.org/developers"
                    title="Developer Docs"
                    target="_blank"
                    background={GLOBALS.COLORS.HIGHLIGHT}
                    lineHeight="26px"
                    zIndex="2"
                  >
                    Start Building
                  </Atag>
                  <Atag
                    href="https://app.push.org/"
                    title="Push Dapp"
                    target="_blank"
                    background={GLOBALS.COLORS.BG_DARK_SECONDARY}
                    lineHeight="26px"
                    zIndex="2"
                  >
                    Explore Push Protocol
                  </Atag>
                </HeroCTA>

                <ItemHV2
                  justifyContent="flex-start"
                  margin={`${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0px ${GLOBALS.ADJUSTMENTS.PADDING.BIG} 0`}
                >
                  <Anchor
                    href="https://twitter.com/pushprotocol"
                    title="Push Protocol Twitter"
                    target="_blank"
                    margin="0 0 0 -10px"
                  >
                    <TwitterSVG
                      width={32}
                      height={32}
                    />
                  </Anchor>

                  <Anchor
                    href="https://github.com/ethereum-push-notification-service"
                    title="Push Github"
                    target="_blank"
                  >
                    <GithubSVG
                      width={32}
                      height={32}
                    />
                  </Anchor>

                  <Anchor
                    href="https://discord.gg/pushprotocol"
                    title="Push Discord"
                    target="_blank"
                  >
                    <DiscordSVG
                      width={32}
                      height={32}
                    />
                  </Anchor>
                </ItemHV2>
              </HeroItem>
            </HeroPrimary>

            <AnalyticsStatsContainer
              position="absolute"
              zIndex="9"
              left="0"
              right="0"
              bottom="10vh"
            >
              <AnalyticsStats />
            </AnalyticsStatsContainer>
          </ContentV2>
        </SectionV2>

        {/* MISSING PIECE OF WEB3 */}
        <StorySection
          id="story"
          data-bkg="light"
          className="lightBackground"
        >
          <Content className="contentBox">

          <PoweringCommunicationRow>
              <ItemV justifyContent="flex-start">
                <ResponsiveH2
                  size="40px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                >
                  Powering communication for
                </ResponsiveH2>
              </ItemV>
              <ItemV justifyContent="flex-end">
                <Anchor
                  href="https://app.push.org"
                  title="Push Dapp"
                  target="_blank"
                  hoverBG="transparent"
                  hover="transparent"
                  filter="none"
                  color="#DD44B9"
                  radius="16px"
                  padding="14px 32px"
                  size="18px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="142%"
                >
                  Explore all channels
                  <BsArrowUpRight className="anchorSVGlink" />
                </Anchor>
              </ItemV>
            </PoweringCommunicationRow>

            {/* {!isLargeScreen && } */}
            <PartnerChannels />

            <Partners
              margin="40px 0"
              gap="90px"
            >
              <ItemV>
                <Span
                  weight="400"
                  color="#303C5E"
                  size="19px"
                  lineHeight="160%"
                  spacing="-0.03em"
                >
                  Push powers communication for over 100 of the world’s leading dapps and service providers across DeFi,
                  NFTs, gaming, dev tools, and more. Push is currently live on Ethereum and Polygon.{' '}
                </Span>
              </ItemV>

              <ItemV>
                <LiveNetworks>
                  <ItemV className="network">
                    <EthLogoTextSVG alt='Logo for Ethereum' title='Ethereum Logo' />
                  </ItemV>

                  <ItemV className="divider" />

                  <ItemV className="network">
                    <PolygonLogoTextSVG alt='Logo for Polygon' title='Polygon Logo' />
                  </ItemV>
                </LiveNetworks>
              </ItemV>
            </Partners>

            {/* <FadeInAnimation wrapperElement="div" direction='up' delay={0}> */}
            <PushWorksRow>
              <ItemImage
                justifyContent="center"
              >
                <MemberImage
                  className="pushMissingSvg"
                  src={PushMissingPieceFigure}
                  srcSet={PushMissingPieceFigure}
                  alt={'Illustration showing Push as the missing piece of web3'}
                  title='Push is the missing piece of web3'
                  style={{margin: "0 auto"}}
                  // width="100%"
                  // height="100%"
                />

               
              </ItemImage>

              <ItemV
                justifyContent={isMobile ? "center" : "flex-start"}
                // alignSelf='center'
                alignItems='center'
                // flex="2"
                // gap="22px"
              >
                <ResponsiveH2
                  size="40px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                >
                  Push is the missing piece of Web3
                </ResponsiveH2>

                <Span
                  weight="400"
                  color="#303C5E"
                  size="19px"
                  lineHeight="160%"
                  spacing="-0.03em"
                  margin={isMobile && "10px 0px 0px 0px"}
                >
                  Until Push, no solution existed to enable native communication between wallets in response to on- and
                  off-chain data. The result was a fractured dapp ecosystem, held together by antiquated and centralized
                  communication platforms.
                </Span>

                <Span
                  weight="500"
                  color="#121315"
                  size="22px"
                  lineHeight="142%"
                  spacing="-0.03em"
                  margin={isMobile && "10px 0px 0px 0px"}
                >
                  Push is building the communication network for Web3, addressing a gap in critical infrastructure and
                  improving the everyday experience for blockchain users.
                </Span>

                

                <Anchor
                  href="https://docs.push.org/developers"
                  title="Developer Docs"
                  target="_blank"
                  bg="#DD44B9"
                  radius="16px"
                  padding="14px 32px"
                  size="18px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="26px"
                  self="center"
                  margin={isMobile && "20px 0px 0px 0px"}
                >
                  {/* Learn about $PUSH */}
                  How Push works
                  <BsArrowUpRight className="anchorSVGlink" />
                </Anchor>
              </ItemV>
            </PushWorksRow>
            {/* </FadeInAnimation> */}
          </Content>
        </StorySection>

        <BuildWithPushSection
          curve="both"
          id="buildWithPush"
          data-bkg="dark"
          className="darkBackground"
        >
          <BodyContent className="contentBox">
            <SignupBox margin="0 0 0px 0">
              <ItemV
                justifyContent="flex-start"
                gap="12px"
              >
                <ResponsiveH2
                  color="#09090B"
                  size="40px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  Never Miss an Update
                </ResponsiveH2>
                <Span
                  color="#303C5E"
                  size="20px"
                  weight="400"
                  spacing="-0.03em"
                  lineHeight="138.5%"
                >
                  Sign up and stay up to date with ecosystem announcements, giveaways and more.
                </Span>
              </ItemV>

              <ItemV>
                <SignupInput />
              </ItemV>
            </SignupBox>

            <HorizontalScroll />

          </BodyContent>
        </BuildWithPushSection>

        <IntergrateWithPushSection
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

          <Content className="contentBox">
            <IntegrateGrowWithPushRow gap="18px">
              <MemberImage
                className="figureSvg"
                src={GrowWithPushFigure}
                srcSet={GrowWithPushFigure}
                alt={'Illustration showing $PUSH tokens'}
                title='Use the Push token to grow'
                width="100%"
                height="100%"
              />

              <ResponsiveH2
                color="#121315"
                size="40px"
                weight="700"
                spacing="-0.02em"
                lineHeight="110%"
                margin="-32px 0 0 0"
              >
                Grow with Push
              </ResponsiveH2>

              <Span
                className="growWithPushtext"
                color="#303C5E"
                size="19px"
                weight="400"
                spacing="-0.03em"
                lineHeight="160%"
              >
                The $PUSH token enables governance, modification of protocol fees and features, network security, and
                fee management among all wallets that integrate Push, including Push governance participants.
              </Span>
            </IntegrateGrowWithPushRow>

            <ItemH margin="120px 0 0 0">
              <IntegrateAndEarn>
                <ResponsiveH2
                  color="#09090B"
                  size="36px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  Are you a crypto wallet? <br></br> Integrate and earn.
                </ResponsiveH2>

                <Anchor
                  href="https://docs.push.org/hub/"
                  title="Learn about $PUSH"
                  target="_blank"
                  bg="#DD44B9"
                  radius="16px"
                  padding="14px 32px"
                  size="18px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="26px"
                  self="center"
                >
                  Learn about $PUSH
                </Anchor>
              </IntegrateAndEarn>
            </ItemH>

            <ItemH margin="80px 0 0 0">
              <ItemV
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <ResponsiveH2
                  color="#09090B"
                  size="40px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  Why do you need Push?
                </ResponsiveH2>
              </ItemV>
            </ItemH>

            <ItemH padding="80px 0 0 0">
              <Matrix>
                <MatrixCell>
                  <div className="matrixFigure">
                    <ChainAgnosticFigure alt='Icon showing Push is chain agnostic' title='Chain Agnostic' />
                  </div>

                  <Span
                    color="#09090B"
                    size="24px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                  >
                    Chain Agnostic
                  </Span>
                </MatrixCell>
                <MatrixCell>
                  <div className="matrixFigure">
                    <ImmediatecommunicationFigure alt='Icon showing Immediate Communication' title='Immediate Communication' />
                  </div>

                  <Span
                    color="#09090B"
                    size="24px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                  >
                    Immediate Communication
                  </Span>
                </MatrixCell>
                <MatrixCell>
                  <div className="matrixFigure">
                    <DecentralizedstackFigure alt='Icon showing decentralization' title='Decentralized Stack'/>
                  </div>

                  <Span
                    color="#09090B"
                    size="24px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                  >
                    Decentralized Stack
                  </Span>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <ImproveduxFigure alt='Icon showing User Experience' title='Improved UX'/>
                  </div>

                  <Span
                    color="#09090B"
                    size="24px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                  >
                    Improved UX
                  </Span>
                </MatrixCell>
                <MatrixCell>
                  <div className="matrixFigure">
                    <SecurityalertsFigure alt='Icon showing Security' title='Security Alerts' />
                  </div>

                  <Span
                    color="#09090B"
                    size="24px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                  >
                    Security Alerts
                  </Span>
                </MatrixCell>
                <MatrixCell>
                  <div className="matrixFigure">
                    <CensorshipresistantFigure alt='Icon showing Censorship Resistance' title='Censorship Resistant' />
                  </div>

                  <Span
                    color="#09090B"
                    size="24px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                  >
                    Censorship Resistant
                  </Span>
                </MatrixCell>
              </Matrix>
            </ItemH>

            <WhyPushTextBox
              textAlign="center"
              margin="80px 160px"
            >
              <Span
                color="#303C5E"
                size="19px"
                weight="400"
                spacing="-0.03em"
                lineHeight="142%"
              >
                Before Push, blockchain applications, service providers, and wallets had no way to natively communicate
                with each other. Most communication in today’s ecosystem relies on traditional web2 solutions, resulting
                in a broken eco-system and problems in daily use.
              </Span>
            </WhyPushTextBox>

            <ItemH margin="80px 0 0 0">
              <ItemV
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <ResponsiveH2
                  color="#09090B"
                  size="40px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                  width="50%"
                >
                  Push Insights & Updates
                </ResponsiveH2>
              </ItemV>

              <ItemV justifyContent="flex-end">
                <Anchor
                  href="https://push-protocol.medium.com/"
                  title="Exlore all articles"
                  target="_blank"
                  hoverBG="transparent"
                  hover="transparent"
                  filter="none"
                  color="#DD44B9"
                  radius="16px"
                  padding="14px 32px"
                  size="18px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="142%"
                >
                  Explore all Articles
                  <BsArrowUpRight className="anchorSVGlink" />
                </Anchor>
              </ItemV>
            </ItemH>

            <Blogs count={4} />

            <BuiltByIntro flexDirection="column">
              <ItemV justifyContent="center">
                <ResponsiveH2
                  color="#09090B"
                  size="40px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                  margin="40px 0"
                >
                  Built By
                </ResponsiveH2>
              </ItemV>

              <ItemV>
                <Span
                  color="#303C5E"
                  size="19px"
                  weight="400"
                  spacing="-0.03em"
                  lineHeight="142%"
                >
                  The most diverse personalities have found each other at Push. Unique people with special talents and
                  extraordinary stories. We are united by the joy we take in our tech and constantly push the boundaries
                  of everything web3 communication.
                </Span>
              </ItemV>
            </BuiltByIntro>

            <BuiltByCards>
              {TeamList.slice(0, showMoreTeamMembers ? TeamList.length : 4).map((teamMember, memberIndex) => {
                return (
                  <TeamMember
                    key={memberIndex}
                    name={teamMember.name}
                    title={teamMember.title}
                    img={teamMember.img}
                    twitter={teamMember.twitter}
                    linkedin={teamMember.linkedin}
                  />
                );
              })}
            </BuiltByCards>

            <TeamMemberButtons
              gap="22px"
              margin="80px 0"
            >
              <ButtonV2
                title={!showMoreTeamMembers ? 'View More' : 'View Less'}
                background="#2A2A39"
                radius="16px"
                padding="14px 32px"
                fontSize="18px"
                fontWeight="500"
                spacing="-0.03em"
                lineHeight="26px"
                onClick={onClickViewMoreTeamMembers}
              >
                {!showMoreTeamMembers ? 'View More' : 'View Less'}
              </ButtonV2>
              <Anchor
                href="https://angel.co/company/ethereum-push-notification-service"
                title="Jobs"
                target="_blank"
                bg="#DD44B9"
                radius="16px"
                padding="14px 32px"
                size="18px"
                weight="500"
                spacing="-0.03em"
                lineHeight="26px"
              >
                Now Hiring, Explore Careers
                <BsArrowUpRight className="anchorSVGlink" />
              </Anchor>
            </TeamMemberButtons>

            <ItemH margin="80px 0 80px 0">
              <ItemV
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <InvestorHeader
                  color="#09090B"
                  size="40px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  Backed by successful entrepreneurs and venture capital funds.
                </InvestorHeader>
              </ItemV>
            </ItemH>

            <InvestorList />
          </Content>
        </IntergrateWithPushSection>

        <FeaturedInSection
          id="featuredIn"
          data-bkg="dark"
          className="darkBackground"
        >
          <Content className="contentBox">
            <ItemH justifyContent="flex-start">
              <ItemV
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <ResponsiveH2
                  color="#FFFFFF"
                  size="40px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  Featured in
                </ResponsiveH2>
              </ItemV>
            </ItemH>
          </Content>

          <FeaturedInMarquee
            flexDirection="column"
            className="featuredInMarquee"
            margin="0 0 270px 0"
            id="newone"
          >
            <MarqueeAnimation
              speed={70}
              gradient={false}
            >
              <FeaturedCell className="marqueeItem">
                <Span
                  color="#FFFFFF"
                  size="22px"
                  weight="400"
                  spacing="-0.03em"
                  lineHeight="142%"
                >
                  We saw a driven, innovative builder who was deeply committed to Ethereum&apos;s growth and success.
                </Span>

                <ArticleSource>
                  <EthFoundationBlackSVG />
                  <Anchor
                    href="https://blog.ethereum.org/2020/08/19/esp-beyond-grants"
                    title="Read ETH Foundation article about Push"
                    target="_blank"
                    hoverBG="transparent"
                    hover="transparent"
                    filter="none"
                    color="#DD44B9"
                    radius="16px"
                    size="18px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                    padding="0"
                  >
                    View Article
                    <BsArrowUpRight className="anchorSVGlink" />
                  </Anchor>
                </ArticleSource>
              </FeaturedCell>

              <FeaturedCell className="marqueeItem">
                <Span
                  color="#FFFFFF"
                  size="22px"
                  weight="400"
                  spacing="-0.03em"
                  lineHeight="142%"
                >
                  The company hopes to address the lack of cross-blockchain communication with easy messaging tools.
                </Span>

                <ArticleSource>
                  <CoindeskBlackSVG />
                  <Anchor
                    href="https://www.coindesk.com/business/2022/04/14/ethereum-push-notification-service-raises-10m-at-131m-valuation/"
                    title="Read Coindesk article about Push"
                    target="_blank"
                    hoverBG="transparent"
                    hover="transparent"
                    filter="none"
                    color="#DD44B9"
                    radius="16px"
                    size="18px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                    padding="0"
                  >
                    View Article
                    <BsArrowUpRight className="anchorSVGlink" />
                  </Anchor>
                </ArticleSource>
              </FeaturedCell>

              <FeaturedCell className="marqueeItem">
                <Span
                  color="#FFFFFF"
                  size="22px"
                  weight="400"
                  spacing="-0.03em"
                  lineHeight="142%"
                >
                  Push Protocol is the “Missing piece of Web3” that is required to bring the UX of Web2 to Web3
                </Span>

                <ArticleSource>
                  <DefiPrimeBlackSVG />
                  <Anchor
                    href="https://defiprime.com/ethereum-push-notification-service"
                    title="Read Defi Prime article on Push"
                    target="_blank"
                    hoverBG="transparent"
                    hover="transparent"
                    filter="none"
                    color="#DD44B9"
                    radius="16px"
                    size="18px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                    padding="0"
                  >
                    View Article
                    <BsArrowUpRight className="anchorSVGlink" />
                  </Anchor>
                </ArticleSource>
              </FeaturedCell>

              <FeaturedCell className="marqueeItem">
                <Span
                  color="#FFFFFF"
                  size="22px"
                  weight="400"
                  spacing="-0.03em"
                  lineHeight="142%"
                >
                  Decentralized push notifications may transform what dapps can do.
                </Span>

                <ArticleSource>
                  <BalajiTweethandleBlackSVG />
                  <Anchor
                    href="https://twitter.com/pushprotocol/status/1336359832081768448"
                    title="Read Balaji's tweet about Push"
                    target="_blank"
                    hoverBG="transparent"
                    hover="transparent"
                    filter="none"
                    color="#DD44B9"
                    radius="16px"
                    size="18px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="142%"
                    padding="0"
                  >
                    View Article
                    <BsArrowUpRight className="anchorSVGlink" />
                  </Anchor>
                </ArticleSource>
              </FeaturedCell>
            </MarqueeAnimation>
          </FeaturedInMarquee>
        </FeaturedInSection>
      </HomeWrapper>
    </PageWrapper>
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

const MemberImage = styled(ImageHolder)`

`;

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
  @media ${device.laptop} {
    max-width: initial;
    margin-top: ${(props) => props.MarginTop || '0px'};
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
  @media (max-width: 320px) {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
`;

const ResponsiveH2 = styled(H2)`
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
  padding: 0px 160px 80px 160px;

  @media ${device.tablet} {
    padding: 0px 0px 10px 0px;
  }

`;

const IntergrateWithPushSection = styled(ResponsiveSection)`
  padding: 80px 160px 180px 160px;
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
`

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

const FeaturedInMarquee = styled(ItemH)`

`;

const ResponsiveHeroContent = styled(ItemH)`
  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 240px;
  }
`;

const HeroBox = styled(ItemV)`
  flex: 0 0 52%;

  @media ${device.tablet} {
    flex: 1;

    & span {
      font-weight: 400;
      font-size: 18px;
    }
  }
`;

const PushWorksRow = styled(ItemH)`
  // column-gap: 105px;
  column-gap: 40px;
  margin-top: 200px;
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

const PoweringCommunicationRow = styled(ItemH)`
  margin: 80px 0 50px 0;

  @media ${device.tablet} {
    margin-top: 80px;
  }
`;

const LiveNetworks = styled(ItemH)`
  background: #ffffff;
  border: 1px solid #bac4d6;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .divider {
    background: #bac4d6;
    flex: 0 0 1px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 18px;

    & .network {
      padding: 16px;

      & svg {
        width: 106px;
        height: 26px;
      }
    }
  }
`;

export const BodyContent = styled.div`
	// display: flex;
	// flex-direction: column;
	padding: ${(props) => props.padding || '40px 0px'};
	// position: relative;

	&.contentBox {
	// 	width: 100%;
  //   align-self: center;
    max-width: 1140px;
  //   flex: 1;
  //   display: flex;
	// }

  @media ${device.tablet} {
  	padding: ${(props) => props.padding || '10px 0px'};
  }
`;

const Partners = styled(ItemH)``;

const SignupBox = styled(ItemH)`
  background: #B9ABEF;
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

const GrowPushCard = styled(ItemV)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 32px;
  padding: 60px 80px;
  width: 45%;

  background: ${(props) => props.background || '#FFFBFB'};
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

const IntegrateGrowWithPushRow = styled(ItemH)`
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
    content: '';
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

const BuiltByIntro = styled(ItemH)`
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
  color: '#FFF';

  &::before {
    position: absolute;
    z-index: 1;
    content: '';
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

const ArticleSource = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BuiltByCards = styled(ItemH)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 26px;

  transition: all 350ms linear;
`;

const TeamMemberButtons = styled(ItemH)`
  @media ${device.tablet} {
    & a {
      width: 100%;
    }
  }
`;

const InvestorHeader = styled(ResponsiveH2)`
  flex-direction: column;
  width: 60%;

  @media ${device.tablet} {
    width: 100%;
    text-align: center;
  }
`;

export default Home;
