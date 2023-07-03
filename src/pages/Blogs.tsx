// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { getAllBlogData, getAllTags, searchBlogData, searchBlogDataByTags } from '../api';
import styled from 'styled-components';
import { Anchor, B, Content, H2, H3, HeroHeader, Input, ItemH, ItemV, Span } from 'components/SharedStyling';
import { device } from '../config/globals';
import useMediaQuery from '../hooks/useMediaQuery';
import PageWrapper from '../components/PageWrapper';
import pageMeta from 'config/pageMeta';
import HybridSection from 'components/HybridSection';
import Image from 'assets/bg-image.png';
import { BiSearch } from 'react-icons/bi';
import moment from 'moment';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import SpinnerSVG from 'assets/Spinner.gif';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import useReadingTime from 'hooks/useReadingTime';
import { BodyContent } from './Home';
import SignupInput from 'components/SignupInput';
import { FiChevronDown } from 'react-icons/fi';
import BlogHorizontalScroll from 'components/BlogHorizontalScroll';
import { Waypoint } from 'react-waypoint';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BACKEND_API = 'https://blog.push.org';
const PAGE_SIZE = 5;

function BlogLoader(props: BlogLoaderProps) {
  const figureDimensions = props.isMobile
    ? {
        width: 118,
        height: 108,
      }
    : {
        width: 251,
        height: 141,
      };

  return (
    <SubArticles marginTop="34px">
      {[1, 2, 3].map((idx) => {
        return (
          <SubArticle key={`subarticle-${idx}`}>
            <Skeleton
              height={figureDimensions.height}
              width="100%"
              borderRadius={20}
              style={{ marginBottom: '13px' }}
            />

            <Skeleton
              height={12}
              width="100%"
              borderRadius={20}
              style={{ marginBottom: '5px' }}
            />
            <Skeleton
              height={12}
              width="75%"
              borderRadius={20}
              style={{ marginBottom: '13px' }}
            />
            <Skeleton
              height={10}
              width="50%"
              borderRadius={20}
            />
          </SubArticle>
        );
      })}
    </SubArticles>
  );
}

