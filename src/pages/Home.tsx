// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ScrollTrigger from 'react-scroll-trigger';
import Wave from 'react-wavify';

import { BsArrowUpRight } from 'react-icons/bs';

import {
    HeroHeader, CurvedBottomBorderSection, Section, SectionFS, SectionFSHero, Content, ItemH, ItemV, ItemBreak, WaveOuter,
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


            <Section id="patnerships" background="#fff" padding="80px 160px 80px 160px">
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

                    <ItemH justifyContent="flex-start" gap="33px">
                        <MakerDAOSVG />
                        <AaveSVG />
                        <EnsSVG />
                        <MakerDAOSVG />
                        <EnsSVG />
                        <MakerDAOSVG />
                        <EnsSVG />
                        <MakerDAOSVG />
                        <EnsSVG />
                        <CoindeskSVG />
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


                    <SignupBox margin="80px 0 0 0">
                        <ItemV justifyContent="flex-start" gap="12px">
                            <H2 color="#121315" size="38px" weight="700" spacing="-0.04em" lineHeight="110%" margin="0">Never Miss an Update</H2>
                            <Span color="#303C5E" size="18px" weight="400" spacing="-0.03em" lineHeight="138.5%">Sign up and stay up to date with ecosystem announcements, giveaways and more.</Span>
                        </ItemV>

                        <ItemV>
                            <SignupInput />
                        </ItemV>
                    </SignupBox>
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
    background: rgba(214, 177, 242, 0.5);
    backdrop-filter: blur(15px);
    border-radius: 32px;
    margin: 100px 0 0 0;
    padding: 72px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`;


export default Home;