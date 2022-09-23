// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import ReactMarquee from 'react-fast-marquee';

import { ItemH, ItemV, Span } from './SharedStyling';

import ImageHolder from './ImageHolder';

import { ReactComponent as ACapital }  from '../assets/a_capital.svg';
import { ReactComponent as PolygonStudios }  from '../assets/polygon_studios.svg';
import { ReactComponent as Binance }  from '../assets/binance.svg';

type Props = {
    direction: string;
};

function InvestorList(props: Props) {
    return (
        <InvestorCards>
            <MarqueeAnimation
                speed={85}
                gradientWidth={8}
                gap={18}
            >
                <InvestorCard className='marqueeItem'>
                    <ACapital />
                </InvestorCard>

                <InvestorCard className='marqueeItem'>
                    <PolygonStudios />
                </InvestorCard>

                <InvestorCard className='marqueeItem thumbnail'>
                    <MemberImage
                        width={64}
                        height={64}
                        src="/investors/sandeep_polygon.jpg"
                        srcSet="/investors/sandeep_polygon@2x.jpg 2x, /team/sandeep_polygon@3x.jpg 3x"
                    />
                    <InvestorDetails>
                        <InvestorName>
                    Sandeep N.
                        </InvestorName>
                        <InvestorTitle>
                    Co-Founder Polygon
                        </InvestorTitle>
                    </InvestorDetails>
                </InvestorCard>
            
                <InvestorCard className='marqueeItem'>
                    <Binance />
                </InvestorCard>

            </MarqueeAnimation> 
        </InvestorCards>
    );
}

const MarqueeAnimation = styled(ReactMarquee)`
  & .marqueeItem {
    margin-right: ${props => props.gap || 0}px;
  }
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

    &.thumbnail {
        flex-direction: row;
        justify-content: flex-start;
        padding-left: 8px;
        column-gap: 16px;
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


export default InvestorList;