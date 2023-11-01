/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { listTagsByLetters } from "@docusaurus/theme-common";
import Tag from "@theme/Tag";
// import styles from "./styles.module.css";
import styled from "styled-components";

// Internal Configs
import { device } from "@site/src/config/globals";

function TagLetterEntryItem({ letterEntry }) {
  return (
    <TagSection>
      <h2>{letterEntry.letter}</h2>
      <Ul>
        {letterEntry.tags.map((tag) => (
          <Li key={tag.permalink}>
            <Tag {...tag} />
          </Li>
        ))}
      </Ul>
      {/* <hr /> */}
    </TagSection>
  );
}
export default function TagsListByLetter({ tags }) {
  const letterList = listTagsByLetters(tags);
  return (
    <section>
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
}

const Li = styled.li`
  list-style: none;
  display: flex !important;
  margin: 1rem 0.4rem 0.5rem 0;
`;

const Ul = styled.ul`
  margin: 0 0;
  padding: 0 0;

  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const TagSection = styled.div`
  margin: 25px 0;
`;
