// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return <ModalContainer>{children}</ModalContainer>;
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  z-index: 999999 !important;
`;
