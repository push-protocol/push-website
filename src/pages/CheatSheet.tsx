// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React,{ useEffect } from 'react';
import styled from 'styled-components';

import PageMeta from '../config/pageMeta';

import PageWrapper from '../components/PageWrapper';
import { RotatingLines } from 'react-loader-spinner';
import { Button } from 'components/SharedStyling';



function CheatSheet() {
  const url = 'https://drive.google.com/file/d/13Xbw-OLhMnutMxIXOZVV13jrha_oSPfd/view?usp=drive_link';
  const redirectURL = () => {
    window.location.replace(url);
  };

  // useEffect(() => {
  //   redirectURL();
  // }, []);
  return (
    <PageWrapper
      pageName={PageMeta.CHEAT.pageName}
      pageTitle={PageMeta.CHEAT.pageTitle}
    >
      <CheatWrapper>

        <TextDiv>Click below to view CheatSheet 👇🏾 </TextDiv>
        <Button 
          target="_blank"
          title="Push Dapp"
          bg="#DD44B9"
          radius="16px"
          size="18px"
          weight="500"
          spacing="-0.03em"
          lineHeight="26px"
          onClick={redirectURL}
        >
          View Cheatsheet
        </Button>

      </CheatWrapper>
    </PageWrapper>
  );
}

const CheatWrapper = styled.main`
    max-height: 100vh;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #121315;
`;

const TextDiv = styled.div`
  color: white;
  margin-bottom: 40px;
`;


export default CheatSheet;