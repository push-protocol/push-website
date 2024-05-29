/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useRef } from 'react';

// External Components
import { gsap } from 'gsap';

const FadeInAnimation = ({
  children,
  wrapperElement = 'div',
  direction = null,
  delay = 0,
  ...props
}) => {
  const Component = wrapperElement;
  let compRef = useRef(null);
  const distance = 200;
  let fadeDirection;
  switch (direction) {
    case 'left':
      fadeDirection = { x: -distance };
      break;
    case 'right':
      fadeDirection = { x: distance };
      break;
    case 'up':
      fadeDirection = { y: distance };
      break;
    case 'down':
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }

  useEffect(() => {
    gsap.from(compRef.current, {
      duration: 1,
      ...fadeDirection,
      opacity: 0,
      delay,
      scrollTrigger: {
        trigger: compRef.current,
      },
    });
  }, [compRef.current]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default FadeInAnimation;
