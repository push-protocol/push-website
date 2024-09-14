/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
// import moment from "moment";
import {
  Date,
  ReadingTime,
  Spacer,
} from '@site/src/components/reusables/date.tsx';

export default function BlogPostItemHeaderInfo({ className, morePosts }) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { date, formattedDate, readingTime } = metadata;
  if (morePosts) {
    const blogDate = morePosts.date;
    const blogFormattedDate = morePosts.formattedDate;
    const blogReadingTime = morePosts.readingTime;

    return (
      <div
        className={clsx(
          styles.container,
          !isBlogPostPage ? 'margin-vert--sm' : '',
          className
        )}
      >
        <Date date={blogDate} formattedDate={blogFormattedDate} />
        {typeof blogReadingTime !== 'undefined' && (
          <>
            <Spacer />
            <ReadingTime readingTime={blogReadingTime} />
          </>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={clsx(
          styles.container,
          !isBlogPostPage ? 'margin-vert--sm' : '',
          className
        )}
      >
        <Date date={date} formattedDate={formattedDate} />
        {typeof readingTime !== 'undefined' && (
          <>
            <Spacer />
            <ReadingTime readingTime={readingTime} />
          </>
        )}
      </div>
    );
  }
}
