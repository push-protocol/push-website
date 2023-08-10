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
    markers: true, // Easaly remove markers for production.
        
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
        scale: 1.7 },
      'sameTime');
          
    ScrollTrigger.create({
      snap: 0.333
    });
  }, [isMobile]);
      
  return (
    <Container>
      <BRBWrapper id='home'>
        <FirstBackground className='firstBackground'>
          {/* <MemberImage
          className="firstBackground"
          src={ParallaxBRB}
          srcSet={ParallaxBRB}
        /> */}
        koko
        </FirstBackground>

        {/* <div style={{color:'#fff'}}>clea n clean clean</div> */}
      </BRBWrapper>
    </Container>
  );
}

const MemberImage = styled(ImageHolder)`
`;

const Container = styled.div`
    width: 100%;
    color: white;
    margin-top: -100px;
    margin-bottom: 300px;
    // height: 100%;

    position: relative;
    scroll-snap-align: center;
    padding: 0px;

      @media ${device.mobileL} {
         margin-top: -100px;
         margin-bottom: 70px;
        //  height: auto;
   }
`;


const BRBWrapper = styled.div`
    // width: 100%;
    // color: white;
    // margin-bottom: 400px;
    // height: 100%;

    // position: relative;
    // scroll-snap-align: center;
    // padding: 0px;

//   @media ${device.mobileL} {
//     margin-bottom: 70px;
//     height: auto;
//    }

width: 100%;
height: 100vh;
`;

const FirstBackground = styled.div`
  width: 80%;
  height: 100%;
  margin: 0px auto;

  background-image: url(${ParallaxBRB});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  
  display: flex; 
  align-items: center;
  justify-content: center;
   
// & img {
//         width: 70% !important;
//         height: 100%;
//         margin: 0px auto;
//         display: flex;
//         justify-content: center;
//     }
`;



export default BRBParallax;
