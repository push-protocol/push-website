// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useLayoutEffect, useState } from 'react';

// External Components
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

// Internal Components
import { A,H2, Image, ItemH, ItemV, LinkTo, Span } from '@site/src/css/SharedStyling';

// Internal Configs
import { device, size } from '@site/src/config/globals';
import { ShowcaseList, ShowcaseResponsiveList } from "@site/src/config/HomeShowcaseList";

/**
 * edit this to change the order
 */

// first array is first row in pattern
// second array is first 2 icons and last 3 icons on second row in pattern
// third array is grid icons to left of text - 3rd and 4th row(left of text and button)
// fourth array is grid icons to left of text - 3rd and 4th row(right of text and button)
// fifth array is first 2 icons and last 3 icons on 5th row in pattern
// sixth array is 6th(last) row in pattern

// last 2 arrays are designs after grids in first and second row middle icons has formed

function PartnerChannels() {
  // Internationalization
  const { t } = useTranslation();

  const [active, setActive] = useState(false);
  // const itemRef = useRef();
  // const onScreen = useOnScreen(itemRef);
  const { ref: itemRef, inView: myElementIsVisible } = useInView();

  // GSAP scroll animation
  useEffect(()=>{
    gsap.defaults({ ease: "power3" });  
    const blogListArray = gsap.utils.toArray(".showcaseItem");
    
    blogListArray.forEach((item, index)=> { 
      gsap.to(item,
        {
          width: 96,
          height: 96, 
          opacity: 1,
          margin: '14px',
          scrollTrigger: {
            trigger: "#showcase-section", 
            toggleActions: "play none none reverse", 
            start: '25% center', // trigger element, viewport  
            end: "75% center",
            scrub: true,
            markers: false 
          }
        }
      );
    })
  },[])

  return (
    <div className='ShowcasePartnersSection'>
      <PartnerRowV2 itemPos="top">
        <ItemV>
          <ItemH>
            {ShowcaseList.top.left.upper.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
          <ItemH>
            {ShowcaseList.top.left.lower.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
        </ItemV>
        <ItemV>
          <ItemH>
            {ShowcaseList.top.mid.upper.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
          <ItemH>
            {ShowcaseList.top.mid.lower.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
        </ItemV>
        <ItemV>
          <ItemH>
            {ShowcaseList.top.right.upper.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
          <ItemH>
            {ShowcaseList.top.right.lower.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
        </ItemV>
      </PartnerRowV2>

      <PartnerResponsiveRow>
      {
        ShowcaseResponsiveList.top.map((item, idx) => (
          <ShowcaseLogoResponsive
            key={idx}
            width={item.width}
            height={item.height}
            src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
            srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
            alt={`${item.alt}`}
            className={item.class}
          />
        ))
      }
      </PartnerResponsiveRow>

      <ShowcaseContent>
        <PartnerRowV2 itemPos="left">
          <ItemV>
            <ItemH>
              {ShowcaseList.left.left.upper.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  margin={item.margin}
                  opacity={item.opacity}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                  id={`secondItem-${idx}`}
                />
              ))}
            </ItemH>
            <ItemH>
              {ShowcaseList.left.left.lower.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  margin={item.margin}
                  opacity={item.opacity}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                  id={`secondItem-${idx}`}
                />
              ))}
            </ItemH>
          </ItemV>
        
          <ItemV>
            <ItemH>
              {ShowcaseList.left.right.upper.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  margin={item.margin}
                  opacity={item.opacity}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                  id={`secondItem-${idx}`}
                />
              ))}
            </ItemH>
            <ItemH>
              {ShowcaseList.left.right.lower.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  margin={item.margin}
                  opacity={item.opacity}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                  id={`secondItem-${idx}`}
                />
              ))}
            </ItemH>
          </ItemV>
        </PartnerRowV2>

        <ShowcaseMainContent
          display="flex"
          flexDirection="column"
        >
          <ResponsiveH2
            color="#fff"
            fontSize="36px"
            fontWeight="500"
            letterSpacing="-0.02em"
            margin="0px 0px"
            lineHeight="110%"
            fontFamily="FK Grotesk Neue"
          >
            <b>
            {t('home.partners-section.partner-channels-title')}
            </b>
          </ResponsiveH2>

          <Span
            color="#fff"
            size="18px"
            weight="400"
            spacing="-0.03em"
            lineHeight="160%"
            textAlign='center'
          >
            {t('home.partners-section.partner-channels-description')}
          </Span>

          <A
            href="/frens"
            title={t('home.partners-section.partner-channels-button-alt')}
            background="#DD44B9"
            // hoverColor="#fff"
            borderRadius="16px"
            padding="14px 32px"
            fontSize="16px"
            fontWeight="500"
            letterSpacing="-0.06em"
            lineHeight="26px"
            margin="15px 0px 0px 0px"
            alignSelf="center"
          >
            {t('home.partners-section.partner-channels-button')}
          </A>
        </ShowcaseMainContent>

        <PartnerRowV2 itemPos="right">
          <ItemV>
            <ItemH>
              {ShowcaseList.right.left.upper.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  margin={item.margin}
                  opacity={item.opacity}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                  id={`secondItem-${idx}`}
                />
              ))}
            </ItemH>
            <ItemH>
              {ShowcaseList.right.left.lower.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  margin={item.margin}
                  opacity={item.opacity}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                  id={`secondItem-${idx}`}
                />
              ))}
            </ItemH>
          </ItemV>
        
          <ItemV>
            <ItemH>
              {ShowcaseList.right.right.upper.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  margin={item.margin}
                  opacity={item.opacity}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                  id={`secondItem-${idx}`}
                />
              ))}
            </ItemH>
            <ItemH>
              {ShowcaseList.right.right.lower.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  margin={item.margin}
                  opacity={item.opacity}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                  id={`secondItem-${idx}`}
                />
              ))}
            </ItemH>
          </ItemV>
        </PartnerRowV2>
      </ShowcaseContent>

      <PartnerResponsiveRow>
      {
        ShowcaseResponsiveList.bottom.map((item, idx) => (
          <ShowcaseLogoResponsive
            key={idx}
            width={item.width}
            height={item.height}
            src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
            srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
            alt={`${item.alt}`}
            className={item.class}
          />
        ))
      }
      </PartnerResponsiveRow>

      <PartnerRowV2 itemPos="bottom">
        <ItemV>
          <ItemH>
            {ShowcaseList.bottom.left.upper.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
          <ItemH>
            {ShowcaseList.bottom.left.lower.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
        </ItemV>
        <ItemV>
          <ItemH>
            {ShowcaseList.bottom.mid.upper.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
          <ItemH>
            {ShowcaseList.bottom.mid.lower.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
        </ItemV>
        <ItemV>
          <ItemH>
            {ShowcaseList.bottom.right.upper.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
          <ItemH>
            {ShowcaseList.bottom.right.lower.map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                margin={item.margin}
                opacity={item.opacity}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`secondItem-${idx}`}
              />
            ))}
          </ItemH>
        </ItemV>
      </PartnerRowV2>
    </div>
  );
}

