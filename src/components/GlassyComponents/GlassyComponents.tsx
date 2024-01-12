// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React from 'react'
import styled from 'styled-components';
import { Button, H2, Image ,ItemV, Section } from '@site/src/css/SharedStyling';
import WhiteArrow from '@site/static/assets/website/brb/others/white-arrow.svg';
import InterOperation from "@site/static/assets/website/grids/notifications/inter.png";
import { device } from '@site/src/config/globals';
import { URL } from 'url';

const GlassyComponents = ({title, srcref, srcMargin, height, tags, module, header ,buttonText, bgImage, icon, imageTop}) => {

    const Tag = ({background ,border ,color, title}) => {
        return(
            <TagItem background={background} border={border} color={color}>{title}</TagItem>
        )
      }
    
    if (module == 'default'){
        return (
        <BlockItem height={height} padding={imageTop && '0px'}>
             
             {!imageTop && <H2Text fontSize="19px" color="#FFF" lineHeight="130%">{title}</H2Text>}
    
            {srcref ? (
            <GridImage
                src={require(`@site/static/assets/website/grids/notifications/${srcref}.png`).default}
                srcSet={`${require(`@site/static/assets/website/grids/notifications/${srcref}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${srcref}@3x.png`).default} 3x`}
                alt={'Push Snap'}
                title="Push Snap"
                margin={srcMargin}
            />
            ) : (
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
    
            {imageTop && <H2 fontSize="19px" color="#FFF" margin="0 0 24px 24px" lineHeight="130%">{title}</H2>}
    
        </BlockItem>
    )} else if(module === 'row'){
        return (<BlockItem padding="0px 24px" height={height}>
        <ItemV flexDirection="row" justifyContent="space-between" alignItem="center" flex="1" margin="auto 0" height="100%">
           <H2 fontSize="19px" color="#FFF">{title}</H2>
    
                <GridImage
                    src={require(`@site/static/assets/website/grids/notifications/${icon}.png`).default}
                    srcSet={`${require(`@site/static/assets/website/grids/notifications/${icon}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${icon}@3x.png`).default} 3x`}
                    alt={'Push Snap'}
                    title="Push Snap"
                    width="auto"
                    height="100%"
            />
            </ItemV>
        </BlockItem>)}
        else if(module === 'main'){
            return (
            <BlockItem height={height}>
                <H2 fontSize="19px" color="#FFF" margin="0 0 10px 0" lineHeight="130%" textAlign="center">{title}</H2>
    
                <SubscribeText>
                     {header}
                </SubscribeText>
    
                <ButtonItem
                    background="#E64DE9"
                    padding="14px 22px"
                    margin="16px auto 32px auto"
                    fontWeight="500"
                    fontSize="16px"
                    >
                    {buttonText}
                    <WhiteArrow />
                </ButtonItem>
    
                <GridImage
                    src={require(`@site/static/assets/website/grids/notifications/${srcref}.png`).default}
                    srcSet={`${require(`@site/static/assets/website/grids/notifications/${srcref}@2x.png`).default} 2x, ${require(`@site/static/assets/website/grids/notifications/${srcref}@3x.png`).default} 3x`}
                    alt={'Push Snap'}
                    title="Push Snap"
                />
        </BlockItem>)}
        else if (module === 'bg') {
            return (
            <BlockItem padding="0px" height={height}>
            <Playground bgImage={bgImage}>
                <H2 fontSize="19px" color="#FFF" margin="0 0 24px 0" lineHeight="130%" textAlign="center">{title}</H2>
            </Playground>
            </BlockItem>
            )} else { return(<div></div>)}
}

const BlockItem = styled.div`
    width: 100%;
    max-height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.height || "auto"};
    border-radius: 24px;
    padding: ${(props) => props.padding || "24px"};
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.10);
    grid-area: ${(props) => props.position};

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
    font-weight: 500;
    line-height: normal;

  

    &:nth-child(1) {
        order: -1;
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
    white-space: pre;
`;

const Playground = styled(Section)`
  flex-direction: column;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 588px;
  min-height: 202px;
  padding: 24px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SubscribeText = styled.h2`
  font-size: 72px;
  background: linear-gradient(270deg, #D162EC 4.53%, #D162EC 63.29%, #EAB7F6 99.72%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: -0.03em;
  font-weight: 700;

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

`;

export default GlassyComponents