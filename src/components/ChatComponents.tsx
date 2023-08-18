import React from 'react';
import { ChatViewComponent } from '@pushprotocol/uiweb';
import styled from 'styled-components';
import { Section } from './SharedStyling';
import { device } from 'config/globals';




const ChatComponent = () => {
      
  return (
    <ChatViewComponentCard>
      <ChatViewComponent chatId='24b029b8e07e60291bf9d8c0c48ff993fa1e0a99105459f7404c425c92e91bac' />
    </ChatViewComponentCard>
  );
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