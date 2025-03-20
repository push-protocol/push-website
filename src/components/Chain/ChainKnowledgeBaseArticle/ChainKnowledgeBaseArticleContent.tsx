/* eslint-disable @docusaurus/no-html-links */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
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
import { H3, ItemH, ItemV, Span } from '../../../css/SharedStyling';
import ChannelKnowledgeBaseComponentItem from '../ChainKnowledgeBase/ChannelKnowledgeBaseComponentItem';
import ChainKnowledgeBaseArticle from './ChainKnowledgeBaseArticle';

const ChainKnowledgeBaseArticleContent = ({ item }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  if (!item || !item.content) {
    return <p>Loading...</p>; // or some fallback UI
  }

  const toc = extractTOC(item?.content);
  console.log(toc, 'toc');

  const cleanMarkdown = (text) => {
    return text
      .replace(/\n{2,}/g, '\n') // Replace multiple newlines with a single one
      .replace(/^\s+/gm, '') // Remove leading spaces from each line
      .trim(); // Trim any extra spaces
  };

  return (
    <ChainKnowledgeBaseArticleWrapper>
      <ItemH
        flexDirection={isTablet ? 'column' : 'row'}
        gap='100px'
        flexWrap='nowrap'
      >
        <ItemV flex='1' alignItems='flex-start' width='100%'>
          <ItemH
            flexDirection={isTablet && 'column'}
            alignItems='flex-start'
            gap='32px'
          >
            {/* Left Section: TOC and Title */}
            <ItemV
              maxWidth='350px'
              alignItems='flex-start'
              alignSelf='flex-start'
              flexShrink={0}
            >
              <Span
                fontSize={isMobile ? '16px' : '20px'}
                fontWeight='400'
                fontFamily='N27'
                lineHeight='120%'
                color='#000'
              >
                <Breadcrumb to={'/chain/knowledge'}>Knowledge Base</Breadcrumb>
              </Span>
              <H3
                fontSize={isMobile ? '36px' : '54px'}
                fontWeight='500'
                fontFamily='N27'
                lineHeight='120%'
                letterSpacing='-1.04px'
                color='#000'
              >
                {item?.title}
              </H3>

              {!isTablet && toc.length > 0 && (
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
                  {cleanMarkdown(item?.content[0].value)}
                </Markdown>
              </TextItem>
            )}
          </ItemH>

          {/* Render remaining content */}
          {item.content.slice(1).map((contentItem, index) => {
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
                    {cleanMarkdown(contentItem.value)}
                  </Markdown>
                </TextItem>
              );
            }

            if (contentItem.type === 'list') {
              return (
                <ChainKnowledgeGridWrapper key={index}>
                  <ChainKnowledgeGrid>
                    {contentItem?.items.map((item, index) => (
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
        </ItemV>
      </ItemH>
    </ChainKnowledgeBaseArticleWrapper>
  );
};

export default ChainKnowledgeBaseArticleContent;

/* ===== Styled Components ===== */

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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;
  justify-content: center;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const TextItem = styled.div`
  max-width: calc(100% - 400px);
  margin: 20px 0 20px auto;
  width: inherit;

  p {
    font-size: larger;
  }

  @media ${device.tablet} {
    max-width: 100%;
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

// /* eslint-disable @docusaurus/no-html-links */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-nocheck
// import React from 'react';
// import styled from 'styled-components';
// import Markdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import remarkGfm from 'remark-gfm';
// import rehypeSlug from 'rehype-slug';
// import rehypeSanitize from 'rehype-sanitize';

// import { device } from '../../../config/globals';
// import useMediaQuery from '../../../hooks/useMediaQuery';
// import { extractTOC } from '../utils/ExtractTableOfContent';

// import { H3, ItemH, ItemV, Span } from '../../../css/SharedStyling';
// import Link from '@docusaurus/Link';
// import ChainKnowledgeBaseArticle from './ChainKnowledgeBaseArticle';
// import ChannelKnowledgeBaseComponentItem from '../ChainKnowledgeBase/ChannelKnowledgeBaseComponentItem';

// const ChainKnowledgeBaseArticleContent = ({ item }) => {
//   const isMobile = useMediaQuery(device.mobileL);
//   const isTablet = useMediaQuery(device.tablet);

//   if (!item || !item.content) {
//     return <p>Loading...</p>; // or some fallback UI
//   }

//   const { content } = item;

//   // const toc = extractTOC(content);
//   console.log(content, 'content-content');

//   return (
//     <ChainKnowledgeBaseArticleWrapper>
//       <ItemH flexDirection={isTablet && 'column'} gap='100px' flexWrap='nowrap'>
//         <ItemV
//           maxWidth='350px'
//           alignItems='flex-start'
//           alignSelf='flex-start'
//           gap='32px'
//         >
//           <Span
//             fontSize={isMobile ? '16px' : '20px'}
//             fontWeight='400'
//             fontFamily='N27'
//             lineHeight='120%'
//             color='#000'
//           >
//             <Breadcrumb to={'/chain/knowledge'}>Home</Breadcrumb>
//             {`  > Knowledge Base`}
//           </Span>
//           <H3
//             fontSize={isMobile ? '36px' : '54px'}
//             fontWeight='500'
//             fontFamily='N27'
//             lineHeight='120%'
//             letterSpacing='-1.04px'
//             color='#000'
//           >
//             {item?.title}
//           </H3>

//           {/* {!isTablet && (
//             <ItemV
//               background='#FFF'
//               padding='32px'
//               gap='32px'
//               borderRadius='32px'
//               alignItems='flex-start'
//               margin='12px 0 0 0'
//             >
//               {toc.map((item, index) => (
//                 <ListItem key={index} href={`#${item.id}`}>
//                   {item.text}
//                 </ListItem>
//               ))}
//             </ItemV>
//           )} */}
//         </ItemV>

//         <MarkdownSection alignItems='flex-start' alignSelf='flex-start'>
//           {item.content.map((contentItem, index) => {
//             if (contentItem.type === 'text') {
//               return (
//                 <Markdown
//                   key={index}
//                   remarkPlugins={[remarkGfm]}
//                   rehypePlugins={[rehypeSlug, rehypeRaw, rehypeSanitize]}
//                   components={{
//                     a: ({ node, ...props }) => (
//                       <a {...props} target='_blank' rel='noopener noreferrer'>
//                         {props.children}
//                       </a>
//                     ),
//                   }}
//                 >
//                   {contentItem.value}
//                 </Markdown>
//               );
//             }

//             if (contentItem.type === 'list') {
//               return (
//                 <>
//                   <ChainKnowledgeGrid>
//                     {contentItem?.items.map((item, index) => (
//                       <ChannelKnowledgeBaseComponentItem
//                         item={item}
//                         index={index}
//                       />
//                     ))}
//                   </ChainKnowledgeGrid>
//                 </>
//               );
//             }

//             return null;
//           })}
//         </MarkdownSection>

//       </ItemH>
//     </ChainKnowledgeBaseArticleWrapper>
//   );
// };

// export default ChainKnowledgeBaseArticleContent;

// const ChainKnowledgeBaseArticleWrapper = styled.div`
//   margin: 213px auto 0 auto;
//   width: 100%;

//   @media ${device.mobileL} {
//     margin: 153px auto 0 auto;
//   }
// `;

// const MarkdownSection = styled.div`
//   width: 70%;
//   background-color: transparent !important;
//   // styles for images
//   color: #000;
//   img {
//     border-radius: 32px;
//   }
//   p {
//     img {
//       border-radius: 32px;
//     }
//   }

//   // styles for list
//   ul,
//   ol {
//     li {
//       list-style: inherit !important;
//     }
//   }

//   @media ${device.tablet} {
//     width: 100%;
//   }
// `;

// const ListItem = styled.a`
//   color: #757d8d;
//   font-family: N27;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 140%;
//   letter-spacing: -0.4px;

//   &:hover {
//     color: #cf59e2;
//   }
// `;

// const Breadcrumb = styled(Link)`
//   color: #000;

//   &:hover {
//     color: #cf59e2;
//   }
// `;

// const ChainKnowledgeGridWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   margin: 48px 0 0 0;
// `;

// const ChainKnowledgeGrid = styled.div`
//   display: grid;
//   grid-template-columns: ${({ itemsInRow }) =>
//     itemsInRow === 3 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'};
//   gap: 24px;
//   width: 100%;
//   justify-content: center;

//   @media ${device.tablet} {
//     grid-template-columns: repeat(2, 1fr); /* Two items per row for tablets */
//   }

//   @media ${device.mobileL} {
//     grid-template-columns: 1fr; /* One item per row for mobile */
//   }
// `;
