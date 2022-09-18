// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ReactMarquee from 'react-fast-marquee';
import ScrollTrigger from 'react-scroll-trigger';
import Wave from 'react-wavify';

import { BsArrowUpRight } from 'react-icons/bs';

import {
    HeroHeader, CurvedBottomBorderSection,CurvedBorderSection,  Section, SectionFS, SectionFSHero, Content, ItemH, ItemV, ItemBreak, WaveOuter,
    WaveInner, Arc, H1, H2, H3, Image, Image1, Span, Anchor, Button,
    Showoff, FormSubmision, Input, TextField, DottedSection
} from '../components/SharedStyling';

import SignupInput from '../components/SignupInput';

import { ReactComponent as TwitterSVG }  from '../assets/twitter.svg';
import { ReactComponent as GithubSVG }  from '../assets/github.svg';
import { ReactComponent as DiscordSVG }  from '../assets/discord.svg';
import { ReactComponent as AaveSVG }  from '../assets/aave.svg';
import { ReactComponent as EnsSVG }  from '../assets/ens.svg';
import { ReactComponent as MakerDAOSVG }  from '../assets/makerdao.svg';
import { ReactComponent as CoindeskSVG }  from '../assets/coindesk.svg';

import { ReactComponent as EthLogoTextSVG }  from '../assets/ethereum_logo_text_black.svg';
import { ReactComponent as PolygonLogoTextSVG }  from '../assets/polygon_logo_text_black.svg';

import { ReactComponent as EthFoundationBlackSVG }  from '../assets/eth_foundation_black.svg';
import { ReactComponent as CoindeskBlackSVG }  from '../assets/coindesk_black.svg';

