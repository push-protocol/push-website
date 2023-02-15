// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllBlogData } from '../api';
import styled from 'styled-components';
import { Anchor,B,Content, H2 , H3 , HeroHeader, Input ,ItemH, ItemV, Span } from 'components/SharedStyling';
import { device } from '../config/globals';
import useMediaQuery from '../hooks/useMediaQuery';
import PageWrapper from '../components/PageWrapper';
import pageMeta from 'config/pageMeta';
import HybridSection from 'components/HybridSection';
import Image from 'assets/bg-image.png'
import { BiSearch } from 'react-icons/bi';
import moment from "moment";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import { BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import useReadingTime from 'hooks/useReadingTime';
import SpinnerSVG from 'assets/Spinner.gif'


const BlogItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(device.tablet);
    const [isLoading, setIsLoading] = useState(false);
    const [blogsData, setBlogsData] = useState(null);
    const [allBlogs, setAllBlogs] = useState(null);
    const [blogsContent, setBlogsContent] = useState(null);

    const loadData = async() => {
        try {
          setIsLoading(true);
          const data = await getAllBlogData();
          setAllBlogs(data);
          for (let i = 0;i < data.length;i++) {
            let tag = data[i]?.title;
            // let finishedTag = tag.split('?source')[0];
            if(tag === id){
                setBlogsData(data[i]);
                let body = data[i]?.content.replace("\n","");
                setBlogsContent(body);
            //    setBlogsContent(JSON.stringify(data[i]?.content));
            }
          }
        } catch (e) {
          console.error('Blogs API data fetch error: ', e);
        } finally {
          setIsLoading(false);
        }
    }

    useEffect(() => {
        loadData();
      }, []);

    function filterComment(hypertext) {
        try {
            var newString = hypertext.replace(/<(?:.|\n)*?>/gm, '')
            return newString;
        } catch (e) {
          return '';
        }
      }

      const ShowMore = () => {
        navigate(`/blogs`);
      }

      const OpenURL = (link) => {
        window.open(link,'_blank')
      }

      const ArticleItem = ({ item }) => {
        return(<>
        {item?.map((blogData, idx) => {
            return (
            <MainArticle onClick={() => onArticleClick(blogData)} key={idx} title={blogData?.title}>
                <ArticleImage src={blogData?.thumbnail} alt={blogData?.title} />
        
                <ArticleRow> 
                <H3 textTransform="normal" color="#000000" size="24px" weight="700" spacing="-0.02em" lineHeight="142%" margin="24px 0 0 0" textAlign='left !important'>
                {blogData?.title}
                </H3>
        
                <ArticleTextB>
                {filterComment(blogData?.description)}
                </ArticleTextB>

                <ArticleContent marginTop='20px'>
                <Moment format='D MMMM, YYYY' style={{marginRight:'5px'}}>
                    {blogData?.pubDate}
                </Moment> &#183;
                <Div>
                    {useReadingTime(blogData?.description)} mins read
                </Div>
            </ArticleContent>
            </ArticleRow>
            </MainArticle>)
            })}
        </>)
      }

  return (
    <PageWrapper
            pageName={pageMeta.BLOGS.pageName}
            pageTitle={pageMeta.BLOGS.pageTitle}
            >
        <BlogsWrapper>

        <AnimationSection>
            <Content className="contentBox" flex="0">
                    <ArticleBanner src={blogsData?.thumbnail} alt={blogsData?.title} />
            </Content>
            </AnimationSection>

            <BlogsSection 
                id="story"
                data-bkg="light"
                className="lightBackground"
                curve="bottom">

                <Content className='contentBox'>

                {isLoading && (<ItemH>
                        <img src={SpinnerSVG} alt='' width={140} />
                </ItemH>)}

                <H3 textTransform="normal" color="#000000" size={isMobile ? "30px" : "40px"} weight="700" spacing="-0.02em" lineHeight="55.5px" margin="24px 0 20px 0">
                        {blogsData?.title}
                </H3>

                <ArticleContent>
                      <Moment format='D MMMM, YYYY' style={{marginRight:'5px'}}>
                          {blogsData?.pubDate}
                      </Moment> &#183;
                      <Div>
                          {blogsData?.description && useReadingTime(blogsData?.description)} mins read
                      </Div>
                  </ArticleContent>

                <BlogContent>
                    {blogsContent && parse(blogsContent)}
                </BlogContent>

                <ToggleSection>
                        {blogsData?.categories.map((item,i) => 
                        (<ToggleButton 
                            key={item}>
                            <Span>{item}</Span>
                        </ToggleButton>))}
                </ToggleSection>

                <AboutSection>
                    <AboutTitle>About Push Protocol</AboutTitle>

                    <Span 
                    textAlign="center" margin="20px 0 0 0" spacing="-0.03em" weight={"400"} color='#000'>
                    Push is the communication protocol of web3. Push protocol enables cross-chain notifications and messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and platform-agnostic fashion. The open communication layer allows any crypto wallet / frontend to tap into the network and get the communication across.
                    </Span>
                </AboutSection>

                <KPIBanner>
                <ItemV onClick={()=>OpenURL("https://twitter.com/pushprotocol")} style={{cursor:'pointer'}} gap="18px" className='kpiItem'>
                    <KPIFigure>
                        <BsTwitter size={32} />
                    </KPIFigure>
                    <KPIMetric>Twitter</KPIMetric>
                </ItemV>

                <ItemV onClick={()=>OpenURL("https://twitter.com/pushprotocol")} style={{cursor:'pointer'}} gap="18px" className='kpiItem'>
                     <KPIFigure>
                        <FaDiscord size={32} />
                    </KPIFigure>
                    <KPIMetric>Discord</KPIMetric>
                </ItemV>

                <ItemV onClick={()=>OpenURL("https://twitter.com/pushprotocol")} style={{cursor:'pointer'}} gap="18px" className='kpiItem'>
                    <KPIFigure>
                        <BsYoutube size={32} />
                    </KPIFigure>
                    <KPIMetric>YouTube</KPIMetric>
                </ItemV>

                
                <ItemV onClick={()=>OpenURL("https://twitter.com/pushprotocol")} style={{cursor:'pointer'}} gap="18px" className='kpiItem'>
                    <KPIFigure>
                        <BsLinkedin size={32} />
                    </KPIFigure>
                    <KPIMetric>Linkedin</KPIMetric>
                </ItemV>
            </KPIBanner>

            <BlogRow>
                        <ResponsiveH2
                        size={isMobile ? "16px" : "28px"}
                        weight="700"
                        spacing="-0.02em"
                        lineHeight="110%"
                        >
                        More from Push Protocol                               </ResponsiveH2>
                    

                        <Anchor
                          href="https://twitter.com/pushprotocol"
                          title="Developer Docs"
                          target="_blank"
                          bg="#DD44B9"
                          radius="16px"
                          padding="14px 32px"
                          size="18px"
                          weight="500"
                          spacing="-0.03em"
                          lineHeight="26px"
                          self="center"
                        >
                        <BsTwitter size={23} color='#fff' style={{marginRight: '10px'}} />
                          Follow
                        </Anchor>

                    </BlogRow>

                    <SubArticles>
                          <ArticleItem item={allBlogs?.slice(2, 6)} />
                    </SubArticles>

                <ShowMoreSection onClick={ShowMore}>
                        <FiChevronLeft size={23} />
                        <b>Read more articles from Push Protocol</b>
                    </ShowMoreSection>


                </Content>
            </BlogsSection>

        </BlogsWrapper>
    </PageWrapper>
  )
}

