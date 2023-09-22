// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import MarqueeAnimation from '@site/src/components/MarqueeAnimation';
import { ItemHV2, ItemVV2, SpanV2 } from '@site/src/components/SharedStylingV2';

import FourRCSVG from '@site/static/assets/website/investors/raw/4rc.svg';
import ACapitalSVG from '@site/static/assets/website/investors/raw/a_capital.svg';
import BinancelabsSVG from '@site/static/assets/website/investors/raw/binancelabs.svg';
import IosgSVG from '@site/static/assets/website/investors/raw/iosg.svg';
import JumpSVG from '@site/static/assets/website/investors/raw/jump.svg';
import ParafiSVG from '@site/static/assets/website/investors/raw/parafi.svg';
import PolygonStudiosSVG from '@site/static/assets/website/investors/raw/polygon_studios.svg';
import SinoglobalSVG from '@site/static/assets/website/investors/raw/sinoglobal.svg';
import TigerglobalSVG from '@site/static/assets/website/investors/raw/tigerglobal.svg';
import TrueventuresSVG from '@site/static/assets/website/investors/raw/trueventures.svg';
import ImageHolder from '../ImageHolder';

// Internal Configs
import { InvList } from '@site/src/config/HomeInvestorList';

/**
 * edit this to change the order
 */

const investorsSortedGroup = [
  // 1st row
  [
    {
      svgIcon: JumpSVG,
      id: 'jump',
      alt: 'Jump',
    },
    {
      svgIcon: TigerglobalSVG,
      id: 'tiger',
      alt: 'Tiger Global',
    },
    {
      svgIcon: ParafiSVG,
      id: 'parafi',
      alt: 'Parafi',
    },
    {
      svgIcon: SinoglobalSVG,
      id: 'sinoglobal',
      alt: 'Sino Global',
    },
    {
      svgIcon: TrueventuresSVG,
      id: 'trueventures',
      alt: 'True Ventures',
    },
    {
      svgIcon: BinancelabsSVG,
      id: 'binancelabs',
      alt: 'Binance Labs',
    },
  ],

  // 2nd row
  [
    {
      svgIcon: PolygonStudiosSVG,
      id: 'polygonstudios',
      alt: 'Polygon Studios',
    },
    {
      svgIcon: IosgSVG,
      id: 'iosg',
      alt: 'Iosg',
    },
    {
      svgIcon: ACapitalSVG,
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
      svgIcon: FourRCSVG,
      id: '4rc',
      alt: 'Four RCSVG',
    },
  ],
];

const ANIMATION_SPEED = 60;

function InvestorList() {
  const firstRow = InvList.top;
  const secondRow = InvList.bottom;

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
                  <SVGIcon
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
                  <SVGIcon
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

export default React.memo(InvestorList);
