// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React from 'react'
import styled from 'styled-components';
import { Button, H2, Image ,ItemH, ItemV, Section } from '@site/src/css/SharedStyling';
import WhiteArrow from '@site/static/assets/website/brb/others/white-arrow.svg';
import JsLogo from "@site/static/assets/website/grids/notifications/js.png";
import ReactLogo from "@site/static/assets/website/grids/notifications/react.png";
import { device } from '@site/src/config/globals';
import { URL } from 'url';
import CodeBlock from '@theme/CodeBlock';
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";


const GlassyComponents = ({ section }) => {
    const { config, header, body, footer } = section;
    const { id, height, padding, hideOnMobile, bg, sectionBg } = config || '';
    const { title, tags, illustration, align, icon, theme, highlight, subheader } = header || '';
    const { type, imagesrc, alt, bodyText, buttonText, buttonLink, codeblock } = body || '';
    const { text, fieldText } = footer || '';



    const Tag = ({background ,border ,color, title}) => {
        return(
            <TagItem background={background} border={border} order= {tags?.length === 4 ? true : false} color={color}>{title}</TagItem>
        )
      }

  return (
        <Container id={id} height={height} padding={padding} bg={bg} hideOnMobile={hideOnMobile}>
            <Background id={id} bg={sectionBg}>
            <Header justifyContent={highlight && 'flex-start'} highlight={highlight} type={type} id={id} flex={highlight || type === 'codeblock' || id === 'token-gated' ? '0' : '1'}>
                <ItemH flex={highlight|| type === 'codeblock' || id === 'token-gated' ? '0' : '1'} alignItems={illustration && 'center'}>

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
                        
                        <ItemV alignItems={align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'} gap={subheader && '8px'}>
                            <H2 fontSize="11px" color="#D98AEC"  fontWeight="bold">{subheader}</H2>

                            <H2Text theme={theme} type={type}>{title}</H2Text>
                        </ItemV>

                        {highlight && (
                            <Tag 
                            background={highlight.background}
                            border={highlight.border}
                            color={highlight.color}
                            title={highlight.title} />
                        )}
                    </ItemH>

                   {illustration && (
                    <GridImage
                        src={require(`@site/static/assets/website/grids/notifications/${illustration}.png`).default}
                        srcSet={`${require(`@site/static/assets/website/grids/notifications/${illustration}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${illustration}@3x.png`).default} 3x`}
                        alt={'Push Snap'}
                        title="Push Snap"
                        width="auto"
                        height="55px"
                    />
                   )} 
                </ItemH>

                {/* tags */}
                {tags && (
                    <TagItems flexDirection="row" alignItems='flex-start' justifyContent="flex-start" gap="12px" margin="14px 0 0 0">
                    {tags?.map((item)=>(
                        <Tag 
                            background={item.background}
                            border={item.border}
                            color={item.color}
                            title={item.title} />
                    ))}
                </TagItems>
                )}
            </Header>


            {body && 
            (<Body flex={type === codeblock && '1'}>
                {type === 'image' && (
                  <GridImage
                    src={require(`@site/static/assets/website/grids/notifications/${imagesrc}.png`).default}
                    srcSet={`${require(`@site/static/assets/website/grids/notifications/${imagesrc}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${imagesrc}@3x.png`).default} 3x`}
                    alt={alt}
                    title={alt}
                    type={type}
                    />
                )}

                {type === 'codeblock' && (
                    <CodeDiv>
                       <SubscribeText>
                        {bodyText}
                        </SubscribeText>
            
                        <ButtonItem
                            background="#E64DE9"
                            padding="14px 22px"
                            margin="0px auto"
                            fontWeight="500"
                            fontSize="16px"
                            >
                            {buttonText}
                            <WhiteArrow />
                        </ButtonItem> 
                    

                        <Div>
                            <Tabs className="codetabs" showLineNumbers={true} groupId="code-examples">
                                <TabItem value="js" attributes={{className: "codetab js"}} default>

                                <TechDocCodeBlock
                                    language="jsx"
                                     showLineNumbers={true}>
                                    {codeblock}
                                </TechDocCodeBlock> 

                                </TabItem>
                                <TabItem value="react" attributes={{className: "codetab react"}} default>

                                    <TechDocCodeBlock
                                            language="jsx"
                                            showLineNumbers={true}>
                                            {codeblock}
                                        </TechDocCodeBlock> 

                            </TabItem>
                            </Tabs>
                     </Div>
                    </CodeDiv>
                )}
            </Body>)}
            </Background>

            {footer && (
                <Footer fieldText={fieldText}>
                    {text && (<H2Text>{text}</H2Text>)}

                    {fieldText && (
                        <FooterField>
                             <H2 fontSize="12px" textAlign='right' color="#FFF"  lineHeight="130%" margin="auto 24px auto auto">*Other Chat Apps: 1024 Members</H2>
                        </FooterField>
                    )}
                </Footer>
            )}
            </Container>
)}



const Container = styled.div`
    position: relative;
    width: 100%;
    max-height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.height || "auto"};
    border-radius: 24px;
    padding: ${(props) => props.padding || "24px"};
    box-sizing: border-box;
    border: ${(props) => props.id == 'hyperscalable' ? '1px solid rgba(255, 255, 255, 0.01)' : '1px solid rgba(255, 255, 255, 0.10)'};
    overflow: hidden !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.id == 'hyperscalable' && '#252527'};


    // background size
    background-image: url(${(props) => props.bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    @media ${device.laptopL} {
        width: 100% !important;
    }

    @media ${device.mobileL} {
        display: ${(props) => props.hideOnMobile && 'none !important'};
        max-height: ${(props) => props.height ? props.height : 'auto'};
        min-height: ${(props) => props.height ? props.height : 'auto'};
        width: 100% !important;
    }

`;

const TagItem = styled.div`
    width: fit-content;
    border-radius: 12px;
    border: ${(props) => props.border};
    background: ${(props) => props.background || "transparent"};
    padding: ${(props) => props.padding || "4px 12px"};
    color: ${(props) => props.color};
    text-align: center;
    font-size: 12px;
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
  font-size: 72px;
  background: linear-gradient(270deg, #D162EC 4.53%, #D162EC 63.29%, #EAB7F6 99.72%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 auto;

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
    width: ${(props) => props.type == 'image' && "70%"};
    margin: ${(props) => props.type == 'image' && "0 auto"};
  }

`;

const Header = styled(ItemV)`
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
    background-color: ${(props) => props.fieldText &&  "#252527"};
    width: ${(props) => props.fieldText &&  "100%"};
    max-height: ${(props) => props.fieldText &&  "29px !important"};
    min-height: ${(props) => props.fieldText &&  "29px"};
    // position: ${(props) => props.fieldText &&  "absolute"};
    bottom: ${(props) => props.fieldText &&  "0"};
    left: ${(props) => props.fieldText &&  "0"};
    right: ${(props) => props.fieldText &&  "0"};
`;

const CodeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // flex: 1;
    width: 100%;
    height: 100%;
`;


const FooterField = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const Div = styled.div`
    width: 100% !important;
    position: relative;


    .tabs {
        position: absolute;
        right: 24px;
        z-index: 20;
        margin: 24px 0 0 0;
        flex-direction: column;
        gap: 12px;
    }
    .tabs-container {
        margin-bottom: 0 !important;

        @media ${device.mobileL} {
            width: 300px !important;
            margin: 0 auto;
        }

        @media ${device.mobileM} {
            width: 100% !important;
        }
    }

    .codetabs li {
        height: 32px;
        width: 32px;
        padding: 0px;
    }

    .codetab.js::before {
        background-image: url(${JsLogo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        margin: 0px;
    }

    .codetab.react::before {
        background-image: url(${ReactLogo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        margin: 0px;
    }

    .codetab.js:after {
        content: '';
    }

    .codetab.react:after {
        content: '';
    }

    .tabs__item--active {
        border: none;
    }

    pre {
        background-color: #0D0D0F !important;
        border: 1px solid rgba(255, 255, 255, 0.10);
        border-radius: 24px;
    }

    div {
        border-radius: 24px;
        background: transparent !important;
    }

    .margin-top--md {
        margin: 0 auto !important;
    }

 

    code {
        span {
            background-color: #0D0D0F !important;
        }
    }
    

    .clean-btn {
        position: relative;
        top: 120px; 
        left: -15px; 
    }

`;

const TechDocCodeBlock = styled(CodeBlock)`
    font-size: 14px;
    margin: 0px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    // width: inherit;
    box-sizing: border-box !important;

    @media ${device.mobileL} {
        overflow-x: auto;
        overflow-y: hidden;
    }

  /* WebKit browsers (Chrome, Safari) */
  *::-webkit-scrollbar {
      width: 3px !important;
  }
  
  *::-webkit-scrollbar-thumb {
      background: #CB3FAA;
      border-radius: 6px;
  }
  
  *::-webkit-scrollbar-track {
        background: transparent;
  }
  
  *::-webkit-scrollbar-button {
      display: none !important;
  }
  
  /* Firefox */
  * {
      scrollbar-color: #CB3FAA #f1f1f1;
      scrollbar-width: thin;
  }
`;

export default GlassyComponents