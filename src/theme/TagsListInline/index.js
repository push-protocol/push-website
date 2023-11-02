/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Tag from "@theme/Tag";
import styled from "styled-components";

// Internal Configs
import { device } from "@site/src/config/globals";

// import styles from "./styles.module.css";
export default function TagsListInline({ tags }) {
  return (
    <>
      {/* <b>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list"
        >
          Tags:
        </Translate>
      </b> */}
      <Ul>
        {tags.map(({ label, permalink: tagPermalink }) => (
          <Li key={tagPermalink}>
            <Tag label={label} permalink={tagPermalink} />
          </Li>
        ))}
      </Ul>
    </>
  );
}

const Li = styled.li`
  list-style: none;
  display: inline-block !important;
  margin: 0 0.4rem 0.5rem 0;

  @media ${device.laptopL} {
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Ul = styled.ul`
  margin: 0 0;
  padding: 0 0;
`;
