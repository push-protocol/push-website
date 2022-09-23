// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getBlogData } from '../api';

import { device } from '../config/globals';
import useMediaQuery from '../hooks/useMediaQuery';

import {
  ItemH, ItemV, H3
} from './SharedStyling';


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
  const figureDimensions = props.isMobile ? {
    width: 118,
    height: 108
  } : {
    width: 207,
    height: 108
  };

  return (
    <>
      <ItemH margin="40px 0 0 0" gap="48px">
        <MainArticle>
          <Skeleton height={284} width={544} borderRadius={32} />

          <ArticleText>
            <Skeleton height={20} borderRadius={32} />
          </ArticleText>
                    
          <ArticleText>
            <Skeleton height={7} borderRadius={23}/>
            <Skeleton height={7} width="50%" borderRadius={23}/>
          </ArticleText>
        </MainArticle>

        <SubArticles>
          {[1, 2, 3].map((idx) => {
            return (
              <SubArticle className='loader' key={`subarticle-${idx}`}>
                <Skeleton height={figureDimensions.height} width={figureDimensions.width} borderRadius={20} />
    
                <SubArticleHeader>
                  <Skeleton height={7} borderRadius={23} />
                  <Skeleton height={7} width="50%" borderRadius={23} />
                </SubArticleHeader>
              </SubArticle>
            );
          })}

        </SubArticles>
      </ItemH>

      <ItemH height="1px" background="#000" margin="15px 0 0 0" />
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

  const loadData = async() => {
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

  if (!blogsData && isLoading) return (
    <BlogLoader isMobile={isMobile}/>
  );

  // console.log('blogsData: ', blogsData);

  if (Array.isArray(blogsData) && blogsData.length > 0) {
    return (
      <>
        <ItemH margin="40px 0 0 0" gap="48px">
          <MainArticle onClick={() => onArticleClick(blogsData[0])} title={blogsData[0].title}>
            <ArticleBanner src={blogsData[0].thumbnail} />
    
            <H3 textTransform="normal" color="#09090B" size="24px" weight="500" spacing="-0.02em" lineHeight="142%" margin="24px 0 0 0">
              {blogsData[0].title}
            </H3>
    
            <ArticleText>
              {getDescription(blogsData[0].description)}
            </ArticleText>
          </MainArticle>
    
          <SubArticles>
            {getSubarticles(isMobile, blogsData)?.map((blogData, idx) => {
              return (
                <SubArticle key={idx} onClick={() => onArticleClick(blogData)} title={blogData.title}>
                  <SubArticleBanner src={blogData.thumbnail}/>
                  <SubArticleHeader>
                    {blogData.title}
                  </SubArticleHeader>
                </SubArticle>
              );
            })}
          </SubArticles>
        </ItemH>
    
        <ItemH height="1px" background="#000" margin="15px 0 0 0"/>
      </>
    );
  }



}

const MainArticle = styled(ItemV)`
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
    height: 284px;
    background: #D9D9D9;
    border-radius: 32px;
`;

const ArticleText = styled.div`
    width: 100%;
    color: #303C5E;
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

const SubArticles = styled(ItemV)`
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
    height: 108px;
    background: #D9D9D9;
    border-radius: 20px;

    @media ${device.tablet} {
        width: 118px;
        height: 108px;
    }
`;

const SubArticleHeader = styled.h4`
    font-weight: 500;
    font-size: 18px;
    line-height: 142%;
    color: #09090B;
    flex: 1;
    align-self: center;

    @media ${device.tablet} {
        font-size: 16px;
    }
`;


export default Blogs;