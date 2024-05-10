// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

interface ILoomEmbedProps {
  embedURL: string;
}

const LoomEmbed: React.FC<ILoomEmbedProps> = ({ embedURL }) => {
  return (
    <LoomWrapper>
      <iframe
        src={embedURL}
        frameBorder='0'
        allowFullScreen
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          margin: 'auto',
          border: 'none',
        }}
      ></iframe>
    </LoomWrapper>
  );
};

const LoomWrapper = styled.div`
  padding-bottom: 56.25%;
  position: relative;

  & iframe {
    position: absolute;
  }
`;

export default LoomEmbed;
