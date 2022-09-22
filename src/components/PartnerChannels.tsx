// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import ReactMarquee from 'react-fast-marquee';

import { Item } from '../components/SharedStyling';

import { ReactComponent as AaveSVG }  from '../assets/aave.svg';
import { ReactComponent as EnsSVG }  from '../assets/ens.svg';
import { ReactComponent as MakerDAOSVG }  from '../assets/makerdao.svg';
import { ReactComponent as CoindeskSVG }  from '../assets/coindesk.svg';

type Props = {
    direction: string;
};

function PartnerChannels(props: Props) {
    return (
        <MarqueeAnimation
            speed={90}
            gap={32}
            gradientWidth={64}
            direction={props.direction || 'left'}
        >
            <MakerDAOSVG className='marqueeItem'/>
            <AaveSVG className='marqueeItem'/>
            <EnsSVG className='marqueeItem'/>
            <MakerDAOSVG className='marqueeItem'/>
            <EnsSVG className='marqueeItem'/>
            <MakerDAOSVG className='marqueeItem'/>
            <EnsSVG className='marqueeItem'/>
            <MakerDAOSVG className='marqueeItem'/>
            <EnsSVG className='marqueeItem'/>
            <CoindeskSVG className='marqueeItem'/>
        </MarqueeAnimation> 
    );
}

const MarqueeAnimation = styled(ReactMarquee)`
  & .marqueeItem {
    margin-right: ${props => props.gap || 0}px;
  }
`;


export default PartnerChannels;