import React, { Fragment, useState } from 'react';
import { ChatViewComponent } from '@pushprotocol/uiweb';
import styled from 'styled-components';
import { Button, Input, Section } from './SharedStyling';
import { device } from 'config/globals';
// import { useWeb3React } from '@web3-react/core';




const ChatBubbleComponent = ({ chatId }: {chatId: string}) => {
  // const { account, library } = useWeb3React();
  
   
  return (
    <Fragment>
      <ChatViewComponentCard>
        <ChatViewComponent chatId={chatId} file={false} gif={false} />
      </ChatViewComponentCard>
    </Fragment>
  );
};

const ChatViewComponentCard = styled(Section)`
  height: 660px;
  width: 85%;
  margin: 15px auto;
  z-index: 9999 !important;
  box-sizing: border-box;


  @media ${device.mobileL} {
    width: 95%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
`;

export default ChatBubbleComponent;