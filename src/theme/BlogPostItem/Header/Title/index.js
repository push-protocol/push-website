/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import styled from 'styled-components';

// Internal Configs
import { device } from '@site/src/config/globals';

export default function BlogPostItemHeaderTitle() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  return (
    <>
      {isBlogPostPage ? (
        <PostTitle>{title}</PostTitle>
      ) : (
        <Link itemProp='url' to={permalink}>
          <LinkText>{title}</LinkText>
        </Link>
      )}
    </>
  );
}

const LinkText = styled.h1`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: var(--ifm-color-primary-blog) !important;

  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;

  &:hover {
    color: #dd44b9 !important;
  }
`;

const PostTitle = styled.h1`
  color: var(--ifm-color-primary-blog) !important;

  font-family: Inter;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 55.5px;

  @media ${device.tablet} {
    font-size: 25px;
    line-height: 30px;
  }
`;