function Home() {
    return (
        <HomeWrapper>
            <CurvedBottomBorderSection id="hero" padding="0px 160px 0px 160px">
                <Content className="contentBox">
                    <ItemH width="650px" margin="120px 0 0 0">
                        <ItemV justifyContent="flex-start">
                            <HeroHeader>
                                The Communication Protocol of Web3
                            </HeroHeader>
                        </ItemV>
                    </ItemH>

                    <ItemH width="550px">
                        <ItemV justifyContent="flex-start">
                            <Span margin="20px 0px" color="rgba(255, 255, 255, 1)" size="22px" weight="200" spacing="-0.03em" lineHeight="142%">
                                Push is a web3-native communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.
                            </Span>
                        </ItemV>
                    </ItemH>

                    <ItemH justifyContent="flex-start" gap="18px" margin="15px 0 0 0">
                        <Anchor
                            href="https://docs.epns.io/developers"
                            title="Developer Docs"
                            target="_blank"
                            bg="#DD44B9"
                            radius="16px"
                            padding="14px 32px"
                            size="18px"
                            weight="500"
                            spacing="-0.03em"
                            lineHeight="26px"
                        >
                            Start Building
                        </Anchor>
                        <Anchor
                            href="https://app.epns.io/"
                            title="EPNS Dapp"
                            target="_blank"
                            bg="#2A2A39"
                            radius="16px"
                            padding="14px 32px"
                            size="18px"
                            weight="500"
                            spacing="-0.03em"
                            lineHeight="26px"
                        >
                            Explore Push Protocol
                        </Anchor>
                    </ItemH>

                    <ItemH justifyContent="flex-start" margin="15px 0 0 0">
                        <Anchor
                            href="https://twitter.com/epnsproject"
                            title="PUSH Twitter"
                            target="_blank"
                            margin="0 0 0 -10px"
                        >
                            <TwitterSVG width={32} height={32}/>
                        </Anchor>

                        <Anchor
                            href="https://github.com/ethereum-push-notification-service"
                            title="PUSH Github"
                            target="_blank"
                        >
                            <GithubSVG width={32} height={32}/>
                        </Anchor>

                        <Anchor
                            href="https://discord.gg/YVPB99F9W5"
                            title="PUSH Discord"
                            target="_blank"
                        >
                            <DiscordSVG width={32} height={32}/>
                        </Anchor>
                    </ItemH>


                    <ItemH margin="120px 0 0 0">
                        <KPIBanner>
                            <ItemV gap="18px">
                                <KPIFigure>4.6M</KPIFigure>
                                <KPIMetric>Notifications <br />Sent</KPIMetric>
                            </ItemV>

                            <ItemV gap="18px">
                                <KPIFigure>500+</KPIFigure>
                                <KPIMetric>Channels <br /> Created</KPIMetric>
                            </ItemV>

                            <ItemV gap="18px">
                                <KPIFigure>30%</KPIFigure>
                                <KPIMetric>Click-Through <br /> Rate</KPIMetric>
                            </ItemV>

                            <ItemV gap="18px">
                                <KPIFigure>86%</KPIFigure>
                                <KPIMetric>Higher Conversion <br /> Rate</KPIMetric>
                            </ItemV>
                        </KPIBanner>
                    </ItemH>
                    
                </Content>
            </CurvedBottomBorderSection>


            <Section id="story" background="#fff" padding="160px 160px 80px 160px">
                <Content className="contentBox">
                    <ItemH gap="105px">
                        <ItemV justifyContent="center" flex="1" alignItems="end">
                            <Anchor
                                href="https://docs.epns.io/developers"
                                title="Developer Docs"
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
                                How Push works&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                            </Anchor>
                        </ItemV>

                        <ItemV justifyContent="flex-start" flex="2" gap="22px">
                            <H2 size="40px" weight="700" spacing="-0.02em" lineHeight="110%">Push is the missing piece of Web3</H2>

                            <Span weight="400" color="#303C5E" size="19px" lineHeight="160%" spacing="-0.03em">
                                Until Push, no solution existed to enable native communication between wallets in response to on- and off-chain data. The result was a fractured dapp ecosystem, held together by antiquated and centralized communication platforms.
                            </Span>

                            <Span weight="500" color="#121315" size="22px" lineHeight="142%" spacing="-0.03em">
                                Push is building the communication network for Web3, addressing a gap in critical infrastructure and improving the everyday experience for blockchain users.
                            </Span>
                        </ItemV>
                    </ItemH>
                </Content>
            </Section>


            <Section id="patnerships" background="#fff" padding="80px 160px 120px 160px">
                <Content className="contentBox">
                    <ItemH margin="0 0 50px 0">
                        <ItemV justifyContent="flex-start">
                            <H2 size="40px" weight="700" spacing="-0.02em" lineHeight="110%">Powering communication for</H2>
                        </ItemV>
                        <ItemV justifyContent="flex-end">
                            <Anchor
                                href="https://app.epns.io"
                                title="PUSH Dapp"
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
                                Explore all channels&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                            </Anchor>
                        </ItemV>
                    </ItemH>

                    <ItemH justifyContent="flex-start" gap="32px">
                        <PartnerMarquee
                            speed={100}
                            className
                        >
                            <MakerDAOSVG className='partner'/>
                            <AaveSVG className='partner'/>
                            <EnsSVG className='partner'/>
                            <MakerDAOSVG className='partner'/>
                            <EnsSVG className='partner'/>
                            <MakerDAOSVG className='partner'/>
                            <EnsSVG className='partner'/>
                            <MakerDAOSVG className='partner'/>
                            <EnsSVG className='partner'/>
                            <CoindeskSVG className='partner'/>
                        </PartnerMarquee> 

                        <PartnerMarquee
                            speed={100}
                            direction="right"
                        >
                            <MakerDAOSVG className='partner'/>
                            <AaveSVG className='partner'/>
                            <EnsSVG className='partner'/>
                            <MakerDAOSVG className='partner'/>
                            <EnsSVG className='partner'/>
                            <MakerDAOSVG className='partner'/>
                            <EnsSVG className='partner'/>
                            <MakerDAOSVG className='partner'/>
                            <EnsSVG className='partner'/>
                            <CoindeskSVG className='partner'/>
                        </PartnerMarquee> 
                    </ItemH>

                    <ItemH margin="80px 0 0 0" gap="90px">
                        <ItemV>
                            <Span weight="400" color="#303C5E" size="19px" lineHeight="160%" spacing="-0.03em">Push powers communication for over 100 of the world’s leading dapps and service providers across DeFi, NFTs, gaming, dev tools, and more. Push is currently live on Ethereum and Polygon. </Span>
                        </ItemV>

                        <ItemV>
                            <LiveNetworks>
                                <ItemV className="divider">
                                    <EthLogoTextSVG />
                                </ItemV>
                                
                                <ItemV>
                                    <PolygonLogoTextSVG />
                                </ItemV>
                            </LiveNetworks>
                        </ItemV>
                    </ItemH>

                </Content>
            </Section>


            <CurvedBorderSection id="buildWithPush" padding="0px 160px 80px 160px">
                <Content className="contentBox">
                    <SignupBox margin="0 0 80px 0">
                        <ItemV justifyContent="flex-start" gap="12px">
                            <H2 color="#09090B" size="40px" weight="700" spacing="-0.02em" lineHeight="110%" margin="0">Never Miss an Update</H2>
                            <Span color="#303C5E" size="18px" weight="400" spacing="-0.03em" lineHeight="138.5%">Sign up and stay up to date with ecosystem announcements, giveaways and more.</Span>
                        </ItemV>

                        <ItemV>
                            <SignupInput />
                        </ItemV>
                    </SignupBox>

                    <ItemH justifyContent="flex-start" gap="15px">
                        <GrowPushCard>
                            <H2 color="#09090B" size="40px" weight="700" spacing="-0.02em" lineHeight="110%" margin="0">Build with Push</H2>
                            <Span color="#303C5E" size="19px" weight="400" spacing="-0.03em" lineHeight="160%">
                                Push offers dapp developers on any blockchain network the opportunity to build solutions on a progressively decentralized stack by enabling web3-native communication.
                            </Span>
                            <Anchor
                                href="https://docs.epns.io/developers"
                                title="Developer Docs"
                                target="_blank"
                                bg="#DD44B9"
                                radius="16px"
                                padding="14px 32px"
                                size="18px"
                                weight="500"
                                spacing="-0.03em"
                                lineHeight="26px"
                                self="flex-start"
                            >
                                Start Building
                            </Anchor>
                        </GrowPushCard>
                        <GrowPushCard background="#F0DCFF">
                            <H2 color="#09090B" size="40px" weight="700" spacing="-0.02em" lineHeight="110%" margin="0">Governed by the Community</H2>
                            <Span color="#303C5E" size="19px" weight="400" spacing="-0.03em" lineHeight="160%">
                                Decentralized communication needs decentralized actors. Get involved in Push governance to build the future of web 3
                            </Span>
                            <Anchor
                                href="https://epns.io/gov"
                                title="Governance"
                                target="_blank"
                                bg="#DD44B9"
                                radius="16px"
                                padding="14px 32px"
                                size="18px"
                                weight="500"
                                spacing="-0.03em"
                                lineHeight="26px"
                                self="flex-start"
                            >
                                Know More
                            </Anchor>
                        </GrowPushCard>
                    </ItemH>

                </Content>
            </CurvedBorderSection>

            <CurvedBottomBorderSection id="integratePush" background="#FFF" padding="80px 160px 80px 160px">
                <Content className="contentBox">
                    <ItemH margin="160px 0 0 0" padding="0 160px 0 160px" gap="18px">
                        <H2 color="#121315" size="40px" weight="700" spacing="-0.02em" lineHeight="110%" margin="0">Grow with Push</H2>

                        <Span color="#303C5E" size="19px" weight="400" spacing="-0.03em" lineHeight="160%">
                            The $PUSH token enables governance, modification of protocol fees and features, network security, and fee management among all wallets that integrate Push, including Push governance participants.
                        </Span>
                    </ItemH>

                    <ItemH margin="120px 0 0 0">
                        <IntegrateAndEarn>
                            <H2 color="#09090B" size="40px" weight="700" spacing="-0.02em" lineHeight="110%" margin="0">
                                Are you a crypto wallet? Integrate and earn.
                            </H2>

                            <Anchor
                                href="https://epns.io/gov"
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
                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <H2 color="#09090B" size="40px" weight="700" spacing="-0.02em" lineHeight="110%" margin="0">
                            Why do you need Push? 
                            </H2>
                        </ItemV>
                    </ItemH>


                    <ItemH padding="80px 0 0 0">
                        <Matrix>
                            <MatrixRow>
                                <MatrixCell>
                                    <MatrixFigure />
                                    <Span color="#09090B" size="24px" weight="500" spacing="-0.03em" lineHeight="142%">
                                        Chain Agnostic
                                    </Span>
                                </MatrixCell>
                                <MatrixCell>
                                    <MatrixFigure />
                                    <Span color="#09090B" size="24px" weight="500" spacing="-0.03em" lineHeight="142%">
                                        Immediate Communication
                                    </Span>
                                </MatrixCell>
                                <MatrixCell>
                                    <MatrixFigure />
                                    <Span color="#09090B" size="24px" weight="500" spacing="-0.03em" lineHeight="142%">
                                        Decentralized Stack
                                    </Span>
                                </MatrixCell>
                            </MatrixRow>

                            <MatrixRow>
                                <MatrixCell>
                                    <MatrixFigure />
                                    <Span color="#09090B" size="24px" weight="500" spacing="-0.03em" lineHeight="142%">
                                        Improved UX
                                    </Span>
                                </MatrixCell>
                                <MatrixCell>
                                    <MatrixFigure />
                                    <Span color="#09090B" size="24px" weight="500" spacing="-0.03em" lineHeight="142%">
                                        Security Alerts
                                    </Span>
                                </MatrixCell>
                                <MatrixCell>
                                    <MatrixFigure />
                                    <Span color="#09090B" size="24px" weight="500" spacing="-0.03em" lineHeight="142%">
                                        Censorship Resistant
                                    </Span>
                                </MatrixCell>
                            </MatrixRow>
                       
                        </Matrix>
                    </ItemH>

                    <ItemH textAlign="center" margin="80px 160px">
                        <Span color="#303C5E" size="19px" weight="400" spacing="-0.03em" lineHeight="142%">
                            Before Push, blockchain applications, service providers, and wallets had no way to natively communicate with each other. Most communication in today’s ecosystem relies on traditional web2 solutions, resulting in a broken eco-system and problems in daily use.
                        </Span>
                    </ItemH>


                    <ItemH margin="80px 0 0 0">
                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <H2 color="#09090B" size="40px" weight="700" spacing="-0.02em" lineHeight="110%" margin="0">
                                Push Insights & Updates
                            </H2>
                        </ItemV>

                        <ItemV justifyContent="flex-end">
                            <Anchor
                                href="https://app.epns.io"
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
                                Explore all Articles&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                            </Anchor>
                        </ItemV>
                    </ItemH>

                    <ItemH margin="40px 0 0 0" gap="48px">
                        <MainArticle>
                            <ArticleBanner />

                            <H3 textTransform="normal" color="#09090B" size="24px" weight="500" spacing="-0.02em" lineHeight="142%" margin="24px 0 0 0">
                                My Dapp’ Would Like to Send You Push Notifications
                            </H3>

                            <ArticleText>
                                An Introduction to Push Notification: Part 1.2 — In Part 1.1, we introduced modern push technology, which consists of some text that will be truncated
                            </ArticleText>
                        </MainArticle>

                        <SubArticles>
                            <SubArticle>
                                <SubArticleBanner />
                                <SubArticleHeader>
                                    BUIDLing the Future of Web3 Communication With EPNS at ETHOnline 2022
                                </SubArticleHeader>
                            </SubArticle>

                            <SubArticle>
                                <SubArticleBanner />
                                <SubArticleHeader>
                                    Socket Integrates EPNS to Send Users Important Updates Through Push Notifications
                                </SubArticleHeader>
                            </SubArticle>

                            <SubArticle>
                                <SubArticleBanner />
                                <SubArticleHeader>
                                    ICYMI — EPNS at EthCC 2022 Paris
                                </SubArticleHeader>
                            </SubArticle>
                        </SubArticles>
                    </ItemH>

                    <ItemH height="1px" background="#000" margin="15px 0 0 0"/>
                </Content>
            </CurvedBottomBorderSection>

            <Section id="featuredIn" background="#121315">
                <Content className="contentBox">
                    <ItemH margin="80px 0 0 0">
                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <H2 color="#FFFFFF" size="40px" weight="700" spacing="-0.02em" lineHeight="110%" margin="0">
                                Featured in
                            </H2>
                        </ItemV>
                    </ItemH>

                    <ItemH flexDirection="column" margin="80px 0 0 0">
                        <FeaturedCell>
                            <Span color="#FFFFFF" size="22px" weight="400" spacing="-0.03em" lineHeight="142%">We saw a driven, innovative builder who was deeply committed to Ethereum’s growth and success.</Span>

                            <ArticleSource>
                                <EthFoundationBlackSVG />
                                <Anchor
                                    href="https://app.epns.io"
                                    title="Read More"
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
                                    Read More&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                                </Anchor>
                            </ArticleSource>
                        </FeaturedCell>

                        <FeaturedCell>
                            <Span color="#FFFFFF" size="22px" weight="400" spacing="-0.03em" lineHeight="142%">We saw a driven, innovative builder who was deeply committed to Ethereum’s growth and success.</Span>

                            <ArticleSource>
                                <EthFoundationBlackSVG />
                                <Anchor
                                    href="https://app.epns.io"
                                    title="Read More"
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
                                    Read More&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                                </Anchor>
                            </ArticleSource>
                        </FeaturedCell>

                        <FeaturedCell>
                            <Span color="#FFFFFF" size="22px" weight="400" spacing="-0.03em" lineHeight="142%">The company hopes to address the lack of cross-blockchain communication with easy messaging tools.</Span>

                            <ArticleSource>
                                <CoindeskBlackSVG />
                                <Anchor
                                    href="https://app.epns.io"
                                    title="Read More"
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
                                    Read More&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                                </Anchor>
                            </ArticleSource>
                        </FeaturedCell>
                    </ItemH>
                </Content>
            </Section>

        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
  & #hero .contentBox {
    row-gap: 18px;
  }
`;

const KPIBanner = styled.div`
    background: linear-gradient(90deg, rgba(18, 19, 21, 0.5) -2.55%, rgba(42, 42, 57, 0.5) 32.62%, rgba(142, 49, 122, 0.5) 68.34%, rgba(18, 19, 21, 0.5) 102.97%);
    backdrop-filter: blur(30px);
    border-radius: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 30px 50px;
    font-family: 'Strawford';
    font-style: normal;
`;

const KPIFigure = styled(Span)`
    font-weight: 700;
    font-size: 48px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: #FFFFFF;
`;

const KPIMetric = styled(Span)`
    font-weight: 200;
    font-size: 18px;
    line-height: 121%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
`;

const LiveNetworks = styled(ItemH)`
    background: #FFFFFF;
    border: 1px solid #BAC4D6;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .divider {
        border-right: 1px solid #BAC4D6;
    }
