// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import ReactGA from 'react-ga';
import styled from 'styled-components';

// Internal Components
import { Button } from 'components/SharedStyling';
import PageWrapper from '../components/PageWrapper';

// Internal Configs
import PageMeta from '../config/pageMeta';


function CheatSheet() {
  // React GA Analytics
  ReactGA.pageview('/cheatsheet');

  const url = 'https://drive.google.com/file/d/1_7JDGxvG8mmrtwy5aqL3sLjo2B7YQpjt/view?usp=sharing';
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