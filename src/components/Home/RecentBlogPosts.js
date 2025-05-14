// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { Button, H2, ItemH, Span, Image } from '@site/src/css/SharedStyling';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import useFetchRecentBlogs from './hooks/useFetchRecentBlogs';

import {
  Date,
  ReadingTime,
  Spacer,
} from '@site/src/components/reusables/date.tsx';

const RecentBlogPosts = () => {
  const isTablet = useMediaQuery(device.laptop);
  const { recentBlogs } = useFetchRecentBlogs();

  return (
    <BlogPostList>
      {recentBlogs?.slice(0, 1).map((postItem, index) => {
        // Docusaurus loads the actual content lazily;
        // hence the .default to get the actual component.
        return (
          <BlogPostCardPrimary
            key={index}
            className='item-3'
            onClick={() => {
              window.open(`${postItem?.link}`, '_blank');
            }}
            alt={`Read blog post - ${postItem?.title}`}
          >
            <Image src={postItem?.imageUrl} width='100%' loading='lazy' />

            <BodyItem>
              <ItemH
                alignItems='flex-start'
                alignSelf='flex-start'
                color='#fff'
                className='date'
                display={isTablet && 'none'}
              >
                <Date
                  date={postItem?.pubDate}
                  formattedDate={postItem?.pubDate}
                  mr={'3px'}
                />
                {typeof postItem?.readingTime !== 'undefined' && (
                  <>
                    <Spacer />
                    <ReadingTime readingTime={postItem?.readingTime} />
                  </>
                )}
              </ItemH>

              <H2
                margin={isTablet ? '0px 0 24px 0' : '8px 0'}
                textAlign='left'
                color='#fff'
                lineHeight='135%'
                fontFamily='FK Grotesk Neue'
                letterSpacing='normal'
              >
                {postItem?.title}
              </H2>

              <TextSpan>{postItem?.description}</TextSpan>
            </BodyItem>
          </BlogPostCardPrimary>
        );
      })}
      {recentBlogs?.slice(1, 4).map((postItem, index) => {
        // Docusaurus loads the actual content lazily;
        // hence the .default to get the actual component.
        return (
          <BlogPostCardSecondary
            key={index}
            className={`item-${index}`}
            onClick={() => {
              window.open(`${postItem?.link}`, '_blank');
            }}
            alt={`Read blog post - ${postItem?.title}`}
          >
            <Image src={postItem?.imageUrl} width='100%' loading='lazy' />

            <TitleItem>
              <H2
                margin='auto 0'
                textAlign='left'
                fontWeight='500'
                color='#fff'
                lineHeight='150%'
                fontFamily='FK Grotesk Neue'
                letterSpacing='normal'
              >
                {postItem?.title}
              </H2>
            </TitleItem>
          </BlogPostCardSecondary>
        );
      })}
    </BlogPostList>
  );
};

const BlogPostList = styled(ItemH)`
  gap: 25px;
  margin: 72px 0 0 0;
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
      margin-top: 40px;
    }

    .item-2 {
      grid-column: 2;
      grid-row: 2;
      margin-top: 40px;
    }
  }

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
    margin: 41px 0 0 0;
    gap: 0px;

    .item-3 {
      grid-column: 1;
      grid-row: 1;
    }

    .item-0 {
      grid-column: 1;
      grid-row: 2;
      margin-top: 32px;
    }

    .item-1 {
      grid-column: 1;
      grid-row: 3;
      margin-top: 32px;
    }

    .item-2 {
      grid-column: 1;
      grid-row: 4;
      margin-top: 32px;
    }
  }
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
    margin: 0 !important;
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

  h2 {
    font-size: 30px;
    font-weight: 500;
    line-height: 135%;
  }

  & ${Span} {
    min-width: 200px;
  }
  @media ${device.laptop} {
    border-radius: 0px;

    h2 {
      font-size: 22px;
      line-height: 150%;
    }

    & img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    & ${Span} {
      font-size: 20px;
    }
  }

  @media ${device.mobileL} {
    h2 {
      font-size: 18px;
      line-height: 135%;
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

  h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 135%;
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

    h2 {
      font-size: 22px;
      line-height: 150%;
    }

    & img {
      min-width: 100%;
      max-width: 100%;
      object-fit: cover;
      height: auto;
      border-radius: 24px;
      display: block;
      aspect-ratio: 16/9;
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

  @media ${device.mobileL} {
    h2 {
      font-size: 18px;
      line-height: 135%;
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
    letter-spacing: normal;
    font-family: FK Grotesk Neue;
  }

  h2 {
    width: 100%;
    font-family: FK Grotesk Neue;
    letter-spacing: normal;

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
  letter-spacing: normal;
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

  @media ${device.laptop} {
    padding: 0 0 24px 0;
  }
`;

export default RecentBlogPosts;
