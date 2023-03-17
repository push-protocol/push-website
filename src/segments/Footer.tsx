// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { BsArrowUpRight } from 'react-icons/bs';
import { device } from '../config/globals';

import { Section, Content, ItemH, ItemV, Span, Anchor, LinkTo } from '../components/SharedStyling';

import EmailInputTextField from '../components/EmailInputTextField';

import { ReactComponent as PushLogoTextWhite } from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as TwitterSVG } from '../assets/twitter.svg';
import { ReactComponent as GithubSVG } from '../assets/github.svg';
import { ReactComponent as DiscordSVG } from '../assets/discord.svg';
import { ReactComponent as TelegramSVG } from '../assets/telegram.svg';

import { ReactComponent as AppleSVG } from '../assets/apple.svg';
import { ReactComponent as AndroidSVG } from '../assets/android.svg';
import { ReactComponent as PushBellSVG } from '../assets/pushBell.svg';

import { ReactComponent as FooterJoinusFigure } from '../assets/figures/footerjoinus.svg';
import { ReactComponent as FooterFollowusFigure } from '../assets/figures/footerfollowus.svg';

function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    document.documentElement.scrollTo(0, 0);
  };

  return (
    <StyledFooter>
      <ResponsiveSection
        id="footer"
        background="#121315"
        padding="160px 0 0 0"
      >
        <Content
          className="contentBox"
          padding="0"
        >
          {/* Information Cards */}

          <ItemH gap="32px">
            <InfoCard>
              <FooterJoinusFigure
                className="figureSvg"
                alt="Icon showing Open Positions"
                title="Join Us"
              />

              <InfoDetails>
                <Span
                  color="#FFF"
                  weight="500"
                  size="24px"
                  lineHeight="142%"
                >
                  Join us and build the future of Web3 Communication.
                </Span>
                <FooterAnchorPrimary
                  href="https://angel.co/company/push-protocol"
                  title="See Open Positions"
                  target="_blank"
                >
                  See Open Positions&nbsp;
                  <BsArrowUpRight className="anchorSVGlink" />
                </FooterAnchorPrimary>
              </InfoDetails>
            </InfoCard>

            <InfoCard>
              <FooterFollowusFigure
                className="figureSvg"
                alt="Icon showing ease of getting started"
                title="Get Started"
              />

              <InfoDetails>
                <Span
                  color="#FFF"
                  weight="500"
                  size="24px"
                  lineHeight="142%"
                >
                  Follow our simple guides to get started in minutes.
                </Span>
                <FooterAnchorPrimary
                  href="https://docs.push.org/developers"
                  title="Explore Docs"
                  target="_blank"
                >
                  Explore Docs&nbsp;
                  <BsArrowUpRight className="anchorSVGlink" />
                </FooterAnchorPrimary>
              </InfoDetails>
            </InfoCard>
          </ItemH>

          {/* footer links */}
          <ItemH
            gap="32px"
            margin="120px 0 0 0"
          >
            <FooterContainer>
              <FooterColumn>
                <FooterLinks>
                  <Span
                    weight="400"
                    size="18px"
                    lineHeight="142%"
                  >
                    Company
                  </Span>

                  <FooterAnchorSecondary
                    href="https://www.notion.so/pushprotocol/Push-Brand-Guide-Media-Kit-6f9db19d513c4365a1faa6c244515498"
                    title="Guides"
                    target="_blank"
                  >
                    Media Kit
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/tos"
                    title="Terms"
                    onClick={scrollToTop}
                  >
                    Terms
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/privacy"
                    title="Privacy"
                    onClick={scrollToTop}
                  >
                    Privacy
                  </FooterAnchorSecondary>
                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/frens"
                    title="Push Ecosystem"
                    onClick={scrollToTop}
                  >
                    Push Ecosystem
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    weight="400"
                    size="18px"
                    lineHeight="142%"
                  >
                    Governance
                  </Span>

                  <FooterAnchorSecondary
                    href="https://gov.push.org"
                    title="Push Governance"
                    target="_blank"
                  >
                    Push Governance
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://docs.push.org/governance"
                    title="Guides"
                    target="_blank"
                  >
                    Guides
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://gov.push.org/top?period=yearly"
                    title="Forum"
                    target="_blank"
                  >
                    Forum
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://www.notion.so/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                    title="Grants"
                    target="_blank"
                  >
                    Grants
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://snapshot.org/#/epns.eth"
                    title="Snapshot"
                    target="_blank"
                  >
                    Snapshot
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    weight="400"
                    size="18px"
                    lineHeight="142%"
                  >
                    Resources
                  </Span>
                  <FooterAnchorSecondary
                    href="https://push-protocol.medium.com/"
                    title="Blog"
                    target="_blank"
                  >
                    Blog
                  </FooterAnchorSecondary>
                  <FooterAnchorSecondary
                    href="https://whitepaper.push.org/"
                    title="Whitepaper"
                    target="_blank"
                  >
                    Whitepaper
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://github.com/ethereum-push-notification-service"
                    title="Github"
                    target="_blank"
                  >
                    Github
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://discord.gg/pushprotocol"
                    title="Discord"
                    target="_blank"
                  >
                    Discord
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://docs.push.org/developers"
                    title="Dev Guides"
                    target="_blank"
                  >
                    Dev Guides
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    weight="400"
                    size="18px"
                    lineHeight="142%"
                  >
                    Support
                  </Span>

                  <FooterAnchorSecondary
                    href="mailto:support@epns.io"
                    target="_blank"
                  >
                    Contact Us
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/faq"
                    title="FAQ"
                    onClick={scrollToTop}
                  >
                    FAQ
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    weight="400"
                    size="18px"
                    lineHeight="142%"
                  >
                    Subscribe
                  </Span>

                  <EmailInputTextField placeholder="Your Email" />
                </FooterLinks>
              </FooterColumn>
            </FooterContainer>
          </ItemH>

          {/* Social Icon Links */}
          <SocialLinks gap="32px">
            <ItemV
              justifyContent="flex-start"
              flex="1"
              gap="12px"
              className="pushLinks"
            >
              <LinkTo
                className="pushLogo"
                to="/"
                title="Push"
                onClick={scrollToTop}
              >
                <PushLogoTextWhite />
              </LinkTo>

              <FooterAnchorIcon
                href="https://github.com/ethereum-push-notification-service"
                title="Push Github"
                target="_blank"
              >
                <GithubSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
              <FooterAnchorIcon
                href="https://twitter.com/pushprotocol"
                title="Push Twitter"
                target="_blank"
              >
                <TwitterSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://t.me/epnsproject"
                title="Push Telegram"
                target="_blank"
              >
                <TelegramSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
              <FooterAnchorIcon
                href="https://discord.gg/pushprotocol"
                title="Push Discord"
                target="_blank"
              >
                <DiscordSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
            </ItemV>

            <ItemV
              justifyContent="flex-end"
              flex="1"
              gap="12px"
              className="pushPlatformLinks"
            >
              <FooterAnchorIcon
                href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
                title="Push iOS app"
                target="_blank"
              >
                <AppleSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://play.google.com/store/apps/details?id=io.epns.epns"
                title="Push Android app"
                target="_blank"
              >
                <AndroidSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://app.push.org"
                title="Push Dapp"
                target="_blank"
              >
                <PushBellSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
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
  background: #2a2a39;
  padding: 48px 30px 48px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 32px;
  box-sizing: border-box;

  & svg.figureSvg {
    width: 72px;
    height: 72px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    row-gap: 16px;

    & svg.figureSvg {
    }
  }
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
  color: #ffffff;

  flex-direction: column;

  align-items: center;

  @media ${device.tablet} {
    flex-basis: 50%;
    padding: 12px;
    row-gap: 16px;

    align-items: flex-start;

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
    content: '';
    top: -24px;
    left: 0;
    height: 1px;
    width: 100%;
    background: #2a2a39;
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

const FooterAnchorPrimary = styled(Anchor)`
  color: #dd44b9;
  border-radius: 16px;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 142%;
  justify-content: flex-start;

  &:hover & {
    filter: transparent;
  }
  &:before {
    background: transparent;
  }
  &:after {
    background: transparent;
  }
`;

const FooterAnchorSecondary = styled(Anchor)`
  color: #9c9cbe;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: normal;
  line-height: 142%;
  justify-content: flex-start;
  background: transparent;

  &:before {
    background: transparent;
  }
`;

const FooterAnchorIcon = styled(Anchor)`
  border: 1px solid #2a2a39;
  border-radius: 12px;
  padding: 10px;
`;

export default Footer;
