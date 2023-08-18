import React, { useState } from 'react';

import styled from 'styled-components';
import { ButtonV2, ItemHV2, ItemVV2 } from './SharedStylingV2';
import { ReactComponent as TokenGated } from '../assets/brb/others/token-gated.svg';
import { ReactComponent as WhiteArrow } from '../assets/brb/others/white-arrow.svg';
import { ReactComponent as Brand } from '../assets/brb/others/brand-header.svg';
import { device } from 'config/globals';
import { TokenFaucet } from 'components/TokenFaucet';
import { Modal } from 'components/Modal';
import { useDisableBodyScroll } from 'hooks/useDisabledBodyScroll';

export const ChatComponent = () => {
  const [showFaucet, setShowFaucet] = useState<boolean>(false);

  useDisableBodyScroll({ open: showFaucet });
  return (
    <Container>
      <Header>
        Join the conversation
        <BrandHeader>
          <Brand />
        </BrandHeader>
      </Header>

      <BottomBar>
        <TokenGated />
        <Span
          fontSize="16px"
          color="#fff"
          fontWeight="550"
        >
          This is a togen gated group. You need{' '}
          <span style={{ color: '#E64DE9', textDecoration: 'underline', fontWeight: '550' }}>1 Push Token</span> to be
          able to send message.
        </Span>
        <ButtonItem
          background="#E64DE9"
          padding="8px"
          fontWeight="550"
          onClick={() => setShowFaucet(true)}
        >
          Get Free Push Tokens
          <WhiteArrow />
        </ButtonItem>
      </BottomBar>
      {showFaucet && (
        <Modal open={showFaucet}>
          <TokenFaucet
            handleFaucet={setShowFaucet}
            open={showFaucet}
          />
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
`;

const ButtonItem = styled(ButtonV2)`
  font-size: 12px;
  font-style: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.03em;
  border-radius: 8px;
  font-family: Glancyr !important;
  // &:hover {
  //   box-shadow: 0px 4px 12px 0px rgba(230, 77, 233, 0.5);
  // }
  &:hover:after {
    opacity: 0;
  }
  &:active:after {
    opacity: 0;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const Span = styled.span`
  font-size: ${(props) => props.fontSize || '8px'};
  color: ${(props) => props.color || '#b5bcd6'};
  font-family: Glancyr !important;
  font-weight: ${(props) => props.fontWeight || '300'};
  letter-spacing: 0.01em;
  margin: 5px 16px 0px 4px;
`;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  margin: 0px 0px 60px;
  position: relative;
  @media (max-width: 768px) {
    margin: 0px 0px 49px;
  }
`;

const BrandHeader = styled.div`
  position: absolute;
  right: 0px;
  bottom: -33px;
`;
