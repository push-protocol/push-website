// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllBlogData, searchBlogData } from '../api';
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

const BACKEND_API = 'http://localhost:1337';
const PAGE_SIZE = 5;

const Blogs = () => {
  const isMobile = useMediaQuery(device.tablet);
  const [blogsData, setBlogsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = React.useState('');
  const [searchItems, setSearchItems] = React.useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllBlogData(page, PAGE_SIZE);
      setBlogsData(data?.data);
    } catch (e) {
      console.error('Blogs API data fetch error: ', e);
    } finally {
      setIsLoading(false);
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
    } catch (error) {
      console.error('Channels API data fetch error: ', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const ArticleItem = ({ item }) => {
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

              <H3
                textTransform="normal"
                color="#000000"
                size="24px"
                weight="700"
                spacing="-0.02em"
                lineHeight="142%"
                margin="24px 0 0 0"
              >
                {blogData?.attributes?.title}
              </H3>

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
                  size="24px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="142%"
                  margin="24px 0 0 0"
                  textAlign="left !important"
                >
                  {blogData?.attributes?.title}
                </H3>

                <ArticleTextB>{filterComment(blogData?.attributes?.body)}</ArticleTextB>

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
              </ArticleRow>
            </SearchMainArticle>
          );
        })}
      </>
    );
  };

  if ((Array.isArray(blogsData) && blogsData?.length > 0) || (search && searchItems)) {
    return (
      <PageWrapper
        pageName={pageMeta.BLOGS.pageName}
        pageTitle={pageMeta.BLOGS.pageTitle}
      >
        <BlogsWrapper>
          <ResponsiveSection
            curve="bottom"
            padding="80px 0px 20px 0px"
            data-bkg="dark"
          >
            <Content
              className="contentBox"
              flex="0"
            >
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
                {blogsData?.map((item, i) => (
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
            </Content>
          </ResponsiveSection>

          <BlogsSection
            id="story"
            data-bkg="light"
            className="lightBackground"
            curve="bottom"
          >
            <Content className="contentBox">
              <BlogRow>
                <ItemV justifyContent="flex-start">
                  <ResponsiveH2
                    size="40px"
                    weight="500"
                    spacing="-0.02em"
                    lineHeight="110%"
                  >
                    Push Protocol Insights
                  </ResponsiveH2>
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

              {/* first two sections */}
              <MainSection>{!search && <ArticleItem item={blogsData?.slice(0, 2)} />}</MainSection>

              {/* other grid section */}
              <SubArticles>{!search && <ArticleItem item={blogsData?.slice(2, blogsData.length)} />}</SubArticles>

              {/* search grid section */}
              <SearchArticles>{search && <SearchArticleItem item={searchItems} />}</SearchArticles>

              {isLoading && (
                <ItemH>
                  <img
                    src={SpinnerSVG}
                    alt=""
                    width={140}
                  />
                </ItemH>
              )}

              {search && !isLoading && searchItems?.length === 0 && (
                <CenteredContainerInfo>
                  <DisplayNotice>No articles match your query.</DisplayNotice>
                </CenteredContainerInfo>
              )}

              {!isLoading && search.length === 0 && (
                <ShowMoreSection onClick={ShowMore}>
                  <FiChevronDown size={23} />
                  <b>Show More</b>
                </ShowMoreSection>
              )}
            </Content>

            <BodyContent className="contentBox">
              <SignupBox margin="0 0 0px 0">
                <ItemV
                  justifyContent="flex-start"
                  gap="12px"
                >
                  <ResponsiveH2
                    color="#09090B"
                    size="40px"
                    weight="700"
                    spacing="-0.02em"
                    lineHeight="110%"
                    margin="0"
                  >
                    Never Miss an Update
                  </ResponsiveH2>
                  <Span
                    color="#303C5E"
                    size="20px"
                    weight="400"
                    spacing="-0.03em"
                    lineHeight="138.5%"
                  >
                    Sign up and stay up to date with ecosystem announcements, giveaways and more.
                  </Span>
                </ItemV>

                <ItemV>
                  <SignupInput />
                </ItemV>
              </SignupBox>
            </BodyContent>
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

const AnimationSection = styled(ResponsiveSection)`
  width: 100%;
  background: #121315;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  padding-bottom: 0px;
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
  margin-top: 50px;
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

const ArticleBanner = styled.img`
  width: 100%;
  background: #d9d9d9;
  border-radius: 32px;
`;

const ArticleText = styled.div`
  width: 100%;
  color: #575d73;
  font-size: 15px;
  font-weight: 300;
  line-height: 28px;
  font-family: Lora;
  margin-top: 5px;

  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  color: #575d73;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  display: flex;
  flex-direction: row !important;
  margin-top: 15px;
`;

const SubArticles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 33px;
  margin-top: 50px;
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
  min-width: 400px;
  max-width: 400px;
  background: #d9d9d9;
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
  margin: 10px 0px;
  width: 100%;
  gap: 33px;
  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 0px;
  }
`;

const BlogRow = styled(ItemH)`
  margin: 100px 0 20px 0;
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
`;

const CarouselImage = styled.img`
  display: block;
  object-fit: cover;
  width: 80%;
  margin: 0 auto 20px auto;
  border-radius: 62px;
  @media ${device.tablet} {
    border-radius: 15px;
    width: 100%;
  }
`;

const CarouselTitle = styled.div`
  width: 80%;
  margin: 0 auto 20px auto;
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

export default Blogs;
