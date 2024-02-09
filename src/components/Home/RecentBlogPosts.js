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
import useMediaQuery from "@site/src/hooks/useMediaQuery";

const RecentBlogPosts = ({ recentPosts = [] }) => {
  const isTablet = useMediaQuery(device.laptop);
  return (
    <BlogPostList>
      {/* <BlogPostCardContainer> */}
      {recentPosts.slice(0, 1).map((postItem, index) => {
        console.log(postItem);
        // Docusaurus loads the actual content lazily;
        // hence the .default to get the actual component.
        return (
          <BlogPostCardPrimary
            key={index}
            className="item-3"
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
                display={isTablet && "none"}
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
                fontSize={isTablet ? "20px" : "30px"}
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
      {/* </BlogPostCardContainer> */}
      {/* <BlogPostCardContainer> */}
      {recentPosts.slice(1, 4).map((postItem, index) => {
        // Docusaurus loads the actual content lazily;
        // hence the .default to get the actual component.
        return (
          <BlogPostCardSecondary
            key={index}
            c
            className={`item-${index}`}
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
      {/* </BlogPostCardContainer> */}
    </BlogPostList>
  );
};

const BlogPostList = styled(ItemH)`
  gap: 25px;
  margin: 75px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;

  .item-3 {
    grid-column: 1;
    grid-row: span 3 / span 3;
  }

  .item-0 {
    grid-column: 2;
    grid-row: 1;
  }

  .item-1 {
    grid-column: 2;
    grid-row: 2;
  }

  .item-2 {
    grid-column: 2;
    grid-row: 3;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;

    .item-3 {
      grid-column: 1;
      grid-row: 1;
    }

    .item-0 {
      grid-column: 2;
      grid-row: 1;
    }

    .item-1 {
      grid-column: 1;
      grid-row: 2;
    }

    .item-2 {
      grid-column: 2;
      grid-row: 2;
    }
  }

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
    gap: 0px;

    .item-3 {
      grid-column: 1;
      grid-row: 1;
    }

    .item-0 {
      grid-column: 1;
      grid-row: 2;
      margin-top: 24px;
    }

    .item-1 {
      grid-column: 1;
      grid-row: 3;
      margin-top: 24px;
    }

    .item-2 {
      grid-column: 1;
      grid-row: 4;
      margin-top: 24px;
    }
  }
`;

const BlogPostCardContainer = styled(ItemV)`
  // justify-content: flex-start;
  // gap: 25px;

  // @media ${device.laptop} {
  //   display: grid;
  //   grid-template-columns: repeat(2, minmax(0, 1fr));
  //   width: 100%;
  // }
`;

const BlogPostCardPrimary = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
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
  @media ${device.laptop} {
    border-radius: 0px;
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

  @media ${device.laptop} {
    flex-direction: column;
    height: auto;
    border-radius: 0px;

    & img {
      min-width: 100%;
      max-width: 100%;
      object-fit: cover;
      height: auto;
      border-radius: 24px;
      display: block;
    }
  }

  @media ${device.tablet} {
    & ${Span} {
      font-size: 20px;
    }

    & img {
      width: auto;
      min-width: 200px;
      height: auto;
      border-radius: 24px;
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

  @media ${device.laptop} {
    border-bottom: 1px solid #252527;
    height: auto;
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

  @media ${device.laptop} {
    display: none !important;
  }
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

  @media ${device.mobileL} {
    padding: 0 0 24px 0;
  }
`;

export default RecentBlogPosts;
