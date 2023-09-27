// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { ButtonV2 } from '@site/src/components/SharedStylingV2';

// Internal Configs
import { PageMeta } from "@site/src/config/pageMeta";


function CheatSheet() {
  const url = 'https://drive.google.com/file/d/1_7JDGxvG8mmrtwy5aqL3sLjo2B7YQpjt/view?usp=sharing';
  const redirectURL = () => {
    window.location.replace(url);
  };

  // useEffect(() => {
  //   redirectURL();
  // }, []);
  return (
    <Layout title={PageMeta.ABOUTUS.pageTitle} description={PageMeta.ABOUTUS.pageDescription}>
    {/* <Head>
      <meta property="og:image" content="image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="preconnect" href="https://example.com" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'Meta Open Source',
          url: 'https://opensource.fb.com/',
          logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
        })}
      </script>
    </Head> */}
      <CheatWrapper>

        <TextDiv>Click below to view CheatSheet 👇🏾 </TextDiv>
        <ButtonV2 
          target="_blank"
          title="Push Dapp"
          background="#DD44B9"
          borderRadius="16px"
          fontSize="18px"
          fontWeight="500"
          letterSpacing="-0.03em"
          lineHeight="26px"
          onClick={redirectURL}
        >
          View Cheatsheet
        </ButtonV2>

      </CheatWrapper>
    </Layout>
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