`;

const SignupBox = styled(ItemH)`
    background: rgba(214, 177, 242, 0.8);
    backdrop-filter: blur(15px);
    border-radius: 32px;
    padding: 72px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`;

const GrowPushCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    row-gap: 32px;
    padding: 72px 88px;

    background: ${props => props.background || '#FFFBFB'};
    border-radius: 48px;
    width: 656px;
    height: 514px;
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
`;


const Matrix = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const MatrixRow = styled.div`
  display: flex;
  flex-direction: row;

  &:last-child {
    border-bottom: 1px solid #000;
  }
`;
 
const MatrixCell = styled.div`
    padding: 48px 0 32px 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    flex-basis: 100%;

    border-top: 1px solid #000;
    border-right: 1px solid #000;
    color: '#000';
    
    &::before {
        position: absolute;
        z-index: 1;
        content: "";
        top: -1px;
        left: 0;
        height: 8px;
        width: 96px;
        background: #DD44B9;
    }

    &:last-child {
        border-right: 0;
    }
`;

const MatrixFigure = styled.div`
    width: 109px;
    height: 63px;
    background: #D9D9D9;
`;

const MainArticle = styled(ItemV)`
   row-gap: 8px;
`;

const ArticleBanner = styled.div`
    width: 544px;
    height: 284px;
    background: #D9D9D9;
    border-radius: 32px;
`;

