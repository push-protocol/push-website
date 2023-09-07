// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Components
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Internal Components
import { getBlogData } from '../api';
import useMediaQuery from '../hooks/useMediaQuery';
import { ItemHV2, ItemVV2, H3V2 } from './SharedStylingV2';

// Internal Configs
import { device } from '../config/globals';

function extractContent(s) {
  const span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
}

function getDescription(hypertext) {
  try {
    const articleFragments = hypertext.split('\n');
    const [, descriptionFrag = ''] = articleFragments;
    return extractContent(descriptionFrag);
  } catch (e) {
    return '';
  }
}

function getSubarticles(isMobile, blogs) {
  const [, ...otherBlogs] = blogs || [];

  if (isMobile) {
    return blogs;
  }

  return otherBlogs;
}

type BlogLoaderProps = {
  isMobile: boolean;
};

function BlogLoader(props: BlogLoaderProps) {
  const figureDimensions = props.isMobile
    ? {
        width: 118,
        height: 108,
      }
    : {
        width: 207,
        height: 108,
      };

  return (
    <>
      <ItemHV2
        margin="40px 0 0 0"
        gap="48px"
      >
        <MainArticle>
          <Skeleton
            height={284}
            width={544}
            borderRadius={32}
          />

          <ArticleText>
            <Skeleton
              height={20}
              borderRadius={32}
            />
          </ArticleText>

          <ArticleText>
            <Skeleton
              height={7}
              borderRadius={23}
            />
            <Skeleton
              height={7}
              width="50%"
              borderRadius={23}
            />
          </ArticleText>
        </MainArticle>

        <SubArticles>
          {[1, 2, 3].map((idx) => {
            return (
              <SubArticle
                className="loader"
                key={`subarticle-${idx}`}
              >
                <Skeleton
                  height={figureDimensions.height}
                  width={figureDimensions.width}
                  borderRadius={20}
                />

                <SubArticleHeader>
                  <Skeleton
                    height={7}
                    borderRadius={23}
                  />
                  <Skeleton
                    height={7}
                    width="50%"
                    borderRadius={23}
                  />
                </SubArticleHeader>
              </SubArticle>
            );
          })}
        </SubArticles>
      </ItemHV2>

      <ItemHV2
        height="1px"
        background="#000"
        margin="15px 0 0 0"
      />
    </>
  );
}

type BlogsProps = {
  count: number;
};

function Blogs(props: BlogsProps) {
  const isMobile = useMediaQuery(device.tablet);
  const [blogsData, setBlogsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const data = await getBlogData(props.count);
      // console.log('GOT ------>>> blogs data: ', data);
      setBlogsData(data);
    } catch (e) {
      console.error('Blogs API data fetch error: ', e);
    } finally {
      setIsLoading(false);
    }
  };

  const onArticleClick = (clickedBlog) => {
    if (clickedBlog?.link) {
      window.open(clickedBlog?.link, '_blank');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!blogsData && isLoading) return <BlogLoader isMobile={isMobile} />;

  if (Array.isArray(blogsData) && blogsData.length > 0) {
    return (
      <>
        <ItemHV2
          margin="40px 0 0 0"
          gap="48px"
        >
          <MainArticle
            onClick={() => onArticleClick(blogsData[0])}
            title={blogsData[0].title}
          >
            <ArticleBanner
              src={blogsData[0].thumbnail}
              alt={blogsData[0].title}
            />

            <H3V2
              textTransform="capitalize"
              color="#09090B"
              fontSize="24px"
              fontWeight="500"
              letterSpacing="-0.02em"
              lineHeight="142%"
              margin="24px 0 0 0"
            >
              {blogsData[0].title}
            </H3V2>

            <ArticleText>{getDescription(blogsData[0].description)}</ArticleText>
          </MainArticle>

          <SubArticles>
            {getSubarticles(isMobile, blogsData)?.map((blogData, idx) => {
              return (
                <SubArticle
                  key={idx}
                  onClick={() => onArticleClick(blogData)}
                  title={blogData.title}
                >
                  <SubArticleBanner
                    src={blogData.thumbnail}
                    alt={blogsData[0].title}
                  />
                  <SubArticleHeader>{blogData.title}</SubArticleHeader>
                </SubArticle>
              );
            })}
          </SubArticles>
        </ItemHV2>

        <ItemHV2
          height="1px"
          background="#000"
          margin="15px 0 0 0"
        />
      </>
    );
  }
}

const MainArticle = styled(ItemVV2)`
  row-gap: 8px;

  &:hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const ArticleBanner = styled.img`
  width: 544px;
  height: auto;
  // height: 284px;
  background: #d9d9d9;
  border-radius: 32px;
`;

const ArticleText = styled.div`
  width: 100%;
  color: #303c5e;
  font-size: 19px;
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 160%;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

const SubArticles = styled(ItemVV2)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  row-gap: 20px;
`;

const SubArticle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  padding-bottom: 24px;
  border-bottom: 1px solid #000000;

  &:hover {
    cursor: pointer;
  }

  &.loader {
    padding-bottom: 20px;
  }

  &:last-child {
    border-bottom: 0;
  }

  @media ${device.tablet} {
    align-items: center;
  }
`;

const SubArticleBanner = styled.img`
  width: 207px;
  height: auto;
  background: #d9d9d9;
  border-radius: 20px;

  @media ${device.tablet} {
    width: auto;
    height: 90px;
  }
`;

const SubArticleHeader = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 142%;
  color: #09090b;
  flex: 1;
  align-self: center;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export default React.memo(Blogs);
