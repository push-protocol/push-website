import React from "react";
import ReactGA from 'react-ga';
import MetaTags, {ReactTitle} from 'react-meta-tags';

import styled from 'styled-components';
import {Section, SectionHero, Content, Item, ItemH, WaveOuter, WaveInner, H1, H2, H3, Image, P, Para, UL,OL , LI, A, B, Span, Anchor, Button} from 'components/SharedStyling';

import { BsChevronExpand } from 'react-icons/bs';
import Wave from 'react-wavify';

// Create Header
function Ethdenver() {
  

  // RENDER
  return (
    <>
     
      <SectionHero padding="50px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="0px 20px">
            <H1>PUSH for ETH Denver</H1>
            {/* <Span color="#fff" margin="-20px 0 0 0" size="1rem">Frequently asked Questions and their answers!</Span> */}
          </Item>
        </Content>
        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </SectionHero>

      <Section theme="#fff" padding="0px 0px 50px 0px">
        <Content className="contentBox">
              <H2>3 Simple Steps to get your PRIZES : </H2>
              <Item padding="30px 0" margin="50px 0 0 0">
              <StepsBox><span>STEP 1:</span> <div> Visit  <a href="https://app.epns.io/"> https://app.epns.io</a>, search for the Push@ETHDenver channel using the search bar, and Opt-in to receive notifications!</div></StepsBox>
              <StepsBox><span>STEP 2:</span><div> Keep your EPNS visiting card  handy! You might be 1 of the lucky winners of EPNS random drops!</div></StepsBox>
              <StepsBox><span>STEP 3:</span><div>Keep the QR code of your treasure chest protected! This contains the secret phrase to claim your prizes!</div></StepsBox>
              </Item>
        </Content>
      </Section>
    </>
  );
}

// css style

// Export Default

const StepsBox=styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(283deg,rgba(31,23,47,1) 0%,rgba(62,9,40,1) 45%,rgba(17,58,72,1) 100%);
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
    /* max-width: 1200px; */
    min-height: 150px;
    color:#fff;
    font-size:1.5rem;
    font-weight:bold;
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    margin:10px;
    font-family: ${(props) =>
		props.family || "'Source Sans Pro', Helvetica, sans-serif"};
    padding: 0px 20px;

    a{
      text-decoration: none;
      color:white;
    text-transform:lowercase;
      display: inline;
    }
    @media (max-width: 1008px) {
        padding: 0px 5px;
        margin: 30px 10px;
        line-height: 1.5em;
        font-size: 1.2rem;
    }
`;

export default Ethdenver;
