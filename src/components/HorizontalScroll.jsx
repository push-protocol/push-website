/* eslint-disable */
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components'
import { device } from '../config/globals';
import { Anchor, H2, ItemV, Span } from './SharedStyling';
import PushbuildsliderFigure from '../assets/figures/pushbuildsliderfigure.webp';
import PushgovernancesliderFigure from '../assets/figures/pushgovernancesliderfigure.webp';
import ImageHolder from './ImageHolder';



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
        "(min-width: 1199px)": function() {
          gsap.to(panels.current, {
            xPercent: -75 * (totalPanels - 1),
            // xPercent: -100 * (totalPanels - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: panelsContainer.current,
              pin: true,
              scrub: true,
              // snap: 1 / (totalPanels - 1),
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
          sizing='calc(100vh-0)'
               ref={panelsContainer}
            >
              <GrowPushCard background="#ECDCD9" ref={(e) => createPanelsRefs(e, 0)} className="panel">
                <Div>
                  <MemberImage
                        className='figureSvg'
                        src={PushbuildsliderFigure}
                        srcSet={PushbuildsliderFigure}
                        alt={'Illustration showing ease of building with Push'}
                        title='Build with Push'
                      />
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
                    href="https://docs.push.org/developers"
                    title="Developer Docs"
                    target="_blank"
                    bg="#DD44B9"
                    radius="16px"
                    padding="14px 32px"
                    size="18px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="26px"
                    // self="flex-start"
                    className='button'
                  >
                    Start Building
                  </Anchor>
                </GrowPushCardDetails>
              </GrowPushCard>

              <GrowPushCard background="#C4A8FB" margin='0 0 0 2%' ref={(e) => createPanelsRefs(e, 1)} className="panel">
                <Div>
                 <MemberImage
                        className='figureSvg'
                        src={PushgovernancesliderFigure}
                        srcSet={PushgovernancesliderFigure}
                        alt={'Illustration showing community led governance'}
                        title='Community Governance'
                      />
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
                    // self="flex-start"
                    className='button'
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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: calc(calc(100vh - 698px) / 2) 0px;
  flex-wrap: nowrap;
  margin: auto 0;
  
  @media (max-width: 1200px){
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0px 0px;
    margin-top: 20px;
  }

  @media (min-width: 1200px) and (max-height: 758px) {
     margin-top: 40px;
  }


  `;

 const MemberImage = styled(ImageHolder)`
`;

const GrowPushCard = styled(ItemV)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 32px;
  padding: 70px 70px;
  // min-width: 85% !important;
  // min-height: 700px;
  // height: auto;
  // min-width: 834px;
  min-width: 68%;
  // height: 698px;

  background: ${(props) => props.background || '#FFFBFB'};
  margin: ${(props) => props.margin || ''};
  border-radius: 48px;

  & .figureSvg {
    width: 550px;
    height: 100%;
  
    @media ${device.tablet} {
      width: 100%;
    }

    @media (min-width: 1025px) and (max-width: 1250px) {
       width: 400px;
       height: 100%;
    }

    @media (min-width: 1441px) and (max-width: 1800px) {
      width: 550px;
      height: 100%;
   }

   @media (min-width: 1200px) and (max-height: 758px) {
       width: 400px;
       height: 100%;
 }

   
  }

  @media ${device.tablet} {
    padding: 30px 30px;
    border-radius: 36px;
  }

  @media (max-width: 1200px){
    margin: ${(props) => '10px 0px' || ''};
    padding: 40px 40px;
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

  .button {
    align-self: flex-start;
    @media (max-width: 1200px) {
    align-self: center;
    margin: 0 auto;
   }
   }
`;

const Div = styled.div`
`;

export default HorizontalScroll