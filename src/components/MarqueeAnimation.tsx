/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import ReactMarquee from 'react-fast-marquee';

type Props = {
  direction: string;
  speed?: number;
  gap?: number;
  gradientWidth?: number;
};

function MarqueeAnimation(props: Props) {
  const { speed = 100, gap = 0, gradient = false, gradientWidth = 64, direction = 'left' } = props;

  return (
    <AnimationWrapper
      speed={speed}
      gap={gap}
      gradient={gradient}
      gradientWidth={gradientWidth}
      direction={direction}
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

  & .marqueeItem {
    margin-right: ${(props) => props.gap || 0}px;
  }
`;

export default MarqueeAnimation;
