import { usePluralForm } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";
import React from "react";
import moment from "moment";



export function useReadingTimePlural() {
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

  export function Spacer() {
    return <>{" · "}</>;
  }

  export function ReadingTime({ readingTime }) {
    const readingTimePlural = useReadingTimePlural();
    return <>{readingTimePlural(readingTime)}</>;
  }
  
  export function Date({ date, formattedDate, mr }) {
    var year = moment().year();
    const isPresentYear = formattedDate?.includes(year);
    const newDate = moment(formattedDate).format(
      !isPresentYear ? "MMM DD,  YYYY" : "MMM DD",
    );

    return (
      <time
        style={{ marginRight: mr }}
        dateTime={date}
        itemProp="datePublished"
      >
        {newDate}
      </time>
    );
  }