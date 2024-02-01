// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React from 'react'
import styled from 'styled-components';
import { Button, H2, Image ,ItemH, ItemV, Section } from '@site/src/css/SharedStyling';
import WhiteArrow from '@site/static/assets/website/brb/others/white-arrow.svg';
import { device } from '@site/src/config/globals';
import useMediaQuery from '@site/src/hooks/useMediaQuery';


const GlassyComponents = ({ section }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

    const { config, header, body, footer, after } = section;
    const { id, height, padding, hideOnMobile, bg } = config || '';
    const { title, tags, illustration, align, icon, theme, highlight, subheader } = header || '';
    const { type, imagesrc, alt, bodyText, buttonText, buttonLink, codeblockImg } = body || '';
    const { text } = footer || '';
    const { message, alignment } = after || '';



    const Tag = ({ item }) => {
        const { background, border, color, title, fontSize } = item || ''
        return(
            <TagItem background={background} border={border} order= {tags?.length === 4 ? true : false} color={color} fontSize={fontSize}>{title}</TagItem>
        )
      }

  return (
        <Container id={id} height={height} padding={padding} bg={bg} hideOnMobile={hideOnMobile} type={type}>

            <Header highlight={highlight} type={type} id={id}>
                <Subheader highlight={highlight} type={type} id={id} illustration={illustration}>
                    <ItemH flex='1' alignSelf={illustration ? 'center' : 'flex-start'} gap={icon && '8px'}>

                    {icon && (
                        <GridImage
                            src={require(`@site/static/assets/website/grids/notifications/${icon}.png`).default}
                            srcSet={`${require(`@site/static/assets/website/grids/notifications/${icon}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${icon}@3x.png`).default} 3x`}
                            alt={'Push Snap'}
                            title="Push Snap"
                            width="16px"
                            height="16px"
                        />
                   )} 
                        <Title align={align} highlight={highlight} subheader={subheader}>
                            <H2 fontSize={isTablet ? "9px" : "11px"} color="#D98AEC"  fontWeight="bold" fontFamily="FK Grotesk Neue">{subheader}</H2>

                            <H2Text fontFamily="FK Grotesk Neue" theme={theme} type={type}>{title}</H2Text>
                        </Title>

                        {highlight && (
                            <Tag item={highlight} />
                        )}
                    </ItemH>

                   {illustration && (
                    <GridImage
                        src={require(`@site/static/assets/website/grids/notifications/${illustration}.png`).default}
                        srcSet={`${require(`@site/static/assets/website/grids/notifications/${illustration}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${illustration}@3x.png`).default} 3x`}
                        alt={'Push Snap'}
                        title="Push Snap"
                        width={isTablet ? "41px" : "auto"}
                        height={isTablet ? "auto" : "55px"}
                    />
                   )} 
                </Subheader>

                {/* tags */}
                {tags && (
                    <TagItems flexDirection="row" alignItems='flex-start' justifyContent="flex-start" gap="12px" margin="14px 0 0 0" >
                    {tags?.map((item)=>(
                        <Tag item={item} />
                    ))}
                </TagItems>
                )}
            </Header>


            {body && 
            (<Body>
                {type === 'image' && (
                  <GridImage
                    src={require(`@site/static/assets/website/grids/notifications/${imagesrc}.png`).default}
                    srcSet={`${require(`@site/static/assets/website/grids/notifications/${imagesrc}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${imagesrc}@3x.png`).default} 3x`}
                    alt={alt}
                    title={alt}
                    type={type}
                    id={id}
                    />
                )}

                {type === 'codeblock' && (
                    <CodeDiv>
                       <SubscribeText>
                        {bodyText}
                        </SubscribeText>
            
                        <ButtonItem
                            background="#E64DE9"
                            padding={!isTablet ? "14px 22px" : '10px 11px'}
                            margin="0px auto"
                            fontWeight="500"
                            fontSize="16px"
                            fontFamily="FK Grotesk Neue"
                            >
                            {buttonText}
                            <WhiteArrow />
                        </ButtonItem> 

                        <GridImage
                            src={require(`@site/static/assets/website/grids/notifications/${codeblockImg}.png`).default}
                            srcSet={`${require(`@site/static/assets/website/grids/notifications/${codeblockImg}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${codeblockImg}@3x.png`).default} 3x`}
                            alt={alt}
                            title={alt}
                            type={type}
                            margin={isMobile && '12px 0 0 0'}
                            />
                    

                       
                    </CodeDiv>
                )}
            </Body>)}

            {footer && (
                <Footer>
                    {text && (<H2Text fontFamily="FK Grotesk Neue">{text}</H2Text>)}
                </Footer>
            )}

            {after && (
                <AfterItem alignment={alignment}>
                    <H2 fontSize="12px" color="#FFF" fontFamily="FK Grotesk Neue" lineHeight="130%">{message}</H2>
                </AfterItem>
            )}
            </Container>
)}


