import React, { Fragment, useState } from 'react';
import { ChatViewComponent } from '@pushprotocol/uiweb';
import styled from 'styled-components';
import { Button, Input, Section } from './SharedStyling';
import { device } from 'config/globals';
import { useWeb3React } from '@web3-react/core';




const ChatComponent = ({ chatId }: {chatId: string}) => {
  const { account, library } = useWeb3React();
  
   
  if((account || library) && chatId !== ''){
    return (
      <Fragment>
        <ChatViewComponentCard>
          <ChatViewComponent chatId={chatId} />
        </ChatViewComponentCard>
      </Fragment>
    );
  } else return null;
};

const ChatViewComponentCard = styled(Section)`
  height: 60vh;
  width: 70%;
  margin: 150px auto;

  @media ${device.laptop} {
    width: 100%;
  }
`;

export default ChatComponent;