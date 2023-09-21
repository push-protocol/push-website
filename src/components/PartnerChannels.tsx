// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useLayoutEffect, useState } from 'react';

// External Components
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

// Internal Components
import { H2V2, ItemHV2, LinkToV2, SpanV2 } from '@site/src/components/SharedStylingV2';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import AaveSVG from '@site/static/assets/website/showcase/raw/aave.svg';
import AngleLabsSVG from '@site/static/assets/website/showcase/raw/anglelabs.svg';
import ApeswapSVG from '@site/static/assets/website/showcase/raw/apeswap.svg';
import AragonSVG from '@site/static/assets/website/showcase/raw/aragon.svg';
import AtlendisSVG from '@site/static/assets/website/showcase/raw/atlendis.svg';
import BancorSVG from '@site/static/assets/website/showcase/raw/bancor.svg';
import BanklessSVG from '@site/static/assets/website/showcase/raw/bankless.svg';
import CoindeskSVG from '@site/static/assets/website/showcase/raw/coindesk.svg';
import CryptocurrencyjobsSVG from '@site/static/assets/website/showcase/raw/cryptocurrencyjobs.svg';
import DDSVG from '@site/static/assets/website/showcase/raw/dd.svg';
import DecentralandSVG from '@site/static/assets/website/showcase/raw/decentraland.svg';
import DydxSVG from '@site/static/assets/website/showcase/raw/dydx.svg';
import EarnfiSVG from '@site/static/assets/website/showcase/raw/earnifi.svg';
import EnsSVG from '@site/static/assets/website/showcase/raw/ens.svg';
import EthSVG from '@site/static/assets/website/showcase/raw/ethsign.svg';
import FlipsideSVG from '@site/static/assets/website/showcase/raw/flipside.svg';
import GoodGhostingSVG from '@site/static/assets/website/showcase/raw/goodghosting.svg';
import GroSVG from '@site/static/assets/website/showcase/raw/gro.svg';
import IdlefinanceSVG from '@site/static/assets/website/showcase/raw/idlefinance.svg';
import InchSVG from '@site/static/assets/website/showcase/raw/inch.svg';
import KybernetworkSVG from '@site/static/assets/website/showcase/raw/kybernetwork.svg';
import LensProtocolSVG from '@site/static/assets/website/showcase/raw/lensprotocol.svg';
import LepasaMetaverseSVG from '@site/static/assets/website/showcase/raw/lepasametaverse.svg';
import LifiSVG from '@site/static/assets/website/showcase/raw/lifi.svg';
import MaHadaoSVG from '@site/static/assets/website/showcase/raw/mahadao.svg';
import MakerdaoSVG from '@site/static/assets/website/showcase/raw/makerdao.svg';
import MeanFinanceSVG from '@site/static/assets/website/showcase/raw/meanfinance.svg';
import MetastableSVG from '@site/static/assets/website/showcase/raw/metastable.svg';
import MoverSVG from '@site/static/assets/website/showcase/raw/mover.svg';
import OasisSVG from '@site/static/assets/website/showcase/raw/oasis.svg';
import OrionprotocolSVG from '@site/static/assets/website/showcase/raw/orionprotocol.svg';
import PodsfinanceSVG from '@site/static/assets/website/showcase/raw/podsfinance.svg';
import PolyChainMonstersSVG from '@site/static/assets/website/showcase/raw/polychainmonsters.svg';
import PooltogetherSVG from '@site/static/assets/website/showcase/raw/pooltogether.svg';
import ProofofhumanitySVG from '@site/static/assets/website/showcase/raw/proofofhumanity.svg';
import QidaoSVG from '@site/static/assets/website/showcase/raw/qidao.svg';
import RektSVG from '@site/static/assets/website/showcase/raw/rekt.svg';
import SecondliveSVG from '@site/static/assets/website/showcase/raw/secondlive.svg';
import ShapeshiftSVG from '@site/static/assets/website/showcase/raw/shapeshift.svg';
import SnapshotSVG from '@site/static/assets/website/showcase/raw/snapshot.svg';
import SushiSVG from '@site/static/assets/website/showcase/raw/sushi.svg';
import SymphonyFinanceSVG from '@site/static/assets/website/showcase/raw/symphonyfinance.svg';
import ThenaSVG from '@site/static/assets/website/showcase/raw/thena.svg';
import UniswapSVG from '@site/static/assets/website/showcase/raw/uniswap.svg';
import UnstoppableSVG from '@site/static/assets/website/showcase/raw/unstoppable.svg';
import WormbatSVG from '@site/static/assets/website/showcase/raw/wormbat.svg';
import ZeroswapSVG from '@site/static/assets/website/showcase/raw/zeroswap.svg';

// Internal Configs
import { device } from '@site/src/config/globals';

/**
 * edit this to change the order
 */

// first array is first row in pattern
// second array is first 2 icons and last 3 icons on second row in pattern
// third array is grid icons to left of text - 3rd and 4th row(left of text and button)
// fourth array is grid icons to left of text - 3rd and 4th row(right of text and button)
// fifth array is first 2 icons and last 3 icons on 5th row in pattern
// sixth array is 6th(last) row in pattern

