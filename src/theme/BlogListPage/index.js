/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Span } from '@site/src/css/SharedStyling';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogPostItems from '@theme/BlogPostItems';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';
import styled from 'styled-components';
import { useLocation } from '@docusaurus/router';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';

function BlogListPageMetadata(props) {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const location = useLocation();
  const pathname = location?.pathname;

  const isBlogOnlyMode = permalink === '/';
  const isBlogMainPage =
    pathname.includes('/page/') || pathname == '/blog/' || pathname == '/blog';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      {!isBlogMainPage && (
        <PageMetadata title={title} description={blogDescription} />
      )}
      <SearchMetadata tag='blog_posts_list' />
    </>
  );
}
function BlogListPageContent(props) {
  const { metadata, items } = props;

  return (
    <>
      <ListItem>
        <ListSpan>
          {metadata?.page == 1 ? 'Recent Updates' : `Page ${metadata?.page}`}
        </ListSpan>
        {metadata?.page == 1 && (
          <BlogPostItems items={items?.slice(0, 4)} list={true} />
        )}
      </ListItem>
      <GridItem marginTop={metadata?.page == 1 ? true : false}>
        <BlogPostItems items={items?.slice(metadata?.page == 1 ? 4 : 0, 11)} />
      </GridItem>
      <PaginatorDiv>
        <BlogListPaginator metadata={metadata} />
      </PaginatorDiv>
    </>
  );
}
export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogLayout>
        <BlogListPageMetadata {...props} />
        <BlogListPageContent {...props} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}

const GridItem = styled.div`
  width: 1120px !important;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 33px;
  box-sizing: border-box;
  margin: ${(props) =>
    props.marginTop ? '100px auto 0 auto' : '30px auto 0 auto'};

  @media (max-width: 1200px) {
    width: 100% !important;
    padding: ${`${GLOBALS.STRUCTURE.PADDING.MOBILE}`};
    box-sizing: border-box;
    margin: 10px auto 0 auto;
    gap: 30px;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const PaginatorDiv = styled.div`
  width: 100% !important;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  margin: 50px auto auto auto;

  @media (max-width: 1200px) {
    width: 100% !important;
    padding: ${`${GLOBALS.STRUCTURE.PADDING.MOBILE}`};
    box-sizing: border-box;
    margin: 10px auto 0 auto;
  }
`;

const ListSpan = styled(Span)`
  color: var(--ifm-color-primary-blog);
  font-family: Inter;
  font-size: 37px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 44px */
  letter-spacing: -1.2px;
`;
