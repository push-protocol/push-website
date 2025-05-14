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
import { Image, ItemV, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import ParallaxBRB from '@site/static/assets/website/brb/mainbg.svg';

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
      <BRBWrapper id='home'>
        <FirstBackground className='firstBackground'>
          <ParallaxBRBBG>
            {isMobile && (
              <Image
                src={
                  require(`@site/static/assets/website/brb/mainbgmobile.webp`)
                    .default
                }
                srcSet={`${require(`@site/static/assets/website/brb/mainbgmobile@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/mainbgmobile@3x.webp`).default} 3x`}
                alt='Mobile main background image for Billion Reasons to Build website (#BRBIndia)'
                loading='lazy'
              />
            )}
            {!isMobile && <ParallaxBRB />}
          </ParallaxBRBBG>

          <ParallaxContent>
            <ParallaxHeader>#BRBIndia</ParallaxHeader>

            <ParallaxFlex>
              {Stats.map((item, i) => (
                <FlexItem key={i}>
                  <ParallelFlexTitle>{item.figure}</ParallelFlexTitle>

                  <ParallelFlexBody>{item.body}</ParallelFlexBody>
                </FlexItem>
              ))}
            </ParallaxFlex>
          </ParallaxContent>
        </FirstBackground>

        {/* <div style={{color:'#fff'}}>clea n clean clean</div> */}
      </BRBWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  font-family: 'Glancyr', sans-serif;
  color: white;
  margin-top: -15em;
  margin-bottom: 200px;
  position: relative;
  scroll-snap-align: center;
  padding: 0px;
  z-index: 9;
  pointer-events: none;

  @media ${device.tablet} {
    margin-top: -10em;
    scroll-snap-align: none;
    margin-bottom: 2em;
    overflow: hidden;
    padding-bottom: 2em;
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
  position: relative;

  @media ${device.mobileL} {
    width: 100%;
  }

  & svg {
    width: 100%;
    height: auto;
  }

  & > svg {
    width: 100%;
    height: auto;
  }
`;

const ParallaxBRBBG = styled(ItemV)`
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
`;

const ParallaxContent = styled(ItemV)`
  margin-top: -6%;

  @media ${device.tablet} {
    margin-top: 0%;
  }
`;

const ParallaxHeader = styled(Span)`
  font-size: 60px;
  font-weight: 400;
  letter-spacing: inherit;
  color: #e64de9;
  font-stretch: ultra-expanded;

  @media ${device.laptop} {
    font-size: 30px;
  }
`;

const ParallaxFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  gap: 8px;
  margin-top: 40px;
  position: absolute;
  top: 54%;

  @media (min-width: 1550px) {
    top: 58%;
    gap: 60px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 60px;
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

const ParallelFlexTitle = styled(Span)`
  font-size: 60px;
  text-align: center;
  font-weight: 400;
  color: #fff;
  line-height: inherit;

  @media ${device.tablet} {
    font-size: 45px;
  }
`;

const ParallelFlexBody = styled(Span)`
  font-size: 18px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: inherit;

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

export default BRBParallax;
