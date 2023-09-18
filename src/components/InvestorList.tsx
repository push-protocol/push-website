// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import MarqueeAnimation from './MarqueeAnimation';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from './SharedStylingV2';

import ImageHolder from './ImageHolder';

/**
 * edit this to change the order
 */

const investorsSortedGroup = [
  // 1st row
  [
    {
      svgIcon: ['/maininvestors/jump.png', '/maininvestors/jump@2x.png 2x, /mainnvestors/jump@3x.png 3x'],
      id: 'jump',
      alt: 'Jump',
    },
    {
      svgIcon: ['/maininvestors/tigerglobal.png', '/maininvestors/tigerglobal@2x.png 2x, /mainnvestors/tigerglobal@3x.png 3x'],
      id: 'tiger',
      alt: 'Tiger Global',
    },
    {
      svgIcon: ['/maininvestors/parafi.png', '/maininvestors/parafi@2x.png 2x, /mainnvestors/parafi@3x.png 3x'],
      id: 'parafi',
      alt: 'Parafi',
    },
    {
      svgIcon: ['/maininvestors/sino.png', '/maininvestors/sino@2x.png 2x, /mainnvestors/sino@3x.png 3x'],
      id: 'sinoglobal',
      alt: 'Sino Global',
    },
    {
      svgIcon: ['/maininvestors/trueventures.png', '/maininvestors/trueventures@2x.png 2x, /mainnvestors/trueventures@3x.png 3x'],
      id: 'trueventures',
      alt: 'True Ventures',
    },
    {
      svgIcon: ['/maininvestors/binancelabs.png', '/maininvestors/binancelabs@2x.png 2x, /mainnvestors/binancelabs@3x.png 3x'],
      id: 'binancelabs',
      alt: 'Binance Labs',
    },
  ],

  // 2nd row
  [
    {
      svgIcon: ['/maininvestors/polygonstudios.png', '/maininvestors/polygonstudios@2x.png 2x, /mainnvestors/polygonstudios@3x.png 3x'],
      id: 'polygonstudios',
      alt: 'Polygon Studios',
    },
    {
      svgIcon: ['/maininvestors/iosg.png', '/maininvestors/iosg@2x.png 2x, /maininvestors/iosg@3x.png 3x'],
      id: 'iosg',
      alt: 'Iosg',
    },
    {
      svgIcon: ['/maininvestors/a_capital.png', '/maininvestors/a_capital@2x.png 2x, /maininvestors/a_capital@3x.png 3x'],
      id: 'acapital',
      alt: 'A Capital',
    },
    {
      thumbnail: ['/investors/balaji@1x.webp', '/investors/balaji@2x.webp 2x, /investors/balaji@3x.webp 3x'],
      name: 'Balaji S.',
      title: 'Serial Entrepreneur',
      id: 'balaji',
      alt: 'Balaji S.',
    },
    {
      thumbnail: ['/investors/sandeep@1x.webp', '/investors/sandeep@2x.webp 2x, /investors/sandeep@3x.webp 3x'],
      name: 'Sandeep N.',
      title: 'Co-founder Polygon',
      id: 'sandeep',
      alt: 'Sandeep N.',
    },
    {
      thumbnail: ['/investors/andrew@1x.webp', '/investors/andrew@2x.webp 2x, /investors/andrew@3x.webp 3x'],
      name: 'Andrew K.',
      title: 'Angel Investor',
      id: 'andrewkeys',
      alt: 'Andrew K.',
    },
    {
      svgIcon: ['/maininvestors/4rc.png', '/maininvestors/4rc@2x.png 2x, /maininvestors/4rc@3x.png 3x'],
      id: '4rc',
      alt: 'Four RCSVG',
    },
  ],
];

const ANIMATION_SPEED = 60;

