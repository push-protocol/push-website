/* eslint-disable */
import React, { Fragment, useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components'
import GLOBALS, { device } from '../config/globals';
import { Anchor, Content, H2, HeroHeader, ItemBreak, ItemH, ItemV, Section, Span } from './SharedStyling';
import { Atag, ButtonV2, ContentV2, H1V2, H2V2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from './SharedStylingV2';
import { ReactComponent as PushbuildsliderFigure } from '../assets/figures/pushbuildsliderfigure.svg';
import { ReactComponent as PushgovernancesliderFigure } from '../assets/figures/pushgovernancesliderfigure.svg';



// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const panels = useRef([]);
    const panelsContainer = useRef();

    // ScrollTrigger.saveStyles(".mobile, .desktop");

    const createPanelsRefs = (panel, index) => {
      panels.current[index] = panel;
    };
  
    useEffect(() => {
      const totalPanels = panels.current.length;

      ScrollTrigger.matchMedia({
        "(min-width: 1025px)": function() {
          gsap.to(panels.current, {
            xPercent: -75 * (totalPanels - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: panelsContainer.current,
              pin: true,
              scrub: 1,
              snap: 1 / (totalPanels - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: () => '+=' + panelsContainer.current.offsetWidth
            }
          });
         },
        "(max-width: 1023px)": function() { },
        "all": function() { }
      });
  
    
    }, []);
  return (
    <>

          <SliderContainer
               ref={panelsContainer}
            >
              <GrowPushCard background="#ECDCD9" ref={(e) => createPanelsRefs(e, 0)} className="panel">
                <Div>
                  <PushbuildsliderFigure className='figureSvg'/>
                </Div>

                <GrowPushCardDetails>
                  <ResponsiveH2
                    color="#09090B"
                    size="40px"
                    weight="700"
                    spacing="-0.02em"
                    lineHeight="110%"
                    margin="0"
                  >
                    Build with Push
                  </ResponsiveH2>
                  <Span
                    color="#303C5E"
                    size="19px"
                    weight="400"
                    spacing="-0.03em"
                    lineHeight="160%"
                  >
                    Push offers dapp developers on any blockchain network the opportunity to build solutions on a
                    progressively decentralized stack by enabling web3-native communication.
                  </Span>
                  <Anchor
                    href="https://docs.epns.io/developers"
                    title="Developer Docs"
                    target="_blank"
                    bg="#DD44B9"
                    radius="16px"
                    padding="14px 32px"
                    size="18px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="26px"
                    self="flex-start"
                  >
                    Start Building
                  </Anchor>
                </GrowPushCardDetails>
              </GrowPushCard>

              <GrowPushCard background="#C4A8FB" margin='0 0 0 2%' ref={(e) => createPanelsRefs(e, 1)} className="panel">
                <Div>
                 <PushgovernancesliderFigure className='figureSvg' />
                </Div>

                <GrowPushCardDetails>
                  <ResponsiveH2
                    color="#09090B"
                    size="40px"
                    weight="700"
                    spacing="-0.02em"
                    lineHeight="110%"
                    margin="0"
                  >
                    Governed by the Community
                  </ResponsiveH2>
                  <Span
                    color="#303C5E"
                    size="19px"
                    weight="400"
                    spacing="-0.03em"
                    lineHeight="160%"
                  >
                    Decentralized communication needs decentralized actors. Get involved in Push governance to build the
                    future of web 3
                  </Span>
                  <Anchor
                    href="https://gov.push.org"
                    title="Governance"
                    target="_blank"
                    bg="#DD44B9"
                    radius="16px"
                    padding="14px 32px"
                    size="18px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="26px"
                    self="flex-start"
                  >
                    Know More
                  </Anchor>
                </GrowPushCardDetails>
              </GrowPushCard>
            </SliderContainer>
            </>
  )
}

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const SliderContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0px;
  flex-wrap: nowrap;
  
  @media ${device.laptop}{
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0px 0px;
  }

  `;

const GrowPushCard = styled(ItemV)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 32px;
  padding: 0px 60px;
  min-width: 85% !important;
  // min-height: 700px;
  min-height: auto;

  background: ${(props) => props.background || '#FFFBFB'};
  margin: ${(props) => props.margin || ''};
  border-radius: 48px;

  & .figureSvg {
    width: 200px;
    height: 100%;
  
    @media ${device.tablet} {
      width: 100%;
    }

    @media ${device.laptopL} {
      width: 100%;
      height: 200px;
    }

    @media only screen and (min-width: 1441px) and ${device.desktopL} {
      width: 100%;
      height: 250px;
    }
  }

  @media ${device.tablet} {
    padding: 28px 28px;
    border-radius: 36px;
    min-height: auto;
  }

  @media ${device.laptop}{
    margin: ${(props) => '10px 0px' || ''};
    min-width: 100%;
    row-gap: 32px;
    padding: 28px 28px;
    min-height: auto;
  }

`;

const GrowPushCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;

  @media ${device.laptop}{
   row-gap: 10px;
  }
`;

const Div = styled.div`
`;

export default HorizontalScroll