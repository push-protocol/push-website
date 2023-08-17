// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import useMediaQuery from 'hooks/useMediaQuery';
import Test from '../assets/brb/schedules/test.jpg';
import { ItemH, ItemV } from './SharedStyling';
import Agra from '../assets/brb/schedules/agra.svg';
import Left from '../assets/brb/others/left.svg';
import Right from '../assets/brb/others/right.svg';
import { SpanV2, ButtonV2 } from './SharedStylingV2';
import { ReactComponent as Arrow } from '../assets/brb/schedules/arrow.svg';
import MarqueeAnimation from './MarqueeAnimation';
import { device } from 'config/globals';

import moment from 'moment';


import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/core';
import { citiesList } from 'helpers/ScheduleLists';

const Schedules = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const [marqueeDirection, setMarqueeDirection] = useState('left');
  const isMobile = useMediaQuery(device.mobileL);

  const [direction, setDirection] = useState('right');

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  // const [First, Second, Third, Fourth] = scheduleList;
  // const desktopList = [
  //   [...First, ...Second],
  //   [...Third, ...Fourth],
  // ];
  // const mobileList = [[...First], [...Second], [...Third], [...Fourth]];
  // const renderList = isMobile ? mobileList : desktopList;

  // const [eventHasEnded, setEventHasEnded] = useState(false);

  const checkDateStatus = (fDate) => {
    const currentDate = new Date();
    const eventDate = new Date(fDate);
    const eventGap = eventDate - currentDate;
    console.log('Event gap', currentDate, eventDate, eventGap);

    if (eventGap < 0) {
      console.log('Event has ended');
      //This means that the event has ended 
      // setEventHasEnded(true);
      return true;
    } else {
      console.log('Event is liveeee');
      return false;
    }
  };

  useEffect(() => {

    citiesList.forEach(element => {
      console.log('Element', element);
      element.map((item) => {
        item.hasEnded = checkDateStatus(item.date);
        console.log('Item', item.place, 'event has ended ? ', item.hasEnded);

      });
    });

  }, []);




  return (
    <Container ref={sectionRef}>
      <ItemH>
        <Header>Schedule</Header>
      </ItemH>
      <SchedulesWrapper>
        <Splide
          options={{
            width: '100vw',
            type: 'slide',
            gap: '100px',
            perPage: 4,
            padding: { left: 10, right: 20 },
            perMove: 1,
            pagination: false,

          }}
          hasTrack={false} aria-label="...">

          <SplideTrack>
            {citiesList.map((item) => {
              return (
                <SplideContainer className='splide__slide is-visible' key={item}>
                  {item?.map((schedule, index) => {
                    return (
                      <ScheduleCardContainer
                        key={index}
                        background={schedule.hasEnded ? '#2A2A39' : schedule?.backgroundColor}
                        style={{ cursor: 'pointer' }}
                        onClick={() => openLink(schedule?.link)}
                      >
                        <ImageContainer>
                          <Image
                            src={schedule?.image}
                            height="28px"
                            width="28px"
                          />
                        </ImageContainer>
                        <ScheduleData>
                          <PlaceContainer>
                            <PlaceName>{schedule?.place}</PlaceName>
                            <Arrow
                            />
                          </PlaceContainer>
                          <DateContainer onClick={() => checkDateStatus(schedule?.date)}>{schedule?.date}</DateContainer>
                        </ScheduleData>
                      </ScheduleCardContainer>
                    );
                  })}

                </SplideContainer>
              );
            })}
          </SplideTrack>


          <div style={{ position: 'relative', margin: '40px 0 0 0' }}>
            <ActionContainer className="splide__arrows">
              <Button background={direction === 'left' ? '#E64DE9' : '#2A2A39'} onClick={() => setDirection('left')} className="splide__arrow splide__arrow--prev">
                <Icon src={Left} />
              </Button>
              <Button background={direction === 'right' ? '#E64DE9' : '#2A2A39'} onClick={() => setDirection('right')} className="splide__arrow splide__arrow--next">
                <Icon src={Right} />
              </Button>
            </ActionContainer>

          </div>
        </Splide>

      </SchedulesWrapper>

    </Container >
  );
};

const Container = styled(ItemV)`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction:column;
  margin-bottom: 144px;
  @media (max-width: 480px) {
    margin-left: 0px;
  }
`;

const SchedulesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
`;

const SplideContainer = styled.div`
  width: auto !important;
  margin: 0px !important;
`;


const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 344px;
`;

const Header = styled.span`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  margin: 0px 0px 37px;
  @media (max-width: 480px) {
    margin: 0px 0px 27px;
  }
`;

const ScheduleCardContainer = styled.div`
  width: 413px;
  height: 344px;
  background: ${(props) => props.background};
  display: flex;
  margin-top:20px;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 25px;
  margin-right: 21px;
  @media (max-width: 480px) {
    width: 100%;
    // width: 359px;
  }
`;

const ImageContainer = styled.div`
  width: 388px;
  height: 217px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 85%);
  border-radius: 0px 25px 0px;
  @media (max-width: 480px) {
    width: 334px;
  }
`;

const Image = styled.img`
  width: 388px;
  height: 217px;
  overflow: hidden;
  @media (max-width: 480px) {
    width: 334px;
  }
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const ScheduleData = styled(ItemV)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 22px 40px 25px 37px;
  box-sizing: border-box;
`;

const PlaceContainer = styled.div`
  width: 100%;
  max-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const PlaceName = styled(SpanV2)`
  font-family: Green Brooks;
  font-size: 42px;
  font-weight: 400;
  color: #b0ffc3;
`;

const DateContainer = styled(SpanV2)`
  height: 32px;
  color: #fff;
  font-family: Glancyr;
  font-size: 20px;
  font-weight: 550;
  letter-spacing: 0.6px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
`;

const Button = styled(ButtonV2)`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  height: 64px;
  width: 64px;
  // background:#E64DE9;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 13px;
  margin-top: 29px;
  margin-left: 12px;
  width: 1280px;
  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.mobileL} {
    width: 95%;
    margin-left: 12px;
    margin-top: 37px;
  }
`;

export default Schedules;
