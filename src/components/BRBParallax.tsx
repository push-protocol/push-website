/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import ParallaxBRB from '../assets/Parallax.png';
import SecondParallaxBRB from '../assets/ParallaxBg2.png';
import ImageHolder from './ImageHolder';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GLOBALS, { device } from 'config/globals';
import useMediaQuery from 'hooks/useMediaQuery';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);



function BRBParallax() {
  const isMobile = useMediaQuery(device.mobileL);

  ScrollTrigger.defaults({
    // Defaults are used by all ScrollTriggers
    toggleActions: 'restart pause resume pause', // Scoll effect Forward, Leave, Back, Back Leave
    markers: false, // Easaly remove markers for production.
        
  });
      
  const timelineHeader = gsap.timeline({
    scrollTrigger: {
      id: 'ZOOM', // Custom label to the marker
      trigger: '#home', // What element triggers the scroll
      scrub: true, // Add a small delay of scrolling and animation. `true` is direct
      start: 'top top', // Start at top of Trigger and at the top of the viewport
      end: `${isMobile ? 'bottom top' : '+=500% 0px'}`, // The element is 500px hight and end 50px from the top of the viewport
      //   end: '+=500% 0px', // The element is 500px hight and end 50px from the top of the viewport
      pin: true // Pin the element true or false
    } });
      
  useEffect(() => {
    timelineHeader.
      to('.firstBackground', {
        scale: 2 },
      'sameTime');
    //   to('.secondBackground', {
    //     scale: 1 },
    //   'sameTime');
          
    ScrollTrigger.create({
      snap: 0.333
    });
  }, [isMobile]);
      
  return (
    <BRBWrapper>
      <FirstBackground id='home'>
        <MemberImage
          className="firstBackground"
          src={ParallaxBRB}
          srcSet={ParallaxBRB}
        />
      </FirstBackground>
    </BRBWrapper>
  );
}

const MemberImage = styled(ImageHolder)`
`;


const BRBWrapper = styled.div`
    width: 100%;
    color: white;
    margin-bottom: 400px;
    height: 100%;

    position: relative;
    scroll-snap-align: center;
    padding: 0px;

  @media ${device.mobileL} {
    margin-bottom: 70px;
    height: auto;
   }

    
`;

const FirstBackground = styled.div`
  width: 100%;
  height: 100%;
   
& img {
        width: 70% !important;
        height: 100%;
        margin: 0px auto;
        display: flex;
        justify-content: center;
    }
`;



export default BRBParallax;
