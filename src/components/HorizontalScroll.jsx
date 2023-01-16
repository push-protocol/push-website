/* eslint-disable */
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components'
import { device } from '../config/globals';
import { Anchor, AnchorLink, B, H2, ItemV, Span, SpanLink } from './SharedStyling';
import PushbuildsliderFigure from '../assets/figures/pushbuildsliderfigure.png';
import PushgovernancesliderFigure from '../assets/figures/pushgovernancesliderfigure.png';
import Pushdao from '../assets/figures/pushdao.png';
import ImageHolder from './ImageHolder';
import { FiArrowUpRight } from 'react-icons/fi';



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
            xPercent: -79 * (totalPanels - 1),
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
              <GrowPushCard background="#2A2A39" ref={(e) => createPanelsRefs(e, 0)} className="panel">

                <GrowPushCardDetails>
                  <Span
                    color="#ADB8D7"
                    size="22px"
                    weight="500"
                    // spacing="-0.03em"
                    lineHeight="146%"
                  >
                    <B color="#fff">Push Notifications</B> directly connect applications to individual users, enabling secure and personalized communication in response to customized on- and off-chain activity.
                  </Span>
                  <Anchor
                    href="https://docs.push.org/developers"
                    title="Developer Docs"
                    target="_blank"
                    padding="0px 0px"
                    size="20px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="26px"
                    className='button'
                    margin="10px 0px 0px 0px"
                  >
                  <SpanLink>
                    Build Push Notifications
                  </SpanLink>
                  <FiArrowUpRight className="anchorSVGlink" />
                  </Anchor>
                </GrowPushCardDetails>

                <Div>
                  <MemberImage
                        className='figureSvg'
                        src={PushbuildsliderFigure}
                        srcSet={PushbuildsliderFigure}
                        alt={'Illustration showing ease of building with Push'}
                        title='Build with Push'
                      />
                </Div>
              </GrowPushCard>

              <GrowPushCard background="#2A2A39" margin='0 0 0 2%' ref={(e) => createPanelsRefs(e, 1)} className="panel">

                <GrowPushCardDetails>
                  <Span
                    color="#ADB8D7"
                    size="22px"
                    weight="500"
                    // spacing="-0.03em"
                    lineHeight="146%"
                  >
                    <B color="#fff">Push Chat</B> is the leading decentralized, web3 native chat application with user friendly features like 1-1, group chat, videos/images, and (soon) streaming.
                  </Span>
                  <Anchor
                    href="https://docs.push.org/developers"
                    title="Developer Docs"
                    target="_blank"
                    padding="0px 0px"
                    size="20px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="26px"
                    className='button'
                    margin="10px 0px 0px 0px"
                  >
                  <SpanLink>
                    Build with Push Chat
                  </SpanLink>
                  <FiArrowUpRight className="anchorSVGlink" />
                  </Anchor>
                </GrowPushCardDetails>

                <Div>
                  <MemberImage
                        className='figureSvg'
                        src={PushgovernancesliderFigure}
                        srcSet={PushgovernancesliderFigure}
                        alt={'Illustration showing ease of building with Push'}
                        title='Build with Push'
                      />
                </Div>
              </GrowPushCard>


              <GrowPushCard background="#2A2A39" margin='0 0 0 2%' ref={(e) => createPanelsRefs(e, 2)} paddingBottom={'54px'} className="panel">

                <GrowPushCardDetails>
                  <Span
                    color="#ADB8D7"
                    size="22px"
                    weight="500"
                    // spacing="-0.03em"
                    lineHeight="146%"
                  >
                    <B color="#fff">Push DAO</B> is the home of community ownership of the Push Protocol. Push token holders can view, propose, and vote on critical developments to the protocol.
                  </Span>
                  <Anchor
                    href="https://docs.push.org/developers"
                    title="Developer Docs"
                    target="_blank"
                    padding="0px 0px"
                    size="20px"
                    weight="500"
                    spacing="-0.03em"
                    lineHeight="26px"
                    className='button'
                    margin="10px 0px 0px 0px"
                  >
                  <SpanLink>
                    Explore Push DAO
                  </SpanLink>
                  <FiArrowUpRight className="anchorSVGlink" />
                  </Anchor>
                </GrowPushCardDetails>

                <Div>
                  <MemberImage
                        className='figureSvg'
                        src={Pushdao}
                        srcSet={Pushdao}
                        alt={'Illustration showing ease of building with Push'}
                        title='Build with Push'
                      />
                </Div>
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
  // padding: calc(calc(100vh - 698px) / 2) 0px;
  padding: calc(calc(100vh - 750px) / 2) 0px;
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
  justify-content: space-between;
  padding: 74px 74px 0px 74px;
  padding-bottom: ${(props) => props.paddingBottom};
  min-width: 68%;
  // min-width: 80%;
  box-sizing: border-box;

  background: ${(props) => props.background || '#FFFBFB'};
  margin: ${(props) => props.margin || ''};
  border-radius: 48px;

  & .figureSvg {
    width: 300px;
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