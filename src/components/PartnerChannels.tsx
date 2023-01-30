// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import MarqueeAnimation from './MarqueeAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ItemHV2 } from '../components/SharedStylingV2';

import { ReactComponent as AaveSVG }  from '../assets/partners/aave.svg';
import { ReactComponent as AngleLabsSVG }  from '../assets/partners/anglelabs.svg';
import { ReactComponent as AragonSVG }  from '../assets/partners/aragon.svg';
import { ReactComponent as BancorSVG }  from '../assets/partners/bancor.svg';
import { ReactComponent as CoindeskSVG }  from '../assets/partners/coindesk.svg';
import { ReactComponent as CryptocurrencyjobsSVG }  from '../assets/partners/cryptocurrencyjobs.svg';
import { ReactComponent as DecentralandSVG }  from '../assets/partners/decentraland.svg';
import { ReactComponent as DydxSVG }  from '../assets/partners/dydx.svg';
import { ReactComponent as EnsSVG }  from '../assets/partners/ens.svg';
import { ReactComponent as EarnfiSVG }  from '../assets/partners/earnfi.svg';
import { ReactComponent as EthSVG }  from '../assets/partners/ethsign.svg';
import { ReactComponent as FlipsideSVG }  from '../assets/partners/flipside.svg';
import { ReactComponent as GoodGhostingSVG }  from '../assets/partners/goodghosting.svg';
import { ReactComponent as GroSVG }  from '../assets/partners/gro.svg';
import { ReactComponent as IdlefinanceSVG }  from '../assets/partners/idlefinance.svg';
import { ReactComponent as KybernetworkSVG }  from '../assets/partners/kybernetwork.svg';
import { ReactComponent as LepasaMetaverseSVG }  from '../assets/partners/lepasametaverse.svg';
import { ReactComponent as LensProtocolSVG }  from '../assets/partners/lensprotocol.svg';
import { ReactComponent as LifiSVG }  from '../assets/partners/lifi.svg';
import { ReactComponent as MaHadaoSVG }  from '../assets/partners/mahadao.svg';
import { ReactComponent as MakerdaoSVG }  from '../assets/partners/makerdao.svg';
import { ReactComponent as MeanFinanceSVG }  from '../assets/partners/meanfinance.svg';
import { ReactComponent as MetastableSVG }  from '../assets/partners/metastable.svg';
import { ReactComponent as MoverSVG }  from '../assets/partners/mover.svg';
import { ReactComponent as OasisSVG }  from '../assets/partners/oasis.svg';
import { ReactComponent as PodsfinanceSVG }  from '../assets/partners/podsfinance.svg';
import { ReactComponent as PooltogetherSVG }  from '../assets/partners/pooltogether.svg';
import { ReactComponent as PolyChainMonstersSVG }  from '../assets/partners/polychainmonsters.svg';
import { ReactComponent as ProofofhumanitySVG }  from '../assets/partners/proofofhumanity.svg';
import { ReactComponent as QidaoSVG }  from '../assets/partners/qidao.svg';
import { ReactComponent as RektSVG }  from '../assets/partners/rekt.svg';
import { ReactComponent as ShapeshiftSVG }  from '../assets/partners/shapeshift.svg';
import { ReactComponent as SnapshotSVG }  from '../assets/partners/snapshot.svg';
import { ReactComponent as SymphonyFinanceSVG }  from '../assets/partners/symphonyfinance.svg';
import { ReactComponent as UniswapSVG }  from '../assets/partners/uniswap.svg';
import { ReactComponent as UnstoppableSVG }  from '../assets/partners/unstoppable.svg';
import { Anchor, H2, ItemH, Span } from './SharedStyling';
import { device } from 'config/globals';
import useMediaQuery from 'hooks/useMediaQuery';



/**
 * edit this to change the order
 */

const partnerSortedGroup = [
  [
    LepasaMetaverseSVG,
    MaHadaoSVG,
    IdlefinanceSVG,
    PolyChainMonstersSVG
  ],
  [
    UnstoppableSVG,
    LensProtocolSVG,
    MeanFinanceSVG,
    LifiSVG,
    AragonSVG,
    MoverSVG,
    AngleLabsSVG
  ],
  [
    CoindeskSVG,
    FlipsideSVG,
    ProofofhumanitySVG,
    SymphonyFinanceSVG
  ],
  [
    PooltogetherSVG,
    MakerdaoSVG,
    MetastableSVG,
    EthSVG
  ],
  [
    BancorSVG,
    AaveSVG,
    SnapshotSVG,
    QidaoSVG,
    DydxSVG,
    UniswapSVG,
    OasisSVG,
  ],
  [
    DecentralandSVG,
    CryptocurrencyjobsSVG,
    ShapeshiftSVG,
    KybernetworkSVG
  ],
];