const ResponsiveSection = styled(HybridSection)`
  min-height: ${(props) => props.minHeight || '0px'};
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
`;

const AnimationSection = styled(ResponsiveSection)`
    padding-bottom: 50px;
    background: #121315;
    border-bottom-left-radius: 48px;
    border-bottom-right-radius: 48px;
    min-height: 60vh;
    padding: 80px 0px 20px 0px;
    & #hero .contentBox {
        row-gap: 18px;
      }
    @media ${device.laptop} {
        min-height: 50vh;
        padding: 80px 40px 20px 40px;
      }

      @media ${device.tablet} {
        min-height: 35vh;
      }

      @media ${device.mobileL} {
        min-height: 170px;
        padding: 80px 40px 0px 40px;
      }
`;

const BlogsWrapper = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lora !important;
  & #hero .contentBox {
    row-gap: 18px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const BlogsSection = styled(ResponsiveSection)`
 padding: 80px 160px 80px 160px;

  @media ${device.mobileL} {
    padding-top: 40px;
    padding-bottom: 32px;
  }
`;

const BlogContent = styled.div`
    font-family: Lora !important;
    font-weight: 400;
    font-size: 22px;
    line-height: 40px;
    color: #575D73;
    ul,p {
     font-family: Lora !important;
     color: #282A2D;
     font-weight: 400;
     font-size: 16px;
        a {
            color: #000000;
            cursor: pointer;
            font-family: Lora !important;
        }
    }

    blockquote {
        font-family: 'Strawford' !important;
        font-weight: 400;
        font-size: 24px;
        line-height: 38px;
        color: #575D73;

    }

    h1,h2,h3,h4 {
        font-family: 'Strawford' !important;
        font-weight: 600;
        font-size: 24px;
        line-height: 38px;
        color: #000000;
        a {
            color: #000000;
            cursor: pointer;
            font-family: Lora !important;
        }
    }
    a {
        color: #000000;
        cursor: pointer;
        font-family: Lora !important;
    }

    figure {
        margin: 0 auto;
        padding: 0;
        width: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        img {
            border-radius: 32px;
            @media ${device.laptop}{
                width: 100%;
                height: fit-content;
            }
        }
        &:nth-of-type(1) {
            display: none;
        }
        @media ${device.laptop}{
            width: 100%;
            height: fit-content;
        }
    }
`;

const ToggleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;

const AboutSection = styled.div`
    margin-top: 200px;
    span {
        font-family: 'Lora';
        font-weight: 300;
        font-size: 16px;
        line-height: 37px;
        color: #282A2D;
        letter-spacing: -0.002em;
    }
`;

const AboutTitle = styled.div`
    font-family: 'Strawford' !important;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: #000000;
    margin-bottom: 10px;
    letter-spacing: -0.02em;
`;

const ToggleButton = styled.div`
    border: 1px solid #BAC4D6;
    border-radius: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    left: 0;
    margin: 5px 5px;
    background: transparent;
    color: #000;
    span {
     font-size: 20px;
     font-weight: 500;
     border: none;
     text-transform: capitalize;
     color: #000;
    }
    b {
        font-weight: 500;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: -0.03em;  
        margin-left: 30px;
    }
`;

const KPIBanner = styled.div`
    background: linear-gradient(89.78deg, #FEE8FF 5.59%, #F9EDFF 90.26%);
    border-radius: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
    font-family: 'Strawford';
    font-style: normal;
    margin-top: 50px;

    & .kpiItem {
        display: flex;
        flex-direction: row;
        align-items: center !important;
    }

    @media ${device.tablet} {
        flex-direction: row;
        flex-wrap: wrap;

        width: 80%;

        padding: 24px;
        row-gap: 32px;
        column-gap: 8px;
        

        & .kpiItem {
            flex-direction: column;
            row-gap: 8px;

            // for 4 items
            flex: 0 0 48%;
            // align-items: flex-start;           

            // for 3 items
            // flex: 0 0 100%;
            // align-items: center;
        }
     }
`;

const KPIFigure = styled.div`
    height: fit-content;
    width: fit-content;
`;

const KPIMetric = styled(Span)`
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -0.03em;
    color: #1E1E1E;
    @media ${device.tablet} {
        font-size: 16px;
        font-weight: 400;
    }
`;

// const BlogRow = styled(ItemH)`
const BlogRow = styled.div`
  margin: 150px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 80px;
  }
`;

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const ArticleBanner = styled.img`
    width: 100%;
    background: #D9D9D9;
    border-radius: 32px;
    padding: 0;
    transform: translateY(42.5%)
    height: auto;
    margin: 20px 0px 0px 0px;
    position: absolute;
    z-index: 2;
    @media ${device.tablet} {
      border-radius: 14px;
    }

`;

const SubArticles = styled.div`
//     display: grid;
//     grid-template-columns: repeat(3, minmax(0, 1fr));
//     grid-gap: 33px;
//     margin-top: 10px;
//     @media ${device.tablet} {
//         grid-template-columns: repeat(1, minmax(0, 1fr));
//    }
`;

const MainArticle = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  &:not(:first-of-type) {
    margin-top: 50px;
  }

   &:hover {
    cursor: pointer;
   }

   @media ${device.tablet} {
    margin-top: 10px;
    flex-direction: column !important;
   }
`;

const ArticleTextB = styled.div`
    width: 100%;
    color: #575D73;
    font-size: 15px;
    font-weight: 300;
    line-height: 28px;
    font-family: Lora;
    margin-top: 10px;
    
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const ArticleContent = styled.div`
    width: 100%;
    color: #575D73;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    display: flex;
    flex-direction: row !important;
    margin-top: ${(props) => props.marginTop || '0px'};

`;

const Div = styled.div`
  margin-left: 5px;
`;

const ArticleImage = styled.img`
    width: 400px;
    background: #D9D9D9;
    border-radius: 32px;
    @media ${device.tablet} {
        width: 100%;
     }
`;

const ArticleRow = styled.div`
    margin-left: 70px;
    @media ${device.tablet} {
      margin-left: 0px;
      width: 100%;
   }
`

const ShowMoreSection = styled.div`
    border: 1px solid #BAC4D6;
    border-radius: 24px;
    margin: 70px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 23px;
    cursor: pointer;
    b {
        font-weight: 500;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: -0.03em;
        color: #1E1E1E;
       
        @media ${device.tablet} {
          font-weight: 500;
          font-size: 16px;
       }
    }
`;


export default BlogItem