/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/theme-common/internal';
import GLOBALS from '@site/src/config/globals';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import TOC from '@theme/TOC';
import clsx from 'clsx';
import styled from 'styled-components';
import FooterItem from './FooterItem';
import MorePosts from './MorePosts';

function BlogPostPageContent({ allPosts, post, children }) {
  const { metadata, toc } = useBlogPost();

  const { frontMatter } = metadata;
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

        <FooterItem />
        <MorePosts allPosts={allPosts} post={post} />
      </BlogItem>
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const blogPath = props.location.pathname.substring(
    0,
    props.location.pathname.length - 1
  );
  const allPosts = props.allPosts;
  const contentName = allPosts?.filter((x) =>
    x?.Preview?.metadata?.permalink.includes(blogPath)
  )[0];
  const BlogPostContent = contentName?.Preview;

  return (
    <BlogPostProvider content={contentName?.Preview} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage
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

  & article .markdown {
    * {
      font-size: 1.25rem;
    }

    h1 {
      font-size: 2.65rem;
      font-weight: 700px;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700px;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700px;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 700px;
    }

    h5 {
      font-size: 1rem;
      font-weight: 700px;
    }
  }

  @media (max-width: 820px) {
    width: 100% !important;
    padding: ${`${GLOBALS.STRUCTURE.PADDING.MOBILE}`};
    box-sizing: border-box;
  }
`;
