/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

import { device } from '@site/src/config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

import { H3, ItemH, Span } from '@site/src/css/SharedStyling';
import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';
import ChainCanvas from './ChainCanvas';
import { ChainEmailSignup } from './ChainEmailSignup';

const ChainElevateModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const isMobile = useMediaQuery(device.mobileL);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Overlay onClick={onClose} />
        <Content>
          <CloseButton onClick={onClose}>
            <AiOutlineClose size={24} />
          </CloseButton>
          <ModalBody>
            <PushLogoBlackContainer className='headerlogo' flex='initial'>
              <ChainLogoDark />
            </PushLogoBlackContainer>
            <ElevateSection>
              <ItemH maxWidth='850px' margin='0 auto'>
                <H3
                  color='#FFF'
                  fontSize='36px'
                  fontFamily='N27'
                  textAlign='center'
                  fontWeight='500'
                  lineHeight='120%'
                  letterSpacing='-0.72px'
                >
                  Any Chain. Any Wallet. Any App.
                  <br />
                  <hr />
                  One Push Chain
                </H3>
              </ItemH>

              <ChainCanvasItem>
                <ChainCanvas />
              </ChainCanvasItem>
            </ElevateSection>

            <InputSection>
              <ItemH
                maxWidth={!isMobile && '470px'}
                padding={!isMobile && '0 24px'}
              >
                <Span
                  color='#000'
                  fontSize={isMobile ? '20px' : '24px'}
                  fontFamily='N27'
                  fontWeight='500'
                  lineHeight='120%'
                  letterSpacing='-0.48px'
                >
                  To get exclusive updates and be the first to try universal app
                  experiences
                </Span>
              </ItemH>

              <ItemH>
                <ChainEmailSignup showButton={true} />
              </ItemH>
            </InputSection>
          </ModalBody>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ChainElevateModal;

// Styled Components
const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;
  z-index: 1000000000;
  backdrop-filter: blur(10px);
`;

const Content = styled(Dialog.Content)`
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  height: 100%;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000000001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #d53a94;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 1200px;
  margin: auto;
  height: 100%;
`;

const ChainCanvasItem = styled.div`
  height: 230px;

  @media ${device.laptopM} {
    height: 300px;
  }
`;

const ElevateSection = styled.div`
  width: 100%;
  border-radius: 32px;
  background: #000;
  padding: 64px 64px 0px 64px;
  position: relative;
  overflow: hidden;
  gap: 48px;
  border: 2px solid #fff;

  @media ${device.mobileL} {
    padding: 64px 24px 0px 24px;
  }
`;

const InputSection = styled.div`
  width: 100%;
  border-radius: 32px;
  background: #e492ff;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 33px;

  span {
    font-family: N27;
  }

  @media ${device.tablet} {
    padding: 24px;
    flex-direction: column;
  }
`;

const PushLogoBlackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  width: 150px;
`;
