// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useScrollDirection } from '@site/src/hooks/useScrollDirection';
import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';

const ChainCountDownFeature = () => {
  const targetDate = new Date('2025-03-20T23:59:59').getTime();
  const [scrollDirection] = useScrollDirection(false);
  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // If countdown is over, set isExpired to true
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsExpired(true);
        clearInterval(timer); // Stop the timer when countdown ends
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleRedirect = () => {
    window.open('http://push.org', '_blank');
  };

  // Do not render if countdown has expired
  if (isExpired) return null;

  return (
    <CountdownWrapper className={`header ${headerClass}`}>
      <ChainLogoDark />

      <CountDownDiv>
        <CountDownText>Incentivized Devnet V2 in</CountDownText>
        <CountDownTime>
          {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M :
          {timeLeft.seconds}S
        </CountDownTime>
      </CountDownDiv>

      {/* comment button till tweet goes live */}
      <CountdownButton onClick={handleRedirect}>Learn More</CountdownButton>
    </CountdownWrapper>
  );
};

export default ChainCountDownFeature;

const CountdownWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px;
  background: #000;
  align-items: center;
  border-radius: 24px;
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);

  &.hide {
    top: 100%;
  }

  svg {
    width: 104px;
    height: auto;
  }

  @media (max-width: 1300px) {
    max-width: calc(100% - 48px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;

    svg {
      display: none;
    }
  }

  @media (max-width: 425px) {
    max-width: calc(100% - 32px);
  }
`;

const CountDownDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;
const CountDownText = styled.div`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.64px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;
const CountDownTime = styled.div`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 35.2px */
  letter-spacing: -0.64px;
  margin-left: 12px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

const CountdownButton = styled.button`
  display: flex;
  border: 1px solid #fff;
  border-radius: 16px;
  border: 1.5px solid #fff;
  padding: 16px 32px;
  font-family: N27;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  background: transparent;
  cursor: pointer;
  color: #fff;
  display: none;
`;
