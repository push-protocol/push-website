// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { useState } from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { Modal } from '@site/src/components/Modal';
import ChatBubbleComponent from '@site/src/components/PushChat/PushChatBubbleComponent';
import { Atag, ButtonV2, ImageV2, ItemHV2, ItemVV2, SectionV2 } from '@site/src/components/SharedStylingV2';
import { TokenFaucet } from '@site/src/components/TokenFaucet';
import { useDisableBodyScroll } from '@site/src/hooks/useDisabledBodyScroll';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import PlaygroundBg from '@site/static/assets/PlaygroundBg.png';
import Brand from '@site/static/assets/website/brb/others/brand-header.svg';
import TokenGated from '@site/static/assets/website/brb/others/token-gated.svg';
import WhiteArrow from '@site/static/assets/website/brb/others/white-arrow.svg';

// Internal Configs
import { device } from '@site/src/config/globals';

export const ChatComponent = () => {
  const [showFaucet, setShowFaucet] = useState<boolean>(false);
  const isMobile = useMediaQuery(device.mobileL);

  useDisableBodyScroll({ open: showFaucet });
  return (
    <Container>
      <Header>
        Join the conversation
        <BrandATag
          href="https://docs.push.org/developers"
          target="_blank"
        >
          <ImageV2
            src={require(`@site/static/assets/website/brb/others/brand-header.webp`).default}
            srcSet={`${require(`@site/static/assets/website/brb/others/brand-header@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/others/brand-header@3x.webp`).default} 3x`}
            alt={`Image showing BRB Chat is powered by Push Chat`}
          />
        </BrandATag>
      </Header>

      <PlayGround>
        {/* 4ac5ab85c9c3d57adbdf2dba79357e56b2f9ef0256befe750d9f93af78d2ca68 */}
        <ChatBubbleComponent
          chatId="4ac5ab85c9c3d57adbdf2dba79357e56b2f9ef0256befe750d9f93af78d2ca68"
          handleFaucet={setShowFaucet}
        />
      </PlayGround>

      <BottomBar>
        <TokenGated />
        <Span
          fontSize={isMobile ? '14px' : '16px'}
          color="#fff"
          fontWeight="400"
        >
          This is a token gated group. You can join but will need{' '}
          <span style={{ color: '#E64DE9', fontWeight: '550' }}>1 $PUSH</span> in your wallet to be able to send
          messages.
        </Span>
        <ButtonItem
          background="#E64DE9"
          padding="8px"
          fontWeight="900"
          fontSize="16px"
          onClick={() => setShowFaucet(true)}
        >
          Get Free Push Tokens
          <WhiteArrow />
        </ButtonItem>
      </BottomBar>
      
      {showFaucet && (
        <Modal>
          <TokenFaucet handleFaucet={setShowFaucet} />
        </Modal>
      )}
    </Container>
  );
};

const Container = styled(ItemVV2)`
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
`;

const BottomBar = styled(ItemHV2)`
  max-height: 33px;
  background: transparent;
  align-items: center;
  color: #fff;
  z-index: 0 !important;
`;

const ButtonItem = styled(ButtonV2)`
  font-size: 12px;
  font-style: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.03em;
  border-radius: 8px;
  &:hover:after {
    opacity: 0;
  }
  &:active:after {
    opacity: 0;
  }
  @media ${device.mobileL} {
    width: 178px;
    margin-top: 10px;
  }
`;

const Span = styled.span`
  font-size: ${(props) => props.fontSize || '8px'};
  color: ${(props) => props.color || '#b5bcd6'};
  font-weight: ${(props) => props.fontWeight || '300'};
  letter-spacing: 0.01em;
  margin: 5px 16px 0px 4px;
  @media ${device.mobileL} {
    width: 80%;
    margin: 0px 0px 0px 4px;
    line-height: 1.3;
  }
`;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 400;
  color: #fff;
  margin: 0px 0px 60px;
  position: relative;
  @media (max-width: 768px) {
    margin: 0px 0px 49px;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const BrandATag = styled(Atag)`
  background: transparent;
  position: absolute;
  right: 0px;
  bottom: -33px;
  padding: 10px 0px;

  @media ${device.mobileL} {
    padding: 10px;
    bottom: -43px;
    right: 25px;
  }
`;

const PlayGround = styled(SectionV2)`
  flex-direction: column;
  background-image: url(${PlaygroundBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 80%;
  margin: 0 auto;
  @media ${device.mobileL} {
    width: 95%;
  }
`;
