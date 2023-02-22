// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MarqueeAnimation from './MarqueeAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ItemHV2 } from '../components/SharedStylingV2';

import { ReactComponent as AaveSVG }  from '../assets/partners/aave.svg';
import { ReactComponent as AngleLabsSVG }  from '../assets/partners/anglelabs.svg';
import { ReactComponent as AragonSVG }  from '../assets/partners/aragon.svg';
import { ReactComponent as ApeswapSVG }  from '../assets/partners/apeswap.svg';
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
import { ReactComponent as InchSVG }  from '../assets/partners/inch.svg';
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
import { ReactComponent as OrionprotocolSVG }  from '../assets/partners/orionprotocol.svg';
import { ReactComponent as PodsfinanceSVG }  from '../assets/partners/podsfinance.svg';
import { ReactComponent as PooltogetherSVG }  from '../assets/partners/pooltogether.svg';
import { ReactComponent as PolyChainMonstersSVG }  from '../assets/partners/polychainmonsters.svg';
import { ReactComponent as ProofofhumanitySVG }  from '../assets/partners/proofofhumanity.svg';
import { ReactComponent as QidaoSVG }  from '../assets/partners/qidao.svg';
import { ReactComponent as RektSVG }  from '../assets/partners/rekt.svg';
import { ReactComponent as SecondliveSVG }  from '../assets/partners/secondlive.svg';
import { ReactComponent as ShapeshiftSVG }  from '../assets/partners/shapeshift.svg';
import { ReactComponent as SnapshotSVG }  from '../assets/partners/snapshot.svg';
import { ReactComponent as SushiSVG }  from '../assets/partners/sushi.svg';
import { ReactComponent as SymphonyFinanceSVG }  from '../assets/partners/symphonyfinance.svg';
import { ReactComponent as ThenaSVG }  from '../assets/partners/thena.svg';
import { ReactComponent as UniswapSVG }  from '../assets/partners/uniswap.svg';
import { ReactComponent as UnstoppableSVG }  from '../assets/partners/unstoppable.svg';
import { ReactComponent as WormbatSVG }  from '../assets/partners/wormbat.svg';
import { ReactComponent as ZeroswapSVG }  from '../assets/partners/zeroswap.svg';
import { Anchor, H2, ItemH, LinkTo, Span } from './SharedStyling';
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



  // const [firstRow, secondRow, thirdRow,fourthRow] = partnerSortedGroup;

