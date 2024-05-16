// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import JsLogo from '@site/static/assets/website/grids/notifications/js.png';
import ReactLogo from '@site/static/assets/website/grids/notifications/react.png';
import { device } from '@site/src/config/globals';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const codeblock = () => {
  return (
    <Div>
      <Tabs className='codetabs' showLineNumbers={true} groupId='code-examples'>
        <TabItem value='js' attributes={{ className: 'codetab js' }} default>
          <TechDocCodeBlock language='jsx' showLineNumbers={true}>
            {codeblock}
          </TechDocCodeBlock>
        </TabItem>
        <TabItem
          value='react'
          attributes={{ className: 'codetab react' }}
          default
        >
          <TechDocCodeBlock language='jsx' showLineNumbers={true}>
            {codeblock}
          </TechDocCodeBlock>
        </TabItem>
      </Tabs>
    </Div>
  );
};

const Div = styled.div`
  width: 100% !important;
  position: relative;

  .tabs {
    position: absolute;
    right: 24px;
    z-index: 20;
    margin: 24px 0 0 0;
    flex-direction: column;
    gap: 12px;
  }
  .tabs-container {
    margin-bottom: 0 !important;

    @media ${device.mobileL} {
      width: 300px !important;
      margin: 0 auto;
    }

    @media ${device.mobileM} {
      width: 100% !important;
    }
  }

  .codetabs li {
    height: 32px;
    width: 32px;
    padding: 0px;
  }

  .codetab.js::before {
    background-image: url(${JsLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    margin: 0px;
  }

  .codetab.react::before {
    background-image: url(${ReactLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    margin: 0px;
  }

  .codetab.js:after {
    content: '';
  }

  .codetab.react:after {
    content: '';
  }

  .tabs__item--active {
    border: none;
  }

  pre {
    background-color: #0d0d0f !important;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
  }

  div {
    border-radius: 24px;
    background: transparent !important;
  }

  .margin-top--md {
    margin: 0 auto !important;
  }

  code {
    span {
      background-color: #0d0d0f !important;
    }
  }

  .clean-btn {
    position: relative;
    top: 120px;
    left: -15px;
  }
`;

const TechDocCodeBlock = styled(CodeBlock)`
  font-size: 14px;
  margin: 0px;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  // width: inherit;
  box-sizing: border-box !important;

  @media ${device.mobileL} {
    overflow-x: auto;
    overflow-y: hidden;
  }

  /* WebKit browsers (Chrome, Safari) */
  *::-webkit-scrollbar {
    width: 3px !important;
  }

  *::-webkit-scrollbar-thumb {
    background: #cb3faa;
    border-radius: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-button {
    display: none !important;
  }

  /* Firefox */
  * {
    scrollbar-color: #cb3faa #f1f1f1;
    scrollbar-width: thin;
  }
`;
