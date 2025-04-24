// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

import styled from 'styled-components';
import { H2, H3, ItemH, ItemV, Span } from '@site/src/css/SharedStyling';

import {
  BsCalendar,
  BsChevronDown,
  BsChevronUp,
  BsClock,
} from 'react-icons/bs';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import { device } from '@site/src/config/globals';
import { bootcampCurriculum } from '@site/src/config/BootcampCurriculum';

const BootcampCurriculum = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const CurriculumSession = ({ session }) => {
    return (
      <ItemV gap='24px' justifyContent='flex-start'>
        <H3
          color='#FFF'
          fontSize='20px'
          fontFamily='Glancyr, sans-serif'
          margin='0 auto 0 0'
          fontWeight='400'
          lineHeight='32px'
        >
          <Span color='#E64DE9' fontSize='20px'>
            Session {session?.session}:{' '}
          </Span>{' '}
          {session?.title}{' '}
        </H3>

        <ItemH gap='24px' justifyContent='flex-start' alignItems='center'>
          <ItemH gap='8px' flex='0' alignItems='center'>
            <BsClock color='#94979F' size={14} />

            <H3
              color='#94979F'
              fontSize='16px'
              fontFamily='Glancyr, sans-serif'
              fontWeight='400'
              lineHeight='24px'
            >
              {session?.time}
            </H3>
          </ItemH>

          <ItemH gap='8px' flex='0' alignItems='center'>
            <BsCalendar color='#94979F' size={14} />

            <H3
              color='#94979F'
              fontSize='16px'
              fontFamily='Glancyr, sans-serif'
              fontWeight='400'
              lineHeight='24px'
            >
              {session?.date}
            </H3>
          </ItemH>
        </ItemH>
      </ItemV>
    );
  };

  return (
    <CurriculumCard>
      {bootcampCurriculum?.map((item, index) => (
        <CurriculumSection key={index}>
          <CurriculumParent onClick={() => toggleAccordion(index)}>
            <H2
              color='#FFF'
              fontSize='24px'
              fontFamily='Glancyr, sans-serif'
              fontWeight='400'
              lineHeight='140%'
            >
              {item.title}
            </H2>
            <div>
              {activeIndex === index ? (
                <BsChevronDown color='#FFF' size={22} />
              ) : (
                <BsChevronUp color='#FFF' size={22} />
              )}
            </div>
          </CurriculumParent>

          {activeIndex === index && (
            <ItemH
              flexDirection={isMobile && 'column'}
              padding='0 0 24px 0'
              gap='32px'
            >
              {item.session?.map((session, i) => (
                <CurriculumSession session={session} index={i} />
              ))}
            </ItemH>
          )}
        </CurriculumSection>
      ))}
    </CurriculumCard>
  );
};

const CurriculumSection = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #2a2a39;
  }
`;

const CurriculumParent = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CurriculumCard = styled.div`
  margin: 64px 0 0 0;
  border: 1px solid #2a2a39;
  padding: 0px 32px;
  border-radius: 24px;
`;

export default BootcampCurriculum;
