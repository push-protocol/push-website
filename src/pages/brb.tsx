// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React, { useEffect, useRef, useState } from 'react';

// External Components
// import { Web3ReactProvider } from '@web3-react/core';
// import { ethers } from 'ethers';

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
      <Head>
     
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://push.org/brb" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BRB(Billions Reasons to Build)" />
        <meta property="og:description" content="BRB(Billions Reasons to Build) Push Page" />
        <meta property="og:image" content="/assets/previews/brbfbpreview.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="push.org/brb" />
        <meta property="twitter:url" content="https://push.org/brb" />
        <meta name="twitter:title" content="BRB(Billions Reasons to Build)" />
        <meta name="twitter:description" content="BRB(Billions Reasons to Build) Push Page" />
        <meta name="twitter:image" content="/assets/previews/brbtwtpreview.png" />

  
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
        
      {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        <BRBWeb3Component />
      {/* </Web3ReactProvider> */}
    </Layout>
  );
}

export default BRB;
