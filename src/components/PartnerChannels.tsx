// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import MarqueeAnimation from './MarqueeAnimation';

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



/**
 * edit this to change the order
 */

const partnerSortedGroup = [
  [
    EnsSVG,
    UniswapSVG,
    AaveSVG,
    SnapshotSVG,
    MakerdaoSVG,
    ShapeshiftSVG,
    AragonSVG,
    DydxSVG,
    DecentralandSVG,
    BancorSVG,
    UnstoppableSVG,
    FlipsideSVG
  ],
  [
    OasisSVG,
    PooltogetherSVG,
    CoindeskSVG,
    ProofofhumanitySVG,
    KybernetworkSVG,
    IdlefinanceSVG,
    MetastableSVG,
    QidaoSVG,
    RektSVG,
    CryptocurrencyjobsSVG,
    EarnfiSVG,
    PodsfinanceSVG
  ],
  [
    LensProtocolSVG,
    PolyChainMonstersSVG,
    // PolyChainMonstersSVG,
    // PolyChainMonstersSVG,
    EthSVG,
    MaHadaoSVG,
    LifiSVG,
    AngleLabsSVG,
    LepasaMetaverseSVG,
    GroSVG,
    GoodGhostingSVG,
    MeanFinanceSVG,
    SymphonyFinanceSVG,
    MoverSVG
  ]
];


function PartnerChannels() {

  const [firstRow, secondRow, thirdRow] = partnerSortedGroup;

  return (
    <>
      <PartnerRow
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
      </PartnerRow>
    </>
   
  );
}

const PartnerRow = styled(ItemHV2)`
  & svg.marqueeItem {
    width: 102px;
    height: 102px;
  }
`;


export default PartnerChannels;