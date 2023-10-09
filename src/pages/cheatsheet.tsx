// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { Button, ItemV } from '@site/src/css/SharedStyling';

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
    <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Push (Previously EPNS) Communication Protocol of Web3</title>
        <meta name="description" content="Push (Previously EPNS) | Communication Protocol of Web3" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://push.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Push (Previously EPNS)" />
        <meta property="og:description" content="Push (Previously EPNS) | Communication Protocol of Web3" />
        <meta property="og:image" content="https://push.org/previews/homepage.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="push.org" />
        <meta property="twitter:url" content="https://push.org" />
        <meta name="twitter:title" content="Push (Previously EPNS)" />
        <meta name="twitter:description" content="Push (Previously EPNS) | Communication Protocol of Web3" />
        <meta name="twitter:image" content="https://push.org/previews/homepagetwitter.jpg" />

        {/* <!-- fix index issues --> */}
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />

  
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Protocol',
            url: 'https://push.org/',
            logo: '/assets/website/favicon.ico',
          })}
        </script>
        </Head>

        
      <CheatWrapper>
        
        <TextDiv>Click below to view CheatSheet 👇🏾 </TextDiv>
        <Button 
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
        </Button>

      </CheatWrapper>
    </Layout>
  );
}

const CheatWrapper = styled(ItemV)`
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
