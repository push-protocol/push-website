/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";
import styled from "styled-components";

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Push (Previously EPNS) | Communication Protocol of Web3</title>
        <meta
          name="description"
          content="Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://push.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Push Protocol (Previously EPNS)" />
        <meta
          property="og:description"
          content="Discover the latest trends, insights, and tips about Push Protocol in our blog! Stay informed and inspired with our expert articles, guides, and resources"
        />
        <meta
          property="og:image"
          content={useBaseUrl(
            require("/static/assets/previews/blogpreview.png").default,
            { absolute: true },
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pushprotocol" />
        <meta name="twitter:title" content="Push Protocol (Previously EPNS)" />
        <meta
          name="twitter:description"
          content="Discover the latest trends, insights, and tips about Push Protocol in our blog! Stay informed and inspired with our expert articles, guides, and resources. Whether you're a developer, entrepreneur, or enthusiast, find valuable content to fuel your passion and drive success. Explore now and elevate your knowledge."
        />
        <meta
          property="twitter:image"
          content={useBaseUrl(
            require("/static/assets/previews/blogpreview.png").default,
            { absolute: true },
          )}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "Push Protocol",
            description: "The Communication Protocol of Web3",
            url: "https://push.org",
            logo: "/assets/website/favicon.ico",
            sameAs: [
              "https://twitter.com/pushprotocol",
              "https://www.linkedin.com/company/push-protocol/mycompany/",
            ],
          })}
        </script>
      </Head>

      {toc ? (
        <BlogItem className="">
          <TOC className=""></TOC>
          <main
            // className={clsx("col", {
            //   "col--7": hasSidebar,
            //   "col--9 col--offset-1": !hasSidebar,
            // })}
            className="mainItem"
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          <TOC className="">{toc}</TOC>
        </BlogItem>
      ) : (
        <div className="container">
          <BlogSidebar sidebar={sidebar} />
          <main
            // className={clsx("col", {
            //   "col--7": hasSidebar,
            //   "col--9 col--offset-1": !hasSidebar,
            // })}
            className="mainItem"
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
        </div>
      )}
    </Layout>
  );
}

const BlogItem = styled.div`
  max-width: 100vw !important;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 85vw !important;
    min-width: 85vw !important;
    margin: 0 auto;
    & main {
      margin: 0 auto;
    }
  }
`;

const TOC = styled.div`
  display: none;

  @media (min-width: 1200px) {
    width: 250px;
    display: block;
    margin-top: 100px;
  }
`;
