// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

import { device } from '../../config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

import { H3, ItemH, ItemV, Span } from '../../css/SharedStyling';
import Link from '@docusaurus/Link';

const ChainKnowledgeBaseArticleContent = ({ item }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const { content } = item;

  const extractTOC = (markdownContent, headingLevels = [1, 2, 3]) => {
    const toc = [];

    const processor = unified()
      .use(remarkParse) // Parse Markdown
      .use(remarkRehype) // Convert to HTML AST
      .use(rehypeSlug) // Add slug IDs to headings
      .use(rehypeStringify); // Convert back to HTML string (optional)

    // Process the Markdown content through the pipeline
    const tree = processor.runSync(processor.parse(markdownContent));

    visit(tree, 'element', (node) => {
      if (
        node.tagName &&
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName) &&
        headingLevels.includes(parseInt(node.tagName[1], 10))
      ) {
        const id = node.properties?.id || '';

        // Extract the text content from the heading node
        const text = node.children
          .map((child) => {
            if (child.type === 'text') return child.value; // Direct text node
            if (child.children) {
              // Nested children (e.g., emphasis or links)
              return child.children
                .map((nestedChild) => nestedChild.value || '')
                .join('');
            }
            return '';
          })
          .join('');

        toc.push({ level: parseInt(node.tagName[1], 10), text, id });
      }
    });

    return toc;
  };

  const toc = extractTOC(content);

  return (
    <ChainKnowledgeBaseArticleWrapper>
      <ItemH flexDirection={isTablet && 'column'} gap='100px' flexWrap='nowrap'>
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
          >
            <Breadcrumb to={'/chain/knowledge'}>Home</Breadcrumb>
            {`  > Knowledge Base`}
          </Span>
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

          {!isTablet && (
            <ItemV
              background='#FFF'
              padding='32px'
              gap='32px'
              borderRadius='32px'
              alignItems='flex-start'
              margin='12px 0 0 0'
            >
              {toc.map((item, index) => (
                <ListItem key={index} href={`#${item.id}`}>
                  {item.text}
                </ListItem>
              ))}
            </ItemV>
          )}
        </ItemV>

        <MarkdownSection alignItems='flex-start' alignSelf='flex-start'>
          <Markdown
            remarkPlugins={[remarkGfm]} // Enable GitHub Flavored Markdown
            rehypePlugins={[rehypeSlug, rehypeRaw]} // Allow raw HTML rendering
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

const ListItem = styled.a`
  color: #757d8d;
  font-family: N27;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;

  &:hover {
    color: #cf59e2;
  }
`;

const Breadcrumb = styled(Link)`
  color: #000;

  &:hover {
    color: #cf59e2;
  }
`;
