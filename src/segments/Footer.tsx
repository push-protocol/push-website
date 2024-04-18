// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from "react";

// External Components
import { useTranslation } from "react-i18next";
import { BsArrowUpRight, BsTwitterX } from "react-icons/bs";
import styled from "styled-components";

// Internal Components
import {
  A,
  Content,
  Image,
  ItemH,
  ItemV,
  LinkTo,
  Section,
  Span,
} from "@site/src/css/SharedStyling";
import FooterFollowusFigure from "@site/static/assets/website/footer/footerfollowus.svg";
import FooterJoinusFigure from "@site/static/assets/website/footer/footerjoinus.svg";
import AppStoreSVG from "@site/static/assets/website/footer/appstore.svg";
import GooglePlaySVG from "@site/static/assets/website/footer/googleplay.svg";
import PushBellSVG from "@site/static/assets/website/footer/pushBell.svg";
import AndroidSVG from "@site/static/assets/website/shared/android.svg";
import AppleSVG from "@site/static/assets/website/shared/apple.svg";
import DiscordSVG from "@site/static/assets/website/shared/discord.svg";
import GithubSVG from "@site/static/assets/website/shared/github.svg";
import TelegramSVG from "@site/static/assets/website/shared/telegram.svg";
import TwitterSVG from "@site/static/assets/website/shared/twitter-icon.svg";
import { MailingSignup } from "../components/MailingSignup/MailingSignup";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

// Internal Configs
import { device } from "@site/src/config/globals";