const Blogs = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const isSwiper = useMediaQuery(`(max-width: 1199px)`);
  const [blogsData, setBlogsData] = useState(null);
  const [allBlogsData, setAllBlogsData] = useState(null);
  const [tagsList, setTagsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = React.useState('');
  const [searchItems, setSearchItems] = React.useState(null);
  const [errorPage, setErrorPage] = React.useState(false);
  const [page, setPage] = useState(1);
  const [active, setActive] = useState('All');
  const [isFetchingDone, setIsFetchingDone] = useState(false);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllBlogData(page, PAGE_SIZE);
      setBlogsData(data?.data);
    } catch (e) {
      console.error('Blogs API data fetch error: ', e);
      setErrorPage(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loadAllData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllBlogData(1, 5);
      setAllBlogsData(data?.data);
    } catch (e) {
      console.error('Blogs API data fetch error: ', e);
      setErrorPage(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loadTagsData = async () => {
    try {
      // setIsLoading(true);
      const data = await getAllTags(1, 10);
      setTagsList(data?.data);
    } catch (e) {
      console.error('Blogs API data fetch error: ', e);
      setErrorPage(true);
    } finally {
      // setIsLoading(false);
    }
  };

  function filterComment(hypertext) {
    try {
      var newString = hypertext.replace(/<(?:.|\n)*?>/gm, '');
      return newString;
    } catch (e) {
      return '';
    }
  }

  useEffect(() => {
    loadData();
    loadAllData();
    loadTagsData();
  }, []);

  const onArticleClick = (clickedBlog) => {
    if (clickedBlog) {
      navigate(`/blogs/${clickedBlog?.id}`);
    }
  };

  const channelSearch = async (e) => {
    let query = e.target.value;
    setSearch(e.target.value);
    if (e.target.value?.length == 0) return;

    try {
      setIsLoading(true);
      // const data = blogsData?.filter((x) => x?.attributes?.title.toLowerCase().includes(query));
      const data = await searchBlogData(query);
      setTimeout(() => {
        setSearchItems(data?.data);
      }, 500);
    } catch (error) {
      console.error('Channels API data fetch error: ', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const ShowMore = async () => {
    //page
    let newPage = page + 1;
    setPage(newPage);

    try {
      setIsLoading(true);
      const data = await getAllBlogData(newPage, PAGE_SIZE);
      let newData = data?.data;
      setTimeout(() => {
        setBlogsData((current) => [...current, ...newData]);
      }, 500);
      if (newData?.length === 0) {
        setIsFetchingDone(true);
      }
    } catch (error) {
      console.error('Channels API data fetch error: ', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const handleSort = async (item) => {
    setIsFetchingDone(false);
    setPage(1);
    if (item !== 'All') {
      setActive(item?.attributes?.name);
      try {
        setIsLoading(true);
        const data = await searchBlogDataByTags(item?.attributes?.name);
        setBlogsData(data?.data);
      } catch (e) {
        console.error('Blogs API data fetch error: ', e);
        setErrorPage(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setActive(item);
        setIsLoading(true);
        const data = await getAllBlogData(1, PAGE_SIZE);
        setBlogsData(data?.data);
      } catch (e) {
        console.error('Blogs API data fetch error: ', e);
        setErrorPage(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const ArticleItem = ({ item, main }) => {
    return (
      <>
        {item?.map((blogData, idx) => {
          return (
            <MainArticle
              onClick={() => onArticleClick(blogData)}
              key={idx}
              title={blogData?.attributes?.title}
            >
              <ArticleBanner
                src={`${BACKEND_API}${blogData?.attributes?.image?.data?.attributes?.url}`}
                alt={blogData?.attributes?.title}
              />

              <ArticleDiv main={main}>
                <H3
                  textTransform="normal"
                  color="#000000"
                  size={isMobile ? '18px' : '24px'}
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="142%"
                  margin="24px 0 0 0"
                  className="clamp"
                >
                  {blogData?.attributes?.title}
                </H3>
              </ArticleDiv>

              <ArticleText>{filterComment(blogData?.attributes?.body)}</ArticleText>

              <ArticleContent>
                <Moment
                  format="D MMMM, YYYY"
                  style={{ marginRight: '5px' }}
                >
                  {blogData?.attributes?.date}
                </Moment>{' '}
                &#183;
                <Div>{useReadingTime(blogData?.attributes?.body)} min read</Div>
              </ArticleContent>
            </MainArticle>
          );
        })}
      </>
    );
  };

  const SearchArticleItem = ({ item }) => {
    return (
      <>
        {item?.map((blogData, idx) => {
          return (
            <SearchMainArticle
              onClick={() => onArticleClick(blogData)}
              key={idx}
              title={blogData?.title}
            >
              <ArticleImage
                src={`${BACKEND_API}${blogData?.attributes?.image?.data?.attributes?.url}`}
                alt={blogData?.attributes?.title}
                loading="lazy"
              />

              <ArticleRow>
                <H3
                  textTransform="normal"
                  color="#000000"
                  size={isMobile ? '16px' : '24px'}
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="142%"
                  margin="24px 0 0 0"
                  className="clamp"
                  textAlign="left !important"
                >
                  {blogData?.attributes?.title}
                </H3>

                {!isMobile && <ArticleTextB>{filterComment(blogData?.attributes?.body)}</ArticleTextB>}

                <ArticleContent>
                  {!isMobile &&
                    blogData?.attributes?.tags?.data?.map((item, i) => (
                      <ToggleButton style={{ marginRight: '15px' }}>{item?.attributes?.name}</ToggleButton>
                    ))}
                  <Moment
                    format="D MMMM, YYYY"
                    style={{ marginRight: '5px' }}
                  >
                    {blogData?.attributes?.date}
                  </Moment>{' '}
                  &#183;
                  <Div>{useReadingTime(blogData?.attributes?.body)} min read</Div>
                </ArticleContent>
              </ArticleRow>
            </SearchMainArticle>
          );
        })}
      </>
    );
  };

  if (errorPage) {
    return (
      <PageWrapper
        pageName={pageMeta.BLOGS.pageName}
        pageTitle={pageMeta.BLOGS.pageTitle}
      >
        <BlogsWrapper>
          <BlogsSection
            id="story"
            data-bkg="light"
            className="lightBackground"
            curve="bottom"
          >
            <EmptyCenteredContainerInfo>
              <DisplayNotice>No Blogs Found.</DisplayNotice>
            </EmptyCenteredContainerInfo>
          </BlogsSection>
        </BlogsWrapper>
      </PageWrapper>
    );
  }

  if ((Array.isArray(blogsData) && blogsData?.length > 0) || (search && searchItems) || errorPage !== true) {
    return (
      <PageWrapper
        pageName={pageMeta.BLOGS.pageName}
        pageTitle={pageMeta.BLOGS.pageTitle}
      >
        <BlogsWrapper>
          <SpaceSection
            curve="bottom" 
            padding={isMobile ? "80px 0px 20px 0px" : "30px 0px 20px 0px"}
            // padding="80px 0px 20px 0px"
            data-bkg="dark"
          >
            <SpaceContent
              className="contentBox"
            >
               {!isSwiper && blogsData && (<BlogHorizontalScroll items={allBlogsData?.slice(0,3)} />)} 
              

              {isSwiper && (
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {allBlogsData?.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      onClick={() => onArticleClick(item)}
                    >
                      <CarouselContainer>
                        <CarouselImage
                          src={`${BACKEND_API}${item?.attributes?.image?.data?.attributes?.url}`}
                          alt={item?.title}
                        />
                        <CarouselTitle>{item?.attributes.title}</CarouselTitle>
                        <CarouselReadTime>{useReadingTime(item?.attributes?.body)} min read</CarouselReadTime>
                      </CarouselContainer>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </SpaceContent>
          </SpaceSection>

          <BlogsSection
            id="story"
            data-bkg="light"
            className="lightBackground"
            curve="bottom"
          >
            <Content className="contentBox">
              <BlogRow>
                <ItemV justifyContent="flex-start">
                  <ResponsiveH2Text
                    size="40px"
                    weight="500"
                    spacing="-1.2px !important"
                    lineHeight="110%"
                  >
                    Push Protocol Insights
                  </ResponsiveH2Text>
                </ItemV>
                <ItemV
                  maxWidth="350px"
                  justifyContent="flex-end"
                >
                  <Wrapper>
                    <BiSearch
                      size="23"
                      color="#121315"
                    />
                    <input
                      type="text"
                      placeholder="Search articles"
                      value={search}
                      onChange={channelSearch}
                    />
                  </Wrapper>
                </ItemV>
              </BlogRow>

              {!search && tagsList && (
                <ToggleSection>
                  <ToggleButton
                    active={active === 'All' ? true : false}
                    onClick={() => handleSort('All')}
                  >
                    <Span>All</Span>
                  </ToggleButton>
                  {tagsList?.map((item, i) => (
                    <ToggleButton
                      key={item?.attributes.name}
                      active={active === item?.attributes?.name ? true : false}
                      onClick={() => handleSort(item)}
                    >
                      <Span>{item?.attributes.name}</Span>
                    </ToggleButton>
                  ))}
                </ToggleSection>
              )}

              {/* first two sections */}
              {!search && (
                <MainSection>
                  {' '}
                  <ArticleItem
                    item={blogsData?.slice(0, 2)}
                    main={true}
                  />
                </MainSection>
              )}

              {/* other grid section */}
              {!search && (
                <SubArticles>
                  <ArticleItem
                    item={blogsData?.slice(2, blogsData.length)}
                    main={false}
                  />
                  {!isLoading && search.length == 0 && !isFetchingDone && <Waypoint onEnter={() => ShowMore()} />}
                  <Waypoint onLeave={()=>setIsFetchingDone(false)}/>
                </SubArticles>
              )}

              {/* search grid section */}
              {search && (
                <SearchArticles>
                  <SearchArticleItem item={searchItems} />
                </SearchArticles>
              )}

              {!isLoading && blogsData && blogsData?.length == 0 && !search && (
                <CenteredContainerInfo>
                  <DisplayNotice>No blogs found.</DisplayNotice>
                </CenteredContainerInfo>
              )}

              {search && !isLoading && searchItems?.length === 0 && (
                <CenteredContainerInfo>
                  <DisplayNotice>No articles match your query.</DisplayNotice>
                </CenteredContainerInfo>
              )}
              {isLoading && <BlogLoader isMobile={isMobile} />}
            </Content>
          </BlogsSection>
        </BlogsWrapper>
      </PageWrapper>
    );
  }
};

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResponsiveH2Text = styled.div`
  color: #121315;
  font-size: 40px;
  font-family: Strawford;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -1.2px;
  @media ${device.mobileL} {
    font-size: 32px;
    letter-spacing: -0.96px;
    margin: 0px 0px 20px;
  }
`;

const EmptyCenteredContainerInfo = styled.div`
  padding: 20px;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DisplayNotice = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  background: rgb(244, 245, 250);
`;

const ResponsiveSection = styled(HybridSection)`
  min-height: ${(props) => props.minHeight || '0px'};
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  &[data-bkg='dark'] {
    & h1 {
      color: #fff;
    }

    & h3 {
      color: #fff;
    }

    & span {
      color: #fff;
    }

    & p {
      color: #fff;
    }
  }

  &[data-bkg='light'] {
    & h1 {
      color: #000;
    }

    & h3 {
      color: #000;
    }

    & span {
      color: #000;
    }

    & p {
      color: #000;
    }
  }
`;

const ToggleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const ToggleButton = styled.div`
  border: ${(props) => (props.active ? '1px solid transparent' : '1px solid #BAC4D6')};
  border-radius: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px 32px;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  left: 0;
  margin: 5px 5px;
  background: ${(props) => (props.active ? '#D53893' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  &:hover {
    background: ${(props) => (props.active ? '#D53893' : '#FFDBF0')};
    border: 1px solid transparent;
    cursor: pointer;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    border: none;
    color: ${(props) => (props.active ? '#fff !important' : '#000 !important')};

    @media ${device.tablet} {
      font-size: 18px;
    }
  }

  b {
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.03em;
    margin-left: 30px;
  }
`;

const SpaceSection = styled(ResponsiveSection)`
  @media ${device.tablet} {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
`;

const BlogsWrapper = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  & #hero .contentBox {
    row-gap: 18px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const MainArticle = styled(ItemV)`
  width: 100%;
  // margin-top: 50px;
  justify-content: left !important;
  align-items: flex-start !important;
  align-self: flex-start !important;

  &:hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    margin-top: 10px;
  }
`;

const ShowMoreSection = styled.div`
  border: 1px solid #bac4d6;
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
    color: #1e1e1e;
  }
`;

export const SpaceContent = styled.div`
	// padding: ${(props) => props.padding || '40px 0px'};

  &.contentBox {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    padding: ${(props) => props.padding || '10px 0px'};

    &.contentBox {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    padding: ${(props) => props.padding || '10px 0px'};

    &.contentBox {
      width: 100%;
    }
  }
`;

const ArticleBanner = styled.img`
  width: 100%;
  background: #d9d9d9;
  border-radius: 32px;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
  @media ${device.tablet} {
    border-radius: 21px;
  }
`;

const ArticleText = styled.div`
  width: 100%;
  color: #575d73;
  font-size: 16px;
  line-height: 27.5px;
  font-family: Lora;
  margin-top: 5px;

  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media ${device.mobileL} {
    font-size: 12px;
  }
`;

const ArticleSlide = styled.div`
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  border-radius: 32px;
`;

const ArticleTextB = styled.div`
  width: 100%;
  color: #575d73;
  font-size: 18px;
  line-height: 28px;
  font-family: Lora;
  margin-top: 10px;

  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ArticleContent = styled.div`
  width: 100%;
  color: #575d73;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  margin-top: 15px;
  letter-spacing: -0.35px;

  @media ${device.mobileL} {
    font-size: 12px;
  }
`;

const SubArticles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 33px;
  margin-top: ${(props) => props.marginTop || '92px'};
  align-items: flex-start;
  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 0px;
  }
`;
const SearchArticles = styled.div``;

const SearchMainArticle = styled.div`
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

const ArticleImage = styled.img`
  min-width: 321px;
  max-width: 321px;
  aspect-ratio: 16/9;
  object-fit: cover;
  background: #d9d9d9;
  border-radius: 32px;
  @media ${device.tablet} {
    min-width: 100%;
    max-width: 100%;
    border-radius: 21px;
  }
`;

const ArticleRow = styled.div`
  margin-left: 44px;
  .clamp {
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  @media ${device.tablet} {
    margin-left: 0px;
    width: 100%;
  }
`;

const ArticleDiv = styled.div`
  .clamp {
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: ${(props) => (props.main ? '2' : '3')};
    -webkit-box-orient: vertical;
  }
`;

const BlogsSection = styled(ResponsiveSection)`
 padding: 0px 160px 80px 160px;
 align-items: flex-start !important:
  @media ${device.tablet} {
    padding-bottom: 32px;
  }
`;

const MainSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 32px;
  width: 100%;
  gap: 33px;
  margin-top: 91px;
  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 0px;
  }
`;

const BlogRow = styled(ItemH)`
  margin: 100px 0 50px 0;
  @media ${device.tablet} {
    margin-top: 80px;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const Div = styled.div`
  margin-left: 5px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  column-gap: 6px;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  padding: 16px;
  justify-content: space-between;
  @media ${device.tablet} {
    column-gap: 3px;
  }
  & input[type='text'] {
    all: unset;
    box-sizing: border-box;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: normal;
    letter-spacing: -0.03em;
    color: #121315;
    width: 100%;
    padding: 0px;
    &::placeholder {
      color: #121315;
      opacity: 1;
      font-size: 20px;
    }
    @media ${device.tablet} {
      min-width: fit-content;
    }
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 0px;
  @media (max-width: 1200px) {
    padding: 100px 20px 30px 20px;
  }

  @media ${device.tablet} {
    width: 100%;
    padding: 50px 20px 0px 20px;
    box-sizing: border-box;
  }
`;

const CarouselImage = styled.img`
  display: block;
  // object-fit: cover;
  // height: 320px;
  margin: 0 auto 20px auto;
  border-radius: 62px;

  @media (max-width: 1200px) {
    width: 80%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  @media ${device.tablet} {
    border-radius: 15px;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`;

const CarouselTitle = styled.div`
  width: 80%;
  margin: 0 auto 0px auto;
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
  text-align: left;
  @media ${device.tablet} {
    font-weight: 700;
    font-size: 21.5385px;
    width: 100%;
  }
`;

const CarouselReadTime = styled.div`
  width: 80%;
  margin: 0 auto 0px auto;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #575d73;
  text-align: left;
  @media ${device.tablet} {
    font-weight: 500;
    font-size: 10px;
    line-height: 9px;
    width: 100%;
  }
`;

const SignupBox = styled(ItemH)`
  background: rgba(214, 177, 242, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 32px;
  padding: 72px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media ${device.tablet} {
    padding: 24px;
    flex-direction: column;
  }
`;

const SubArticle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 24px;

  &:hover {
    cursor: pointer;
  }

  &.loader {
    padding-bottom: 20px;
  }

  @media ${device.tablet} {
    align-items: center;
  }
`;

export default Blogs;
