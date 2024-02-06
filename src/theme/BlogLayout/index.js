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
  console.log("sidebarrrr", sidebar, children);
  return (
    <Layout {...layoutProps}>
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
