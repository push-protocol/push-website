/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import sidebars from "@site/sidebars";
import Layout from "@theme/Layout";
import PageNotFound from "@site/src/components/PageNotFound";
import Link from "@docusaurus/Link";
import styled from "styled-components";
import BlogSidebar from "@theme/BlogSidebar";
// import CaretDown from "@site/src/static/assets/svgs/CaretDown.svg";
import BlogListPage from "../../BlogListPage";
import { BlogListPageContent } from "../../BlogListPage";
import { useLocation } from "@docusaurus/router";
import {
  A,
  B,
  Button,
  Content,
  H1,
  H2,
  H3,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from "@site/src/css/SharedStyling";


import DocSidebar from "@theme/DocSidebar";
import DocSidebarDesktop from "@theme/DocSidebar/Desktop";
import DocSidebarItems from "@theme/DocSidebarItems";
import { ThemeClassNames } from "@docusaurus/theme-common";
import MainStyles from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css";
import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css";
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css";
import DocBreadcrumbs from "@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css";

import MDXContent from "@theme/MDXContent";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import { useThemeConfig } from "@docusaurus/theme-common";
import Logo from "@theme/Logo";
import {
  DocsSidebarProvider,
  useDocRootMetadata,
} from "@docusaurus/theme-common/internal";


export default function NotFoundContent({className}: Props): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <StyledContainer>
    <Section>
    <Content>
    {/* <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page">
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </Translate>
          </p>
        </div>
      </div>
    </main> */}
    <CenteredRow>
        <PageContainer>
          <PageNotFound
            title="Oops..."
            text="The page you're trying to reach doesn't exist."
            buttonText="Go to Docs Hub"
            buttonFunction={() => console.log("Yo boi")}
          />
          {/* <BlogListPage {...props}/> */}
        </PageContainer>
      </CenteredRow>
     </Content>
    </Section>

      {location.pathname.startsWith("/docs") && (<Footer />)}
    </StyledContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledContainer = styled.main`
  display: flex;
  width: 100%;
  // max-width: 86%;
  margin: 0 auto;
  height: 91vh;
  .docSidebar {
    margin-right: 20px;
    width: 263px;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  .docSidebarContainer_node_modules-\@docusaurus-theme-classic-lib-theme-DocRoot-Layout-Sidebar-styles-module {
    display: block;
    width: var(--doc-sidebar-width);
    margin-top: calc(-1 * var(--ifm-navbar-height));
    border-right: 1px solid var(--ifm-toc-border-color);
    will-change: width;
    transition: width var(--ifm-transition-fast) ease;
    clip-path: inset(0);
  }
`;

const CenteredRow = styled.div`
  display: flex;
  justify-content: center;
`;

const SideBarHeading = styled.p`
  width: 100%;
  max-width: 270px;
  height: 52px;
  border-radius: 8px;
  padding: 16px;
  background-color: #dd44b9;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`;

const SideBarHeadingNotActive = styled.h2`
  width: 263px;
  height: 52px;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

const StyledSidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 8px;
  height: 41px;
  width: 100%;
  max-width: 270px;
  padding: 10px 8px 10px 16px;
  justify-content: space-between;
  transition: transform 0.3s ease; // Add smooth transition for transform property
  #innerLink {
    margin-left: 80px;
  }
`;

const SidebarInnerLink = styled(SidebarLink)`
  margin-left: 8px;
  transition: transform 0.3s ease;
  max-width: 250px;
  width: 90%;
`;

const SidebarLinkContainer = styled.div`
  cursor: pointer;
`;

// const SidebarSvg = styled(CaretDown)`
//   transition: transform 0.3s ease;
//   transform: rotate(0);
//   margin-left: 80px;
//   #innerLink {
//     margin-left: 80px;
//   }
// `;