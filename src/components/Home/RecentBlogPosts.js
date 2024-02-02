// React + Web3 Essentials
import React from "react";

// External Components
import styled from "styled-components";

// Internal Components
import { Button, H2, ItemH, ItemV, Span } from "@site/src/css/SharedStyling";

// Import Assets
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";

// Internal Configs
import GLOBALS, { device } from "@site/src/config/globals";

import {
  Date,
  ReadingTime,
  Spacer,
} from "@site/src/components/reusables/date.tsx";

const RecentBlogPosts = ({ recentPosts = [] }) => {
  return (
    <BlogPostList>
      <BlogPostCardContainer>
        {recentPosts.slice(0, 1).map((postItem, index) => {
          console.log(postItem);
          // Docusaurus loads the actual content lazily;
          // hence the .default to get the actual component.
          return (
            <BlogPostCardPrimary
              key={index}
              onClick={() => {
                window.open(
                  `/blog/${postItem.metadata.frontMatter.slug}`,
                  "_self",
                );
              }}
              alt={`Read blog post - ${postItem.metadata.frontMatter.title}`}
            >
              <postItem.Preview loading="lazy" />

              <BodyItem>
                <ItemH
                  alignItems="flex-start"
                  alignSelf="flex-start"
                  color="#fff"
                  className="date"
                >
                  <Date
                    date={postItem.Preview.metadata.date}
                    formattedDate={postItem.Preview.metadata.formattedDate}
                    mr={"3px"}
                  />
                  {typeof postItem.Preview.metadata.readingTime !==
                    "undefined" && (
                    <>
                      <Spacer />
                      <ReadingTime
                        readingTime={postItem.Preview.metadata.readingTime}
                      />
                    </>
                  )}
                </ItemH>

                <H2
                  margin="8px 0"
                  textAlign="left"
                  fontSize="30px"
                  color="#fff"
                  lineHeight="150%"
                  fontFamily="FK Grotesk Neue"
                >
                  {postItem.metadata.title}
                </H2>

                <TextSpan>{postItem.metadata.frontMatter.text}</TextSpan>
              </BodyItem>
            </BlogPostCardPrimary>
          );
        })}
      </BlogPostCardContainer>
      <BlogPostCardContainer>
        {recentPosts.slice(1, 4).map((postItem, index) => {
          // Docusaurus loads the actual content lazily;
          // hence the .default to get the actual component.
          return (
            <BlogPostCardSecondary
              key={index}
              onClick={() => {
                window.open(
                  `/blog/${postItem.metadata.frontMatter.slug}`,
                  "_self",
                );
              }}
              alt={`Read blog post - ${postItem.metadata.frontMatter.title}`}
            >
              <postItem.Preview loading="lazy" />
              <TitleItem>
                <H2
                  margin="auto 0"
                  textAlign="left"
                  fontSize="20px"
                  color="#fff"
                  lineHeight="150%"
                  fontFamily="FK Grotesk Neue"
                >
                  {postItem.metadata.title}
                </H2>
              </TitleItem>
            </BlogPostCardSecondary>
          );
        })}
      </BlogPostCardContainer>
    </BlogPostList>
  );
};

const BlogPostList = styled(ItemH)`
  gap: 25px;
  margin: 75px 0 0 0;
`;

const BlogPostCardContainer = styled(ItemV)`
  justify-content: flex-start;
  gap: 25px;

  @media ${device.laptop} {
    flex: initial;
  }
`;

const BlogPostCardPrimary = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  // background: transparent;
  color: ${GLOBALS.COLORS.FONT_DARK};
  padding: 0px 0px;
  gap: 24px;

  & p {
    margin: 0;
  }

  & img {
    width: auto;
    min-width: 200px;
    height: auto;
    border-radius: 24px;
  }

  & p:nth-child(2) {
    display: none;
  }

  & p:nth-child(3) {
    display: none;
  }

  & h1 {
    display: none;
  }

  & ${Span} {
    min-width: 200px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    & ${Span} {
      font-size: 20px;
    }
  }
`;

const BlogPostCardSecondary = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-self: stretch;
  // background: transparent;
  color: ${GLOBALS.COLORS.FONT_DARK};
  padding: 0px 0px;
  gap: 24px;
  height: 160px;

  & p {
    margin: 0 !important;
  }

  & img {
    min-width: 282px;
    max-width: 282px;
    object-fit: cover;
    // min-width: 200px;
    // max-width: 100%;
    height: 160px;
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL};
    display: block;
  }

  & p:nth-child(2) {
    display: none;
  }

  & p:nth-child(3) {
    display: none;
  }

  & h1 {
    display: none;
  }

  & ${Span} {
    min-width: 200px;
    align-self: center;
    align-items: center;
    color: #fff;
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    & ${Span} {
      font-size: 20px;
    }

    & img {
      width: auto;
      min-width: 200px;
      height: auto;
      border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.MID};
    }
  }
`;

const BodyItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  width: 100%;

  & .date {
    color: #bbbcd0;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.03em;
    font-family: FK Grotesk Neue;
  }

  h2 {
    width: 100%;
    font-family: FK Grotesk Neue;

    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const TextSpan = styled(Span)`
  color: #bbbcd0;

  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: FK Grotesk Neue;
`;

const TitleItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid #252527;
  width: 100%;

  h2 {
    width: 100%;

    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export default RecentBlogPosts;
