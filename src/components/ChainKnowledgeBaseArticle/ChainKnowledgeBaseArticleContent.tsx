// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import { device } from '../../config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

import { H3, ItemH, ItemV, Span } from '../../css/SharedStyling';

const ChainKnowledgeBaseArticleContent = () => {
  const isMobile = useMediaQuery(device.mobileL);

  const TableOfContent = [
    'Introduction to Push Chain',
    'How Push Chain Works',
    'Key Features of Push Chain',
    'Use Cases of Push Chain',
    'Advantages of Push Chain',
    'Resources and Further Reading',
  ];

  return (
    <ChainKnowledgeBaseArticleWrapper>
      <ItemH gap='100px' flexWrap='nowrap'>
        <ItemV
          maxWidth='350px'
          alignItems='flex-start'
          alignSelf='flex-start'
          gap='32px'
        >
          <Span
            fontSize={isMobile ? '16px' : '20px'}
            fontWeight='400'
            fontFamily='N27'
            lineHeight='120%'
            color='#000'
          >{`Home > Knowledge Base`}</Span>
          <H3
            fontSize={isMobile ? '36px' : '54px'}
            fontWeight='500'
            fontFamily='N27'
            lineHeight='120%'
            letterSpacing='-1.04px'
            color='#000'
          >
            Why Push Chain?
          </H3>

          <ItemV
            background='#FFF'
            padding='32px'
            gap='32px'
            borderRadius='32px'
            alignItems='flex-start'
            margin='12px 0 0 0'
          >
            {TableOfContent.map((item) => (
              <Span
                fontSize={isMobile ? '16px' : '20px'}
                fontWeight='400'
                fontFamily='N27'
                lineHeight='140%'
                color='#757D8D'
              >
                {item}
              </Span>
            ))}
          </ItemV>
        </ItemV>

        <ItemV>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ultricies quam at justo imperdiet malesuada. Duis quis est sit amet
          nunc vehicula condimentum. Phasellus tristique sem non erat gravida,
          in facilisis nulla rhoncus. Integer viverra justo nec ante luctus
          tempus. Donec tincidunt, odio eget tincidunt feugiat, lorem ligula
          accumsan libero, vel fringilla ex velit a ligula. Nulla id risus nec
          ipsum malesuada luctus. Introduction to Push Chain Quisque auctor elit
          non urna mollis, in vestibulum urna suscipit. Proin consequat nisl at
          sapien scelerisque, non vehicula orci lobortis. Nulla fermentum, mi
          sed cursus tincidunt, magna tortor tincidunt purus, sit amet accumsan
          tortor enim id odio. Phasellus at nisl nisi. Aliquam erat volutpat.
          Duis dapibus blandit ligula, id volutpat ex facilisis nec. Fusce
          mollis turpis at justo pulvinar laoreet. Vivamus ultrices nulla quis
          nibh fermentum gravida. Mauris convallis tristique lectus ut laoreet.
          How Push Chain Works Nunc hendrerit, erat a feugiat cursus, ligula
          magna venenatis ex, sit amet vestibulum justo augue in massa. Cras
          mattis aliquet arcu nec facilisis. Proin lacinia, sapien vel tincidunt
          tristique, lectus nulla tincidunt arcu, ut pulvinar dolor justo ut
          magna. Nam in justo sit amet sapien vestibulum fermentum sit amet vel
          augue. Integer euismod consectetur ligula, ut suscipit ex luctus ut.
          Sed ac purus nec dolor ultrices consequat. Aenean non nulla sit amet
          lacus vulputate rhoncus. Sed vitae ligula non felis eleifend eleifend.
          Fusce posuere urna non purus auctor, nec feugiat urna elementum.
          Phasellus ut arcu vitae felis porttitor accumsan. Nunc hendrerit, erat
          a feugiat cursus, ligula magna venenatis ex, sit amet vestibulum justo
          augue in massa. Cras mattis aliquet arcu nec facilisis. Key Features
          of Push Chain Sub Header Nunc hendrerit, erat a feugiat cursus, ligula
          magna venenatis ex, sit amet vestibulum justo augue in massa. Cras
          mattis aliquet arcu nec facilisis. Proin lacinia, sapien vel tincidunt
          tristique, lectus nulla tincidunt arcu, ut pulvinar dolor justo ut
          magna. Source: Nunc hendrerit, erat a feugiat cursus, ligula magna
          venenatis
        </ItemV>
      </ItemH>
    </ChainKnowledgeBaseArticleWrapper>
  );
};

export default ChainKnowledgeBaseArticleContent;

const ChainKnowledgeBaseArticleWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 153px auto 0 auto;
  }
`;
