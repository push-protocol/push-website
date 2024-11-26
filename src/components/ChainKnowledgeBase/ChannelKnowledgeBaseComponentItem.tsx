// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

import { H3, ItemH, ItemV, Span } from '../../css/SharedStyling';

const ChannelKnowledgeBaseComponentItem: FC = ({ item, index }) => {
  const isMobile = useMediaQuery(device.mobileL);

  return (
    <ItemV
      key={index}
      background='#FFF'
      padding='24px'
      alignItems='flex-start'
      borderRadius='24px'
      justifyContent='space-between'
    >
      <div
        style={{
          height: '128px',
          width: '212px',
          backgroundColor: '#D9D9D9',
          borderRadius: '24px',
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
          {item.linkText}
        </Span>
        <TbArrowUpRight color='#D548EC' size={24} />
      </ItemH>
    </ItemV>
  );
};

export default ChannelKnowledgeBaseComponentItem;
