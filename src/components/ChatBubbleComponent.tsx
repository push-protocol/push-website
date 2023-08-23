import React, { Fragment, useState } from 'react';
import { ChatViewComponent } from '@pushprotocol/uiweb';
import styled from 'styled-components';
import { Button, Input, Section } from './SharedStyling';
import { device } from 'config/globals';
import { useWeb3React } from '@web3-react/core';




const ChatBubbleComponent = ({ chatId }: {chatId: string}) => {
  const { account, library } = useWeb3React();
  
   
  // if((account || library) && chatId !== ''){
  return (
    <Fragment>
      <ChatViewComponentCard>
        <ChatViewComponent chatId={chatId} file={false} gif={false} />
      </ChatViewComponentCard>
    </Fragment>
  );
  // } else return null;
};

const ChatViewComponentCard = styled(Section)`
  height: 660px;
  width: 85%;
  margin: 15px auto;
  z-index: 9999 !important;
  box-sizing: border-box;


  @media ${device.mobileL} {
    width: 90%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
`;

export default ChatBubbleComponent;