function InvestorList() {
  const [firstRow, secondRow] = investorsSortedGroup;

  return (
    <InvestorWrapper>
      <InvestorCards>
        <MarqueeAnimation
          speed={ANIMATION_SPEED}
          gradientWidth={8}
          gap={18}
        >
          {firstRow.map((investor, id) => {
            const SVGIcon = investor?.svgIcon;

            if (SVGIcon) {
              return (
                <InvestorCard
                  key={id}
                  className="marqueeItem"
                >
                  <Image
                    width={64}
                    height={64}
                    src={SVGIcon[0]}
                    srcSet={SVGIcon[1]}
                    alt={`Logo for ${investor.alt}`}
                    title={`${investor.alt} (Investor of Push)`}
                  />
                </InvestorCard>
              );
            }

            const thumbnail = investor?.thumbnail;


            if (thumbnail && thumbnail[0]) {
              return (
                <InvestorCard
                  key={id}
                  className="marqueeItem thumbnail"
                >
                  <MemberImage
                    width={64}
                    height={64}
                    src={thumbnail[0]}
                    srcSet={thumbnail[1]}
                    alt={`Logo for ${investor.alt}`}
                    title={`${investor.alt} (Investor of Push)`}
                  />
                  <InvestorDetails>
                    <InvestorName>{investor.name}</InvestorName>
                    <InvestorTitle>{investor.title}</InvestorTitle>
                  </InvestorDetails>
                </InvestorCard>
              );
            }

            return null;
          })}
        </MarqueeAnimation>
      </InvestorCards>

      <InvestorCards>
        <MarqueeAnimation
          speed={ANIMATION_SPEED}
          gradientWidth={8}
          gap={18}
          direction="right"
        >
          {secondRow.map((investor, id) => {
            const SVGIcon = investor?.svgIcon;

            if (SVGIcon) {
              return (
                <InvestorCard
                  key={id}
                  className="marqueeItem"
                >
                  <Image
                    width={64}
                    height={64}
                    src={SVGIcon[0]}
                    srcSet={SVGIcon[1]}
                    alt={`Logo for ${investor.alt}`}
                    title={`${investor.alt} (Investor of Push)`}
                  />

                </InvestorCard>
              );
            }

            const thumbnail = investor?.thumbnail;

            if (thumbnail && thumbnail[0]) {
              return (
                <InvestorCard
                  key={id}
                  className="marqueeItem thumbnail"
                >
                  <MemberImage
                    width={64}
                    height={64}
                    src={thumbnail[0]}
                    srcSet={thumbnail[1]}
                    alt={`Logo for ${investor.alt}`}
                    title={`${investor.alt} (Investor of Push)`}
                  />
                  <InvestorDetails>
                    <InvestorName>{investor.name}</InvestorName>
                    <InvestorTitle>{investor.title}</InvestorTitle>
                  </InvestorDetails>
                </InvestorCard>
              );
            }

            return null;
          })}
        </MarqueeAnimation>
      </InvestorCards>
    </InvestorWrapper>
  );
}

const InvestorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 130px;
`;

const InvestorCards = styled(ItemHV2)`
  column-gap: 18px;
`;

const InvestorCard = styled(ItemVV2)`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 74px;
  padding: 8px 0;
  min-width: 242px;
  min-height: 66px;

  &.thumbnail {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 8px;
    column-gap: 16px;

    & span {
      color: #000;
    }
  }
`;

const InvestorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvestorName = styled(SpanV2)`
  font-weight: 500;
  font-size: 22px;
  line-height: 142%;
  color: #09090b;
`;

const InvestorTitle = styled(SpanV2)`
  font-weight: 500;
  font-size: 9px;
  line-height: 160%;
  letter-spacing: 0.11em;
  color: #303c5e;
  text-transform: uppercase;
`;

const MemberImage = styled(ImageHolder)`
  border-radius: 50%;
`;

const Image = styled(ImageV2)`
  max-width: 65%;
  max-height: 46px;
  object-fit: contain;
`;

export default React.memo(InvestorList);
