/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import { useBlogPost } from "@docusaurus/theme-common/internal";

export default function BlogPostItemHeader({ list }) {
  const { isBlogPostPage } = useBlogPost();
  if (list) {
    return (
      <header>
        <BlogPostItemHeaderInfo />
        <BlogPostItemHeaderTitle />
        {isBlogPostPage && <BlogPostItemHeaderAuthors />}
      </header>
    );
  } else {
    return (
      <header>
        <BlogPostItemHeaderTitle />
        <BlogPostItemHeaderInfo />
        {isBlogPostPage && <BlogPostItemHeaderAuthors />}
      </header>
    );
  }
}
