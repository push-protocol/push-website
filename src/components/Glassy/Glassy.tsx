// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import { device } from "@site/src/config/globals";
import {
  A,
  Button,
  H2,
  Image,
  ItemH,
  ItemV,
  Section,
} from "@site/src/css/SharedStyling";
import useMediaQuery from "@site/src/hooks/useMediaQuery";
import WhiteArrow from "@site/static/assets/website/brb/others/white-arrow.svg";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Glassy = ({ section }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  // Internationalization
  const { t, i18n } = useTranslation();

  const [hovered, setHovered] = useState(false);

  const { config, header, body, footer, after } = section;
  const { id, height, padding, hideOnMobile, bg, bgvideosrc, bgtitle, link } = config || "";
  const {
    title,
    tags,
    illustration,
    align,
    icon,
    theme,
    highlight,
    subheader,
    iconalt,
    icontitle,
  } = header || "";
  const {
    type,
    imagesrc,
    videosrc,
    imagealt,
    imagetitle,
    bodytext,
    buttontext,
    buttonlink,
    buttontitle,
    codeblockImg,
  } = body || "";
  const { text } = footer || "";
  const { message, alignment } = after || "";

  const Tag = ({ item }) => {
    const { background, border, color, title, fontSize } = item || "";
    return (
      <TagItem
        background={background}
        border={border}
        order={tags?.length === 4 ? true : false}
        color={color}
        fontSize={fontSize}
      >
        {title}
      </TagItem>
    );
  };

  // handle mouse entry
  const handleMouseEnter = (e) => {
    setHovered(true);
  };

  // handle mouse leave
  const handleMouseLeave = (e) => {
    setHovered(false);

    // reset transform
    const container = document.getElementById(id);
    container.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  // handle mouse position
  const handleMouseMove = (e) => {
    const container = document.getElementById(id);
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const x = rect.width - offsetX;
    const y = offsetY;
    

    // Calculate the center of the container
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate the difference between the mouse position and the center of the container
    const diffX = offsetX - centerX;
    const diffY = offsetY - centerY;

    // Normalize the difference (so the values are between -1 and 1)
    const normX = diffX / centerX;
    const normY = diffY / centerY;

    // Convert the normalized values to degrees (for a subtle effect, we limit the rotation to 5 degrees)
    const degX = normY * 5;
    const degY = -normX * 5;

    // Calculate the distance for the Z translation (for a subtle effect, we limit the translation to 20px)
    const distZ = Math.sqrt(diffX * diffX + diffY * diffY) / 10;
    const transZ = Math.min(distZ, 20);

    // Apply the rotation and translation to the container
    container.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg) translateZ(${transZ}px)`;

    // Apply glow
    const glowwys = document.querySelectorAll(`.${id} > .glowwy`);
    glowwys.forEach(glowwy => {
      glowwy.style.top = `${y}px`;
      glowwy.style.right = `${x}px`;
    });
  };

  return (
    <Container
      id={id}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      height={height}
      hideOnMobile={hideOnMobile}
      type={type}
      className={`${hovered ? "active" : ""} ${id}`}
    >
      <GlowwyBorder 
        className={`${hovered ? "active" : ""} glowwy`}
      />

      <Glowwy 
        className={`${hovered ? "active" : ""} glowwy`}
      />
      
      <Subcontainer
        id={id}
        padding={padding}
        bg={bg}
        title={t(bgtitle)}
      >
        {/* If bgvideosrc is present, then play video on hover */}
        {bgvideosrc &&
          <ReactPlayer
            url={require(`@site/static/assets/website/home/${bgvideosrc}.mp4`).default}
            playing={hovered ? true : false}
            loop={false}
            muted={true}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, bottom:0, right: 0, left: 0, visibility: hovered && bgvideosrc ? 'visible' : 'hidden' }}
          />
        }

        <Header highlight={highlight} type={type} id={id}>
          <Subheader
            highlight={highlight}
            type={type}
            id={id}
            illustration={illustration}
          >
            <ItemH
              flex="1"
              alignSelf={illustration ? "center" : "flex-start"}
              gap={icon && "8px"}
            >
              {icon && (
                <GridImage
                  src={
                    require(`@site/static/assets/website/home/${icon}.webp`)
                      .default
                  }
                  srcSet={`${require(`@site/static/assets/website/home/${icon}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/home/${icon}@3x.webp`).default} 3x`}
                  alt={t(iconalt)}
                  title={t(icontitle)}
                  width="16px"
                  height="16px"
                />
              )}
              <Title align={align} highlight={highlight} subheader={subheader}>
                <H2
                  fontSize={isTablet ? "9px" : "11px"}
                  color="#D98AEC"
                  fontWeight="bold"
                  fontFamily="FK Grotesk Neue"
                >
                  {t(subheader)}
                </H2>

                <H2Text fontFamily="FK Grotesk Neue" theme={theme} type={type}>
                  {t(title)}
                </H2Text>
              </Title>

              {highlight && <Tag item={highlight} />}
            </ItemH>

            {illustration && (
              <GridImage
                src={
                  require(`@site/static/assets/website/home/${illustration}.webp`)
                    .default
                }
                srcSet={`${require(`@site/static/assets/website/home/${illustration}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/home/${illustration}@3x.webp`).default} 3x`}
                alt={t(iconalt)}
                title={t(icontitle)}
                width={isTablet ? "27px" : "auto"}
                height={isTablet ? "auto" : "37px"}
              />
            )}
          </Subheader>

          {/* tags */}
          {tags && (
            <TagItems
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              gap="12px"
              margin="14px 0 0 0"
            >
              {tags?.map((item) => <Tag item={item} />)}
            </TagItems>
          )}
        </Header>

        {body && (
          <Body>
            {/* If Image, check if videosrc is present, if yes, load video */}
            {type === "image" && videosrc &&
              <ReactPlayer
                url={require(`@site/static/assets/website/home/${videosrc}.mp4`).default}
                playing={hovered ? true : false}
                loop={false}
                muted={true}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0, visibility: hovered && videosrc ? 'visible' : 'hidden' }}
              />
            }

            {/* If Image, check if videosrc is present, if yes, play video on hover */}
            {type === "image" &&
              <BodyImage
                src={
                  require(`@site/static/assets/website/home/${imagesrc}.webp`)
                    .default
                }
                srcSet={`${require(`@site/static/assets/website/home/${imagesrc}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/home/${imagesrc}@3x.webp`).default} 3x`}
                alt={t(imagealt)}
                title={t(imagetitle)}
                style={{ visibility: hovered && videosrc ? 'hidden' : 'visible' }}
                type={type}
                id={id}
              />
            }

            {type === "codeblock" && (
              <CodeDiv>
                {/* Hack since codeblock is different currently */}
                <ItemV
                  padding="0px 0px 0px 0px"
                  flex="1"
                >
                  <SubscribeText>{t(bodytext)}</SubscribeText>

                  <ButtonItem
                    background="#E64DE9"
                    padding={!isTablet ? "14px 22px" : "10px 11px"}
                    margin="0px auto"
                    fontWeight="500"
                    fontSize="16px"
                    fontFamily="FK Grotesk Neue"
                    href={buttonlink}
                    title={t(buttontitle)}
                  >
                    {t(buttontext)}
                    <WhiteArrow />
                  </ButtonItem>
                </ItemV>

                {/* Hack since codeblock is different currently */}
                <ItemV
                  padding="0px 0px 0px 0px"
                >
                  {videosrc &&
                    <ReactPlayer
                      url={require(`@site/static/assets/website/home/${videosrc}.mp4`).default}
                      playing={hovered ? true : false}
                      loop={false}
                      muted={true}
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: 0, left: 0, visibility: hovered && videosrc ? 'visible' : 'hidden' }}
                    />
                  }

                  <BodyImage
                    src={
                      require(
                        `@site/static/assets/website/home/${codeblockImg}.webp`,
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/home/${codeblockImg}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/home/${codeblockImg}@3x.webp`).default} 3x`}
                    alt={t(imagealt)}
                    title={t(imagetitle)}
                    style={{ visibility: hovered && videosrc ? 'hidden' : 'visible' }}
                    type={type}
                    margin={isMobile && "12px 0 0 0"}
                  />
                </ItemV>
              </CodeDiv>
            )}
          </Body>
        )}

        {footer && (
          <Footer>
            {text && <H2Text fontFamily="FK Grotesk Neue">{t(text)}</H2Text>}
          </Footer>
        )}

        {after && (
          <AfterItem alignment={alignment}>
            <H2
              fontSize="12px"
              color="#FFF"
              fontFamily="FK Grotesk Neue"
              lineHeight="130%"
            >
              {t(message)}
            </H2>
          </AfterItem>
        )}
      </Subcontainer>
      
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  max-height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.height || "auto"};
  border-radius: 24px;
  box-sizing: border-box;
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // for glassy effect
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit; /* Inherit border-radius from parent container */
    z-index: -10; /* Put the pseudo-element behind the container content */
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    border-radius: inherit;
    /* background: #000000; */
    background: linear-gradient(211deg, #18181F 3.81%, #0D0D0F 94.55%);
    z-index: -8; /* Glowwy comes as -9 */
  }

  @media ${device.laptopM} {
    width: 100% !important;
    max-height: ${(props) => props.id == "web3-standard" && "215px !important"};
    min-height: ${(props) => props.id == "web3-standard" && "215px !important"};
  }

  @media ${device.tablet} {
    max-height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.height || "auto"};
  }


    
    @media ${device.mobileL} {
        display: ${(props) => props.hideOnMobile && 'none !important'};
        max-height: ${({id, type ,height}) => id == 'snap' ? '380px' : type == 'codeblock' && height ? '420px' : height ? height : 'auto'};
        min-height: ${({id, type ,height}) => id == 'snap' ? '380px' : type == 'codeblock' && height ? '420px' : height ? height : 'auto'};
        width: 100% !important;
    }
`;

