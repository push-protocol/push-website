/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import Marquee, { MarqueeDirection } from 'react-marquee-slider';
import styled from 'styled-components';

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
    speed = 100,
    gap = 0,
    gradient = false,
    gradientWidth = 64,
    // direction = 'left',
    direction,
    pause = false,
  } = props;

  return (
    <AnimationWrapper
    //   speed={speed}
      velocity={50}
    //   gap={gap}
    //   gradient={gradient}
    //   gradientWidth={gradientWidth}
      direction={direction}
    //   pauseOnClick={pause}
    >
      {props.children}
    </AnimationWrapper>
  );
}

const AnimationWrapper = styled(Marquee)`
  // this absolute positioning prevents
  //  the animation container from creating horizontal scroll

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  & .marquee {
    justify-content: space-around;
    align-items: center; 
  }

  & .marqueeItem {
    margin-right: ${(props) => props.gap || 0}px;
    height: 100px; // Set a fixed height for each marquee item
    display: flex;
    align-items: center; 
  }
`;

export default NewMarqueeAnimation;
