/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React,{ useRef } from 'react';

// External Components
// import Marquee, { MarqueeDirection } from 'react-marquee-slider';
import styled from 'styled-components';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


type Props = {
  direction: MarqueeDirection;
  speed?: number;
  gap?: number;
  gradientWidth?: number;
  children?: React.ReactNode;
  pause?: boolean;
};


function NewMarqueeAnimation(props: Props) {
  const {
    // speed = 100,
    speed,
    gap = 0,
    gradient = false,
    gradientWidth = 64,
    // direction = 'left',
    direction,
    pause = false,
  } = props;
  
  const isMobile = useMediaQuery('(max-width: 480px)');
  const splideRef = useRef(null);
  const scrollRef = useRef(null);


  return (
    <div style={{maxHeight: '85px'}}>
    {/* <Marquee */}
    <Splide
        ref={splideRef}
        // style={{background: 'red', margin: 'auto 0'}}
        options={{
          width: isMobile ? '100vw' : '80vw',
          type: 'loop',
          direction: direction,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '18px',
          fixedWidth: isMobile ? '200px' : '250px',
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: speed,
          }
          // padding: { left: isMobile ? 0 : 80, right: isMobile ? 0 : 80 },
          // perMove: 1,
          // pagination: false,
          // omitEnd: true,
          // slideFocus: true,
          // gap: isMobile ? '2em' : '1.5em',
          // fixedWidth: isMobile ? '100vw' : '413px',
          
        }}
        extensions={ { AutoScroll } }
      >
          {props.children}
    </Splide>
    {/* //   speed={speed}
      // velocity={50}
    //   gap={gap}
    //   gradient={gradient}
    //   gradientWidth={gradientWidth}
      // direction={direction}
    //   pauseOnClick={pause}
    > */}
      
    {/* </Marquee> */}
    </div>
  );
}

// const AnimationWrapper = styled(Marquee)`
  // min-height: 100px;
  // max-height: 100px;

  // background: green;

// `;

const SplideContainer = styled.div`
  // width: auto !important;
  // margin: 0px !important;

  @media (max-width: 480px) {
    // margin-right:15px !important;
    // margin-left:15px !important;
  }
`;

export default NewMarqueeAnimation;
