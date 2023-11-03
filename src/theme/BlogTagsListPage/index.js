/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import TagsListByLetter from "@theme/TagsListByLetter";
import SearchMetadata from "@theme/SearchMetadata";
// import styles from "./styles.module.css";
import styled from "styled-components";

// Internal Configs
import { device } from "@site/src/config/globals";

export default function BlogTagsListPage({ tags, sidebar }) {
  const title = translateTagsPageTitle();
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}
    >
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list" />
      <BlogLayout />
      <TagSection>
        <h1>{title}</h1>
        <TagsListByLetter tags={tags} />
      </TagSection>
    </HtmlClassNameProvider>
  );
}

const TagSection = styled.div`
  width: 1120px !important;
  margin: 50px auto;

  @media ${device.tablet} {
    width: 90% !important;
  }
`;
