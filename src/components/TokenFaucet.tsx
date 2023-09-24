// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { useRef, useState } from 'react';

// External Components
import { useClickAway } from 'react-use';
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from '@site/src/components/SharedStylingV2';

// Import Assets
import Discord from '@site/static/assets/Discord-BRB.svg';
import PushLogo from '@site/static/assets/PushLogoTextWhite.svg';
import X from '@site/static/assets/X-BRB.svg';
import Close from '@site/static/assets/website/brb/others/Close.svg';
import DiscordCompleted from '@site/static/assets/website/brb/others/Discord-Completed.svg';
import XCompleted from '@site/static/assets/website/brb/others/X-Completed.svg';
import XRight from '@site/static/assets/website/brb/others/right-1.svg';
import DiscordRight from '@site/static/assets/website/brb/others/right-2.svg';

// Internal Configs
import { device } from '@site/src/config/globals';

export const TokenFaucet = ({ handleFaucet }: { handleFaucet: (value: boolean) => void }) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const [isPosted, setIsPosted] = useState<boolean>(false);
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const clickRef = useRef(null);

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  useClickAway(clickRef, () => handleFaucet(false));

  return (
    <Container ref={clickRef}>
      <HeaderContainer>
        <Icon
          src={PushLogo}
          height="41px"
          width="108px"
          alt="Logo"
        />
        <SpanV2
          fontSize="13px"
          fontFamily="Glancyr"
          color="#F0A5FC"
          margin="5px 0px 0px 16px"
          style={{ maxHeight: '20px' }}
        >
          TOKEN FAUCET
        </SpanV2>
        <Icon
          src={Close}
          alt="close"
          style={{ position: 'absolute', right: '7px', top: '2px' }}
          onClick={() => handleFaucet(false)}
        />
      </HeaderContainer>
      <InputContainer>
        <Label>1. Follow, Post on X and mention your wallet address in the post</Label>
        <ItemHV2
          justifyContent="flex-start"
          alignItems="center"
          gap="8px"
        >
          <ButtonItem
            borderRadius="12px"
            background={isFollowed ? '#FFF' : '#25AAF5'}
            border="1px solid #25AAF5"
            fontFamily="Glancyr !important"
            padding="6.5px 8.5px"
            onClick={() => openLink('https://twitter.com/pushprotocol')}
          >
            <Icon
              src={isFollowed ? XCompleted : X}
              height="17px"
              width="17px"
              alt="x"
            />
            <Span
              fontSize="12px"
              fontWeight="400"
              color={isFollowed ? '#25AAF5' : '#FFF'}
            >
              {isFollowed ? 'Following' : 'Follow @pushprotocol'}
            </Span>
            {isFollowed && (
              <Icon
                src={XRight}
                height="18px"
                width="18px"
                alt="x"
              />
            )}
          </ButtonItem>
          <ButtonItem
            borderRadius="12px"
            background={isPosted ? '#FFF' : '#25AAF5'}
            border="1px solid #25AAF5"
            fontFamily="Glancyr !important"
            padding="6.5px 8.5px"
            onClick={() =>
              openLink(
                'https://twitter.com/intent/tweet?text=Getting some $PUSH Tokens at Billion Reasons to Build %23brbindia faucet for my <Your Wallet Address> wallet 🔔 %0A Visit : push.org/brb'
              )
            }
          >
            <Icon
              src={isPosted ? XCompleted : X}
              height="17px"
              width="17px"
              alt="x"
            />
            <Span
              fontSize="12px"
              fontWeight="400"
              color={isPosted ? '#25AAF5' : '#FFF'}
            >
              {isPosted ? 'Posted' : 'Post about BRB'}
            </Span>
            {isPosted && (
              <Icon
                src={XRight}
                height="18px"
                width="18px"
                alt="x"
              />
            )}
          </ButtonItem>
        </ItemHV2>
      </InputContainer>
      <InputContainer>
        <Label>2. Join Discord and Share a link of your post in #brb-faucet</Label>
        <ButtonItem
          borderRadius="12px"
          background={isJoined ? '#FFF' : '#3C63C6'}
          border="1px solid #3C63C6"
          fontFamily="Glancyr !important"
          padding="6.5px 8.5px"
          onClick={() => openLink('https://discord.gg/cTRqvYzXpW')}
        >
          <Icon
            src={isJoined ? DiscordCompleted : Discord}
            height="17px"
            width="17px"
            alt="x"
          />
          <Span
            fontSize="12px"
            fontWeight="400"
            color={isJoined ? '#3C63C6' : '#FFF'}
          >
            {isJoined ? 'Joined' : 'Join Discord and Share link'}
          </Span>
          {isJoined && (
            <Icon
              src={DiscordRight}
              height="18px"
              width="18px"
              alt="x"
            />
          )}
        </ButtonItem>
      </InputContainer>
      <InputContainer>
        <Label>3. You will receive 10 PUSH Tokens in your wallet after 24 hours</Label>
      </InputContainer>
      {/* <ButtonItem
        borderRadius="16px"
        background="#E64DE9"
        border="1px solid #FC6DFF"
        fontFamily="Glancyr !important"
        padding="16px 32px"
        style={{ width: '100%', fontSize: '18px', marginTop: '4px' }}
      >
        Claim 10 PUSH
      </ButtonItem> */}
      <ItemVV2
        justifyContent="flex-start"
        alignItems="flex-start"
        margin="19px 0px 0px 10px"
        gap="3px"
      >
        <Span>* Twitter account must be 30 days old with 50+ followers to claim.</Span>
        <Span>* PUSH will be distributed by the Push Team on a first come first serve basis in 24 hours.</Span>
      </ItemVV2>
    </Container>
  );
};

const Container = styled(ItemVV2)`
  box-sizing: border-box;
  max-width: 509px;
  height: fit-content;
  justify-content: flex-start;
  border-radius: 32px;
  background: #2a2a39;
  padding: 20px;
  z-index: 10;
  font-family: Glancyr;
  margin-top: 115px;
  @media ${device.mobileL} {
    margin: 115px 10px 0px 10px;
  }
`;

const HeaderContainer = styled(ItemHV2)`
  width: 100%;
  max-height: 41px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const Icon = styled.img`
  width: ${(props) => props.width || '16px'};
  height: ${(props) => props.height || '16px'};
  cursor: pointer;
`;

const InputContainer = styled(ItemVV2)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-height: 73px;
  margin-top: 31px;
  @media ${device.mobileL} {
    max-height: 120px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  font-family: Glancyr !important;
  color: #fff;
  // padding: 5px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  padding: 12px 23px;
  border-radius: 61px;
  border: 1px solid #5a5a75;
  outline: none;
  background: transparent;
  color: #b6bcd6;
`;

const ButtonItem = styled(ButtonV2)`
  font-size: 13px;
  font-style: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.03em;
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
    width: fit-content;
  }
`;

const Span = styled.span`
  font-size: ${(props) => props.fontSize || '8px'};
  color: ${(props) => props.color || '#b5bcd6'};
  font-family: Glancyr !important;
  font-weight: ${(props) => props.fontWeight || '300'};
  letter-spacing: 0.01em;
`;
