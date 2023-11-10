import React from 'react'
import { useHistory } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// External Components
import styled from 'styled-components';

// Internal Configs
import { device } from '@site/src/config/globals';

const MobileBlogHorizontalScroll = (props) => {
  const { metadata, items, sidebar } = props;
  const history = useHistory();


  const BACKEND_API = 'https://push.org';

  const onArticleClick = (clickedBlog) => {
    if (clickedBlog) {
      history.push(clickedBlog?.content?.metadata?.permalink);
    }
  };

  return (
    <div>    
    {/* {isSwiper && ( */}
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
          {items?.slice(0,3)?.map((item, i) => (
            <SwiperSlide
              key={i}
            >
              <CarouselContainer
              onClick={() => onArticleClick(item)}
              >
                <CarouselImage
                  src={`${BACKEND_API}${item?.content?.assets?.image}`}
                  alt={item?.content?.frontMatter?.title}
                />
                <CarouselTitle>{item?.content?.frontMatter?.title}</CarouselTitle>
                <CarouselReadTime>{Math.round(item?.content?.metadata.readingTime)} min read</CarouselReadTime>
              </CarouselContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      {/* )} */}
      </div>
  )
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 0px;
  margin-bottom: 27px;
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
  margin-bottom: 12px;
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

export default MobileBlogHorizontalScroll