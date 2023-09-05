/* eslint-disable */
import React, { Fragment, useLayoutEffect,useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components'
import { device } from '../config/globals';
import { Anchor, B, H2, ItemV, Span} from './SharedStyling';
import PushNotifications from '../assets/figures/pushnotifications.webp';
import PushChat from '../assets/figures/pushchat.webp';
import Pushdao from '../assets/figures/pushdao.webp';
import ImageHolder from './ImageHolder';
import { FiArrowUpRight } from 'react-icons/fi';
import useMediaQuery from 'hooks/useMediaQuery';
import FadeInAnimation from './FadeInAnimation';
import useReadingTime from 'hooks/useReadingTime';
import { useNavigate } from 'react-router-dom';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BACKEND_API = 'https://blog.push.org';

const SlideElement = ({
  linkContent,
  image,
  alt,
  title,
  sendRef,
  addMargin,
  id,
  paddingBottom,
  paddingMobile,
  content
}) => {
  const isMobile = useMediaQuery(device.tablet);
 const navigate = useNavigate();

  const OpenURL = (id) => {
        navigate(`/blogs/${id}`);
  };

  return(
    <GrowPushCard onClick={() => OpenURL(id)} ref={sendRef} margin={addMargin && "0 0 0 2%"} paddingBottom ={ paddingBottom} className="panel">
    
    <Div padding = {paddingMobile}>
        <MemberImage
              className={title === "Push Chat" ? 'secondFigureSvg' : 'figureSvg'}
              src={image}
              srcSet={image}
              alt= {alt}
              title = {title}
              width="100%"
            />
    </Div>

    <GrowPushCardDetails>
      <SpanTitle
        size={isMobile ? "20px" : "35px"}
        weight={isMobile ? "400" : "700"}
        lineHeight="121%"
        self="flex-start !important"
      >
         {title}
      </SpanTitle>

      <DivItem>
      {useReadingTime(content)} min read
      </DivItem>

    </GrowPushCardDetails>

   
  </GrowPushCard>
  )
}

    const BlogHorizontalScroll = ({ items }) => {
    // console.log(items)

    // if(!items) return <></>;

    const panels = useRef([]);
    const panelsContainer = useRef();
    const isMobile = useMediaQuery(device.tablet)


    const createPanelsRefs = (panel, index) => {
      panels.current[index] = panel;
    };

    // useEffect(() => {
    //     const totalPanels = panels.current.length;
    //     const mm = gsap.matchMedia();

    //     mm.add('(min-width: 1199px)', () => {
    //         gsap.to(panels.current, {
    //             xPercent: -79 * (totalPanels - 1),
    //             ease: 'none',
    //             scrollTrigger: {
    //               trigger: panelsContainer.current,
    //               pin: true,
    //               scrub: true,
    //               // base vertical scrolling on how wide the container is so it feels more natural.
    //               end: () => '+=' + panelsContainer.current.offsetWidth
    //             },
    //             "(max-width: 1023px)": function() { },
    //             "all": function() { }
    //           });
    //       });
    //       return () => mm.revert();
    //   }, []);
  
    useLayoutEffect(() => {
     
      const totalPanels = panels.current.length;

      ScrollTrigger.matchMedia({
        "(min-width: 1199px)": function() {
          gsap.to(panels?.current, {
            xPercent: -79 * (totalPanels - 1),
            // xPercent: -100 * (totalPanels - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: panelsContainer?.current,
              pin: true,
              scrub: true,
              // snap: 1 / (totalPanels - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: () => '+=' + panelsContainer?.current?.offsetWidth
            }
          });
         },
        "(max-width: 1023px)": function() { },
        "all": function() { }
      });
  
    
    }, []);

  return (
    <div>

          <SliderContainer
              sizing='calc(100vh-0)'
              ref={panelsContainer}
            >
              <SlideElement sendRef={(e) => createPanelsRefs(e,0)} 
                linkContent = "Build Push Notifications"
                image = {`${BACKEND_API}${items?.[0]?.attributes?.image?.data?.attributes?.url}`}
                alt={'Illustration showing Push Notifications'}
                title={items?.[0]?.attributes?.title}
                addMargin={false}
                link="https://docs.push.org/developers/developer-guides/integrating-on-frontend/integrating-notifications"
                content={items?.[0]?.attributes?.body}
                id={items?.[0]?.id}
              />

              <SlideElement sendRef={(e) => createPanelsRefs(e,1)} 
                linkContent = "Build with Push Chat"
                image = {`${BACKEND_API}${items?.[1]?.attributes?.image?.data?.attributes?.url}`}
                alt={'Illustration showing Push Chat'}
                title={items?.[1]?.attributes?.title}
                addMargin={true}
                link="https://docs.push.org/developers/developer-guides/integrating-push-chat"
                paddingMobile={"30px 0px"}
                content={items?.[1]?.attributes?.body}
                id={items?.[1]?.id}
              />

              <SlideElement sendRef={(e) => createPanelsRefs(e,2)} 
                linkContent = "Explore Push DAO"
                image = {`${BACKEND_API}${items?.[2]?.attributes?.image?.data?.attributes?.url}`}
                alt={'Illustration showing Push DAO'}
                title={items?.[2]?.attributes?.title}
                addMargin={true}
                link="https://gov.push.org/"
                paddingBottom={"34px"}
                paddingMobile={"30px 0px"}
                content={items?.[2]?.attributes?.body}
                id={items?.[2]?.id}
              />
              
            </SliderContainer>
            </div>
  )
}

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const SliderContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: calc(calc(100vh - 750px) / 2) 0px;
  flex-wrap: nowrap;
  margin: auto 0;
  
  @media (max-width: 1200px){
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0px 0px;
    margin-top: 20px;
  }

  @media (min-width: 1200px) and (max-height: 758px) {
     margin-top: 150px;
  }


  `;

 const MemberImage = styled(ImageHolder)`
    margin: 0 auto;
    border-radius: 62px;
    background: #d9d9d9;
