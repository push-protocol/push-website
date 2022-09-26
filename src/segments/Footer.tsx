// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';


import { useNavigate } from 'react-router-dom';

import { BsArrowUpRight } from 'react-icons/bs';
import { device } from '../config/globals';

import {
  Section, Content, ItemH, ItemV, Span, Anchor,
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

  const navigate =  useNavigate();

  return (
    <StyledFooter>
      <ResponsiveSection id="footer" background="#121315">
        <Content className="contentBox" padding="0">
          {/* Information Cards */}
                    
          <ItemH gap="32px">     
            <InfoCard>
              <InfoFigure />

              <InfoDetails>
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
              </InfoDetails>
                           
            </InfoCard>

                        
            <InfoCard>
              <InfoFigure />

              <InfoDetails>
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
              </InfoDetails>
                          
            </InfoCard>
                        
          </ItemH>


          {/* footer links */}
          <ItemH gap="32px" margin="120px 0 0 0">
            <FooterContainer>
              <FooterColumn>
                <FooterLinks>
                  <Span weight="400" size="18px" lineHeight="142%">Company</Span>

                  <Anchor
                    onClick={() => navigate('/tos') }
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Terms
                  </Anchor>

                  <Anchor
                    onClick={() => navigate('/privacy') }
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Privacy
                  </Anchor>

                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span weight="400" size="18px" lineHeight="142%">Governance</Span>

                  <Anchor
                    href="https://epns.io/gov"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Push Governance
                  </Anchor>

                  <Anchor
                    href="https://docs.epns.io/governance"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Guides
                  </Anchor>

                  <Anchor
                    href="https://gov.epns.io/top?period=yearly"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Forum
                  </Anchor>

                  <Anchor
                    href="https://www.notion.so/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Grants
                  </Anchor>

                  <Anchor
                    href="https://snapshot.org/#/epns.eth"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Snapshot
                  </Anchor>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span weight="400" size="18px" lineHeight="142%">Resources</Span>
                  <Anchor
                    href="https://medium.com/ethereum-push-notification-service"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Blog
                  </Anchor>
                  <Anchor
                    href="https://whitepaper.epns.io/"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Whitepaper
                  </Anchor>

                  <Anchor
                    href="https://github.com/ethereum-push-notification-service"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Github
                  </Anchor>

                  <Anchor
                    href="https://discord.gg/epns"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Discord
                  </Anchor>

                  <Anchor
                    href="https://docs.epns.io/developers"
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Dev Guides
                  </Anchor>
                </FooterLinks>
              </FooterColumn>


              <FooterColumn>
                <FooterLinks>
                  <Span weight="400" size="18px" lineHeight="142%">Support</Span>

                  <Anchor
                    href=""
                    target="_blank"
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        Contact
                  </Anchor>
                                    

                  <Anchor
                    onClick={() => navigate('/faq') }
                    bg="transparent"
                    color="#9C9CBE"
                    size="16px"
                    weight="300"
                    lineHeight="142%"
                    padding="0"
                    spacing="normal"
                    justify="flex-start"
                  >
                                        FAQ
                  </Anchor>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span weight="400" size="18px" lineHeight="142%">Subscribe</Span>

                  <EmailInputTextField placeholder='Your Email'/>
                </FooterLinks>
              </FooterColumn>
            </FooterContainer>

          </ItemH>

          {/* Social Icon Links */}
          <SocialLinks gap="32px">
            <ItemV justifyContent="flex-start" flex="1" gap="12px" className="pushLinks">
              <Anchor
                className="pushLogo"
                onClick={() => navigate('/') }
                title="PUSH"
              >
                <PushLogoTextWhite />
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

            <ItemV justifyContent="flex-end" flex="1" gap="12px" className="pushPlatformLinks">
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
          </SocialLinks>
        </Content>
      </ResponsiveSection>
         
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
    font-family: 'Strawford';
    display: flex;
    position: relative;
`;

const ResponsiveSection = styled(Section)`
    @media ${device.tablet} {
        padding-left: 30px !important;
        padding-right: 30px !important;
    }
`;


const InfoCard = styled(ItemV)`
	border-radius: 32px;
    background: #2A2A39;
    padding: 48px 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 32px;
    box-sizing: border-box;

    @media ${device.tablet} {
        flex-direction: column;
        row-gap: 16px;
    }
`;

const InfoFigure = styled.div`
    width: 116px;
    height: 121px;
    background: #D9D9D9;
    flex: 0 0 116px;
`;

const InfoDetails = styled.div`
   display: flex;
   flex-direction: column;
   flex: 0 0 calc(100% - 116px);

   @media ${device.tablet} {
    align-items: center;

    & span {
        text-align: center;
    }
   }
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    box-sizing: border-box;
    color: #FFFFFF;

    flex-direction: column;

    @media ${device.tablet} {
        flex-basis: 50%;
        padding: 12px;
        row-gap: 16px;
        
        & span {
            font-size: 20px;
        }

        &:last-child {
            flex-basis: 100%;
        }
    }
`;

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`; 

const SocialLinks = styled(ItemH)`
    margin: 80px 0 40px 0;
    position: relative;

    &:before {
        position: absolute;
        z-index: 1;
        content: "";
        top: -24px;
        left: 0;
        height: 1px;
        width: 100%;
        background: #2A2A39;
    }

    @media ${device.tablet} {
        flex-direction: column;

        & .pushLinks {
            justify-content: center;

            & a.pushLogo {
                flex: 0 0 100%;
            }
        }

        & .pushPlatformLinks {
            justify-content: center;
        }
    }
`;


export default Footer;