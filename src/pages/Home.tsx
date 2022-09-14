// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ScrollTrigger from 'react-scroll-trigger';
import Wave from 'react-wavify';

import {
    Section, SectionFS, SectionFSHero, Content, ItemH, ItemV, ItemBreak, WaveOuter,
    WaveInner, Arc, H1, H2, H3, Image, Image1, Span, Anchor, Button,
    Showoff, FormSubmision, Input, TextField, DottedSection
} from '../components/SharedStyling';

import { ReactComponent as TwitterSVG }  from '../assets/twitter.svg';
import { ReactComponent as GithubSVG }  from '../assets/github.svg';
import { ReactComponent as DiscordSVG }  from '../assets/discord.svg';

function Home() {
    return (
        <HomeWrapper>
            <SectionFSHero id="hero" padding="0px 160px 0px 160px">
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
            </SectionFSHero>



            <Section id="story" theme="#e20880" gradient="linear-gradient(0deg, #dabcff 50%, #ffb4e0 100%)" padding="20px 0px 80px 0px">
                <Content className="contentBox">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et augue ut erat elementum lacinia. Aenean fermentum, ipsum at dignissim porttitor, sem nibh semper mauris, eu mattis sapien diam non justo. Phasellus dapibus eu nisi eget scelerisque. Donec quis sollicitudin nunc. Nam sit amet lacus vel tortor molestie posuere. Aliquam ac eleifend ligula, nec ultrices nulla. In laoreet et arcu vitae iaculis. Cras ut venenatis justo, quis convallis nibh. Suspendisse eleifend scelerisque leo. Vivamus posuere malesuada metus, id dignissim arcu venenatis non. Cras vitae nulla tincidunt, mollis arcu a, sagittis ligula. Maecenas aliquet luctus euismod. Quisque non diam vitae nisl gravida rhoncus interdum id lacus. Sed ullamcorper eu tortor ac accumsan.

Sed sit amet orci posuere, laoreet eros at, maximus justo. Aliquam tortor lacus, finibus vitae urna nec, placerat tincidunt mauris. Cras eget sem egestas, congue quam a, placerat diam. Mauris et suscipit elit. Duis est nunc, sodales eget finibus eu, suscipit vitae velit. Suspendisse augue sapien, mattis et gravida dictum, eleifend ut sem. Morbi condimentum volutpat ipsum a egestas. Suspendisse sed sem sagittis, consequat odio ut, pellentesque urna. Quisque sit amet interdum nulla, et efficitur dui. Nam non velit arcu. Aenean at enim aliquam, ornare orci vitae, feugiat tellus. Nam ex sem, fringilla sed eros sit amet, maximus suscipit felis. Maecenas id neque neque. Ut cursus mi sed porta placerat. Phasellus dui neque, imperdiet in nisl eu, tincidunt posuere ipsum. Vestibulum et fringilla tortor.

Ut congue, quam nec molestie pharetra, neque felis dictum diam, vel tincidunt metus dolor in est. In hac habitasse platea dictumst. Maecenas ultricies, massa vitae feugiat consequat, augue sem venenatis odio, eu aliquam orci nunc at dui. Suspendisse ornare magna id placerat tempus. Vestibulum consectetur libero eu malesuada imperdiet. Etiam finibus tellus odio, id maximus nulla elementum eu. Integer tempor velit at ipsum hendrerit suscipit a nec erat. Nunc dignissim magna quis laoreet blandit.

Morbi mattis odio in euismod cursus. In hac habitasse platea dictumst. Vivamus non fermentum risus. Ut gravida convallis odio at dignissim. Fusce tincidunt finibus finibus. Morbi imperdiet iaculis eros, vitae luctus quam. Sed augue odio, dignissim at commodo at, tincidunt ut massa. Proin pharetra vel orci nec maximus.

Mauris quis cursus enim. Nullam diam erat, dapibus ut magna quis, aliquet malesuada purus. Etiam congue finibus mauris ut pretium. Curabitur vel tempor tellus, at tristique arcu. Cras vel lobortis nulla, quis tincidunt libero. Donec sed facilisis dui. Donec faucibus laoreet lectus sed fermentum. Nullam non tellus lorem. Quisque accumsan tellus enim, sit amet luctus magna aliquet a. Aenean nec eros auctor, egestas diam eget, sollicitudin enim. Aenean volutpat arcu ut convallis volutpat. Etiam quis nunc sed est iaculis pharetra vitae vel urna. Vestibulum facilisis ipsum enim, non tempor nibh vehicula non. Suspendisse potenti.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et augue ut erat elementum lacinia. Aenean fermentum, ipsum at dignissim porttitor, sem nibh semper mauris, eu mattis sapien diam non justo. Phasellus dapibus eu nisi eget scelerisque. Donec quis sollicitudin nunc. Nam sit amet lacus vel tortor molestie posuere. Aliquam ac eleifend ligula, nec ultrices nulla. In laoreet et arcu vitae iaculis. Cras ut venenatis justo, quis convallis nibh. Suspendisse eleifend scelerisque leo. Vivamus posuere malesuada metus, id dignissim arcu venenatis non. Cras vitae nulla tincidunt, mollis arcu a, sagittis ligula. Maecenas aliquet luctus euismod. Quisque non diam vitae nisl gravida rhoncus interdum id lacus. Sed ullamcorper eu tortor ac accumsan.

Sed sit amet orci posuere, laoreet eros at, maximus justo. Aliquam tortor lacus, finibus vitae urna nec, placerat tincidunt mauris. Cras eget sem egestas, congue quam a, placerat diam. Mauris et suscipit elit. Duis est nunc, sodales eget finibus eu, suscipit vitae velit. Suspendisse augue sapien, mattis et gravida dictum, eleifend ut sem. Morbi condimentum volutpat ipsum a egestas. Suspendisse sed sem sagittis, consequat odio ut, pellentesque urna. Quisque sit amet interdum nulla, et efficitur dui. Nam non velit arcu. Aenean at enim aliquam, ornare orci vitae, feugiat tellus. Nam ex sem, fringilla sed eros sit amet, maximus suscipit felis. Maecenas id neque neque. Ut cursus mi sed porta placerat. Phasellus dui neque, imperdiet in nisl eu, tincidunt posuere ipsum. Vestibulum et fringilla tortor.

Ut congue, quam nec molestie pharetra, neque felis dictum diam, vel tincidunt metus dolor in est. In hac habitasse platea dictumst. Maecenas ultricies, massa vitae feugiat consequat, augue sem venenatis odio, eu aliquam orci nunc at dui. Suspendisse ornare magna id placerat tempus. Vestibulum consectetur libero eu malesuada imperdiet. Etiam finibus tellus odio, id maximus nulla elementum eu. Integer tempor velit at ipsum hendrerit suscipit a nec erat. Nunc dignissim magna quis laoreet blandit.

Morbi mattis odio in euismod cursus. In hac habitasse platea dictumst. Vivamus non fermentum risus. Ut gravida convallis odio at dignissim. Fusce tincidunt finibus finibus. Morbi imperdiet iaculis eros, vitae luctus quam. Sed augue odio, dignissim at commodo at, tincidunt ut massa. Proin pharetra vel orci nec maximus.

Mauris quis cursus enim. Nullam diam erat, dapibus ut magna quis, aliquet malesuada purus. Etiam congue finibus mauris ut pretium. Curabitur vel tempor tellus, at tristique arcu. Cras vel lobortis nulla, quis tincidunt libero. Donec sed facilisis dui. Donec faucibus laoreet lectus sed fermentum. Nullam non tellus lorem. Quisque accumsan tellus enim, sit amet luctus magna aliquet a. Aenean nec eros auctor, egestas diam eget, sollicitudin enim. Aenean volutpat arcu ut convallis volutpat. Etiam quis nunc sed est iaculis pharetra vitae vel urna. Vestibulum facilisis ipsum enim, non tempor nibh vehicula non. Suspendisse potenti.
                </Content>
            </Section>

        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
  & #hero .contentBox {
    flex-grow: 0;
    row-gap: 18px;
  }
`;

const HeroHeader = styled.h1`
	font-family: 'Strawford';
    font-size: 68px;
    line-height: 110%;
    font-style: normal;
	font-weight: 700;
    letter-spacing: -0.03em;
	text-align: left;
	text-transform: none;
	text-shadow: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

const KPIBanner = styled.div`
    background: linear-gradient(90deg, rgba(18, 19, 21, 0.5) -2.55%, rgba(42, 42, 57, 0.5) 32.62%, rgba(142, 49, 122, 0.5) 68.34%, rgba(18, 19, 21, 0.5) 102.97%);
    backdrop-filter: blur(30px);
    border-radius: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 30px;
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

export default Home;