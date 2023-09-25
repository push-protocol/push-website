// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React, { useEffect, useRef, useState } from 'react';

// External Components
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

// Internal Components
import { BRBWeb3Component } from '@site/src/components/BRB/BRBWeb3Component';

// Import Assets

// Internal Configs
import { PushChatTheme } from '@site/src/components/BRB/PushChatTheme';
import { PageMeta } from "@site/src/config/pageMeta";
import { AccountContext, EnvContext, SocketContext, Web3Context } from '@site/src/context';
import { ENV } from '@site/src/helpers/web3helper';
import { useSDKSocket } from '@site/src/hooks/useSDKSocket';

function getLibrary(provider: any) {
  // this will vary according to whether you use e.g. ethers or web3.js
  const gottenProvider = new ethers.providers.Web3Provider(provider, 'any');
  return gottenProvider;
}

function BRB() {

  return (
    <Layout title={PageMeta.BRB.pageTitle} description={PageMeta.BRB.pageDescription}>
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
      <Web3ReactProvider getLibrary={getLibrary}>
        {/* Load Web3 BRB Component that will load BRB Main Component */}
        <BRBWeb3Component />
      </Web3ReactProvider>
    </Layout>
  );
}

export default BRB;
