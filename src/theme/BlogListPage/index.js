/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import BlogPostItems from "@theme/BlogPostItems";
import styled from "styled-components";
import PushProductsScroll from "@site/src/components/Home/PushProductsScroll";
import BlogHorizontalScroll from "./BlogHorizontalScroll";
import MobileBlogHorizontalScroll from "./MobileBlogHorizontalScroll";
import { Section } from "@site/src/css/SharedStyling";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

// Internal Configs
import { device } from "@site/src/config/globals";

function BlogListPageMetadata(props) {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}
function BlogListPageContent(props) {
  const { metadata, items, sidebar } = props;
  return (
    <>
      <ListItem>
        <BlogPostItems items={items.slice(0, 3)} list={true} />
      </ListItem>
      <GridItem>
        <BlogPostItems items={items} />
        <BlogListPaginator metadata={metadata} />
      </GridItem>
    </>
  );
}
export default function BlogListPage(props) {
  const isSwiper = useMediaQuery(`(max-width: 1199px)`);
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <div>
        <BlogLayout></BlogLayout>
      </div>

      {/* <SpaceSection>
        <SpaceContent className="contentBox">
          {!isSwiper ? (
            <BlogHorizontalScroll {...props} />
          ) : (
            <MobileBlogHorizontalScroll {...props} />
          )}
        </SpaceContent>
      </SpaceSection> */}

      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}

const SpaceSection = styled(Section)`
  width: 100%;
  padding: 0px 0px 20px 0px;
  // padding: 180px 0px 20px 0px;
  // min-height: 70vh;
  // max-height: 70vh;
  background: #121315;
  border-radius: 0 0 48px 48px;

  @media ${device.tablet} {
    padding: 80px 20px 0px 20px;
    display: flex;
    justify-content: center;
  }
`;

export const SpaceContent = styled.div`
  // padding: ${(props) => props.padding || "40px 0px"};

  &.contentBox {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    padding: ${(props) => props.padding || "10px 0px"};

    &.contentBox {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    padding: ${(props) => props.padding || "10px 0px"};

    &.contentBox {
      width: 100%;
    }
  }
`;

const GridItem = styled.div`
  width: 1120px !important;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 33px;
  // padding: 32px;
  box-sizing: border-box;
  margin: 100px auto 0 auto;

  @media ${device.laptopL} {
    width: 100% !important;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  margin: auto;
`;
