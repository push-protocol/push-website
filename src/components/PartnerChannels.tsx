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
import { ReactComponent as DDSVG } from '@site/src/assets/partners/D_D.svg';
import { ReactComponent as AaveSVG } from '@site/src/assets/partners/aave.svg';
import { ReactComponent as AngleLabsSVG } from '@site/src/assets/partners/anglelabs.svg';
import { ReactComponent as ApeswapSVG } from '@site/src/assets/partners/apeswap.svg';
import { ReactComponent as AragonSVG } from '@site/src/assets/partners/aragon.svg';
import { ReactComponent as AtlendisSVG } from '@site/src/assets/partners/atlendis.svg';
import { ReactComponent as BancorSVG } from '@site/src/assets/partners/bancor.svg';
import { ReactComponent as BanklessSVG } from '@site/src/assets/partners/bankless.svg';
import { ReactComponent as CoindeskSVG } from '@site/src/assets/partners/coindesk.svg';
import { ReactComponent as CryptocurrencyjobsSVG } from '@site/src/assets/partners/cryptocurrencyjobs.svg';
import { ReactComponent as DecentralandSVG } from '@site/src/assets/partners/decentraland.svg';
import { ReactComponent as DydxSVG } from '@site/src/assets/partners/dydx.svg';
import { ReactComponent as EarnfiSVG } from '@site/src/assets/partners/earnifi.svg';
import { ReactComponent as EnsSVG } from '@site/src/assets/partners/ens.svg';
import { ReactComponent as EthSVG } from '@site/src/assets/partners/ethsign.svg';
import { ReactComponent as FlipsideSVG } from '@site/src/assets/partners/flipside.svg';
import { ReactComponent as GoodGhostingSVG } from '@site/src/assets/partners/goodghosting.svg';
import { ReactComponent as GroSVG } from '@site/src/assets/partners/gro.svg';
import { ReactComponent as IdlefinanceSVG } from '@site/src/assets/partners/idlefinance.svg';
import { ReactComponent as InchSVG } from '@site/src/assets/partners/inch.svg';
import { ReactComponent as KybernetworkSVG } from '@site/src/assets/partners/kybernetwork.svg';
import { ReactComponent as LensProtocolSVG } from '@site/src/assets/partners/lensprotocol.svg';
import { ReactComponent as LepasaMetaverseSVG } from '@site/src/assets/partners/lepasametaverse.svg';
import { ReactComponent as LifiSVG } from '@site/src/assets/partners/lifi.svg';
import { ReactComponent as MaHadaoSVG } from '@site/src/assets/partners/mahadao.svg';
import { ReactComponent as MakerdaoSVG } from '@site/src/assets/partners/makerdao.svg';
import { ReactComponent as MeanFinanceSVG } from '@site/src/assets/partners/meanfinance.svg';
import { ReactComponent as MetastableSVG } from '@site/src/assets/partners/metastable.svg';
import { ReactComponent as MoverSVG } from '@site/src/assets/partners/mover.svg';
import { ReactComponent as OasisSVG } from '@site/src/assets/partners/oasis.svg';
import { ReactComponent as OrionprotocolSVG } from '@site/src/assets/partners/orionprotocol.svg';
import { ReactComponent as PodsfinanceSVG } from '@site/src/assets/partners/podsfinance.svg';
import { ReactComponent as PolyChainMonstersSVG } from '@site/src/assets/partners/polychainmonsters.svg';
import { ReactComponent as PooltogetherSVG } from '@site/src/assets/partners/pooltogether.svg';
import { ReactComponent as ProofofhumanitySVG } from '@site/src/assets/partners/proofofhumanity.svg';
import { ReactComponent as QidaoSVG } from '@site/src/assets/partners/qidao.svg';
import { ReactComponent as RektSVG } from '@site/src/assets/partners/rekt.svg';
import { ReactComponent as SecondliveSVG } from '@site/src/assets/partners/secondlive.svg';
import { ReactComponent as ShapeshiftSVG } from '@site/src/assets/partners/shapeshift.svg';
import { ReactComponent as SnapshotSVG } from '@site/src/assets/partners/snapshot.svg';
import { ReactComponent as SushiSVG } from '@site/src/assets/partners/sushi.svg';
import { ReactComponent as SymphonyFinanceSVG } from '@site/src/assets/partners/symphonyfinance.svg';
import { ReactComponent as ThenaSVG } from '@site/src/assets/partners/thena.svg';
import { ReactComponent as UniswapSVG } from '@site/src/assets/partners/uniswap.svg';
import { ReactComponent as UnstoppableSVG } from '@site/src/assets/partners/unstoppable.svg';
import { ReactComponent as WormbatSVG } from '@site/src/assets/partners/wormbat.svg';
import { ReactComponent as ZeroswapSVG } from '@site/src/assets/partners/zeroswap.svg';
import { H2V2, ItemHV2, LinkToV2, SpanV2 } from '@site/src/components/SharedStylingV2';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

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
      <PartnerRow
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
        {/* <Tag ref={itemRef}>new</Tag> */}
      </PartnerRow>
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
