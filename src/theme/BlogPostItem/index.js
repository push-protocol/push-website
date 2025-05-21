/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import styled from 'styled-components';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';

// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  const isMobile = useMediaQuery(device.tablet);
  return !isBlogPostPage && !isMobile
    ? 'margin-bottom--xl'
    : !isBlogPostPage && isMobile
      ? 'margin-bottom--md'
      : undefined;
}
export default function BlogPostItem({ children, className, list }) {
  const containerClassName = useContainerClassName();
  const { isBlogPostPage } = useBlogPost();

  if (list) {
    return (
      <ListView>
        <Content>
          <BlogPostItemContent>{children}</BlogPostItemContent>
        </Content>

        <TextView>
          {!isBlogPostPage && <BlogPostItemHeader list={list} />}
          <TextSpan>{children?.type?.frontMatter?.text}</TextSpan>
          <BlogPostItemFooter />
        </TextView>
      </ListView>
    );
  } else {
    return (
      <BlogPostItemContainer className={clsx(containerClassName, className)}>
        {isBlogPostPage && <BlogPostItemHeader />}

        <BlogPostItemContent>{children}</BlogPostItemContent>
        {!isBlogPostPage && <BlogPostItemHeader />}
        {!isBlogPostPage && (
          <TextSpan>{children?.type?.frontMatter?.text}</TextSpan>
        )}

        <BlogPostItemFooter />
      </BlogPostItemContainer>
    );
  }
}

const ListView = styled.div`
  display: flex;
  flex-direction: row;
  margin: 32px 0;
  align-items: center;
  gap: 32px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Content = styled.div`
  min-width: 544px;
  max-width: 544px;

  @media (max-width: 1200px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const TextView = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const TextSpan = styled.div`
  color: var(--ifm-color-secondary-blog);
  font-family: Inter, sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  margin-bottom: 20px;

  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