function PartnerChannels() {
  const isLargeScreen = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [active, setActive] = useState(false);

  const [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow] = partnerSortedGroup;


  const onEnter = () => {
    gsap.to('#item-0', { width: '0px', height: '0px' });
    gsap.to('#item-1', { width: '96px', height: '96px' });
    gsap.to('#item-2', { width: '96px', height: '96px' });
    gsap.to('#item-3', { width: '0px', height: '0px' });

    gsap.to('#secondItem-0', { width: '96px', height: '96px' });
    gsap.to('#secondItem-1', { width: '178px', height: '178px' });
    gsap.to('#secondItem-2', { width: '96px', height: '96px' });
    gsap.to('#secondItem-3', { width: '96px', height: '96px' });

    gsap.to('#secondRowItem-0', { width: '178px', height: '178px' });
    gsap.to('#secondRowItem-1', { width: '96px', height: '96px' });
    gsap.to('#secondRowItem-2', { width: '0px', height: '0px' });

    gsap.to('#thirdItem-0', { width: '178px', height: '178px' });
    gsap.to('#thirdItem-1', { width: '0px', height: '0px' });
    gsap.to('#thirdRowItem-0', { width: '96px', height: '96px' });
    gsap.to('#thirdRowItem-1', { width: '96px', height: '96px' });
    gsap.to('#thirdRowItem-2', { width: '96px', height: '96px' });

    gsap.to('#fourItem-0', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-0', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-1', { width: '178px', height: '178px' });
    gsap.to('#fourRowItem-2', { width: '178px', height: '178px' });

    gsap.to('#sixitem-0', { width: '0px', height: '0px' });
    gsap.to('#sixitem-1', { width: '96px', height: '96px' });
    gsap.to('#sixitem-2', { width: '96px', height: '96px' });
    gsap.to('#sixitem-3', { width: '0px', height: '0px' });
  };

  useEffect(()=>{
      onEnter();
      setTimeout(() => {
        onLeave();
        setActive(true);
      }, 4000);
  },[])
  
  const onLeave = () => {
    gsap.to('#item-0', { width: '96px', height: '96px' });
    gsap.to('#item-1', { width: '96px', height: '96px' });
    gsap.to('#item-2', { width: '96px', height: '96px' });
    gsap.to('#item-3', { width: '96px', height: '96px' });

    gsap.to('#secondItem-0', { width: '96px', height: '96px' });
    gsap.to('#secondItem-1', { width: '96px', height: '96px' });
    gsap.to('#secondItem-2', { width: '96px', height: '96px' });
    gsap.to('#secondItem-3', { width: '96px', height: '96px' });

    gsap.to('#secondRowItem-0', { width: '96px', height: '96px' });
    gsap.to('#secondRowItem-1', { width: '96px', height: '96px' });
    gsap.to('#secondRowItem-2', { width: '96px', height: '96px' });

    gsap.to('#thirdItem-0', { width: '96px', height: '96px' });
    gsap.to('#thirdItem-1', { width: '96px', height: '96px' });
    gsap.to('#thirdRowItem-0', { width: '96px', height: '96px' });
    gsap.to('#thirdRowItem-1', { width: '96px', height: '96px' });
    gsap.to('#thirdRowItem-2', { width: '96px', height: '96px' });

    gsap.to('#fourItem-0', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-0', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-1', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-2', { width: '96px', height: '96px' });

    gsap.to('sixitem-0', { width: '96px', height: '96px' });
    gsap.to('sixitem-1', { width: '96px', height: '96px' });
    gsap.to('sixitem-2', { width: '96px', height: '96px' });
    gsap.to('sixitem-3', { width: '96px', height: '96px' });
  };

  return (
    <>
     <PartnerRow
        justifyContent="flex-start"
        padding="150px 0px 14px 0px"
      >
          {isLargeScreen ? 
          (firstRow?.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'   />)) : 
          (firstRow?.slice(0, !active ? 0 : firstRow.length).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'  id={`item-${idx}`}    />))} 
      </PartnerRow>

      {!isLargeScreen && (<NewRow
      >
          <PartnerRow>
          {secondRow?.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'id={`secondItem-${idx}`}   />)} 
          </PartnerRow>
         
          <GridRow>
          {active ? thirdRow.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />) : thirdRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
          </GridRow>
          {/* <PartnerRow>
          {isLargeScreen ? 
          (secondRow?.slice(0,3).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'   />)) : 
          (secondRow?.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'id={`secondItem-${idx}`}   />))} 
          </PartnerRow> */}

          <PartnerRow>
          {secondRow?.slice(4,7).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'id={`secondRowItem-${idx}`}   />)} 
          </PartnerRow>
      </NewRow>)}

      <PartnerRow
        justifyContent="flex-start"
      >
          {isLargeScreen && 
          (secondRow?.slice(3,6).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'   />))}
      </PartnerRow>

      <Body active={active}>

      <TriRow>
          {active ? 
          <div>{thirdRow?.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' id={`thirdItem-${idx}`} />)}</div>
          : <>{thirdRow?.slice(0,1).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' id={`thirdItem-${idx}`} />)}</>}
          <div>
          {thirdRow?.slice(2,4).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' id={`thirdRowItem-${idx}`} />)} 
          </div>
      </TriRow>

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

              <LinkTo
                  to="/frens"
                  title="Learn about $PUSH"
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
                </LinkTo>
      </GridItem>

      {/* <GridRow>
          {fourthRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
      </GridRow> */}
      <TriRow>
          <div>
            {fourthRow?.slice(2,4).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' id={`thirdRowItem-${idx}`} />)} 
          </div>
            {active ? <div>{fourthRow?.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' id={`thirdItem-${idx}`} />)}</div> : <>{fourthRow?.slice(0,1).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' id={`thirdItem-${idx}`} />)}</>} 
      </TriRow>

      </Body>


      {!isLargeScreen && (<NewSecondRow
      >
          <NewPartnerRow>
          {secondRow?.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'id={`secondItem-${idx}`}   />)} 
          </NewPartnerRow>
         
          <GridRow>
          {active ? thirdRow.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />) : thirdRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
          </GridRow>
          {/* <PartnerRow>
          {isLargeScreen ? 
          (secondRow?.slice(0,3).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'   />)) : 
          (secondRow?.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'id={`secondItem-${idx}`}   />))} 
          </PartnerRow> */}

          <NewPartnerRow>
          {secondRow?.slice(4,7).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'id={`secondRowItem-${idx}`}   />)} 
          </NewPartnerRow>
      </NewSecondRow>)}

      <PartnerRow
        justifyContent="flex-start"
      >
          {isLargeScreen && 
          (fifthRow?.slice(3,6).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />))}
      </PartnerRow>

      <PartnerRow
        justifyContent="flex-start"
        padding="0px 0px 150px 0px"
      >
          {isLargeScreen ? 
          (sixthRow?.slice(0,2).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)) : 
          (sixthRow?.slice(0, !active ? 0 : sixthRow.length).map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem'  id={`sixitem-${idx}`}  />))} 
      </PartnerRow>

      {/* <PartnerRow
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
          {fourthRow.map((SVGIcon, idx) => <SVGIcon key={idx} className='marqueeItem' />)} 
        </MarqueeAnimation> 
      </PartnerRow> */}
    </>
   
  );
}


const PartnerRow = styled(ItemHV2)`
  margin: 14px auto 0px auto;
  gap: 28px;
  align-items: flex-end !important;
  // height: fit-content !important;
  // & svg.marqueeItem {
  //   width: 96px;
  //   height: 96px;
  // }
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

const NewPartnerRow = styled(ItemHV2)`
  margin: 0px auto 0px auto;
  gap: 28px;
  align-items: flex-start !important;
  // height: fit-content !important;
  // & svg.marqueeItem {
  //   width: 96px;
  //   height: 96px;
  // }
  @media ${device.laptop} {
    gap: 14px;
    // margin: 7px auto;
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

const NewRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto 0px auto;
  align-items: flex-end !important;
  height: 100%;
  gap: 28px;
`

const NewSecondRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 14px auto 0px auto;
  align-items: flex-start !important;
  height: 100%;
  gap: 28px;
`

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  // margin: 7px 0px;
  // & svg.marqueeItem {
  //   width: 96px;
  //   height: 96px;
  // }
  @media (max-width: 1200px) {
   display: none;
  }
`;

const TriRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  // margin: 7px 0px;
  align-items: center !important;
  // & svg.marqueeItem {
  //   width: 96px;
  //   height: 96px;
  // }

  div {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 28px;
    width: 96px !important;
  }
  @media (max-width: 1200px) {
   display: none;
  }
`;

const GridItem = styled(ItemH)`
  @media (max-width: 1200px) {
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
  width: ${(props) => props.active ? '85%' : '100%'};
  margin: 0 auto;
`


export default React.memo(PartnerChannels);
// [
//   BancorSVG,
//   AaveSVG,
//   SnapshotSVG,
//   MakerdaoSVG,
//   ShapeshiftSVG,
//   AragonSVG,
//   DydxSVG,
//   DecentralandSVG,
//   BancorSVG,
//   UnstoppableSVG,
//   FlipsideSVG,
//   InchSVG,
//   SushiSVG,
//   WormbatSVG,
// ],
// [
//   OasisSVG,
//   PooltogetherSVG,
//   CoindeskSVG,
//   ProofofhumanitySVG,
//   KybernetworkSVG,
//   IdlefinanceSVG,
//   MetastableSVG,
//   QidaoSVG,
//   RektSVG,
//   CryptocurrencyjobsSVG,
//   EarnfiSVG,
//   PodsfinanceSVG,
//   ApeswapSVG,
//   ThenaSVG,
//   WormbatSVG,
// ],
// [
//   LensProtocolSVG,
//   PolyChainMonstersSVG,
//   EthSVG,
//   MaHadaoSVG,
//   LifiSVG,
//   AngleLabsSVG,
//   LepasaMetaverseSVG,
//   GroSVG,
//   GoodGhostingSVG,
//   MeanFinanceSVG,
//   SymphonyFinanceSVG,
//   MoverSVG,
//   OrionprotocolSVG,
//   SecondliveSVG,
//   ZeroswapSVG
// ]