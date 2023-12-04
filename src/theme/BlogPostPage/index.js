/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  BlogPostProvider,
  useBlogPost,
} from "@docusaurus/theme-common/internal";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import TOC from "@theme/TOC";
import FooterItem from "./FooterItem";
import MorePosts from "./MorePosts";
import styled from "styled-components";
import GLOBALS, { device } from "@site/src/config/globals";

function BlogPostPageContent({ allPosts, post, children }) {
  const { metadata, toc } = useBlogPost();

  const { nextItem, prevItem, frontMatter, unlisted } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;

  return (
    <BlogLayout
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }
    >
      <BlogItem>
        <BlogPostItem>{children}</BlogPostItem>

        {/* {(nextItem || prevItem) && (
          <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
        )} */}

        <FooterItem />
        <MorePosts allPosts={allPosts} post={post} />
      </BlogItem>
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const blogPath = props.location.pathname.substring(
    0,
    props.location.pathname.length - 1,
  );
  const allPosts = props.allPosts;
  const contentName = allPosts?.filter((x) =>
    x?.Preview?.metadata?.permalink.includes(blogPath),
  )[0];
  const BlogPostContent = contentName?.Preview;

  // const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={contentName?.Preview} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}
      >
        <BlogPostPageMetadata />
        <BlogPostPageContent allPosts={allPosts} post={contentName}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}

const BlogItem = styled.div`
  width: 800px !important;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100% !important;
    padding: ${`${GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE}`};
    box-sizing: border-box;
  }
`;
