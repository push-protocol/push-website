/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import ReactMarquee from 'react-fast-marquee';
import styled from 'styled-components';

type Props = {
  direction: string;
  speed?: number;
  gap?: number;
  gradientWidth?: number;
  children?: React.ReactNode;
  pause?: boolean;
};

function MarqueeAnimation(props: Props) {

  const {
    speed = 100,
    gap = 0,
    gradient = false,
    gradientWidth = 64,
    direction = 'left',
    pause = false
  } = props;

  return (
    <AnimationWrapper
      speed={speed}
      gap={gap}
      gradient={gradient}
      gradientWidth={gradientWidth}
      direction={direction}
      pauseOnClick={pause}
    >
      {props.children}
    </AnimationWrapper>
  );
}

const AnimationWrapper = styled(ReactMarquee)`
  // this absolute positioning prevents
  //  the animation container from creating horizontal scroll
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  & .marquee {
    justify-content: space-around;
  }

  & .marqueeItem {
    margin-right: ${(props) => props.gap || 0}px;
  }
`;

export default MarqueeAnimation;