const AfterItem = styled.div`
    background-color: #252527;
    width: calc(100% + 48px) !important;
    // max-height: 29px !important;
    // min-height: 29px;
    position: relative;
    margin-left: -24px;
    margin-right: -24px;
    margin-bottom: -24px;
    display: flex;
    align-items: center;
    padding: 8px 24px;
    justify-content: ${(props) => props.alignment == 'left' ? 'flex-start' : props.alignment == 'right' ? 'flex-end' : 'center'};


    ::after, ::before {
        content: '';
        position: absolute;
        top: -29px;
        width: 0;
        height: 0;
      }

      ::before {
        left: 0;
        width: 29px;
        height: 29px;
        background: radial-gradient(circle at top right, transparent 70%, #252527 71%);
      }
      
      ::after {
        right: 0;
        width: 29px;
        height: 29px;
        background: radial-gradient(circle at top left, transparent 70%, #252527 71%);

      }
`;


const Container = styled.div`
    position: relative;
    width: 100%;
    max-height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.height || "auto"};
    border-radius: 24px;
    padding: ${(props) => props.padding || "24px"};
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.10);
    overflow: hidden !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    background-image: url(${(props) => props.bg});
    background-position: ${(props) => props.id == 'hyperscalable' ? 'center 20px' : 'center'};
    background-repeat: no-repeat;
    background-size: ${(props) => props.id == 'hyperscalable' ? 'auto 75%' : props.id == 'interoperable' ? 'cover' : 'contain'};

    @media ${device.laptopM} {
        width: 100% !important;
        max-height: ${(props) => props.id == 'web3-standard' && "215px !important"};
        min-height: ${(props) => props.id == 'web3-standard' && "215px !important"};
    }

    @media ${device.tablet} {
        background-size: ${(props) => props.id == 'hyperscalable' ? '75% auto' : props.id == 'interoperable' ? 'cover' : 'contain'};
        max-height: ${(props) => props.height || "auto"};
        min-height: ${(props) => props.height || "auto"};
    }

    
    @media ${device.mobileL} {
        display: ${(props) => props.hideOnMobile && 'none !important'};
        max-height: ${({type ,height}) => type == 'codeblock' && height ? 'auto !important' : height ? height : 'auto'};
        min-height: ${({type ,height}) => type == 'codeblock' && height ? 'auto !important' : height ? height : 'auto'};
        width: 100% !important;
    }

`;

const TagItem = styled.div`
    width: fit-content;
    border-radius: 12px;
    border: ${(props) => props.border};
    background: ${(props) => props.background || "transparent"};
    padding: ${(props) => props.fontSize ? "4px 8px"  : "4px 12px"};
    color: ${(props) => props.color};
    text-align: center;
    font-size: ${(props) => props.fontSize || "12px"};
    font-style: normal;
    font-weight: bold;
    line-height: normal;

  

    &:nth-child(1) {
        order: ${(props) => props.order ? 0 : -1};
    }
`;

const TagItems = styled(ItemV)`
    gap: 6px;
    &:before {
        content:"";
        flex-basis: 100%;
    }
`;

const H2Text = styled(H2)`
    font-size: 19px;
    color: #FFF;
    line-height: 130%;
    white-space: pre;

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
  background: linear-gradient(270deg, #D162EC 4.53%, #D162EC 63.29%, #EAB7F6 99.72%);
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

const ButtonItem = styled(Button)`
  display: flex;
  font-size: 16px;
  font-style: normal;
  align-items: center;
  align-self:center;
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
    width: ${({id, type}) => id == 'snap' && type == 'image' ? "100%" : type == 'image' ? '80%' : 'inherit' };
    margin: ${(props) => props.type == 'image' && "0 auto"};
  }

`;

const Header = styled(ItemV)`
    justify-content: ${({highlight, tags}) => highlight ? 'flex-start' : tags ? 'center' : 'center' };
    flex: ${({id, highlight, type}) =>  highlight || type === 'codeblock' || id === 'token-gated' ? '0' : '1'};
`;

const Subheader = styled(ItemH)`
    flex: ${({id, highlight, type}) =>  highlight || type === 'codeblock' || id === 'token-gated' ? '0' : '1'};
    align-items: ${(props) => props.illustration && 'center'};
    align-self: ${(props) => props.highlight && 'flex-start'};
`;

const Title = styled(ItemV)`
    align-items: ${({align}) => align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'};
    flex: ${({highlight}) => highlight && '0'};
    gap: ${({subheader}) => subheader && '8px'};
`;

const Body = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Background = styled.div`
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.bg ? '#0D0D10' : 'transparent'};
  flex: 1;
  box-sizing: border-box;
  padding: ${(props) => props.id == 'hyperscalable' &&  "24px"};
  border-radius: ${(props) => props.id == 'hyperscalable' &&  "24px"};

  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 85% 85%;
`;

const Footer = styled.div`
`;

const CodeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    width: 100%;
    height: 100%;
`;


export default GlassyComponents;

