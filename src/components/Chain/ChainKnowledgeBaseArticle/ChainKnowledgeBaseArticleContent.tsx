/* eslint-disable @docusaurus/no-html-links, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
//
import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { extractTOC } from '../utils/ExtractTableOfContent';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';

import Link from '@docusaurus/Link';
import { H1, ItemH, ItemV, Span } from '../../../css/SharedStyling';
import ChannelKnowledgeBaseComponentItem from '../ChainKnowledgeBase/ChannelKnowledgeBaseComponentItem';
import { useSiteBaseUrl } from '../../../hooks/useSiteBaseUrl';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const ChainKnowledgeBaseArticleContent = ({ item }) => {
  const [showFullMobileTOC, setShowFullMobileTOC] = React.useState(false);
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const baseUrl = useSiteBaseUrl();

  if (!item || !item.content) {
    return <p>Loading...</p>; // or some fallback UI
  }

  const toc = extractTOC(item?.content);

  const cleanMarkdown = (text: string): string => {
    return text
      .split('\n')
      .map((line: string) => {
        if (line.trim() !== '---') {
          return line.replace(/^\s+/gm, '');
        }
        return line;
      })
      .join('\n')
      .trim();
  };

  function resolveImageUrls(md: string): string {
    return md.replace(
      /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
      (_match, alt, src) => {
        return `![${alt}](${baseUrl}${src})`;
      }
    );
  }

  return (
    <ChainKnowledgeBaseArticleWrapper>
      <ItemH
        flexDirection={isTablet ? 'column' : 'row'}
        gap={isTablet ? '32px' : '100px'}
        flexWrap='nowrap'
      >
        <ItemH
          flexDirection={isTablet && 'column'}
          alignItems='flex-start'
          gap='32px'
        >
          {/* Left Section: TOC and Title */}
          <ItemV
            maxWidth={isTablet ? '100%' : '300px'}
            minWidth={isTablet ? '100%' : '300px'}
            alignItems='flex-start'
            alignSelf='flex-start'
            flexShrink={0}
          >
            <H1
              fontSize={isMobile ? '16px' : '20px'}
              fontWeight='400'
              fontFamily='N27'
              lineHeight='120%'
              color='#000'
            >
              <Breadcrumb to={'/chain/knowledge'}>Knowledge Base</Breadcrumb>
            </H1>
            <H1
              fontSize={isMobile ? '36px' : '54px'}
              fontWeight='500'
              fontFamily='N27'
              lineHeight='120%'
              letterSpacing='-1.04px'
              color='#000'
            >
              {item?.title}
            </H1>

            {isTablet &&
              toc.length > 0 &&
              item.content.length > 0 &&
              item.content[0].type === 'text' && (
                <MobileTOCWrapper>
                  <ul>
                    {(showFullMobileTOC ? toc : toc.slice(0, 2)).map(
                      (item, index) => {
                        const highestLevel = Math.min(
                          ...toc.map((t) => t.level)
                        );
                        return (
                          <ListItem
                            key={index}
                            href={`#${item.id}`}
                            level={item.level}
                            highestLevel={highestLevel}
                          >
                            {item.text}
                          </ListItem>
                        );
                      }
                    )}

                    {/* Toggle Icon */}
                    {toc.length > 2 && (
                      <ToggleIcon
                        onClick={() => setShowFullMobileTOC(!showFullMobileTOC)}
                      >
                        {showFullMobileTOC ? (
                          <BsChevronUp />
                        ) : (
                          <BsChevronDown />
                        )}
                      </ToggleIcon>
                    )}
                  </ul>
                </MobileTOCWrapper>
              )}
            {!isTablet && toc.length > 0 && (
              <DesktopTOC
                background='#FFF'
                padding='32px'
                borderRadius='32px'
                alignItems='flex-start'
                margin='12px 0 0 0'
              >
                <ul>
                  {toc?.map((item, index) => {
                    const highestLevel = Math.min(...toc.map((t) => t.level));
                    return (
                      <ListItem
                        key={index}
                        href={`#${item.id}`}
                        level={item.level}
                        highestLevel={highestLevel}
                      >
                        {item.text}
                      </ListItem>
                    );
                  })}
                </ul>
              </DesktopTOC>
            )}
          </ItemV>
        </ItemH>

        <div>
          {/* First Text Item (Markdown) */}
          {item.content.length > 0 && item.content[0].type === 'text' && (
            <TextItem>
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug, rehypeRaw, rehypeSanitize]}
                components={{
                  a: ({ node, ...props }) => (
                    <a {...props} target='_blank' rel='noopener noreferrer'>
                      {props.children}
                    </a>
                  ),
                }}
              >
                {resolveImageUrls(cleanMarkdown(item?.content[0].value))}
              </Markdown>
            </TextItem>
          )}

          {/* Render remaining content */}
          {item.content.slice(1).map((contentItem: any, index: number) => {
            if (contentItem.type === 'text') {
              return (
                <TextItem key={index}>
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug, rehypeRaw, rehypeSanitize]}
                    components={{
                      a: ({ node, ...props }) => (
                        <a {...props} target='_blank' rel='noopener noreferrer'>
                          {props.children}
                        </a>
                      ),
                    }}
                  >
                    {resolveImageUrls(cleanMarkdown(contentItem.value))}
                  </Markdown>
                </TextItem>
              );
            }

            if (contentItem.type === 'list') {
              return (
                <ChainKnowledgeGridWrapper key={index}>
                  <ChainKnowledgeGrid>
                    {contentItem?.items.map((item: any, index: number) => (
                      <ChannelKnowledgeBaseComponentItem
                        item={item}
                        index={index}
                        key={index}
                      />
                    ))}
                  </ChainKnowledgeGrid>
                </ChainKnowledgeGridWrapper>
              );
            }

            return null;
          })}
        </div>
      </ItemH>
    </ChainKnowledgeBaseArticleWrapper>
  );
};

