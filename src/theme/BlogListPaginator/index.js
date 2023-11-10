/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import PaginatorNavLink from "@theme/PaginatorNavLink";
import styled from "styled-components";

// Internal Configs
import { device } from "@site/src/config/globals";

export default function BlogListPaginator(props) {
  const { metadata } = props;
  const { previousPage, nextPage } = metadata;
  return (
    <NavItem
      // className="pagination-nav"
      aria-label={translate({
        id: "theme.blog.paginator.navAriaLabel",
        message: "Blog list page navigation",
        description: "The ARIA label for the blog pagination",
      })}
    >
      {previousPage && (
        <PaginatorNavLink
          permalink={previousPage}
          title={
            <Translate
              id="theme.blog.paginator.newerEntries"
              description="The label used to navigate to the newer blog posts page (previous page)"
            >
              Newer Entries
            </Translate>
          }
        />
      )}
      {nextPage && (
        <PaginatorNavLink
          permalink={nextPage}
          title={
            <Translate
              id="theme.blog.paginator.olderEntries"
              description="The label used to navigate to the older blog posts page (next page)"
            >
              Older Entries
            </Translate>
          }
          isNext
        />
      )}
    </NavItem>
  );
}

const Div = styled.div``;

const NavItem = styled.nav`
  margin: 0 auto 72px auto;
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  width: 1120px !important;

  @media ${device.laptopL} {
    width: 100% !important;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
