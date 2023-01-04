// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import styled from 'styled-components';

import MarqueeAnimation from './MarqueeAnimation';

import { ItemH, ItemV, Span } from './SharedStyling';

import ImageHolder from './ImageHolder';

import { ReactComponent as ACapitalSVG }  from '../assets/investors/a_capital.svg';
import { ReactComponent as BinancelabsSVG }  from '../assets/investors/binancelabs.svg';
import { ReactComponent as IosgSVG }  from '../assets/investors/iosg.svg';
import { ReactComponent as JumpSVG }  from '../assets/investors/jump.svg';
import { ReactComponent as ParafiSVG }  from '../assets/investors/parafi.svg';
import { ReactComponent as PolygonStudiosSVG }  from '../assets/investors/polygon_studios.svg';
import { ReactComponent as SinoglobalSVG }  from '../assets/investors/sinoglobal.svg';
import { ReactComponent as TigerglobalSVG }  from '../assets/investors/tigerglobal.svg';
import { ReactComponent as TrueventuresSVG }  from '../assets/investors/trueventures.svg';
import { ReactComponent as FourRCSVG }  from '../assets/investors/4rc.svg';

/**
 * edit this to change the order
 */

const investorsSortedGroup = [
  // 1st row
  [
    {
      svgIcon: JumpSVG,
      id: 'jump',
      alt: 'Jump'
    },
    {
      svgIcon: TigerglobalSVG,
      id: 'tiger',
      alt: 'Tiger Global'
    },
    {
      svgIcon: ParafiSVG,
      id: 'parafi',
      alt: 'Parafi'
    },
    {
      svgIcon: SinoglobalSVG,
      id: 'sinoglobal',
      alt: 'Sino Global'
    },
    {
      svgIcon: TrueventuresSVG,
      id: 'trueventures',
      alt: 'True Ventures'
    },
    {
      svgIcon: BinancelabsSVG,
      id: 'binancelabs',
      alt: 'Binance Labs'
    },
   
  ],

  // 2nd row
  [
    {
      svgIcon: PolygonStudiosSVG,
      id: 'polygonstudios',
      alt: 'Polygon Studios'
    },
    {
      svgIcon: IosgSVG,
      id: 'iosg',
      alt: 'Iosg'
    },
    {
      svgIcon: ACapitalSVG,
      id: 'acapital',
      alt: 'A Capital'
    },
    {
      thumbnail: [
        '/investors/balaji@1x.webp',
        '/investors/balaji@2x.webp 2x, /investors/balaji@3x.webp 3x'
      ],
      name: 'Balaji S.',
      title: 'Serial Entrepreneur',
      id: 'balaji',
      alt: 'Balaji S.'
    },
    {
      thumbnail: [
        '/investors/sandeep@1x.webp',
        '/investors/sandeep@2x.webp 2x, /investors/sandeep@3x.webp 3x'
      ],
      name: 'Sandeep N.',
      title: 'Co-founder Polygon',
      id: 'sandeep',
      alt: 'Sandeep N.'
    },
    {
      thumbnail: [
        '/investors/andrew@1x.webp',
        '/investors/andrew@2x.webp 2x, /investors/andrew@3x.webp 3x'
      ],
      name: 'Andrew K.',
      title: 'Angel Investor',
      id: 'andrewkeys',
      alt: 'Andrew K.',
    },
    {
      svgIcon: FourRCSVG,
      id: '4rc',
      alt: 'Four RCSVG',
    }
  ]
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
                <InvestorCard key={id} className='marqueeItem'>
                  <SVGIcon alt={`Logo for ${investor.alt}`}
                    title={`${investor.alt} (Investor of Push)`} />
                </InvestorCard>
              );
            }

            const thumbnail = investor?.thumbnail;

            if (thumbnail && thumbnail[0]) {
              return (
                <InvestorCard key={id} className='marqueeItem thumbnail'>
                  <MemberImage
                    width={64}
                    height={64}
                    src={thumbnail[0]}
                    srcSet={thumbnail[1]}
                    alt={`Logo for ${investor.alt}`}
                    title={`${investor.alt} (Investor of Push)`}
                  />
                  <InvestorDetails>
                    <InvestorName>
                      {investor.name}
                    </InvestorName>
                    <InvestorTitle>
                      {investor.title}
                    </InvestorTitle>
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
                <InvestorCard key={id} className='marqueeItem'>
                  <SVGIcon alt={`Logo for ${investor.alt}`}
                    title={`${investor.alt} (Investor of Push)`} />
                </InvestorCard>
              );
            }

            const thumbnail = investor?.thumbnail;

            if (thumbnail && thumbnail[0]) {
              return (
                <InvestorCard key={id} className='marqueeItem thumbnail'>
                  <MemberImage
                    width={64}
                    height={64}
                    src={thumbnail[0]}
                    srcSet={thumbnail[1]}
                    alt={`Logo for ${investor.alt}`}
                    title={`${investor.alt} (Investor of Push)`}
                  />
                  <InvestorDetails>
                    <InvestorName>
                      {investor.name}
                    </InvestorName>
                    <InvestorTitle>
                      {investor.title}
                    </InvestorTitle>
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

const InvestorCards = styled(ItemH)`
  column-gap: 18px;
`;

const InvestorCard = styled(ItemV)`
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
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

const InvestorName = styled(Span)`
    font-weight: 500;
    font-size: 22px;
    line-height: 142%;
    color: #09090B;
`;

const InvestorTitle = styled(Span)`
    font-weight: 500;
    font-size: 9px;
    line-height: 160%;
    letter-spacing: 0.11em;
    color: #303C5E;
    text-transform: uppercase;
`;

const MemberImage = styled(ImageHolder)`
   border-radius: 50%;
`;


export default React.memo(InvestorList);