`;

const GrowPushCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  padding: 5px;
  min-width: 52.5em;
  max-width: 52.5em;
  flex: 1;

  margin: ${(props) => props.margin || ''};
  border-radius: 48px;

  & .figureSvg {
    width: 52.5em;
    // height: 37.5em;
    object-fit: cover;
    aspect-ratio: 16/9;
    display: block;
    

  
    @media ${device.tablet} {
      width: 100%;
      height: 100%;
    }

//     @media ${device.mobileL} {
//       width: 100%;
//       height: 100%;
//       display: block;
//     }

//     @media (min-width: 1025px) and (max-width: 1250px) {
//       width: 100%;
//        height: 100%;
//     }

//     @media (min-width: 1440px) and (max-width: 1800px) {
//       width: 100%;
//       height: 100%;
//    }

//    @media (min-width: 1200px) and (max-height: 758px) {
//        width: 100%;
//        height: 100%;
//       }
  }

//   & .secondFigureSvg {
//     width: 575px;
//     height: 100%;
//     display: block;

  
//     @media ${device.tablet} {
//       width: 400px;
//       height: 100%;
//     }

//     @media ${device.mobileL} {
//       width: 100%;
//       height: 100%;
//       display: block;
//     }

//     @media (min-width: 1025px) and (max-width: 1250px) {
//        width: 400px;
//        height: 100%;
//     }

//     @media (min-width: 1440px) and (max-width: 1800px) {
//       width: 575px;
//       height: 100%;
//    }

//    @media (min-width: 1200px) and (max-height: 758px) {
//        width: 400px;
//        height: 100%;
//       }
//   }

  @media ${device.tablet} {
   padding: 30px 30px 0px 30px;
   padding-bottom: ${(props) => props.paddingBottom ? "30px" : "0px"};
   border-radius: 36px;
  }

  @media (max-width: 1200px){
    margin: ${(props) => '10px 0px' || ''};
    padding: 30px 30px 0px 30px;
    padding-bottom: ${(props) => props.paddingBottom ? "30px" : "0px"};
  }

`;

const DivItem = styled.div`
  margin-top: -30px;
  padding-top:0px;
  color: #575D73;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;

const GrowPushCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-self: flex-start !important;

  @media ${device.laptop}{
   margin-bottom: 10px;
  }
`;

const SpanTitle = styled(Span)`
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  min-height: 2.5em;
`;

const Div = styled.div`
    background: #ccc;
    padding: 0px 0px;
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    border-radius: 62px;
    box-sizing: border-box;
`;

export default BlogHorizontalScroll