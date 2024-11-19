// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import styled from 'styled-components';
import { SplideSlide } from '@splidejs/react-splide';

import NewMarqueeAnimation from '@site/src/components/NewMarqueeAnimation';
import { H2, ItemH, ItemV } from '@site/src/css/SharedStyling';
import { ChainMarqueeList } from '../../config/ChainMarqueeList';

import StarIcon from '@site/static/assets/website/chain/StarIcon.svg';
import UnionIcon from '@site/static/assets/website/chain/Union.svg';

const ChainMarqueeSection: FC = () => {
  return (
    <MarqueeItem padding='0' overflow='hidden' flex='1' margin='174px 0 80px 0'>
      <GridMarquee
        speed={1}
        gradientWidth={8}
        gap={18}
        bg='#F19AFF'
        direction='ltr'
        width='100vw'
        height='125px'
      >
        {ChainMarqueeList.map((item, index) => {
          // Alternate icons based on index
          const Icon = index % 2 === 0 ? StarIcon : UnionIcon;
          return (
            <SplideSlide>
              <NotificationMarquee>
                <GridItem>
                  <H2 fontFamily='N27'>{item.title}</H2>
                  <Icon width={34} height={34} />
                </GridItem>
              </NotificationMarquee>
            </SplideSlide>
          );
        })}
      </GridMarquee>
    </MarqueeItem>
  );
};

export default ChainMarqueeSection;

const MarqueeItem = styled(ItemV)`
  width: 100%;
  //   transform: rotate(-5.346deg);
  //   transform-origin: center;
`;

const NotificationMarquee = styled(ItemH)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
`;

const GridItem = styled(ItemH)`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: center;
  flex: 1;
  height: 125px;

  h2 {
    color: #000;
    font-family: N27;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.84px;
  }

  &:hover {
    cursor: pointer;
    h2 {
      color: #fff;
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

const GridMarquee = styled(NewMarqueeAnimation)`
  width: 100%;
`;
