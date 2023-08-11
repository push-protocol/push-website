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
import { Span } from 'components/SharedStyling';

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
      end: '+=500% 0px', // The element is 500px hight and end 50px from the top of the viewport
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

  const Stats = [
    {
      figure:'18',
      body: 'CITIES'
    },
    {
      figure:'1',
      body: 'BIG PROBLEM'
    },
    {
      figure:'$50k+',
      body: 'AVAILABLE IN PRICES'
    }
  ];
      
  return (
    <Container>
      <BRBWrapper id='home'>
        <FirstBackground className='firstBackground'>
          <Span 
            size={isMobile ? '25px' : '40px'}
            family='Glancyr !important'
            color='#E64DE9'
            margin={isMobile ? '14em 0 0 0' : '100px 0 0 0'}
          >
            #BRBIndia
          </Span>

          <ParallaxFlex>
            {Stats.map((item,i)=>(
              <FlexItem key={i}>
                <Span 
                  size={isMobile ? '45px' :'70px'}
                  family='Glancyr !important'
                  textAlign='center'
                  weight='600'
                  color='#fff'>
                  {item.figure}
                </Span>
   
                <Span 
                  size={isMobile ? '10px' : '12px'}
                  family='Glancyr !important'
                  color='#fff'
                  textAlign='center'
                >
                  {item.body}
                </Span>
              </FlexItem>
            ))}
          </ParallaxFlex>
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
    margin-top: -15em;
    margin-bottom: 200px;
    // height: 100%;

    position: relative;
    scroll-snap-align: center;
    padding: 0px;

      @media ${device.mobileL} {
         margin-top: -30em;
         margin-bottom: 50px;
         overflow: hidden;
         padding-bottom: 7em;
   }
`;


const BRBWrapper = styled.div`
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {    
    //   align-items: flex-end;
//   justify-content: flex-end;
}
`;

const ParallaxFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 35%;
    margin-top: 51px;

    @media ${device.mobileL} {
        flex-direction: column;
        margin-top: 21px;
        // column-gap: 20px;
    }
`;

const FlexItem = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   @media ${device.mobileL} {
    margin: 10px 0;
}
   
`;




export default BRBParallax;
