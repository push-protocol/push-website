// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { BsArrowUpRight } from 'react-icons/bs';

import { H2, H3, ItemH, ItemV, Span } from '../../css/SharedStyling';
import { device } from '../../config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

const ChainKnowledgeBaseComponent = () => {
  const isMobile = useMediaQuery(device.mobileL);

  const gridArray = [
    {
      image: '',
      title: 'Why Push?',
      subtitle:
        'Push Chain is a shared state blockchain allowing all chains to come together and enable consumer apps that works from any chain.',
      linkText: 'Learn More',
      url: '',
    },
    {
      image: '',
      title: 'Decentralized Ecosystem',
      subtitle:
        'Push Chain powers dApps and decentralized messaging, connecting blockchains seamlessly.',
      linkText: 'Explore Now',
      url: '',
    },
    {
      image: '',
      title: 'Secure and Fast',
      subtitle:
        'Experience the fastest and most secure blockchain transactions.',
      linkText: 'Read More',
      url: '',
    },
    {
      image: '',
      title: 'Interoperable Network',
      subtitle:
        'Push Chain connects with multiple networks, ensuring smooth operability.',
      linkText: 'See How',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
    {
      image: '',
      title: 'Future Ready',
      subtitle: 'Built for tomorrow, Push Chain supports innovative solutions.',
      linkText: 'Discover More',
      url: '',
    },
  ];

  const createGridRows = (items) => {
    const rows = [];
    let index = 0;

    while (index < items.length) {
      const remainingItems = items.length - index;

      if (remainingItems === 7) {
        // Special case for 7: [3, 2, 2]
        rows.push(items.slice(index, index + 3));
        rows.push(items.slice(index + 3, index + 5));
        rows.push(items.slice(index + 5, index + 7));
        index += 7;
      } else if (remainingItems === 5) {
        // Special case for 5: [3, 2]
        rows.push(items.slice(index, index + 3));
        rows.push(items.slice(index + 3, index + 5));
        index += 5;
      } else if (remainingItems === 4) {
        // Prevent 4 in a row by adjusting previous rows
        if (rows.length > 0 && rows[rows.length - 1].length === 2) {
          rows[rows.length - 1].push(items[index]);
          rows.push(items.slice(index + 1, index + 4));
          index += 4;
        } else {
          rows.push(items.slice(index, index + 2));
          rows.push(items.slice(index + 2, index + 4));
          index += 4;
        }
      } else if (
        rows.length >= 2 &&
        rows[rows.length - 1].length === 2 &&
        rows[rows.length - 2].length === 2 &&
        remainingItems > 2
      ) {
        // Avoid more than 2 consecutive rows of 2
        rows.push(items.slice(index, index + 3));
        index += 3;
      } else {
        // Default case: Create a row of 3 or 2
        const rowSize = remainingItems >= 3 ? 3 : 2;
        rows.push(items.slice(index, index + rowSize));
        index += rowSize;
      }
    }

    return rows;
  };

  const gridRows = createGridRows(gridArray);

  return (
    <ChainKnowledgeBaseComponentWrapper>
      <ItemH gap='32px'>
        <ItemV>
          <H2
            fontSize={isMobile ? '36px' : '54px'}
            fontWeight='500'
            fontFamily='N27'
            lineHeight={isMobile ? '100%' : '140%'}
            letterSpacing='-1.098px'
            textAlign='center'
          >
            What is Push Chain?
          </H2>

          <H3
            fontSize={isMobile ? '16px' : '20px'}
            fontWeight='400'
            fontFamily='N27'
            lineHeight={isMobile ? '100%' : '140%'}
            textAlign='center'
          >
            Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk
            handango empressr orkut appjet, convore xobni eduvant babblely.
            <br />
            <br />
            Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk
            handango.
          </H3>
        </ItemV>

        <ItemV>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/lhiwW3SfoZE'
            title='Afrobeats &amp; Amapiano Mix 2024 | DJames Live in Toronto'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </ItemV>
      </ItemH>

      <ItemV margin='200px 0 0 0'>
        <H2
          fontSize={isMobile ? '32px' : '40px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight={isMobile ? '100%' : '140%'}
          letterSpacing='-0.8px'
          textAlign='center'
        >
          Hey! Want to learn more about Push Chain?
        </H2>
      </ItemV>

      <ChainKnowledgeGridWrapper>
        {gridRows.map((row, rowIndex) => (
          <ChainKnowledgeGrid key={rowIndex} itemsInRow={row.length}>
            {row.map((item, index) => (
              <ItemV
                key={index}
                background='#FFF'
                padding='24px'
                alignItems='flex-start'
                borderRadius='24px'
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

                <ItemH
                  alignItems='center'
                  justifyContent='space-between'
                  margin='84px 0 0 0'
                  cursor='pointer'
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
                  <BsArrowUpRight color='#D548EC' size={12} />
                </ItemH>
              </ItemV>
            ))}
          </ChainKnowledgeGrid>
        ))}
      </ChainKnowledgeGridWrapper>
    </ChainKnowledgeBaseComponentWrapper>
  );
};

export default ChainKnowledgeBaseComponent;

const ChainKnowledgeBaseComponentWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 103px auto 0 auto;
  }
`;

const ChainKnowledgeGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 48px 0 0 0;
`;

const ChainKnowledgeGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ itemsInRow }) =>
    itemsInRow === 3 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'};
  gap: 24px;
  width: 100%;
  justify-content: center;
`;