// last 2 arrays are designs after grids in first and second row middle icons has formed

const partnerSortedGroup = [
  [BanklessSVG, DecentralandSVG, SnapshotSVG, EnsSVG, MakerdaoSVG, EarnfiSVG],
  [ShapeshiftSVG, UniswapSVG, AaveSVG, RektSVG, CryptocurrencyjobsSVG],
  [SushiSVG, UnstoppableSVG, ProofofhumanitySVG, MaHadaoSVG],
  [LensProtocolSVG, EthSVG, PolyChainMonstersSVG, PooltogetherSVG],
  [MetastableSVG, InchSVG, CoindeskSVG, IdlefinanceSVG, KybernetworkSVG],
  [AtlendisSVG, ApeswapSVG, LepasaMetaverseSVG, OrionprotocolSVG, LifiSVG, DDSVG],
  [SnapshotSVG, EnsSVG, BancorSVG, AragonSVG],
  [QidaoSVG, DydxSVG, LepasaMetaverseSVG, OrionprotocolSVG],
];

function PartnerChannels() {
  // Internationalization
  const { t } = useTranslation();

  const isLargeScreen = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [active, setActive] = useState(false);
  // const itemRef = useRef();
  // const onScreen = useOnScreen(itemRef);
  const { ref: itemRef, inView: myElementIsVisible } = useInView();

  const [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow, seventhRow, eighthRow] = partnerSortedGroup;

  const onEnter = () => {
    gsap.to('#item-0', { width: '0px', height: '0px' });
    gsap.to('#item-1', { width: '0px', height: '0px' });
    gsap.to('#item-2', { width: '0px', height: '0px' });
    gsap.to('#item-3', { width: '0px', height: '0px' });
    gsap.to('#item-4', { width: '0px', height: '0px' });
    gsap.to('#item-5', { width: '0px', height: '0px' });

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

    gsap.to('#fourItem-0', { width: '178px', height: '178px' });
    gsap.to('#fourItem-1', { width: '0px', height: '0px' });
    gsap.to('#fourRowItem-0', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-1', { width: '178px', height: '178px' });
    gsap.to('#fourRowItem-2', { width: '178px', height: '178px' });

    gsap.to('#sixitem-0', { width: '0px', height: '0px' });
    gsap.to('#sixitem-1', { width: '0px', height: '0px' });
    gsap.to('#sixitem-2', { width: '0px', height: '0px' });
    gsap.to('#sixitem-3', { width: '0px', height: '0px' });
  };

  useLayoutEffect(() => {
    onEnter();
  }, []);

  useEffect(() => {
    if (myElementIsVisible) {
      onLeave();
      setActive(true);
    }

    if (!myElementIsVisible) {
      onEnter();
      setActive(false);
    }
  }, [myElementIsVisible]);

  const onLeave = () => {
    gsap.to('#item-0', { width: '96px', height: '96px' });
    gsap.to('#item-1', { width: '96px', height: '96px' });
    gsap.to('#item-2', { width: '96px', height: '96px' });
    gsap.to('#item-3', { width: '96px', height: '96px' });
    gsap.to('#item-4', { width: '96px', height: '96px' });
    gsap.to('#item-5', { width: '96px', height: '96px' });

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
    gsap.to('#fourItem-1', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-0', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-1', { width: '96px', height: '96px' });
    gsap.to('#fourRowItem-2', { width: '96px', height: '96px' });

    gsap.to('sixitem-0', { width: '96px', height: '96px' });
    gsap.to('sixitem-1', { width: '96px', height: '96px' });
    gsap.to('sixitem-2', { width: '96px', height: '96px' });
    gsap.to('sixitem-3', { width: '96px', height: '96px' });

    gsap.to('plain-logo', { width: '96px', height: '96px' });
  };

  return (
    <>
      <SpanV2>{`<<<<Will Implement>>>>`}</SpanV2>
      {/* <PartnerRow
        justifyContent="flex-start"
        padding="150px 0px 14px 0px"
      >
        {isLargeScreen
          ? firstRow?.slice(0, 2).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem plain-logo"
              />
            ))
          : firstRow?.map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`item-${idx}`}
              />
            ))}
      </PartnerRow>

      {!isLargeScreen && (
        <NewRow>
          <PartnerRow>
            {secondRow?.slice(0, 2).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`secondItem-${idx}`}
              />
            ))}
          </PartnerRow>

          <GridRow>
            {active
              ? seventhRow.slice(2, 4).map((SVGIcon, idx) => (
                  <SVGIcon
                    key={idx}
                    className="marqueeItem plain-logo"
                  />
                ))
              : seventhRow.map((SVGIcon, idx) => (
                  <SVGIcon
                    key={idx}
                    className="marqueeItem plain-logo"
                  />
                ))}
          </GridRow>

          <PartnerRow>
            {secondRow?.slice(2, 5).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`secondRowItem-${idx}`}
              />
            ))}
          </PartnerRow>
        </NewRow>
      )}

      {isLargeScreen && (
        <PartnerRow justifyContent="flex-start">
          {secondRow?.slice(0, 3).map((SVGIcon, idx) => (
            <SVGIcon
              key={idx}
              className="marqueeItem plain-logo"
            />
          ))}
        </PartnerRow>
      )}

      {isLargeScreen && (
        <PartnerRow justifyContent="flex-start">
          {thirdRow?.slice(0, 3).map((SVGIcon, idx) => (
            <SVGIcon
              key={idx}
              className="marqueeItem plain-logo"
            />
          ))}
        </PartnerRow>
      )}

      <Body active={active}>
        <TriRow>
          <main className={active ? 'grid' : 'main'}>
            {thirdRow?.slice(0, 2).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`thirdItem-${idx}`}
              />
            ))}
          </main>
          <div className="grid">
            {thirdRow?.slice(2, 4).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`thirdRowItem-${idx}`}
              />
            ))}
          </div>
        </TriRow>

        <GridItem
          display="flex"
          flexDirection="column"
        >
          <ResponsiveH2
            color="#121315"
            fontSize="40px"
            fontWeight="700"
            letterSpacing="-0.02em"
            margin="0px 0px"
            lineHeight="110%"
          >
            {t('home.partners-section.partner-channels-title')}
          </ResponsiveH2>

          <SpanV2
            color="#303C5E"
            size="19px"
            weight="300"
            spacing="-0.03em"
            lineHeight="160%"
            textAlign={isMobile ? 'center' : 'initial'}
          >
            {t('home.partners-section.partner-channels-description')}
          </SpanV2>

          <LinkToV2
            to="/frens"
            title={t('home.partners-section.partner-channels-button-alt')}
            background="#DD44B9"
            borderRadius="16px"
            padding="14px 32px"
            fontSize="18px"
            fontWeight="500"
            letterSpacing="-0.03em"
            lineHeight="26px"
            margin="15px 0px 0px 0px"
            alignSelf="center"
          >
            {t('home.partners-section.partner-channels-button')}
          </LinkToV2>
        </GridItem>
        <TriRow>
          <div className="grid">
            {fourthRow?.slice(2, 4).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`thirdRowItem-${idx}`}
              />
            ))}
          </div>

          <div className={active ? 'grid' : 'main'}>
            {fourthRow?.slice(0, 2).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`fourItem-${idx}`}
              />
            ))}
          </div>
        </TriRow>
      </Body>

      {!isLargeScreen && (
        <NewSecondRow>
          <NewPartnerRow>
            {fifthRow?.slice(0, 2).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`secondItem-${idx}`}
              />
            ))}
          </NewPartnerRow>

          <GridRow>
            {active
              ? eighthRow.slice(0, 2).map((SVGIcon, idx) => (
                  <SVGIcon
                    key={idx}
                    className="marqueeItem"
                  />
                ))
              : eighthRow.map((SVGIcon, idx) => (
                  <SVGIcon
                    key={idx}
                    className="marqueeItem"
                  />
                ))}
          </GridRow>

          <NewPartnerRow>
            {fifthRow?.slice(2, 5).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`secondRowItem-${idx}`}
              />
            ))}
          </NewPartnerRow>
        </NewSecondRow>
      )}

      {isLargeScreen && (
        <PartnerRow justifyContent="flex-start">
          {fourthRow?.slice(0, 3).map((SVGIcon, idx) => (
            <SVGIcon
              key={idx}
              className="marqueeItem plain-logo"
            />
          ))}
        </PartnerRow>
      )}

      {isLargeScreen && (
        <PartnerRow justifyContent="flex-start">
          {fifthRow?.slice(0, 3).map((SVGIcon, idx) => (
            <SVGIcon
              key={idx}
              className="marqueeItem plain-logo"
            />
          ))}
        </PartnerRow>
      )}

      <PartnerRow
        justifyContent="flex-start"
        padding="0px 0px 120px 0px"
        ref={itemRef}
      >
        {isLargeScreen
          ? sixthRow?.slice(0, 2).map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
              />
            ))
          : sixthRow?.map((SVGIcon, idx) => (
              <SVGIcon
                key={idx}
                className="marqueeItem"
                id={`item-${idx}`}
              />
            ))}
      </PartnerRow> */}
    </>
  );
}

const PartnerRow = styled(ItemHV2)`
  margin: 14px auto 0px auto;
  gap: 28px;
  align-items: flex-end !important;
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
`;

const NewSecondRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto 0px auto;
  align-items: flex-start !important;
  height: 100%;
  gap: 28px;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  // margin: 7px 0px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Tag = styled.div`
  visibility: hidden;
`;

const TriRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  height: 100%;
  align-items: center !important;

  .grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 28px;
    width: 96px !important;
  }

  .main {
    width: 178px !important;
    & svg.marqueeItem {
      width: 178px;
      height: 178px;
    }
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const GridItem = styled(ItemHV2)`
  span {
    width: 80%;
    text-align: center;

    @media ${device.tablet} {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    padding: 30px 0px;
  }
`;

const ResponsiveH2 = styled(H2V2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 14px auto;
`;

export default React.memo(PartnerChannels);
