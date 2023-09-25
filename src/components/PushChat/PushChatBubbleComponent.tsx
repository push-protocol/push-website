// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React, { Fragment } from 'react';

// External Components
import { ChatViewComponent } from '@pushprotocol/uiweb';
import styled from 'styled-components';

// Internal Components
import { SectionV2 } from '@site/src/components/SharedStylingV2';

// Internal Configs
import { device } from '@site/src/config/globals';

const ChatBubbleComponent = ({ chatId, handleFaucet }: { chatId: string; handleFaucet: (value: boolean) => void }) => {
  const { account, library } = useWeb3React();

  return (
    <Fragment>
      <ChatViewComponentCard>
        <ChatViewComponent
          chatId={chatId}
          file={false}
          gif={false}
          onClick={() => handleFaucet(true)}
        />
      </ChatViewComponentCard>
    </Fragment>
  );
};

const ChatViewComponentCard = styled(SectionV2)`
  height: 660px;
  width: 85%;
  margin: 15px auto;
  box-sizing: border-box;

  @media ${device.mobileL} {
    width: 95%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
`;

export default ChatBubbleComponent;