function Footer() {
  // Internationalization
  const { t } = useTranslation();
   const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  const scrollToTop = () => {
    document.documentElement.scrollTo(0, 0);
  };

  return (
    <StyledFooter>
      {/* <FooterSection id="footer" background="#0D0D0F"> */}
      <FooterSection id="footer">
        <Content alignSelf="center">
          {/* Information Cards */}

          {/* <ItemH gap="32px">
            <InfoCard>
              <FooterJoinusFigure
                className="figureSvg"
                alt={t("footer.info-section.positions-card.image-alt")}
                title={t("footer.info-section.positions-card.image-title")}
              />

              <InfoDetails>
                <Span
                  color="#FFF"
                  fontWeight="500"
                  fontSize="24px"
                  lineHeight="142%"
                >
                  {t("footer.info-section.positions-card.text")}
                </Span>
                <FooterAnchorPrimary
                  href="https://angel.co/company/push-protocol"
                  title={t("footer.info-section.positions-card.link-text")}
                  target="_blank"
                >
                  {t("footer.info-section.positions-card.link-text")}&nbsp;
                  <BsArrowUpRight className="anchorSVGlink" />
                </FooterAnchorPrimary>
              </InfoDetails>
            </InfoCard>

            <InfoCard>
              <FooterFollowusFigure
                className="figureSvg"
                alt={t("footer.info-section.docs-card.image-alt")}
                title={t("footer.info-section.docs-card.image-title")}
              />

              <InfoDetails>
                <Span
                  color="#FFF"
                  fontWeight="500"
                  fontSize="24px"
                  lineHeight="142%"
                >
                  {t("footer.info-section.docs-card.text")}
                </Span>
                <FooterAnchorPrimary
                  href="/docs"
                  title={t("footer.info-section.docs-card.link-text")}
                >
                  {t("footer.info-section.docs-card.link-text")}&nbsp;
                  <BsArrowUpRight className="anchorSVGlink" />
                </FooterAnchorPrimary>
              </InfoDetails>
            </InfoCard>
          </ItemH> */}

          {/* footer links */}
          <ItemH flex="1" margin="0px 0 0 0">
            <FooterContainer>
              <FooterColumn>
                <FooterLinkItem>
                     <LinkTo
                        className="pushLogo"
                        to="/"
                        title="Push"
                        onClick={scrollToTop}
                        justifyContent={isMobile ? "center" : "flex-start"}
                        padding="0px 0px"
                      >
                        <Image
                          src={
                            require(
                              `@site/static/assets/website/segments/PushLogoTextWhite.webp`,
                            ).default
                          }
                          srcSet={`${require(`@site/static/assets/website/segments/PushLogoTextWhite@2x.webp`).default} 2x, ${require(`@site/static/assets/website/segments/PushLogoTextWhite@3x.webp`).default} 3x`}
                          alt={`Push Logo`}
                          width="auto"
                          height="auto"
                          loading="lazy"
                        />
                      </LinkTo>

                  <Span fontWeight="500" fontSize="16px" lineHeight="142%" margin="48px 0 12px 0">
                    {/* {t("footer.links-section.support-column.title")} */}
                    Get the latest Push news
                  </Span>

                  <MailingSignup
                    showArrow={true}
                    background="#0000"
                    borderColor="rgba(255, 255, 255, 0.30)"
                    inputWidth="90%"
                  />
                </FooterLinkItem>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span fontWeight="500" fontSize="16px" lineHeight="150%" margin="0 0 8px 0">
                    {t("footer.links-section.company-column.title")}
                  </Span>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/frens"
                    title={t(
                      "footer.links-section.company-column.push-ecosystem-link",
                    )}
                    onClick={scrollToTop}
                  >
                    {t(
                      "footer.links-section.company-column.push-ecosystem-link",
                    )}
                  </FooterAnchorSecondary>
                  <FooterAnchorSecondary
                    href="https://www.notion.so/pushprotocol/Push-Brand-Guide-Media-Kit-6f9db19d513c4365a1faa6c244515498"
                    title={t(
                      "footer.links-section.company-column.media-kit-link",
                    )}
                    target="_blank"
                  >
                    {t("footer.links-section.company-column.media-kit-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/tos"
                    title={t("footer.links-section.company-column.terms-link")}
                    onClick={scrollToTop}
                  >
                    {t("footer.links-section.company-column.terms-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/privacy"
                    title={t(
                      "footer.links-section.company-column.privacy-link",
                    )}
                    onClick={scrollToTop}
                  >
                    {t("footer.links-section.company-column.privacy-link")}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span fontWeight="500" fontSize="16px" lineHeight="150%" margin="0 0 8px 0">
                    {t("footer.links-section.governance-column.title")}
                  </Span>

                  <FooterAnchorSecondary
                    href="https://gov.push.org"
                    title={t(
                      "footer.links-section.governance-column.push-governance-link",
                    )}
                    target="_blank"
                  >
                    {t(
                      "footer.links-section.governance-column.push-governance-link",
                    )}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://push.org/docs/dao"
                    title={t(
                      "footer.links-section.governance-column.guides-link",
                    )}
                    target="_blank"
                  >
                    {t("footer.links-section.governance-column.guides-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://gov.push.org/top?period=yearly"
                    title={t(
                      "footer.links-section.governance-column.forum-link",
                    )}
                    target="_blank"
                  >
                    {t("footer.links-section.governance-column.forum-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://www.notion.so/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                    title={t(
                      "footer.links-section.governance-column.grants-link",
                    )}
                    target="_blank"
                  >
                    {t("footer.links-section.governance-column.grants-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://snapshot.org/#/epns.eth"
                    title={t(
                      "footer.links-section.governance-column.snapshot-link",
                    )}
                    target="_blank"
                  >
                    {t("footer.links-section.governance-column.snapshot-link")}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span fontWeight="500" fontSize="16px" lineHeight="150%" margin="0 0 8px 0">
                    {t("footer.links-section.resources-column.title")}
                  </Span>
                  <FooterAnchorSecondary
                    href="/blog"
                    title={t("footer.links-section.resources-column.blog-link")}
                    target="_blank"
                  >
                    {t("footer.links-section.resources-column.blog-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://github.com/push-protocol/"
                    title={t(
                      "footer.links-section.resources-column.github-link",
                    )}
                    target="_blank"
                  >
                    {t("footer.links-section.resources-column.github-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://discord.gg/pushprotocol"
                    title={t(
                      "footer.links-section.resources-column.discord-link",
                    )}
                    target="_blank"
                  >
                    {t("footer.links-section.resources-column.discord-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="/docs"
                    title={t(
                      "footer.links-section.resources-column.dev-guides-link",
                    )}
                  >
                    {t("footer.links-section.resources-column.dev-guides-link")}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span fontWeight="500" fontSize="16px" lineHeight="150%" margin="0 0 8px 0">
                    {t("footer.links-section.subscribe-column.title")}
                  </Span>

                  <FooterAnchorSecondary
                    href="mailto:support@push.org"
                    target="_blank"
                  >
                    {t("footer.links-section.subscribe-column.contact-us-link")}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/faq"
                    title={t("footer.links-section.subscribe-column.faq-link")}
                    onClick={scrollToTop}
                  >
                    {t("footer.links-section.subscribe-column.faq-link")}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>
            </FooterContainer>
          </ItemH>

          {/* Social Icon Links */}
          <SocialLinks>
            <ItemH 
              justifyContent="flex-start"
              flex="1"
              gap="12px"
              className="pushLinks">
              <FooterAnchorSecondary
                    href="mailto:support@push.org"
                    target="_blank"
                  >
                    Privacy Policy
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/faq"
                    title={t("footer.links-section.subscribe-column.faq-link")}
                    onClick={scrollToTop}
                  >
                    Terms and conditions
                  </FooterAnchorSecondary>
            </ItemH>

            <ItemV flexDirection={isTablet ? "column" : "row"} gap="16px" justifyContent="flex-end">
                <ItemH
                  // justifyContent="flex-start"
                  flex="0"
                  gap="16px"
                  className="pushLinks"
                >
              
                  
                  <FooterAnchorIcon
                    href="https://twitter.com/pushprotocol"
                    title="Push Twitter"
                    target="_blank"
                  >
                    <BsTwitterX size={22} />
                  </FooterAnchorIcon>

                  <FooterAnchorIcon
                    href="https://github.com/push-protocol/"
                    title="Push Github"
                    target="_blank"
                  >
                    <GithubSVG width={24} height={24} />
                  </FooterAnchorIcon>

                  <FooterAnchorIcon
                    href="https://t.me/epnsproject"
                    title="Push Telegram"
                    target="_blank"
                  >
                    <TelegramSVG width={24} height={24} />
                  </FooterAnchorIcon>
                  <FooterAnchorIcon
                    href="https://discord.gg/pushprotocol"
                    title="Push Discord"
                    target="_blank"
                  >
                    <DiscordSVG width={24} height={24} />
                  </FooterAnchorIcon>
                </ItemH>

                <ItemH
                  // justifyContent="flex-end"
                  flex="0"
                  gap="12px"
                  className="pushPlatformLinks"
                >
                  <A
                    href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
                    title="Push iOS app"
                    target="_blank"
                    padding="0px 0px"
                    borderRadius="0px"
                  >
                    <Image
                          src={
                            require(
                              `@site/static/assets/website/footer/appstore.png`,
                            ).default
                          }
                          srcSet={`${require(`@site/static/assets/website/footer/appstore@2x.png`).default} 2x, ${require(`@site/static/assets/website/footer/appstore@3x.png`).default} 3x`}
                          alt={`Push Logo`}
                          width="auto"
                          height="30px"
                          loading="lazy"
                        />
                  </A>

                  <A
                    href="https://play.google.com/store/apps/details?id=io.epns.epns"
                    title="Push Android app"
                    target="_blank"
                    padding="0px 0px"
                    borderRadius="0px"
                  >
                    <Image
                          src={
                            require(
                              `@site/static/assets/website/footer/googleplay.png`,
                            ).default
                          }
                          srcSet={`${require(`@site/static/assets/website/footer/googleplay@2x.png`).default} 2x, ${require(`@site/static/assets/website/footer/googleplay@3x.png`).default} 3x`}
                          alt={`Push Logo`}
                          width="auto"
                          height="30px"
                          loading="lazy"
                        />
                  </A>
                </ItemH>
            </ItemV>
          </SocialLinks>
        </Content>
      </FooterSection>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  font-family: FK Grotesk Neue;
  display: flex;
  position: relative;
  background: #0d0d0f;
`;

const FooterSection = styled(Section)`
  // flex-direction: column;
`;

const FooterContent = styled(Content)`
  // padding-bottom: 20px;
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
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  // flex-basis: 20%;
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
      font-size: 16px;
    }

    // &:last-child {
    //   flex-basis: 100%;
    // }
    
  }

  @media ${device.mobileL} {
    &:first-child {
        flex-basis: 100%;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 154px;
  @media ${device.mobileL} {
    min-width: 100%;
  }
`;

const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  @media ${device.mobileL} {
    min-width: 100%;
  }
`;

const SocialLinks = styled(ItemH)`
  margin: 64px 0 0px 0;
  position: relative;


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
  @media ${device.mobileL} {
    flex-direction: column-reverse;
    gap: 16px;
  }
`;

const FooterAnchorPrimary = styled(A)`
  color: #dd44b9;
  border-radius: 16px;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 142%;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0;

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

const FooterAnchorSecondary = styled(A)`
  color: #a5abb8 !important;
  padding: 0px;
  font-size: 14px;
  font-weight: 200;
  letter-spacing: normal;
  line-height: 219%;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0;

  &:hover {
    color: #dd44b9 !important;
    background: transparent !important;
  }

  &:before {
    background: transparent;
  }
`;

const FooterAnchorIcon = styled(A)`
  border-radius: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: transform 0.25s ease-out;
  }
`;

export default Footer;
