// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { Fragment } from 'react';

// External Components
// import { ChatViewComponent } from '@pushprotocol/uiweb';
import styled from 'styled-components';

// Internal Components
import { Section } from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { darkChatTheme } from '@site/src/theme/darkChatTheme';

import { ChatViewComponent } from '@pushprotocol/uiweb';
import { ChatUIProvider } from "@pushprotocol/uiweb";


const ChatBubbleComponent = ({ chatId, handleFaucet }: { chatId: string; handleFaucet: (value: boolean) => void }) => {

  return (
    <Fragment>
      <ChatViewComponentCard>
      {/* <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            const ChatUIProvider = require('@pushprotocol/uiweb').ChatUIProvider;
            const ChatViewComponent = require('@pushprotocol/uiweb').ChatViewComponent;

             return ( */}
              <ChatUIProvider
                env='prod'
                theme={darkChatTheme}
              >
                <ChatViewComponent
                  chatId={chatId}
                  file={false}
                  gif={false}
                  onClick={() => handleFaucet(true)}
                />
            </ChatUIProvider>
            {/* )
          }}
        </BrowserOnly> */}
       
      </ChatViewComponentCard>
     </Fragment>
  );
};

const ChatViewComponentCard = styled(Section)`
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
