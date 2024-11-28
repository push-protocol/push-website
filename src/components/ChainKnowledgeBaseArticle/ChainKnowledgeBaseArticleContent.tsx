// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { device } from '../../config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

import { H3, ItemH, ItemV, Span } from '../../css/SharedStyling';

const ChainKnowledgeBaseArticleContent = ({ item }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const { content } = item;

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
      <ItemH flexDirection={isMobile && 'column'} gap='100px' flexWrap='nowrap'>
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

        <MarkdownSection alignItems='flex-start' alignSelf='flex-start'>
          <Markdown
            remarkPlugins={[remarkGfm]} // Enable GitHub Flavored Markdown
            rehypePlugins={[rehypeRaw]} // Allow raw HTML rendering
          >
            {content}
          </Markdown>
        </MarkdownSection>
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

const MarkdownSection = styled(ItemV)`
  // styles for images
  img {
    border-radius: 32px;
  }
  p {
    img {
      border-radius: 32px;
    }
  }

  // styles for list
  ul,
  ol {
    li {
      list-style: inherit !important;
    }
  }
`;