function PartnerChannels() {
  const isLargeScreen = useMediaQuery('(max-width: 1250px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow] = partnerSortedGroup;

  const onEnter = ({ currentTarget }) => {
    // gsap.to(currentTarget, { scale: 2 });
  };
  
  const onLeave = ({ currentTarget }) => {
    // gsap.to(currentTarget, {scale: 1 });
  };

  return (
    <>
     <PartnerRow
        justifyContent="flex-start"
        padding="150px 0px 0px 0px"
      >
          {isLargeScreen ? 
          (firstRow?.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />)) : 
          (firstRow?.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />))} 
      </PartnerRow>

      <PartnerRow
        justifyContent="flex-start"
      >
          {isLargeScreen ? 
          (secondRow?.slice(0,3).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />)) : 
          (secondRow?.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />))} 
      </PartnerRow>

      <PartnerRow
        justifyContent="flex-start"
      >
          {isLargeScreen && 
          (secondRow?.slice(3,6).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />))}
      </PartnerRow>

      <Body>

      <GridRow>
          {thirdRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
      </GridRow>

      <GridItem
          display="flex" 
          flexDirection="column"
      >
            <ResponsiveH2
                color="#121315"
                size="40px"
                weight="700"
                spacing="-0.02em"
                margin="0px 0px"
                lineHeight="110%"
              >
                Powered by Push
              </ResponsiveH2>

              <Span
                color="#303C5E"
                size="19px"
                weight="300"
                spacing="-0.03em"
                lineHeight="160%"
                textAlign={isMobile ? "center" : "initial"}
              >
                Quis posuere aliquam est orci lectus. Lectus {!isMobile && (<br />)} amet amet enim non facilisi pretium tempus.
              </Span>

              <Anchor
                  href="https://docs.push.org/hub/"
                  title="Learn about $PUSH"
                  target="_blank"
                  bg="#DD44B9"
                  radius="16px"
                  padding="14px 32px"
                  size="18px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="26px"
                  margin="15px 0px 0px 0px"
                  self="center"
                >
                  Explore dApps
                </Anchor>
      </GridItem>

      <GridRow>
          {fourthRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
      </GridRow>

      </Body>


      <PartnerRow
        justifyContent="flex-start"
      >
          {/* {fifthRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)}  */}
          {isLargeScreen ? 
          (fifthRow?.slice(0,3).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />)) : 
          (fifthRow?.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />))} 
      </PartnerRow>

      <PartnerRow
        justifyContent="flex-start"
      >
          {isLargeScreen && 
          (fifthRow?.slice(3,6).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />))}
      </PartnerRow>

      <PartnerRow
        justifyContent="flex-start"
        padding="0px 0px 150px 0px"
      >
          {/* {sixthRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)}  */}
          {isLargeScreen ? 
          (sixthRow?.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />)) : 
          (sixthRow?.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' onMouseEnter={onEnter} onMouseLeave={onLeave} />))} 
      </PartnerRow>
      
      {/* <PartnerRow
        justifyContent="flex-start"
        gap="32px"
      >
        <MarqueeAnimation
          speed={90}
          gap={32}
          gradientWidth={64}
          direction="left"
        >
          {firstRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
        </MarqueeAnimation> 
      </PartnerRow>

      <PartnerRow
        margin="130px 0 130px 0"
        justifyContent="flex-start"
        gap="32px"
      >
        <MarqueeAnimation
          speed={90}
          gap={32}
          gradientWidth={64}
          direction="right"
        >
          {secondRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
        </MarqueeAnimation> 
      </PartnerRow>

      <PartnerRow
        margin="0px 0 240px 0"
        justifyContent="flex-start"
        gap="32px"
      >
        <MarqueeAnimation
          speed={90}
          gap={32}
          gradientWidth={64}
          direction="left"
        >
          {thirdRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
        </MarqueeAnimation> 
      </PartnerRow> */}
    </>
   
  );
}


const PartnerRow = styled(ItemHV2)`
  margin: 16px auto;
  gap: 28px;
  & svg.marqueeItem {
    width: 96px;
    height: 96px;
  }
  @media ${device.laptop} {
    gap: 14px;
    margin: 7px auto;
   }

   @media ${device.mobileL} {
    gap: 12px;
    margin: 6px auto;
   }

   @media ${device.mobileM} {
    gap: 6px;
    margin: 3px auto;
   }
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  & svg.marqueeItem {
    width: 96px;
    height: 96px;
  }
  @media ${device.laptop} {
   display: none;
  }
`;
const GridItem = styled(ItemH)`
  // padding: 30px 0px;
  // box-sizing: border-box;
  @media ${device.laptop} {
    padding: 30px 0px;
   }
`

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
`


export default React.memo(PartnerChannels);