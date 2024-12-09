// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
import styled from 'styled-components';

import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { useSiteBaseUrl } from '../../../utils/useSiteBaseUrl';

import { H3, ItemH, ItemV, Span } from '../../../css/SharedStyling';

const ChannelKnowledgeBaseComponentItem: FC = ({ item, index }) => {
  // for navigation
  const isMobile = useMediaQuery(device.mobileL);
  const baseURL = useSiteBaseUrl() || '';

  const openLink = (item) => {
    if (item?.url) {
      window.open(item?.url, '_blank');
    } else {
      // Open internal route in a new tab
      const internalUrl = `${baseURL}/chain/knowledge/${item?.slug}`;
      window.open(internalUrl, '_blank');
    }
  };

  return (
    <Card
      key={index}
      background='#FFF'
      padding='24px'
      alignItems='flex-start'
      borderRadius='32px'
      justifyContent='space-between'
      onClick={() => openLink(item)}
    >
      <div
        style={{
          height: 'auto',
          width: '100%',
          backgroundColor: '#D9D9D9',
          borderRadius: '24px',
          aspectRatio: '16/9',
        }}
      ></div>
      <H3
        margin='24px 0 0 0'
        fontSize={isMobile ? '26px' : '32px'}
        fontWeight='500'
        fontFamily='N27'
        lineHeight={isMobile ? '100%' : '140%'}
        letterSpacing='-0.64px'
      >
        {item.title}
      </H3>
      <ItemH margin='0 0 auto 0' alignItems='flex-start' alignSelf='flex-start'>
        <Span
          margin='8px 0 0 0'
          fontSize={isMobile ? '16px' : '18px'}
          fontWeight='400'
          fontFamily='N27'
          lineHeight={isMobile ? '100%' : '140%'}
          letterSpacing='-0.64px'
          color='#757D8D'
        >
          {item.subtitle}
        </Span>
      </ItemH>

      <ItemH
        alignItems='center'
        justifyContent='space-between'
        margin='84px 0 0 0'
        cursor='pointer'
        flex='0'
      >
        <Span
          fontSize={isMobile ? '16px' : '18px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight={isMobile ? '100%' : '140%'}
          letterSpacing='-0.64px'
          color='#D548EC'
        >
          Learn More
        </Span>
        <TbArrowUpRight color='#D548EC' size={24} />
      </ItemH>
    </Card>
  );
};

const Card = styled(ItemV)`
  cursor: pointer;
`;

export default ChannelKnowledgeBaseComponentItem;
