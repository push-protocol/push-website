import React from "react";
import styled from "styled-components";

// Internal Components
import {
  A,
  Button,
  Content,
  H2,
  Image,
  ItemH,
  ItemV,
  Span,
} from "@site/src/css/SharedStyling";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLink, BiShareAlt } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

// Internal Configs
import { device } from "@site/src/config/globals";

const FooterItem = () => {
  const isMobile = useMediaQuery(device.tablet);

  return (
    <div>
      <ShareRow>
        <ResponsiveH2
          size={isMobile ? "16px" : "24px"}
          weight="500"
          spacing="-0.02em"
          lineHeight="110%"
          color="#00000"
        >
          Be a part of the conversation by sharing this article
        </ResponsiveH2>

        {/* <Anchor
                  // href="https://twitter.com/pushprotocol"
                  title="Developer Docs"
                  target="_blank"
                  bg="#DD44B9"
                  radius="12px"
                  padding="14px 20px"
                  size="16px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="26px"
                  self={isMobile ? 'stretch' : 'self'}
                > */}
        <ShareButton
          title="Developer Docs"
          background="#D53A94"
          radius="12px"
          padding="14px 20px"
          size="16px"
          weight="500"
          spacing="-0.03em"
          lineHeight="26px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          self={isMobile ? "stretch" : "self"}
          //   onClick={handleOpen}
        >
          <BiShareAlt size={23} color="#fff" style={{ marginRight: "10px" }} />
          Share
        </ShareButton>
        {/* </Anchor> */}
      </ShareRow>

      <AboutSection>
        <AboutTitle>About Push Protocol</AboutTitle>
        <Span
          fontFamily="Strawford"
          textAlign="center"
          fontSize="19px"
          fontWeight="400"
          lineHeight="32px"
        >
          Push is the communication protocol of web3. Push protocol enables
          cross-chain notifications and messaging for dapps, wallets, and
          services tied to wallet addresses in an open, gasless, and
          platform-agnostic fashion. The open communication layer allows any
          crypto wallet / frontend to tap into the network and get the
          communication across.
        </Span>
      </AboutSection>

      <KPIBanner>
        <BannerItem
          onClick={() => OpenURL("https://twitter.com/pushprotocol")}
          style={{ cursor: "pointer" }}
          gap="18px"
          className="kpiItem"
        >
          <KPIFigure>
            <BsTwitter size={32} />
          </KPIFigure>
          <KPIMetric>Twitter</KPIMetric>
        </BannerItem>

        <BannerItem
          onClick={() => OpenURL("https://discord.gg/pushprotocol")}
          style={{ cursor: "pointer" }}
          gap="18px"
          className="kpiItem"
        >
          <KPIFigure>
            <FaDiscord size={32} />
          </KPIFigure>
          <KPIMetric>Discord</KPIMetric>
        </BannerItem>

        <BannerItem
          onClick={() => OpenURL("https://www.youtube.com/@pushprotocol")}
          style={{ cursor: "pointer" }}
          gap="18px"
          className="kpiItem"
        >
          <KPIFigure>
            <BsYoutube size={32} />
          </KPIFigure>
          <KPIMetric>YouTube</KPIMetric>
        </BannerItem>

        <BannerItem
          onClick={() =>
            OpenURL("https://www.linkedin.com/company/push-protocol/")
          }
          style={{ cursor: "pointer" }}
          gap="18px"
          className="kpiItem"
        >
          <KPIFigure>
            <BsLinkedin size={32} />
          </KPIFigure>
          <KPIMetric>Linkedin</KPIMetric>
        </BannerItem>
      </KPIBanner>
    </div>
  );
};

export default FooterItem;

const AboutSection = styled.div`
  margin-top: 99px;
  span {
    font-size: 18px;
    line-height: 37px;
    color: #282a2d;
    letter-spacing: -0.002em;

    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 36px;
    }
  }
`;

const AboutTitle = styled.div`
  font-family: "Strawford" !important;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #000000;
  margin-bottom: 10px;
  letter-spacing: -0.02em;
  @media ${device.mobileL} {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
`;

const KPIBanner = styled.div`
  background: #f1f2f4;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  font-family: "Strawford";
  font-style: normal;
  margin-top: 30px;

  & .kpiItem {
    display: flex;
    flex-direction: row;
    align-items: center !important;
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;

    row-gap: 32px;
    column-gap: 8px;
    margin-top: 30px;

    & .kpiItem {
      flex-direction: row;
      row-gap: 8px;

      // for 4 items
      flex: 0 0 48%;
      // align-items: flex-start;

      // for 3 items
      // flex: 0 0 100%;
      // align-items: center;
    }
  }
`;

const KPIFigure = styled.div`
  height: fit-content;
  width: fit-content;
`;

const BannerItem = styled(ItemV)`
  color: #000;
  grid-gap: 8px;
  &:hover {
    color: #d53893;
  }
`;

const KPIMetric = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -0.03em;
  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 400;
  }
`;

const ResponsiveH2 = styled(H2)``;

const ShareRow = styled.div`
  margin: 50px 0 0px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
    margin-top: 52px;
    align-items: center;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const ShareButton = styled(Button)`
  @media ${device.mobileL} {
    width: 100%;
    margin: 20px;
  }
`;
