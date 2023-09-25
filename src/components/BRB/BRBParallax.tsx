/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { useEffect } from 'react';

// External Components
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

// Internal Components
import { ItemVV2, SpanV2 } from '@site/src/components/SharedStylingV2';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import ParallaxBRB from '@site/static/assets/Grouped.svg';
import ParallaxBRBMobile from '@site/static/assets/GroupedMobile.svg';

// Internal Configs
import { device } from '@site/src/config/globals';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function BRBParallax() {
  const isMobile = useMediaQuery(device.mobileL);

  ScrollTrigger.defaults({
    // Defaults are used by all ScrollTriggers
    // toggleActions: 'restart pause resume pause', // Scoll effect Forward, Leave, Back, Back Leave
    markers: false, // Easaly remove markers for production.
  });

  const timelineHeader = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      id: 'ZOOM', // Custom label to the marker
      trigger: '#home', // What element triggers the scroll
      scrub: 0.95, // Add a small delay of scrolling and animation. `true` is direct
      start: 'top top', // Start at top of Trigger and at the top of the viewport
      end: '+=100', // The element is 500px hight and end 50px from the top of the viewport
      //   end: '+=500% 0px', // The element is 500px hight and end 50px from the top of the viewport
      pin: true, // Pin the element true or false
    },
  });

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 480px)': function () {
        timelineHeader.to(
          '.firstBackground',
          {
            scale: 1.7,
          },
          'sameTime'
        );
      },
      '(max-width: 479px)': function () {
        return;
      },
      // 'all': function() { return; }
    });

    ScrollTrigger.create({
      snap: 0,
    });
  }, []);

  // useEffect(()=>{
  //   gsap.set('.firstBackground', {yPercent: 0});
  //   gsap.to('.firstBackground', {scale: 1.7, scrollTrigger: {
  //     trigger: '#home',
  //     pin: '#home',
  //     scrub: true
  //   }});
  // },[]);

  const Stats = [
    {
      figure: '18',
      body: 'CITIES',
    },
    {
      figure: '1',
      body: 'BIG PROBLEM',
    },
    {
      figure: '$50k+',
      body: 'AVAILABLE IN PRIZES',
    },
  ];

  return (
    <Container>
      <BRBWrapper id={!isMobile && 'home'}>
        <FirstBackground
          isMobile={isMobile}
          className="firstBackground"
        >
          <ParallaxBRBBG>
            {isMobile && 
              <ParallaxBRBMobile />
            }
            {!isMobile &&
              <ParallaxBRB />
            }
          </ParallaxBRBBG>
          
          <ParallaxHeader
            isMobie={isMobile}
          >
            #BRBIndia
          </ParallaxHeader>

          <ParallaxFlex>
            {Stats.map((item, i) => (
              <FlexItem key={i}>
                <ParallelFlexTitle>
                  {item.figure}
                </ParallelFlexTitle>

                <ParallelFlexBody
                  fontSize={isMobile ? '18px' : '14px'}
                  fontFamily="'Monaco', Tahoma, sans-serif"
                  color="#fff"
                  textAlign="center"
                  letterSpacing="0.03em"
                  lineHeight="inherit"
                >
                  {item.body}
                </ParallelFlexBody>
              </FlexItem>
            ))}
          </ParallaxFlex>
        </FirstBackground>

        {/* <div style={{color:'#fff'}}>clea n clean clean</div> */}
      </BRBWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  color: white;
  margin-top: -15em;
  margin-bottom: 200px;

  position: relative;
  scroll-snap-align: center;
  padding: 0px;
  z-index: 9;

  @media ${device.mobileL} {
    margin-top: -10em;
    scroll-snap-align: none;
    margin-bottom: 2em;
    overflow: hidden;
    padding-bottom: 18em;
    z-index: auto;
  }
`;

const BRBWrapper = styled.div`
  width: 100%;
  height: 100vh;
  @media ${device.mobileL} {
    min-height: 100vh;
  }
`;

const FirstBackground = styled.div`
  width: 80%;
  height: 100%;
  margin: 0px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const ParallaxBRBBG = styled(ItemVV2)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  & svg {
    width: 100%;
    height: auto;
  }
`

const ParallaxHeader = styled(SpanV2)`
  font-size: ${(props) => (props.isMobile ? '50px' : '40px')};
  font-weight: 900;
  letter-spacing: inherit;
  color: #E64DE9;
  margin: ${(props) => (props.isMobile ? '25% 0 0 0' : '5% 0 0 0')};
  font-stretch: ultra-expanded;
`;

const ParallaxFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  gap: 8px;
  margin-top: 51px;
  position: absolute;
  top: 54%;

  @media (min-width: 1550px) {
    top: 58%;
    gap: 60px;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    margin-top: 30px;
    // gap: 50px;
    top: 45%;
  }
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 89px;
  max-width: 204px;
  @media ${device.mobileL} {
    margin: 10px 0;
  }
`;

const ParallelFlexTitle = styled(SpanV2)`
  font-size: ${(props) => (props.isMobile ? '80px' : '65px')};
  text-align: center;
  font-weight: 600;
  color: #fff;
  line-height: inherit;
`

const ParallelFlexBody = styled(SpanV2)`
  
`

export default BRBParallax;
