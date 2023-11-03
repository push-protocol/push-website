/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import styled from "styled-components";

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
export default function BlogPostItemHeaderAuthor({ author, className }) {
  const { name, title, url, imageURL, email } = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    <AvatarDiv>
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <Img
            // className="avatar__photo"
            src={imageURL}
            alt={name}
            itemProp="image"
          />
        </MaybeLink>
      )}

      <AvatarItem>
        {name && (
          <div
            // className="avatar__intro"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="avatar__name">
              <MaybeLink href={link} itemProp="url">
                <span itemProp="name">{name}</span>
              </MaybeLink>
            </div>
            {title && (
              <small className="avatar__subtitle" itemProp="description">
                {title}
              </small>
            )}
          </div>
        )}

        <BlogPostItemHeaderInfo />
      </AvatarItem>
    </AvatarDiv>
  );
}

const AvatarItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
  border: 1px solid #e6e7ec;
  border-radius: 100%;
  padding: 10px;
`;

const AvatarDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;
