// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

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

const Schedules = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const [marqueeDirection, setMarqueeDirection] = useState('left');
  const isMobile = useMediaQuery(device.mobileL);

  const scheduleList = [
    [
      {
        image: Agra,
        place: 'Bangalore',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#194395',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#7A3DA9',
      },
      {
        image: Test,
        place: 'Agra',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#16837C',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#DA786A',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#299EC2',
      },
    ],
    [
      {
        image: Test,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#3F53AA',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#194395',
      },
      {
        image: Test,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#7A3DA9',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#194395',
      },
    ],
    [
      {
        image: Test,
        place: 'Pune',
        date: '23-24 AUG 2024',
        link: 'https://push.org',
        backgroundColor: '#16837C',
      },
      {
        image: Agra,
        place: 'Indore',
        date: '23-24 AUG 2024',
        link: 'push.org',
        backgroundColor: '#DA786A',
      },
      {
        image: Test,
        place: 'Jaipur',
        date: '23-24 AUG 2024',
        link: 'push.org',
        backgroundColor: '#299EC2',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
        backgroundColor: '#3F53AA',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
        backgroundColor: '#194395',
      },
    ],
    [
      {
        image: Test,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
        backgroundColor: '#7A3DA9',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
        backgroundColor: '#299EC2',
      },
      {
        image: Test,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
        backgroundColor: '#DA786A',
      },
      {
        image: Agra,
        place: 'Delhi',
        date: '23-24 AUG 2024',
        link: 'push.org',
        backgroundColor: '#299EC2',
      },
    ],
  ];

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  const [First, Second, Third, Fourth] = scheduleList;
  const desktopList = [
    [...First, ...Second],
    [...Third, ...Fourth],
  ];
  const mobileList = [[...First], [...Second], [...Third], [...Fourth]];
  const renderList = isMobile ? mobileList : desktopList;

  return (
    <Container ref={sectionRef}>
      <ItemH>
        <Header>Schedule</Header>
      </ItemH>
      <SchedulesWrapper>
        {renderList?.map((item, index) => {
          return (
            <MarqueeContainer key={index}>
              <MarqueeAnimation
                speed={100}
                gradientWidth={8}
                direction={marqueeDirection}
                pause={true}
              >
                {item?.map((schedule, index) => {
                  return (
                    <ScheduleCardContainer
                      key={index}
                      background={schedule?.backgroundColor}
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
                            style={{ cursor: 'pointer' }}
                            onClick={() => openLink(schedule?.link)}
                          />
                        </PlaceContainer>
                        <DateContainer>{schedule?.date}</DateContainer>
                      </ScheduleData>
                    </ScheduleCardContainer>
                  );
                })}
              </MarqueeAnimation>
            </MarqueeContainer>
          );
        })}

      </SchedulesWrapper>
      <ActionContainer>
        <Button
          background={marqueeDirection === 'left' ? '#2A2A39' : '#E64DE9'}
          onClick={() => setMarqueeDirection('left')}
        >
          <Icon src={Left} />
        </Button>
        <Button
          background={marqueeDirection === 'right' ? '#2A2A39' : '#E64DE9'}
          onClick={() => setMarqueeDirection('right')}
        >
          <Icon src={Right} />
        </Button>
      </ActionContainer>
    </Container>
  );
};

const Container = styled(ItemV)`
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 50px;
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
  margin: 0px 0px 60px;
  @media (max-width: 480px) {
    margin: 0px 0px 49px;
  }
`;

const ScheduleCardContainer = styled.div`
  width: 413px;
  height: 344px;
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 25px;
  margin-right: 21px;
  @media (max-width: 480px) {
    width: 359px;
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
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 13px;
  margin: 29px auto 0 auto;
  width: 1280px;
  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.mobileL} {
    width: 95%;
  }
`;

export default Schedules;
