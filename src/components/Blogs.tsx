// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { getBlogData } from '../api';

import Device from '../helpers/Device';
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
    return (
        <SkeletonTheme
            baseColor="#5294e0"
            highlightColor="#96c7ff"
            borderRadius="0.5rem"
            duration={4}
        >
            <Skeleton height={40} count={20}/>
        </SkeletonTheme>
    );
}

type BlogsProps = {
    count: number;
  };
  

function Blogs(props: BlogsProps) {
    const isMobile = useMediaQuery(Device.tablet);
    const [blogsData, setBlogsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const loadData = async() => {
        try {
            setIsLoading(true);
            const data = await getBlogData(props.count);
            console.log('GOT ------>>> blogs data: ', data);
            setBlogsData(data);
        } catch (e) {
            console.error('Blogs API data fetch error: ', e);
        } finally {
            setIsLoading(false);
        }       
    };


    useEffect(() => {
        loadData();
    }, []);

    if (!blogsData && isLoading) return (
        <div>loading...</div>
    );

    console.log('blogsData: ', blogsData);

    if (Array.isArray(blogsData) && blogsData.length > 0) {
        return (
            <>
                <ItemH margin="40px 0 0 0" gap="48px">
                    <MainArticle>
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
                                <SubArticle key={idx}>
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

   @media ${Device.tablet} {
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
    
    text-overflow:ellipsis;
    overflow:hidden;
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
    padding-bottom: px;
    border-bottom: 1px solid #000000;

    &:last-child {
        border-bottom: 0;
    }

    @media ${Device.tablet} {
        align-items: center;
    }
`;

const SubArticleBanner = styled.img`
    width: 207px;
    height: 108px;
    background: #D9D9D9;
    border-radius: 20px;

    @media ${Device.tablet} {
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

    @media ${Device.tablet} {
        font-size: 16px;
    }
`;


const LoaderScreen = styled(ItemH)`
   & .articleBanner {
    width: 544px;
    height: 284px;
    // background: #D9D9D9;
    border-radius: 32px;
   }
`;

export default Blogs;