const ArticleText = styled.div`
    width: 524px;
    color: #303C5E;
    font-size: 19px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 160%;
    
    text-overflow:ellipsis;
    overflow:hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
`;

const SubArticles = styled(ItemV)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 20px;
`;

const SubArticle = styled.div`
    display: flex;
    flex-direction: row;    
    column-gap: 30px;
    padding-bottom: 6px;
    border-bottom: 1px solid #000000;

    &:last-child {
        border-bottom: 0;
    }
`;

const SubArticleBanner = styled.div`
    width: 207px;
    height: 108px;
    background: #D9D9D9;
    border-radius: 20px;
    flex: 0 0 207px;
`;

const SubArticleHeader = styled.h4`
    font-weight: 500;
    font-size: 18px;
    line-height: 142%;
    color: #09090B;
    flex: 1;
    align-self: center;
`;

const FeaturedCell = styled.div`
    width: 600px;
    padding: 48px 0 32px 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    flex-basis: 100%;

    border: 1px solid #FFF;
    color: '#FFF';
    
    &::before {
        position: absolute;
        z-index: 1;
        content: "";
        top: -1px;
        left: 0;
        height: 8px;
        width: 96px;
        background: #DD44B9;
    }
`;

const ArticleSource = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const PartnerMarquee = styled(ReactMarquee)`
  & .partner {
    margin-right: 32px;
  }
`;


export default Home;