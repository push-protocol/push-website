// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

// External Components
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

// Internal Components
import { Button, H2 } from '../../../src/css/SharedStyling';

// Import Assets
import StarColoredIcon from '../../../static/assets/website/illustrations/starColoredIcon.svg';

// Internal Configs
import { device } from '../../../src/config/globals';

type AlertBarProps = {
  text: string;
  url?: string;
};

const ChainAlertBar = ({ text, url }: AlertBarProps) => {
  return (
    <HeroButton
      onClick={() => {
        if (url) window.open(url, '_blank');
      }}
    >
      <StarColoredIcon />
      <H2 fontWeight='400' fontFamily='FK Grotesk Neue'>
        {text}
      </H2>
      <BsArrowRight />
    </HeroButton>
  );
};

const HeroButton = styled(Button)`
  font-family: FK Grotesk Neue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  gap: 8px;
  margin: 0 auto;

  border-radius: 16px;
  border: 1.5px solid #f19aff;
  background: #fff;

  @media ${device.mobileM} {
    gap: 4px;
  }

  @media ${device.mobileS} {
    gap: 2px;
    padding: 12px 6px;
    width: calc(100vw - 32px);
    box-sizing: border-box;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  h2 {
    color: #000;
    font-family: N27;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    @media ${device.mobileL} {
      font-size: 12px;
    }

    @media ${device.mobileM} {
      font-size: 11px;
    }
  }
`;

export default ChainAlertBar;
