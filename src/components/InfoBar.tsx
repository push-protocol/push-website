import React from 'react';

// External Components
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

// Internal Components
import { Button, H2 } from '@site/src/css/SharedStyling';

// Import Assets
import StarColoredIcon from '@site/static/assets/website/illustrations/starColoredIcon.svg';

// Internal Configs
import { device } from '@site/src/config/globals';

type InfoBarProps = {
  text: string;
  url?: string;
};

const InfoBar = ({ text, url }: InfoBarProps) => {
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

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);

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
    color: #fff;
    font-size: 14px;
    line-height: 142%;
    letter-spacing: normal;

    @media ${device.mobileL} {
      font-size: 12px;
    }

    @media ${device.mobileM} {
      font-size: 11px;
    }
  }
`;

export default InfoBar;