export default ChainKnowledgeBaseArticleContent;

const ChainKnowledgeBaseArticleWrapper = styled.div`
  margin: 213px auto 0 auto;
  width: 100%;
  position: relative;
  @media ${device.mobileL} {
    margin: 153px auto 0 auto;
  }
`;

const Breadcrumb = styled(Link)`
  color: #000;

  &:hover {
    color: #cf59e2;
  }
`;

const ChainKnowledgeGridWrapper = styled.div`
  width: 100%;
  margin: 28px 0px;

  @media ${device.tablet} {
    width: 100%;
    margin-left: 0;
    padding: 0;
  }
`;

const ChainKnowledgeGrid = styled.div`
  display: grid;
  gap: 24px;
  width: 100%;
  justify-content: center;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const TextItem = styled.div`
  // max-width: calc(100% - 400px);
  margin: 12px 0 0 auto;
  width: inherit;
  color: #000;

  blockquote {
    border-left: 6px solid #d548ec;
    background: #010209;
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    margin: 10px 0;
  }

  ol li {
    list-style-type: decimal;
  }

  ul li {
    list-style-type: disc;
  }

  img[alt='Easter Egg'] {
    width: 30px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
  }

  p {
    font-size: larger;
  }

  p img,
  img {
    border-radius: 32px;
  }

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const ListItem = styled.li`
  display: block;
  color: #757d8d;
  font-family: N27;
  font-size: ${({ level }) =>
    level === 1 ? '20px' : level === 2 ? '18px' : '16px'};
  margin-left: ${({ level, highestLevel }) =>
    level === highestLevel ? '0' : `${(level - highestLevel) * 15}px`};
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.4px;

  margin-top: 12px;

  &:hover {
    color: #cf59e2;
  }
`;
<<<<<<< HEAD

const MobileTOCWrapper = styled.div`
  margin-top: 16px;
  padding: 20px;
  border-radius: 24px;
  background: #f8f8f8;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

const DesktopTOC = styled(ItemV)`
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

const ToggleIcon = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 12px;
  cursor: pointer;
  color: #757d8d;
  font-weight: bold;
`;
=======
>>>>>>> 1c6a2e2144b (chore: remove more unused)
