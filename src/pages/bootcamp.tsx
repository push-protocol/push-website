// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React, { useEffect, useRef, useState } from 'react';

// Internal Components
// import { BRBAlert } from '@site/src/components/BRB/BRBAlert';
// import { BRBMainComponent } from '@site/src/components/BRB/BRBMainComponent';
import { BootcampMainComponent } from '@site/src/components/Bootcamp/BootcampMainComponent';

// Import Assets

// Internal Configs
import { PageMeta } from "@site/src/config/pageMeta";

function Bootcamp() {
  return (
    <Layout title={PageMeta.BOOTCAMP.pageTitle} description={PageMeta.BOOTCAMP.pageDescription} showNavbar={false}>
      <Head>
     
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://push.org/bootcamp" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Push | BOOTCAMP CAMPAIGN" />
        <meta name="og:description" content="Join us in an epic tech showdown across 18 Indian cities, where brilliant minds collaborate to tackle a major challenge. Compete for a chance to claim over $50,000 USD in prizes!" />
        <meta property="og:image" content={useBaseUrl(require("/static/assets/previews/brbpreview.png").default, { absolute: true})} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pushprotocol" />
        <meta name="twitter:title" content="Push | BOOTCAMP CAMPAIGN" />
        <meta name="twitter:description" content="Join us in an epic tech showdown across 18 Indian cities, where brilliant minds collaborate to tackle a major challenge. Compete for a chance to claim over $50,000 USD in prizes!" />
        <meta name="twitter:image" content={useBaseUrl(require("/static/assets/previews/brbpreview.png").default, { absolute: true})} />

  
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            "name": "Push Protocol",
            "description": "The Communication Protocol of Web3",
            "url": "https://push.org",
            "logo": "/assets/website/favicon.ico",
            "sameAs": [
              "https://twitter.com/pushprotocol",
              "https://www.linkedin.com/company/push-protocol/mycompany/"
            ]
          })}
        </script>
      </Head>

      {/* <BRBMainComponent /> */}
      <BootcampMainComponent />
        
    </Layout>
  );
}

export default Bootcamp;
