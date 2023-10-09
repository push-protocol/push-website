// React + Web3 Essentials
import React from "react";

// External Components
import styled from "styled-components";

// Internal Components
import { Button, ItemH, ItemV, Span } from "@site/src/css/SharedStyling";

// Import Assets

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';


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
                onClick={() => {window.open(`/blog/${postItem.metadata.frontMatter.slug}`, '_self')}}
                alt={`Read blog post - ${postItem.metadata.frontMatter.title}`}
              >
                <postItem.Preview loading="lazy" />
                <Span flex="1">{postItem.metadata.title}</Span>
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
                onClick={() => {window.open(`/blog/${postItem.metadata.frontMatter.slug}`, '_self')}}
                alt={`Read blog post - ${postItem.metadata.frontMatter.title}`}
              >
                <postItem.Preview loading="lazy" />
                <Span flex="1">{postItem.metadata.title}</Span>
              </BlogPostCardSecondary>
            );
          })}
      </BlogPostCardContainer>
    </BlogPostList>
  );
};

const BlogPostList = styled(ItemH)`
  gap: 30px;
`

const BlogPostCardContainer = styled(ItemV)`
  justify-content: flex-start;

  @media ${device.laptop} {
    flex: initial;
  }
`

const BlogPostCardPrimary = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  background: transparent;
  color: ${GLOBALS.COLORS.FONT_DARK};
  padding: 20px;
  gap: 30px;

  & p {
    margin: 0;
  }

  & img {
    width: auto;
    min-width: 200px;
    height: auto;
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.MID};
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
`

const BlogPostCardSecondary = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-self: stretch;
  background: transparent;
  color: ${GLOBALS.COLORS.FONT_DARK};
  padding: 20px;
  gap: 30px;
  
  & p {
    margin: 0;
  }

  & img {
    width: auto;
    min-width: 200px;
    height: 128px;
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.MID};
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

    & img {
      width: auto;
      min-width: 200px;
      height: auto;
      border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.MID};
    }
  }
`

export default RecentBlogPosts;
