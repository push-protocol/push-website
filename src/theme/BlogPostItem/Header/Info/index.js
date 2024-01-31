/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { usePluralForm } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
import moment from "moment";
// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: "theme.blog.post.readingTime.plurals",
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One min read|{readingTime} min read",
        },
        { readingTime },
      ),
    );
  };
}
function ReadingTime({ readingTime }) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}
function Date({ date, formattedDate }) {
  var year = moment().year();
  const isPresentYear = formattedDate?.includes(year);
  const newDate = moment(formattedDate).format(
    !isPresentYear ? "MMM DD,  YYYY" : "MMM DD",
  );

  return (
    <time dateTime={date} itemProp="datePublished">
      {newDate}
    </time>
  );
}
export function Spacer() {
  return <>{" · "}</>;
}
export default function BlogPostItemHeaderInfo({ className, morePosts }) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { date, formattedDate, readingTime } = metadata;
  if (morePosts) {
    const blogDate = morePosts.date;
    const blogFormattedDate = morePosts.formattedDate;
    const blogReadingTime = morePosts.readingTime;

    // const { date, formattedDate, readingTime } = morePosts;
    return (
      <div
        className={clsx(
          styles.container,
          !isBlogPostPage ? "margin-vert--sm" : "",
          className,
        )}
      >
        <Date date={blogDate} formattedDate={blogFormattedDate} />
        {typeof blogReadingTime !== "undefined" && (
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
          !isBlogPostPage ? "margin-vert--sm" : "",
          className,
        )}
      >
        <Date date={date} formattedDate={formattedDate} />
        {typeof readingTime !== "undefined" && (
          <>
            <Spacer />
            <ReadingTime readingTime={readingTime} />
          </>
        )}
      </div>
    );
  }
}
