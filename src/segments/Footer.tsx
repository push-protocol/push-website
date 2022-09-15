// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { BsArrowUpRight } from 'react-icons/bs';

import {
    Section, SectionFS, SectionFSHero, Content, ItemH, ItemV, ItemBreak, WaveOuter,
    WaveInner, Arc, H1, H2, H3, Image, Image1, Span, Anchor, Button,
    Showoff, FormSubmision, Input, TextField, DottedSection
} from '../components/SharedStyling';

import EmailInputTextField from '../components/EmailInputTextField';

import { ReactComponent as PushLogoTextWhite }  from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as TwitterSVG }  from '../assets/twitter.svg';
import { ReactComponent as GithubSVG }  from '../assets/github.svg';
import { ReactComponent as DiscordSVG }  from '../assets/discord.svg';
import { ReactComponent as TelegramSVG }  from '../assets/telegram.svg';

import { ReactComponent as AppleSVG }  from '../assets/apple.svg';
import { ReactComponent as AndroidSVG }  from '../assets/android.svg';
import { ReactComponent as PushBellSVG }  from '../assets/pushBell.svg';

function Footer() {
    return (
        <FooterWrapper>
            <Section id="footerSection" background="#121315" padding="160px 160px 40px 160px">
                <Content className="contentBox">
                    {/* Information Cards */}
                    
                    <ItemH gap="32px">
                        <ItemV justifyContent="center" flex="1">
                            <InfoCard>
                                <Span
                                    color="#FFF"
                                    weight="500"
                                    size="24px"
                                    lineHeight="142%"
                                >
                                    Join us and build the future of Web3 Communication.
                                </Span>
                                <Anchor
                                    href="https://docs.epns.io/developers"
                                    title="See Open Positions"
                                    target="_blank"
                                    hoverBG="transparent"
                                    hover="transparent"
                                    filter="none"
                                    color="#DD44B9"
                                    radius="16px"
                                    padding="14px 0"
                                    size="18px"
                                    weight="500"
                                    spacing="-0.03em"
                                    lineHeight="142%"
                                    justify="flex-start"
                                >
                                    See Open Positions&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                                </Anchor>
                            </InfoCard>
                        </ItemV>

                        <ItemV justifyContent="center" flex="1">
                            <InfoCard>
                                <Span
                                    color="#FFF"
                                    weight="500"
                                    size="24px"
                                    lineHeight="142%"
                                >
                                    Follow our simple guides to get started in minutes.
                                </Span>
                                <Anchor
                                    href="https://docs.epns.io/developers"
                                    title="Explore Docs"
                                    target="_blank"
                                    hoverBG="transparent"
                                    hover="transparent"
                                    filter="none"
                                    color="#DD44B9"
                                    radius="16px"
                                    padding="14px 0"
                                    size="18px"
                                    weight="500"
                                    spacing="-0.03em"
                                    lineHeight="142%"
                                    justify="flex-start"
                                >
                                    Explore Docs&nbsp;<BsArrowUpRight className='anchorSVGlink'/>
                                </Anchor>
                            </InfoCard>
                        </ItemV>
                    </ItemH>


                    {/* footer links */}
                    <ItemH gap="32px" margin="120px 0 0 0">
                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <FooterLinks>
                                <Span weight="400" size="18px" lineHeight="142%">Company</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">About</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Careers</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Media Kit</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Terms</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Privacy</Span>
                            </FooterLinks>
                        </ItemV>

                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <FooterLinks>
                                <Span weight="400" size="18px" lineHeight="142%">Governance</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Push Governance</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Guides</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Forum</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Grants</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Snapshot</Span>
                            </FooterLinks>
                        </ItemV>

                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <FooterLinks>
                                <Span weight="400" size="18px" lineHeight="142%">Resources</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Blog</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Whitepaper</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Github</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Discord</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Dev Guides</Span>
                            </FooterLinks>
                        </ItemV>

                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <FooterLinks>
                                <Span weight="400" size="18px" lineHeight="142%">Support</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">Contact</Span>
                                <Span color="#9C9CBE" size="16px" lineHeight="142%">FAQ</Span>
                            </FooterLinks>
                        </ItemV>

                        <ItemV justifyContent="flex-start" alignItems="flex-start">
                            <FooterLinks>
                                <Span weight="400" size="18px" lineHeight="142%">Subscribe</Span>

                                <EmailInputTextField placeholder='Your Email'/>
                            </FooterLinks>
                        </ItemV>
                    </ItemH>

                    <ItemBreak style={{
                        borderTop: '1px solid #2A2A39',
                        marginTop: 88
                    }}/>

                    {/* Social Icon Links */}
                    <ItemH gap="32px" margin="50px 0 0 0">
                        <ItemV justifyContent="flex-start" flex="1" gap="12px">
                            <Anchor
                                href="https://epns.io/"
                                title="PUSH"
                            >
                                <PushLogoTextWhite/>
                            </Anchor>
                            
                            
                            <Anchor
                                href="https://github.com/ethereum-push-notification-service"
                                title="PUSH Github"
                                target="_blank"
                                border="1px solid #2A2A39"
                                radius="12px"
                                padding="10px"
                            >
                                <GithubSVG width={22} height={22}/>
                            </Anchor>
                            <Anchor
                                href="https://twitter.com/epnsproject"
                                title="PUSH Twitter"
                                target="_blank"
                                border="1px solid #2A2A39"
                                radius="12px"
                                padding="10px"
                            >
                                <TwitterSVG width={22} height={22}/>
                            </Anchor>

                            <Anchor
                                href="https://t.me/epnsproject"
                                title="PUSH Telegram"
                                target="_blank"
                                border="1px solid #2A2A39"
                                radius="12px"
                                padding="10px"
                            >
                                <TelegramSVG width={22} height={22}/>
                            </Anchor>
                            <Anchor
                                href="https://discord.gg/YVPB99F9W5"
                                title="PUSH Discord"
                                target="_blank"
                                border="1px solid #2A2A39"
                                radius="12px"
                                padding="10px"
                            >
                                <DiscordSVG width={22} height={22}/>
                            </Anchor>
                        </ItemV>

                        <ItemV justifyContent="flex-end" flex="1" gap="12px">
                            <Anchor
                                href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
                                title="PUSH iOS app"
                                target="_blank"
                                border="1px solid #2A2A39"
                                radius="12px"
                                padding="10px"
                            >
                                <AppleSVG width={22} height={22}/>
                            </Anchor>

                            <Anchor
                                href="https://play.google.com/store/apps/details?id=io.epns.epns"
                                title="PUSH Android app"
                                target="_blank"
                                border="1px solid #2A2A39"
                                radius="12px"
                                padding="10px"
                            >
                                <AndroidSVG width={22} height={22}/>
                            </Anchor>

                            <Anchor
                                href="https://app.epns.io"
                                title="PUSH Dapp"
                                target="_blank"
                                border="1px solid #2A2A39"
                                radius="12px"
                                padding="10px"
                            >
                                <PushBellSVG width={22} height={22}/>
                            </Anchor>
                        </ItemV>
                    </ItemH>
                </Content>
            </Section>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    font-family: 'Strawford';
    
    & .contentBox {
        padding: 20px 160px;
        width: 100%;
        align-self: center;
        max-width: 1140px;
        flex: 1;
        display: flex;
    }

    & .pushLogo {
        
    }
`;

const InfoCard = styled.div`
	border-radius: 32px;
    background: #2A2A39;
    padding: 48px;
    padding-left: 180px;
    display: flex;
    flex-direction: column;
    row-gap: 26px;
`;

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`; 


export default Footer;