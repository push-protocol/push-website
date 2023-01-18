/* eslint-disable */
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components'
import { device } from '../config/globals';
import { Anchor, AnchorLink, B, H2, ItemV, Span} from './SharedStyling';
import PushNotifications from '../assets/figures/pushnotifications.webp';
import PushChat from '../assets/figures/pushchat.webp';
import Pushdao from '../assets/figures/pushdao.webp';
import ImageHolder from './ImageHolder';
import { FiArrowUpRight } from 'react-icons/fi';
import useMediaQuery from 'hooks/useMediaQuery';



// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SlideElement = ({
  content,
  linkContent,
  image,
  alt,
  title,
  sendRef,
  addMargin,
  link,
  paddingBottom
}) => {
  const isMobile = useMediaQuery(device.tablet)

  return(
    <GrowPushCard background="#2A2A39" ref={sendRef} margin={addMargin && "0 0 0 2%"} paddingBottom ={ paddingBottom} className="panel">

    <GrowPushCardDetails>
      <Span
        color="#ADB8D7"
        size={isMobile ? "20px" : "22px"}
        weight={isMobile ? "400" : "500"}
        lineHeight="146%"
      >
        <B color="#fff">{title}</B> {content}
      </Span>
      <Anchor
        href={link}
        title="Developer Docs"
        target="_blank"
        padding="0px 0px"
        size={isMobile ? "18px" : "20px"}
        weight={isMobile ? "400" : "500"}
        spacing="-0.03em"
        lineHeight="26px"
        className='button'
        margin="10px 0px 0px 0px"
      >
      <SpanLink>{linkContent}</SpanLink>
      <FiArrowUpRight className="anchorSVGlink" />
      </Anchor>
    </GrowPushCardDetails>

    <Div>
      <MemberImage
            className='figureSvg'
            src={image}
            srcSet={image}
            alt= {alt}
            title = {title}
          />
    </Div>
  </GrowPushCard>
  )
}

const HorizontalScroll = () => {
    const panels = useRef([]);
    const panelsContainer = useRef();
    const isMobile = useMediaQuery(device.tablet)

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

              <SlideElement sendRef={(e) => createPanelsRefs(e,0)} 
                content = {`directly connect applications to individual users, enabling secure and personalized communication in response to customized on- and off-chain activity.`}
                linkContent = "Build Push Notifications"
                image = {PushNotifications}
                alt={'Illustration showing Push Notifications'}
                title='Push Notifications'
                addMargin={false}
                link="https://docs.push.org/developers"
              />

              <SlideElement sendRef={(e) => createPanelsRefs(e,1)} 
                content = {`is the leading decentralized, web3 native chat application with user friendly features like 1-1, group chat, videos/images, and (soon) streaming.`}
                linkContent = "Build with Push Chat"
                image = {PushChat}
                alt={'Illustration showing Push Chat'}
                title='Push Chat'
                addMargin={true}
                link="https://docs.push.org/developers"
              />

              <SlideElement sendRef={(e) => createPanelsRefs(e,2)} 
                content = {`is the home of community ownership of the Push Protocol. Push token holders can view, propose, and vote on critical developments to the protocol.`}
                linkContent = "Explore Push DAO"
                image = {Pushdao}
                alt={'Illustration showing Push DAO'}
                title='Push DAO'
                addMargin={true}
                link="https://docs.push.org/developers"
                paddingBottom={"54px"}
              />
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
  box-sizing: border-box;

  background: ${(props) => props.background || '#FFFBFB'};
  margin: ${(props) => props.margin || ''};
  border-radius: 48px;

  & .figureSvg {
    width: 500px;
    height: 100%;
  
    @media ${device.tablet} {
      width: 400px;
      height: 100%;
    }

    @media ${device.mobileL} {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 1025px) and (max-width: 1250px) {
       width: 400px;
       height: 100%;
    }

    @media (min-width: 1440px) and (max-width: 1800px) {
      width: 500px;
      height: 100%;
   }

   @media (min-width: 1200px) and (max-height: 758px) {
       width: 400px;
       height: 100%;
 }

   
  }

  @media ${device.tablet} {
   padding: 30px 30px 0px 30px;
   border-radius: 36px;
  }

  @media (max-width: 1200px){
    margin: ${(props) => '10px 0px' || ''};
    padding: 30px 30px 0px 30px;
  }

`;

const GrowPushCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;

  @media ${device.laptop}{
   row-gap: 10px;
   margin-bottom: 10px;
  }
`;

const SpanLink = styled(Span)`
  position: relative;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Div = styled.div`
`;

export default HorizontalScroll