const GlowwyBorder = styled.div`
  width: 0px;
  height: 0px;
  border-radius: 50%;
  box-shadow:
    0 0 49px 19px rgb(202, 55, 237),
    0 0 80px 40px #CA37ED,
    0 0 100px 50px rgb(202, 55, 237);
    // box-shadow:
    // 0 0 59px 29px rgb(202, 55, 237),
    // 0 0 100px 60px #CA37ED,
    // 0 0 140px 90px rgb(202, 55, 237);
  position: absolute;
  z-index: -9;
  display: none;

  &.active {
    display: block;
  }
`;

const Glowwy = styled(GlowwyBorder)`
  box-shadow: 0 0 100px 100px rgba(135, 34, 158, 0.15);
  z-index: 1;
`;

const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${(props) => props.padding || "24px"};
  background-image: url(${(props) => props.bg});
    background-position: ${(props) =>
      props.id == "snap"
        ? "center 35%"
        : props.id == "hyperscalable"
          ? "center 20px"
          : "center"};
  background-repeat: no-repeat;
  background-size: ${(props) =>
    props.id == "hyperscalable"
      ? "auto 70%"
      : props.id == "interoperable"
        ? "cover"
        : "contain"};

  @media ${device.tablet} {
    background-size: ${(props) =>
      props.id == "hyperscalable"
        ? "75% auto"
        : props.id == "interoperable"
          ? "cover"
          : "contain"};
  }