const PartnerRowV2 = styled(ItemH)`
  @media ${device.laptopL} {
    display: none;
  }
  
  flex-flow: nowrap;
  flex: 1;

  & > ${ItemV} {
    flex: initial;
    justify-content: ${(props) => props.itemPos == 'top' ? 
                            'flex-end' : props.itemPos == 'bottom' ? 
                            'flex-start' : props.itemPos == 'left' ? 
                            'center' : props.itemPos == 'right' ? 
                            'center' : 'initial'};

    & > ${ItemH} {
      flex: initial;
    }

    &:nth-child(1) {
      & > ${ItemH} {
        justify-content: ${(props) => props.itemPos == 'top' ? 
                            'flex-end' : props.itemPos == 'bottom' ? 
                            'flex-end' : props.itemPos == 'left' ? 
                            'flex-end' : props.itemPos == 'right' ? 
                            'flex-start' : 'initial'};
        align-items: ${(props) => props.itemPos == 'top' ? 
                            'flex-end' : props.itemPos == 'bottom' ? 
                            'flex-start' : props.itemPos == 'left' ? 
                            'flex-end' : props.itemPos == 'right' ? 
                            'flex-start' : 'initial'};
      }
    }

    &:nth-child(2) {
      & > ${ItemH} {
        justify-content: ${(props) => props.itemPos == 'top' ? 
                            'center' : props.itemPos == 'bottom' ? 
                            'center' : props.itemPos == 'left' ? 
                            'center' : props.itemPos == 'right' ? 
                            'center' : 'initial'};
        align-items: ${(props) => props.itemPos == 'top' ? 
                            'flex-end' : props.itemPos == 'bottom' ? 
                            'flex-start' : props.itemPos == 'left' ? 
                            'flex-end' : props.itemPos == 'right' ? 
                            'flex-start' : 'initial'};
      }
    }

    &:nth-child(3) {
      & > ${ItemH} {
        justify-content: ${(props) => props.itemPos == 'top' ? 
                            'flex-start' : props.itemPos == 'bottom' ? 
                            'flex-start' : props.itemPos == 'left' ? 
                            'flex-start' : props.itemPos == 'right' ? 
                            'flex-end' : 'initial'};
        align-items: ${(props) => props.itemPos == 'top' ? 
                            'flex-end' : props.itemPos == 'bottom' ? 
                            'flex-start' : props.itemPos == 'left' ? 
                            'flex-end' : props.itemPos == 'right' ? 
                            'flex-start' : 'initial'};
      }
    }
  }
`

const ShowcaseLogo = styled(Image)`
  margin: ${(props) => props.margin || "initial"};
  opacity: ${(props) => props.opacity || "initial"};

  @media ${device.laptopL} {
    display: none;
  }
`

const ShowcaseContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 14px auto;

  @media ${device.laptopL} {

  }
`;

const ShowcaseMainContent = styled(ItemH)`
  flex: 1;
  min-width: 580px;

  @media ${device.laptopL} {
    min-width: auto;
  }
  
  span {
    margin: 0px 30px;
    text-align: center;
  }
  
  @media (max-width: 1200px) {
    padding: 30px 0px;
  }
`;

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const PartnerResponsiveRow = styled(ItemV)`
  display: none;
  padding: 20px 0;  
  
  @media ${device.laptopL} {
    display: flex;
    flex-direction: row;
    gap: 28px;
  }
`

const ShowcaseLogoResponsive = styled(ShowcaseLogo)`
  @media ${device.laptopL} {
    display: block;
  }
`

export default PartnerChannels;
