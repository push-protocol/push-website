/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { useRef } from 'react';

// External Components
// import Marquee, { MarqueeDirection } from 'react-marquee-slider';
import styled from 'styled-components';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

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
    speed,
    gap = 0,
    gradient = false,
    gradientWidth = 64,
    direction,
    fixedWidth,
    pause = false,
    bg,
  } = props;

  const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(max-width: 1130px)');
  const splideRef = useRef(null);
  const scrollRef = useRef(null);

  return (
    <div style={{ maxHeight: '85px', background: bg }}>
      <Splide
        ref={splideRef}
        options={{
          width: isMobile ? '90vw' : isTablet ? '95vw' : '1213px',
          type: 'loop',
          direction: direction,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: gap,
          fixedWidth: fixedWidth ? fixedWidth : 'auto',
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: speed,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {props.children}
      </Splide>
    </div>
  );
}

export default NewMarqueeAnimation;
