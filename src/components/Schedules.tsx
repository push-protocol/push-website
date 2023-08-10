import React from 'react';

import styled from 'styled-components';
import Test from '../assets/brb/schedules/test.jpg';
import { ItemV, ItemH } from './SharedStyling';
import Agra from '../assets/brb/schedules/agra.svg';
import { SpanV2 } from './SharedStylingV2';
import { ReactComponent as Arrow } from '../assets/brb/schedules/arrow.svg';
import MarqueeAnimation from './MarqueeAnimation';

const Schedules = () => {
  const scheduleList = [
    [
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
    ],
    [
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
      },
    ],
  ];

  const [FirstRow, SecondRow] = scheduleList;

  return (
    <>
      <Header>Schedule</Header>
      <SchedulesWrapper>
        <MarqueeContainer>
          <MarqueeAnimation
            speed={100}
            gradientWidth={8}
            direction="left"
            // loop={0}
          >
            {FirstRow?.map((schedule, index) => {
              return (
                <ScheduleCardContainer key={index}>
                  <ImageContainer>
                    <Image
                      src={Agra}
                      height="28px"
                      width="28px"
                    />
                  </ImageContainer>
                  <ScheduleData>
                    <PlaceContainer>
                      <PlaceName>Delhi</PlaceName>
                      <Arrow />
                    </PlaceContainer>
                    <DateContainer>23-24 AUG 2023</DateContainer>
                  </ScheduleData>
                </ScheduleCardContainer>
              );
            })}
          </MarqueeAnimation>
        </MarqueeContainer>
        <MarqueeContainer>
          <MarqueeAnimation
            speed={100}
            gradientWidth={8}
            direction="left"
            // loop={0}
          >
            {SecondRow?.map((schedule, index) => {
              return (
                <ScheduleCardContainer key={index}>
                  <ImageContainer>
                    <Image
                      src={Agra}
                      height="28px"
                      width="28px"
                    />
                  </ImageContainer>
                  <ScheduleData>
                    <PlaceContainer>
                      <PlaceName>Delhi</PlaceName>
                      <Arrow />
                    </PlaceContainer>
                    <DateContainer>23-24 AUG 2023</DateContainer>
                  </ScheduleData>
                </ScheduleCardContainer>
              );
            })}
          </MarqueeAnimation>
        </MarqueeContainer>
      </SchedulesWrapper>
    </>
  );
};

const SchedulesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
`;

const MarqueeContainer = styled.div`
  position: relative;
  width:100vw;
  height:344px;
`;

const Header = styled.span`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  margin: 0px 0px 60px;
  @media (max-width: 480px) {
    margin: 0px 0px 49px;
  }
`;

const ScheduleCardContainer = styled.div`
  width: 413px;
  height: 344px;
  background: #7a3da9;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 25px;
  margin-right: 21px;
`;

const ImageContainer = styled.div`
  width: 388px;
  height: 217px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 85%);
  border-radius: 0px 25px 0px;
`;

const Image = styled.img`
  width: 388px;
  height: 217px;
  overflow: hidden;
`;

const ScheduleData = styled(ItemV)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  box-sizing: border-box;
`;

const PlaceContainer = styled.div`
  width: 87%;
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
  color: #fff;
  font-family: Glancyr;
  font-size: 20px;
  font-weight: 550;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

export default Schedules;
