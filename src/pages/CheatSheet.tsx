// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React,{ useEffect } from 'react';
import styled from 'styled-components';

import PageMeta from '../config/pageMeta';

import PageWrapper from '../components/PageWrapper';
import { RotatingLines } from 'react-loader-spinner';



function CheatSheet() {
  const url = 'https://drive.google.com/file/d/1DUDz4VojmerLMM1G-xYqv6FCjXVXta1Z/view?ts=64b6603a';

  useEffect(() => {
    window.location.replace(url);
  }, []);
  return (
    <PageWrapper
      pageName={PageMeta.CHEAT.pageName}
      pageTitle={PageMeta.CHEAT.pageTitle}
    >
      <CheatWrapper>

        <RotatingLines
          strokeColor="#D53A94"
          strokeWidth="3"
          animationDuration="0.75"
          width="96"
          visible={true}
        />

      </CheatWrapper>
    </PageWrapper>
  );
}

const CheatWrapper = styled.main`
    max-height: 100vh;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;



export default CheatSheet;