`;

const TagItem = styled.div`
  width: fit-content;
  border-radius: 12px;
  border: ${(props) => props.border};
  background: ${(props) => props.background || "transparent"};
  padding: ${(props) => (props.fontSize ? "4px 8px" : "4px 12px")};
  color: ${(props) => props.color};
  text-align: center;
  font-size: ${(props) => props.fontSize || "12px"};
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  &:nth-child(1) {
    order: ${(props) => (props.order ? 0 : -1)};
  }
`;

const TagItems = styled(ItemV)`
  gap: 6px;
  &:before {
    content: "";
    flex-basis: 100%;
  }
`;

const H2Text = styled(H2)`

    font-size: 19px;
    color: #FFF;
    line-height: 130%;
    white-space: pre;
    font-weight: 400;

    @media ${device.mobileL} {
        white-space: ${(props) => props.type === 'codeblock' ? 'normal' : 'pre'};
    }

    background: ${(props) => props.theme === 'hue' && "linear-gradient(270deg, #D162EC 4.53%, #D162EC 63.29%, #EAB7F6 99.72%)"};
    -webkit-background-clip: ${(props) => props.theme === 'hue' && "text"};
    -webkit-text-fill-color: ${(props) => props.theme === 'hue' && "transparent"};
`;

const SubscribeText = styled.h2`
  font-family: FK Grotesk Neue;
  font-size: 72px;
  background: linear-gradient(
    270deg,
    #d162ec 4.53%,
    #d162ec 63.29%,
    #eab7f6 99.72%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 auto;

  @media ${device.laptopM} {
    line-height: 100%;
  }

  @media ${device.laptop} {
    line-height: 64px;
    font-size: 64px;
  }
`;

const ButtonItem = styled(A)`
  display: flex;
  font-size: 16px;
  font-style: normal;
  align-items: center;
  align-self: center;
  gap: 8px;
  letter-spacing: -0.03em;
  border-radius: 16px;
  &:hover:after {
    opacity: 0;
  }
  &:active:after {
    opacity: 0;
  }
  @media ${device.mobileL} {
    width: 178px;
    margin-top: 10px;
  }
`;

const GridImage = styled(Image)`
  margin: ${(props) => props.margin || "initial"};
  object-fit: contain !important;

  @media ${device.mobileL} {
    width: ${({ id, type }) =>
      id == "snap" && type == "image"
        ? "100%"
        : type == "image"
          ? "80%"
          : "inherit"};
    margin: ${(props) => props.type == "image" && "0 auto"};
  }
`;

const BodyImage = styled(Image)`
  margin: ${(props) => props.margin || "initial"};
  object-fit: contain !important;

  @media ${device.mobileL} {
    width: ${({ id, type }) =>
      id == "snap" && type == "image"
        ? "100%"
        : type == "image"
          ? "80%"
          : "inherit"};
    margin: ${(props) => props.type == "image" && "0 auto"};
  }
`;

const Header = styled(ItemV)`
  justify-content: ${({ highlight, tags }) =>
    highlight ? "flex-start" : tags ? "center" : "center"};
  flex: ${({ id, highlight, type }) =>
    highlight ||
    type === "codeblock" ||
    id === "token-gated" ||
    id == "plug-play"
      ? "0"
      : "1"};
`;

const Subheader = styled(ItemH)`
  flex: ${({ id, highlight, type }) =>
    highlight ||
    type === "codeblock" ||
    id === "token-gated" ||
    id == "plug-play"
      ? "0"
      : "1"};
  align-items: ${(props) => props.illustration && "center"};
  align-self: ${(props) => props.highlight && "flex-start"};
`;

const Title = styled(ItemV)`
  align-items: ${({ align }) =>
    align === "left"
      ? "flex-start"
      : align === "right"
        ? "flex-end"
        : "center"};
  flex: ${({ highlight }) => highlight && "0"};
  gap: ${({ subheader }) => subheader && "8px"};
`;

const Body = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Background = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => (props.bg ? "#0D0D10" : "transparent")};
  flex: 1;
  box-sizing: border-box;
  padding: ${(props) => props.id == "hyperscalable" && "24px"};
  border-radius: ${(props) => props.id == "hyperscalable" && "24px"};

  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 85% 85%;
`;

const Footer = styled.div``;

const CodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  height: 100%;
`;


const AfterItem = styled.div`
  background-color: #252527;
  width: calc(100% + 48px) !important;
  position: relative;
  margin-left: -24px;
  margin-right: -24px;
  margin-bottom: -24px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  justify-content: ${(props) =>
    props.alignment == "left"
      ? "flex-start"
      : props.alignment == "right"
        ? "flex-end"
        : "center"};

  ::after,
  ::before {
    content: "";
    position: absolute;
    top: -29px;
    width: 0;
    height: 0;
  }

  ::before {
    left: 0;
    width: 29px;
    height: 29px;
    background: radial-gradient(
      circle at top right,
      transparent 70%,
      #252527 71%
    );
  }

  ::after {
    right: 0;
    width: 29px;
    height: 29px;
    background: radial-gradient(
      circle at top left,
      transparent 70%,
      #252527 71%
    );
  }
`;

export default Glassy;
