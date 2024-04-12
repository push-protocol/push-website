import React from "react";
import { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import NotFoundContent from "@theme/NotFound/Content";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import sidebars from "@site/sidebars";

function NotFound() {
  const title = translate({
    id: "theme.NotFound.title",
    message: "Page Not Found",
  });

  return (
    <>
      <PageMetadata title={title} />
      {/* <Layout.Main> */}
      {/* <NotFoundContent /> */}
      {/* </Layout.Main> */}
    </>
  );
}

export default NotFound;
