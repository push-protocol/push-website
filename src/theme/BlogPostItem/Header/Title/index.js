/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
import styled from "styled-components";

export default function BlogPostItemHeaderTitle({ className }) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? "h1" : "h2";
  return (
    <TitleHeading className={clsx(styles.title, className)} itemProp="headline">
      {isBlogPostPage ? (
        <PostTitle>{title}</PostTitle>
      ) : (
        <Link itemProp="url" to={permalink}>
          <LinkText>{title}</LinkText>
        </Link>
      )}
    </TitleHeading>
  );
}

const LinkText = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: #121315 !important;

  font-family: Strawford;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;

  &:hover {
    color: #dd44b9 !important;
  }
`;

const PostTitle = styled.div`
  color: #121315;

  font-family: Strawford;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 55.5px;
`;
